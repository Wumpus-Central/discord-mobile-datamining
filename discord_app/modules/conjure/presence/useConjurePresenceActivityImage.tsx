// === Module 14721: useConjurePresenceActivityImage ===

// Module 14721 (useConjurePresenceActivityImage)
import shared from "shared" /* 4924 */;
import useThemeDefault from "useTheme" /* 5126 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14722 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};