// discord_app/modules/embedded_apps/csp/loadEmbeddedAppCSPForLaunch.tsx
import getURLForApplication from "../../activities/getURLForApplication.tsx";
import EmbeddedAppFramePolicyExperiment from "EmbeddedAppFramePolicyExperiment.tsx";
import EmbeddedAppCSPActionCreators from "EmbeddedAppCSPActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import EmbeddedAppCSPStore from "EmbeddedAppCSPStore.tsx";

const getURLForApplicationDefault = getURLForApplication;

require = fn;
let closure_6 = async function _loadEmbeddedAppCSPForLaunch(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          if (obj10.getIsEmbeddedAppFramePolicyEnabled("loadEmbeddedAppCSPForLaunch")) {
            const tmp24 = getLaunchRouterOrigin(closure_0);
            if (null == tmp24) {
              c5 = 3;
              const obj4 = { value: constants.SKIPPED, done: true };
              return obj4;
            } else if (null != policy.getPolicy(tmp24)) {
              c5 = 3;
              const obj5 = { value: constants.CACHED, done: true };
              return obj5;
            } else {
              closure_129_0 = EmbeddedAppCSPActionCreators.isEmbeddedAppCSPReadInFlight(tmp24);
              c3 = 1;
              const tmp37Result = EmbeddedAppCSPActionCreators;
              c4 = 2;
              c5 = 1;
              const obj6 = { value: EmbeddedAppCSPActionCreators.fetchEmbeddedAppCSP(tmp24), done: false };
              return obj6;
            }
          } else {
            c5 = 3;
            const obj7 = { value: constants.SKIPPED, done: true };
            return obj7;
          }
          obj10 = EmbeddedAppFramePolicyExperiment;
        }
      } else if (1 === tmp8) {
        c3 = 0;
        const tmp162 = new closure_130_1(closure_130_2[4])(closure_130_1(closure_130_2[4]).Reasons.CSP_UNAVAILABLE);
        throw tmp162;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c3 = 0;
        if (closure_129_0) {
          const IN_FLIGHT = closure_130_5.IN_FLIGHT;
        } else {
          const FETCHED = closure_130_5.FETCHED;
        }
        c5 = 3;
      }
    } catch (tmp29) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp29;
      } else {
        c4 = tmp;
      }
    }
  }
};
function getLaunchRouterOrigin(arg0) {
  const tmp2 = getURLForApplicationDefault(arg0);
  let applicationRouterOrigin = null;
  if (null != tmp2) {
    applicationRouterOrigin = getURLForApplication.getApplicationRouterOrigin(tmp2);
  }
  return applicationRouterOrigin;
}
const EmbeddedAppCSPSource = { SKIPPED: "skipped", CACHED: "cached", IN_FLIGHT: "in_flight", FETCHED: "fetched" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/csp/loadEmbeddedAppCSPForLaunch.tsx");

export default function loadEmbeddedAppCSPForLaunch() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export { EmbeddedAppCSPSource };
export function getLaunchCSPURL(arg0) {
  const tmp2 = getURLForApplicationDefault(arg0);
  let applicationRouterOrigin = null;
  if (null != tmp2) {
    applicationRouterOrigin = getURLForApplication.getApplicationRouterOrigin(tmp2);
  }
  let embeddedAppCSPURL = null;
  if (null != applicationRouterOrigin) {
    embeddedAppCSPURL = EmbeddedAppCSPActionCreators.getEmbeddedAppCSPURL(applicationRouterOrigin);
  }
  return embeddedAppCSPURL;
}
