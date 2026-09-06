// discord_app/design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../BaseIconImage.tsx";
import _mod8123 from "../../../../../../../_runtime/metro/08123__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx");

export const ShieldUserIcon = function ShieldUserIcon(tmp2Result) {
  let INTERACTIVE_ICON_DEFAULT = tmp2Result.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(tmp2Result, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, {
    source: _mod8123,
    color: INTERACTIVE_ICON_DEFAULT,
    style: tmp2Result.style,
  });
};
