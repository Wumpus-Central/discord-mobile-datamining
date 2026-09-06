// discord_app/design/components/Icon/native/redesign/generated/CopyIcon.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../BaseIconImage.tsx";
import _mod4508 from "../../../../../../../_runtime/metro/04508__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/CopyIcon.tsx");

export const CopyIcon = function CopyIcon(tmp6Result) {
  let INTERACTIVE_ICON_DEFAULT = tmp6Result.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(tmp6Result, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, {
    source: _mod4508,
    color: INTERACTIVE_ICON_DEFAULT,
    style: tmp6Result.style,
  });
};
