// === Module 10206: ? ===

// Module 10206
import _mod10173 from "module_10173" /* 10173 */;
import EmptyDuration from "EmptyDuration" /* 10176 */;
import ReferenceWithTimezone2 from "ReferenceWithTimezone" /* 10177 */;
import _mod10193 from "module_10193" /* 10193 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
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
class ENMergeRelativeFollowByDateRefiner {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENMergeRelativeFollowByDateRefiner);
    const obj = _getPrototypeOf(ENMergeRelativeFollowByDateRefiner);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ENMergeRelativeFollowByDateRefiner, _mod10193.MergingRefiner);
const entry = {
  key: "patternBetween",
  value: function patternBetween() {
    return /^\s*$/i;
  }
};
const items = [
  entry,
  {
    key: "shouldMergeResults",
    value: function shouldMergeResults(str, text, start) {
      let match = str.match(this.patternBetween());
      if (match) {
        let tmp5 = null == text.text.match(/\s+(before|from)$/i);
        null != text.text.match(/\s+(before|from)$/i);
        if (tmp5) {
          const str2 = text.text;
          tmp5 = null == str2.match(/\s+(after|since)$/i);
        }
        let tmp6 = !tmp5;
        if (tmp6) {
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
      }
      return match;
    }
  },
  {
    key: "mergeResults",
    value: function mergeResults(arg0, text, start) {
      const parseDurationResult = _mod10173.parseDuration(text.text);
      let reverseDurationResult = parseDurationResult;
      const str = text.text;
      if (null != str.match(/\s+(before|from)$/i)) {
        reverseDurationResult = EmptyDuration.reverseDuration(parseDurationResult);
      }
      const ParsingComponents = ReferenceWithTimezone2.ParsingComponents;
      const createRelativeFromReference = ParsingComponents.createRelativeFromReference;
      const ReferenceWithTimezone = ReferenceWithTimezone2.ReferenceWithTimezone;
      start = start.start;
      const relativeFromReference = createRelativeFromReference(ReferenceWithTimezone.fromDate(start.date()), reverseDurationResult);
      const reference = start.reference;
      const index = text.index;
      const parsingResult = new ReferenceWithTimezone2.ParsingResult(reference, index, "" + text.text + arg0 + start.text, relativeFromReference);
      return parsingResult;
    }
  }
];

export default _createClass(ENMergeRelativeFollowByDateRefiner, items);