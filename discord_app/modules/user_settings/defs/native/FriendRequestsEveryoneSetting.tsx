// === Module 16154: FriendRequestsEveryoneSetting ===

// Module 16154 (FriendRequestsEveryoneSetting)
import util from "util" /* 1112 */;
import UserSettings from "UserSettings" /* 4619 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7295 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15995 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1071);
({ AllFriendSourceFlags: c3, FriendSourceFlags: closure_4 } = Constants);
const SettingBuilders = fn(11817);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mGr3CX);
  },
  parent: fn(8592).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    const FriendSourceFlagsSetting = setting(4619).FriendSourceFlagsSetting;
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