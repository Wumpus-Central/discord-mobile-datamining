// discord_app/modules/user_settings/defs/native/FriendRequestsEveryoneSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import useParentalControlSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Constants = fn(1085);
({ AllFriendSourceFlags: c3, FriendSourceFlags: closure_4 } = Constants);
fn(558);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const SettingBuilders = fn(11262);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFriendRequestsEveryoneSettingValue() {
      const cResult = c.c(2);
      const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
      const setting = FriendSourceFlagsSetting.useSetting();
      if (cResult[0] !== setting) {
        const flags = UserSettingsUtils.computeFlags(setting);
        cResult[0] = setting;
        cResult[1] = flags;
        let tmp5 = flags;
        const tmpResult = UserSettingsUtils;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5.all;
    }
  : function useFriendRequestsEveryoneSettingValue() {
      const FriendSourceFlagsSetting = setting(2040).FriendSourceFlagsSetting;
      setting = FriendSourceFlagsSetting.useSetting();
      const items = [setting];
      return noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items).all;
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mGr3CX);
  },
  parent: fn(7966).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? function useFriendRequestsEveryoneSettingValue() {
        const cResult = c.c(2);
        const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
        const setting = FriendSourceFlagsSetting.useSetting();
        if (cResult[0] !== setting) {
          const flags = UserSettingsUtils.computeFlags(setting);
          cResult[0] = setting;
          cResult[1] = flags;
          let tmp5 = flags;
          const tmpResult = UserSettingsUtils;
        } else {
          tmp5 = cResult[1];
        }
        return tmp5.all;
      }
    : function useFriendRequestsEveryoneSettingValue() {
        const FriendSourceFlagsSetting = setting(2040).FriendSourceFlagsSetting;
        setting = FriendSourceFlagsSetting.useSetting();
        const items = [setting];
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
  },
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsEveryoneSetting.tsx");

export default toggle;
