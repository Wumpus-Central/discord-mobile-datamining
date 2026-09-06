// === Module 9569: leaveFrame ===

// Module 9569 (leaveFrame)
import dispatcherDefault from "dispatcher" /* 573 */;
import initializeDefault from "initialize" /* 7118 */;
import closure_3 from "map" /* 9510 */;
import ME from "ME" /* 1074 */;
import { TransportTypes } from "RPC_SCOPE_CONFIG" /* 4465 */;

let require = arg1;
({ AnalyticEvents: c4, RPCCloseCodes: c5 } = ME);
initializeDefault;
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
            const result = applyArgumentsResult(9518).trackFrameSessionStart(applicationId, analyticsContext);
          },
      FRAME_LAUNCH_FAIL(applicationId) {
            const result = applyArgumentsResult(9524).discardPendingFrameLaunch(applicationId.applicationId);
          },
      FRAME_STOP(applicationId) {
            applyArgumentsResult(9518).trackFrameSessionEnd(applicationId.applicationId);
          }
    };
    applyArgumentsResult.handleRPCDisconnect = function handleRPCDisconnect(arg0) {
      ({ reason, source } = arg0);
      if (null != reason) {
        if (source.type === closure_1_6.POST_MESSAGE) {
          const frameByIframeId = closure_1_3.getFrameByIframeId(source.iframeId);
          if (null != frameByIframeId) {
            applyArgumentsResult.leaveFrame(frameByIframeId.id);
            if (reason.code !== closure_1_5.CLOSE_NORMAL) {
              let obj = closure_1_1(closure_1_2[6]);
              obj = { rpc_close_code: null, rpc_message: null, application_id: null };
              ({ code: obj2[0], message: obj2[1] } = reason);
              obj[2] = frameByIframeId.applicationId;
              obj.track(closure_1_4.ACTIVITY_CLOSED_RPC_ERROR, obj);
              const result = obj3.showRPCDisconnectErrorUI(reason);
            }
            obj3 = applyArgumentsResult;
          }
        }
      }
    };
    return applyArgumentsResult;
  }
}
FramesManager.prototype["leaveFrame"] = function leaveFrame(frameId) {
  frame = frame.getFrame(frameId);
  if (null != frame) {
    let obj = dispatcherDefault;
    obj = { type: "FRAME_STOP", applicationId: null, frameId: null };
    ({ applicationId: obj2[1], id: obj2[2] } = frame);
    obj.dispatch(obj);
  }
};
FramesManager.displayName = "FramesManager";
let result = require("set").fileFinishedImporting("modules/frames/FramesManager.tsx");

export default FramesManager;