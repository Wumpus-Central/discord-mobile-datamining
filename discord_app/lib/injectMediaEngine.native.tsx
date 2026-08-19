// === Module 4498: ? ===

// Module 4498
import obj132 from "obj132" /* 2 */;
import inject from "inject" /* 4499 */;

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
    return require(4500) /* logger */.default;
  },
  getOpenH264LibraryPath() {

  }
});
const result = obj132.fileFinishedImporting("lib/injectMediaEngine.native.tsx");