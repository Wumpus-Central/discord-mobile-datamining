// _runtime/metro/10201__.js
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
class UnlikelyFormatFilter {
  constructor(strictMode) {
    let constructResult;
    const self = this;
    _classCallCheck(this, UnlikelyFormatFilter);
    const obj = _getPrototypeOf(UnlikelyFormatFilter);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = map(self, constructResult);
    tmp3Result.strictMode = strictMode;
    return tmp3Result;
  }
}
_inherits(UnlikelyFormatFilter, _mod10180.Filter);
const entry = {
  key: "isValid",
  value: function isValid(debug, text) {
    let flag;
    const str = text.text;
    const str2 = str.replace(" ", "");
    if (str2.match(/^\d*(\.\d*)?$/)) {
      debug.debug(() => {
        console.log("Removing unlikely result '" + text.text + "'");
      });
      flag = false;
    } else {
      const start = text.start;
      if (start.isValidDate()) {
        if (text.end) {
          let flag2;
          const end = text.end;
          if (!end.isValidDate()) {
            debug.debug(() => {
              console.log("Removing invalid result: " + text + " (" + text.end + ")");
            });
            flag2 = false;
          }
          flag = flag2;
        }
        const self = this;
        const strictMode = this.strictMode;
        let isStrictModeValidResult = !strictMode;
        if (strictMode) {
          isStrictModeValidResult = self.isStrictModeValid(debug, text);
        }
        flag2 = isStrictModeValidResult;
      } else {
        debug.debug(() => {
          console.log("Removing invalid result: " + text + " (" + text.start + ")");
        });
        flag = false;
      }
    }
    return flag;
  },
};
const items = [
  entry,
  {
    key: "isStrictModeValid",
    value: function isStrictModeValid(debug, start) {
      start = start.start;
      const result = start.isOnlyWeekdayComponent();
      let flag = !result;
      if (result) {
        debug.debug(() => {
          console.log("(Strict) Removing weekday only component: " + start + " (" + start.end + ")");
        });
        flag = false;
      }
      return flag;
    },
  },
];

export default _createClass(UnlikelyFormatFilter, items);
