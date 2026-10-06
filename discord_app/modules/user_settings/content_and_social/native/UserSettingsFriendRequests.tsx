// discord_app/modules/user_settings/content_and_social/native/UserSettingsFriendRequests.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import FlagUtilsAll from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ AllFriendSourceFlags: hasOwnProperty, FriendSourceFlags: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let obj4;
      let setting;
      let tmp11;
      let tmp12;
      let tmp15;
      let tmp5;
      let tmp7;
      let tmp9;
      let tmp = setting;
      let obj = setting(576);
      const cResult = obj.c(23);
      let FriendSourceFlagsSetting = setting(2028).FriendSourceFlagsSetting;
      setting = FriendSourceFlagsSetting.useSetting();
      if (cResult[0] !== setting) {
        const tmpResult = tmp(6498);
        const flags = tmpResult.computeFlags(setting);
        cResult[0] = setting;
        cResult[1] = flags;
        tmp5 = flags;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.vyodkM);
        cResult[2] = stringResult;
        tmp7 = stringResult;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.mGr3CX);
        cResult[3] = stringResult1;
        tmp9 = stringResult1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h(arg0) {
          let tmp3;
          const FriendSourceFlagsSetting = setting(dependencyMap[6]).FriendSourceFlagsSetting;
          const updateSetting = FriendSourceFlagsSetting.updateSetting;
          if (arg0) {
            tmp3 = closure_1_5;
          } else {
            tmp3 = closure_1_5 & ~constants.NO_RELATION;
          }
          return updateSetting(tmp3);
        };
        cResult[4] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== tmp5.all) {
        const obj2 = { label: tmp9, value: tmp5.all, onValueChange: tmp11 };
        const tmp14 = closure_7(tmp(6705).TableSwitchRow, obj2);
        cResult[5] = tmp5.all;
        cResult[6] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(tmp(1126).t.IqlCSq);
        cResult[7] = stringResult2;
        tmp15 = stringResult2;
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] !== setting) {
        class U {
          constructor(arg0) {
            let addFlagResult;
            const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
            const updateSetting = FriendSourceFlagsSetting.updateSetting;
            const obj = FlagUtilsAll;
            const tmp = arg0;
            if (tmp) {
              addFlagResult = obj.addFlag(setting, metroRequire.MUTUAL_FRIENDS);
            } else {
              addFlagResult = obj.removeFlags(setting, metroRequire.MUTUAL_FRIENDS, metroRequire.NO_RELATION);
            }
            return updateSetting(addFlagResult);
          }
        }
        cResult[8] = setting;
        cResult[9] = U;
      } else {
        class U {
          constructor(arg0) {
            let addFlagResult;
            const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
            const updateSetting = FriendSourceFlagsSetting.updateSetting;
            const obj = FlagUtilsAll;
            const tmp = arg0;
            if (tmp) {
              addFlagResult = obj.addFlag(setting, metroRequire.MUTUAL_FRIENDS);
            } else {
              addFlagResult = obj.removeFlags(setting, metroRequire.MUTUAL_FRIENDS, metroRequire.NO_RELATION);
            }
            return updateSetting(addFlagResult);
          }
        }
      }
      if (cResult[10] === tmp5.mutualFriends) {
        let tmp20;
        class U {
          constructor(arg0) {
            let addFlagResult;
            const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
            const updateSetting = FriendSourceFlagsSetting.updateSetting;
            const obj = FlagUtilsAll;
            const tmp = arg0;
            if (tmp) {
              addFlagResult = obj.addFlag(setting, metroRequire.MUTUAL_FRIENDS);
            } else {
              addFlagResult = obj.removeFlags(setting, metroRequire.MUTUAL_FRIENDS, metroRequire.NO_RELATION);
            }
            return updateSetting(addFlagResult);
          }
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor(arg0) {
              let addFlagResult;
              const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
              const updateSetting = FriendSourceFlagsSetting.updateSetting;
              const obj = FlagUtilsAll;
              const tmp = arg0;
              if (tmp) {
                addFlagResult = obj.addFlag(setting, metroRequire.MUTUAL_FRIENDS);
              } else {
                addFlagResult = obj.removeFlags(setting, metroRequire.MUTUAL_FRIENDS, metroRequire.NO_RELATION);
              }
              return updateSetting(addFlagResult);
            }
          }
          const stringResult3 = obj5.string(tmp(1126).t.mozb8f);
          cResult[13] = stringResult3;
          tmp20 = stringResult3;
        } else {
          class U {
            constructor(arg0) {
              let addFlagResult;
              const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
              const updateSetting = FriendSourceFlagsSetting.updateSetting;
              const obj = FlagUtilsAll;
              const tmp = arg0;
              if (tmp) {
                addFlagResult = obj.addFlag(setting, metroRequire.MUTUAL_FRIENDS);
              } else {
                addFlagResult = obj.removeFlags(setting, metroRequire.MUTUAL_FRIENDS, metroRequire.NO_RELATION);
              }
              return updateSetting(addFlagResult);
            }
          }
        }
        if (cResult[14] !== setting) {
          class U {
            constructor(arg0) {
              let addFlagResult;
              const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
              const updateSetting = FriendSourceFlagsSetting.updateSetting;
              const obj = FlagUtilsAll;
              const tmp = arg0;
              if (tmp) {
                addFlagResult = obj.addFlag(setting, metroRequire.MUTUAL_FRIENDS);
              } else {
                addFlagResult = obj.removeFlags(setting, metroRequire.MUTUAL_FRIENDS, metroRequire.NO_RELATION);
              }
              return updateSetting(addFlagResult);
            }
          }
          cResult[14] = setting;
          cResult[15] = tmp23;
        } else {
          class U {
            constructor(arg0) {
              let addFlagResult;
              const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
              const updateSetting = FriendSourceFlagsSetting.updateSetting;
              const obj = FlagUtilsAll;
              const tmp = arg0;
              if (tmp) {
                addFlagResult = obj.addFlag(setting, metroRequire.MUTUAL_FRIENDS);
              } else {
                addFlagResult = obj.removeFlags(setting, metroRequire.MUTUAL_FRIENDS, metroRequire.NO_RELATION);
              }
              return updateSetting(addFlagResult);
            }
          }
        }
        if (cResult[16] === tmp5.mutualGuilds) {
          class U {
            constructor(arg0) {
              let addFlagResult;
              const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
              const updateSetting = FriendSourceFlagsSetting.updateSetting;
              const obj = FlagUtilsAll;
              const tmp = arg0;
              if (tmp) {
                addFlagResult = obj.addFlag(setting, metroRequire.MUTUAL_FRIENDS);
              } else {
                addFlagResult = obj.removeFlags(setting, metroRequire.MUTUAL_FRIENDS, metroRequire.NO_RELATION);
              }
              return updateSetting(addFlagResult);
            }
          }
          if (cResult[19] === tmp24) {
            class U {
              constructor(arg0) {
                let addFlagResult;
                const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
                const updateSetting = FriendSourceFlagsSetting.updateSetting;
                const obj = FlagUtilsAll;
                const tmp = arg0;
                if (tmp) {
                  addFlagResult = obj.addFlag(setting, metroRequire.MUTUAL_FRIENDS);
                } else {
                  addFlagResult = obj.removeFlags(setting, metroRequire.MUTUAL_FRIENDS, metroRequire.NO_RELATION);
                }
                return updateSetting(addFlagResult);
              }
            }
          }
          const obj3 = { children: closure_8(tmp(6081).TableRowGroup, obj4) };
          obj4 = { title: tmp7, hasIcons: false, children: items };
          items = [tmp12, tmp18, tmp24];
          cResult[19] = tmp24;
          cResult[20] = tmp12;
          cResult[21] = tmp18;
          cResult[22] = closure_7(View, obj3);
          const tmp31 = closure_7(View, obj3);
        }
        const obj6 = { label: tmp20, value: tmp5.mutualGuilds, onValueChange: tmp23 };
        cResult[16] = tmp5.mutualGuilds;
        cResult[17] = tmp23;
        cResult[18] = closure_7(tmp(6705).TableSwitchRow, obj6);
        const tmp26 = closure_7(tmp(6705).TableSwitchRow, obj6);
      }
      const obj7 = { label: tmp15, value: tmp5.mutualFriends, onValueChange: U };
      cResult[10] = tmp5.mutualFriends;
      cResult[11] = U;
      cResult[12] = closure_7(tmp(6705).TableSwitchRow, obj7);
      const tmp19 = closure_7(tmp(6705).TableSwitchRow, obj7);
    }
  : () => {
      let TableRowGroup;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items1;
      let obj2;
      let setting;
      let FriendSourceFlagsSetting = setting(2028).FriendSourceFlagsSetting;
      setting = FriendSourceFlagsSetting.useSetting();
      const items = [setting];
      const memo = react.useMemo(() => {
        const obj = UserSettingsUtils;
        return obj.computeFlags(setting);
      }, items);
      let obj = { children: closure_8(TableRowGroup, obj2) };
      obj2 = { title: intl.string(setting(1126).t.vyodkM), hasIcons: false, children: items1 };
      TableRowGroup = setting(6081).TableRowGroup;
      intl = setting(1126).intl;
      const obj3 = {
        label: intl2.string(setting(1126).t.mGr3CX),
        value: memo.all,
        onValueChange(arg0) {
          let tmp3;
          const FriendSourceFlagsSetting = setting(dependencyMap[6]).FriendSourceFlagsSetting;
          const updateSetting = FriendSourceFlagsSetting.updateSetting;
          if (arg0) {
            tmp3 = closure_1_5;
          } else {
            tmp3 = closure_1_5 & ~constants.NO_RELATION;
          }
          return updateSetting(tmp3);
        },
      };
      const TableSwitchRow = setting(6705).TableSwitchRow;
      intl2 = setting(1126).intl;
      items1 = [closure_7(TableSwitchRow, obj3), ,];
      const obj4 = {
        label: intl3.string(setting(1126).t.IqlCSq),
        value: memo.mutualFriends,
        onValueChange(arg0) {
          let addFlagResult;
          const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
          const updateSetting = FriendSourceFlagsSetting.updateSetting;
          const obj = FlagUtilsAll;
          const tmp = arg0;
          if (tmp) {
            addFlagResult = obj.addFlag(setting, metroRequire.MUTUAL_FRIENDS);
          } else {
            addFlagResult = obj.removeFlags(setting, metroRequire.MUTUAL_FRIENDS, metroRequire.NO_RELATION);
          }
          return updateSetting(addFlagResult);
        },
      };
      const TableSwitchRow2 = setting(6705).TableSwitchRow;
      intl3 = setting(1126).intl;
      items1[1] = closure_7(TableSwitchRow2, obj4);
      const obj5 = {
        label: intl4.string(setting(1126).t.mozb8f),
        value: memo.mutualGuilds,
        onValueChange(arg0) {
          let addFlagResult;
          const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
          const updateSetting = FriendSourceFlagsSetting.updateSetting;
          const obj = FlagUtilsAll;
          const tmp = arg0;
          if (tmp) {
            addFlagResult = obj.addFlag(setting, metroRequire.MUTUAL_GUILDS);
          } else {
            addFlagResult = obj.removeFlags(setting, metroRequire.MUTUAL_GUILDS, metroRequire.NO_RELATION);
          }
          return updateSetting(addFlagResult);
        },
      };
      const TableSwitchRow3 = setting(6705).TableSwitchRow;
      intl4 = setting(1126).intl;
      items1[2] = closure_7(TableSwitchRow3, obj5);
      return closure_7(View, obj);
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/content_and_social/native/UserSettingsFriendRequests.tsx",
);

export default tmp4;
