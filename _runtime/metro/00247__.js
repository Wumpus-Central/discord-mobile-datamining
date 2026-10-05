// _runtime/metro/00247__.js
import COMPOSED_PATH_KEY from "../00134_COMPOSED_PATH_KEY.js";
import HardwareBackPressEvent from "../00248_HardwareBackPressEvent.js";
import DeviceEventManagerDefault from "../00249_DeviceEventManager.js";
import 00092__ from "00092__.js";

let timeStamp;

let closure_3 = [];
module_92.addListener("hardwareBackPress", (timeStamp) => {
  timeStamp = undefined;
  if (timeStamp != null) {
    timeStamp = timeStamp.timeStamp;
  }
  obj = {};
  if (null != timeStamp) {
    const obj2 = COMPOSED_PATH_KEY;
    const result = obj2.setEventInitTimeStamp(obj, timeStamp);
  }
  const hardwareBackPressEvent = new HardwareBackPressEvent.HardwareBackPressEvent(obj);
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
      const tmpResult = DeviceEventManagerDefault;
      const result = tmpResult.invokeDefaultBackPressHandler();
    }
  },
  addEventListener(arg0, arg1) {
    let closure_0 = arg1;
    if (-1 === closure_3.indexOf(arg1)) {
      closure_3.push(arg1);
    }
    return {
      remove() {
        const index = closure_3.indexOf(closure_0);
        if (-1 !== index) {
          closure_3.splice(index, 1);
        }
      }
    };
  }
};

export default obj;