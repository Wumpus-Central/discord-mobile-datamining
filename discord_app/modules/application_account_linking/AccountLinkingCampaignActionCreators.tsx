// === Module 19836: AccountLinkingCampaignActionCreators ===

// Module 19836 (AccountLinkingCampaignActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1388 */;
import AccountLinkingCampaignStore from "AccountLinkingCampaignStore" /* 19831 */;

require = fn;
function toDetectableAppName(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if (set.has(arg0)) {
      tmp = arg0;
    }
  }
  return tmp;
}
function toAccountLinkingCampaign(campaignId) {
  const obj = { campaignId: campaignId.campaign_id, applicationId: campaignId.application_id, orbCount: campaignId.orb_count, endAtUnixS: null, targetType1Eligible: null, targetType2DetectableAppName: null };
  let num = campaignId.end_at_unix_s;
  if (num == null) {
    num = 0;
  }
  obj.endAtUnixS = num;
  ({ target_type_1_eligible: obj.targetType1Eligible, target_type_2_detectable_app_name } = campaignId);
  let tmp = null;
  if (null != target_type_2_detectable_app_name) {
    tmp = null;
    if (set.has(target_type_2_detectable_app_name)) {
      tmp = target_type_2_detectable_app_name;
    }
  }
  obj.targetType2DetectableAppName = tmp;
  return obj;
}
function retryAfterMs(retryAfter) {
  if (null != retryAfter) {
    if (typeof retryAfter === "object") {
      if ("retryAfter" in retryAfter) {
        retryAfter = retryAfter.retryAfter;
        if (typeof retryAfter === "number") {
          const _Number = Number;
          if (Number.isFinite(retryAfter)) {
            if (retryAfter > 0) {
              return 1000 * retryAfter;
            }
          }
        }
      }
    }
  }
  return 0;
}
let closure_11 = async function _fetchAccountLinkingCampaignDetectableApps(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          c5 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: constants.ACCOUNT_LINKING_CAMPAIGN_DETECTABLE_APPS, rejectWithError: true };
          c6 = 2;
          c7 = 1;
          const obj5 = { value: HTTP.get(obj4), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_130_2 = closure_4;
        if (closure_130_0 != null) {
          tmp17(closure_131_10(closure_130_2));
        }
        c7 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_130_1 = value;
        const body = closure_130_1.body;
        let detectable_apps;
        if (body != null) {
          detectable_apps = body.detectable_apps;
        }
        importDefault = detectable_apps;
        if (detectable_apps == null) {
          importDefault = [];
        }
        const mapped = importDefault.map(closure_131_8);
        c5 = 0;
        c7 = 3;
        const obj = { value: mapped.filter((item) => null != item), done: true };
        return obj;
      }
    } catch (tmp27) {
      closure_4 = tmp27;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp27;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_12 = async function _fetchAccountLinkingCampaigns() {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          let obj4 = dependencyMap;
          if (dependencyMap === undefined) {
            obj4 = {};
          }
          closure_131_0 = obj4;
          closure_131_1 = closure_1;
          closure_131_2 = undefined;
          let sessionGeneration;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "Path", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const currentUser = closure_132_4.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          closure_131_2 = id;
          sessionGeneration = closure_132_5.getSessionGeneration();
          if (null == closure_131_2) {
            c8 = 3;
            return { value: null, done: true };
          } else {
            c6 = 1;
            const HTTP = closure_132_0(closure_132_2[5]).HTTP;
            const request = { url: closure_132_6.ACCOUNT_LINKING_CAMPAIGNS, query: null, rejectWithError: true };
            const obj6 = { installed_detectable_apps: null, not_installed_detectable_apps: null };
            const _Object = Object;
            const keys = Object.keys(closure_131_0);
            obj6.installed_detectable_apps = keys.filter((item) => true === dependencyMap[item]);
            const _Object2 = Object;
            const keys1 = Object.keys(closure_131_0);
            obj6.not_installed_detectable_apps = keys1.filter((item) => false === dependencyMap[item]);
            request.query = obj6;
            c7 = 3;
            c8 = 1;
            const obj7 = { value: HTTP.get(request), done: false };
            return obj7;
          }
        }
      } else if (2 === tmp7) {
        c6 = 0;
        closure_131_6 = closure_5;
        if (closure_131_1 != null) {
          tmp24(closure_132_10(closure_131_6));
        }
        c8 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_131_4 = value;
        const currentUser1 = closure_132_4.getCurrentUser();
        let id1;
        if (currentUser1 != null) {
          id1 = currentUser1.id;
        }
        if (id1 === closure_131_2) {
          if (closure_132_5.getSessionGeneration() === sessionGeneration) {
            const body = closure_131_4.body;
            let campaigns;
            if (body != null) {
              campaigns = body.campaigns;
            }
            dependencyMap = campaigns;
            if (campaigns == null) {
              dependencyMap = [];
            }
            closure_131_5 = dependencyMap.map(closure_132_9);
            const obj9 = { type: "ACCOUNT_LINKING_CAMPAIGNS_FETCH_SUCCESS", campaigns: closure_131_5, sessionGeneration };
            closure_132_1(closure_132_2[6]).dispatch(obj9);
            c6 = 0;
            c8 = 3;
            const obj10 = { value: closure_131_5, done: true };
            return obj10;
          }
        }
        c6 = 0;
        c8 = 3;
        return { value: null, done: true };
      }
    } catch (tmp36) {
      closure_5 = tmp36;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp36;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_6 = fn(7920).AccountLinkingCampaignEndpoints;
const set = new Set(Object.values(fn(16217).DetectableAppNames));
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/AccountLinkingCampaignActionCreators.tsx");

export function fetchAccountLinkingCampaignDetectableApps() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function fetchAccountLinkingCampaigns() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function dismissAccountLinkingCampaign(campaignId) {
  DispatcherDefault.dispatch({ type: "ACCOUNT_LINKING_CAMPAIGN_DISMISS", campaignId });
  const HTTP = HTTPUtils.HTTP;
  const obj2 = { type: "ACCOUNT_LINKING_CAMPAIGN_DISMISS", campaignId };
  HTTP.post({ url: closure_6.ACCOUNT_LINKING_CAMPAIGN_DISMISS(campaignId), rejectWithError: false });
}