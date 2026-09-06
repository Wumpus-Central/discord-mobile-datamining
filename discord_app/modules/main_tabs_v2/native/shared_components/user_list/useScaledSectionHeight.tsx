// discord_app/modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx
import useFontScale from "../../../../screen/native/useFontScale.tsx";
import UsersFastListConstants from "UsersFastListConstants.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

({ USERS_LIST_SECTION_HEIGHT: c2, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = UsersFastListConstants);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx",
);

export default function useScaledSectionHeight() {
  return React2 + Math.max(Math.min(useFontScale.useFontScale(), 2) * React3 - React3, 0);
}
