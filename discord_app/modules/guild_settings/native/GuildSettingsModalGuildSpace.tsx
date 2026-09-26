// === Module 17615: GuildSettingsModalGuildSpace ===

// Module 17615 (GuildSettingsModalGuildSpace)
import nativeDefault from "native" /* 576 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import _modDef2419 from "module_2419" /* 2419 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;

require = fn;
const Constants = fn(1074);
({ Permissions: metroRequire, SystemChannelFlags: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { container: { flex: 1 }, content: { paddingTop: nativeDefault.space.PX_16 }, stackPadding: null };
let obj3 = { paddingTop: nativeDefault.space.PX_16 };
obj2.stackPadding = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalGuildSpace.tsx");

export default function GuildSettingsModalGuildSpace(contentContainerStyle) {
  let stateFromStores;
  const tmp = closure_11();
  const items = [GuildSettingsStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => guild.getGuild(), []);
  let obj = stateFromStores(504);
  const items1 = [PermissionStore];
  const items2 = [stateFromStores];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => PermissionStore.can(constants.MANAGE_GUILD, stateFromStores), items2);
  const items3 = [stateFromStores];
  [][0] = stateFromStores;
  const callback = noop.useCallback((arg0) => {
    if (null != stateFromStores) {
      const setFlagResult = FlagUtils.setFlag(tmp.systemChannelFlags, constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS, !arg0);
      const obj3 = { systemChannelFlags: setFlagResult };
      GuildSettingsActionCreatorsDefault.updateGuild(obj3);
    }
  }, items3);
  let tmp8 = null;
  if (null != stateFromStores) {
    let obj3 = { children: null };
    const obj4 = { style: tmp.container, contentContainerStyle: null, children: null };
    const items4 = [tmp.content, contentContainerStyle.contentContainerStyle];
    obj4.contentContainerStyle = items4;
    const obj5 = { style: tmp.stackPadding, spacing: nativeDefault.space.PX_24, children: null };
    const obj6 = { title: null, hasIcons: false, children: null };
    const intl = tmp2(1115).intl;
    obj6.title = intl.string(tmp2(1115).t.OBskVU);
    const obj7 = { label: null, subLabel: null, disabled: null, value: null, onValueChange: null };
    const intl2 = tmp2(1115).intl;
    obj7.label = intl2.string(_modDef2419.btBTIw);
    const intl3 = tmp2(1115).intl;
    obj7.subLabel = intl3.string(_modDef2419.n3aRYQ);
    obj7.disabled = !stateFromStores1;
    obj7.value = !tmp2(1385).hasFlag(stateFromStores.systemChannelFlags, constants2.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS);
    obj7.onValueChange = tmp7;
    const items5 = [closure_8(tmp2(6621).TableSwitchRow, obj7), ];
    const obj8 = { label: null, disabled: null, value: null, onValueChange: null };
    const intl4 = tmp2(1115).intl;
    obj8.label = intl4.string(tmp2(1115).t.YZqqTX);
    obj8.disabled = !stateFromStores1;
    const tmp2Result = tmp2(1385);
    obj8.value = !tmp2(1385).hasFlag(stateFromStores.systemChannelFlags, constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS);
    obj8.onValueChange = callback;
    items5[1] = closure_8(tmp2(6621).TableSwitchRow, obj8);
    obj6.children = items5;
    obj5.children = closure_9(tmp2(5999).TableRowGroup, obj6);
    obj4.children = closure_8(tmp2(5279).Stack, obj5);
    const items6 = [closure_8(tmp2(8053).Form, obj4), closure_8(tmp2(6461).NavScrim, {})];
    obj3.children = items6;
    tmp8 = closure_9(closure_10, obj3);
    const tmp2Result2 = tmp2(1385);
  }
  return tmp8;
};