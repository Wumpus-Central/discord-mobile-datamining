// discord_app/modules/links/native/LinkingModule.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeLinkingModule.tsx";

const NativeModules = get_ActivityIndicator.NativeModules;
let result = set.fileFinishedImporting("modules/links/native/LinkingModule.tsx");

export default {
  tryOpenUrlAsUniversalLink(closure_0) {
    if (obj.isAndroid()) {
      let result = enforcingDefault.tryOpenUrlAsUniversalLink(closure_0);
      const obj2 = enforcingDefault;
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      result = DCDLinkingManager.tryOpenUrlAsUniversalLink(closure_0);
    }
    return result;
  },
  tryOpenScheme(closure_0) {
    if (obj.isAndroid()) {
      let tryOpenSchemeResult = enforcingDefault.tryOpenScheme(closure_0);
      const obj2 = enforcingDefault;
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      tryOpenSchemeResult = DCDLinkingManager.tryOpenScheme(closure_0);
    }
    return tryOpenSchemeResult;
  }
};