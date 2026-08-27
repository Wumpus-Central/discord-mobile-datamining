// _runtime/08180_keys.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

const PanResponder = get_ActivityIndicator.PanResponder;
const keys = Object.keys(PanResponder.create({}).panHandlers);

export default function extractResponder(arg0, pointerEvents) {
  pointerEvents = pointerEvents.pointerEvents;
  let num = 0;
  let flag = false;
  let flag2 = false;
  ({ onPress, disabled, onPressIn, onPressOut, onLongPress, delayPressIn, delayPressOut, delayLongPress } = pointerEvents);
  if (0 < length) {
    do {
      let tmp = keys;
      let tmp2 = keys[num];
      let tmp3 = pointerEvents[tmp2];
      let tmp4 = num;
      let flag3 = flag;
      if (tmp3) {
        arg0[tmp2] = tmp3;
        flag3 = true;
      }
      num = num + 1;
      let tmp5 = length;
      flag = flag3;
      flag2 = flag3;
    } while (num < length);
  }
  if (pointerEvents) {
    arg0.pointerEvents = pointerEvents;
  }
  if (tmp6) {
    ({ touchableHandleResponderMove: arg0.onResponderMove, touchableHandleResponderGrant: arg0.onResponderGrant, touchableHandleResponderRelease: arg0.onResponderRelease, touchableHandleResponderTerminate: arg0.onResponderTerminate, touchableHandleStartShouldSetResponder: arg0.onStartShouldSetResponder, touchableHandleResponderTerminationRequest: arg0.onResponderTerminationRequest } = arg2);
    flag2 = true;
  }
  if (flag2) {
    arg0.responsible = true;
  }
};