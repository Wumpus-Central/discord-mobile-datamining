// discord_app/modules/user_settings/content_and_social/native/UserSettingsFriendRequests.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ AllFriendSourceFlags: c5, FriendSourceFlags: closure_6 } = ME);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
const result = require("ME").fileFinishedImporting("modules/user_settings/content_and_social/native/UserSettingsFriendRequests.tsx");

export default function UserSettingsFriendRequests() {
  let FriendSourceFlagsSetting = setting(3974).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = React.useMemo(() => setting(outer1_2[5]).computeFlags(setting), items);
  let obj = { children: null };
  obj = { title: null, hasIcons: false, children: null };
  const intl = setting(1236).intl;
  obj[0] = intl.string(setting(1236).t.vyodkM);
  obj = { label: null, value: null, onValueChange: null };
  const intl2 = setting(1236).intl;
  obj[0] = intl2.string(setting(1236).t.mGr3CX);
  obj[1] = memo.all;
  obj[2] = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = setting(table[4]).FriendSourceFlagsSetting;
    if (arg0) {
      let tmp3 = tmp;
    } else {
      tmp3 = tmp & ~constants.NO_RELATION;
    }
    return FriendSourceFlagsSetting.updateSetting(tmp3);
  };
  const items1 = [callback(setting(5708).TableSwitchRow, obj), , ];
  const obj1 = { label: null, value: null, onValueChange: null };
  const intl3 = setting(1236).intl;
  obj1[0] = intl3.string(setting(1236).t.IqlCSq);
  obj1[1] = memo.mutualFriends;
  obj1[2] = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = setting(outer1_2[4]).FriendSourceFlagsSetting;
    const obj = outer1_1(outer1_2[9]);
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, outer1_6.MUTUAL_FRIENDS);
    } else {
      addFlagResult = obj.removeFlags(setting, outer1_6.MUTUAL_FRIENDS, outer1_6.NO_RELATION);
    }
    return FriendSourceFlagsSetting.updateSetting(addFlagResult);
  };
  items1[1] = callback(setting(5708).TableSwitchRow, obj1);
  const obj2 = { label: null, value: null, onValueChange: null };
  const intl4 = setting(1236).intl;
  obj2[0] = intl4.string(setting(1236).t.mozb8f);
  obj2[1] = memo.mutualGuilds;
  obj2[2] = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = setting(outer1_2[4]).FriendSourceFlagsSetting;
    const obj = outer1_1(outer1_2[9]);
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, outer1_6.MUTUAL_GUILDS);
    } else {
      addFlagResult = obj.removeFlags(setting, outer1_6.MUTUAL_GUILDS, outer1_6.NO_RELATION);
    }
    return FriendSourceFlagsSetting.updateSetting(addFlagResult);
  };
  items1[2] = callback(setting(5708).TableSwitchRow, obj2);
  obj[2] = items1;
  obj[0] = callback2(setting(5707).TableRowGroup, obj);
  return callback(View, obj);
};