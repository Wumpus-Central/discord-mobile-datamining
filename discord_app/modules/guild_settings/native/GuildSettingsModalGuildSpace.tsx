// discord_app/modules/guild_settings/native/GuildSettingsModalGuildSpace.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FlagUtils from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import GuildSettingsActionCreatorsDefault from "../GuildSettingsActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";

require = fn;
const Constants = fn(1074);
({ Permissions: metroRequire, SystemChannelFlags: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4757);
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
  [][0] = stateFromStores;
  const stateFromStores1 = stateFromStores(504).useStateFromStores(
    items1,
    () => PermissionStore.can(constants.MANAGE_GUILD, stateFromStores),
    items2,
  );
  let tmp7 = null;
  if (null != stateFromStores) {
    let obj3 = { children: null };
    const obj4 = { style: tmp.container, contentContainerStyle: null, children: null };
    const items3 = [tmp.content, contentContainerStyle.contentContainerStyle];
    obj4.contentContainerStyle = items3;
    const obj5 = { style: tmp.stackPadding, spacing: nativeDefault.space.PX_24, children: null };
    const obj6 = { title: null, hasIcons: false, children: null };
    const intl = tmp2(1115).intl;
    obj6.title = intl.string(tmp2(1115).t.OBskVU);
    const obj7 = { label: null, disabled: null, value: null, onValueChange: null };
    const intl2 = tmp2(1115).intl;
    obj7.label = intl2.string(tmp2(1115).t.YZqqTX);
    obj7.disabled = !stateFromStores1;
    obj7.value = !tmp2(1385).hasFlag(
      stateFromStores.systemChannelFlags,
      constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS,
    );
    obj7.onValueChange = tmp6;
    obj6.children = closure_8(tmp2(7447).TableSwitchRow, obj7);
    obj5.children = closure_8(tmp2(5906).TableRowGroup, obj6);
    obj4.children = closure_8(tmp2(5185).Stack, obj5);
    const items4 = [closure_8(tmp2(8876).Form, obj4), closure_8(tmp2(7287).NavScrim, {})];
    obj3.children = items4;
    tmp7 = closure_10(closure_9, obj3);
    const tmp2Result = tmp2(1385);
  }
  return tmp7;
}
