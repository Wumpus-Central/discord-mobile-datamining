// === Module 4991: useCustomThemeDisplaySettings ===

// Module 4991 (useCustomThemeDisplaySettings)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1252 */;
import _slicedToArray from "module_32" /* 32 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1251 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/native/useCustomThemeDisplaySettings.tsx");

export const useCustomThemeDisplaySettings = ReactCompilerGating.isReactCompilerEnabled() ? (function useCustomThemeDisplaySettings(base_mix) {
  const cResult = c.c(15);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [CustomThemeMobileStore];
    const fn = function l() {
      const items = [CustomThemeMobileStore.getCustomTheme(), CustomThemeMobileStore.getBaseTheme(), CustomThemeMobileStore.getPreviewTheme()];
      return items;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = initialize;
  [tmp8, tmp9, tmp10] = initialize.useStateFromStoresArray(tmp4, tmp5);
  if (undefined !== tmp10) {
    return tmp10;
  } else {
    if (undefined !== tmp8) {
      if (undefined !== tmp9) {
        if (cResult[2] === tmp8) {
          if (cResult[3] === tmp9) {
            let tmp18 = cResult[4];
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
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [];
        cResult[5] = items1;
        let tmp13 = items1;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === base_mix.base_mix) {
        if (cResult[7] === base_mix.colors) {
          if (cResult[8] === base_mix.gradient_angle) {
            let tmp14 = cResult[9];
          }
          if (cResult[10] !== base_mix.base_theme) {
            const customThemeBaseTheme = ClientThemesUtils.getCustomThemeBaseTheme(base_mix.base_theme);
            cResult[10] = base_mix.base_theme;
            cResult[11] = customThemeBaseTheme;
            let tmp15 = customThemeBaseTheme;
            const tmpResult2 = ClientThemesUtils;
          } else {
            tmp15 = cResult[11];
          }
          if (cResult[12] === tmp14) {
            if (cResult[13] === tmp15) {
              let tmp17 = cResult[14];
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
      const obj5 = { colors: null, gradientAngle: null, baseMix: null, gradientColorStops: null };
      ({ colors: obj3.colors, gradient_angle: obj3.gradientAngle, base_mix: obj3.baseMix } = base_mix);
      obj5.gradientColorStops = tmp13;
      cResult[6] = base_mix.base_mix;
      cResult[7] = base_mix.colors;
      cResult[8] = base_mix.gradient_angle;
      cResult[9] = obj5;
      tmp14 = obj5;
    }
  }
  const tmp7 = _slicedToArray(initialize.useStateFromStoresArray(tmp4, tmp5), 3);
}) : (function useCustomThemeDisplaySettings(base_theme) {
  let items = [CustomThemeMobileStore];
  [tmp4, tmp5, tmp6] = initialize.useStateFromStoresArray(items, () => {
    const items = [CustomThemeMobileStore.getCustomTheme(), CustomThemeMobileStore.getBaseTheme(), CustomThemeMobileStore.getPreviewTheme()];
    return items;
  });
  if (undefined !== tmp6) {
    return tmp6;
  } else {
    if (undefined !== tmp4) {
      if (undefined !== tmp5) {
        const obj3 = { baseTheme: tmp5, customTheme: tmp4 };
        return obj3;
      }
    }
    if (null != base_theme) {
      const obj4 = { colors: null, gradientAngle: null, baseMix: null, gradientColorStops: null };
      ({ colors: obj2.colors, gradient_angle: obj2.gradientAngle, base_mix: obj2.baseMix } = base_theme);
      obj4.gradientColorStops = [];
      const obj5 = { baseTheme: ClientThemesUtils.getCustomThemeBaseTheme(base_theme.base_theme), customTheme: obj4 };
      return obj5;
    }
  }
  const tmp3 = _slicedToArray(initialize.useStateFromStoresArray(items, () => {
    const items = [CustomThemeMobileStore.getCustomTheme(), CustomThemeMobileStore.getBaseTheme(), CustomThemeMobileStore.getPreviewTheme()];
    return items;
  }), 3);
});