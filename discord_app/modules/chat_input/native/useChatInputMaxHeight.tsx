import { KeyboardTypes } from "../../keyboard/native/KeyboardTypes.tsx";
import { useCustomKeyboardHeight } from "../../keyboard/native/useCustomKeyboardHeight.tsx";
import { useKeyboardType } from "../../keyboard/native/useKeyboardType.tsx";
import { useSystemKeyboardHeight } from "../../keyboard/native/useSystemKeyboardHeight.native.tsx";
// discord_app/modules/chat_input/native/useChatInputMaxHeight.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";
import { CHAT_INPUT_PILL_CONTENT_SIZE as closure_6 } from "TextAreaCta";

const require = arg1;
function getChatInputMaxHeight() {
  let systemKeyboardHeight = useSystemKeyboardHeight /* useSystemKeyboardHeight */.getSystemKeyboardHeight();
  const obj = useSystemKeyboardHeight /* useSystemKeyboardHeight */;
  const tmp = require;
  const customKeyboardHeight = useCustomKeyboardHeight /* useCustomKeyboardHeight */.getCustomKeyboardHeight();
  const obj2 = useCustomKeyboardHeight /* useCustomKeyboardHeight */;
  const keyboardType = useKeyboardType /* useKeyboardType */.getKeyboardType();
  if (keyboardType !== KeyboardTypes /* KeyboardTypes */.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  const obj3 = useKeyboardType /* useKeyboardType */;
  return Math.min(200, Math.max(2 * closure_6, tmp(1474).getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - 200));
}
const result = require("subscribeToKeyboardUIStore").fileFinishedImporting("modules/chat_input/native/useChatInputMaxHeight.tsx");

export default function useChatInputMaxHeight(arg0) {
  let closure_0 = arg0;
  let tmp = callback(React.useState(getChatInputMaxHeight), 2);
  let closure_1 = tmp[1];
  const items = [arg0];
  const effect = React.useEffect(() => {
    function maybeUpdateMaxHeight() {
      callback2((arg0) => {
        let systemKeyboardHeight = outer1_0(outer1_2[4]).getSystemKeyboardHeight();
        const obj = outer1_0(outer1_2[4]);
        const tmp = outer1_0;
        const tmp2 = outer1_2;
        const customKeyboardHeight = outer1_0(outer1_2[5]).getCustomKeyboardHeight();
        const obj2 = outer1_0(outer1_2[5]);
        const keyboardType = outer1_0(outer1_2[6]).getKeyboardType();
        if (keyboardType !== outer1_0(outer1_2[7]).KeyboardTypes.SYSTEM) {
          systemKeyboardHeight = customKeyboardHeight;
        }
        let tmp6 = arg0;
        const obj3 = outer1_0(outer1_2[6]);
        const bound = Math.min(200, Math.max(2 * outer1_6, tmp(tmp2[8]).getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - 200));
        if (arg0 !== bound) {
          tmp6 = bound;
          if (callback != null) {
            callback();
            tmp6 = bound;
          }
        }
        return tmp6;
      });
    }
    let closure_0 = callback(outer1_2[9])(maybeUpdateMaxHeight);
    callback = outer1_5(maybeUpdateMaxHeight);
    return () => {
      callback();
      callback2();
    };
  }, items);
  return tmp[0];
};
export function getChatInputMinHeight() {
  return closure_6;
}
export { getChatInputMaxHeight };
export const getChatInputHeightAnimationTiming = function getChatInputHeightAnimationTiming(height) {
  let obj = useSystemKeyboardHeight /* useSystemKeyboardHeight */;
  let systemKeyboardHeight = obj.getSystemKeyboardHeight();
  const customKeyboardHeight = useCustomKeyboardHeight /* useCustomKeyboardHeight */.getCustomKeyboardHeight();
  const obj2 = useCustomKeyboardHeight /* useCustomKeyboardHeight */;
  const keyboardType = useKeyboardType /* useKeyboardType */.getKeyboardType();
  if (keyboardType !== KeyboardTypes /* KeyboardTypes */.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  let tmpResult = tmp(1474);
  const bound = Math.min(height, Math.min(200, Math.max(2 * closure_6, tmpResult.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - 200)));
  tmpResult = tmp(4286);
  obj = { duration: tmp(4289).timingFastDuration, easing: tmp(4146).Easing.linear };
  return tmpResult.withTiming(bound, obj);
};