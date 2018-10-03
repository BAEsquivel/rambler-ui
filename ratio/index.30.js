(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{228:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.meta=void 0;var t=h(i(2)),s=i(528),o=h(i(529)),c=h(i(531)),a=h(i(530)),r=h(i(852)),l=h(i(851));function h(e){return e&&e.__esModule?e:{default:e}}var d=n.meta={title:"Checkbox",toc:["Пример","Свойства  <Checkbox />"]},m=t.default.createElement(c.default,{code:r.default}),k=t.default.createElement(a.default,{code:l.default});n.default=function(e){var n=e.components,i=function(e,n){var i={};for(var t in e)n.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t]);return i}(e,["components"]);return t.default.createElement(s.MDXTag,{name:"wrapper",Layout:(0,o.default)(d)(function(e){return e.children}),layoutProps:i,components:n},t.default.createElement(s.MDXTag,{name:"h3",components:n},"Пример"),m,t.default.createElement(s.MDXTag,{name:"h3",components:n},"Свойства ",t.default.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"<Checkbox />")),k)}},851:function(e,n){e.exports="import React, {Component} from 'react'\nimport PropTypes from 'prop-types'\nimport classnames from 'classnames'\nimport TickIcon from '../icons/forms/TickIcon'\nimport TickIconSmall from './TickIconSmall'\nimport {isolateMixin, focusSourceMixin} from '../utils/mixins'\nimport {injectSheet} from '../theme'\nimport '../utils/focus-source'\n\nconst setThemeForSelector = colors => ({\n  background: colors.background,\n  borderColor: colors.border,\n  color: colors.tick\n})\n\nconst tickStyle = {\n  fill: null,\n  width: null,\n  height: null\n}\n\n@injectSheet(\n  theme => {\n    const checkboxTheme = theme.checkbox\n    const {regular, awesome} = checkboxTheme.types\n    return {\n      checkbox: {\n        extend: isolateMixin,\n        fontFamily: theme.fontFamily,\n        fontSize: checkboxTheme.fontSize,\n        position: 'relative',\n        display: 'inline-block',\n        verticalAlign: 'top',\n        cursor: 'pointer',\n        userSelect: 'none',\n        transition: `color ${checkboxTheme.animationDuration}ms`\n      },\n      isDisabled: {\n        cursor: 'not-allowed',\n        pointerEvents: 'none'\n      },\n      regular: {\n        color: regular.colors.default.text,\n        '&$isDisabled': {\n          color: regular.colors.disabled.text\n        },\n        '& $fake': setThemeForSelector(regular.colors.default),\n        '&$isEnabled:hover $fake': setThemeForSelector(regular.colors.hover),\n        '&$isEnabled:active $fake': setThemeForSelector(regular.colors.active),\n        '&$isDisabled $fake': setThemeForSelector(regular.colors.disabled),\n        '&$isChecked $fake': setThemeForSelector(regular.colors.checked),\n        ...focusSourceMixin(\n          'other',\n          '& $real:focus ~ $fake',\n          setThemeForSelector(regular.colors.focus)\n        )\n      },\n      awesome: {\n        color: awesome.colors.default.text,\n        '&$isDisabled': {\n          color: awesome.colors.disabled.text\n        },\n        '& $fake': setThemeForSelector(awesome.colors.default),\n        '&$isEnabled:hover $fake': setThemeForSelector(awesome.colors.hover),\n        '&&$isChecked $fake, &&$indeterminate $fake': setThemeForSelector(\n          awesome.colors.checked\n        ),\n        '&$isEnabled$isChecked:hover $fake, &$isEnabled$indeterminate:hover $fake': setThemeForSelector(\n          awesome.colors.checkedHover\n        ),\n        '&$isDisabled $fake': setThemeForSelector(awesome.colors.disabled),\n        '&$isDisabled$isChecked $fake, &$isDisabled$indeterminate $fake': setThemeForSelector(\n          awesome.colors.checkedDisabled\n        )\n      },\n      fake: {\n        display: 'block',\n        boxSizing: 'border-box',\n        position: 'absolute',\n        borderRadius: checkboxTheme.borderRadius,\n        borderStyle: 'solid',\n        borderWidth: 1,\n        lineHeight: 0,\n        transitionDuration: checkboxTheme.animationDuration,\n        transitionProperty: 'border-color, background-color, color',\n        '&:before': {\n          position: 'absolute',\n          content: '\"\"',\n          opacity: 0,\n          top: 0,\n          right: 0,\n          bottom: 0.5,\n          left: 0,\n          background: 'currentColor',\n          height: 2,\n          margin: 'auto 2px',\n          borderRadius: 1,\n          transform: 'scaleX(0.4)',\n          transitionDuration: checkboxTheme.animationDuration,\n          transitionProperty: 'transform, opacity'\n        },\n        '$indeterminate &:before': {\n          opacity: 1,\n          transform: 'scaleX(1)'\n        },\n        '$iconright &': {\n          right: 0\n        },\n        '$iconleft &': {\n          left: 0\n        }\n      },\n      real: {\n        position: 'absolute',\n        opacity: 0,\n        appearance: 'none',\n        pointerEvents: 'none'\n      },\n      label: {\n        fontSize: checkboxTheme.fontSize,\n        fontWeight: 'normal',\n        display: 'inline-block'\n      },\n      tick: {\n        position: 'absolute',\n        fill: 'currentColor',\n        opacity: 0,\n        transitionDuration: checkboxTheme.animationDuration,\n        transitionProperty: 'transform, opacity',\n        '$isChecked &': {\n          opacity: 1\n        }\n      },\n      isEnabled: {},\n      isChecked: {},\n      indeterminate: {},\n      iconright: {},\n      iconleft: {},\n      ...['medium', 'small'].reduce(\n        (result, size) => ({\n          ...result,\n          [size]: {\n            '&$checkbox': {\n              lineHeight: checkboxTheme.sizes[size].size + 'px'\n            },\n            '& $fake': {\n              top:\n                size === 'small'\n                  ? Math.round(\n                    (checkboxTheme.sizes[size].lineHeight -\n                        checkboxTheme.sizes[size].size) /\n                        2\n                  )\n                  : Math.round(\n                    (checkboxTheme.sizes[size].lineHeight -\n                        checkboxTheme.sizes[size].size) /\n                        2\n                  ) - 1,\n              width: checkboxTheme.sizes[size].size,\n              height: checkboxTheme.sizes[size].size\n            },\n            '& $tick': {\n              top:\n                Math.round(\n                  (checkboxTheme.sizes[size].size -\n                    checkboxTheme.sizes[size].tickSize) /\n                    2\n                ) - 1,\n              left:\n                Math.round(\n                  (checkboxTheme.sizes[size].size -\n                    checkboxTheme.sizes[size].tickSize) /\n                    2\n                ) - 1,\n              width: checkboxTheme.sizes[size].tickSize,\n              height: checkboxTheme.sizes[size].tickSize,\n              transform:\n                size === 'small'\n                  ? `translateY(-${checkboxTheme.sizes[size].tickSize * 0.3}px)`\n                  : `translateY(-${checkboxTheme.sizes[size].tickSize *\n                      0.5}px)`,\n              '$isChecked&': {\n                transform: 'translateY(0)'\n              }\n            },\n            '& $label': {\n              lineHeight: checkboxTheme.sizes[size].lineHeight + 'px',\n              '$iconright&': {\n                paddingRight:\n                  checkboxTheme.sizes[size].size +\n                  checkboxTheme.sizes[size].labelMargin\n              },\n              '$iconleft&': {\n                paddingLeft:\n                  checkboxTheme.sizes[size].size +\n                  checkboxTheme.sizes[size].labelMargin\n              }\n            }\n          }\n        }),\n        {}\n      )\n    }\n  },\n  {name: 'Checkbox'}\n)\nexport default class Checkbox extends Component {\n  static propTypes = {\n    /**\n     * Имя чекбокса\n     */\n    name: PropTypes.string,\n    /**\n     * Отключение чекбокса\n     */\n    disabled: PropTypes.bool,\n    /**\n     * CSS-класс контейнера\n     */\n    className: PropTypes.string,\n    /**\n     * Стили контейнера\n     */\n    style: PropTypes.object,\n    /**\n     * C какой стороны показывать иконку\n     */\n    iconPosition: PropTypes.oneOf(['left', 'right']),\n    /**\n     * Поставить галочку изначально\n     */\n    checked: PropTypes.bool,\n    /**\n     * Состояние indeterminate\n     */\n    indeterminate: PropTypes.bool,\n    /**\n     * Колбек отрабатывающий при изменении checkbox'a\n     * `onCheck(event, checked)`\n     * Принимает параметры: DOM-события и флаг включения/отключения чекбокса\n     */\n    onCheck: PropTypes.func,\n    /**\n     * Стиль чекбокса (квадрат с иконкой)\n     */\n    checkboxStyle: PropTypes.object,\n    /**\n     * Класс чекбокса (квадрат с иконкой)\n     */\n    checkboxClassName: PropTypes.string,\n    /**\n     * Стиль лейбла\n     */\n    labelStyle: PropTypes.object,\n    /**\n     * Класс лейбла\n     */\n    labelClassName: PropTypes.string,\n    /**\n     * Разновидность инпута\n     */\n    variation: PropTypes.oneOf(['regular', 'awesome']),\n    /**\n     * Размер чекбокса\n     */\n    size: PropTypes.oneOf(['small', 'medium'])\n  }\n\n  static defaultProps = {\n    iconPosition: 'left',\n    disabled: false,\n    checked: false,\n    indeterminate: false,\n    name: '',\n    variation: 'regular',\n    size: 'medium'\n  }\n\n  onChange = event => {\n    if (this.props.onCheck) this.props.onCheck(event, this.input.checked)\n  }\n\n  componentDidMount() {\n    if (this.input) this.input.indeterminate = this.props.indeterminate\n  }\n\n  componentDidUpdate() {\n    if (this.input) this.input.indeterminate = this.props.indeterminate\n  }\n\n  render() {\n    const {\n      name,\n      style,\n      disabled,\n      iconPosition,\n      className,\n      checkboxClassName,\n      checkboxStyle,\n      labelClassName,\n      labelStyle,\n      children,\n      variation,\n      size,\n      checked,\n      indeterminate,\n      classes,\n      onCheck, // eslint-disable-line no-unused-vars\n      theme, // eslint-disable-line no-unused-vars\n      ...other\n    } = this.props\n\n    const resultClassName = classnames(\n      className,\n      classes.checkbox,\n      classes[variation],\n      classes[size],\n      classes[`icon${iconPosition}`],\n      disabled ? classes.isDisabled : classes.isEnabled,\n      indeterminate ? classes.indeterminate : checked && classes.isChecked\n    )\n\n    return (\n      <label className={resultClassName} style={style}>\n        <input\n          {...other}\n          ref={input => {\n            this.input = input\n          }}\n          checked={checked}\n          name={name}\n          type=\"checkbox\"\n          className={classes.real}\n          disabled={disabled}\n          onChange={this.onChange}\n        />\n        <span\n          className={classnames(classes.fake, checkboxClassName)}\n          style={checkboxStyle}>\n          {size === 'small' ? (\n            <TickIconSmall className={classes.tick} style={tickStyle} />\n          ) : (\n            <TickIcon className={classes.tick} style={tickStyle} />\n          )}\n        </span>\n        <span\n          className={classnames(classes.label, labelClassName)}\n          style={labelStyle}>\n          {children}\n        </span>\n      </label>\n    )\n  }\n}\n"},852:function(e,n){e.exports='import React, {Component} from \'react\'\nimport Checkbox from \'rambler-ui/Checkbox\'\n\nexport default class CheckboxExample extends Component {\n  state = {\n    checked1: true,\n    checked2: false\n  }\n\n  get isAllChecked() {\n    if (this.state.checked1 === true && this.state.checked2 === true)\n      return true\n    if (this.state.checked1 === false && this.state.checked2 === false)\n      return false\n    return undefined\n  }\n\n  get isIndeterminate() {\n    return this.isAllChecked === undefined\n  }\n\n  onCheck1 = (e, checked) => {\n    this.setState({checked1: checked})\n  }\n\n  onCheck2 = (e, checked) => {\n    this.setState({checked2: checked})\n  }\n\n  onAllCheck = () => {\n    const checked = this.isAllChecked === false\n    this.setState({\n      checked1: checked,\n      checked2: checked\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <div style={{display: \'flex\', marginBottom: 20}}>\n          {[\'regular\', \'awesome\'].map(variation => (\n            <div style={{maxWidth: 240, marginRight: 20}} key={variation}>\n              <h4>variation: {variation}</h4>\n              <div>\n                <Checkbox\n                  checked={this.isAllChecked}\n                  indeterminate={this.isIndeterminate}\n                  onCheck={this.onAllCheck}\n                  variation={variation}>\n                  Выбрать все\n                </Checkbox>\n              </div>\n              <div style={{marginTop: 20}}>\n                <Checkbox\n                  checked={this.state.checked1}\n                  onCheck={this.onCheck1}\n                  variation={variation}>\n                  Получать уведомления по почте\n                </Checkbox>\n              </div>\n              <div style={{marginTop: 20}}>\n                <Checkbox\n                  checked={this.state.checked2}\n                  onCheck={this.onCheck2}\n                  variation={variation}>\n                  Получать уведомления на мобильный\n                </Checkbox>\n              </div>\n              <div style={{marginTop: 20}}>\n                <Checkbox\n                  checked={this.state.checked1}\n                  disabled\n                  variation={variation}>\n                  Получать уведомления по почте\n                </Checkbox>\n              </div>\n              <div style={{marginTop: 20}}>\n                <Checkbox\n                  checked={this.state.checked2}\n                  onCheck={this.onCheck2}\n                  variation={variation}\n                  iconPosition="right">\n                  Получать уведомления на мобильный\n                </Checkbox>\n              </div>\n            </div>\n          ))}\n          <div style={{maxWidth: 240, marginRight: 20}}>\n            <h4>size: small</h4>\n            <div>\n              <Checkbox\n                checked={this.isAllChecked}\n                indeterminate={this.isIndeterminate}\n                onCheck={this.onAllCheck}\n                size="small">\n                Выбрать все\n              </Checkbox>\n            </div>\n            <div style={{marginTop: 20}}>\n              <Checkbox\n                checked={this.state.checked1}\n                onCheck={this.onCheck1}\n                size="small">\n                Получать уведомления по почте\n              </Checkbox>\n            </div>\n            <div style={{marginTop: 20}}>\n              <Checkbox\n                checked={this.state.checked2}\n                onCheck={this.onCheck2}\n                size="small">\n                Получать уведомления на мобильный\n              </Checkbox>\n            </div>\n            <div style={{marginTop: 20}}>\n              <Checkbox checked={this.state.checked1} disabled size="small">\n                Получать уведомления по почте\n              </Checkbox>\n            </div>\n            <div style={{marginTop: 20}}>\n              <Checkbox\n                checked={this.state.checked2}\n                onCheck={this.onCheck2}\n                size="small"\n                iconPosition="right">\n                Получать уведомления на мобильный\n              </Checkbox>\n            </div>\n          </div>\n        </div>\n        <div>\n          this.state.checked1: <b>{`${this.state.checked1}`}</b>\n        </div>\n        <div>\n          this.state.checked2: <b>{`${this.state.checked2}`}</b>\n        </div>\n        <div>\n          this.isIndeterminate: <b>{`${this.isIndeterminate}`}</b>\n        </div>\n      </div>\n    )\n  }\n}\n'}}]);