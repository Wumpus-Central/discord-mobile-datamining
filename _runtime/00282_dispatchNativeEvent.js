// _runtime/00282_dispatchNativeEvent.js
import customBubblingEventTypes from "00066_customBubblingEventTypes.js";
import COMPOSED_PATH_KEY from "00134_COMPOSED_PATH_KEY.js";
import EVENT_TARGET_GET_THE_PARENT_KEY from "00135_EVENT_TARGET_GET_THE_PARENT_KEY.js";
import topLevelTypeToEventType from "00149_topLevelTypeToEventType.js";
import _mod283 from "metro/00283__.js";
import _modDef286 from "metro/00286__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default function dispatchNativeEvent(self, arg1, timeStamp) {
  let obj = _mod283;
  const result = obj.processResponderEvent(arg1, self, timeStamp);
  let tmp4 = customBubblingEventTypes.customBubblingEventTypes[arg1];
  if (null != tmp4) {
    let tmp6 = null != tmp4;
    if (tmp6) {
      tmp6 = true !== tmp4.phasedRegistrationNames.skipBubbling;
    }
    let tmpResult = topLevelTypeToEventType;
    const result1 = tmpResult.topLevelTypeToEventType(arg1);
    obj = { bubbles: tmp6, cancelable: true };
    let timestamp = timeStamp.timeStamp;
    if (timestamp == null) {
      timestamp = timeStamp.timestamp;
    }
    if (typeof timestamp === "number") {
      tmpResult = COMPOSED_PATH_KEY;
      const result2 = tmpResult.setEventInitTimeStamp(obj, timestamp);
    }
    let tmp9 = _modDef286;
    if (tmp4 == null) {
      tmp4 = tmp5;
    }
    tmp9 = new tmp9(result1, obj, timeStamp, tmp4);
    EVENT_TARGET_GET_THE_PARENT_KEY.dispatchTrustedEvent(self, tmp9);
    const tmpResult1 = EVENT_TARGET_GET_THE_PARENT_KEY;
  }
  tmp5 = customBubblingEventTypes.customDirectEventTypes[arg1];
  _mod283.rethrowCaughtError();
  const tmpResult2 = _mod283;
}
