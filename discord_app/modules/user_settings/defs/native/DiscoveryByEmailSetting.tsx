// discord_app/modules/user_settings/defs/native/DiscoveryByEmailSetting.tsx
import { FriendDiscoveryFlags } from "ME";
import createToggle from "createToggle";
import { hasFlag } from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { _updateDiscoverability } from "../../../contact_sync/native/ContactSyncActionCreators.tsx";
import { explicitContentFromProto } from "../../UserSettings.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["w/qqKK"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByEmailSettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.ilGsHE);
  },
  useValue: function useDiscoveryByEmailSettingValue() {
    const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return hasFlag.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
  },
  onValueChange: function onDiscoveryByEmailSettingValueChange(email) {
    const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = hasFlag;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
    obj = { phone: hasFlagResult, email };
    const result = _updateDiscoverability.updateDiscoverability(obj);
  }
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["w/qqKK"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByEmailSettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.ilGsHE);
  },
  useValue: function useDiscoveryByEmailSettingValue() {
    const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return hasFlag.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
  },
  onValueChange: function onDiscoveryByEmailSettingValueChange(email) {
    const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = hasFlag;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
    obj = { phone: hasFlagResult, email };
    const result = _updateDiscoverability.updateDiscoverability(obj);
  }
};
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByEmailSetting.tsx");

export default toggle;