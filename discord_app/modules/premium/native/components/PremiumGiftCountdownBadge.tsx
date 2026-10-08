// === Module 10097: PremiumGiftCountdownBadge ===

// Module 10097 (PremiumGiftCountdownBadge)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import Text_Text from "Text/Text" /* 5086 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let closure_6 = createStyles.createStyles(() => {
  const obj = { badge: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, text: null };
  const obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
  const space = nativeDefault.space;
  const obj4 = { lineHeight: PlatformUtils.isAndroid() ? space.PX_12 : space.PX_16, paddingVertical: null };
  const isAndroidResult = PlatformUtils.isAndroid();
  let PX_4;
  if (tmp3Result.isAndroid()) {
    PX_4 = nativeDefault.space.PX_4;
  }
  obj4.paddingVertical = PX_4;
  obj.text = obj4;
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/components/PremiumGiftCountdownBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumGiftCountdownBadge(arg0) {
  const cResult = c.c(12);
  ({ text, icon, style } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.badge) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== text) {
      const formatted = text.toUpperCase();
      cResult[3] = text;
      cResult[4] = formatted;
      let tmp6 = formatted;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp4.text) {
      if (cResult[6] === tmp6) {
        let tmp8 = cResult[7];
      }
      if (cResult[8] === icon) {
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp8) {
            let tmp11 = cResult[11];
          }
          return tmp11;
        }
      }
      const obj2 = { style: tmp5, children: null };
      const items = [icon, tmp8];
      obj2.children = items;
      const tmp14 = hasOwnProperty(View, obj2);
      cResult[8] = icon;
      cResult[9] = tmp5;
      cResult[10] = tmp8;
      cResult[11] = tmp14;
      tmp11 = tmp14;
    }
    const obj3 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp4.text, children: tmp6 };
    const tmp10 = React4(Text_Text.Text, obj3);
    cResult[5] = tmp4.text;
    cResult[6] = tmp6;
    cResult[7] = tmp10;
    tmp8 = tmp10;
  }
  const items1 = [tmp4.badge, style];
  cResult[0] = style;
  cResult[1] = tmp4.badge;
  cResult[2] = items1;
  tmp5 = items1;
}) : (function PremiumGiftCountdownBadge(text) {
  ({ icon, style } = text);
  const tmp = closure_6();
  const obj = { style: null, children: null };
  const items = [tmp.badge, style];
  obj.style = items;
  const items1 = [icon, React4(Text_Text.Text, { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.text, children: text.text.toUpperCase() })];
  obj.children = items1;
  return hasOwnProperty(View, obj);
});