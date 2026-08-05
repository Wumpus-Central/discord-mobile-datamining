// _runtime/metro/00247__.js
const require = arg1;
let closure_3 = [];
require("_isNativeReflectConstruct").addListener("hardwareBackPress", (timeStamp) => {
  timeStamp = undefined;
  if (timeStamp != null) {
    timeStamp = timeStamp.timeStamp;
  }
  const obj = {};
  if (null != timeStamp) {
    const result = require("../00134_SymbolResult1.js") /* SymbolResult1 */.setEventInitTimeStamp(obj, timeStamp);
    const obj2 = require("../00134_SymbolResult1.js") /* SymbolResult1 */;
  }
  const hardwareBackPressEvent = new require("../00248__isNativeReflectConstruct.js") /* _isNativeReflectConstruct */.HardwareBackPressEvent(obj);
  let diff = closure_3.length - 1;
  if (0 <= diff) {
    while (true) {
      let tmp7 = closure_3[diff];
      let tmp8 = diff;
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
    if (require("../00249_DeviceEventManager.js")) {
      const result = require("../00249_DeviceEventManager.js").invokeDefaultBackPressHandler();
      const tmpResult = require("../00249_DeviceEventManager.js");
    }
  },
  addEventListener(arg0, arg1) {
    let closure_0 = arg1;
    let arr = closure_3;
    if (-1 === closure_3.indexOf(arg1)) {
      arr = arr.push(arg1);
    }
    return {
      remove() {
        const index = outer1_3.indexOf(closure_0);
        if (-1 !== index) {
          outer1_3.splice(index, 1);
        }
      }
    };
  }
};

export default obj;