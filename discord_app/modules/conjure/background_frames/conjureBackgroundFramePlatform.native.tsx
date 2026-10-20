// === Module 17796: conjureBackgroundFramePlatform ===

// Module 17796 (conjureBackgroundFramePlatform)
import ActivityPanelConstants from "ActivityPanelConstants" /* 5570 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5587 */;
import transitionToChannel from "transitionToChannel" /* 5669 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11069 */;
import FramePoolManagerDefault from "FramePoolManager" /* 11756 */;
import FramesConstants from "FramesConstants" /* 6727 */;
import size from "module_2" /* 2 */;

const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ asLaunched: closure_4, FrameLayoutModes: hasOwnProperty } = FramesConstants);
let result = size.fileFinishedImporting("modules/conjure/background_frames/conjureBackgroundFramePlatform.native.tsx");

export default {
  isInHostWindow() {
    return false;
  },
  isActivityPopoutOpen() {
    return false;
  },
  isPictureInPicture(surface) {
    const tmp = React4(surface);
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
    return null != FramePoolManagerDefault.getWinningTarget(id);
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