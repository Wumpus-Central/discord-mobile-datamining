// discord_app/modules/guild_settings/native/GuildSettingsModalGuildSpace.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FlagUtils from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import _modDef2425 from "../../guild_space/GuildSpace.messages.js";
import GuildSettingsActionCreatorsDefault from "../GuildSettingsActionCreators.tsx";
import ServerHubAnalytics from "../../guild_space/ServerHubAnalytics.tsx";
import react from "../../../../_runtime/00019_react.js";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let contentContainerStyle;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ Permissions: metroRequire, SystemChannelFlags: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, content: obj2, stackPadding: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let disabled;
      let label;
      let settingType;
      let subLabel;
      let obj = guild(settingType[8]);
      const cResult = obj.c(14);
      guild = guild.guild;
      const flag = guild.flag;
      settingType = guild.settingType;
      ({ label, subLabel, disabled } = guild);
      if (cResult[0] === flag) {
        if (cResult[1] === guild.id) {
          if (cResult[2] === guild.systemChannelFlags) {
            let tmp4;
            if (cResult[3] === settingType) {
              tmp4 = cResult[4];
            }
            if (cResult[5] === flag) {
              let tmp5;
              if (cResult[6] === guild.systemChannelFlags) {
                tmp5 = cResult[7];
              }
              if (cResult[8] === disabled) {
                if (cResult[9] === tmp4) {
                  if (cResult[10] === label) {
                    if (cResult[11] === subLabel) {
                      let tmp8;
                      if (cResult[12] === !tmp5) {
                        tmp8 = cResult[13];
                      }
                      return tmp8;
                    }
                  }
                }
              }
              let obj2 = { label, subLabel, disabled, value: !tmp5, onValueChange: tmp4 };
              const tmp10 = closure_8(guild(settingType[12]).TableSwitchRow, obj2);
              cResult[8] = disabled;
              cResult[9] = tmp4;
              cResult[10] = label;
              cResult[11] = subLabel;
              cResult[12] = !tmp5;
              cResult[13] = tmp10;
              tmp8 = tmp10;
            }
            const tmpResult = guild(settingType[9]);
            const hasFlagResult = tmpResult.hasFlag(guild.systemChannelFlags, flag);
            cResult[5] = flag;
            cResult[6] = guild.systemChannelFlags;
            cResult[7] = hasFlagResult;
            tmp5 = hasFlagResult;
          }
        }
      }
      const fn = function n(value) {
        const obj = FlagUtils;
        const setFlagResult = obj.setFlag(guild.systemChannelFlags, flag, !value);
        const obj2 = GuildSettingsActionCreatorsDefault;
        obj2.updateGuild({ systemChannelFlags: setFlagResult });
        const obj3 = ServerHubAnalytics;
        const result = obj3.trackServerHubToggleSetting(guild.id, settingType, value);
      };
      cResult[0] = flag;
      cResult[1] = guild.id;
      cResult[2] = guild.systemChannelFlags;
      cResult[3] = settingType;
      cResult[4] = fn;
      tmp4 = fn;
    }
  : (guild) => {
      let disabled;
      let label;
      let obj2;
      let subLabel;
      guild = guild.guild;
      const flag = guild.flag;
      const settingType = guild.settingType;
      const items = [guild, flag, settingType];
      ({ label, subLabel, disabled } = guild);
      const callback = react.useCallback((value) => {
        const obj = FlagUtils;
        const setFlagResult = obj.setFlag(guild.systemChannelFlags, flag, !value);
        const obj2 = GuildSettingsActionCreatorsDefault;
        obj2.updateGuild({ systemChannelFlags: setFlagResult });
        const obj3 = ServerHubAnalytics;
        const result = obj3.trackServerHubToggleSetting(guild.id, settingType, value);
      }, items);
      let obj = {
        label,
        subLabel,
        disabled,
        value: !obj2.hasFlag(guild.systemChannelFlags, flag),
        onValueChange: callback,
      };
      const TableSwitchRow = guild(settingType[12]).TableSwitchRow;
      obj2 = guild(settingType[9]);
      return closure_8(TableSwitchRow, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (contentContainerStyle) => {
      let guild;
      let items4;
      let items5;
      let stateFromStores;
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp5;
      let tmp6;
      let tmp7;
      const obj = stateFromStores(576);
      const cResult = obj.c(33);
      contentContainerStyle = contentContainerStyle.contentContainerStyle;
      const tmp4 = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildSettingsStore];
        const fn = function o() {
          return guild.getGuild();
        };
        const items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp5 = items;
        tmp6 = fn;
        tmp7 = items1;
      } else {
        [tmp5, tmp6, tmp7] = cResult;
      }
      const tmpResult = stateFromStores(504);
      stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [PermissionStore];
        cResult[3] = items2;
        tmp10 = items2;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== stateFromStores) {
        const fn2 = function v() {
          return PermissionStore.can(metroRequire.MANAGE_GUILD, stateFromStores);
        };
        const items3 = [stateFromStores];
        cResult[4] = stateFromStores;
        cResult[5] = fn2;
        cResult[6] = items3;
        tmp13 = items3;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
        tmp13 = cResult[6];
      }
      const tmpResult2 = stateFromStores(504);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp10, tmp12, tmp13);
      if (null == stateFromStores) {
        return null;
      } else {
        if (cResult[7] === contentContainerStyle) {
          let tmp15;
          let tmp16;
          let tmp19;
          let tmp18;
          if (cResult[8] === tmp4.content) {
            tmp15 = cResult[9];
          }
          const _Symbol = Symbol;
          const stackPadding = tmp4.stackPadding;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(stateFromStores(1126).t.OBskVU);
            cResult[10] = stringResult;
            tmp16 = stringResult;
          } else {
            tmp16 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(_modDef2425.btBTIw);
            const intl3 = tmp(1126).intl;
            const stringResult2 = intl3.string(_modDef2425.n3aRYQ);
            cResult[11] = stringResult1;
            cResult[12] = stringResult2;
            tmp19 = stringResult2;
            tmp18 = stringResult1;
          } else {
            tmp18 = cResult[11];
            tmp19 = cResult[12];
          }
          if (cResult[13] === stateFromStores) {
            let tmp24;
            let tmp29;
            if (cResult[14] === !stateFromStores1) {
              tmp24 = cResult[15];
            }
            const _Symbol3 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(1126).intl;
              const stringResult3 = intl4.string(stateFromStores(1126).t.YZqqTX);
              cResult[16] = stringResult3;
              tmp29 = stringResult3;
            } else {
              tmp29 = cResult[16];
            }
            if (cResult[17] === stateFromStores) {
              let tmp32;
              if (cResult[18] === !stateFromStores1) {
                tmp32 = cResult[19];
              }
              if (cResult[20] === tmp24) {
                let tmp37;
                if (cResult[21] === tmp32) {
                  tmp37 = cResult[22];
                }
                if (cResult[23] === tmp4.stackPadding) {
                  let tmp40;
                  if (cResult[24] === tmp37) {
                    tmp40 = cResult[25];
                  }
                  if (cResult[26] === tmp4.container) {
                    if (cResult[27] === tmp40) {
                      let tmp44;
                      let tmp47;
                      let tmp50;
                      if (cResult[28] === tmp15) {
                        tmp44 = cResult[29];
                      }
                      const _Symbol4 = Symbol;
                      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp49 = closure_8(stateFromStores(6536).NavScrim, {});
                        cResult[30] = tmp49;
                        tmp47 = tmp49;
                      } else {
                        tmp47 = cResult[30];
                      }
                      if (cResult[31] !== tmp44) {
                        const obj2 = { children: items4 };
                        items4 = [tmp44, tmp47];
                        const tmp53 = closure_9(closure_10, obj2);
                        cResult[31] = tmp44;
                        cResult[32] = tmp53;
                        tmp50 = tmp53;
                      } else {
                        tmp50 = cResult[32];
                      }
                      return tmp50;
                    }
                  }
                  const obj3 = { style: tmp54, contentContainerStyle: tmp15, children: tmp40 };
                  const tmp46 = closure_8(stateFromStores(8895).Form, obj3);
                  cResult[26] = tmp4.container;
                  cResult[27] = tmp40;
                  cResult[28] = tmp15;
                  cResult[29] = tmp46;
                  tmp44 = tmp46;
                }
                const obj4 = { style: stackPadding, spacing: nativeDefault.space.PX_24, children: tmp37 };
                const Stack = tmp(5593).Stack;
                const tmp43 = closure_8(Stack, obj4);
                cResult[23] = tmp4.stackPadding;
                cResult[24] = tmp37;
                cResult[25] = tmp43;
                tmp40 = tmp43;
              }
              const obj5 = { title: tmp16, hasIcons: false, children: items5 };
              items5 = [tmp24, tmp32];
              const tmp39 = closure_9(stateFromStores(6074).TableRowGroup, obj5);
              cResult[20] = tmp24;
              cResult[21] = tmp32;
              cResult[22] = tmp39;
              tmp37 = tmp39;
            }
            const obj6 = {
              guild: stateFromStores,
              flag: constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS,
              settingType: stateFromStores(17669).ServerHubSettingType.WHITEBOARD_SYSTEM_MESSAGES,
              label: tmp29,
              disabled: !stateFromStores1,
            };
            const tmp36 = closure_8(closure_12, obj6);
            cResult[17] = stateFromStores;
            cResult[18] = !stateFromStores1;
            cResult[19] = tmp36;
            tmp32 = tmp36;
          }
          const obj7 = {
            guild: stateFromStores,
            flag: constants2.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS,
            settingType: stateFromStores(17669).ServerHubSettingType.LEADERBOARD_SYSTEM_MESSAGES,
            label: tmp18,
            subLabel: tmp19,
            disabled: !stateFromStores1,
          };
          const tmp28 = closure_8(closure_12, obj7);
          cResult[13] = stateFromStores;
          cResult[14] = !stateFromStores1;
          cResult[15] = tmp28;
          tmp24 = tmp28;
        }
        const items6 = [tmp4.content, contentContainerStyle];
        cResult[7] = contentContainerStyle;
        cResult[8] = tmp4.content;
        cResult[9] = items6;
        tmp15 = items6;
      }
    }
  : (contentContainerStyle) => {
      let Stack;
      let TableRowGroup;
      let guild;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items3;
      let items4;
      let items5;
      let obj5;
      let obj6;
      let stateFromStores;
      contentContainerStyle = contentContainerStyle.contentContainerStyle;
      const tmp = closure_11();
      const items = [GuildSettingsStore];
      const obj = stateFromStores(504);
      stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(), []);
      const items1 = [PermissionStore];
      const items2 = [stateFromStores];
      const obj2 = stateFromStores(504);
      const stateFromStores1 = obj2.useStateFromStores(
        items1,
        () => PermissionStore.can(metroRequire.MANAGE_GUILD, stateFromStores),
        items2,
      );
      let tmp6 = null;
      if (null != stateFromStores) {
        const obj3 = { children: items5 };
        const obj4 = { style: tmp.container, contentContainerStyle: items3, children: closure_8(Stack, obj5) };
        items3 = [tmp.content, contentContainerStyle];
        const Form = tmp2(8895).Form;
        obj5 = {
          style: tmp.stackPadding,
          spacing: nativeDefault.space.PX_24,
          children: closure_9(TableRowGroup, obj6),
        };
        Stack = tmp2(5593).Stack;
        obj6 = { title: intl.string(stateFromStores(1126).t.OBskVU), hasIcons: false, children: items4 };
        TableRowGroup = tmp2(6074).TableRowGroup;
        intl = tmp2(1126).intl;
        const obj7 = {
          guild: stateFromStores,
          flag: constants2.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS,
          settingType: stateFromStores(17669).ServerHubSettingType.LEADERBOARD_SYSTEM_MESSAGES,
          label: intl2.string(_modDef2425.btBTIw),
          subLabel: intl3.string(_modDef2425.n3aRYQ),
          disabled: !stateFromStores1,
        };
        intl2 = tmp2(1126).intl;
        intl3 = tmp2(1126).intl;
        items4 = [closure_8(closure_12, obj7)];
        const obj8 = {
          guild: stateFromStores,
          flag: constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS,
          settingType: stateFromStores(17669).ServerHubSettingType.WHITEBOARD_SYSTEM_MESSAGES,
          label: intl4.string(stateFromStores(1126).t.YZqqTX),
          disabled: !stateFromStores1,
        };
        intl4 = tmp2(1126).intl;
        items4[1] = closure_8(closure_12, obj8);
        items5 = [closure_8(Form, obj4), closure_8(stateFromStores(6536).NavScrim, {})];
        tmp6 = closure_9(closure_10, obj3);
      }
      return tmp6;
    };
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalGuildSpace.tsx");

export default tmp5;
