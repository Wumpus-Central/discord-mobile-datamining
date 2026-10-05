// === Module 155: setUpPerformanceModern ===

// Module 155 (setUpPerformanceModern)
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 123 */;
import Performance_public from "Performance_public" /* 156 */;
import PerformanceEventTiming from "PerformanceEventTiming" /* 162 */;
import PerformanceEntry from "PerformanceEntry" /* 163 */;
import PerformanceMark from "PerformanceMark" /* 169 */;
import TaskAttributionTiming from "TaskAttributionTiming" /* 171 */;
import PerformanceResourceTiming from "PerformanceResourceTiming" /* 172 */;
import _mod173 from "module_173" /* 173 */;

let c3 = false;

export default function setUpPerformanceModern() {
  const tmp = c3;
  if (!tmp) {
    c3 = true;
    const self = this;
    const self2 = this;
    global.performance = new Performance_public.default();
    const _default = new Performance_public.default();
    const obj = defineLazyObjectProperty;
    obj.polyfillGlobal("EventCounts", () => PerformanceEventTiming.EventCounts_public);
    const obj2 = defineLazyObjectProperty;
    obj2.polyfillGlobal("Performance", () => Performance_public.Performance_public);
    const obj3 = defineLazyObjectProperty;
    obj3.polyfillGlobal("PerformanceEntry", () => PerformanceEntry.PerformanceEntry_public);
    const obj4 = defineLazyObjectProperty;
    obj4.polyfillGlobal("PerformanceEventTiming", () => PerformanceEventTiming.PerformanceEventTiming_public);
    const obj5 = defineLazyObjectProperty;
    obj5.polyfillGlobal("PerformanceLongTaskTiming", () => TaskAttributionTiming.PerformanceLongTaskTiming_public);
    const obj6 = defineLazyObjectProperty;
    obj6.polyfillGlobal("PerformanceMark", () => PerformanceMark.PerformanceMark);
    const obj7 = defineLazyObjectProperty;
    obj7.polyfillGlobal("PerformanceMeasure", () => PerformanceMark.PerformanceMeasure_public);
    const obj8 = defineLazyObjectProperty;
    obj8.polyfillGlobal("PerformanceObserver", () => _mod173.PerformanceObserver);
    const obj9 = defineLazyObjectProperty;
    obj9.polyfillGlobal("PerformanceObserverEntryList", () => _mod173.PerformanceObserverEntryList_public);
    const obj10 = defineLazyObjectProperty;
    obj10.polyfillGlobal("PerformanceResourceTiming", () => PerformanceResourceTiming.PerformanceResourceTiming_public);
    const obj11 = defineLazyObjectProperty;
    obj11.polyfillGlobal("TaskAttributionTiming", () => TaskAttributionTiming.TaskAttributionTiming_public);
  }
};