// === Module 9496: sum ===

// Module 9496 (sum)
import initialize from "initialize" /* 504 */;
import useIsFiveButtonLayout from "useIsFiveButtonLayout" /* 9500 */;
import useCanCurrentUserSpeakInChannelDefault from "useCanCurrentUserSpeakInChannel" /* 9583 */;
import closure_3 from "_detectH265HardwareDecode" /* 1908 */;
import { InputModes } from "ME" /* 1074 */;
import { ACTION_SHEET_HANDLE_SPACING as closure_5 } from "ACTION_SHEET_START_HEIGHT_RATIO" /* 7151 */;

require = arg1;
let sum = 2 * require("ActionButton").SMALL_ACTION_BUTTON_DIMENSIONS.buttonRadius + 16 + 16;
const result = require("set").fileFinishedImporting("modules/video_calls/native/useActionBarHeight.tsx");

export default function useActionBarHeight(id) {
  const isFiveButtonLayout = useIsFiveButtonLayout.useIsFiveButtonLayout(id);
  const obj = useIsFiveButtonLayout;
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