// discord_app/lib/injectMediaEngine.native.tsx
import inject from "inject";
import { logger } from "../../discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx";

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
    return logger.default;
  },
  getOpenH264LibraryPath() {

  }
});
const result = require("set").fileFinishedImporting("lib/injectMediaEngine.native.tsx");