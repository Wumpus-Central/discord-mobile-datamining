// discord_app/design/components/Icon/native/redesign/generated/ConnectionFineIcon.tsx
import noopAll from "../../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../BaseIconImage.tsx";
import registerAsset from "../../../../../../../_runtime/16238_registerAsset.js";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting(
  "design/components/Icon/native/redesign/generated/ConnectionFineIcon.tsx",
);

export const ConnectionFineIcon = function ConnectionFineIcon(color) {
  let ICON_FEEDBACK_POSITIVE = color.color;
  if (ICON_FEEDBACK_POSITIVE === undefined) {
    ICON_FEEDBACK_POSITIVE = ThemesDefault.colors.ICON_FEEDBACK_POSITIVE;
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: ICON_FEEDBACK_POSITIVE, style: color.style });
};
