// discord_app/modules/user_settings/defs/native/DiscoveryByPhoneSetting.tsx
import { FriendDiscoveryFlags } from "ME";
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.dEYpSt);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByPhoneSettingDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.X7pIKN);
  },
  useValue: function useDiscoveryByPhoneSettingValue() {
    const FriendDiscoverySettings = require("../../UserSettings.tsx") /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return require("../../../../../discord_common/js/shared/utils/FlagUtils.tsx") /* hasFlag */.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
  },
  onValueChange: function onDiscoveryByPhoneSettingValueChange(phone) {
    const FriendDiscoverySettings = require("../../UserSettings.tsx") /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = require("../../../../../discord_common/js/shared/utils/FlagUtils.tsx") /* hasFlag */;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    obj = { phone, email: hasFlagResult };
    const result = require("../../../contact_sync/native/ContactSyncActionCreators.tsx").updateDiscoverability(obj);
  }
});
let obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.dEYpSt);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByPhoneSettingDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.X7pIKN);
  },
  useValue: function useDiscoveryByPhoneSettingValue() {
    const FriendDiscoverySettings = require("../../UserSettings.tsx") /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return require("../../../../../discord_common/js/shared/utils/FlagUtils.tsx") /* hasFlag */.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
  },
  onValueChange: function onDiscoveryByPhoneSettingValueChange(phone) {
    const FriendDiscoverySettings = require("../../UserSettings.tsx") /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = require("../../../../../discord_common/js/shared/utils/FlagUtils.tsx") /* hasFlag */;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    obj = { phone, email: hasFlagResult };
    const result = require("../../../contact_sync/native/ContactSyncActionCreators.tsx").updateDiscoverability(obj);
  }
};
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByPhoneSetting.tsx");

export default toggle;