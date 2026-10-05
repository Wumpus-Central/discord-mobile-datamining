// === Module 14349: conjureLivePreview ===

// Module 14349 (conjureLivePreview)
import RPCErrorDefault from "RPCError" /* 9026 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 14302 */;
import conjureLiveRelaunch from "conjureLiveRelaunch" /* 14350 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8699 */;
import FramesStore from "FramesStore" /* 8703 */;

require = fn;
let Constants = fn(5316);
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = fn(1085);
({ RPCCommands, RPCErrors: metroRequire } = Constants);
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
let obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(14317);
obj[RPCCommands.RELAUNCH_FRAME] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.RELAUNCH_FRAME, {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(socket) {
    const tmp3 = validateEmbeddedAppFrameDefault(socket.socket);
    const applicationId = tmp3.applicationId;
    const frameByIframeId = FramesStore.getFrameByIframeId(tmp3.iframeId);
    const application = ApplicationStore.getApplication(applicationId);
    let prop;
    if (application != null) {
      prop = application.vibegrationsProjectId;
    }
    let result = null != prop;
    if (!result) {
      result = ConjureProjectStore.isConjureProjectApplication(applicationId);
    }
    let applicationId1;
    if (frameByIframeId != null) {
      applicationId1 = frameByIframeId.applicationId;
    }
    if (applicationId1 === applicationId) {
      if (result) {
        const obj = { relaunched: conjureLiveRelaunch.relaunchAppFramesForBuild(applicationId, socket.args.build) };
        return obj;
      }
    }
    throw new RPCErrorDefault({ errorCode: constants.UNAUTHORIZED_FOR_APPLICATION }, "Only a Conjuring app frame can relaunch");
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/conjureLivePreview.tsx");

export default obj;