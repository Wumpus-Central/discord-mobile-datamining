// discord_app/design/components/Icon/native/redesign/generated/ChannelListIcon.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../BaseIconImage.tsx";
import _mod19647 from "../../../../../../../_runtime/metro/19647__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ChannelListIcon.tsx");

export function ChannelListIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod19647, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
}
