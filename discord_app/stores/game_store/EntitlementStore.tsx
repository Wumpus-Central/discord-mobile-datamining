// === Module 6909: EntitlementStore ===

// Module 6909 (EntitlementStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedAll from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1088 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import LibraryApplicationUtils from "LibraryApplicationUtils" /* 6914 */;
import EntitlementRecord from "EntitlementRecord" /* 6910 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 6912 */;
import SKUStore from "SKUStore" /* 5702 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_11, closure_9, set2;

let metroImportDefault;
let metroRequire;
function addEntitlement(entitlement) {
  closure_9[entitlement.id] = EntitlementRecord.createFromServer(entitlement);
  if (null == closure_11[entitlement.sku_id]) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    const sku_id = entitlement.sku_id;
    closure_11[sku_id] = new Set();
    set = new Set();
  }
  if (null == closure_12[entitlement.application_id]) {
    const _Set2 = Set;
    const self3 = this;
    const self4 = this;
    const application_id = entitlement.application_id;
    closure_12[application_id] = new Set();
    set1 = new Set();
  }
  if (null != entitlement.subscription_id) {
    if (null == closure_18[entitlement.subscription_id]) {
      const _Set3 = Set;
      const self5 = this;
      const self6 = this;
      const subscription_id = entitlement.subscription_id;
      closure_18[subscription_id] = new Set();
      set2 = new Set();
    }
    const obj = closure_18[entitlement.subscription_id];
    obj.add(entitlement.id);
  }
  const obj2 = closure_12[entitlement.application_id];
  obj2.add(entitlement.id);
  const obj3 = closure_11[entitlement.sku_id];
  obj3.add(entitlement.id);
}
function addGiftEntitlement(id) {
  closure_10[id.id] = EntitlementRecord.createFromServer(id);
}
function handlePurchaseSuccess(arg0) {
  const tmp = arg0.entitlements[Symbol.iterator]();
  while (tmp !== undefined) {
    let tmp4 = addEntitlement(tmp2);
    continue;
  }
}
function handleEntitlementUpdate(entitlement) {
  addEntitlement(entitlement.entitlement);
}
({ EntitlementSourceTypes: metroRequire, EntitlementTypes: metroImportDefault } = Constants);
let closure_8 = PremiumConstants.PREMIUM_SUBSCRIPTION_APPLICATION;
const React4 = {};
let closure_10 = {};
const unpackModuleId = {};
let closure_12 = {};
let c13 = false;
let c14 = false;
let c15 = false;
let set = new Set();
let set1 = new Set();
const authStore4 = {};
const Store = get_initializedAll.Store;
class EntitlementStore extends Store {
  initialize() {
    const items = [LibraryApplicationStore];
    this.syncWith(items, () => true);
  }
  get(arg0) {
    return closure_9[arg0];
  }
  getGiftable() {
    const obj = _modDef12;
    return obj.values(closure_10);
  }
  getForApplication(arg0) {
    if (null == closure_12[arg0]) {
      return null;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      for (const item10014 of tmp) {
        let addResult = set.add(closure_9[item10014]);
        continue;
      }
      return set;
    }
  }
  getForSku(SINGLE_ORB_SKU_ID) {
    if (null == closure_11[SINGLE_ORB_SKU_ID]) {
      return null;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      for (const item10014 of tmp) {
        let addResult = set.add(closure_9[item10014]);
        continue;
      }
      return set;
    }
  }
  isFetchingForApplication(arg0) {
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
  }
  isFetchedForApplication(arg0) {
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
  }
  getForSubscription(arg0) {
    if (null == closure_18[arg0]) {
      return null;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      for (const item10014 of tmp) {
        let addResult = set.add(closure_9[item10014]);
        continue;
      }
      return set;
    }
  }
  isEntitledToSku(arg0, arg1, id) {
    let tmp = item;
    if (item === undefined) {
      tmp = null;
    }
    if (null != closure_11[arg1]) {
      for (const item10011 of tmp2) {
        let tmp6 = closure_9[item10011];
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
    if (set1.has(id)) {
      return false;
    } else {
      let libraryApplication;
      if (null != tmp) {
        libraryApplication = LibraryApplicationStore.getLibraryApplication(id, tmp);
      } else {
        libraryApplication = LibraryApplicationStore.getActiveLibraryApplication(id);
      }
      let tmp13 = null == libraryApplication || libraryApplication.sku.id !== arg1;
      if (!tmp13) {
        const obj3 = LibraryApplicationUtils;
        tmp13 = !obj3.isUserEntitledToLibraryApplication(libraryApplication);
      }
      let tmp16 = !tmp13;
      if (tmp13) {
        tmp16 = null;
      }
      return tmp16;
    }
  }
  hasFetchedForApplicationIds(items) {
    return items.every((item) => set.has(item));
  }
  getFractionalPremium(arg0) {
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
    const forApplication = this.getForApplication(closure_8);
    if (forApplication != null) {
      const item = forApplication.forEach((endsAt) => {
        let tmp = null != endsAt.endsAt && endsAt.endsAt < date;
        let tmp4 = endsAt.type !== metroImportDefault.FRACTIONAL_REDEMPTION;
        const tmp3 = endsAt.sourceType === metroRequire.REVERSE_TRIAL && flag2;
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
  }
  isFractionalPremiumActive(arg0) {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let excludeReverseTrial = obj.excludeReverseTrial;
    if (excludeReverseTrial === undefined) {
      excludeReverseTrial = false;
    }
    return this.getFractionalPremium({ includeEnded: false, excludeReverseTrial }).length > 0;
  }
  getUnactivatedFractionalPremiumUnits() {
    const items = [];
    const forApplication = this.getForApplication(closure_8);
    if (forApplication != null) {
      const item = forApplication.forEach((skuId) => {
        const ACTIVE_FRACTIONAL_PREMIUM_SKUS = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ACTIVE_FRACTIONAL_PREMIUM_SKUS;
        const tmp = ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(skuId.skuId) && !skuId.consumed;
        if (tmp) {
          items.push(skuId);
        }
      });
    }
    return items;
  }
}
const prototype = EntitlementStore.prototype;
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
EntitlementStore.displayName = "EntitlementStore";
let obj = {
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
        let tmp7 = addEntitlement(tmp4);
      }
      continue;
    }
  },
  ENTITLEMENT_FETCH_APPLICATION_FAIL: function handleEntitlementApplicationFail() {

  },
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function handleEntitlementsGiftableFetchSuccess(entitlements) {
    entitlements = entitlements.entitlements;
    closure_10 = {};
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
    delete closure_9[entitlement.id];
    if (null != closure_12[entitlement.application_id]) {
      closure_12[entitlement.application_id].delete(entitlement.id);
    }
    if (null != closure_11[entitlement.sku_id]) {
      closure_11[entitlement.sku_id].delete(entitlement.id);
    }
    if (null != entitlement.subscription_id) {
      if (null != closure_18[entitlement.subscription_id]) {
        closure_18[entitlement.subscription_id].delete(entitlement.id);
      }
    }
  },
  LOGOUT: function handleLogout() {
    closure_9 = {};
    closure_11 = {};
    closure_12 = {};
    c13 = false;
    c14 = false;
    c15 = false;
    set = new Set();
    set1 = new Set();
  },
  ENTITLEMENTS_FETCH_FOR_USER_START: function handleUserEntitlementsStart() {
    c13 = true;
  },
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function handleUserEntitlementsSuccess(excludeEnded) {
    c14 = true;
    c13 = false;
    c15 = !excludeEnded.excludeEnded;
    const tmp = excludeEnded.entitlements[Symbol.iterator]();
    while (tmp !== undefined) {
      let tmp4 = addEntitlement(tmp2);
      continue;
    }
  },
  ENTITLEMENTS_FETCH_FOR_USER_FAIL: function handleUserEntitlementsFail() {
    c14 = false;
    c13 = false;
    c15 = false;
  }
};
const entitlementStore = new EntitlementStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/game_store/EntitlementStore.tsx");

export default entitlementStore;