// === Module 8695: useBottomVoiceControlsSheetWidth ===

// Module 8695 (useBottomVoiceControlsSheetWidth)
import obj132 from "obj132" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH" /* 8670 */;

({ BOX_MODE_ACTIONSHEET_WIDTH: obj1, BOX_MODE_THRESHOLD_WIDTH: c3 } = BOX_MODE_ACTIONSHEET_WIDTH);
const result = obj132.fileFinishedImporting("modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx");

export default function useBottomVoiceControlsSheetWidth() {
  let width = useWindowDimensionsDefault().width;
  if (width > closure_3) {
    width = closure_2;
  }
  return width;
};