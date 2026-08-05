// discord_app/stores/game_store/EntitlementStore.tsx
import createFromServer from "createFromServer";
import setLibraryApplications from "setLibraryApplications";
import addSku from "addSku";
import ME from "ME";
import { PREMIUM_SUBSCRIPTION_APPLICATION as closure_8 } from "GuildFeatures";
import { Store } from "initialize";
import set from "addSku";

let closure_6;
let error;
const require = arg1;
function addEntitlement(entitlement) {
  closure_9[entitlement.id] = createFromServer.createFromServer(entitlement);
  if (null == dependencyMap2[entitlement.sku_id]) {
    const _Set = Set;
    const set = new Set();
    dependencyMap2[entitlement.sku_id] = set;
  }
  if (null == dependencyMap3[entitlement.application_id]) {
    const _Set2 = Set;
    const set1 = new Set();
    dependencyMap3[entitlement.application_id] = set1;
  }
  if (null != entitlement.subscription_id) {
    if (null == dependencyMap4[entitlement.subscription_id]) {
      const _Set3 = Set;
      const set2 = new Set();
      tmp13[entitlement.subscription_id] = set2;
    }
    dependencyMap4[entitlement.subscription_id].add(entitlement.id);
    const obj = dependencyMap4[entitlement.subscription_id];
  }
  dependencyMap3[entitlement.application_id].add(entitlement.id);
  dependencyMap2[entitlement.sku_id].add(entitlement.id);
}
function addGiftEntitlement(id) {
  closure_10[id.id] = createFromServer.createFromServer(id);
}
function handlePurchaseSuccess(arg0) {
  while (tmp !== undefined) {
    let tmp3 = addEntitlement;
    let tmp4 = addEntitlement(tmp2);
    continue;
  }
}
function handleEntitlementUpdate(entitlement) {
  addEntitlement(entitlement.entitlement);
}
({ EntitlementSourceTypes: closure_6, EntitlementTypes: error } = ME);
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let c13 = false;
let c14 = false;
let c15 = false;
let set = new Set();
let set1 = new Set();
let closure_18 = {};
class EntitlementStore extends Store {
}
const prototype = EntitlementStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [setLibraryApplications];
  this.syncWith(items, () => true);
};
prototype["get"] = function get(arg0) {
  return dependencyMap[arg0];
};
prototype["getGiftable"] = function getGiftable() {
  return importDefault(12).values(closure_10);
};
prototype["getForApplication"] = function getForApplication(arg0) {
  if (null == dependencyMap3[arg0]) {
    return null;
  } else {
    const _Set = Set;
    const set = new Set();
    for (const item10014 of tmp) {
      let tmp8 = dependencyMap;
      let addResult = set.add(dependencyMap[item10014]);
      continue;
    }
    return set;
  }
};
prototype["getForSku"] = function getForSku(arg0) {
  if (null == dependencyMap2[arg0]) {
    return null;
  } else {
    const _Set = Set;
    const set = new Set();
    for (const item10014 of tmp) {
      let tmp8 = dependencyMap;
      let addResult = set.add(dependencyMap[item10014]);
      continue;
    }
    return set;
  }
};
Object.defineProperty(prototype, "fetchingAllEntitlements", {
  get: function fetchingAllEntitlements() {
    return c13;
  },
  set: undefined
});
Object.defineProperty(prototype, "fetchedAllEntitlements", {
  get: function fetchedAllEntitlements() {
    return c14;
  },
  set: undefined
});
Object.defineProperty(prototype, "fetchedEndedEntitlements", {
  get: function fetchedEndedEntitlements() {
    return c15;
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
    const set = new Set();
    for (const item10014 of tmp) {
      let tmp8 = dependencyMap;
      let addResult = set.add(dependencyMap[item10014]);
      continue;
    }
    return set;
  }
};
prototype["isEntitledToSku"] = function isEntitledToSku(arg0, arg1, applicationId) {
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  if (null != dependencyMap2[arg1]) {
    for (const item10011 of tmp2) {
      let tmp5 = dependencyMap;
      let tmp6 = dependencyMap[item10011];
      let obj2 = tmp6;
      if (null != tmp6) {
        let tmp7 = tmp6;
        let tmp8 = addSku;
        if (obj2.isValid(arg0, addSku, tmp)) {
          let tmp9 = obj;
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
      let libraryApplication = store.getLibraryApplication(applicationId, tmp);
    } else {
      libraryApplication = store.getActiveLibraryApplication(applicationId);
    }
    let tmp13 = null == libraryApplication || libraryApplication.sku.id !== arg1;
    if (!tmp13) {
      tmp13 = !require(4329) /* getComboId */.isUserEntitledToLibraryApplication(libraryApplication);
      const obj3 = require(4329) /* getComboId */;
    }
    let tmp16 = !tmp13;
    if (tmp13) {
      tmp16 = null;
    }
    return tmp16;
  }
};
prototype["hasFetchedForApplicationIds"] = function hasFetchedForApplicationIds(items) {
  return items.every((arg0) => set.has(arg0));
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
  let date;
  const items = [];
  date = new Date();
  const forApplication = this.getForApplication(closure_8);
  if (forApplication != null) {
    const item = forApplication.forEach((endsAt) => {
      let tmp = null != endsAt.endsAt;
      if (tmp) {
        tmp = endsAt.endsAt < date;
      }
      let tmp4 = endsAt.type !== outer1_7.FRACTIONAL_REDEMPTION;
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
  const forApplication = this.getForApplication(closure_8);
  if (forApplication != null) {
    const item = forApplication.forEach((skuId) => {
      const ACTIVE_FRACTIONAL_PREMIUM_SKUS = items(outer1_2[8]).FractionalPremiumSKUsSets.ACTIVE_FRACTIONAL_PREMIUM_SKUS;
      if (tmp) {
        items.push(skuId);
      }
    });
  }
  return items;
};
EntitlementStore.displayName = "EntitlementStore";
const entitlementStore = new EntitlementStore(require("dispatcher"), {
  ENTITLEMENT_FETCH_APPLICATION_START: function handleEntitlementApplicationStart(applicationId) {
    set.add(applicationId.applicationId);
  },
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function handleEntitlementApplicationFetch(arg0) {
    let applicationId;
    let entitlements;
    ({ applicationId, entitlements } = arg0);
    set.delete(applicationId);
    set1.add(applicationId);
    const iter = entitlements[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (true !== nextResult.consumed) {
        let tmp5 = addEntitlement;
        let tmp6 = nextResult;
        let tmp7 = addEntitlement(tmp4);
      }
      continue;
    }
  },
  ENTITLEMENT_FETCH_APPLICATION_FAIL: function handleEntitlementApplicationFail() {

  },
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function handleEntitlementsGiftableFetchSuccess(entitlements) {
    entitlements = entitlements.entitlements;
    let closure_10 = {};
    const item = entitlements.forEach(addGiftEntitlement);
  },
  SKU_PURCHASE_SUCCESS: handlePurchaseSuccess,
  VIRTUAL_CURRENCY_REDEEM_SUCCESS: handlePurchaseSuccess,
  LIBRARY_FETCH_SUCCESS: function handleLibraryFetchSuccess(arg0) {
    const iter = arg0.libraryApplications[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.entitlements) {
        let tmp3 = nextResult;
        let entitlements = tmp2.entitlements;
        let tmp4 = entitlements;
        let tmp5 = entitlements;
        for (const item10018 of entitlements) {
          let tmp6 = addEntitlement;
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
    let closure_9 = {};
    let closure_11 = {};
    let closure_12 = {};
    let c13 = false;
    let c14 = false;
    let c15 = false;
    const set = new Set();
    const set1 = new Set();
  },
  ENTITLEMENTS_FETCH_FOR_USER_START: function handleUserEntitlementsStart() {
    let c13 = true;
  },
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function handleUserEntitlementsSuccess(excludeEnded) {
    let c14 = true;
    let c13 = false;
    let closure_15 = !excludeEnded.excludeEnded;
    while (tmp !== undefined) {
      let tmp3 = addEntitlement;
      let tmp4 = addEntitlement(tmp2);
      continue;
    }
  },
  ENTITLEMENTS_FETCH_FOR_USER_FAIL: function handleUserEntitlementsFail() {
    let c14 = false;
    let c13 = false;
    let c15 = false;
  }
});
const result = set.fileFinishedImporting("stores/game_store/EntitlementStore.tsx");

export default entitlementStore;