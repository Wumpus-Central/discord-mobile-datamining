// === Module 14302: toggle ===

// Module 14302 (toggle)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import hasFlag from "hasFlag" /* 1403 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4070 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import _updateDiscoverabilityDefault from "_updateDiscoverability" /* 12240 */;
import createToggle from "createToggle" /* 10516 */;

const FriendDiscoveryFlags = ME.FriendDiscoveryFlags;
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.dEYpSt);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByPhoneSettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.X7pIKN);
  },
  useValue: function useDiscoveryByPhoneSettingValue() {
    const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return hasFlag.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
  },
  onValueChange: function onDiscoveryByPhoneSettingValueChange(phone) {
    const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = hasFlag;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    obj = { phone, email: hasFlagResult };
    const result = _updateDiscoverabilityDefault.updateDiscoverability(obj);
  }
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.dEYpSt);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByPhoneSettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.X7pIKN);
  },
  useValue: function useDiscoveryByPhoneSettingValue() {
    const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return hasFlag.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
  },
  onValueChange: function onDiscoveryByPhoneSettingValueChange(phone) {
    const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = hasFlag;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    obj = { phone, email: hasFlagResult };
    const result = _updateDiscoverabilityDefault.updateDiscoverability(obj);
  }
};
let result = set.fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByPhoneSetting.tsx");

export default toggle;