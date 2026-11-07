// === Module 17185: FriendRequestsEveryoneSetting ===

// Module 17185 (FriendRequestsEveryoneSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 4965 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7227 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17027 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1072);
({ AllFriendSourceFlags: c3, FriendSourceFlags: closure_4 } = Constants);
const SettingBuilders = fn(11685);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mGr3CX);
  },
  parent: fn(8503).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    const FriendSourceFlagsSetting = setting(4965).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    items = [setting];
    return noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items).all;
  },
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
    if (arg0) {
      let tmp3 = React3;
    } else {
      tmp3 = React3 & ~constants.NO_RELATION;
    }
    FriendSourceFlagsSetting.updateSetting(tmp3);
  },
  useIsDisabled() {
    return useParentalControlSettings.useIsParentallyControlled();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsEveryoneSetting.tsx");

export default toggle;