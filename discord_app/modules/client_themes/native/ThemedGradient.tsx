// === Module 10211: ThemedGradient ===

// Module 10211 (ThemedGradient)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1253 */;
import SentryUtilsDefault from "SentryUtils" /* 1254 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4896 */;
import ColorUtils from "ColorUtils" /* 4927 */;
import utils_ColorDefault from "utils/Color" /* 4928 */;
import shared from "shared" /* 4929 */;
import GuildThemePresets from "GuildThemePresets" /* 4933 */;
import useRoutedActiveGuildThemeDefault from "useRoutedActiveGuildTheme" /* 4935 */;
import useCustomThemeDisplaySettings from "useCustomThemeDisplaySettings" /* 4990 */;
import useThemeDefault from "useTheme" /* 4991 */;
import LinearGradientDefault from "LinearGradient" /* 5387 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4897 */;

require = fn;
function getMixedGradientColor(mixColorOverride) {
  ({ mixAmount, theme } = mixColorOverride);
  const obj = { mixAmount, mixColorOverride: mixColorOverride.mixColorOverride, theme };
  let mixAmount1 = obj.mixAmount;
  if (mixAmount1 === undefined) {
    mixAmount1 = {};
  }
  ({ mixColorOverride, darkFallbackOpacity, theme: theme2 } = obj);
  if (darkFallbackOpacity === undefined) {
    darkFallbackOpacity = 0.7;
  }
  let num = obj.lightFallbackOpacity;
  if (num === undefined) {
    num = 0.8;
  }
  if (null == mixColorOverride) {
    const isThemeDarkResult = shared.isThemeDark(theme2);
    if (isThemeDarkResult) {
      num = darkFallbackOpacity;
    }
    let tmp4 = isThemeDarkResult ? mixAmount1.dark : mixAmount1.light;
    if (tmp4 == null) {
      tmp4 = num;
    }
    let num2 = 255;
    if (isThemeDarkResult) {
      num2 = 0;
    }
    mixColorOverride = new utils_ColorDefault(num2, num2, num2, tmp4);
  }
  const obj2 = { mixAmount, theme };
  let mixAmount2 = obj2.mixAmount;
  if (mixAmount2 === undefined) {
    mixAmount2 = {};
  }
  ({ darkFallbackAmount, theme: theme3 } = obj2);
  if (darkFallbackAmount === undefined) {
    darkFallbackAmount = 0.3;
  }
  let num3 = obj2.lightFallbackAmount;
  if (num3 === undefined) {
    num3 = 0.2;
  }
  if (obj6.isThemeDark(theme3)) {
    if (null != mixAmount2.dark) {
      darkFallbackAmount = 1 - mixAmount2.dark;
    }
    num3 = darkFallbackAmount;
  } else if (null != mixAmount2.light) {
    num3 = 1 - mixAmount2.light;
  }
  obj6 = shared;
  const tmp12Result = ColorUtils;
  ({ r, g, b } = ColorUtils.hexToRgb(mixColorOverride.color));
  const hexToRgbResult = ColorUtils.hexToRgb(mixColorOverride.color);
  const tmp12Result2 = ColorUtils;
  const tmp15 = new utils_ColorDefault(r, g, b, num3);
  return tmp12Result2.mixColors(mixColorOverride, new utils_ColorDefault(r, g, b, num3)).toHexString();
}
let theme = ["overlayOpacity", "customTheme"];
let closure_4 = ["activeGuildTheme", "theme"];
let closure_5 = ["overlayOpacity", "gradientOverride"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5090);
let closure_12 = createStyles.createStyles({ softenGradient: { flex: 1 }, linearGradient: { flex: 1 }, absolute: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 } });
let angleCenter = { x: 0.5, y: 0.5 };
let c14 = 0.7;
let c15 = 0.5;
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function GradientBase(arg0) {
  const cResult = c.c(18);
  ({ colors, locations, angle, angleCenter, absolute, wide, tall, componentStyles } = arg0);
  if (undefined === angleCenter) {
    angleCenter = closure_13;
  }
  const tmp3 = closure_12();
  ({ width, height } = useWindowDimensionsDefault());
  if (cResult[0] === width) {
    if (cResult[1] === wide) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === height) {
      if (cResult[4] === tall) {
        let tmp8 = cResult[5];
      }
      if (absolute) {
        absolute = tmp3.absolute;
      }
      if (cResult[6] === componentStyles) {
        if (cResult[7] === tmp3.linearGradient) {
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp8) {
              if (cResult[10] === absolute) {
                let tmp10 = cResult[11];
              }
              if (cResult[12] === angle) {
                if (cResult[13] === angleCenter) {
                  if (cResult[14] === colors) {
                    if (cResult[15] === locations) {
                      if (cResult[16] === tmp10) {
                        let tmp11 = cResult[17];
                      }
                      return tmp11;
                    }
                  }
                }
              }
              const obj2 = { colors, locations, angle, angleCenter, useAngle: true, style: tmp10 };
              const tmp13 = collapsed(LinearGradientDefault, obj2);
              cResult[12] = angle;
              cResult[13] = angleCenter;
              cResult[14] = colors;
              cResult[15] = locations;
              cResult[16] = tmp10;
              cResult[17] = tmp13;
              tmp11 = tmp13;
            }
          }
        }
      }
      const items = [tmp6, tmp8, tmp3.linearGradient, absolute, componentStyles];
      cResult[6] = componentStyles;
      cResult[7] = tmp3.linearGradient;
      cResult[8] = tmp6;
      cResult[9] = tmp8;
      cResult[10] = absolute;
      cResult[11] = items;
      tmp10 = items;
    }
    let tmp9 = tall;
    if (tall) {
      const obj3 = { height };
      tmp9 = obj3;
    }
    cResult[3] = height;
    cResult[4] = tall;
    cResult[5] = tmp9;
    tmp8 = tmp9;
  }
  let tmp7 = wide;
  if (wide) {
    const obj4 = { width };
    tmp7 = obj4;
  }
  cResult[0] = width;
  cResult[1] = wide;
  cResult[2] = tmp7;
  tmp6 = tmp7;
  const tmp5 = useWindowDimensionsDefault();
}) : (function GradientBase(angleCenter) {
  angleCenter = angleCenter.angleCenter;
  ({ colors, locations, angle } = angleCenter);
  if (angleCenter === undefined) {
    angleCenter = closure_13;
  }
  ({ absolute, wide, tall } = angleCenter);
  const tmp = closure_12();
  ({ width, height } = useWindowDimensionsDefault());
  const obj = { colors, locations, angle, angleCenter, useAngle: true, style: null };
  const tmp2 = useWindowDimensionsDefault();
  if (wide) {
    const obj2 = { width };
    wide = obj2;
  }
  const items = [wide, , , , ];
  if (tall) {
    const obj3 = { height };
    tall = obj3;
  }
  items[1] = tall;
  items[2] = tmp.linearGradient;
  if (absolute) {
    absolute = tmp.absolute;
  }
  items[3] = absolute;
  items[4] = angleCenter.componentStyles;
  obj.style = items;
  return collapsed(LinearGradientDefault, obj);
});
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function Gradient(arg0) {
  const cResult = mix(576).c(25);
  ({ gradient, absolute, wide, tall, angleOverride, componentStyles, mix } = arg0);
  ({ mixAmount, mixColorOverride } = arg0);
  if (cResult[0] !== mixAmount) {
    let obj2 = mixAmount;
    if (undefined === mixAmount) {
      obj2 = {};
    }
    cResult[0] = mixAmount;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  dependencyMap = tmp3;
  const tmp4 = mixColorOverride(4991)();
  theme = tmp4;
  if (cResult[2] === gradient.colors) {
    if (cResult[3] === mix) {
      if (cResult[4] === tmp3) {
        if (cResult[5] === mixColorOverride) {
          if (cResult[6] === tmp4) {
            if (cResult[13] !== gradient.colors) {
              const _Symbol = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const fn2 = function b(stop) {
                  return stop.stop / 100;
                };
                cResult[15] = fn2;
                let tmp11 = fn2;
              } else {
                tmp11 = cResult[15];
              }
              const colors = gradient.colors;
              const mapped = colors.map(tmp11);
              cResult[13] = gradient.colors;
              cResult[14] = mapped;
            } else {
              if (angleOverride == null) {
                angleOverride = gradient.angle;
              }
              angleCenter = gradient.angleCenter;
              if (angleCenter == null) {
                angleCenter = closure_13;
              }
              if (cResult[16] === absolute) {
                if (cResult[17] === tmp5) {
                  if (cResult[18] === componentStyles) {
                    if (cResult[19] === tmp9) {
                      if (cResult[20] === angleOverride) {
                        if (cResult[21] === angleCenter) {
                          if (cResult[22] === tall) {
                            if (cResult[23] === wide) {
                              let tmp15 = cResult[24];
                            }
                            return tmp15;
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj3 = { colors: tmp5, locations: cResult[14], angle: angleOverride, angleCenter, absolute, wide, tall, componentStyles };
              const tmp18 = closure_10(closure_17, obj3);
              cResult[16] = absolute;
              cResult[17] = tmp5;
              cResult[18] = componentStyles;
              cResult[19] = cResult[14];
              cResult[20] = angleOverride;
              cResult[21] = angleCenter;
              cResult[22] = tall;
              cResult[23] = wide;
              cResult[24] = tmp18;
              tmp15 = tmp18;
            }
          }
        }
      }
    }
  }
  if (cResult[8] === mix) {
    if (cResult[9] === tmp3) {
      if (cResult[10] === mixColorOverride) {
        if (cResult[11] === tmp4) {
          let tmp6 = cResult[12];
        }
        const colors1 = gradient.colors;
        const mapped1 = colors1.map(tmp6);
        cResult[2] = gradient.colors;
        cResult[3] = mix;
        cResult[4] = tmp3;
        cResult[5] = mixColorOverride;
        cResult[6] = tmp4;
        cResult[7] = mapped1;
      }
    }
  }
  const fn = function f(arg0) {
    if (mix) {
      const obj = { color: nativeDefault.unsafe_rawColors[arg0.token], mixAmount, mixColorOverride, theme };
      let tmp3 = getMixedGradientColor(obj);
    } else {
      tmp3 = nativeDefault.unsafe_rawColors[arg0.token];
    }
    return tmp3;
  };
  cResult[8] = mix;
  cResult[9] = tmp3;
  cResult[10] = mixColorOverride;
  cResult[11] = tmp4;
  cResult[12] = fn;
  tmp6 = fn;
  let obj = mix(576);
}) : (function Gradient(mixColorOverride) {
  ({ gradient, angleOverride, mix: require, mixAmount } = mixColorOverride);
  ({ absolute, wide, tall, componentStyles } = mixColorOverride);
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  mixColorOverride = mixColorOverride.mixColorOverride;
  theme = mixAmount(mixColorOverride[13])();
  const colors = gradient.colors;
  let obj = {
    colors: colors.map((item) => {
      if (require) {
        const obj = { color: nativeDefault.unsafe_rawColors[item.token], mixAmount, mixColorOverride, theme };
        let tmp3 = getMixedGradientColor(obj);
      } else {
        tmp3 = nativeDefault.unsafe_rawColors[item.token];
      }
      return tmp3;
    }),
    locations: null,
    angle: null,
    angleCenter: null,
    absolute: null,
    wide: null,
    tall: null,
    componentStyles: null
  };
  const colors1 = gradient.colors;
  obj.locations = colors1.map((stop) => stop.stop / 100);
  if (angleOverride == null) {
    angleOverride = gradient.angle;
  }
  obj.angle = angleOverride;
  angleCenter = gradient.angleCenter;
  if (angleCenter == null) {
    angleCenter = closure_13;
  }
  obj.angleCenter = angleCenter;
  obj.absolute = absolute;
  obj.wide = wide;
  obj.tall = tall;
  obj.componentStyles = componentStyles;
  return closure_10(closure_17, obj);
});
let closure_18 = tmp3;
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildThemePresetGradient(arg0) {
  const cResult = mix(576).c(26);
  ({ preset, absolute, wide, tall, angleOverride, componentStyles, mix } = arg0);
  ({ mixAmount, mixColorOverride } = arg0);
  if (cResult[0] !== mixAmount) {
    let obj2 = mixAmount;
    if (undefined === mixAmount) {
      obj2 = {};
    }
    cResult[0] = mixAmount;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  dependencyMap = tmp4;
  const tmp5 = mixColorOverride(4991)();
  theme = tmp5;
  if (cResult[2] === mix) {
    if (cResult[3] === tmp4) {
      if (cResult[4] === mixColorOverride) {
        if (cResult[5] === preset) {
          if (cResult[6] === tmp5) {
            if (angleOverride == null) {
              angleOverride = cResult[8].angle;
            }
            if (cResult[17] === cResult[7]) {
              if (cResult[18] === absolute) {
                if (cResult[19] === componentStyles) {
                  if (cResult[20] === tmp7) {
                    if (cResult[21] === tmp8) {
                      if (cResult[22] === angleOverride) {
                        if (cResult[23] === tall) {
                          if (cResult[24] === wide) {
                            let tmp21 = cResult[25];
                          }
                          return tmp21;
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj3 = { colors: cResult[9], locations: cResult[10], angle: angleOverride, angleCenter, absolute, wide, tall, componentStyles };
            const tmp24 = closure_10(cResult[7], obj3);
            cResult[17] = cResult[7];
            cResult[18] = absolute;
            cResult[19] = componentStyles;
            cResult[20] = cResult[9];
            class A {
              constructor(arg0) {
                if (mix) {
                  tmp = getMixedGradientColor;
                  obj = { color: null, mixAmount: null, mixColorOverride: null, theme: null };
                  obj.color = arg0.hex;
                  tmp2 = closure_2;
                  obj.mixAmount = closure_2;
                  tmp3 = mixColorOverride;
                  obj.mixColorOverride = mixColorOverride;
                  tmp4 = closure_3;
                  obj.theme = closure_3;
                  num = 0;
                  hex = getMixedGradientColor(obj);
                } else {
                  hex = arg0.hex;
                }
                return hex;
              }
            }
            cResult[22] = angleOverride;
            cResult[23] = tall;
            cResult[24] = wide;
            cResult[25] = tmp24;
            tmp21 = tmp24;
          }
        }
      }
    }
  }
  let obj = mix(576);
  const guildThemePresetAppearance = mix(4933).getGuildThemePresetAppearance(preset, tmp5);
  if (cResult[11] === mix) {
    if (cResult[12] === tmp4) {
      if (cResult[13] === mixColorOverride) {
        if (cResult[14] === tmp5) {
          let tmp10 = cResult[15];
        }
        const colors = guildThemePresetAppearance.colors;
        const mapped = colors.map(tmp10);
        const _Symbol = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function w(stop) {
            return stop.stop / 100;
          };
          cResult[16] = fn;
          let tmp14 = fn;
        } else {
          tmp14 = cResult[16];
        }
        const colors1 = guildThemePresetAppearance.colors;
        const mapped1 = colors1.map(tmp14);
        cResult[2] = mix;
        cResult[3] = tmp4;
        cResult[4] = mixColorOverride;
        cResult[5] = preset;
        cResult[6] = tmp5;
        cResult[7] = closure_17;
        cResult[8] = guildThemePresetAppearance;
        cResult[9] = mapped;
        class A {
          constructor(arg0) {
            if (mix) {
              tmp = getMixedGradientColor;
              obj = { color: null, mixAmount: null, mixColorOverride: null, theme: null };
              obj.color = arg0.hex;
              tmp2 = closure_2;
              obj.mixAmount = closure_2;
              tmp3 = mixColorOverride;
              obj.mixColorOverride = mixColorOverride;
              tmp4 = closure_3;
              obj.theme = closure_3;
              num = 0;
              hex = getMixedGradientColor(obj);
            } else {
              hex = arg0.hex;
            }
            return hex;
          }
        }
        cResult[10] = mapped1;
      }
    }
  }
  class A {
    constructor(arg0) {
      if (mix) {
        tmp = getMixedGradientColor;
        obj = { color: null, mixAmount: null, mixColorOverride: null, theme: null };
        obj.color = arg0.hex;
        tmp2 = closure_2;
        obj.mixAmount = closure_2;
        tmp3 = mixColorOverride;
        obj.mixColorOverride = mixColorOverride;
        tmp4 = closure_3;
        obj.theme = closure_3;
        num = 0;
        hex = getMixedGradientColor(obj);
      } else {
        hex = arg0.hex;
      }
      return hex;
    }
  }
  cResult[11] = mix;
  cResult[12] = tmp4;
  cResult[13] = mixColorOverride;
  cResult[14] = tmp5;
  cResult[15] = A;
  tmp10 = A;
  const tmpResult = mix(4933);
}) : (function GuildThemePresetGradient(mixColorOverride) {
  ({ angleOverride, mix: require, mixAmount } = mixColorOverride);
  ({ preset, absolute, wide, tall, componentStyles } = mixColorOverride);
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  mixColorOverride = mixColorOverride.mixColorOverride;
  const tmp = mixAmount(mixColorOverride[13])();
  theme = tmp;
  const guildThemePresetAppearance = require("GuildThemePresets").getGuildThemePresetAppearance(preset, tmp);
  const colors = guildThemePresetAppearance.colors;
  const obj2 = {
    colors: colors.map((hex) => {
      if (require) {
        const obj = { color: hex.hex, mixAmount, mixColorOverride, theme };
        hex = getMixedGradientColor(obj);
      } else {
        hex = hex.hex;
      }
      return hex;
    }),
    locations: null,
    angle: null,
    angleCenter: null,
    absolute: null,
    wide: null,
    tall: null,
    componentStyles: null
  };
  const colors1 = guildThemePresetAppearance.colors;
  obj2.locations = colors1.map((stop) => stop.stop / 100);
  if (angleOverride == null) {
    angleOverride = guildThemePresetAppearance.angle;
  }
  obj2.angle = angleOverride;
  obj2.angleCenter = angleCenter;
  obj2.absolute = absolute;
  obj2.wide = wide;
  obj2.tall = tall;
  obj2.componentStyles = componentStyles;
  return closure_10(closure_17, obj2);
});
const re20 = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function CustomThemesGradient(arg0) {
  const cResult = reduced(mixColorOverride[10]).c(26);
  ({ colors, gradientAngle, gradientColorStops, absolute, wide, tall, mixAmount, componentStyles, baseMix, mix, mixColorOverride, theme } = arg0);
  if (undefined === mixAmount) {
    mixAmount = {};
  }
  const tmp3 = closure_12();
  let obj = reduced(mixColorOverride[10]);
  const tmp4 = mixAmount;
  ({ width, height } = mixAmount(mixColorOverride[11])());
  mixAmount = undefined;
  mixColorOverride = undefined;
  theme = undefined;
  reduced = baseMix;
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  let mapped = colors;
  if (mix) {
    mapped = colors.map((item) => {
      let obj = reduced;
      let tmp2 = dependencyMap;
      let num = c15;
      let obj2 = reduced;
      const result = reduced / 100;
      if (reduced === undefined) {
        obj2 = {};
      }
      if (null == tmp2) {
        const diff = 1 - result;
        let sum = num + 0.2 * diff;
        const isThemeDarkResult = shared.isThemeDark(theme);
        if (isThemeDarkResult) {
          sum = num + 0.25 * diff;
        }
        let tmp6 = isThemeDarkResult ? obj2.dark : obj2.light;
        if (tmp6 == null) {
          tmp6 = sum;
        }
        let num3 = 255;
        if (isThemeDarkResult) {
          num3 = 0;
        }
        tmp2 = new utils_ColorDefault(num3, num3, num3, tmp6);
      }
      if (reduced === undefined) {
        obj = {};
      }
      let num4 = num;
      if (num === undefined) {
        num4 = 0.3;
      }
      if (num === undefined) {
        num = 0.2;
      }
      if (obj3.isThemeDark(theme)) {
        if (null != obj.dark) {
          num4 = 1 - obj.dark;
        }
        num = num4;
      } else if (null != obj.light) {
        num = 1 - obj.light;
      }
      obj3 = shared;
      const tmp14Result = ColorUtils;
      ({ r, g, b } = ColorUtils.hexToRgb(item));
      const hexToRgbResult = ColorUtils.hexToRgb(item);
      const tmp14Result3 = ColorUtils;
      const tmp17 = new utils_ColorDefault(r, g, b, num);
      const mixColorsResult = tmp14Result3.mixColors(tmp2, new utils_ColorDefault(r, g, b, num));
      return client_themes_ClientThemesUtils.colorToHex(mixColorsResult);
    });
  }
  let arr2 = mapped;
  if (1 === mapped.length) {
    const items = [mapped[0], mapped[0]];
    arr2 = items;
  }
  closure_129_0 = arr2;
  if (cResult[0] !== gradientAngle) {
    const _Math = Math;
    const result = (gradientAngle - 90) * Math.PI / 180;
    const _Math2 = Math;
    const cosResult = Math.cos(result);
    const _Math3 = Math;
    const sinResult = Math.sin(result);
    let obj2 = { start: null, end: null };
    const point = { x: 0.6 - 0.7142857142857143 * cosResult, y: 0.5 - 0.7142857142857143 * sinResult };
    obj2.start = point;
    const point1 = { x: 0.6 + 0.7142857142857143 * cosResult, y: 0.5 + 0.7142857142857143 * sinResult };
    obj2.end = point1;
    cResult[0] = gradientAngle;
    cResult[1] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  ({ start, end } = tmp6);
  reduced = arr2.reduce((arr, item) => {
    if (typeof item === "string") {
      if (regex.test(item)) {
        arr = arr.push(item);
        return arr;
      }
    }
    try {
      arr.push(reduced(dependencyMap[17])(item).hex("rgb"));
      return arr;
    } catch (err) {
    }
  }, []);
  closure_129_1 = reduced;
  if (gradientColorStops === undefined) {
    gradientColorStops = [];
  }
  if (gradientColorStops.length === reduced.length) {
    let mapped1 = gradientColorStops.map((item) => item / 100);
  } else if (1 === reduced.length) {
    mapped1 = [0, 1];
  } else {
    mapped1 = reduced.map((item, index) => index / (reduced.length - 1));
  }
  if (cResult[2] === arr2) {
    if (cResult[3] === reduced.length) {
      let tmp11 = cResult[4];
    }
    if (cResult[5] === arr2) {
      if (cResult[6] === reduced) {
        let tmp12 = cResult[7];
      }
      const effect = noop.useEffect(tmp11, tmp12);
      if (reduced.length < 2) {
        return null;
      } else {
        if (cResult[8] === width) {
          if (cResult[9] === wide) {
            let tmp15 = cResult[10];
          }
          if (cResult[11] === height) {
            if (cResult[12] === tall) {
              let tmp17 = cResult[13];
            }
            if (absolute) {
              absolute = tmp3.absolute;
            }
            if (cResult[14] === componentStyles) {
              if (cResult[15] === tmp3.linearGradient) {
                if (cResult[16] === tmp15) {
                  if (cResult[17] === tmp17) {
                    if (cResult[18] === absolute) {
                      let tmp19 = cResult[19];
                    }
                    if (cResult[20] === end) {
                      if (cResult[21] === mapped1) {
                        if (cResult[22] === start) {
                          if (cResult[23] === tmp19) {
                            if (cResult[24] === reduced) {
                              let tmp20 = cResult[25];
                            }
                            return tmp20;
                          }
                        }
                      }
                    }
                    let obj3 = { colors: reduced, locations: mapped1, start, end, style: tmp19 };
                    const tmp22 = closure_10(tmp4(tmp[12]), obj3);
                    cResult[20] = end;
                    cResult[21] = mapped1;
                    cResult[22] = start;
                    cResult[23] = tmp19;
                    cResult[24] = reduced;
                    cResult[25] = tmp22;
                    tmp20 = tmp22;
                  }
                }
              }
            }
            const items1 = [tmp15, tmp17, tmp3.linearGradient, absolute, componentStyles];
            cResult[14] = componentStyles;
            cResult[15] = tmp3.linearGradient;
            cResult[16] = tmp15;
            cResult[17] = tmp17;
            cResult[18] = absolute;
            cResult[19] = items1;
            tmp19 = items1;
          }
          let tmp18 = tall;
          if (tall) {
            const obj4 = { height };
            tmp18 = obj4;
          }
          cResult[11] = height;
          cResult[12] = tall;
          cResult[13] = tmp18;
          tmp17 = tmp18;
        }
        let tmp16 = wide;
        if (wide) {
          const obj5 = { width };
          tmp16 = obj5;
        }
        cResult[8] = width;
        cResult[9] = wide;
        cResult[10] = tmp16;
        tmp15 = tmp16;
      }
    }
    const items2 = [reduced, arr2];
    cResult[5] = arr2;
    cResult[6] = reduced;
    cResult[7] = items2;
    tmp12 = items2;
  }
  const fn = function _() {
    if (mixAmount.length < 2) {
      const _Error = Error;
      const error = new Error("Invalid custom theme gradient colors");
      const obj2 = { extra: null };
      const obj3 = { gradientColors: null };
      const _JSON = JSON;
      obj3.gradientColors = JSON.stringify(reduced);
      obj2.extra = obj3;
      SentryUtilsDefault.captureException(error, obj2);
    }
  };
  cResult[2] = arr2;
  cResult[3] = reduced.length;
  cResult[4] = fn;
  tmp11 = fn;
  const tmp5 = mixAmount(mixColorOverride[11])();
}) : (function CustomThemesGradient(arg0) {
  ({ colors, gradientColorStops, absolute, wide, tall, mixAmount } = arg0);
  ({ baseMix, gradientAngle, mix } = arg0);
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  let reduced;
  ({ mixColorOverride, componentStyles, theme } = arg0);
  const tmp = closure_12();
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  closure_129_0 = baseMix;
  ({ width, height } = reduced(1496)());
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  closure_129_1 = mixAmount;
  closure_129_2 = mixColorOverride;
  closure_129_3 = theme;
  let mapped = colors;
  if (mix) {
    mapped = colors.map((item) => {
      let obj = reduced;
      let tmp2 = dependencyMap;
      let num = c15;
      let obj2 = reduced;
      const result = reduced / 100;
      if (reduced === undefined) {
        obj2 = {};
      }
      if (null == tmp2) {
        const diff = 1 - result;
        let sum = num + 0.2 * diff;
        const isThemeDarkResult = shared.isThemeDark(theme);
        if (isThemeDarkResult) {
          sum = num + 0.25 * diff;
        }
        let tmp6 = isThemeDarkResult ? obj2.dark : obj2.light;
        if (tmp6 == null) {
          tmp6 = sum;
        }
        let num3 = 255;
        if (isThemeDarkResult) {
          num3 = 0;
        }
        tmp2 = new utils_ColorDefault(num3, num3, num3, tmp6);
      }
      if (reduced === undefined) {
        obj = {};
      }
      let num4 = num;
      if (num === undefined) {
        num4 = 0.3;
      }
      if (num === undefined) {
        num = 0.2;
      }
      if (obj3.isThemeDark(theme)) {
        if (null != obj.dark) {
          num4 = 1 - obj.dark;
        }
        num = num4;
      } else if (null != obj.light) {
        num = 1 - obj.light;
      }
      obj3 = shared;
      const tmp14Result = ColorUtils;
      ({ r, g, b } = ColorUtils.hexToRgb(item));
      const hexToRgbResult = ColorUtils.hexToRgb(item);
      const tmp14Result3 = ColorUtils;
      const tmp17 = new utils_ColorDefault(r, g, b, num);
      const mixColorsResult = tmp14Result3.mixColors(tmp2, new utils_ColorDefault(r, g, b, num));
      return client_themes_ClientThemesUtils.colorToHex(mixColorsResult);
    });
  }
  let arr2 = mapped;
  if (1 === mapped.length) {
    const items = [mapped[0], mapped[0]];
    arr2 = items;
  }
  let result = (gradientAngle - 90) * Math.PI / 180;
  const cosResult = Math.cos(result);
  const sinResult = Math.sin(result);
  const point = { x: 0.6 - 0.7142857142857143 * cosResult, y: 0.5 - 0.7142857142857143 * sinResult };
  const point1 = { x: 0.6 + 0.7142857142857143 * cosResult, y: 0.5 + 0.7142857142857143 * sinResult };
  reduced = arr2.reduce((arr, item) => {
    if (typeof item === "string") {
      if (regex.test(item)) {
        arr = arr.push(item);
        return arr;
      }
    }
    try {
      arr.push(reduced(dependencyMap[17])(item).hex("rgb"));
      return arr;
    } catch (err) {
    }
  }, []);
  if (gradientColorStops === undefined) {
    gradientColorStops = [];
  }
  if (gradientColorStops.length === reduced.length) {
    let mapped1 = gradientColorStops.map((item) => item / 100);
  } else if (1 === reduced.length) {
    mapped1 = [0, 1];
  } else {
    mapped1 = reduced.map((item, index) => index / (reduced.length - 1));
  }
  const items1 = [reduced, arr2];
  const effect = noop.useEffect(() => {
    if (reduced.length < 2) {
      const _Error = Error;
      const error = new Error("Invalid custom theme gradient colors");
      const obj2 = { extra: null };
      const obj3 = { gradientColors: null };
      const _JSON = JSON;
      obj3.gradientColors = JSON.stringify(reduced);
      obj2.extra = obj3;
      SentryUtilsDefault.captureException(error, obj2);
    }
  }, items1);
  let tmp10Result = null;
  if (reduced.length >= 2) {
    let obj = { colors: reduced, locations: mapped1, start: point, end: point1, style: null };
    if (wide) {
      let obj2 = { width };
      wide = obj2;
    }
    const items2 = [wide, , , , ];
    if (tall) {
      let obj3 = { height };
      tall = obj3;
    }
    items2[1] = tall;
    items2[2] = tmp.linearGradient;
    if (absolute) {
      absolute = tmp.absolute;
    }
    items2[3] = absolute;
    items2[4] = componentStyles;
    obj.style = items2;
    tmp10Result = closure_10(reduced(5387), obj);
    const tmp2Result = reduced(5387);
  }
  return tmp10Result;
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function useThemedGradientCommon() {
  const cResult = c.c(3);
  const tmp2 = closure_12();
  const tmp3 = useThemeDefault();
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp5 = shared.isThemeDark(tmp3) ? unsafe_rawColors.BLACK : unsafe_rawColors.WHITE;
  if (cResult[0] === tmp5) {
    if (cResult[1] === tmp2) {
      let tmp6 = cResult[2];
    }
    return tmp6;
  }
  const obj3 = { styles: tmp2, overlayColor: tmp5 };
  cResult[0] = tmp5;
  cResult[1] = tmp2;
  cResult[2] = obj3;
  tmp6 = obj3;
}) : (function useThemedGradientCommon() {
  const obj = { styles: closure_12(), overlayColor: null };
  const tmp = closure_12();
  const tmp2 = useThemeDefault();
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  obj.overlayColor = shared.isThemeDark(tmp2) ? unsafe_rawColors.BLACK : unsafe_rawColors.WHITE;
  return obj;
});
fn(558);
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActiveGuildThemeGradient(arg0) {
  const cResult = c.c(17);
  if (cResult[0] !== arg0) {
    ({ activeGuildTheme, theme } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_4);
    cResult[0] = arg0;
    cResult[1] = activeGuildTheme;
    cResult[2] = tmp9;
    cResult[3] = theme;
    let tmp6 = theme;
    let tmp5 = tmp9;
    let tmp4 = activeGuildTheme;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  if ("custom" === tmp4.type) {
    const customUserThemeSettings = tmp4.customUserThemeSettings;
    const first = customUserThemeSettings.colors[0];
    if (cResult[4] === first) {
      if (cResult[5] === tmp6) {
        let tmp18 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[7] = items;
        let tmp22 = items;
      } else {
        tmp22 = cResult[7];
      }
      let num13 = customUserThemeSettings.gradientAngle;
      if (num13 == null) {
        num13 = 0;
      }
      let GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
      if (GUILD_THEME_DEFAULT_BASE_MIX == null) {
        GUILD_THEME_DEFAULT_BASE_MIX = GuildThemePresets.GUILD_THEME_DEFAULT_BASE_MIX;
      }
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp18) {
          if (cResult[10] === num13) {
            if (cResult[11] === GUILD_THEME_DEFAULT_BASE_MIX) {
              if (cResult[12] === tmp6) {
                let tmp24 = cResult[13];
              }
              return tmp24;
            }
          }
        }
      }
      const obj2 = {};
      const merged = Object.assign(tmp5);
      obj2.colors = tmp18;
      obj2.gradientColorStops = tmp22;
      obj2.gradientAngle = num13;
      obj2.baseMix = GUILD_THEME_DEFAULT_BASE_MIX;
      obj2.theme = tmp6;
      const tmp30 = collapsed(closure_21, obj2);
      cResult[8] = tmp5;
      cResult[9] = tmp18;
      cResult[10] = num13;
      cResult[11] = GUILD_THEME_DEFAULT_BASE_MIX;
      cResult[12] = tmp6;
      cResult[13] = tmp30;
      tmp24 = tmp30;
    }
    const items1 = [];
    HermesBuiltin.arraySpread(GuildThemePresets.getSingleColorGuildThemeGradientColors(first, tmp6), 0);
    cResult[4] = first;
    cResult[5] = tmp6;
    cResult[6] = items1;
    tmp18 = items1;
    const tmpResult = GuildThemePresets;
  } else {
    if (cResult[14] === tmp4.preset) {
      if (cResult[15] === tmp5) {
        let tmp10 = cResult[16];
      }
      return tmp10;
    }
    const obj3 = {};
    const merged1 = Object.assign(tmp5);
    obj3.preset = tmp4.preset;
    const tmp16 = collapsed(closure_19, obj3);
    cResult[14] = tmp4.preset;
    cResult[15] = tmp5;
    cResult[16] = tmp16;
    tmp10 = tmp16;
  }
}) : (function ActiveGuildThemeGradient(arg0) {
  ({ activeGuildTheme, theme } = arg0);
  const merged = Object.assign(arg0, Object.assign({ activeGuildTheme: 0, theme: 0 }));
  if ("custom" === activeGuildTheme.type) {
    const customUserThemeSettings = activeGuildTheme.customUserThemeSettings;
    const obj2 = {};
    const merged1 = Object.assign(merged);
    const items = [];
    HermesBuiltin.arraySpread(GuildThemePresets.getSingleColorGuildThemeGradientColors(customUserThemeSettings.colors[0], theme), 0);
    obj2.colors = items;
    obj2.gradientColorStops = [];
    let num2 = customUserThemeSettings.gradientAngle;
    if (num2 == null) {
      num2 = 0;
    }
    obj2.gradientAngle = num2;
    let GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
    if (GUILD_THEME_DEFAULT_BASE_MIX == null) {
      GUILD_THEME_DEFAULT_BASE_MIX = GuildThemePresets.GUILD_THEME_DEFAULT_BASE_MIX;
    }
    obj2.baseMix = GUILD_THEME_DEFAULT_BASE_MIX;
    obj2.theme = theme;
    return collapsed(closure_21, obj2);
  } else {
    const obj = {};
    const merged2 = Object.assign(merged);
    obj.preset = activeGuildTheme.preset;
    return collapsed(closure_19, obj);
  }
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CustomThemedGradient(arg0) {
  const cResult = c.c(14);
  if (cResult[0] !== arg0) {
    ({ overlayOpacity, customTheme } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = customTheme;
    cResult[2] = tmp9;
    cResult[3] = overlayOpacity;
    let tmp6 = overlayOpacity;
    let tmp5 = tmp9;
    let tmp4 = customTheme;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  if (undefined === tmp6) {
    tmp6 = c14;
  }
  ({ styles, overlayColor } = closure_22());
  if (cResult[4] === tmp4.customThemeSettings) {
    if (cResult[5] === tmp4.theme) {
      if (cResult[6] === tmp5) {
        let tmp11 = cResult[7];
      }
      if (cResult[8] === overlayColor) {
        if (cResult[9] === tmp6) {
          if (cResult[10] === tmp5.withOverlay) {
            if (cResult[11] === styles) {
              if (cResult[12] === tmp11) {
                let tmp15 = cResult[13];
              }
              return tmp15;
            }
          }
        }
      }
      let tmp16 = tmp11;
      if (tmp5.withOverlay) {
        const obj2 = { style: styles.absolute, children: null };
        const items = [tmp11, ];
        const obj3 = { style: null };
        const items1 = [styles.softenGradient, ];
        const obj4 = { backgroundColor: ColorUtils.hexWithOpacity(overlayColor, tmp6) };
        items1[1] = obj4;
        obj3.style = items1;
        items[1] = collapsed(View, obj3);
        obj2.children = items;
        tmp16 = closure_1_11(View, obj2);
        const tmpResult = ColorUtils;
      }
      cResult[8] = overlayColor;
      cResult[9] = tmp6;
      cResult[10] = tmp5.withOverlay;
      cResult[11] = styles;
      cResult[12] = tmp11;
      cResult[13] = tmp16;
      tmp15 = tmp16;
    }
  }
  const obj5 = {};
  const merged = Object.assign(tmp5);
  const merged1 = Object.assign(tmp4.customThemeSettings);
  obj5.theme = tmp4.theme;
  const tmp14 = collapsed(closure_21, obj5);
  cResult[4] = tmp4.customThemeSettings;
  cResult[5] = tmp4.theme;
  cResult[6] = tmp5;
  cResult[7] = tmp14;
  tmp11 = tmp14;
  const tmp10 = closure_22();
}) : (function CustomThemedGradient(overlayOpacity) {
  let num = overlayOpacity.overlayOpacity;
  if (num === undefined) {
    num = 0.7;
  }
  const customTheme = overlayOpacity.customTheme;
  const merged = Object.assign(overlayOpacity, Object.assign({ overlayOpacity: 0, customTheme: 0 }));
  const tmp2 = closure_22();
  const styles = tmp2.styles;
  const obj = {};
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(customTheme.customThemeSettings);
  obj.theme = customTheme.theme;
  const tmp6 = collapsed(closure_21, obj);
  let tmp7 = tmp6;
  if (merged.withOverlay) {
    const obj2 = { style: styles.absolute, children: null };
    const items = [tmp6, ];
    const obj3 = { style: null };
    const items1 = [styles.softenGradient, ];
    const obj4 = { backgroundColor: ColorUtils.hexWithOpacity(tmp2.overlayColor, num) };
    items1[1] = obj4;
    obj3.style = items1;
    items[1] = collapsed(View, obj3);
    obj2.children = items;
    tmp7 = closure_1_11(View, obj2);
  }
  return tmp7;
});
function validateColors(arr) {
  return arr.reduce((arr, item) => {
    if (typeof item === "string") {
      if (regex.test(item)) {
        arr = arr.push(item);
        return arr;
      }
    }
    try {
      arr.push(reduced(dependencyMap[17])(item).hex("rgb"));
      return arr;
    } catch (err) {
    }
  }, []);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/client_themes/native/ThemedGradient.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ThemedGradient(arg0) {
  const cResult = c.c(2);
  ({ overlayOpacity, gradientOverride } = arg0);
  const tmp4 = _objectWithoutProperties(arg0, closure_5);
  if (undefined === overlayOpacity) {
    overlayOpacity = c14;
  }
  ({ styles, overlayColor } = closure_22());
  const withOverlay = tmp4.withOverlay;
  const tmp5 = closure_22();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ClientThemesBackgroundStore];
    const fn = function n() {
      return { preset: gradientPreset.gradientPreset };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmp7 = useThemeDefault();
  const preset = useStateFromStores.useStateFromStoresObject(tmp8, tmp9).preset;
  const tmp11 = useRoutedActiveGuildThemeDefault();
  const tmpResult = useStateFromStores;
  const customThemeDisplaySettings = useCustomThemeDisplaySettings.useCustomThemeDisplaySettings();
  if (null != gradientOverride) {
    if (tmp13) {
      if (gradientOverride.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        const obj2 = {};
        const merged = Object.assign(tmp4);
        const merged1 = Object.assign(gradientOverride.customThemeSettings);
        obj2.theme = gradientOverride.theme;
        const tmp60 = collapsed(closure_21, obj2);
        let tmp61 = tmp60;
        if (withOverlay) {
          const obj3 = { style: styles.absolute, children: null };
          const items1 = [tmp60, ];
          const obj4 = { style: null };
          const items2 = [styles.softenGradient, ];
          const obj5 = { backgroundColor: ColorUtils.hexWithOpacity(overlayColor, overlayOpacity) };
          items2[1] = obj5;
          obj4.style = items2;
          items1[1] = collapsed(View, obj4);
          obj3.children = items1;
          tmp61 = closure_1_11(View, obj3);
          const tmpResult8 = ColorUtils;
        }
        return tmp61;
      }
    }
    if (gradientOverride.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      const obj6 = {};
      const merged2 = Object.assign(tmp4);
      obj6.gradient = gradientOverride;
      const tmp49 = collapsed(closure_18, obj6);
      let tmp50 = tmp49;
      if (withOverlay) {
        const obj7 = { style: styles.absolute, children: null };
        const items3 = [tmp49, ];
        const obj8 = { style: null };
        const items4 = [styles.softenGradient, ];
        const obj9 = { backgroundColor: ColorUtils.hexWithOpacity(overlayColor, overlayOpacity) };
        items4[1] = obj9;
        obj8.style = items4;
        items3[1] = collapsed(View, obj8);
        obj7.children = items3;
        tmp50 = closure_1_11(View, obj7);
        const tmpResult9 = ColorUtils;
      }
      return tmp50;
    }
  }
  if (null != tmp11) {
    const obj10 = {};
    const merged3 = Object.assign(tmp4);
    obj10.activeGuildTheme = tmp11;
    obj10.theme = tmp7;
    const tmp40 = collapsed(closure_23, obj10);
    let tmp41 = tmp40;
    if (withOverlay) {
      const obj11 = { style: styles.absolute, children: null };
      const items5 = [tmp40, ];
      const obj12 = { style: null };
      const items6 = [styles.softenGradient, ];
      const obj13 = { backgroundColor: ColorUtils.hexWithOpacity(overlayColor, overlayOpacity) };
      items6[1] = obj13;
      obj12.style = items6;
      items5[1] = collapsed(View, obj12);
      obj11.children = items5;
      tmp41 = closure_1_11(View, obj11);
      const tmpResult10 = ColorUtils;
    }
    let tmp14 = tmp41;
  } else {
    if (tmp13) {
      if (tmp13) {
        const obj14 = {};
        const merged4 = Object.assign(tmp4);
        const merged5 = Object.assign(customThemeDisplaySettings.customTheme);
        obj14.theme = customThemeDisplaySettings.baseTheme;
        const tmp31 = collapsed(closure_21, obj14);
        let tmp32 = tmp31;
        if (withOverlay) {
          const obj15 = { style: styles.absolute, children: null };
          const items7 = [tmp31, ];
          const obj16 = { style: null };
          const items8 = [styles.softenGradient, ];
          const obj17 = { backgroundColor: ColorUtils.hexWithOpacity(overlayColor, overlayOpacity) };
          items8[1] = obj17;
          obj16.style = items8;
          items7[1] = collapsed(View, obj16);
          obj15.children = items7;
          tmp32 = closure_1_11(View, obj15);
          const tmpResult11 = ColorUtils;
        }
        tmp14 = tmp32;
      }
    }
    tmp14 = null;
    if (null != preset) {
      const obj18 = {};
      const merged6 = Object.assign(tmp4);
      obj18.gradient = preset;
      const tmp20 = collapsed(closure_18, obj18);
      let tmp21 = tmp20;
      if (withOverlay) {
        const obj19 = { style: styles.absolute, children: null };
        const items9 = [tmp20, ];
        const obj20 = { style: null };
        const items10 = [styles.softenGradient, ];
        const obj21 = { backgroundColor: ColorUtils.hexWithOpacity(overlayColor, overlayOpacity) };
        items10[1] = obj21;
        obj20.style = items10;
        items9[1] = collapsed(View, obj20);
        obj19.children = items9;
        tmp21 = closure_1_11(View, obj19);
        const tmpResult12 = ColorUtils;
      }
      tmp14 = tmp21;
    }
  }
  return tmp14;
}) : (function ThemedGradient(overlayOpacity) {
  let num = overlayOpacity.overlayOpacity;
  if (num === undefined) {
    num = 0.7;
  }
  const gradientOverride = overlayOpacity.gradientOverride;
  const merged = Object.assign(overlayOpacity, Object.assign({ overlayOpacity: 0, gradientOverride: 0 }));
  ({ styles, overlayColor } = closure_22());
  const withOverlay = merged.withOverlay;
  const tmp2 = closure_22();
  const tmp4 = useThemeDefault();
  const items = [ClientThemesBackgroundStore];
  const preset = useStateFromStores.useStateFromStoresObject(items, () => ({ preset: gradientPreset.gradientPreset })).preset;
  const tmp6 = useRoutedActiveGuildThemeDefault();
  const customThemeDisplaySettings = useCustomThemeDisplaySettings.useCustomThemeDisplaySettings();
  if (null != gradientOverride) {
    if (tmp8) {
      if (gradientOverride.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        const obj3 = {};
        const merged1 = Object.assign(merged);
        const merged2 = Object.assign(gradientOverride.customThemeSettings);
        obj3.theme = gradientOverride.theme;
        const tmp55 = collapsed(closure_21, obj3);
        let tmp56 = tmp55;
        if (withOverlay) {
          const obj4 = { style: styles.absolute, children: null };
          const items1 = [tmp55, ];
          const obj5 = { style: null };
          const items2 = [styles.softenGradient, ];
          const obj6 = { backgroundColor: ColorUtils.hexWithOpacity(overlayColor, num) };
          items2[1] = obj6;
          obj5.style = items2;
          items1[1] = collapsed(View, obj5);
          obj4.children = items1;
          tmp56 = closure_1_11(View, obj4);
          const tmp5Result = ColorUtils;
        }
        return tmp56;
      }
    }
    if (gradientOverride.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      const obj7 = {};
      const merged3 = Object.assign(merged);
      obj7.gradient = gradientOverride;
      const tmp44 = collapsed(closure_18, obj7);
      let tmp45 = tmp44;
      if (withOverlay) {
        const obj8 = { style: styles.absolute, children: null };
        const items3 = [tmp44, ];
        const obj9 = { style: null };
        const items4 = [styles.softenGradient, ];
        const obj10 = { backgroundColor: ColorUtils.hexWithOpacity(overlayColor, num) };
        items4[1] = obj10;
        obj9.style = items4;
        items3[1] = collapsed(View, obj9);
        obj8.children = items3;
        tmp45 = closure_1_11(View, obj8);
        const tmp5Result5 = ColorUtils;
      }
      return tmp45;
    }
  }
  if (null != tmp6) {
    const obj11 = {};
    const merged4 = Object.assign(merged);
    obj11.activeGuildTheme = tmp6;
    obj11.theme = tmp4;
    const tmp35 = collapsed(closure_23, obj11);
    let tmp36 = tmp35;
    if (withOverlay) {
      const obj12 = { style: styles.absolute, children: null };
      const items5 = [tmp35, ];
      const obj13 = { style: null };
      const items6 = [styles.softenGradient, ];
      const obj14 = { backgroundColor: ColorUtils.hexWithOpacity(overlayColor, num) };
      items6[1] = obj14;
      obj13.style = items6;
      items5[1] = collapsed(View, obj13);
      obj12.children = items5;
      tmp36 = closure_1_11(View, obj12);
      const tmp5Result6 = ColorUtils;
    }
    let tmp9 = tmp36;
  } else {
    if (tmp8) {
      if (tmp8) {
        const obj15 = {};
        const merged5 = Object.assign(merged);
        const merged6 = Object.assign(customThemeDisplaySettings.customTheme);
        obj15.theme = customThemeDisplaySettings.baseTheme;
        const tmp26 = collapsed(closure_21, obj15);
        let tmp27 = tmp26;
        if (withOverlay) {
          const obj16 = { style: styles.absolute, children: null };
          const items7 = [tmp26, ];
          const obj17 = { style: null };
          const items8 = [styles.softenGradient, ];
          const obj18 = { backgroundColor: ColorUtils.hexWithOpacity(overlayColor, num) };
          items8[1] = obj18;
          obj17.style = items8;
          items7[1] = collapsed(View, obj17);
          obj16.children = items7;
          tmp27 = closure_1_11(View, obj16);
          const tmp5Result7 = ColorUtils;
        }
        tmp9 = tmp27;
      }
    }
    tmp9 = null;
    if (null != preset) {
      const obj19 = {};
      const merged7 = Object.assign(merged);
      obj19.gradient = preset;
      const tmp15 = collapsed(closure_18, obj19);
      let tmp16 = tmp15;
      if (withOverlay) {
        const obj20 = { style: styles.absolute, children: null };
        const items9 = [tmp15, ];
        const obj21 = { style: null };
        const items10 = [styles.softenGradient, ];
        const obj22 = { backgroundColor: ColorUtils.hexWithOpacity(overlayColor, num) };
        items10[1] = obj22;
        obj21.style = items10;
        items9[1] = collapsed(View, obj21);
        obj20.children = items9;
        tmp16 = closure_1_11(View, obj20);
        const tmp5Result8 = ColorUtils;
      }
      tmp9 = tmp16;
    }
  }
  return tmp9;
});
export const Gradient = tmp3;
export { validateColors };
export const CustomThemedGradient = tmp4;