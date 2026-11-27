// === Module 20086: DefaultMemberPermissionsSheet ===

// Module 20086 (DefaultMemberPermissionsSheet)
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/native/DefaultMemberPermissionsSheet.tsx");

export default function DefaultMemberPermissionsSheet(guildId) {
  guildId = guildId.guildId;
  items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = { header: null, children: null };
    const obj3 = { title: null };
    const intl = tmp(1112).intl;
    obj3.title = intl.string(tmp(1112).t["4gMlpQ"]);
    obj2.header = jsx(tmp(7507).BottomSheetTitleHeader, { title: null });
    const obj4 = { guild: stateFromStores, permissions: tmp(8185).getRequiredPermissions(guildId.defaultMemberPermissions), granted: true };
    obj2.children = jsx(tmp(20087).PermissionItems, { guild: stateFromStores, permissions: tmp(8185).getRequiredPermissions(guildId.defaultMemberPermissions), granted: true });
    tmp4 = jsx(tmp(7546).ActionSheet, { header: null, children: null });
    const tmpResult = tmp(8185);
  }
  return tmp4;
};