// === Module 7573: EntitlementStore ===

// Module 7573 (EntitlementStore)
import _modDef12 from "module_12" /* 12 */;
import initializeAll from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1075 */;
import EntitlementTypes from "EntitlementTypes" /* 1086 */;
import LibraryApplicationUtils from "LibraryApplicationUtils" /* 7574 */;
import EntitlementRecord from "EntitlementRecord" /* 2041 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 2038 */;
import SKUStore from "SKUStore" /* 6890 */;

require = fn;
function addEntitlement(entitlement) {
  closure_8[entitlement.id] = EntitlementRecord.createFromServer(entitlement);
  if (null == dependencyMap2[entitlement.sku_id]) {
    const _Set = Set;
    set = new Set();
    dependencyMap2[entitlement.sku_id] = set;
  }
  if (null == dependencyMap3[entitlement.application_id]) {
    const _Set2 = Set;
    set1 = new Set();
    dependencyMap3[entitlement.application_id] = set1;
  }
  if (null != entitlement.subscription_id) {
    if (null == dependencyMap4[entitlement.subscription_id]) {
      const _Set3 = Set;
      const set2 = new Set();
      dependencyMap4[entitlement.subscription_id] = set2;
    }
    dependencyMap4[entitlement.subscription_id].add(entitlement.id);
  }
  dependencyMap3[entitlement.application_id].add(entitlement.id);
  dependencyMap2[entitlement.sku_id].add(entitlement.id);
}
function addGiftEntitlement(id) {
  closure_9[id.id] = EntitlementRecord.createFromServer(id);
}
function handlePurchaseSuccess(arg0) {
  while (tmp !== undefined) {
    let tmp4 = addEntitlement(tmp2);
    continue;
  }
  tmp = arg0.entitlements[Symbol.iterator]();
}
function handleEntitlementUpdate(entitlement) {
  addEntitlement(entitlement.entitlement);
}
const EntitlementSourceTypes = fn(1072).EntitlementSourceTypes;
let closure_7 = fn(1386).PREMIUM_SUBSCRIPTION_APPLICATION;
const dependencyMap = {};
let closure_9 = {};
const dependencyMap2 = {};
const dependencyMap3 = {};
let c12 = false;
let c13 = false;
let c14 = false;
let set = new Set();
let set1 = new Set();
const dependencyMap4 = {};
const Store = initializeAll.Store;
class EntitlementStore extends Store {
}
const prototype = EntitlementStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [LibraryApplicationStore];
  this.syncWith(items, () => true);
};
prototype["get"] = function get(arg0) {
  return dependencyMap[arg0];
};
prototype["getGiftable"] = function getGiftable() {
  return _modDef12.values(closure_9);
};
prototype["getForApplication"] = function getForApplication(arg0) {
  if (null == dependencyMap3[arg0]) {
    return null;
  } else {
    const _Set = Set;
    set = new Set();
    for (const item10014 of tmp) {
      let addResult = set.add(dependencyMap[item10014]);
      continue;
    }
    return set;
  }
};
prototype["getForSku"] = function getForSku(SINGLE_ORB_SKU_ID) {
  if (null == dependencyMap2[SINGLE_ORB_SKU_ID]) {
    return null;
  } else {
    const _Set = Set;
    set = new Set();
    for (const item10014 of tmp) {
      let addResult = set.add(dependencyMap[item10014]);
      continue;
    }
    return set;
  }
};
Object.defineProperty(prototype, "fetchingAllEntitlements", {
  get: function fetchingAllEntitlements() {
    return c12;
  },
  set: undefined
});
Object.defineProperty(prototype, "fetchedAllEntitlements", {
  get: function fetchedAllEntitlements() {
    return c13;
  },
  set: undefined
});
Object.defineProperty(prototype, "fetchedEndedEntitlements", {
  get: function fetchedEndedEntitlements() {
    return c14;
  },
  set: undefined
});
Object.defineProperty(prototype, "applicationIdsFetching", {
  get: function applicationIdsFetching() {
    return set;
  },
  set: undefined
});
Object.defineProperty(prototype, "applicationIdsFetched", {
  get: function applicationIdsFetched() {
    return set1;
  },
  set: undefined
});
prototype["isFetchingForApplication"] = function isFetchingForApplication(arg0) {
  let fetchingAllEntitlements = this.fetchingAllEntitlements;
  if (!fetchingAllEntitlements) {
    let hasItem = null != arg0;
    if (hasItem) {
      const applicationIdsFetching = tmp.applicationIdsFetching;
      hasItem = applicationIdsFetching.has(arg0);
    }
    fetchingAllEntitlements = hasItem;
  }
  return fetchingAllEntitlements;
};
prototype["isFetchedForApplication"] = function isFetchedForApplication(arg0) {
  let fetchedAllEntitlements = this.fetchedAllEntitlements;
  if (!fetchedAllEntitlements) {
    let hasItem = null != arg0;
    if (hasItem) {
      const applicationIdsFetched = tmp.applicationIdsFetched;
      hasItem = applicationIdsFetched.has(arg0);
    }
    fetchedAllEntitlements = hasItem;
  }
  return fetchedAllEntitlements;
};
prototype["getForSubscription"] = function getForSubscription(arg0) {
  if (null == dependencyMap4[arg0]) {
    return null;
  } else {
    const _Set = Set;
    set = new Set();
    for (const item10014 of tmp) {
      let addResult = set.add(dependencyMap[item10014]);
      continue;
    }
    return set;
  }
};
prototype["isEntitledToSku"] = function isEntitledToSku(arg0, arg1, applicationId) {
  let tmp = item;
  if (item === undefined) {
    tmp = null;
  }
  if (null != dependencyMap2[arg1]) {
    for (const item10011 of tmp2) {
      let tmp6 = dependencyMap[item10011];
      let obj2 = tmp6;
      if (null != tmp6) {
        if (obj2.isValid(arg0, SKUStore, tmp)) {
          obj.return();
          let flag = true;
          return true;
        }
      }
      continue;
    }
  }
  if (set1.has(applicationId)) {
    return false;
  } else {
    if (null != tmp) {
      let libraryApplication = LibraryApplicationStore.getLibraryApplication(applicationId, tmp);
    } else {
      libraryApplication = LibraryApplicationStore.getActiveLibraryApplication(applicationId);
    }
    let tmp13 = null == libraryApplication || libraryApplication.sku.id !== arg1;
    if (!tmp13) {
      tmp13 = !LibraryApplicationUtils.isUserEntitledToLibraryApplication(libraryApplication);
    }
    let tmp16 = !tmp13;
    if (tmp13) {
      tmp16 = null;
    }
    return tmp16;
  }
};
prototype["hasFetchedForApplicationIds"] = function hasFetchedForApplicationIds(items) {
  return items.every((item) => set.has(item));
};
prototype["getFractionalPremium"] = function getFractionalPremium(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.includeEnded;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.excludeReverseTrial;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const items = [];
  const date = new Date();
  const forApplication = this.getForApplication(closure_7);
  if (forApplication != null) {
    const item = forApplication.forEach((endsAt) => {
      let tmp = null != endsAt.endsAt;
      if (tmp) {
        tmp = endsAt.endsAt < date;
      }
      let tmp4 = endsAt.type !== EntitlementTypes.EntitlementTypes.FRACTIONAL_REDEMPTION;
      if (!tmp4) {
        if (tmp) {
          tmp = !flag;
        }
        tmp4 = tmp;
      }
      if (!tmp4) {
        tmp4 = tmp3;
      }
      if (!tmp4) {
        items.push(endsAt);
      }
      tmp3 = endsAt.sourceType === EntitlementSourceTypes.REVERSE_TRIAL && flag2;
    });
  }
  return items;
};
prototype["isFractionalPremiumActive"] = function isFractionalPremiumActive(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let excludeReverseTrial = obj.excludeReverseTrial;
  if (excludeReverseTrial === undefined) {
    excludeReverseTrial = false;
  }
  return this.getFractionalPremium({ includeEnded: false, excludeReverseTrial }).length > 0;
};
prototype["getUnactivatedFractionalPremiumUnits"] = function getUnactivatedFractionalPremiumUnits() {
  const items = [];
  const forApplication = this.getForApplication(closure_7);
  if (forApplication != null) {
    const item = forApplication.forEach((skuId) => {
      const ACTIVE_FRACTIONAL_PREMIUM_SKUS = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ACTIVE_FRACTIONAL_PREMIUM_SKUS;
      if (tmp) {
        items.push(skuId);
      }
      tmp = ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(skuId.skuId) && !skuId.consumed;
    });
  }
  return items;
};
EntitlementStore.displayName = "EntitlementStore";
const entitlementStore = new EntitlementStore(DispatcherDefault, {
  ENTITLEMENT_FETCH_APPLICATION_START: function handleEntitlementApplicationStart(applicationId) {
    set.add(applicationId.applicationId);
  },
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function handleEntitlementApplicationFetch(arg0) {
    ({ applicationId, entitlements } = arg0);
    set.delete(applicationId);
    set1.add(applicationId);
    const iter = entitlements[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (true !== nextResult.consumed) {
        let tmp7 = addEntitlement(tmp4);
      }
      continue;
    }
  },
  ENTITLEMENT_FETCH_APPLICATION_FAIL: function handleEntitlementApplicationFail() {

  },
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function handleEntitlementsGiftableFetchSuccess(entitlements) {
    entitlements = entitlements.entitlements;
    closure_9 = {};
    const item = entitlements.forEach(addGiftEntitlement);
  },
  SKU_PURCHASE_SUCCESS: handlePurchaseSuccess,
  VIRTUAL_CURRENCY_REDEEM_SUCCESS: handlePurchaseSuccess,
  LIBRARY_FETCH_SUCCESS: function handleLibraryFetchSuccess(arg0) {
    const iter = arg0.libraryApplications[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.entitlements) {
        let entitlements = tmp2.entitlements;
        for (const item10018 of entitlements) {
          let tmp7 = addEntitlement(item10018);
          continue;
        }
      }
      continue;
    }
  },
  ENTITLEMENT_CREATE: handleEntitlementUpdate,
  ENTITLEMENT_UPDATE: handleEntitlementUpdate,
  ENTITLEMENT_DELETE: function handleEntitlementDelete(entitlement) {
    entitlement = entitlement.entitlement;
    delete tmp2[tmp];
    if (null != dependencyMap3[entitlement.application_id]) {
      obj.delete(entitlement.id);
    }
    if (null != dependencyMap2[entitlement.sku_id]) {
      obj2.delete(entitlement.id);
    }
    if (null != entitlement.subscription_id) {
      if (null != dependencyMap4[entitlement.subscription_id]) {
        obj3.delete(entitlement.id);
      }
    }
  },
  LOGOUT: function handleLogout() {
    closure_8 = {};
    closure_10 = {};
    closure_11 = {};
    c12 = false;
    c13 = false;
    c14 = false;
    set = new Set();
    set1 = new Set();
  },
  ENTITLEMENTS_FETCH_FOR_USER_START: function handleUserEntitlementsStart() {
    c12 = true;
  },
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function handleUserEntitlementsSuccess(excludeEnded) {
    c13 = true;
    c12 = false;
    c14 = !excludeEnded.excludeEnded;
    while (tmp !== undefined) {
      let tmp4 = addEntitlement(tmp2);
      continue;
    }
    tmp = excludeEnded.entitlements[Symbol.iterator]();
  },
  ENTITLEMENTS_FETCH_FOR_USER_FAIL: function handleUserEntitlementsFail() {
    c13 = false;
    c12 = false;
    c14 = false;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/game_store/EntitlementStore.tsx");

export default entitlementStore;