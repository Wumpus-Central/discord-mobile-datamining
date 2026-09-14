// === Module 16785: PollBadge ===

// Module 16785 (PollBadge)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1176 */;
import Text_Text from "Text/Text" /* 4632 */;
import _modDef16786 from "module_16786" /* 16786 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
const obj2 = { container: { borderRadius: nativeDefault.radii.round, paddingHorizontal: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, color: nativeDefault.colors.TEXT_MUTED, flexDirection: "row", alignItems: "center" }, text: { marginLeft: 4, textTransform: "uppercase" } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/native/PollBadge.tsx");

export default function PollBadge(style) {
  const tmp = closure_6();
  const obj = { style: null, children: null };
  const items = [tmp.container, style.style];
  obj.style = items;
  const items1 = [React4(native.Icon, { size: native.IconSizes.EXTRA_SMALL_10, source: _modDef16786 }), ];
  const obj3 = { style: tmp.text, variant: "text-xs/semibold", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.RgIi2B);
  items1[1] = React4(Text_Text.Text, obj3);
  obj.children = items1;
  return hasOwnProperty(View, obj);
};