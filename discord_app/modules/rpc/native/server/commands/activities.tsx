// === Module 14794: commands/activities ===

// Module 14794 (commands/activities)
import RPCErrorDefault from "RPCError" /* 9581 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 10076 */;
import validateOpenInviteDialog from "validateOpenInviteDialog" /* 14761 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let Constants = fn(4660);
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = fn(1074);
({ InstantInviteSources: closure_4, RPCCommands, RPCErrors: hasOwnProperty } = Constants);
const NativePermissionTypes = fn(4965).NativePermissionTypes;
let obj = {};
let obj2 = { scope: null, handler: null };
let obj3 = {};
const items = [fn(8610).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj3[RPC_SCOPE_CONFIG.ANY] = items;
obj2.scope = obj3;
obj2.handler = function handler(socket) {
  socket = socket.socket;
  const result = validateOpenInviteDialog.validateOpenInviteDialog(socket);
  if (null != result.frame) {
    const obj2 = { errorCode: constants2.UNKNOWN_ERROR };
    const tmp12 = new RPCErrorDefault(obj2, "Cannot support frames (yet)");
    throw tmp12;
  } else {
    const obj3 = { source: constants.ACTIVITY_INVITE, targetApplicationId: null };
    const id = socket.application.id;
    obj3.targetApplicationId = id;
    const result1 = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(tmp4, obj3);
    const tmpResult = instant_invite_InstantInviteUtils;
  }
};
obj[RPCCommands.OPEN_INVITE_DIALOG] = obj2;
let obj4 = { scope: null, handler: null };
let obj5 = {};
const items1 = [fn(8610).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj5[RPC_SCOPE_CONFIG.ANY] = items1;
obj4.scope = obj5;
obj4.handler = function handler(socket) {
  socket = socket.socket;
  return (async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            const id = socket.application.id;
            closure_128_0 = id;
            if (null == id) {
              const obj4 = { errorCode: constants.INVALID_COMMAND };
              const tmp62 = new tmp2(9581)(obj4, "No application.");
              throw tmp62;
            } else {
              const tmp91 = tmp2(14752)(tmp87);
              let id1;
              if (tmp91 != null) {
                id1 = tmp91.id;
              }
              closure_128_1 = id1;
              if (null == id1) {
                const obj5 = { errorCode: constants.UNKNOWN_ERROR };
                const tmp54 = new tmp2(9581)(obj5, "Unable to find selected channel");
                throw tmp54;
              } else {
                const permission = tmp2(5355).requestPermission(constants2.PHOTOS);
                dependencyMap = 1;
                c3 = 1;
                const obj6 = {
                  value: permission.catch(() => {
                                throw new closure_1_1(dependencyMap[6])({ errorCode: constants.UNKNOWN_ERROR }, "Failed requesting photo permissions");
                              }),
                  done: false
                };
                return obj6;
              }
            }
          }
        } else if (1 === tmp6) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else if (value) {
            dependencyMap = 2;
            c3 = 1;
            const obj8 = { value: tmp2(5366).launchImageLibraryAsync({ mediaType: "photo", includeBase64: false, selectionLimit: 1 }), done: false };
            return obj8;
          } else {
            const obj9 = { errorCode: constants.UNKNOWN_ERROR };
            const tmp42 = new tmp2(9581)(obj9, "Missing photo permissions");
            throw tmp42;
          }
        } else if (2 === tmp6) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_128_2 = value.assets[0];
            if (null == closure_128_2) {
              const obj11 = { errorCode: constants.UNKNOWN_ERROR };
              const tmp36 = new tmp2(9581)(obj11, "No image selected");
              throw tmp36;
            } else {
              const obj13 = { name: closure_128_2.fileName, type: closure_128_2.type, uri: closure_128_2.uri };
              dependencyMap = 3;
              c3 = 1;
              const obj14 = { value: tmp3(9593).uploadImageAttachment(closure_128_0, closure_128_1, obj13), done: false };
              return obj14;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          closure_128_3 = value;
          if (null != closure_128_3) {
            if (null != closure_128_3.url) {
              if (!(closure_128_3 instanceof tmp2(4657))) {
                const obj = { image_url: closure_128_3.url };
                c3 = 3;
                const obj16 = { value: obj, done: true };
                return obj16;
              }
            }
          }
          const obj17 = { errorCode: constants.UNKNOWN_ERROR };
          const _JSON = JSON;
          const tmp202 = new tmp2(9581)(obj17, JSON.stringify(closure_128_3));
          throw tmp202;
        }
      } catch (tmp64) {
        c3 = tmp;
        throw tmp64;
      }
    }
  })();
};
obj[RPCCommands.INITIATE_IMAGE_UPLOAD] = obj4;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/native/server/commands/activities.tsx");

export default obj;