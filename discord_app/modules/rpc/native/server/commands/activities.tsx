// === Module 15723: commands/activities ===

// Module 15723 (commands/activities)
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9026 */;
import RPCErrorDefault from "RPCError" /* 9240 */;
import validateOpenInviteDialog from "validateOpenInviteDialog" /* 15688 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let Constants = fn(6363);
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = fn(1087);
({ InstantInviteSources: closure_4, RPCCommands, RPCErrors: hasOwnProperty } = Constants);
const NativePermissionTypes = fn(7853).NativePermissionTypes;
let obj = {};
let CONTEXT_MENU_ICON_NAMES = fn(15678);
let obj3 = { scope: null, handler: null };
let obj4 = {};
const items = [fn(8802).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj4[RPC_SCOPE_CONFIG.ANY] = items;
obj3.scope = obj4;
obj3.handler = function handler(socket) {
  socket = socket.socket;
  const result = validateOpenInviteDialog.validateOpenInviteDialog(socket);
  if (null != result.frameId) {
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
obj[RPCCommands.OPEN_INVITE_DIALOG] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.OPEN_INVITE_DIALOG, obj3);
CONTEXT_MENU_ICON_NAMES = fn(15678);
let obj6 = { scope: null, handler: null };
let obj7 = {};
const items1 = [fn(8802).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj7[RPC_SCOPE_CONFIG.ANY] = items1;
obj6.scope = obj7;
obj6.handler = function handler(socket) {
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
        return { value: "IconComponent", done: null };
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
            closure_128_4 = undefined;
            const id = socket.application.id;
            closure_128_0 = id;
            if (null == id) {
              const obj4 = { errorCode: constants.INVALID_COMMAND };
              const tmp74 = new tmp3(9240)(obj4, "No application.");
              throw tmp74;
            } else {
              let tmp49;
              if (tmp3(9234)(socket)) {
                tmp49 = tmp3(6763)(socket.context.surface);
              }
              closure_128_1 = tmp49;
              if (null == tmp49) {
                const obj5 = { errorCode: constants.UNKNOWN_ERROR };
                const tmp66 = new tmp3(9240)(obj5, "Unable to find selected channel");
                throw tmp66;
              } else {
                const obj6 = { mediaType: "photo", includeBase64: false, selectionLimit: 1 };
                closure_128_2 = obj6;
                if (!obj21.canUseAndroidPhotoPicker(obj6)) {
                  const permission = tmp3(7870).requestPermission(constants2.PHOTOS);
                  dependencyMap = 2;
                  c3 = 1;
                  const obj7 = {
                    value: permission.catch(() => {
                                    throw new closure_1_1(dependencyMap[7])({ errorCode: constants.UNKNOWN_ERROR }, "Failed requesting photo permissions");
                                  }),
                    done: false
                  };
                  return obj7;
                }
                obj21 = tmp3(8141);
              }
            }
          }
        } else if (1 === tmp6) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_128_3 = value.assets[0];
            if (null == closure_128_3) {
              const obj9 = { errorCode: constants.UNKNOWN_ERROR };
              const tmp45 = new tmp3(9240)(obj9, "No image selected");
              throw tmp45;
            } else {
              const obj11 = { name: closure_128_3.fileName, type: closure_128_3.type, uri: closure_128_3.uri };
              dependencyMap = 3;
              c3 = 1;
              const obj13 = { value: tmp2(11349).uploadImageAttachment(closure_128_0, closure_128_1, obj11), done: false };
              return obj13;
            }
          }
        } else if (2 === tmp6) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else if (!value) {
            const obj15 = { errorCode: constants.UNKNOWN_ERROR };
            const tmp36 = new tmp3(9240)(obj15, "Missing photo permissions");
            throw tmp36;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj16 = { value, done: true };
          return obj16;
        } else {
          closure_128_4 = value;
          if (null != closure_128_4) {
            if (null != closure_128_4.url) {
              if (!(closure_128_4 instanceof tmp3(6360))) {
                const obj = { image_url: closure_128_4.url };
                c3 = 3;
                const obj17 = { value: obj, done: true };
                return obj17;
              }
            }
          }
          const obj19 = { errorCode: constants.UNKNOWN_ERROR };
          const _JSON = JSON;
          const tmp202 = new tmp3(9240)(obj19, JSON.stringify(closure_128_4));
          throw tmp202;
        }
        dependencyMap = 1;
        c3 = 1;
        const obj20 = { value: tmp3(8141).launchImageLibraryAsync(closure_128_2), done: false };
        return obj20;
      } catch (tmp76) {
        c3 = tmp;
        throw tmp76;
      }
    }
  })();
};
obj[RPCCommands.INITIATE_IMAGE_UPLOAD] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.INITIATE_IMAGE_UPLOAD, obj6);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/native/server/commands/activities.tsx");

export default obj;