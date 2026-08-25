// === Module 7887: BuyNitroSectionHeader ===

// Module 7887 (BuyNitroSectionHeader)
import set from "set" /* 2 */;
import Text from "Text" /* 4376 */;
import jsxProd from "jsxProd" /* 21 */;

({ jsx: obj1, Fragment: c3, jsxs: c4 } = jsxProd);
const Nitro = "Nitro";
const result = set.fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroSectionHeader.tsx");

export default function BuyNitroSectionHeader(arg0) {
  ({ title, titleRequiresNitroHack } = arg0);
  ({ style, onPress } = arg0);
  if (titleRequiresNitroHack === undefined) {
    titleRequiresNitroHack = false;
  }
  let obj = { variant: "text-sm/semibold", color: "text-default", accessibilityRole: "header", style, children: null };
  let tmp4 = title;
  if (titleRequiresNitroHack) {
    const index = title.indexOf(Nitro);
    let tmp7 = title;
    if (-1 !== index) {
      obj = { children: null };
      const items = [title.slice(0, index), , ];
      obj = { variant: "text-sm/semibold", color: "text-link", accessibilityRole: "link", onPress: null, children: null };
      obj[3] = onPress;
      obj[4] = tmp5;
      items[1] = tmp(Text.Text, obj);
      items[2] = title.slice(index + 5);
      obj[0] = items;
      tmp7 = callback(closure_3, obj);
    }
    tmp4 = tmp7;
    tmp5 = Nitro;
  }
  obj[4] = tmp4;
  return closure_2(Text.Text, obj);
};