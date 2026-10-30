// === Module 16305: commands/conjureDevicePermissions ===

// Module 16305 (commands/conjureDevicePermissions)
import requestConjureDevicePermissions from "requestConjureDevicePermissions" /* 10932 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 16247 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
const Constants = fn(6444);
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = fn(1072).RPCCommands;
let obj = { [RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
const obj2 = {};
let CONTEXT_MENU_ICON_NAMES = fn(16255);
obj2[RPCCommands.GET_DEVICE_PERMISSIONS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_DEVICE_PERMISSIONS, {
  scope: obj,
  handler(socket) {
    const frame = validateConjureAppFrameDefault(socket.socket).frame;
    const obj = { permissions: null };
    const prop = frame(10934).CONJURE_DEVICE_PERMISSION_NAMES;
    obj.permissions = prop.map((item) => requestConjureDevicePermissions.getConjureDevicePermissionStatus(frame.applicationId, item));
    return obj;
  }
});
CONTEXT_MENU_ICON_NAMES = fn(16255);
obj2[RPCCommands.REQUEST_DEVICE_PERMISSIONS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.REQUEST_DEVICE_PERMISSIONS, {
  scope: obj,
  handler(arg0) {
    ({ socket: require, args: importDefault } = arg0);
    return (async () => {
      value = {};
      ({ frame, iframeId } = v1(16247)(require));
      await v1(10932)({ applicationId: frame.applicationId, iframeId, permissions: permissions.permissions });
      value.permissions = value;
      return value;
    })();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/conjureDevicePermissions.tsx");

export default obj2;