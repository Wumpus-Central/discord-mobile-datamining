// discord_app/design/void/Checkbox/native/Checkbox.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj[1] = tmp3(13245);
    let tmp5 = obj;
  } else {
    obj[1] = tmp3(13246);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};