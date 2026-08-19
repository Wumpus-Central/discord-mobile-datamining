// === Module 155: setUpPerformanceModern ===

// Module 155 (setUpPerformanceModern)
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
    polyfillObjectProperty.polyfillGlobal("Performance", () => callback(156).Performance_public);
    polyfillObjectProperty.polyfillGlobal("PerformanceEntry", () => callback(163).PerformanceEntry_public);
    polyfillObjectProperty.polyfillGlobal("PerformanceEventTiming", () => callback(162).PerformanceEventTiming_public);
    polyfillObjectProperty.polyfillGlobal("PerformanceLongTaskTiming", () => callback(171).PerformanceLongTaskTiming_public);
    polyfillObjectProperty.polyfillGlobal("PerformanceMark", () => callback(169).PerformanceMark);
    polyfillObjectProperty.polyfillGlobal("PerformanceMeasure", () => callback(169).PerformanceMeasure_public);
    polyfillObjectProperty.polyfillGlobal("PerformanceObserver", () => callback(173).PerformanceObserver);
    polyfillObjectProperty.polyfillGlobal("PerformanceObserverEntryList", () => callback(173).PerformanceObserverEntryList_public);
    polyfillObjectProperty.polyfillGlobal("PerformanceResourceTiming", () => callback(172).PerformanceResourceTiming_public);
    polyfillObjectProperty.polyfillGlobal("TaskAttributionTiming", () => callback(171).TaskAttributionTiming_public);
  }
};