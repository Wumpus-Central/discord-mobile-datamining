// === Module 14976: FriendRequestsEveryoneSetting ===

// Module 14976 (FriendRequestsEveryoneSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6995 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14824 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1074);
({ AllFriendSourceFlags: c3, FriendSourceFlags: closure_4 } = Constants);
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mGr3CX);
  },
  parent: fn(7975).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    const FriendSourceFlagsSetting = setting(1935).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    const items = [setting];
    return noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items).all;
  },
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
    if (arg0) {
      let tmp3 = tmp;
    } else {
      tmp3 = tmp & ~constants.NO_RELATION;
    }
    FriendSourceFlagsSetting.updateSetting(tmp3);
  },
  useIsDisabled() {
    return useParentalControlSettings.useIsParentallyControlled();
  }
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsEveryoneSetting.tsx");

export default SettingBuilders;