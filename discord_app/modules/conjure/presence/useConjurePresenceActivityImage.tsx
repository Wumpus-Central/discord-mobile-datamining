// === Module 14848: useConjurePresenceActivityImage ===

// Module 14848 (useConjurePresenceActivityImage)
import shared from "shared" /* 5021 */;
import useThemeDefault from "useTheme" /* 5253 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14849 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};