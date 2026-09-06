// discord_app/modules/frames/FramesManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import FramesStore from "FramesStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

let require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_4, RPCCloseCodes: hasOwnProperty } = Constants);
const TransportTypes = fn(4465).TransportTypes;
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
      },
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
