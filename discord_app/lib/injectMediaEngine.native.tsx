// discord_app/lib/injectMediaEngine.native.tsx
import set from "../../_runtime/00002_set.js";
import inject from "../../discord_common/js/packages/media-engine/native/inject.tsx";
import { logger } from "../../discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx";

inject.inject({
  supported() {
    return true;
  },
  supportsFeature(arg0) {
    const voiceEngine = this.getVoiceEngine();
    return voiceEngine.supportsFeature(arg0);
  },
  setProcessPriority() {},
  getVoiceEngine() {
    return logger /* logger */.default;
  },
  getOpenH264LibraryPath() {},
});
const result = set.fileFinishedImporting("lib/injectMediaEngine.native.tsx");
