// === Module 10490: _isNativeReflectConstruct ===

// Module 10490 (_isNativeReflectConstruct)
import Filter from "Filter" /* 10469 */;
import UnlikelyFormatFilter from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
    }
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
    }
  }
];

export default _createClass(UnlikelyFormatFilter, items);