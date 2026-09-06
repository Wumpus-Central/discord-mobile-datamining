// discord_app/modules/user_settings/defs/native/DiscoveryByPhoneSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import FlagUtils from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import ContactSyncActionCreatorsDefault from "../../../contact_sync/native/ContactSyncActionCreators.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const FriendDiscoveryFlags = Constants.FriendDiscoveryFlags;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dEYpSt);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByPhoneSettingDescription() {
    const intl = util.intl;
    return intl.string(util.t.X7pIKN);
  },
  useValue: function useDiscoveryByPhoneSettingValue() {
    const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return FlagUtils.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
  },
  onValueChange: function onDiscoveryByPhoneSettingValueChange(phone) {
    const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = FlagUtils;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    obj = { phone, email: hasFlagResult };
    const result = ContactSyncActionCreatorsDefault.updateDiscoverability(obj);
  },
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByPhoneSetting.tsx");

export default toggle;
