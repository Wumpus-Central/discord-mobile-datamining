// === Module 19823: useAccessiblePTT ===

// Module 19823 (useAccessiblePTT)
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5505 */;
import useStableCallbackDefault from "useStableCallback" /* 7724 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 19735 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useAccessiblePTT.tsx");

export default function useAccessiblePTT(arg0, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  const tmp2 = useIsConnectedToVoiceChannelDefault(arg0);
  closure_3 = tmp2;
  noop.useRef(false);
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  closure_5 = tmp3[1];
  items = [arg1, arg2];
  const callback = noop.useCallback((current) => {
    if (ref.current !== current) {
      ref.current = current;
      closure_5(current);
      if (current) {
        closure_0();
      } else {
        closure_1();
      }
    }
  }, items);
  const items1 = [tmp2, isScreenReaderEnabled, callback];
  const items2 = [isScreenReaderEnabled, callback];
  const callback1 = noop.useCallback(() => {
    let tmp = closure_3;
    if (closure_3) {
      tmp = !isScreenReaderEnabled;
    }
    if (tmp) {
      callback(true);
    }
  }, items1);
  const items3 = [tmp2, isScreenReaderEnabled, callback];
  const callback2 = noop.useCallback(() => {
    if (!isScreenReaderEnabled) {
      callback(false);
    }
  }, items2);
  const callback3 = noop.useCallback(() => {
    let tmp = closure_3;
    if (closure_3) {
      tmp = isScreenReaderEnabled;
    }
    if (tmp) {
      callback(!ref.current);
    }
  }, items3);
  const tmp8 = useStableCallbackDefault(() => callback(false));
  closure_7 = tmp8;
  const items4 = [arg0, tmp2, isScreenReaderEnabled, tmp8];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (!closure_3) {
      closure_7();
    }
    return closure_7;
  }, items4);
  const obj2 = { isScreenReaderEnabled, startGesture: callback1, endGesture: callback2, accessibilityProps: null };
  const obj3 = { onPress: callback3, accessibilityRole: null, accessibilityState: null };
  let str = "button";
  if (isScreenReaderEnabled) {
    str = "togglebutton";
  }
  obj3.accessibilityRole = str;
  let tmp10;
  if (isScreenReaderEnabled) {
    const obj4 = { checked: tmp3[0] };
    tmp10 = obj4;
  }
  obj3.accessibilityState = tmp10;
  obj2.accessibilityProps = obj3;
  return obj2;
};