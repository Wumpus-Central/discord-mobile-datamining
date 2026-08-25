// discord_app/design/components/Icon/native/redesign/generated/XNeutralIcon.tsx
import noopAll from "../../../../../../../_runtime/00019_noop.js";
import BaseIconImage from "../../BaseIconImage.tsx";
import registerAsset from "../../../../../../../_runtime/08351_registerAsset.js";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Icon/native/redesign/generated/XNeutralIcon.tsx");

export const XNeutralIcon = function XNeutralIcon(color) {
  let str = color.color;
  if (str === undefined) {
    str = "#4E5058";
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: str, style: color.style });
};