// _runtime/10482__isNativeReflectConstruct.js
import Filter from "10469_Filter.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

const ENMergeRelativeFollowByDateRefiner = require;
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
class ENMergeRelativeFollowByDateRefiner {
  constructor() {
    self = this;
    tmp = closure_2(this, ENMergeRelativeFollowByDateRefiner);
    tmp2 = closure_4;
    obj = closure_4(ENMergeRelativeFollowByDateRefiner);
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
_inherits(ENMergeRelativeFollowByDateRefiner, Filter.MergingRefiner);
const items = [
  {
    key: "patternBetween",
    value: function patternBetween() {
      return /^\s*$/i;
    },
  },
  {
    key: "shouldMergeResults",
    value: function shouldMergeResults(str, text, start) {
      let match = str.match(this.patternBetween());
      if (match) {
        const tmp4 = null != text.text.match(/\s+(before|from)$/i);
        let tmp5 = !tmp4;
        if (!tmp4) {
          tmp5 = null == text.text.match(/\s+(after|since)$/i);
          const str2 = text.text;
        }
        let tmp6 = !tmp5;
        if (!tmp5) {
          start = start.start;
          let value = start.get("day");
          if (value) {
            const start2 = start.start;
            value = start2.get("month");
          }
          if (value) {
            const start3 = start.start;
            value = start3.get("year");
          }
          tmp6 = value;
        }
        match = tmp6;
        str = text.text;
      }
      return match;
    },
  },
  {
    key: "mergeResults",
    value: function mergeResults(arg0, text, start) {
      const parseDurationResult = ENMergeRelativeFollowByDateRefiner(10449).parseDuration(text.text);
      let reverseDurationResult = parseDurationResult;
      if (null != str.match(/\s+(before|from)$/i)) {
        reverseDurationResult = tmp(10452).reverseDuration(parseDurationResult);
      }
      const ParsingComponents = tmp(10453).ParsingComponents;
      const ReferenceWithTimezone = tmp(10453).ReferenceWithTimezone;
      start = start.start;
      const relativeFromReference = ParsingComponents.createRelativeFromReference(
        ReferenceWithTimezone.fromDate(start.date()),
        reverseDurationResult,
      );
      return new ENMergeRelativeFollowByDateRefiner(10453).ParsingResult(
        start.reference,
        text.index,
        "" + text.text + arg0 + start.text,
        relativeFromReference,
      );
    },
  },
];

export default _createClass(ENMergeRelativeFollowByDateRefiner, items);
