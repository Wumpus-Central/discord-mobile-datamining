// discord_app/modules/rpc/server/commands/conjureDevicePermissions.tsx
import validateConjureAppFrameDefault from "../../helpers/validateConjureAppFrame.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import ConjureDevicePermissionStore from "../../../conjure/device_permissions/ConjureDevicePermissionStore.tsx";

const require = fn;
const Constants = fn(6364);
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = fn(1087).RPCCommands;
let obj = { [RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
const set = new Set();
let obj2 = {};
let CONTEXT_MENU_ICON_NAMES = fn(15665);
obj2[RPCCommands.GET_DEVICE_PERMISSIONS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.GET_DEVICE_PERMISSIONS,
  {
    scope: obj,
    handler(socket) {
      const frame = validateConjureAppFrameDefault(socket.socket).frame;
      const obj = { permissions: null };
      const prop = frame(10768).CONJURE_DEVICE_PERMISSION_NAMES;
      obj.permissions = prop.map((permission) => {
        if (obj.isConjureDevicePermissionSupported(permission)) {
          const obj2 = { permission, state: null };
          let str = ConjureDevicePermissionStore.getDecision(frame.applicationId, permission);
          if (str == null) {
            str = "prompt";
          }
          obj2.state = str;
          let obj3 = obj2;
        } else {
          obj3 = { permission, state: "unsupported" };
        }
        return obj3;
      });
      return obj;
    },
  },
);
CONTEXT_MENU_ICON_NAMES = fn(15665);
obj2[RPCCommands.REQUEST_DEVICE_PERMISSIONS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.REQUEST_DEVICE_PERMISSIONS,
  {
    scope: obj,
    handler(arg0) {
      ({ socket: require, args: importDefault } = arg0);
      return (async () => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp7 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === application) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                closure_0 = tmp5;
                closure_128_0 = undefined;
                closure_128_1 = undefined;
                closure_128_3 = undefined;
                closure_128_4 = undefined;
                function statuses() {
                  return {
                    permissions: closure_1_1.map((permission) => {
                      if (obj.isConjureDevicePermissionSupported(permission)) {
                        const obj2 = { permission, state: null };
                        let str = closure_2_5.getDecision(applicationId.applicationId, permission);
                        if (str == null) {
                          str = "prompt";
                        }
                        obj2.state = str;
                        let obj3 = obj2;
                      } else {
                        obj3 = { permission, state: "unsupported" };
                      }
                      return obj3;
                    }),
                  };
                }
                closure_128_2 = statuses;
                const tmp53 = tmp3(tmp40[7])(require);
                const frame = tmp53.frame;
                closure_128_0 = frame;
                permissions = permissions.permissions;
                closure_128_1 = permissions;
                const found = permissions.filter((permission) => {
                  if (obj.isConjureDevicePermissionSupported(permission)) {
                    const obj2 = { permission, state: null };
                    let str = c5.getDecision(applicationId.applicationId, permission);
                    if (str == null) {
                      str = "prompt";
                    }
                    obj2.state = str;
                    let obj3 = obj2;
                  } else {
                    obj3 = { permission, state: "unsupported" };
                  }
                  return "prompt" === obj3.state;
                });
                closure_128_3 = found;
                application = application.getApplication(frame.applicationId);
                if (0 !== found.length) {
                  if (null != application) {
                    if (!set.has(frame.id)) {
                      set.add(frame.id);
                      c3 = 1;
                      const obj4 = { appName: application.name, iframeId: tmp53.iframeId, permissions: found };
                      application = 2;
                      c5 = 1;
                      const obj5 = { value: tmp3(tmp40[8])(obj4), done: false };
                      return obj5;
                    }
                  }
                }
                c5 = 3;
                const obj6 = { value: statuses(), done: true };
                return obj6;
              }
            } else if (1 === tmp8) {
              c3 = 0;
              set.delete(closure_128_0.id);
              throw tmp40;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              set.delete(closure_128_0.id);
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_128_4 = value;
              if (null != closure_128_4) {
                const obj8 = {
                  type: "CONJURE_DEVICE_PERMISSIONS_DECIDE",
                  applicationId: closure_128_0.applicationId,
                  permissions: closure_128_3,
                  allowed: closure_128_4,
                };
                tmp3(tmp40[9]).dispatch(obj8);
                const obj = tmp3(tmp40[9]);
              }
              c3 = 0;
              set.delete(closure_128_0.id);
              c5 = 3;
              const obj9 = { value: closure_128_2(), done: true };
              return obj9;
            }
          } catch (tmp40) {
            if (tmp4 === c3) {
              c5 = tmp2;
              throw tmp40;
            } else {
              application = tmp;
            }
          }
        }
      })();
    },
  },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/conjureDevicePermissions.tsx");

export default obj2;
