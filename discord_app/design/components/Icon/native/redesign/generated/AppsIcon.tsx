// === Module 8112: AppsIcon ===

// Module 8112 (AppsIcon)
import nativeDefault from "native" /* 575 */;
import BaseIconImage from "BaseIconImage" /* 6013 */;
import _mod8049 from "module_8049" /* 8049 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/AppsIcon.tsx");

export function AppsIcon(dependencyMap) {
  let INTERACTIVE_ICON_DEFAULT = dependencyMap.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(dependencyMap, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8049, color: INTERACTIVE_ICON_DEFAULT, style: dependencyMap.style });
}