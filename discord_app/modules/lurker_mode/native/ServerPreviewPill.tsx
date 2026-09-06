// === Module 16179: ServerPreviewPill ===

// Module 16179 (ServerPreviewPill)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { pill: null, text: null };
createStyles = { paddingHorizontal: 10, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.WHITE };
createStyles.pill = createStyles;
createStyles.text = { color: nativeDefault.colors.BLACK, textTransform: "uppercase", letterSpacing: 0.5 };
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/lurker_mode/native/ServerPreviewPill.tsx");

export default function ServerPreviewPill() {
  const tmp = closure_4();
  let obj = { style: tmp.pill, accessibilityRole: "text", children: null };
  obj = { variant: "text-xs/bold", style: tmp.text, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.KNhFgD);
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/bold", style: tmp.text, children: null });
  return <View variant="text-xs/bold" style={tmp.text}>{null}</View>;
};