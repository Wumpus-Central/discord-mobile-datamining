// === Module 10487: PremiumGiftCountdownBadge ===

// Module 10487 (PremiumGiftCountdownBadge)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Text_Text from "Text/Text" /* 4886 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles(() => {
  let PX_4;
  let obj4;
  const obj = { badge: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, text: obj4 };
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND });
  const obj3 = PlatformUtils;
  const isAndroidResult = obj3.isAndroid();
  const space = nativeDefault.space;
  obj4 = { lineHeight: isAndroidResult ? space.PX_12 : space.PX_16, paddingVertical: PX_4 };
  PX_4 = undefined;
  const tmp3Result = PlatformUtils;
  if (tmp3Result.isAndroid()) {
    PX_4 = nativeDefault.space.PX_4;
  }
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let icon;
  let items;
  let style;
  let text;
  const obj = react2;
  const cResult = obj.c(12);
  ({ text, icon, style } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === style) {
    let tmp5;
    let tmp6;
    if (cResult[1] === tmp4.badge) {
      tmp5 = cResult[2];
    }
    const text2 = tmp4.text;
    if (cResult[3] !== text) {
      const formatted = text.toUpperCase();
      cResult[3] = text;
      cResult[4] = formatted;
      tmp6 = formatted;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp4.text) {
      let tmp8;
      if (cResult[6] === tmp6) {
        tmp8 = cResult[7];
      }
      if (cResult[8] === icon) {
        if (cResult[9] === tmp5) {
          let tmp11;
          if (cResult[10] === tmp8) {
            tmp11 = cResult[11];
          }
          return tmp11;
        }
      }
      const obj2 = { style: tmp5, children: items };
      items = [icon, tmp8];
      const tmp14 = hasOwnProperty(View, obj2);
      cResult[8] = icon;
      cResult[9] = tmp5;
      cResult[10] = tmp8;
      cResult[11] = tmp14;
      tmp11 = tmp14;
    }
    const obj3 = { variant: "text-xs/bold", color: "text-overlay-light", style: text2, children: tmp6 };
    const tmp10 = React3(Text_Text.Text, obj3);
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
}) : ((text) => {
  let icon;
  let items;
  let items1;
  let style;
  const str = text.text;
  ({ icon, style } = text);
  const tmp = closure_6();
  const obj = { style: items, children: items1 };
  items = [tmp.badge, style];
  items1 = [icon, ];
  const obj2 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.text, children: str.toUpperCase() };
  const Text = Text_Text.Text;
  items1[1] = React3(Text, obj2);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/premium/native/components/PremiumGiftCountdownBadge.tsx");

export default tmp4;