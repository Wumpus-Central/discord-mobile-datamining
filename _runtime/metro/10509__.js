// === Module 10509: ? ===

// Module 10509
import Filter from "Filter" /* 10451 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
class JPMergeWeekdayComponentRefiner {
  constructor() {
    self = this;
    tmp = closure_0(this, JPMergeWeekdayComponentRefiner);
    tmp2 = c2;
    obj = c2(JPMergeWeekdayComponentRefiner);
    tmp3 = closure_1;
    if (closure_3()) {
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
_classCallCheck = JPMergeWeekdayComponentRefiner;
_inherits(JPMergeWeekdayComponentRefiner, Filter.MergingRefiner);
const entry = {
  key: "mergeResults",
  value: function mergeResults(arg0, clone, text) {
    const cloneResult = clone.clone();
    cloneResult.text = clone.text + arg0 + text.text;
    const start = cloneResult.start;
    const start2 = text.start;
    start.assign("weekday", start2.get("weekday"));
    if (cloneResult.end) {
      const end = cloneResult.end;
      const start3 = text.start;
      end.assign("weekday", start3.get("weekday"));
    }
    return cloneResult;
  }
};
const items = [
  entry,
  {
    key: "shouldMergeResults",
    value: function shouldMergeResults(str, start, start2) {
      start = start.start;
      let isCertainResult = start.isCertain("day");
      if (isCertainResult) {
        start2 = start2.start;
        isCertainResult = start2.isOnlyWeekdayComponent();
      }
      if (isCertainResult) {
        const start3 = start2.start;
        isCertainResult = !start3.isCertain("hour");
      }
      if (isCertainResult) {
        isCertainResult = null !== str.match(/^[,、の]?\s*$/);
      }
      return isCertainResult;
    }
  }
];

export default _createClass(JPMergeWeekdayComponentRefiner, items);