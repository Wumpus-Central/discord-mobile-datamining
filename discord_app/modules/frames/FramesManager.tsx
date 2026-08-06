// discord_app/modules/frames/FramesManager.tsx
import map from "map";
import ME from "ME";
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import "initialize";

let c4;
let c5;
let require = arg1;
({ AnalyticEvents: c4, RPCCloseCodes: c5 } = ME);
const prototype = function FramesManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    RPC_APP_DISCONNECTED(arg0) {
      applyArgumentsResult.handleRPCDisconnect(arg0);
    },
    FRAME_LAUNCH(applicationId) {
      const result = applyArgumentsResult(10521).trackFrameSessionStart(applicationId.applicationId);
    },
    FRAME_LAUNCH_FAIL(applicationId) {
      const result = applyArgumentsResult(10531).discardPendingFrameLaunch(applicationId.applicationId);
    },
    FRAME_STOP(applicationId) {
      applyArgumentsResult(10521).trackFrameSessionEnd(applicationId.applicationId);
    }
  };
  applyArgumentsResult.handleRPCDisconnect = function handleRPCDisconnect(arg0) {
    let reason;
    let source;
    ({ reason, source } = arg0);
    if (null != reason) {
      if (source.type === outer1_6.POST_MESSAGE) {
        const frameByIframeId = outer1_3.getFrameByIframeId(source.iframeId);
        if (null != frameByIframeId) {
          applyArgumentsResult.leaveFrame(frameByIframeId.id);
          if (reason.code !== outer1_5.CLOSE_NORMAL) {
            let obj = outer1_1(outer1_2[6]);
            obj = { rpc_close_code: null, rpc_message: null, application_id: null };
            ({ code: obj2[0], message: obj2[1] } = reason);
            obj[2] = frameByIframeId.applicationId;
            obj.track(outer1_4.ACTIVITY_CLOSED_RPC_ERROR, obj);
            const result = obj3.showRPCDisconnectErrorUI(reason);
          }
          obj3 = applyArgumentsResult;
        }
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype.displayName = "FramesManager";
let result = require("RPC_SCOPE_CONFIG").fileFinishedImporting("modules/frames/FramesManager.tsx");

export default prototype;