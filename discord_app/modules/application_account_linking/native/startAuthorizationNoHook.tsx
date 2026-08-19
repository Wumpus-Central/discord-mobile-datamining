// discord_app/modules/application_account_linking/native/startAuthorizationNoHook.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { AnalyticEvents } from "../../../Constants.tsx";

const require = fn;
function _startAuthorizationNoHook() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              const table = tmp5;
              const callback = authorizationApp;
              authorizationApp = undefined;
              if (null != callback) {
                let obj3 = callback(closure_1_2[2]);
                authorizationApp = obj3.getAuthorizationApp(tmp33);
                let prop;
                if (authorizationApp != null) {
                  prop = authorizationApp.connectionEntrypointUrl;
                }
                if (null != prop) {
                  c5 = 1;
                  c6 = 2;
                  c7 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = callback2(closure_1_2[3]).openURL(authorizationApp.connectionEntrypointUrl);
                  return obj1;
                }
              }
            }
          } else {
            if (1 === tmp8) {
              c5 = 0;
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              obj = authorizationApp(table[4]);
              const obj2 = { location_stack: null, application_id: null, flow_type: "web" };
              obj2[0] = callback;
              obj2[1] = authorizationApp.id;
              obj.track(constants.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, obj2);
              c5 = 0;
            }
            c5 = 0;
            c7 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          }
          c7 = 3;
        } catch (tmp24) {
          constants = tmp24;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp24;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("obj132").fileFinishedImporting("modules/application_account_linking/native/startAuthorizationNoHook.tsx");

export const startAuthorizationNoHook = function startAuthorizationNoHook(application, items) {
  const self = this;
  const apply = _startAuthorizationNoHook.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};