// === Module 10177: ReferenceWithTimezone ===

// Module 10177 (ReferenceWithTimezone)
import EmptyDuration2 from "EmptyDuration" /* 10176 */;
import TIMEZONE_ABBR_MAP from "TIMEZONE_ABBR_MAP" /* 10178 */;
import assignSimilarDate from "assignSimilarDate" /* 10180 */;
import _readOnlyError from "_readOnlyError" /* 377 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let set;

class ReferenceWithTimezone {
  constructor(arg0, arg1) {
    const self = this;
    let date = arg0;
    _classCallCheck(this, ReferenceWithTimezone);
    if (null == arg0) {
      const _Date = Date;
      const self2 = this;
      const self3 = this;
      date = new Date();
    }
    self.instant = date;
    let tmp4 = null;
    if (null != arg1) {
      tmp4 = arg1;
    }
    self.timezoneOffset = tmp4;
  }
}
const entry = {
  key: "getDateWithAdjustedTimezone",
  value: function getDateWithAdjustedTimezone() {
    const self = this;
    const date = new Date(this.instant);
    if (null !== this.timezoneOffset) {
      const setMinutes = date.setMinutes;
      const minutes = date.getMinutes();
      setMinutes(minutes - self.getSystemTimezoneAdjustmentMinute(self.instant));
    }
    return date;
  }
};
let items = [
  entry,
  {
    key: "getSystemTimezoneAdjustmentMinute",
    value: function getSystemTimezoneAdjustmentMinute(instant, arg1) {
      let tmp = !instant;
      if (instant) {
        tmp = instant.getTime() < 0;
      }
      let date = instant;
      if (tmp) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        date = new Date();
      }
      let timezoneOffset = arg1;
      const tmp3 = -date.getTimezoneOffset();
      if (null == arg1) {
        const self3 = this;
        timezoneOffset = this.timezoneOffset;
      }
      let tmp4 = tmp3;
      if (null !== timezoneOffset) {
        tmp4 = tmp3;
        if (undefined !== timezoneOffset) {
          tmp4 = timezoneOffset;
        }
      }
      return tmp3 - tmp4;
    }
  },
  {
    key: "getTimezoneOffset",
    value: function getTimezoneOffset() {
      let timezoneOffset = this.timezoneOffset;
      if (null === timezoneOffset) {
        const instant = this.instant;
        timezoneOffset = -instant.getTimezoneOffset();
      }
      return timezoneOffset;
    }
  }
];
const entry1 = {
  key: "fromDate",
  value: function fromDate(arg0) {
    let date = arg0;
    const obj = Object.create(ReferenceWithTimezone.prototype);
    _classCallCheck(obj, ReferenceWithTimezone);
    if (null == arg0) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date();
    }
    obj.instant = date;
    obj.timezoneOffset = null;
    return obj;
  }
};
const items1 = [
  entry1,
  {
    key: "fromInput",
    value: function fromInput(instant, timezones) {
      if (instant instanceof Date) {
        return ReferenceWithTimezone.fromDate(instant);
      } else {
        instant = undefined;
        if (null != instant) {
          instant = instant.instant;
        }
        if (null === instant) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          instant = new Date();
        }
        let timezone;
        const toTimezoneOffset = TIMEZONE_ABBR_MAP.toTimezoneOffset;
        if (null != instant) {
          timezone = instant.timezone;
        }
        const toTimezoneOffsetResult = toTimezoneOffset(timezone, instant, timezones);
        const obj = Object.create(ReferenceWithTimezone.prototype);
        _classCallCheck(obj, ReferenceWithTimezone);
        if (null == instant) {
          const _Date2 = Date;
          const self3 = this;
          const self4 = this;
          instant = new Date();
        }
        obj.instant = instant;
        let tmp12 = null;
        if (null != toTimezoneOffsetResult) {
          tmp12 = toTimezoneOffsetResult;
        }
        obj.timezoneOffset = tmp12;
        return obj;
      }
    }
  }
];
class ParsingComponents {
  constructor(reference, date) {
    const self = this;
    _classCallCheck(this, ParsingComponents);
    this._tags = new Set();
    this.reference = reference;
    this.knownValues = {};
    this.impliedValues = {};
    new Set();
    if (date) {
      for (const key10017 in date) {
        self.knownValues[key10017] = date[key10017];
        continue;
      }
    }
    const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
    self.imply("day", dateWithAdjustedTimezone.getDate());
    self.imply("month", dateWithAdjustedTimezone.getMonth() + 1);
    self.imply("year", dateWithAdjustedTimezone.getFullYear());
    self.imply("hour", 12);
    self.imply("minute", 0);
    self.imply("second", 0);
    self.imply("millisecond", 0);
  }
}
const entry2 = {
  key: "get",
  value: function get(arg0) {
    let tmp;
    const self = this;
    if (arg0 in this.knownValues) {
      tmp = self.knownValues[arg0];
    } else {
      tmp = null;
      if (arg0 in self.impliedValues) {
        tmp = self.impliedValues[arg0];
      }
    }
    return tmp;
  }
};
const items2 = [
  entry2,
  {
    key: "isCertain",
    value: function isCertain(meridiem) {
      return meridiem in this.knownValues;
    }
  },
  {
    key: "getCertainComponents",
    value: function getCertainComponents() {
      return Object.keys(this.knownValues);
    }
  },
  {
    key: "imply",
    value: function imply(hour, date) {
      const self = this;
      if (!(hour in this.knownValues)) {
        self.impliedValues[hour] = date;
      }
      return self;
    }
  },
  {
    key: "assign",
    value: function assign(arg0, arg1) {
      this.knownValues[arg0] = arg1;
      delete this.impliedValues[arg0];
      return this;
    }
  },
  {
    key: "addDurationAsImplied",
    value: function addDurationAsImplied(EmptyDuration) {
      const self = this;
      const result = this.dateWithoutTimezoneAdjustment();
      const addDurationResult = EmptyDuration2.addDuration(result, EmptyDuration);
      const tmp2 = "day" in EmptyDuration || "week" in EmptyDuration || "month" in EmptyDuration || "year" in EmptyDuration;
      if (tmp2) {
        self.delete(["day", "weekday", "month", "year"]);
        self.imply("day", addDurationResult.getDate());
        self.imply("weekday", addDurationResult.getDay());
        self.imply("month", addDurationResult.getMonth() + 1);
        self.imply("year", addDurationResult.getFullYear());
      }
      const tmp8 = "second" in EmptyDuration || "minute" in EmptyDuration || "hour" in EmptyDuration;
      if (tmp8) {
        self.delete(["second", "minute", "hour"]);
        self.imply("second", addDurationResult.getSeconds());
        self.imply("minute", addDurationResult.getMinutes());
        self.imply("hour", addDurationResult.getHours());
      }
      return self;
    }
  },
  {
    key: "delete",
    value: function _delete(str) {
      const self = this;
      let tmp = str;
      if (typeof str === "string") {
        const items = [str];
        tmp = items;
      }
      for (const item10007 of tmp) {
        delete self.knownValues[item10007];
        delete self.impliedValues[item10007];
        continue;
      }
    }
  },
  {
    key: "clone",
    value: function clone() {
      const self = this;
      const reference = this.reference;
      const obj = Object.create(ParsingComponents.prototype);
      _classCallCheck(obj, ParsingComponents);
      obj._tags = new Set();
      obj.reference = reference;
      obj.knownValues = {};
      obj.impliedValues = {};
      new Set();
      const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
      obj.imply("day", dateWithAdjustedTimezone.getDate());
      obj.imply("month", dateWithAdjustedTimezone.getMonth() + 1);
      obj.imply("year", dateWithAdjustedTimezone.getFullYear());
      obj.imply("hour", 12);
      obj.imply("minute", 0);
      obj.imply("second", 0);
      obj.imply("millisecond", 0);
      obj.knownValues = {};
      obj.impliedValues = {};
      for (const key10053 in this.knownValues) {
        obj.knownValues[key10053] = self.knownValues[key10053];
        continue;
      }
      for (const key10056 in self.impliedValues) {
        obj.impliedValues[key10056] = self.impliedValues[key10056];
        continue;
      }
      return obj;
    }
  },
  {
    key: "isOnlyDate",
    value: function isOnlyDate() {
      const self = this;
      let tmp2 = !this.isCertain("hour");
      this.isCertain("hour");
      if (tmp2) {
        tmp2 = !self.isCertain("minute");
      }
      if (tmp2) {
        tmp2 = !self.isCertain("second");
      }
      return tmp2;
    }
  },
  {
    key: "isOnlyTime",
    value: function isOnlyTime() {
      const self = this;
      const isCertainResult = this.isCertain("weekday") || self.isCertain("day") || self.isCertain("month") || self.isCertain("year");
      return !isCertainResult;
    }
  },
  {
    key: "isOnlyWeekdayComponent",
    value: function isOnlyWeekdayComponent() {
      const self = this;
      const isCertainResult = this.isCertain("weekday") && !self.isCertain("day") && !self.isCertain("month");
      return isCertainResult;
    }
  },
  {
    key: "isDateWithUnknownYear",
    value: function isDateWithUnknownYear() {
      const self = this;
      const isCertainResult = this.isCertain("month") && !self.isCertain("year");
      return isCertainResult;
    }
  },
  {
    key: "isValidDate",
    value: function isValidDate() {
      const self = this;
      const result = this.dateWithoutTimezoneAdjustment();
      const fullYear = result.getFullYear();
      let tmp2 = fullYear === this.get("year");
      if (tmp2) {
        const month = result.getMonth();
        let tmp4 = month === self.get("month") - 1;
        if (tmp4) {
          const date = result.getDate();
          let tmp6 = date === self.get("day");
          if (tmp6) {
            let tmp8 = null == self.get("hour");
            if (!tmp8) {
              const hours = result.getHours();
              tmp8 = hours == self.get("hour");
            }
            if (tmp8) {
              let tmp10 = null == self.get("minute");
              if (!tmp10) {
                const minutes = result.getMinutes();
                tmp10 = minutes == self.get("minute");
              }
              tmp8 = tmp10;
            }
            tmp6 = tmp8;
          }
          tmp4 = tmp6;
        }
        tmp2 = tmp4;
      }
      return tmp2;
    }
  },
  {
    key: "toString",
    value: function toString() {
      const arr = Array.from(this._tags);
      const json = stringify(arr.sort());
      const json1 = JSON.stringify(this.knownValues);
      const json2 = JSON.stringify(this.impliedValues);
      return "[ParsingComponents {\n            tags: " + json + ", \n            knownValues: " + json1 + ", \n            impliedValues: " + json2 + "}, \n            reference: " + JSON.stringify(this.reference) + "]";
    }
  },
  {
    key: "date",
    value: function date() {
      const result = this.dateWithoutTimezoneAdjustment();
      const reference = this.reference;
      const systemTimezoneAdjustmentMinute = reference.getSystemTimezoneAdjustmentMinute(result, this.get("timezoneOffset"));
      const date = new Date(result.getTime() + 60000 * systemTimezoneAdjustmentMinute);
      return date;
    }
  },
  {
    key: "addTag",
    value: function addTag(arg0) {
      const _tags = this._tags;
      _tags.add(arg0);
      return this;
    }
  },
  {
    key: "addTags",
    value: function addTags(arg0) {
      const self = this;
      const tmp = arg0[Symbol.iterator]();
      while (tmp !== undefined) {
        let _tags = self._tags;
        let addResult = _tags.add(tmp2);
        continue;
      }
      return self;
    }
  },
  {
    key: "tags",
    value: function tags() {
      set = new Set(this._tags);
      return set;
    }
  },
  {
    key: "dateWithoutTimezoneAdjustment",
    value: function dateWithoutTimezoneAdjustment() {
      const value = this.get("year");
      const diff = this.get("month") - 1;
      const value5 = this.get("day");
      const value6 = this.get("hour");
      const value7 = this.get("minute");
      const value8 = this.get("second");
      const date = new Date(value, diff, value5, value6, value7, value8, this.get("millisecond"));
      date.setFullYear(this.get("year"));
      return date;
    }
  }
];
const entry3 = {
  key: "createRelativeFromReference",
  value: function createRelativeFromReference(reference) {
    let EmptyDuration = reverseDurationResult;
    if (reverseDurationResult === undefined) {
      EmptyDuration = EmptyDuration2.EmptyDuration;
    }
    const addDurationResult = EmptyDuration2.addDuration(reference.getDateWithAdjustedTimezone(), EmptyDuration);
    const obj = Object.create(ParsingComponents.prototype);
    _classCallCheck(obj, ParsingComponents);
    obj._tags = new Set();
    obj.reference = reference;
    obj.knownValues = {};
    obj.impliedValues = {};
    new Set();
    const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
    obj.imply("day", dateWithAdjustedTimezone.getDate());
    obj.imply("month", dateWithAdjustedTimezone.getMonth() + 1);
    obj.imply("year", dateWithAdjustedTimezone.getFullYear());
    obj.imply("hour", 12);
    obj.imply("minute", 0);
    obj.imply("second", 0);
    obj.imply("millisecond", 0);
    obj.addTag("result/relativeDate");
    if (!("hour" in EmptyDuration)) {
      if (!("minute" in EmptyDuration)) {
        if (!("second" in EmptyDuration)) {
          if (!("millisecond" in EmptyDuration)) {
            assignSimilarDate.implySimilarTime(obj, addDurationResult);
            obj.imply("timezoneOffset", reference.getTimezoneOffset());
            if ("day" in EmptyDuration) {
              obj.assign("day", addDurationResult.getDate());
              obj.assign("month", addDurationResult.getMonth() + 1);
              obj.assign("year", addDurationResult.getFullYear());
              obj.assign("weekday", addDurationResult.getDay());
            } else if ("week" in EmptyDuration) {
              obj.assign("day", addDurationResult.getDate());
              obj.assign("month", addDurationResult.getMonth() + 1);
              obj.assign("year", addDurationResult.getFullYear());
              obj.imply("weekday", addDurationResult.getDay());
            } else {
              obj.imply("day", addDurationResult.getDate());
              if ("month" in EmptyDuration) {
                obj.assign("month", addDurationResult.getMonth() + 1);
                obj.assign("year", addDurationResult.getFullYear());
              } else {
                obj.imply("month", addDurationResult.getMonth() + 1);
                if ("year" in EmptyDuration) {
                  obj.assign("year", addDurationResult.getFullYear());
                } else {
                  obj.imply("year", addDurationResult.getFullYear());
                }
              }
            }
          }
          return obj;
        }
      }
    }
    obj.addTag("result/relativeDateAndTime");
    assignSimilarDate.assignSimilarTime(obj, addDurationResult);
    assignSimilarDate.assignSimilarDate(obj, addDurationResult);
    obj.assign("timezoneOffset", reference.getTimezoneOffset());
  }
};
const items3 = [entry3];
const _module1Result = _createClass(ParsingComponents, items2, items3);
let c3 = _module1Result;
class ParsingResult {
  constructor(reference, index, substr, relativeFromReference, parsingComponents1) {
    const self = this;
    let tmp = relativeFromReference;
    _classCallCheck(this, ParsingResult);
    this.reference = reference;
    this.refDate = reference.instant;
    this.index = index;
    this.text = substr;
    if (!relativeFromReference) {
      const self2 = this;
      const self3 = this;
      tmp = new c3(reference);
    }
    self.start = tmp;
    self.end = parsingComponents1;
  }
}
const entry4 = {
  key: "clone",
  value: function clone() {
    let index;
    let reference;
    let text;
    const self = this;
    ({ reference, index, text } = this);
    const obj = Object.create(ParsingResult.prototype);
    _classCallCheck(obj, ParsingResult);
    obj.reference = reference;
    obj.refDate = reference.instant;
    obj.index = index;
    obj.text = text;
    obj.start = new c3(reference);
    obj.end = undefined;
    let cloneResult = null;
    new c3(reference);
    if (this.start) {
      const start = self.start;
      cloneResult = start.clone();
    }
    obj.start = cloneResult;
    let cloneResult1 = null;
    if (self.end) {
      const end = self.end;
      cloneResult1 = end.clone();
    }
    obj.end = cloneResult1;
    return obj;
  }
};
const items4 = [
  entry4,
  {
    key: "date",
    value: function date() {
      const start = this.start;
      return start.date();
    }
  },
  {
    key: "addTag",
    value: function addTag(arg0) {
      const self = this;
      const start = this.start;
      start.addTag(arg0);
      if (this.end) {
        const end = self.end;
        end.addTag(arg0);
      }
      return self;
    }
  },
  {
    key: "addTags",
    value: function addTags(arg0) {
      const self = this;
      const start = this.start;
      start.addTags(arg0);
      if (this.end) {
        const end = self.end;
        end.addTags(arg0);
      }
      return self;
    }
  },
  {
    key: "tags",
    value: function tags() {
      const start = this.start;
      set = new Set(start.tags());
      if (this.end) {
        const end = this.end;
        const tagsResult = end.tags();
        for (const item10018 of tagsResult) {
          let addResult = set.add(item10018);
          continue;
        }
      }
      return set;
    }
  },
  {
    key: "toString",
    value: function toString() {
      const arr = Array.from(this.tags());
      return "[ParsingResult {index: " + this.index + ", text: '" + this.text + "', tags: " + JSON.stringify(arr.sort()) + " ...}]";
    }
  }
];
const ReferenceWithTimezone_export = _createClass(ReferenceWithTimezone, items, items1);
const ParsingComponents_export = _module1Result;
const ParsingResult_export = _createClass(ParsingResult, items4);

export { ReferenceWithTimezone_export as ReferenceWithTimezone };
export { ParsingComponents_export as ParsingComponents };
export { ParsingResult_export as ParsingResult };