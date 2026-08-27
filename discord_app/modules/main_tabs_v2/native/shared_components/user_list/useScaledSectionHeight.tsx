// === Module 10214: useScaledSectionHeight ===

// Module 10214 (useScaledSectionHeight)
import set from "set" /* 2 */;
import getFontScale from "getFontScale" /* 4887 */;
import PX_24 from "PX_24" /* 10215 */;

({ USERS_LIST_SECTION_HEIGHT: obj1, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = PX_24);
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default function useScaledSectionHeight() {
  return closure_2 + Math.max(Math.min(getFontScale.useFontScale(), 2) * closure_3 - closure_3, 0);
};