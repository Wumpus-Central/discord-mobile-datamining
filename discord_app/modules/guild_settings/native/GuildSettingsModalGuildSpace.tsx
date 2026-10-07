// === Module 18032: GuildSettingsModalGuildSpace ===

// Module 18032 (GuildSettingsModalGuildSpace)
import nativeDefault from "native" /* 587 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import _modDef2425 from "module_2425" /* 2425 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9282 */;
import ServerHubAnalytics from "ServerHubAnalytics" /* 17715 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9283 */;

require = fn;
const Constants = fn(1085);
({ Permissions: metroRequire, SystemChannelFlags: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { flex: 1 }, content: { paddingTop: nativeDefault.space.PX_16 }, stackPadding: null };
let obj3 = { paddingTop: nativeDefault.space.PX_16 };
obj2.stackPadding = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(settingType[8]).c(14);
  guild = guild.guild;
  settingType = guild.settingType;
  ({ label, subLabel, disabled } = guild);
  if (cResult[0] === guild.flag) {
    if (cResult[1] === guild.id) {
      if (cResult[2] === guild.systemChannelFlags) {
        if (cResult[3] === settingType) {
          let tmp4 = cResult[4];
        }
        if (cResult[5] === flag) {
          if (cResult[6] === guild.systemChannelFlags) {
            let tmp5 = cResult[7];
          }
          if (cResult[8] === disabled) {
            if (cResult[9] === tmp4) {
              if (cResult[10] === label) {
                if (cResult[11] === subLabel) {
                  if (cResult[12] === tmp7) {
                    let tmp8 = cResult[13];
                  }
                  return tmp8;
                }
              }
            }
          }
          let obj2 = { label, subLabel, disabled, value: !tmp5, onValueChange: tmp4 };
          const tmp10 = closure_8(tmp(tmp2[12]).TableSwitchRow, obj2);
          cResult[8] = disabled;
          cResult[9] = tmp4;
          cResult[10] = label;
          cResult[11] = subLabel;
          cResult[12] = !tmp5;
          cResult[13] = tmp10;
          tmp8 = tmp10;
        }
        const hasFlagResult = tmp(tmp2[9]).hasFlag(guild.systemChannelFlags, flag);
        cResult[5] = flag;
        cResult[6] = guild.systemChannelFlags;
        cResult[7] = hasFlagResult;
        tmp5 = hasFlagResult;
        const tmpResult = tmp(tmp2[9]);
      }
    }
  }
  const fn = function n(value) {
    const setFlagResult = FlagUtils.setFlag(guild.systemChannelFlags, flag, !value);
    GuildSettingsActionCreatorsDefault.updateGuild({ systemChannelFlags: setFlagResult });
    const result = ServerHubAnalytics.trackServerHubToggleSetting(guild.id, settingType, value);
  };
  cResult[0] = guild.flag;
  cResult[1] = guild.id;
  cResult[2] = guild.systemChannelFlags;
  cResult[3] = settingType;
  cResult[4] = fn;
  tmp4 = fn;
  let obj = guild(settingType[8]);
}) : ((guild) => {
  guild = guild.guild;
  const flag = guild.flag;
  const settingType = guild.settingType;
  const items = [guild, flag, settingType];
  ({ label, subLabel, disabled } = guild);
  const callback = noop.useCallback((value) => {
    const setFlagResult = FlagUtils.setFlag(guild.systemChannelFlags, flag, !value);
    GuildSettingsActionCreatorsDefault.updateGuild({ systemChannelFlags: setFlagResult });
    const result = ServerHubAnalytics.trackServerHubToggleSetting(guild.id, settingType, value);
  }, items);
  let obj = { label, subLabel, disabled, value: !guild(settingType[9]).hasFlag(guild.systemChannelFlags, flag), onValueChange: callback };
  return closure_8(guild(settingType[12]).TableSwitchRow, obj);
});
ReactCompilerGating = fn(558);
let obj4 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalGuildSpace.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((contentContainerStyle) => {
  const cResult = stateFromStores(576).c(34);
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildSettingsStore];
    class S {
      constructor() {
        return closure_1_5.getGuild();
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
  const obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp5, S, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    class S {
      constructor() {
        return closure_1_5.getGuild();
      }
    }
    cResult[3] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const fn = function v() {
      return PermissionStore.can(constants.MANAGE_GUILD, stateFromStores);
    };
    const items3 = [stateFromStores];
    class S {
      constructor() {
        return closure_1_5.getGuild();
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = fn;
    cResult[6] = items3;
    let tmp13 = items3;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  const tmpResult = stateFromStores(504);
  const stateFromStores1 = stateFromStores(504).useStateFromStores(tmp10, tmp12, tmp13);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[7] === contentContainerStyle) {
      if (cResult[8] === tmp4.content) {
        let tmp15 = cResult[9];
      }
      const _Symbol = Symbol;
      class S {
        constructor() {
          return closure_1_5.getGuild();
        }
      }
      if (tmp16 === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["0JLdD3"]);
        class S {
          constructor() {
            return closure_1_5.getGuild();
          }
        }
        const stringResult1 = obj4.string(tmp(1126).t.Xa1KEN);
        cResult[10] = stringResult;
        cResult[11] = stringResult1;
        let tmp18 = stringResult1;
        let tmp17 = stringResult;
      } else {
        tmp17 = cResult[10];
        tmp18 = cResult[11];
      }
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const string = tmp(1126).intl.string;
        class S {
          constructor() {
            return closure_1_5.getGuild();
          }
        }
        const intl2 = tmp(1126).intl;
        const stringResult2 = intl2.string(tmp(1126).t.n3aRYQ);
        cResult[12] = tmp24;
        cResult[13] = stringResult2;
        let tmp22 = stringResult2;
        let tmp21 = tmp24;
      } else {
        tmp21 = cResult[12];
        tmp22 = cResult[13];
      }
      if (cResult[14] === stateFromStores) {
        if (cResult[15] === tmp26) {
          let tmp27 = cResult[16];
        }
        const _Symbol3 = Symbol;
        class S {
          constructor() {
            return closure_1_5.getGuild();
          }
        }
        if (cResult[18] === stateFromStores) {
          if (cResult[19] === tmp34) {
            let tmp35 = cResult[20];
          }
          if (cResult[21] === tmp27) {
            if (cResult[22] === tmp35) {
              let tmp40 = cResult[23];
            }
            if (cResult[24] === tmp4.stackPadding) {
              if (cResult[25] === tmp40) {
                let tmp44 = cResult[26];
              }
              if (cResult[27] === tmp4.container) {
                if (cResult[28] === tmp44) {
                  if (cResult[29] === tmp15) {
                    let tmp49 = cResult[30];
                  }
                  const _Symbol4 = Symbol;
                  class S {
                    constructor() {
                      return closure_1_5.getGuild();
                    }
                  }
                  if (cResult[32] !== tmp49) {
                    const obj2 = { children: null };
                    class S {
                      constructor() {
                        return closure_1_5.getGuild();
                      }
                    }
                    tmp58[0] = tmp49;
                    tmp58[1] = tmp54;
                    obj2.children = tmp58;
                    const tmp59 = closure_9(closure_10, obj2);
                    cResult[32] = tmp49;
                    cResult[33] = tmp59;
                    let tmp55 = tmp59;
                  } else {
                    tmp55 = cResult[33];
                  }
                  return tmp55;
                }
              }
              class S {
                constructor() {
                  return closure_1_5.getGuild();
                }
              }
              tmp51[0] = tmp60;
              tmp51[1] = tmp15;
              tmp51[2] = tmp44;
              const tmp52 = closure_8(tmp(8924).Form, tmp51);
              cResult[27] = tmp4.container;
              cResult[28] = tmp44;
              cResult[29] = tmp15;
              cResult[30] = tmp52;
              tmp49 = tmp52;
            }
            class S {
              constructor() {
                return closure_1_5.getGuild();
              }
            }
            tmp46[0] = tmp4.stackPadding;
            tmp46[1] = nativeDefault.space.PX_24;
            tmp46[2] = tmp40;
            const tmp48 = closure_8(tmp(5600).Stack, tmp46);
            cResult[24] = tmp4.stackPadding;
            cResult[25] = tmp40;
            cResult[26] = tmp48;
            tmp44 = tmp48;
          }
          class S {
            constructor() {
              return closure_1_5.getGuild();
            }
          }
          tmp42[0] = tmp17;
          tmp42[1] = tmp18;
          const items4 = [tmp27, tmp35];
          tmp42[3] = items4;
          const tmp43 = closure_9(tmp(6081).TableRowGroup, tmp42);
          cResult[21] = tmp27;
          cResult[22] = tmp35;
          cResult[23] = tmp43;
          tmp40 = tmp43;
        }
        const obj3 = { guild: stateFromStores, flag: constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS, settingType: tmp(17715).ServerHubSettingType.WHITEBOARD_SYSTEM_MESSAGES, label: tmp33, disabled: !stateFromStores1 };
        const tmp39 = closure_8(closure_12, obj3);
        cResult[18] = stateFromStores;
        cResult[19] = !stateFromStores1;
        cResult[20] = tmp39;
        tmp35 = tmp39;
      }
      const obj5 = { guild: stateFromStores, flag: constants2.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS, settingType: tmp(17715).ServerHubSettingType.LEADERBOARD_SYSTEM_MESSAGES, label: tmp21, subLabel: tmp22, disabled: !stateFromStores1 };
      const tmp31 = closure_8(closure_12, obj5);
      cResult[14] = stateFromStores;
      cResult[15] = !stateFromStores1;
      cResult[16] = tmp31;
      tmp27 = tmp31;
    }
    const items5 = [tmp4.content, ];
    class S {
      constructor() {
        return closure_1_5.getGuild();
      }
    }
    cResult[7] = contentContainerStyle;
    cResult[8] = tmp4.content;
    cResult[9] = items5;
    tmp15 = items5;
  }
  const tmpResult2 = stateFromStores(504);
}) : ((contentContainerStyle) => {
  let stateFromStores;
  const tmp = closure_11();
  const items = [GuildSettingsStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => guild.getGuild(), []);
  const obj = stateFromStores(504);
  const items1 = [PermissionStore];
  const items2 = [stateFromStores];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => PermissionStore.can(constants.MANAGE_GUILD, stateFromStores), items2);
  let tmp6 = null;
  if (null != stateFromStores) {
    const obj3 = { children: null };
    const obj4 = { style: tmp.container, contentContainerStyle: null, children: null };
    const items3 = [tmp.content, contentContainerStyle.contentContainerStyle];
    obj4.contentContainerStyle = items3;
    const obj5 = { style: tmp.stackPadding, spacing: nativeDefault.space.PX_24, children: null };
    const obj6 = { title: null, description: null, hasIcons: false, children: null };
    const intl = tmp2(1126).intl;
    obj6.title = intl.string(tmp2(1126).t["0JLdD3"]);
    const intl2 = tmp2(1126).intl;
    obj6.description = intl2.string(tmp2(1126).t.Xa1KEN);
    const obj7 = { guild: stateFromStores, flag: constants2.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS, settingType: tmp2(17715).ServerHubSettingType.LEADERBOARD_SYSTEM_MESSAGES, label: null, subLabel: null, disabled: null };
    const intl3 = tmp2(1126).intl;
    obj7.label = intl3.string(_modDef2425.btBTIw);
    const intl4 = tmp2(1126).intl;
    obj7.subLabel = intl4.string(tmp2(1126).t.n3aRYQ);
    obj7.disabled = !stateFromStores1;
    const items4 = [closure_8(closure_12, obj7), ];
    const obj8 = { guild: stateFromStores, flag: constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS, settingType: tmp2(17715).ServerHubSettingType.WHITEBOARD_SYSTEM_MESSAGES, label: null, disabled: null };
    const intl5 = tmp2(1126).intl;
    obj8.label = intl5.string(tmp2(1126).t["9tlK5J"]);
    obj8.disabled = !stateFromStores1;
    items4[1] = closure_8(closure_12, obj8);
    obj6.children = items4;
    obj5.children = closure_9(tmp2(6081).TableRowGroup, obj6);
    obj4.children = closure_8(tmp2(5600).Stack, obj5);
    const items5 = [closure_8(tmp2(8924).Form, obj4), closure_8(tmp2(6543).NavScrim, {})];
    obj3.children = items5;
    tmp6 = closure_9(closure_10, obj3);
  }
  return tmp6;
});