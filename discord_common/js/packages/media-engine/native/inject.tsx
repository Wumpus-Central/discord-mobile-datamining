// discord_common/js/packages/media-engine/native/inject.tsx
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/inject.tsx");

export function inject(arg0) {
  global = arg0;
}
export const supported = function supported() {
  if (null == global) {
    const _Error = Error;
    const error = new Error("Native dependencies have not been injected.");
    throw error;
  } else {
    return global.supported();
  }
};
export const supportsFeature = function supportsFeature(CLIPS_THUMBNAIL) {
  if (null == global) {
    const _Error = Error;
    const error = new Error("Native dependencies have not been injected.");
    throw error;
  } else {
    return global.supportsFeature(CLIPS_THUMBNAIL);
  }
};
export const setProcessPriority = function setProcessPriority(NORMAL) {
  if (null == global) {
    const _Error = Error;
    const error = new Error("Native dependencies have not been injected.");
    throw error;
  } else {
    global.setProcessPriority(NORMAL);
  }
};
export const getVoiceEngine = function getVoiceEngine() {
  if (null == global) {
    const _Error = Error;
    const error = new Error("Native dependencies have not been injected.");
    throw error;
  } else {
    let tmp = voiceEngine;
    if (voiceEngine == null) {
      voiceEngine = global.getVoiceEngine();
      tmp = voiceEngine;
    }
    return tmp;
  }
};
export const getOpenH264LibraryPath = function getOpenH264LibraryPath() {
  if (null == global) {
    const _Error = Error;
    const error = new Error("Native dependencies have not been injected.");
    throw error;
  } else {
    return global.getOpenH264LibraryPath();
  }
};
