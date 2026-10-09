// === Module 14641: ConjureBuilderPreviewStore ===

// Module 14641 (ConjureBuilderPreviewStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import FramesStore from "FramesStore" /* 10772 */;

const OrientationLockState = fn(2024).OrientationLockState;
let applicationId = null;
let enabled = false;
let closure_5 = false;
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
prototype["isBuilderPreviewMobile"] = function isBuilderPreviewMobile() {
  return enabled;
};
prototype["isBuilderPreviewLandscape"] = function isBuilderPreviewLandscape() {
  return closure_5;
};
const conjureBuilderPreviewStore = new ConjureBuilderPreviewStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (null == applicationId) {
      if (null == applicationId) {
        if (!enabled) {
          if (!closure_5) {
            return false;
          }
        }
      }
    }
    applicationId = null;
    enabled = false;
    closure_5 = false;
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
    if (closure_5 === landscape) {
      return false;
    } else {
      closure_5 = landscape;
    }
  },
  FRAME_SET_ORIENTATION_LOCK_STATE: function handleFrameSetOrientationLockState(lockState) {
    lockState = lockState.lockState;
    if (lockState !== OrientationLockState.LANDSCAPE) {
      if (lockState !== OrientationLockState.PORTRAIT) {
        return false;
      }
    }
    const frame = FramesStore.getFrame(lockState.frameId);
    if (null != frame) {
      if (frame.applicationId === applicationId) {
        if (closure_5 === (lockState === OrientationLockState.LANDSCAPE)) {
          return false;
        } else {
          closure_5 = tmp4;
        }
      }
    }
    return false;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjureBuilderPreviewStore.tsx");

export default conjureBuilderPreviewStore;