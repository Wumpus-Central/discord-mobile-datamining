// discord_app/modules/noise_cancellation/native/KrispUtils.tsx
import set from "../../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/noise_cancellation/native/KrispUtils.tsx");

export const getKrispModel = function getKrispModel() {
  return new Promise((arg0) => {
    const callback = arg0;
    const voiceEngine = callback(table[0]).getVoiceEngine();
    if (null != voiceEngine.getNcModelFilename) {
      const ncModelFilename = voiceEngine.getNcModelFilename((arg0) => callback(arg0));
    } else {
      arg0(null);
    }
  });
};
export function setKrispSuppressionLevel() {

}
export function setKrispModelOverride() {

}