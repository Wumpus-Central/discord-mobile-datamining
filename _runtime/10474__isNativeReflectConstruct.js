// _runtime/10474__isNativeReflectConstruct.js
import Filter from "10451_Filter.js";
import MergeWeekdayComponentRefiner from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_1 from "metro/00093__possibleConstructorReturn.js";
import closure_2 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
  } catch (err) {}
}
class MergeWeekdayComponentRefiner {
  constructor() {
    self = this;
    tmp = MergeWeekdayComponentRefiner(this, MergeWeekdayComponentRefiner);
    tmp2 = closure_2;
    obj = closure_2(MergeWeekdayComponentRefiner);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
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
_inherits(MergeWeekdayComponentRefiner, Filter.MergingRefiner);
const items = [
  {
    key: "mergeResults",
    value: function mergeResults(arg0, index, clone) {
      const cloneResult = clone.clone();
      cloneResult.index = index.index;
      cloneResult.text = index.text + arg0 + cloneResult.text;
      const start = cloneResult.start;
      const start2 = index.start;
      start.assign("weekday", start2.get("weekday"));
      if (cloneResult.end) {
        const end = cloneResult.end;
        const start3 = index.start;
        end.assign("weekday", start3.get("weekday"));
      }
      return cloneResult;
    },
  },
  {
    key: "shouldMergeResults",
    value: function shouldMergeResults(str, start, start2) {
      start = start.start;
      let result = start.isOnlyWeekdayComponent();
      if (result) {
        start2 = start.start;
        result = !start2.isCertain("hour");
      }
      if (result) {
        const start3 = start2.start;
        result = start3.isCertain("day");
      }
      if (result) {
        result = null != str.match(/^,?\s*$/);
      }
      return result;
    },
  },
];

export default _createClass(MergeWeekdayComponentRefiner, items);
