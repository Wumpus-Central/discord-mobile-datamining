// === Module 13264: GuildRoleSubscriptionsChannelHeader ===

// Module 13264 (GuildRoleSubscriptionsChannelHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import _modDef12779 from "module_12779" /* 12779 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let obj = { header: null };
obj = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj.header = obj;
let closure_6 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsChannelHeader.tsx");

export default noop.memo(function GuildRoleSubscriptionsChannelHeader() {
  let obj = { style: closure_6().header, children: null };
  obj = { source: _modDef12779, size: native.Icon.Sizes.MEDIUM, disableColor: true };
  const items = [React4(native.Icon, obj), ];
  obj = { variant: "heading-lg/extrabold", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["KzCF/6"]);
  items[1] = React4(Text_Text.Text, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
});