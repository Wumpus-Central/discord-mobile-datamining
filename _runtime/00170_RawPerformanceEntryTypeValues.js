// === Module 170: RawPerformanceEntryTypeValues ===

// Module 170 (RawPerformanceEntryTypeValues)
import _mod162 from "module_162" /* 162 */;
import PerformanceEntry from "PerformanceEntry" /* 163 */;
import _mod169 from "module_169" /* 169 */;
import _mod171 from "module_171" /* 171 */;
import _mod172 from "module_172" /* 172 */;

require = arg1;
const dependencyMap = arg6;
const RawPerformanceEntryTypeValues = { MARK: 1, MEASURE: 2, EVENT: 3, LONGTASK: 4, RESOURCE: 5 };

export { RawPerformanceEntryTypeValues };
export const rawToPerformanceEntry = function rawToPerformanceEntry(entryType) {
  entryType = entryType.entryType;
  if (obj.EVENT === entryType) {
    obj = { name: null, startTime: null, duration: null, processingStart: null, processingEnd: null, interactionId: null };
    ({ name: obj6.name, startTime: obj6.startTime, duration: obj6.duration, processingStart: obj6.processingStart, processingEnd: obj6.processingEnd, interactionId: obj6.interactionId } = entryType);
    const performanceEventTiming = new _mod162.PerformanceEventTiming(obj);
    return performanceEventTiming;
  } else if (tmp.LONGTASK === entryType) {
    obj = { name: null, startTime: null, duration: null };
    ({ name: obj5.name, startTime: obj5.startTime, duration: obj5.duration } = entryType);
    const performanceLongTaskTiming = new _mod171.PerformanceLongTaskTiming(obj);
    return performanceLongTaskTiming;
  } else if (tmp.MARK === entryType) {
    const obj1 = { startTime: entryType.startTime };
    const performanceMark = new _mod169.PerformanceMark(entryType.name, obj1);
    return performanceMark;
  } else if (tmp.MEASURE === entryType) {
    const obj2 = { name: null, startTime: null, duration: null };
    ({ name: obj3.name, startTime: obj3.startTime, duration: obj3.duration } = entryType);
    const performanceMeasure = new _mod169.PerformanceMeasure(obj2);
    return performanceMeasure;
  } else if (tmp.RESOURCE === entryType) {
    const obj3 = { name: null, startTime: null, duration: null, fetchStart: null, requestStart: null, connectStart: null, connectEnd: null, responseStart: null, responseEnd: null, responseStatus: null, contentType: null, encodedBodySize: null, decodedBodySize: null };
    ({ name: obj2.name, startTime: obj2.startTime, duration: obj2.duration, fetchStart } = entryType);
    if (fetchStart == null) {
      fetchStart = 0;
    }
    obj3.fetchStart = fetchStart;
    let num = entryType.requestStart;
    if (num == null) {
      num = 0;
    }
    obj3.requestStart = num;
    let num2 = entryType.connectStart;
    if (num2 == null) {
      num2 = 0;
    }
    obj3.connectStart = num2;
    let num3 = entryType.connectEnd;
    if (num3 == null) {
      num3 = 0;
    }
    obj3.connectEnd = num3;
    let num4 = entryType.responseStart;
    if (num4 == null) {
      num4 = 0;
    }
    obj3.responseStart = num4;
    let num5 = entryType.responseEnd;
    if (num5 == null) {
      num5 = 0;
    }
    obj3.responseEnd = num5;
    let num6 = entryType.responseStatus;
    if (num6 == null) {
      num6 = 0;
    }
    obj3.responseStatus = num6;
    let str3 = entryType.contentType;
    if (str3 == null) {
      str3 = "";
    }
    obj3.contentType = str3;
    let num7 = entryType.encodedBodySize;
    if (num7 == null) {
      num7 = 0;
    }
    obj3.encodedBodySize = num7;
    let num8 = entryType.decodedBodySize;
    if (num8 == null) {
      num8 = 0;
    }
    obj3.decodedBodySize = num8;
    const performanceResourceTiming = new _mod172.PerformanceResourceTiming(obj3);
    return performanceResourceTiming;
  } else {
    const entryType2 = entryType.entryType;
    let str = "mark";
    if (tmp.MARK !== entryType2) {
      str = "measure";
      if (tmp.MEASURE !== entryType2) {
        str = "event";
        if (tmp.EVENT !== entryType2) {
          str = "longtask";
          if (tmp.LONGTASK !== entryType2) {
            str = "resource";
            if (tmp.RESOURCE !== entryType2) {
              const _TypeError = TypeError;
              const _HermesInternal = HermesInternal;
              const typeError = new TypeError("rawToPerformanceEntryType: unexpected performance entry type received: " + entryType2);
              throw typeError;
            }
          }
        }
      }
    }
    obj = { name: null, startTime: null, duration: null };
    ({ name: obj.name, startTime: obj.startTime, duration: obj.duration } = entryType);
    const performanceEntry = new PerformanceEntry.PerformanceEntry(str, obj);
    return performanceEntry;
  }
};
export const rawToPerformanceEntryType = function rawToPerformanceEntryType(arg0) {
  if (obj.MARK === arg0) {
    return "mark";
  } else if (tmp.MEASURE === arg0) {
    return "measure";
  } else if (tmp.EVENT === arg0) {
    return "event";
  } else if (tmp.LONGTASK === arg0) {
    return "longtask";
  } else if (tmp.RESOURCE === arg0) {
    return "resource";
  } else {
    const _TypeError = TypeError;
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("rawToPerformanceEntryType: unexpected performance entry type received: " + arg0);
    throw typeError;
  }
};
export const performanceEntryTypeToRaw = function performanceEntryTypeToRaw(type) {
  if ("mark" === type) {
    return obj.MARK;
  } else if ("measure" === type) {
    return obj.MEASURE;
  } else if ("event" === type) {
    return obj.EVENT;
  } else if ("longtask" === type) {
    return obj.LONGTASK;
  } else if ("resource" === type) {
    return obj.RESOURCE;
  } else {
    const _TypeError = TypeError;
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("performanceEntryTypeToRaw: unexpected performance entry type received: " + type);
    throw typeError;
  }
};