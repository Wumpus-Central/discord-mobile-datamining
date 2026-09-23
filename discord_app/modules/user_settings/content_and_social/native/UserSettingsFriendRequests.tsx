// === Module 17324: UserSettingsFriendRequests ===

// Module 17324 (UserSettingsFriendRequests)
import FlagUtilsAll from "FlagUtils" /* 1385 */;
import UserSettings from "UserSettings" /* 2020 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7326 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AllFriendSourceFlags: hasOwnProperty, FriendSourceFlags: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/UserSettingsFriendRequests.tsx");

export default function UserSettingsFriendRequests() {
  let FriendSourceFlagsSetting = setting(2020).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items);
  let obj = { children: null };
  const obj2 = { title: null, hasIcons: false, children: null };
  const intl = setting(1115).intl;
  obj2.title = intl.string(setting(1115).t.vyodkM);
  const obj3 = { label: null, value: null, onValueChange: null };
  const intl2 = setting(1115).intl;
  obj3.label = intl2.string(setting(1115).t.mGr3CX);
  obj3.value = memo.all;
  obj3.onValueChange = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = setting(dependencyMap[4]).FriendSourceFlagsSetting;
    if (arg0) {
      let tmp3 = closure_1_5;
    } else {
      tmp3 = closure_1_5 & ~constants.NO_RELATION;
    }
    return FriendSourceFlagsSetting.updateSetting(tmp3);
  };
  const items1 = [closure_7(setting(7531).TableSwitchRow, obj3), , ];
  const obj4 = { label: null, value: null, onValueChange: null };
  const intl3 = setting(1115).intl;
  obj4.label = intl3.string(setting(1115).t.IqlCSq);
  obj4.value = memo.mutualFriends;
  obj4.onValueChange = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
    const obj = FlagUtilsAll;
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, constants.MUTUAL_FRIENDS);
    } else {
      addFlagResult = obj.removeFlags(setting, constants.MUTUAL_FRIENDS, constants.NO_RELATION);
    }
    return FriendSourceFlagsSetting.updateSetting(addFlagResult);
  };
  items1[1] = closure_7(setting(7531).TableSwitchRow, obj4);
  const obj5 = { label: null, value: null, onValueChange: null };
  const intl4 = setting(1115).intl;
  obj5.label = intl4.string(setting(1115).t.mozb8f);
  obj5.value = memo.mutualGuilds;
  obj5.onValueChange = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
    const obj = FlagUtilsAll;
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, constants.MUTUAL_GUILDS);
    } else {
      addFlagResult = obj.removeFlags(setting, constants.MUTUAL_GUILDS, constants.NO_RELATION);
    }
    return FriendSourceFlagsSetting.updateSetting(addFlagResult);
  };
  items1[2] = closure_7(setting(7531).TableSwitchRow, obj5);
  obj2.children = items1;
  obj.children = closure_8(setting(5990).TableRowGroup, obj2);
  return closure_7(View, obj);
};