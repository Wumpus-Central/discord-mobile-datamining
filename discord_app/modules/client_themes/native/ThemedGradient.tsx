// discord_app/modules/client_themes/native/ThemedGradient.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ClientThemesTypes from "../ClientThemesTypes.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import utils_ColorDefault from "../../../utils/Color.tsx";
import shared from "../../../design/shared.tsx";
import GuildThemePresets from "../../guild_themes/GuildThemePresets.tsx";
import useRoutedActiveGuildThemeDefault from "../../guild_themes/native/useRoutedActiveGuildTheme.tsx";
import useCustomThemeDisplaySettings from "useCustomThemeDisplaySettings.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import ClientThemesBackgroundStore from "../ClientThemesBackgroundStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap;

let c10;
let unpackModuleId;
const f90929 = (item) => item / 100;
function getMixedGradientColor(mixColorOverride) {
  let b;
  let darkFallbackAmount;
  let darkFallbackOpacity;
  let g;
  let mixAmount;
  let r;
  let theme;
  let theme2;
  let theme3;
  ({ mixAmount, theme } = mixColorOverride);
  const obj = { mixAmount, mixColorOverride: mixColorOverride.mixColorOverride, theme };
  let mixAmount1 = obj.mixAmount;
  const color = mixColorOverride.color;
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
    const obj3 = shared;
    const isThemeDarkResult = obj3.isThemeDark(theme2);
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
    const self = this;
    const self2 = this;
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
  const obj6 = shared;
  if (obj6.isThemeDark(theme3)) {
    if (null != mixAmount2.dark) {
      darkFallbackAmount = 1 - mixAmount2.dark;
    }
    num3 = darkFallbackAmount;
  } else if (null != mixAmount2.light) {
    num3 = 1 - mixAmount2.light;
  }
  const tmp10Result = ColorUtils;
  ({ r, g, b } = tmp10Result.hexToRgb(color));
  tmp10Result.hexToRgb(color);
  const mixColors = ColorUtils.mixColors;
  ColorUtils;
  const tmp14 = new utils_ColorDefault(r, g, b, num3);
  const mixColorsResult = mixColors(mixColorOverride, tmp14);
  return mixColorsResult.toHexString();
}
let closure_3 = ["overlayOpacity", "customTheme"];
let closure_4 = ["activeGuildTheme", "theme"];
let closure_5 = ["overlayOpacity", "gradientOverride"];
const View = react_native.View;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({
  softenGradient: { flex: 1 },
  linearGradient: { flex: 1 },
  absolute: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 },
});
let angleCenter = { x: 0.5, y: 0.5 };
let c14 = 0.7;
let c15 = 0.5;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let absolute;
      let angle;
      let colors;
      let componentStyles;
      let height;
      let locations;
      let tall;
      let wide;
      let width;
      const obj = react2;
      const cResult = obj.c(18);
      ({ colors, locations, angle, angleCenter, absolute, wide, tall, componentStyles } = arg0);
      if (undefined === angleCenter) {
        angleCenter = closure_13;
      }
      const tmp3 = closure_12();
      ({ width, height } = useWindowDimensionsDefault());
      useWindowDimensionsDefault();
      if (cResult[0] === width) {
        let tmp6;
        if (cResult[1] === wide) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === height) {
          let tmp8;
          if (cResult[4] === tall) {
            tmp8 = cResult[5];
          }
          if (absolute) {
            absolute = tmp3.absolute;
          }
          if (cResult[6] === componentStyles) {
            if (cResult[7] === tmp3.linearGradient) {
              if (cResult[8] === tmp6) {
                if (cResult[9] === tmp8) {
                  let tmp10;
                  if (cResult[10] === absolute) {
                    tmp10 = cResult[11];
                  }
                  if (cResult[12] === angle) {
                    if (cResult[13] === angleCenter) {
                      if (cResult[14] === colors) {
                        if (cResult[15] === locations) {
                          let tmp11;
                          if (cResult[16] === tmp10) {
                            tmp11 = cResult[17];
                          }
                          return tmp11;
                        }
                      }
                    }
                  }
                  const obj2 = { colors, locations, angle, angleCenter, useAngle: true, style: tmp10 };
                  const tmp13 = authStore(LinearGradientDefault, obj2);
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
        if (tmp9) {
          tmp9 = { height };
          const obj3 = { height };
        }
        cResult[3] = height;
        cResult[4] = tall;
        cResult[5] = tmp9;
        tmp8 = tmp9;
      }
      let tmp7 = wide;
      if (tmp7) {
        tmp7 = { width };
        const obj4 = { width };
      }
      cResult[0] = width;
      cResult[1] = wide;
      cResult[2] = tmp7;
      tmp6 = tmp7;
    }
  : (angleCenter) => {
      let absolute;
      let angle;
      let colors;
      let height;
      let items;
      let locations;
      let tall;
      let wide;
      let width;
      angleCenter = angleCenter.angleCenter;
      ({ colors, locations, angle } = angleCenter);
      if (angleCenter === undefined) {
        angleCenter = closure_13;
      }
      ({ absolute, wide, tall } = angleCenter);
      const componentStyles = angleCenter.componentStyles;
      const tmp = closure_12();
      ({ width, height } = useWindowDimensionsDefault());
      const obj = { colors, locations, angle, angleCenter, useAngle: true, style: items };
      useWindowDimensionsDefault();
      const tmp4 = LinearGradientDefault;
      if (wide) {
        wide = { width };
        const obj2 = { width };
      }
      items = [wide, , , ,];
      if (tall) {
        tall = { height };
        const obj3 = { height };
      }
      items[1] = tall;
      items[2] = tmp.linearGradient;
      if (absolute) {
        absolute = tmp.absolute;
      }
      items[3] = absolute;
      items[4] = componentStyles;
      return authStore(tmp4, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let absolute;
      let angleOverride;
      let componentStyles;
      let gradient;
      let mix;
      let mixAmount;
      let mixColorOverride;
      let tall;
      let tmp3;
      let wide;
      let obj = mix(576);
      const cResult = obj.c(25);
      ({ gradient, absolute, wide, tall, angleOverride, componentStyles, mix } = arg0);
      ({ mixAmount, mixColorOverride } = arg0);
      if (cResult[0] !== mixAmount) {
        let obj2 = mixAmount;
        if (undefined === mixAmount) {
          obj2 = {};
        }
        cResult[0] = mixAmount;
        cResult[1] = obj2;
        tmp3 = obj2;
      } else {
        tmp3 = cResult[1];
      }
      dependencyMap = tmp3;
      let tmp4 = mixColorOverride(4791)();
      const theme = tmp4;
      if (cResult[2] === gradient.colors) {
        if (cResult[3] === mix) {
          if (cResult[4] === tmp3) {
            if (cResult[5] === mixColorOverride) {
              if (cResult[13] !== gradient.colors) {
                const _Symbol = Symbol;
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  class A {
                    constructor(stop) {
                      return stop.stop / 100;
                    }
                  }
                  cResult[15] = A;
                } else {
                  class A {
                    constructor(stop) {
                      return stop.stop / 100;
                    }
                  }
                }
                const colors = gradient.colors;
                const mapped = colors.map(A);
                cResult[13] = gradient.colors;
                cResult[14] = mapped;
              } else {
                class A {
                  constructor(stop) {
                    return stop.stop / 100;
                  }
                }
              }
              if (angleOverride == null) {
                class A {
                  constructor(stop) {
                    return stop.stop / 100;
                  }
                }
              }
              angleCenter = gradient.angleCenter;
              if (angleCenter == null) {
                class A {
                  constructor(stop) {
                    return stop.stop / 100;
                  }
                }
              }
              if (cResult[16] === absolute) {
                class A {
                  constructor(stop) {
                    return stop.stop / 100;
                  }
                }
              }
              const obj3 = {
                colors: tmp5,
                locations: tmp6,
                angle: angleOverride,
                angleCenter,
                absolute,
                wide,
                tall,
                componentStyles,
              };
              cResult[16] = absolute;
              cResult[17] = tmp5;
              cResult[18] = componentStyles;
              cResult[19] = tmp6;
              cResult[20] = angleOverride;
              cResult[21] = angleCenter;
              cResult[22] = tall;
              cResult[23] = wide;
              cResult[24] = closure_10(closure_17, obj3);
              const tmp14 = closure_10(closure_17, obj3);
            }
          }
        }
      }
      if (cResult[8] === mix) {
        class A {
          constructor(stop) {
            return stop.stop / 100;
          }
        }
      }
      const fn = function f(arg0) {
        let tmp4;
        if (mix) {
          const obj = { color: nativeDefault.unsafe_rawColors[arg0.token], mixAmount, mixColorOverride, theme };
          tmp4 = getMixedGradientColor(obj);
        } else {
          tmp4 = nativeDefault.unsafe_rawColors[arg0.token];
        }
        return tmp4;
      };
      cResult[8] = mix;
      cResult[9] = tmp3;
      cResult[10] = mixColorOverride;
      cResult[11] = tmp4;
      cResult[12] = fn;
    }
  : (mixColorOverride) => {
      let absolute;
      let angleOverride;
      let colors1;
      let componentStyles;
      let gradient;
      let mixAmount;
      let tall;
      let wide;
      ({ gradient, angleOverride, mix: require, mixAmount } = mixColorOverride);
      ({ absolute, wide, tall, componentStyles } = mixColorOverride);
      if (mixAmount === undefined) {
        mixAmount = {};
      }
      mixColorOverride = mixColorOverride.mixColorOverride;
      const theme = mixAmount(mixColorOverride[13])();
      const colors = gradient.colors;
      let obj = {
        colors: colors.map((item) => {
          let tmp4;
          if (require) {
            const obj = { color: nativeDefault.unsafe_rawColors[item.token], mixAmount, mixColorOverride, theme };
            tmp4 = getMixedGradientColor(obj);
          } else {
            tmp4 = nativeDefault.unsafe_rawColors[item.token];
          }
          return tmp4;
        }),
        locations: colors1.map((stop) => stop.stop / 100),
        angle: angleOverride,
        angleCenter,
        absolute,
        wide,
        tall,
        componentStyles,
      };
      colors1 = gradient.colors;
      if (angleOverride == null) {
        angleOverride = gradient.angle;
      }
      angleCenter = gradient.angleCenter;
      if (angleCenter == null) {
        angleCenter = closure_13;
      }
      return closure_10(closure_17, obj);
    };
let closure_18 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let absolute;
      let angleOverride;
      let componentStyles;
      let mix;
      let mixAmount;
      let mixColorOverride;
      let preset;
      let tall;
      let tmp4;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      let wide;
      let obj = mix(576);
      const cResult = obj.c(26);
      ({ preset, absolute, wide, tall, angleOverride, componentStyles, mix } = arg0);
      ({ mixAmount, mixColorOverride } = arg0);
      if (cResult[0] !== mixAmount) {
        let obj2 = mixAmount;
        if (undefined === mixAmount) {
          obj2 = {};
        }
        cResult[0] = mixAmount;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      dependencyMap = tmp4;
      const tmp5 = mixColorOverride(4791)();
      const theme = tmp5;
      if (cResult[2] === mix) {
        if (cResult[3] === tmp4) {
          if (cResult[4] === mixColorOverride) {
            if (cResult[5] === preset) {
              if (cResult[6] === tmp5) {
                tmp6 = cResult[7];
                tmp7 = cResult[8];
                tmp8 = cResult[9];
                tmp9 = cResult[10];
              }
              if (angleOverride == null) {
                angleOverride = tmp7.angle;
              }
              if (cResult[17] === tmp6) {
                if (cResult[18] === absolute) {
                  if (cResult[19] === componentStyles) {
                    if (cResult[20] === tmp8) {
                      if (cResult[21] === tmp9) {
                        if (cResult[22] === angleOverride) {
                          if (cResult[23] === tall) {
                            let tmp18;
                            if (cResult[24] === wide) {
                              tmp18 = cResult[25];
                            }
                            return tmp18;
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj3 = {
                colors: tmp8,
                locations: tmp9,
                angle: angleOverride,
                angleCenter,
                absolute,
                wide,
                tall,
                componentStyles,
              };
              const tmp21 = closure_10(tmp6, obj3);
              cResult[17] = tmp6;
              cResult[18] = absolute;
              cResult[19] = componentStyles;
              cResult[20] = tmp8;
              cResult[21] = tmp9;
              cResult[22] = angleOverride;
              cResult[23] = tall;
              cResult[24] = wide;
              cResult[25] = tmp21;
              tmp18 = tmp21;
            }
          }
        }
      }
      const tmpResult = mix(4733);
      const guildThemePresetAppearance = tmpResult.getGuildThemePresetAppearance(preset, tmp5);
      if (cResult[11] === mix) {
        if (cResult[12] === tmp4) {
          if (cResult[13] === mixColorOverride) {
            let tmp11;
            if (cResult[14] === tmp5) {
              tmp11 = cResult[15];
            }
            const colors = guildThemePresetAppearance.colors;
            const mapped = colors.map(tmp11);
            const _Symbol = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              class G {
                constructor(stop) {
                  return stop.stop / 100;
                }
              }
              cResult[16] = G;
            } else {
              class G {
                constructor(stop) {
                  return stop.stop / 100;
                }
              }
            }
            const colors1 = guildThemePresetAppearance.colors;
            const mapped1 = colors1.map(G);
            cResult[2] = mix;
            cResult[3] = tmp4;
            cResult[4] = mixColorOverride;
            cResult[5] = preset;
            cResult[6] = tmp5;
            cResult[7] = closure_17;
            cResult[8] = guildThemePresetAppearance;
            cResult[9] = mapped;
            cResult[10] = mapped1;
            tmp9 = mapped1;
            tmp8 = mapped;
            tmp7 = guildThemePresetAppearance;
            tmp6 = closure_17;
          }
        }
      }
      const fn = function w(hex) {
        if (mix) {
          const obj = { color: hex.hex, mixAmount, mixColorOverride, theme };
          hex = getMixedGradientColor(obj);
        } else {
          hex = hex.hex;
        }
        return hex;
      };
      cResult[11] = mix;
      cResult[12] = tmp4;
      cResult[13] = mixColorOverride;
      cResult[14] = tmp5;
      cResult[15] = fn;
      tmp11 = fn;
    }
  : (mixColorOverride) => {
      let absolute;
      let angleOverride;
      let colors1;
      let componentStyles;
      let mixAmount;
      let preset;
      let tall;
      let wide;
      ({ angleOverride, mix: require, mixAmount } = mixColorOverride);
      ({ preset, absolute, wide, tall, componentStyles } = mixColorOverride);
      if (mixAmount === undefined) {
        mixAmount = {};
      }
      mixColorOverride = mixColorOverride.mixColorOverride;
      const tmp = mixAmount(mixColorOverride[13])();
      const theme = tmp;
      let obj = require("GuildThemePresets");
      const guildThemePresetAppearance = obj.getGuildThemePresetAppearance(preset, tmp);
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
        locations: colors1.map((stop) => stop.stop / 100),
        angle: angleOverride,
        angleCenter,
        absolute,
        wide,
        tall,
        componentStyles,
      };
      colors1 = guildThemePresetAppearance.colors;
      if (angleOverride == null) {
        angleOverride = guildThemePresetAppearance.angle;
      }
      return closure_10(closure_17, obj2);
    };
const re20 = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let absolute;
      let baseMix;
      let colors;
      let componentStyles;
      let end;
      let gradientAngle;
      let gradientColorStops;
      let height;
      let mapped1;
      let mix;
      let mixAmount;
      let mixColorOverride;
      let point;
      let point1;
      let start;
      let tall;
      let theme;
      let tmp6;
      let wide;
      let width;
      let obj = baseMix(mixColorOverride[10]);
      const cResult = obj.c(26);
      ({
        colors,
        gradientAngle,
        gradientColorStops,
        absolute,
        wide,
        tall,
        mixAmount,
        componentStyles,
        baseMix,
        mix,
        mixColorOverride,
        theme,
      } = arg0);
      if (undefined === mixAmount) {
        mixAmount = {};
      }
      const tmp3 = closure_12();
      ({ width, height } = mixAmount(mixColorOverride[11])());
      mixAmount(mixColorOverride[11])();
      const tmp4 = mixAmount;
      mixAmount = undefined;
      mixColorOverride = undefined;
      theme = undefined;
      if (mixAmount === undefined) {
        mixAmount = {};
      }
      let mapped = colors;
      if (mix) {
        mapped = colors.map(function (item) {
          let b;
          let g;
          let r;
          let obj = mixAmount;
          let tmp2 = mixColorOverride;
          let num = closure_2_15;
          let obj2 = mixAmount;
          const result = baseMix / 100;
          if (mixAmount === undefined) {
            obj2 = {};
          }
          if (null == tmp2) {
            const diff = 1 - result;
            let sum = num + 0.2 * diff;
            const obj6 = arr2(dependencyMap[6]);
            const isThemeDarkResult = obj6.isThemeDark(theme);
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
            const self = this;
            const self2 = this;
            tmp2 = new reduced(dependencyMap[7])(num3, num3, num3, tmp6);
          }
          if (mixAmount === undefined) {
            obj = {};
          }
          let num4 = num;
          if (num === undefined) {
            num4 = 0.3;
          }
          if (num === undefined) {
            num = 0.2;
          }
          const obj3 = arr2(dependencyMap[6]);
          if (obj3.isThemeDark(theme)) {
            if (null != obj.dark) {
              num4 = 1 - obj.dark;
            }
            num = num4;
          } else if (null != obj.light) {
            num = 1 - obj.light;
          }
          const tmp12Result = arr2(dependencyMap[8]);
          ({ r, g, b } = tmp12Result.hexToRgb(item));
          tmp12Result.hexToRgb(item);
          const mixColors = arr2(dependencyMap[8]).mixColors;
          arr2(dependencyMap[8]);
          const tmp16 = new reduced(dependencyMap[7])(r, g, b, num);
          const mixColorsResult = mixColors(tmp2, tmp16);
          const tmp12Result4 = arr2(dependencyMap[16]);
          return tmp12Result4.colorToHex(mixColorsResult);
        });
      }
      let arr2 = mapped;
      if (1 === mapped.length) {
        const items = [mapped[0], mapped[0]];
        arr2 = items;
      }
      if (cResult[0] !== gradientAngle) {
        const _Math = Math;
        const result = ((gradientAngle - 90) * Math.PI) / 180;
        const _Math2 = Math;
        const cosResult = Math.cos(result);
        const _Math3 = Math;
        const sinResult = Math.sin(result);
        let obj2 = { start: point, end: point1 };
        point = { x: 0.6 - 0.7142857142857143 * cosResult, y: 0.5 - 0.7142857142857143 * sinResult };
        point1 = { x: 0.6 + 0.7142857142857143 * cosResult, y: 0.5 + 0.7142857142857143 * sinResult };
        cResult[0] = gradientAngle;
        cResult[1] = obj2;
        tmp6 = obj2;
      } else {
        tmp6 = cResult[1];
      }
      ({ start, end } = tmp6);
      const reduced = arr2.reduce((arr, item) => {
        if (typeof item === "string") {
          if (regex.test(item)) {
            arr = arr.push(item);
            return arr;
          }
        }
        try {
          const push = arr.push;
          const obj = reduced(dependencyMap[17])(item);
          push(obj.hex("rgb"));
        } catch (err) {}
        return arr;
      }, []);
      if (gradientColorStops === undefined) {
        gradientColorStops = [];
      }
      if (gradientColorStops.length === reduced.length) {
        mapped1 = gradientColorStops.map(f90929);
      } else if (1 === reduced.length) {
        mapped1 = [0, 1];
      } else {
        mapped1 = reduced.map((item, index) => index / (reduced.length - 1));
      }
      if (cResult[2] === arr2) {
        let tmp11;
        if (cResult[3] === reduced.length) {
          tmp11 = cResult[4];
        }
        if (cResult[5] === arr2) {
          let tmp12;
          if (cResult[6] === reduced) {
            tmp12 = cResult[7];
          }
          const effect = react.useEffect(tmp11, tmp12);
          if (reduced.length < 2) {
            return null;
          } else {
            if (cResult[8] === width) {
              let tmp15;
              if (cResult[9] === wide) {
                tmp15 = cResult[10];
              }
              if (cResult[11] === height) {
                let tmp17;
                if (cResult[12] === tall) {
                  tmp17 = cResult[13];
                }
                if (absolute) {
                  absolute = tmp3.absolute;
                }
                if (cResult[14] === componentStyles) {
                  if (cResult[15] === tmp3.linearGradient) {
                    if (cResult[16] === tmp15) {
                      if (cResult[17] === tmp17) {
                        let tmp19;
                        if (cResult[18] === absolute) {
                          tmp19 = cResult[19];
                        }
                        if (cResult[20] === end) {
                          if (cResult[21] === mapped1) {
                            if (cResult[22] === start) {
                              if (cResult[23] === tmp19) {
                                let tmp20;
                                if (cResult[24] === reduced) {
                                  tmp20 = cResult[25];
                                }
                                return tmp20;
                              }
                            }
                          }
                        }
                        const obj3 = { colors: reduced, locations: mapped1, start, end, style: tmp19 };
                        const tmp22 = closure_10(tmp4(mixColorOverride[12]), obj3);
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
              if (tmp18) {
                tmp18 = { height };
                const obj4 = { height };
              }
              cResult[11] = height;
              cResult[12] = tall;
              cResult[13] = tmp18;
              tmp17 = tmp18;
            }
            let tmp16 = wide;
            if (tmp16) {
              tmp16 = { width };
              const obj5 = { width };
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
        let obj2;
        if (reduced.length < 2) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const captureException = mixAmount(mixColorOverride[18]).captureException;
          mixAmount(mixColorOverride[18]);
          const error = new Error("Invalid custom theme gradient colors");
          const obj = { extra: obj2 };
          const _JSON = JSON;
          obj2 = { gradientColors: JSON.stringify(arr2) };
          captureException(error, obj);
        }
      };
      cResult[2] = arr2;
      cResult[3] = reduced.length;
      cResult[4] = fn;
      tmp11 = fn;
    }
  : (arg0) => {
      let absolute;
      let baseMix;
      let colors;
      let componentStyles;
      let gradientAngle;
      let gradientColorStops;
      let height;
      let items2;
      let mapped1;
      let mix;
      let mixAmount;
      let mixColorOverride;
      let regex;
      let tall;
      let theme;
      let wide;
      let width;
      ({ colors, gradientColorStops, absolute, wide, tall, mixAmount } = arg0);
      ({ baseMix, gradientAngle, mix } = arg0);
      if (mixAmount === undefined) {
        mixAmount = {};
      }
      let arr2;
      let reduced;
      ({ mixColorOverride, componentStyles, theme } = arg0);
      const tmp = closure_12();
      let tmp2 = reduced;
      mixAmount = undefined;
      mixColorOverride = undefined;
      theme = undefined;
      ({ width, height } = reduced(1484)());
      const tmp4 = reduced(1484)();
      if (mixAmount === undefined) {
        mixAmount = {};
      }
      let mapped = colors;
      if (mix) {
        mapped = colors.map(function (item) {
          let b;
          let g;
          let r;
          let obj = mixAmount;
          let tmp2 = mixColorOverride;
          let num = closure_2_15;
          let obj2 = mixAmount;
          const result = baseMix / 100;
          if (mixAmount === undefined) {
            obj2 = {};
          }
          if (null == tmp2) {
            const diff = 1 - result;
            let sum = num + 0.2 * diff;
            const obj6 = arr2(dependencyMap[6]);
            const isThemeDarkResult = obj6.isThemeDark(theme);
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
            const self = this;
            const self2 = this;
            tmp2 = new reduced(dependencyMap[7])(num3, num3, num3, tmp6);
          }
          if (mixAmount === undefined) {
            obj = {};
          }
          let num4 = num;
          if (num === undefined) {
            num4 = 0.3;
          }
          if (num === undefined) {
            num = 0.2;
          }
          const obj3 = arr2(dependencyMap[6]);
          if (obj3.isThemeDark(theme)) {
            if (null != obj.dark) {
              num4 = 1 - obj.dark;
            }
            num = num4;
          } else if (null != obj.light) {
            num = 1 - obj.light;
          }
          const tmp12Result = arr2(dependencyMap[8]);
          ({ r, g, b } = tmp12Result.hexToRgb(item));
          tmp12Result.hexToRgb(item);
          const mixColors = arr2(dependencyMap[8]).mixColors;
          arr2(dependencyMap[8]);
          const tmp16 = new reduced(dependencyMap[7])(r, g, b, num);
          const mixColorsResult = mixColors(tmp2, tmp16);
          const tmp12Result4 = arr2(dependencyMap[16]);
          return tmp12Result4.colorToHex(mixColorsResult);
        });
      }
      arr2 = mapped;
      if (1 === mapped.length) {
        const items = [mapped[0], mapped[0]];
        arr2 = items;
      }
      let result = ((gradientAngle - 90) * Math.PI) / 180;
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
          const push = arr.push;
          const obj = reduced(dependencyMap[17])(item);
          push(obj.hex("rgb"));
        } catch (err) {}
        return arr;
      }, []);
      if (gradientColorStops === undefined) {
        gradientColorStops = [];
      }
      if (gradientColorStops.length === reduced.length) {
        mapped1 = gradientColorStops.map(f90929);
      } else if (1 === reduced.length) {
        mapped1 = [0, 1];
      } else {
        mapped1 = reduced.map((item, index) => index / (reduced.length - 1));
      }
      const items1 = [reduced, arr2];
      const effect = react.useEffect(function () {
        let obj2;
        if (reduced.length < 2) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const captureException = SentryUtilsDefault.captureException;
          SentryUtilsDefault;
          const error = new Error("Invalid custom theme gradient colors");
          const obj = { extra: obj2 };
          const _JSON = JSON;
          obj2 = { gradientColors: JSON.stringify(arr2) };
          captureException(error, obj);
        }
      }, items1);
      let tmp10Result = null;
      if (reduced.length >= 2) {
        let obj = { colors: reduced, locations: mapped1, start: point, end: point1, style: items2 };
        const tmp2Result = tmp2(5605);
        if (wide) {
          let obj2 = { width };
          wide = obj2;
        }
        items2 = [wide, , , ,];
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
        tmp10Result = closure_10(tmp2Result, obj);
      }
      return tmp10Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react2;
      const cResult = obj.c(3);
      const tmp2 = closure_12();
      const tmp3 = useThemeDefault();
      const obj2 = shared;
      const isThemeDarkResult = obj2.isThemeDark(tmp3);
      const unsafe_rawColors = nativeDefault.unsafe_rawColors;
      const tmp5 = isThemeDarkResult ? unsafe_rawColors.BLACK : unsafe_rawColors.WHITE;
      if (cResult[0] === tmp5) {
        let tmp6;
        if (cResult[1] === tmp2) {
          tmp6 = cResult[2];
        }
        return tmp6;
      }
      const obj3 = { styles: tmp2, overlayColor: tmp5 };
      cResult[0] = tmp5;
      cResult[1] = tmp2;
      cResult[2] = obj3;
      tmp6 = obj3;
    }
  : () => {
      let isThemeDarkResult;
      let unsafe_rawColors;
      const obj = {
        styles: closure_12(),
        overlayColor: isThemeDarkResult ? unsafe_rawColors.BLACK : unsafe_rawColors.WHITE,
      };
      const tmp2 = useThemeDefault();
      const obj2 = shared;
      isThemeDarkResult = obj2.isThemeDark(tmp2);
      unsafe_rawColors = nativeDefault.unsafe_rawColors;
      return obj;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let customTheme;
      let items;
      let items1;
      let overlayColor;
      let overlayOpacity;
      let styles;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmpResult;
      const obj = react2;
      const cResult = obj.c(14);
      if (cResult[0] !== arg0) {
        ({ overlayOpacity, customTheme } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = customTheme;
        cResult[2] = tmp9;
        cResult[3] = overlayOpacity;
        tmp6 = overlayOpacity;
        tmp5 = tmp9;
        tmp4 = customTheme;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      if (undefined === tmp6) {
        tmp6 = c14;
      }
      ({ styles, overlayColor } = closure_22());
      closure_22();
      if (cResult[4] === tmp4.customThemeSettings) {
        if (cResult[5] === tmp4.theme) {
          let tmp11;
          if (cResult[6] === tmp5) {
            tmp11 = cResult[7];
          }
          if (cResult[8] === overlayColor) {
            if (cResult[9] === tmp6) {
              if (cResult[10] === tmp5.withOverlay) {
                if (cResult[11] === styles) {
                  let tmp15;
                  if (cResult[12] === tmp11) {
                    tmp15 = cResult[13];
                  }
                  return tmp15;
                }
              }
            }
          }
          let tmp16 = tmp11;
          if (tmp5.withOverlay) {
            const obj2 = { style: styles.absolute, children: items };
            items = [tmp11];
            const obj3 = { style: items1 };
            items1 = [styles.softenGradient];
            const obj4 = { backgroundColor: tmpResult.hexWithOpacity(overlayColor, tmp6) };
            items1[1] = obj4;
            tmpResult = ColorUtils;
            items[1] = authStore(View, obj3);
            tmp16 = unpackModuleId(View, obj2);
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
      const obj5 = { theme: tmp4.theme };
      const merged = Object.assign(tmp5);
      const merged1 = Object.assign(tmp4.customThemeSettings);
      const tmp14 = authStore(closure_21, obj5);
      cResult[4] = tmp4.customThemeSettings;
      cResult[5] = tmp4.theme;
      cResult[6] = tmp5;
      cResult[7] = tmp14;
      tmp11 = tmp14;
    }
  : (overlayOpacity) => {
      let items;
      let items1;
      let obj5;
      let num = overlayOpacity.overlayOpacity;
      if (num === undefined) {
        num = 0.7;
      }
      const customTheme = overlayOpacity.customTheme;
      const merged = Object.assign(overlayOpacity, Object.assign({ overlayOpacity: 0, customTheme: 0 }));
      const tmp2 = closure_22();
      const styles = tmp2.styles;
      const overlayColor = tmp2.overlayColor;
      const obj = { theme: customTheme.theme };
      const merged1 = Object.assign(merged);
      const merged2 = Object.assign(customTheme.customThemeSettings);
      const tmp6 = authStore(closure_21, obj);
      let tmp7 = tmp6;
      if (merged.withOverlay) {
        const obj2 = { style: styles.absolute, children: items };
        items = [tmp6];
        const obj3 = { style: items1 };
        items1 = [styles.softenGradient];
        const obj4 = { backgroundColor: obj5.hexWithOpacity(overlayColor, num) };
        items1[1] = obj4;
        obj5 = ColorUtils;
        items[1] = authStore(View, obj3);
        tmp7 = unpackModuleId(View, obj2);
      }
      return tmp7;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let activeGuildTheme;
      let theme;
      let tmp5;
      let tmp6;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(17);
      if (cResult[0] !== arg0) {
        ({ activeGuildTheme, theme } = arg0);
        const tmp10 = _objectWithoutProperties(arg0, closure_4);
        cResult[0] = arg0;
        cResult[1] = activeGuildTheme;
        cResult[2] = tmp10;
        cResult[3] = theme;
        tmp7 = theme;
        tmp6 = tmp10;
        tmp5 = activeGuildTheme;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      if ("custom" === tmp5.type) {
        const customUserThemeSettings = tmp5.customUserThemeSettings;
        const first = customUserThemeSettings.colors[0];
        if (cResult[4] === first) {
          let tmp19;
          let tmp23;
          if (cResult[5] === tmp7) {
            tmp19 = cResult[6];
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [];
            cResult[7] = items;
            tmp23 = items;
          } else {
            tmp23 = cResult[7];
          }
          let num13 = customUserThemeSettings.gradientAngle;
          if (num13 == null) {
            num13 = 0;
          }
          let GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
          if (GUILD_THEME_DEFAULT_BASE_MIX == null) {
            GUILD_THEME_DEFAULT_BASE_MIX = GuildThemePresets.GUILD_THEME_DEFAULT_BASE_MIX;
          }
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp19) {
              if (cResult[10] === num13) {
                if (cResult[11] === GUILD_THEME_DEFAULT_BASE_MIX) {
                  let tmp25;
                  if (cResult[12] === tmp7) {
                    tmp25 = cResult[13];
                  }
                  return tmp25;
                }
              }
            }
          }
          const obj2 = {
            colors: tmp19,
            gradientColorStops: tmp23,
            gradientAngle: num13,
            baseMix: GUILD_THEME_DEFAULT_BASE_MIX,
            theme: tmp7,
          };
          const merged = Object.assign(tmp6);
          const tmp31 = authStore(closure_21, obj2);
          cResult[8] = tmp6;
          cResult[9] = tmp19;
          cResult[10] = num13;
          cResult[11] = GUILD_THEME_DEFAULT_BASE_MIX;
          cResult[12] = tmp7;
          cResult[13] = tmp31;
          tmp25 = tmp31;
        }
        const items1 = [];
        const tmp2Result = GuildThemePresets;
        HermesBuiltin.arraySpread(items1, tmp2Result.getSingleColorGuildThemeGradientColors(first, tmp7), 0);
        cResult[4] = first;
        cResult[5] = tmp7;
        cResult[6] = items1;
        tmp19 = items1;
      } else {
        if (cResult[14] === tmp5.preset) {
          let tmp11;
          if (cResult[15] === tmp6) {
            tmp11 = cResult[16];
          }
          return tmp11;
        }
        const obj3 = { preset: tmp5.preset };
        const merged1 = Object.assign(tmp6);
        const tmp17 = authStore(closure_19, obj3);
        cResult[14] = tmp5.preset;
        cResult[15] = tmp6;
        cResult[16] = tmp17;
        tmp11 = tmp17;
      }
    }
  : (arg0) => {
      let GUILD_THEME_DEFAULT_BASE_MIX;
      let activeGuildTheme;
      let items;
      let num2;
      let theme;
      ({ activeGuildTheme, theme } = arg0);
      const merged = Object.assign(arg0, Object.assign({ activeGuildTheme: 0, theme: 0 }));
      if ("custom" === activeGuildTheme.type) {
        const customUserThemeSettings = activeGuildTheme.customUserThemeSettings;
        const first = customUserThemeSettings.colors[0];
        const obj2 = {
          colors: items,
          gradientColorStops: [],
          gradientAngle: num2,
          baseMix: GUILD_THEME_DEFAULT_BASE_MIX,
          theme,
        };
        const merged1 = Object.assign(merged);
        items = [];
        const obj3 = GuildThemePresets;
        HermesBuiltin.arraySpread(items, obj3.getSingleColorGuildThemeGradientColors(first, theme), 0);
        num2 = customUserThemeSettings.gradientAngle;
        if (num2 == null) {
          num2 = 0;
        }
        GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
        if (GUILD_THEME_DEFAULT_BASE_MIX == null) {
          GUILD_THEME_DEFAULT_BASE_MIX = GuildThemePresets.GUILD_THEME_DEFAULT_BASE_MIX;
        }
        return authStore(closure_21, obj2);
      } else {
        const obj = { preset: activeGuildTheme.preset };
        const merged2 = Object.assign(merged);
        return authStore(closure_19, obj);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let gradientOverride;
      let gradientPreset;
      let items1;
      let items10;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let items9;
      let overlayColor;
      let overlayOpacity;
      let styles;
      let tmp14;
      let tmp8;
      let tmp9;
      let tmpResult10;
      let tmpResult11;
      let tmpResult12;
      let tmpResult8;
      let tmpResult9;
      const obj = react2;
      const cResult = obj.c(2);
      ({ overlayOpacity, gradientOverride } = arg0);
      const tmp4 = _objectWithoutProperties(arg0, closure_5);
      if (undefined === overlayOpacity) {
        overlayOpacity = c14;
      }
      ({ styles, overlayColor } = closure_22());
      const withOverlay = tmp4.withOverlay;
      closure_22();
      const tmp7 = useThemeDefault();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ClientThemesBackgroundStore];
        const fn = function l() {
          return { preset: gradientPreset.gradientPreset };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp8 = items;
        tmp9 = fn;
      } else {
        [tmp8, tmp9] = cResult;
      }
      const tmpResult = useStateFromStores;
      const preset = tmpResult.useStateFromStoresObject(tmp8, tmp9).preset;
      const tmp11 = useRoutedActiveGuildThemeDefault();
      const tmpResult7 = useCustomThemeDisplaySettings;
      const customThemeDisplaySettings = tmpResult7.useCustomThemeDisplaySettings();
      if (null != gradientOverride) {
        if (undefined !== customThemeDisplaySettings) {
          if (gradientOverride.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
            const obj2 = { theme: gradientOverride.theme };
            const merged = Object.assign(tmp4);
            const merged1 = Object.assign(gradientOverride.customThemeSettings);
            const tmp60 = authStore(closure_21, obj2);
            let tmp61 = tmp60;
            if (withOverlay) {
              const obj3 = { style: styles.absolute, children: items1 };
              items1 = [tmp60];
              const obj4 = { style: items2 };
              items2 = [styles.softenGradient];
              const obj5 = { backgroundColor: tmpResult8.hexWithOpacity(overlayColor, overlayOpacity) };
              items2[1] = obj5;
              tmpResult8 = ColorUtils;
              items1[1] = authStore(View, obj4);
              tmp61 = unpackModuleId(View, obj3);
            }
            return tmp61;
          }
        }
        if (gradientOverride.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
          const obj6 = { gradient: gradientOverride };
          const merged2 = Object.assign(tmp4);
          const tmp49 = authStore(closure_18, obj6);
          let tmp50 = tmp49;
          if (withOverlay) {
            const obj7 = { style: styles.absolute, children: items3 };
            items3 = [tmp49];
            const obj8 = { style: items4 };
            items4 = [styles.softenGradient];
            const obj9 = { backgroundColor: tmpResult9.hexWithOpacity(overlayColor, overlayOpacity) };
            items4[1] = obj9;
            tmpResult9 = ColorUtils;
            items3[1] = authStore(View, obj8);
            tmp50 = unpackModuleId(View, obj7);
          }
          return tmp50;
        }
      }
      if (null != tmp11) {
        const obj10 = { activeGuildTheme: tmp11, theme: tmp7 };
        const merged3 = Object.assign(tmp4);
        const tmp40 = authStore(closure_23, obj10);
        let tmp41 = tmp40;
        if (withOverlay) {
          const obj11 = { style: styles.absolute, children: items5 };
          items5 = [tmp40];
          const obj12 = { style: items6 };
          items6 = [styles.softenGradient];
          const obj13 = { backgroundColor: tmpResult10.hexWithOpacity(overlayColor, overlayOpacity) };
          items6[1] = obj13;
          tmpResult10 = ColorUtils;
          items5[1] = authStore(View, obj12);
          tmp41 = unpackModuleId(View, obj11);
        }
        tmp14 = tmp41;
      } else {
        if (undefined !== customThemeDisplaySettings) {
          if (undefined !== customThemeDisplaySettings) {
            const obj14 = { theme: customThemeDisplaySettings.baseTheme };
            const merged4 = Object.assign(tmp4);
            const merged5 = Object.assign(customThemeDisplaySettings.customTheme);
            const tmp31 = authStore(closure_21, obj14);
            let tmp32 = tmp31;
            if (withOverlay) {
              const obj15 = { style: styles.absolute, children: items7 };
              items7 = [tmp31];
              const obj16 = { style: items8 };
              items8 = [styles.softenGradient];
              const obj17 = { backgroundColor: tmpResult11.hexWithOpacity(overlayColor, overlayOpacity) };
              items8[1] = obj17;
              tmpResult11 = ColorUtils;
              items7[1] = authStore(View, obj16);
              tmp32 = unpackModuleId(View, obj15);
            }
            tmp14 = tmp32;
          }
        }
        tmp14 = null;
        if (null != preset) {
          const obj18 = { gradient: preset };
          const merged6 = Object.assign(tmp4);
          const tmp20 = authStore(closure_18, obj18);
          let tmp21 = tmp20;
          if (withOverlay) {
            const obj19 = { style: styles.absolute, children: items9 };
            items9 = [tmp20];
            const obj20 = { style: items10 };
            items10 = [styles.softenGradient];
            const obj21 = { backgroundColor: tmpResult12.hexWithOpacity(overlayColor, overlayOpacity) };
            items10[1] = obj21;
            tmpResult12 = ColorUtils;
            items9[1] = authStore(View, obj20);
            tmp21 = unpackModuleId(View, obj19);
          }
          tmp14 = tmp21;
        }
      }
      return tmp14;
    }
  : (overlayOpacity) => {
      let gradientPreset;
      let items1;
      let items10;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let items9;
      let overlayColor;
      let styles;
      let tmp5Result;
      let tmp5Result5;
      let tmp5Result6;
      let tmp5Result7;
      let tmp5Result8;
      let tmp9;
      let num = overlayOpacity.overlayOpacity;
      if (num === undefined) {
        num = 0.7;
      }
      const gradientOverride = overlayOpacity.gradientOverride;
      const merged = Object.assign(overlayOpacity, Object.assign({ overlayOpacity: 0, gradientOverride: 0 }));
      ({ styles, overlayColor } = closure_22());
      const withOverlay = merged.withOverlay;
      closure_22();
      const tmp4 = useThemeDefault();
      const items = [ClientThemesBackgroundStore];
      const obj = useStateFromStores;
      const preset = obj.useStateFromStoresObject(items, () => ({ preset: gradientPreset.gradientPreset })).preset;
      const tmp6 = useRoutedActiveGuildThemeDefault();
      const obj2 = useCustomThemeDisplaySettings;
      const customThemeDisplaySettings = obj2.useCustomThemeDisplaySettings();
      if (null != gradientOverride) {
        if (undefined !== customThemeDisplaySettings) {
          if (gradientOverride.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
            const obj3 = { theme: gradientOverride.theme };
            const merged1 = Object.assign(merged);
            const merged2 = Object.assign(gradientOverride.customThemeSettings);
            const tmp55 = authStore(closure_21, obj3);
            let tmp56 = tmp55;
            if (withOverlay) {
              const obj4 = { style: styles.absolute, children: items1 };
              items1 = [tmp55];
              const obj5 = { style: items2 };
              items2 = [styles.softenGradient];
              const obj6 = { backgroundColor: tmp5Result.hexWithOpacity(overlayColor, num) };
              items2[1] = obj6;
              tmp5Result = ColorUtils;
              items1[1] = authStore(View, obj5);
              tmp56 = unpackModuleId(View, obj4);
            }
            return tmp56;
          }
        }
        if (gradientOverride.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
          const obj7 = { gradient: gradientOverride };
          const merged3 = Object.assign(merged);
          const tmp44 = authStore(closure_18, obj7);
          let tmp45 = tmp44;
          if (withOverlay) {
            const obj8 = { style: styles.absolute, children: items3 };
            items3 = [tmp44];
            const obj9 = { style: items4 };
            items4 = [styles.softenGradient];
            const obj10 = { backgroundColor: tmp5Result5.hexWithOpacity(overlayColor, num) };
            items4[1] = obj10;
            tmp5Result5 = ColorUtils;
            items3[1] = authStore(View, obj9);
            tmp45 = unpackModuleId(View, obj8);
          }
          return tmp45;
        }
      }
      if (null != tmp6) {
        const obj11 = { activeGuildTheme: tmp6, theme: tmp4 };
        const merged4 = Object.assign(merged);
        const tmp35 = authStore(closure_23, obj11);
        let tmp36 = tmp35;
        if (withOverlay) {
          const obj12 = { style: styles.absolute, children: items5 };
          items5 = [tmp35];
          const obj13 = { style: items6 };
          items6 = [styles.softenGradient];
          const obj14 = { backgroundColor: tmp5Result6.hexWithOpacity(overlayColor, num) };
          items6[1] = obj14;
          tmp5Result6 = ColorUtils;
          items5[1] = authStore(View, obj13);
          tmp36 = unpackModuleId(View, obj12);
        }
        tmp9 = tmp36;
      } else {
        if (undefined !== customThemeDisplaySettings) {
          if (undefined !== customThemeDisplaySettings) {
            const obj15 = { theme: customThemeDisplaySettings.baseTheme };
            const merged5 = Object.assign(merged);
            const merged6 = Object.assign(customThemeDisplaySettings.customTheme);
            const tmp26 = authStore(closure_21, obj15);
            let tmp27 = tmp26;
            if (withOverlay) {
              const obj16 = { style: styles.absolute, children: items7 };
              items7 = [tmp26];
              const obj17 = { style: items8 };
              items8 = [styles.softenGradient];
              const obj18 = { backgroundColor: tmp5Result7.hexWithOpacity(overlayColor, num) };
              items8[1] = obj18;
              tmp5Result7 = ColorUtils;
              items7[1] = authStore(View, obj17);
              tmp27 = unpackModuleId(View, obj16);
            }
            tmp9 = tmp27;
          }
        }
        tmp9 = null;
        if (null != preset) {
          const obj19 = { gradient: preset };
          const merged7 = Object.assign(merged);
          const tmp15 = authStore(closure_18, obj19);
          let tmp16 = tmp15;
          if (withOverlay) {
            const obj20 = { style: styles.absolute, children: items9 };
            items9 = [tmp15];
            const obj21 = { style: items10 };
            items10 = [styles.softenGradient];
            const obj22 = { backgroundColor: tmp5Result8.hexWithOpacity(overlayColor, num) };
            items10[1] = obj22;
            tmp5Result8 = ColorUtils;
            items9[1] = authStore(View, obj21);
            tmp16 = unpackModuleId(View, obj20);
          }
          tmp9 = tmp16;
        }
      }
      return tmp9;
    };
function validateColors(arr) {
  return arr.reduce((arr, item) => {
    if (typeof item === "string") {
      if (regex.test(item)) {
        arr = arr.push(item);
        return arr;
      }
    }
    try {
      const push = arr.push;
      const obj = reduced(dependencyMap[17])(item);
      push(obj.hex("rgb"));
    } catch (err) {}
    return arr;
  }, []);
}
let result = size.fileFinishedImporting("modules/client_themes/native/ThemedGradient.tsx");

export default tmp5;
export const Gradient = tmp3;
export { validateColors };
export const CustomThemedGradient = tmp4;
