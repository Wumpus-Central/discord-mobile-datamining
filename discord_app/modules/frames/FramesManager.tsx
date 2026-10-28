// === Module 16064: FramesManager ===

// Module 16064 (FramesManager)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import ChannelRecord from "ChannelRecord" /* 4860 */;
import leaveFrame from "leaveFrame" /* 10803 */;
import isPostMessageDisconnectDefault from "isPostMessageDisconnect" /* 16065 */;
import FramesStore from "FramesStore" /* 6810 */;
import Constants from "Constants" /* 1084 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7250 */;
import size from "module_2" /* 2 */;

const isPrivate = ChannelRecord.isPrivate;
({ AnalyticEvents: hasOwnProperty, RPCCloseCodes: metroRequire } = Constants);
const prototype = function FramesManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    RPC_APP_DISCONNECTED(arg0) {
      applyArgumentsResult.handleRPCDisconnect(arg0);
    },
    FRAME_LAUNCH(arg0) {
      ({ applicationId, analyticsContext } = arg0);
      const result = applyArgumentsResult(15982).trackFrameSessionStart(applicationId, analyticsContext);
    },
    FRAME_LAUNCH_FAIL(arg0) {
      ({ applicationId, error, analyticsContext } = arg0);
      const result = applyArgumentsResult(15982).trackFrameSessionStartFailed(applicationId, error, analyticsContext);
    },
    FRAME_STOP(applicationId) {
      applyArgumentsResult(15982).trackFrameSessionEnd(applicationId.applicationId);
    },
    VOICE_CHANNEL_SELECT(arg0) {
      const result = applyArgumentsResult.handleVoiceChannelSelect(arg0);
    },
    CHANNEL_DELETE(channel) {
      const framesForChannel = FramesStore.getFramesForChannel(channel.channel.id);
      for (const item10010 of framesForChannel) {
        let obj = applyArgumentsResult(10803);
        let leaveFrameResult = obj.leaveFrame(item10010.id);
        continue;
      }
    },
    GUILD_DELETE(guild) {
      guild = guild.guild;
      if (!("unavailable" in guild)) {
        const allFrames = FramesStore.getAllFrames();
        for (const item10014 of allFrames) {
          let tmp8 = item10014.surface.type !== applyArgumentsResult(5662).EmbeddedSurfaceType.MAIN;
          if (tmp8) {
            tmp8 = item10014.surface.type !== applyArgumentsResult(5662).EmbeddedSurfaceType.OVERLAY;
          }
          if (tmp8) {
            tmp8 = item10014.surface.guildId === guild.id;
          }
          if (tmp8) {
            let tmp6Result = applyArgumentsResult(10803);
            let leaveFrameResult = tmp6Result.leaveFrame(item10014.id);
          }
          continue;
        }
      }
    },
    CHANNEL_UPDATES(arg0) {
      for (const item10008 of tmp) {
        if (!isPrivate(item10008.type)) {
          let framesForChannel = FramesStore.getFramesForChannel(item10008.id);
          for (const item10022 of framesForChannel) {
            let tmp12 = item10022.surface.type !== applyArgumentsResult(5662).EmbeddedSurfaceType.MAIN;
            if (tmp12) {
              tmp12 = item10022.applicationId !== item10008.application_id;
            }
            if (tmp12) {
              let tmp10Result = applyArgumentsResult(10803);
              let leaveFrameResult = tmp10Result.leaveFrame(item10022.id);
            }
            continue;
          }
        }
        continue;
      }
    }
  };
  applyArgumentsResult.handleVoiceChannelSelect = function handleVoiceChannelSelect(currentVoiceChannelId) {
    currentVoiceChannelId = currentVoiceChannelId.currentVoiceChannelId;
    if (null != currentVoiceChannelId) {
      if (currentVoiceChannelId !== currentVoiceChannelId.channelId) {
        const obj2 = { type: applyArgumentsResult(5662).EmbeddedSurfaceType.VOICE_CHANNEL, channelId: currentVoiceChannelId };
        const framesForSurface = FramesStore.getFramesForSurface(obj2);
        for (const item10005 of framesForSurface) {
          let obj = applyArgumentsResult(10803);
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
let result = size.fileFinishedImporting("modules/frames/FramesManager.tsx");

export default prototype;