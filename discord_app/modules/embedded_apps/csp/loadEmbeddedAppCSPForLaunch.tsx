// === Module 10772: loadEmbeddedAppCSPForLaunch ===

// Module 10772 (loadEmbeddedAppCSPForLaunch)
import getURLForApplication from "getURLForApplication" /* 5623 */;
import EmbeddedAppFramePolicyExperiment from "EmbeddedAppFramePolicyExperiment" /* 10774 */;
import useEmbeddedAppCSP from "useEmbeddedAppCSP" /* 10775 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import EmbeddedAppCSPStore from "EmbeddedAppCSPStore" /* 10773 */;

const getURLForApplicationDefault = getURLForApplication;

require = fn;
let closure_5 = async function _loadEmbeddedAppCSPForLaunch(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+352" };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          if (obj6.getIsEmbeddedAppFramePolicyEnabled("loadEmbeddedAppCSPForLaunch")) {
            const tmp13 = getURLForApplicationDefault(closure_0);
            let applicationRouterOrigin = null;
            if (null != tmp13) {
              applicationRouterOrigin = getURLForApplication.getApplicationRouterOrigin(tmp13);
              const tmp34Result = getURLForApplication;
            }
            closure_129_0 = applicationRouterOrigin;
            if (null != applicationRouterOrigin) {
              const useEmbeddedAppCSPPolicy = useEmbeddedAppCSP.useEmbeddedAppCSPPolicy;
              const items = [applicationRouterOrigin];
              c3 = 1;
              c4 = 1;
              const obj4 = { value: useEmbeddedAppCSPPolicy.fetchMany(items), done: false };
              return obj4;
            }
          }
          obj6 = EmbeddedAppFramePolicyExperiment;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } else if (null == closure_130_4.getPolicy(closure_129_0)) {
        const tmp262 = new closure_130_1(closure_130_2[5])(closure_130_1(closure_130_2[5]).Reasons.CSP_UNAVAILABLE);
        throw tmp262;
      }
      c4 = 3;
      return { value: "IconComponent", done: "+352" };
    } catch (tmp18) {
      c4 = tmp;
      throw tmp18;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/csp/loadEmbeddedAppCSPForLaunch.tsx");

export default function loadEmbeddedAppCSPForLaunch() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};