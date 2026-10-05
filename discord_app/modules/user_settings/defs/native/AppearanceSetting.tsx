// discord_app/modules/user_settings/defs/native/AppearanceSetting.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import ThemeConstants from "../../ThemeConstants.tsx";
import ClientThemesUtils from "../../../client_themes/ClientThemesUtils.tsx";
import _modDef2723 from "../../../client_themes/intl/ClientThemes.messages.js";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import useActiveTheme from "../../../client_themes/native/useActiveTheme.tsx";
import PaintPaletteIcon from "../../../../design/components/Icon/native/redesign/generated/PaintPaletteIcon.tsx";
import ClientThemesBackgroundStore from "../../../client_themes/ClientThemesBackgroundStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const ActiveThemeType = ThemeConstants.ActiveThemeType;
const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
          const stringResult = intl2.string(_modDef2723.KSBBpC);
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
    }
  : () => {
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
        return intl2.string(_modDef2723.KSBBpC);
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
    };
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
    },
  },
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default route;
export const useAppearanceSettingTrailing = tmp2;
