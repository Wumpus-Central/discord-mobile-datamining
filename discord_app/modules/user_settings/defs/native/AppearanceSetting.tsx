// discord_app/modules/user_settings/defs/native/AppearanceSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import ClientThemesUtils from "../../../client_themes/ClientThemesUtils.tsx";
import _modDef2795 from "../../../client_themes/intl/ClientThemes.messages.js";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import useActiveTheme from "../../../client_themes/native/useActiveTheme.tsx";
import ClientThemesBackgroundStore from "../../../client_themes/ClientThemesBackgroundStore.tsx";

require = fn;
const ActiveThemeType = fn(1208).ActiveThemeType;
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAppearanceSettingTrailing() {
      const cResult = c.c(9);
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
      const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
      if (cResult[2] !== tmp5) {
        const themeName = ClientThemesUtils.getThemeName(tmp5);
        cResult[2] = tmp5;
        cResult[3] = themeName;
        let tmp10 = themeName;
        const tmpResult3 = ClientThemesUtils;
      } else {
        tmp10 = cResult[3];
      }
      const tmpResult = initialize;
      const activeThemeType = useActiveTheme.useActiveThemeType();
      if (ActiveThemeType.CUSTOM === activeThemeType) {
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult = intl2.string(_modDef2795.KSBBpC);
          cResult[4] = stringResult;
          let tmp19 = stringResult;
        } else {
          tmp19 = cResult[4];
        }
        return tmp19;
      } else if (ActiveThemeType.CLIENT === activeThemeType) {
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === tmp10) {
            let tmp16 = cResult[7];
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
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult1 = intl.string(util.t.wFpwSk);
          cResult[8] = stringResult1;
          let tmp14 = stringResult1;
        } else {
          tmp14 = cResult[8];
        }
        return tmp14;
      } else {
        return ActiveThemeType.DEFAULT === activeThemeType ? tmp10 : undefined;
      }
      const tmpResult4 = useActiveTheme;
    }
  : function useAppearanceSettingTrailing() {
      const tmp3 = useThemeDefault();
      const items = [ClientThemesBackgroundStore];
      const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
      const themeName = ClientThemesUtils.getThemeName(tmp3);
      const activeThemeType = useActiveTheme.useActiveThemeType();
      if (ActiveThemeType.CUSTOM === activeThemeType) {
        const intl2 = util.intl;
        return intl2.string(_modDef2795.KSBBpC);
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
        const intl = util.intl;
        return intl.string(util.t.wFpwSk);
      } else {
        return ActiveThemeType.DEFAULT === activeThemeType ? themeName : undefined;
      }
    };
const SettingBuilders = fn(11262);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["iHH+ky"]);
  },
  parent: null,
  IconComponent: fn(15357).PaintPaletteIcon,
  useTrailing: tmp2,
  screen: {
    route: fn(1085).UserSettingsSections.APPEARANCE,
    getComponent() {
      return require("SettingsAppearanceScreen").default;
    },
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default route;
export const useAppearanceSettingTrailing = tmp2;
