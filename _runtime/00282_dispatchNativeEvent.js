// _runtime/00282_dispatchNativeEvent.js
import customBubblingEventTypes from "00066_customBubblingEventTypes.js";
import COMPOSED_PATH_KEY from "00134_COMPOSED_PATH_KEY.js";
import EVENT_TARGET_GET_THE_PARENT_KEY from "00135_EVENT_TARGET_GET_THE_PARENT_KEY.js";
import topLevelTypeToEventType from "00149_topLevelTypeToEventType.js";
import rethrowCaughtError from "00283_rethrowCaughtError.js";
import _modDef286 from "metro/00286__.js";

export default function dispatchNativeEvent(upload, arg1, timeStamp) {
  const obj = rethrowCaughtError;
  const result = obj.processResponderEvent(arg1, upload, timeStamp);
  let tmp4 = customBubblingEventTypes.customBubblingEventTypes[arg1];
  const tmp5 = customBubblingEventTypes.customDirectEventTypes[arg1];
  if (null != tmp4) {
    const tmp6 = null != tmp4 && true !== tmp4.phasedRegistrationNames.skipBubbling;
    const tmpResult = topLevelTypeToEventType;
    const result1 = tmpResult.topLevelTypeToEventType(arg1);
    const obj2 = { bubbles: tmp6, cancelable: true };
    let timestamp = timeStamp.timeStamp;
    if (timestamp == null) {
      timestamp = timeStamp.timestamp;
    }
    if (typeof timestamp === "number") {
      const tmpResult4 = COMPOSED_PATH_KEY;
      const result2 = tmpResult4.setEventInitTimeStamp(obj2, timestamp);
    }
    const tmp9 = _modDef286;
    if (tmp4 == null) {
      tmp4 = tmp5;
    }
    const self = this;
    const self2 = this;
    const tmp92 = new tmp9(result1, obj2, timeStamp, tmp4);
    const tmpResult5 = EVENT_TARGET_GET_THE_PARENT_KEY;
    tmpResult5.dispatchTrustedEvent(upload, tmp92);
  }
  const tmpResult6 = rethrowCaughtError;
  tmpResult6.rethrowCaughtError();
}
