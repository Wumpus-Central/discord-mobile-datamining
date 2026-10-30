// === Module 5887: noise_cancellation/KrispUtils ===

// Module 5887 (noise_cancellation/KrispUtils)
import inject from "inject" /* 2009 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/noise_cancellation/native/KrispUtils.tsx");

export function getKrispModel() {
  return new Promise((fn) => {
    closure_0 = fn;
    const voiceEngine = inject.getVoiceEngine();
    if (null != voiceEngine.getNcModelFilename) {
      const ncModelFilename = voiceEngine.getNcModelFilename((arg0) => closure_0(arg0));
    } else {
      fn(null);
    }
  });
}
export function setKrispSuppressionLevel() {

}
export function setKrispModelOverride() {

}