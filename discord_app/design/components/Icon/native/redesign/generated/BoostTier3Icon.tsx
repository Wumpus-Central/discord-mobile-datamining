// discord_app/design/components/Icon/native/redesign/generated/BoostTier3Icon.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/BoostTier3Icon.tsx");

export const BoostTier3Icon = function BoostTier3Icon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = require("../../../../../../../discord_common/js/packages/tokens/native.tsx").colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require("../../../../../../../_runtime/12702_registerAsset.js") /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require("../../BaseIconImage.tsx") /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};