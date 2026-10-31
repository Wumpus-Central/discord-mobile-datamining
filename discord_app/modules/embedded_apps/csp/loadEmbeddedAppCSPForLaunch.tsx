// === Module 10886: loadEmbeddedAppCSPForLaunch ===

// Module 10886 (loadEmbeddedAppCSPForLaunch)
import getURLForApplication from "getURLForApplication" /* 5672 */;
import EmbeddedAppFramePolicyExperiment from "EmbeddedAppFramePolicyExperiment" /* 10888 */;
import EmbeddedAppCSPActionCreators from "EmbeddedAppCSPActionCreators" /* 10889 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import EmbeddedAppCSPStore from "EmbeddedAppCSPStore" /* 10887 */;

const getURLForApplicationDefault = getURLForApplication;

require = fn;
let closure_5 = async function _loadEmbeddedAppCSPForLaunch(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp3;
          if (obj7.getIsEmbeddedAppFramePolicyEnabled("loadEmbeddedAppCSPForLaunch")) {
            const tmp20 = getURLForApplicationDefault(closure_0);
            let applicationRouterOrigin = null;
            if (null != tmp20) {
              applicationRouterOrigin = getURLForApplication.getApplicationRouterOrigin(tmp20);
              const tmp33Result = getURLForApplication;
            }
            if (null != applicationRouterOrigin) {
              if (null == policy.getPolicy(applicationRouterOrigin)) {
                c3 = 1;
                c2 = 2;
                c4 = 1;
                const obj4 = { value: EmbeddedAppCSPActionCreators.fetchEmbeddedAppCSP(applicationRouterOrigin), done: false };
                return obj4;
              }
            }
          }
          c4 = 3;
          obj7 = EmbeddedAppFramePolicyExperiment;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        const tmp112 = new closure_129_1(closure_129_2[5])(closure_129_1(closure_129_2[5]).Reasons.CSP_UNAVAILABLE);
        throw tmp112;
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      c3 = 0;
      c4 = 3;
      const obj = { value, done: true };
      return obj;
    } catch (tmp25) {
      if (tmp4 === c3) {
        c4 = tmp2;
        throw tmp25;
      } else {
        c2 = tmp;
      }
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