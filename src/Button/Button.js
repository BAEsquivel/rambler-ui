/**
 * Компонент кнопки
 * Скетч: https://app.zeplin.io/project.html#pid=5788d29d450aa06b5691c466&sid=5788d41ba2e261bb69d6c68e
 */

import React, { PureComponent, cloneElement, isValidElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Spinner from '../Spinner'
import { injectSheet } from '../theme'
import { middleMixin, isolateMixin, fontSmoothingMixin, ifMobile, focusSourceMixin } from '../utils/mixins'
import '../utils/focus-source'

@injectSheet((theme) => ({
  button: {
    ...isolateMixin,
    fontFamily: theme.button.fontFamily,
    fontStyle: theme.button.fontStyle,
    fontWeight: theme.button.fontWeight,
    letterSpacing: theme.button.letterSpacing,
    textTransform: theme.button.textTransform,
    textAlign: 'center',
    cursor: 'pointer',
    boxSizing: 'border-box',
    textDecoration: 'none !important',
    outline: 'none !important',
    position: 'relative',
    display: 'inline-block',
    border: 'none',
    userSelect: 'none',
    borderRadius: theme.button.borderRadius,
    '&, & *': {
      transition: 'background-color .2s, border .2s, box-shadow .2s'
    },
    '&:before, &:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      pointerEvents: 'none',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      border: '1px solid transparent',
      transition: 'all .2s',
      borderRadius: theme.button.borderRadius
    },
    '&[disabled]': { pointerEvents: 'none' },
    '&::-moz-focus-inner': {
      border: 'none !important',
      outline: 'none !important'
    }
  },
  isRounded: {
    '&$button, &:before, &:after': {
      borderRadius: '9999px !important'
    }
  },
  isLoading: {
    pointerEvents: 'none',
    opacity: 0
  },
  loader: {
    fontSize: 3,
    ...ifMobile({
      fontSize: 4
    })
  },
  content: {
    ...middleMixin,
    ...fontSmoothingMixin,
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    position: 'relative',
    padding: '0 20px',
    ...ifMobile({
      padding: '0 25px'
    })
  },
  block: {
    display: 'block',
    width: '100%'
  },
  'size-medium': {
    fontSize: theme.button.sizes.medium.fontSize,
    ...ifMobile({
      fontSize: theme.button.mobile.sizes.medium.fontSize
    }),
    '& $content': {
      height: theme.button.sizes.medium.height,
      lineHeight: theme.button.sizes.medium.height + 'px',
      ...ifMobile({
        height: theme.button.mobile.sizes.medium.height,
        lineHeight: theme.button.mobile.sizes.medium.height + 'px'
      })
    }
  },
  'size-small': {
    fontSize: theme.button.sizes.small.fontSize,
    ...ifMobile({
      fontSize: theme.button.mobile.sizes.small.fontSize
    }),
    '& $content': {
      height: theme.button.sizes.small.height,
      lineHeight: theme.button.sizes.small.height + 'px',
      ...ifMobile({
        height: theme.button.mobile.sizes.small.height,
        lineHeight: theme.button.mobile.sizes.small.height + 'px'
      })
    }
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    opacity: 0,
    width: '100%',
    cursor: 'pointer'
  },
  icon: {
    display: 'inline-block',
    marginTop: -2,
    transition: 'fill .2s'
  },
  'iconPosition-right': {
    '& $icon': {
      marginLeft: 5,
      ...ifMobile({
        marginLeft: 10
      })
    }
  },
  'iconPosition-left': {
    '& $icon': {
      marginRight: 5,
      ...ifMobile({
        marginRight: 10
      })
    }
  },
  ...['primary', 'secondary', 'outline', 'flat', 'danger'].reduce((result, type) => {
    const conf = theme.button.types[type]
    const offset = conf.outlineOffset || 0

    const setThemeForSelector = (colors, outlineOffset) => ({
      background: colors.background,
      '&, & *': {
        color: colors.text
      },
      '&:before': {
        ...colors.border && {
          borderColor: colors.border
        }
      },
      '&:after': {
        ...colors.outline && {
          left: -outlineOffset,
          right: -outlineOffset,
          top: -outlineOffset,
          bottom: -outlineOffset,
          borderColor: colors.outline,
          borderRadius: theme.button.borderRadius + outlineOffset / 1.5
        }
      },
      '& $icon': {
        fill: colors.icon
      }
    })

    return {
      ...result,
      [`type-${type}`]: {
        '&:active:active': setThemeForSelector(conf.colors.active, offset),
        '&:hover': setThemeForSelector(conf.colors.hover, offset),
        '&[disabled]': setThemeForSelector(conf.colors.disabled, offset),
        ...focusSourceMixin('other', '&:focus', setThemeForSelector(conf.colors.focus, offset)),
        ...setThemeForSelector(conf.colors.default, offset),
        '& $loader': {
          color: conf.colors.default.loader
        }
      }
    }
  }, {})
}), {name: 'Button'})
export default class Button extends PureComponent {

  static propTypes = {
    /**
     * Тип стиля кнопки
     */
    type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'flat', 'danger']),
    /**
     * Если указан href, то кнопка будет ссылкой
     */
    href: PropTypes.string,
    /**
     * Атрибут target для ссылки, если указан атрибут href
     */
    target: PropTypes.string,
    /**
     * Css-класс
     */
    className: PropTypes.string,
    /**
     * Inline-стили
     */
    style: PropTypes.object,
    /**
     * Контент для кнопки
     */
    children: PropTypes.node,
    /**
     * Иконка для кнопки
     */
    icon: PropTypes.node,
    /**
     * Позиция иконки: слева/справа
     */
    iconPosition: PropTypes.oneOf(['left', 'right']),
    /**
     * Размер кнопки
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Обработчик клика
     */
    onClick: PropTypes.func,
    /**
     * Элемент, который содержит контент, например `<Link />`
     * в случае с `react-router`
     */
    container: PropTypes.element,
    /**
     * Элемент, который прозрачно накладывается на кнопку (Например `<input type="file" />`)
     */
    overlay: PropTypes.element,
    /**
     * Отключаем кнопку/ссылку
     */
    disabled: PropTypes.bool,
    /**
     * Отображать кнопку как блочный элемент
     */
    block: PropTypes.bool,
    /**
     * Тип кнопки
     */
    buttonType: PropTypes.string,
    /**
     * Ширина кнопки
     */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Показывать индикатор загрузки
     */
    loading: PropTypes.bool,
    /**
     * Закругленная кнопка
     */
    rounded: PropTypes.bool
  };

  static defaultProps = {
    type: 'primary',
    size: 'medium',
    buttonType: 'button',
    iconPosition: 'left',
    block: false
  };

  get css() {
    return this.props.classes
  }

  renderIcon(icon) {
    if (icon) {
      const {
        theme, size
      } = this.props
      const iconProps = {
        size: theme.button.sizes[size].icon,
        color: null
      }
      const initialProps = icon.props || {}
      const className = classnames(initialProps.className, this.css.icon)
      const resultProps = { ...iconProps, ...initialProps, className }
      return cloneElement(icon, resultProps)
    }
  }

  render() {
    const {
      icon,
      children,
      size,
      type,
      href,
      container,
      buttonType,
      disabled,
      loading,
      block,
      className,
      overlay,
      width,
      iconPosition,
      rounded,
      style = {},
      classes, // eslint-disable-line no-unused-vars
      theme, // eslint-disable-line no-unused-vars
      ...other
    } = this.props

    const css = this.css
    const iconLeft = iconPosition === 'left'
    const iconEl = this.renderIcon(icon)

    const resultStyle = {
      width,
      ...style
    }
    const resultClassName = classnames(
      css.button,
      rounded && css.isRounded,
      css[`type-${type}`],
      css[`size-${size}`],
      css[`iconPosition-${iconPosition}`],
      className,
      {
        [css.block]: block
      }
    )

    const resultChildren = (
      <span className={classnames(css.content, loading && css.isLoading)}>
        { iconLeft && iconEl }
        { children }
        { !iconLeft && iconEl }
        { overlay && cloneElement(overlay, {className: css.overlay}) }
      </span>
    )

    const resultProps = {
      ...other,
      style: resultStyle,
      className: resultClassName,
      disabled: disabled ? 'disabled' : null
    }

    const resultContainer = isValidElement(container) ?
      container : href ?
        <a href={ href } /> : overlay ?
          <div /> : <button type={ buttonType } />

    return cloneElement(
      resultContainer,
      resultProps,
      resultChildren,
      loading && (
        <Spinner className={css.loader} color={null} />
      )
    )
  }
}
