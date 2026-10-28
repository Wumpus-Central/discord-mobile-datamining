// === Module 16035: commands/activities ===

// Module 16035 (commands/activities)
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9083 */;
import RPCErrorDefault from "RPCError" /* 9296 */;
import validateOpenInviteDialog from "validateOpenInviteDialog" /* 15997 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let Constants = fn(6413);
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = fn(1084);
({ InstantInviteSources: closure_4, RPCCommands, RPCErrors: hasOwnProperty } = Constants);
const NativePermissionTypes = fn(7903).NativePermissionTypes;
let obj = {};
let CONTEXT_MENU_ICON_NAMES = fn(15987);
let obj3 = { scope: null, handler: null };
let obj4 = {};
const items = [fn(8864).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
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
CONTEXT_MENU_ICON_NAMES = fn(15987);
let obj6 = { scope: null, handler: null };
let obj7 = {};
const items1 = [fn(8864).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj7[RPC_SCOPE_CONFIG.ANY] = items1;
obj6.scope = obj7;
obj6.handler = function handler(socket) {
  socket = socket.socket;
  return (async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            socket = tmp7;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            closure_128_4 = undefined;
            closure_128_5 = undefined;
            const id = socket.application.id;
            closure_128_0 = id;
            if (null == id) {
              const obj4 = { errorCode: constants.INVALID_COMMAND };
              const tmp85 = new tmp3(9296)(obj4, "No application.");
              throw tmp85;
            } else {
              let tmp60;
              if (tmp3(9290)(socket)) {
                tmp60 = tmp3(6813)(socket.context.surface);
              }
              closure_128_1 = tmp60;
              if (null == tmp60) {
                const obj5 = { errorCode: constants.UNKNOWN_ERROR };
                const tmp77 = new tmp3(9296)(obj5, "Unable to find selected channel");
                throw tmp77;
              } else {
                const obj6 = { mediaType: "photo", includeBase64: false, selectionLimit: 1 };
                closure_128_2 = obj6;
                if (!obj22.canUseAndroidPhotoPicker(obj6)) {
                  dependencyMap = 1;
                  c3 = 3;
                  c4 = 1;
                  const obj7 = { value: tmp3(7920).requestPermission(constants2.PHOTOS), done: false };
                  return obj7;
                }
                obj22 = tmp3(8187);
              }
            }
          }
        } else if (1 === tmp7) {
          dependencyMap = 0;
          const obj8 = { errorCode: constants.UNKNOWN_ERROR };
          const tmp56 = new tmp3(9296)(obj8, "Failed requesting photo permissions");
          throw tmp56;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_128_4 = value.assets[0];
            if (null == closure_128_4) {
              const obj10 = { errorCode: constants.UNKNOWN_ERROR };
              const tmp47 = new tmp3(9296)(obj10, "No image selected");
              throw tmp47;
            } else {
              const obj12 = { name: closure_128_4.fileName, type: closure_128_4.type, uri: closure_128_4.uri };
              c3 = 4;
              c4 = 1;
              const obj14 = { value: socket(11434).uploadImageAttachment(closure_128_0, closure_128_1, obj12), done: false };
              return obj14;
            }
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c4 = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else {
            closure_128_3 = value;
            dependencyMap = 0;
            if (!closure_128_3) {
              const obj16 = { errorCode: constants.UNKNOWN_ERROR };
              const tmp38 = new tmp3(9296)(obj16, "Missing photo permissions");
              throw tmp38;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj17 = { value, done: true };
          return obj17;
        } else {
          closure_128_5 = value;
          if (null != closure_128_5) {
            if (null != closure_128_5.url) {
              if (!(closure_128_5 instanceof tmp3(6410))) {
                const obj = { image_url: closure_128_5.url };
                c4 = 3;
                const obj18 = { value: obj, done: true };
                return obj18;
              }
            }
          }
          const obj20 = { errorCode: constants.UNKNOWN_ERROR };
          const _JSON = JSON;
          const tmp212 = new tmp3(9296)(obj20, JSON.stringify(closure_128_5));
          throw tmp212;
        }
        c3 = 2;
        c4 = 1;
        const obj21 = { value: tmp3(8187).launchImageLibraryAsync(closure_128_2), done: false };
        return obj21;
      } catch (tmp87) {
        if (tmp4 === dependencyMap) {
          c4 = tmp2;
          throw tmp87;
        } else {
          c3 = tmp;
        }
      }
    }
  })();
};
obj[RPCCommands.INITIATE_IMAGE_UPLOAD] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.INITIATE_IMAGE_UPLOAD, obj6);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/native/server/commands/activities.tsx");

export default obj;