// discord_app/design/components/Icon/native/redesign/generated/SubscriptionIcon.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../BaseIconImage.tsx";
import _mod14988 from "../../../../../../../_runtime/metro/14988__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/SubscriptionIcon.tsx");

export const SubscriptionIcon = function SubscriptionIcon(color) {
  let ICON_STRONG = color.color;
  if (ICON_STRONG === undefined) {
    ICON_STRONG = nativeDefault.colors.ICON_STRONG;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod14988, color: ICON_STRONG, style: color.style });
};
