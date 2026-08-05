// discord_app/design/void/NitroWheel/native/NitroWheel.tsx
import "noop";
import { jsx } from "jsxProd";
import { registerAsset } from "../../../../../_runtime/08594_registerAsset.js";
import { preload } from "../../../../components_native/common/FastImage.tsx";

const result = require("preload").fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default function NitroWheel(style) {
  const obj = { source: null, style: null, resizeMode: "contain" };
  obj[0] = registerAsset;
  obj[1] = style.style;
  return jsx(preload, { source: null, style: null, resizeMode: "contain" });
};