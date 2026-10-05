// === Module 16946: UserSettingsFriendRequests ===

// Module 16946 (UserSettingsFriendRequests)
import FlagUtilsAll from "FlagUtils" /* 1390 */;
import UserSettings from "UserSettings" /* 2028 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6491 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AllFriendSourceFlags: hasOwnProperty, FriendSourceFlags: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/UserSettingsFriendRequests.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = setting(576).c(23);
  let FriendSourceFlagsSetting = setting(2028).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  if (cResult[0] !== setting) {
    const flags = tmp(6491).computeFlags(setting);
    cResult[0] = setting;
    cResult[1] = flags;
    let tmp5 = flags;
    const tmpResult = tmp(6491);
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.vyodkM);
    cResult[2] = stringResult;
    let tmp7 = stringResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.mGr3CX);
    cResult[3] = stringResult1;
    let tmp9 = stringResult1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function h(arg0) {
      const FriendSourceFlagsSetting = setting(dependencyMap[6]).FriendSourceFlagsSetting;
      if (arg0) {
        let tmp3 = closure_1_5;
      } else {
        tmp3 = closure_1_5 & ~constants.NO_RELATION;
      }
      return FriendSourceFlagsSetting.updateSetting(tmp3);
    };
    cResult[4] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== tmp5.all) {
    const obj2 = { label: tmp9, value: tmp5.all, onValueChange: tmp11 };
    const tmp14 = closure_7(tmp(6698).TableSwitchRow, obj2);
    cResult[5] = tmp5.all;
    cResult[6] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(tmp(1126).t.IqlCSq);
    cResult[7] = stringResult2;
    let tmp15 = stringResult2;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] !== setting) {
    class U {
      constructor(arg0) {
        FriendSourceFlagsSetting = closure_0(closure_2[6]).FriendSourceFlagsSetting;
        obj = closure_1(closure_2[10]);
        if (arg0) {
          tmp4 = closure_0;
          tmp5 = FriendSourceFlags;
          addFlagResult = obj.addFlag(closure_0, FriendSourceFlags.MUTUAL_FRIENDS);
        } else {
          tmp = closure_0;
          tmp2 = FriendSourceFlags;
          addFlagResult = obj.removeFlags(closure_0, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
        }
        return FriendSourceFlagsSetting.updateSetting(addFlagResult);
      }
    }
    cResult[8] = setting;
    cResult[9] = U;
  } else {
    class U {
      constructor(arg0) {
        FriendSourceFlagsSetting = closure_0(closure_2[6]).FriendSourceFlagsSetting;
        obj = closure_1(closure_2[10]);
        if (arg0) {
          tmp4 = closure_0;
          tmp5 = FriendSourceFlags;
          addFlagResult = obj.addFlag(closure_0, FriendSourceFlags.MUTUAL_FRIENDS);
        } else {
          tmp = closure_0;
          tmp2 = FriendSourceFlags;
          addFlagResult = obj.removeFlags(closure_0, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
        }
        return FriendSourceFlagsSetting.updateSetting(addFlagResult);
      }
    }
  }
  if (cResult[10] === tmp5.mutualFriends) {
    class U {
      constructor(arg0) {
        FriendSourceFlagsSetting = closure_0(closure_2[6]).FriendSourceFlagsSetting;
        obj = closure_1(closure_2[10]);
        if (arg0) {
          tmp4 = closure_0;
          tmp5 = FriendSourceFlags;
          addFlagResult = obj.addFlag(closure_0, FriendSourceFlags.MUTUAL_FRIENDS);
        } else {
          tmp = closure_0;
          tmp2 = FriendSourceFlags;
          addFlagResult = obj.removeFlags(closure_0, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
        }
        return FriendSourceFlagsSetting.updateSetting(addFlagResult);
      }
    }
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class U {
        constructor(arg0) {
          FriendSourceFlagsSetting = closure_0(closure_2[6]).FriendSourceFlagsSetting;
          obj = closure_1(closure_2[10]);
          if (arg0) {
            tmp4 = closure_0;
            tmp5 = FriendSourceFlags;
            addFlagResult = obj.addFlag(closure_0, FriendSourceFlags.MUTUAL_FRIENDS);
          } else {
            tmp = closure_0;
            tmp2 = FriendSourceFlags;
            addFlagResult = obj.removeFlags(closure_0, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
          }
          return FriendSourceFlagsSetting.updateSetting(addFlagResult);
        }
      }
      const stringResult3 = obj5.string(tmp(1126).t.mozb8f);
      cResult[13] = stringResult3;
      const tmp20 = stringResult3;
    } else {
      class U {
        constructor(arg0) {
          FriendSourceFlagsSetting = closure_0(closure_2[6]).FriendSourceFlagsSetting;
          obj = closure_1(closure_2[10]);
          if (arg0) {
            tmp4 = closure_0;
            tmp5 = FriendSourceFlags;
            addFlagResult = obj.addFlag(closure_0, FriendSourceFlags.MUTUAL_FRIENDS);
          } else {
            tmp = closure_0;
            tmp2 = FriendSourceFlags;
            addFlagResult = obj.removeFlags(closure_0, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
          }
          return FriendSourceFlagsSetting.updateSetting(addFlagResult);
        }
      }
    }
    if (cResult[14] !== setting) {
      class U {
        constructor(arg0) {
          FriendSourceFlagsSetting = closure_0(closure_2[6]).FriendSourceFlagsSetting;
          obj = closure_1(closure_2[10]);
          if (arg0) {
            tmp4 = closure_0;
            tmp5 = FriendSourceFlags;
            addFlagResult = obj.addFlag(closure_0, FriendSourceFlags.MUTUAL_FRIENDS);
          } else {
            tmp = closure_0;
            tmp2 = FriendSourceFlags;
            addFlagResult = obj.removeFlags(closure_0, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
          }
          return FriendSourceFlagsSetting.updateSetting(addFlagResult);
        }
      }
      cResult[14] = setting;
      cResult[15] = tmp23;
    } else {
      class U {
        constructor(arg0) {
          FriendSourceFlagsSetting = closure_0(closure_2[6]).FriendSourceFlagsSetting;
          obj = closure_1(closure_2[10]);
          if (arg0) {
            tmp4 = closure_0;
            tmp5 = FriendSourceFlags;
            addFlagResult = obj.addFlag(closure_0, FriendSourceFlags.MUTUAL_FRIENDS);
          } else {
            tmp = closure_0;
            tmp2 = FriendSourceFlags;
            addFlagResult = obj.removeFlags(closure_0, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
          }
          return FriendSourceFlagsSetting.updateSetting(addFlagResult);
        }
      }
    }
    if (cResult[16] === tmp5.mutualGuilds) {
      class U {
        constructor(arg0) {
          FriendSourceFlagsSetting = closure_0(closure_2[6]).FriendSourceFlagsSetting;
          obj = closure_1(closure_2[10]);
          if (arg0) {
            tmp4 = closure_0;
            tmp5 = FriendSourceFlags;
            addFlagResult = obj.addFlag(closure_0, FriendSourceFlags.MUTUAL_FRIENDS);
          } else {
            tmp = closure_0;
            tmp2 = FriendSourceFlags;
            addFlagResult = obj.removeFlags(closure_0, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
          }
          return FriendSourceFlagsSetting.updateSetting(addFlagResult);
        }
      }
      if (cResult[19] === tmp24) {
        class U {
          constructor(arg0) {
            FriendSourceFlagsSetting = closure_0(closure_2[6]).FriendSourceFlagsSetting;
            obj = closure_1(closure_2[10]);
            if (arg0) {
              tmp4 = closure_0;
              tmp5 = FriendSourceFlags;
              addFlagResult = obj.addFlag(closure_0, FriendSourceFlags.MUTUAL_FRIENDS);
            } else {
              tmp = closure_0;
              tmp2 = FriendSourceFlags;
              addFlagResult = obj.removeFlags(closure_0, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
            }
            return FriendSourceFlagsSetting.updateSetting(addFlagResult);
          }
        }
      }
      const obj3 = { children: null };
      const obj4 = { title: tmp7, hasIcons: false, children: null };
      const items = [tmp12, tmp18, tmp24];
      obj4.children = items;
      obj3.children = closure_8(tmp(6074).TableRowGroup, obj4);
      const tmp31 = closure_7(View, obj3);
      cResult[19] = tmp24;
      cResult[20] = tmp12;
      cResult[21] = tmp18;
      cResult[22] = tmp31;
    }
    const obj6 = { label: tmp20, value: tmp5.mutualGuilds, onValueChange: tmp23 };
    const tmp26 = closure_7(tmp(6698).TableSwitchRow, obj6);
    cResult[16] = tmp5.mutualGuilds;
    cResult[17] = tmp23;
    cResult[18] = tmp26;
  }
  const tmp19 = closure_7(setting(6698).TableSwitchRow, { label: tmp15, value: tmp5.mutualFriends, onValueChange: U });
  cResult[10] = tmp5.mutualFriends;
  cResult[11] = U;
  cResult[12] = tmp19;
  let obj = setting(576);
  const obj7 = { label: tmp15, value: tmp5.mutualFriends, onValueChange: U };
}) : (() => {
  let FriendSourceFlagsSetting = setting(2028).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items);
  let obj = { children: null };
  const obj2 = { title: null, hasIcons: false, children: null };
  const intl = setting(1126).intl;
  obj2.title = intl.string(setting(1126).t.vyodkM);
  const obj3 = { label: null, value: null, onValueChange: null };
  const intl2 = setting(1126).intl;
  obj3.label = intl2.string(setting(1126).t.mGr3CX);
  obj3.value = memo.all;
  obj3.onValueChange = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = setting(dependencyMap[6]).FriendSourceFlagsSetting;
    if (arg0) {
      let tmp3 = closure_1_5;
    } else {
      tmp3 = closure_1_5 & ~constants.NO_RELATION;
    }
    return FriendSourceFlagsSetting.updateSetting(tmp3);
  };
  const items1 = [closure_7(setting(6698).TableSwitchRow, obj3), , ];
  const obj4 = { label: null, value: null, onValueChange: null };
  const intl3 = setting(1126).intl;
  obj4.label = intl3.string(setting(1126).t.IqlCSq);
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
  items1[1] = closure_7(setting(6698).TableSwitchRow, obj4);
  const obj5 = { label: null, value: null, onValueChange: null };
  const intl4 = setting(1126).intl;
  obj5.label = intl4.string(setting(1126).t.mozb8f);
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
  items1[2] = closure_7(setting(6698).TableSwitchRow, obj5);
  obj2.children = items1;
  obj.children = closure_8(setting(6074).TableRowGroup, obj2);
  return closure_7(View, obj);
});