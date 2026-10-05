// === Module 14349: conjureLivePreview ===

// Module 14349 (conjureLivePreview)
import RPCErrorDefault from "RPCError" /* 9026 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 14302 */;
import conjureLiveRelaunch from "conjureLiveRelaunch" /* 14350 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8699 */;
import FramesStore from "FramesStore" /* 8703 */;
import Constants_mod from "Constants" /* 5316 */;
import Constants_mod2 from "Constants" /* 1085 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 14317 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let metroRequire;
let Constants = Constants_mod2;
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = Constants_mod2;
({ RPCCommands, RPCErrors: metroRequire } = Constants);
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
let obj = {};
const RELAUNCH_FRAME = RPCCommands.RELAUNCH_FRAME;
let obj2 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(args) {
    let obj2;
    const build = args.args.build;
    const tmp3 = validateEmbeddedAppFrameDefault(args.socket);
    const applicationId = tmp3.applicationId;
    const frameByIframeId = FramesStore.getFrameByIframeId(tmp3.iframeId);
    const application = ApplicationStore.getApplication(applicationId);
    let prop;
    if (application != null) {
      prop = application.vibegrationsProjectId;
    }
    const result = null != prop || ConjureProjectStore.isConjureProjectApplication(applicationId);
    let applicationId1;
    if (frameByIframeId != null) {
      applicationId1 = frameByIframeId.applicationId;
    }
    if (applicationId1 === applicationId) {
      if (result) {
        const obj = { relaunched: obj2.relaunchAppFramesForBuild(applicationId, build) };
        obj2 = conjureLiveRelaunch;
        return obj;
      }
    }
    const obj3 = { errorCode: metroRequire.UNAUTHORIZED_FOR_APPLICATION };
    const tmp11 = new RPCErrorDefault(obj3, "Only a Conjuring app frame can relaunch");
    throw tmp11;
  }
};
obj[RELAUNCH_FRAME] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.RELAUNCH_FRAME, obj2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/conjureLivePreview.tsx");

export default obj;