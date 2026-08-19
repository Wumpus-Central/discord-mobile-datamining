// === Module 8026: BuyNitroSectionHeader ===

// Module 8026 (BuyNitroSectionHeader)
import obj132 from "obj132" /* 2 */;
import Text from "Text" /* 4734 */;
import jsxProd from "jsxProd" /* 21 */;

({ jsx: obj1, Fragment: c3, jsxs: c4 } = jsxProd);
const Nitro = "Nitro";
const result = obj132.fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroSectionHeader.tsx");

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
      const items = [title.slice(0, index), , ];
      obj = { variant: "text-sm/semibold", color: "text-link", accessibilityRole: "link", onPress: null, children: null };
      obj[3] = onPress;
      obj[4] = Nitro;
      items[1] = callback(Text.Text, obj);
      items[2] = title.slice(index + 5);
      obj[0] = items;
      tmp7 = callback(closure_3, obj);
    }
    tmp4 = tmp7;
  }
  obj[4] = tmp4;
  return callback(Text.Text, obj);
};