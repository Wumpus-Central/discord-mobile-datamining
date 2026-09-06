// discord_app/design/components/Icon/native/redesign/generated/StarIcon.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../BaseIconImage.tsx";
import _mod10236 from "../../../../../../../_runtime/metro/10236__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/StarIcon.tsx");

export const StarIcon = function StarIcon(YELLOW_300) {
  let INTERACTIVE_ICON_DEFAULT = YELLOW_300.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(YELLOW_300, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, {
    source: _mod10236,
    color: INTERACTIVE_ICON_DEFAULT,
    style: YELLOW_300.style,
  });
};
