// === Module 17875: conjureBackgroundFrameRules ===

// Module 17875 (conjureBackgroundFrameRules)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5608 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10686 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 13768 */;
import validateConjureAppFrame from "validateConjureAppFrame" /* 15605 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;
import FramesStore from "FramesStore" /* 6754 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1209 */;
import VoiceChannelAppStore from "VoiceChannelAppStore" /* 17876 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 15607 */;

require = fn;
const FrameIntent = fn(6755).FrameIntent;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/background_frames/conjureBackgroundFrameRules.tsx");

export const shouldRunInBackgroundOnRelease = function shouldRunInBackgroundOnRelease(frame) {
  let isConjureApplicationResult = frameRunsInBackgroundDefault(frame, UnsyncedUserSettingsStore);
  if (isConjureApplicationResult) {
    isConjureApplicationResult = validateConjureAppFrame.isConjureApplication(frame.applicationId);
  }
  if (isConjureApplicationResult) {
    const mainFrame = FramesStore.getMainFrame();
    let tmp7 = null == mainFrame || mainFrame.id === frame.id;
    if (tmp7) {
      tmp7 = null == EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    }
    isConjureApplicationResult = tmp7;
  }
  let tmp9 = isConjureApplicationResult;
  if (tmp9) {
    let tmp11 = frame.surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL;
    if (tmp11) {
      tmp11 = !conjurePreviewSurface.isConjurePreviewSurface(frame.surface);
      const tmp10Result = conjurePreviewSurface;
    }
    let isAppVisibleResult = !tmp11;
    if (tmp11) {
      isAppVisibleResult = VoiceChannelAppStore.isAppVisible(frame.surface.channelId, true);
    }
    tmp9 = isAppVisibleResult;
  }
  return tmp9;
};
export const isBuilderPreviewFrame = function isBuilderPreviewFrame(surface) {
  let result = conjurePreviewSurface.isConjurePreviewSurface(surface.surface);
  if (!result) {
    let tmp3 = surface.intent === FrameIntent.MAIN;
    if (tmp3) {
      tmp3 = surface.applicationId === ConjureBuilderPreviewStore.getLastBuilderPreviewApplicationId();
    }
    result = tmp3;
  }
  return result;
};