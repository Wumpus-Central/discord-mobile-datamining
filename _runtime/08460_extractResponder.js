// _runtime/08460_extractResponder.js
import _mod17 from "metro/00017__.js";

const PanResponder = _mod17.PanResponder;
const keys = Object.keys(PanResponder.create({}).panHandlers);

export default function extractResponder(arg0, pointerEvents, arg2) {
  pointerEvents = pointerEvents.pointerEvents;
  let num = 0;
  let flag = false;
  let flag2 = false;
  ({ onPress, disabled, onPressIn, onPressOut, onLongPress, delayPressIn, delayPressOut, delayLongPress } =
    pointerEvents);
  if (0 < length) {
    do {
      let tmp2 = keys[num];
      let tmp3 = pointerEvents[tmp2];
      let flag3 = flag;
      if (tmp3) {
        arg0[tmp2] = tmp3;
        flag3 = true;
      }
      num = num + 1;
      flag = flag3;
      flag2 = flag3;
    } while (num < length);
  }
  if (pointerEvents) {
    arg0.pointerEvents = pointerEvents;
  }
  if (tmp6) {
    ({
      touchableHandleResponderMove: arg0.onResponderMove,
      touchableHandleResponderGrant: arg0.onResponderGrant,
      touchableHandleResponderRelease: arg0.onResponderRelease,
      touchableHandleResponderTerminate: arg0.onResponderTerminate,
      touchableHandleStartShouldSetResponder: arg0.onStartShouldSetResponder,
      touchableHandleResponderTerminationRequest: arg0.onResponderTerminationRequest,
    } = arg2);
    flag2 = true;
  }
  if (flag2) {
    arg0.responsible = true;
  }
  tmp6 =
    null != disabled ||
    onPress ||
    onPressIn ||
    onPressOut ||
    onLongPress ||
    delayPressIn ||
    delayPressOut ||
    delayLongPress;
}
