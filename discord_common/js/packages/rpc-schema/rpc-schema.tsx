// === Module 14476: CONTEXT_MENU_ICON_NAMES ===

// Module 14476 (CONTEXT_MENU_ICON_NAMES)
import helpers from "helpers" /* 14478 */;
import contextMenuIcons from "contextMenuIcons" /* 14479 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/rpc-schema/rpc-schema.tsx");

export const CONTEXT_MENU_ICON_NAMES = contextMenuIcons.CONTEXT_MENU_ICON_NAMES;
export const createRPCCommand = function createRPCCommand(AUTHENTICATE, scope) {
  let request;
  dependencyMap = undefined;
  let obj = { scope: scope.scope, handler: scope.handler };
  const tmp = request(14477).RPCCommandSchemas[AUTHENTICATE];
  request = undefined;
  if (tmp != null) {
    request = tmp.request;
  }
  dependencyMap = null;
  if (null != request) {
    obj.validation = (object) => {
      if (null == closure_1) {
        closure_1 = helpers.joiReqObj(object.object(request(object)));
      }
      return closure_1;
    };
  }
  return obj;
};