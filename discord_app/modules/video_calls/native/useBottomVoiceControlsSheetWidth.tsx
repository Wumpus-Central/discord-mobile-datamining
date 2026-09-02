// === Module 9559: useBottomVoiceControlsSheetWidth ===

// Module 9559 (useBottomVoiceControlsSheetWidth)
import set from "set" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH" /* 9534 */;

({ BOX_MODE_ACTIONSHEET_WIDTH: obj1, BOX_MODE_THRESHOLD_WIDTH: c3 } = BOX_MODE_ACTIONSHEET_WIDTH);
const result = set.fileFinishedImporting("modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx");

export default function useBottomVoiceControlsSheetWidth() {
  let width = useWindowDimensionsDefault().width;
  if (width > closure_3) {
    width = closure_2;
  }
  return width;
};