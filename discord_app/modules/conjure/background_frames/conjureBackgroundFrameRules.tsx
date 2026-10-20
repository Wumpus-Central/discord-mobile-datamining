// discord_app/modules/conjure/background_frames/conjureBackgroundFrameRules.tsx
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import conjurePreviewSurface from "../preview/conjurePreviewSurface.tsx";
import validateConjureAppFrame from "../../rpc/helpers/validateConjureAppFrame.tsx";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
import UnsyncedUserSettingsStore from "../../user_settings/UnsyncedUserSettingsStore.tsx";
import VoiceChannelAppStore from "../../voice_channel_apps/VoiceChannelAppStore.tsx";
import ConjureBuilderPreviewStore from "../preview/ConjureBuilderPreviewStore.tsx";

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
