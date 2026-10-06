// _runtime/metro/10195__.js
import _mod10193 from "10193__.js";
import mergeDateTimeComponent from "../10196_mergeDateTimeComponent.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
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
class AbstractMergeDateTimeRefiner {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, AbstractMergeDateTimeRefiner);
    const obj = _getPrototypeOf(AbstractMergeDateTimeRefiner);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(AbstractMergeDateTimeRefiner, _mod10193.MergingRefiner);
const entry = {
  key: "shouldMergeResults",
  value: function shouldMergeResults(str, start, start2) {
    start = start.start;
    let isOnlyDateResult = start.isOnlyDate();
    if (isOnlyDateResult) {
      start2 = start2.start;
      isOnlyDateResult = start2.isOnlyTime();
    }
    if (!isOnlyDateResult) {
      const start3 = start2.start;
      let isOnlyDateResult1 = start3.isOnlyDate();
      if (isOnlyDateResult1) {
        const start4 = start.start;
        isOnlyDateResult1 = start4.isOnlyTime();
      }
      isOnlyDateResult = isOnlyDateResult1;
    }
    if (isOnlyDateResult) {
      const self = this;
      isOnlyDateResult = null != str.match(this.patternBetween());
    }
    return isOnlyDateResult;
  },
};
const items = [
  entry,
  {
    key: "mergeResults",
    value: function mergeResults(arg0, start, text) {
      start = start.start;
      const isOnlyDateResult = start.isOnlyDate();
      const mergeDateTimeResult = mergeDateTimeComponent.mergeDateTimeResult;
      const tmp2 = isOnlyDateResult ? mergeDateTimeResult(start, text) : mergeDateTimeResult(text, start);
      tmp2.index = start.index;
      tmp2.text = start.text + arg0 + text.text;
      return tmp2;
    },
  },
];

export default _createClass(AbstractMergeDateTimeRefiner, items);
