// discord_app/modules/vibegrations/lib/VibegrationsPlatformUtils.native.tsx
const result = require("set").fileFinishedImporting("modules/vibegrations/lib/VibegrationsPlatformUtils.native.tsx");

export default {
  openVibegrationsAppInstallModal(arg0) {
    return Promise.resolve();
  },
  isWindowFocused() {
    return false;
  },
  createNotificationDeepLink(CHANNELResult) {
    return CHANNELResult;
  }
};