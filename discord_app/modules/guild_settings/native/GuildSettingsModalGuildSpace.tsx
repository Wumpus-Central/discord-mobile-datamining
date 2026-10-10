// === Module 18555: GuildSettingsModalGuildSpace ===

// Module 18555 (GuildSettingsModalGuildSpace)
import nativeDefault from "native" /* 587 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import _modDef2472 from "module_2472" /* 2472 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8637 */;
import ServerHubAnalytics from "ServerHubAnalytics" /* 18236 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8638 */;

require = fn;
const Constants = fn(1085);
({ Permissions: metroRequire, SystemChannelFlags: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { flex: 1 }, content: { paddingTop: nativeDefault.space.PX_16 }, stackPadding: null };
let obj3 = { paddingTop: nativeDefault.space.PX_16 };
obj2.stackPadding = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSpaceSystemMessageSwitch(guild) {
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
}) : (function GuildSpaceSystemMessageSwitch(guild) {
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

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalGuildSpace(contentContainerStyle) {
  const cResult = stateFromStores(576).c(34);
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
    class I {
      constructor() {
        return closure_4.can(Permissions.MANAGE_GUILD, closure_0);
      }
    }
    const items3 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = I;
    cResult[6] = items3;
    let tmp13 = items3;
  } else {
    class I {
      constructor() {
        return closure_4.can(Permissions.MANAGE_GUILD, closure_0);
      }
    }
    tmp13 = cResult[6];
  }
  const tmpResult = stateFromStores(504);
  const stateFromStores1 = stateFromStores(504).useStateFromStores(tmp10, I, tmp13);
  if (null == stateFromStores) {
    class I {
      constructor() {
        return closure_4.can(Permissions.MANAGE_GUILD, closure_0);
      }
    }
  } else {
    class I {
      constructor() {
        return closure_4.can(Permissions.MANAGE_GUILD, closure_0);
      }
    }
    const items4 = [tmp4.content, contentContainerStyle];
    cResult[7] = contentContainerStyle;
    cResult[8] = tmp4.content;
    cResult[9] = items4;
  }
  const tmpResult2 = stateFromStores(504);
}) : (function GuildSettingsModalGuildSpace(contentContainerStyle) {
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
    const obj7 = { guild: stateFromStores, flag: constants2.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS, settingType: tmp2(18236).ServerHubSettingType.LEADERBOARD_SYSTEM_MESSAGES, label: null, subLabel: null, disabled: null };
    const intl3 = tmp2(1126).intl;
    obj7.label = intl3.string(_modDef2472.btBTIw);
    const intl4 = tmp2(1126).intl;
    obj7.subLabel = intl4.string(tmp2(1126).t.n3aRYQ);
    obj7.disabled = !stateFromStores1;
    const items4 = [closure_8(closure_12, obj7), ];
    const obj8 = { guild: stateFromStores, flag: constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS, settingType: tmp2(18236).ServerHubSettingType.WHITEBOARD_SYSTEM_MESSAGES, label: null, disabled: null };
    const intl5 = tmp2(1126).intl;
    obj8.label = intl5.string(tmp2(1126).t["9tlK5J"]);
    obj8.disabled = !stateFromStores1;
    items4[1] = closure_8(closure_12, obj8);
    obj6.children = items4;
    obj5.children = closure_9(tmp2(6264).TableRowGroup, obj6);
    obj4.children = closure_8(tmp2(5377).Stack, obj5);
    const items5 = [closure_8(tmp2(8579).Form, obj4), closure_8(tmp2(6727).NavScrim, {})];
    obj3.children = items5;
    tmp6 = closure_9(closure_10, obj3);
  }
  return tmp6;
});