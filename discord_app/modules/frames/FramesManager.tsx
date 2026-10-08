// discord_app/modules/frames/FramesManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import EmbeddedSurfaceType from "../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import isPostMessageDisconnectDefault from "../rpc/helpers/isPostMessageDisconnect.tsx";
import FramesStore from "FramesStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
const Constants = fn(1085);
({ AnalyticEvents: closure_4, RPCCloseCodes: hasOwnProperty } = Constants);
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
        const result = applyArgumentsResult(10625).trackFrameSessionStart(applicationId, analyticsContext);
      },
      FRAME_LAUNCH_FAIL(arg0) {
        ({ applicationId, error, analyticsContext } = arg0);
        const result = applyArgumentsResult(10625).trackFrameSessionStartFailed(applicationId, error, analyticsContext);
      },
      FRAME_STOP(applicationId) {
        applyArgumentsResult(10625).trackFrameSessionEnd(applicationId.applicationId);
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
      GUILD_DELETE(guild) {
        guild = guild.guild;
        if (!("unavailable" in guild)) {
          const allFrames = FramesStore.getAllFrames();
          for (const item10014 of allFrames) {
            let tmp8 = item10014.surface.type !== EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN;
            if (tmp8) {
              tmp8 = item10014.surface.type !== EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY;
            }
            if (tmp8) {
              tmp8 = item10014.surface.guildId === guild.id;
            }
            if (tmp8) {
              let leaveFrameResult = applyArgumentsResult.leaveFrame(item10014.id);
            }
            continue;
          }
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
      },
    };
    applyArgumentsResult.handleVoiceChannelSelect = function handleVoiceChannelSelect(currentVoiceChannelId) {
      currentVoiceChannelId = currentVoiceChannelId.currentVoiceChannelId;
      if (null != currentVoiceChannelId) {
        if (currentVoiceChannelId !== currentVoiceChannelId.channelId) {
          const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, channelId: currentVoiceChannelId };
          const framesForSurface = FramesStore.getFramesForSurface(obj);
          for (const item10018 of framesForSurface) {
            let leaveFrameResult = applyArgumentsResult.leaveFrame(item10018.id);
            continue;
          }
        }
      }
    };
    applyArgumentsResult.handleRPCDisconnect = function handleRPCDisconnect(reason) {
      reason = reason.reason;
      if (null != reason) {
        if (isPostMessageDisconnectDefault(reason)) {
          const frameByEmbeddedContext = FramesStore.getFrameByEmbeddedContext(reason.context, reason.source.iframeId);
          if (null != frameByEmbeddedContext) {
            applyArgumentsResult.leaveFrame(frameByEmbeddedContext.id);
            if (reason.code !== constants2.CLOSE_NORMAL) {
              const obj = { rpc_close_code: null, rpc_message: null, application_id: null };
              ({ code: obj2.rpc_close_code, message: obj2.rpc_message } = reason);
              obj.application_id = frameByEmbeddedContext.applicationId;
              AnalyticsUtilsDefault.track(constants.ACTIVITY_CLOSED_RPC_ERROR, obj);
              const result = applyArgumentsResult.showRPCDisconnectErrorUI(reason);
              const tmp6Result = AnalyticsUtilsDefault;
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
    ({ applicationId: obj2.applicationId, id: obj2.frameId } = frame);
    DispatcherDefault.dispatch({ type: "FRAME_STOP", applicationId: null, frameId: null });
    const obj3 = { type: "FRAME_STOP", applicationId: null, frameId: null };
  }
};
FramesManager.displayName = "FramesManager";
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/FramesManager.tsx");

export default FramesManager;
