// discord_app/modules/user_settings/defs/native/ClipsSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import ClipsIcon from "../../../../design/components/Icon/native/redesign/generated/ClipsIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { ClipsSettingsScreen } from "../../clips/native/SettingsClipsScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.z2jK6X);
  },
  parent: null,
  IconComponent: ClipsIcon.ClipsIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.CLIPS,
  getComponent() {
    return ClipsSettingsScreen /* ClipsSettingsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ClipsSetting.tsx");

export default route;