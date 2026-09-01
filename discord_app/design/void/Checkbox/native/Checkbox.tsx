// discord_app/design/void/Checkbox/native/Checkbox.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import { Image } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

noopAll;
const result = require("set").fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj[1] = tmp3(13730);
    let tmp5 = obj;
  } else {
    obj[1] = tmp3(13731);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
}
