// === Module 6075: handleUserSettingsStoreUpdate ===

// Module 6075 (handleUserSettingsStoreUpdate)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_1 from "_getSystemLocale" /* 1996 */;
import closure_2 from "fetchFingerprint" /* 1218 */;
import set from "set" /* 2 */;

function handleUserSettingsStoreUpdate() {
  if (locale === closure_1.locale) {
    return false;
  } else {
    locale = tmp.locale;
    closure_3 = {};
    closure_4 = {};
    closure_5 = {};
    closure_6 = {};
    closure_7 = {};
    closure_8 = {};
    closure_9 = {};
    closure_10 = {};
  }
}
let closure_3 = {};
let closure_4 = {};
let closure_5 = {};
let closure_6 = {};
let closure_7 = {};
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
let set = new Set();
let closure_15 = { state: "idle" };
let set1 = new Set();
let closure_17 = {};
let closure_18 = {};
let closure_19 = {};
let closure_20 = {};
let set2 = new Set();
let c22 = null;
const Store = initializeDefault.Store;
class SocialLayerStorefrontStore extends Store {
}
const prototype = SocialLayerStorefrontStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2, closure_1);
  const items = [closure_1];
  this.syncWith(items, handleUserSettingsStoreUpdate);
  const locale = closure_1.locale;
};
prototype["getStorefrontData"] = function getStorefrontData(arg0) {
  return dependencyMap[arg0];
};
prototype["getStorefrontDataForApplicationId"] = function getStorefrontDataForApplicationId(arg0) {
  return dependencyMap2[arg0];
};
prototype["getLoadedStorefrontApplicationIds"] = function getLoadedStorefrontApplicationIds() {
  return Object.keys(closure_5);
};
prototype["getStorefrontFetchState"] = function getStorefrontFetchState(closure_0) {
  if ("guild" === closure_0.type) {
    let guildId = closure_0.guildId;
  } else {
    guildId = dependencyMap6[closure_0.applicationId];
  }
  if ("guild" === closure_0.type) {
    let applicationId = dependencyMap5[closure_0.guildId];
  } else {
    applicationId = closure_0.applicationId;
  }
  if (null != guildId) {
    let tmp3 = dependencyMap[guildId];
  } else if (null != applicationId) {
    tmp3 = dependencyMap2[applicationId];
  }
  return tmp3;
};
prototype["getSkuAssets"] = function getSkuAssets() {
  return closure_9;
};
prototype["getStorefrontMetadata"] = function getStorefrontMetadata(arg0) {
  return table5[arg0];
};
prototype["getStorefrontEntries"] = function getStorefrontEntries(closure_0) {
  return table2[closure_0];
};
prototype["getStorefrontById"] = function getStorefrontById(closure_1) {
  return table3[closure_1];
};
prototype["getPreviewStorefrontId"] = function getPreviewStorefrontId(closure_0) {
  let tmp = table4[closure_0];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["getStorefrontState"] = function getStorefrontState(arg0) {
  if (null != arg0) {
    return table[arg0];
  }
};
prototype["getAnnouncement"] = function getAnnouncement(arg0) {
  return table6[arg0];
};
prototype["getConfig"] = function getConfig() {
  let config = null;
  if ("success" === closure_15.state) {
    config = closure_15.config;
  }
  return config;
};
prototype["getConfigForApplicationId"] = function getConfigForApplicationId(id) {
  return table8[id];
};
prototype["getApplicationIdFromDetectableId"] = function getApplicationIdFromDetectableId(application_id) {
  return table7[application_id];
};
prototype["getDetectableIdsToApplicationIds"] = function getDetectableIdsToApplicationIds() {
  return closure_19;
};
prototype["getGuildIdFromApplicationId"] = function getGuildIdFromApplicationId(closure_0) {
  let tmp;
  if (null != closure_0) {
    tmp = dependencyMap6[closure_0];
  }
  return tmp;
};
prototype["getApplicationIdFromGuildId"] = function getApplicationIdFromGuildId(id) {
  let tmp;
  if (null != id) {
    tmp = dependencyMap5[id];
  }
  return tmp;
};
prototype["getConfigFetchState"] = function getConfigFetchState() {
  return closure_15;
};
prototype["getStorefrontApplicationIds"] = function getStorefrontApplicationIds() {
  return set1;
};
prototype["getStorefrontGuildIds"] = function getStorefrontGuildIds() {
  return set2;
};
prototype["getSKUEligibility"] = function getSKUEligibility(closure_0) {
  let state;
  if (dependencyMap3[closure_0] != null) {
    state = tmp.state;
  }
  return state;
};
prototype["getSKUEligibilityEntry"] = function getSKUEligibilityEntry(arg0) {
  return dependencyMap3[arg0];
};
prototype["getNormalizedSKUEligibility"] = function getNormalizedSKUEligibility(arg0) {
  let state;
  if (dependencyMap3[arg0] != null) {
    state = tmp.state;
  }
  return "ineligible" !== state;
};
prototype["getAnnouncementModalContentConfig"] = function getAnnouncementModalContentConfig() {
  return c22;
};
SocialLayerStorefrontStore.displayName = "SocialLayerStorefrontStore";
const socialLayerStorefrontStore = new SocialLayerStorefrontStore(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    closure_9 = {};
    closure_10 = {};
    closure_12 = {};
    closure_13 = {};
    closure_5 = {};
    closure_4 = {};
    closure_6 = {};
    closure_7 = {};
    closure_8 = {};
    set = new Set();
    closure_15 = { state: "idle" };
    set1 = new Set();
    closure_17 = {};
    closure_18 = {};
    closure_19 = {};
    closure_20 = {};
    set2 = new Set();
    c22 = null;
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: function handleStorefrontPromotionIdOverrideSet() {
    closure_5 = {};
    closure_4 = {};
  },
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    closure_12 = {};
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
    } else if (null == dependencyMap4[interactionId]) {
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
    if (null == dependencyMap4[arg0.interactionId]) {
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
      guildId = dependencyMap6[guildOrApplicationId.applicationId];
    }
    if ("guild" === guildOrApplicationId.type) {
      let applicationId = dependencyMap5[guildOrApplicationId.guildId];
    } else {
      applicationId = guildOrApplicationId.applicationId;
    }
    let obj = { state: "loading" };
    if (null != guildId) {
      obj = {};
      const merged = Object.assign(obj1[guildId]);
      const merged1 = Object.assign(obj);
      obj1[guildId] = obj;
    }
    if (null != applicationId) {
      obj = {};
      const merged2 = Object.assign(obj2[applicationId]);
      const merged3 = Object.assign(obj);
      obj2[applicationId] = obj;
    }
    obj1 = {};
    const merged4 = Object.assign(obj1);
    obj2 = {};
    const merged5 = Object.assign(obj2);
  },
  SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function handleSocialLayerStorefrontLoadSuccess(arg0) {
    ({ guildOrApplicationId, storefront } = arg0);
    if ("guild" === guildOrApplicationId.type) {
      let guildId2 = guildOrApplicationId.guildId;
    } else {
      if ("guild" === guildOrApplicationId.type) {
        let guildId = guildOrApplicationId.guildId;
      } else {
        guildId = obj[guildOrApplicationId.applicationId];
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
      tmp4 = null == obj[guildId2];
    }
    if (tmp4) {
      obj[guildId2] = storefront.applicationId;
      obj = {};
      const merged = Object.assign(obj);
    }
    let tmp10 = null != storefront.applicationId && null != guildId2;
    if (tmp10) {
      tmp10 = null == obj[storefront.applicationId];
    }
    if (tmp10) {
      obj[storefront.applicationId] = guildId2;
      obj = {};
      const merged1 = Object.assign(obj);
    }
    const applicationId2 = storefront.applicationId;
    obj = { state: "fetched", fetchedAt: Date.now(), storefront };
    if (null != guildId2) {
      obj1 = {};
      const merged2 = Object.assign(obj3[guildId2]);
      const merged3 = Object.assign(obj);
      obj3[guildId2] = obj1;
    }
    if (null != applicationId2) {
      const obj2 = {};
      const merged4 = Object.assign(obj4[applicationId2]);
      const merged5 = Object.assign(obj);
      obj4[applicationId2] = obj2;
    }
    obj3 = {};
    const merged6 = Object.assign(obj3);
    obj4 = {};
    const merged7 = Object.assign(obj4);
    if (null != storefront.assets) {
      const obj5 = {};
      const merged8 = Object.assign(obj5);
      const merged9 = Object.assign(storefront.assets);
    }
  },
  SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: function handleSocialLayerStorefrontPartialLoadSuccess(assets) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(assets.assets);
  },
  SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS: function handleSocialLayerStorefrontMetadataLoadSuccess(arg0) {
    const obj = {};
    ({ applicationId, storefrontMetadata } = arg0);
    const merged = Object.assign(obj);
    obj[applicationId] = storefrontMetadata;
  },
  SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function handleSocialLayerStorefrontLoadFailure(guildOrApplicationId) {
    guildOrApplicationId = guildOrApplicationId.guildOrApplicationId;
    if ("guild" === guildOrApplicationId.type) {
      let guildId = guildOrApplicationId.guildId;
    } else {
      guildId = dependencyMap6[guildOrApplicationId.applicationId];
    }
    if ("guild" === guildOrApplicationId.type) {
      let applicationId = dependencyMap5[guildOrApplicationId.guildId];
    } else {
      applicationId = guildOrApplicationId.applicationId;
    }
    if (null != guildId) {
      let tmp6 = obj8[guildId];
    } else if (null != applicationId) {
      tmp6 = obj9[applicationId];
    }
    if (null == tmp6) {
      return false;
    } else if (guildOrApplicationId.eager) {
      if ("loading" === tmp6.state) {
        if (null != tmp6.storefront) {
          let obj = { state: "fetched" };
          if (null != guildId) {
            obj = {};
            const merged = Object.assign(obj8[guildId]);
            const merged1 = Object.assign(obj);
            obj8[guildId] = obj;
          }
          if (null != applicationId) {
            obj1 = {};
            const merged2 = Object.assign(obj9[applicationId]);
            const merged3 = Object.assign(obj);
            obj9[applicationId] = obj1;
          }
          const obj2 = {};
          const merged4 = Object.assign(obj8);
          obj8 = obj2;
          const obj3 = {};
          const merged5 = Object.assign(obj9);
          obj9 = obj3;
        }
      }
      if (null != guildId) {
        delete tmp[tmp3];
      }
      if (null != applicationId) {
        delete tmp[tmp2];
      }
      const obj4 = {};
      const merged6 = Object.assign(obj8);
      obj8 = obj4;
      const obj5 = {};
      const merged7 = Object.assign(obj9);
      obj9 = obj5;
    } else {
      obj = { state: "error", fetchedAt: null, storefront: "Boolean" };
      const _Date = Date;
      obj[1] = Date.now();
      if (null != guildId) {
        const obj6 = {};
        const merged8 = Object.assign(obj8[guildId]);
        const merged9 = Object.assign(obj);
        obj8[guildId] = obj6;
      }
      if (null != applicationId) {
        const obj7 = {};
        const merged10 = Object.assign(obj9[applicationId]);
        const merged11 = Object.assign(obj);
        obj9[applicationId] = obj7;
      }
      obj8 = {};
      const merged12 = Object.assign(obj8);
      obj9 = {};
      const merged13 = Object.assign(obj9);
    }
  },
  SET_SOCIAL_LAYER_STOREFRONT_STATE: function handleSetSocialLayerStorefrontState(activePage) {
    obj[activePage.applicationId] = { activePage: activePage.pageIndex, activeSkuId: activePage.skuId };
    obj = {};
    const merged = Object.assign(obj);
  },
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: function handleSocialLayerStorefrontAnnouncementFetchStart(guildId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[guildId.guildId] = { state: "loading" };
  },
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: function handleSocialLayerStorefrontAnnouncementFetchSuccess(arg0) {
    const obj = {};
    ({ guildId, announcement } = arg0);
    const merged = Object.assign(obj);
    obj[guildId] = { state: "success", announcement };
  },
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: function handleSocialLayerStorefrontAnnouncementFetchFailure(guildId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[guildId.guildId] = { state: "error" };
  },
  SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: function handleStorefrontConfigFetchStart() {
    closure_15 = { state: "loading" };
  },
  SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: function handleStorefrontConfigFetchSuccess(config) {
    config = config.config;
    const obj = { state: "success", config, fetchedAt: Date.now() };
    const storefronts = config.storefronts;
    set = new Set(storefronts.map((applicationId) => applicationId.applicationId));
    const storefronts1 = config.storefronts;
    const found = storefronts1.filter((guildId) => null != guildId.guildId);
    set1 = new Set(found.map((guildId) => guildId.guildId));
    const storefronts2 = config.storefronts;
    closure_17 = storefronts2.reduce((arg0, guildId) => {
      if (null != guildId.guildId) {
        arg0[guildId.guildId] = guildId.applicationId;
      }
      return arg0;
    }, {});
    const storefronts3 = config.storefronts;
    closure_18 = storefronts3.reduce((arg0, guildId) => {
      if (null != guildId.guildId) {
        ({ guildId: arg0[guildId.applicationId], guildId: arg0[guildId.gameId] } = guildId);
      }
      return arg0;
    }, {});
    const storefronts4 = config.storefronts;
    closure_19 = storefronts4.reduce((arg0, arg1) => {
      ({ applicationId: arg0[arg1.gameId], applicationId: arg0[arg1.applicationId] } = arg1);
      return arg0;
    }, {});
    const storefronts5 = config.storefronts;
    closure_20 = storefronts5.reduce((arg0, applicationId) => {
      arg0[applicationId.applicationId] = applicationId;
      return arg0;
    }, {});
  },
  SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: function handleStorefrontConfigFetchFailure() {
    const obj = { state: "error", fetchedAt: Date.now() };
  },
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: function handleSKUPurchaseEligibilityCheckStart(skuId) {
    const obj = {};
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
    if (id.getId() !== recipientId) {
      return false;
    } else {
      let obj = {};
      const merged = Object.assign(obj);
      if (eligible) {
        obj = { state: "eligible" };
      } else {
        obj = { state: "ineligible", ineligibleReason: null };
        obj[1] = ineligibleReason;
      }
      obj[skuId] = obj;
    }
  },
  SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD: function handleSocialLayerStorefrontEntriesLoad(applicationId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[applicationId.applicationId] = { state: "loading" };
  },
  SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_SUCCESS: function handleSocialLayerStorefrontEntriesLoadSuccess(arg0) {
    let obj = {};
    ({ applicationId, entries } = arg0);
    const merged = Object.assign(obj);
    obj = { state: "fetched", entries, fetchedAt: Date.now() };
    obj[applicationId] = obj;
  },
  SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_FAILURE: function handleSocialLayerStorefrontEntriesLoadFailure(applicationId) {
    let obj = {};
    const merged = Object.assign(obj);
    obj = { state: "error", fetchedAt: Date.now() };
    obj[applicationId.applicationId] = obj;
  },
  SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD: function handleSocialLayerStorefrontByIdLoad(storefrontId) {
    storefrontId = storefrontId.storefrontId;
    let obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(obj[storefrontId]);
    obj.storefront = null;
    obj.state = "loading";
    obj.fetchedAt = null;
    obj[storefrontId] = obj;
  },
  SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_SUCCESS: function handleSocialLayerStorefrontByIdLoadSuccess(storefront) {
    storefront = storefront.storefront;
    let obj = {};
    const merged = Object.assign(obj);
    obj = { storefront, state: "fetched", fetchedAt: Date.now() };
    obj[storefront.storefrontId] = obj;
    if (null != storefront.assets) {
      obj = {};
      const merged1 = Object.assign(obj);
      const merged2 = Object.assign(storefront.assets);
    }
  },
  SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_FAILURE: function handleSocialLayerStorefrontByIdLoadFailure(storefrontId) {
    let obj = {};
    const merged = Object.assign(obj);
    obj = { storefront: null, state: "error", fetchedAt: Date.now() };
    obj[storefrontId.storefrontId] = obj;
  },
  SOCIAL_LAYER_STOREFRONT_SET_PREVIEW: function handleSocialLayerStorefrontSetPreview(storefrontId) {
    storefrontId = storefrontId.storefrontId;
    const obj = {};
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
});
const result = set.fileFinishedImporting("modules/slayer_storefront/SocialLayerStorefrontStore.tsx");

export default socialLayerStorefrontStore;