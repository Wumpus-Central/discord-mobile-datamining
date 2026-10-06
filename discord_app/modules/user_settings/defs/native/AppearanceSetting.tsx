// === Module 15094: AppearanceSetting ===

// Module 15094 (AppearanceSetting)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import ThemeConstants from "ThemeConstants" /* 1196 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1239 */;
import _modDef2751 from "module_2751" /* 2751 */;
import useThemeDefault from "useTheme" /* 4797 */;
import useActiveTheme from "useActiveTheme" /* 7520 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 15095 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4703 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const ActiveThemeType = ThemeConstants.ActiveThemeType;
const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let gradientPreset;
  let tmp10;
  let tmp6;
  let tmp7;
  const obj = react;
  const cResult = obj.c(9);
  const tmp5 = useThemeDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ClientThemesBackgroundStore];
    const fn = function c() {
      return gradientPreset.gradientPreset;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] !== tmp5) {
    const tmpResult3 = ClientThemesUtils;
    const themeName = tmpResult3.getThemeName(tmp5);
    cResult[2] = tmp5;
    cResult[3] = themeName;
    tmp10 = themeName;
  } else {
    tmp10 = cResult[3];
  }
  const tmpResult4 = useActiveTheme;
  const activeThemeType = tmpResult4.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    let tmp19;
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl3.intl;
      const stringResult = intl2.string(_modDef2751.KSBBpC);
      cResult[4] = stringResult;
      tmp19 = stringResult;
    } else {
      tmp19 = cResult[4];
    }
    return tmp19;
  } else if (ActiveThemeType.CLIENT === activeThemeType) {
    if (cResult[5] === stateFromStores) {
      let tmp16;
      if (cResult[6] === tmp10) {
        tmp16 = cResult[7];
      }
      return tmp16;
    }
    let name;
    if (stateFromStores != null) {
      const getName = stateFromStores.getName;
      if (getName != null) {
        name = getName();
      }
    }
    if (name == null) {
      name = tmp10;
    }
    cResult[5] = stateFromStores;
    cResult[6] = tmp10;
    cResult[7] = name;
    tmp16 = name;
  } else if (ActiveThemeType.SYSTEM === activeThemeType) {
    let tmp14;
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl3.intl;
      const stringResult1 = intl.string(intl3.t.wFpwSk);
      cResult[8] = stringResult1;
      tmp14 = stringResult1;
    } else {
      tmp14 = cResult[8];
    }
    return tmp14;
  } else {
    return ActiveThemeType.DEFAULT === activeThemeType ? tmp10 : undefined;
  }
}) : (() => {
  let gradientPreset;
  const items = [ClientThemesBackgroundStore];
  const tmp3 = useThemeDefault();
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const obj2 = ClientThemesUtils;
  const themeName = obj2.getThemeName(tmp3);
  const obj3 = useActiveTheme;
  const activeThemeType = obj3.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = intl3.intl;
    return intl2.string(_modDef2751.KSBBpC);
  } else if (ActiveThemeType.CLIENT === activeThemeType) {
    let name;
    if (stateFromStores != null) {
      const getName = stateFromStores.getName;
      if (getName != null) {
        name = getName();
      }
    }
    if (name == null) {
      name = themeName;
    }
    return name;
  } else if (ActiveThemeType.SYSTEM === activeThemeType) {
    const intl = intl3.intl;
    return intl.string(intl3.t.wFpwSk);
  } else {
    return ActiveThemeType.DEFAULT === activeThemeType ? themeName : undefined;
  }
});
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t["iHH+ky"]);
  },
  parent: null,
  IconComponent: PaintPaletteIcon.PaintPaletteIcon,
  useTrailing: tmp2,
  screen: {
    route: UserSettingsSections.APPEARANCE,
    getComponent() {
      return require("SettingsAppearanceScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default route;
export const useAppearanceSettingTrailing = tmp2;