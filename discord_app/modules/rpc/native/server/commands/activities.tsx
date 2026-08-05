// discord_app/modules/rpc/native/server/commands/activities.tsx
import validateOpenInviteDialog from "validateOpenInviteDialog";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";
import { NativePermissionTypes } from "NativePermissionStatus";

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let c4;
let c5;
const require = arg1;
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = RPC_SCOPE_CONFIG);
({ InstantInviteSources: c4, RPCCommands, RPCErrors: c5 } = ME);
let obj = {};
obj = { scope: null, handler: null };
obj = {};
const items = [require("set").OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj[0] = obj;
obj[1] = function handler(socket) {
  let obj = require("../../../helpers/validateOpenInviteDialog.tsx") /* validateOpenInviteDialog */;
  const result = obj.validateOpenInviteDialog();
  if (null != result.frame) {
    obj = { errorCode: null };
    obj[0] = constants2.UNKNOWN_ERROR;
    const tmp12 = new require("../../../RPCError.tsx")(obj, "Cannot support frames (yet)");
    throw tmp12;
  } else {
    obj = { source: null, targetApplicationId: null };
    obj[0] = constants.ACTIVITY_INVITE;
    const id = socket.socket.application.id;
    obj[1] = id;
    const result1 = tmp(8987).showInstantInviteActionSheet(tmp4, obj);
  }
  tmp = require;
};
obj[RPCCommands.OPEN_INVITE_DIALOG] = obj;
let obj1 = { scope: null, handler: null };
let obj2 = {};
const items1 = [require("set").OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj2[RPC_SCOPE_CONFIG.ANY] = items1;
obj1[0] = obj2;
obj1[1] = function handler(socket) {
  socket = socket.socket;
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let id = tmp2;
            id = tmp3;
            id = undefined;
            id = undefined;
            c2 = undefined;
            c3 = undefined;
            id = outer1_0.application.id;
            if (null == id) {
              const obj1 = { errorCode: null };
              obj1[0] = outer1_5.INVALID_COMMAND;
              const tmp62 = new outer1_1(c2[6])(obj1, "No application.");
              throw tmp62;
            } else {
              const tmp92 = outer1_1(c2[8])();
              id = undefined;
              if (tmp92 != null) {
                id = tmp92.id;
              }
              if (null == id) {
                const obj2 = { errorCode: null };
                obj2[0] = outer1_5.UNKNOWN_ERROR;
                const tmp54 = new outer1_1(c2[6])(obj2, "Unable to find selected channel");
                throw tmp54;
              } else {
                let obj11 = outer1_1(c2[9]);
                const permission = obj11.requestPermission(outer1_6.PHOTOS);
                c2 = 1;
                c3 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = permission.catch(() => {
                  throw new id(table[6])({ errorCode: constants.UNKNOWN_ERROR }, "Failed requesting photo permissions");
                });
                return obj3;
              }
            }
          }
        } else if (1 === tmp6) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else if (arg1) {
            c2 = 2;
            c3 = 1;
            const obj5 = { value: null, done: false };
            obj5[0] = tmp86(tmp87[10]).launchImageLibraryAsync({ mediaType: "photo", includeBase64: false, selectionLimit: 1 });
            return obj5;
          } else {
            const obj6 = { errorCode: null };
            obj6[0] = outer1_5.UNKNOWN_ERROR;
            const tmp42 = new tmp86(tmp87[6])(obj6, "Missing photo permissions");
            throw tmp42;
          }
        } else if (2 === tmp6) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            c2 = arg1.assets[0];
            if (null == c2) {
              const obj8 = { errorCode: null };
              obj8[0] = outer1_5.UNKNOWN_ERROR;
              const tmp36 = new outer1_1(c2[6])(obj8, "No image selected");
              throw tmp36;
            } else {
              const obj9 = { name: null, type: null, uri: null };
              obj9[0] = c2.fileName;
              obj9[1] = c2.type;
              obj9[2] = c2.uri;
              c2 = 3;
              c3 = 1;
              const obj10 = { value: null, done: false };
              obj10[0] = outer1_0(c2[11]).uploadImageAttachment(id, id, obj9);
              return obj10;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj11 = { value: null, done: true };
          obj11[0] = arg1;
          return obj11;
        } else {
          c3 = arg1;
          if (null != c3) {
            if (null != c3.url) {
              if (!(c3 instanceof outer1_1(c2[12]))) {
                obj = { image_url: null };
                obj[0] = c3.url;
                c3 = 3;
                const obj12 = { value: null, done: true };
                obj12[0] = obj;
                return obj12;
              }
            }
          }
          const obj13 = { errorCode: null };
          obj13[0] = outer1_5.UNKNOWN_ERROR;
          const _JSON = JSON;
          let tmp20 = outer1_1(c2[6]);
          tmp20 = new tmp20(obj13, JSON.stringify(c3));
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
let result = require("ME").fileFinishedImporting("modules/rpc/native/server/commands/activities.tsx");

export default obj;