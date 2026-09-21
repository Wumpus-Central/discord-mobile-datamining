// === Module 11017: PremiumGiftCountdownBadge ===

// Module 11017 (PremiumGiftCountdownBadge)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4752 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
let closure_6 = createStyles.createStyles(() => {
  const obj = { badge: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/components/PremiumGiftCountdownBadge.tsx");

export default function PremiumGiftCountdownBadge(text) {
  ({ icon, style } = text);
  const obj = { style: null, children: null };
  const items = [closure_6().badge, style];
  obj.style = items;
  const items1 = [icon, React4(Text_Text.Text, { variant: "text-xs/bold", color: "text-overlay-light", children: text.text.toUpperCase() })];
  obj.children = items1;
  return hasOwnProperty(View, obj);
};