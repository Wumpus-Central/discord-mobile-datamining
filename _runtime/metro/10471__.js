// _runtime/metro/10471__.js
import assignSimilarDate from "../10438_assignSimilarDate.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

let self = this;
const ForwardDateRefiner = require;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = function t(arg0) {
        fn = Object.getOwnPropertyNames;
        if (!fn) {
          fn = (obj) => {
            const items = [];
            for (const key10005 in arg0) {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10005);
              } else {
                hasOwnPropertyResult = call(arg0, key10005);
              }
              if (!hasOwnPropertyResult) {
                continue;
              } else {
                items[items.length] = key10005;
                continue;
              }
              continue;
            }
            return items;
          };
        }
        return fn(arg0);
      };
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          const arr = fn(__esModule);
          for (let num = 0; num < arr.length; num = num + 1) {
            if ("default" !== arr[num]) {
              let tmp4 = self2(obj, __esModule, arr[num]);
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    let closure_6 = fn(assignSimilarDate);
    class ForwardDateRefiner {
      constructor() {
        tmp = closure_3(this, ForwardDateRefiner);
        return;
      }
    }
    const entry = {
      key: "refine",
      value: function refine(option, arr) {
        const self = this;
        if (option.option.forwardDate) {
          const item = arr.forEach((start) => {
            option = start;
            let obj = option;
            const reference = option.reference;
            const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
            start = start.start;
            if (start.isOnlyTime()) {
              const start2 = start.start;
              if (obj.reference.instant > start2.date()) {
                const reference2 = obj.reference;
                const dateWithAdjustedTimezone1 = reference2.getDateWithAdjustedTimezone();
                const _Date = Date;
                const date = new Date(dateWithAdjustedTimezone1);
                date.setDate(date.getDate() + 1);
                closure_1_6.implySimilarDate(start.start, date);
                obj.debug(() => {
                  console.log(
                    "" +
                      self.constructor.name +
                      " adjusted " +
                      closure_0 +
                      " time from the ref date (" +
                      dateWithAdjustedTimezone1 +
                      ") to the following day (" +
                      date +
                      ")",
                  );
                });
                let end2 = start.end;
                if (end2) {
                  const end = start.end;
                  end2 = end.isOnlyTime();
                }
                if (end2) {
                  obj8.implySimilarDate(start.end, date);
                  ({ start: start3, end: end3 } = start);
                  if (dateResult > end3.date()) {
                    date.setDate(date.getDate() + 1);
                    obj8.implySimilarDate(start.end, date);
                  }
                  dateResult = start3.date();
                }
              }
            }
            const start4 = start.start;
            let tmp5 = dateWithAdjustedTimezone;
            if (start4.isOnlyWeekdayComponent()) {
              const start5 = start.start;
              tmp5 = dateWithAdjustedTimezone;
              if (dateWithAdjustedTimezone > start5.date()) {
                const start11 = start.start;
                value = start11.get("weekday");
                const diff = value - dateWithAdjustedTimezone.getDay();
                let sum = diff;
                if (diff <= 0) {
                  sum = diff + 7;
                }
                obj = { day: sum };
                const addDurationResult = option(self[3]).addDuration(dateWithAdjustedTimezone, obj);
                option(self[2]).implySimilarDate(start.start, addDurationResult);
                obj.debug(() => {
                  console.log("" + self.constructor.name + " adjusted " + start + " weekday (" + start.start + ")");
                });
                tmp5 = addDurationResult;
                if (start.end) {
                  const end4 = start.end;
                  tmp5 = addDurationResult;
                  if (end4.isOnlyWeekdayComponent()) {
                    const end5 = start.end;
                    value = end5.get("weekday");
                    const diff1 = value - addDurationResult.getDay();
                    let sum1 = diff1;
                    if (diff1 <= 0) {
                      sum1 = diff1 + 7;
                    }
                    obj = { day: sum1 };
                    const addDurationResult1 = tmp7(tmp8[3]).addDuration(addDurationResult, obj);
                    tmp7(tmp8[2]).implySimilarDate(start.end, addDurationResult1);
                    obj.debug(() => {
                      console.log("" + self.constructor.name + " adjusted " + start + " weekday (" + start.end + ")");
                    });
                    tmp5 = addDurationResult1;
                  }
                }
              }
            }
            const start6 = start.start;
            if (start6.isDateWithUnknownYear()) {
              const start7 = start.start;
              if (tmp5 > start7.date()) {
                const start12 = start.start;
                let num3 = 0;
                if (tmp5 > start12.date()) {
                  while (true) {
                    ({ start: start8, start: start9 } = start);
                    let implyResult = start8.imply("year", start9.get("year") + 1);
                    let obj6 = option;
                    let debugResult3 = option.debug(() => {
                      console.log("" + self.constructor.name + " adjusted " + start + " year (" + start.start + ")");
                    });
                    let end6 = start.end;
                    if (end6) {
                      let end7 = start.end;
                      end6 = !end7.isCertain("year");
                    }
                    if (end6) {
                      ({ end: end8, end: end9 } = start);
                      let implyResult1 = end8.imply("year", end9.get("year") + 1);
                      let debugResult4 = obj6.debug(() => {
                        console.log("" + self.constructor.name + " adjusted " + start + " month (" + start.start + ")");
                      });
                    }
                    let sum2 = num3 + 1;
                    if (sum2 >= 3) {
                      break;
                    } else {
                      let start10 = start.start;
                      num3 = sum2;
                      if (tmp5 <= start10.date()) {
                        break;
                      }
                    }
                  }
                }
              }
            }
          });
        }
        return arr;
      },
    };
    let items = [entry];
    exports.default = _createClass(ForwardDateRefiner, items);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
