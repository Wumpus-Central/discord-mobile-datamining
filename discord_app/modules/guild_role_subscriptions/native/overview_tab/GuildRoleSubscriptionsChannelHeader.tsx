// === Module 13396: GuildRoleSubscriptionsChannelHeader ===

// Module 13396 (GuildRoleSubscriptionsChannelHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1176 */;
import Text_Text from "Text/Text" /* 4632 */;
import _modDef12909 from "module_12909" /* 12909 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let obj = { header: { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsChannelHeader.tsx");

export default noop.memo(function GuildRoleSubscriptionsChannelHeader() {
  const obj = { style: closure_6().header, children: null };
  const items = [React4(native.Icon, { source: _modDef12909, size: native.Icon.Sizes.MEDIUM, disableColor: true }), ];
  const obj3 = { variant: "heading-lg/extrabold", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["KzCF/6"]);
  items[1] = React4(Text_Text.Text, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
});