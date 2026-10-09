// === Module 14725: FramesManager ===

// Module 14725 (FramesManager)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import leaveFrame from "leaveFrame" /* 10811 */;
import isPostMessageDisconnectDefault from "isPostMessageDisconnect" /* 14726 */;
import FramesStore from "FramesStore" /* 10772 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6804 */;

require = fn;
const Constants = fn(1085);
({ AnalyticEvents: closure_4, RPCCloseCodes: hasOwnProperty } = Constants);
const prototype = function FramesManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    RPC_APP_DISCONNECTED(arg0) {
      applyArgumentsResult.handleRPCDisconnect(arg0);
    },
    FRAME_LAUNCH(arg0) {
      ({ applicationId, analyticsContext } = arg0);
      const result = applyArgumentsResult(14650).trackFrameSessionStart(applicationId, analyticsContext);
    },
    FRAME_LAUNCH_FAIL(arg0) {
      ({ applicationId, error, analyticsContext } = arg0);
      const result = applyArgumentsResult(14650).trackFrameSessionStartFailed(applicationId, error, analyticsContext);
    },
    FRAME_STOP(applicationId) {
      applyArgumentsResult(14650).trackFrameSessionEnd(applicationId.applicationId);
    },
    VOICE_CHANNEL_SELECT(arg0) {
      const result = applyArgumentsResult.handleVoiceChannelSelect(arg0);
    },
    CHANNEL_DELETE(channel) {
      const framesForChannel = FramesStore.getFramesForChannel(channel.channel.id);
      for (const item10010 of framesForChannel) {
        let obj = applyArgumentsResult(10811);
        let leaveFrameResult = obj.leaveFrame(item10010.id);
        continue;
      }
    },
    GUILD_DELETE(guild) {
      guild = guild.guild;
      if (!("unavailable" in guild)) {
        const allFrames = FramesStore.getAllFrames();
        for (const item10014 of allFrames) {
          let tmp8 = item10014.surface.type !== applyArgumentsResult(8594).EmbeddedSurfaceType.MAIN;
          if (tmp8) {
            tmp8 = item10014.surface.type !== applyArgumentsResult(8594).EmbeddedSurfaceType.OVERLAY;
          }
          if (tmp8) {
            tmp8 = item10014.surface.guildId === guild.id;
          }
          if (tmp8) {
            let tmp6Result = applyArgumentsResult(10811);
            let leaveFrameResult = tmp6Result.leaveFrame(item10014.id);
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
            let obj = applyArgumentsResult(10811);
            let leaveFrameResult = obj.leaveFrame(tmp7.id);
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
        const obj2 = { type: applyArgumentsResult(8594).EmbeddedSurfaceType.VOICE_CHANNEL, channelId: currentVoiceChannelId };
        const framesForSurface = FramesStore.getFramesForSurface(obj2);
        for (const item10005 of framesForSurface) {
          let obj = applyArgumentsResult(10811);
          let leaveFrameResult = obj.leaveFrame(item10005.id);
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
          leaveFrame.leaveFrame(frameByEmbeddedContext.id);
          if (reason.code !== constants2.CLOSE_NORMAL) {
            const obj = { rpc_close_code: null, rpc_message: null, application_id: null };
            ({ code: obj2.rpc_close_code, message: obj2.rpc_message } = reason);
            obj.application_id = frameByEmbeddedContext.applicationId;
            AnalyticsUtilsDefault.track(constants.ACTIVITY_CLOSED_RPC_ERROR, obj);
            const result = applyArgumentsResult.showRPCDisconnectErrorUI(reason);
            const tmp7Result = AnalyticsUtilsDefault;
          }
        }
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype.displayName = "FramesManager";
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/FramesManager.tsx");

export default prototype;