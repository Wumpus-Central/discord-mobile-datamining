// === Module 363: ? ===

// Module 363
import _modDef366 from "module_366" /* 366 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

const AnimatedInterpolation = importDefault;
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
function mapStringToNumericComponents(str) {
  const tmp = AnimatedInterpolation(51)(str);
  let tmp3 = null == tmp;
  if (!tmp3) {
    tmp3 = typeof tmp !== "object";
  }
  AnimatedInterpolation(38)(tmp3, "PlatformColors are not supported");
  if (typeof tmp === "number") {
    let num3 = tmp;
    if (!tmp) {
      num3 = 0;
    }
    let obj = { isColor: true, components: null };
    const items = [(4278190080 & num3) >>> 24, (16711680 & num3) >>> 16, (65280 & num3) >>> 8, (255 & num3) / 255];
    obj.components = items;
    return obj;
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
      arr = items1.push(parseFloat(match[0]));
      num = match.index + match[0].length;
      match = re7.exec(str);
      num2 = num;
    }
    AnimatedInterpolation(38)(items1.length > 0, "outputRange must contain color or value with numeric component");
    if (num2 < "outputRange must contain color or value with numeric component".length) {
      items1.push(str.substring(num2, str.length));
    }
    obj = { isColor: false, components: items1 };
    return obj;
  }
  const tmp2 = AnimatedInterpolation(38);
}
const re7 = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;
class AnimatedInterpolation {
  constructor(arg0, arg1) {
    self = this;
    tmp = c2(this, AnimatedInterpolation);
    items = [];
    items[0] = arg1;
    tmp2 = closure_4;
    obj = closure_4(AnimatedInterpolation);
    tmp3 = closure_3;
    if (metroRequire()) {
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
_inherits(AnimatedInterpolation, _modDef366);
const entry = {
  key: "_getInterpolation",
  value: function _getInterpolation() {
    const self = this;
    if (!this._interpolation) {
      const _config = self._config;
      if (_config.outputRange) {
        if (typeof _config.outputRange[0] === "string") {
          closure_130_0 = _config;
          outputRange1(_interpolation[7])(_config.outputRange.length >= 2, "Bad output range");
          const outputRange = _config.outputRange;
          let mapped = outputRange.map(mapStringToNumericComponents);
          closure_130_1 = mapped;
          const isColor = mapped[0].isColor;
          closure_130_2 = isColor;
          const mapped1 = mapped.map((components) => {
            components = components.components;
            if (easing) {
              let found = components;
            } else {
              found = components.filter((item) => typeof item === "number");
            }
            return found;
          });
          closure_130_3 = mapped1;
          const first = mapped1[0];
          closure_130_4 = first.map((item, index) => {
            const obj = {};
            const merged = Object.assign(outputRange1);
            obj.outputRange = extrapolate.map((item) => item[c0]);
            c0 = undefined;
            c1 = undefined;
            easing = undefined;
            extrapolate = undefined;
            ({ outputRange: c0, inputRange: c1, easing } = obj);
            if (!easing) {
              easing = AnimatedInterpolation(364).linear;
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
              outputRange1(_interpolation[7])(typeof num === "number", "Cannot interpolate an input which is not a number");
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
                if (tmp12 <= tmp6) {
                  let tmp13 = tmp7;
                  if (tmp7 !== tmp8) {
                    if (tmp4 === tmp6) {
                      if (num <= tmp4) {
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
          self._interpolation = isColor ? ((arg0) => {
            closure_0 = arg0;
            const mapped = extrapolate.map((fn, index) => {
              const tmp = fn(closure_0);
              if (index < 3) {
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
            closure_0 = arg0;
            closure_1 = extrapolate.map((fn) => fn(closure_0));
            closure_2 = 0;
            const components = _interpolation[0].components;
            const mapped = components.map((item) => {
              let tmp = item;
              if (typeof item === "number") {
                closure_2 = tmp4 + 1;
                tmp = closure_1[tmp4];
              }
              return tmp;
            });
            return mapped.join("");
          });
        }
      }
      if (typeof _config.outputRange[0] === "object") {
        outputRange1 = _config.outputRange;
        const _Array = Array;
        const _Array2 = Array;
        let obj = {};
        const ArrayResult = Array(outputRange1.length);
        let merged = Object.assign(_config);
        obj.inputRange = _config.inputRange;
        obj.outputRange = Array.from(Array(outputRange1.length).keys());
        closure_129_0 = undefined;
        closure_129_1 = undefined;
        closure_129_2 = undefined;
        let extrapolateLeft;
        let extrapolateRight;
        ({ outputRange: closure_129_0, inputRange: closure_129_1, easing: easing2 } = obj);
        if (!easing2) {
          easing2 = outputRange1(_interpolation[6]).linear;
        }
        closure_129_2 = easing2;
        extrapolateLeft = "extend";
        if (undefined !== obj.extrapolateLeft) {
          extrapolateLeft = obj.extrapolateLeft;
        } else if (undefined !== obj.extrapolate) {
          extrapolateLeft = obj.extrapolate;
        }
        extrapolateRight = "extend";
        if (undefined !== obj.extrapolateRight) {
          extrapolateRight = obj.extrapolateRight;
        } else if (undefined !== obj.extrapolate) {
          extrapolateRight = obj.extrapolate;
        }
        _interpolation = (num) => {
          outputRange1(_interpolation[7])(typeof num === "number", "Cannot interpolate an input which is not a number");
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
            if (tmp12 <= tmp6) {
              let tmp13 = tmp7;
              if (tmp7 !== tmp8) {
                if (tmp4 === tmp6) {
                  if (num <= tmp4) {
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
        const arr = Array.from(Array(outputRange1.length).keys());
      } else {
        ({ outputRange: outputRange1, inputRange: _interpolation, easing } = _config);
        if (!easing) {
          easing = outputRange1(_interpolation[6]).linear;
        }
        let extrapolate = "extend";
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
          outputRange1(_interpolation[7])(typeof num === "number", "Cannot interpolate an input which is not a number");
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
            if (tmp12 <= tmp6) {
              let tmp13 = tmp7;
              if (tmp7 !== tmp8) {
                if (tmp4 === tmp6) {
                  if (num <= tmp4) {
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
  }
};
let items = [
  entry,
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _parent = this._parent;
      _parent.__makeNative(arg0);
      const self = this;
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedInterpolation.prototype), "__makeNative", this);
      if (typeof fn === "function") {
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
      AnimatedInterpolation(38)(typeof __getValueResult === "number", "Cannot interpolate an input which is not a number.");
      return this._getInterpolation()(__getValueResult);
    }
  },
  {
    key: "interpolate",
    value: function interpolate(_config) {
      let obj = Object.create(AnimatedInterpolation.prototype);
      _classCallCheck(obj, AnimatedInterpolation);
      const items = [_config];
      obj = _getPrototypeOf(AnimatedInterpolation);
      if (metroRequire()) {
        const _Reflect = Reflect;
        let constructResult = Reflect.construct(obj, items, _getPrototypeOf(obj).constructor);
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
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedInterpolation.prototype), "__attach", this);
      if (typeof fn === "function") {
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
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedInterpolation.prototype), "__detach", this);
      if (typeof fn === "function") {
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
      let color = null;
      if (typeof outputRange[0] === "string") {
        let mapped = outputRange.map((item) => {
          const tmp3 = AnimatedInterpolation(50)(item);
          if (typeof tmp3 === "number") {
            color = "color";
            let transformDataTypeResult = tmp3;
          } else {
            transformDataTypeResult = AnimatedInterpolation(357).transformDataType(item);
            const tmpResult = AnimatedInterpolation(357);
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
      return { inputRange: self._config.inputRange, outputRange: mapped, outputType: color, extrapolateLeft: self._config.extrapolateLeft || self._config.extrapolate || "extend", extrapolateRight: self._config.extrapolateRight || self._config.extrapolate || "extend", type: "interpolation", debugID: self.__getDebugID() };
    }
  }
];

export default _createClass(AnimatedInterpolation, items);