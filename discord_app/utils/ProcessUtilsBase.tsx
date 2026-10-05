// discord_app/utils/ProcessUtilsBase.tsx
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("utils/ProcessUtilsBase.tsx");
class ProcessUtils {
  getSystemMetrics() {
    return Promise.resolve(null);
  }
  setShouldCollectHermesInstrumentedStats() {}
  getCurrentHermesInstrumentedStatsSummary() {}
  getCPUCoreCount() {
    return this.cpuCoreCount;
  }
}
const prototype = ProcessUtils.prototype;

export const ElectronProcessType = {
  Unknown: "unknown",
  Main: "main",
  Renderer: "renderer",
  GPU: "gpu",
  Utility: "utility",
  Crashpad: "crashpad",
  Clips: "clips",
  Ndi: "ndi",
};
export { ProcessUtils };
