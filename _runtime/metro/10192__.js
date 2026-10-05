// _runtime/metro/10192__.js
import _mod10160 from "10160__.js";
import EmptyDuration from "../10163_EmptyDuration.js";
import ReferenceWithTimezone2 from "../10164_ReferenceWithTimezone.js";
import _mod10180 from "10180__.js";
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
class ENMergeRelativeAfterDateRefiner {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENMergeRelativeAfterDateRefiner);
    const obj = _getPrototypeOf(ENMergeRelativeAfterDateRefiner);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ENMergeRelativeAfterDateRefiner, _mod10180.MergingRefiner);
const entry = {
  key: "shouldMergeResults",
  value: function shouldMergeResults(str, arg1, text) {
    let match = str.match(/^\s*$/i);
    if (match) {
      let tmp4 = null != str.match(/^[+-]/i);
      if (!tmp4) {
        const str2 = text.text;
        tmp4 = null != str2.match(/^-/i);
      }
      match = tmp4;
    }
    return match;
  },
};
const items = [
  entry,
  {
    key: "mergeResults",
    value: function mergeResults(arg0, start, text, arg3) {
      let index;
      let reference;
      const parseDurationResult = _mod10160.parseDuration(text.text);
      let reverseDurationResult = parseDurationResult;
      const str = text.text;
      if (null != str.match(/^-/i)) {
        reverseDurationResult = EmptyDuration.reverseDuration(parseDurationResult);
      }
      const ParsingComponents = ReferenceWithTimezone2.ParsingComponents;
      const createRelativeFromReference = ParsingComponents.createRelativeFromReference;
      const ReferenceWithTimezone = ReferenceWithTimezone2.ReferenceWithTimezone;
      start = start.start;
      const relativeFromReference = createRelativeFromReference(
        ReferenceWithTimezone.fromDate(start.date()),
        reverseDurationResult,
      );
      ({ reference, index } = start);
      const parsingResult = new ReferenceWithTimezone2.ParsingResult(
        reference,
        index,
        "" + start.text + arg0 + text.text,
        relativeFromReference,
      );
      return parsingResult;
    },
  },
];

export default _createClass(ENMergeRelativeAfterDateRefiner, items);
