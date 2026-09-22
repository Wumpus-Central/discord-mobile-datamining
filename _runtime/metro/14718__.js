// === Module 14718: ? ===

// Module 14718
import get_ActivityIndicator from "module_17" /* 17 */;


export default function getReactNativePlatformConstants() {
  const obj = { osRelease: "", model: "", serverHost: "", uiMode: "", serial: "", forceTouch: false, interfaceIdiom: "", systemName: "" };
  if ("android" === get_ActivityIndicator.Platform.OS) {
    const obj5 = {};
    const merged = Object.assign(obj);
    ({ Release: obj3.osRelease, Model: obj3.model, ServerHost: obj3.serverHost, uiMode: obj3.uiMode, Serial: obj3.serial } = get_ActivityIndicator.Platform.constants);
    return obj5;
  } else if ("ios" === get_ActivityIndicator.Platform.OS) {
    constants = get_ActivityIndicator.Platform.constants;
    const obj6 = {};
    const merged1 = Object.assign(obj);
    obj6.forceTouch = constants.forceTouchAvailable || false;
    ({ interfaceIdiom: obj2.interfaceIdiom, systemName: obj2.systemName } = constants);
    return obj6;
  } else {
    return obj;
  }
};