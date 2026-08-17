// _runtime/00155_setUpPerformanceModern.js
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;
import importDefaultResult2 from "importDefaultResult2" /* 156 */;

const global = arg0;
require = arg1;
const dependencyMap = arg6;
let c3 = false;
arg5.default = function setUpPerformanceModern() {
  if (!c3) {
    c3 = true;
    const _default = new importDefaultResult2.default();
    global.performance = _default;
    polyfillObjectProperty.polyfillGlobal("EventCounts", () => callback(162).EventCounts_public);
    const obj = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("Performance", () => callback(156).Performance_public);
    const obj2 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("PerformanceEntry", () => callback(163).PerformanceEntry_public);
    const obj3 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("PerformanceEventTiming", () => callback(162).PerformanceEventTiming_public);
    const obj4 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("PerformanceLongTaskTiming", () => callback(171).PerformanceLongTaskTiming_public);
    const obj5 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("PerformanceMark", () => callback(169).PerformanceMark);
    const obj6 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("PerformanceMeasure", () => callback(169).PerformanceMeasure_public);
    const obj7 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("PerformanceObserver", () => callback(173).PerformanceObserver);
    const obj8 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("PerformanceObserverEntryList", () => callback(173).PerformanceObserverEntryList_public);
    const obj9 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("PerformanceResourceTiming", () => callback(172).PerformanceResourceTiming_public);
    const obj10 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("TaskAttributionTiming", () => callback(171).TaskAttributionTiming_public);
    const obj11 = polyfillObjectProperty;
  }
};