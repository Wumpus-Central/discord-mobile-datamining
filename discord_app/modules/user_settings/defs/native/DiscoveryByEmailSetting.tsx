// discord_app/modules/user_settings/defs/native/DiscoveryByEmailSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import FlagUtils from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import ContactSyncActionCreatorsDefault from "../../../contact_sync/native/ContactSyncActionCreators.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const FriendDiscoveryFlags = Constants.FriendDiscoveryFlags;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
      const setting = FriendDiscoverySettings.useSetting();
      if (cResult[0] !== setting) {
        const hasFlagResult = FlagUtils.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
        cResult[0] = setting;
        cResult[1] = hasFlagResult;
        let tmp5 = hasFlagResult;
        const tmpResult = FlagUtils;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
      const setting = FriendDiscoverySettings.useSetting();
      return FlagUtils.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w/qqKK"]);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByEmailSettingDescription() {
    const intl = util.intl;
    return intl.string(util.t.ilGsHE);
  },
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(2);
        const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
        const setting = FriendDiscoverySettings.useSetting();
        if (cResult[0] !== setting) {
          const hasFlagResult = FlagUtils.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
          cResult[0] = setting;
          cResult[1] = hasFlagResult;
          let tmp5 = hasFlagResult;
          const tmpResult = FlagUtils;
        } else {
          tmp5 = cResult[1];
        }
        return tmp5;
      }
    : () => {
        const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
        const setting = FriendDiscoverySettings.useSetting();
        return FlagUtils.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
      },
  onValueChange: function onDiscoveryByEmailSettingValueChange(email) {
    const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    const hasFlagResult = FlagUtils.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
    const result = ContactSyncActionCreatorsDefault.updateDiscoverability({ phone: hasFlagResult, email });
  },
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByEmailSetting.tsx");

export default toggle;
