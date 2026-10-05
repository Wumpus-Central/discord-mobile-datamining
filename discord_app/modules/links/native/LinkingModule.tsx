// discord_app/modules/links/native/LinkingModule.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeLinkingModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  },
};
let result = size.fileFinishedImporting("modules/links/native/LinkingModule.tsx");

export default obj;
