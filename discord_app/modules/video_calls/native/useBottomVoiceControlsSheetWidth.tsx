// discord_app/modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import BOX_MODE_ACTIONSHEET_WIDTH from "ChannelCallConstants.tsx";

({ BOX_MODE_ACTIONSHEET_WIDTH: obj1, BOX_MODE_THRESHOLD_WIDTH: c3 } = BOX_MODE_ACTIONSHEET_WIDTH);
const result = obj132.fileFinishedImporting("modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx");

export default function useBottomVoiceControlsSheetWidth() {
  let width = useWindowDimensionsDefault().width;
  if (width > closure_3) {
    width = closure_2;
  }
  return width;
};