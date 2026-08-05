// discord_app/design/void/NitroWheel/native/NitroWheel.tsx
import "noop";
import { jsx } from "jsxProd";

const result = require("preload").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: null, style: null, resizeMode: "contain" };
  obj[0] = require("../../../../../_runtime/08622_registerAsset.js");
  obj[1] = style.style;
  return jsx(require("../../../../components_native/common/FastImage.tsx"), { source: null, style: null, resizeMode: "contain" });
};