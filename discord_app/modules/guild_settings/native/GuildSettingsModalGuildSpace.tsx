// === Module 17964: GuildSettingsModalGuildSpace ===

// Module 17964 (GuildSettingsModalGuildSpace)
import nativeDefault from "native" /* 587 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import _modDef2425 from "module_2425" /* 2425 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9247 */;
import ServerHubAnalytics from "ServerHubAnalytics" /* 17645 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9248 */;

require = fn;
const Constants = fn(1085);
({ Permissions: metroRequire, SystemChannelFlags: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(4890);
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
  const cResult = stateFromStores(576).c(33);
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
  const obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp5, tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[3] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const fn2 = function v() {
      return PermissionStore.can(constants.MANAGE_GUILD, stateFromStores);
    };
    const items3 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = fn2;
    cResult[6] = items3;
    let tmp13 = items3;
    let tmp12 = fn2;
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
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.OBskVU);
        cResult[10] = stringResult;
        let tmp16 = stringResult;
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
        let tmp19 = stringResult2;
        let tmp18 = stringResult1;
      } else {
        tmp18 = cResult[11];
        tmp19 = cResult[12];
      }
      if (cResult[13] === stateFromStores) {
        if (cResult[14] === tmp23) {
          let tmp24 = cResult[15];
        }
        const _Symbol3 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult3 = intl4.string(tmp(1126).t.YZqqTX);
          cResult[16] = stringResult3;
          let tmp29 = stringResult3;
        } else {
          tmp29 = cResult[16];
        }
        if (cResult[17] === stateFromStores) {
          if (cResult[18] === tmp31) {
            let tmp32 = cResult[19];
          }
          if (cResult[20] === tmp24) {
            if (cResult[21] === tmp32) {
              let tmp37 = cResult[22];
            }
            if (cResult[23] === tmp4.stackPadding) {
              if (cResult[24] === tmp37) {
                let tmp40 = cResult[25];
              }
              if (cResult[26] === tmp4.container) {
                if (cResult[27] === tmp40) {
                  if (cResult[28] === tmp15) {
                    let tmp44 = cResult[29];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp49 = closure_8(tmp(6536).NavScrim, {});
                    cResult[30] = tmp49;
                    let tmp47 = tmp49;
                  } else {
                    tmp47 = cResult[30];
                  }
                  if (cResult[31] !== tmp44) {
                    const obj2 = { children: null };
                    const items4 = [tmp44, tmp47];
                    obj2.children = items4;
                    const tmp53 = closure_9(closure_10, obj2);
                    cResult[31] = tmp44;
                    cResult[32] = tmp53;
                    let tmp50 = tmp53;
                  } else {
                    tmp50 = cResult[32];
                  }
                  return tmp50;
                }
              }
              const obj3 = { style: tmp54, contentContainerStyle: tmp15, children: tmp40 };
              const tmp46 = closure_8(tmp(8895).Form, obj3);
              cResult[26] = tmp4.container;
              cResult[27] = tmp40;
              cResult[28] = tmp15;
              cResult[29] = tmp46;
              tmp44 = tmp46;
            }
            const obj4 = { style: tmp4.stackPadding, spacing: nativeDefault.space.PX_24, children: tmp37 };
            const tmp43 = closure_8(tmp(5593).Stack, obj4);
            cResult[23] = tmp4.stackPadding;
            cResult[24] = tmp37;
            cResult[25] = tmp43;
            tmp40 = tmp43;
          }
          const obj5 = { title: tmp16, hasIcons: false, children: null };
          const items5 = [tmp24, tmp32];
          obj5.children = items5;
          const tmp39 = closure_9(tmp(6074).TableRowGroup, obj5);
          cResult[20] = tmp24;
          cResult[21] = tmp32;
          cResult[22] = tmp39;
          tmp37 = tmp39;
        }
        const obj6 = { guild: stateFromStores, flag: constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS, settingType: tmp(17645).ServerHubSettingType.WHITEBOARD_SYSTEM_MESSAGES, label: tmp29, disabled: !stateFromStores1 };
        const tmp36 = closure_8(closure_12, obj6);
        cResult[17] = stateFromStores;
        cResult[18] = !stateFromStores1;
        cResult[19] = tmp36;
        tmp32 = tmp36;
      }
      const obj7 = { guild: stateFromStores, flag: constants2.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS, settingType: tmp(17645).ServerHubSettingType.LEADERBOARD_SYSTEM_MESSAGES, label: tmp18, subLabel: tmp19, disabled: !stateFromStores1 };
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
    const obj6 = { title: null, hasIcons: false, children: null };
    const intl = tmp2(1126).intl;
    obj6.title = intl.string(tmp2(1126).t.OBskVU);
    const obj7 = { guild: stateFromStores, flag: constants2.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS, settingType: tmp2(17645).ServerHubSettingType.LEADERBOARD_SYSTEM_MESSAGES, label: null, subLabel: null, disabled: null };
    const intl2 = tmp2(1126).intl;
    obj7.label = intl2.string(_modDef2425.btBTIw);
    const intl3 = tmp2(1126).intl;
    obj7.subLabel = intl3.string(_modDef2425.n3aRYQ);
    obj7.disabled = !stateFromStores1;
    const items4 = [closure_8(closure_12, obj7), ];
    const obj8 = { guild: stateFromStores, flag: constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS, settingType: tmp2(17645).ServerHubSettingType.WHITEBOARD_SYSTEM_MESSAGES, label: null, disabled: null };
    const intl4 = tmp2(1126).intl;
    obj8.label = intl4.string(tmp2(1126).t.YZqqTX);
    obj8.disabled = !stateFromStores1;
    items4[1] = closure_8(closure_12, obj8);
    obj6.children = items4;
    obj5.children = closure_9(tmp2(6074).TableRowGroup, obj6);
    obj4.children = closure_8(tmp2(5593).Stack, obj5);
    const items5 = [closure_8(tmp2(8895).Form, obj4), closure_8(tmp2(6536).NavScrim, {})];
    obj3.children = items5;
    tmp6 = closure_9(closure_10, obj3);
  }
  return tmp6;
});