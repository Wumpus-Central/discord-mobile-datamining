// === Module 9243: useActiveTheme ===

// Module 9243 (useActiveTheme)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import useRoutedActiveGuildThemeDefault from "useRoutedActiveGuildTheme" /* 4935 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1207 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4897 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1250 */;

require = fn;
const ThemeConstants = fn(1208);
({ SystemThemeState: metroRequire, ActiveThemeType: closure_7 } = ThemeConstants);
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
fn(558);
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveThemeType() {
  const cResult = c.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CustomThemeMobileStore];
    const fn = function c() {
      return CustomThemeMobileStore.hasCustomTheme();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ClientThemesBackgroundStore];
    const fn2 = function h() {
      return null != gradientPreset.gradientPreset;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = initialize;
  const stateFromStores1 = initialize.useStateFromStores(tmp8, tmp9);
  const tmp12 = useRoutedActiveGuildThemeDefault();
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UnsyncedUserSettingsStore];
    const fn3 = function p() {
      return useSystemTheme.useSystemTheme;
    };
    cResult[4] = items2;
    cResult[5] = fn3;
    let tmp14 = fn3;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  const tmpResult3 = initialize;
  let type;
  const stateFromStores2 = initialize.useStateFromStores(tmp13, tmp14);
  if (tmp12 != null) {
    type = tmp12.type;
  }
  if ("custom" === type) {
    let DEFAULT = constants2.CUSTOM;
  } else {
    let type1;
    if (tmp12 != null) {
      type1 = tmp12.type;
    }
    if ("preset" === type1) {
      DEFAULT = constants2.CLIENT;
    } else if (stateFromStores) {
      DEFAULT = constants2.CUSTOM;
    } else if (stateFromStores1) {
      DEFAULT = constants2.CLIENT;
    } else if (stateFromStores2 === constants.ON) {
      DEFAULT = constants2.SYSTEM;
    } else {
      DEFAULT = constants2.DEFAULT;
    }
  }
  return DEFAULT;
}) : (function useActiveThemeType() {
  const items = [CustomThemeMobileStore];
  const stateFromStores = initialize.useStateFromStores(items, () => CustomThemeMobileStore.hasCustomTheme());
  const items1 = [ClientThemesBackgroundStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => null != gradientPreset.gradientPreset);
  const tmp3 = useRoutedActiveGuildThemeDefault();
  const items2 = [UnsyncedUserSettingsStore];
  let type;
  const stateFromStores2 = initialize.useStateFromStores(items2, () => useSystemTheme.useSystemTheme);
  if (tmp3 != null) {
    type = tmp3.type;
  }
  if ("custom" === type) {
    let DEFAULT = constants2.CUSTOM;
  } else {
    let type1;
    if (tmp3 != null) {
      type1 = tmp3.type;
    }
    if ("preset" === type1) {
      DEFAULT = constants2.CLIENT;
    } else if (stateFromStores) {
      DEFAULT = constants2.CUSTOM;
    } else if (stateFromStores1) {
      DEFAULT = constants2.CLIENT;
    } else if (stateFromStores2 === constants.ON) {
      DEFAULT = constants2.SYSTEM;
    } else {
      DEFAULT = constants2.DEFAULT;
    }
  }
  return DEFAULT;
});
let closure_8 = tmp5;
function useIsCustomThemeActive() {
  return closure_8() === constants2.CUSTOM;
}
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/client_themes/native/useActiveTheme.tsx");

export { useIsCustomThemeActive };
export const useIsClientThemeOrCustomThemeActive = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsClientThemeOrCustomThemeActive() {
  const tmp = closure_8();
  return tmp === constants2.CLIENT || tmp === constants2.CUSTOM;
}) : (function useIsClientThemeOrCustomThemeActive() {
  const tmp = closure_8();
  return tmp === constants2.CLIENT || tmp === constants2.CUSTOM;
});
export const useActiveThemeType = tmp5;