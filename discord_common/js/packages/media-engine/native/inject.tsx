// === Module 2014: inject ===

// Module 2014 (inject)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/inject.tsx");

export function inject(arg0) {
  global = arg0;
}
export function supported() {
  if (null == global) {
    const _Error = Error;
    const error = new Error("Native dependencies have not been injected.");
    throw error;
  } else {
    return global.supported();
  }
}
export function supportsFeature(SPATIAL_AUDIO) {
  if (null == global) {
    const _Error = Error;
    const error = new Error("Native dependencies have not been injected.");
    throw error;
  } else {
    return global.supportsFeature(SPATIAL_AUDIO);
  }
}
export function setProcessPriority(NORMAL) {
  if (null == global) {
    const _Error = Error;
    const error = new Error("Native dependencies have not been injected.");
    throw error;
  } else {
    global.setProcessPriority(NORMAL);
  }
}
export function getVoiceEngine() {
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
}
export function getOpenH264LibraryPath() {
  if (null == global) {
    const _Error = Error;
    const error = new Error("Native dependencies have not been injected.");
    throw error;
  } else {
    return global.getOpenH264LibraryPath();
  }
}