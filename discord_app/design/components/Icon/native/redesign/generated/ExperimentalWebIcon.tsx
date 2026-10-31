// discord_app/design/components/Icon/native/redesign/generated/ExperimentalWebIcon.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../BaseIconImage.tsx";
import _mod11334 from "../../../../../../../_runtime/metro/11334__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ExperimentalWebIcon.tsx");

export function ExperimentalWebIcon(dependencyMap) {
  let INTERACTIVE_ICON_DEFAULT = dependencyMap.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(dependencyMap, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, {
    source: _mod11334,
    color: INTERACTIVE_ICON_DEFAULT,
    style: dependencyMap.style,
  });
}
