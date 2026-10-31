// === Module 2007: injectMediaEngine ===

// Module 2007 (injectMediaEngine)
import inject from "inject" /* 2008 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

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