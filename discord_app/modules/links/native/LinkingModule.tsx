// === Module 4252: LinkingModule ===

// Module 4252 (LinkingModule)
import _mod17 from "module_17" /* 17 */;
import NativeLinkingModuleDefault from "NativeLinkingModule" /* 4253 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
let result = size.fileFinishedImporting("modules/links/native/LinkingModule.tsx");

export default {
  tryOpenUrlAsUniversalLink(arg0) {
    if (obj.isAndroid()) {
      let result = NativeLinkingModuleDefault.tryOpenUrlAsUniversalLink(arg0);
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      result = DCDLinkingManager.tryOpenUrlAsUniversalLink(arg0);
    }
    return result;
  },
  tryOpenScheme(arg0) {
    if (obj.isAndroid()) {
      let tryOpenSchemeResult = NativeLinkingModuleDefault.tryOpenScheme(arg0);
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      tryOpenSchemeResult = DCDLinkingManager.tryOpenScheme(arg0);
    }
    return tryOpenSchemeResult;
  }
};