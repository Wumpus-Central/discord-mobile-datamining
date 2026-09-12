// === Module 9699: FramesManager ===

// Module 9699 (FramesManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import FramesStore from "FramesStore" /* 9640 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7221 */;

let require = fn;
const EmbeddedSurfaceType = fn(9641).EmbeddedSurfaceType;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, RPCCloseCodes: metroRequire } = Constants);
const TransportTypes = fn(4541).TransportTypes;
class FramesManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      RPC_APP_DISCONNECTED(arg0) {
            applyArgumentsResult.handleRPCDisconnect(arg0);
          },
      FRAME_LAUNCH(arg0) {
            ({ applicationId, analyticsContext } = arg0);
            const result = applyArgumentsResult(9648).trackFrameSessionStart(applicationId, analyticsContext);
          },
      FRAME_LAUNCH_FAIL(arg0) {
            ({ applicationId, error, analyticsContext } = arg0);
            const result = applyArgumentsResult(9648).trackFrameSessionStartFailed(applicationId, error, analyticsContext);
          },
      FRAME_STOP(applicationId) {
            applyArgumentsResult(9648).trackFrameSessionEnd(applicationId.applicationId);
          },
      VOICE_CHANNEL_SELECT(arg0) {
            const result = applyArgumentsResult.handleVoiceChannelSelect(arg0);
          },
      CHANNEL_DELETE(channel) {
            const framesForChannel = FramesStore.getFramesForChannel(channel.channel.id);
            for (const item10010 of framesForChannel) {
              let leaveFrameResult = applyArgumentsResult.leaveFrame(item10010.id);
              continue;
            }
          },
      CHANNEL_UPDATES(arg0) {
            for (const item10008 of tmp) {
              let framesForChannel = FramesStore.getFramesForChannel(item10008.id);
              for (const item10018 of framesForChannel) {
                if (item10018.applicationId !== item10008.application_id) {
                  let leaveFrameResult = applyArgumentsResult.leaveFrame(tmp7.id);
                }
                continue;
              }
              continue;
            }
          }
    };
    applyArgumentsResult.handleVoiceChannelSelect = function handleVoiceChannelSelect(currentVoiceChannelId) {
      currentVoiceChannelId = currentVoiceChannelId.currentVoiceChannelId;
      if (null != currentVoiceChannelId) {
        if (currentVoiceChannelId !== currentVoiceChannelId.channelId) {
          const obj = { type: EmbeddedSurfaceType.VOICE_CHANNEL, channelId: currentVoiceChannelId };
          const framesForSurface = FramesStore.getFramesForSurface(obj);
          for (const item10014 of framesForSurface) {
            let leaveFrameResult = applyArgumentsResult.leaveFrame(item10014.id);
            continue;
          }
        }
      }
    };
    applyArgumentsResult.handleRPCDisconnect = function handleRPCDisconnect(arg0) {
      ({ reason, source } = arg0);
      if (null != reason) {
        if (source.type === TransportTypes.POST_MESSAGE) {
          const frameByIframeId = FramesStore.getFrameByIframeId(source.iframeId);
          if (null != frameByIframeId) {
            applyArgumentsResult.leaveFrame(frameByIframeId.id);
            if (reason.code !== constants2.CLOSE_NORMAL) {
              const obj = { rpc_close_code: null, rpc_message: null, application_id: null };
              ({ code: obj2.rpc_close_code, message: obj2.rpc_message } = reason);
              obj.application_id = frameByIframeId.applicationId;
              obj.track(constants.ACTIVITY_CLOSED_RPC_ERROR, obj);
              const result = applyArgumentsResult.showRPCDisconnectErrorUI(reason);
            }
          }
        }
      }
    };
    return applyArgumentsResult;
  }
}
FramesManager.prototype["leaveFrame"] = function leaveFrame(frameId) {
  const frame = FramesStore.getFrame(frameId);
  if (null != frame) {
    const obj = { type: "FRAME_STOP", applicationId: null, frameId: null };
    ({ applicationId: obj2.applicationId, id: obj2.frameId } = frame);
    obj.dispatch(obj);
  }
};
FramesManager.displayName = "FramesManager";
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/FramesManager.tsx");

export default FramesManager;