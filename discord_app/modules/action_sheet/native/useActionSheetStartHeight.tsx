// discord_app/modules/action_sheet/native/useActionSheetStartHeight.tsx
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import ActionSheetConstants from "ActionSheetConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const result = size.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return useWindowDimensionsDefault().height * closure_2;
}
