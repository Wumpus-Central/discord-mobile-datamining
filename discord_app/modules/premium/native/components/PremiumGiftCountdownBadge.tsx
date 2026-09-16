// discord_app/modules/premium/native/components/PremiumGiftCountdownBadge.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4638);
let closure_6 = createStyles.createStyles(() => {
  const obj = {
    badge: {
      flexDirection: "row",
      alignItems: "center",
      gap: nativeDefault.space.PX_4,
      borderRadius: nativeDefault.radii.round,
      paddingHorizontal: nativeDefault.space.PX_8,
      backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
    },
  };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/components/PremiumGiftCountdownBadge.tsx");

export default function PremiumGiftCountdownBadge(text) {
  ({ icon, style } = text);
  const obj = { style: null, children: null };
  const items = [closure_6().badge, style];
  obj.style = items;
  const items1 = [
    icon,
    React4(Text_Text.Text, { variant: "text-xs/bold", color: "text-overlay-light", children: text.text.toUpperCase() }),
  ];
  obj.children = items1;
  return hasOwnProperty(View, obj);
}
