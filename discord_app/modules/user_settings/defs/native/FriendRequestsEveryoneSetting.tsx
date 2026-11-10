// === Module 17223: FriendRequestsEveryoneSetting ===

// Module 17223 (FriendRequestsEveryoneSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 4967 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7230 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17065 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1072);
({ AllFriendSourceFlags: c3, FriendSourceFlags: closure_4 } = Constants);
const SettingBuilders = fn(11694);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mGr3CX);
  },
  parent: fn(8507).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    const FriendSourceFlagsSetting = setting(4967).FriendSourceFlagsSetting;
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