// discord_app/modules/user_settings/defs/native/ConnectionsSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import PuzzlePieceIcon from "PuzzlePieceIcon" /* 14311 */;
import createToggle from "createToggle" /* 10669 */;
import { onPress } from "../../connections/native/ConnectionsSettingScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["3fe7U5"]);
  },
  parent: null,
  IconComponent: PuzzlePieceIcon.PuzzlePieceIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.CONNECTIONS,
  getComponent() {
    return onPress.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ConnectionsSetting.tsx");

export default route;