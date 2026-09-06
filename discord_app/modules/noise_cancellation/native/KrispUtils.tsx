// discord_app/modules/noise_cancellation/native/KrispUtils.tsx
import inject from "../../../../discord_common/js/packages/media-engine/native/inject.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/noise_cancellation/native/KrispUtils.tsx");

export const getKrispModel = function getKrispModel() {
  return new Promise((fn) => {
    closure_0 = fn;
    const voiceEngine = inject.getVoiceEngine();
    if (null != voiceEngine.getNcModelFilename) {
      const ncModelFilename = voiceEngine.getNcModelFilename((arg0) => closure_0(arg0));
    } else {
      fn(null);
    }
  });
};
export function setKrispSuppressionLevel() {}
export function setKrispModelOverride() {}
