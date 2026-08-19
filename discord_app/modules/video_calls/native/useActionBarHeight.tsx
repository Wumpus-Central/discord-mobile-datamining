// === Module 8693: sum ===

// Module 8693 (sum)
import initialize from "initialize" /* 589 */;
import useIsFiveButtonLayout from "useIsFiveButtonLayout" /* 8697 */;
import useCanCurrentUserSpeakInChannelDefault from "useCanCurrentUserSpeakInChannel" /* 10526 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import { InputModes } from "ME" /* 676 */;
import { ACTION_SHEET_HANDLE_SPACING as closure_5 } from "ACTION_SHEET_START_HEIGHT_RATIO" /* 6951 */;

require = fn;
let sum = 2 * require("ActionButton").SMALL_ACTION_BUTTON_DIMENSIONS.buttonRadius + 16 + 16;
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/useActionBarHeight.tsx");

export default function useActionBarHeight(id) {
  const isFiveButtonLayout = useIsFiveButtonLayout.useIsFiveButtonLayout(id);
  const tmp2 = useCanCurrentUserSpeakInChannelDefault(id);
  const items = [closure_3];
  let num = 88;
  const stateFromStores = initialize.useStateFromStores(items, () => mode.getMode() === constants.PUSH_TO_TALK);
  if (isFiveButtonLayout) {
    num = closure_6;
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