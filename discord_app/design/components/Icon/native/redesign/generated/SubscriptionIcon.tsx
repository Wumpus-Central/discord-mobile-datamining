// discord_app/design/components/Icon/native/redesign/generated/SubscriptionIcon.tsx
import noopAll from "../../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../BaseIconImage.tsx";
import registerAsset from "../../../../../../../_runtime/14345_registerAsset.js";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Icon/native/redesign/generated/SubscriptionIcon.tsx");

export const SubscriptionIcon = function SubscriptionIcon(color) {
  let ICON_STRONG = color.color;
  if (ICON_STRONG === undefined) {
    ICON_STRONG = ThemesDefault.colors.ICON_STRONG;
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: ICON_STRONG, style: color.style });
};