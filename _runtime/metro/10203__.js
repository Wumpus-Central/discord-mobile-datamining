// === Module 10203: ? ===

// Module 10203
import _mod10180 from "module_10180" /* 10180 */;
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
class MergeWeekdayComponentRefiner {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, MergeWeekdayComponentRefiner);
    const obj = _getPrototypeOf(MergeWeekdayComponentRefiner);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return map(self, constructResult);
  }
}
_inherits(MergeWeekdayComponentRefiner, _mod10180.MergingRefiner);
const entry = {
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
  }
};
const items = [
  entry,
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
    }
  }
];

export default _createClass(MergeWeekdayComponentRefiner, items);