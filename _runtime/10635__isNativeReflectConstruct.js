// === Module 10635: _isNativeReflectConstruct ===

// Module 10635 (_isNativeReflectConstruct)
import Filter from "Filter" /* 10469 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
  } catch (err) {
  }
}
class ENMergeRelativeDateRefiner {
  constructor() {
    self = this;
    tmp = closure_2(this, ENMergeRelativeDateRefiner);
    tmp2 = closure_4;
    obj = closure_4(ENMergeRelativeDateRefiner);
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
_inherits(ENMergeRelativeDateRefiner, Filter.MergingRefiner);
const items = [
  {
    key: "patternBetween",
    value: function patternBetween() {
      return /^\s*$/i;
    }
  },
  {
    key: "shouldMergeResults",
    value: function shouldMergeResults(str, text, start) {
      let match = str.match(this.patternBetween());
      if (match) {
        const tmp4 = null != text.text.match(/\s+(prima|dal)$/i);
        let tmp5 = !tmp4;
        if (!tmp4) {
          tmp5 = null == text.text.match(/\s+(dopo|dal|fino)$/i);
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
    }
  },
  {
    key: "mergeResults",
    value: function mergeResults(arg0, text, start) {
      const parseDurationResult = ENMergeRelativeDateRefiner(10619).parseDuration(text.text);
      let reverseDurationResult = parseDurationResult;
      if (null != str.match(/\s+(prima|dal)$/i)) {
        reverseDurationResult = tmp(10452).reverseDuration(parseDurationResult);
      }
      const ParsingComponents = tmp(10453).ParsingComponents;
      const ReferenceWithTimezone = tmp(10453).ReferenceWithTimezone;
      start = start.start;
      const relativeFromReference = ParsingComponents.createRelativeFromReference(ReferenceWithTimezone.fromDate(start.date()), reverseDurationResult);
      return new ENMergeRelativeDateRefiner(10453).ParsingResult(start.reference, text.index, "" + text.text + arg0 + start.text, relativeFromReference);
    }
  }
];

export default _createClass(ENMergeRelativeDateRefiner, items);