webpackJsonp([72],{

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.prg=t())}(this,function(){"use strict";var e=[{locale:"prg",pluralRuleFunction:function(e,t){var a=String(e).split("."),r=a[1]||"",o=r.length,i=Number(a[0])==e,l=i&&a[0].slice(-1),n=i&&a[0].slice(-2),s=r.slice(-2),u=r.slice(-1);return t?"other":i&&0==l||n>=11&&n<=19||2==o&&s>=11&&s<=19?"zero":1==l&&11!=n||2==o&&1==u&&11!=s||2!=o&&1==u?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});


/***/ })

});
//# sourceMappingURL=72.js.map