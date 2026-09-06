// discord_app/modules/main_tabs_v2/native/channel/header/HomeChannelHeader.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import _modDef12777 from "../../../../../../_runtime/metro/12777__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let obj = { container: null };
obj = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj.container = obj;
let closure_6 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/HomeChannelHeader.tsx");

export default noop.memo(function HomeChannelHeader() {
  let obj = { style: closure_6().container, children: null };
  obj = { source: _modDef12777, size: native.Icon.Sizes.MEDIUM, disableColor: true };
  const items = [React4(native.Icon, obj)];
  obj = { variant: "heading-lg/extrabold", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.Ym2Ri6);
  items[1] = React4(Text_Text.Text, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
});
