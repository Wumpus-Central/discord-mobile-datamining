// discord_app/modules/frames/openFrame.tsx
import router_utils from "../routing/router_utils.tsx";
import EmbeddedSurfaceType from "../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import FramesActionCreatorsDefault from "FramesActionCreators.native.tsx";
import FramesStore from "FramesStore.tsx";

require = fn;
const FramesConstants = fn(6761);
({ MAIN_SURFACE: closure_4, makeFrameId: hasOwnProperty } = FramesConstants);
const Routes = fn(1087).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/openFrame.tsx");

export default function openFrame(arg0) {
  ({ applicationId, channel, analyticsContext } = arg0);
  if (null == channel) {
    const obj2 = { applicationId, surface, analyticsContext };
    const obj3 = { frameId: null, launched: null };
    obj3.frameId = hasOwnProperty(applicationId, surface);
    obj3.launched = FramesActionCreatorsDefault.launchFrame(obj2);
    return obj3;
  } else {
    const obj4 = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL };
    const merged = Object.assign(channel);
    const obj6 = { applicationId, surface: obj4, analyticsContext, showErrorModal: false };
    const launchFrameResult1 = FramesActionCreatorsDefault.launchFrame(obj6);
    const catchPromise = FramesActionCreatorsDefault.launchFrame(obj6).catch(() => {});
    router_utils.transitionTo(Routes.CHANNEL(channel.guildId, channel.channelId));
    const obj8 = { frameId: hasOwnProperty(applicationId, obj4), launched: catchPromise };
    return obj8;
  }
}
export const shouldOpenAppChannel = function shouldOpenAppChannel(id) {
  return null == FramesStore.getFrame(hasOwnProperty(id, surface));
};
