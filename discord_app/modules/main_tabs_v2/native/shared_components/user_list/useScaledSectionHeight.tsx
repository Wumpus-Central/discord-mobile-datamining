// === Module 10212: useScaledSectionHeight ===

// Module 10212 (useScaledSectionHeight)
import useFontScale from "useFontScale" /* 4982 */;
import UsersFastListConstants from "UsersFastListConstants" /* 10213 */;
import size from "module_2" /* 2 */;

({ USERS_LIST_SECTION_HEIGHT: c2, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = UsersFastListConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default function useScaledSectionHeight() {
  return React2 + Math.max(Math.min(useFontScale.useFontScale(), 2) * React3 - React3, 0);
};