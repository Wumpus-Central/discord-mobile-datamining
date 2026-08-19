// discord_app/modules/action_sheet/native/useActionSheetStartHeight.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import ACTION_SHEET_START_HEIGHT_RATIO from "ActionSheetConstants.tsx";

let closure_2 = ACTION_SHEET_START_HEIGHT_RATIO.ACTION_SHEET_START_HEIGHT_RATIO;
const result = obj132.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return useWindowDimensionsDefault().height * closure_2;
};