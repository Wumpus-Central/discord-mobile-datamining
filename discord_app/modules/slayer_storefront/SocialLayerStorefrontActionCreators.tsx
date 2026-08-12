// discord_app/modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx
import dispatcher from "dispatcher";
import getPromotionIdOverride from "getPromotionIdOverride";
import handleUserSettingsStoreUpdate from "handleUserSettingsStoreUpdate";
import { Endpoints } from "ME";
import { fails } from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../Dispatcher.tsx";

const require = arg1;
function _fetchSocialLayerStorefront(arg0, Endpoints, arg2) {
  const self = this;
  const apply = _fetchSocialLayerStorefront2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSocialLayerStorefront2() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    const iter = (function*(arg0, arg1) {
      if (c9 === 2) {
        c9 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp5;
        throwTypeErrorResult = null;
        throwTypeErrorResult = globalThis;
        if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c9 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let forceFetch = tmp3;
                let promotionIdOverride = tmp7;
                let obj1;
                throwTypeErrorResult = lib;
                throwTypeErrorResult = callback;
                if (obj1 === undefined) {
                  obj1 = {};
                }
                let eager;
                promotionIdOverride = undefined;
                forceFetch = undefined;
                let c6;
                let storefrontFetchState;
                c8 = undefined;
                c9 = undefined;
                let c10;
                let applicationId;
                let callback2;
                let promotionIdOverride2;
                let c14;
                let closure_15;
                let body;
                let closure_17;
                c8 = 1;
                c9 = 1;
                return { value: "ct", done: true };
              }
            } else {
              if (1 === tmp7) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c9 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  throwTypeErrorResult = promotionIdOverride;
                  throwTypeErrorResult = obj1;
                  eager = obj1.eager;
                  throwTypeErrorResult = eager;
                  let tmp55 = undefined !== eager;
                  if (tmp55) {
                    tmp55 = eager;
                  }
                  promotionIdOverride = tmp55;
                  forceFetch = obj1.forceFetch;
                  let tmp59 = undefined !== forceFetch;
                  if (tmp59) {
                    tmp59 = forceFetch;
                  }
                  c6 = tmp59;
                  storefrontFetchState = forceFetch.getStorefrontFetchState(lib);
                  let state;
                  if (storefrontFetchState != null) {
                    state = storefrontFetchState.state;
                  }
                  c8 = "loading" === state;
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
                    tmp68 = Date.now() - storefrontFetchState.fetchedAt < storefrontFetchState;
                  }
                  c9 = tmp68;
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
                    tmp77 = Date.now() - storefrontFetchState.fetchedAt < c8;
                  }
                  c10 = tmp77;
                  if (!c8) {
                    storefrontFetchState = 1;
                    const obj3 = { type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildOrApplicationId: null };
                    obj3[1] = lib;
                    callback(obj1[5]).dispatch(obj3);
                    if ("application" === lib.type) {
                      throwTypeErrorResult = promotionIdOverride;
                      throwTypeErrorResult = lib;
                      applicationId = lib.applicationId;
                    } else {
                      applicationId = lib(obj1[6]).getSocialLayerStorefrontApplicationId(lib.guildId);
                      const obj19 = lib(obj1[6]);
                    }
                    throwTypeErrorResult = promotionIdOverride;
                    callback2 = {};
                    throwTypeErrorResult = applicationId;
                    throwTypeErrorResult = null != applicationId;
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = promotionIdOverride;
                      throwTypeErrorResult = forceFetch;
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = obj1;
                      throwTypeErrorResult = applicationId;
                      throwTypeErrorResult = lib(obj1[7]).isTestModeForApplication(applicationId);
                      const obj20 = lib(obj1[7]);
                    }
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = promotionIdOverride;
                      throwTypeErrorResult = callback2;
                      callback2.test_mode = true;
                    }
                    throwTypeErrorResult = promotionIdOverride;
                    throwTypeErrorResult = forceFetch;
                    throwTypeErrorResult = promotionIdOverride;
                    promotionIdOverride2 = promotionIdOverride.getPromotionIdOverride();
                    throwTypeErrorResult = promotionIdOverride2;
                    if (null != promotionIdOverride2) {
                      throwTypeErrorResult = promotionIdOverride;
                      throwTypeErrorResult = callback2;
                      throwTypeErrorResult = promotionIdOverride2;
                      callback2.promotion_id_override = promotionIdOverride2;
                    }
                    throwTypeErrorResult = promotionIdOverride;
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = "guild" === lib.type;
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = promotionIdOverride;
                      throwTypeErrorResult = applicationId;
                      throwTypeErrorResult = null == applicationId;
                    }
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = forceFetch;
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = obj1;
                      throwTypeErrorResult = lib(obj1[7]).isAnyApplicationInTestMode();
                      const obj21 = lib(obj1[7]);
                    }
                    throwTypeErrorResult = promotionIdOverride;
                    throwTypeErrorResult = forceFetch;
                    c14 = throwTypeErrorResult;
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = obj1;
                    const HTTP = lib(obj1[8]).HTTP;
                    let obj4 = { url: null, query: null, rejectWithError: true, retries: 3 };
                    throwTypeErrorResult = callback;
                    obj4[0] = callback;
                    throwTypeErrorResult = callback2;
                    obj4[1] = callback2;
                    c8 = 3;
                    c9 = 1;
                    const obj5 = { value: null, done: false };
                    obj5[0] = HTTP.get(obj4);
                    return obj5;
                  }
                }
              } else if (2 === tmp7) {
                storefrontFetchState = 0;
                let obj6 = { type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE", guildOrApplicationId: null, eager: null };
                obj6[1] = lib;
                obj6[2] = promotionIdOverride;
                callback(obj1[5]).dispatch(obj6);
                const obj15 = callback(obj1[5]);
              } else {
                if (3 === tmp7) {
                  if (arg0 === 1) {
                    c9 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    storefrontFetchState = 0;
                    c9 = 3;
                    const obj7 = { value: null, done: true };
                    obj7[0] = arg1;
                    return obj7;
                  } else {
                    throwTypeErrorResult = promotionIdOverride;
                    throwTypeErrorResult = forceFetch;
                    closure_15 = arg1;
                    throwTypeErrorResult = closure_15;
                    body = closure_15.body;
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = body;
                    closure_17 = lib(obj1[6]).transformSlayerApplicationStorefrontServer(body);
                    throwTypeErrorResult = closure_17;
                    if (null != closure_17.storefrontPricing) {
                      obj1 = callback(obj1[5]);
                      let obj8 = { type: "SKUS_PRICING_FETCH_SUCCESS", priceId: null, data: null };
                      let obj9 = { type: "application", applicationId: null };
                      obj9[1] = closure_17.applicationId;
                      obj8[1] = obj9;
                      obj8[2] = closure_17.storefrontPricing;
                      obj1.dispatch(obj8);
                    }
                    obj4 = callback(obj1[5]);
                    const obj10 = { type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS", guildOrApplicationId: null, storefront: null };
                    obj10[1] = lib;
                    obj10[2] = closure_17;
                    obj4.dispatch(obj10);
                    obj6 = callback(obj1[5]);
                    let obj11 = { type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS", applicationId: null, storefrontMetadata: null };
                    obj11[1] = closure_17.applicationId;
                    obj8 = lib(obj1[6]);
                    obj11[2] = obj8.transformStorefrontMetadataServer(body);
                    obj6.dispatch(obj11);
                    obj9 = callback(obj1[5]);
                    const store_listings = closure_15.body.store_listings;
                    eager = store_listings;
                    if (store_listings == null) {
                      eager = [];
                    }
                    const obj12 = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: null };
                    obj12[1] = eager;
                    obj9.dispatch(obj12);
                    let result = c14;
                    if (c14) {
                      obj11 = lib(obj1[7]);
                      result = obj11.isTestModeForApplication(closure_17.applicationId);
                    }
                    c8 = 4;
                    c9 = 1;
                    const obj13 = { value: null, done: false };
                    obj13[0] = callback2(lib, callback, { forceFetch: true });
                    return obj13;
                  }
                } else if (arg0 === 1) {
                  c9 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  storefrontFetchState = 0;
                  c9 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                }
                storefrontFetchState = 0;
              }
              c9 = 3;
            }
          } catch (throwTypeErrorResult) {
            c6 = throwTypeErrorResult;
            throwTypeErrorResult = storefrontFetchState;
            if (tmp4 === storefrontFetchState) {
              throwTypeErrorResult = tmp2;
              c9 = tmp2;
              throw throwTypeErrorResult;
            } else {
              c8 = throwTypeErrorResult;
            }
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _fetchSocialLayerStorefront2 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSocialLayerStorefrontSkuWithUrl(id, Endpoints, arg2) {
  const self = this;
  const apply = _fetchSocialLayerStorefrontSkuWithUrl2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSocialLayerStorefrontSkuWithUrl2() {
  const self = this;
  let tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (function*(arg0, arg1) {
      if (promotionIdOverride2 === 2) {
        promotionIdOverride2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          promotionIdOverride2 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              promotionIdOverride2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              promotionIdOverride2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let promotionIdOverride = tmp3;
              let withGoogleSkuIds = tmp7;
              let obj1;
              if (obj1 === undefined) {
                obj1 = {};
              }
              withGoogleSkuIds = undefined;
              promotionIdOverride = undefined;
              let countryCode;
              let paymentGateway;
              c7 = undefined;
              promotionIdOverride2 = undefined;
              let closure_9;
              let store_listing;
              let storefront_metadata;
              c7 = 1;
              promotionIdOverride2 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              promotionIdOverride2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              promotionIdOverride2 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              let tmp = obj1;
              withGoogleSkuIds = obj1.withGoogleSkuIds;
              tmp = withGoogleSkuIds;
              let tmp44 = undefined !== withGoogleSkuIds;
              if (tmp44) {
                tmp44 = withGoogleSkuIds;
              }
              promotionIdOverride = tmp44;
              countryCode = obj1.countryCode;
              paymentGateway = obj1.paymentGateway;
              paymentGateway = 1;
              let obj10 = callback2(obj1[5]);
              const obj3 = { type: "STORE_LISTINGS_FETCH_START", skuId: null };
              obj3[1] = callback;
              obj10.dispatch(obj3);
              c7 = {};
              if (promotionIdOverride) {
                c7.with_google_sku_ids = true;
              }
              if (!obj13.isNullOrEmpty(countryCode)) {
                c7.country_code = countryCode;
              }
              if (null != paymentGateway) {
                c7.payment_gateway = paymentGateway;
              }
              promotionIdOverride2 = promotionIdOverride.getPromotionIdOverride();
              if (null != promotionIdOverride2) {
                c7.promotion_id_override = promotionIdOverride2;
              }
              const HTTP = callback(obj1[8]).HTTP;
              let obj4 = { url: null, query: null, rejectWithError: true };
              obj4[0] = callback2;
              obj4[1] = c7;
              c7 = 3;
              promotionIdOverride2 = 1;
              let obj5 = { value: null, done: false };
              obj5[0] = HTTP.get(obj4);
              return obj5;
            }
          } else {
            if (2 === tmp7) {
              paymentGateway = 0;
              let obj8 = callback2(obj1[5]);
              const obj6 = { type: "STORE_LISTINGS_FETCH_FAIL", skuId: null };
              obj6[1] = callback;
              obj8.dispatch(obj6);
              promotionIdOverride2 = 3;
            } else if (arg0 === 1) {
              promotionIdOverride2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              paymentGateway = 0;
              promotionIdOverride2 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = arg1;
              return obj7;
            } else {
              closure_9 = arg1;
              if (null != closure_9.body) {
                if (closure_9.ok) {
                  store_listing = closure_9.body.store_listing;
                  storefront_metadata = closure_9.body.storefront_metadata;
                  obj = callback2(obj1[5]);
                  obj8 = { type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS", assets: null };
                  const _Object = Object;
                  const assets = closure_9.body.assets;
                  obj8[1] = Object.fromEntries(assets.map((id) => {
                    const items = [id.id, id];
                    return items;
                  }));
                  obj.dispatch(obj8);
                  if (null != storefront_metadata) {
                    obj2 = callback2(obj1[5]);
                    const obj9 = { type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS", applicationId: null, storefrontMetadata: null };
                    obj9[1] = store_listing.sku.application_id;
                    obj4 = callback(obj1[6]);
                    obj9[2] = obj4.transformStorefrontMetadataServer(storefront_metadata);
                    obj2.dispatch(obj9);
                  }
                  obj5 = callback2(obj1[5]);
                  obj10 = { type: "STORE_LISTING_FETCH_SUCCESS", storeListing: null };
                  obj10[1] = store_listing;
                  obj5.dispatch(obj10);
                  paymentGateway = 0;
                }
              }
            }
            const _Error = Error;
            const error = new Error("Failed to fetch social layer storefront SKU");
            throw error;
          }
        } catch (tmp85) {
          countryCode = tmp85;
          if (tmp4 === paymentGateway) {
            promotionIdOverride2 = tmp2;
            throw tmp85;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _fetchSocialLayerStorefrontSkuWithUrl2 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getOrCreateBackoff(get) {
  let value = get.get(arg1);
  if (null == value) {
    const tmp8 = new fails(closure_17, closure_18);
    const result = get.set(arg1, tmp8);
    value = tmp8;
  }
  return value;
}
function _fetchSocialLayerStorefrontEntries() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === storefrontEntries) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              body = tmp3;
              let lib = tmp5;
              lib = undefined;
              body = undefined;
              storefrontEntries = storefrontEntries.getStorefrontEntries(callback);
              let state;
              if (storefrontEntries != null) {
                state = storefrontEntries.state;
              }
              if ("loading" !== state) {
                const tmp54 = outer1_19(outer1_20, tmp49);
                lib = tmp54;
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
                  let c4 = 1;
                  let obj3 = outer1_1(outer1_2[5]);
                  let obj1 = { type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD", applicationId: null };
                  obj1[1] = tmp49;
                  obj3.dispatch(obj1);
                  const HTTP = callback(outer1_2[8]).HTTP;
                  const obj2 = { url: null, rejectWithError: true, retries: 3 };
                  obj2[0] = c6.SOCIAL_LAYER_STOREFRONTS_ALL(tmp49);
                  storefrontEntries = 2;
                  c6 = 1;
                  obj3 = { value: null, done: false };
                  obj3[0] = HTTP.get(obj2);
                  return obj3;
                } else {
                  const _Date = Date;
                }
              }
            }
          } else {
            if (1 === tmp8) {
              c4 = 0;
              lib.fail();
              obj1 = lib(body[5]);
              const obj4 = { type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_FAILURE", applicationId: null };
              obj4[1] = callback;
              obj1.dispatch(obj4);
            } else if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 !== 2) {
              body = body.body;
              lib.succeed();
              const obj5 = { type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_SUCCESS", applicationId: null, entries: null };
              obj5[1] = callback;
              obj5[2] = body.map(callback(body[6]).transformSlayerApplicationStorefrontSummaryServer);
              lib(body[5]).dispatch(obj5);
              c4 = 0;
              const obj10 = lib(body[5]);
            }
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          }
          c6 = 3;
        } catch (tmp28) {
          let dispatcher = tmp28;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp28;
          } else {
            storefrontEntries = tmp;
          }
        }
      }
    })();
  });
  const _fetchSocialLayerStorefrontEntries = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSocialLayerStorefrontById() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, arg1) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let body = tmp3;
              let dispatcher = tmp5;
              let closure_2;
              dispatcher = undefined;
              body = undefined;
              let previewStorefrontId;
              const storefrontById = outer1_5.getStorefrontById(callback2);
              let state;
              if (storefrontById != null) {
                state = storefrontById.state;
              }
              if ("loading" !== state) {
                const tmp92 = outer1_19(outer1_21, tmp87);
                closure_2 = tmp92;
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
                let c6 = 1;
                const obj1 = { type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD", storefrontId: null };
                obj1[1] = tmp87;
                callback2(outer1_2[5]).dispatch(obj1);
                const obj2 = {};
                const obj14 = callback2(outer1_2[5]);
                if (obj17.isTestModeForApplication(tmp86)) {
                  obj2.test_mode = true;
                }
                const promotionIdOverride = outer1_4.getPromotionIdOverride();
                if (null != promotionIdOverride) {
                  obj2.promotion_id_override = promotionIdOverride;
                }
                const HTTP = callback(outer1_2[8]).HTTP;
                let obj3 = { url: null, query: null, rejectWithError: true, retries: 3 };
                obj3[0] = c6.SOCIAL_LAYER_STOREFRONT_BY_ID(tmp86, tmp87);
                obj3[1] = obj2;
                c7 = 2;
                c8 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = HTTP.get(obj3);
                return obj4;
              }
            }
          } else {
            if (1 === tmp8) {
              c6 = 0;
              closure_2.fail();
              let obj11 = callback2(closure_2[5]);
              let obj5 = { type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_FAILURE", storefrontId: null };
              obj5[1] = callback2;
              obj11.dispatch(obj5);
              if (previewStorefrontId.getPreviewStorefrontId(callback) === callback2) {
                callback3(callback, null);
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              dispatcher = arg1;
              body = dispatcher.body;
              previewStorefrontId = callback(closure_2[6]).transformSlayerApplicationStorefrontServer(body);
              if (null != previewStorefrontId.storefrontPricing) {
                obj = callback2(closure_2[5]);
                const obj6 = { type: "SKUS_PRICING_FETCH_SUCCESS", priceId: null, data: null };
                let obj7 = { type: "application", applicationId: null };
                obj7[1] = previewStorefrontId.applicationId;
                obj6[1] = obj7;
                obj6[2] = previewStorefrontId.storefrontPricing;
                obj.dispatch(obj6);
              }
              obj3 = callback2(closure_2[5]);
              let obj8 = { type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_SUCCESS", storefrontId: null, storefront: null };
              obj8[1] = callback2;
              obj8[2] = previewStorefrontId;
              obj3.dispatch(obj8);
              obj5 = callback2(closure_2[5]);
              const obj9 = { type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS", applicationId: null, storefrontMetadata: null };
              obj9[1] = previewStorefrontId.applicationId;
              obj7 = callback(closure_2[6]);
              obj9[2] = obj7.transformStorefrontMetadataServer(body);
              obj5.dispatch(obj9);
              obj8 = callback2(closure_2[5]);
              const store_listings = dispatcher.body.store_listings;
              closure_2 = store_listings;
              if (store_listings == null) {
                closure_2 = [];
              }
              const obj10 = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: null };
              obj10[1] = closure_2;
              obj8.dispatch(obj10);
              closure_2.succeed();
              c6 = 0;
              const obj22 = callback(closure_2[6]);
            }
            c6 = 0;
            c8 = 3;
            obj11 = { value: null, done: true };
            obj11[0] = arg1;
            return obj11;
          }
          c8 = 3;
        } catch (tmp64) {
          previewStorefrontId = tmp64;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp64;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  const _fetchSocialLayerStorefrontById = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function setSocialLayerStorefrontPreview(applicationId, storefrontId) {
  let obj = dispatcher;
  obj = { type: "SOCIAL_LAYER_STOREFRONT_SET_PREVIEW", applicationId, storefrontId };
  obj.dispatch(obj);
}
function _fetchSocialLayerStorefrontAnnouncement() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      let obj = tmp3;
      let c4 = 1;
      const obj1 = { type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START", guildId: null };
      obj1[1] = callback;
      outer1_1(outer1_2[5]).dispatch(obj1);
      const HTTP = callback(outer1_2[8]).HTTP;
      let obj2 = { url: null, rejectWithError: true };
      obj2[0] = c6.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(callback);
      yield HTTP.get(obj2);
      if (1 === tmp7) {
        c4 = 0;
        let obj5 = body(obj[5]);
        const obj4 = { type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE", guildId: null };
        obj4[1] = callback;
        obj5.dispatch(obj4);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw body;
      } else if (arg0 !== 2) {
        body = body.body;
        if ("guild-discord-announcement" === body.type) {
          obj5 = { type: "guild-discord-announcement", id: null, applicationId: null, applicationName: null, assetFullyQualifiedURL: null, videoAssetFullyQualifiedURL: null, popoverTitle: null, popoverBody: null, popoverCta: null };
          obj5[1] = body.id;
          obj5[2] = body.application_id;
          obj5[3] = body.application_name;
          obj5[4] = body.asset_fully_qualified_url;
          obj5[5] = body.video_asset_fully_qualified_url;
          obj5[6] = body.popover_title;
          obj5[7] = body.popover_body;
          obj5[8] = body.popover_cta;
          obj = obj5;
        } else {
          obj = { type: "guild-application-announcement", id: null, applicationId: null, applicationName: null, assetId: null, backgroundImageAssetId: null };
          obj[1] = body.id;
          obj[2] = body.application_id;
          obj[3] = body.application_name;
          obj[4] = body.asset_id;
          obj[5] = body.background_image_asset_id;
        }
        obj2 = body(obj[5]);
        const obj6 = { type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS", guildId: null, announcement: null };
        obj6[1] = callback;
        obj6[2] = obj;
        obj2.dispatch(obj6);
        c4 = 0;
      }
      c4 = 0;
      return body;
    })();
  });
  const _fetchSocialLayerStorefrontAnnouncement = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSocialLayerStorefrontConfig() {
  const self = this;
  const tmp = callback(function*() {
    if (configFetchState === 2) {
      configFetchState = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        configFetchState = 2;
        if (0 === obj) {
          if (arg0 === 1) {
            configFetchState = 3;
            throw arg1;
          } else if (arg0 === 2) {
            configFetchState = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let date = tmp3;
            let callback = tmp7;
            let body;
            callback = undefined;
            date = undefined;
            let c3;
            obj = undefined;
            configFetchState = configFetchState.getConfigFetchState();
            if ("loading" !== configFetchState.state) {
              if ("success" !== configFetchState.state) {
                if ("error" === configFetchState.state) {
                  const _Date3 = Date;
                }
                c3 = 1;
                outer1_1(outer1_2[5]).dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START" });
                const HTTP = outer1_0(outer1_2[8]).HTTP;
                let obj1 = { url: null, rejectWithError: true };
                obj1[0] = outer1_6.SOCIAL_LAYER_STOREFRONT_CONFIG;
                obj = 2;
                configFetchState = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = HTTP.get(obj1);
                return obj2;
              } else {
                const _Date2 = Date;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            let obj5 = callback(date[5]);
            obj5.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE" });
          } else if (arg0 === 1) {
            configFetchState = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            body = arg1.body;
            callback = null;
            if (null != body.promotion_end_datetime) {
              let _Date = Date;
              date = new Date(body.promotion_end_datetime);
              let _Number = Number;
              if (!Number.isNaN(date.getTime())) {
                callback = date;
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
                const obj = { guildId: guildId.guild_id, applicationId: guildId.application_id, gameId: guildId.game_id, collectiblesShopNavigationEnabled: true === guildId.collectibles_shop_navigation_enabled, excludedPlatforms: null, disableMobileAccountLinking: null, promotionEndDatetime: null, allowOrbsSpending: null };
                let excluded_platforms = guildId.excluded_platforms;
                if (excluded_platforms == null) {
                  excluded_platforms = [];
                }
                obj[4] = excluded_platforms;
                obj[5] = true === guildId.disable_mobile_account_linking;
                obj[6] = tmp7;
                obj[7] = true === guildId.allow_orbs_spending;
                return obj;
              });
            }
            body = mapped;
            if (mapped == null) {
              body = [];
            }
            c3 = body;
            obj = null;
            if (null != body.announcement_modal_config) {
              obj = { version: null, applicationId: null };
              obj[0] = body.announcement_modal_config.version;
              obj[1] = body.announcement_modal_config.application_id;
            }
            obj1 = callback(date[5]);
            const obj3 = { type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS", config: null };
            const obj4 = { promotionalSkuIds: null, promotionEndDatetime: null, storefronts: null, announcementModalConfig: null };
            obj4[0] = body.promotional_sku_ids;
            obj4[1] = callback;
            obj4[2] = c3;
            obj4[3] = obj;
            obj3[1] = obj4;
            obj1.dispatch(obj3);
            c3 = 0;
          }
          c3 = 0;
          configFetchState = 3;
          obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        }
        configFetchState = 3;
      } catch (tmp47) {
        if (tmp4 === c3) {
          configFetchState = tmp2;
          throw tmp47;
        } else {
          obj = tmp;
        }
      }
    }
  });
  const _fetchSocialLayerStorefrontConfig = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSocialLayerStorefrontLaunchAnnouncement() {
  const self = this;
  const tmp = callback(function*() {
    let closure_9 = tmp3;
    let c11 = 1;
    const HTTP = outer1_0(outer1_2[8]).HTTP;
    const obj1 = { url: null, rejectWithError: true };
    obj1[0] = outer1_6.SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT;
    yield HTTP.get(obj1);
    if (1 === tmp7) {
      c11 = 0;
      obj3 = obj3(709);
      obj3.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_FAILURE" });
      let c13 = 3;
    } else if (arg0 === 1) {
      c13 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      const body = arg1.body;
      let closure_0 = body;
      if (body == null) {
        closure_0 = null;
      }
      obj3 = null;
      if (null != closure_0) {
        obj3 = { applicationId: null, lightThemeLogoUrl: null, darkThemeLogoUrl: null, backgroundUrl: null, titles: null, subtitle: null, features: null, buttonText: null };
        obj3[0] = closure_0.application_id;
        const light_theme_logo_url = closure_0.light_theme_logo_url;
        obj3 = light_theme_logo_url;
        if (light_theme_logo_url == null) {
          obj3 = null;
        }
        obj3[1] = obj3;
        const dark_theme_logo_url = closure_0.dark_theme_logo_url;
        let dependencyMap = dark_theme_logo_url;
        if (dark_theme_logo_url == null) {
          dependencyMap = null;
        }
        obj3[2] = dependencyMap;
        const background_url = closure_0.background_url;
        let c3 = background_url;
        if (background_url == null) {
          c3 = null;
        }
        obj3[3] = c3;
        const titles = closure_0.titles;
        let c4 = titles;
        if (titles == null) {
          c4 = null;
        }
        obj3[4] = c4;
        const subtitle = closure_0.subtitle;
        let c5 = subtitle;
        if (subtitle == null) {
          c5 = null;
        }
        obj3[5] = c5;
        const features = closure_0.features;
        let mapped;
        if (features != null) {
          mapped = features.map((assetUrl) => ({ assetUrl: assetUrl.asset_url, title: assetUrl.title, subtitle: assetUrl.subtitle }));
        }
        let c6 = mapped;
        if (mapped == null) {
          c6 = null;
        }
        obj3[6] = c6;
        const button_text = closure_0.button_text;
        let c7 = button_text;
        if (button_text == null) {
          c7 = null;
        }
        obj3[7] = c7;
      }
      const obj = obj3(709);
      const obj4 = { type: "SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_SUCCESS", config: null };
      obj4[1] = obj3;
      obj.dispatch(obj4);
      c11 = 0;
    }
    c11 = 0;
    return arg1;
  });
  const _fetchSocialLayerStorefrontLaunchAnnouncement = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = 30 * require("set").Millis.SECOND;
let closure_8 = 30 * require("set").Millis.MINUTE;
let closure_9 = 60 * require("set").Millis.MINUTE;
let closure_10 = 30 * require("set").Millis.SECOND;
let closure_11 = 5 * require("set").Millis.SECOND;
let closure_16 = 5 * require("set").Millis.MINUTE;
let closure_17 = 30 * require("set").Millis.SECOND;
let closure_18 = 5 * require("set").Millis.MINUTE;
const map = new Map();
const map1 = new Map();
let result = require("handleUserSettingsStoreUpdate").fileFinishedImporting("modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx");

export { _fetchSocialLayerStorefront };
export const fetchSocialLayerStorefrontForApplication = function fetchSocialLayerStorefrontForApplication(applicationId, arg1) {
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
export const fetchSocialLayerStorefrontSkuForApplication = function fetchSocialLayerStorefrontSkuForApplication(applicationId, id, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  return _fetchSocialLayerStorefrontSkuWithUrl(id, Endpoints.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_BY_APPLICATION_ID(applicationId, id), obj);
};
export const fetchSocialLayerStorefrontSku = function fetchSocialLayerStorefrontSku(arg0, id, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  return _fetchSocialLayerStorefrontSkuWithUrl(id, Endpoints.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(arg0, id), obj);
};
export const setSocialLayerStorefrontState = function setSocialLayerStorefrontState(applicationId, pageIndex, skuId) {
  let obj = dispatcher;
  obj = { type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", applicationId, pageIndex, skuId };
  obj.dispatch(obj);
};
export const fetchSocialLayerStorefrontEntries = function fetchSocialLayerStorefrontEntries() {
  const self = this;
  const apply = _fetchSocialLayerStorefrontEntries.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchSocialLayerStorefrontById = function fetchSocialLayerStorefrontById() {
  const self = this;
  const apply = _fetchSocialLayerStorefrontById.apply;
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
  const apply = _fetchSocialLayerStorefrontAnnouncement.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchSocialLayerStorefrontConfig = function fetchSocialLayerStorefrontConfig() {
  const self = this;
  const apply = _fetchSocialLayerStorefrontConfig.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchSocialLayerSKUPurchaseEligibility = function fetchSocialLayerSKUPurchaseEligibility(arg0, closure_0) {
  const _require = closure_0;
  sKUEligibility = sKUEligibility.getSKUEligibility(closure_0);
  let tmp2 = "checking" !== sKUEligibility;
  if (tmp2) {
    tmp2 = "eligible" !== sKUEligibility;
  }
  if (tmp2) {
    tmp2 = "ineligible" !== sKUEligibility;
  }
  if (tmp2) {
    let obj = dispatcher;
    obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId: null };
    obj[1] = closure_0;
    obj.dispatch(obj);
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      if ("checking" === outer1_5.getSKUEligibility(closure_0)) {
        let obj = outer1_1(outer1_2[5]);
        obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE", skuId: null, reason: "interaction_deadline" };
        obj[1] = closure_0;
        obj.dispatch(obj);
      }
    }, closure_11);
    const HTTP = _sendRequest.HTTP;
    obj = { url: null, rejectWithError: true };
    obj[0] = Endpoints.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(arg0, closure_0);
    const postResult = HTTP.post(obj);
    HTTP.post(obj).then((body) => {
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE", skuId: closure_0, interactionId: body.body.interaction_id };
      obj.dispatch(obj);
    }).catch((status) => {
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE", skuId: closure_0, httpStatus: null };
      status = undefined;
      if (status != null) {
        status = status.status;
      }
      obj[2] = status;
      obj.dispatch(obj);
    });
    const nextPromise = HTTP.post(obj).then((body) => {
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE", skuId: closure_0, interactionId: body.body.interaction_id };
      obj.dispatch(obj);
    });
  }
};
export const fetchSocialLayerStorefrontLaunchAnnouncement = function fetchSocialLayerStorefrontLaunchAnnouncement() {
  const self = this;
  const apply = _fetchSocialLayerStorefrontLaunchAnnouncement.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};