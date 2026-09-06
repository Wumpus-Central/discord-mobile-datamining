// === Module 14481: links ===

// Module 14481 (links)
import RPCErrorDefault from "RPCError" /* 9554 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9557 */;
import RPCHelpers from "RPCHelpers" /* 9559 */;
import openActivityShareLinkModal from "openActivityShareLinkModal" /* 14485 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;

const openUserSettings = tmp(7382);
const ApplicationFlagUtils = tmp(8856);
require = fn;
let Constants = fn(4465);
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = fn(1074);
({ ApplicationFlags: metroRequire, PopoutWindowKeys: closure_7, RPCCommands, RPCErrors: closure_8, UserSettingsSections: closure_9, AnalyticEvents: c10 } = Constants);
Constants = fn(1920);
const items = [, ];
({ AM_HARMONY_PRD_APPLICATION_ID: arr[0], AM_HARMONY_STG_APPLICATION_ID: arr[1] } = Constants);
const set = new Set(items);
obj = { [RPCCommands.OPEN_EXTERNAL_LINK]: obj, [RPCCommands.NAVIGATE_TO_CONNECTIONS]: obj };
obj = {
  scope: null,
  validation(string) {
    createRpcJoiSchemaObjectDefault(string);
    const obj = { url: null };
    const requiredResult = obj.required();
    obj.url = string.string().required();
    return requiredResult.keys(obj);
  },
  handler(socket) {
    socket = socket.socket;
    const url = socket.args.url;
    return (async (arg0, value) => {
      if (application === 2) {
        application = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          application = 2;
          if (0 === currentEmbeddedActivity) {
            if (arg0 === 1) {
              application = 3;
              throw value;
            } else if (arg0 === 2) {
              application = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              let embeddedActivityLocationChannelId;
              const result = tmp5(tmp75[7]).validatePostMessageTransport(socket.transport);
              const obj18 = tmp5(tmp75[7]);
              let internalDeepLink = null;
              if (null != obj19.tryValidateEmbeddedAppFrame(socket)) {
                let tmp85Result = tmp85(tmp75[9]);
                internalDeepLink = tmp85Result.resolveInternalDeepLink(url);
              }
              if (null != internalDeepLink) {
                if (tmp85(tmp75[10]).isPlatformEmbedded) {
                  let obj5 = tmp3(tmp75[11]);
                  obj5.focus(null, true);
                }
                tmp85Result = tmp85(tmp75[9]);
                if (tmp85Result.openInternalDeepLink(internalDeepLink)) {
                  const application3 = socket.application;
                  let id;
                  if (application3 != null) {
                    id = application3.id;
                  }
                  const obj1 = { application_id: id, url, opened: true };
                  tmp3(tmp75[12]).track(constants3.RPC_OPEN_EXTERNAL_LINK_CALLED, obj1);
                  application = 3;
                  const obj2 = { value: { opened: true }, done: true };
                  return obj2;
                }
              }
              currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
              c3 = 1;
              const _URL = URL;
              let str = new URL(url);
              str = str.toString();
              closure_128_0 = str;
              if (tmp5(tmp75[10]).isPlatformEmbedded) {
                let ACTIVITY_POPOUT = null;
                if (tmp85Result1.shouldOpenActivityInPopoutWindow()) {
                  ACTIVITY_POPOUT = constants.ACTIVITY_POPOUT;
                }
                tmp85Result1 = tmp85(tmp75[13]);
                tmp3(tmp75[11]).focus(ACTIVITY_POPOUT, true);
                const obj9 = tmp3(tmp75[11]);
              }
              const application2 = socket.application;
              let id1;
              if (application2 != null) {
                id1 = application2.id;
              }
              application = application.getApplication(id1);
              closure_128_1 = application;
              obj19 = tmp5(tmp75[8]);
              let _location;
              if (currentEmbeddedActivity != null) {
                _location = currentEmbeddedActivity.location;
              }
              embeddedActivityLocationChannelId = tmp5(tmp75[14]).getEmbeddedActivityLocationChannelId(_location);
              const tmp85Result2 = tmp5(tmp75[14]);
              let id2;
              if (application != null) {
                id2 = application.id;
              }
              currentEmbeddedActivity = 2;
              application = 1;
              const obj3 = { value: tmp5(tmp75[15]).fetchIsLinkTrusted(id2, str), done: false };
              return obj3;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            const obj4 = { errorCode: constants2.INVALID_COMMAND };
            const _HermesInternal = HermesInternal;
            let tmp30 = tmp3(tmp75[19]);
            tmp30 = new tmp30(obj4, "Invalid URL: " + closure_129_1);
            throw tmp30;
          } else if (arg0 === 1) {
            application = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            application = 3;
            obj5 = { value, done: true };
            return obj5;
          } else {
            if (value) {
              tmp3(tmp75[16])(closure_128_0);
              obj = tmp3(tmp75[12]);
              application = closure_129_0.application;
              let id3;
              if (application != null) {
                id3 = application.id;
              }
              const obj6 = { application_id: id3, url: closure_128_0, opened: true };
              obj.track(constants3.RPC_OPEN_EXTERNAL_LINK_CALLED, obj6);
              const resolved = Promise.resolve({ opened: true });
            } else {
              new Promise((arg0) => {
                const href = arg0;
                href(channelId[17]);
                let obj = {
                  href,
                  shouldConfirm: true,
                  onClick() {
                    return false;
                  },
                  onConfirm() {
                    url(4249)(url);
                    application = closure_0.application;
                    let id;
                    if (application != null) {
                      id = application.id;
                    }
                    url(1242).track(constants.RPC_OPEN_EXTERNAL_LINK_CALLED, { application_id: id, url, opened: true });
                    closure_0({ opened: true });
                  },
                  onCancel() {
                    let obj = url(1242);
                    application = closure_0.application;
                    let id;
                    if (application != null) {
                      id = application.id;
                    }
                    obj = { application_id: id, url, opened: false };
                    obj.track(constants.RPC_OPEN_EXTERNAL_LINK_CALLED, obj);
                    closure_0({ opened: false });
                  }
                };
                obj = { application, channelId };
                return obj.handleClick(obj, undefined, undefined, href(channelId[18]).getActivitiesModalContextKey(obj));
              });
            }
            c3 = 0;
            application = 3;
          }
        } catch (tmp75) {
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
const items1 = [RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE];
obj.scope = { [RPC_SCOPE_CONFIG.ANY]: items1 };
obj = {
  validation(arg0) {
    return createRpcJoiSchemaObjectDefault(arg0);
  },
  scope: null,
  handler(socket) {
    socket = socket.socket;
    let obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    if (set.has(obj2.validateApplication(socket.application))) {
      obj = { screen: constants3.CONNECTIONS };
      openUserSettings.openUserSettings(obj);
    } else {
      obj = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
      const tmp9 = new RPCErrorDefault(obj, "Command not available for this application");
      throw tmp9;
    }
    obj2 = RPCHelpers;
  }
};
const items2 = [RPC_AUTHENTICATED_SCOPE];
obj.scope = { [RPC_SCOPE_CONFIG.ANY]: items2 };
const CONTEXT_MENU_ICON_NAMES = fn(14476);
let obj1 = {
  scope: null,
  handler(arg0) {
    ({ socket, args } = arg0);
    ({ custom_id: require, message: importDefault, link_id: dependencyMap } = args);
    let obj = RPCHelpers;
    let result = obj.validatePostMessageTransport(socket.transport);
    const validateApplicationResult = RPCHelpers.validateApplication(socket.application);
    c3 = validateApplicationResult;
    if (null == validateApplicationResult) {
      obj = { errorCode: constants2.INVALID_COMMAND };
      const tmp22 = new RPCErrorDefault(obj, "No application.");
      throw tmp22;
    } else {
      if (tmpResult.hasApplicationFlag(socket.application, constants.EMBEDDED)) {
        const promise = new Promise((arg0) => {
          closure_0 = arg0;
          const obj = {
            applicationId,
            customId,
            linkId,
            message,
            onShare(stateFromStores, didCopyLink) {
              let tmp2 = didCopyLink;
              if (!didCopyLink) {
                tmp2 = stateFromStores;
              }
              closure_0({ success: tmp2, didCopyLink, didSendMessage: stateFromStores });
            }
          };
          const result = obj.openActivityShareLinkModal(obj);
        });
        return promise;
      } else {
        obj = { errorCode: constants2.INVALID_COMMAND };
        const tmp10 = new RPCErrorDefault(obj, "This application cannot access this API");
        throw tmp10;
      }
      tmpResult = ApplicationFlagUtils;
    }
  }
};
const items3 = [RPC_AUTHENTICATED_SCOPE];
obj1.scope = { [RPC_SCOPE_CONFIG.ANY]: items3 };
obj[RPCCommands.SHARE_LINK] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SHARE_LINK, obj1);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/links.tsx");

export default obj;