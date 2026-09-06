// === Module 10450: ? ===

// Module 10450
import Filter from "Filter" /* 10451 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const AbstractMergeDateRangeRefiner = require;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class AbstractMergeDateRangeRefiner {
  constructor() {
    self = this;
    tmp = c2(this, AbstractMergeDateRangeRefiner);
    tmp2 = closure_4;
    obj = closure_4(AbstractMergeDateRangeRefiner);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(AbstractMergeDateRangeRefiner, Filter.MergingRefiner);
const entry = {
  key: "shouldMergeResults",
  value: function shouldMergeResults(str, end, end2) {
    end = end.end;
    let tmp = !end;
    if (!end) {
      tmp = !end2.end;
    }
    if (tmp) {
      const self = this;
      tmp = null != str.match(this.patternBetween());
    }
    return tmp;
  }
};
let items = [
  entry,
  {
    key: "mergeResults",
    value: function mergeResults(arg0, start, start2) {
      closure_0 = start;
      let first = start2;
      start = start.start;
      let result = start.isOnlyWeekdayComponent();
      if (!result) {
        start2 = start2.start;
        result = start2.isOnlyWeekdayComponent();
      }
      if (!result) {
        let start3 = start2.start;
        const certainComponents = start3.getCertainComponents();
        const item = certainComponents.forEach((item) => {
          const start = closure_0.start;
          if (!start.isCertain(item)) {
            const start2 = closure_0.start;
            const start3 = first.start;
            start2.imply(item, start3.get(item));
          }
        });
        const start4 = start.start;
        const certainComponents1 = start4.getCertainComponents();
        const item1 = certainComponents1.forEach((item) => {
          const start = first.start;
          if (!start.isCertain(item)) {
            const start2 = first.start;
            const start3 = closure_0.start;
            start2.imply(item, start3.get(item));
          }
        });
      }
      const start5 = start.start;
      const start6 = start2.start;
      let tmp5 = start2;
      let obj = start;
      if (dateResult > start6.date()) {
        const start18 = start.start;
        const dateResult1 = start18.date();
        const start19 = start2.start;
        const dateResult2 = start19.date();
        const start20 = start2.start;
        if (start20.isOnlyWeekdayComponent()) {
          if (AbstractMergeDateRangeRefiner(10434).addDuration(dateResult2, { day: 7 }) > dateResult1) {
            const addDurationResult = AbstractMergeDateRangeRefiner(10434).addDuration(dateResult2, { day: 7 });
            const start15 = start2.start;
            start15.imply("day", addDurationResult.getDate());
            const start16 = start2.start;
            start16.imply("month", addDurationResult.getMonth() + 1);
            const start17 = start2.start;
            start17.imply("year", addDurationResult.getFullYear());
            tmp5 = start2;
            obj = start;
          }
        }
        const start7 = start.start;
        if (start7.isOnlyWeekdayComponent()) {
          if (AbstractMergeDateRangeRefiner(10434).addDuration(dateResult1, { day: -7 }) < dateResult2) {
            const addDurationResult1 = AbstractMergeDateRangeRefiner(10434).addDuration(dateResult1, { day: -7 });
            const start12 = start.start;
            start12.imply("day", addDurationResult1.getDate());
            const start13 = start.start;
            start13.imply("month", addDurationResult1.getMonth() + 1);
            const start14 = start.start;
            start14.imply("year", addDurationResult1.getFullYear());
            tmp5 = start2;
            obj = start;
          }
        }
        const start8 = start2.start;
        if (start8.isDateWithUnknownYear()) {
          if (AbstractMergeDateRangeRefiner(10434).addDuration(dateResult2, { year: 1 }) > dateResult1) {
            const start11 = start2.start;
            start11.imply("year", AbstractMergeDateRangeRefiner(10434).addDuration(dateResult2, { year: 1 }).getFullYear());
            tmp5 = start2;
            obj = start;
            const addDurationResult2 = AbstractMergeDateRangeRefiner(10434).addDuration(dateResult2, { year: 1 });
          }
        }
        const start9 = start.start;
        if (start9.isDateWithUnknownYear()) {
          if (AbstractMergeDateRangeRefiner(10434).addDuration(dateResult1, { year: -1 }) < dateResult2) {
            const start10 = start.start;
            start10.imply("year", AbstractMergeDateRangeRefiner(10434).addDuration(dateResult1, { year: -1 }).getFullYear());
            tmp5 = start2;
            obj = start;
            const addDurationResult3 = AbstractMergeDateRangeRefiner(10434).addDuration(dateResult1, { year: -1 });
          }
        }
        const items = [start, start2];
        first = items[0];
        closure_0 = tmp15;
        tmp5 = first;
        obj = tmp15;
      }
      const cloneResult = obj.clone();
      cloneResult.start = obj.start;
      cloneResult.end = tmp5.start;
      cloneResult.index = Math.min(obj.index, tmp5.index);
      if (obj.index < tmp5.index) {
        cloneResult.text = obj.text + arg0 + tmp5.text;
      } else {
        cloneResult.text = tmp5.text + arg0 + obj.text;
      }
      return cloneResult;
    }
  }
];

export default _createClass(AbstractMergeDateRangeRefiner, items);