// _runtime/metro/10203__.js
import _mod10180 from "10180__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import map from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
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
  },
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
    },
  },
];

export default _createClass(MergeWeekdayComponentRefiner, items);
