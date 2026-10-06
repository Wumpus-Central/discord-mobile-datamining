// _runtime/metro/10364__.js
import EmptyDuration from "../10176_EmptyDuration.js";
import ReferenceWithTimezone from "../10177_ReferenceWithTimezone.js";
import AbstractParserWithWordBoundaryChecking from "../10181_AbstractParserWithWordBoundaryChecking.js";
import _mod10362 from "10362__.js";
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
const regExp = new RegExp(
  "(denna|den h\u00E4r|f\u00F6rra|passerade|n\u00E4sta|kommande|efter|\\+|-)\\s*(" +
    _mod10362.TIME_UNITS_PATTERN +
    ")(?=\\W|$)",
  "i",
);
const regExp1 = new RegExp(
  "(denna|den h\u00E4r|f\u00F6rra|passerade|n\u00E4sta|kommande|efter|\\+|-)\\s*(" +
    _mod10362.TIME_UNITS_NO_ABBR_PATTERN +
    ")(?=\\W|$)",
  "i",
);
class SVTimeUnitCasualRelativeFormatParser {
  constructor() {
    let constructResult;
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    const self = this;
    _classCallCheck(this, SVTimeUnitCasualRelativeFormatParser);
    const obj = _getPrototypeOf(SVTimeUnitCasualRelativeFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result.allowAbbreviations = flag;
    return tmp3Result;
  }
}
_inherits(
  SVTimeUnitCasualRelativeFormatParser,
  AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking,
);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return this.allowAbbreviations ? regExp : regExp1;
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const str = arg1[1];
      const formatted = str.toLowerCase();
      const parseDurationResult = _mod10362.parseDuration(arg1[2]);
      if (parseDurationResult) {
        if ("f\u00F6rra" !== formatted) {
          let reverseDurationResult;
          if ("passerade" !== formatted) {
            reverseDurationResult = parseDurationResult;
          }
          const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
          return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
        }
        reverseDurationResult = EmptyDuration.reverseDuration(parseDurationResult);
      } else {
        return null;
      }
    },
  },
];

export default _createClass(SVTimeUnitCasualRelativeFormatParser, items);
