// discord_app/modules/video_calls/native/useActionBarHeight.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import useIsFiveButtonLayout from "useIsFiveButtonLayout.tsx";
import useCanSpeakInChannelDefault from "../../stage_channels/useCanSpeakInChannel.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";

require = fn;
const InputModes = fn(1085).InputModes;
let closure_5 = fn(6830).ACTION_SHEET_HANDLE_SPACING;
let sum = 2 * fn(10685).SMALL_ACTION_BUTTON_DIMENSIONS.buttonRadius + 16 + 16;
const metroRequire = sum;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useActionBarHeight.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useActionBarHeight(arg0) {
      const cResult = c.c(2);
      const isFiveButtonLayout = useIsFiveButtonLayout.useIsFiveButtonLayout(arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        const fn = function s() {
          return mode.getMode() === constants.PUSH_TO_TALK;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmp5 = useCanSpeakInChannelDefault(arg0);
      let num3 = 88;
      const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
      if (isFiveButtonLayout) {
        num3 = sum;
      }
      let num4 = 0;
      sum = num3 + closure_5;
      if (stateFromStores) {
        num4 = 0;
        if (tmp5) {
          num4 = 56;
        }
      }
      return sum + num4;
    }
  : function useActionBarHeight(arg0) {
      const isFiveButtonLayout = useIsFiveButtonLayout.useIsFiveButtonLayout(arg0);
      const tmp2 = useCanSpeakInChannelDefault(arg0);
      const items = [MediaEngineStore];
      let num = 88;
      const stateFromStores = initialize.useStateFromStores(items, () => mode.getMode() === constants.PUSH_TO_TALK);
      if (isFiveButtonLayout) {
        num = sum;
      }
      let num2 = 0;
      sum = num + closure_5;
      if (stateFromStores) {
        num2 = 0;
        if (tmp2) {
          num2 = 56;
        }
      }
      return sum + num2;
    };
export const CALL_ACTION_BAR_HEIGHT = 88;
export const FIVE_BUTTON_CONTAINER_PADDING_TOP = 16;
export const FIVE_BUTTON_CONTAINER_PADDING_BOTTOM = 16;
export const FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT = sum;
