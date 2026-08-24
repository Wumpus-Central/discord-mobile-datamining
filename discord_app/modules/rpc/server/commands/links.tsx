// === Module 13914: set ===

// Module 13914 (set)
import openUserSettings from "openUserSettings" /* 7398 */;
import getApplicationFlags from "getApplicationFlags" /* 7912 */;
import prototypeDefault from "prototype" /* 8789 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 8792 */;
import recurseReplaceContentTree from "recurseReplaceContentTree" /* 8794 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "participantFromServer" /* 1390 */;
import closure_5 from "addApplication" /* 4482 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4281 */;
import ME from "ME" /* 676 */;
import items3 from "items3" /* 4485 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 13909 */;
import set from "set" /* 2 */;

require = arg1;
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = RPC_SCOPE_CONFIG);
({ ApplicationFlags: closure_6, PopoutWindowKeys: error, RPCCommands, RPCErrors: closure_8, UserSettingsSections: c9, AnalyticEvents: c10 } = ME);
const items = [, ];
({ AM_HARMONY_PRD_APPLICATION_ID: arr[0], AM_HARMONY_STG_APPLICATION_ID: arr[1] } = items3);
let set = new Set(items);
obj = { [RPCCommands.OPEN_EXTERNAL_LINK]: obj, [RPCCommands.NAVIGATE_TO_CONNECTIONS]: obj };
obj = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items1 },
  validation(string) {
    let obj = createRpcJoiSchemaObjectDefault(string);
    obj = { url: null };
    const requiredResult = obj.required();
    obj[0] = string.string().required();
    return requiredResult.keys(obj);
  },
  handler(socket) {
    socket = socket.socket;
    const url = socket.args.url;
    return callback(function*() {
      if (application === 2) {
        application = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          application = 2;
          if (0 === currentEmbeddedActivity) {
            if (arg0 === 1) {
              application = 3;
              throw arg1;
            } else if (arg0 === 2) {
              application = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              application = tmp3;
              let str = tmp5;
              str = undefined;
              application = undefined;
              let embeddedActivityLocationChannelId;
              const result = closure_1_0(closure_1_2[7]).validatePostMessageTransport(closure_1_0.transport);
              const obj18 = closure_1_0(closure_1_2[7]);
              let internalDeepLink = null;
              if (null != obj19.tryValidateEmbeddedAppFrame(closure_1_0)) {
                let tmp86Result = tmp86(closure_1_2[9]);
                internalDeepLink = tmp86Result.resolveInternalDeepLink(closure_1_1);
              }
              if (null != internalDeepLink) {
                if (tmp86(closure_1_2[10]).isPlatformEmbedded) {
                  let obj5 = closure_1_1(closure_1_2[11]);
                  obj5.focus(null, true);
                }
                tmp86Result = tmp86(closure_1_2[9]);
                if (tmp86Result.openInternalDeepLink(internalDeepLink)) {
                  const application3 = closure_1_0.application;
                  let id;
                  if (application3 != null) {
                    id = application3.id;
                  }
                  obj1 = { application_id: null, url: null, opened: true };
                  obj1[0] = id;
                  obj1[1] = closure_1_1;
                  closure_1_1(closure_1_2[12]).track(closure_1_10.RPC_OPEN_EXTERNAL_LINK_CALLED, obj1);
                  application = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = { opened: true };
                  return obj2;
                }
              }
              currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
              c3 = 1;
              const _URL = URL;
              str = new URL(closure_1_1);
              str = str.toString();
              if (closure_1_0(closure_1_2[10]).isPlatformEmbedded) {
                let ACTIVITY_POPOUT = null;
                if (tmp86Result1.shouldOpenActivityInPopoutWindow()) {
                  ACTIVITY_POPOUT = closure_1_7.ACTIVITY_POPOUT;
                }
                tmp86Result1 = tmp86(closure_1_2[13]);
                closure_1_1(closure_1_2[11]).focus(ACTIVITY_POPOUT, true);
                const obj9 = closure_1_1(closure_1_2[11]);
              }
              const application2 = closure_1_0.application;
              let id1;
              if (application2 != null) {
                id1 = application2.id;
              }
              application = application.getApplication(id1);
              obj19 = closure_1_0(closure_1_2[8]);
              let _location;
              if (currentEmbeddedActivity != null) {
                _location = currentEmbeddedActivity.location;
              }
              embeddedActivityLocationChannelId = closure_1_0(closure_1_2[14]).getEmbeddedActivityLocationChannelId(_location);
              const tmp86Result2 = closure_1_0(closure_1_2[14]);
              let id2;
              if (application != null) {
                id2 = application.id;
              }
              currentEmbeddedActivity = 2;
              application = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = closure_1_0(closure_1_2[15]).fetchIsLinkTrusted(id2, str);
              return obj3;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            const obj4 = { errorCode: null };
            obj4[0] = closure_1_8.INVALID_COMMAND;
            const _HermesInternal = HermesInternal;
            let tmp30 = closure_1_1(closure_1_2[19]);
            tmp30 = new tmp30(obj4, "Invalid URL: " + application);
            throw tmp30;
          } else if (arg0 === 1) {
            application = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            application = 3;
            obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            if (arg1) {
              closure_1_1(closure_1_2[16])(str);
              obj = closure_1_1(closure_1_2[12]);
              application = str.application;
              let id3;
              if (application != null) {
                id3 = application.id;
              }
              const obj6 = { application_id: null, url: null, opened: true };
              obj6[0] = id3;
              obj6[1] = str;
              obj.track(closure_1_10.RPC_OPEN_EXTERNAL_LINK_CALLED, obj6);
              const resolved = Promise.resolve({ opened: true });
            } else {
              new Promise((arg0) => {
                closure_0 = arg0;
                let obj = closure_2_0(closure_2_2[17]);
                obj = {
                  href: closure_0,
                  shouldConfirm: true,
                  onClick() {
                    return false;
                  },
                  onConfirm() {
                    closure_3_1(closure_3_2[16])(callback);
                    application = str.application;
                    let id;
                    if (application != null) {
                      id = application.id;
                    }
                    closure_3_1(closure_3_2[12]).track(closure_3_10.RPC_OPEN_EXTERNAL_LINK_CALLED, { application_id: id, url: callback, opened: true });
                    callback({ opened: true });
                  },
                  onCancel() {
                    let obj = closure_3_1(closure_3_2[12]);
                    application = str.application;
                    let id;
                    if (application != null) {
                      id = application.id;
                    }
                    obj = { application_id: id, url: callback, opened: false };
                    obj.track(closure_3_10.RPC_OPEN_EXTERNAL_LINK_CALLED, obj);
                    callback({ opened: false });
                  }
                };
                obj = { application, channelId: closure_2 };
                return obj.handleClick(obj, undefined, undefined, closure_2_0(closure_2_2[18]).getActivitiesModalContextKey(obj));
              });
            }
            c3 = 0;
            application = 3;
          }
        } catch (tmp75) {
          embeddedActivityLocationChannelId = tmp75;
          if (tmp4 === c3) {
            application = tmp2;
            throw tmp75;
          } else {
            currentEmbeddedActivity = tmp;
          }
        }
      }
    })();
  }
};
items1 = [RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE];
obj = {
  validation(arg0) {
    return createRpcJoiSchemaObjectDefault(arg0);
  },
  scope: { [RPC_SCOPE_CONFIG.ANY]: items2 },
  handler(socket) {
    socket = socket.socket;
    let obj = recurseReplaceContentTree;
    const result = obj.validatePostMessageTransport(socket.transport);
    if (set.has(obj2.validateApplication(socket.application))) {
      obj = { screen: null };
      obj[0] = constants3.CONNECTIONS;
      openUserSettings.openUserSettings(obj);
    } else {
      obj = { errorCode: null };
      obj[0] = constants2.UNAUTHORIZED_FOR_APPLICATION;
      const tmp9 = new prototypeDefault(obj, "Command not available for this application");
      throw tmp9;
    }
    obj2 = recurseReplaceContentTree;
    const tmp = require;
  }
};
items2 = [RPC_AUTHENTICATED_SCOPE];
items3 = [RPC_AUTHENTICATED_SCOPE];
obj[RPCCommands.SHARE_LINK] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SHARE_LINK, {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items3 },
  handler(arg0) {
    ({ socket, args } = arg0);
    ({ custom_id: require, message: importDefault, link_id: dependencyMap } = args);
    c3 = undefined;
    let obj = recurseReplaceContentTree;
    let result = obj.validatePostMessageTransport(socket.transport);
    const validateApplicationResult = recurseReplaceContentTree.validateApplication(socket.application);
    c3 = validateApplicationResult;
    if (null == validateApplicationResult) {
      obj = { errorCode: null };
      obj[0] = constants2.INVALID_COMMAND;
      const tmp22 = new prototypeDefault(obj, "No application.");
      throw tmp22;
    } else {
      if (tmpResult.hasApplicationFlag(socket.application, constants.EMBEDDED)) {
        const promise = new Promise((arg0) => {
          closure_0 = arg0;
          let obj = closure_1_0(closure_1_2[23]);
          obj = {
            applicationId: c3,
            customId: closure_0,
            linkId: closure_2,
            message: closure_1,
            onShare(stateFromStores, first) {
              let tmp2 = first;
              if (!first) {
                tmp2 = stateFromStores;
              }
              closure_0({ success: tmp2, didCopyLink: first, didSendMessage: stateFromStores });
            }
          };
          const result = obj.openActivityShareLinkModal(obj);
        });
        return promise;
      } else {
        obj = { errorCode: null };
        obj[0] = constants2.INVALID_COMMAND;
        const tmp10 = new prototypeDefault(obj, "This application cannot access this API");
        throw tmp10;
      }
      tmpResult = getApplicationFlags;
    }
    const obj2 = recurseReplaceContentTree;
    const tmp = require;
  }
});
let result = set.fileFinishedImporting("modules/rpc/server/commands/links.tsx");

export default obj;