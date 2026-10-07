// discord_app/modules/links/native/LinkingModule.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import NativeLinkingModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeLinkingModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  },
};
