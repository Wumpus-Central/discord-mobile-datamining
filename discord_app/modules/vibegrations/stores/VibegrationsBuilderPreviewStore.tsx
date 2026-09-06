// discord_app/modules/vibegrations/stores/VibegrationsBuilderPreviewStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";

let applicationId = null;
let enabled = false;
const Store = initializeDefault.Store;
class VibegrationsBuilderPreviewStore extends Store {}
const prototype = VibegrationsBuilderPreviewStore.prototype;
prototype["getBuilderPreviewApplicationId"] = function getBuilderPreviewApplicationId() {
  return applicationId;
};
prototype["isBuilderPreviewMobile"] = function isBuilderPreviewMobile() {
  return enabled;
};
const vibegrationsBuilderPreviewStore = new VibegrationsBuilderPreviewStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (null == applicationId) {
      if (!enabled) {
        return false;
      }
    }
    applicationId = null;
    enabled = false;
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
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsBuilderPreviewStore.tsx");

export default vibegrationsBuilderPreviewStore;
