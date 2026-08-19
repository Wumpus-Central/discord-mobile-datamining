// === Module 13086: getKrispModel ===

// Module 13086 (getKrispModel)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/noise_cancellation/native/KrispUtils.tsx");

export const getKrispModel = function getKrispModel() {
  return new Promise((fn) => {
    const callback = fn;
    const voiceEngine = callback(table[0]).getVoiceEngine();
    if (null != voiceEngine.getNcModelFilename) {
      const ncModelFilename = voiceEngine.getNcModelFilename((arg0) => callback(arg0));
    } else {
      fn(null);
    }
  });
};
export function setKrispSuppressionLevel() {

}
export function setKrispModelOverride() {

}