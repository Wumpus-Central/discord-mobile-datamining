// === Module 14004: getBuilderPreviewApplicationId ===

// Module 14004 (getBuilderPreviewApplicationId)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let c0 = null;
let c1 = false;
const Store = initializeDefault.Store;
class VibegrationsBuilderPreviewStore extends Store {
}
const prototype = VibegrationsBuilderPreviewStore.prototype;
prototype["getBuilderPreviewApplicationId"] = function getBuilderPreviewApplicationId() {
  return c0;
};
prototype["isBuilderPreviewMobile"] = function isBuilderPreviewMobile() {
  return c1;
};
const vibegrationsBuilderPreviewStore = new VibegrationsBuilderPreviewStore(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (null == c0) {
      if (!c1) {
        return false;
      }
    }
    c0 = null;
    c1 = false;
  },
  VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET: function handleBuilderPreviewApplicationSet(applicationId) {
    applicationId = applicationId.applicationId;
    if (applicationId === applicationId) {
      return false;
    }
  },
  VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET: function handleBuilderPreviewMobileSet(enabled) {
    enabled = enabled.enabled;
    if (enabled === enabled) {
      return false;
    }
  }
});
const result = require("set").fileFinishedImporting("modules/vibegrations/stores/VibegrationsBuilderPreviewStore.tsx");

export default vibegrationsBuilderPreviewStore;