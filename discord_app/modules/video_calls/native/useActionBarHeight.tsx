// === Module 11886: useActionBarHeight ===

// Module 11886 (useActionBarHeight)
import initialize from "initialize" /* 504 */;
import useCanSpeakInChannelDefault from "useCanSpeakInChannel" /* 11350 */;
import useIsFiveButtonLayout from "useIsFiveButtonLayout" /* 11890 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;

require = fn;
const InputModes = fn(1072).InputModes;
let closure_5 = fn(5419).ACTION_SHEET_HANDLE_SPACING;
let sum = 2 * fn(11887).SMALL_ACTION_BUTTON_DIMENSIONS.buttonRadius + 16 + 16;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useActionBarHeight.tsx");

export default function useActionBarHeight(id) {
  const isFiveButtonLayout = useIsFiveButtonLayout.useIsFiveButtonLayout(id);
  const tmp2 = useCanSpeakInChannelDefault(id);
  items = [MediaEngineStore];
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