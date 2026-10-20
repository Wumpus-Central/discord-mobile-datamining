// === Module 17794: conjureBackgroundFrameRules ===

// Module 17794 (conjureBackgroundFrameRules)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5587 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11031 */;
import validateConjureAppFrame from "validateConjureAppFrame" /* 15533 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4799 */;
import FramesStore from "FramesStore" /* 6726 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1209 */;
import VoiceChannelAppStore from "VoiceChannelAppStore" /* 17795 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 15535 */;

require = fn;
const FramesConstants = fn(6727);
({ FrameIntent: closure_7, isLaunched: closure_8 } = FramesConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/background_frames/conjureBackgroundFrameRules.tsx");

export const shouldRunInBackgroundOnRelease = function shouldRunInBackgroundOnRelease(frame) {
  let allowConjureRunInBackground = closure_1_8(frame) && frame.data.runsInBackground;
  if (allowConjureRunInBackground) {
    allowConjureRunInBackground = UnsyncedUserSettingsStore.allowConjureRunInBackground;
  }
  if (allowConjureRunInBackground) {
    allowConjureRunInBackground = validateConjureAppFrame.isConjureApplication(frame.applicationId);
  }
  if (allowConjureRunInBackground) {
    const mainFrame = FramesStore.getMainFrame();
    let tmp7 = null == mainFrame || mainFrame.id === frame.id;
    if (tmp7) {
      tmp7 = null == EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    }
    allowConjureRunInBackground = tmp7;
  }
  let tmp9 = allowConjureRunInBackground;
  if (tmp9) {
    let tmp12 = frame.surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL;
    if (tmp12) {
      tmp12 = !conjurePreviewSurface.isConjurePreviewSurface(frame.surface);
      const tmp10Result = conjurePreviewSurface;
    }
    let isAppVisibleResult = !tmp12;
    if (tmp12) {
      isAppVisibleResult = VoiceChannelAppStore.isAppVisible(frame.surface.channelId, true);
    }
    tmp9 = isAppVisibleResult;
  }
  return tmp9;
};
export const isBuilderPreviewFrame = function isBuilderPreviewFrame(surface) {
  let result = conjurePreviewSurface.isConjurePreviewSurface(surface.surface);
  if (!result) {
    let tmp3 = surface.intent === constants.MAIN;
    if (tmp3) {
      tmp3 = surface.applicationId === ConjureBuilderPreviewStore.getLastBuilderPreviewApplicationId();
    }
    result = tmp3;
  }
  return result;
};