"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5283],{55283:function(n,t,e){e.d(t,{HC:function(){return _},HS:function(){return D},IN:function(){return s},Kf:function(){return R},Nk:function(){return O},PB:function(){return h},PY:function(){return b},WC:function(){return A},fk:function(){return y},gE:function(){return C},j1:function(){return N},jv:function(){return m},nz:function(){return E},oh:function(){return f},qn:function(){return T},t1:function(){return L},u2:function(){return p},y9:function(){return S}});var o=e(38626),r=e(44897),i=e(44425),c=e(42631),d=e(8059),a=e(70515),u=e(47041),l=e(91437),f=68,s=1.5*a.iI,A=3*a.iI;function p(n){var t=d.eW;return i.tf.CALLBACK===n?t=d.J:i.tf.CHART===n||i.tf.CONDITIONAL===n?t=d.Hv:i.tf.CUSTOM===n?t=d.AK:i.tf.DATA_EXPORTER===n?t=d.Sr:i.tf.DATA_LOADER===n?t=d.R2:i.tf.DBT===n?t=d.J:i.tf.EXTENSION===n?t=d.FI:i.tf.GLOBAL_DATA_PRODUCT===n?t=d.yr:i.tf.SCRATCHPAD===n?t=d.Hv:i.tf.SENSOR===n?t=d.rK:i.tf.MARKDOWN===n?t=d.RK:i.tf.TRANSFORMER===n&&(t=d.eW),t}function T(n,t){var e,o,c=((null===t||void 0===t||null===(e=t.theme)||void 0===e?void 0:e.borders)||r.Z.borders).light,d=((null===t||void 0===t||null===(o=t.theme)||void 0===o?void 0:o.monotone)||r.Z.monotone).grey500,a=t||{},u=a.blockColor,l=a.isSelected,f=a.theme;return l?c=(f||r.Z).content.active:i.tf.TRANSFORMER===n||u===i.Lq.PURPLE?(c=(f||r.Z).accent.purple,d=(f||r.Z).accent.purpleLight):i.tf.DATA_EXPORTER===n||u===i.Lq.YELLOW?(c=(f||r.Z).accent.yellow,d=(f||r.Z).accent.yellowLight):i.tf.DATA_LOADER===n||u===i.Lq.BLUE?(c=(f||r.Z).accent.blue,d=(f||r.Z).accent.blueLight):i.tf.MARKDOWN===n?(c=(f||r.Z).accent.sky,d=(f||r.Z).accent.skyLight):i.tf.SENSOR===n||u===i.Lq.PINK?(c=(f||r.Z).accent.pink,d=(f||r.Z).accent.pinkLight):i.tf.DBT===n?(c=(f||r.Z).accent.dbt,d=(f||r.Z).accent.dbtLight):i.tf.EXTENSION===n||u===i.Lq.TEAL?(c=((null===f||void 0===f?void 0:f.accent)||r.Z.accent).teal,d=((null===f||void 0===f?void 0:f.accent)||r.Z.accent).tealLight):i.tf.CALLBACK===n?(c=((null===f||void 0===f?void 0:f.accent)||r.Z.accent).rose,d=((null===f||void 0===f?void 0:f.accent)||r.Z.accent).roseLight):i.tf.CONDITIONAL===n||i.tf.SCRATCHPAD===n||u===i.Lq.GREY||i.tf.CUSTOM===n&&!u?(c=(f||r.Z).content.default,d=(f||r.Z).accent.contentDefaultTransparent):[i.tf.CHART,i.tf.GLOBAL_DATA_PRODUCT].includes(n)&&!u&&(c=(f||r.Z).monotone.white,d=(f||r.Z).monotone.whiteTransparent),{accent:c,accentLight:d}}var R=(0,o.css)([""," "," "," "," "," "," ",""],(0,l.eR)(),(function(n){return!n.selected&&!n.hasError&&"\n    border-color: ".concat(T(n.blockType,n).accentLight,";\n  ")}),(function(n){return n.selected&&!n.hasError&&"\n    border-color: ".concat(T(n.blockType,n).accent,";\n  ")}),(function(n){return!n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.accent||r.Z.accent).negativeTransparent,";\n  ")}),(function(n){return n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.borders||r.Z.borders).danger,";\n  ")}),(function(n){return n.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(n){return n.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),O=o.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),b=o.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],R,c.n_,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme||r.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(T(n.blockType,n).accent,";\n    }\n  ")})),h=o.default.div.withConfig({displayName:"indexstyle__HeaderHorizontalBorder",componentId:"sc-s5rj34-2"})(["",""],(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme||r.Z).borders.darkLight,";\n  ")})),E=o.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-3"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;"," "," "," ",""],R,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,1*a.iI,1*a.iI,(function(n){return"\n    background-color: ".concat((n.theme||r.Z).background.dashboard,";\n  ")}),(function(n){return"undefined"!==typeof n.zIndex&&null!==n.zIndex&&"\n    z-index: ".concat(6+(n.zIndex||0),";\n  ")}),(function(n){return!n.noSticky&&"\n    // This is to hide the horizontal scrollbar in the block header when sideBySide is enabled,\n    // and the screen width is too small.\n    position: sticky;\n    top: -5px;\n  "}),(function(n){return n.noSticky&&"\n    ".concat((0,u.y$)(),"\n\n    overflow-x: auto;\n    overflow-y: visible;\n  ")})),D=o.default.div.withConfig({displayName:"indexstyle__SubheaderStyle",componentId:"sc-s5rj34-4"})([""," "," ",""],(function(n){return!n.darkBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).darkLight,";\n  ")}),(function(n){return n.darkBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).medium,";\n  ")}),(function(n){return!n.noBackground&&"\n    background-color: ".concat((n.theme||r.Z).background.dashboard,";\n  ")})),m=o.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-5"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;position:relative;"," "," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],R,c.M8,c.mP,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme.background||r.Z.background).codeTextarea,";\n  ")}),(function(n){return!n.noPadding&&"\n    padding-bottom: ".concat(a.iI,"px;\n    padding-top: ").concat(a.iI,"px;\n  ")}),(function(n){return n.lightBackground&&"\n    background-color: ".concat((n.theme||r.Z).background.content,";\n  ")}),(function(n){return!n.hideBorderBottom&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n    overflow: hidden;\n  ")})),C=o.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-6"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;&:hover{"," .block-divider-inner{","}}"," "," "," ",""],2*a.iI,(function(n){return n.additionalZIndex>0&&"\n      z-index: ".concat(8+n.additionalZIndex,";\n    ")}),(function(n){return"\n        background-color: ".concat((n.theme.text||r.Z.text).fileBrowser,";\n      ")}),(function(n){return!n.height&&"\n    height: ".concat(2*a.iI,"px;\n  ")}),(function(n){return n.height&&"\n    height: ".concat(n.height,"px;\n  ")}),(function(n){return!n.bottom&&"\n    bottom: ".concat(.5*a.iI,"px;\n  ")}),(function(n){return"undefined"!==typeof n.bottom&&"\n    bottom: ".concat(n.bottom,"px;\n  ")})),L=o.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-7"})(["height 1px;width:100%;position:absolute;z-index:-1;"," ",""],(function(n){return!n.top&&"\n    top: ".concat(1.5*a.iI,"px;\n  ")}),(function(n){return"undefined"!==typeof n.top&&"\n    top: ".concat(n.top,"px;\n  ")})),S=o.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-8"})([""," ",""],(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).medium,";\n    padding-left: ").concat(n.normalPadding?a.iI:f,"px;\n  ")}),(function(n){return!n.noMargin&&"\n    margin-bottom: ".concat(1*a.iI,"px;\n    padding-bottom: ").concat(1*a.iI,"px;\n  ")})),_=o.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-9"})(["bottom:","px;left:","px;position:absolute;"],1*a.iI,f),y=o.default.div.withConfig({displayName:"indexstyle__ScrollColunnsContainerStyle",componentId:"sc-s5rj34-10"})(["position:relative;",""],(function(n){return"\n    z-index: ".concat((null===n||void 0===n?void 0:n.zIndex)||1,";\n  ")})),N=o.default.div.attrs((function(n){var t=n.height,e=n.left,o=n.right,r=n.top;return{style:{position:"fixed",height:t,width:n.width,left:e,right:o,top:r,zIndex:(n.zIndex||0)+2}}})).withConfig({displayName:"indexstyle__ScrollColunnStyle",componentId:"sc-s5rj34-11"})([""])},44425:function(n,t,e){e.d(t,{$W:function(){return C},DA:function(){return D},GJ:function(){return h},HX:function(){return y},J8:function(){return _},L8:function(){return a},LE:function(){return R},Lk:function(){return Z},Lq:function(){return O},M5:function(){return E},Q3:function(){return L},Qj:function(){return N},Ut:function(){return P},V4:function(){return I},VZ:function(){return S},dO:function(){return T},f2:function(){return x},iZ:function(){return g},qC:function(){return b},t6:function(){return u},tf:function(){return p}});var o,r,i,c,d,a,u,l=e(75582),f=e(82394);function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function A(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){(0,f.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(a||(a={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(u||(u={}));var p,T=(o={},(0,f.Z)(o,u.MARKDOWN,"MD"),(0,f.Z)(o,u.PYTHON,"PY"),(0,f.Z)(o,u.R,"R"),(0,f.Z)(o,u.SQL,"SQL"),(0,f.Z)(o,u.YAML,"YAML"),o),R=(r={},(0,f.Z)(r,u.MARKDOWN,"Markdown"),(0,f.Z)(r,u.PYTHON,"Python"),(0,f.Z)(r,u.R,"R"),(0,f.Z)(r,u.SQL,"SQL"),(0,f.Z)(r,u.YAML,"YAML"),r);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.GLOBAL_DATA_PRODUCT="global_data_product",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(p||(p={}));var O,b=(i={},(0,f.Z)(i,p.CUSTOM,p.CUSTOM),(0,f.Z)(i,p.DBT,p.DBT),i),h=Object.entries(p).reduce((function(n,t){var e=(0,l.Z)(t,2),o=e[0],r=e[1];return A(A({},n),{},(0,f.Z)({},r,o))}),{}),E=[p.CALLBACK,p.CONDITIONAL,p.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(O||(O={}));var D,m,C=[p.CHART,p.CUSTOM,p.DATA_EXPORTER,p.DATA_LOADER,p.SCRATCHPAD,p.SENSOR,p.MARKDOWN,p.TRANSFORMER],L=[p.CUSTOM,p.DATA_EXPORTER,p.DATA_LOADER,p.SCRATCHPAD,p.SENSOR,p.MARKDOWN,p.TRANSFORMER],S=[p.DATA_EXPORTER,p.DATA_LOADER],_=[p.DATA_EXPORTER,p.DATA_LOADER,p.TRANSFORMER],y=[p.DATA_EXPORTER,p.DATA_LOADER,p.DBT,p.TRANSFORMER],N=[p.CHART,p.SCRATCHPAD,p.SENSOR,p.MARKDOWN],g=[p.CALLBACK,p.CHART,p.EXTENSION,p.SCRATCHPAD,p.MARKDOWN],Z=[p.CUSTOM,p.DATA_EXPORTER,p.DATA_LOADER,p.SENSOR,p.TRANSFORMER];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(D||(D={})),function(n){n.BLOCK_FILE="block_file",n.CUSTOM_BLOCK_TEMPLATE="custom_block_template",n.MAGE_TEMPLATE="mage_template"}(m||(m={}));var x=[p.CUSTOM,p.DATA_EXPORTER,p.DATA_LOADER,p.TRANSFORMER],I=(c={},(0,f.Z)(c,p.CALLBACK,"Callback"),(0,f.Z)(c,p.CHART,"Chart"),(0,f.Z)(c,p.CONDITIONAL,"Conditional"),(0,f.Z)(c,p.CUSTOM,"Custom"),(0,f.Z)(c,p.DATA_EXPORTER,"Data exporter"),(0,f.Z)(c,p.DATA_LOADER,"Data loader"),(0,f.Z)(c,p.DBT,"DBT"),(0,f.Z)(c,p.EXTENSION,"Extension"),(0,f.Z)(c,p.GLOBAL_DATA_PRODUCT,"Global data product"),(0,f.Z)(c,p.MARKDOWN,"Markdown"),(0,f.Z)(c,p.SCRATCHPAD,"Scratchpad"),(0,f.Z)(c,p.SENSOR,"Sensor"),(0,f.Z)(c,p.TRANSFORMER,"Transformer"),c),P=[p.DATA_LOADER,p.TRANSFORMER,p.DATA_EXPORTER,p.SENSOR];d={},(0,f.Z)(d,p.DATA_EXPORTER,"DE"),(0,f.Z)(d,p.DATA_LOADER,"DL"),(0,f.Z)(d,p.SCRATCHPAD,"SP"),(0,f.Z)(d,p.SENSOR,"SR"),(0,f.Z)(d,p.MARKDOWN,"MD"),(0,f.Z)(d,p.TRANSFORMER,"TF")}}]);