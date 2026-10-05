// === Module 4790: useCustomThemeDisplaySettings ===

// Module 4790 (useCustomThemeDisplaySettings)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1239 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((base_mix) => {
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const obj = react;
  const cResult = obj.c(15);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [CustomThemeMobileStore];
    const fn = function l() {
      const items = [CustomThemeMobileStore.getCustomTheme(), CustomThemeMobileStore.getBaseTheme(), CustomThemeMobileStore.getPreviewTheme()];
      return items;
    };
    cResult[0] = items;
    cResult[1] = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  [tmp8, tmp9, tmp10] = tmpResult.useStateFromStoresArray(tmp4, tmp5);
  _slicedToArray(tmpResult.useStateFromStoresArray(tmp4, tmp5), 3);
  if (undefined !== tmp10) {
    return tmp10;
  } else {
    if (undefined !== tmp8) {
      if (undefined !== tmp9) {
        if (cResult[2] === tmp8) {
          let tmp18;
          if (cResult[3] === tmp9) {
            tmp18 = cResult[4];
          }
          return tmp18;
        }
        const obj2 = { baseTheme: tmp9, customTheme: tmp8 };
        cResult[2] = tmp8;
        cResult[3] = tmp9;
        cResult[4] = obj2;
        tmp18 = obj2;
      }
    }
    if (null != base_mix) {
      let tmp13;
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [];
        cResult[5] = items1;
        tmp13 = items1;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === base_mix.base_mix) {
        if (cResult[7] === base_mix.colors) {
          let tmp14;
          let tmp15;
          if (cResult[8] === base_mix.gradient_angle) {
            tmp14 = cResult[9];
          }
          if (cResult[10] !== base_mix.base_theme) {
            const tmpResult2 = ClientThemesUtils;
            const customThemeBaseTheme = tmpResult2.getCustomThemeBaseTheme(base_mix.base_theme);
            cResult[10] = base_mix.base_theme;
            cResult[11] = customThemeBaseTheme;
            tmp15 = customThemeBaseTheme;
          } else {
            tmp15 = cResult[11];
          }
          if (cResult[12] === tmp14) {
            let tmp17;
            if (cResult[13] === tmp15) {
              tmp17 = cResult[14];
            }
            return tmp17;
          }
          const obj4 = { baseTheme: tmp15, customTheme: tmp14 };
          cResult[12] = tmp14;
          cResult[13] = tmp15;
          cResult[14] = obj4;
          tmp17 = obj4;
        }
      }
      const obj5 = { colors: null, gradientAngle: null, baseMix: null, gradientColorStops: tmp13 };
      ({ colors: obj3.colors, gradient_angle: obj3.gradientAngle, base_mix: obj3.baseMix } = base_mix);
      cResult[6] = base_mix.base_mix;
      cResult[7] = base_mix.colors;
      cResult[8] = base_mix.gradient_angle;
      cResult[9] = obj5;
      tmp14 = obj5;
    }
  }
}) : ((base_theme) => {
  let tmp4;
  let tmp5;
  let tmp6;
  let tmpResult;
  const f89339 = () => {
    const items = [CustomThemeMobileStore.getCustomTheme(), CustomThemeMobileStore.getBaseTheme(), CustomThemeMobileStore.getPreviewTheme()];
    return items;
  };
  let items = [CustomThemeMobileStore];
  const obj = get_initialized;
  [tmp4, tmp5, tmp6] = obj.useStateFromStoresArray(items, f89339);
  _slicedToArray(obj.useStateFromStoresArray(items, f89339), 3);
  if (undefined !== tmp6) {
    return tmp6;
  } else {
    if (undefined !== tmp4) {
      if (undefined !== tmp5) {
        return { baseTheme: tmp5, customTheme: tmp4 };
      }
    }
    if (null != base_theme) {
      const obj4 = { colors: null, gradientAngle: null, baseMix: null, gradientColorStops: [] };
      ({ colors: obj2.colors, gradient_angle: obj2.gradientAngle, base_mix: obj2.baseMix } = base_theme);
      const obj5 = { baseTheme: tmpResult.getCustomThemeBaseTheme(base_theme.base_theme), customTheme: obj4 };
      tmpResult = ClientThemesUtils;
      return obj5;
    }
  }
});
const result = size.fileFinishedImporting("modules/client_themes/native/useCustomThemeDisplaySettings.tsx");

export const useCustomThemeDisplaySettings = tmp2;