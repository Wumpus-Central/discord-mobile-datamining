// === Module 10571: PremiumExpressionPickerSearchUpsell ===

// Module 10571 (PremiumExpressionPickerSearchUpsell)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4752 */;
import Pressables from "Pressables" /* 5334 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const sum = 56 + nativeDefault.space.PX_8;
const createStyles = fn(4756);
let obj2 = { container: { paddingTop: nativeDefault.space.PX_8 }, upsell: null, content: null };
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj2.upsell = { height: 56, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" };
obj2.content = { flex: 0.8, flexDirection: "row" };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumExpressionPickerSearchUpsell.tsx");

export default function PremiumExpressionPickerSearchUpsell(arg0) {
  ({ body, ctaText, icon, loading, onPress } = arg0);
  const tmp = closure_5();
  const obj = { style: tmp.container, collapsable: false, children: null };
  const obj2 = { style: tmp.upsell, accessibilityRole: "button", disabled: loading, onPress, children: null };
  const obj3 = { style: tmp.content, children: null };
  const items = [icon, React3(Text_Text.Text, { lineClamp: 2, variant: "text-sm/medium", color: "interactive-text-active", children: body })];
  obj3.children = items;
  const items1 = [React4(View, obj3), React3(Text_Text.Text, { variant: "text-sm/medium", color: "text-link", children: ctaText })];
  obj2.children = items1;
  obj.children = React4(Pressables.PressableOpacity, obj2);
  return React3(View, obj);
};
export const PREMIUM_EXPRESSION_PICKER_SEARCH_UPSELL_HEIGHT = sum;