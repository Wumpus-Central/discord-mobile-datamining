// discord_common/js/packages/rpc-schema/rpc-schema.tsx
import helpers from "helpers.tsx";
import contextMenuIcons from "contextMenuIcons.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
