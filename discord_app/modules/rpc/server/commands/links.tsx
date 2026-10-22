// discord_app/modules/rpc/server/commands/links.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import EmbeddedSurfaceUtils from "../../../applications/utils/EmbeddedSurfaceUtils.tsx";
import embeddedActivityLocationUtils from "../../../activities/utils/embeddedActivityLocationUtils.tsx";
import CrossPlatformNativeUtilsDefault from "../../../../utils/CrossPlatformNativeUtils.native.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import RPCHelpers from "../../RPCHelpers.tsx";
import validateEmbeddedAppFrame from "../../helpers/validateEmbeddedAppFrame.tsx";
import getEmbeddedActivityPopoutWindowKeyDefault from "../../../activities/getEmbeddedActivityPopoutWindowKey.tsx";
import internalDeepLinks from "../../helpers/internalDeepLinks.tsx";
import fetchIsLinkTrusted from "../../../activities/utils/fetchIsLinkTrusted.tsx";
import openActivityShareLinkModal from "../../../activities/openActivityShareLinkModal.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";

require = fn;
function trackExternalLink(application, arg1, arg2) {
  const str = new URL(arg1);
  let tmp = "client.vibeyard.tools" === str.hostname;
  if (tmp) {
    tmp = "/link" === str.pathname;
  }
  if (tmp) {
    str.search = "";
    str.hash = "";
    str.username = "";
    str.password = "";
  }
  application = application.application;
  let id;
  if (application != null) {
    id = application.id;
  }
  const obj = AnalyticsUtilsDefault;
  obj.track(constants3.RPC_OPEN_EXTERNAL_LINK_CALLED, { application_id: id, url: str.toString(), opened: true });
}
let closure_12 = async function _openExternalLink(arg0, arg1) {
  let application = arg0;
  closure_1 = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const channelId = tmp3;
            application = tmp7;
            closure_130_0 = application;
            closure_130_1 = closure_1;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            application = application.application;
            let id;
            if (application != null) {
              id = application.id;
            }
            const application1 = application.getApplication(id);
            closure_130_2 = application1;
            currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
            let _location;
            if (currentEmbeddedActivity != null) {
              _location = currentEmbeddedActivity.location;
            }
            const embeddedActivityLocationChannelId =
              embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
            closure_130_3 = embeddedActivityLocationChannelId;
            let tmp43;
            if (PlatformUtils.isPlatformEmbedded) {
              const obj5 = { application: application1, channelId: embeddedActivityLocationChannelId };
              tmp43 = getEmbeddedActivityPopoutWindowKeyDefault(obj5);
            }
            let internalDeepLink = null;
            if (null != tmp36Result.tryValidateEmbeddedAppFrame(application)) {
              internalDeepLink = internalDeepLinks.resolveInternalDeepLink(closure_1);
              const tmp36Result4 = internalDeepLinks;
            }
            if (null != internalDeepLink) {
              if (null != tmp43) {
                CrossPlatformNativeUtilsDefault.focus(null, true);
              }
              if (tmp36Result5.openInternalDeepLink(internalDeepLink)) {
                trackExternalLink(tmp75, closure_1, true);
                c7 = 3;
                const obj6 = { value: { opened: true }, done: true };
                return obj6;
              }
              tmp36Result5 = internalDeepLinks;
            }
            c5 = 1;
            const _URL = URL;
            let str = new URL(closure_1);
            const str1 = str.toString();
            closure_130_4 = str1;
            if (null != tmp43) {
              CrossPlatformNativeUtilsDefault.focus(tmp43, true);
            }
            tmp36Result = validateEmbeddedAppFrame;
            let id1;
            if (application1 != null) {
              id1 = application1.id;
            }
            c6 = 2;
            c7 = 1;
            const obj8 = { value: fetchIsLinkTrusted.fetchIsLinkTrusted(id1, str1), done: false };
            return obj8;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          const obj10 = { errorCode: closure_131_6.INVALID_COMMAND };
          const _HermesInternal = HermesInternal;
          const tmp262 = new closure_131_1(closure_131_2[17])(obj10, "Invalid URL: " + closure_130_1);
          throw tmp262;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            closure_131_1(closure_131_2[14])(closure_130_4);
            closure_131_11(closure_130_0, closure_130_4, true);
            const resolved = Promise.resolve({ opened: true });
          } else {
            new Promise((arg0) => {
              closure_0 = arg0;
              let obj = closure_1_0(application[15]);
              let obj2 = {
                href,
                shouldConfirm: true,
                onClick() {
                  return false;
                },
                onConfirm() {
                  closure_1(5642)(href);
                  const str = new URL(href);
                  let tmp5 = "client.vibeyard.tools" === str.hostname;
                  if (tmp5) {
                    tmp5 = "/link" === str.pathname;
                  }
                  if (tmp5) {
                    str.search = "";
                    str.hash = "";
                    str.username = "";
                    str.password = "";
                  }
                  application = closure_2_0.application;
                  let id;
                  if (application != null) {
                    id = application.id;
                  }
                  const tmpResult = closure_1(1267);
                  tmpResult.track(constants.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                    application_id: id,
                    url: str.toString(),
                    opened: true,
                  });
                  closure_0({ opened: true });
                  const obj = { application_id: id, url: str.toString(), opened: true };
                },
                onCancel() {
                  const str = new URL(href);
                  let tmp2 = "client.vibeyard.tools" === str.hostname;
                  if (tmp2) {
                    tmp2 = "/link" === str.pathname;
                  }
                  if (tmp2) {
                    str.search = "";
                    str.hash = "";
                    str.username = "";
                    str.password = "";
                  }
                  application = closure_2_0.application;
                  let id;
                  if (application != null) {
                    id = application.id;
                  }
                  const obj = closure_1(1267);
                  obj.track(constants.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                    application_id: id,
                    url: str.toString(),
                    opened: false,
                  });
                  closure_0({ opened: false });
                  const obj2 = { application_id: id, url: str.toString(), opened: false };
                },
              };
              return obj.handleClick(
                obj2,
                undefined,
                undefined,
                closure_1_0(application[16]).getActivitiesModalContextKey({ application, channelId }),
              );
            });
          }
          c5 = 0;
          c7 = 3;
        }
      } catch (tmp65) {
        const href = tmp65;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp65;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let Constants = fn(6364);
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = fn(1087);
({ RPCCommands, RPCErrors: metroRequire, UserSettingsSections: closure_7, AnalyticEvents: closure_8 } = Constants);
Constants = fn(2026);
const items = [,];
({ AM_HARMONY_PRD_APPLICATION_ID: arr[0], AM_HARMONY_STG_APPLICATION_ID: arr[1] } = Constants);
const set = new Set(items);
const weakMap = new WeakMap();
let obj = {};
let CONTEXT_MENU_ICON_NAMES = fn(15665);
let obj3 = {
  scope: null,
  handler(socket) {
    socket = socket.socket;
    const url = socket.args.url;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
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
              closure_1 = tmp6;
              closure_129_0 = undefined;
              const result = socket(c2[19]).validatePostMessageTransport(socket.transport);
              value = weakMap.get(socket);
              socket = value;
              if (value == null) {
                socket = { inFlight: false, readyAt: 0 };
              }
              closure_129_0 = socket;
              if (!socket.inFlight) {
                const _Date4 = Date;
                if (Date.now() >= tmp18.readyAt) {
                  tmp18.inFlight = true;
                  const result1 = weakMap.set(socket, tmp18);
                  c4 = 1;
                  c2 = 2;
                  c5 = 1;
                  const obj4 = {
                    value: (function openExternalLink() {
                      const self = this;
                      const apply = closure_1_12.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(socket, url),
                    done: false,
                  };
                  return obj4;
                }
              }
              c5 = 3;
              const obj5 = { value: { opened: false }, done: true };
              return obj5;
            }
          } else if (1 === tmp6) {
            c4 = 0;
            closure_129_0.inFlight = false;
            const _Date3 = Date;
            closure_129_0.readyAt = Date.now() + 1000;
            throw closure_3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_129_0.inFlight = false;
            const _Date2 = Date;
            closure_129_0.readyAt = Date.now() + 1000;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c4 = 0;
            closure_129_0.inFlight = false;
            const _Date = Date;
            closure_129_0.readyAt = Date.now() + 1000;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp21) {
          closure_3 = tmp21;
          if (tmp3 === c4) {
            c5 = tmp2;
            throw tmp21;
          } else {
            c2 = tmp;
          }
        }
      }
    })();
  },
};
const items1 = [RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE];
obj3.scope = { [RPC_SCOPE_CONFIG.ANY]: items1 };
obj[RPCCommands.OPEN_EXTERNAL_LINK] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.OPEN_EXTERNAL_LINK, obj3);
let obj4 = {
  validation(arg0) {
    return createRpcJoiSchemaObjectDefault(arg0);
  },
  scope: null,
  handler(socket) {
    socket = socket.socket;
    const result = RPCHelpers.validatePostMessageTransport(socket.transport);
    if (set.has(obj2.validateApplication(socket.application))) {
      const obj3 = { screen: constants2.CONNECTIONS };
      openUserSettings.openUserSettings(obj3);
    } else {
      const obj4 = { errorCode: constants.UNAUTHORIZED_FOR_APPLICATION };
      const tmp9 = new RPCErrorDefault(obj4, "Command not available for this application");
      throw tmp9;
    }
    obj2 = RPCHelpers;
  },
};
const items2 = [RPC_AUTHENTICATED_SCOPE];
obj4.scope = { [RPC_SCOPE_CONFIG.ANY]: items2 };
obj[RPCCommands.NAVIGATE_TO_CONNECTIONS] = obj4;
CONTEXT_MENU_ICON_NAMES = fn(15665);
let obj6 = {
  scope: null,
  handler(arg0) {
    ({ socket, args } = arg0);
    ({ custom_id: require, message: importDefault, link_id: dependencyMap } = args);
    let result = RPCHelpers.validatePostMessageTransport(socket.transport);
    const validateApplicationResult = RPCHelpers.validateApplication(socket.application);
    c3 = validateApplicationResult;
    if (null == validateApplicationResult) {
      const obj3 = { errorCode: constants.INVALID_COMMAND };
      const tmp22 = new RPCErrorDefault(obj3, "No application.");
      throw tmp22;
    } else {
      if (tmpResult.isEmbeddedApplication(socket.application)) {
        const promise = new Promise((arg0) => {
          closure_0 = arg0;
          const result = openActivityShareLinkModal.openActivityShareLinkModal({
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
              const obj = { success: tmp2, didCopyLink, didSendMessage: stateFromStores };
            },
          });
        });
        return promise;
      } else {
        const obj4 = { errorCode: constants.INVALID_COMMAND };
        const tmp10 = new RPCErrorDefault(obj4, "This application cannot access this API");
        throw tmp10;
      }
      tmpResult = EmbeddedSurfaceUtils;
    }
  },
};
const items3 = [RPC_AUTHENTICATED_SCOPE];
obj6.scope = { [RPC_SCOPE_CONFIG.ANY]: items3 };
obj[RPCCommands.SHARE_LINK] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SHARE_LINK, obj6);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/links.tsx");

export default obj;
