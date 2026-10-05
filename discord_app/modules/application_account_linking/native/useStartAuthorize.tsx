// discord_app/modules/application_account_linking/native/useStartAuthorize.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import ApplicationAccountLinkingConstants from "../ApplicationAccountLinkingConstants.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import size from "../../../../_runtime/metro/00002__.js";

let c5, c6, closure_3;

const AuthorizeFlow = ApplicationAccountLinkingConstants.AuthorizeFlow;
const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/application_account_linking/native/useStartAuthorize.tsx");

export default function useStartAuthorize(arg0) {
  let callback;
  let fetched;
  let items2;
  let prop1;
  let tmp14;
  let token;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let authorizationApp;
  const debug = obj.debug;
  const tmp = undefined !== debug && debug;
  let obj2 = authorizationApp(6662);
  authorizationApp = obj2.useAuthorizationApp(arg0);
  let prop;
  if (authorizationApp != null) {
    prop = authorizationApp.connectionEntrypointUrl;
  }
  let WEB = null;
  if (null != prop) {
    WEB = AuthorizeFlow.WEB;
  }
  let parentId;
  const useAuthorizedAppsToken = tmp2(6664).useAuthorizedAppsToken;
  authorizationApp(6664);
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
  const authorizedAppsToken = useAuthorizedAppsToken(parentId);
  ({ token, fetched } = authorizedAppsToken);
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0) => {
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let id;
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
            let closure_2 = tmp;
            id = closure_0;
            let prop;
            if (closure_0 != null) {
              prop = id.connectionEntrypointUrl;
            }
            if (null == prop) {
              c6 = 3;
              return { value: false, done: true };
            } else {
              c4 = 1;
              const obj6 = LinkingDefault;
              id = obj6.openURL(closure_0.connectionEntrypointUrl);
              c5 = 2;
              c6 = 1;
              const obj5 = { value: id, done: false };
              return obj5;
            }
          }
        } else if (1 === tmp4) {
          c4 = 0;
          let closure_1 = closure_3;
          id = closure_0.onError;
          if (id != null) {
            id(closure_1);
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
          id = closure_0;
          const onConfirm = closure_0.onConfirm;
          if (onConfirm != null) {
            onConfirm();
          }
          const obj8 = {
            location_stack: closure_0.analyticsLocations,
            application_id: closure_0.id,
            flow_type: constants.WEB,
          };
          const obj = AnalyticsUtilsDefault;
          obj.track(constants2.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, obj8);
          id = closure_0.id;
          const obj9 = { onSuccess: closure_0.onSuccess, onError: closure_0.onError };
          const obj3 = closure_0(dependencyMap[8]);
          const result = obj3.accountLinkAuthorizationStarted(id, obj9);
          c4 = 0;
          c6 = 3;
          return { value: true, done: true };
        }
      } catch (tmp32) {
        closure_3 = tmp32;
        if (0 === c4) {
          c6 = 3;
          throw tmp32;
        } else {
          c5 = 1;
        }
      }
    }
  });
  const items = [authorizationApp];
  let obj3 = {
    fetched,
    hasAlreadyLinked: fetched,
    canStartAuthorization: tmp6,
    startAuthorization: callback,
    connectionApp: authorizationApp,
    chosenFlow: WEB,
    token,
    debug: tmp14,
  };
  callback = useCallback(function () {
    return closure_0(...arguments);
  }, items);
  if (fetched) {
    fetched = null != token;
  }
  tmp14 = undefined;
  if (tmp) {
    let obj4 = {
      isSubscribedToAuthorizeRequest: false,
      oauth2Token: token,
      hasConnectionEntrypointUrl: null != prop1,
      validFlows: items2,
    };
    prop1 = undefined;
    if (authorizationApp != null) {
      prop1 = authorizationApp.connectionEntrypointUrl;
    }
    if (null != prop) {
      const items1 = [AuthorizeFlow.WEB];
      items2 = items1;
    } else {
      items2 = [];
    }
    tmp14 = obj4;
  }
  return obj3;
}
