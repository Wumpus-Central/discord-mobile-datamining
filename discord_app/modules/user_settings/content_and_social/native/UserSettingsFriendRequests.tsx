// === Module 16611: UserSettingsFriendRequests ===

// Module 16611 (UserSettingsFriendRequests)
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
({ AllFriendSourceFlags: c5, FriendSourceFlags: closure_6 } = ME);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/user_settings/content_and_social/native/UserSettingsFriendRequests.tsx");

export default function UserSettingsFriendRequests() {
  let FriendSourceFlagsSetting = setting(4166).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = React.useMemo(() => setting(closure_1_2[5]).computeFlags(setting), items);
  let obj = { children: null };
  obj = { title: null, hasIcons: false, children: null };
  const intl = setting(1233).intl;
  obj[0] = intl.string(setting(1233).t.vyodkM);
  obj = { label: null, value: null, onValueChange: null };
  const intl2 = setting(1233).intl;
  obj[0] = intl2.string(setting(1233).t.mGr3CX);
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
  const items1 = [callback(setting(6002).TableSwitchRow, obj), , ];
  obj1 = { label: null, value: null, onValueChange: null };
  const intl3 = setting(1233).intl;
  obj1[0] = intl3.string(setting(1233).t.IqlCSq);
  obj1[1] = memo.mutualFriends;
  obj1[2] = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = setting(closure_1_2[4]).FriendSourceFlagsSetting;
    const obj = closure_1_1(closure_1_2[9]);
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, closure_1_6.MUTUAL_FRIENDS);
    } else {
      addFlagResult = obj.removeFlags(setting, closure_1_6.MUTUAL_FRIENDS, closure_1_6.NO_RELATION);
    }
    return FriendSourceFlagsSetting.updateSetting(addFlagResult);
  };
  items1[1] = callback(setting(6002).TableSwitchRow, obj1);
  const obj2 = { label: null, value: null, onValueChange: null };
  const intl4 = setting(1233).intl;
  obj2[0] = intl4.string(setting(1233).t.mozb8f);
  obj2[1] = memo.mutualGuilds;
  obj2[2] = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = setting(closure_1_2[4]).FriendSourceFlagsSetting;
    const obj = closure_1_1(closure_1_2[9]);
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, closure_1_6.MUTUAL_GUILDS);
    } else {
      addFlagResult = obj.removeFlags(setting, closure_1_6.MUTUAL_GUILDS, closure_1_6.NO_RELATION);
    }
    return FriendSourceFlagsSetting.updateSetting(addFlagResult);
  };
  items1[2] = callback(setting(6002).TableSwitchRow, obj2);
  obj[2] = items1;
  obj[0] = callback2(setting(6001).TableRowGroup, obj);
  return callback(View, obj);
};