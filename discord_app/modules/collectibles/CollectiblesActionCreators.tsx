// === Module 7296: openCollectiblesShop ===

// Module 7296 (openCollectiblesShop)
import dispatcherDefault from "dispatcher" /* 706 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4333 */;
import getItemRecordsFromPurchases from "getItemRecordsFromPurchases" /* 7309 */;
import pushLayer from "pushLayer" /* 7342 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "getUserAgnosticState" /* 4477 */;
import closure_5 from "_getSystemLocale" /* 1995 */;
import closure_6 from "updateCategoriesAndProducts" /* 7297 */;
import { addDebugLog } from "useCollectiblesDebugStore" /* 7312 */;
import closure_8 from "map" /* 7313 */;
import closure_9 from "items" /* 7314 */;
import { CollectiblesCategoriesRecord as closure_10, CollectiblesMarketingsRecord as closure_11, CollectiblesShopHomeRecord as closure_14 } from "fromServer" /* 7315 */;
import closure_12 from "fromServer" /* 7299 */;
import closure_13 from "fromServer" /* 7325 */;
import { CollectiblesMobileShopScreen as closure_15 } from "items" /* 675 */;
import ME from "ME" /* 673 */;
import getMarketingBySurface from "getMarketingBySurface" /* 7340 */;
import "map";

require = arg1;
function openCollectiblesShop(arg0) {
  openCollectiblesShopMobile(Object.assign(arg0, Object.create(null)));
}
function openCollectiblesShopMobile(screen) {
  let obj = dispatcherDefault;
  obj = { type: "COLLECTIBLES_SHOP_OPEN" };
  const merged = Object.assign(screen);
  obj.dispatch(obj);
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      screen = screen.screen;
      if (screen != null) {
        const currentRoute = rootNavigationRef.getCurrentRoute();
        screen = undefined;
        if (currentRoute != null) {
          const params = currentRoute.params;
          if (params != null) {
            screen = params.screen;
          }
        }
        if (screen !== screen) {
          obj = { screen: null, params: null };
          obj[0] = constants2.COLLECTIBLES_SHOP;
          obj1 = { analyticsSource: null, screen: null, onNavigateAway: null };
          obj1[0] = screen.analyticsSource;
          obj1[1] = screen;
          obj1[2] = screen.onNavigateAway;
          obj[1] = obj1;
          rootNavigationRef.navigate("settings", obj);
        }
      } else if (null != screen.initialProductSkuId) {
        let FEATURED_PAGE = constants.SHOP_ALL;
      } else {
        FEATURED_PAGE = constants.FEATURED_PAGE;
      }
    }
  }
}
function closeCollectiblesShop() {
  dispatcherDefault.dispatch({ type: "COLLECTIBLES_SHOP_CLOSE" });
  const obj = dispatcherDefault;
  pushLayer.popLayer();
}
function _fetchCollectiblesCategories() {
  const self = this;
  let tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    return (function*(arg0, arg1, arg2) {
      let aPIError = tmp3;
      closure_4 = tmp5;
      let tmp = callback;
      tmp = closure_2;
      closure_3 = lib;
      if (lib == null) {
        closure_3 = {};
      }
      obj1 = { type: "COLLECTIBLES_CATEGORIES_FETCH", options: null };
      obj1[1] = closure_3;
      callback(closure_2[17]).dispatch(obj1);
      const obj17 = callback(closure_2[17]);
      const fetchCollectiblesOptionsQuery = lib(closure_2[19]).buildFetchCollectiblesOptionsQuery(tmp97);
      const value = closure_1_4.get("shop_show_debug_overlay");
      closure_3 = value;
      if (lib != null) {
        const logPerf = tmp97.logPerf;
      }
      if (logPerf) {
        let sessionId;
        if (tmp99 != null) {
          sessionId = tmp99.sessionId;
        }
        let obj2 = { sessionId: null, checkpoint: null, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
        obj2[0] = sessionId;
        obj2[1] = lib(closure_2[20]).CollectiblesShopPerfCheckpoint.CATEGORIES_FETCH_STARTED;
        let tab;
        if (tmp99 != null) {
          tab = tmp99.tab;
        }
        obj2[2] = tab;
        let includeUnpublished;
        if (tmp97 != null) {
          includeUnpublished = tmp97.includeUnpublished;
        }
        obj2[3] = includeUnpublished;
        let noCache;
        if (tmp97 != null) {
          noCache = tmp97.noCache;
        }
        obj2[4] = noCache;
        lib(closure_2[20]).trackShopPerf(obj2);
        const obj11 = lib(closure_2[20]);
      }
      if (value) {
        const _JSON = JSON;
        const _HermesInternal3 = HermesInternal;
        v0("fetchCollectiblesCategories started: " + JSON.stringify(fetchCollectiblesOptionsQuery, null, 2));
      }
      v0 = 1;
      const HTTP = lib(closure_2[21]).HTTP;
      const obj3 = { url: null, query: null, rejectWithError: true };
      obj3[0] = closure_1_16.COLLECTIBLES_CATEGORIES_V2;
      obj3[1] = fetchCollectiblesOptionsQuery;
      yield HTTP.get(obj3);
      if (1 === tmp8) {
        v0 = 0;
        aPIError = new lib(closure_2[22]).APIError(closure_6);
        let obj5 = lib(closure_2[23]);
        const result = obj5.captureOrIgnoreApiError(aPIError);
        let obj6 = callback(closure_2[17]);
        obj5 = { type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE", error: null };
        obj5[1] = aPIError;
        obj6.dispatch(obj5);
        if (closure_3) {
          const _HermesInternal2 = HermesInternal;
          v0("fetchCollectiblesCategories failed: " + aPIError.message);
        }
        c9 = 3;
      } else if (arg0 === 1) {
        c9 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_4 = arg1;
        let logPerf1;
        if (lib != null) {
          logPerf1 = lib.logPerf;
        }
        if (logPerf1) {
          const obj = lib(closure_2[20]);
          let sessionId1;
          if (closure_2 != null) {
            sessionId1 = closure_2.sessionId;
          }
          obj6 = { sessionId: null, checkpoint: null, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
          obj6[0] = sessionId1;
          obj6[1] = lib(closure_2[20]).CollectiblesShopPerfCheckpoint.CATEGORIES_FETCH_COMPLETED;
          let tab1;
          if (closure_2 != null) {
            tab1 = closure_2.tab;
          }
          obj6[2] = tab1;
          let includeUnpublished1;
          if (lib != null) {
            includeUnpublished1 = lib.includeUnpublished;
          }
          obj6[3] = includeUnpublished1;
          let noCache1;
          if (lib != null) {
            noCache1 = lib.noCache;
          }
          obj6[4] = noCache1;
          obj.trackShopPerf(obj6);
        }
        if (closure_3) {
          const _HermesInternal = HermesInternal;
          v0("fetchCollectiblesCategories completed " + closure_4.body.categories.length + " categories");
        }
        obj2 = callback(closure_2[17]);
        const obj7 = { type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS", categories: null, noOp: null };
        obj7[1] = closure_10.fromServer(closure_4.body);
        obj7[2] = callback;
        obj2.dispatch(obj7);
        v0 = 0;
      }
      v0 = 0;
      return arg1;
    })();
  });
  closure_19 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchCollectiblesPurchases() {
  const self = this;
  const apply = _fetchCollectiblesPurchases.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchCollectiblesPurchases() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let lib = tmp3;
            let callback = tmp5;
            callback = undefined;
            lib = undefined;
            let aPIError;
            if (closure_1_8.isFetching) {
              c5 = 3;
            } else {
              let obj6 = closure_1_1(closure_1_2[17]);
              obj6.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
              const value = c4.get("shop_show_debug_overlay");
              callback = value;
              if (value) {
                closure_1_7("fetchCollectiblesPurchases started");
              }
              c3 = 1;
              obj1 = { url: null, rejectWithError: true, query: null };
              obj1[0] = closure_1_16.COLLECTIBLES_PURCHASES;
              const obj2 = { variants_return_style: null };
              obj2[0] = closure_1_0(closure_1_2[24]).ShopVariantsReturnStyle.VARIANTS_GROUP;
              obj1[2] = obj2;
              if (value) {
                const _JSON = JSON;
                const _HermesInternal3 = HermesInternal;
                closure_1_7("fetchCollectiblesPurchases request: " + JSON.stringify(obj1, null, 2));
              }
              const HTTP = closure_1_0(closure_1_2[21]).HTTP;
              c4 = 2;
              c5 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj1);
              return obj3;
            }
          }
        } else if (1 === tmp8) {
          c3 = 0;
          c3 = aPIError;
          aPIError = new callback(aPIError[22]).APIError(c3);
          obj3 = callback(aPIError[23]);
          const result = obj3.captureOrIgnoreApiError(aPIError);
          if (callback) {
            const _HermesInternal2 = HermesInternal;
            callback2("fetchCollectiblesPurchases failed: " + aPIError.message);
          }
          let obj4 = lib(aPIError[17]);
          obj4 = { type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE", error: null };
          obj4[1] = aPIError;
          obj4.dispatch(obj4);
          throw aPIError;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          lib = arg1;
          if (callback) {
            const _HermesInternal = HermesInternal;
            callback2("fetchCollectiblesPurchases completed with " + lib.body.length + " purchases");
          }
          obj = lib(aPIError[17]);
          const obj5 = { type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: null };
          const body = lib.body;
          obj5[1] = body.map(fromServer.fromServer);
          obj.dispatch(obj5);
          c3 = 0;
        }
        c3 = 0;
        c5 = 3;
        obj6 = { value: null, done: true };
        obj6[0] = arg1;
        return obj6;
      } catch (tmp62) {
        aPIError = tmp62;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp62;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_20 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchCollectiblesProduct(closure_0, arg1) {
  const self = this;
  const apply = _fetchCollectiblesProduct.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchCollectiblesProduct() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      closure_3 = tmp3;
      obj1 = { type: "COLLECTIBLES_PRODUCT_FETCH", skuId: null, startedAt: null };
      obj1[1] = callback;
      const _Date3 = Date;
      obj1[2] = Date.now();
      lib(closure_1_2[17]).dispatch(obj1);
      let locale = 1;
      const obj2 = { locale: null };
      obj2[0] = locale.locale;
      if (lib != null) {
        const countryCode = tmp56.countryCode;
      }
      if (null !== countryCode) {
        let countryCode1;
        if (tmp56 != null) {
          countryCode1 = tmp56.countryCode;
        }
        obj2.country_code = countryCode1;
      }
      if (lib != null) {
        const paymentGateway = tmp56.paymentGateway;
      }
      if (null !== paymentGateway) {
        let paymentGateway1;
        if (tmp56 != null) {
          paymentGateway1 = tmp56.paymentGateway;
        }
        obj2.payment_gateway = paymentGateway1;
      }
      if (lib != null) {
        const includeBundles = tmp56.includeBundles;
      }
      if (null !== includeBundles) {
        let includeBundles1;
        if (tmp56 != null) {
          includeBundles1 = tmp56.includeBundles;
        }
        obj2.include_bundles = includeBundles1;
      }
      const HTTP = callback(closure_1_2[21]).HTTP;
      let obj3 = { url: null, rejectWithError: true, query: null };
      obj3[0] = closure_1_16.COLLECTIBLES_PRODUCTS(callback);
      obj3[2] = obj2;
      yield HTTP.get(obj3);
      if (1 === tmp7) {
        locale = 0;
        closure_3 = closure_4;
        aPIError = new callback(aPIError[22]).APIError(closure_3);
        obj3 = callback(aPIError[23]);
        const result = obj3.captureOrIgnoreApiError(aPIError);
        const obj4 = lib(aPIError[17]);
        const obj5 = { type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE", skuId: null, error: null, endedAt: null };
        obj5[1] = callback;
        obj5[2] = aPIError;
        const _Date2 = Date;
        obj5[3] = Date.now();
        obj4.dispatch(obj5);
        c7 = 3;
      } else if (arg0 === 1) {
        c7 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        lib = arg1;
        const obj = lib(aPIError[17]);
        const obj6 = { type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: null, product: null, endedAt: null };
        obj6[1] = callback;
        obj6[2] = closure_12.fromServer(lib.body);
        const _Date = Date;
        obj6[3] = Date.now();
        obj.dispatch(obj6);
        locale = 0;
      }
      locale = 0;
      return arg1;
    })();
  });
  closure_22 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _maybeFetchCollectiblesProduct() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, arg1) {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c2 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj1 = closure_1_6;
              let isFetchingProductResult = closure_1_6.isFetchingProduct(closure_0);
              if (!isFetchingProductResult) {
                isFetchingProductResult = obj1.isProductFetchBackedOff(tmp5);
              }
              if (!isFetchingProductResult) {
                c3 = 1;
                c2 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_21(tmp5, tmp6);
                return obj1;
              }
              tmp6 = closure_1;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c2 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp9) {
          c2 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  closure_23 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function claimPremiumCollectiblesProduct(skuId) {
  const self = this;
  const apply = _claimPremiumCollectiblesProduct.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _claimPremiumCollectiblesProduct() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let aPIError = tmp3;
              let lib = tmp7;
              lib = undefined;
              aPIError = undefined;
              obj1 = { type: "COLLECTIBLES_CLAIM", skuId: null };
              obj1[1] = callback;
              closure_1_1(closure_1_2[17]).dispatch(obj1);
              c4 = 1;
              const HTTP = callback(closure_1_2[21]).HTTP;
              const obj2 = { url: null, body: null, rejectWithError: true };
              obj2[0] = closure_1_16.COLLECTIBLES_CLAIM;
              const obj3 = { sku_id: null };
              obj3[0] = callback;
              obj2[1] = obj3;
              c5 = 2;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.put(obj2);
              return obj4;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            aPIError = new callback(aPIError[22]).APIError(closure_3);
            obj1 = lib(aPIError[17]);
            const obj5 = { type: "COLLECTIBLES_CLAIM_FAILURE", skuId: null, error: null };
            obj5[1] = callback;
            obj5[2] = aPIError;
            obj1.dispatch(obj5);
            throw aPIError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            lib = arg1;
            let obj6 = lib(aPIError[17]);
            obj6 = { type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: null, purchases: null };
            obj6[1] = callback;
            const body = lib.body;
            let mapped;
            if (body != null) {
              mapped = body.map(fromServer.fromServer);
            }
            obj6[2] = mapped;
            obj6.dispatch(obj6);
            c4 = 0;
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp29) {
          closure_3 = tmp29;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp29;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_24 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _validateCollectiblesRecipient() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, body) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_3 = tmp3;
              dependencyMap = tmp7;
              c5 = 1;
              const HTTP = callback(closure_1_2[21]).HTTP;
              obj1 = { url: null, query: null, rejectWithError: true };
              obj1[0] = closure_1_16.COLLECTIBLES_VALID_GIFT_RECIPIENT;
              let obj2 = { sku_id: null, recipient_id: null };
              obj2[0] = closure_1;
              obj2[1] = callback;
              obj1[1] = obj2;
              c6 = 2;
              c7 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj1);
              return obj3;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            callback = closure_4;
            obj2 = callback(6193);
            const aPIError = new callback(4376).APIError(callback);
            const result = obj2.captureOrIgnoreApiError(aPIError);
            c7 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = body;
            return obj4;
          } else {
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body.valid;
            return obj;
          }
        } catch (tmp22) {
          closure_4 = tmp22;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp22;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_25 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _validateCollectiblesRecipientsBatch() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, body) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_3 = tmp3;
              dependencyMap = tmp7;
              c5 = 1;
              const HTTP = callback(closure_1_2[21]).HTTP;
              obj1 = { url: null, query: null, rejectWithError: true };
              obj1[0] = closure_1_16.COLLECTIBLES_VALID_GIFT_RECIPIENTS_BATCH;
              let obj2 = { sku_ids: null, recipient_id: null };
              obj2[0] = closure_1;
              obj2[1] = callback;
              obj1[1] = obj2;
              c6 = 2;
              c7 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj1);
              return obj3;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            callback = closure_4;
            obj2 = callback(6193);
            const aPIError = new callback(4376).APIError(callback);
            const result = obj2.captureOrIgnoreApiError(aPIError);
            c7 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = {};
            return obj4;
          } else if (arg0 === 1) {
            c7 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp22) {
          closure_4 = tmp22;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp22;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_26 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchCollectiblesMarketings() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let body = tmp3;
              let obj2 = tmp7;
              let PROD;
              PROD = PROD.release;
              if (PROD === undefined) {
                PROD = callback(closure_1_2[26]).CollectiblesMarketingReleaseType.PROD;
              }
              obj2 = undefined;
              body = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              obj2(body[17]).dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
              obj2 = { platform: null };
              obj2[0] = PROD(body[27]).CollectiblesMarketingPlatform.MOBILE;
              if (PROD !== PROD(body[26]).CollectiblesMarketingReleaseType.PROD) {
                obj2.release = PROD;
              }
              c4 = 1;
              const HTTP = PROD(body[21]).HTTP;
              let obj3 = { url: null, query: null, rejectWithError: true };
              obj3[0] = constants.COLLECTIBLES_MARKETING;
              obj3[1] = obj2;
              c5 = 3;
              c6 = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = HTTP.get(obj3);
              return obj4;
            }
          } else {
            if (2 === tmp7) {
              c4 = 0;
              obj3 = PROD(body[23]);
              const aPIError = new PROD(body[22]).APIError(closure_3);
              const result = obj3.captureOrIgnoreApiError(aPIError);
              obj4 = obj2(body[17]);
              obj4.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              body = arg1;
              obj = obj2(body[17]);
              const obj5 = { type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: null };
              obj5[1] = closure_11.fromServer(body.body);
              obj.dispatch(obj5);
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          }
        } catch (tmp44) {
          closure_3 = tmp44;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp44;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_27 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchCollectiblesShopHome() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    return (function*(arg0, arg1, arg2) {
      closure_5 = tmp3;
      obj1 = { type: "COLLECTIBLES_SHOP_HOME_FETCH", tab: null, options: null };
      obj1[1] = callback;
      let body = lib;
      if (lib == null) {
        body = {};
      }
      obj1[2] = body;
      lib(closure_2[17]).dispatch(obj1);
      const obj8 = callback(closure_2[19]);
      const fetchCollectiblesOptionsQuery = obj8.buildFetchCollectiblesOptionsQuery(tmp81, callback);
      if (lib != null) {
        const logPerf = tmp81.logPerf;
      }
      if (logPerf) {
        let sessionId;
        if (tmp82 != null) {
          sessionId = tmp82.sessionId;
        }
        let obj2 = { sessionId: null, checkpoint: null, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
        obj2[0] = sessionId;
        obj2[1] = callback(closure_2[20]).CollectiblesShopPerfCheckpoint.SHOP_HOME_FETCH_STARTED;
        let tab;
        if (tmp82 != null) {
          tab = tmp82.tab;
        }
        obj2[2] = tab;
        let includeUnpublished;
        if (tmp81 != null) {
          includeUnpublished = tmp81.includeUnpublished;
        }
        obj2[3] = includeUnpublished;
        let noCache;
        if (tmp81 != null) {
          noCache = tmp81.noCache;
        }
        obj2[4] = noCache;
        callback(closure_2[20]).trackShopPerf(obj2);
        const obj10 = callback(closure_2[20]);
      }
      c7 = 1;
      const HTTP = callback(closure_2[21]).HTTP;
      const obj3 = { url: null, query: null, rejectWithError: true };
      obj3[0] = closure_1_16.COLLECTIBLES_SHOP;
      obj3[1] = fetchCollectiblesOptionsQuery;
      yield HTTP.get(obj3);
      if (1 === tmp7) {
        c7 = 0;
        closure_5 = closure_6;
        const aPIError = new callback(closure_2[22]).APIError(closure_5);
        let obj5 = callback(closure_2[23]);
        const result = obj5.captureOrIgnoreApiError(aPIError);
        let obj6 = lib(closure_2[17]);
        obj5 = { type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE", tab: null, error: null };
        obj5[1] = callback;
        obj5[2] = aPIError;
        obj6.dispatch(obj5);
        c9 = 3;
      } else if (arg0 === 1) {
        c9 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        body = arg1;
        let logPerf1;
        if (lib != null) {
          logPerf1 = lib.logPerf;
        }
        if (logPerf1) {
          const obj = callback(closure_2[20]);
          let sessionId1;
          if (closure_2 != null) {
            sessionId1 = closure_2.sessionId;
          }
          obj6 = { sessionId: null, checkpoint: null, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
          obj6[0] = sessionId1;
          obj6[1] = callback(closure_2[20]).CollectiblesShopPerfCheckpoint.SHOP_HOME_FETCH_COMPLETED;
          let tab1;
          if (closure_2 != null) {
            tab1 = closure_2.tab;
          }
          obj6[2] = tab1;
          let includeUnpublished1;
          if (lib != null) {
            includeUnpublished1 = lib.includeUnpublished;
          }
          obj6[3] = includeUnpublished1;
          let noCache1;
          if (lib != null) {
            noCache1 = lib.noCache;
          }
          obj6[4] = noCache1;
          obj.trackShopPerf(obj6);
        }
        obj2 = lib(closure_2[17]);
        const obj7 = { type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS", tab: null, shopHome: null };
        obj7[1] = callback;
        obj7[2] = closure_14.fromServer(body.body);
        obj2.dispatch(obj7);
        c7 = 0;
      }
      c7 = 0;
      return arg1;
    })();
  });
  closure_28 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _claimCollectiblesCategoryReward() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              let aPIError = tmp7;
              const callback = lib;
              lib = undefined;
              aPIError = undefined;
              obj1 = { type: "COLLECTIBLES_CLAIM", skuId: null };
              obj1[1] = lib;
              lib(closure_1_2[17]).dispatch(obj1);
              c5 = 1;
              const HTTP = callback(closure_1_2[21]).HTTP;
              const obj2 = { url: null, body: null, rejectWithError: true };
              obj2[0] = closure_1_16.COLLECTIBLES_CLAIM_CATEGORY_REWARD;
              const obj3 = { category_id: null };
              obj3[0] = callback;
              obj2[1] = obj3;
              c6 = 2;
              c7 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.put(obj2);
              return obj4;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            closure_3 = closure_4;
            aPIError = new callback(aPIError[22]).APIError(closure_3);
            obj1 = lib(aPIError[17]);
            const obj5 = { type: "COLLECTIBLES_CLAIM_FAILURE", skuId: null, error: null };
            obj5[1] = callback;
            obj5[2] = aPIError;
            obj1.dispatch(obj5);
            throw aPIError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            lib = arg1;
            let obj6 = lib(aPIError[17]);
            obj6 = { type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: null, purchases: null };
            obj6[1] = callback;
            const body = lib.body;
            let mapped;
            if (body != null) {
              mapped = body.map(fromServer.fromServer);
            }
            obj6[2] = mapped;
            obj6.dispatch(obj6);
            c5 = 0;
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp29) {
          closure_4 = tmp29;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp29;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_29 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _maybeFetchCollectiblesShopTabLayout() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let layoutFetchError = tmp3;
              let callback2 = tmp7;
              let callback;
              callback2 = undefined;
              ({ tab: c0, abortSignal: c1 } = callback);
              layoutFetchError = undefined;
              let body;
              c4 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                if (!closure_9.isFetchingLayout(callback)) {
                  layoutFetchError = closure_9.getLayoutFetchError(callback);
                  let status;
                  if (layoutFetchError != null) {
                    status = layoutFetchError.status;
                  }
                  if (404 !== status) {
                    let status1;
                    if (layoutFetchError != null) {
                      status1 = layoutFetchError.status;
                    }
                    if (429 !== status1) {
                      c4 = 1;
                      const obj2 = { type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH", tab: null };
                      obj2[1] = callback;
                      callback2(layoutFetchError[17]).dispatch(obj2);
                      const HTTP = callback(layoutFetchError[21]).HTTP;
                      let obj3 = { url: null, rejectWithError: true, signal: null };
                      obj3[0] = closure_16.COLLECTIBLES_SHOP_TAB_LAYOUT(callback);
                      obj3[2] = callback2;
                      c5 = 3;
                      c6 = 1;
                      const obj4 = { value: null, done: false };
                      obj4[0] = HTTP.get(obj3);
                      return obj4;
                    }
                  }
                }
                c6 = 3;
              }
            } else if (2 === tmp7) {
              c4 = 0;
              c5 = body;
              const aPIError = new callback(layoutFetchError[22]).APIError(c5);
              c4 = aPIError;
              obj3 = callback2(layoutFetchError[17]);
              const obj5 = { type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE", tab: null, apiError: null };
              obj5[1] = callback;
              obj5[2] = c4;
              obj3.dispatch(obj5);
              throw c4;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              body = arg1;
              obj = callback2(layoutFetchError[17]);
              const obj6 = { type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS", tab: null, layoutId: null };
              obj6[1] = callback;
              obj6[2] = body.body.layout_id;
              obj.dispatch(obj6);
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          }
        } catch (tmp39) {
          body = tmp39;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp39;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_30 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: closure_16, Routes, UserSettingsSections: closure_17 } = ME);
let result = require("set").fileFinishedImporting("modules/collectibles/CollectiblesActionCreators.tsx");

export default { openCollectiblesShop, closeCollectiblesShop, fetchCollectiblesPurchases, fetchCollectiblesProduct, claimPremiumCollectiblesProduct };
export { openCollectiblesShop };
export { openCollectiblesShopMobile };
export const isCollectiblesShopOpen = function isCollectiblesShopOpen() {
  const rootNavigationRef = isCollectiblesShopRoute(4333).getRootNavigationRef();
  const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
  let tmp2 = !tmp;
  if (!tmp) {
    isCollectiblesShopRoute = function isCollectiblesShopRoute(nextResult) {
      let flag = "settings" !== nextResult.name;
      if (!flag) {
        const params = nextResult.params;
        let screen;
        if (params != null) {
          screen = params.screen;
        }
        flag = screen !== constants.COLLECTIBLES_SHOP;
      }
      if (!flag) {
        flag = false;
      }
      return !flag;
    };
    const rootState = rootNavigationRef.getRootState();
    let routes;
    if (rootState != null) {
      routes = rootState.routes;
    }
    let searchRoutesResult = null;
    if (routes) {
      function searchRoutes(routes) {
        const iter = routes[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          let tmp3 = isCollectiblesShopRoute;
          let tmp4 = nextResult;
          if (isCollectiblesShopRoute(nextResult)) {
            let tmp11 = iter;
            iter.return();
            return tmp2;
          } else {
            let state = tmp2.state;
            routes = undefined;
            if (state != null) {
              routes = state.routes;
            }
            if (routes) {
              let tmp6 = searchRoutes;
              let tmp7 = nextResult;
              let tmp8 = searchRoutes(tmp2.state.routes);
              let tmp9 = tmp8;
              if (tmp8) {
                let tmp10 = iter;
                iter.return();
                return tmp8;
              }
            }
            continue;
          }
        }
        return null;
      }
      searchRoutesResult = searchRoutes(rootState.routes);
    }
    tmp2 = null != searchRoutesResult;
  }
  return tmp2;
};
export const dispatchOpenCollectiblesShop = function dispatchOpenCollectiblesShop(arg0) {
  let obj = dispatcherDefault;
  obj = { type: "COLLECTIBLES_SHOP_OPEN" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
};
export { closeCollectiblesShop };
export const productDetailsOpened = function productDetailsOpened(skuId) {
  let obj = dispatcherDefault;
  obj = { type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId };
  obj.dispatch(obj);
};
export const areRequestOptionsEqual = function areRequestOptionsEqual(closure_5, closure_12) {
  let noCache;
  if (closure_5 != null) {
    noCache = closure_5.noCache;
  }
  let noCache1;
  if (closure_12 != null) {
    noCache1 = closure_12.noCache;
  }
  let tmp4 = Boolean(noCache) === Boolean(noCache1);
  if (tmp4) {
    let includeUnpublished;
    if (closure_5 != null) {
      includeUnpublished = closure_5.includeUnpublished;
    }
    let includeUnpublished1;
    if (closure_12 != null) {
      includeUnpublished1 = closure_12.includeUnpublished;
    }
    const _Boolean = Boolean;
    const _Boolean2 = Boolean;
    tmp4 = Boolean(includeUnpublished) === Boolean(includeUnpublished1);
    const BooleanResult1 = Boolean(includeUnpublished);
  }
  if (tmp4) {
    let includeBundles;
    if (closure_5 != null) {
      includeBundles = closure_5.includeBundles;
    }
    let includeBundles1;
    if (closure_12 != null) {
      includeBundles1 = closure_12.includeBundles;
    }
    const _Boolean3 = Boolean;
    const _Boolean4 = Boolean;
    tmp4 = Boolean(includeBundles) === Boolean(includeBundles1);
    const BooleanResult2 = Boolean(includeBundles);
  }
  if (tmp4) {
    let includeDynamicBlocks;
    if (closure_5 != null) {
      includeDynamicBlocks = closure_5.includeDynamicBlocks;
    }
    let includeDynamicBlocks1;
    if (closure_12 != null) {
      includeDynamicBlocks1 = closure_12.includeDynamicBlocks;
    }
    const _Boolean5 = Boolean;
    const _Boolean6 = Boolean;
    tmp4 = Boolean(includeDynamicBlocks) === Boolean(includeDynamicBlocks1);
    const BooleanResult3 = Boolean(includeDynamicBlocks);
  }
  if (tmp4) {
    let countryCode;
    if (closure_5 != null) {
      countryCode = closure_5.countryCode;
    }
    let countryCode1;
    if (closure_12 != null) {
      countryCode1 = closure_12.countryCode;
    }
    tmp4 = countryCode === countryCode1;
  }
  if (tmp4) {
    let paymentGateway;
    if (closure_5 != null) {
      paymentGateway = closure_5.paymentGateway;
    }
    let paymentGateway1;
    if (closure_12 != null) {
      paymentGateway1 = closure_12.paymentGateway;
    }
    tmp4 = paymentGateway === paymentGateway1;
  }
  if (tmp4) {
    let shopHomeConfig;
    if (closure_5 != null) {
      shopHomeConfig = closure_5.shopHomeConfig;
    }
    let shopHomeConfig1;
    if (closure_12 != null) {
      shopHomeConfig1 = closure_12.shopHomeConfig;
    }
    tmp4 = shopHomeConfig === shopHomeConfig1;
  }
  if (tmp4) {
    let skipNumCategories;
    if (closure_5 != null) {
      skipNumCategories = closure_5.skipNumCategories;
    }
    let skipNumCategories1;
    if (closure_12 != null) {
      skipNumCategories1 = closure_12.skipNumCategories;
    }
    tmp4 = skipNumCategories === skipNumCategories1;
  }
  return tmp4;
};
export const fetchCollectiblesCategories = function fetchCollectiblesCategories(arg0, closure_1, closure_2) {
  const self = this;
  const apply = _fetchCollectiblesCategories.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { fetchCollectiblesPurchases };
export { fetchCollectiblesProduct };
export const maybeFetchCollectiblesProduct = function maybeFetchCollectiblesProduct(skuId) {
  const self = this;
  const apply = _maybeFetchCollectiblesProduct.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const seedCollectiblesProductFromStandaloneLoad = function seedCollectiblesProductFromStandaloneLoad(memo) {
  const timestamp = Date.now();
  let obj = getItemRecordsFromPurchases;
  const items = [memo];
  const result = obj.extendVariantsProducts(items);
  const iter = result[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    let tmp5 = product;
    if (null == product.getProduct(nextResult.skuId)) {
      let tmp6 = importDefault;
      let tmp7 = dependencyMap;
      let obj2 = dispatcherDefault;
      obj = { type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: null, product: null, endedAt: null };
      let tmp8 = nextResult;
      obj[1] = tmp4.skuId;
      obj[2] = tmp4;
      obj[3] = timestamp;
      let dispatchResult = obj2.dispatch(obj);
    }
    continue;
  }
};
export { claimPremiumCollectiblesProduct };
export const validateCollectiblesRecipient = function validateCollectiblesRecipient(arg0, arg1) {
  const self = this;
  const apply = _validateCollectiblesRecipient.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const validateCollectiblesRecipientsBatch = function validateCollectiblesRecipientsBatch() {
  const self = this;
  const apply = _validateCollectiblesRecipientsBatch.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchCollectiblesMarketings = function fetchCollectiblesMarketings(arg0) {
  const self = this;
  const apply = _fetchCollectiblesMarketings.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchCollectiblesShopHome = function fetchCollectiblesShopHome(closure_0, closure_12, closure_2) {
  const self = this;
  const apply = _fetchCollectiblesShopHome.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setShopHomeConfigOverride = function setShopHomeConfigOverride(shopHomeConfigOverride) {
  let obj = dispatcherDefault;
  obj = { type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride };
  obj.dispatch(obj);
};
export const setShopLayoutUrlOverride = function setShopLayoutUrlOverride(shopLayoutUrlOverride) {
  let obj = dispatcherDefault;
  obj = { type: "COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE", shopLayoutUrlOverride };
  obj.dispatch(obj);
};
export const setSkipNumCategories = function setSkipNumCategories(skipNumCategories) {
  let obj = dispatcherDefault;
  obj = { type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories };
  obj.dispatch(obj);
};
export const claimCollectiblesCategoryReward = function claimCollectiblesCategoryReward() {
  const self = this;
  const apply = _claimCollectiblesCategoryReward.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const maybeFetchCollectiblesShopTabLayout = function maybeFetchCollectiblesShopTabLayout() {
  const self = this;
  const apply = _maybeFetchCollectiblesShopTabLayout.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};