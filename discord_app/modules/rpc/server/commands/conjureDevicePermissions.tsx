// discord_app/modules/rpc/server/commands/conjureDevicePermissions.tsx
import requestConjureDevicePermissions from "../../../conjure/device_permissions/requestConjureDevicePermissions.tsx";
import validateConjureAppFrameDefault from "../../helpers/validateConjureAppFrame.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
const Constants = fn(6363);
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = fn(1087).RPCCommands;
let obj = { [RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
const obj2 = {};
let CONTEXT_MENU_ICON_NAMES = fn(15678);
obj2[RPCCommands.GET_DEVICE_PERMISSIONS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.GET_DEVICE_PERMISSIONS,
  {
    scope: obj,
    handler(socket) {
      const frame = validateConjureAppFrameDefault(socket.socket).frame;
      const obj = { permissions: null };
      const prop = frame(10775).CONJURE_DEVICE_PERMISSION_NAMES;
      obj.permissions = prop.map((item) =>
        requestConjureDevicePermissions.getConjureDevicePermissionStatus(frame.applicationId, item),
      );
      return obj;
    },
  },
);
CONTEXT_MENU_ICON_NAMES = fn(15678);
obj2[RPCCommands.REQUEST_DEVICE_PERMISSIONS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.REQUEST_DEVICE_PERMISSIONS,
  {
    scope: obj,
    handler(arg0) {
      ({ socket: require, args: importDefault } = arg0);
      return (async () => {
        value = {};
        ({ frame, iframeId } = v1(15662)(require));
        await v1(10773)({ applicationId: frame.applicationId, iframeId, permissions: permissions.permissions });
        value.permissions = value;
        return value;
      })();
    },
  },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/conjureDevicePermissions.tsx");

export default obj2;
