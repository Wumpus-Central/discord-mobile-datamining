// _runtime/14198_getReactNativePlatformConstants.js
import react_native from "00017_react-native.js";

let constants;

export default function getReactNativePlatformConstants() {
  const obj = {
    osRelease: "",
    model: "",
    serverHost: "",
    uiMode: "",
    serial: "",
    forceTouch: false,
    interfaceIdiom: "",
    systemName: "",
  };
  if ("android" === react_native.Platform.OS) {
    const constants2 = react_native.Platform.constants;
    const obj5 = {};
    const merged = Object.assign(obj);
    ({
      Release: obj3.osRelease,
      Model: obj3.model,
      ServerHost: obj3.serverHost,
      uiMode: obj3.uiMode,
      Serial: obj3.serial,
    } = constants2);
    return obj5;
  } else if ("ios" === react_native.Platform.OS) {
    constants = react_native.Platform.constants;
    const obj6 = { forceTouch: constants.forceTouchAvailable || false };
    const merged1 = Object.assign(obj);
    ({ interfaceIdiom: obj2.interfaceIdiom, systemName: obj2.systemName } = constants);
    return obj6;
  } else {
    return obj;
  }
}
