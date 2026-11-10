// === Module 16712: conjureBackgroundFramePlatform ===

// Module 16712 (conjureBackgroundFramePlatform)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5801 */;
import transitionToChannel from "transitionToChannel" /* 5887 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11070 */;
import FramePoolManagerDefault from "FramePoolManager" /* 12452 */;
import isConjureAppChannelFrameDefault from "isConjureAppChannelFrame" /* 16713 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 16714 */;
import FramesStore from "FramesStore" /* 6904 */;

require = fn;
const ActivityPanelModes = fn(5783).ActivityPanelModes;
const FramesConstants = fn(6905);
({ asLaunched: hasOwnProperty, FrameLayoutModes: closure_6 } = FramesConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/background_frames/conjureBackgroundFramePlatform.native.tsx");

export default {
  isInHostWindow() {
    return false;
  },
  isActivityPopoutOpen() {
    return false;
  },
  hasOwnPictureInPicture(frame) {
    return isConjureAppChannelFrameDefault(frame);
  },
  isPictureInPicture(surface) {
    const tmp = hasOwnProperty(surface);
    let activityPanelMode;
    if (tmp != null) {
      activityPanelMode = tmp.data.activityPanelMode;
    }
    return activityPanelMode === ActivityPanelModes.PIP;
  },
  enterPictureInPicture(frameId) {
    FramesActionCreatorsDefault.updateFramePanelMode(frameId, ActivityPanelModes.PIP);
    const result = FramesActionCreatorsDefault.updateFrameLayoutMode({ frameId, layoutMode: constants.PIP });
  },
  isOnScreen(id) {
    const frame = FramesStore.getFrame(id);
    let tmp2 = null == frame;
    if (!tmp2) {
      tmp2 = !conjureAppPictureInPictureFrames.isConjureAppPictureInPictureFrame(frame);
    }
    if (tmp2) {
      tmp2 = null != FramePoolManagerDefault.getWinningTarget(id);
    }
    return tmp2;
  },
  openSurfaceChannel(surface, channel) {
    let flag = surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
    if (flag) {
      transitionToChannel.transitionToChannel(channel.id);
      flag = true;
      const tmpResult = transitionToChannel;
    }
    return flag;
  }
};