// discord_app/modules/user_settings/defs/native/ConnectionsSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import PuzzlePieceIcon from "../../../../design/components/Icon/native/redesign/generated/PuzzlePieceIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { onPress } from "../../connections/native/ConnectionsSettingScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["3fe7U5"]);
  },
  parent: null,
  IconComponent: PuzzlePieceIcon.PuzzlePieceIcon,
  screen: obj,
};
obj = {
  route: ME.UserSettingsSections.CONNECTIONS,
  getComponent() {
    return onPress /* onPress */.default;
  },
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ConnectionsSetting.tsx");

export default route;
