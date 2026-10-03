// discord_app/modules/client_themes/native/MobileThemesUtils.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import ClientThemesTypes from "../ClientThemesTypes.tsx";
import _modDef2723 from "../intl/ClientThemes.messages.js";
import useCustomThemeDisplaySettings from "useCustomThemeDisplaySettings.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import SavedCustomThemeStore from "../SavedCustomThemeStore.tsx";
import CustomThemeMobileStore from "CustomThemeMobileStore.tsx";

require = fn;
function getCustomThemesName() {
  const intl = util.intl;
  return intl.string(_modDef2723.yl1iMm);
}
const ClientThemesConstants = fn(1240);
({ BACKGROUND_GRADIENT_PRESETS_MOBILE: metroRequire, REFRESH_STANDARD_BACKGROUND_THEMES: closure_7 } =
  ClientThemesConstants);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
  : (arg0) => {
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
let closure_9 = tmp3;
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
        const fn = function u() {
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
  : (arg0) => {
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
let closure_10 = tmp4;
fn(558);
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SavedCustomThemeStore];
        const fn = function s() {
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
  : () => {
      const items = [SavedCustomThemeStore];
      const stateFromStores = initialize.useStateFromStores(items, () => savedCustomTheme.getSavedCustomTheme());
      let tmp2 = null;
      if (null != stateFromStores) {
        tmp2 = stateFromStores;
      }
      return tmp2;
    };
let closure_11 = tmp6;
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
const result = size.fileFinishedImporting("modules/client_themes/native/MobileThemesUtils.tsx");

export { getCustomBackgroundGradient };
export const useCustomBackgroundGradient = tmp3;
export const usePerModeCustomBackgroundGradient = tmp4;
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
  if (null != tmp2) {
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(React5, 0);
    items[arraySpreadResult] = tmp2;
    HermesBuiltin.arraySpread(timestampProducer, arraySpreadResult + 1);
    let items1 = items;
  } else {
    items1 = [];
    HermesBuiltin.arraySpread(timestampProducer, HermesBuiltin.arraySpread(React5, 0));
  }
  return items1;
};
export const useAllMobileThemes = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(2);
      let tmp2 = closure_9(closure_11());
      if (null != arg0) {
        tmp2 = closure_10(arg0);
      }
      if (cResult[0] !== tmp2) {
        if (null != tmp2) {
          const items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(React5, 0);
          items[arraySpreadResult] = tmp2;
          HermesBuiltin.arraySpread(timestampProducer, arraySpreadResult + 1);
          let items1 = items;
        } else {
          items1 = [];
          HermesBuiltin.arraySpread(timestampProducer, HermesBuiltin.arraySpread(React5, 0));
        }
        cResult[0] = tmp2;
        cResult[1] = items1;
      } else {
        return cResult[1];
      }
    }
  : (arg0) => {
      let tmp = closure_9(closure_11());
      if (null != arg0) {
        tmp = closure_10(arg0);
      }
      if (null != tmp) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(React5, 0);
        items[arraySpreadResult] = tmp;
        HermesBuiltin.arraySpread(timestampProducer, arraySpreadResult + 1);
        let items1 = items;
      } else {
        items1 = [];
        HermesBuiltin.arraySpread(timestampProducer, HermesBuiltin.arraySpread(React5, 0));
      }
      return items1;
    };
export const useSavedCustomTheme = tmp6;
