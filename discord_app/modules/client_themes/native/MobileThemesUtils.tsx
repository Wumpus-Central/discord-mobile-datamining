// discord_app/modules/client_themes/native/MobileThemesUtils.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import ClientThemesTypes from "../ClientThemesTypes.tsx";
import _modDef2769 from "../intl/ClientThemes.messages.js";
import HexagonCampaignUtils from "../../hexagon_campaign/HexagonCampaignUtils.tsx";
import HexagonCampaignPerkAvailability from "../../hexagon_campaign/HexagonCampaignPerkAvailability.tsx";
import useCustomThemeDisplaySettings from "useCustomThemeDisplaySettings.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import ClientThemesBackgroundStore from "../ClientThemesBackgroundStore.tsx";
import SavedCustomThemeStore from "../SavedCustomThemeStore.tsx";
import CustomThemeMobileStore from "CustomThemeMobileStore.tsx";

const require = globalThis.__r;

require = fn;
function getCustomThemesName() {
  const intl = util.intl;
  return intl.string(_modDef2769.yl1iMm);
}
const ClientThemesConstants = fn(1252);
({
  BACKGROUND_GRADIENT_PRESETS_MOBILE: closure_7,
  HEXAGON_GRADIENT_PRESET: closure_8,
  REFRESH_STANDARD_BACKGROUND_THEMES: closure_9,
} = ClientThemesConstants);
const HexagonCampaignConstants = fn(4997);
({ HexagonCampaignPerk: c10, HexagonCampaignPerkAvailability: closure_11 } = HexagonCampaignConstants);
const MobileThemesUtils = "MobileThemesUtils";
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCustomBackgroundGradient(arg0) {
      let CUSTOM_BACKGROUND_GRADIENT = dependencyMap;
      const cResult = c.c(3);
      customTheme = useCustomThemeDisplaySettings.useCustomThemeDisplaySettings(arg0);
      if (undefined === customTheme) {
        return null;
      } else {
        if (cResult[0] === customTheme.baseTheme) {
        }
        const obj4 = { type: null, getName: null, theme: null, customThemeSettings: null };
        CUSTOM_BACKGROUND_GRADIENT = ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT;
        obj4.type = CUSTOM_BACKGROUND_GRADIENT;
        obj4.getName = getCustomThemesName;
        ({ baseTheme: obj3.theme, customTheme: obj3.customThemeSettings } = customTheme);
        ({ baseTheme: tmp2[0], customTheme } = customTheme);
        cResult[1] = customTheme;
        cResult[2] = obj4;
      }
    }
  : function useCustomBackgroundGradient(arg0) {
      const customThemeDisplaySettings = useCustomThemeDisplaySettings.useCustomThemeDisplaySettings(arg0);
      let tmp4 = null;
      if (undefined !== customThemeDisplaySettings) {
        const obj3 = {
          type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT,
          getName: getCustomThemesName,
          theme: null,
          customThemeSettings: null,
        };
        ({ baseTheme: obj2.theme, customTheme: obj2.customThemeSettings } = customThemeDisplaySettings);
        tmp4 = obj3;
      }
      return tmp4;
    };
let closure_14 = tmp4;
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePerModeCustomBackgroundGradient(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ThemeStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
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
                const obj = {
                  type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT,
                  getName: getCustomThemesName,
                  theme: ThemeStore.themePreferenceForSystemTheme(closure_0),
                  customThemeSettings: prop,
                };
                tmp3 = obj;
              }
            }
            return tmp3;
          }
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = require("c");
      return require("initialize").useStateFromStores(first, tmp6);
    }
  : function usePerModeCustomBackgroundGradient(arg0) {
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
              const obj = {
                type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT,
                getName: getCustomThemesName,
                theme: ThemeStore.themePreferenceForSystemTheme(closure_0),
                customThemeSettings: prop,
              };
              tmp3 = obj;
            }
          }
          return tmp3;
        }
      });
    };
let closure_15 = tmp5;
fn(558);
ReactCompilerGating = fn(558);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSavedCustomTheme() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SavedCustomThemeStore];
        const fn = function n() {
          return savedCustomTheme.getSavedCustomTheme();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      let tmp8 = null;
      if (null != stateFromStores) {
        tmp8 = stateFromStores;
      }
      return tmp8;
    }
  : function useSavedCustomTheme() {
      const items = [SavedCustomThemeStore];
      const stateFromStores = initialize.useStateFromStores(items, () => savedCustomTheme.getSavedCustomTheme());
      let tmp2 = null;
      if (null != stateFromStores) {
        tmp2 = stateFromStores;
      }
      return tmp2;
    };
let closure_16 = tmp7;
function isHexagonCampaignMobileTheme(themes) {
  let result = themes.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET;
  if (result) {
    result = HexagonCampaignUtils.isHexagonCampaignClientThemePreset(themes.id);
    const tmpResult = HexagonCampaignUtils;
  }
  return result;
}
function getCustomBackgroundGradient() {
  const customThemeDisplaySettings = CustomThemeMobileStore.getCustomThemeDisplaySettings();
  let tmp2 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = {
      type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT,
      getName: getCustomThemesName,
      theme: null,
      customThemeSettings: null,
    };
    ({ baseTheme: obj.theme, customTheme: obj.customThemeSettings } = customThemeDisplaySettings);
    tmp2 = obj;
  }
  return tmp2;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/client_themes/native/MobileThemesUtils.tsx");

export { isHexagonCampaignMobileTheme };
export const isNitroGatedMobileTheme = function isNitroGatedMobileTheme(themes) {
  let tmp3 = themes.type !== ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME;
  if (tmp3) {
    let result = themes.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET;
    if (result) {
      result = HexagonCampaignUtils.isHexagonCampaignClientThemePreset(themes.id);
      const tmpResult = HexagonCampaignUtils;
    }
    let tmp5 = !result;
    if (result) {
      tmp5 =
        HexagonCampaignPerkAvailability.getHexagonCampaignPerkAvailabilityForCurrentUser(
          constants.CLIENT_THEME,
          MobileThemesUtils,
        ) !== constants2.SELECTABLE;
      const tmpResult2 = HexagonCampaignPerkAvailability;
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
export { getCustomBackgroundGradient };
export const useCustomBackgroundGradient = tmp4;
export const usePerModeCustomBackgroundGradient = tmp5;
export const getAllMobileThemes = function getAllMobileThemes() {
  const customThemeDisplaySettings = CustomThemeMobileStore.getCustomThemeDisplaySettings();
  let tmp2 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = {
      type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT,
      getName: getCustomThemesName,
      theme: null,
      customThemeSettings: null,
    };
    ({ baseTheme: obj.theme, customTheme: obj.customThemeSettings } = customThemeDisplaySettings);
    tmp2 = obj;
  }
  const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
  const hexagonCampaignPerkAvailabilityForCurrentUser =
    HexagonCampaignPerkAvailability.getHexagonCampaignPerkAvailabilityForCurrentUser(
      constants.CLIENT_THEME,
      MobileThemesUtils,
    );
  if (gradientPreset != null) {
    const id = gradientPreset.id;
  }
  if (hexagonCampaignPerkAvailabilityForCurrentUser !== constants2.HIDDEN) {
    const items = [closure_1_8];
    HermesBuiltin.arraySpread(React5, 1);
    let tmp14 = items;
  } else {
    if (tmp6Result.isHexagonCampaignClientThemePreset(id)) {
      if (!tmp6Result2.isHexagonCampaignPerkExpiredForCurrentUser(constants.CLIENT_THEME)) {
        const items1 = [closure_1_8];
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
    const arraySpreadResult6 = HermesBuiltin.arraySpread(React6, 0);
    items2[arraySpreadResult6] = tmp2;
    HermesBuiltin.arraySpread(tmp14, arraySpreadResult6 + 1);
    let items3 = items2;
  } else {
    items3 = [];
    HermesBuiltin.arraySpread(tmp14, HermesBuiltin.arraySpread(React6, 0));
  }
  return items3;
};
export const useAllMobileThemes = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAllMobileThemes(arg0) {
      _require = arg0;
      const cResult = require("c").c(7);
      let tmp4 = closure_14(closure_16());
      if (null != arg0) {
        tmp4 = closure_15(arg0);
      }
      const obj = require("c");
      const hexagonCampaignPerkAvailability =
        require("HexagonCampaignPerkAvailability").useHexagonCampaignPerkAvailability(
          constants.CLIENT_THEME,
          MobileThemesUtils,
        );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ClientThemesBackgroundStore, ThemeStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          if (null != closure_0) {
            const syncedClientTheme = ThemeStore.getSyncedClientTheme(tmp);
            let prop;
            if (syncedClientTheme != null) {
              prop = syncedClientTheme.backgroundGradientPresetId;
            }
            let id = prop;
          } else {
            const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
            if (gradientPreset != null) {
              id = gradientPreset.id;
            }
          }
          return id;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[2];
      }
      const tmpResult = require("HexagonCampaignPerkAvailability");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp10);
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === hexagonCampaignPerkAvailability) {
          if (cResult[5] === tmp4) {
            return cResult[6];
          }
        }
      }
      if (hexagonCampaignPerkAvailability !== constants2.HIDDEN) {
        const items1 = [closure_8];
        HermesBuiltin.arraySpread(closure_7, 1);
        let tmp16 = items1;
      } else {
        if (tmpResult5.isHexagonCampaignClientThemePreset(stateFromStores)) {
          if (!tmpResult6.isHexagonCampaignPerkExpiredForCurrentUser(constants.CLIENT_THEME)) {
            const items2 = [closure_8];
            HermesBuiltin.arraySpread(closure_7, 1);
            tmp16 = items2;
          }
          tmpResult6 = tmp(5000);
        }
        tmp16 = closure_7;
        tmpResult5 = tmp(4999);
      }
      if (null != tmp4) {
        const items3 = [];
        const arraySpreadResult6 = HermesBuiltin.arraySpread(closure_9, 0);
        items3[arraySpreadResult6] = tmp4;
        HermesBuiltin.arraySpread(tmp16, arraySpreadResult6 + 1);
        let items4 = items3;
      } else {
        items4 = [];
        HermesBuiltin.arraySpread(tmp16, HermesBuiltin.arraySpread(closure_9, 0));
      }
      cResult[3] = stateFromStores;
      cResult[4] = hexagonCampaignPerkAvailability;
      cResult[5] = tmp4;
      cResult[6] = items4;
      const tmpResult4 = require("initialize");
    }
  : function useAllMobileThemes(arg0) {
      _require = arg0;
      let tmp = closure_14(closure_16());
      if (null != arg0) {
        tmp = closure_15(arg0);
      }
      const hexagonCampaignPerkAvailability =
        require("HexagonCampaignPerkAvailability").useHexagonCampaignPerkAvailability(
          constants.CLIENT_THEME,
          MobileThemesUtils,
        );
      require("initialize");
      const items = [ClientThemesBackgroundStore, ThemeStore];
      if (hexagonCampaignPerkAvailability !== constants2.HIDDEN) {
        const items1 = [closure_8];
        HermesBuiltin.arraySpread(closure_7, 1);
        let tmp12 = items1;
      } else {
        if (tmp2Result.isHexagonCampaignClientThemePreset(tmp7)) {
          if (!tmp2Result2.isHexagonCampaignPerkExpiredForCurrentUser(constants.CLIENT_THEME)) {
            const items2 = [closure_8];
            HermesBuiltin.arraySpread(closure_7, 1);
            tmp12 = items2;
          }
          tmp2Result2 = tmp2(5000);
        }
        tmp12 = closure_7;
        tmp2Result = tmp2(4999);
      }
      if (null != tmp) {
        const items3 = [];
        const arraySpreadResult6 = HermesBuiltin.arraySpread(closure_9, 0);
        items3[arraySpreadResult6] = tmp;
        HermesBuiltin.arraySpread(tmp12, arraySpreadResult6 + 1);
        let items4 = items3;
      } else {
        items4 = [];
        HermesBuiltin.arraySpread(tmp12, HermesBuiltin.arraySpread(closure_9, 0));
      }
      return items4;
    };
export const useSavedCustomTheme = tmp7;
