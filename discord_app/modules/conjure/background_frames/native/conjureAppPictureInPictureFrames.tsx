// === Module 18332: conjureAppPictureInPictureFrames ===

// Module 18332 (conjureAppPictureInPictureFrames)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5699 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10804 */;
import closeFrameDefault from "closeFrame" /* 14081 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 14099 */;
import conjureBackgroundFrameRules from "conjureBackgroundFrameRules" /* 18328 */;
import isConjureAppChannelFrameDefault from "isConjureAppChannelFrame" /* 18331 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import FramesStore from "FramesStore" /* 6810 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1206 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;

require = fn;
function canFloat(id) {
  let tmp3 = isConjureAppChannelFrameDefault(id);
  if (tmp3) {
    tmp3 = !conjureBackgroundFrameRules.isBuilderPreviewFrame(id);
  }
  if (tmp3) {
    tmp3 = frameRunsInBackgroundDefault(id, UnsyncedUserSettingsStore);
  }
  if (tmp3) {
    const mainFrame = FramesStore.getMainFrame();
    id = undefined;
    if (mainFrame != null) {
      id = mainFrame.id;
    }
    tmp3 = id !== id.id;
  }
  return tmp3;
}
function isConjureAppPictureInPictureFrame(frame) {
  let tmp3 = isConjureAppChannelFrameDefault(frame);
  if (tmp3) {
    tmp3 = !conjureBackgroundFrameRules.isBuilderPreviewFrame(frame);
  }
  if (tmp3) {
    tmp3 = frameRunsInBackgroundDefault(frame, UnsyncedUserSettingsStore);
  }
  if (tmp3) {
    const mainFrame = FramesStore.getMainFrame();
    let id;
    if (mainFrame != null) {
      id = mainFrame.id;
    }
    tmp3 = id !== frame.id;
  }
  if (tmp3) {
    const tmp11 = timestampProducer(frame);
    let layoutMode;
    if (tmp11 != null) {
      layoutMode = tmp11.data.layoutMode;
    }
    tmp3 = layoutMode === constants.PIP;
  }
  return tmp3;
}
function getConjureAppPictureInPictureFrameIds() {
  const allFrames = FramesStore.getAllFrames();
  const found = allFrames.filter(isConjureAppPictureInPictureFrame);
  return found.map((id) => id.id);
}
function closeToMakeRoom(frameId) {
  const frame = FramesStore.getFrame(frameId);
  let applicationId;
  if (frame != null) {
    applicationId = frame.applicationId;
  }
  let tmp3 = null;
  if (null != applicationId) {
    const application = ApplicationStore.getApplication(applicationId);
    let name;
    if (application != null) {
      name = application.name;
    }
    tmp3 = name;
  }
  closeFrameDefault(frameId);
  if (null != tmp3) {
    const obj = { text: null };
    const intl = util.intl;
    const obj2 = { appName: tmp3 };
    obj.text = intl.formatToPlainString(_modDef3863.jmMirO, obj2);
    ToastActionCreatorsDefault.open("CONJURE_APP_PIP_CLOSED_TO_MAKE_ROOM", obj);
    const tmp7Result = ToastActionCreatorsDefault;
  }
}
const FramesConstants = fn(6811);
({ asLaunched: metroRequire, FrameLayoutModes: closure_7 } = FramesConstants);
const items = [FramesStore, UnsyncedUserSettingsStore, ConjureProjectStore];
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/conjure/background_frames/native/conjureAppPictureInPictureFrames.tsx");

export const FLOATING_APP_STORES = items;
export const getFloatableFrames = function getFloatableFrames() {
  const allFrames = FramesStore.getAllFrames();
  return allFrames.filter(canFloat);
};
export const getStrandedFloatingFrames = function getStrandedFloatingFrames() {
  const allFrames = FramesStore.getAllFrames();
  return allFrames.filter((id) => {
    let tmp3 = isConjureAppChannelFrameDefault(id);
    if (tmp3) {
      const tmp5 = closure_1_6(id);
      let layoutMode;
      if (tmp5 != null) {
        layoutMode = tmp5.data.layoutMode;
      }
      tmp3 = layoutMode === constants.PIP;
    }
    if (tmp3) {
      let tmp9 = isConjureAppChannelFrameDefault(id);
      if (tmp9) {
        tmp9 = !conjureBackgroundFrameRules.isBuilderPreviewFrame(id);
      }
      if (tmp9) {
        tmp9 = frameRunsInBackgroundDefault(id, UnsyncedUserSettingsStore);
      }
      if (tmp9) {
        mainFrame = mainFrame.getMainFrame();
        id = undefined;
        if (mainFrame != null) {
          id = mainFrame.id;
        }
        tmp9 = id !== id.id;
      }
      tmp3 = !tmp9;
    }
    return tmp3;
  });
};
export { isConjureAppPictureInPictureFrame };
export { getConjureAppPictureInPictureFrameIds };
export const useConjureAppPictureInPictureFrameIds = function useConjureAppPictureInPictureFrameIds() {
  return initialize.useStateFromStoresArray(items, getConjureAppPictureInPictureFrameIds);
};
export const enterConjureAppPictureInPicture = function enterConjureAppPictureInPicture(id) {
  const frame = FramesStore.getFrame(id);
  if (null != frame) {
    let tmp3 = isConjureAppChannelFrameDefault(frame);
    if (tmp3) {
      tmp3 = !conjureBackgroundFrameRules.isBuilderPreviewFrame(frame);
    }
    if (tmp3) {
      tmp3 = frameRunsInBackgroundDefault(frame, UnsyncedUserSettingsStore);
    }
    if (tmp3) {
      const mainFrame = FramesStore.getMainFrame();
      id = undefined;
      if (mainFrame != null) {
        id = mainFrame.id;
      }
      tmp3 = id !== frame.id;
    }
    if (tmp3) {
      let tmp7 = isConjureAppChannelFrameDefault(frame);
      if (tmp7) {
        tmp7 = !conjureBackgroundFrameRules.isBuilderPreviewFrame(frame);
      }
      if (tmp7) {
        tmp7 = frameRunsInBackgroundDefault(frame, UnsyncedUserSettingsStore);
      }
      if (tmp7) {
        const mainFrame1 = FramesStore.getMainFrame();
        let id1;
        if (mainFrame1 != null) {
          id1 = mainFrame1.id;
        }
        tmp7 = id1 !== frame.id;
      }
      if (tmp7) {
        const tmp13 = timestampProducer(frame);
        let layoutMode;
        if (tmp13 != null) {
          layoutMode = tmp13.data.layoutMode;
        }
        tmp7 = layoutMode === constants.PIP;
      }
      if (!tmp7) {
        const allFrames = FramesStore.getAllFrames();
        const found = allFrames.filter(isConjureAppPictureInPictureFrame);
        const mapped = found.map((id) => id.id);
        const _Math = Math;
        const substr = mapped.slice(0, Math.max(0, mapped.length - 2 + 1));
        const item = substr.forEach(closeToMakeRoom);
        const obj4 = { frameId: id, layoutMode: constants.PIP };
        const result = FramesActionCreatorsDefault.updateFrameLayoutMode(obj4);
        const tmp22Result = FramesActionCreatorsDefault;
      }
    }
  }
};
export const exitConjureAppPictureInPicture = function exitConjureAppPictureInPicture(id) {
  const tmp = timestampProducer(FramesStore.getFrame(id));
  let layoutMode;
  if (tmp != null) {
    layoutMode = tmp.data.layoutMode;
  }
  if (layoutMode === constants.PIP) {
    const obj2 = { frameId: id, layoutMode: tmp3.FOCUSED };
    const result = FramesActionCreatorsDefault.updateFrameLayoutMode(obj2);
  }
};