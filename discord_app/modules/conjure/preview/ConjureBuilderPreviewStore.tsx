// discord_app/modules/conjure/preview/ConjureBuilderPreviewStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../activities/Constants.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const OrientationLockState = Constants.OrientationLockState;
let applicationId = null;
let enabled = false;
let closure_5 = false;
const Store = get_initializedDefault.Store;
class ConjureBuilderPreviewStore extends Store {
  initialize() {
    this.waitFor(FramesStore);
  }
  getBuilderPreviewApplicationId() {
    return applicationId;
  }
  getPhoneLensApplicationId() {
    return applicationId;
  }
  isBuilderPreviewMobile() {
    return enabled;
  }
  isBuilderPreviewLandscape() {
    return closure_5;
  }
}
const prototype = ConjureBuilderPreviewStore.prototype;
const obj = {
  LOGOUT: function handleLogout() {
    if (null == applicationId) {
      if (null == applicationId) {
        const tmp2 = enabled;
        if (!tmp2) {
          const tmp3 = closure_5;
          if (!tmp3) {
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
    const frameId = lockState.frameId;
    if (lockState !== OrientationLockState.LANDSCAPE) {
      if (lockState !== OrientationLockState.PORTRAIT) {
        return false;
      }
    }
    const frame = FramesStore.getFrame(frameId);
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
  },
};
const conjureBuilderPreviewStore = new ConjureBuilderPreviewStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjureBuilderPreviewStore.tsx");

export default conjureBuilderPreviewStore;
