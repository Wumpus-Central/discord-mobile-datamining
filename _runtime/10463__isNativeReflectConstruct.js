// _runtime/10463__isNativeReflectConstruct.js
import Filter from "10451_Filter.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

const ENMergeRelativeAfterDateRefiner = require;
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
class ENMergeRelativeAfterDateRefiner {
  constructor() {
    self = this;
    tmp = closure_2(this, ENMergeRelativeAfterDateRefiner);
    tmp2 = closure_4;
    obj = closure_4(ENMergeRelativeAfterDateRefiner);
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
_inherits(ENMergeRelativeAfterDateRefiner, Filter.MergingRefiner);
const items = [
  {
    key: "shouldMergeResults",
    value: function shouldMergeResults(str, arg1, text) {
      let match = str.match(/^\s*$/i);
      if (match) {
        let tmp4 = null != text.text.match(/^[+-]/i);
        if (!tmp4) {
          tmp4 = null != text.text.match(/^-/i);
          const str2 = text.text;
        }
        match = tmp4;
        str = text.text;
      }
      return match;
    },
  },
  {
    key: "mergeResults",
    value: function mergeResults(arg0, start, text) {
      const parseDurationResult = ENMergeRelativeAfterDateRefiner(10431).parseDuration(text.text);
      let reverseDurationResult = parseDurationResult;
      if (null != str.match(/^-/i)) {
        reverseDurationResult = tmp(10434).reverseDuration(parseDurationResult);
      }
      const ParsingComponents = tmp(10435).ParsingComponents;
      const ReferenceWithTimezone = tmp(10435).ReferenceWithTimezone;
      start = start.start;
      const relativeFromReference = ParsingComponents.createRelativeFromReference(
        ReferenceWithTimezone.fromDate(start.date()),
        reverseDurationResult,
      );
      ({ reference, index } = start);
      return new ENMergeRelativeAfterDateRefiner(10435).ParsingResult(
        reference,
        index,
        "" + start.text + arg0 + text.text,
        relativeFromReference,
      );
    },
  },
];

export default _createClass(ENMergeRelativeAfterDateRefiner, items);
