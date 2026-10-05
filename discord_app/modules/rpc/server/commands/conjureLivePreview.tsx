// discord_app/modules/rpc/server/commands/conjureLivePreview.tsx
import RPCErrorDefault from "../../RPCError.tsx";
import validateEmbeddedAppFrameDefault from "../../helpers/validateEmbeddedAppFrame.tsx";
import conjureLiveRelaunch from "../../../conjure/live_reload/conjureLiveRelaunch.tsx";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import ConjureProjectStore from "../../../conjure/projects/ConjureProjectStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import Constants_mod from "../../Constants.tsx";
import Constants_mod2 from "../../../../Constants.tsx";
import CONTEXT_MENU_ICON_NAMES from "../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  },
};
obj[RELAUNCH_FRAME] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.RELAUNCH_FRAME, obj2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/conjureLivePreview.tsx");

export default obj;
