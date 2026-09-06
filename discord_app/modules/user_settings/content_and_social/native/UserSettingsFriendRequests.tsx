// discord_app/modules/user_settings/content_and_social/native/UserSettingsFriendRequests.tsx
import FlagUtilsAll from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AllFriendSourceFlags: hasOwnProperty, FriendSourceFlags: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/content_and_social/native/UserSettingsFriendRequests.tsx",
);

export default function UserSettingsFriendRequests() {
  let FriendSourceFlagsSetting = setting(1935).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items);
  let obj = { children: null };
  obj = { title: null, hasIcons: false, children: null };
  const intl = setting(1114).intl;
  obj.title = intl.string(setting(1114).t.vyodkM);
  obj = { label: null, value: null, onValueChange: null };
  const intl2 = setting(1114).intl;
  obj.label = intl2.string(setting(1114).t.mGr3CX);
  obj.value = memo.all;
  obj.onValueChange = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = setting(dependencyMap[4]).FriendSourceFlagsSetting;
    if (arg0) {
      let tmp3 = tmp;
    } else {
      tmp3 = tmp & ~constants.NO_RELATION;
    }
    return FriendSourceFlagsSetting.updateSetting(tmp3);
  };
  const items1 = [closure_7(setting(7201).TableSwitchRow, obj), ,];
  const obj1 = { label: null, value: null, onValueChange: null };
  const intl3 = setting(1114).intl;
  obj1.label = intl3.string(setting(1114).t.IqlCSq);
  obj1.value = memo.mutualFriends;
  obj1.onValueChange = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
    const obj = FlagUtilsAll;
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, constants.MUTUAL_FRIENDS);
    } else {
      addFlagResult = obj.removeFlags(setting, constants.MUTUAL_FRIENDS, constants.NO_RELATION);
    }
    return FriendSourceFlagsSetting.updateSetting(addFlagResult);
  };
  items1[1] = closure_7(setting(7201).TableSwitchRow, obj1);
  const obj2 = { label: null, value: null, onValueChange: null };
  const intl4 = setting(1114).intl;
  obj2.label = intl4.string(setting(1114).t.mozb8f);
  obj2.value = memo.mutualGuilds;
  obj2.onValueChange = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
    const obj = FlagUtilsAll;
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, constants.MUTUAL_GUILDS);
    } else {
      addFlagResult = obj.removeFlags(setting, constants.MUTUAL_GUILDS, constants.NO_RELATION);
    }
    return FriendSourceFlagsSetting.updateSetting(addFlagResult);
  };
  items1[2] = closure_7(setting(7201).TableSwitchRow, obj2);
  obj.children = items1;
  obj.children = closure_8(setting(5687).TableRowGroup, obj);
  return closure_7(View, obj);
}
