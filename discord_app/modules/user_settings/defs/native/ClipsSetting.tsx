// discord_app/modules/user_settings/defs/native/ClipsSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ClipsIcon from "ClipsIcon" /* 14329 */;
import createToggle from "createToggle" /* 10669 */;
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
    return ClipsSettingsScreen.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ClipsSetting.tsx");

export default route;