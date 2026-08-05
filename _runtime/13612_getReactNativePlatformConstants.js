// _runtime/13612_getReactNativePlatformConstants.js
import get_ActivityIndicator from "get ActivityIndicator";


export default function getReactNativePlatformConstants() {
  let obj = { osRelease: "", model: "", serverHost: "", uiMode: "", serial: "", forceTouch: false, interfaceIdiom: "", systemName: "" };
  if ("android" === get_ActivityIndicator.Platform.OS) {
    obj = {};
    const merged = Object.assign(obj);
    ({ Release: obj3.osRelease, Model: obj3.model, ServerHost: obj3.serverHost, uiMode: obj3.uiMode, Serial: obj3.serial } = tmp.Platform.constants);
    return obj;
  } else if ("ios" === tmp.Platform.OS) {
    const constants = tmp.Platform.constants;
    obj = {};
    const merged1 = Object.assign(obj);
    obj.forceTouch = constants.forceTouchAvailable || false;
    ({ interfaceIdiom: obj2.interfaceIdiom, systemName: obj2.systemName } = constants);
    return obj;
  } else {
    return obj;
  }
};