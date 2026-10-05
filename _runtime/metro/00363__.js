// _runtime/metro/00363__.js
import _modDef38 from "00038__.js";
import processColorDefault from "../00050_processColor.js";
import normalizeColorDefault from "../00051_normalizeColor.js";
import get_nativeEventEmitterDefault from "../00357_get_nativeEventEmitter.js";
import bezierDefault from "../00364_bezier.js";
import _modDef366 from "00366__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

let importDefault;

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
function mapStringToNumericComponents(str) {
  let items;
  const tmp = normalizeColorDefault(str);
  let tmp3 = null == tmp;
  const tmp2 = _modDef38;
  if (!tmp3) {
    tmp3 = typeof tmp !== "object";
  }
  tmp2(tmp3, "PlatformColors are not supported");
  if (typeof tmp === "number") {
    const obj2 = { isColor: true, components: items };
    items = [
      (4278190080 & (tmp || 0)) >>> 24,
      (16711680 & (tmp || 0)) >>> 16,
      (65280 & (tmp || 0)) >>> 8,
      (255 & (tmp || 0)) / 255,
    ];
    return obj2;
  } else {
    const items1 = [];
    let match = re7.exec(str);
    let num = 0;
    let num2 = 0;
    while (null != match) {
      if (match.index > num) {
        let arr = items1.push(str.substring(num, match.index));
      }
      let _parseFloat = parseFloat;
      let arr2 = items1.push(parseFloat(match[0]));
      num = match.index + match[0].length;
      match = re7.exec(str);
      num2 = num;
    }
    _modDef38(items1.length > 0, "outputRange must contain color or value with numeric component");
    if (num2 < "outputRange must contain color or value with numeric component".length) {
      items1.push(
        "outputRange must contain color or value with numeric component".substring(
          num2,
          "outputRange must contain color or value with numeric component".length,
        ),
      );
    }
    return { isColor: false, components: items1 };
  }
}
const re7 = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;
class AnimatedInterpolation {
  constructor(_parent, _config) {
    let constructResult;
    const self = this;
    _classCallCheck(this, AnimatedInterpolation);
    const items = [_config];
    const obj = _getPrototypeOf(AnimatedInterpolation);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result._parent = _parent;
    tmp3Result._config = _config;
    return tmp3Result;
  }
}
_inherits(AnimatedInterpolation, _modDef366);
const entry = {
  key: "_getInterpolation",
  value: function _getInterpolation() {
    let c0;
    let c1;
    let easing;
    let easing2;
    let fromResult;
    const self = this;
    if (!this._interpolation) {
      const _config = self._config;
      if (_config.outputRange) {
        if (typeof _config.outputRange[0] === "string") {
          let num = 2;
          let tmp12 = _modDef38(_config.outputRange.length >= 2, "Bad output range");
          const outputRange = _config.outputRange;
          let mapped = outputRange.map(mapStringToNumericComponents);
          const isColor = mapped[0].isColor;
          const mapped1 = mapped.map((components) => {
            let found;
            components = components.components;
            if (isColor) {
              found = components;
            } else {
              found = components.filter((item) => typeof item === "number");
            }
            return found;
          });
          const first = mapped1[0];
          let closure_4 = first.map((item, index) => {
            let c0;
            let c1;
            importDefault = index;
            const obj = { outputRange: mapped1.map((item) => item[closure_0]) };
            const merged = Object.assign(_config);
            c0 = undefined;
            c1 = undefined;
            easing = undefined;
            extrapolate = undefined;
            ({ outputRange: c0, inputRange: c1, easing } = obj);
            if (!easing) {
              easing = bezierDefault.linear;
            }
            extrapolate = "extend";
            if (undefined !== obj.extrapolateLeft) {
              extrapolate = obj.extrapolateLeft;
            } else if (undefined !== obj.extrapolate) {
              extrapolate = obj.extrapolate;
            }
            extrapolate = "extend";
            if (undefined !== obj.extrapolateRight) {
              extrapolate = obj.extrapolateRight;
            } else if (undefined !== obj.extrapolate) {
              extrapolate = obj.extrapolate;
            }
            return (num) => {
              let tmp13;
              _config(mapped[7])(typeof num === "number", "Cannot interpolate an input which is not a number");
              num = 1;
              if (1 < _undefined2.length - 1) {
                let num2 = 1;
                num = 1;
                if (_undefined2[1] < num) {
                  const sum = num2 + 1;
                  num = sum;
                  while (sum < _undefined2.length - 1) {
                    num2 = sum;
                    num = sum;
                    if (_undefined2[sum] >= num) {
                      break;
                    }
                  }
                }
              }
              const diff = num - 1;
              const sum1 = diff + 1;
              let tmp8 = _undefined[sum1];
              let tmp12 = num;
              if (num >= _undefined2[diff]) {
                let tmp14 = tmp12;
                if (tmp12 <= _undefined2[sum1]) {
                  tmp13 = tmp7;
                  if (_undefined[diff] !== tmp8) {
                    if (_undefined2[diff] === _undefined2[sum1]) {
                      if (num <= _undefined2[diff]) {
                        tmp8 = tmp7;
                      }
                      tmp13 = tmp8;
                    } else {
                      let diff1;
                      let sum2;
                      if (_undefined2[diff] === -Infinity) {
                        diff1 = -tmp14;
                      } else if (_undefined2[sum1] === Infinity) {
                        diff1 = tmp14 - tmp4;
                      } else {
                        diff1 = (tmp14 - tmp4) / (tmp6 - tmp4);
                      }
                      const tmp9Result = tmp9(diff1);
                      if (_undefined[diff] === -Infinity) {
                        sum2 = -tmp9Result;
                      } else if (tmp8 === Infinity) {
                        sum2 = tmp9Result + tmp7;
                      } else {
                        sum2 = tmp9Result * (tmp8 - tmp7) + tmp7;
                      }
                      tmp13 = sum2;
                    }
                  }
                } else {
                  tmp13 = tmp12;
                  if ("identity" !== extrapolate) {
                    tmp14 = tmp12;
                    if ("clamp" === extrapolate) {
                      tmp14 = tmp6;
                    }
                  }
                }
              } else {
                tmp13 = num;
                if ("identity" !== extrapolate) {
                  tmp12 = num;
                  if ("clamp" === extrapolate) {
                    tmp12 = tmp4;
                  }
                }
              }
              return tmp13;
            };
          });
          self._interpolation = isColor
            ? (arg0) => {
                let closure_0 = arg0;
                mapped = closure_4.map((fn, index) => {
                  let rounded;
                  const tmp = fn(closure_0);
                  if (index < 3) {
                    const _Math2 = Math;
                    rounded = Math.round(tmp);
                  } else {
                    const _Math = Math;
                    rounded = Math.round(1000 * tmp) / 1000;
                  }
                  return rounded;
                });
                return "rgba(" + mapped[0] + ", " + mapped[1] + ", " + mapped[2] + ", " + mapped[3] + ")";
              }
            : (arg0) => {
                let closure_0 = arg0;
                let closure_1 = closure_4.map((fn) => fn(closure_0));
                let closure_2 = 0;
                const components = mapped[0].components;
                mapped = components.map((item) => {
                  let tmp = item;
                  if (typeof item === "number") {
                    closure_2 = tmp4 + 1;
                    tmp = closure_1[tmp4];
                  }
                  return tmp;
                });
                return mapped.join("");
              };
        }
      }
      if (typeof _config.outputRange[0] === "object") {
        const outputRange1 = _config.outputRange;
        const _Array = Array;
        const _Array2 = Array;
        let obj = { inputRange: _config.inputRange, outputRange: fromResult };
        const tmp6 = _config;
        const ArrayResult = Array(outputRange1.length);
        fromResult = from(ArrayResult.keys());
        let merged = Object.assign(_config);
        c0 = undefined;
        c1 = undefined;
        easing2 = undefined;
        let extrapolate;
        ({ outputRange: c0, inputRange: c1, easing: easing2 } = obj);
        if (!easing2) {
          easing2 = bezierDefault.linear;
        }
        extrapolate = "extend";
        if (undefined !== obj.extrapolateLeft) {
          extrapolate = obj.extrapolateLeft;
        } else if (undefined !== obj.extrapolate) {
          extrapolate = obj.extrapolate;
        }
        extrapolate = "extend";
        if (undefined !== obj.extrapolateRight) {
          extrapolate = obj.extrapolateRight;
        } else if (undefined !== obj.extrapolate) {
          extrapolate = obj.extrapolate;
        }
        const _interpolation = (num) => {
          let tmp13;
          _config(mapped[7])(typeof num === "number", "Cannot interpolate an input which is not a number");
          num = 1;
          if (1 < _undefined2.length - 1) {
            let num2 = 1;
            num = 1;
            if (_undefined2[1] < num) {
              const sum = num2 + 1;
              num = sum;
              while (sum < _undefined2.length - 1) {
                num2 = sum;
                num = sum;
                if (_undefined2[sum] >= num) {
                  break;
                }
              }
            }
          }
          const diff = num - 1;
          const sum1 = diff + 1;
          let tmp8 = _undefined[sum1];
          let tmp12 = num;
          if (num >= _undefined2[diff]) {
            let tmp14 = tmp12;
            if (tmp12 <= _undefined2[sum1]) {
              tmp13 = tmp7;
              if (_undefined[diff] !== tmp8) {
                if (_undefined2[diff] === _undefined2[sum1]) {
                  if (num <= _undefined2[diff]) {
                    tmp8 = tmp7;
                  }
                  tmp13 = tmp8;
                } else {
                  let diff1;
                  let sum2;
                  if (_undefined2[diff] === -Infinity) {
                    diff1 = -tmp14;
                  } else if (_undefined2[sum1] === Infinity) {
                    diff1 = tmp14 - tmp4;
                  } else {
                    diff1 = (tmp14 - tmp4) / (tmp6 - tmp4);
                  }
                  const tmp9Result = tmp9(diff1);
                  if (_undefined[diff] === -Infinity) {
                    sum2 = -tmp9Result;
                  } else if (tmp8 === Infinity) {
                    sum2 = tmp9Result + tmp7;
                  } else {
                    sum2 = tmp9Result * (tmp8 - tmp7) + tmp7;
                  }
                  tmp13 = sum2;
                }
              }
            } else {
              tmp13 = tmp12;
              if ("identity" !== extrapolate) {
                tmp14 = tmp12;
                if ("clamp" === extrapolate) {
                  tmp14 = tmp6;
                }
              }
            }
          } else {
            tmp13 = num;
            if ("identity" !== extrapolate) {
              tmp12 = num;
              if ("clamp" === extrapolate) {
                tmp12 = tmp4;
              }
            }
          }
          return tmp13;
        };
        self._interpolation = (arg0) => {
          const tmp = _interpolation(arg0);
          if (!Number.isInteger(tmp)) {
            const _console = console;
            console.warn("PlatformColor interpolation should happen natively, here we fallback to the closest color");
          }
          return outputRange1[Math.floor(Math, tmp)];
        };
      } else {
        ({ outputRange: importDefault, inputRange: dependencyMap, easing } = _config);
        if (!easing) {
          easing = bezierDefault.linear;
        }
        extrapolate = "extend";
        if (undefined !== _config.extrapolateLeft) {
          extrapolate = _config.extrapolateLeft;
        } else if (undefined !== _config.extrapolate) {
          extrapolate = _config.extrapolate;
        }
        extrapolate = "extend";
        if (undefined !== _config.extrapolateRight) {
          extrapolate = _config.extrapolateRight;
        } else if (undefined !== _config.extrapolate) {
          extrapolate = _config.extrapolate;
        }
        self._interpolation = (num) => {
          let tmp13;
          _config(mapped[7])(typeof num === "number", "Cannot interpolate an input which is not a number");
          num = 1;
          if (1 < _undefined2.length - 1) {
            let num2 = 1;
            num = 1;
            if (_undefined2[1] < num) {
              const sum = num2 + 1;
              num = sum;
              while (sum < _undefined2.length - 1) {
                num2 = sum;
                num = sum;
                if (_undefined2[sum] >= num) {
                  break;
                }
              }
            }
          }
          const diff = num - 1;
          const sum1 = diff + 1;
          let tmp8 = _undefined[sum1];
          let tmp12 = num;
          if (num >= _undefined2[diff]) {
            let tmp14 = tmp12;
            if (tmp12 <= _undefined2[sum1]) {
              tmp13 = tmp7;
              if (_undefined[diff] !== tmp8) {
                if (_undefined2[diff] === _undefined2[sum1]) {
                  if (num <= _undefined2[diff]) {
                    tmp8 = tmp7;
                  }
                  tmp13 = tmp8;
                } else {
                  let diff1;
                  let sum2;
                  if (_undefined2[diff] === -Infinity) {
                    diff1 = -tmp14;
                  } else if (_undefined2[sum1] === Infinity) {
                    diff1 = tmp14 - tmp4;
                  } else {
                    diff1 = (tmp14 - tmp4) / (tmp6 - tmp4);
                  }
                  const tmp9Result = tmp9(diff1);
                  if (_undefined[diff] === -Infinity) {
                    sum2 = -tmp9Result;
                  } else if (tmp8 === Infinity) {
                    sum2 = tmp9Result + tmp7;
                  } else {
                    sum2 = tmp9Result * (tmp8 - tmp7) + tmp7;
                  }
                  tmp13 = sum2;
                }
              }
            } else {
              tmp13 = tmp12;
              if ("identity" !== extrapolate) {
                tmp14 = tmp12;
                if ("clamp" === extrapolate) {
                  tmp14 = tmp6;
                }
              }
            }
          } else {
            tmp13 = num;
            if ("identity" !== extrapolate) {
              tmp12 = num;
              if ("clamp" === extrapolate) {
                tmp12 = tmp4;
              }
            }
          }
          return tmp13;
        };
      }
    }
    return self._interpolation;
  },
};
let items = [
  entry,
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _parent = this._parent;
      _parent.__makeNative(arg0);
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedInterpolation.prototype), "__makeNative", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      fn(items);
    },
  },
  {
    key: "__getValue",
    value: function __getValue() {
      const _parent = this._parent;
      const __getValueResult = _parent.__getValue();
      _modDef38(typeof __getValueResult === "number", "Cannot interpolate an input which is not a number.");
      return this._getInterpolation()(__getValueResult);
    },
  },
  {
    key: "interpolate",
    value: function interpolate(_config) {
      let constructResult;
      const obj2 = Object.create(AnimatedInterpolation.prototype);
      _classCallCheck(obj2, AnimatedInterpolation);
      const items = [_config];
      const obj = _getPrototypeOf(AnimatedInterpolation);
      if (_isNativeReflectConstruct()) {
        const _Reflect = Reflect;
        constructResult = Reflect.construct(obj, items, _getPrototypeOf(obj2).constructor);
      } else {
        constructResult = obj.apply(obj2, items);
      }
      const tmp4Result = c3(obj2, constructResult);
      tmp4Result._parent = this;
      tmp4Result._config = _config;
      return tmp4Result;
    },
  },
  {
    key: "__attach",
    value: function __attach() {
      const _parent = this._parent;
      _parent.__addChild(this);
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedInterpolation.prototype), "__attach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
  },
  {
    key: "__detach",
    value: function __detach() {
      const _parent = this._parent;
      _parent.__removeChild(this);
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedInterpolation.prototype), "__detach", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      let mapped;
      const self = this;
      const outputRange = this._config.outputRange;
      let color = null;
      if (typeof outputRange[0] === "string") {
        mapped = outputRange.map((item) => {
          let transformDataTypeResult;
          const tmp3 = processColorDefault(item);
          if (typeof tmp3 === "number") {
            color = "color";
            transformDataTypeResult = tmp3;
          } else {
            const tmpResult = get_nativeEventEmitterDefault;
            transformDataTypeResult = tmpResult.transformDataType(item);
          }
          return transformDataTypeResult;
        });
      } else {
        mapped = outputRange;
        if (typeof outputRange[0] === "object") {
          color = "platform_color";
          mapped = outputRange;
        }
      }
      const obj = {
        inputRange: self._config.inputRange,
        outputRange: mapped,
        outputType: color,
        extrapolateLeft: self._config.extrapolateLeft || self._config.extrapolate || "extend",
        extrapolateRight: self._config.extrapolateRight || self._config.extrapolate || "extend",
        type: "interpolation",
        debugID: self.__getDebugID(),
      };
      return obj;
    },
  },
];

export default _createClass(AnimatedInterpolation, items);
