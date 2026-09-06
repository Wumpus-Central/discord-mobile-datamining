// === Module 11655: SummaryActionSheetButton ===

// Module 11655 (SummaryActionSheetButton)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { container: { flexDirection: "column", justifyContent: "center", alignItems: "center", paddingVertical: 8, width: 78 }, iconBox: null, icon: null, name: null };
createStyles = { borderRadius: nativeDefault.radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
createStyles.iconBox = createStyles;
createStyles.icon = { margin: 12, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.name = { textAlign: "center", marginTop: 8 };
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/summaries/native/SummaryActionSheetButton.tsx");

export const SummaryActionSheetButton = function SummaryActionSheetButton(label) {
  label = label.label;
  ({ iconSource, onPress } = label);
  const tmp = closure_5();
  let obj = { style: tmp.container, onPress, accessibilityRole: "button", accessibilityLabel: label, children: null };
  obj = { style: null, children: null };
  const items = [tmp.iconBox];
  obj.style = items;
  obj = { style: tmp.icon, source: iconSource };
  obj.children = React3(native.Icon, obj);
  const items1 = [React3(View, obj), React3(Text_Text.Text, { style: tmp.name, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: label })];
  obj.children = items1;
  return React4(Pressables.PressableOpacity, obj);
};