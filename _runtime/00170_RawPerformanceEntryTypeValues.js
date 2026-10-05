// _runtime/00170_RawPerformanceEntryTypeValues.js
import PerformanceEventTiming from "00162_PerformanceEventTiming.js";
import PerformanceEntry2 from "00163_PerformanceEntry.js";
import PerformanceMark from "00169_PerformanceMark.js";
import TaskAttributionTiming from "00171_TaskAttributionTiming.js";
import PerformanceResourceTiming2 from "00172_PerformanceResourceTiming.js";

const RawPerformanceEntryTypeValues = { MARK: 1, MEASURE: 2, EVENT: 3, LONGTASK: 4, RESOURCE: 5 };

export { RawPerformanceEntryTypeValues };
export const rawToPerformanceEntry = function rawToPerformanceEntry(entryType) {
  let fetchStart;
  let num;
  let num2;
  let num3;
  let num4;
  let num5;
  let num6;
  let num7;
  let num8;
  let obj;
  let str3;
  entryType = entryType.entryType;
  if (obj.EVENT === entryType) {
    const obj4 = {
      name: null,
      startTime: null,
      duration: null,
      processingStart: null,
      processingEnd: null,
      interactionId: null,
    };
    ({
      name: obj6.name,
      startTime: obj6.startTime,
      duration: obj6.duration,
      processingStart: obj6.processingStart,
      processingEnd: obj6.processingEnd,
      interactionId: obj6.interactionId,
    } = entryType);
    const self13 = this;
    const self14 = this;
    const performanceEventTiming = new PerformanceEventTiming.PerformanceEventTiming(obj4);
    return performanceEventTiming;
  } else if (obj.LONGTASK === entryType) {
    const obj11 = { name: null, startTime: null, duration: null };
    ({ name: obj5.name, startTime: obj5.startTime, duration: obj5.duration } = entryType);
    const self11 = this;
    const self12 = this;
    const performanceLongTaskTiming = new TaskAttributionTiming.PerformanceLongTaskTiming(obj11);
    return performanceLongTaskTiming;
  } else if (obj.MARK === entryType) {
    const self9 = this;
    const self10 = this;
    const obj12 = { startTime: entryType.startTime };
    const performanceMark = new PerformanceMark.PerformanceMark(entryType.name, obj12);
    return performanceMark;
  } else if (obj.MEASURE === entryType) {
    const obj13 = { name: null, startTime: null, duration: null };
    ({ name: obj3.name, startTime: obj3.startTime, duration: obj3.duration } = entryType);
    const self7 = this;
    const self8 = this;
    const performanceMeasure = new PerformanceMark.PerformanceMeasure(obj13);
    return performanceMeasure;
  } else if (obj.RESOURCE === entryType) {
    const obj14 = {
      name: null,
      startTime: null,
      duration: null,
      fetchStart,
      requestStart: num,
      connectStart: num2,
      connectEnd: num3,
      responseStart: num4,
      responseEnd: num5,
      responseStatus: num6,
      contentType: str3,
      encodedBodySize: num7,
      decodedBodySize: num8,
    };
    ({ name: obj2.name, startTime: obj2.startTime, duration: obj2.duration, fetchStart } = entryType);
    const PerformanceResourceTiming = PerformanceResourceTiming2.PerformanceResourceTiming;
    if (fetchStart == null) {
      fetchStart = 0;
    }
    num = entryType.requestStart;
    if (num == null) {
      num = 0;
    }
    num2 = entryType.connectStart;
    if (num2 == null) {
      num2 = 0;
    }
    num3 = entryType.connectEnd;
    if (num3 == null) {
      num3 = 0;
    }
    num4 = entryType.responseStart;
    if (num4 == null) {
      num4 = 0;
    }
    num5 = entryType.responseEnd;
    if (num5 == null) {
      num5 = 0;
    }
    num6 = entryType.responseStatus;
    if (num6 == null) {
      num6 = 0;
    }
    str3 = entryType.contentType;
    if (str3 == null) {
      str3 = "";
    }
    num7 = entryType.encodedBodySize;
    if (num7 == null) {
      num7 = 0;
    }
    num8 = entryType.decodedBodySize;
    if (num8 == null) {
      num8 = 0;
    }
    const self5 = this;
    const self6 = this;
    const performanceResourceTiming = new PerformanceResourceTiming(obj14);
    return performanceResourceTiming;
  } else {
    const entryType2 = entryType.entryType;
    let str = "mark";
    const PerformanceEntry = PerformanceEntry2.PerformanceEntry;
    if (obj.MARK !== entryType2) {
      str = "measure";
      if (obj.MEASURE !== entryType2) {
        str = "event";
        if (obj.EVENT !== entryType2) {
          str = "longtask";
          if (obj.LONGTASK !== entryType2) {
            str = "resource";
            if (obj.RESOURCE !== entryType2) {
              const _TypeError = TypeError;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const typeError = new TypeError(
                "rawToPerformanceEntryType: unexpected performance entry type received: " + entryType2,
              );
              throw typeError;
            }
          }
        }
      }
    }
    obj = { name: null, startTime: null, duration: null };
    ({ name: obj.name, startTime: obj.startTime, duration: obj.duration } = entryType);
    const self3 = this;
    const self4 = this;
    const performanceEntry = new PerformanceEntry(str, obj);
    return performanceEntry;
  }
};
export const rawToPerformanceEntryType = function rawToPerformanceEntryType(arg0) {
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
    const self = this;
    const self2 = this;
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
    const self = this;
    const self2 = this;
    const typeError = new TypeError("performanceEntryTypeToRaw: unexpected performance entry type received: " + type);
    throw typeError;
  }
};
