// discord_app/lib/injectMediaEngine.native.tsx
import inject from "../../discord_common/js/packages/media-engine/native/inject.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const obj = {
  supported() {
    return true;
  },
  supportsFeature(arg0) {
    const voiceEngine = this.getVoiceEngine();
    return voiceEngine.supportsFeature(arg0);
  },
  setProcessPriority() {},
  getVoiceEngine() {
    return require("VoiceEngine").default;
  },
  getOpenH264LibraryPath() {},
};
inject.inject(obj);
const result = size.fileFinishedImporting("lib/injectMediaEngine.native.tsx");
