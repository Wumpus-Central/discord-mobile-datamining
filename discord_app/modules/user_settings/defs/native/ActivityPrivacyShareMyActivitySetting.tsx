// discord_app/modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import _modDef2562 from "../../../activity_privacy/ActivityPrivacy.messages.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2562.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2562.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting,
});
const result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx",
);

export default toggle;
