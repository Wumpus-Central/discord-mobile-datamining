// === Module 16290: ConjureBuilderPreviewStore ===

// Module 16290 (ConjureBuilderPreviewStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2019 */;
import FramesStore from "FramesStore" /* 6846 */;

require = fn;
let applicationId = null;
let enabled = false;
let closure_6 = false;
const Store = initializeDefault.Store;
class ConjureBuilderPreviewStore extends Store {
}
const prototype = ConjureBuilderPreviewStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(FramesStore);
};
prototype["getBuilderPreviewApplicationId"] = function getBuilderPreviewApplicationId() {
  return applicationId;
};
prototype["getPhoneLensApplicationId"] = function getPhoneLensApplicationId() {
  return applicationId;
};
prototype["getLastBuilderPreviewApplicationId"] = function getLastBuilderPreviewApplicationId() {
  return applicationId;
};
prototype["isBuilderPreviewMobile"] = function isBuilderPreviewMobile() {
  return enabled;
};
prototype["isBuilderPreviewLandscape"] = function isBuilderPreviewLandscape() {
  return closure_6;
};
const conjureBuilderPreviewStore = new ConjureBuilderPreviewStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (null == applicationId) {
      if (null == applicationId) {
        if (!enabled) {
          if (!closure_6) {
            return false;
          }
        }
      }
    }
    applicationId = null;
    enabled = false;
    closure_6 = false;
  },
  CONJURE_BUILDER_PREVIEW_APPLICATION_SET: function handleBuilderPreviewApplicationSet(applicationId) {
    applicationId = applicationId.applicationId;
    if (applicationId === applicationId) {
      return false;
    }
  },
  CONJURE_BUILDER_PREVIEW_MOBILE_SET: function handleBuilderPreviewMobileSet(enabled) {
    enabled = enabled.enabled;
    if (enabled === enabled) {
      return false;
    }
  },
  CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET: function handleBuilderPreviewLandscapeSet(landscape) {
    landscape = landscape.landscape;
    if (closure_6 === landscape) {
      return false;
    } else {
      closure_6 = landscape;
    }
  },
  FRAME_SET_ORIENTATION_LOCK_STATE: function handleFrameSetOrientationLockState(lockState) {
    lockState = lockState.lockState;
    if (lockState !== EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE) {
      if (lockState !== EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT) {
        return false;
      }
    }
    const frame = FramesStore.getFrame(lockState.frameId);
    if (null != frame) {
      if (frame.applicationId === applicationId) {
        const tmp5 = lockState === EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE;
        if (closure_6 === tmp5) {
          return false;
        } else {
          closure_6 = tmp5;
        }
      }
    }
    return false;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjureBuilderPreviewStore.tsx");

export default conjureBuilderPreviewStore;