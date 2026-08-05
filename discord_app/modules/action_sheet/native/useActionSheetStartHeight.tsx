// discord_app/modules/action_sheet/native/useActionSheetStartHeight.tsx
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_2 } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { useWindowDimensions } from "../../screen/useWindowDimensions.native.tsx";

const result = require("set").fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return useWindowDimensions().height * closure_2;
};