// === Module 16255: CONTEXT_MENU_ICON_NAMES ===

// Module 16255 (CONTEXT_MENU_ICON_NAMES)
import helpers from "helpers" /* 16258 */;
import contextMenuIcons from "contextMenuIcons" /* 16259 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/rpc-schema/rpc-schema.tsx");

export const CONTEXT_MENU_ICON_NAMES = contextMenuIcons.CONTEXT_MENU_ICON_NAMES;
export function createRPCCommand(AUTHENTICATE, scope) {
  let request;
  dependencyMap = undefined;
  let obj = { scope: scope.scope, validateAccess: scope.validateAccess, handler: scope.handler };
  const tmp = request(16256).RPCCommandSchemas[AUTHENTICATE];
  request = undefined;
  if (tmp != null) {
    request = tmp.request;
  }
  dependencyMap = null;
  if (null != request) {
    obj.validation = function validation(object) {
      if (null == closure_1) {
        closure_1 = helpers.joiReqObj(object.object(request(object)));
      }
      return closure_1;
    };
  }
  return obj;
}
export function createRPCEvent(ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, scope) {
  let subscribeArgs;
  dependencyMap = undefined;
  let obj = { scope: scope.scope, handler: scope.handler };
  const tmp = subscribeArgs(16256).RPCEventSchemas[ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE];
  subscribeArgs = undefined;
  if (tmp != null) {
    subscribeArgs = tmp.subscribeArgs;
  }
  dependencyMap = null;
  if (null != subscribeArgs) {
    obj.validation = function validation(object) {
      if (null == closure_1) {
        closure_1 = helpers.joiReqObj(object.object(subscribeArgs(object)));
      }
      return closure_1;
    };
  }
  return obj;
}