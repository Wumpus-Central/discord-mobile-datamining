// discord_app/modules/user_settings/defs/native/ClipsSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import ClipsIcon from "../../../../design/components/Icon/native/redesign/generated/ClipsIcon.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.z2jK6X);
  },
  parent: null,
  IconComponent: ClipsIcon.ClipsIcon,
  screen: {
    route: Constants.UserSettingsSections.CLIPS,
    getComponent() {
      return require("SettingsClipsScreen").default;
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ClipsSetting.tsx");

export default route;
