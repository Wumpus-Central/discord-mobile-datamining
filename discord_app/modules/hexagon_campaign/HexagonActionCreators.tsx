// === Module 15855: HexagonActionCreators ===

// Module 15855 (HexagonActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1104 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4998 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1392 */;

require = fn;
function enrollInHexagonCampaign() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _enrollInHexagonCampaign() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url, rejectWithError: true };
          c1 = 1;
          c0 = 1;
          const obj5 = { value: HTTP.post(obj4), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c0 = 3;
        return { value: "IconComponent", done: "+352" };
      }
    } catch (tmp8) {
      c0 = tmp;
      throw tmp8;
    }
  }
};
let closure_11 = async function _enrollAndWaitForHexagonCampaignPerk(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          c4 = 1;
          c5 = 3;
          c6 = 1;
          const obj4 = { value: enrollInHexagonCampaign(), done: false };
          return obj4;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_2 = closure_3;
        const _HermesInternal2 = HermesInternal;
        closure_130_6.warn("Failed to enroll in the Hexagon campaign: " + closure_129_2);
        c6 = 3;
        return { value: false, done: true };
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_129_1 = value;
          if (!closure_129_1) {
            const _HermesInternal = HermesInternal;
            closure_130_6.warn("Timed out waiting for the Hexagon campaign " + closure_129_0 + " perk to sync");
          }
          c6 = 3;
          return { value: true, done: true };
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        c4 = 0;
        c5 = 2;
        c6 = 1;
        let obj = {
          value: (function waitForHexagonCampaignPerk(CLIENT_THEME) {
                  closure_0 = CLIENT_THEME;
                  if (obj.isEnrolledInHexagonCampaign(closure_4.getCurrentUser(), CLIENT_THEME)) {
                    let resolveResult = _Promise.resolve(true);
                  } else {
                    resolveResult = new _Promise((arg0) => {
                      closure_0 = arg0;
                      function handleUserStoreChange() {
                        if (obj.isEnrolledInHexagonCampaign(currentUser.getCurrentUser(), closure_0)) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(closure_2);
                          closure_3_4.removeChangeListener(handleUserStoreChange);
                          closure_0(true);
                        }
                        obj = closure_0(closure_2[6]);
                      }
                      const timeout = setTimeout(() => {
                        closure_3_4.removeChangeListener(handleUserStoreChange);
                        closure_0(false);
                      }, closure_1_7);
                      closure_1_4.addChangeListener(handleUserStoreChange);
                    });
                  }
                  return resolveResult;
                })(closure_129_0),
          done: false
        };
        return obj;
      }
    } catch (tmp25) {
      closure_3 = tmp25;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp25;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_12 = async function _enrollAndClearPendingHexagonCampaignEnrollment(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
          closure_1 = tmp3;
          c4 = 1;
          c2 = 2;
          c5 = 1;
          const obj4 = {
            value: (function enrollAndWaitForHexagonCampaignPerk() {
                      const self = this;
                      const apply = closure_1_11.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(closure_0),
            done: false
          };
          return obj4;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_10 = null;
        throw closure_3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        closure_129_10 = null;
        c5 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c4 = 0;
        closure_129_10 = null;
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp14) {
      closure_3 = tmp14;
      if (tmp4 === c4) {
        c5 = tmp2;
        throw tmp14;
      } else {
        c2 = tmp;
      }
    }
  }
};
let closure_5 = fn(4996).HEXAGON_CAMPAIGN_ENROLL_ENDPOINT;
let closure_6 = new LoggerDefault("HexagonActionCreators");
const result = 5 * DurationsDefault.Millis.SECOND;
let closure_10 = null;
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/hexagon_campaign/HexagonActionCreators.tsx");

export const HEXAGON_CAMPAIGN_PERK_SYNC_TIMEOUT_MS = result;
export { enrollInHexagonCampaign };
export const ensureHexagonCampaignEnrollment = function ensureHexagonCampaignEnrollment(DISPLAY_NAME_STYLE) {
  if (obj.isEnrolledInHexagonCampaign(UserStore.getCurrentUser(), DISPLAY_NAME_STYLE)) {
    let resolved = Promise.resolve(true);
  } else {
    if (null == closure_10) {
      closure_10 = (function enrollAndClearPendingHexagonCampaignEnrollment() {
        const self = this;
        const apply = closure_1_12.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(DISPLAY_NAME_STYLE);
    }
    resolved = closure_10;
  }
  return resolved;
};
export function getPendingHexagonCampaignEnrollment() {
  return closure_10;
}
export const markHexagonCampaignPerkApplied = function markHexagonCampaignPerkApplied(DISPLAY_NAME_STYLE) {
  DispatcherDefault.dispatch({ type: "HEXAGON_CAMPAIGN_PERK_APPLIED", perk: DISPLAY_NAME_STYLE });
};
export const clearHexagonCampaignAppliedPerks = function clearHexagonCampaignAppliedPerks() {
  DispatcherDefault.dispatch({ type: "HEXAGON_CAMPAIGN_APPLIED_PERKS_CLEARED" });
};
export const markHexagonCampaignDisplayNameStylesVisited = function markHexagonCampaignDisplayNameStylesVisited() {
  DispatcherDefault.dispatch({ type: "HEXAGON_CAMPAIGN_DISPLAY_NAME_STYLES_VISITED" });
};
export const saveHexagonCampaignPreviousPerkValues = function saveHexagonCampaignPreviousPerkValues(previousPerkValues) {
  DispatcherDefault.dispatch({ type: "HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED", previousPerkValues });
};
export const saveHexagonCampaignPreviousDisplayNameStyles = function saveHexagonCampaignPreviousDisplayNameStyles() {
  const currentUser = UserStore.getCurrentUser();
  let displayNameStyles;
  if (currentUser != null) {
    displayNameStyles = currentUser.displayNameStyles;
  }
  if (displayNameStyles == null) {
    displayNameStyles = null;
  }
  if (!obj.hasHexagonCampaignDisplayNameFont(displayNameStyles)) {
    const obj2 = { displayNameStyles };
    const obj4 = { type: "HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED", previousPerkValues: obj2 };
    DispatcherDefault.dispatch(obj4);
  }
  obj = HexagonCampaignUtils;
};