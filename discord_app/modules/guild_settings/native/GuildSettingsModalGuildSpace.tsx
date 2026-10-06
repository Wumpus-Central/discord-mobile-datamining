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
      let stateFromStores;
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp5;
      let tmp6;
      let tmp7;
      const obj = stateFromStores(576);
      const cResult = obj.c(34);
      contentContainerStyle = contentContainerStyle.contentContainerStyle;
      const tmp4 = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildSettingsStore];
        class S {
          constructor() {
            return guild.getGuild();
          }
        }
        const items1 = [];
        cResult[0] = items;
        cResult[1] = S;
        cResult[2] = items1;
        tmp5 = items;
        tmp7 = items1;
      } else {
        [tmp5, tmp6, tmp7] = cResult;
      }
      const tmpResult = stateFromStores(504);
      stateFromStores = tmpResult.useStateFromStores(tmp5, S, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [PermissionStore];
        class S {
          constructor() {
            return guild.getGuild();
          }
        }
        cResult[3] = items2;
        tmp10 = items2;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== stateFromStores) {
        const fn = function v() {
          return PermissionStore.can(metroRequire.MANAGE_GUILD, stateFromStores);
        };
        const items3 = [stateFromStores];
        class S {
          constructor() {
            return guild.getGuild();
          }
        }
        cResult[4] = stateFromStores;
        cResult[5] = fn;
        cResult[6] = items3;
        tmp13 = items3;
        tmp12 = fn;
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
          let tmp18;
          let tmp17;
          let tmp22;
          let tmp21;
          if (cResult[8] === tmp4.content) {
            tmp15 = cResult[9];
          }
          const _Symbol = Symbol;
          const stackPadding = tmp4.stackPadding;
          class S {
            constructor() {
              return guild.getGuild();
            }
          }
          if (tmp16 === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(stateFromStores(1126).t["0JLdD3"]);
            class S {
              constructor() {
                return guild.getGuild();
              }
            }
            const stringResult1 = obj4.string(stateFromStores(1126).t.Xa1KEN);
            cResult[10] = stringResult;
            cResult[11] = stringResult1;
            tmp18 = stringResult1;
            tmp17 = stringResult;
          } else {
            tmp17 = cResult[10];
            tmp18 = cResult[11];
          }
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const string = tmp(1126).intl.string;
            class S {
              constructor() {
                return guild.getGuild();
              }
            }
            const intl2 = tmp(1126).intl;
            const stringResult2 = intl2.string(stateFromStores(1126).t.n3aRYQ);
            cResult[12] = tmp24;
            cResult[13] = stringResult2;
            tmp22 = stringResult2;
            tmp21 = tmp24;
          } else {
            tmp21 = cResult[12];
            tmp22 = cResult[13];
          }
          if (cResult[14] === stateFromStores) {
            let tmp27;
            if (cResult[15] === !stateFromStores1) {
              tmp27 = cResult[16];
            }
            const _Symbol3 = Symbol;
            class S {
              constructor() {
                return guild.getGuild();
              }
            }
            if (cResult[18] === stateFromStores) {
              let tmp35;
              if (cResult[19] === !stateFromStores1) {
                tmp35 = cResult[20];
              }
              if (cResult[21] === tmp27) {
                let tmp40;
                if (cResult[22] === tmp35) {
                  tmp40 = cResult[23];
                }
                if (cResult[24] === tmp4.stackPadding) {
                  let tmp44;
                  if (cResult[25] === tmp40) {
                    tmp44 = cResult[26];
                  }
                  if (cResult[27] === tmp4.container) {
                    if (cResult[28] === tmp44) {
                      let tmp49;
                      let tmp55;
                      if (cResult[29] === tmp15) {
                        tmp49 = cResult[30];
                      }
                      const _Symbol4 = Symbol;
                      class S {
                        constructor() {
                          return guild.getGuild();
                        }
                      }
                      if (cResult[32] !== tmp49) {
                        const obj2 = { children: tmp58 };
                        class S {
                          constructor() {
                            return guild.getGuild();
                          }
                        }
                        tmp58[0] = tmp49;
                        tmp58[1] = tmp54;
                        const tmp59 = closure_9(closure_10, obj2);
                        cResult[32] = tmp49;
                        cResult[33] = tmp59;
                        tmp55 = tmp59;
                      } else {
                        tmp55 = cResult[33];
                      }
                      return tmp55;
                    }
                  }
                  class S {
                    constructor() {
                      return guild.getGuild();
                    }
                  }
                  tmp51[0] = tmp60;
                  tmp51[1] = tmp15;
                  tmp51[2] = tmp44;
                  const tmp52 = closure_8(stateFromStores(8924).Form, tmp51);
                  cResult[27] = tmp4.container;
                  cResult[28] = tmp44;
                  cResult[29] = tmp15;
                  cResult[30] = tmp52;
                  tmp49 = tmp52;
                }
                class S {
                  constructor() {
                    return guild.getGuild();
                  }
                }
                tmp46[0] = stackPadding;
                const Stack = tmp(5600).Stack;
                tmp46[1] = nativeDefault.space.PX_24;
                tmp46[2] = tmp40;
                const tmp48 = closure_8(Stack, tmp46);
                cResult[24] = tmp4.stackPadding;
                cResult[25] = tmp40;
                cResult[26] = tmp48;
                tmp44 = tmp48;
              }
              class S {
                constructor() {
                  return guild.getGuild();
                }
              }
              tmp42[0] = tmp17;
              tmp42[1] = tmp18;
              const items4 = [tmp27, tmp35];
              tmp42[3] = items4;
              const tmp43 = closure_9(stateFromStores(6081).TableRowGroup, tmp42);
              cResult[21] = tmp27;
              cResult[22] = tmp35;
              cResult[23] = tmp43;
              tmp40 = tmp43;
            }
            const obj3 = {
              guild: stateFromStores,
              flag: constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS,
              settingType: stateFromStores(17715).ServerHubSettingType.WHITEBOARD_SYSTEM_MESSAGES,
              label: tmp33,
              disabled: !stateFromStores1,
            };
            const tmp39 = closure_8(closure_12, obj3);
            cResult[18] = stateFromStores;
            cResult[19] = !stateFromStores1;
            cResult[20] = tmp39;
            tmp35 = tmp39;
          }
          const obj5 = {
            guild: stateFromStores,
            flag: constants2.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS,
            settingType: stateFromStores(17715).ServerHubSettingType.LEADERBOARD_SYSTEM_MESSAGES,
            label: tmp21,
            subLabel: tmp22,
            disabled: !stateFromStores1,
          };
          const tmp31 = closure_8(closure_12, obj5);
          cResult[14] = stateFromStores;
          cResult[15] = !stateFromStores1;
          cResult[16] = tmp31;
          tmp27 = tmp31;
        }
        const items5 = [tmp4.content];
        class S {
          constructor() {
            return guild.getGuild();
          }
        }
        cResult[7] = contentContainerStyle;
        cResult[8] = tmp4.content;
        cResult[9] = items5;
        tmp15 = items5;
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
      let intl5;
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
        const Form = tmp2(8924).Form;
        obj5 = {
          style: tmp.stackPadding,
          spacing: nativeDefault.space.PX_24,
          children: closure_9(TableRowGroup, obj6),
        };
        Stack = tmp2(5600).Stack;
        obj6 = {
          title: intl.string(stateFromStores(1126).t["0JLdD3"]),
          description: intl2.string(stateFromStores(1126).t.Xa1KEN),
          hasIcons: false,
          children: items4,
        };
        TableRowGroup = tmp2(6081).TableRowGroup;
        intl = tmp2(1126).intl;
        intl2 = tmp2(1126).intl;
        const obj7 = {
          guild: stateFromStores,
          flag: constants2.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS,
          settingType: stateFromStores(17715).ServerHubSettingType.LEADERBOARD_SYSTEM_MESSAGES,
          label: intl3.string(_modDef2425.btBTIw),
          subLabel: intl4.string(stateFromStores(1126).t.n3aRYQ),
          disabled: !stateFromStores1,
        };
        intl3 = tmp2(1126).intl;
        intl4 = tmp2(1126).intl;
        items4 = [closure_8(closure_12, obj7)];
        const obj8 = {
          guild: stateFromStores,
          flag: constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS,
          settingType: stateFromStores(17715).ServerHubSettingType.WHITEBOARD_SYSTEM_MESSAGES,
          label: intl5.string(stateFromStores(1126).t["9tlK5J"]),
          disabled: !stateFromStores1,
        };
        intl5 = tmp2(1126).intl;
        items4[1] = closure_8(closure_12, obj8);
        items5 = [closure_8(Form, obj4), closure_8(stateFromStores(6543).NavScrim, {})];
        tmp6 = closure_9(closure_10, obj3);
      }
      return tmp6;
    };
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalGuildSpace.tsx");

export default tmp5;
