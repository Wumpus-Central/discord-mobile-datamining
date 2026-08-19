// === Module 282: dispatchNativeEvent ===

// Module 282 (dispatchNativeEvent)
import map from "map" /* 66 */;
import SymbolResult1 from "SymbolResult1" /* 134 */;
import SymbolResult2 from "SymbolResult2" /* 135 */;
import topLevelTypeToEventType from "topLevelTypeToEventType" /* 149 */;
import getHandler from "getHandler" /* 283 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 286 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
arg5.default = function dispatchNativeEvent(self, arg1, timeStamp) {
  let obj = getHandler;
  const result = obj.processResponderEvent(arg1, self, timeStamp);
  let tmp4 = map.customBubblingEventTypes[arg1];
  if (null != tmp4) {
    let tmp6 = null != tmp4;
    if (tmp6) {
      tmp6 = true !== tmp4.phasedRegistrationNames.skipBubbling;
    }
    let tmpResult = topLevelTypeToEventType;
    const result1 = tmpResult.topLevelTypeToEventType(arg1);
    obj = { bubbles: null, cancelable: true };
    obj[0] = tmp6;
    let timestamp = timeStamp.timeStamp;
    if (timestamp == null) {
      timestamp = timeStamp.timestamp;
    }
    if (typeof timestamp === "number") {
      tmpResult = SymbolResult1;
      const result2 = tmpResult.setEventInitTimeStamp(obj, timestamp);
    }
    let tmp9 = _isNativeReflectConstructDefault;
    if (tmp4 == null) {
      tmp4 = tmp5;
    }
    tmp9 = new tmp9(result1, obj, timeStamp, tmp4);
    SymbolResult2.dispatchTrustedEvent(self, tmp9);
    const tmpResult1 = SymbolResult2;
  }
  tmp5 = map.customDirectEventTypes[arg1];
  getHandler.rethrowCaughtError();
  const tmpResult2 = getHandler;
};