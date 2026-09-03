// discord_app/modules/display_name_styles/native/showGummyCustomColorSheet.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02008_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const DisplayNameStylesGummyCustomColorSheet = "DisplayNameStylesGummyCustomColorSheet";
const result = set.fileFinishedImporting("modules/display_name_styles/native/showGummyCustomColorSheet.tsx");

export default function showGummyCustomColorSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(
    asyncRequireImpl(15187, dependencyMap.paths),
    DisplayNameStylesGummyCustomColorSheet,
    arg0,
    "stack",
  );
}
export const DISPLAY_NAME_STYLES_GUMMY_CUSTOM_COLOR_SHEET_KEY = "DisplayNameStylesGummyCustomColorSheet";
