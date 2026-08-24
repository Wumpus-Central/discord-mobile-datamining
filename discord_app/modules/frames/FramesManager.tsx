// discord_app/modules/frames/FramesManager.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import closure_3 from "FramesStore.tsx";
import ME from "../../Constants.tsx";
import { TransportTypes } from "../rpc/Constants.tsx";

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
      FRAME_LAUNCH(applicationId) {
            const result = applyArgumentsResult(8716).trackFrameSessionStart(applicationId.applicationId);
          },
      FRAME_LAUNCH_FAIL(applicationId) {
            const result = applyArgumentsResult(8723).discardPendingFrameLaunch(applicationId.applicationId);
          },
      FRAME_STOP(applicationId) {
            applyArgumentsResult(8716).trackFrameSessionEnd(applicationId.applicationId);
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
FramesManager.prototype["leaveFrame"] = function leaveFrame(closure_0) {
  frame = frame.getFrame(closure_0);
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