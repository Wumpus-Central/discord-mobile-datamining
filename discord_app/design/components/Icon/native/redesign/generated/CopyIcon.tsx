// === Module 4584: CopyIcon ===

// Module 4584 (CopyIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4338 */;
import _mod4585 from "module_4585" /* 4585 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/CopyIcon.tsx");

export const CopyIcon = function CopyIcon(tmp6Result2) {
  let INTERACTIVE_ICON_DEFAULT = tmp6Result2.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(tmp6Result2, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod4585, color: INTERACTIVE_ICON_DEFAULT, style: tmp6Result2.style });
};