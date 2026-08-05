// discord_app/modules/rpc/server/commands/links.tsx
import closure_3 from "items3";
import participantFromServer from "participantFromServer";
import addApplication from "addApplication";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";
import items3 from "items3";
import createRPCCommand from "createRPCCommand";
import set from "addApplication";

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let c10;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = RPC_SCOPE_CONFIG);
({ ApplicationFlags: closure_6, PopoutWindowKeys: error, RPCCommands, RPCErrors: metroImportAll, UserSettingsSections: c9, AnalyticEvents: c10 } = ME);
const items = [, ];
({ AM_HARMONY_PRD_APPLICATION_ID: arr[0], AM_HARMONY_STG_APPLICATION_ID: arr[1] } = items3);
let set = new Set(items);
obj = { [RPCCommands.OPEN_EXTERNAL_LINK]: obj, [RPCCommands.NAVIGATE_TO_CONNECTIONS]: obj };
obj = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items1 },
  validation(string) {
    let obj = require("../../helpers/createRpcJoiSchemaObject.tsx")(string);
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
        let str = "Generator functions may not be called on executing generators";
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
              str = tmp5;
              str = undefined;
              application = undefined;
              let embeddedActivityLocationChannelId;
              const result = outer1_0(outer1_2[7]).validatePostMessageTransport(outer1_0.transport);
              currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
              let c3 = 1;
              const _URL = URL;
              const str3 = new URL(outer1_1);
              str = str3.toString();
              if (outer1_0(outer1_2[8]).isPlatformEmbedded) {
                let tmp63Result = tmp63(outer1_2[9]);
                let ACTIVITY_POPOUT = null;
                if (tmp63Result.shouldOpenActivityInPopoutWindow()) {
                  ACTIVITY_POPOUT = outer1_7.ACTIVITY_POPOUT;
                }
                outer1_1(outer1_2[10]).focus(ACTIVITY_POPOUT, true);
                const obj6 = outer1_1(outer1_2[10]);
              }
              const application2 = outer1_0.application;
              let id;
              if (application2 != null) {
                id = application2.id;
              }
              application = application.getApplication(id);
              tmp63Result = tmp63(outer1_2[11]);
              let _location;
              if (currentEmbeddedActivity != null) {
                _location = currentEmbeddedActivity.location;
              }
              embeddedActivityLocationChannelId = tmp63Result.getEmbeddedActivityLocationChannelId(_location);
              const obj12 = outer1_0(outer1_2[7]);
              let id1;
              if (application != null) {
                id1 = application.id;
              }
              currentEmbeddedActivity = 2;
              application = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_0(outer1_2[12]).fetchIsLinkTrusted(id1, str);
              return obj1;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            const obj2 = { errorCode: null };
            obj2[0] = outer1_8.INVALID_COMMAND;
            const _HermesInternal = HermesInternal;
            let tmp30 = outer1_1(outer1_2[17]);
            tmp30 = new tmp30(obj2, "Invalid URL: " + application);
            throw tmp30;
          } else if (arg0 === 1) {
            application = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            application = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            if (arg1) {
              outer1_1(outer1_2[13])(str);
              obj = outer1_1(outer1_2[14]);
              application = str.application;
              let id2;
              if (application != null) {
                id2 = application.id;
              }
              const obj4 = { application_id: null, url: null, opened: true };
              obj4[0] = id2;
              obj4[1] = str;
              obj.track(outer1_10.RPC_OPEN_EXTERNAL_LINK_CALLED, obj4);
              const resolved = Promise.resolve({ opened: true });
            } else {
              new Promise((arg0) => {
                let closure_0 = arg0;
                let obj = outer2_0(outer2_2[15]);
                obj = {
                  href: closure_0,
                  shouldConfirm: true,
                  onConfirm() {
                    outer3_1(outer3_2[13])(callback);
                    const application = str.application;
                    let id;
                    if (application != null) {
                      id = application.id;
                    }
                    outer3_1(outer3_2[14]).track(outer3_10.RPC_OPEN_EXTERNAL_LINK_CALLED, { application_id: id, url: callback, opened: true });
                    callback({ opened: true });
                  },
                  onCancel() {
                    let obj = outer3_1(outer3_2[14]);
                    const application = str.application;
                    let id;
                    if (application != null) {
                      id = application.id;
                    }
                    obj = { application_id: id, url: callback, opened: false };
                    obj.track(outer3_10.RPC_OPEN_EXTERNAL_LINK_CALLED, obj);
                    callback({ opened: false });
                  }
                };
                obj = { application, channelId: closure_2 };
                return obj.handleClick(obj, undefined, undefined, outer2_0(outer2_2[16]).getActivitiesModalContextKey(obj));
              });
            }
            c3 = 0;
            application = 3;
          }
        } catch (tmp52) {
          embeddedActivityLocationChannelId = tmp52;
          if (tmp4 === c3) {
            application = tmp2;
            throw tmp52;
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
    return require("../../helpers/createRpcJoiSchemaObject.tsx")(arg0);
  },
  scope: { [RPC_SCOPE_CONFIG.ANY]: items2 },
  handler(socket) {
    socket = socket.socket;
    let obj = require("../../RPCHelpers.tsx") /* recurseReplaceContentTree */;
    const result = obj.validatePostMessageTransport(socket.transport);
    if (set.has(obj2.validateApplication(socket.application))) {
      obj = { screen: null };
      obj[0] = constants3.CONNECTIONS;
      tmp(5925).openUserSettings(obj);
    } else {
      obj = { errorCode: null };
      obj[0] = constants2.UNAUTHORIZED_FOR_APPLICATION;
      const tmp9 = new require("../../RPCError.tsx")(obj, "Command not available for this application");
      throw tmp9;
    }
    obj2 = require("../../RPCHelpers.tsx") /* recurseReplaceContentTree */;
    tmp = require;
  }
};
items2 = [RPC_AUTHENTICATED_SCOPE];
items3 = [RPC_AUTHENTICATED_SCOPE];
obj[RPCCommands.SHARE_LINK] = createRPCCommand.createRPCCommand(RPCCommands.SHARE_LINK, {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items3 },
  handler(arg0) {
    let args;
    let dependencyMap;
    let importDefault;
    let require;
    let socket;
    ({ socket, args } = arg0);
    ({ custom_id: require, message: importDefault, link_id: dependencyMap } = args);
    let c3;
    let obj = require("../../RPCHelpers.tsx") /* recurseReplaceContentTree */;
    let result = obj.validatePostMessageTransport(socket.transport);
    const validateApplicationResult = require("../../RPCHelpers.tsx") /* recurseReplaceContentTree */.validateApplication(socket.application);
    c3 = validateApplicationResult;
    if (null == validateApplicationResult) {
      obj = { errorCode: null };
      obj[0] = constants2.INVALID_COMMAND;
      const tmp22 = new require("../../RPCError.tsx")(obj, "No application.");
      throw tmp22;
    } else {
      if (tmpResult.hasApplicationFlag(socket.application, constants.EMBEDDED)) {
        const promise = new Promise((arg0) => {
          let closure_0 = arg0;
          let obj = outer1_0(outer1_2[21]);
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
        const tmp10 = new require("../../RPCError.tsx")(obj, "This application cannot access this API");
        throw tmp10;
      }
      tmpResult = tmp(7510);
    }
    const obj2 = require("../../RPCHelpers.tsx") /* recurseReplaceContentTree */;
    tmp = require;
  }
});
let result = set.fileFinishedImporting("modules/rpc/server/commands/links.tsx");

export default obj;