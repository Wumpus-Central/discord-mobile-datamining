// _runtime/metro/00247__.js
import _isNativeReflectConstructDefault from "../00092__isNativeReflectConstruct.js";
import SymbolResult1 from "../00134_SymbolResult1.js";
import _isNativeReflectConstruct from "../00248__isNativeReflectConstruct.js";
import DeviceEventManagerDefault from "../00249_DeviceEventManager.js";

require = arg1;
let closure_3 = [];
_isNativeReflectConstructDefault.addListener("hardwareBackPress", (timeStamp) => {
  timeStamp = undefined;
  if (timeStamp != null) {
    timeStamp = timeStamp.timeStamp;
  }
  obj = {};
  if (null != timeStamp) {
    const result = SymbolResult1.setEventInitTimeStamp(obj, timeStamp);
  }
  const hardwareBackPressEvent = new _isNativeReflectConstruct.HardwareBackPressEvent(obj);
  let diff = closure_3.length - 1;
  if (0 <= diff) {
    while (true) {
      let tmp7 = closure_3[diff];
      let tmp7Result;
      if (tmp7 != null) {
        tmp7Result = tmp7(hardwareBackPressEvent);
      }
      if (tmp7Result) {
        break;
      } else {
        diff = diff - 1;
      }
    }
  }
  obj.exitApp();
});
let obj = {
  exitApp() {
    if (DeviceEventManagerDefault) {
      const result = DeviceEventManagerDefault.invokeDefaultBackPressHandler();
      const tmpResult = DeviceEventManagerDefault;
    }
  },
  addEventListener(arg0, arg1) {
    closure_0 = arg1;
    let arr = closure_3;
    if (-1 === closure_3.indexOf(arg1)) {
      arr = arr.push(arg1);
    }
    return {
      remove() {
        const index = closure_1_3.indexOf(closure_0);
        if (-1 !== index) {
          closure_1_3.splice(index, 1);
        }
      }
    };
  }
};

export default obj;