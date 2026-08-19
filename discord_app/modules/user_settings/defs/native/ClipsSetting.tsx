// discord_app/modules/user_settings/defs/native/ClipsSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import ClipsIcon from "../../../../design/components/Icon/native/redesign/generated/ClipsIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { ClipsSettingsScreen } from "../../clips/native/SettingsClipsScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.CLIPS,
  getComponent() {
    return ClipsSettingsScreen /* ClipsSettingsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ClipsSetting.tsx");

export default route;