(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"8R63":function(e,t,n){"use strict";n.r(t);var a=n("aArQ"),i=n("GnxA"),r=n("5L7N"),l=n("xwgP"),s=n.n(l),o=n("nWP2"),p=n("pIOA"),c=n("vfEn"),y=n("ynqJ"),u=n.n(y),m=(n("Y0hx"),o.a.Item),E=p.a.TextArea,h={labelCol:{xs:{span:4},sm:{span:2}},wrapperCol:{xs:{span:4},sm:{span:2}}},C=function(e){function t(t){var n;return(n=e.call(this,t)||this).splitPinyinArr=function(e,t){return e.join(t).replace(RegExp(t+"\n"+t),"\n")},n.onTextChange=function(e){n.setState({text:e.target.value})},n.onSplitChange=function(e){n.setState({split:e.target.value})},n.onResultChange=function(e){n.setState({result:e.target.value})},n.onPinyinTone=function(){var e=n.state,t=e.text,a=e.split;n.setState({pinyin:n.splitPinyinArr(u()(t,{style:u.a.STYLE_TONE}),a)})},n.onPinyinToneNum=function(){var e=n.state,t=e.text,a=e.split;n.setState({pinyin:n.splitPinyinArr(u()(t,{style:u.a.STYLE_TONE_NUM}),a)})},n.onPinyinNormal=function(){var e=n.state,t=e.text,a=e.split;n.setState({pinyin:n.splitPinyinArr(u()(t,{style:u.a.STYLE_NORMAL}),a)})},n.onPinyinFirstLetter=function(){var e=n.state,t=e.text,a=e.split;n.setState({pinyin:n.splitPinyinArr(u()(t,{style:u.a.STYLE_FIRST_LETTER}),a)})},n.onPinyinFirstLetterUpper=function(){var e=n.state,t=e.text,a=e.split;n.setState({pinyin:n.splitPinyinArr(u()(t,{style:u.a.STYLE_FIRST_LETTER}),a).toUpperCase()})},n.handleClickUpper=function(){n.setState({pinyin:n.state.pinyin.toUpperCase()})},n.handleClickLower=function(){n.setState({pinyin:n.state.pinyin.toLowerCase()})},n.state={text:"带着希望去旅行，比到达终点更美好\n\n重庆的发展重心在于什么？",split:"-",pinyin:""},n}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.state,t=e.text,n=e.split,a=e.pinyin;return s.a.createElement("div",{className:"atool-pinyin"},s.a.createElement(o.a,null,s.a.createElement(m,null,s.a.createElement(E,{placeholder:"待转换的中文",rows:6,value:t,onChange:this.onTextChange})),s.a.createElement(m,Object.assign({label:"分隔符"},h),s.a.createElement(p.a,{value:n,onChange:this.onSplitChange})),s.a.createElement(m,null,s.a.createElement(c.a,{type:"primary",onClick:this.onPinyinTone},"汉字转拼音（带声调）"),s.a.createElement(c.a,{type:"primary",onClick:this.onPinyinToneNum},"汉字转拼音(数字声调)"),s.a.createElement(c.a,{type:"primary",onClick:this.onPinyinNormal},"汉字转拼音(无声调)"),s.a.createElement(c.a,{type:"primary",onClick:this.onPinyinFirstLetterUpper},"汉字转首字母大写"),s.a.createElement(c.a,{type:"primary",onClick:this.onPinyinFirstLetter},"汉字转首字母小写")),s.a.createElement(m,null,s.a.createElement(E,{placeholder:"转换结果",rows:4,value:a})),s.a.createElement(m,{label:"结果二次处理"},s.a.createElement(c.a,{type:"primary",onClick:this.handleClickUpper},"全大写"),s.a.createElement(c.a,{type:"primary",onClick:this.handleClickLower},"全小写"))))},t}(l.PureComponent);t.default=Object(a.a)(C,i.a)},GnxA:function(e,t,n){"use strict";t.a={id:"Pinyin",icon:"",name:"在线中文汉字转拼音",desc:"目前网络上最准确的汉字转拼音工具，提供各种拼音风格",keywords:["拼音","汉字","中文","在线","准确","网络","工具","风格","提供","目前"],time:"2018-05-12",category:"CONVENIENT",author:"wangziqiang"}},Y0hx:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-pinyin-js-65a20b3819dd2d7a1716.js.map