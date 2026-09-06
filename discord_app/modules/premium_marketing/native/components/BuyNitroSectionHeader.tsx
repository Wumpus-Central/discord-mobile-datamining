// discord_app/modules/premium_marketing/native/components/BuyNitroSectionHeader.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import size from "../../../../../_runtime/metro/00002__.js";

({ jsx: c2, Fragment: c3, jsxs: closure_4 } = jsxProd);
const Nitro = "Nitro";
const result = size.fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroSectionHeader.tsx");

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
      const items = [title.slice(0, index), ,];
      obj = { variant: "text-sm/semibold", color: "text-link", accessibilityRole: "link", onPress, children: Nitro };
      items[1] = React2(Text_Text.Text, obj);
      items[2] = title.slice(index + 5);
      obj.children = items;
      tmp7 = React4(React3, obj);
    }
    tmp4 = tmp7;
  }
  obj.children = tmp4;
  return React2(Text_Text.Text, obj);
}
