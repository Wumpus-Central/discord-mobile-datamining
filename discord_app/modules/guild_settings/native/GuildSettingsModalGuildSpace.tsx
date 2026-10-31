// === Module 20000: GuildSettingsModalGuildSpace ===

// Module 20000 (GuildSettingsModalGuildSpace)
import nativeDefault from "native" /* 575 */;
import FlagUtils from "FlagUtils" /* 1396 */;
import _modDef2442 from "module_2442" /* 2442 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9074 */;
import ServerHubAnalytics from "ServerHubAnalytics" /* 19656 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9075 */;

require = fn;
function GuildSpaceSystemMessageSwitch(guild) {
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
  let obj = { label, subLabel, disabled, value: !guild(settingType[7]).hasFlag(guild.systemChannelFlags, flag), onValueChange: callback };
  return closure_8(guild(settingType[10]).TableSwitchRow, obj);
}
const Constants = fn(1072);
({ Permissions: metroRequire, SystemChannelFlags: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { flex: 1 }, content: { paddingTop: nativeDefault.space.PX_16 }, stackPadding: null };
let obj3 = { paddingTop: nativeDefault.space.PX_16 };
obj2.stackPadding = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalGuildSpace.tsx");

export default function GuildSettingsModalGuildSpace(contentContainerStyle) {
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
    const intl = tmp2(1113).intl;
    obj6.title = intl.string(tmp2(1113).t["0JLdD3"]);
    const intl2 = tmp2(1113).intl;
    obj6.description = intl2.string(tmp2(1113).t.Xa1KEN);
    const obj7 = { guild: stateFromStores, flag: constants2.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS, settingType: tmp2(19656).ServerHubSettingType.LEADERBOARD_SYSTEM_MESSAGES, label: null, subLabel: null, disabled: null };
    const intl3 = tmp2(1113).intl;
    obj7.label = intl3.string(_modDef2442.btBTIw);
    const intl4 = tmp2(1113).intl;
    obj7.subLabel = intl4.string(tmp2(1113).t.n3aRYQ);
    obj7.disabled = !stateFromStores1;
    const items4 = [closure_8(GuildSpaceSystemMessageSwitch, obj7), , ];
    const obj8 = { guild: stateFromStores, flag: constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS, settingType: tmp2(19656).ServerHubSettingType.WHITEBOARD_SYSTEM_MESSAGES, label: null, disabled: null };
    const intl5 = tmp2(1113).intl;
    obj8.label = intl5.string(tmp2(1113).t["9tlK5J"]);
    obj8.disabled = !stateFromStores1;
    items4[1] = closure_8(GuildSpaceSystemMessageSwitch, obj8);
    const obj9 = { guild: stateFromStores, flag: constants2.SUPPRESS_GUILD_SPACE_MUSIC_NOTIFICATIONS, settingType: tmp2(19656).ServerHubSettingType.MUSIC_SYSTEM_MESSAGES, label: null, subLabel: null, disabled: null };
    const intl6 = tmp2(1113).intl;
    obj9.label = intl6.string(_modDef2442["5xxUI2"]);
    const intl7 = tmp2(1113).intl;
    obj9.subLabel = intl7.string(_modDef2442.FMGoDB);
    obj9.disabled = !stateFromStores1;
    items4[2] = closure_8(GuildSpaceSystemMessageSwitch, obj9);
    obj6.children = items4;
    obj5.children = closure_9(tmp2(7060).TableRowGroup, obj6);
    obj4.children = closure_8(tmp2(6027).Stack, obj5);
    const items5 = [closure_8(tmp2(8177).Form, obj4), closure_8(tmp2(5606).NavScrim, {})];
    obj3.children = items5;
    tmp6 = closure_9(closure_10, obj3);
  }
  return tmp6;
};