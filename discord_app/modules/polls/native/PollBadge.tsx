// discord_app/modules/polls/native/PollBadge.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _modDef16672 from "../../../../_runtime/metro/16672__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, text: null };
createStyles = {
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  color: nativeDefault.colors.TEXT_MUTED,
  flexDirection: "row",
  alignItems: "center",
};
createStyles.container = createStyles;
createStyles.text = { marginLeft: 4, textTransform: "uppercase" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/native/PollBadge.tsx");

export default function PollBadge(style) {
  const tmp = closure_6();
  let obj = { style: null, children: null };
  const items = [tmp.container, style.style];
  obj.style = items;
  obj = { size: native.IconSizes.EXTRA_SMALL_10, source: _modDef16672 };
  const items1 = [React4(native.Icon, obj)];
  obj = { style: tmp.text, variant: "text-xs/semibold", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.RgIi2B);
  items1[1] = React4(Text_Text.Text, obj);
  obj.children = items1;
  return hasOwnProperty(View, obj);
}
