// discord_app/modules/application_account_linking/native/useStartAuthorize.tsx
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import { AuthorizeFlow } from "AuthorizeFlow" /* 7143 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { getAuthorizationApp } from "../hooks/useAuthorizationApp.tsx";
import { useAuthorizedAppsTokens } from "../hooks/useAuthorizedAppsToken.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/application_account_linking/native/useStartAuthorize.tsx");

export default function useStartAuthorize(getOfficialApplicationId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let _require;
  const debug = obj.debug;
  const authorizationApp = _getAuthorizationApp.useAuthorizationApp(getOfficialApplicationId);
  _require = authorizationApp;
  let prop;
  if (authorizationApp != null) {
    prop = authorizationApp.connectionEntrypointUrl;
  }
  let WEB = null;
  if (null != prop) {
    WEB = AuthorizeFlow.WEB;
  }
  let obj2 = _getAuthorizationApp;
  const tmp = undefined !== debug && debug;
  const tmp2 = _require;
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
  const authorizedAppsToken = _useAuthorizedAppsTokens.useAuthorizedAppsToken(parentId);
  ({ token, fetched } = authorizedAppsToken);
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp5;
              let prop;
              if (lib != null) {
                prop = lib.connectionEntrypointUrl;
              }
              if (null == prop) {
                c6 = 3;
                return { value: false, done: true };
              } else {
                c4 = 1;
                c5 = 2;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_2_1(closure_2_2[6]).openURL(lib.connectionEntrypointUrl);
                return obj1;
              }
            }
          } else if (1 === tmp8) {
            c4 = 0;
            closure_1 = closure_3;
            const onError = lib.onError;
            if (onError != null) {
              onError(closure_1);
            }
            c6 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            const onConfirm = lib.onConfirm;
            if (onConfirm != null) {
              onConfirm();
            }
            obj = closure_2_1(closure_2_2[7]);
            const obj3 = { location_stack: null, application_id: null, flow_type: null };
            obj3[0] = lib.analyticsLocations;
            obj3[1] = lib.id;
            obj3[2] = closure_2_5.WEB;
            obj.track(closure_2_6.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, obj3);
            obj2 = lib(closure_2_2[8]);
            const obj4 = { onSuccess: null, onError: null };
            obj4[0] = lib.onSuccess;
            obj4[1] = lib.onError;
            const result = obj2.accountLinkAuthorizationStarted(lib.id, obj4);
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
    })();
  });
  const items = [authorizationApp];
  obj = { fetched, hasAlreadyLinked: null, canStartAuthorization: null, startAuthorization: null, connectionApp: null, chosenFlow: null, token: null, debug: null };
  callback = React.useCallback(function() {
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
  obj[1] = fetched;
  obj[2] = null != prop;
  obj[3] = callback;
  obj[4] = authorizationApp;
  obj[5] = WEB;
  obj[6] = token;
  if (!tmp) {
    obj[7] = undefined;
    return obj;
  } else {
    obj = { isSubscribedToAuthorizeRequest: false, oauth2Token: null, hasConnectionEntrypointUrl: null, validFlows: null };
    obj[1] = token;
    let prop1;
    if (authorizationApp != null) {
      prop1 = authorizationApp.connectionEntrypointUrl;
    }
    obj[2] = null != prop1;
    if (tmp6) {
      const items1 = [AuthorizeFlow.WEB];
      let items2 = items1;
    } else {
      items2 = [];
    }
    obj[3] = items2;
  }
};