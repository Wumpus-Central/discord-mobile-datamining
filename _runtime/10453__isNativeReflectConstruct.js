// _runtime/10453__isNativeReflectConstruct.js
import Filter from "10451_Filter.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

const AbstractMergeDateTimeRefiner = require;
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
class AbstractMergeDateTimeRefiner {
  constructor() {
    self = this;
    tmp = closure_2(this, AbstractMergeDateTimeRefiner);
    tmp2 = closure_4;
    obj = closure_4(AbstractMergeDateTimeRefiner);
    tmp3 = closure_3;
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
_inherits(AbstractMergeDateTimeRefiner, Filter.MergingRefiner);
const items = [
  {
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
  },
  {
    key: "mergeResults",
    value: function mergeResults(arg0, start, text) {
      start = start.start;
      const mergeDateTimeResult = AbstractMergeDateTimeRefiner(10454).mergeDateTimeResult;
      const tmp2 = start.isOnlyDate() ? mergeDateTimeResult(start, text) : mergeDateTimeResult(text, start);
      tmp2.index = start.index;
      tmp2.text = start.text + arg0 + text.text;
      return tmp2;
    },
  },
];

export default _createClass(AbstractMergeDateTimeRefiner, items);
