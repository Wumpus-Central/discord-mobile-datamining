// discord_app/modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import ChannelCallConstants from "ChannelCallConstants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c2;
let c3;
({ BOX_MODE_ACTIONSHEET_WIDTH: c2, BOX_MODE_THRESHOLD_WIDTH: c3 } = ChannelCallConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let width = useWindowDimensionsDefault().width;
      if (width > _false) {
        width = React2;
      }
      return width;
    }
  : () => {
      let width = useWindowDimensionsDefault().width;
      if (width > _false) {
        width = React2;
      }
      return width;
    };
const result = size.fileFinishedImporting("modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx");

export default tmp3;
