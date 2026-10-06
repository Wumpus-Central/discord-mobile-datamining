// === Module 10251: ? ===

// Module 10251
import _mod10193 from "module_10193" /* 10193 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
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
class JPMergeWeekdayComponentRefiner {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, JPMergeWeekdayComponentRefiner);
    const obj = _getPrototypeOf(JPMergeWeekdayComponentRefiner);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return map(self, constructResult);
  }
}
_inherits(JPMergeWeekdayComponentRefiner, _mod10193.MergingRefiner);
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