// === Module 4432: ? ===

// Module 4432
import set from "set" /* 2 */;
import inject from "inject" /* 4433 */;

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
    return require(4434) /* logger */.default;
  },
  getOpenH264LibraryPath() {

  }
});
const result = set.fileFinishedImporting("lib/injectMediaEngine.native.tsx");