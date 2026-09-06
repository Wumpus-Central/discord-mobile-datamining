// discord_app/modules/user_settings/defs/native/AppearanceSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import ClientThemesUtils from "../../../client_themes/ClientThemesUtils.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import useActiveTheme from "../../../client_themes/native/useActiveTheme.tsx";
import ClientThemesBackgroundStore from "../../../client_themes/ClientThemesBackgroundStore.tsx";

const _modDef2626 = tmp(2626);
require = fn;
function useAppearanceSettingTrailing() {
  const tmp3 = useThemeDefault();
  const items = [ClientThemesBackgroundStore];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const themeName = ClientThemesUtils.getThemeName(tmp3);
  const activeThemeType = useActiveTheme.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = tmp4(1114).intl;
    return intl2.string(_modDef2626.KSBBpC);
  } else if (tmp8.CLIENT === activeThemeType) {
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
  } else if (tmp8.SYSTEM === activeThemeType) {
    const intl = tmp4(1114).intl;
    return intl.string(tmp4(1114).t.wFpwSk);
  } else {
    return tmp8.DEFAULT === activeThemeType ? themeName : undefined;
  }
}
const ActiveThemeType = fn(1186).ActiveThemeType;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["iHH+ky"]);
  },
  parent: null,
  IconComponent: fn(13378).PaintPaletteIcon,
  useTrailing: useAppearanceSettingTrailing,
  screen: {
    route: fn(1074).UserSettingsSections.APPEARANCE,
    getComponent() {
      return require("SettingsAppearanceScreen").default;
    },
  },
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default SettingBuilders;
export { useAppearanceSettingTrailing };
