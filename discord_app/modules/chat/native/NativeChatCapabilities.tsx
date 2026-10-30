// === Module 8684: NativeChatCapabilities ===

// Module 8684 (NativeChatCapabilities)
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import NativeChatModuleDefault from "NativeChatModule" /* 8685 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/chat/native/NativeChatCapabilities.tsx");

export function nativeChatSupportsAudioEmbeds() {
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
}