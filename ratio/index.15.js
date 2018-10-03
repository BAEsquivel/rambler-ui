(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{213:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.meta=void 0;var o=m(t(2)),i=t(528),s=m(t(529)),a=m(t(531)),r=m(t(530)),c=m(t(811)),l=m(t(810)),p=m(t(809));function m(n){return n&&n.__esModule?n:{default:n}}var u=e.meta={title:"Snackbar",toc:["Пример","Пример с декоратором","Свойства  <Snackbar />"]},d=o.default.createElement(a.default,{code:c.default}),b=o.default.createElement(a.default,{code:l.default}),k=o.default.createElement(r.default,{code:p.default});e.default=function(n){var e=n.components,t=function(n,e){var t={};for(var o in n)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}(n,["components"]);return o.default.createElement(i.MDXTag,{name:"wrapper",Layout:(0,s.default)(u)(function(n){return n.children}),layoutProps:t,components:e},o.default.createElement(i.MDXTag,{name:"h3",components:e},"Пример"),d,o.default.createElement(i.MDXTag,{name:"h3",components:e},"Пример с декоратором"),b,o.default.createElement(i.MDXTag,{name:"h3",components:e},"Свойства ",o.default.createElement(i.MDXTag,{name:"inlineCode",components:e,parentName:"h3"},"<Snackbar />")),k)}},809:function(n,e){n.exports="import React, {PureComponent, cloneElement} from 'react'\nimport PropTypes from 'prop-types'\nimport classnames from 'classnames'\nimport ClearIcon from '../icons/forms/ClearIcon'\nimport VisibilityAnimation from '../VisibilityAnimation'\nimport OnClickOutside from '../OnClickOutside'\nimport renderToLayer from '../hoc/render-to-layer'\nimport zIndexStack from '../hoc/z-index-stack'\nimport {SNACKBAR_ZINDEX} from '../constants/z-indexes'\nimport {injectSheet} from '../theme'\nimport {isolateMixin, middleMixin, ifDesktop} from '../utils/mixins'\n\n@zIndexStack(SNACKBAR_ZINDEX)\n@renderToLayer\n@injectSheet(\n  theme => ({\n    snackbar: {\n      extend: [isolateMixin, middleMixin],\n      fontFamily: theme.fontFamily,\n      position: 'fixed',\n      boxSizing: 'border-box',\n      display: 'flex',\n      justifyContent: 'flex-start',\n      alignItems: 'center',\n      padding: theme.snackbar.sizes.medium.padding,\n      width: '100%',\n      lineHeight: 1.15,\n      color: theme.snackbar.colors.text,\n      fontSize: theme.snackbar.fontSize,\n      opacity: 0,\n      transitionDuration: theme.snackbar.animationDuration,\n      transitionProperty: 'top, bottom, opacity',\n      ...ifDesktop({\n        width: 'auto',\n        minWidth: 350,\n        maxWidth: 750,\n        borderRadius: theme.snackbar.borderRadius\n      })\n    },\n    top: {\n      top: -10,\n      ...ifDesktop({\n        top: 0\n      }),\n      '&$isVisible': {\n        top: 0,\n        ...ifDesktop({\n          top: 10\n        })\n      }\n    },\n    bottom: {\n      bottom: -10,\n      ...ifDesktop({\n        bottom: 0\n      }),\n      '&$isVisible': {\n        bottom: 0,\n        ...ifDesktop({\n          bottom: 10\n        })\n      }\n    },\n    isVisible: {\n      opacity: 1\n    },\n    left: {\n      left: 0,\n      ...ifDesktop({\n        left: 10\n      })\n    },\n    center: {\n      left: '50%',\n      transform: 'translateX(-50%)'\n    },\n    right: {\n      right: 0,\n      ...ifDesktop({\n        right: 10\n      })\n    },\n    main: {\n      backgroundColor: theme.snackbar.colors.background.main\n    },\n    primary: {\n      backgroundColor: theme.snackbar.colors.background.primary\n    },\n    success: {\n      backgroundColor: theme.snackbar.colors.background.success\n    },\n    danger: {\n      backgroundColor: theme.snackbar.colors.background.danger\n    },\n    icon: {\n      extend: middleMixin,\n      marginRight: 15\n    },\n    content: {\n      flexGrow: 1,\n      textAlign: 'left'\n    },\n    button: {\n      boxSizing: 'border-box',\n      outline: 'none',\n      border: 0,\n      borderRadius: theme.snackbar.borderRadius,\n      height: 20,\n      lineHeight: 20 + 'px',\n      marginLeft: 15,\n      padding: '0 10px',\n      backgroundColor: 'transparent',\n      color: theme.snackbar.colors.actionButton,\n      fontSize: theme.snackbar.fontSize,\n      textAlign: 'center',\n      textTransform: 'uppercase',\n      letterSpacing: 1,\n      cursor: 'pointer',\n      transitionDuration: '.2s',\n      transitionProperty: 'background-color, border',\n      '&:hover:not(:active)': {\n        backgroundColor: 'rgba(0, 0, 0, 0.05)'\n      },\n      '&:focus:not(:active)': {\n        border: '1px solid'\n      },\n      '&:active': {\n        backgroundColor: 'rgba(0, 0, 0, 0.1)'\n      }\n    },\n    close: {\n      composes: '$button',\n      extend: middleMixin,\n      borderRadius: '50%',\n      width: 20,\n      padding: 0,\n      lineHeight: 0\n    },\n    small: {\n      padding: theme.snackbar.sizes.small.padding\n    }\n  }),\n  {name: 'Snackbar'}\n)\nexport default class Snackbar extends PureComponent {\n  static propTypes = {\n    /**\n     * Css-класс\n     */\n    className: PropTypes.string,\n    /**\n     * Inline-стили\n     */\n    style: PropTypes.object,\n    /**\n     * Контент снэкбара\n     */\n    children: PropTypes.node.isRequired,\n    /**\n     * Контролирует видимость снэкбара\n     */\n    isOpened: PropTypes.bool,\n    /**\n     * Тип цвета снэкбара\n     */\n    type: PropTypes.oneOf(['main', 'primary', 'success', 'danger']),\n    /**\n     * Иконка\n     */\n    icon: PropTypes.node,\n    /**\n     * Кнопка действия\n     */\n    actionButton: PropTypes.string,\n    /**\n     * Позиция по оси X\n     */\n    positionX: PropTypes.oneOf(['left', 'center', 'right']),\n    /**\n     * Позиция по оси Y\n     */\n    positionY: PropTypes.oneOf(['top', 'bottom']),\n    /**\n     * Кнопка закрытия\n     */\n    showClose: PropTypes.bool,\n    /**\n     * Закрытие по клику вне\n     */\n    closeOnClickOutside: PropTypes.bool,\n    /**\n     * Таймаут авто-закрытия\n     */\n    autoCloseDuration: PropTypes.number,\n    /**\n     * Коллбек вызывающийся при нажатии на кнопку действия\n     */\n    onAction: PropTypes.func,\n    /**\n     * Коллбек вызывающийся при всех вариантах закрытия (автоматически проставляется, если используется `@provideSnackbar`)\n     */\n    onRequestClose: PropTypes.func,\n    /**\n     * Высота снэкбара\n     */\n    size: PropTypes.oneOf(['small', 'medium'])\n  }\n\n  static defaultProps = {\n    type: 'main',\n    isOpened: false,\n    positionX: 'center',\n    positionY: 'bottom',\n    showClose: false,\n    closeOnClickOutside: false,\n    autoCloseDuration: 4000,\n    onAction: () => {},\n    onRequestClose: () => {},\n    size: 'medium'\n  }\n\n  componentWillUnmount() {\n    this.onWillInvisible()\n  }\n\n  onWillVisible = () => {\n    if (this.props.autoCloseDuration)\n      this.autoCloseTimeout = setTimeout(() => {\n        this.props.onRequestClose()\n      }, this.props.autoCloseDuration)\n  }\n\n  onWillInvisible = () => {\n    clearTimeout(this.autoCloseTimeout)\n  }\n\n  onClickOutside = () => {\n    if (this.state.isVisible) this.props.onRequestClose()\n  }\n\n  render() {\n    const {\n      isOpened,\n      children,\n      className,\n      positionX,\n      positionY,\n      type,\n      style,\n      theme,\n      icon,\n      showClose,\n      actionButton,\n      onAction,\n      onRequestClose,\n      closeOnClickOutside,\n      onClose,\n      size,\n      classes\n    } = this.props\n\n    const content = (\n      <VisibilityAnimation\n        isVisible={isOpened}\n        activeClassName={classes.isVisible}\n        animationDuration={theme.snackbar.animationDuration}\n        onWillVisible={this.onWillVisible}\n        onWillInvisible={this.onWillInvisible}\n        onInvisible={onClose}>\n        <div\n          style={style}\n          className={classnames(\n            classes.snackbar,\n            classes[positionX],\n            classes[positionY],\n            classes[type],\n            size === 'small' && classes.small,\n            className\n          )}>\n          {icon && (\n            <div className={classes.icon}>\n              {cloneElement(icon, {\n                color: icon.props.color || theme.snackbar.colors.text\n              })}\n            </div>\n          )}\n          <div className={classes.content}>{children}</div>\n          {actionButton && (\n            <button type=\"button\" className={classes.button} onClick={onAction}>\n              {actionButton}\n            </button>\n          )}\n          {showClose && (\n            <button\n              type=\"button\"\n              className={classes.close}\n              onClick={onRequestClose}>\n              <ClearIcon size={10} color={theme.snackbar.colors.text} />\n            </button>\n          )}\n        </div>\n      </VisibilityAnimation>\n    )\n\n    if (closeOnClickOutside)\n      return (\n        <OnClickOutside handler={this.onClickOutside}>{content}</OnClickOutside>\n      )\n\n    return content\n  }\n}\n"},810:function(n,e){n.exports='import React, {Component} from \'react\'\nimport Button from \'rambler-ui/Button\'\nimport {Snackbar, provideSnackbar} from \'rambler-ui/Snackbar\'\n\nclass WithSnackbar extends Component {\n  openAlert = () => {\n    this.props.openSnackbar(\n      <Snackbar positionY="top" showClose type="danger">\n        При удалении почты произошла ошибка\n      </Snackbar>\n    )\n  }\n\n  openConfirm = () => {\n    const snackbar = this.props.openSnackbar(\n      <Snackbar\n        positionX="right"\n        autoCloseDuration={0}\n        actionButton="Ok"\n        onAction={() => snackbar.close()}>\n        Вы готовы удалить почту?\n      </Snackbar>\n    )\n  }\n\n  openSnackbar = () => {\n    this.props.openSnackbar(\n      <Snackbar\n        positionY="top"\n        positionX="left"\n        autoCloseDuration={3000}\n        size="small"\n        type="danger">\n        Я маленький снэкбар\n      </Snackbar>\n    )\n  }\n\n  render() {\n    return (\n      <div>\n        <div style={{marginBottom: 20}}>\n          <Button type="danger" onClick={this.openAlert}>\n            Алерт\n          </Button>\n          <Button\n            type="outline"\n            style={{marginLeft: 20}}\n            onClick={this.openConfirm}>\n            Подтверждение\n          </Button>\n          <Button\n            type="primary"\n            style={{marginLeft: 20}}\n            onClick={this.openSnackbar}>\n            Маленький снэкбар\n          </Button>\n        </div>\n      </div>\n    )\n  }\n}\n\nconst WithProvidedSnackbar = provideSnackbar(WithSnackbar)\n\nexport default function SnackbarDecoratorExample() {\n  return <WithProvidedSnackbar />\n}\n'},811:function(n,e){n.exports="import React, {Component} from 'react'\nimport Button from 'rambler-ui/Button'\nimport QuestionIcon from 'rambler-ui/icons/forms/QuestionIcon'\nimport {Snackbar} from 'rambler-ui/Snackbar'\n\nexport default class SnackbarExample extends Component {\n  state = {\n    baseIsOpened: false,\n    withDelayIsOpened: false,\n    withIconIsOpened: false\n  }\n\n  openSnackbar = type => {\n    this.setState({\n      [`${type}IsOpened`]: true\n    })\n  }\n\n  closeSnackbar = type => {\n    this.setState({\n      [`${type}IsOpened`]: false\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <Snackbar\n          isOpened={this.state.baseIsOpened}\n          onRequestClose={() => this.closeSnackbar('base')}>\n          Hi\n        </Snackbar>\n\n        <Snackbar\n          isOpened={this.state.withDelayIsOpened}\n          type=\"success\"\n          positionX=\"left\"\n          showClose={true}\n          autoCloseDuration={0}\n          onRequestClose={() => this.closeSnackbar('withDelay')}>\n          Почта удалена\n        </Snackbar>\n\n        <Snackbar\n          isOpened={this.state.withIconIsOpened}\n          type=\"primary\"\n          positionY=\"top\"\n          positionX=\"right\"\n          autoCloseDuration={0}\n          icon={<QuestionIcon color=\"white\" />}\n          actionButton=\"Ok\"\n          onAction={() => this.closeSnackbar('withIcon')}\n          onRequestClose={() => this.closeSnackbar('withIcon')}>\n          Вы готовы удалить почту?\n        </Snackbar>\n\n        <div style={{marginBottom: 20}}>\n          <Button onClick={() => this.openSnackbar('base')}>\n            Базовый снэкбар\n          </Button>\n          <Button\n            type=\"secondary\"\n            style={{marginLeft: 20}}\n            onClick={() => this.openSnackbar('withDelay')}>\n            Слева окна без автозакрытия\n          </Button>\n          <Button\n            type=\"flat\"\n            style={{marginLeft: 20}}\n            onClick={() => this.openSnackbar('withIcon')}>\n            С иконкой и кнопкой действия\n          </Button>\n        </div>\n      </div>\n    )\n  }\n}\n"}}]);