// discord_app/modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import StorefrontPromotionOverrideStore from "../storefront/StorefrontPromotionOverrideStore.tsx";
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore.tsx";

const require = fn;
function _fetchSocialLayerStorefront() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _fetchSocialLayerStorefront2(arg0, value) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp7;
          closure_132_2 = undefined;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          let obj1 = closure_2;
          if (closure_2 === undefined) {
            obj1 = {};
          }
          closure_132_2 = obj1;
          let eager;
          closure_132_4 = undefined;
          let forceFetch;
          closure_132_6 = undefined;
          let storefrontFetchState;
          closure_132_8 = undefined;
          closure_132_9 = undefined;
          closure_132_10 = undefined;
          closure_132_11 = undefined;
          closure_132_12 = undefined;
          let promotionIdOverride;
          closure_132_14 = undefined;
          closure_132_15 = undefined;
          let body;
          closure_132_17 = undefined;
          c8 = 1;
          c9 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            eager = closure_132_2.eager;
            let tmp55 = undefined !== eager;
            if (tmp55) {
              tmp55 = eager;
            }
            closure_132_4 = tmp55;
            forceFetch = closure_132_2.forceFetch;
            let tmp59 = undefined !== forceFetch;
            if (tmp59) {
              tmp59 = forceFetch;
            }
            closure_132_6 = tmp59;
            storefrontFetchState = closure_133_5.getStorefrontFetchState(closure_132_0);
            let state;
            if (storefrontFetchState != null) {
              state = storefrontFetchState.state;
            }
            closure_132_8 = "loading" === state;
            let state1;
            if (storefrontFetchState != null) {
              state1 = storefrontFetchState.state;
            }
            let tmp68 = "error" === state1;
            if (tmp68) {
              tmp68 = null != storefrontFetchState.fetchedAt;
            }
            if (tmp68) {
              const _Date = Date;
              tmp68 = Date.now() - storefrontFetchState.fetchedAt < closure_133_7;
            }
            closure_132_9 = tmp68;
            let state2;
            if (storefrontFetchState != null) {
              state2 = storefrontFetchState.state;
            }
            let tmp77 = "fetched" === state2;
            if (tmp77) {
              tmp77 = null != storefrontFetchState.fetchedAt;
            }
            if (tmp77) {
              const _Date2 = Date;
              tmp77 = Date.now() - storefrontFetchState.fetchedAt < closure_133_8;
            }
            closure_132_10 = tmp77;
            if (!closure_132_8) {
              c7 = 1;
              const obj3 = { type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildOrApplicationId: closure_132_0 };
              closure_133_1(closure_133_2[5]).dispatch(obj3);
              if ("application" === closure_132_0.type) {
                let applicationId = closure_132_0.applicationId;
              } else {
                applicationId = closure_133_0(closure_133_2[6]).getSocialLayerStorefrontApplicationId(
                  closure_132_0.guildId,
                );
                const obj19 = closure_133_0(closure_133_2[6]);
              }
              closure_132_11 = applicationId;
              closure_132_12 = {};
              let result = null != closure_132_11;
              if (result) {
                result = closure_133_0(closure_133_2[7]).isTestModeForApplication(closure_132_11);
                const obj20 = closure_133_0(closure_133_2[7]);
              }
              if (result) {
                closure_132_12.test_mode = true;
              }
              promotionIdOverride = closure_133_4.getPromotionIdOverride();
              if (null != promotionIdOverride) {
                closure_132_12.promotion_id_override = promotionIdOverride;
              }
              let result1 = "guild" === closure_132_0.type;
              if (result1) {
                result1 = null == closure_132_11;
              }
              if (result1) {
                result1 = closure_133_0(closure_133_2[7]).isAnyApplicationInTestMode();
                const obj21 = closure_133_0(closure_133_2[7]);
              }
              closure_132_14 = result1;
              const HTTP = closure_133_0(closure_133_2[8]).HTTP;
              const request = { url: closure_132_1, query: closure_132_12, rejectWithError: true, retries: 3 };
              c8 = 3;
              c9 = 1;
              let obj4 = { value: HTTP.get(request), done: false };
              return obj4;
            }
          }
        } else if (2 === tmp7) {
          c7 = 0;
          const obj5 = {
            type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE",
            guildOrApplicationId: closure_132_0,
            eager: closure_132_4,
          };
          closure_133_1(closure_133_2[5]).dispatch(obj5);
          const obj15 = closure_133_1(closure_133_2[5]);
        } else {
          if (3 === tmp7) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              let obj6 = { value, done: true };
              return obj6;
            } else {
              closure_132_15 = value;
              body = closure_132_15.body;
              closure_132_17 = closure_133_0(closure_133_2[6]).transformSlayerApplicationStorefrontServer(body);
              if (null != closure_132_17.storefrontPricing) {
                obj1 = closure_133_1(closure_133_2[5]);
                const obj7 = { type: "SKUS_PRICING_FETCH_SUCCESS", priceId: null, data: null };
                let obj8 = { type: "application", applicationId: closure_132_17.applicationId };
                obj7.priceId = obj8;
                obj7.data = closure_132_17.storefrontPricing;
                obj1.dispatch(obj7);
              }
              obj4 = closure_133_1(closure_133_2[5]);
              let obj9 = {
                type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                guildOrApplicationId: closure_132_0,
                storefront: closure_132_17,
              };
              obj4.dispatch(obj9);
              obj6 = closure_133_1(closure_133_2[5]);
              const obj10 = {
                type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                applicationId: closure_132_17.applicationId,
                storefrontMetadata: null,
              };
              obj8 = closure_133_0(closure_133_2[6]);
              obj10.storefrontMetadata = obj8.transformStorefrontMetadataServer(body);
              obj6.dispatch(obj10);
              obj9 = closure_133_1(closure_133_2[5]);
              const store_listings = closure_132_15.body.store_listings;
              let storeListings = store_listings;
              if (store_listings == null) {
                storeListings = [];
              }
              let obj11 = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings };
              obj9.dispatch(obj11);
              let result2 = closure_132_14;
              if (closure_132_14) {
                obj11 = closure_133_0(closure_133_2[7]);
                result2 = obj11.isTestModeForApplication(closure_132_17.applicationId);
              }
              c8 = 4;
              c9 = 1;
              const obj12 = { value: closure_133_12(closure_132_0, closure_132_1, { forceFetch: true }), done: false };
              return obj12;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            obj = { value, done: true };
            return obj;
          }
          c7 = 0;
        }
        c9 = 3;
      }
    } catch (tmp133) {
      closure_6 = tmp133;
      if (tmp4 === c7) {
        c9 = tmp2;
        throw tmp133;
      } else {
        c8 = tmp;
      }
    }
  }
};
function _fetchSocialLayerStorefrontSkuWithUrl() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _fetchSocialLayerStorefrontSkuWithUrl2(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let obj1 = closure_2;
          if (closure_2 === undefined) {
            obj1 = {};
          }
          closure_131_2 = obj1;
          let withGoogleSkuIds;
          closure_131_4 = undefined;
          let countryCode;
          let paymentGateway;
          closure_131_7 = undefined;
          let promotionIdOverride;
          closure_131_9 = undefined;
          let store_listing;
          let storefront_metadata;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          withGoogleSkuIds = closure_131_2.withGoogleSkuIds;
          let tmp35 = undefined !== withGoogleSkuIds;
          if (tmp35) {
            tmp35 = withGoogleSkuIds;
          }
          closure_131_4 = tmp35;
          countryCode = closure_131_2.countryCode;
          paymentGateway = closure_131_2.paymentGateway;
          c6 = 1;
          let obj8 = closure_132_1(closure_132_2[5]);
          let obj3 = { type: "STORE_LISTINGS_FETCH_START", skuId: closure_131_0 };
          obj8.dispatch(obj3);
          closure_131_7 = {};
          if (closure_131_4) {
            closure_131_7.with_google_sku_ids = true;
          }
          if (!obj11.isNullOrEmpty(countryCode)) {
            closure_131_7.country_code = countryCode;
          }
          if (null != paymentGateway) {
            closure_131_7.payment_gateway = paymentGateway;
          }
          promotionIdOverride = closure_132_4.getPromotionIdOverride();
          if (null != promotionIdOverride) {
            closure_131_7.promotion_id_override = promotionIdOverride;
          }
          const HTTP = closure_132_0(closure_132_2[8]).HTTP;
          const request = { url: closure_131_1, query: closure_131_7, rejectWithError: true };
          c7 = 3;
          c8 = 1;
          const obj4 = { value: HTTP.get(request), done: false };
          return obj4;
        }
      } else {
        if (2 === tmp7) {
          c6 = 0;
          let obj6 = closure_132_1(closure_132_2[5]);
          const obj5 = { type: "STORE_LISTINGS_FETCH_FAIL", skuId: closure_131_0 };
          obj6.dispatch(obj5);
          c8 = 3;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          obj6 = { value, done: true };
          return obj6;
        } else {
          closure_131_9 = value;
          if (null != closure_131_9.body) {
            store_listing = closure_131_9.body.store_listing;
            storefront_metadata = closure_131_9.body.storefront_metadata;
            const obj7 = { type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS", assets: null };
            const _Object = Object;
            const assets = closure_131_9.body.assets;
            obj7.assets = Object.fromEntries(
              assets.map((id) => {
                const items = [id.id, id];
                return items;
              }),
            );
            closure_132_1(closure_132_2[5]).dispatch(obj7);
            if (null != storefront_metadata) {
              obj = closure_132_1(closure_132_2[5]);
              obj8 = {
                type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
                applicationId: store_listing.sku.application_id,
                storefrontMetadata: null,
              };
              obj2 = closure_132_0(closure_132_2[6]);
              obj8.storefrontMetadata = obj2.transformStorefrontMetadataServer(storefront_metadata);
              obj.dispatch(obj8);
            }
            obj3 = closure_132_1(closure_132_2[5]);
            const obj9 = { type: "STORE_LISTING_FETCH_SUCCESS", storeListing: store_listing };
            obj3.dispatch(obj9);
            c6 = 0;
            const obj18 = closure_132_1(closure_132_2[5]);
          }
        }
        const _Error = Error;
        const error = new Error("Failed to fetch social layer storefront SKU");
        throw error;
      }
    } catch (tmp76) {
      closure_5 = tmp76;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp76;
      } else {
        c7 = tmp;
      }
    }
  }
};
function getOrCreateBackoff(get, arg1) {
  value = get.get(arg1);
  if (null == value) {
    const tmp8 = new BackoffDefault(closure_17, closure_18);
    const result = get.set(arg1, tmp8);
    value = tmp8;
  }
  return value;
}
let closure_22 = async function _fetchSocialLayerStorefrontEntries(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          let body;
          storefrontEntries = storefrontEntries.getStorefrontEntries(closure_0);
          let state;
          if (storefrontEntries != null) {
            state = storefrontEntries.state;
          }
          if ("loading" !== state) {
            const tmp53 = getOrCreateBackoff(map, tmp48);
            closure_129_1 = tmp53;
            let state1;
            if (storefrontEntries != null) {
              state1 = storefrontEntries.state;
            }
            if ("error" !== state1) {
              let state2;
              if (storefrontEntries != null) {
                state2 = storefrontEntries.state;
              }
              if ("fetched" === state2) {
                const _Date2 = Date;
              }
              c4 = 1;
              let obj3 = DispatcherDefault;
              let obj1 = { type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD", applicationId: tmp48 };
              obj3.dispatch(obj1);
              const HTTP = require("HTTPUtils").HTTP;
              const obj2 = { url: Endpoints.SOCIAL_LAYER_STOREFRONTS_ALL(tmp48), rejectWithError: true, retries: 3 };
              c5 = 2;
              c6 = 1;
              obj3 = { value: HTTP.get(obj2), done: false };
              return obj3;
            } else {
              const _Date = Date;
            }
          }
        }
      } else {
        if (1 === tmp8) {
          c4 = 0;
          closure_129_1.fail();
          obj1 = closure_130_1(closure_130_2[5]);
          const obj4 = { type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_FAILURE", applicationId: closure_129_0 };
          obj1.dispatch(obj4);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          body = value.body;
          closure_129_1.succeed();
          const obj5 = {
            type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_SUCCESS",
            applicationId: closure_129_0,
            entries: body.map(closure_130_0(closure_130_2[6]).transformSlayerApplicationStorefrontSummaryServer),
          };
          closure_130_1(closure_130_2[5]).dispatch(obj5);
          c4 = 0;
          const obj10 = closure_130_1(closure_130_2[5]);
        }
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
        return obj;
      }
      c6 = 3;
    } catch (tmp28) {
      closure_3 = tmp28;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp28;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_23 = async function _fetchSocialLayerStorefrontById(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          let body;
          closure_131_5 = undefined;
          storefrontById = storefrontById.getStorefrontById(closure_1);
          let state;
          if (storefrontById != null) {
            state = storefrontById.state;
          }
          if ("loading" !== state) {
            const tmp91 = getOrCreateBackoff(map1, tmp86);
            closure_131_2 = tmp91;
            let state1;
            if (storefrontById != null) {
              state1 = storefrontById.state;
            }
            if ("error" === state1) {
              if (null != storefrontById.fetchedAt) {
                const _Date = Date;
              }
            }
            let state2;
            if (storefrontById != null) {
              state2 = storefrontById.state;
            }
            if ("fetched" === state2) {
              if (null != storefrontById.fetchedAt) {
                const _Date2 = Date;
              }
            }
            c6 = 1;
            const obj1 = { type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD", storefrontId: tmp86 };
            DispatcherDefault.dispatch(obj1);
            const obj2 = {};
            if (obj17.isTestModeForApplication(tmp85)) {
              obj2.test_mode = true;
            }
            promotionIdOverride = promotionIdOverride.getPromotionIdOverride();
            if (null != promotionIdOverride) {
              obj2.promotion_id_override = promotionIdOverride;
            }
            const HTTP = require("HTTPUtils").HTTP;
            const request = {
              url: Endpoints.SOCIAL_LAYER_STOREFRONT_BY_ID(tmp85, tmp86),
              query: obj2,
              rejectWithError: true,
              retries: 3,
            };
            c7 = 2;
            c8 = 1;
            let obj3 = { value: HTTP.get(request), done: false };
            return obj3;
          }
        }
      } else {
        if (1 === tmp8) {
          c6 = 0;
          closure_131_2.fail();
          const obj4 = { type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_FAILURE", storefrontId: closure_131_1 };
          closure_132_1(closure_132_2[5]).dispatch(obj4);
          if (closure_132_5.getPreviewStorefrontId(closure_131_0) === closure_131_1) {
            closure_132_24(closure_131_0, null);
          }
          const obj12 = closure_132_1(closure_132_2[5]);
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_131_3 = value;
          body = closure_131_3.body;
          closure_131_5 = closure_132_0(closure_132_2[6]).transformSlayerApplicationStorefrontServer(body);
          if (null != closure_131_5.storefrontPricing) {
            obj = closure_132_1(closure_132_2[5]);
            let obj5 = { type: "SKUS_PRICING_FETCH_SUCCESS", priceId: null, data: null };
            const obj6 = { type: "application", applicationId: closure_131_5.applicationId };
            obj5.priceId = obj6;
            obj5.data = closure_131_5.storefrontPricing;
            obj.dispatch(obj5);
          }
          obj3 = closure_132_1(closure_132_2[5]);
          let obj7 = {
            type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_SUCCESS",
            storefrontId: closure_131_1,
            storefront: closure_131_5,
          };
          obj3.dispatch(obj7);
          obj5 = closure_132_1(closure_132_2[5]);
          let obj8 = {
            type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS",
            applicationId: closure_131_5.applicationId,
            storefrontMetadata: null,
          };
          obj7 = closure_132_0(closure_132_2[6]);
          obj8.storefrontMetadata = obj7.transformStorefrontMetadataServer(body);
          obj5.dispatch(obj8);
          obj8 = closure_132_1(closure_132_2[5]);
          const store_listings = closure_131_3.body.store_listings;
          let storeListings = store_listings;
          if (store_listings == null) {
            storeListings = [];
          }
          const obj9 = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings };
          obj8.dispatch(obj9);
          closure_131_2.succeed();
          c6 = 0;
          const obj22 = closure_132_0(closure_132_2[6]);
        }
        c6 = 0;
        c8 = 3;
        const obj10 = { value, done: true };
        return obj10;
      }
      c8 = 3;
    } catch (tmp64) {
      closure_5 = tmp64;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp64;
      } else {
        c7 = tmp;
      }
    }
  }
};
function setSocialLayerStorefrontPreview(applicationId, storefrontId) {
  const obj = { type: "SOCIAL_LAYER_STOREFRONT_SET_PREVIEW", applicationId, storefrontId };
  obj.dispatch(obj);
}
let closure_25 = async function _fetchSocialLayerStorefrontAnnouncement(guildId) {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    closure_2 = tmp3;
    closure_129_0 = guildId;
    DispatcherDefault.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START", guildId });
    const HTTP = require("HTTPUtils").HTTP;
    let obj2 = { url: Endpoints.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(guildId), rejectWithError: true };
    await HTTP.get(obj2);
    if (1 === tmp7) {
      c4 = 0;
      let obj5 = closure_130_1(closure_130_2[5]);
      obj5.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE", guildId: closure_129_0 });
      c6 = 3;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const body = value.body;
      if ("guild-discord-announcement" === body.type) {
        obj5 = {
          type: "guild-discord-announcement",
          id: body.id,
          applicationId: body.application_id,
          applicationName: body.application_name,
          assetFullyQualifiedURL: body.asset_fully_qualified_url,
          videoAssetFullyQualifiedURL: body.video_asset_fully_qualified_url,
          popoverTitle: body.popover_title,
          popoverBody: body.popover_body,
          popoverCta: body.popover_cta,
        };
        let obj = obj5;
      } else {
        obj = {
          type: "guild-application-announcement",
          id: body.id,
          applicationId: body.application_id,
          applicationName: body.application_name,
          assetId: body.asset_id,
          backgroundImageAssetId: body.background_image_asset_id,
        };
      }
      closure_129_2 = obj;
      obj2 = closure_130_1(closure_130_2[5]);
      obj2.dispatch({
        type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS",
        guildId: closure_129_0,
        announcement: closure_129_2,
      });
      c4 = 0;
    }
    return value;
  })();
};
let closure_26 = async function _fetchSocialLayerStorefrontConfig(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          let body;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          configFetchState = configFetchState.getConfigFetchState();
          if ("loading" !== configFetchState.state) {
            if ("success" !== configFetchState.state) {
              if ("error" === configFetchState.state) {
                const _Date3 = Date;
              }
              c3 = 1;
              DispatcherDefault.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START" });
              const HTTP = require("HTTPUtils").HTTP;
              let obj1 = { url: constants.SOCIAL_LAYER_STOREFRONT_CONFIG, rejectWithError: true };
              c4 = 2;
              c5 = 1;
              const obj2 = { value: HTTP.get(obj1), done: false };
              return obj2;
            } else {
              const _Date2 = Date;
            }
          }
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          let obj5 = closure_130_1(closure_130_2[5]);
          obj5.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE" });
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          body = value.body;
          closure_129_1 = null;
          if (null != body.promotion_end_datetime) {
            let _Date = Date;
            let date = new Date(body.promotion_end_datetime);
            closure_129_2 = date;
            let _Number = Number;
            if (!Number.isNaN(closure_129_2.getTime())) {
              closure_129_1 = closure_129_2;
            }
          }
          const storefronts = body.storefronts;
          let mapped;
          if (storefronts != null) {
            mapped = storefronts.map((guildId) => {
              let date = null;
              if (null != guildId.promotion_end_datetime) {
                const _Date = Date;
                date = new Date(guildId.promotion_end_datetime);
              }
              let isNaNResult = null == date;
              if (!isNaNResult) {
                const _Number = Number;
                isNaNResult = Number.isNaN(date.getTime());
              }
              let tmp7 = null;
              if (!isNaNResult) {
                tmp7 = date;
              }
              const obj = {
                guildId: guildId.guild_id,
                applicationId: guildId.application_id,
                gameId: guildId.game_id,
                collectiblesShopNavigationEnabled: true === guildId.collectibles_shop_navigation_enabled,
                excludedPlatforms: null,
                disableMobileAccountLinking: null,
                promotionEndDatetime: null,
                allowOrbsSpending: null,
              };
              let excluded_platforms = guildId.excluded_platforms;
              if (excluded_platforms == null) {
                excluded_platforms = [];
              }
              obj.excludedPlatforms = excluded_platforms;
              obj.disableMobileAccountLinking = true === guildId.disable_mobile_account_linking;
              obj.promotionEndDatetime = tmp7;
              obj.allowOrbsSpending = true === guildId.allow_orbs_spending;
              return obj;
            });
          }
          closure_0 = mapped;
          if (mapped == null) {
            closure_0 = [];
          }
          closure_129_3 = closure_0;
          closure_129_4 = null;
          if (null != body.announcement_modal_config) {
            obj = {
              version: body.announcement_modal_config.version,
              applicationId: body.announcement_modal_config.application_id,
            };
            closure_129_4 = obj;
          }
          obj1 = closure_130_1(closure_130_2[5]);
          const obj3 = { type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS", config: null };
          const obj4 = {
            promotionalSkuIds: body.promotional_sku_ids,
            promotionEndDatetime: closure_129_1,
            storefronts: closure_129_3,
            announcementModalConfig: closure_129_4,
          };
          obj3.config = obj4;
          obj1.dispatch(obj3);
          c3 = 0;
        }
        c3 = 0;
        c5 = 3;
        obj5 = { value, done: true };
        return obj5;
      }
      c5 = 3;
    } catch (tmp47) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp47;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_27 = async function _fetchSocialLayerStorefrontLaunchAnnouncement() {
  closure_9 = tmp3;
  const HTTP = require("HTTPUtils").HTTP;
  await HTTP.get({ url: constants.SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT, rejectWithError: true });
  if (1 === tmp7) {
    c11 = 0;
    let obj3 = closure_137_1(closure_137_2[5]);
    obj3.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_FAILURE" });
    c13 = 3;
  } else if (arg0 === 1) {
    c13 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    const body = arg1.body;
    c0 = body;
    if (body == null) {
      c0 = null;
    }
    closure_136_0 = c0;
    closure_136_1 = null;
    if (null != closure_136_0) {
      obj3 = {
        applicationId: closure_136_0.application_id,
        lightThemeLogoUrl: null,
        darkThemeLogoUrl: null,
        backgroundUrl: null,
        titles: null,
        subtitle: null,
        features: null,
        buttonText: null,
      };
      const light_theme_logo_url = closure_136_0.light_theme_logo_url;
      let lightThemeLogoUrl = light_theme_logo_url;
      if (light_theme_logo_url == null) {
        lightThemeLogoUrl = null;
      }
      obj3.lightThemeLogoUrl = lightThemeLogoUrl;
      const dark_theme_logo_url = closure_136_0.dark_theme_logo_url;
      let darkThemeLogoUrl = dark_theme_logo_url;
      if (dark_theme_logo_url == null) {
        darkThemeLogoUrl = null;
      }
      obj3.darkThemeLogoUrl = darkThemeLogoUrl;
      const background_url = closure_136_0.background_url;
      let backgroundUrl = background_url;
      if (background_url == null) {
        backgroundUrl = null;
      }
      obj3.backgroundUrl = backgroundUrl;
      let titles = closure_136_0.titles;
      if (titles == null) {
        titles = null;
      }
      obj3.titles = titles;
      let subtitle = closure_136_0.subtitle;
      if (subtitle == null) {
        subtitle = null;
      }
      obj3.subtitle = subtitle;
      let features = closure_136_0.features;
      let mapped;
      if (features != null) {
        mapped = features.map((assetUrl) => ({
          assetUrl: assetUrl.asset_url,
          title: assetUrl.title,
          subtitle: assetUrl.subtitle,
        }));
      }
      features = mapped;
      if (mapped == null) {
        features = null;
      }
      obj3.features = features;
      const button_text = closure_136_0.button_text;
      let buttonText = button_text;
      if (button_text == null) {
        buttonText = null;
      }
      obj3.buttonText = buttonText;
      closure_136_1 = obj3;
    }
    closure_137_1(closure_137_2[5]).dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_SUCCESS",
      config: closure_136_1,
    });
    c11 = 0;
    closure_137_1(closure_137_2[5]);
  }
  return arg1;
};
const Endpoints = fn(1074).Endpoints;
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx");

export { _fetchSocialLayerStorefront };
export const fetchSocialLayerStorefrontForApplication = function fetchSocialLayerStorefrontForApplication(
  applicationId,
  arg1,
) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  obj = { type: "application", applicationId };
  return _fetchSocialLayerStorefront(obj, Endpoints.SOCIAL_LAYER_STOREFRONT_BY_APPLICATION_ID(applicationId), obj);
};
export const fetchSocialLayerStorefront = function fetchSocialLayerStorefront(guildId, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  obj = { type: "guild", guildId };
  return _fetchSocialLayerStorefront(obj, Endpoints.SOCIAL_LAYER_APPLICATION_STOREFRONT(guildId), obj);
};
export const fetchSocialLayerStorefrontSkuForApplication = function fetchSocialLayerStorefrontSkuForApplication(
  applicationId,
  id,
  arg2,
) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  return _fetchSocialLayerStorefrontSkuWithUrl(
    id,
    Endpoints.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_BY_APPLICATION_ID(applicationId, id),
    obj,
  );
};
export const fetchSocialLayerStorefrontSku = function fetchSocialLayerStorefrontSku(arg0, id, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  return _fetchSocialLayerStorefrontSkuWithUrl(id, Endpoints.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(arg0, id), obj);
};
export const setSocialLayerStorefrontState = function setSocialLayerStorefrontState(applicationId, pageIndex, skuId) {
  const obj = { type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", applicationId, pageIndex, skuId };
  obj.dispatch(obj);
};
export const fetchSocialLayerStorefrontEntries = function fetchSocialLayerStorefrontEntries() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchSocialLayerStorefrontById = function fetchSocialLayerStorefrontById() {
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { setSocialLayerStorefrontPreview };
export const fetchSocialLayerStorefrontAnnouncement = function fetchSocialLayerStorefrontAnnouncement() {
  const self = this;
  const apply = closure_25.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchSocialLayerStorefrontConfig = function fetchSocialLayerStorefrontConfig() {
  const self = this;
  const apply = closure_26.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchSocialLayerSKUPurchaseEligibility = function fetchSocialLayerSKUPurchaseEligibility(arg0, skuId) {
  _require = skuId;
  const sKUEligibility = SocialLayerStorefrontStore.getSKUEligibility(skuId);
  let tmp2 = "checking" !== sKUEligibility;
  if (tmp2) {
    tmp2 = "eligible" !== sKUEligibility;
  }
  if (tmp2) {
    tmp2 = "ineligible" !== sKUEligibility;
  }
  if (tmp2) {
    let obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId };
    obj.dispatch(obj);
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      if ("checking" === SocialLayerStorefrontStore.getSKUEligibility(skuId)) {
        const obj = {
          type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE",
          skuId,
          reason: "interaction_deadline",
        };
        obj.dispatch(obj);
      }
    }, closure_11);
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: Endpoints.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(arg0, skuId), rejectWithError: true };
    const postResult = HTTP.post(obj);
    HTTP.post(obj)
      .then((body) => {
        const obj = {
          type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE",
          skuId,
          interactionId: body.body.interaction_id,
        };
        obj.dispatch(obj);
      })
      .catch((error) => {
        const obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE", skuId, httpStatus: null };
        let status;
        if (error != null) {
          status = error.status;
        }
        obj.httpStatus = status;
        obj.dispatch(obj);
      });
    const nextPromise = HTTP.post(obj).then((body) => {
      const obj = {
        type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE",
        skuId,
        interactionId: body.body.interaction_id,
      };
      obj.dispatch(obj);
    });
  }
};
export const fetchSocialLayerStorefrontLaunchAnnouncement = function fetchSocialLayerStorefrontLaunchAnnouncement() {
  const self = this;
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
