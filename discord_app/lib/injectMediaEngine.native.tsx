// === Module 1909: injectMediaEngine ===

// Module 1909 (injectMediaEngine)
import inject from "inject" /* 1910 */;
import size from "module_2" /* 2 */;

inject.inject({
  supported() {
    return true;
  },
  supportsFeature(arg0) {
    const voiceEngine = this.getVoiceEngine();
    return voiceEngine.supportsFeature(arg0);
  },
  setProcessPriority() {

  },
  getVoiceEngine() {
    return require("VoiceEngine").default;
  },
  getOpenH264LibraryPath() {

  }
});
const result = size.fileFinishedImporting("lib/injectMediaEngine.native.tsx");