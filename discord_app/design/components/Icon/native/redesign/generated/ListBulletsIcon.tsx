// discord_app/design/components/Icon/native/redesign/generated/ListBulletsIcon.tsx
import "noop";
import { jsx } from "jsxProd";
import { registerAsset } from "../../../../../../../_runtime/16525_registerAsset.js";
import { Themes } from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import { BaseIconImage } from "../../BaseIconImage.tsx";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/ListBulletsIcon.tsx");

export const ListBulletsIcon = function ListBulletsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = Themes.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = registerAsset;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: null, color: null, style: null });
};