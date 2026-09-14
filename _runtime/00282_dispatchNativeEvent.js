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
  const result = _mod283.processResponderEvent(arg1, self, timeStamp);
  let tmp4 = customBubblingEventTypes.customBubblingEventTypes[arg1];
  if (null != tmp4) {
    let tmp6 = null != tmp4;
    if (tmp6) {
      tmp6 = true !== tmp4.phasedRegistrationNames.skipBubbling;
    }
    const result1 = topLevelTypeToEventType.topLevelTypeToEventType(arg1);
    const obj2 = { bubbles: tmp6, cancelable: true };
    let timestamp = timeStamp.timeStamp;
    if (timestamp == null) {
      timestamp = timeStamp.timestamp;
    }
    if (typeof timestamp === "number") {
      const result2 = COMPOSED_PATH_KEY.setEventInitTimeStamp(obj2, timestamp);
      const tmpResult4 = COMPOSED_PATH_KEY;
    }
    const tmpResult = topLevelTypeToEventType;
    if (tmp4 == null) {
      tmp4 = tmp5;
    }
    const tmp92 = new _modDef286(result1, obj2, timeStamp, tmp4);
    EVENT_TARGET_GET_THE_PARENT_KEY.dispatchTrustedEvent(self, tmp92);
    const tmpResult5 = EVENT_TARGET_GET_THE_PARENT_KEY;
  }
  tmp5 = customBubblingEventTypes.customDirectEventTypes[arg1];
  _mod283.rethrowCaughtError();
  const tmpResult6 = _mod283;
}
