// === Module 7342: SocialLayerStorefrontStore ===

// Module 7342 (SocialLayerStorefrontStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import LocaleStore from "LocaleStore" /* 2026 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

function handleUserSettingsStoreUpdate() {
  if (locale === LocaleStore.locale) {
    return false;
  } else {
    locale = tmp.locale;
  }
}
let obj = {};
obj = {};
obj = {};
obj = {};
obj = {};
obj = {};
obj = {};
const dependencyMap = {};
new Set();
obj = { state: "idle" };
let set1 = new Set();
let set = set1;
let dependencyMap2 = {};
let dependencyMap3 = {};
let closure_19 = {};
let closure_20 = {};
set1 = new Set();
let c22 = null;
const Store = initializeDefault.Store;
class SocialLayerStorefrontStore extends Store {
}
const prototype = SocialLayerStorefrontStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, LocaleStore);
  const items = [LocaleStore];
  this.syncWith(items, handleUserSettingsStoreUpdate);
  locale = LocaleStore.locale;
};
prototype["getStorefrontData"] = function getStorefrontData(arg0) {
  return obj11[arg0];
};
prototype["getStorefrontDataForApplicationId"] = function getStorefrontDataForApplicationId(arg0) {
  return obj12[arg0];
};
prototype["getLoadedStorefrontApplicationIds"] = function getLoadedStorefrontApplicationIds() {
  return Object.keys(obj12);
};
prototype["getStorefrontFetchState"] = function getStorefrontFetchState(type) {
  if ("guild" === type.type) {
    let guildId = type.guildId;
  } else {
    guildId = dependencyMap3[type.applicationId];
  }
  if ("guild" === type.type) {
    let applicationId = dependencyMap2[type.guildId];
  } else {
    applicationId = type.applicationId;
  }
  if (null != guildId) {
    let tmp3 = obj11[guildId];
  } else if (null != applicationId) {
    tmp3 = obj12[applicationId];
  }
  return tmp3;
};
prototype["getSkuAssets"] = function getSkuAssets() {
  return obj3;
};
prototype["getStorefrontMetadata"] = function getStorefrontMetadata(arg0) {
  return obj[arg0];
};
prototype["getStorefrontEntries"] = function getStorefrontEntries(applicationId) {
  return obj[applicationId];
};
prototype["getStorefrontById"] = function getStorefrontById(storefrontId) {
  return obj[storefrontId];
};
prototype["getPreviewStorefrontId"] = function getPreviewStorefrontId(arg0) {
  let tmp = obj[arg0];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["getStorefrontState"] = function getStorefrontState(arg0) {
  if (null != arg0) {
    return obj[arg0];
  }
};
prototype["getAnnouncement"] = function getAnnouncement(arg0) {
  return obj[arg0];
};
prototype["getConfig"] = function getConfig() {
  let config = null;
  if ("success" === obj.state) {
    config = obj.config;
  }
  return config;
};
prototype["getConfigForApplicationId"] = function getConfigForApplicationId(id) {
  return closure_20[id];
};
prototype["getApplicationIdFromDetectableId"] = function getApplicationIdFromDetectableId(application_id) {
  return closure_19[application_id];
};
prototype["getDetectableIdsToApplicationIds"] = function getDetectableIdsToApplicationIds() {
  return closure_19;
};
prototype["getGuildIdFromApplicationId"] = function getGuildIdFromApplicationId(applicationId) {
  let tmp;
  if (null != applicationId) {
    tmp = dependencyMap3[applicationId];
  }
  return tmp;
};
prototype["getApplicationIdFromGuildId"] = function getApplicationIdFromGuildId(id) {
  if (null != id) {
    let tmp2 = dependencyMap2[id];
    if (tmp2 == null) {
      let applicationId;
      if (obj11[id] != null) {
        const storefront = tmp4.storefront;
        if (storefront != null) {
          applicationId = storefront.applicationId;
        }
      }
      tmp2 = applicationId;
    }
    return tmp2;
  }
};
prototype["getConfigFetchState"] = function getConfigFetchState() {
  return obj;
};
prototype["getStorefrontApplicationIds"] = function getStorefrontApplicationIds() {
  return set;
};
prototype["hasStorefrontForApplicationId"] = function hasStorefrontForApplicationId(applicationIdFromGuildId) {
  let hasItem = null != applicationIdFromGuildId;
  if (hasItem) {
    hasItem = set.has(applicationIdFromGuildId);
  }
  return hasItem;
};
prototype["getStorefrontGuildIds"] = function getStorefrontGuildIds() {
  return set1;
};
prototype["getSKUEligibility"] = function getSKUEligibility(skuId) {
  let state;
  if (obj[skuId] != null) {
    state = tmp.state;
  }
  return state;
};
prototype["getSKUEligibilityEntry"] = function getSKUEligibilityEntry(arg0) {
  return obj[arg0];
};
prototype["getNormalizedSKUEligibility"] = function getNormalizedSKUEligibility(arg0) {
  let state;
  if (obj[arg0] != null) {
    state = tmp.state;
  }
  return "ineligible" !== state;
};
prototype["getAnnouncementModalContentConfig"] = function getAnnouncementModalContentConfig() {
  return c22;
};
SocialLayerStorefrontStore.displayName = "SocialLayerStorefrontStore";
obj = {
  LOGOUT: function handleLogout() {
    closure_13 = {};
    new Set();
    set1 = new Set();
    set = set1;
    closure_17 = {};
    closure_18 = {};
    closure_19 = {};
    closure_20 = {};
    set1 = new Set();
    c22 = null;
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: function handleStorefrontPromotionIdOverrideSet() {

  },
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    closure_13 = {};
    set = new Set();
  },
  ENTITLEMENT_CREATE: function handleEntitlementCreate(entitlement) {
    entitlement = entitlement.entitlement;
    if (null == obj[entitlement.sku_id]) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      const sku_id = entitlement.sku_id;
      delete tmp2[tmp];
    }
  },
  INTERACTION_FAILURE: function handleInteractionFailure(interactionId) {
    interactionId = interactionId.interactionId;
    if (null == interactionId) {
      return false;
    } else if (null == dependencyMap[interactionId]) {
      const _Object = Object;
      const values = Object.values(obj);
      if (values.some((state) => "checking" === state.state)) {
        if (set.size >= 25) {
          set.delete(set.values().next().value);
          const iter = set.values();
        }
        set.add(interactionId);
      }
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      obj[tmp16] = { state: "error", reason: "interaction_failure" };
      delete tmp[tmp2];
    }
  },
  INTERACTION_SUCCESS: function handleInteractionSuccess(arg0) {
    if (null == dependencyMap[arg0.interactionId]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  },
  SOCIAL_LAYER_STOREFRONT_LOAD: function handleSocialLayerStorefrontLoad(guildOrApplicationId) {
    guildOrApplicationId = guildOrApplicationId.guildOrApplicationId;
    if ("guild" === guildOrApplicationId.type) {
      let guildId = guildOrApplicationId.guildId;
    } else {
      guildId = dependencyMap3[guildOrApplicationId.applicationId];
    }
    if ("guild" === guildOrApplicationId.type) {
      let applicationId = dependencyMap2[guildOrApplicationId.guildId];
    } else {
      applicationId = guildOrApplicationId.applicationId;
    }
    obj = { state: "loading" };
    if (null != guildId) {
      const obj2 = {};
      const merged = Object.assign(obj11[guildId]);
      const merged1 = Object.assign(obj);
      obj11[guildId] = obj2;
    }
    if (null != applicationId) {
      obj3 = {};
      const merged2 = Object.assign(obj12[applicationId]);
      const merged3 = Object.assign(obj);
      obj12[applicationId] = obj3;
    }
    const merged4 = Object.assign(obj11);
    obj11 = {};
    const merged5 = Object.assign(obj12);
    obj12 = {};
    const obj4 = {};
    const obj5 = {};
  },
  SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function handleSocialLayerStorefrontLoadSuccess(arg0) {
    ({ guildOrApplicationId, storefront } = arg0);
    if ("guild" === guildOrApplicationId.type) {
      let guildId2 = guildOrApplicationId.guildId;
    } else {
      if ("guild" === guildOrApplicationId.type) {
        let guildId = guildOrApplicationId.guildId;
      } else {
        guildId = dependencyMap3[guildOrApplicationId.applicationId];
      }
      if ("guild" === guildOrApplicationId.type) {
        guildId2 = guildId;
      } else {
        const applicationId = guildOrApplicationId.applicationId;
        guildId2 = guildId;
      }
    }
    let tmp4 = null != guildId2;
    if (tmp4) {
      tmp4 = null == dependencyMap2[guildId2];
    }
    if (tmp4) {
      dependencyMap2[guildId2] = storefront.applicationId;
      obj = {};
      const merged = Object.assign(dependencyMap2);
      dependencyMap2 = obj;
    }
    let tmp10 = null != storefront.applicationId && null != guildId2;
    if (tmp10) {
      tmp10 = null == dependencyMap3[storefront.applicationId];
    }
    if (tmp10) {
      dependencyMap3[storefront.applicationId] = guildId2;
      const obj2 = {};
      const merged1 = Object.assign(dependencyMap3);
      dependencyMap3 = obj2;
    }
    const applicationId2 = storefront.applicationId;
    obj3 = { state: "fetched", fetchedAt: Date.now(), storefront };
    if (null != guildId2) {
      const obj4 = {};
      const merged2 = Object.assign(obj11[guildId2]);
      const merged3 = Object.assign(obj3);
      obj11[guildId2] = obj4;
    }
    if (null != applicationId2) {
      const obj5 = {};
      const merged4 = Object.assign(obj12[applicationId2]);
      const merged5 = Object.assign(obj3);
      obj12[applicationId2] = obj5;
    }
    const merged6 = Object.assign(obj11);
    obj11 = {};
    const merged7 = Object.assign(obj12);
    obj12 = {};
    if (null != storefront.assets) {
      const obj8 = {};
      const merged8 = Object.assign(obj3);
      const merged9 = Object.assign(storefront.assets);
      obj3 = obj8;
    }
  },
  SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: function handleSocialLayerStorefrontPartialLoadSuccess(assets) {
    const merged = Object.assign(obj3);
    const merged1 = Object.assign(assets.assets);
  },
  SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS: function handleSocialLayerStorefrontMetadataLoadSuccess(arg0) {
    obj = {};
    ({ applicationId, storefrontMetadata } = arg0);
    const merged = Object.assign(obj);
    obj[applicationId] = storefrontMetadata;
  },
  SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function handleSocialLayerStorefrontLoadFailure(guildOrApplicationId) {
    guildOrApplicationId = guildOrApplicationId.guildOrApplicationId;
    if ("guild" === guildOrApplicationId.type) {
      let guildId = guildOrApplicationId.guildId;
    } else {
      guildId = dependencyMap3[guildOrApplicationId.applicationId];
    }
    if ("guild" === guildOrApplicationId.type) {
      let applicationId = dependencyMap2[guildOrApplicationId.guildId];
    } else {
      applicationId = guildOrApplicationId.applicationId;
    }
    if (null != guildId) {
      let tmp6 = obj11[guildId];
    } else if (null != applicationId) {
      tmp6 = obj12[applicationId];
    }
    if (null == tmp6) {
      return false;
    } else if (guildOrApplicationId.eager) {
      if ("loading" === tmp6.state) {
        if (null != tmp6.storefront) {
          const obj2 = { state: "fetched" };
          if (null != guildId) {
            obj3 = {};
            const merged = Object.assign(obj11[guildId]);
            const merged1 = Object.assign(obj2);
            obj11[guildId] = obj3;
          }
          if (null != applicationId) {
            const obj4 = {};
            const merged2 = Object.assign(obj12[applicationId]);
            const merged3 = Object.assign(obj2);
            obj12[applicationId] = obj4;
          }
          const obj5 = {};
          const merged4 = Object.assign(obj11);
          obj11 = obj5;
          const obj6 = {};
          const merged5 = Object.assign(obj12);
          obj12 = obj6;
        }
      }
      if (null != guildId) {
        delete tmp[tmp3];
      }
      if (null != applicationId) {
        delete tmp[tmp2];
      }
      const obj7 = {};
      const merged6 = Object.assign(obj11);
      obj11 = obj7;
      const obj8 = {};
      const merged7 = Object.assign(obj12);
      obj12 = obj8;
    } else {
      obj = { state: "error", fetchedAt: null, storefront: "r" };
      const _Date = Date;
      obj.fetchedAt = Date.now();
      if (null != guildId) {
        const obj9 = {};
        const merged8 = Object.assign(obj11[guildId]);
        const merged9 = Object.assign(obj);
        obj11[guildId] = obj9;
      }
      if (null != applicationId) {
        const obj10 = {};
        const merged10 = Object.assign(obj12[applicationId]);
        const merged11 = Object.assign(obj);
        obj12[applicationId] = obj10;
      }
      obj11 = {};
      const merged12 = Object.assign(obj11);
      obj12 = {};
      const merged13 = Object.assign(obj12);
    }
  },
  SET_SOCIAL_LAYER_STOREFRONT_STATE: function handleSetSocialLayerStorefrontState(activePage) {
    obj[activePage.applicationId] = { activePage: activePage.pageIndex, activeSkuId: activePage.skuId };
    obj = {};
    const merged = Object.assign(obj);
  },
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: function handleSocialLayerStorefrontAnnouncementFetchStart(guildId) {
    obj = {};
    const merged = Object.assign(obj);
    obj[guildId.guildId] = { state: "loading" };
  },
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: function handleSocialLayerStorefrontAnnouncementFetchSuccess(arg0) {
    obj = {};
    ({ guildId, announcement } = arg0);
    const merged = Object.assign(obj);
    obj[guildId] = { state: "success", announcement };
  },
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: function handleSocialLayerStorefrontAnnouncementFetchFailure(guildId) {
    obj = {};
    const merged = Object.assign(obj);
    obj[guildId.guildId] = { state: "error" };
  },
  SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: function handleStorefrontConfigFetchStart() {

  },
  SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: function handleStorefrontConfigFetchSuccess(config) {
    config = config.config;
    obj = { state: "success", config, fetchedAt: Date.now() };
    const storefronts = config.storefronts;
    set = new Set(storefronts.map((applicationId) => applicationId.applicationId));
    const storefronts1 = config.storefronts;
    const found = storefronts1.filter((guildId) => null != guildId.guildId);
    set1 = new Set(found.map((guildId) => guildId.guildId));
    const storefronts2 = config.storefronts;
    closure_17 = storefronts2.reduce((acc, guildId) => {
      if (null != guildId.guildId) {
        acc[guildId.guildId] = guildId.applicationId;
      }
      return acc;
    }, {});
    const storefronts3 = config.storefronts;
    closure_18 = storefronts3.reduce((acc, guildId) => {
      if (null != guildId.guildId) {
        ({ guildId: acc[guildId.applicationId], guildId: acc[guildId.gameId] } = guildId);
      }
      return acc;
    }, {});
    const storefronts4 = config.storefronts;
    closure_19 = storefronts4.reduce((acc, item) => {
      ({ applicationId: acc[item.gameId], applicationId: acc[item.applicationId] } = item);
      return acc;
    }, {});
    const storefronts5 = config.storefronts;
    closure_20 = storefronts5.reduce((acc, applicationId) => {
      acc[applicationId.applicationId] = applicationId;
      return acc;
    }, {});
  },
  SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: function handleStorefrontConfigFetchFailure() {
    obj = { state: "error", fetchedAt: Date.now() };
  },
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: function handleSKUPurchaseEligibilityCheckStart(skuId) {
    obj = {};
    const merged = Object.assign(obj);
    obj[skuId.skuId] = { state: "checking" };
  },
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: function handleSKUPurchaseEligibilityCheckCreate(arg0) {
    ({ skuId, interactionId } = arg0);
    let state;
    if (obj[skuId] != null) {
      state = tmp.state;
    }
    if ("checking" !== state) {
      return tmp3;
    } else if (set.has(interactionId)) {
      set.delete(interactionId);
      obj = {};
      const merged = Object.assign(obj);
      obj[skuId] = { state: "error", reason: "interaction_failure" };
    } else {
      closure_13[interactionId] = skuId;
    }
  },
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: function handleSKUPurchaseEligibilityCheckFailure(httpStatus) {
    ({ skuId, reason } = httpStatus);
    if (reason === undefined) {
      reason = "http_error";
    }
    let state;
    if (obj[skuId] != null) {
      state = tmp.state;
    }
    if ("checking" !== state) {
      if ("interaction_deadline" === reason) {
        return false;
      }
    }
    obj = {};
    const merged = Object.assign(obj);
    obj[skuId] = { state: "error", reason, httpStatus: httpStatus.httpStatus };
  },
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: function handleSKUPurchaseEligibilityResponse(arg0) {
    ({ skuId, recipientId, eligible, ineligibleReason } = arg0);
    if (AuthenticationStore.getId() !== recipientId) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      if (eligible) {
        let obj2 = { state: "eligible" };
      } else {
        obj2 = { state: "ineligible", ineligibleReason };
      }
      obj[skuId] = obj2;
    }
  },
  SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD: function handleSocialLayerStorefrontEntriesLoad(applicationId) {
    obj = {};
    const merged = Object.assign(obj);
    obj[applicationId.applicationId] = { state: "loading" };
  },
  SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_SUCCESS: function handleSocialLayerStorefrontEntriesLoadSuccess(arg0) {
    obj = {};
    ({ applicationId, entries } = arg0);
    const merged = Object.assign(obj);
    obj[applicationId] = { state: "fetched", entries, fetchedAt: Date.now() };
  },
  SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_FAILURE: function handleSocialLayerStorefrontEntriesLoadFailure(applicationId) {
    obj = {};
    const merged = Object.assign(obj);
    obj[applicationId.applicationId] = { state: "error", fetchedAt: Date.now() };
  },
  SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD: function handleSocialLayerStorefrontByIdLoad(storefrontId) {
    storefrontId = storefrontId.storefrontId;
    obj = {};
    const merged = Object.assign(obj);
    const obj2 = {};
    const merged1 = Object.assign(obj[storefrontId]);
    obj2.storefront = null;
    obj2.state = "loading";
    obj2.fetchedAt = null;
    obj[storefrontId] = obj2;
  },
  SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_SUCCESS: function handleSocialLayerStorefrontByIdLoadSuccess(storefront) {
    storefront = storefront.storefront;
    obj = {};
    const merged = Object.assign(obj);
    obj[storefront.storefrontId] = { storefront, state: "fetched", fetchedAt: Date.now() };
    if (null != storefront.assets) {
      obj3 = {};
      const merged1 = Object.assign(obj3);
      const merged2 = Object.assign(storefront.assets);
    }
  },
  SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_FAILURE: function handleSocialLayerStorefrontByIdLoadFailure(storefrontId) {
    obj = {};
    const merged = Object.assign(obj);
    obj[storefrontId.storefrontId] = { storefront: null, state: "error", fetchedAt: Date.now() };
  },
  SOCIAL_LAYER_STOREFRONT_SET_PREVIEW: function handleSocialLayerStorefrontSetPreview(storefrontId) {
    storefrontId = storefrontId.storefrontId;
    obj = {};
    const merged = Object.assign(obj);
    if (null == storefrontId) {
      delete tmp[tmp2];
    } else {
      obj[storefrontId.applicationId] = storefrontId;
    }
  },
  SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_SUCCESS: function handleLaunchAnnouncementFetchSuccess(config) {
    config = config.config;
  },
  SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_FAILURE: function handleLaunchAnnouncementFetchFailure() {
    c22 = null;
  }
};
const socialLayerStorefrontStore = new SocialLayerStorefrontStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/SocialLayerStorefrontStore.tsx");

export default socialLayerStorefrontStore;