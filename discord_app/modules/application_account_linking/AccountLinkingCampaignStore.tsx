// === Module 19831: AccountLinkingCampaignStore ===

// Module 19831 (AccountLinkingCampaignStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;

let object = importDefault;
const items = [];
let closure_3 = items;
let c4 = false;
let c5 = 0;
const Store = initializeDefault.Store;
class AccountLinkingCampaignStore extends Store {
  constructor() {
    closure_0 = undefined;
    obj = {
      ACCOUNT_LINKING_CAMPAIGNS_FETCH_SUCCESS(arg0) {
            return closure_0.handleFetchSuccess(arg0);
          },
      ACCOUNT_LINKING_CAMPAIGN_DISMISS: null,
      LOGOUT: null
    };
    class ACCOUNT_LINKING_CAMPAIGN_DISMISS {
      constructor(arg0) {
        return closure_0.handleDismiss(global);
      }
    }
    obj.ACCOUNT_LINKING_CAMPAIGN_DISMISS = ACCOUNT_LINKING_CAMPAIGN_DISMISS;
    obj.LOGOUT = function LOGOUT() {
      closure_5 = closure_5 + 1;
      closure_3 = items;
      c4 = false;
    };
    tmp1 = new tmp(closure_0(closure_1[1]), obj, ACCOUNT_LINKING_CAMPAIGN_DISMISS, new.target, tmp, closure_0);
    closure_0 = tmp1;
    return tmp1;
  }
}
const prototype = AccountLinkingCampaignStore.prototype;
prototype["getCampaigns"] = function getCampaigns() {
  return closure_3;
};
prototype["hasFetched"] = function hasFetched() {
  return c4;
};
prototype["getSessionGeneration"] = function getSessionGeneration() {
  return c5;
};
prototype["isCampaignDetectableApp"] = function isCampaignDetectableApp(arg0) {
  closure_0 = arg0;
  return closure_3.some((targetType2DetectableAppName) => targetType2DetectableAppName.targetType2DetectableAppName === closure_0);
};
prototype["handleFetchSuccess"] = function handleFetchSuccess(sessionGeneration) {
  if (sessionGeneration.sessionGeneration !== c5) {
    return false;
  } else {
    closure_3 = sessionGeneration.campaigns.length > 0 ? sessionGeneration.campaigns : items;
    c4 = true;
  }
};
prototype["handleDismiss"] = function handleDismiss(campaignId) {
  campaignId = campaignId.campaignId;
  if (closure_3.some((campaignId) => campaignId.campaignId === campaignId)) {
    closure_3 = closure_3.filter((campaignId) => campaignId.campaignId !== campaignId);
  } else {
    return false;
  }
};
AccountLinkingCampaignStore.displayName = "AccountLinkingCampaignStore";
object = undefined;
let obj = {
  ACCOUNT_LINKING_CAMPAIGNS_FETCH_SUCCESS(arg0) {
    return closure_0.handleFetchSuccess(arg0);
  },
  ACCOUNT_LINKING_CAMPAIGN_DISMISS: null,
  LOGOUT: null
};
class ACCOUNT_LINKING_CAMPAIGN_DISMISS {
  constructor(arg0) {
    return closure_0.handleDismiss(global);
  }
}
obj.ACCOUNT_LINKING_CAMPAIGN_DISMISS = ACCOUNT_LINKING_CAMPAIGN_DISMISS;
obj.LOGOUT = function LOGOUT() {
  closure_5 = closure_5 + 1;
  closure_3 = items;
  c4 = false;
};
object = new Object(DispatcherDefault, obj, tmp, ACCOUNT_LINKING_CAMPAIGN_DISMISS, AccountLinkingCampaignStore, Object, importDefault, new.target, undefined);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/AccountLinkingCampaignStore.tsx");

export default object;