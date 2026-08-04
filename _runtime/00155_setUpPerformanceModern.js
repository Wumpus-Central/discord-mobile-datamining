// _runtime/00155_setUpPerformanceModern.js
const global = arg0;
const require = arg1;
const dependencyMap = arg6;
let c3 = false;
arg5.default = function setUpPerformanceModern() {
  if (!c3) {
    c3 = true;
    const _default = new require(156) /* importDefaultResult2 */.default();
    global.performance = _default;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("EventCounts", () => callback(162).EventCounts_public);
    const obj = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("Performance", () => callback(156).Performance_public);
    const obj2 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("PerformanceEntry", () => callback(163).PerformanceEntry_public);
    const obj3 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("PerformanceEventTiming", () => callback(162).PerformanceEventTiming_public);
    const obj4 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("PerformanceLongTaskTiming", () => callback(171).PerformanceLongTaskTiming_public);
    const obj5 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("PerformanceMark", () => callback(169).PerformanceMark);
    const obj6 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("PerformanceMeasure", () => callback(169).PerformanceMeasure_public);
    const obj7 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("PerformanceObserver", () => callback(173).PerformanceObserver);
    const obj8 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("PerformanceObserverEntryList", () => callback(173).PerformanceObserverEntryList_public);
    const obj9 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("PerformanceResourceTiming", () => callback(172).PerformanceResourceTiming_public);
    const obj10 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("TaskAttributionTiming", () => callback(171).TaskAttributionTiming_public);
    const obj11 = require(123) /* polyfillObjectProperty */;
  }
};