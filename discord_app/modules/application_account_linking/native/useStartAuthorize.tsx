// === Module 7275: useStartAuthorize ===

// Module 7275 (useStartAuthorize)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import LinkingDefault from "Linking" /* 4332 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const AuthorizeFlow = fn(7276).AuthorizeFlow;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_account_linking/native/useStartAuthorize.tsx");

export default function useStartAuthorize(getOfficialApplicationId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  _require = undefined;
  const debug = obj.debug;
  const authorizationApp = require("useAuthorizationApp").useAuthorizationApp(getOfficialApplicationId);
  _require = authorizationApp;
  let prop;
  if (authorizationApp != null) {
    prop = authorizationApp.connectionEntrypointUrl;
  }
  let WEB = null;
  if (null != prop) {
    WEB = AuthorizeFlow.WEB;
  }
  let obj2 = require("useAuthorizationApp");
  const tmp = undefined !== debug && debug;
  let parentId;
  if (authorizationApp != null) {
    parentId = authorizationApp.parentId;
  }
  if (parentId == null) {
    let id;
    if (authorizationApp != null) {
      id = authorizationApp.id;
    }
    parentId = id;
  }
  const authorizedAppsToken = require("useAuthorizedAppsToken").useAuthorizedAppsToken(parentId);
  ({ token, fetched } = authorizedAppsToken);
  _require = asyncGeneratorStep(async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp5;
            closure_129_0 = closure_0;
            let prop;
            if (closure_0 != null) {
              prop = closure_0.connectionEntrypointUrl;
            }
            if (null == prop) {
              c6 = 3;
              return { value: false, done: true };
            } else {
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: LinkingDefault.openURL(closure_0.connectionEntrypointUrl), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp8) {
          c4 = 0;
          closure_129_1 = closure_3;
          const onError = closure_129_0.onError;
          if (onError != null) {
            onError(closure_129_1);
          }
          c6 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          const onConfirm = closure_129_0.onConfirm;
          if (onConfirm != null) {
            onConfirm();
          }
          const obj8 = { location_stack: closure_129_0.analyticsLocations, application_id: closure_0.id, flow_type: constants.WEB };
          AnalyticsUtilsDefault.track(constants2.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, obj8);
          const obj9 = { onSuccess: closure_129_0.onSuccess, onError: closure_129_0.onError };
          const result = closure_0(7281).accountLinkAuthorizationStarted(closure_0.id, obj9);
          c4 = 0;
          c6 = 3;
          return { value: true, done: true };
        }
      } catch (tmp36) {
        closure_3 = tmp36;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp36;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  const items = [authorizationApp];
  const obj3 = { fetched, hasAlreadyLinked: null, canStartAuthorization: null, startAuthorization: null, connectionApp: null, chosenFlow: null, token: null, debug: null };
  const callback = noop.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  if (fetched) {
    fetched = null != token;
  }
  obj3.hasAlreadyLinked = fetched;
  obj3.canStartAuthorization = null != prop;
  obj3.startAuthorization = callback;
  obj3.connectionApp = authorizationApp;
  obj3.chosenFlow = WEB;
  obj3.token = token;
  if (!tmp) {
    obj3.debug = undefined;
    return obj3;
  } else {
    let obj4 = { isSubscribedToAuthorizeRequest: false, oauth2Token: token, hasConnectionEntrypointUrl: null, validFlows: null };
    let prop1;
    if (authorizationApp != null) {
      prop1 = authorizationApp.connectionEntrypointUrl;
    }
    obj4.hasConnectionEntrypointUrl = null != prop1;
    if (tmp6) {
      const items1 = [AuthorizeFlow.WEB];
      let items2 = items1;
    } else {
      items2 = [];
    }
    obj4.validFlows = items2;
  }
  const tmp2Result = require("useAuthorizedAppsToken");
};