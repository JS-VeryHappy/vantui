(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"295":function(e,t,n){var r=n(379),a=n(384),o=n(369),i=n(398);e.exports=function _slicedToArray(e,t){return r(e)||a(e,t)||o(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},"310":function(e,t,n){var r=n(420),a=n(366),o=n(360),i=n(296)("iterator");e.exports=function(e){if(null!=e)return a(e,i)||a(e,"@@iterator")||o[r(e)]}},"314":function(e,t,n){e.exports=n(345)},"316":function(e,t,n){var r=n(394);e.exports=r},"322":function(e,t,n){e.exports=n(316)},"330":function(e,t,n){var r=n(390);e.exports=r},"345":function(e,t,n){var r=n(346);e.exports=r},"346":function(e,t,n){var r=n(298),a=n(347),o=Array.prototype;e.exports=function(e){var t=e.concat;return e===o||r(o,e)&&t===o.concat?a:t}},"347":function(e,t,n){n(430);var r=n(294);e.exports=r("Array").concat},"367":function(e,t,n){e.exports=n(380)},"368":function(e,t,n){e.exports=n(385)},"369":function(e,t,n){var r=n(388),a=n(370),o=n(371);e.exports=function _unsupportedIterableToArray(e,t){var n;if(e){if("string"==typeof e)return o(e,t);var i=r(n=Object.prototype.toString.call(e)).call(n,8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?a(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},"370":function(e,t,n){e.exports=n(393)},"371":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},"372":function(e,t,n){e.exports=n(400)},"373":function(e,t,n){var r=n(305),a=n(317),o=n(366);e.exports=function(e,t,n){var i,c;a(e);try{if(!(i=o(e,"return"))){if("throw"===t)throw n;return n}i=r(i,e)}catch(e){c=!0,i=e}if("throw"===t)throw n;if(c)throw i;return a(i),n}},"374":function(e,t,n){var r=n(296),a=n(360),o=r("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(a.Array===e||i[o]===e)}},"375":function(e,t,n){var r=n(292),a=n(305),o=n(326),i=n(317),c=n(434),u=n(310),l=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?u(e):t;if(o(n))return i(a(n,e));throw l(c(e)+" is not iterable")}},"376":function(e,t,n){var r=n(296)("iterator"),a=!1;try{var o=0,i={"next":function(){return{"done":!!o++}},"return":function(){a=!0}};i[r]=function(){return this},Array.from(i,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!a)return!1;var n=!1;try{var o={};o[r]=function(){return{"next":function(){return{"done":n=!0}}}},e(o)}catch(e){}return n}},"377":function(e,t,n){"use strict";n.d(t,"a",(function(){return jumpLink}));var r=n(31);function jumpLink(e,t){var n;if(t=null!==(n=t)&&void 0!==n?n:"navigateTo",e)if("navigateTo"===t&&r.default.getCurrentPages().length>9)r.default.redirectTo({"url":e});else switch(t){case"navigateTo":r.default.navigateTo({"url":e});break;case"reLaunch":r.default.reLaunch({"url":e});break;case"redirectTo":r.default.redirectTo({"url":e})}}},"379":function(e,t,n){var r=n(367);e.exports=function _arrayWithHoles(e){if(r(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},"380":function(e,t,n){var r=n(381);e.exports=r},"381":function(e,t,n){var r=n(382);e.exports=r},"382":function(e,t,n){n(383);var r=n(300);e.exports=r.Array.isArray},"383":function(e,t,n){n(286)({"target":"Array","stat":!0},{"isArray":n(333)})},"384":function(e,t,n){var r=n(435),a=n(368);e.exports=function _iterableToArrayLimit(e,t){var n=null==e?null:void 0!==r&&a(e)||e["@@iterator"];if(null!=n){var o,i,c=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(o=n.next()).done)&&(c.push(o.value),!t||c.length!==t);u=!0);}catch(e){l=!0,i=e}finally{try{u||null==n.return||n.return()}finally{if(l)throw i}}return c}},e.exports.default=e.exports,e.exports.__esModule=!0},"385":function(e,t,n){var r=n(386);e.exports=r},"386":function(e,t,n){var r=n(387);n(422),e.exports=r},"387":function(e,t,n){n(425),n(364);var r=n(310);e.exports=r},"388":function(e,t,n){e.exports=n(389)},"389":function(e,t,n){var r=n(330);e.exports=r},"390":function(e,t,n){var r=n(298),a=n(391),o=Array.prototype;e.exports=function(e){var t=e.slice;return e===o||r(o,e)&&t===o.slice?a:t}},"391":function(e,t,n){n(392);var r=n(294);e.exports=r("Array").slice},"392":function(e,t,n){"use strict";var r=n(286),a=n(292),o=n(333),i=n(363),c=n(324),u=n(428),l=n(312),s=n(419),f=n(357),b=n(296),d=n(424),v=n(421),p=d("slice"),h=b("species"),j=a.Array,x=Math.max;r({"target":"Array","proto":!0,"forced":!p},{"slice":function slice(e,t){var n,r,a,b=s(this),d=l(b),p=u(e,d),O=u(void 0===t?d:t,d);if(o(b)&&(n=b.constructor,(i(n)&&(n===j||o(n.prototype))||c(n)&&null===(n=n[h]))&&(n=void 0),n===j||void 0===n))return v(b,p,O);for(r=new(void 0===n?j:n)(x(O-p,0)),a=0;p<O;p++,a++)p in b&&f(r,a,b[p]);return r.length=a,r}})},"393":function(e,t,n){var r=n(316);e.exports=r},"394":function(e,t,n){n(364),n(395);var r=n(300);e.exports=r.Array.from},"395":function(e,t,n){var r=n(286),a=n(396);r({"target":"Array","stat":!0,"forced":!n(376)((function(e){Array.from(e)}))},{"from":a})},"396":function(e,t,n){"use strict";var r=n(292),a=n(429),o=n(305),i=n(311),c=n(397),u=n(374),l=n(363),s=n(312),f=n(357),b=n(375),d=n(310),v=r.Array;e.exports=function from(e){var t=i(e),n=l(this),r=arguments.length,p=r>1?arguments[1]:void 0,h=void 0!==p;h&&(p=a(p,r>2?arguments[2]:void 0));var j,x,O,y,m,g,_=d(t),w=0;if(!_||this==v&&u(_))for(j=s(t),x=n?new this(j):v(j);j>w;w++)g=h?p(t[w],w):t[w],f(x,w,g);else for(m=(y=b(t,_)).next,x=n?new this:[];!(O=o(m,y)).done;w++)g=h?c(y,p,[O.value,w],!0):O.value,f(x,w,g);return x.length=w,x}},"397":function(e,t,n){var r=n(317),a=n(373);e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(t){a(e,"throw",t)}}},"398":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},"400":function(e,t,n){var r=n(401);e.exports=r},"401":function(e,t,n){n(402);var r=n(300);e.exports=r.Object.assign},"402":function(e,t,n){var r=n(286),a=n(403);r({"target":"Object","stat":!0,"forced":Object.assign!==a},{"assign":a})},"403":function(e,t,n){"use strict";var r=n(416),a=n(299),o=n(305),i=n(318),c=n(438),u=n(442),l=n(441),s=n(311),f=n(359),b=Object.assign,d=Object.defineProperty,v=a([].concat);e.exports=!b||i((function(){if(r&&1!==b({"b":1},b(d({},"a",{"enumerable":!0,"get":function(){d(this,"b",{"value":3,"enumerable":!1})}}),{"b":2})).b)return!0;var e={},t={},n=Symbol();return e[n]=7,"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),7!=b({},e)[n]||"abcdefghijklmnopqrst"!=c(b({},t)).join("")}))?function assign(e,t){for(var n=s(e),a=arguments.length,i=1,b=u.f,d=l.f;a>i;)for(var p,h=f(arguments[i++]),j=b?v(c(h),b(h)):c(h),x=j.length,O=0;x>O;)p=j[O++],r&&!o(d,h,p)||(n[p]=h[p]);return n}:b},"409":function(e,t,n){},"415":function(e,t,n){"use strict";n.d(t,"a",(function(){return Cell}));var r=n(283),a=n.n(r),o=n(287),i=n.n(o),c=n(285),u=n.n(c),l=n(288),s=n.n(l),f=n(284),b=n.n(f),d=n(289),v=n.n(d),p=n(290),h=n.n(p),j=n(291),x=n.n(j),O=n(27),y=n(281),m=n(282),g=n(377),_=n(302),w=n(309),S=n(306);var k=n(44),C=["url","linkType","size","center","required","border","isLink","clickable","icon","titleWidth","titleStyle","title","label","value","arrowDirection","onClick","renderIcon","renderTitle","renderLabel","renderRightIcon","renderExtra","children","style","className"];function ownKeys(e,t){var n=a()(e);if(i.a){var r=i()(e);t&&(r=u()(r).call(r,(function(t){return s()(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)b()(n=ownKeys(Object(r),!0)).call(n,(function(t){h()(e,t,r[t])}));else if(v.a)Object.defineProperties(e,v()(r));else{var a;b()(a=ownKeys(Object(r))).call(a,(function(t){Object.defineProperty(e,t,s()(r,t))}))}}return e}function Cell(e){var t,n=e.url,r=e.linkType,a=e.size,o=e.center,i=e.required,c=e.border,u=void 0===c||c,l=e.isLink,s=e.clickable,f=e.icon,b=e.titleWidth,d=e.titleStyle,v=e.title,p=e.label,h=e.value,j=e.arrowDirection,T=e.onClick,A=e.renderIcon,M=e.renderTitle,I=e.renderLabel,N=e.renderRightIcon,E=e.renderExtra,P=e.children,L=e.style,z=e.className,W=x()(e,C),F=Object(O.useCallback)((function(e){null==T||T(e),n&&r&&Object(g.a)(n,r)}),[r,T,n]);return Object(k.jsxs)(y.o,_objectSpread(_objectSpread({"className":" "+m.b("cell",[a,{"center":o,"required":i,"borderless":!u,"clickable":l||s}])+" ".concat(z||""),"hoverClass":"van-cell--hover hover-class","hoverStayTime":70,"style":m.c([L]),"onClick":F},W),{},{"children":[f?Object(k.jsx)(_.a,{"name":f,"className":"van-cell__left-icon-wrap van-cell__left-icon"}):A,Object(k.jsxs)(y.o,{"style":(t={"titleWidth":b,"titleStyle":d},Object(w.a)([{"max-width":Object(S.a)(t.titleWidth),"min-width":Object(S.a)(t.titleWidth)},t.titleStyle])),"className":"van-cell__title title-class","children":[v||0===v?Object(k.jsx)(y.a,{"children":v}):M,(p||I)&&Object(k.jsx)(y.o,{"className":"van-cell__label label-class","children":I||p&&Object(k.jsx)(y.a,{"children":p})})]}),Object(k.jsx)(y.o,{"className":"van-cell__value value-class","children":h||0===h?Object(k.jsx)(y.a,{"children":h}):P}),l?Object(k.jsx)(_.a,{"name":j?"arrow-"+j:"arrow","className":"van-cell__right-icon-wrap right-icon-class van-cell__right-icon"}):N,E]}))}t.b=Cell},"433":function(e,t,n){"use strict";n(293),n(304),n(307),n(409)},"436":function(e,t,n){e.exports=n(330)},"439":function(e,t,n){var r=n(12);e.exports=r(1..valueOf)},"557":function(e,t,n){"use strict";var r=n(35),a=n(7),o=n(12),i=n(47),c=n(439),u=n(558),l=n(18),s=a.RangeError,f=a.String,b=Math.floor,d=o(u),v=o("".slice),p=o(1..toFixed),pow=function(e,t,n){return 0===t?n:t%2==1?pow(e,t-1,n*e):pow(e*e,t/2,n)},multiply=function(e,t,n){for(var r=-1,a=n;++r<6;)a+=t*e[r],e[r]=a%1e7,a=b(a/1e7)},divide=function(e,t){for(var n=6,r=0;--n>=0;)r+=e[n],e[n]=b(r/t),r=r%t*1e7},dataToString=function(e){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==e[t]){var r=f(e[t]);n=""===n?r:n+d("0",7-r.length)+r}return n};r({"target":"Number","proto":!0,"forced":l((function(){return"0.000"!==p(8e-5,3)||"1"!==p(.9,0)||"1.25"!==p(1.255,2)||"1000000000000000128"!==p(0xde0b6b3a7640080,0)}))||!l((function(){p({})}))},{"toFixed":function toFixed(e){var t,n,r,a,o=c(this),u=i(e),l=[0,0,0,0,0,0],b="",p="0";if(u<0||u>20)throw s("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return f(o);if(o<0&&(b="-",o=-o),o>1e-21)if(n=(t=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}(o*pow(2,69,1))-69)<0?o*pow(2,-t,1):o/pow(2,t,1),n*=4503599627370496,(t=52-t)>0){for(multiply(l,0,n),r=u;r>=7;)multiply(l,1e7,0),r-=7;for(multiply(l,pow(10,r,1),0),r=t-1;r>=23;)divide(l,1<<23),r-=23;divide(l,1<<r),multiply(l,1,1),divide(l,2),p=dataToString(l)}else multiply(l,0,n),multiply(l,1<<-t,0),p=dataToString(l)+d("0",u);return p=u>0?b+((a=p.length)<=u?"0."+d("0",u-a)+p:v(p,0,a-u)+"."+v(p,a-u)):b+p}})},"558":function(e,t,n){"use strict";var r=n(7),a=n(47),o=n(36),i=n(37),c=r.RangeError;e.exports=function repeat(e){var t=o(i(this)),n="",r=a(e);if(r<0||r==1/0)throw c("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(n+=t);return n}},"616":function(e,t,n){"use strict";n(293),n(617)},"617":function(e,t,n){},"618":function(e,t,n){e.exports=n(619)},"619":function(e,t,n){var r=n(620);e.exports=r},"620":function(e,t,n){n(621),e.exports=9007199254740991},"621":function(e,t,n){n(286)({"target":"Number","stat":!0},{"MAX_SAFE_INTEGER":9007199254740991})},"656":function(e,t,n){"use strict";n(76),n(121),n(406),n(557);var r=n(290),a=n.n(r),o=n(295),i=n.n(o),c=n(291),u=n.n(c),l=n(618),s=n.n(l),f=n(411),b=n.n(f),d=n(314),v=n.n(d),p=n(436),h=n.n(p),j=n(372),x=n.n(j),O=n(283),y=n.n(O),m=n(287),g=n.n(m),_=n(285),w=n.n(_),S=n(288),k=n.n(S),C=n(284),T=n.n(C),A=n(289),M=n.n(A),I=n(281),N=n(27),E=n(282),P=n(297),L=n(309),z=n(306);function buttonStyle(e){return Object(L.a)({"width":Object(z.a)(e.buttonSize),"height":Object(z.a)(e.buttonSize)})}var W=n(44),F=["theme","value","integer","disabled","alwaysEmbed","inputWidth","buttonSize","asyncChange","disableInput","decimalLength","min","max","step","showPlus","showMinus","disablePlus","disableMinus","longPress","className","onFocus","onChange","onBlur","onOverlimit","onPlus","onMinus","renderMinus","renderPlus"];function ownKeys(e,t){var n=y()(e);if(g.a){var r=g()(e);t&&(r=w()(r).call(r,(function(t){return k()(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)T()(n=ownKeys(Object(r),!0)).call(n,(function(t){a()(e,t,r[t])}));else if(M.a)Object.defineProperties(e,M()(r));else{var o;T()(o=ownKeys(Object(r))).call(o,(function(t){Object.defineProperty(e,t,k()(r,t))}))}}return e}function equal(e,t){return String(e)===String(t)}t.a=function Stepper(e){var t,n=e.theme,r=e.value,a=e.integer,o=e.disabled,c=e.alwaysEmbed,l=e.inputWidth,f=e.buttonSize,d=e.asyncChange,p=e.disableInput,j=e.decimalLength,O=e.min,y=void 0===O?1:O,m=e.max,g=void 0===m?s.a:m,_=e.step,w=void 0===_?1:_,S=e.showPlus,k=void 0===S||S,C=e.showMinus,T=void 0===C||C,A=e.disablePlus,M=e.disableMinus,R=e.longPress,q=void 0===R||R,K=e.className,B=e.onFocus,D=e.onChange,J=e.onBlur,G=e.onOverlimit,H=e.onPlus,U=e.onMinus,X=e.renderMinus,$=e.renderPlus,Q=u()(e,F),V=Object(N.useState)(),Y=i()(V,2),Z=Y[0],ee=Y[1],te=Object(N.useRef)(""),ne=Object(N.useRef)(0),re=Object(N.useRef)(!1),ae=Object(N.useCallback)((function(e){return e=String(e).replace(/[^0-9.-]/g,""),a&&-1!==b()(e).call(e,".")&&(e=e.split(".")[0]),e}),[a]),oe=Object(N.useCallback)((function(e){return e=""===(e=ae(e))?0:+e,e=Math.max(Math.min(+g,e),+y),Object(P.b)(j)&&(e=e.toFixed(j)),e}),[j,ae,g,y]),ie=Object(N.useCallback)((function(){var e=oe(Z);equal(e,Z)||ee(e)}),[oe,Z]),ce=Object(N.useCallback)((function(e){return"plus"===e?o||A||Z>=g:o||M||Z<=y}),[Z,M,A,o,g,y]),ue=Object(N.useCallback)((function(e){d||ee(e),null==D||D({"detail":e})}),[d,D]),le=Object(N.useCallback)((function(e){var t=(e.detail||{}).value,n=void 0===t?"":t;if(""!==n){var r=ae(n);if(Object(P.b)(j)&&-1!==b()(r).call(r,".")){var a,o,i=r.split(".");r=v()(a="".concat(i[0],".")).call(a,h()(o=i[1]).call(o,0,j))}ue(r)}}),[j,ue,ae]),se=Object(N.useCallback)((function(e){null==B||B(e)}),[B]),fe=Object(N.useCallback)((function(e){var t=oe(e.detail.value);ue(t),null==J||J(x()(x()({},e.detail),{"value":t}))}),[ue,oe,J]),be=Object(N.useCallback)((function(e){if(!ce(te.current)){var t="minus"===te.current?-w:+w,n=oe(function add(e,t){var n=Math.pow(10,10);return Math.round((e+t)*n)/n}(+e,t));return ue(n),"plus"===te.current?null==H||H():null==U||U(),n}null==G||G()}),[ce,w,d,G,oe,D,H,U]),de=Object(N.useCallback)((function(e){ne.current=setTimeout((function(e){var t=be(e);de(t)}),200,e)}),[be]),ve=Object(N.useCallback)((function(e){var t=e.currentTarget.dataset.type;te.current=t,be(Z)}),[be,Z]),pe=Object(N.useCallback)((function(e){if(q&&!d){clearTimeout(ne.current);var t=e.currentTarget.dataset.type;te.current=t,re.current=!1,ne.current=setTimeout((function(){re.current=!0,be(Z),de(Z)}),600)}}),[q,d,de,be,Z]),he=Object(N.useCallback)((function(e){q&&(re.current&&e.preventDefault(),clearTimeout(ne.current))}),[q]);return Object(N.useEffect)((function(){ie()}),[j,y,g,a,ie]),Object(N.useEffect)((function(){equal(r,Z)||ee(oe(r))}),[oe,r]),Object(W.jsxs)(I.o,_objectSpread(_objectSpread({"className":E.b("stepper",[n])+" ".concat(K||"")},Q),{},{"children":[T&&Object(W.jsx)(I.o,{"data-type":"minus","style":buttonStyle({"buttonSize":f}),"className":"minus-class "+E.b("stepper__minus",{"disabled":o||M||Z<=y}),"hoverClass":"van-stepper__minus--hover","onClick":ve,"onTouchStart":pe,"onTouchEnd":he,"children":X}),Object(W.jsx)(I.h,{"type":a?"number":"digit","className":"input-class "+E.b("stepper__input",{"disabled":o||p}),"style":(t={"buttonSize":f,"inputWidth":l},Object(L.a)({"width":Object(z.a)(t.inputWidth),"height":Object(z.a)(t.buttonSize)})),"alwaysEmbed":c,"value":Z,"disabled":o||p,"onInput":le,"onFocus":se,"onBlur":fe}),k&&Object(W.jsx)(I.o,{"data-type":"plus","style":buttonStyle({"buttonSize":f}),"className":"plus-class "+E.b("stepper__plus",{"disabled":o||A||Z>=g}),"hoverClass":"van-stepper__plus--hover","onClick":ve,"onTouchStart":pe,"onTouchEnd":he,"children":$})]}))}},"811":function(e,t,n){},"914":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));n(433);var r=n(415),a=(n(616),n(656)),o=(n(457),n(454)),i=n(3),c=n.n(i),u=n(6),l=n.n(u),s=n(24),f=n.n(s),b=n(16),d=n.n(b),v=n(17),p=n.n(v),h=n(9),j=n.n(h),x=n(27),O=n(327),y=(n(811),n(44)),m=function(e){d()(Index,e);var t=p()(Index);function Index(){var e;return c()(this,Index),e=t.call(this),j()(f()(e),"state",{"value":1}),j()(f()(e),"onChange",(function(t){o.a.loading({"forbidClick":!0}),setTimeout((function(){o.a.clear(),e.setState({"value":t.detail})}),500)})),e}return l()(Index,[{"key":"render","value":function render(){var e=this.state.value;return Object(y.jsx)(O.a,{"title":"Stepper 步进器","children":Object(y.jsxs)(y.Fragment,{"children":[Object(y.jsx)(r.b,{"center":!0,"title":"基础用法","children":Object(y.jsx)(a.a,{"value":1})}),Object(y.jsx)(r.b,{"center":!0,"title":"步长设置","children":Object(y.jsx)(a.a,{"value":1,"step":"2"})}),Object(y.jsx)(r.b,{"center":!0,"title":"限制输入范围","children":Object(y.jsx)(a.a,{"value":1,"min":"5","max":"8"})}),Object(y.jsx)(r.b,{"center":!0,"title":"限制输入整数","children":Object(y.jsx)(a.a,{"value":1,"integer":!0})}),Object(y.jsx)(r.b,{"center":!0,"title":"禁用状态","children":Object(y.jsx)(a.a,{"value":1,"disabled":!0})}),Object(y.jsx)(r.b,{"center":!0,"title":"禁用长按","children":Object(y.jsx)(a.a,{"value":1,"longPress":!1})}),Object(y.jsx)(r.b,{"center":!0,"title":"固定小数位数","children":Object(y.jsx)(a.a,{"value":1,"step":"0.2","decimalLength":1})}),Object(y.jsx)(r.b,{"center":!0,"title":"异步变更","children":Object(y.jsx)(a.a,{"value":e,"asyncChange":!0,"onChange":this.onChange})}),Object(y.jsx)(r.b,{"center":!0,"title":"自定义大小","children":Object(y.jsx)(a.a,{"value":1,"inputWidth":"40px","buttonSize":"32px"})}),Object(y.jsx)(r.b,{"center":!0,"title":"圆角风格","children":Object(y.jsx)(a.a,{"value":1,"theme":"round","buttonSize":"22px"})}),Object(y.jsx)(o.a,{"id":"van-toast"})]})})}}]),Index}(x.Component)}}]);