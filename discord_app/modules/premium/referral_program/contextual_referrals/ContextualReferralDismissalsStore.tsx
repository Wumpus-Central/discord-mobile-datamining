// === Module 15529: ContextualReferralDismissalsStore ===

// Module 15529 (ContextualReferralDismissalsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;

function handleReset() {
  networkTtlCache.clear();
  closure_3 = 0;
  return true;
}
let set = new Set();
const networkTtlCache = new fn(15530).NetworkTtlCache();
let closure_3 = 0;
const Store = initializeDefault.Store;
class ContextualReferralDismissalsStore extends Store {
}
const prototype = ContextualReferralDismissalsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserSettingsProtoStore);
};
prototype["getDismissedIds"] = function getDismissedIds() {
  value = networkTtlCache.getValue();
  let dismissedIds;
  if (value != null) {
    dismissedIds = value.dismissedIds;
  }
  if (dismissedIds == null) {
    dismissedIds = set;
  }
  return dismissedIds;
};
prototype["isDismissedFor"] = function isDismissedFor(arg0) {
  value = networkTtlCache.getValue();
  let flag;
  if (value != null) {
    const dismissedIds = value.dismissedIds;
    flag = dismissedIds.has(arg0);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getVersion"] = function getVersion() {
  value = networkTtlCache.getValue();
  let str;
  if (value != null) {
    str = value.version;
  }
  if (str == null) {
    str = "0";
  }
  return str;
};
prototype["hasFetched"] = function hasFetched() {
  return null != networkTtlCache.getValue() && !networkTtlCache.isLoading();
};
prototype["shouldFetch"] = function shouldFetch() {
  return networkTtlCache.shouldFetch();
};
ContextualReferralDismissalsStore.displayName = "ContextualReferralDismissalsStore";
const contextualReferralDismissalsStore = new ContextualReferralDismissalsStore(DispatcherDefault, {
  CONNECTION_OPEN: handleReset,
  LOGOUT: handleReset,
  CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_START: function handleFetchStart() {
    const isLoadingResult = networkTtlCache.isLoading();
    let flag = !isLoadingResult;
    if (!isLoadingResult) {
      networkTtlCache.setLoading();
      flag = true;
    }
    return flag;
  },
  CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_SUCCESS: function handleFetchSuccess(targetIds) {
    const obj = { dismissedIds: new Set(targetIds.targetIds), version: targetIds.version };
    networkTtlCache.setValue(obj);
    closure_3 = 0;
    return true;
  },
  CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_FAILURE: function handleFetchFailure() {
    networkTtlCache.clear();
    return true;
  },
  CONTEXTUAL_REFERRAL_UPSELL_DISMISS: function handleDismiss(targetId) {
    targetId = targetId.targetId;
    value = networkTtlCache.getValue();
    let flag = null != value;
    if (flag) {
      const dismissedIds = value.dismissedIds;
      flag = !dismissedIds.has(targetId);
    }
    if (flag) {
      const obj2 = { dismissedIds: null, version: null };
      const _Set = Set;
      const items = [];
      items[HermesBuiltin.arraySpread(value.dismissedIds, 0)] = targetId;
      set = new Set(items);
      obj2.dismissedIds = set;
      obj2.version = value.version;
      networkTtlCache.setValue(obj2);
      closure_3 = closure_3 + 1;
      flag = true;
    }
    return flag;
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate() {
    let dismissedIds = networkTtlCache.getValue();
    if (null == dismissedIds) {
      return false;
    } else {
      const userContent = UserSettingsProtoStore.settings.userContent;
      let str;
      if (userContent != null) {
        str = userContent.contextualReferralUpsellDismissalsVersion;
      }
      if (str == null) {
        str = "0";
      }
      if (str === dismissedIds.version) {
        return tmp;
      } else if (closure_3 > 0) {
        closure_3 = tmp2 - 1;
        const obj2 = { dismissedIds: null, version: null };
        dismissedIds = dismissedIds.dismissedIds;
        obj2.dismissedIds = dismissedIds;
        obj2.version = str;
        networkTtlCache.setValue(obj2);
        let flag = false;
      } else {
        networkTtlCache.clear();
        flag = true;
      }
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/contextual_referrals/ContextualReferralDismissalsStore.tsx");

export default contextualReferralDismissalsStore;