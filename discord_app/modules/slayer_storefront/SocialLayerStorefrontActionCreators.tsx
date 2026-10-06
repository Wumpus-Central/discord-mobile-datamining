// === Module 10545: SocialLayerStorefrontActionCreators ===

// Module 10545 (SocialLayerStorefrontActionCreators)
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import StorefrontPromotionOverrideStore from "StorefrontPromotionOverrideStore" /* 8474 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 6743 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c12, c13, closure_1, configFetchState, promotionIdOverride, storefrontById, storefrontEntries;

function _fetchSocialLayerStorefront() {
  return obj(...arguments);
}
let obj = function _fetchSocialLayerStorefront2() {
  obj = _asyncToGenerator(async (guildOrApplicationId, url) => {
    let closure_5;
    let eager;
    let obj20;
    let obj6;
    let obj8;
    let result1;
    let closure_2 = arg2;
    if (1 === c8) {
      if (guildOrApplicationId === 1) {
        let c9 = 3;
        throw value;
      } else if (guildOrApplicationId === 2) {
        c9 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        eager = obj6.eager;
        const tmp54 = undefined !== eager && eager;
        eager = tmp54;
        const forceFetch = obj6.forceFetch;
        const tmp58 = undefined !== forceFetch && forceFetch;
        let closure_6 = tmp58;
        const storefrontFetchState = closure_133_5.getStorefrontFetchState(guildOrApplicationId);
        let state;
        if (storefrontFetchState != null) {
          state = storefrontFetchState.state;
        }
        closure_8 = "loading" === state;
        let state1;
        if (storefrontFetchState != null) {
          state1 = storefrontFetchState.state;
        }
        let tmp67 = "error" === state1 && null != storefrontFetchState.fetchedAt;
        if (tmp67) {
          const _Date = Date;
          tmp67 = Date.now() - storefrontFetchState.fetchedAt < closure_133_7;
        }
        closure_9 = tmp67;
        let state2;
        if (storefrontFetchState != null) {
          state2 = storefrontFetchState.state;
        }
        let tmp76 = "fetched" === state2 && null != storefrontFetchState.fetchedAt;
        if (tmp76) {
          const _Date2 = Date;
          tmp76 = Date.now() - storefrontFetchState.fetchedAt < closure_133_8;
        }
        closure_10 = tmp76;
        const tmp84 = closure_8;
        if (!tmp84) {
          let applicationId;
          let c7 = 1;
          const obj9 = { type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildOrApplicationId };
          const obj15 = closure_133_1(closure_133_2[5]);
          obj15.dispatch(obj9);
          if ("application" === guildOrApplicationId.type) {
            applicationId = guildOrApplicationId.applicationId;
          } else {
            const obj17 = closure_133_0(closure_133_2[6]);
            applicationId = obj17.getSocialLayerStorefrontApplicationId(guildOrApplicationId.guildId);
          }
          const query = {};
          let result = null != applicationId;
          if (result) {
            const obj18 = closure_133_0(closure_133_2[7]);
            result = obj18.isTestModeForApplication(applicationId);
          }
          if (result) {
            query.test_mode = true;
          }
          const promotion_id_override = closure_133_4.getPromotionIdOverride();
          if (null != promotion_id_override) {
            query.promotion_id_override = promotion_id_override;
          }
          result1 = "guild" === guildOrApplicationId.type && null == applicationId;
          if (result1) {
            const obj19 = closure_133_0(closure_133_2[7]);
            result1 = obj19.isAnyApplicationInTestMode();
          }
          const HTTP = closure_133_0(closure_133_2[8]).HTTP;
          const request = { url, query, rejectWithError: true, retries: 3 };
          c8 = 3;
          c9 = 1;
          const obj11 = { value: HTTP.get(request), done: false };
          return obj11;
        }
      }
    } else if (2 === c8) {
      c7 = 0;
      const obj12 = { type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE", guildOrApplicationId, eager };
      const obj13 = closure_133_1(closure_133_2[5]);
      obj13.dispatch(obj12);
    } else {
      if (3 === c8) {
        if (guildOrApplicationId === 1) {
          c9 = 3;
          throw value;
        } else if (guildOrApplicationId === 2) {
          c7 = 0;
          c9 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          let closure_15 = value;
          const body = closure_15.body;
          const obj26 = closure_133_0(closure_133_2[6]);
          const storefront = obj26.transformSlayerApplicationStorefrontServer(body);
          if (null != storefront.storefrontPricing) {
            const obj16 = { type: "SKUS_PRICING_FETCH_SUCCESS", priceId: obj20, data: storefront.storefrontPricing };
            obj20 = { type: "application", applicationId: storefront.applicationId };
            const obj2 = closure_133_1(closure_133_2[5]);
            obj2.dispatch(obj16);
          }
          const obj21 = { type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS", guildOrApplicationId, storefront };
          const obj5 = closure_133_1(closure_133_2[5]);
          obj5.dispatch(obj21);
          const obj22 = { type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS", applicationId: storefront.applicationId, storefrontMetadata: obj8.transformStorefrontMetadataServer(body) };
          const dispatch = closure_133_1(closure_133_2[5]).dispatch;
          const tmp21 = closure_133_1(closure_133_2[5]);
          obj8 = closure_133_0(closure_133_2[6]);
          dispatch(obj22);
          const store_listings = closure_15.body.store_listings;
          let storeListings = store_listings;
          const dispatch2 = closure_133_1(closure_133_2[5]).dispatch;
          const tmp29 = closure_133_1(closure_133_2[5]);
          if (store_listings == null) {
            storeListings = [];
          }
          const obj23 = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings };
          dispatch2(obj23);
          let result2 = result1;
          if (result2) {
            const obj10 = closure_133_0(closure_133_2[7]);
            result2 = obj10.isTestModeForApplication(storefront.applicationId);
          }
          if (result2) {
            c8 = 4;
            c9 = 1;
            const obj24 = { value: closure_133_12(guildOrApplicationId, url, { forceFetch: true }), done: false };
            return obj24;
          }
        }
      } else if (guildOrApplicationId === 1) {
        c9 = 3;
        throw value;
      } else if (guildOrApplicationId === 2) {
        c7 = 0;
        c9 = 3;
        obj = { value, done: true };
        return obj;
      }
      c7 = 0;
    }
    await "IconComponent";
    eager = tmp4;
    obj6 = closure_2;
    if (closure_2 === undefined) {
      obj6 = {};
    }
    return "Reflect";
  });
  return obj(...arguments);
};
function _fetchSocialLayerStorefrontSkuWithUrl() {
  return obj(...arguments);
}
obj = function _fetchSocialLayerStorefrontSkuWithUrl2() {
  obj = _asyncToGenerator(async function(skuId, url) {
    let assets;
    let closure_3;
    let closure_5;
    let obj2;
    let obj7;
    let closure_2 = arg2;
    const withGoogleSkuIds = obj7.withGoogleSkuIds;
    const tmp31 = undefined !== withGoogleSkuIds && withGoogleSkuIds;
    let closure_4 = tmp31;
    const countryCode = obj7.countryCode;
    const paymentGateway = obj7.paymentGateway;
    const obj11 = { type: "STORE_LISTINGS_FETCH_START", skuId };
    const obj8 = closure_132_1(closure_132_2[5]);
    obj8.dispatch(obj11);
    const query = {};
    const tmp41 = closure_4;
    if (tmp41) {
      query.with_google_sku_ids = true;
    }
    const obj10 = closure_132_0(closure_132_2[9]);
    if (!obj10.isNullOrEmpty(countryCode)) {
      query.country_code = countryCode;
    }
    if (null != paymentGateway) {
      query.payment_gateway = paymentGateway;
    }
    const promotion_id_override = closure_132_4.getPromotionIdOverride();
    if (null != promotion_id_override) {
      query.promotion_id_override = promotion_id_override;
    }
    const HTTP = closure_132_0(closure_132_2[8]).HTTP;
    const request = { url, query, rejectWithError: true };
    await HTTP.get(request);
    if (2 === c7) {
      let c6 = 0;
      const obj13 = { type: "STORE_LISTINGS_FETCH_FAIL", skuId };
      const obj6 = closure_132_1(closure_132_2[5]);
      obj6.dispatch(obj13);
    } else if (skuId === 1) {
      let c8 = 3;
      throw value;
    } else if (skuId === 2) {
      c6 = 0;
      c8 = 3;
      const obj14 = { value, done: true };
      return obj14;
    } else {
      closure_9 = value;
      if (null == closure_9.body) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Failed to fetch social layer storefront SKU");
        throw error;
      } else {
        const store_listing = closure_9.body.store_listing;
        const storefront_metadata = closure_9.body.storefront_metadata;
        const obj15 = {
          type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
          assets: Object.fromEntries(assets.map((id) => {
                const items = [id.id, id];
                return items;
              }))
        };
        const _Object = Object;
        assets = closure_9.body.assets;
        const dispatch2 = closure_132_1(closure_132_2[5]).dispatch;
        const tmp88 = closure_132_1(closure_132_2[5]);
        dispatch2(obj15);
        if (null != storefront_metadata) {
          obj = { type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS", applicationId: store_listing.sku.application_id, storefrontMetadata: obj2.transformStorefrontMetadataServer(storefront_metadata) };
          const dispatch = closure_132_1(closure_132_2[5]).dispatch;
          const tmp9 = closure_132_1(closure_132_2[5]);
          obj2 = closure_132_0(closure_132_2[6]);
          dispatch(obj);
        }
        const obj16 = { type: "STORE_LISTING_FETCH_SUCCESS", storeListing: store_listing };
        const obj3 = closure_132_1(closure_132_2[5]);
        obj3.dispatch(obj16);
        c6 = 0;
      }
    }
    await "IconComponent";
    closure_4 = tmp;
    obj7 = closure_2;
    if (closure_2 === undefined) {
      obj7 = {};
    }
    return "Reflect";
  });
  return obj(...arguments);
};
function getOrCreateBackoff(get, applicationId) {
  let value = get.get(applicationId);
  if (null == value) {
    const self = this;
    const self2 = this;
    const tmp6 = new BackoffDefault(closure_17, closure_18);
    const result = get.set(applicationId, tmp6);
    value = tmp6;
  }
  return value;
}
obj = function _fetchSocialLayerStorefrontEntries() {
  obj = _asyncToGenerator(async (applicationId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              state1 = undefined;
              body = undefined;
              storefrontEntries = storefrontEntries.getStorefrontEntries(applicationId);
              let state;
              if (storefrontEntries != null) {
                state = storefrontEntries.state;
              }
              if ("loading" !== state) {
                getOrCreateBackoff(map, applicationId);
                state1 = undefined;
                getOrCreateBackoff(map, applicationId);
                if (storefrontEntries != null) {
                  state1 = storefrontEntries.state;
                }
                if ("error" !== state1) {
                  state1 = storefrontEntries == null;
                  let state2;
                  if (!state1) {
                    state2 = storefrontEntries.state;
                  }
                  if ("fetched" === state2) {
                    state1 = Date;
                  }
                  c4 = 1;
                  const obj5 = { type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD", applicationId };
                  const obj3 = DispatcherDefault;
                  obj3.dispatch(obj5);
                  state1 = require("HTTPUtils").HTTP;
                  const get = state1.get;
                  c5 = 2;
                  c6 = 1;
                  const obj6 = { url: Endpoints.SOCIAL_LAYER_STOREFRONTS_ALL(applicationId), rejectWithError: true, retries: 3 };
                  const obj7 = { value: get(obj6), done: false };
                  return obj7;
                } else {
                  const _Date = Date;
                  state1 = Date.now() - storefrontEntries.fetchedAt;
                }
              }
            }
          } else if (1 === tmp4) {
            c4 = 0;
            state1.fail();
            state1 = closure_130_1(closure_130_2[5]);
            const obj8 = { type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_FAILURE", applicationId };
            state1.dispatch(obj8);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            state1.succeed();
            state1 = closure_130_1(closure_130_2[5]);
            const dispatch = state1.dispatch;
            const obj9 = { type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_SUCCESS", applicationId, entries: body.map(closure_130_0(closure_130_2[6]).transformSlayerApplicationStorefrontSummaryServer) };
            dispatch(obj9);
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp24) {
          closure_3 = tmp24;
          if (0 === c4) {
            c6 = 3;
            throw tmp24;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchSocialLayerStorefrontById() {
  obj = _asyncToGenerator(async (arg0, storefrontId) => {
    let closure_0 = arg0;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      let obj12;
      let obj6;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              storeListings = undefined;
              state1 = undefined;
              body = undefined;
              storefront = undefined;
              storefrontById = storefrontById.getStorefrontById(storefrontId);
              let state;
              if (storefrontById != null) {
                state = storefrontById.state;
              }
              if ("loading" !== state) {
                storeListings = getOrCreateBackoff(map1, storefrontId);
                state1 = undefined;
                getOrCreateBackoff(map1, storefrontId);
                if (storefrontById != null) {
                  state1 = storefrontById.state;
                }
                if ("error" === state1) {
                  state1 = storefrontById.fetchedAt;
                  if (null != state1) {
                    const _Date = Date;
                    state1 = Date.now() - storefrontById.fetchedAt;
                  }
                }
                state1 = storefrontById == null;
                let state2;
                if (!state1) {
                  state2 = storefrontById.state;
                }
                if ("fetched" === state2) {
                  if (null != storefrontById.fetchedAt) {
                    state1 = Date;
                  }
                }
                c6 = 1;
                state1 = DispatcherDefault;
                const obj5 = { type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD", storefrontId };
                state1.dispatch(obj5);
                const obj7 = {};
                const obj13 = require("TestModeUtils");
                if (obj13.isTestModeForApplication(closure_0)) {
                  obj7.test_mode = true;
                }
                promotionIdOverride = promotionIdOverride.getPromotionIdOverride();
                if (null != promotionIdOverride) {
                  obj7.promotion_id_override = promotionIdOverride;
                }
                state1 = require("HTTPUtils").HTTP;
                const request = { url: Endpoints.SOCIAL_LAYER_STOREFRONT_BY_ID(closure_0, storefrontId), query: obj7, rejectWithError: true, retries: 3 };
                const get = state1.get;
                c7 = 2;
                c8 = 1;
                const obj8 = { value: get(request), done: false };
                return obj8;
              }
            }
          } else if (1 === tmp4) {
            c6 = 0;
            storeListings.fail();
            const obj10 = { type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_FAILURE", storefrontId };
            const obj9 = closure_132_1(closure_132_2[5]);
            obj9.dispatch(obj10);
            if (closure_132_5.getPreviewStorefrontId(closure_0) === storefrontId) {
              closure_132_24(closure_0, null);
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            state1 = value;
            body = state1.body;
            state1 = closure_132_0(closure_132_2[6]).transformSlayerApplicationStorefrontServer;
            closure_132_0(closure_132_2[6]);
            storefront = state1(body);
            if (null != storefront.storefrontPricing) {
              state1 = closure_132_1(closure_132_2[5]);
              obj = { type: "SKUS_PRICING_FETCH_SUCCESS", priceId: obj12, data: storefront.storefrontPricing };
              obj12 = { type: "application", applicationId: storefront.applicationId };
              state1.dispatch(obj);
            }
            const obj14 = { type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_SUCCESS", storefrontId, storefront };
            const obj3 = closure_132_1(closure_132_2[5]);
            obj3.dispatch(obj14);
            const obj15 = { type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS", applicationId: storefront.applicationId, storefrontMetadata: obj6.transformStorefrontMetadataServer(body) };
            const dispatch = closure_132_1(closure_132_2[5]).dispatch;
            closure_132_1(closure_132_2[5]);
            obj6 = closure_132_0(closure_132_2[6]);
            dispatch(obj15);
            state1 = closure_132_1(closure_132_2[5]).dispatch;
            const store_listings = state1.body.store_listings;
            storeListings = store_listings;
            closure_132_1(closure_132_2[5]);
            if (store_listings == null) {
              storeListings = [];
            }
            const obj16 = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings };
            state1(obj16);
            storeListings.succeed();
            c6 = 0;
          }
          c8 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp62) {
          storefront = tmp62;
          if (0 === c6) {
            c8 = 3;
            throw tmp62;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function setSocialLayerStorefrontPreview(applicationId, storefrontId) {
  obj = DispatcherDefault;
  const obj2 = { type: "SOCIAL_LAYER_STOREFRONT_SET_PREVIEW", applicationId, storefrontId };
  obj.dispatch(obj2);
}
obj = function _fetchSocialLayerStorefrontAnnouncement() {
  obj = _asyncToGenerator(async (guildId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              body = undefined;
              obj = undefined;
              c4 = 1;
              const obj5 = { type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START", guildId };
              const obj11 = DispatcherDefault;
              obj11.dispatch(obj5);
              const HTTP = require("HTTPUtils").HTTP;
              const get = HTTP.get;
              c5 = 2;
              c6 = 1;
              const obj7 = { url: Endpoints.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(guildId), rejectWithError: true };
              const obj8 = { value: get(obj7), done: false };
              return obj8;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj9 = { type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE", guildId };
              const obj6 = closure_130_1(closure_130_2[5]);
              obj6.dispatch(obj9);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              body = value.body;
              if ("guild-discord-announcement" === body.type) {
                obj = { type: "guild-discord-announcement", id: body.id, applicationId: body.application_id, applicationName: body.application_name, assetFullyQualifiedURL: body.asset_fully_qualified_url, videoAssetFullyQualifiedURL: body.video_asset_fully_qualified_url, popoverTitle: body.popover_title, popoverBody: body.popover_body, popoverCta: body.popover_cta };
                const obj12 = { type: "guild-discord-announcement", id: body.id, applicationId: body.application_id, applicationName: body.application_name, assetFullyQualifiedURL: body.asset_fully_qualified_url, videoAssetFullyQualifiedURL: body.video_asset_fully_qualified_url, popoverTitle: body.popover_title, popoverBody: body.popover_body, popoverCta: body.popover_cta };
              } else {
                obj = { type: "guild-application-announcement", id: body.id, applicationId: body.application_id, applicationName: body.application_name, assetId: body.asset_id, backgroundImageAssetId: body.background_image_asset_id };
              }
              const obj13 = { type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS", guildId, announcement: obj };
              const obj3 = closure_130_1(closure_130_2[5]);
              obj3.dispatch(obj13);
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp34) {
          closure_3 = tmp34;
          if (0 === c4) {
            c6 = 3;
            throw tmp34;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchSocialLayerStorefrontConfig() {
  obj = _asyncToGenerator(async () => {
    let obj11;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let body;
        let storefronts;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            body = undefined;
            storefronts = undefined;
            obj = undefined;
            configFetchState = configFetchState.getConfigFetchState();
            if ("loading" !== configFetchState.state) {
              if ("success" !== configFetchState.state) {
                if ("error" === configFetchState.state) {
                  const _Date2 = Date;
                }
                c3 = 1;
                const obj7 = DispatcherDefault;
                obj7.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START" });
                const HTTP = require("HTTPUtils").HTTP;
                const obj5 = { url: constants.SOCIAL_LAYER_STOREFRONT_CONFIG, rejectWithError: true };
                c4 = 2;
                c5 = 1;
                const obj8 = { value: HTTP.get(obj5), done: false };
                return obj8;
              } else {
                const _Date = Date;
              }
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          const obj6 = closure_130_1(closure_130_2[5]);
          obj6.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE" });
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          body = value.body;
          storefronts = body.storefronts;
          let mapped;
          if (storefronts != null) {
            mapped = storefronts.map((guildId) => {
              let excluded_platforms;
              obj = { guildId: guildId.guild_id, applicationId: guildId.application_id, gameId: guildId.game_id, collectiblesShopNavigationEnabled: true === guildId.collectibles_shop_navigation_enabled, excludedPlatforms: excluded_platforms, disableMobileAccountLinking: true === guildId.disable_mobile_account_linking, allowOrbsSpending: true === guildId.allow_orbs_spending };
              excluded_platforms = guildId.excluded_platforms;
              if (excluded_platforms == null) {
                excluded_platforms = [];
              }
              return obj;
            });
          }
          let closure_0 = mapped;
          if (mapped == null) {
            closure_0 = [];
          }
          storefronts = closure_0;
          obj = null;
          if (null != body.announcement_modal_config) {
            obj = { version: body.announcement_modal_config.version, applicationId: body.announcement_modal_config.application_id };
          }
          const obj10 = { type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS", config: obj11 };
          obj11 = { promotionalSkuIds: body.promotional_sku_ids, storefronts, announcementModalConfig: obj };
          const obj2 = closure_130_1(closure_130_2[5]);
          obj2.dispatch(obj10);
          c3 = 0;
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp32) {
        if (0 === c3) {
          c5 = 3;
          throw tmp32;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchSocialLayerStorefrontLaunchAnnouncement() {
  obj = _asyncToGenerator(async () => {
    let backgroundUrl;
    let buttonText;
    let darkThemeLogoUrl;
    let features;
    let lightThemeLogoUrl;
    let subtitle;
    let titles;
    if (c13 === 2) {
      c13 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c11;
      try {
        let _null;
        let obj8;
        c13 = 2;
        if (0 === c12) {
          if (arg0 === 1) {
            c13 = 3;
            throw value;
          } else if (arg0 === 2) {
            c13 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_9 = tmp;
            closure_8 = tmp4;
            _null = undefined;
            obj8 = undefined;
            c11 = 1;
            const HTTP = require("HTTPUtils").HTTP;
            const obj5 = { url: constants.SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT, rejectWithError: true };
            c12 = 2;
            c13 = 1;
            const obj6 = { value: HTTP.get(obj5), done: false };
            return obj6;
          }
        } else {
          if (1 === c12) {
            c11 = 0;
            const obj4 = closure_137_1(closure_137_2[5]);
            obj4.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_FAILURE" });
          } else if (arg0 === 1) {
            c13 = 3;
            throw value;
          } else if (arg0 === 2) {
            c11 = 0;
            c13 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            const body = value.body;
            let c0 = body;
            if (body == null) {
              c0 = null;
            }
            _null = c0;
            obj8 = null;
            if (null != _null) {
              obj8 = { applicationId: _null.application_id, lightThemeLogoUrl, darkThemeLogoUrl, backgroundUrl, titles, subtitle, features, buttonText };
              const light_theme_logo_url = _null.light_theme_logo_url;
              lightThemeLogoUrl = light_theme_logo_url;
              if (light_theme_logo_url == null) {
                lightThemeLogoUrl = null;
              }
              const dark_theme_logo_url = _null.dark_theme_logo_url;
              darkThemeLogoUrl = dark_theme_logo_url;
              if (dark_theme_logo_url == null) {
                darkThemeLogoUrl = null;
              }
              const background_url = _null.background_url;
              backgroundUrl = background_url;
              if (background_url == null) {
                backgroundUrl = null;
              }
              titles = _null.titles ?? null;
              subtitle = _null.subtitle ?? null;
              features = _null.features;
              let mapped;
              if (features != null) {
                mapped = features.map((assetUrl) => ({ assetUrl: assetUrl.asset_url, title: assetUrl.title, subtitle: assetUrl.subtitle }));
              }
              features = mapped;
              if (mapped == null) {
                features = null;
              }
              const button_text = _null.button_text;
              buttonText = button_text;
              if (button_text == null) {
                buttonText = null;
              }
            }
            obj = closure_137_1(closure_137_2[5]);
            const obj9 = { type: "SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_SUCCESS", config: obj8 };
            obj.dispatch(obj9);
            c11 = 0;
          }
          c13 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp43) {
        closure_10 = tmp43;
        if (0 === c11) {
          c13 = 3;
          throw tmp43;
        } else {
          c12 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let closure_7 = 30 * DurationsDefault.Millis.SECOND;
let closure_8 = 30 * DurationsDefault.Millis.MINUTE;
let closure_9 = 60 * DurationsDefault.Millis.MINUTE;
let closure_10 = 30 * DurationsDefault.Millis.SECOND;
let closure_11 = 5 * DurationsDefault.Millis.SECOND;
let closure_16 = 5 * DurationsDefault.Millis.MINUTE;
let closure_17 = 30 * DurationsDefault.Millis.SECOND;
let closure_18 = 5 * DurationsDefault.Millis.MINUTE;
const map = new Map();
const map1 = new Map();
let result = size.fileFinishedImporting("modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx");

export { _fetchSocialLayerStorefront };
export const fetchSocialLayerStorefrontForApplication = function fetchSocialLayerStorefrontForApplication(applicationId, arg1) {
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const obj2 = { type: "application", applicationId };
  return _fetchSocialLayerStorefront(obj2, Endpoints.SOCIAL_LAYER_STOREFRONT_BY_APPLICATION_ID(applicationId), obj);
};
export const fetchSocialLayerStorefront = function fetchSocialLayerStorefront(guildId, arg1) {
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const obj2 = { type: "guild", guildId };
  return _fetchSocialLayerStorefront(obj2, Endpoints.SOCIAL_LAYER_APPLICATION_STOREFRONT(guildId), obj);
};
export const fetchSocialLayerStorefrontSkuForApplication = function fetchSocialLayerStorefrontSkuForApplication(applicationId, id, arg2) {
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  return _fetchSocialLayerStorefrontSkuWithUrl(id, Endpoints.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_BY_APPLICATION_ID(applicationId, id), obj);
};
export const fetchSocialLayerStorefrontSku = function fetchSocialLayerStorefrontSku(guildId, id, arg2) {
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  return _fetchSocialLayerStorefrontSkuWithUrl(id, Endpoints.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(guildId, id), obj);
};
export const setSocialLayerStorefrontState = function setSocialLayerStorefrontState(applicationId, pageIndex, skuId) {
  obj = DispatcherDefault;
  const obj2 = { type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", applicationId, pageIndex, skuId };
  obj.dispatch(obj2);
};
export const fetchSocialLayerStorefrontEntries = function fetchSocialLayerStorefrontEntries() {
  return obj(...arguments);
};
export const fetchSocialLayerStorefrontById = function fetchSocialLayerStorefrontById() {
  return obj(...arguments);
};
export { setSocialLayerStorefrontPreview };
export const fetchSocialLayerStorefrontAnnouncement = function fetchSocialLayerStorefrontAnnouncement() {
  return obj(...arguments);
};
export const fetchSocialLayerStorefrontConfig = function fetchSocialLayerStorefrontConfig() {
  return obj(...arguments);
};
export const fetchSocialLayerSKUPurchaseEligibility = function fetchSocialLayerSKUPurchaseEligibility(arg0, skuId) {
  _require = skuId;
  const sKUEligibility = SocialLayerStorefrontStore.getSKUEligibility(skuId);
  const tmp2 = "checking" !== sKUEligibility && "eligible" !== sKUEligibility && "ineligible" !== sKUEligibility;
  if (tmp2) {
    obj = DispatcherDefault;
    let obj2 = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId };
    obj.dispatch(obj2);
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      if ("checking" === SocialLayerStorefrontStore.getSKUEligibility(skuId)) {
        const obj2 = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE", skuId, reason: "interaction_deadline" };
        obj = DispatcherDefault;
        obj.dispatch(obj2);
      }
    }, closure_11);
    const HTTP = require("HTTPUtils").HTTP;
    const post = HTTP.post;
    const obj3 = { url: Endpoints.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(arg0, skuId), rejectWithError: true };
    const postResult = post(obj3);
    const nextPromise = postResult.then((body) => {
      obj = DispatcherDefault;
      const obj2 = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE", skuId, interactionId: body.body.interaction_id };
      obj.dispatch(obj2);
    });
    nextPromise.catch((error) => {
      let status;
      obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE", skuId, httpStatus: status };
      status = undefined;
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      if (error != null) {
        status = error.status;
      }
      dispatch(obj);
    });
  }
};
export const fetchSocialLayerStorefrontLaunchAnnouncement = function fetchSocialLayerStorefrontLaunchAnnouncement() {
  return obj(...arguments);
};