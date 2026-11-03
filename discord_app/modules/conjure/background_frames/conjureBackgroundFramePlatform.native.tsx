// === Module 16512: conjureBackgroundFramePlatform ===

// Module 16512 (conjureBackgroundFramePlatform)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5795 */;
import transitionToChannel from "transitionToChannel" /* 5876 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11065 */;
import FramePoolManagerDefault from "FramePoolManager" /* 12388 */;
import isConjureAppChannelFrameDefault from "isConjureAppChannelFrame" /* 16513 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 16514 */;
import FramesStore from "FramesStore" /* 6966 */;

require = fn;
const ActivityPanelModes = fn(5777).ActivityPanelModes;
const FramesConstants = fn(6967);
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire } = FramesConstants);
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