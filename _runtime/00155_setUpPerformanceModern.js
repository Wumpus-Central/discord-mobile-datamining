// _runtime/00155_setUpPerformanceModern.js
import defineLazyObjectProperty from "00123_defineLazyObjectProperty.js";
import Performance_public from "00156_Performance_public.js";
import PerformanceEventTiming from "00162_PerformanceEventTiming.js";
import PerformanceEntry from "00163_PerformanceEntry.js";
import PerformanceMark from "00169_PerformanceMark.js";
import TaskAttributionTiming from "00171_TaskAttributionTiming.js";
import PerformanceResourceTiming from "00172_PerformanceResourceTiming.js";
import _mod173 from "metro/00173__.js";

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
}
