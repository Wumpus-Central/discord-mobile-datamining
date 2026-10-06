// === Module 9111: useActionBarHeight ===

// Module 9111 (useActionBarHeight)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6653 */;
import CallBarAction from "CallBarAction" /* 9112 */;
import useIsFiveButtonLayout from "useIsFiveButtonLayout" /* 9115 */;
import useCanSpeakInChannelDefault from "useCanSpeakInChannel" /* 9118 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const InputModes = Constants.InputModes;
let closure_5 = ActionSheetConstants.ACTION_SHEET_HANDLE_SPACING;
const sum = 2 * CallBarAction.SMALL_ACTION_BUTTON_DIMENSIONS.buttonRadius + 16 + 16;
let metroRequire = sum;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let mode;
  let tmp6;
  let tmp7;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = useIsFiveButtonLayout;
  const isFiveButtonLayout = obj2.useIsFiveButtonLayout(arg0);
  const tmp5 = useCanSpeakInChannelDefault(arg0);
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
  let num3 = 88;
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (isFiveButtonLayout) {
    num3 = metroRequire;
  }
  let num4 = 0;
  metroRequire = num3 + closure_5;
  if (stateFromStores) {
    num4 = 0;
    if (tmp5) {
      num4 = 56;
    }
  }
  return metroRequire + num4;
}) : ((arg0) => {
  let mode;
  const obj = useIsFiveButtonLayout;
  const isFiveButtonLayout = obj.useIsFiveButtonLayout(arg0);
  const items = [MediaEngineStore];
  let num = 88;
  const tmp2 = useCanSpeakInChannelDefault(arg0);
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => mode.getMode() === constants.PUSH_TO_TALK);
  if (isFiveButtonLayout) {
    num = metroRequire;
  }
  let num2 = 0;
  metroRequire = num + closure_5;
  if (stateFromStores) {
    num2 = 0;
    if (tmp2) {
      num2 = 56;
    }
  }
  return metroRequire + num2;
});
const result = size.fileFinishedImporting("modules/video_calls/native/useActionBarHeight.tsx");

export default tmp3;
export const CALL_ACTION_BAR_HEIGHT = 88;
export const FIVE_BUTTON_CONTAINER_PADDING_TOP = 16;
export const FIVE_BUTTON_CONTAINER_PADDING_BOTTOM = 16;
export const FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT = sum;