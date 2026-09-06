// _runtime/metro/10617__.js
import Filter from "../10451_Filter.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const ENMergeRelativeDateRefiner = require;
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
class ENMergeRelativeDateRefiner {
  constructor() {
    self = this;
    tmp = c2(this, ENMergeRelativeDateRefiner);
    tmp2 = closure_4;
    obj = closure_4(ENMergeRelativeDateRefiner);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
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
_inherits(ENMergeRelativeDateRefiner, Filter.MergingRefiner);
const entry = {
  key: "patternBetween",
  value: function patternBetween() {
    return /^\s*$/i;
  },
};
const items = [
  entry,
  {
    key: "shouldMergeResults",
    value: function shouldMergeResults(str, text, start) {
      let match = str.match(this.patternBetween());
      if (match) {
        const tmp4 = null != text.text.match(/\s+(prima|dal)$/i);
        let tmp5 = !tmp4;
        if (!tmp4) {
          tmp5 = null == text.text.match(/\s+(dopo|dal|fino)$/i);
        }
        let tmp6 = !tmp5;
        if (!tmp5) {
          start = start.start;
          value = start.get("day");
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
      }
      return match;
    },
  },
  {
    key: "mergeResults",
    value: function mergeResults(arg0, text, start) {
      const parseDurationResult = ENMergeRelativeDateRefiner(10601).parseDuration(text.text);
      let reverseDurationResult = parseDurationResult;
      if (null != str.match(/\s+(prima|dal)$/i)) {
        reverseDurationResult = ENMergeRelativeDateRefiner(10434).reverseDuration(parseDurationResult);
      }
      const ParsingComponents = ENMergeRelativeDateRefiner(10435).ParsingComponents;
      const ReferenceWithTimezone = ENMergeRelativeDateRefiner(10435).ReferenceWithTimezone;
      start = start.start;
      const relativeFromReference = ParsingComponents.createRelativeFromReference(
        ReferenceWithTimezone.fromDate(start.date()),
        reverseDurationResult,
      );
      return new ENMergeRelativeDateRefiner(10435).ParsingResult(
        start.reference,
        text.index,
        "" + text.text + arg0 + start.text,
        relativeFromReference,
      );
    },
  },
];

export default _createClass(ENMergeRelativeDateRefiner, items);
