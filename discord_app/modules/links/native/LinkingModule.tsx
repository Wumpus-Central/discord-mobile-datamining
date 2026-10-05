// === Module 4562: LinkingModule ===

// Module 4562 (LinkingModule)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import react_nativeDefault from "react-native" /* 4563 */;
import size from "module_2" /* 2 */;

const NativeModules = react_native.NativeModules;
let obj = {
  tryOpenUrlAsUniversalLink(arg0) {
    let result;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const obj2 = react_nativeDefault;
      result = obj2.tryOpenUrlAsUniversalLink(arg0);
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      result = DCDLinkingManager.tryOpenUrlAsUniversalLink(arg0);
    }
    return result;
  },
  tryOpenScheme(arg0) {
    let tryOpenSchemeResult;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const obj2 = react_nativeDefault;
      tryOpenSchemeResult = obj2.tryOpenScheme(arg0);
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      tryOpenSchemeResult = DCDLinkingManager.tryOpenScheme(arg0);
    }
    return tryOpenSchemeResult;
  }
};
let result = size.fileFinishedImporting("modules/links/native/LinkingModule.tsx");

export default obj;