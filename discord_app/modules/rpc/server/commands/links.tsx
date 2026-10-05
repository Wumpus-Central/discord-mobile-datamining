// === Module 14322: links ===

// Module 14322 (links)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2016 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4498 */;
import CrossPlatformNativeUtilsDefault from "CrossPlatformNativeUtils" /* 4884 */;
import openUserSettings from "openUserSettings" /* 6885 */;
import RPCErrorDefault from "RPCError" /* 9026 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9029 */;
import RPCHelpers from "RPCHelpers" /* 9031 */;
import ActivityPopoutUtils from "ActivityPopoutUtils" /* 9048 */;
import validateEmbeddedAppFrame from "validateEmbeddedAppFrame" /* 14302 */;
import internalDeepLinks from "internalDeepLinks" /* 14323 */;
import fetchIsLinkTrusted2 from "fetchIsLinkTrusted" /* 14324 */;
import openActivityShareLinkModal from "openActivityShareLinkModal" /* 14326 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import Constants_mod from "Constants" /* 5316 */;
import Constants_mod2 from "Constants" /* 1085 */;
import Constants_mod3 from "Constants" /* 2011 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 14317 */;
import size from "module_2" /* 2 */;

let _Promise, c2, currentEmbeddedActivity, getApplication;

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let c9;
let items1;
let items2;
let items3;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj = function _openExternalLink() {
  obj = _asyncToGenerator(async (arg0, url) => {
    let closure_3;
    let closure_4;
    let application = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let tmp;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          let str1;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              application = tmp;
              str1 = undefined;
              let application1;
              let channelId;
              let internalDeepLink = null;
              const obj15 = validateEmbeddedAppFrame;
              if (null != obj15.tryValidateEmbeddedAppFrame(application)) {
                const tmp73Result = internalDeepLinks;
                internalDeepLink = tmp73Result.resolveInternalDeepLink(url);
              }
              if (null != internalDeepLink) {
                if (PlatformUtils.isPlatformEmbedded) {
                  const obj6 = CrossPlatformNativeUtilsDefault;
                  obj6.focus(null, true);
                }
                const tmp73Result4 = internalDeepLinks;
                if (tmp73Result4.openInternalDeepLink(internalDeepLink)) {
                  _Promise = AnalyticsUtilsDefault;
                  const application3 = tmp71.application;
                  let id;
                  let track = _Promise.track;
                  const RPC_OPEN_EXTERNAL_LINK_CALLED2 = constants2.RPC_OPEN_EXTERNAL_LINK_CALLED;
                  if (application3 != null) {
                    id = application3.id;
                  }
                  const obj4 = { application_id: id, url, opened: true };
                  track(RPC_OPEN_EXTERNAL_LINK_CALLED2, obj4);
                  c7 = 3;
                  return { value: { opened: true }, done: true };
                }
              }
              currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
              c5 = 1;
              const _URL = URL;
              const self5 = this;
              const self6 = this;
              const str = new URL(url);
              str1 = str.toString();
              if (PlatformUtils.isPlatformEmbedded) {
                let ACTIVITY_POPOUT = null;
                const tmp73Result5 = ActivityPopoutUtils;
                if (tmp73Result5.shouldOpenActivityInPopoutWindow()) {
                  ACTIVITY_POPOUT = constants.ACTIVITY_POPOUT;
                }
                const obj9 = CrossPlatformNativeUtilsDefault;
                obj9.focus(ACTIVITY_POPOUT, true);
              }
              const application2 = tmp71.application;
              let id1;
              getApplication = getApplication.getApplication;
              if (application2 != null) {
                id1 = application2.id;
              }
              application1 = getApplication(id1);
              let _location;
              const getEmbeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId;
              embeddedActivityLocationUtils;
              if (currentEmbeddedActivity != null) {
                _location = currentEmbeddedActivity.location;
              }
              channelId = getEmbeddedActivityLocationChannelId(_location);
              _Promise = fetchIsLinkTrusted2;
              let id2;
              const fetchIsLinkTrusted = _Promise.fetchIsLinkTrusted;
              if (application1 != null) {
                id2 = application1.id;
              }
              c6 = 2;
              c7 = 1;
              const obj7 = { value: fetchIsLinkTrusted(id2, str1), done: false };
              return obj7;
            }
          } else if (1 === tmp4) {
            c5 = 0;
            _Promise = closure_131_1(closure_131_2[17]);
            const _HermesInternal = HermesInternal;
            const self3 = this;
            const self4 = this;
            const obj8 = { errorCode: closure_131_7.INVALID_COMMAND };
            const _Promise1 = new _Promise(obj8, "Invalid URL: " + url);
            throw _Promise1;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            let resolved;
            if (value) {
              closure_131_1(closure_131_2[14])(str1);
              _Promise = closure_131_1(closure_131_2[10]).track;
              application = application.application;
              let id3;
              let RPC_OPEN_EXTERNAL_LINK_CALLED = closure_131_9.RPC_OPEN_EXTERNAL_LINK_CALLED;
              closure_131_1(closure_131_2[10]);
              if (application != null) {
                id3 = application.id;
              }
              obj = { application_id: id3, url: str1, opened: true };
              _Promise(RPC_OPEN_EXTERNAL_LINK_CALLED, obj);
              _Promise = Promise;
              resolved = Promise.resolve({ opened: true });
            } else {
              _Promise = Promise;
              const self = this;
              const self2 = this;
              resolved = new Promise((arg0) => {
                let closure_0 = arg0;
                const tmp = closure_1_0(_Promise[15]);
                obj = {
                  href,
                  shouldConfirm: true,
                  onClick() {
                    return false;
                  },
                  onConfirm() {
                    closure_1(_Promise[14])(url);
                    application = closure_2_0.application;
                    let id;
                    const track = closure_1(_Promise[10]).track;
                    const RPC_OPEN_EXTERNAL_LINK_CALLED = constants.RPC_OPEN_EXTERNAL_LINK_CALLED;
                    closure_1(_Promise[10]);
                    if (application != null) {
                      id = application.id;
                    }
                    track(RPC_OPEN_EXTERNAL_LINK_CALLED, { application_id: id, url, opened: true });
                    closure_0({ opened: true });
                  },
                  onCancel() {
                    application = closure_2_0.application;
                    let id;
                    const track = closure_1(_Promise[10]).track;
                    const RPC_OPEN_EXTERNAL_LINK_CALLED = constants.RPC_OPEN_EXTERNAL_LINK_CALLED;
                    closure_1(_Promise[10]);
                    if (application != null) {
                      id = application.id;
                    }
                    obj = { application_id: id, url, opened: false };
                    track(RPC_OPEN_EXTERNAL_LINK_CALLED, obj);
                    closure_0({ opened: false });
                  }
                };
                const handleClick = tmp.handleClick;
                const obj2 = closure_1_0(_Promise[16]);
                const obj3 = { application, channelId };
                return handleClick(obj, undefined, undefined, obj2.getActivitiesModalContextKey(obj3));
              });
            }
            c5 = 0;
            c7 = 3;
            return { value: resolved, done: true };
          }
        } catch (tmp62) {
          channelId = tmp62;
          if (0 === c5) {
            c7 = 3;
            throw tmp62;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
let Constants = Constants_mod2;
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = Constants_mod2;
({ PopoutWindowKeys: metroRequire, RPCCommands, RPCErrors: metroImportDefault, UserSettingsSections: metroImportAll, AnalyticEvents: c9 } = Constants);
Constants = Constants_mod2;
const items = [, ];
({ AM_HARMONY_PRD_APPLICATION_ID: arr[0], AM_HARMONY_STG_APPLICATION_ID: arr[1] } = Constants);
const set = new Set(items);
const weakMap = new WeakMap();
obj = { [RPCCommands.OPEN_EXTERNAL_LINK]: obj2, [RPCCommands.NAVIGATE_TO_CONNECTIONS]: obj3 };
obj2 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items1 },
  validation(string) {
    let stringResult;
    obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { url: stringResult.required() };
    const keys = obj.required().keys;
    obj.required();
    stringResult = string.string();
    return keys(obj2);
  },
  handler(socket) {
    socket = socket.socket;
    const url = socket.args.url;
    return (async () => {
      let closure_0;
      let value;
      function openExternalLink() {
        return closure_1_12(...arguments);
      }
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          c5 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp3;
              socket = undefined;
              const obj7 = socket(c2[19]);
              const result = obj7.validatePostMessageTransport(socket.transport);
              value = weakMap.get(socket);
              socket = value;
              if (value == null) {
                socket = { inFlight: false, readyAt: 0 };
              }
              if (!socket.inFlight) {
                const _Date4 = Date;
                if (Date.now() >= socket.readyAt) {
                  socket.inFlight = true;
                  const result1 = weakMap.set(socket, tmp15);
                  c4 = 1;
                  c2 = 2;
                  c5 = 1;
                  const obj4 = { value: openExternalLink(socket, url), done: false };
                  return obj4;
                }
              }
              c5 = 3;
              const obj5 = { value: { opened: false }, done: true };
              return obj5;
            }
          } else if (1 === c2) {
            c4 = 0;
            socket.inFlight = false;
            const _Date3 = Date;
            socket.readyAt = Date.now() + 1000;
            throw closure_3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            socket.inFlight = false;
            const _Date2 = Date;
            socket.readyAt = Date.now() + 1000;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c4 = 0;
            socket.inFlight = false;
            const _Date = Date;
            socket.readyAt = Date.now() + 1000;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp18) {
          closure_3 = tmp18;
          if (0 === c4) {
            c5 = 3;
            throw tmp18;
          } else {
            c2 = 1;
          }
        }
      }
    })();
  }
};
items1 = [RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE];
obj3 = {
  validation(arg0) {
    return createRpcJoiSchemaObjectDefault(arg0);
  },
  scope: { [RPC_SCOPE_CONFIG.ANY]: items2 },
  handler(socket) {
    socket = socket.socket;
    obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = RPCHelpers;
    if (set.has(obj2.validateApplication(socket.application))) {
      const obj3 = { screen: metroImportAll.CONNECTIONS };
      openUserSettings.openUserSettings(obj3);
    } else {
      const self = this;
      const self2 = this;
      const obj4 = { errorCode: metroImportDefault.UNAUTHORIZED_FOR_APPLICATION };
      const tmp7 = new RPCErrorDefault(obj4, "Command not available for this application");
      throw tmp7;
    }
  }
};
items2 = [RPC_AUTHENTICATED_SCOPE];
const SHARE_LINK = RPCCommands.SHARE_LINK;
let obj4 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items3 },
  handler(arg0) {
    let applicationId;
    let args;
    let customId;
    let linkId;
    let message;
    let socket;
    ({ socket, args } = arg0);
    ({ custom_id: require, message: importDefault, link_id: dependencyMap } = args);
    obj = RPCHelpers;
    let result = obj.validatePostMessageTransport(socket.transport);
    let obj2 = RPCHelpers;
    const validateApplicationResult = obj2.validateApplication(socket.application);
    let c3 = validateApplicationResult;
    if (null == validateApplicationResult) {
      const self5 = this;
      const self6 = this;
      const obj3 = { errorCode: constants.INVALID_COMMAND };
      const tmp16 = new RPCErrorDefault(obj3, "No application.");
      throw tmp16;
    } else {
      const tmpResult = EmbeddedSurfaceUtils;
      if (tmpResult.isEmbeddedApplication(socket.application)) {
        const self3 = this;
        const self4 = this;
        const promise = new Promise((arg0) => {
          let closure_0 = arg0;
          obj = openActivityShareLinkModal;
          const obj2 = {
            applicationId,
            customId: require,
            linkId: dependencyMap,
            message: importDefault,
            onShare(stateFromStores, didCopyLink) {
              obj = { success: didCopyLink || stateFromStores, didCopyLink, didSendMessage: stateFromStores };
              closure_0(obj);
            }
          };
          const result = obj.openActivityShareLinkModal(obj2);
        });
        return promise;
      } else {
        const self = this;
        const self2 = this;
        const obj4 = { errorCode: constants.INVALID_COMMAND };
        const tmp8 = new RPCErrorDefault(obj4, "This application cannot access this API");
        throw tmp8;
      }
    }
  }
};
items3 = [RPC_AUTHENTICATED_SCOPE];
obj[SHARE_LINK] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SHARE_LINK, obj4);
let result = size.fileFinishedImporting("modules/rpc/server/commands/links.tsx");

export default obj;