// === Module 11764: startAuthorizationNoHook ===

// Module 11764 (startAuthorizationNoHook)
import LinkingDefault from "Linking" /* 4255 */;
import useAuthorizationApp from "useAuthorizationApp" /* 7167 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _startAuthorizationNoHook(arg0) {
  if (c7 === 2) {
    c7 = 3;
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp5;
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          if (null != closure_0) {
            let obj3 = useAuthorizationApp;
            const authorizationApp = obj3.getAuthorizationApp(tmp32);
            closure_130_1 = authorizationApp;
            let prop;
            if (authorizationApp != null) {
              prop = authorizationApp.connectionEntrypointUrl;
            }
            if (null != prop) {
              c5 = 1;
              c6 = 2;
              c7 = 1;
              const obj1 = { value: LinkingDefault.openURL(authorizationApp.connectionEntrypointUrl), done: false };
              return obj1;
            }
          }
        }
      } else {
        if (1 === tmp8) {
          c5 = 0;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          obj = closure_131_1(closure_131_2[4]);
          const obj2 = { location_stack: closure_130_0, application_id: closure_130_1.id, flow_type: "web" };
          obj.track(closure_131_4.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, obj2);
          c5 = 0;
        }
        c5 = 0;
        c7 = 3;
        obj3 = { value, done: true };
        return obj3;
      }
      c7 = 3;
    } catch (tmp24) {
      closure_4 = tmp24;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp24;
      } else {
        c6 = tmp;
      }
    }
  }
};
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/startAuthorizationNoHook.tsx");

export const startAuthorizationNoHook = function startAuthorizationNoHook() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};