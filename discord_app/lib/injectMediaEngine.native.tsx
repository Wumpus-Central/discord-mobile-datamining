// === Module 4496: ? ===

// Module 4496
import set from "set" /* 2 */;
import inject from "inject" /* 4497 */;

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
    return require(4498) /* logger */.default;
  },
  getOpenH264LibraryPath() {

  }
});
const result = set.fileFinishedImporting("lib/injectMediaEngine.native.tsx");