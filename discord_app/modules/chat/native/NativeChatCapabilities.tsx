// discord_app/modules/chat/native/NativeChatCapabilities.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import NativeChatModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeChatModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/chat/native/NativeChatCapabilities.tsx");

export const nativeChatSupportsAudioEmbeds = function nativeChatSupportsAudioEmbeds() {
  let flag = null;
  if (null != closure_3) {
    return closure_3;
  } else {
    let supportsAudioEmbeds = dependencyMap;
    if (obj.isAndroid()) {
      const getConstants = NativeChatModuleDefault.getConstants;
      supportsAudioEmbeds = undefined;
      if (getConstants != flag) {
        constants = getConstants();
        if (constants != flag) {
          supportsAudioEmbeds = constants.supportsAudioEmbeds;
        }
      }
      flag = true;
      let tmp3 = true === supportsAudioEmbeds;
    } else {
      const DCDChatManager = NativeModules.DCDChatManager;
      let supportsAudioEmbeds1;
      if (DCDChatManager != flag) {
        supportsAudioEmbeds1 = DCDChatManager.supportsAudioEmbeds;
      }
      tmp3 = true === supportsAudioEmbeds1;
    }
    closure_3 = tmp3;
    obj = PlatformUtils;
  }
};
