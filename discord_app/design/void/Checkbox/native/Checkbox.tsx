// === Module 13450: Checkbox ===

// Module 13450 (Checkbox)
import noopAll from "noop" /* 19 */;
import registerAssetDefault from "registerAsset" /* 13451 */;
import registerAssetDefault2 from "registerAsset" /* 13452 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
const result = require("obj132").fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj[1] = registerAssetDefault;
    let tmp5 = obj;
  } else {
    obj[1] = registerAssetDefault2;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};