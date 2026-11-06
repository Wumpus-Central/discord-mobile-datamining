// discord_app/modules/conjure/background_frames/native/conjureAppPictureInPictureFrames.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef4024 from "../../intl/ConjureUntranslated.messages.js";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import conjurePreviewSurface from "../../preview/conjurePreviewSurface.tsx";
import frameRunsInBackgroundDefault from "../../../frames/frameRunsInBackground.tsx";
import FramesActionCreatorsDefault from "../../../frames/FramesActionCreators.native.tsx";
import closeFrameDefault from "../../../frames/closeFrame.tsx";
import conjureBackgroundFrameRules from "../conjureBackgroundFrameRules.tsx";
import isConjureAppChannelFrameDefault from "../isConjureAppChannelFrame.tsx";
import isLeftBuilderPreviewFrameDefault from "../isLeftBuilderPreviewFrame.tsx";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import UnsyncedUserSettingsStore from "../../../user_settings/UnsyncedUserSettingsStore.tsx";
import ConjureBuilderPreviewStore from "../../preview/ConjureBuilderPreviewStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

require = fn;
function canFloat(id) {
  if (isConjureAppChannelFrameDefault(id)) {
    let tmp3 = !conjureBackgroundFrameRules.isBuilderPreviewFrame(id);
  } else {
    tmp3 = isLeftBuilderPreviewFrameDefault(id);
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
  if (isConjureAppChannelFrameDefault(frame)) {
    let tmp3 = !conjureBackgroundFrameRules.isBuilderPreviewFrame(frame);
  } else {
    tmp3 = isLeftBuilderPreviewFrameDefault(frame);
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
    obj.text = intl.formatToPlainString(_modDef4024.jmMirO, obj2);
    ToastActionCreatorsDefault.open("CONJURE_APP_PIP_CLOSED_TO_MAKE_ROOM", obj);
    const tmp7Result = ToastActionCreatorsDefault;
  }
}
const FramesConstants = fn(6927);
({ asLaunched: closure_6, FrameLayoutModes: metroImportDefault } = FramesConstants);
const items = [
  FramesStore,
  UnsyncedUserSettingsStore,
  ApplicationStore,
  ConjureProjectStore,
  ConjureBuilderPreviewStore,
];
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/conjure/background_frames/native/conjureAppPictureInPictureFrames.tsx",
);

export const FLOATING_APP_STORES = items;
export function getFloatableFrames() {
  const allFrames = FramesStore.getAllFrames();
  return allFrames.filter(canFloat);
}
export function getStrandedFloatingFrames() {
  const allFrames = FramesStore.getAllFrames();
  return allFrames.filter((surface) => {
    let result = isConjureAppChannelFrameDefault(surface);
    if (!result) {
      result = conjurePreviewSurface.isConjurePreviewSurface(surface.surface);
    }
    if (result) {
      const tmp6 = closure_1_6(surface);
      let layoutMode;
      if (tmp6 != null) {
        layoutMode = tmp6.data.layoutMode;
      }
      result = layoutMode === constants.PIP;
    }
    if (result) {
      if (isConjureAppChannelFrameDefault(surface)) {
        let tmp10 = !conjureBackgroundFrameRules.isBuilderPreviewFrame(surface);
      } else {
        tmp10 = isLeftBuilderPreviewFrameDefault(surface);
      }
      if (tmp10) {
        tmp10 = frameRunsInBackgroundDefault(surface, UnsyncedUserSettingsStore);
      }
      if (tmp10) {
        mainFrame = mainFrame.getMainFrame();
        let id;
        if (mainFrame != null) {
          id = mainFrame.id;
        }
        tmp10 = id !== surface.id;
      }
      result = !tmp10;
    }
    return result;
  });
}
export { isConjureAppPictureInPictureFrame };
export function isConjureAppPictureInPictureInteractive(stateFromStores, SHOWS_STATIC_CARD) {
  let tmp = !SHOWS_STATIC_CARD;
  if (!SHOWS_STATIC_CARD) {
    const tmp4 = timestampProducer(stateFromStores);
    let prop;
    if (tmp4 != null) {
      prop = tmp4.data.pictureInPictureInteractive;
    }
    tmp = true === prop;
  }
  return tmp;
}
export { getConjureAppPictureInPictureFrameIds };
export function useConjureAppPictureInPictureFrameIds() {
  return initialize.useStateFromStoresArray(items, getConjureAppPictureInPictureFrameIds);
}
export function enterConjureAppPictureInPicture(id) {
  const frame = FramesStore.getFrame(id);
  if (null != frame) {
    if (isConjureAppChannelFrameDefault(frame)) {
      let tmp2 = !conjureBackgroundFrameRules.isBuilderPreviewFrame(frame);
    } else {
      tmp2 = isLeftBuilderPreviewFrameDefault(frame);
    }
    if (tmp2) {
      tmp2 = frameRunsInBackgroundDefault(frame, UnsyncedUserSettingsStore);
    }
    if (tmp2) {
      const mainFrame = FramesStore.getMainFrame();
      id = undefined;
      if (mainFrame != null) {
        id = mainFrame.id;
      }
      tmp2 = id !== frame.id;
    }
    if (tmp2) {
      if (!isConjureAppPictureInPictureFrame(frame)) {
        const allFrames = FramesStore.getAllFrames();
        const found = allFrames.filter(isConjureAppPictureInPictureFrame);
        const mapped = found.map((id) => id.id);
        const _Math = Math;
        const substr = mapped.slice(0, Math.max(0, mapped.length - 2 + 1));
        const item = substr.forEach(closeToMakeRoom);
        const obj3 = { frameId: id, layoutMode: constants.PIP };
        const result = FramesActionCreatorsDefault.updateFrameLayoutMode(obj3);
        const tmp13Result = FramesActionCreatorsDefault;
      }
    }
  }
}
export function exitConjureAppPictureInPicture(id) {
  const tmp = timestampProducer(FramesStore.getFrame(id));
  let layoutMode;
  if (tmp != null) {
    layoutMode = tmp.data.layoutMode;
  }
  if (layoutMode === constants.PIP) {
    const obj2 = { frameId: id, layoutMode: tmp3.FOCUSED };
    const result = FramesActionCreatorsDefault.updateFrameLayoutMode(obj2);
  }
}
