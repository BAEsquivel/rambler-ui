(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{224:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.meta=void 0;var o=p(t(2)),i=t(528),s=p(t(529)),r=p(t(531)),a=p(t(530)),l=p(t(841)),c=p(t(840));function p(n){return n&&n.__esModule?n:{default:n}}var m=e.meta={title:"Hint",toc:["Пример","Свойства  <Hint />"]},d=o.default.createElement(r.default,{code:l.default}),h=o.default.createElement(a.default,{code:c.default});e.default=function(n){var e=n.components,t=function(n,e){var t={};for(var o in n)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}(n,["components"]);return o.default.createElement(i.MDXTag,{name:"wrapper",Layout:(0,s.default)(m)(function(n){return n.children}),layoutProps:t,components:e},o.default.createElement(i.MDXTag,{name:"h3",components:e},"Пример"),d,o.default.createElement(i.MDXTag,{name:"h3",components:e},"Свойства ",o.default.createElement(i.MDXTag,{name:"inlineCode",components:e,parentName:"h3"},"<Hint />")),h)}},840:function(n,e){n.exports="import React, {PureComponent, cloneElement} from 'react'\nimport PropTypes from 'prop-types'\nimport classnames from 'classnames'\nimport QuestionIcon from '../icons/forms/QuestionIcon'\nimport VisibilityAnimation from '../VisibilityAnimation'\nimport {FixedOverlay} from '../Overlay'\nimport {POINTS_X} from '../constants/overlay'\nimport {injectSheet} from '../theme'\nimport {isolateMixin} from '../utils/mixins'\n\n@injectSheet(\n  theme => ({\n    hint: {\n      extend: isolateMixin,\n      fontFamily: theme.fontFamily,\n      position: 'relative',\n      top: -14,\n      color: theme.hint.colors.text,\n      borderRadius: theme.hint.borderRadius,\n      boxSizing: 'border-box',\n      boxShadow: theme.hint.boxShadow,\n      paddingTop: 15,\n      paddingBottom: 20,\n      width: 275,\n      backgroundColor: theme.hint.colors.background,\n      fontSize: theme.hint.fontSize,\n      lineHeight: 1.31,\n      opacity: 0.01,\n      transitionDuration: `${theme.hint.animationDuration}ms`,\n      transitionProperty: 'opacity'\n    },\n    isVisible: {\n      opacity: 1\n    },\n    icon: {\n      position: 'absolute',\n      top: 14\n    },\n    left: {\n      left: -15,\n      paddingLeft: 47,\n      paddingRight: 24,\n      '& $icon': {\n        left: 15\n      }\n    },\n    right: {\n      left: 15,\n      paddingLeft: 24,\n      paddingRight: 47,\n      '& $icon': {\n        right: 15\n      }\n    }\n  }),\n  {name: 'HintContent'}\n)\nclass HintContent extends PureComponent {\n  static propTypes = {\n    className: PropTypes.string,\n    style: PropTypes.object,\n    icon: PropTypes.node.isRequired,\n    children: PropTypes.node.isRequired,\n    isVisible: PropTypes.bool.isRequired,\n    pointX: PropTypes.oneOf(POINTS_X),\n    onMouseEnter: PropTypes.func,\n    onMouseLeave: PropTypes.func,\n    onBecomeVisible: PropTypes.func,\n    onBecomeInvisible: PropTypes.func\n  }\n\n  render() {\n    const {\n      isVisible,\n      className,\n      style,\n      icon,\n      children,\n      pointX,\n      theme,\n      classes,\n      onMouseEnter,\n      onMouseLeave,\n      onBecomeVisible,\n      onBecomeInvisible\n    } = this.props\n\n    const iconProps = icon.props || {}\n\n    const anchor = cloneElement(icon, {\n      className: classnames(classes.icon, iconProps.className),\n      color: iconProps.color || theme.hint.colors.icon\n    })\n\n    return (\n      <VisibilityAnimation\n        isVisible={isVisible}\n        activeClassName={classes.isVisible}\n        animationDuration={theme.hint.animationDuration}\n        onVisible={onBecomeVisible}\n        onInvisible={onBecomeInvisible}>\n        <div\n          className={classnames(classes.hint, classes[pointX], className)}\n          style={style}\n          onMouseEnter={onMouseEnter}\n          onMouseLeave={onMouseLeave}>\n          {anchor}\n          {children}\n        </div>\n      </VisibilityAnimation>\n    )\n  }\n}\n\n@injectSheet(\n  () => ({\n    icon: {\n      display: 'inline-block'\n    }\n  }),\n  {name: 'Hint'}\n)\nexport default class Hint extends PureComponent {\n  static propTypes = {\n    /**\n     * Класс якоря\n     */\n    className: PropTypes.string,\n    /**\n     * Стили якоря (Иконки)\n     */\n    style: PropTypes.object,\n    /**\n     * Иконка, по-умолчанию `<QuestionIcon />`\n     */\n    icon: PropTypes.node.isRequired,\n    /**\n     * Класс контента подсказки\n     */\n    contentClassName: PropTypes.string,\n    /**\n     * Стили контента посказки\n     */\n    contentStyle: PropTypes.object,\n    /**\n     * Контент для подсказки\n     */\n    children: PropTypes.node.isRequired,\n    /**\n     * Флаг показа подсказки. Если ничего не указано, подсказка будет показываться при hover\n     */\n    isOpened: PropTypes.bool,\n    /**\n     * Позиция тултипа по оси X: left - слева от якоря, right - справа\n     */\n    positionX: PropTypes.oneOf(['left', 'right']),\n    /**\n     * Скрывать при скролле страницы\n     */\n    closeOnScroll: PropTypes.bool\n  }\n\n  static defaultProps = {\n    positionX: 'right',\n    closeOnScroll: true,\n    icon: <QuestionIcon size={16} />\n  }\n\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      isOpened: props.isOpened || false\n    }\n  }\n\n  componentWillReceiveProps({isOpened}) {\n    if (isOpened !== undefined && isOpened !== this.props.isOpened)\n      if (isOpened) this.show()\n      else this.hide()\n  }\n\n  show = () => {\n    if (this.state.isOpened) clearTimeout(this.hideTimeout)\n    else\n      this.setState({\n        isOpened: true\n      })\n  }\n\n  hide = () => {\n    if (!this.state.isOpened) return\n    clearTimeout(this.hideTimeout)\n    this.hideTimeout = setTimeout(() => {\n      this.setState({\n        isOpened: false\n      })\n    }, 60)\n  }\n\n  render() {\n    const {\n      className,\n      style,\n      contentClassName,\n      contentStyle,\n      icon,\n      children,\n      positionX,\n      theme,\n      classes,\n      closeOnScroll\n    } = this.props\n\n    const pointX = positionX === 'left' ? 'right' : 'left'\n    const iconProps = icon.props || {}\n\n    const anchor = cloneElement(icon, {\n      style,\n      className: classnames(classes.icon, className),\n      color: iconProps.color || theme.hint.colors.icon,\n      onMouseEnter: this.show,\n      onMouseLeave: this.hide\n    })\n\n    return (\n      <FixedOverlay\n        isOpened={this.state.isOpened}\n        anchor={anchor}\n        content={\n          <HintContent\n            className={contentClassName}\n            style={contentStyle}\n            icon={icon}\n            onMouseEnter={this.show}\n            onMouseLeave={this.hide}>\n            {children}\n          </HintContent>\n        }\n        autoPositionX={true}\n        anchorPointX={pointX}\n        contentPointX={pointX}\n        anchorPointY=\"top\"\n        contentPointY=\"top\"\n        cachePositionOptions={false}\n        closeOnScroll={closeOnScroll}\n        onContentClose={this.hide}\n      />\n    )\n  }\n}\n"},841:function(n,e){n.exports="import React, {Component} from 'react'\nimport Hint from 'rambler-ui/Hint'\nimport InfoIcon from 'rambler-ui/icons/forms/InfoIcon'\n\nexport default class HintExample extends Component {\n  render() {\n    return (\n      <div style={{display: 'flex', alignItems: 'center'}}>\n        <div style={{width: '33%', display: 'flex', alignItems: 'center'}}>\n          Подсказка справа\n          <Hint style={{marginLeft: 15}}>\n            Номер телефона поможет вам восстановить пароль от почты\n          </Hint>\n        </div>\n\n        <div style={{width: '33%', display: 'flex', alignItems: 'center'}}>\n          Кастомная иконка\n          <Hint icon={<InfoIcon color=\"magenta\" />} style={{marginLeft: 15}}>\n            Номер телефона поможет вам восстановить пароль от почты\n          </Hint>\n        </div>\n\n        <div\n          style={{\n            width: '33%',\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'flex-end'\n          }}>\n          Подсказка слева\n          <Hint style={{marginLeft: 15}}>\n            Номер телефона поможет вам восстановить пароль от почты\n          </Hint>\n        </div>\n      </div>\n    )\n  }\n}\n"}}]);