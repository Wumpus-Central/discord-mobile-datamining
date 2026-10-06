// === Module 14374: commands/activities ===

// Module 14374 (commands/activities)
import NativePermissionConstants from "NativePermissionConstants" /* 5105 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8025 */;
import RPCErrorDefault from "RPCError" /* 9059 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9494 */;
import validateOpenInviteDialog from "validateOpenInviteDialog" /* 14339 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants_mod from "Constants" /* 5323 */;
import Constants_mod2 from "Constants" /* 1085 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 14335 */;
import size from "module_2" /* 2 */;

let c2, c3;

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_4;
let hasOwnProperty;
let obj3;
let obj5;
let Constants = Constants_mod2;
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = Constants_mod2;
({ InstantInviteSources: closure_4, RPCCommands, RPCErrors: hasOwnProperty } = Constants);
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
let obj = {};
let obj2 = {
  scope: obj3,
  handler(socket) {
    let id;
    socket = socket.socket;
    const obj = validateOpenInviteDialog;
    const result = obj.validateOpenInviteDialog(socket);
    if (null != result.frame) {
      const self = this;
      const self2 = this;
      const obj2 = { errorCode: hasOwnProperty.UNKNOWN_ERROR };
      const tmp11 = new RPCErrorDefault(obj2, "Cannot support frames (yet)");
      throw tmp11;
    } else {
      const obj3 = { source: constants.ACTIVITY_INVITE, targetApplicationId: id };
      id = socket.application.id;
      const showInstantInviteActionSheet = instant_invite_InstantInviteUtils.showInstantInviteActionSheet;
      instant_invite_InstantInviteUtils;
      const result1 = showInstantInviteActionSheet(tmp4, obj3);
    }
  }
};
obj3 = {};
const OPEN_INVITE_DIALOG = RPCCommands.OPEN_INVITE_DIALOG;
const ANY = RPC_SCOPE_CONFIG.ANY;
const items = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj3[ANY] = items;
obj[OPEN_INVITE_DIALOG] = obj2;
const INITIATE_IMAGE_UPLOAD = RPCCommands.INITIATE_IMAGE_UPLOAD;
let obj4 = {
  scope: obj5,
  handler(socket) {
    socket = socket.socket;
    return (async function() {
      let closure_0;
      let closure_1;
      let tmp;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          let id1;
          let closure_2;
          let closure_3;
          let id;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              id1 = undefined;
              closure_2 = undefined;
              closure_3 = undefined;
              id = socket.application.id;
              if (null == id) {
                const obj4 = { errorCode: constants.INVALID_COMMAND };
                const self9 = this;
                const self10 = this;
                const tmp51 = new tmp(c2[6])(obj4, "No application.");
                throw tmp51;
              } else {
                const tmp79 = tmp(c2[9])(tmp75);
                id1 = undefined;
                if (tmp79 != null) {
                  id1 = tmp79.id;
                }
                if (null == id1) {
                  const obj5 = { errorCode: constants.UNKNOWN_ERROR };
                  const self7 = this;
                  const self8 = this;
                  const tmp45 = new tmp(c2[6])(obj5, "Unable to find selected channel");
                  throw tmp45;
                } else {
                  const obj12 = tmp(c2[10]);
                  const permission = obj12.requestPermission(constants2.PHOTOS);
                  c2 = 1;
                  c3 = 1;
                  const obj6 = {
                    value: permission.catch(() => {
                                  const obj = { errorCode: constants.UNKNOWN_ERROR };
                                  const tmp = new closure_1_1(closure_1_2[6])(obj, "Failed requesting photo permissions");
                                  throw tmp;
                                }),
                    done: false
                  };
                  return obj6;
                }
              }
            }
          } else if (1 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else if (value) {
              const tmp73Result = tmp(c2[11]);
              c2 = 2;
              c3 = 1;
              const obj8 = { value: tmp73Result.launchImageLibraryAsync({ mediaType: "photo", includeBase64: false, selectionLimit: 1 }), done: false };
              return obj8;
            } else {
              const obj9 = { errorCode: constants.UNKNOWN_ERROR };
              const self5 = this;
              const self6 = this;
              const tmp35 = new tmp(c2[6])(obj9, "Missing photo permissions");
              throw tmp35;
            }
          } else if (2 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              closure_2 = value.assets[0];
              if (null == closure_2) {
                const obj11 = { errorCode: constants.UNKNOWN_ERROR };
                const self3 = this;
                const self4 = this;
                const tmp31 = new tmp(c2[6])(obj11, "No image selected");
                throw tmp31;
              } else {
                const obj13 = { name: closure_2.fileName, type: closure_2.type, uri: closure_2.uri };
                const obj18 = tmp2(c2[12]);
                c2 = 3;
                c3 = 1;
                const obj14 = { value: obj18.uploadImageAttachment(id, id1, obj13), done: false };
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
            closure_3 = value;
            if (null != closure_3) {
              if (null != closure_3.url) {
                if (!(closure_3 instanceof tmp(c2[13]))) {
                  let obj = { image_url: closure_3.url };
                  c3 = 3;
                  const obj16 = { value: obj, done: true };
                  return obj16;
                }
              }
            }
            const obj17 = { errorCode: constants.UNKNOWN_ERROR };
            const _JSON = JSON;
            const self = this;
            const self2 = this;
            const tmp19 = tmp(c2[6]);
            const tmp192 = new tmp19(obj17, JSON.stringify(closure_3));
            throw tmp192;
          }
        } catch (tmp53) {
          c3 = 3;
          throw tmp53;
        }
      }
    })();
  }
};
obj5 = {};
const createRPCCommand = CONTEXT_MENU_ICON_NAMES.createRPCCommand;
const INITIATE_IMAGE_UPLOAD2 = RPCCommands.INITIATE_IMAGE_UPLOAD;
const ANY2 = RPC_SCOPE_CONFIG.ANY;
const items1 = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj5[ANY2] = items1;
obj[INITIATE_IMAGE_UPLOAD] = createRPCCommand(INITIATE_IMAGE_UPLOAD2, obj4);
let result = size.fileFinishedImporting("modules/rpc/native/server/commands/activities.tsx");

export default obj;