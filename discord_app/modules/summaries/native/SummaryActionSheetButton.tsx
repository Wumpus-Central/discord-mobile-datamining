// === Module 11910: SummaryActionSheetButton ===

// Module 11910 (SummaryActionSheetButton)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4753 */;
import Pressables from "Pressables" /* 5341 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { container: { flexDirection: "column", justifyContent: "center", alignItems: "center", paddingVertical: 8, width: 78 }, iconBox: null, icon: null, name: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.iconBox = { borderRadius: nativeDefault.radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const obj3 = { borderRadius: nativeDefault.radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.icon = { margin: 12, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.name = { textAlign: "center", marginTop: 8 };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/summaries/native/SummaryActionSheetButton.tsx");

export const SummaryActionSheetButton = function SummaryActionSheetButton(label) {
  label = label.label;
  ({ iconSource, onPress } = label);
  const tmp = closure_5();
  const obj = { style: tmp.container, onPress, accessibilityRole: "button", accessibilityLabel: label, children: null };
  const obj2 = { style: null, children: React3(native.Icon, { style: tmp.icon, source: iconSource }) };
  const items = [tmp.iconBox];
  obj2.style = items;
  const items1 = [React3(View, obj2), React3(Text_Text.Text, { style: tmp.name, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: label })];
  obj.children = items1;
  return React4(Pressables.PressableOpacity, obj);
};