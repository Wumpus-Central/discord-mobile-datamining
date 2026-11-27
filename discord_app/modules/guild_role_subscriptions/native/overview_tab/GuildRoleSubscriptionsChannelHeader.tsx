// === Module 14095: GuildRoleSubscriptionsChannelHeader ===

// Module 14095 (GuildRoleSubscriptionsChannelHeader)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import native from "native" /* 1186 */;
import Text_Text from "Text/Text" /* 5634 */;
import _modDef13825 from "module_13825" /* 13825 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5043);
let obj = { header: { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsChannelHeader.tsx");

export default noop.memo(function GuildRoleSubscriptionsChannelHeader() {
  const obj = { style: closure_6().header, children: null };
  items = [React4(native.Icon, { source: _modDef13825, size: native.Icon.Sizes.MEDIUM, disableColor: true }), ];
  const obj3 = { variant: "heading-lg/semibold", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["KzCF/6"]);
  items[1] = React4(Text_Text.Text, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
});