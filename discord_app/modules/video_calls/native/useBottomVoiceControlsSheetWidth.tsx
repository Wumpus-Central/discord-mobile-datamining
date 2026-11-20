// === Module 10539: useBottomVoiceControlsSheetWidth ===

// Module 10539 (useBottomVoiceControlsSheetWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10517 */;
import size from "module_2" /* 2 */;

({ BOX_MODE_ACTIONSHEET_WIDTH: c2, BOX_MODE_THRESHOLD_WIDTH: c3 } = ChannelCallConstants);
const result = size.fileFinishedImporting("modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx");

export default function useBottomVoiceControlsSheetWidth() {
  let width = useWindowDimensionsDefault().width;
  if (width > React3) {
    width = React2;
  }
  return width;
};