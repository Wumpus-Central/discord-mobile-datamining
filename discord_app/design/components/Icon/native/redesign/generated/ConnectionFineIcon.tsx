// discord_app/design/components/Icon/native/redesign/generated/ConnectionFineIcon.tsx
import "noop";
import { jsx } from "jsxProd";
import { registerAsset } from "../../../../../../../_runtime/15532_registerAsset.js";
import { Themes } from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import { BaseIconImage } from "../../BaseIconImage.tsx";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/ConnectionFineIcon.tsx");

export const ConnectionFineIcon = function ConnectionFineIcon(color) {
  let ICON_FEEDBACK_POSITIVE = color.color;
  if (ICON_FEEDBACK_POSITIVE === undefined) {
    ICON_FEEDBACK_POSITIVE = Themes.colors.ICON_FEEDBACK_POSITIVE;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = registerAsset;
  obj[1] = ICON_FEEDBACK_POSITIVE;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: null, color: null, style: null });
};