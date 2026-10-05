// === Module 10179: ? ===

// Module 10179
import EmptyDuration from "EmptyDuration" /* 10163 */;
import _mod10180 from "module_10180" /* 10180 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class AbstractMergeDateRangeRefiner {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, AbstractMergeDateRangeRefiner);
    const obj = _getPrototypeOf(AbstractMergeDateRangeRefiner);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(AbstractMergeDateRangeRefiner, _mod10180.MergingRefiner);
const entry = {
  key: "shouldMergeResults",
  value: function shouldMergeResults(str, end, end2) {
    let tmp = !end.end && !end2.end;
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
      let closure_0 = start;
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
      const dateResult = start5.date();
      if (dateResult > start6.date()) {
        const start18 = start.start;
        const dateResult1 = start18.date();
        const start19 = start2.start;
        const dateResult2 = start19.date();
        const start20 = start2.start;
        if (start20.isOnlyWeekdayComponent()) {
          if (EmptyDuration.addDuration(dateResult2, { day: 7 }) > dateResult1) {
            const addDurationResult = EmptyDuration.addDuration(dateResult2, { day: 7 });
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
          if (EmptyDuration.addDuration(dateResult1, { day: -7 }) < dateResult2) {
            const addDurationResult1 = EmptyDuration.addDuration(dateResult1, { day: -7 });
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
          if (EmptyDuration.addDuration(dateResult2, { year: 1 }) > dateResult1) {
            const start11 = start2.start;
            const addDurationResult2 = EmptyDuration.addDuration(dateResult2, { year: 1 });
            start11.imply("year", addDurationResult2.getFullYear());
            tmp5 = start2;
            obj = start;
          }
        }
        const start9 = start.start;
        if (start9.isDateWithUnknownYear()) {
          if (EmptyDuration.addDuration(dateResult1, { year: -1 }) < dateResult2) {
            const start10 = start.start;
            const addDurationResult3 = EmptyDuration.addDuration(dateResult1, { year: -1 });
            start10.imply("year", addDurationResult3.getFullYear());
            tmp5 = start2;
            obj = start;
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