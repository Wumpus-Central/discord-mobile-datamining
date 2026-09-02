// _runtime/10486__isNativeReflectConstruct.js
import Filter from "10465_Filter.js";
import UnlikelyFormatFilter from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_1 from "metro/00093__possibleConstructorReturn.js";
import closure_2 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
class UnlikelyFormatFilter {
  constructor(arg0) {
    self = this;
    tmp = UnlikelyFormatFilter(this, UnlikelyFormatFilter);
    tmp2 = closure_2;
    obj = closure_2(UnlikelyFormatFilter);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.strictMode = global;
    return tmp3Result;
  }
}
_inherits(UnlikelyFormatFilter, Filter.Filter);
const items = [
  {
    key: "isValid",
    value: function isValid(debug, text) {
      closure_0 = text;
      if (str2.match(/^\d*(\.\d*)?$/)) {
        debug.debug(() => {
          console.log("Removing unlikely result '" + text.text + "'");
        });
        let flag = false;
      } else {
        const start = text.start;
        if (start.isValidDate()) {
          if (text.end) {
            const end = text.end;
            if (!end.isValidDate()) {
              debug.debug(() => {
                console.log("Removing invalid result: " + text + " (" + text.end + ")");
              });
              let flag2 = false;
            }
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
  },
  {
    key: "isStrictModeValid",
    value: function isStrictModeValid(debug, start) {
      closure_0 = start;
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
