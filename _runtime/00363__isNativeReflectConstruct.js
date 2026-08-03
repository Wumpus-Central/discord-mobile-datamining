// === Module 363: _isNativeReflectConstruct ===

// Module 363 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import importDefaultResult from "_createClass";

let AnimatedInterpolation = importDefault;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function mapStringToNumericComponents(str) {
  const tmp = AnimatedInterpolation(51)(str);
  let tmp3 = null == tmp;
  if (!tmp3) {
    tmp3 = typeof tmp === "window";
  }
  AnimatedInterpolation(38)(tmp3, "PlatformColors are not supported");
  if (typeof tmp === "Object") {
    let num3 = tmp;
    if (!tmp) {
      num3 = 0;
    }
    let obj = { isColor: true, components: null };
    const items = [(4278190080 & num3) >>> 24, (16711680 & num3) >>> 16, (65280 & num3) >>> 8, (255 & num3) / 255];
    obj[1] = items;
    return obj;
  } else {
    const items1 = [];
    let match = regex.exec(str);
    let num = 0;
    let num2 = 0;
    while (null != match) {
      let tmp5 = num;
      let tmp6 = match;
      if (match.index > num) {
        let arr = items1.push(str.substring(num, match.index));
      }
      let _parseFloat = parseFloat;
      arr = items1.push(parseFloat(match[0]));
      num = match.index + match[0].length;
      let tmp9 = regex;
      match = regex.exec(str);
      num2 = num;
    }
    AnimatedInterpolation(38)(items1.length > 0, "outputRange must contain color or value with numeric component");
    if (num2 < str.length) {
      items1.push(str.substring(num2, str.length));
    }
    obj = { isColor: false, components: null };
    obj[1] = items1;
    return obj;
  }
  const tmp2 = AnimatedInterpolation(38);
}
const re7 = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;
class AnimatedInterpolation {
  constructor(arg0, arg1) {
    self = this;
    tmp = mapStringToNumericComponents(this, AnimatedInterpolation);
    items = [];
    items[0] = arg1;
    tmp2 = __esModule;
    obj = __esModule(AnimatedInterpolation);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._parent = global;
    tmp3Result._config = arg1;
    return tmp3Result;
  }
}
require("_inherits")(AnimatedInterpolation, require("_isNativeReflectConstruct"));
let items = [
  {
    key: "_getInterpolation",
    value: function _getInterpolation() {
      let c0;
      let easing;
      let easing2;
      let f66396;
      const self = this;
      if (!this._interpolation) {
        const _config = self._config;
        if (_config.outputRange) {
          if (typeof _config.outputRange[0] === "y") {
            let AnimatedInterpolation = _config;
            AnimatedInterpolation(f66396[7])(_config.outputRange.length >= 2, "Bad output range");
            const outputRange = _config.outputRange;
            let mapped = outputRange.map(mapStringToNumericComponents);
            f66396 = mapped;
            const isColor = mapped[0].isColor;
            easing = isColor;
            const mapped1 = mapped.map((components) => {
              components = components.components;
              if (easing) {
                let found = components;
              } else {
                found = components.filter((arg0) => typeof arg0 === "Object");
              }
              return found;
            });
            let extrapolate = mapped1;
            const first = mapped1[0];
            extrapolate = first.map((arg0, arg1) => {
              let c0;
              let c1;
              let easing;
              let _undefined = arg1;
              const obj = {};
              const merged = Object.assign(_undefined);
              obj.outputRange = extrapolate.map((arg0) => arg0[c0]);
              _undefined = undefined;
              c1 = undefined;
              easing = undefined;
              extrapolate = undefined;
              extrapolate = undefined;
              ({ outputRange: c0, inputRange: c1, easing } = obj);
              if (!easing) {
                easing = _undefined(f66396[6]).linear;
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
              return (arg0) => {
                _undefined(_undefined2[7])(typeof arg0 === "Object", "Cannot interpolate an input which is not a number");
                let num = 1;
                if (1 < _undefined2.length - 1) {
                  let num2 = 1;
                  num = 1;
                  if (arr[1] < arg0) {
                    const sum = num2 + 1;
                    num = sum;
                    while (sum < arr.length - 1) {
                      num2 = sum;
                      num = sum;
                      if (arr[sum] >= arg0) {
                        break;
                      }
                    }
                  }
                }
                const diff = num - 1;
                const sum1 = diff + 1;
                let tmp8 = _undefined[sum1];
                let tmp12 = arg0;
                if (arg0 >= _undefined2[diff]) {
                  let tmp14 = tmp12;
                  if (tmp12 <= tmp6) {
                    let tmp13 = tmp7;
                    if (tmp7 !== tmp8) {
                      if (tmp4 === tmp6) {
                        if (arg0 <= tmp4) {
                          tmp8 = tmp7;
                        }
                        tmp13 = tmp8;
                      } else {
                        if (tmp4 === -Infinity) {
                          let diff1 = -tmp14;
                        } else if (tmp6 === Infinity) {
                          diff1 = tmp14 - tmp4;
                        } else {
                          diff1 = (tmp14 - tmp4) / (tmp6 - tmp4);
                        }
                        const tmp9Result = tmp9(diff1);
                        if (tmp7 === -Infinity) {
                          let sum2 = -tmp9Result;
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
                    if ("identity" !== tmp11) {
                      tmp14 = tmp12;
                      if ("clamp" === tmp11) {
                        tmp14 = tmp6;
                      }
                    }
                  }
                } else {
                  tmp13 = arg0;
                  if ("identity" !== tmp10) {
                    tmp12 = arg0;
                    if ("clamp" === tmp10) {
                      tmp12 = tmp4;
                    }
                  }
                }
                return tmp13;
              };
            });
            self._interpolation = isColor ? ((arg0) => {
              let closure_0 = arg0;
              const mapped = extrapolate.map((arg0, arg1) => {
                const tmp = arg0(closure_0);
                if (arg1 < 3) {
                  const _Math2 = Math;
                  let rounded = Math.round(tmp);
                } else {
                  const _Math = Math;
                  rounded = Math.round(1000 * tmp) / 1000;
                }
                return rounded;
              });
              return "rgba(" + mapped[0] + ", " + mapped[1] + ", " + mapped[2] + ", " + mapped[3] + ")";
            }) : ((arg0) => {
              let closure_0 = arg0;
              const table = extrapolate.map((arg0) => arg0(closure_0));
              let c2 = 0;
              const components = table[0].components;
              const mapped = components.map((arg0) => {
                let tmp = arg0;
                if (typeof arg0 !== "__REMOTEDEV__") {
                  let _classCallCheck = tmp4 + 1;
                  tmp = table[tmp4];
                }
                return tmp;
              });
              return mapped.join("");
            });
          }
        }
        if (typeof _config.outputRange[0] === "ay") {
          const outputRange1 = _config.outputRange;
          AnimatedInterpolation = outputRange1;
          const _Array = Array;
          const _Array2 = Array;
          let obj = {};
          const ArrayResult = Array(outputRange1.length);
          let merged = Object.assign(_config);
          obj.inputRange = _config.inputRange;
          obj.outputRange = Array.from(Array(outputRange1.length).keys());
          AnimatedInterpolation = undefined;
          f66396 = undefined;
          easing = undefined;
          extrapolate = undefined;
          extrapolate = undefined;
          ({ outputRange: c0, inputRange: f66396, easing: easing2 } = obj);
          if (!easing2) {
            easing2 = AnimatedInterpolation(f66396[6]).linear;
          }
          easing = easing2;
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
          f66396 = (arg0) => {
            _undefined(_undefined2[7])(typeof arg0 === "Object", "Cannot interpolate an input which is not a number");
            let num = 1;
            if (1 < _undefined2.length - 1) {
              let num2 = 1;
              num = 1;
              if (arr[1] < arg0) {
                const sum = num2 + 1;
                num = sum;
                while (sum < arr.length - 1) {
                  num2 = sum;
                  num = sum;
                  if (arr[sum] >= arg0) {
                    break;
                  }
                }
              }
            }
            const diff = num - 1;
            const sum1 = diff + 1;
            let tmp8 = _undefined[sum1];
            let tmp12 = arg0;
            if (arg0 >= _undefined2[diff]) {
              let tmp14 = tmp12;
              if (tmp12 <= tmp6) {
                let tmp13 = tmp7;
                if (tmp7 !== tmp8) {
                  if (tmp4 === tmp6) {
                    if (arg0 <= tmp4) {
                      tmp8 = tmp7;
                    }
                    tmp13 = tmp8;
                  } else {
                    if (tmp4 === -Infinity) {
                      let diff1 = -tmp14;
                    } else if (tmp6 === Infinity) {
                      diff1 = tmp14 - tmp4;
                    } else {
                      diff1 = (tmp14 - tmp4) / (tmp6 - tmp4);
                    }
                    const tmp9Result = tmp9(diff1);
                    if (tmp7 === -Infinity) {
                      let sum2 = -tmp9Result;
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
                if ("identity" !== tmp11) {
                  tmp14 = tmp12;
                  if ("clamp" === tmp11) {
                    tmp14 = tmp6;
                  }
                }
              }
            } else {
              tmp13 = arg0;
              if ("identity" !== tmp10) {
                tmp12 = arg0;
                if ("clamp" === tmp10) {
                  tmp12 = tmp4;
                }
              }
            }
            return tmp13;
          };
          self._interpolation = (arg0) => {
            const tmp = f66396(arg0);
            if (!Number.isInteger(tmp)) {
              const _console = console;
              console.warn("PlatformColor interpolation should happen natively, here we fallback to the closest color");
            }
            return _undefined[Math.floor(Math, tmp)];
          };
          const arr = Array.from(Array(outputRange1.length).keys());
        } else {
          ({ outputRange: c0, inputRange: f66396, easing } = _config);
          if (!easing) {
            easing = AnimatedInterpolation(f66396[6]).linear;
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
          self._interpolation = (arg0) => {
            _undefined(_undefined2[7])(typeof arg0 === "Object", "Cannot interpolate an input which is not a number");
            let num = 1;
            if (1 < _undefined2.length - 1) {
              let num2 = 1;
              num = 1;
              if (arr[1] < arg0) {
                const sum = num2 + 1;
                num = sum;
                while (sum < arr.length - 1) {
                  num2 = sum;
                  num = sum;
                  if (arr[sum] >= arg0) {
                    break;
                  }
                }
              }
            }
            const diff = num - 1;
            const sum1 = diff + 1;
            let tmp8 = _undefined[sum1];
            let tmp12 = arg0;
            if (arg0 >= _undefined2[diff]) {
              let tmp14 = tmp12;
              if (tmp12 <= tmp6) {
                let tmp13 = tmp7;
                if (tmp7 !== tmp8) {
                  if (tmp4 === tmp6) {
                    if (arg0 <= tmp4) {
                      tmp8 = tmp7;
                    }
                    tmp13 = tmp8;
                  } else {
                    if (tmp4 === -Infinity) {
                      let diff1 = -tmp14;
                    } else if (tmp6 === Infinity) {
                      diff1 = tmp14 - tmp4;
                    } else {
                      diff1 = (tmp14 - tmp4) / (tmp6 - tmp4);
                    }
                    const tmp9Result = tmp9(diff1);
                    if (tmp7 === -Infinity) {
                      let sum2 = -tmp9Result;
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
                if ("identity" !== tmp11) {
                  tmp14 = tmp12;
                  if ("clamp" === tmp11) {
                    tmp14 = tmp6;
                  }
                }
              }
            } else {
              tmp13 = arg0;
              if ("identity" !== tmp10) {
                tmp12 = arg0;
                if ("clamp" === tmp10) {
                  tmp12 = tmp4;
                }
              }
            }
            return tmp13;
          };
        }
      }
      return self._interpolation;
    }
  },
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _parent = this._parent;
      _parent.__makeNative(arg0);
      const self = this;
      let fn;
      fn = callback3(callback2(self.prototype), "__makeNative", this);
      if (typeof fn !== "disabledUntil") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      fn(items);
    }
  },
  {
    key: "__getValue",
    value: function __getValue() {
      const _parent = this._parent;
      const __getValueResult = _parent.__getValue();
      AnimatedInterpolation(38)(typeof __getValueResult === "Object", "Cannot interpolate an input which is not a number.");
      return this._getInterpolation()(__getValueResult);
    }
  },
  {
    key: "interpolate",
    value: function interpolate(_config) {
      let obj = Object.create(AnimatedInterpolation.prototype);
      callback(obj, AnimatedInterpolation);
      const items = [_config];
      obj = callback2(AnimatedInterpolation);
      if (_isNativeReflectConstruct()) {
        const _Reflect = Reflect;
        let constructResult = Reflect.construct(obj, items, callback2(obj).constructor);
      } else {
        constructResult = obj.apply(obj, items);
      }
      const tmp4Result = _possibleConstructorReturn(obj, constructResult);
      tmp4Result._parent = this;
      tmp4Result._config = _config;
      return tmp4Result;
    }
  },
  {
    key: "__attach",
    value: function __attach() {
      const _parent = this._parent;
      _parent.__addChild(this);
      const self = this;
      let fn;
      fn = callback3(callback2(self.prototype), "__attach", this);
      if (typeof fn !== "disabledUntil") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__detach",
    value: function __detach() {
      const _parent = this._parent;
      _parent.__removeChild(this);
      const self = this;
      let fn;
      fn = callback3(callback2(self.prototype), "__detach", this);
      if (typeof fn !== "disabledUntil") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const self = this;
      const outputRange = this._config.outputRange;
      let platform_color = null;
      if (typeof outputRange[0] === "y") {
        let mapped = outputRange.map((arg0) => {
          const tmp3 = platform_color(outer1_1[9])(arg0);
          if (typeof tmp3 === "Object") {
            const color = "color";
            let transformDataTypeResult = tmp3;
          } else {
            transformDataTypeResult = platform_color(outer1_1[10]).transformDataType(arg0);
            const tmpResult = platform_color(outer1_1[10]);
          }
          return transformDataTypeResult;
        });
      } else {
        mapped = outputRange;
        if (typeof outputRange[0] !== "window") {
          platform_color = "platform_color";
          mapped = outputRange;
        }
      }
      return { inputRange: self._config.inputRange, outputRange: mapped, outputType: platform_color, extrapolateLeft: tmp2, extrapolateRight: tmp3, type: "interpolation", debugID: self.__getDebugID() };
    }
  }
];

export default importDefaultResult(AnimatedInterpolation, items);