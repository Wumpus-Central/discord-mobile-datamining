// === Module 13850: set ===

// Module 13850 (set)
import openUserSettings from "openUserSettings" /* 7360 */;
import getApplicationFlags from "getApplicationFlags" /* 7873 */;
import prototypeDefault from "prototype" /* 8752 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 8755 */;
import recurseReplaceContentTree from "recurseReplaceContentTree" /* 8757 */;
import ACTIVITY_SHARE_LINK_MODAL from "ACTIVITY_SHARE_LINK_MODAL" /* 13853 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import participantFromServer from "participantFromServer" /* 1390 */;
import addApplication from "addApplication" /* 4478 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4277 */;
import ME from "ME" /* 676 */;
import items3 from "items3" /* 4481 */;
import createRPCCommand from "createRPCCommand" /* 13846 */;

require = fn;
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = RPC_SCOPE_CONFIG);
({ ApplicationFlags: closure_6, PopoutWindowKeys: error, RPCCommands, RPCErrors: closure_8, UserSettingsSections: c9, AnalyticEvents: c10 } = ME);
const items = [, ];
({ AM_HARMONY_PRD_APPLICATION_ID: arr[0], AM_HARMONY_STG_APPLICATION_ID: arr[1] } = items3);
const set = new Set(items);
const items1 = [RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE];
let obj = {
  validation(arg0) {
    return createRpcJoiSchemaObjectDefault(arg0);
  },
  scope: { [RPC_SCOPE_CONFIG.ANY]: items2 },
  handler(socket) {
    socket = socket.socket;
    let obj = recurseReplaceContentTree;
    const result = obj.validatePostMessageTransport(socket.transport);
    if (set.has(obj2.validateApplication(socket.application))) {
      obj = { screen: null };
      obj[0] = constants3.CONNECTIONS;
      openUserSettings.openUserSettings(obj);
    } else {
      obj = { errorCode: null };
      obj[0] = constants2.UNAUTHORIZED_FOR_APPLICATION;
      const tmp9 = new prototypeDefault(obj, "Command not available for this application");
      throw tmp9;
    }
    obj2 = recurseReplaceContentTree;
  }
};
items2 = [RPC_AUTHENTICATED_SCOPE];
items3 = [RPC_AUTHENTICATED_SCOPE];
obj[RPCCommands.SHARE_LINK] = createRPCCommand.createRPCCommand(RPCCommands.SHARE_LINK, {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items3 },
  handler(arg0) {
    ({ socket, args } = arg0);
    ({ custom_id: require, message: importDefault, link_id: dependencyMap } = args);
    let obj = recurseReplaceContentTree;
    let result = obj.validatePostMessageTransport(socket.transport);
    const validateApplicationResult = recurseReplaceContentTree.validateApplication(socket.application);
    c3 = validateApplicationResult;
    if (null == validateApplicationResult) {
      obj = { errorCode: null };
      obj[0] = constants2.INVALID_COMMAND;
      const tmp22 = new prototypeDefault(obj, "No application.");
      throw tmp22;
    } else {
      if (tmpResult.hasApplicationFlag(socket.application, constants.EMBEDDED)) {
        const promise = new Promise((arg0) => {
          closure_0 = arg0;
          let obj = {
            applicationId: c3,
            customId: closure_0,
            linkId: closure_2,
            message: closure_1,
            onShare(stateFromStores, didCopyLink) {
              let tmp2 = didCopyLink;
              if (!didCopyLink) {
                tmp2 = stateFromStores;
              }
              callback({ success: tmp2, didCopyLink, didSendMessage: stateFromStores });
            }
          };
          const result = obj.openActivityShareLinkModal(obj);
        });
        return promise;
      } else {
        obj = { errorCode: null };
        obj[0] = constants2.INVALID_COMMAND;
        const tmp10 = new prototypeDefault(obj, "This application cannot access this API");
        throw tmp10;
      }
      tmpResult = getApplicationFlags;
    }
  }
});
let result = require("obj132").fileFinishedImporting("modules/rpc/server/commands/links.tsx");

export default obj;