// discord_app/modules/slayer_storefront/SocialLayerStorefrontStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_18, locale;

function handleUserSettingsStoreUpdate() {
  if (locale === LocaleStore.locale) {
    return false;
  } else {
    locale = tmp.locale;
  }
}
let obj = {};
let obj11 = {};
let obj12 = {};
obj = {};
obj = {};
obj = {};
let obj3 = {};
obj = {};
obj = {};
obj = {};
let closure_13 = {};
new Set();
obj = { state: "idle" };
let set1 = new Set();
let set = set1;
let closure_17 = {};
const authStore4 = {};
let closure_19 = {};
let closure_20 = {};
const set2 = new Set();
set1 = set2;
let c22 = null;
const Store = get_initializedDefault.Store;
class SocialLayerStorefrontStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, LocaleStore);
    const items = [LocaleStore];
    this.syncWith(items, handleUserSettingsStoreUpdate);
    locale = LocaleStore.locale;
  }
  getStorefrontData(arg0) {
    return obj11[arg0];
  }
  getStorefrontDataForApplicationId(arg0) {
    return obj12[arg0];
  }
  getLoadedStorefrontApplicationIds() {
    return Object.keys(obj12);
  }
  getStorefrontFetchState(type) {
    let applicationId;
    let guildId;
    let tmp3;
    if ("guild" === type.type) {
      guildId = type.guildId;
    } else {
      guildId = closure_18[type.applicationId];
    }
    if ("guild" === type.type) {
      applicationId = closure_17[type.guildId];
    } else {
      applicationId = type.applicationId;
    }
    if (null != guildId) {
      tmp3 = obj11[guildId];
    } else if (null != applicationId) {
      tmp3 = obj12[applicationId];
    }
    return tmp3;
  }
  getSkuAssets() {
    return obj3;
  }
  getStorefrontMetadata(arg0) {
    return obj[arg0];
  }
  getStorefrontEntries(applicationId) {
    return obj[applicationId];
  }
  getStorefrontById(storefrontId) {
    return obj[storefrontId];
  }
  getPreviewStorefrontId(arg0) {
    let tmp = obj[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
  getStorefrontState(arg0) {
    if (null != arg0) {
      return obj[arg0];
    }
  }
  getAnnouncement(arg0) {
    return obj[arg0];
  }
  getConfig() {
    let config = null;
    if ("success" === obj.state) {
      config = obj.config;
    }
    return config;
  }
  getConfigForApplicationId(id) {
    return closure_20[id];
  }
  getApplicationIdFromDetectableId(application_id) {
    return closure_19[application_id];
  }
  getDetectableIdsToApplicationIds() {
    return closure_19;
  }
  getGuildIdFromApplicationId(applicationId) {
    let tmp;
    if (null != applicationId) {
      tmp = closure_18[applicationId];
    }
    return tmp;
  }
  getApplicationIdFromGuildId(id) {
    if (null != id) {
      let tmp2 = closure_17[id];
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
  }
  getConfigFetchState() {
    return obj;
  }
  getStorefrontApplicationIds() {
    return set;
  }
  hasStorefrontForApplicationId(applicationIdFromGuildId) {
    const hasItem = null != applicationIdFromGuildId && set.has(applicationIdFromGuildId);
    return hasItem;
  }
  getStorefrontGuildIds() {
    return set1;
  }
  getSKUEligibility(skuId) {
    let state;
    if (obj[skuId] != null) {
      state = tmp.state;
    }
    return state;
  }
  getSKUEligibilityEntry(arg0) {
    return obj[arg0];
  }
  getNormalizedSKUEligibility(arg0) {
    let state;
    if (obj[arg0] != null) {
      state = tmp.state;
    }
    return "ineligible" !== state;
  }
  getAnnouncementModalContentConfig() {
    return c22;
  }
}
const prototype = SocialLayerStorefrontStore.prototype;
SocialLayerStorefrontStore.displayName = "SocialLayerStorefrontStore";
obj = {
  LOGOUT: function handleLogout() {
    closure_13 = {};
    new Set();
    new Set();
    closure_17 = {};
    closure_18 = {};
    closure_19 = {};
    closure_20 = {};
    set1 = new Set();
    c22 = null;
    new Set();
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: function handleStorefrontPromotionIdOverrideSet() {},
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    closure_13 = {};
    new Set();
  },
  ENTITLEMENT_CREATE: function handleEntitlementCreate(entitlement) {
    entitlement = entitlement.entitlement;
    if (null == obj[entitlement.sku_id]) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      delete obj[entitlement.sku_id];
    }
  },
  INTERACTION_FAILURE: function handleInteractionFailure(interactionId) {
    interactionId = interactionId.interactionId;
    if (null == interactionId) {
      return false;
    } else if (null == closure_13[interactionId]) {
      const _Object = Object;
      const values = Object.values(obj);
      if (values.some((state) => "checking" === state.state)) {
        if (set.size >= 25) {
          const iter = set.values();
          set.delete(iter.next().value);
        }
        set.add(interactionId);
      }
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      obj[closure_13[interactionId]] = { state: "error", reason: "interaction_failure" };
      delete closure_13[interactionId];
    }
  },
  INTERACTION_SUCCESS: function handleInteractionSuccess(interactionId) {
    interactionId = interactionId.interactionId;
    if (null == closure_13[interactionId]) {
      return false;
    } else {
      delete closure_13[interactionId];
    }
  },
  SOCIAL_LAYER_STOREFRONT_LOAD: function handleSocialLayerStorefrontLoad(guildOrApplicationId) {
    let applicationId;
    let guildId;
    guildOrApplicationId = guildOrApplicationId.guildOrApplicationId;
    if ("guild" === guildOrApplicationId.type) {
      guildId = guildOrApplicationId.guildId;
    } else {
      guildId = closure_18[guildOrApplicationId.applicationId];
    }
    if ("guild" === guildOrApplicationId.type) {
      applicationId = closure_17[guildOrApplicationId.guildId];
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
    const merged5 = Object.assign(obj12);
  },
  SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function handleSocialLayerStorefrontLoadSuccess(arg0) {
    let guildId2;
    let guildOrApplicationId;
    let storefront;
    ({ guildOrApplicationId, storefront } = arg0);
    if ("guild" === guildOrApplicationId.type) {
      guildId2 = guildOrApplicationId.guildId;
    } else {
      let guildId;
      if ("guild" === guildOrApplicationId.type) {
        guildId = guildOrApplicationId.guildId;
      } else {
        guildId = closure_18[guildOrApplicationId.applicationId];
      }
      if ("guild" === guildOrApplicationId.type) {
        guildId2 = guildId;
      } else {
        const applicationId = guildOrApplicationId.applicationId;
        guildId2 = guildId;
      }
    }
    const tmp4 = null != guildId2 && null == closure_17[guildId2];
    if (tmp4) {
      closure_17[guildId2] = storefront.applicationId;
      obj = {};
      const merged = Object.assign(closure_17);
      closure_17 = obj;
    }
    const tmp10 = null != storefront.applicationId && null != guildId2 && null == closure_18[storefront.applicationId];
    if (tmp10) {
      closure_18[storefront.applicationId] = guildId2;
      const obj2 = {};
      const merged1 = Object.assign(closure_18);
      closure_18 = obj2;
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
    const merged7 = Object.assign(obj12);
    if (null != storefront.assets) {
      const obj8 = {};
      const merged8 = Object.assign(obj3);
      const merged9 = Object.assign(storefront.assets);
      obj3 = obj8;
    }
  },
  SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: function handleSocialLayerStorefrontPartialLoadSuccess(assets) {
    assets = assets.assets;
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(assets);
  },
  SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS: function handleSocialLayerStorefrontMetadataLoadSuccess(arg0) {
    let applicationId;
    let storefrontMetadata;
    obj = {};
    ({ applicationId, storefrontMetadata } = arg0);
    const merged = Object.assign(obj);
    obj[applicationId] = storefrontMetadata;
  },
  SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function handleSocialLayerStorefrontLoadFailure(guildOrApplicationId) {
    let applicationId;
    let guildId;
    let tmp3;
    guildOrApplicationId = guildOrApplicationId.guildOrApplicationId;
    const eager = guildOrApplicationId.eager;
    if ("guild" === guildOrApplicationId.type) {
      guildId = guildOrApplicationId.guildId;
    } else {
      guildId = closure_18[guildOrApplicationId.applicationId];
    }
    if ("guild" === guildOrApplicationId.type) {
      applicationId = closure_17[guildOrApplicationId.guildId];
    } else {
      applicationId = guildOrApplicationId.applicationId;
    }
    if (null != guildId) {
      tmp3 = obj11[guildId];
    } else if (null != applicationId) {
      tmp3 = obj12[applicationId];
    }
    if (null == tmp3) {
      return false;
    } else if (eager) {
      if ("loading" === tmp3.state) {
        if (null != tmp3.storefront) {
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
        delete obj11[guildId];
      }
      if (null != applicationId) {
        delete obj12[applicationId];
      }
      const obj7 = {};
      const merged6 = Object.assign(obj11);
      obj11 = obj7;
      const obj8 = {};
      const merged7 = Object.assign(obj12);
      obj12 = obj8;
    } else {
      obj = { state: "error", fetchedAt: Date.now(), storefront: "o" };
      const _Date = Date;
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
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: function handleSocialLayerStorefrontAnnouncementFetchStart(
    guildId,
  ) {
    obj = {};
    guildId = guildId.guildId;
    const merged = Object.assign(obj);
    obj[guildId] = { state: "loading" };
  },
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: function handleSocialLayerStorefrontAnnouncementFetchSuccess(
    arg0,
  ) {
    let announcement;
    let guildId;
    obj = {};
    ({ guildId, announcement } = arg0);
    const merged = Object.assign(obj);
    obj[guildId] = { state: "success", announcement };
  },
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: function handleSocialLayerStorefrontAnnouncementFetchFailure(
    guildId,
  ) {
    obj = {};
    guildId = guildId.guildId;
    const merged = Object.assign(obj);
    obj[guildId] = { state: "error" };
  },
  SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: function handleStorefrontConfigFetchStart() {},
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
    skuId = skuId.skuId;
    const merged = Object.assign(obj);
    obj[skuId] = { state: "checking" };
  },
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: function handleSKUPurchaseEligibilityCheckCreate(arg0) {
    let interactionId;
    let skuId;
    ({ skuId, interactionId } = arg0);
    let state;
    if (obj[skuId] != null) {
      state = tmp.state;
    }
    let tmp3 = "checking" === state;
    if (tmp3) {
      if (set.has(interactionId)) {
        set.delete(interactionId);
        obj = {};
        const merged = Object.assign(obj);
        obj[skuId] = { state: "error", reason: "interaction_failure" };
      } else {
        closure_13[interactionId] = skuId;
      }
      tmp3 = tmp6;
    }
    return tmp3;
  },
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: function handleSKUPurchaseEligibilityCheckFailure(httpStatus) {
    let reason;
    let skuId;
    ({ skuId, reason } = httpStatus);
    if (reason === undefined) {
      reason = "http_error";
    }
    let state;
    httpStatus = httpStatus.httpStatus;
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
    obj[skuId] = { state: "error", reason, httpStatus };
  },
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: function handleSKUPurchaseEligibilityResponse(arg0) {
    let eligible;
    let ineligibleReason;
    let recipientId;
    let skuId;
    ({ skuId, recipientId, eligible, ineligibleReason } = arg0);
    if (AuthenticationStore.getId() !== recipientId) {
      return false;
    } else {
      let obj2;
      obj = {};
      const merged = Object.assign(obj);
      if (eligible) {
        obj2 = { state: "eligible" };
      } else {
        obj2 = { state: "ineligible", ineligibleReason };
      }
      obj[skuId] = obj2;
    }
  },
  SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD: function handleSocialLayerStorefrontEntriesLoad(applicationId) {
    obj = {};
    applicationId = applicationId.applicationId;
    const merged = Object.assign(obj);
    obj[applicationId] = { state: "loading" };
  },
  SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_SUCCESS: function handleSocialLayerStorefrontEntriesLoadSuccess(arg0) {
    let applicationId;
    let entries;
    obj = {};
    ({ applicationId, entries } = arg0);
    const merged = Object.assign(obj);
    obj[applicationId] = { state: "fetched", entries, fetchedAt: Date.now() };
    ({ state: "fetched", entries, fetchedAt: Date.now() });
  },
  SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_FAILURE: function handleSocialLayerStorefrontEntriesLoadFailure(applicationId) {
    obj = {};
    applicationId = applicationId.applicationId;
    const merged = Object.assign(obj);
    obj[applicationId] = { state: "error", fetchedAt: Date.now() };
    ({ state: "error", fetchedAt: Date.now() });
  },
  SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD: function handleSocialLayerStorefrontByIdLoad(storefrontId) {
    storefrontId = storefrontId.storefrontId;
    obj = {};
    const merged = Object.assign(obj);
    const obj2 = { storefront: null, state: "loading", fetchedAt: null };
    const merged1 = Object.assign(obj[storefrontId]);
    obj[storefrontId] = obj2;
  },
  SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_SUCCESS: function handleSocialLayerStorefrontByIdLoadSuccess(storefront) {
    storefront = storefront.storefront;
    obj = {};
    const storefrontId = storefront.storefrontId;
    const merged = Object.assign(obj);
    obj[storefrontId] = { storefront, state: "fetched", fetchedAt: Date.now() };
    ({ storefront, state: "fetched", fetchedAt: Date.now() });
    if (null != storefront.assets) {
      obj3 = {};
      const merged1 = Object.assign(obj3);
      const merged2 = Object.assign(storefront.assets);
    }
  },
  SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_FAILURE: function handleSocialLayerStorefrontByIdLoadFailure(storefrontId) {
    obj = {};
    storefrontId = storefrontId.storefrontId;
    const merged = Object.assign(obj);
    obj[storefrontId] = { storefront: null, state: "error", fetchedAt: Date.now() };
    ({ storefront: null, state: "error", fetchedAt: Date.now() });
  },
  SOCIAL_LAYER_STOREFRONT_SET_PREVIEW: function handleSocialLayerStorefrontSetPreview(arg0) {
    let applicationId;
    let storefrontId;
    ({ applicationId, storefrontId } = arg0);
    obj = {};
    const merged = Object.assign(obj);
    if (null == storefrontId) {
      delete obj[applicationId];
    } else {
      obj[applicationId] = storefrontId;
    }
  },
  SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_SUCCESS: function handleLaunchAnnouncementFetchSuccess(config) {
    config = config.config;
  },
  SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_FAILURE: function handleLaunchAnnouncementFetchFailure() {
    c22 = null;
  },
};
const socialLayerStorefrontStore = new SocialLayerStorefrontStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/slayer_storefront/SocialLayerStorefrontStore.tsx");

export default socialLayerStorefrontStore;
