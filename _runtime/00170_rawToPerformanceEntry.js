// _runtime/00170_rawToPerformanceEntry.js
import _isNativeReflectConstruct from "00162__isNativeReflectConstruct.js";
import PerformanceEntry from "00163_PerformanceEntry.js";
import _isNativeReflectConstruct2 from "00169__isNativeReflectConstruct.js";
import _isNativeReflectConstruct3 from "00171__isNativeReflectConstruct.js";
import _isNativeReflectConstruct4 from "00172__isNativeReflectConstruct.js";

require = arg1;
const dependencyMap = arg6;
let obj = { MARK: 1, MEASURE: 2, EVENT: 3, LONGTASK: 4, RESOURCE: 5 };
arg5.RawPerformanceEntryTypeValues = obj;
arg5.rawToPerformanceEntry = function rawToPerformanceEntry(entryType) {
  entryType = entryType.entryType;
  if (obj.EVENT === entryType) {
    obj = { name: null, startTime: null, duration: null, processingStart: null, processingEnd: null, interactionId: null };
    ({ name: obj6[0], startTime: obj6[1], duration: obj6[2], processingStart: obj6[3], processingEnd: obj6[4], interactionId: obj6[5] } = entryType);
    const performanceEventTiming = new _isNativeReflectConstruct.PerformanceEventTiming(obj);
    return performanceEventTiming;
  } else if (tmp.LONGTASK === entryType) {
    obj = { name: null, startTime: null, duration: null };
    ({ name: obj5[0], startTime: obj5[1], duration: obj5[2] } = entryType);
    const performanceLongTaskTiming = new _isNativeReflectConstruct3.PerformanceLongTaskTiming(obj);
    return performanceLongTaskTiming;
  } else if (tmp.MARK === entryType) {
    obj1 = { startTime: null };
    obj1[0] = entryType.startTime;
    const performanceMark = new _isNativeReflectConstruct2.PerformanceMark(entryType.name, obj1);
    return performanceMark;
  } else if (tmp.MEASURE === entryType) {
    const obj2 = { name: null, startTime: null, duration: null };
    ({ name: obj3[0], startTime: obj3[1], duration: obj3[2] } = entryType);
    const performanceMeasure = new _isNativeReflectConstruct2.PerformanceMeasure(obj2);
    return performanceMeasure;
  } else if (tmp.RESOURCE === entryType) {
    const obj3 = { name: null, startTime: null, duration: null, fetchStart: null, requestStart: null, connectStart: null, connectEnd: null, responseStart: null, responseEnd: null, responseStatus: null, contentType: null, encodedBodySize: null, decodedBodySize: null };
    ({ name: obj2[0], startTime: obj2[1], duration: obj2[2], fetchStart } = entryType);
    if (fetchStart == null) {
      fetchStart = 0;
    }
    obj3[3] = fetchStart;
    let num = entryType.requestStart;
    if (num == null) {
      num = 0;
    }
    obj3[4] = num;
    let num2 = entryType.connectStart;
    if (num2 == null) {
      num2 = 0;
    }
    obj3[5] = num2;
    let num3 = entryType.connectEnd;
    if (num3 == null) {
      num3 = 0;
    }
    obj3[6] = num3;
    let num4 = entryType.responseStart;
    if (num4 == null) {
      num4 = 0;
    }
    obj3[7] = num4;
    let num5 = entryType.responseEnd;
    if (num5 == null) {
      num5 = 0;
    }
    obj3[8] = num5;
    let num6 = entryType.responseStatus;
    if (num6 == null) {
      num6 = 0;
    }
    obj3[9] = num6;
    let str3 = entryType.contentType;
    if (str3 == null) {
      str3 = "";
    }
    obj3[10] = str3;
    let num7 = entryType.encodedBodySize;
    if (num7 == null) {
      num7 = 0;
    }
    obj3[11] = num7;
    let num8 = entryType.decodedBodySize;
    if (num8 == null) {
      num8 = 0;
    }
    obj3[12] = num8;
    const performanceResourceTiming = new _isNativeReflectConstruct4.PerformanceResourceTiming(obj3);
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
    ({ name: obj[0], startTime: obj[1], duration: obj[2] } = entryType);
    const performanceEntry = new PerformanceEntry.PerformanceEntry(str, obj);
    return performanceEntry;
  }
};
arg5.rawToPerformanceEntryType = function rawToPerformanceEntryType(arg0) {
  if (obj.MARK === arg0) {
    return "mark";
  } else if (obj.MEASURE === arg0) {
    return "measure";
  } else if (obj.EVENT === arg0) {
    return "event";
  } else if (obj.LONGTASK === arg0) {
    return "longtask";
  } else if (obj.RESOURCE === arg0) {
    return "resource";
  } else {
    const _TypeError = TypeError;
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("rawToPerformanceEntryType: unexpected performance entry type received: " + arg0);
    throw typeError;
  }
};
arg5.performanceEntryTypeToRaw = function performanceEntryTypeToRaw(type) {
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