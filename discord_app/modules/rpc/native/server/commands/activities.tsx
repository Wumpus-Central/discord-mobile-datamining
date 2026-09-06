// === Module 14513: commands/activities ===

// Module 14513 (commands/activities)
import RPCErrorDefault from "RPCError" /* 9554 */;
import validateOpenInviteDialog from "validateOpenInviteDialog" /* 14480 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const instant_invite_InstantInviteUtils = tmp(9820);
require = fn;
let Constants = fn(4465);
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = fn(1074);
({ InstantInviteSources: closure_4, RPCCommands, RPCErrors: hasOwnProperty } = Constants);
const NativePermissionTypes = fn(4770).NativePermissionTypes;
let obj = {};
obj = { scope: null, handler: null };
obj = {};
const items = [fn(8339).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler(socket) {
  socket = socket.socket;
  let obj = validateOpenInviteDialog;
  const result = obj.validateOpenInviteDialog(socket);
  if (null != result.frame) {
    obj = { errorCode: constants2.UNKNOWN_ERROR };
    const tmp12 = new RPCErrorDefault(obj, "Cannot support frames (yet)");
    throw tmp12;
  } else {
    obj = { source: constants.ACTIVITY_INVITE, targetApplicationId: null };
    const id = socket.application.id;
    obj.targetApplicationId = id;
    const result1 = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(tmp4, obj);
  }
};
obj[RPCCommands.OPEN_INVITE_DIALOG] = obj;
let obj1 = { scope: null, handler: null };
let obj2 = {};
const items1 = [fn(8339).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj2[RPC_SCOPE_CONFIG.ANY] = items1;
obj1.scope = obj2;
obj1.handler = function handler(socket) {
  socket = socket.socket;
  return (async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            let id = socket.application.id;
            closure_128_0 = id;
            if (null == id) {
              const obj1 = { errorCode: constants.INVALID_COMMAND };
              const tmp62 = new tmp2(9554)(obj1, "No application.");
              throw tmp62;
            } else {
              const tmp91 = tmp2(14468)();
              id = undefined;
              if (tmp91 != null) {
                id = tmp91.id;
              }
              closure_128_1 = id;
              if (null == id) {
                const obj2 = { errorCode: constants.UNKNOWN_ERROR };
                const tmp54 = new tmp2(9554)(obj2, "Unable to find selected channel");
                throw tmp54;
              } else {
                let obj11 = tmp2(5139);
                const permission = obj11.requestPermission(constants2.PHOTOS);
                dependencyMap = 1;
                c3 = 1;
                const obj3 = {
                  value: permission.catch(() => {
                                throw new closure_1_1(dependencyMap[6])({ errorCode: constants.UNKNOWN_ERROR }, "Failed requesting photo permissions");
                              }),
                  done: false
                };
                return obj3;
              }
            }
          }
        } else if (1 === tmp6) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (value) {
            dependencyMap = 2;
            c3 = 1;
            const obj5 = { value: tmp85(5150).launchImageLibraryAsync({ mediaType: "photo", includeBase64: false, selectionLimit: 1 }), done: false };
            return obj5;
          } else {
            const obj6 = { errorCode: constants.UNKNOWN_ERROR };
            const tmp42 = new tmp85(9554)(obj6, "Missing photo permissions");
            throw tmp42;
          }
        } else if (2 === tmp6) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_128_2 = value.assets[0];
            if (null == closure_128_2) {
              const obj8 = { errorCode: constants.UNKNOWN_ERROR };
              const tmp36 = new tmp2(9554)(obj8, "No image selected");
              throw tmp36;
            } else {
              const obj9 = { name: closure_128_2.fileName, type: closure_128_2.type, uri: closure_128_2.uri };
              dependencyMap = 3;
              c3 = 1;
              const obj10 = { value: tmp3(9504).uploadImageAttachment(closure_128_0, closure_128_1, obj9), done: false };
              return obj10;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj11 = { value, done: true };
          return obj11;
        } else {
          closure_128_3 = value;
          if (null != closure_128_3) {
            if (null != closure_128_3.url) {
              if (!(closure_128_3 instanceof tmp2(4462))) {
                obj = { image_url: closure_128_3.url };
                c3 = 3;
                const obj12 = { value: obj, done: true };
                return obj12;
              }
            }
          }
          const obj13 = { errorCode: constants.UNKNOWN_ERROR };
          const _JSON = JSON;
          let tmp20 = tmp2(9554);
          tmp20 = new tmp20(obj13, JSON.stringify(closure_128_3));
          throw tmp20;
        }
      } catch (tmp64) {
        c3 = tmp;
        throw tmp64;
      }
    }
  })();
};
obj[RPCCommands.INITIATE_IMAGE_UPLOAD] = obj1;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/native/server/commands/activities.tsx");

export default obj;