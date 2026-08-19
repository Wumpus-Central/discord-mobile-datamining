// === Module 4087: ? ===

// Module 4087
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 4088 */;

const NativeModules = get_ActivityIndicator.NativeModules;
let result = obj132.fileFinishedImporting("modules/links/native/LinkingModule.tsx");

export default {
  tryOpenUrlAsUniversalLink(closure_0) {
    if (obj.isAndroid()) {
      let result = enforcingDefault.tryOpenUrlAsUniversalLink(closure_0);
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      result = DCDLinkingManager.tryOpenUrlAsUniversalLink(closure_0);
    }
    return result;
  },
  tryOpenScheme(closure_0) {
    if (obj.isAndroid()) {
      let tryOpenSchemeResult = enforcingDefault.tryOpenScheme(closure_0);
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      tryOpenSchemeResult = DCDLinkingManager.tryOpenScheme(closure_0);
    }
    return tryOpenSchemeResult;
  }
};