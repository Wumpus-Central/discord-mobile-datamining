// === Module 10435: ReferenceWithTimezone ===

// Module 10435 (ReferenceWithTimezone)
import _readOnlyError from "_readOnlyError" /* 377 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let ParsingComponents = require;
class ReferenceWithTimezone {
  constructor(arg0, arg1) {
    self = this;
    date = global;
    tmp2 = c2(this, ParsingResult);
    if (null == global) {
      tmp3 = globalThis;
      _Date = Date;
      tmp4 = new.target;
      tmp5 = new.target;
      date = new Date();
    }
    self.instant = date;
    tmp6 = null;
    if (null != require) {
      tmp6 = require;
    }
    self.timezoneOffset = tmp6;
    return;
  }
}
ParsingComponents = ReferenceWithTimezone;
const entry = {
  key: "getDateWithAdjustedTimezone",
  value: function getDateWithAdjustedTimezone() {
    const self = this;
    const date = new Date(this.instant);
    if (null !== this.timezoneOffset) {
      const minutes = date.getMinutes();
      date.setMinutes(minutes - self.getSystemTimezoneAdjustmentMinute(self.instant));
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
        date = new Date();
      }
      let timezoneOffset = arg1;
      const tmp5 = -date.getTimezoneOffset();
      if (null == arg1) {
        const self = this;
        timezoneOffset = this.timezoneOffset;
      }
      let tmp6 = tmp5;
      if (null !== timezoneOffset) {
        tmp6 = tmp5;
        if (undefined !== timezoneOffset) {
          tmp6 = timezoneOffset;
        }
      }
      return tmp5 - tmp6;
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
    const obj = Object.create(ParsingComponents.prototype);
    _classCallCheck(obj, ParsingComponents);
    if (null == arg0) {
      const _Date = Date;
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
        return ParsingComponents.fromDate(instant);
      } else {
        instant = undefined;
        if (null != instant) {
          instant = instant.instant;
        }
        if (null === instant) {
          const _Date = Date;
          instant = new Date();
        }
        let timezone;
        if (null != instant) {
          timezone = instant.timezone;
        }
        const toTimezoneOffsetResult = ParsingComponents(10436).toTimezoneOffset(timezone, instant, timezones);
        const obj = Object.create(ParsingComponents.prototype);
        _classCallCheck(obj, ParsingComponents);
        if (null == instant) {
          const _Date2 = Date;
          instant = new Date();
        }
        obj.instant = instant;
        let tmp16 = null;
        if (null != toTimezoneOffsetResult) {
          tmp16 = toTimezoneOffsetResult;
        }
        obj.timezoneOffset = tmp16;
        return obj;
      }
    }
  }
];
class ParsingComponents {
  constructor(arg0, arg1) {
    self = this;
    tmp = c2(this, ParsingResult);
    set = new Set();
    this._tags = set;
    this.reference = global;
    this.knownValues = {};
    this.impliedValues = {};
    if (require) {
      tmp3 = require;
      for (const key10017 in arg1) {
        tmp11 = key10017;
        self.knownValues[key10017] = arg1[key10017];
        continue;
      }
    }
    dateWithAdjustedTimezone = global.getDateWithAdjustedTimezone();
    implyResult = self.imply("day", dateWithAdjustedTimezone.getDate());
    implyResult1 = self.imply("month", dateWithAdjustedTimezone.getMonth() + 1);
    implyResult2 = self.imply("year", dateWithAdjustedTimezone.getFullYear());
    implyResult3 = self.imply("hour", 12);
    implyResult4 = self.imply("minute", 0);
    implyResult5 = self.imply("second", 0);
    implyResult6 = self.imply("millisecond", 0);
    return;
  }
}
const entry2 = {
  key: "get",
  value: function get(arg0) {
    const self = this;
    if (arg0 in this.knownValues) {
      let tmp = self.knownValues[arg0];
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
      delete tmp[tmp2];
      return this;
    }
  },
  {
    key: "addDurationAsImplied",
    value: function addDurationAsImplied(start8) {
      const self = this;
      const result = this.dateWithoutTimezoneAdjustment();
      const addDurationResult = ParsingComponents(10434).addDuration(result, start8);
      let tmp2 = "day" in start8;
      if (!tmp2) {
        tmp2 = "week" in start8;
      }
      if (!tmp2) {
        tmp2 = "month" in start8;
      }
      if (!tmp2) {
        tmp2 = "year" in start8;
      }
      if (tmp2) {
        self.delete(["day", "weekday", "month", "year"]);
        self.imply("day", addDurationResult.getDate());
        self.imply("weekday", addDurationResult.getDay());
        self.imply("month", addDurationResult.getMonth() + 1);
        self.imply("year", addDurationResult.getFullYear());
      }
      let tmp8 = "second" in start8;
      if (!tmp8) {
        tmp8 = "minute" in start8;
      }
      if (!tmp8) {
        tmp8 = "hour" in start8;
      }
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
      let tmp3 = str;
      if (typeof str === "string") {
        const items = [str];
        tmp3 = items;
      }
      for (const item10007 of tmp3) {
        let knownValues = self.knownValues;
        delete tmp[tmp2];
        let impliedValues = self.impliedValues;
        delete tmp[tmp2];
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
      const isCertainResult = this.isCertain("hour");
      let tmp2 = !isCertainResult;
      if (!isCertainResult) {
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
      let isCertainResult = this.isCertain("weekday");
      if (!isCertainResult) {
        isCertainResult = self.isCertain("day");
      }
      if (!isCertainResult) {
        isCertainResult = self.isCertain("month");
      }
      if (!isCertainResult) {
        isCertainResult = self.isCertain("year");
      }
      return !isCertainResult;
    }
  },
  {
    key: "isOnlyWeekdayComponent",
    value: function isOnlyWeekdayComponent() {
      const self = this;
      let isCertainResult = this.isCertain("weekday");
      if (isCertainResult) {
        isCertainResult = !self.isCertain("day");
      }
      if (isCertainResult) {
        isCertainResult = !self.isCertain("month");
      }
      return isCertainResult;
    }
  },
  {
    key: "isDateWithUnknownYear",
    value: function isDateWithUnknownYear() {
      const self = this;
      let isCertainResult = this.isCertain("month");
      if (isCertainResult) {
        isCertainResult = !self.isCertain("year");
      }
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
          let tmp6 = result.getDate() === self.get("day");
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
          const date = result.getDate();
        }
        tmp2 = tmp4;
      }
      return tmp2;
    }
  },
  {
    key: "toString",
    value: function toString() {
      const json = JSON.stringify(Array.from(this._tags).sort());
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
      return new Date(result.getTime() + 60000 * systemTimezoneAdjustmentMinute);
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
      return new Set(this._tags);
    }
  },
  {
    key: "dateWithoutTimezoneAdjustment",
    value: function dateWithoutTimezoneAdjustment() {
      this.get("year");
      const diff = this.get("month") - 1;
      value = this.get("day");
      const value1 = this.get("hour");
      value2 = this.get("minute");
      const value3 = this.get("second");
      const date = new Date(value, diff, value, value1, value2, value3, this.get("millisecond"));
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
      EmptyDuration = ParsingComponents(10434).EmptyDuration;
    }
    const addDurationResult = ParsingComponents(10434).addDuration(reference.getDateWithAdjustedTimezone(), EmptyDuration);
    let obj = Object.create(ParsingComponents.prototype);
    _classCallCheck(obj, ParsingComponents);
    obj._tags = new Set();
    obj.reference = reference;
    obj.knownValues = {};
    obj.impliedValues = {};
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
            ParsingComponents(10438).implySimilarTime(obj, addDurationResult);
            obj.imply("timezoneOffset", reference.getTimezoneOffset());
            if ("day" in EmptyDuration) {
              obj = obj.assign("day", addDurationResult.getDate());
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
    ParsingComponents(10438).assignSimilarTime(obj, addDurationResult);
    ParsingComponents(10438).assignSimilarDate(obj, addDurationResult);
    obj.assign("timezoneOffset", reference.getTimezoneOffset());
    const set = new Set();
  }
};
const items3 = [entry3];
const _module1Result = _createClass(ParsingComponents, items2, items3);
let c3 = _module1Result;
class ParsingResult {
  constructor(arg0, arg1, arg2, arg3, arg4) {
    self = this;
    tmp = importAll;
    tmp2 = c2(this, ParsingResult);
    this.reference = global;
    this.refDate = global.instant;
    this.index = require;
    this.text = importDefault;
    if (!importAll) {
      tmp3 = closure_3;
      tmp4 = new.target;
      tmp5 = new.target;
      tmp6 = global;
      tmp = new closure_3(global);
    }
    self.start = tmp;
    self.end = module;
    return;
  }
}
ParsingComponents = ParsingResult;
const entry4 = {
  key: "clone",
  value: function clone() {
    const self = this;
    ({ reference, index, text } = this);
    const obj = Object.create(ParsingComponents.prototype);
    _classCallCheck(obj, ParsingComponents);
    obj.reference = reference;
    obj.refDate = reference.instant;
    obj.index = index;
    obj.text = text;
    obj.start = new c3(reference);
    obj.end = undefined;
    let cloneResult = null;
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
      const set = new Set(start.tags());
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
      return "[ParsingResult {index: " + this.index + ", text: '" + this.text + "', tags: " + JSON.stringify(Array.from(this.tags()).sort()) + " ...}]";
    }
  }
];

export const ReferenceWithTimezone = _createClass(ReferenceWithTimezone, items, items1);
export const ParsingComponents = _module1Result;
export const ParsingResult = _createClass(ParsingResult, items4);