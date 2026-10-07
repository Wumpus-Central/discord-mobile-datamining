// === Module 155: ? ===

// Module 155
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;
import _mod156 from "module_156" /* 156 */;
import _mod162 from "module_162" /* 162 */;
import PerformanceEntry from "PerformanceEntry" /* 163 */;
import _mod169 from "module_169" /* 169 */;
import _mod171 from "module_171" /* 171 */;
import _mod172 from "module_172" /* 172 */;
import _createNativeObserver2 from "_createNativeObserver2" /* 173 */;

const global = arg0;
require = arg1;
const dependencyMap = arg6;
let c3 = false;

export default function setUpPerformanceModern() {
  if (!c3) {
    c3 = true;
    const _default = new _mod156.default();
    global.performance = _default;
    polyfillObjectProperty.polyfillGlobal("EventCounts", () => _mod162.EventCounts_public);
    polyfillObjectProperty.polyfillGlobal("Performance", () => _mod156.Performance_public);
    polyfillObjectProperty.polyfillGlobal("PerformanceEntry", () => PerformanceEntry.PerformanceEntry_public);
    polyfillObjectProperty.polyfillGlobal("PerformanceEventTiming", () => _mod162.PerformanceEventTiming_public);
    polyfillObjectProperty.polyfillGlobal("PerformanceLongTaskTiming", () => _mod171.PerformanceLongTaskTiming_public);
    polyfillObjectProperty.polyfillGlobal("PerformanceMark", () => _mod169.PerformanceMark);
    polyfillObjectProperty.polyfillGlobal("PerformanceMeasure", () => _mod169.PerformanceMeasure_public);
    polyfillObjectProperty.polyfillGlobal("PerformanceObserver", () => _createNativeObserver2.PerformanceObserver);
    polyfillObjectProperty.polyfillGlobal("PerformanceObserverEntryList", () => _createNativeObserver2.PerformanceObserverEntryList_public);
    polyfillObjectProperty.polyfillGlobal("PerformanceResourceTiming", () => _mod172.PerformanceResourceTiming_public);
    polyfillObjectProperty.polyfillGlobal("TaskAttributionTiming", () => _mod171.TaskAttributionTiming_public);
  }
};