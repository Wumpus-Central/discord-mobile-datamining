// discord_app/modules/rpc/server/commands/conjureLivePreview.tsx
import RPCErrorDefault from "../../RPCError.tsx";
import conjureLiveRelaunch from "../../../conjure/live_reload/conjureLiveRelaunch.tsx";
import validateEmbeddedAppFrameDefault from "../../helpers/validateEmbeddedAppFrame.tsx";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import ConjureProjectStore from "../../../conjure/projects/ConjureProjectStore.tsx";

require = fn;
let Constants = fn(5635);
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = fn(1085);
({ RPCCommands, RPCErrors: hasOwnProperty } = Constants);
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
let obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(14560);
obj[RPCCommands.RELAUNCH_FRAME] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.RELAUNCH_FRAME, {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(socket) {
    const applicationId = validateEmbeddedAppFrameDefault(socket.socket).frame.applicationId;
    const application = ApplicationStore.getApplication(applicationId);
    let prop;
    if (application != null) {
      prop = application.vibegrationsProjectId;
    }
    if (null == prop) {
      if (!ConjureProjectStore.isConjureProjectApplication(applicationId)) {
        const obj = { errorCode: constants.UNAUTHORIZED_FOR_APPLICATION };
        const tmp10 = new RPCErrorDefault(obj, "Only a Conjuring app frame can relaunch");
        throw tmp10;
      }
    }
    const obj2 = { relaunched: conjureLiveRelaunch.relaunchAppFramesForBuild(applicationId, socket.args.build) };
    return obj2;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/conjureLivePreview.tsx");

export default obj;
