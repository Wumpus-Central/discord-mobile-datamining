// === Module 10670: prototype ===

// Module 10670 (prototype)
import map from "map";
import ME from "ME";
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
      const result = applyArgumentsResult(10671).trackFrameSessionStart(applicationId.applicationId);
    },
    FRAME_LAUNCH_FAIL(applicationId) {
      const result = applyArgumentsResult(10677).discardPendingFrameLaunch(applicationId.applicationId);
    },
    FRAME_STOP(applicationId) {
      applyArgumentsResult(10671).trackFrameSessionEnd(applicationId.applicationId);
    }
  };
  applyArgumentsResult.handleRPCDisconnect = function handleRPCDisconnect(reason) {
    reason = reason.reason;
    const id = reason.application.id;
    if (null != id) {
      if (null != reason) {
        const connectedFrame = outer1_3.getConnectedFrame();
        let applicationId;
        if (connectedFrame != null) {
          applicationId = connectedFrame.applicationId;
        }
        if (applicationId === id) {
          let obj = { applicationId: null };
          obj[0] = id;
          applyArgumentsResult.leaveFrame(obj);
          if (reason.code !== outer1_5.CLOSE_NORMAL) {
            obj = outer1_1(outer1_2[5]);
            obj = { rpc_close_code: null, rpc_message: null, application_id: null };
            ({ code: obj2[0], message: obj2[1] } = reason);
            obj[2] = id;
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
let result = require("initialize").fileFinishedImporting("modules/frames/FramesManager.tsx");

export default prototype;