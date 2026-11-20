// === Module 14332: useConjurePresenceActivityImage ===

// Module 14332 (useConjurePresenceActivityImage)
import shared from "shared" /* 4801 */;
import useThemeDefault from "useTheme" /* 5003 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14333 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};