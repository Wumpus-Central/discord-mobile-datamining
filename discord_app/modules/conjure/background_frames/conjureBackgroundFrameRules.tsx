// === Module 18090: conjureBackgroundFrameRules ===

// Module 18090 (conjureBackgroundFrameRules)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5627 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10731 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 13880 */;
import validateConjureAppFrame from "validateConjureAppFrame" /* 15745 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4823 */;
import FramesStore from "FramesStore" /* 6776 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1206 */;
import VoiceChannelAppStore from "VoiceChannelAppStore" /* 18091 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 15747 */;

require = fn;
const FrameIntent = fn(6777).FrameIntent;
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
export const isBuilderPreviewFrame = function isBuilderPreviewFrame(frame) {
  let result = conjurePreviewSurface.isConjurePreviewSurface(frame.surface);
  if (!result) {
    result = conjurePreviewSurface.isConjurePreviewOverlayFrame(frame);
    const tmpResult = conjurePreviewSurface;
  }
  if (!result) {
    let tmp5 = frame.intent === FrameIntent.MAIN;
    if (tmp5) {
      tmp5 = frame.applicationId === ConjureBuilderPreviewStore.getLastBuilderPreviewApplicationId();
    }
    result = tmp5;
  }
  return result;
};