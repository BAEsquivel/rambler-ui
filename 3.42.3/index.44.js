(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{125:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=o(700),a=o(2),i=(n=a)&&n.__esModule?n:{default:n};function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=i.default.createElement("h4",null,"block, equalWidth"),c=i.default.createElement(r.ToggleOption,{value:"Rambler"},"Rambler&Co"),d=i.default.createElement(r.ToggleOption,{value:"Yandex"},"Yandex"),g=i.default.createElement(r.ToggleOption,{value:"Mail"},"Mail.ru"),f=i.default.createElement(r.ToggleOption,{value:"Google"},"Google"),p=i.default.createElement("h4",null,"disabled, equalWidth"),h=i.default.createElement(r.ToggleOption,{value:"Google"},"Google"),b=i.default.createElement(r.ToggleOption,{value:"Rambler"},"Rambler&Co"),m=i.default.createElement(r.ToggleOption,{value:"Yandex"},"Yandex"),v=i.default.createElement(r.ToggleOption,{value:"Mail"},"Mail.ru"),y=i.default.createElement("h4",null,"size: medium, behavior: toggle"),O=i.default.createElement(r.ToggleOption,{value:"Yandex"},"Yandex"),E=i.default.createElement(r.ToggleOption,{value:"Google"},"Google"),k=i.default.createElement(r.ToggleOption,{value:"Mail"},"Mail.ru"),x=i.default.createElement(r.ToggleOption,{value:"Rambler"},"Rambler&Co"),w=i.default.createElement("h4",null,"variation: transparent"),C=i.default.createElement(r.ToggleOption,{value:"Mail"},"Mail.ru"),T=i.default.createElement(r.ToggleOption,{value:"Yandex"},"Yandex"),_=i.default.createElement(r.ToggleOption,{value:"Rambler"},"Rambler&Co"),j=i.default.createElement(r.ToggleOption,{value:"Google"},"Google"),z=i.default.createElement("h4",null,"variation: transparent, disabled"),M=i.default.createElement(r.ToggleOption,{value:"Rambler"},"Rambler&Co"),P=i.default.createElement(r.ToggleOption,{value:"Mail"},"Mail.ru"),S=i.default.createElement(r.ToggleOption,{value:"Google"},"Google"),R=i.default.createElement(r.ToggleOption,{value:"Yandex"},"Yandex"),W=i.default.createElement("br",null),V=function(e){function t(){var e,o,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,r=Array(l),a=0;a<l;a++)r[a]=arguments[a];return o=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),n.state={toggleValue:"Rambler"},n.onChange=function(e,t){n.setState({toggleValue:t})},u(n,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),l(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("div",{style:{width:480,marginBottom:20}},s,i.default.createElement(r.Toggle,{value:this.state.toggleValue,className:"toggle",onChange:this.onChange,block:!0,equalWidth:!0},c,d,g,f)),i.default.createElement("div",{style:{marginBottom:20}},p,i.default.createElement(r.Toggle,{value:this.state.toggleValue,onChange:this.onChange,disabled:!0,equalWidth:!0},h,b,m,v)),i.default.createElement("div",{style:{marginBottom:20}},y,i.default.createElement(r.Toggle,{value:this.state.toggleValue,onChange:this.onChange,size:"medium",behavior:"toggle"},O,E,k,x)),i.default.createElement("div",{style:{marginBottom:20}},w,i.default.createElement(r.Toggle,{value:this.state.toggleValue,onChange:this.onChange,variation:"transparent"},C,T,_,j)),i.default.createElement("div",{style:{marginBottom:20}},z,i.default.createElement(r.Toggle,{value:this.state.toggleValue,onChange:this.onChange,disabled:!0,variation:"transparent"},M,P,S,R)),W,i.default.createElement("div",null,"this.state.toggleValue: ",i.default.createElement("b",null,this.state.toggleValue)))}}]),t}();t.default=V},698:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(2),i=d(a),u=(d(o(1)),d(o(32))),s=o(35),c=o(83);function d(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=(0,s.injectSheet)(function(e){return{toggleOption:{extend:[c.isolateMixin,c.middleMixin],fontFamily:e.fontFamily,display:"inline-block",textAlign:"center",userSelect:"none",whiteSpace:"nowrap",cursor:"pointer",color:"inherit",outline:"none !important",background:"transparent","&::-moz-focus-inner":{border:"none !important",outline:"none !important"}},"size-small":{fontSize:e.toggle.sizes.small.fontSize,height:e.toggle.sizes.small.height,lineHeight:e.toggle.sizes.small.height-2+"px",padding:"0 "+e.toggle.sizes.small.paddingHr+"px"},"size-medium":{fontSize:e.toggle.sizes.medium.fontSize,height:e.toggle.sizes.medium.height,lineHeight:e.toggle.sizes.medium.height-2+"px",padding:"0 "+e.toggle.sizes.medium.paddingHr+"px"},icon:{display:"inline-block",marginRight:10}}},{name:"ToggleOption"})(n=function(e){function t(){var e,o,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,r=Array(l),a=0;a<l;a++)r[a]=arguments[a];return o=n=g(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),n.onClick=function(e){n.props.onPress(e,n.props.value),n.props.onClick&&n.props.onClick(e)},g(n,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"renderIcon",value:function(e){if(e){var t=this.props,o=t.size,n=t.isSelected,r=t.theme,i=t.classes,s={size:r.toggle.sizes[o].icon,color:n?r.toggle.selectedColor:r.toggle.color},c=e.props||{},d=(0,u.default)(c.className,i.icon),g=l({},s,c,{className:d});return(0,a.cloneElement)(e,g)}}},{key:"render",value:function(){var e=this.props,t=e.icon,o=e.size,n=e.children,r=e.className,a=e.nodeRef,s=e.classes,c=(e.isSelected,e.onPress,e.theme,function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(e,["icon","size","children","className","nodeRef","classes","isSelected","onPress","theme"])),d=(0,u.default)(s.toggleOption,s["size-"+o],r);return i.default.createElement("button",l({type:"button",tabIndex:"0"},c,{className:d,onClick:this.onClick,ref:a}),this.renderIcon(t),n)}}]),t}())||n;f.propTypes={},f.displayName="ruiToggleOption",t.default=f},699:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l,r,a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=o(2),s=f(u),c=(f(o(1)),f(o(32))),d=o(35),g=o(83);function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=new Promise(function(e){"complete"===document.readyState?e():window.addEventListener("load",e)}),b=(0,d.injectSheet)(function(e){return{toggle:{extend:g.isolateMixin,fontFamily:e.fontFamily,display:"inline-block","&$block":{display:"flex"},"&, & *":{transitionDuration:e.toggle.animationDuration+"ms",transitionProperty:"background, opacity, border, box-shadow"}},option:{"&&":{fontFamily:e.fontFamily,textAlign:"center",borderStyle:"solid",color:e.toggle.colors.default.text,borderWidth:1,borderColor:e.toggle.colors.default.border,background:e.toggle.colors.default.background,cursor:"pointer",userSelect:"none",position:"relative",display:"inline-block",marginLeft:-1},"&:first-child":{marginLeft:0,borderTopLeftRadius:e.toggle.borderRadius,borderBottomLeftRadius:e.toggle.borderRadius},"&:last-child":{borderWidth:1,borderTopRightRadius:e.toggle.borderRadius,borderBottomRightRadius:e.toggle.borderRadius},"&:enabled:hover":{zIndex:1},"&:active":{zIndex:1},"&:disabled":{color:e.toggle.colors.disabled.text,cursor:"not-allowed"}},isSelected:{zIndex:2,"&:enabled:hover":{zIndex:3}},regular:i({"& $option:disabled":{borderColor:e.toggle.colors.disabled.border},"& $option:enabled:hover":{borderColor:e.toggle.colors.hover.border,color:e.toggle.colors.checked.text}},(0,g.focusSourceMixin)("other","& $option:focus",{color:e.toggle.colors.focus.text}),{"& $option:active":{color:e.toggle.colors.active.text,background:e.toggle.colors.active.background},"& $isSelected:enabled":{borderColor:e.toggle.colors.checked.border,color:e.toggle.colors.checked.text},"& $isSelected:enabled:hover":{borderColor:e.toggle.colors.checkedHover.border,color:e.toggle.colors.checkedHover.text},"& $isSelected:disabled":{background:e.toggle.colors.checkedDisabled.background}}),transparent:i({"& $isSelected":{background:e.toggle.transparentColors.checked.background},"& $option:enabled:hover":{background:e.toggle.transparentColors.hover.background}},(0,g.focusSourceMixin)("other","& $option:focus",{color:e.toggle.colors.focus.text}),{"& $option:disabled":{borderColor:e.toggle.transparentColors.disabled.border}}),block:{flexDirection:"row",flexWrap:"nowrap"},equalWidth:{"& $option":{flex:1,flexBasis:0}},"behavior-radio":{"& $isSelected:enabled":{cursor:"default"}}}},{name:"Toggle"})((r=l=function(e){function t(){var e,o,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,r=Array(l),a=0;a<l;a++)r[a]=arguments[a];return o=n=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),n.state={value:null,minWidth:0},n.optionsElements=[],n.addElement=function(e){n.optionsElements.push(e)},n.onValueChange=function(e,t){t===n.value&&"toggle"===n.props.behavior&&(t=null),n.setValue(t),n.props.onChange&&n.props.onChange(e,t)},p(n,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),a(t,[{key:"componentWillMount",value:function(){this.setValue(this.props.value)}},{key:"componentWillReceiveProps",value:function(e){this.setValue(e.value)}},{key:"componentDidMount",value:function(){var e=this;this.shouldCalcMinWidth()&&h.then(function(){e.setState({minWidth:e.calcMinWidth()})})}},{key:"calcMinWidth",value:function(){return this.optionsElements.reduce(function(e,t){return Math.max(t?t.offsetWidth:0,e)},0)}},{key:"shouldCalcMinWidth",value:function(){return this.props.equalWidth&&!this.props.block}},{key:"setValue",value:function(e){this.value!==e&&(this.value=e,this.setState({value:e}))}},{key:"render",value:function(){var e=this,t=this.props,o=t.children,n=t.size,l=t.block,r=t.equalWidth,a=t.behavior,d=t.disabled,g=t.variation,f=t.className,p=t.classes,h=(t.theme,function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(t,["children","size","block","equalWidth","behavior","disabled","variation","className","classes","theme"]));this.optionsElements=[];var b=0,m=s.default.Children.map(o,function(t){if(!t.type||"ruiToggleOption"!==t.type.displayName)throw new Error("Child component should be instance of <ToggleOption />");var o=t.props.value,l=o===e.state.value;return(0,u.cloneElement)(t,{size:n,disabled:d,isSelected:l,"aria-pressed":l,key:void 0!==t.key?t.key:"string"==typeof o||"number"==typeof o?o:b++,onPress:e.onValueChange,nodeRef:e.shouldCalcMinWidth()?e.addElement:null,className:(0,c.default)(p.option,l&&p.isSelected,t.props.className),style:i({},t.props.style,{minWidth:e.state.minWidth})})}),v=(0,c.default)(f,p.toggle,p["behavior-"+a],l&&p.block,p[g],r&&p.equalWidth);return s.default.createElement("div",i({},h,{className:v}),m)}}]),t}(),l.defaultProps={size:"small",behavior:"radio",block:!1,equalWidth:!1,disabled:!1,variation:"regular"},n=r))||n;t.default=b,b.propTypes={}},700:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(699);Object.defineProperty(t,"Toggle",{enumerable:!0,get:function(){return r(n).default}});var l=o(698);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"ToggleOption",{enumerable:!0,get:function(){return r(l).default}})}}]);