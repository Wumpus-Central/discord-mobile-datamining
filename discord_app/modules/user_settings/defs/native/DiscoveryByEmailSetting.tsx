// discord_app/modules/user_settings/defs/native/DiscoveryByEmailSetting.tsx
import react from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import FlagUtils from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import ContactSyncActionCreatorsDefault from "../../../contact_sync/native/ContactSyncActionCreators.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const FriendDiscoveryFlags = Constants.FriendDiscoveryFlags;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
      const setting = FriendDiscoverySettings.useSetting();
      if (cResult[0] !== setting) {
        const tmpResult = FlagUtils;
        const hasFlagResult = tmpResult.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
        cResult[0] = setting;
        cResult[1] = hasFlagResult;
        tmp5 = hasFlagResult;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
      const setting = FriendDiscoverySettings.useSetting();
      const obj = FlagUtils;
      return obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["w/qqKK"]);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByEmailSettingDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.ilGsHE);
  },
  useValue: tmp2,
  onValueChange: function onDiscoveryByEmailSettingValueChange(email) {
    const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    const obj = FlagUtils;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
    const obj2 = ContactSyncActionCreatorsDefault;
    const obj3 = { phone: hasFlagResult, email };
    const result = obj2.updateDiscoverability(obj3);
  },
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByEmailSetting.tsx");

export default toggle;
