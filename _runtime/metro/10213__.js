// _runtime/metro/10213__.js
import assignSimilarDate2 from "../10180_assignSimilarDate.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

let hasOwnProperty;

let self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (!self2) {
  let _Object = Object;
  self2 = Object.create
    ? (arg0, __esModule, arg2, arg3) => {
        function get() {
          return __esModule[closure_1];
        }
        let closure_0 = __esModule;
        let closure_1 = arg2;
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
        let tmp3 = ownPropertyDescriptor;
        if (tmp3) {
          let tmp4;
          if ("get" in ownPropertyDescriptor) {
            tmp4 = !__esModule.__esModule;
          } else {
            tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
          }
          tmp3 = !tmp4;
        }
        if (!tmp3) {
          ownPropertyDescriptor = { enumerable: true, get };
          const obj = { enumerable: true, get };
        }
        Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
      }
    : (arg0, arg1, arg2, arg3) => {
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        arg0[tmp] = arg1[arg2];
      };
}
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create
    ? (arg0, value) => {
        const obj = { enumerable: true, value };
        Object.defineProperty(arg0, "default", obj);
      }
    : (arg0, arg1) => {
        arg0.default = arg1;
      };
}
let closure_5 = tmp3;
let fn = self && self.__importStar;
if (!fn) {
  fn = function t(arg0) {
    fn =
      Object.getOwnPropertyNames ||
      ((obj) => {
        const items = [];
        for (const key10005 in obj) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          if (!hasOwnProperty.call(obj, key10005)) {
            continue;
          } else {
            items[items.length] = key10005;
            continue;
          }
          continue;
        }
        return items;
      });
    return fn(arg0);
  };
  fn = (__esModule) => {
    const tmp = __esModule;
    if (tmp) {
      if (__esModule.__esModule) {
        return __esModule;
      }
    }
    const obj = {};
    if (null != __esModule) {
      let num;
      const arr = fn(__esModule);
      for (let num = 0; num < arr.length; num = num + 1) {
        if ("default" !== arr[num]) {
          let tmp5 = self2(obj, __esModule, arr[num]);
        }
      }
    }
    closure_5(obj, __esModule);
    return obj;
  };
}
const assignSimilarDate = fn(assignSimilarDate2);
class ForwardDateRefiner {
  constructor() {
    _classCallCheck(this, ForwardDateRefiner);
  }
}
const entry = {
  key: "refine",
  value: function refine(option, arr) {
    let self = this;
    if (option.option.forwardDate) {
      const item = arr.forEach(function (start) {
        let end3;
        let end8;
        let end9;
        let start3;
        let start8;
        let start9;
        option = start;
        const reference = option.reference;
        const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
        start = start.start;
        if (start.isOnlyTime()) {
          const start2 = start.start;
          if (option.reference.instant > start2.date()) {
            const reference2 = obj.reference;
            const dateWithAdjustedTimezone1 = reference2.getDateWithAdjustedTimezone();
            const _Date = Date;
            self = this;
            self2 = this;
            const date = new Date(dateWithAdjustedTimezone1);
            date.setDate(date.getDate() + 1);
            assignSimilarDate.implySimilarDate(start.start, date);
            option.debug(() => {
              console.log(
                "" +
                  self.constructor.name +
                  " adjusted " +
                  start +
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
              assignSimilarDate.implySimilarDate(start.end, date);
              ({ start: start3, end: end3 } = start);
              const dateResult = start3.date();
              if (dateResult > end3.date()) {
                date.setDate(date.getDate() + 1);
                assignSimilarDate.implySimilarDate(start.end, date);
              }
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
            const value = start11.get("weekday");
            const diff = value - dateWithAdjustedTimezone.getDay();
            let sum = diff;
            if (diff <= 0) {
              sum = diff + 7;
            }
            const obj2 = { day: sum };
            const addDurationResult = option(self[3]).addDuration(dateWithAdjustedTimezone, obj2);
            option(self[2]).implySimilarDate(start.start, addDurationResult);
            option.debug(() => {
              console.log("" + self.constructor.name + " adjusted " + start + " weekday (" + start.start + ")");
            });
            tmp5 = addDurationResult;
            if (start.end) {
              const end4 = start.end;
              tmp5 = addDurationResult;
              if (end4.isOnlyWeekdayComponent()) {
                const end5 = start.end;
                const value2 = end5.get("weekday");
                const diff1 = value2 - addDurationResult.getDay();
                let sum1 = diff1;
                if (diff1 <= 0) {
                  sum1 = diff1 + 7;
                }
                const obj3 = { day: sum1 };
                const addDurationResult1 = option(self[3]).addDuration(addDurationResult, obj3);
                option(self[2]).implySimilarDate(start.end, addDurationResult1);
                option.debug(() => {
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

export default _createClass(ForwardDateRefiner, items);
