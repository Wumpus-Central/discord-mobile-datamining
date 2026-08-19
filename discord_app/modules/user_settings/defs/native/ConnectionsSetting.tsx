// discord_app/modules/user_settings/defs/native/ConnectionsSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import PuzzlePieceIcon from "../../../../design/components/Icon/native/redesign/generated/PuzzlePieceIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { onPress } from "../../connections/native/ConnectionsSettingScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.CONNECTIONS,
  getComponent() {
    return onPress /* onPress */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ConnectionsSetting.tsx");

export default route;