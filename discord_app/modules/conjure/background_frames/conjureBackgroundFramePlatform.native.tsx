// === Module 17026: conjureBackgroundFramePlatform ===

// Module 17026 (conjureBackgroundFramePlatform)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5971 */;
import transitionToChannel from "transitionToChannel" /* 6060 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11300 */;
import FramePoolManagerDefault from "FramePoolManager" /* 14597 */;
import isConjureAppChannelFrameDefault from "isConjureAppChannelFrame" /* 17027 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 17028 */;
import FramesStore from "FramesStore" /* 7027 */;

require = fn;
const ActivityPanelModes = fn(5953).ActivityPanelModes;
const FramesConstants = fn(7028);
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