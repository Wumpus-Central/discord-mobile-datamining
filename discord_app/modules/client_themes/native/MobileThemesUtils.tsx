// === Module 5245: MobileThemesUtils ===

// Module 5245 (MobileThemesUtils)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1242 */;
import _modDef2771 from "module_2771" /* 2771 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5036 */;
import HexagonCampaignPerkAvailability from "HexagonCampaignPerkAvailability" /* 5037 */;
import useCustomThemeDisplaySettings from "useCustomThemeDisplaySettings" /* 5247 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5033 */;
import SavedCustomThemeStore from "SavedCustomThemeStore" /* 5246 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1239 */;

const require = globalThis.__r;

require = fn;
function getCustomThemesName() {
  const intl = util.intl;
  return intl.string(_modDef2771.yl1iMm);
}
const ClientThemesConstants = fn(1241);
({ BACKGROUND_GRADIENT_PRESETS_MOBILE: closure_7, HEXAGON_GRADIENT_PRESET: closure_8, REFRESH_STANDARD_BACKGROUND_THEMES: closure_9 } = ClientThemesConstants);
const HexagonCampaignConstants = fn(5034);
({ HexagonCampaignPerk: c10, HexagonCampaignPerkAvailability: closure_11 } = HexagonCampaignConstants);
const MobileThemesUtils = "MobileThemesUtils";
const size = fn(2);
let result = size.fileFinishedImporting("modules/client_themes/native/MobileThemesUtils.tsx");

export function isHexagonCampaignMobileTheme(themes) {
  let result = themes.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET;
  if (result) {
    result = HexagonCampaignUtils.isHexagonCampaignClientThemePreset(themes.id);
    const tmpResult = HexagonCampaignUtils;
  }
  return result;
}
export function isNitroGatedMobileTheme(mobileThemes) {
  let tmp3 = mobileThemes.type !== ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME;
  if (tmp3) {
    let result = mobileThemes.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET;
    if (result) {
      result = HexagonCampaignUtils.isHexagonCampaignClientThemePreset(mobileThemes.id);
      const tmpResult = HexagonCampaignUtils;
    }
    let tmp5 = !result;
    if (result) {
      tmp5 = HexagonCampaignPerkAvailability.getHexagonCampaignPerkAvailabilityForCurrentUser(constants.CLIENT_THEME, MobileThemesUtils) !== constants2.SELECTABLE;
      const tmpResult2 = HexagonCampaignPerkAvailability;
    }
    tmp3 = tmp5;
  }
  return tmp3;
}
export function getCustomBackgroundGradient() {
  const customThemeDisplaySettings = CustomThemeMobileStore.getCustomThemeDisplaySettings();
  let tmp2 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj.theme, customTheme: obj.customThemeSettings } = customThemeDisplaySettings);
    tmp2 = obj;
  }
  return tmp2;
}
export function useCustomBackgroundGradient(stateFromStores) {
  const customThemeDisplaySettings = useCustomThemeDisplaySettings.useCustomThemeDisplaySettings(stateFromStores);
  let tmp4 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj3 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj2.theme, customTheme: obj2.customThemeSettings } = customThemeDisplaySettings);
    tmp4 = obj3;
  }
  return tmp4;
}
export function usePerModeCustomBackgroundGradient(arg0) {
  _require = arg0;
  const items = [ThemeStore];
  return require("initialize").useStateFromStores(items, () => {
    if (null == closure_0) {
      return null;
    } else {
      const syncedClientTheme = ThemeStore.getSyncedClientTheme(closure_0);
      let prop;
      if (syncedClientTheme != null) {
        prop = syncedClientTheme.customUserThemeSettings;
      }
      let tmp3 = null;
      if (null != prop) {
        tmp3 = null;
        if (0 !== prop.colors.length) {
          const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: ThemeStore.themePreferenceForSystemTheme(closure_0), customThemeSettings: prop };
          tmp3 = obj;
        }
      }
      return tmp3;
    }
  });
}
export function getAllMobileThemes() {
  const customThemeDisplaySettings = CustomThemeMobileStore.getCustomThemeDisplaySettings();
  let tmp2 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj.theme, customTheme: obj.customThemeSettings } = customThemeDisplaySettings);
    tmp2 = obj;
  }
  const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
  const hexagonCampaignPerkAvailabilityForCurrentUser = HexagonCampaignPerkAvailability.getHexagonCampaignPerkAvailabilityForCurrentUser(constants.CLIENT_THEME, MobileThemesUtils);
  if (gradientPreset != null) {
    const id = gradientPreset.id;
  }
  if (hexagonCampaignPerkAvailabilityForCurrentUser !== constants2.HIDDEN) {
    const items = [React6];
    HermesBuiltin.arraySpread(React5, 1);
    let tmp14 = items;
  } else {
    if (tmp6Result.isHexagonCampaignClientThemePreset(id)) {
      if (!tmp6Result2.isHexagonCampaignPerkExpiredForCurrentUser(constants.CLIENT_THEME)) {
        const items1 = [React6];
        HermesBuiltin.arraySpread(React5, 1);
        tmp14 = items1;
      }
      tmp6Result2 = HexagonCampaignPerkAvailability;
    }
    tmp14 = React5;
    tmp6Result = HexagonCampaignUtils;
  }
  if (null != tmp2) {
    const items2 = [];
    const arraySpreadResult6 = HermesBuiltin.arraySpread(React7, 0);
    items2[arraySpreadResult6] = tmp2;
    HermesBuiltin.arraySpread(tmp14, arraySpreadResult6 + 1);
    let items3 = items2;
  } else {
    items3 = [];
    HermesBuiltin.arraySpread(tmp14, HermesBuiltin.arraySpread(React7, 0));
  }
  return items3;
}
export function useAllMobileThemes(mode) {
  _require = mode;
  const items = [SavedCustomThemeStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => savedCustomTheme.getSavedCustomTheme());
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = stateFromStores;
  }
  let obj = require("initialize");
  const customThemeDisplaySettings = require("useCustomThemeDisplaySettings").useCustomThemeDisplaySettings(tmp4);
  let stateFromStores1 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj2 = { type: tmp(1242).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj3.theme, customTheme: obj3.customThemeSettings } = customThemeDisplaySettings);
    stateFromStores1 = obj2;
  }
  closure_129_0 = mode;
  const tmpResult = require("useCustomThemeDisplaySettings");
  const items1 = [ThemeStore];
  if (null != mode) {
    stateFromStores1 = tmpResult6.useStateFromStores(items1, () => {
      if (null == closure_0) {
        return null;
      } else {
        const syncedClientTheme = ThemeStore.getSyncedClientTheme(closure_0);
        let prop;
        if (syncedClientTheme != null) {
          prop = syncedClientTheme.customUserThemeSettings;
        }
        let tmp3 = null;
        if (null != prop) {
          tmp3 = null;
          if (0 !== prop.colors.length) {
            const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: ThemeStore.themePreferenceForSystemTheme(closure_0), customThemeSettings: prop };
            tmp3 = obj;
          }
        }
        return tmp3;
      }
    });
  }
  tmpResult6 = require("initialize");
  const hexagonCampaignPerkAvailability = require("HexagonCampaignPerkAvailability").useHexagonCampaignPerkAvailability(constants.CLIENT_THEME, MobileThemesUtils);
  require("initialize");
  const items2 = [ClientThemesBackgroundStore, ThemeStore];
  if (hexagonCampaignPerkAvailability !== constants2.HIDDEN) {
    const items3 = [closure_8];
    HermesBuiltin.arraySpread(closure_7, 1);
    let tmp17 = items3;
  } else {
    if (tmpResult9.isHexagonCampaignClientThemePreset(tmp12)) {
      if (!tmpResult10.isHexagonCampaignPerkExpiredForCurrentUser(constants.CLIENT_THEME)) {
        const items4 = [closure_8];
        HermesBuiltin.arraySpread(closure_7, 1);
        tmp17 = items4;
      }
      tmpResult10 = tmp(5037);
    }
    tmp17 = closure_7;
    tmpResult9 = tmp(5036);
  }
  if (null != stateFromStores1) {
    const items5 = [];
    const arraySpreadResult6 = HermesBuiltin.arraySpread(closure_9, 0);
    items5[arraySpreadResult6] = stateFromStores1;
    HermesBuiltin.arraySpread(tmp17, arraySpreadResult6 + 1);
    let items6 = items5;
  } else {
    items6 = [];
    HermesBuiltin.arraySpread(tmp17, HermesBuiltin.arraySpread(closure_9, 0));
  }
  return items6;
}
export function useSavedCustomTheme() {
  const items = [SavedCustomThemeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => savedCustomTheme.getSavedCustomTheme());
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = stateFromStores;
  }
  return tmp2;
}