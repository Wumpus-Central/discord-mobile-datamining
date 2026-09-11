// === Module 12677: BoostGemSlashIcon ===

// Module 12677 (BoostGemSlashIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod12678 from "module_12678" /* 12678 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/BoostGemSlashIcon.tsx");

export const BoostGemSlashIcon = function BoostGemSlashIcon(isTierUnlocked) {
  let INTERACTIVE_ICON_DEFAULT = isTierUnlocked.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(isTierUnlocked, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod12678, color: INTERACTIVE_ICON_DEFAULT, style: isTierUnlocked.style });
};