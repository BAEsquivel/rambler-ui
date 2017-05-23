import React from 'react'
import Avatar from '../Avatar'
import { mount, withTheme, getStyles } from '../../utils/test-utils'

describe('<Avatar />', () => {

  it('should apply default styles', () => {
    const wrapper = mount(
      withTheme(
        <Avatar src="image.png"/>
      )
    )

    const root = wrapper.find(Avatar)
    const rootStyles = getStyles(root)
    const image = root.find('img')
    const imageStyles = getStyles(image)

    expect(rootStyles.display).toEqual('inline-block')
    expect(rootStyles.width).toEqual('40px')
    expect(rootStyles.height).toEqual('40px')
    expect(rootStyles['vertical-align']).toEqual('middle')

    expect(image.getDOMNode().getAttribute('src')).toEqual('image.png')
    expect(imageStyles.width).toEqual('40px')
    expect(imageStyles.height).toEqual('40px')
    expect(imageStyles['border-top-left-radius']).toEqual('50%')
    expect(imageStyles['border-top-right-radius']).toEqual('50%')
    expect(imageStyles['border-bottom-left-radius']).toEqual('50%')
    expect(imageStyles['border-bottom-right-radius']).toEqual('50%')
  })

  it('should be a rounded', () => {
    const wrapper = mount(
      withTheme(
        <Avatar shape="rounded" src="image.png"/>
      )
    )

    const root = wrapper.find(Avatar)
    const imageStyles = getStyles(root.find('img'))

    expect(imageStyles['border-top-left-radius']).toEqual('7%')
    expect(imageStyles['border-top-right-radius']).toEqual('7%')
    expect(imageStyles['border-bottom-left-radius']).toEqual('7%')
    expect(imageStyles['border-bottom-right-radius']).toEqual('7%')
  })

  it('should be a square', () => {
    const wrapper = mount(
      withTheme(
        <Avatar shape="square" src="image.png"/>
      )
    )

    const root = wrapper.find(Avatar)
    const imageStyles = getStyles(root.find('img'))

    expect(imageStyles['border-top-left-radius']).toEqual('0px')
    expect(imageStyles['border-top-right-radius']).toEqual('0px')
    expect(imageStyles['border-bottom-left-radius']).toEqual('0px')
    expect(imageStyles['border-bottom-right-radius']).toEqual('0px')
  })

  it('should apply custom size', () => {
    const wrapper = mount(
      withTheme(
        <Avatar size={75} src="image.png"/>
      )
    )

    const root = wrapper.find(Avatar)
    const rootStyles = getStyles(root)
    const imageStyles = getStyles(root.find('img'))

    expect(rootStyles.width).toEqual('75px')
    expect(rootStyles.height).toEqual('75px')

    expect(imageStyles.width).toEqual('75px')
    expect(imageStyles.height).toEqual('75px')
  })

  it('should append className', () => {
    const wrapper = mount(
      withTheme(
        <Avatar className="avatar" src="image.png"/>
      )
    )

    const root = wrapper.find(Avatar)

    expect(root.hasClass('avatar')).toBe(true)
  })

  it('should append style', () => {
    const wrapper = mount(
      withTheme(
        <Avatar style={{ marginLeft: 10 }} src="image.png"/>
      )
    )

    const root = wrapper.find(Avatar)
    const rootStyles = getStyles(root)

    expect(rootStyles['margin-left']).toEqual('10px')
  })

  it('should append backgroundColor', () => {
    const color = 'rgb(255, 255, 255)'

    const wrapper = mount(
      withTheme(
        <Avatar backgroundColor={color} src="image.png"/>
      )
    )

    const root = wrapper.find(Avatar)
    const rootStyles = getStyles(root)

    expect(rootStyles['background-color']).toEqual(color)
  })


  it('should append profile icon', () => {
    const wrapper = mount(
      withTheme(
        <Avatar profileType="facebook" src="image.png"/>
      )
    )

    const root = wrapper.find(Avatar)
    const iconStyles = getStyles(root.find('svg'))
    const iconContainerStyles = getStyles(root.find('img + div'))

    expect(iconStyles.fill).toEqual('#ffffff')
    expect(iconStyles.width).toEqual('10px')
    expect(iconStyles.height).toEqual('10px')

    expect(iconContainerStyles.position).toEqual('absolute')
    expect(iconContainerStyles.width).toEqual('16px')
    expect(iconContainerStyles.height).toEqual('16px')
    expect(iconContainerStyles['background-color']).toEqual('rgb(70, 97, 163)')
  })

})
