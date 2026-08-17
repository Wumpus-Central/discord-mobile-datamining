// _runtime/00282_dispatchNativeEvent.js
import map from "map" /* 66 */;
import getHandler from "getHandler" /* 283 */;

require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = function dispatchNativeEvent(self, arg1, timeStamp) {
  let obj = getHandler;
  const result = obj.processResponderEvent(arg1, self, timeStamp);
  let tmp4 = map.customBubblingEventTypes[arg1];
  const tmp5 = map.customDirectEventTypes[arg1];
  if (null != tmp4) {
    let tmp6 = null != tmp4;
    if (tmp6) {
      tmp6 = true !== tmp4.phasedRegistrationNames.skipBubbling;
    }
    let tmpResult = tmp(149);
    const result1 = tmpResult.topLevelTypeToEventType(arg1);
    obj = { bubbles: null, cancelable: true };
    obj[0] = tmp6;
    let timestamp = timeStamp.timeStamp;
    if (timestamp == null) {
      timestamp = timeStamp.timestamp;
    }
    if (typeof timestamp === "number") {
      tmpResult = tmp(134);
      const result2 = tmpResult.setEventInitTimeStamp(obj, timestamp);
    }
    let tmp9 = module(286);
    if (tmp4 == null) {
      tmp4 = tmp5;
    }
    tmp9 = new tmp9(result1, obj, timeStamp, tmp4);
    tmp(135).dispatchTrustedEvent(self, tmp9);
    const tmpResult1 = tmp(135);
  }
  getHandler.rethrowCaughtError();
};