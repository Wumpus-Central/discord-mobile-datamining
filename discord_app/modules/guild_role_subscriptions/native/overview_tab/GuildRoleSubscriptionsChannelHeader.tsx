// === Module 13124: GuildRoleSubscriptionsChannelHeader ===

// Module 13124 (GuildRoleSubscriptionsChannelHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import _modDef12476 from "module_12476" /* 12476 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj = { header: { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 } };
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsChannelHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: _modDef12476, size: native.Icon.Sizes.MEDIUM, disableColor: true };
    const tmp8 = React4(native.Icon, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "heading-lg/extrabold", color: "interactive-text-active", children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t["KzCF/6"]);
    const tmp11 = React4(Text_Text.Text, obj3);
    cResult[1] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== tmp4.header) {
    const obj4 = { style: tmp4.header, children: null };
    const items = [first, tmp9];
    obj4.children = items;
    const tmp15 = hasOwnProperty(View, obj4);
    cResult[2] = tmp4.header;
    cResult[3] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[3];
  }
  return tmp12;
}) : (() => {
  const obj = { style: closure_6().header, children: null };
  const items = [React4(native.Icon, { source: _modDef12476, size: native.Icon.Sizes.MEDIUM, disableColor: true }), ];
  const obj3 = { variant: "heading-lg/extrabold", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["KzCF/6"]);
  items[1] = React4(Text_Text.Text, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
}));