// === Module 7052: CollectiblesActionCreators ===

// Module 7052 (CollectiblesActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7065 */;
import CollectiblesDebugStore from "CollectiblesDebugStore" /* 7067 */;
import CollectiblesCategoriesRecord from "CollectiblesCategoriesRecord" /* 7070 */;
import CollectiblesMarketingRecord from "CollectiblesMarketingRecord" /* 7074 */;
import CollectiblesShopHomeRecord from "CollectiblesShopHomeRecord" /* 7081 */;
import LayerActionCreators from "LayerActionCreators" /* 7096 */;
import utils_CollectiblesUtils from "utils/CollectiblesUtils" /* 7097 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7098 */;
import CollectiblesPerfLogging from "CollectiblesPerfLogging" /* 7099 */;
import CollectiblesMarketingReleaseType from "CollectiblesMarketingReleaseType" /* 7100 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import DevSettingsStore from "DevSettingsStore" /* 4889 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7053 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7068 */;
import CollectiblesShopStore from "CollectiblesShopStore" /* 7069 */;
import CollectiblesProductRecord from "CollectiblesProductRecord" /* 7055 */;
import CollectiblesPurchaseRecord from "CollectiblesPurchaseRecord" /* 7080 */;
import Constants from "Constants" /* 1085 */;
import CollectiblesMarketingsStore from "CollectiblesMarketingsStore" /* 7094 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7095 */;
import size from "module_2" /* 2 */;

let c2, closure_4, closure_6, options, recipient_id;

let Routes;
let closure_16;
let closure_17;
function openCollectiblesShop(arg0) {
  let initialCollectionId;
  let tab;
  ({ tab, initialCollectionId } = arg0);
  openCollectiblesShopMobile(Object.assign(arg0, Object.assign({ tab: 0, initialCollectionId: 0 })));
}
function openCollectiblesShopMobile(screen) {
  let obj4;
  const dispatch = DispatcherDefault.dispatch;
  obj = { type: "COLLECTIBLES_SHOP_OPEN" };
  DispatcherDefault;
  const merged = Object.assign(screen);
  dispatch(obj);
  const obj2 = RootNavigationRef;
  const rootNavigationRef = obj2.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      screen = screen.screen;
      if (screen == null) {
        let FEATURED_PAGE;
        if (null != screen.initialProductSkuId) {
          FEATURED_PAGE = constants.SHOP_ALL;
        } else {
          FEATURED_PAGE = constants.FEATURED_PAGE;
        }
        screen = FEATURED_PAGE;
      }
      const currentRoute = rootNavigationRef.getCurrentRoute();
      let screen1;
      if (currentRoute != null) {
        const params = currentRoute.params;
        if (params != null) {
          screen1 = params.screen;
        }
      }
      if (screen1 !== screen) {
        const obj3 = { screen: constants2.COLLECTIBLES_SHOP, params: obj4 };
        obj4 = { analyticsSource: screen.analyticsSource, screen, onNavigateAway: screen.onNavigateAway };
        rootNavigationRef.navigate("settings", obj3);
      }
    }
  }
}
function closeCollectiblesShop() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "COLLECTIBLES_SHOP_CLOSE" });
  const obj2 = LayerActionCreators;
  obj2.popLayer();
}
let obj = function _fetchCollectiblesCategories() {
  obj = _asyncToGenerator(async (arg0, noOp, arg2) => {
    let closure_0 = arg0;
    let closure_2 = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async function(arg0, value, arg2) {
      let includeUnpublished;
      let includeUnpublished1;
      let noCache;
      let noCache1;
      let tab;
      let tab1;
      if (c9 === 2) {
        c9 = 3;
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
          let c3;
          let aPIError;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              c3 = undefined;
              logPerf = undefined;
              aPIError = undefined;
              options = closure_0;
              const dispatch = DispatcherDefault.dispatch;
              DispatcherDefault;
              if (closure_0 == null) {
                options = {};
              }
              const obj3 = { type: "COLLECTIBLES_CATEGORIES_FETCH", options };
              dispatch(obj3);
              const obj9 = utils_CollectiblesUtils;
              const fetchCollectiblesOptionsQuery = obj9.buildFetchCollectiblesOptionsQuery(closure_0);
              value = DevSettingsStore.get("shop_show_debug_overlay");
              c3 = value;
              logPerf = undefined;
              if (closure_0 != null) {
                logPerf = closure_0.logPerf;
              }
              if (logPerf) {
                logPerf = closure_2 == null;
                let sessionId;
                const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
                CollectiblesPerfLogging;
                if (!logPerf) {
                  sessionId = closure_2.sessionId;
                }
                logPerf = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.CATEGORIES_FETCH_STARTED, tab, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
                tab = undefined;
                if (closure_2 != null) {
                  tab = closure_2.tab;
                }
                includeUnpublished = undefined;
                if (closure_0 != null) {
                  includeUnpublished = closure_0.includeUnpublished;
                }
                noCache = undefined;
                if (closure_0 != null) {
                  noCache = closure_0.noCache;
                }
                logPerf = trackShopPerf(logPerf);
              }
              if (value) {
                logPerf = addDebugLog;
                const _JSON = JSON;
                const _HermesInternal3 = HermesInternal;
                addDebugLog("fetchCollectiblesCategories started: " + JSON.stringify(fetchCollectiblesOptionsQuery, null, 2));
              }
              c7 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_16.COLLECTIBLES_CATEGORIES_V2, query: fetchCollectiblesOptionsQuery, rejectWithError: true };
              logPerf = HTTP.get(request);
              c8 = 2;
              c9 = 1;
              return { value: logPerf, done: false };
            }
          } else {
            if (1 === tmp4) {
              c7 = 0;
              const self = this;
              const self2 = this;
              aPIError = new closure_133_0(closure_133_2[22]).APIError(closure_6);
              const obj5 = closure_133_0(closure_133_2[23]);
              const result = obj5.captureOrIgnoreApiError(aPIError);
              const obj7 = { type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE", error: aPIError };
              const obj6 = closure_133_1(closure_133_2[17]);
              logPerf = obj6.dispatch(obj7);
              const tmp51 = c3;
              if (tmp51) {
                logPerf = closure_133_7;
                const _HermesInternal2 = HermesInternal;
                closure_133_7("fetchCollectiblesCategories failed: " + aPIError.message);
              }
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            } else {
              logPerf = closure_0;
              let logPerf1;
              if (closure_0 != null) {
                logPerf1 = logPerf.logPerf;
              }
              if (logPerf1) {
                logPerf = closure_133_0(closure_133_2[20]).trackShopPerf;
                let sessionId1;
                closure_133_0(closure_133_2[20]);
                if (closure_2 != null) {
                  sessionId1 = closure_2.sessionId;
                }
                const obj10 = { sessionId: sessionId1, checkpoint: closure_133_0(closure_133_2[20]).CollectiblesShopPerfCheckpoint.CATEGORIES_FETCH_COMPLETED, tab: tab1, unpublishedCategoriesShown: includeUnpublished1, cacheDisabled: noCache1 };
                tab1 = undefined;
                if (closure_2 != null) {
                  tab1 = closure_2.tab;
                }
                includeUnpublished1 = undefined;
                if (closure_0 != null) {
                  includeUnpublished1 = closure_0.includeUnpublished;
                }
                noCache1 = undefined;
                if (closure_0 != null) {
                  noCache1 = closure_0.noCache;
                }
                logPerf(obj10);
              }
              logPerf = c3;
              if (logPerf) {
                logPerf = closure_133_7;
                const _HermesInternal = HermesInternal;
                closure_133_7("fetchCollectiblesCategories completed " + logPerf.body.categories.length + " categories");
              }
              logPerf = closure_133_1(closure_133_2[17]).dispatch;
              const obj11 = { type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS", categories: closure_133_10.fromServer(logPerf.body), noOp };
              closure_133_1(closure_133_2[17]);
              logPerf(obj11);
              c7 = 0;
            }
            c9 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp76) {
          closure_6 = tmp76;
          if (0 === c7) {
            c9 = 3;
            throw tmp76;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function fetchCollectiblesPurchases() {
  return obj(...arguments);
}
obj = function _fetchCollectiblesPurchases() {
  let isFetching;
  obj = _asyncToGenerator(async function() {
    let body;
    let closure_1;
    let value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let c0;
        let tmp;
        let aPIError;
        let obj3;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            c0 = undefined;
            tmp = undefined;
            aPIError = undefined;
            if (!isFetching.isFetching) {
              const obj7 = DispatcherDefault;
              obj7.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
              value = DevSettingsStore.get("shop_show_debug_overlay");
              c0 = value;
              if (c0) {
                obj3 = addDebugLog("fetchCollectiblesPurchases started");
              }
              c3 = 1;
              const request = { url: constants.COLLECTIBLES_PURCHASES, rejectWithError: true, query: obj3 };
              obj3 = { variants_return_style: ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP };
              if (value) {
                obj3 = addDebugLog;
                const _JSON = JSON;
                const _HermesInternal3 = HermesInternal;
                addDebugLog("fetchCollectiblesPurchases request: " + JSON.stringify(request, null, 2));
              }
              const HTTP = HTTPUtils.HTTP;
              obj3 = HTTP.get(request);
              c4 = 2;
              c5 = 1;
              const obj6 = { value: obj3, done: false };
              return obj6;
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          let closure_3 = closure_2;
          const self = this;
          const self2 = this;
          aPIError = new closure_129_0(closure_129_2[22]).APIError(closure_3);
          const obj4 = closure_129_0(closure_129_2[23]);
          obj3 = obj4.captureOrIgnoreApiError(aPIError);
          const tmp28 = c0;
          if (tmp28) {
            obj3 = closure_129_7;
            const _HermesInternal2 = HermesInternal;
            closure_129_7("fetchCollectiblesPurchases failed: " + aPIError.message);
          }
          const obj8 = { type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE", error: aPIError };
          const obj5 = closure_129_1(closure_129_2[17]);
          obj3 = obj5.dispatch(obj8);
          throw aPIError;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          tmp = value;
          obj3 = c0;
          if (obj3) {
            obj3 = closure_129_7;
            const _HermesInternal = HermesInternal;
            closure_129_7("fetchCollectiblesPurchases completed with " + tmp.body.length + " purchases");
          }
          obj3 = closure_129_1(closure_129_2[17]).dispatch;
          const obj10 = { type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: body.map(closure_129_13.fromServer) };
          body = tmp.body;
          const tmp12 = closure_129_1(closure_129_2[17]);
          obj3(obj10);
          c3 = 0;
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp51) {
        closure_2 = tmp51;
        if (0 === c3) {
          c5 = 3;
          throw tmp51;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function fetchCollectiblesProduct() {
  return obj(...arguments);
}
obj = function _fetchCollectiblesProduct() {
  let locale;
  obj = _asyncToGenerator(async (skuId, arg1) => {
    let body = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      if (c7 === 2) {
        c7 = 3;
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
          let aPIError;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              body = undefined;
              aPIError = undefined;
              const _Date3 = Date;
              const obj5 = { type: "COLLECTIBLES_PRODUCT_FETCH", skuId, startedAt: Date.now() };
              const dispatch3 = DispatcherDefault.dispatch;
              DispatcherDefault;
              dispatch3(obj5);
              c5 = 1;
              const obj6 = { locale: locale.locale };
              let countryCode;
              if (body != null) {
                countryCode = tmp51.countryCode;
              }
              if (null !== countryCode) {
                let countryCode1;
                if (body != null) {
                  countryCode1 = tmp51.countryCode;
                }
                obj6.country_code = countryCode1;
              }
              let paymentGateway;
              if (body != null) {
                paymentGateway = tmp51.paymentGateway;
              }
              if (null !== paymentGateway) {
                let paymentGateway1;
                if (body != null) {
                  paymentGateway1 = tmp51.paymentGateway;
                }
                obj6.payment_gateway = paymentGateway1;
              }
              let includeBundles;
              if (body != null) {
                includeBundles = tmp51.includeBundles;
              }
              if (null !== includeBundles) {
                let includeBundles1;
                if (body != null) {
                  includeBundles1 = tmp51.includeBundles;
                }
                obj6.include_bundles = includeBundles1;
              }
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_16.COLLECTIBLES_PRODUCTS(skuId), rejectWithError: true, query: obj6 };
              const get = HTTP.get;
              c6 = 2;
              c7 = 1;
              const obj7 = { value: get(request), done: false };
              return obj7;
            }
          } else {
            if (1 === c6) {
              c5 = 0;
              closure_3 = closure_4;
              const self = this;
              const self2 = this;
              aPIError = new closure_131_0(closure_131_2[22]).APIError(closure_3);
              const obj3 = closure_131_0(closure_131_2[23]);
              const result = obj3.captureOrIgnoreApiError(aPIError);
              const _Date2 = Date;
              const obj8 = { type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE", skuId, error: aPIError, endedAt: Date.now() };
              const dispatch2 = closure_131_1(closure_131_2[17]).dispatch;
              closure_131_1(closure_131_2[17]);
              dispatch2(obj8);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              body = value;
              obj = { type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId, product: closure_131_12.fromServer(body.body), endedAt: Date.now() };
              const dispatch = closure_131_1(closure_131_2[17]).dispatch;
              closure_131_1(closure_131_2[17]);
              const _Date = Date;
              dispatch(obj);
              c5 = 0;
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp42) {
          closure_4 = tmp42;
          if (0 === c5) {
            c7 = 3;
            throw tmp42;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _maybeFetchCollectiblesProduct() {
  let fetchingProduct;
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const isFetchingProductResult = fetchingProduct.isFetchingProduct(closure_0) || fetchingProduct.isProductFetchBackedOff(closure_0);
            if (!isFetchingProductResult) {
              c3 = 1;
              c2 = 1;
              const obj5 = { value: fetchCollectiblesProduct(closure_0, closure_1), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        }
        c2 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp8) {
        c2 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
function claimPremiumCollectiblesProduct() {
  return obj(...arguments);
}
obj = function _claimPremiumCollectiblesProduct() {
  obj = _asyncToGenerator(async function(arg0) {
    let closure_0;
    let mapped;
    let obj6;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        let body;
        let aPIError;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            body = undefined;
            aPIError = undefined;
            const obj5 = { type: "COLLECTIBLES_CLAIM", skuId };
            const obj8 = DispatcherDefault;
            obj8.dispatch(obj5);
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.COLLECTIBLES_CLAIM, body: obj6, rejectWithError: true };
            obj6 = { sku_id: skuId };
            c5 = 2;
            c6 = 1;
            const obj7 = { value: HTTP.put(request), done: false };
            return obj7;
          }
        } else if (1 === c5) {
          c4 = 0;
          const self = this;
          const self2 = this;
          aPIError = new closure_130_0(closure_130_2[22]).APIError(closure_3);
          const obj9 = { type: "COLLECTIBLES_CLAIM_FAILURE", skuId, error: aPIError };
          const obj2 = closure_130_1(closure_130_2[17]);
          obj2.dispatch(obj9);
          throw aPIError;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          body = value;
          const obj10 = { type: "COLLECTIBLES_CLAIM_SUCCESS", skuId, purchases: mapped };
          body = body.body;
          mapped = undefined;
          const dispatch = closure_130_1(closure_130_2[17]).dispatch;
          const tmp35 = closure_130_1(closure_130_2[17]);
          if (body != null) {
            mapped = body.map(closure_130_13.fromServer);
          }
          dispatch(obj10);
          c4 = 0;
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
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
  });
  return obj(...arguments);
};
obj = function _validateCollectiblesRecipient() {
  obj = _asyncToGenerator(async (recipient_id, sku_id) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj4;
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.COLLECTIBLES_VALID_GIFT_RECIPIENT, query: obj4, rejectWithError: true };
              c6 = 2;
              c7 = 1;
              obj4 = { sku_id, recipient_id };
              const obj5 = { value: HTTP.get(request), done: false };
              return obj5;
            }
          } else if (1 === c6) {
            c5 = 0;
            recipient_id = closure_4;
            const captureOrIgnoreApiError = closure_131_0(closure_131_2[23]).captureOrIgnoreApiError;
            const self = this;
            const self2 = this;
            closure_131_0(closure_131_2[23]);
            const aPIError = new closure_131_0(closure_131_2[22]).APIError(recipient_id);
            const result = captureOrIgnoreApiError(aPIError);
            c7 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            c7 = 3;
            return { value: value.body.valid, done: true };
          }
        } catch (tmp18) {
          closure_4 = tmp18;
          if (0 === c5) {
            c7 = 3;
            throw tmp18;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _validateCollectiblesRecipientsBatch() {
  obj = _asyncToGenerator(async (recipient_id, sku_ids) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj4;
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.COLLECTIBLES_VALID_GIFT_RECIPIENTS_BATCH, query: obj4, rejectWithError: true };
              c6 = 2;
              c7 = 1;
              obj4 = { sku_ids, recipient_id };
              const obj5 = { value: HTTP.get(request), done: false };
              return obj5;
            }
          } else if (1 === c6) {
            c5 = 0;
            recipient_id = closure_4;
            const captureOrIgnoreApiError = closure_131_0(closure_131_2[23]).captureOrIgnoreApiError;
            const self = this;
            const self2 = this;
            closure_131_0(closure_131_2[23]);
            const aPIError = new closure_131_0(closure_131_2[22]).APIError(recipient_id);
            const result = captureOrIgnoreApiError(aPIError);
            c7 = 3;
            return { value: {}, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            c7 = 3;
            return { value: value.body, done: true };
          }
        } catch (tmp18) {
          closure_4 = tmp18;
          if (0 === c5) {
            c7 = 3;
            throw tmp18;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchCollectiblesMarketings() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let closure_3;
    const release = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (async function(arg0) {
      let PROD;
      const obj9 = closure_130_1(closure_130_2[17]);
      obj9.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
      const obj6 = { platform: closure_130_0(closure_130_2[27]).CollectiblesMarketingPlatform.MOBILE };
      if (PROD !== closure_130_0(closure_130_2[26]).CollectiblesMarketingReleaseType.PROD) {
        obj6.release = PROD;
      }
      const HTTP = closure_130_0(closure_130_2[21]).HTTP;
      const request = { url: closure_130_16.COLLECTIBLES_MARKETING, query: obj6, rejectWithError: true };
      await HTTP.get(request);
      if (2 === c5) {
        c4 = 0;
        const captureOrIgnoreApiError = closure_130_0(closure_130_2[23]).captureOrIgnoreApiError;
        const self = this;
        const self2 = this;
        closure_130_0(closure_130_2[23]);
        const aPIError = new closure_130_0(closure_130_2[22]).APIError(closure_3);
        const result = captureOrIgnoreApiError(aPIError);
        const obj3 = closure_130_1(closure_130_2[17]);
        obj3.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        return { value, done: true };
      } else {
        body = value;
        obj = { type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: closure_130_11.fromServer(body.body) };
        const dispatch = closure_130_1(closure_130_2[17]).dispatch;
        closure_130_1(closure_130_2[17]);
        dispatch(obj);
        c4 = 0;
      }
      await "IconComponent";
      body = tmp;
      PROD = release.release ?? CollectiblesMarketingReleaseType.CollectiblesMarketingReleaseType.PROD;
      return "Set";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _fetchCollectiblesShopHome() {
  obj = _asyncToGenerator(async (tab, arg1, arg2) => {
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async function(arg0, value, arg2) {
      let includeUnpublished;
      let includeUnpublished1;
      let noCache;
      let noCache1;
      let tab1;
      if (c9 === 2) {
        c9 = 3;
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
          let aPIError;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              options = undefined;
              aPIError = undefined;
              const obj6 = { type: "COLLECTIBLES_SHOP_HOME_FETCH", tab, options };
              options = closure_1;
              const dispatch2 = DispatcherDefault.dispatch;
              DispatcherDefault;
              const tmp76 = tab;
              if (closure_1 == null) {
                options = {};
              }
              dispatch2(obj6);
              let logPerf;
              const obj7 = utils_CollectiblesUtils;
              const fetchCollectiblesOptionsQuery = obj7.buildFetchCollectiblesOptionsQuery(closure_1, tmp76);
              if (closure_1 != null) {
                logPerf = closure_1.logPerf;
              }
              if (logPerf) {
                let sessionId;
                const trackShopPerf2 = CollectiblesPerfLogging.trackShopPerf;
                CollectiblesPerfLogging;
                if (closure_2 != null) {
                  sessionId = closure_2.sessionId;
                }
                const obj8 = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_HOME_FETCH_STARTED, tab, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
                tab = undefined;
                if (closure_2 != null) {
                  tab = closure_2.tab;
                }
                includeUnpublished = undefined;
                if (closure_1 != null) {
                  includeUnpublished = closure_1.includeUnpublished;
                }
                noCache = undefined;
                if (closure_1 != null) {
                  noCache = closure_1.noCache;
                }
                trackShopPerf2(obj8);
              }
              c7 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.COLLECTIBLES_SHOP, query: fetchCollectiblesOptionsQuery, rejectWithError: true };
              c8 = 2;
              c9 = 1;
              const obj9 = { value: HTTP.get(request), done: false };
              return obj9;
            }
          } else {
            if (1 === c8) {
              c7 = 0;
              closure_5 = closure_6;
              const self = this;
              const self2 = this;
              aPIError = new closure_133_0(closure_133_2[22]).APIError(closure_5);
              const obj4 = closure_133_0(closure_133_2[23]);
              const result = obj4.captureOrIgnoreApiError(aPIError);
              const obj10 = { type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE", tab, error: aPIError };
              const obj5 = closure_133_1(closure_133_2[17]);
              obj5.dispatch(obj10);
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            } else {
              options = value;
              let logPerf1;
              if (closure_1 != null) {
                logPerf1 = closure_1.logPerf;
              }
              if (logPerf1) {
                let sessionId1;
                const trackShopPerf = closure_133_0(closure_133_2[20]).trackShopPerf;
                closure_133_0(closure_133_2[20]);
                if (closure_2 != null) {
                  sessionId1 = closure_2.sessionId;
                }
                obj = { sessionId: sessionId1, checkpoint: closure_133_0(closure_133_2[20]).CollectiblesShopPerfCheckpoint.SHOP_HOME_FETCH_COMPLETED, tab: tab1, unpublishedCategoriesShown: includeUnpublished1, cacheDisabled: noCache1 };
                tab1 = undefined;
                if (closure_2 != null) {
                  tab1 = closure_2.tab;
                }
                includeUnpublished1 = undefined;
                if (closure_1 != null) {
                  includeUnpublished1 = closure_1.includeUnpublished;
                }
                noCache1 = undefined;
                if (closure_1 != null) {
                  noCache1 = closure_1.noCache;
                }
                trackShopPerf(obj);
              }
              const obj12 = { type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS", tab, shopHome: closure_133_14.fromServer(options.body) };
              const dispatch = closure_133_1(closure_133_2[17]).dispatch;
              closure_133_1(closure_133_2[17]);
              dispatch(obj12);
              c7 = 0;
            }
            c9 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp68) {
          closure_6 = tmp68;
          if (0 === c7) {
            c9 = 3;
            throw tmp68;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _maybeFetchCollectiblesShopTabLayout() {
  obj = _asyncToGenerator(async function(tab) {
    let body;
    let c0;
    let c1;
    let closure_2;
    if (1 === c5) {
      if (tab === 1) {
        let c6 = 3;
        throw value;
      } else if (tab === 2) {
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else if (!closure_130_9.isFetchingLayout(tab)) {
        const tmp = closure_130_9.getLayoutFetchError(tab);
        let status;
        if (tmp != null) {
          status = tmp.status;
        }
        if (404 !== status) {
          let status1;
          if (tmp != null) {
            status1 = tmp.status;
          }
          if (429 !== status1) {
            let c4 = 1;
            const obj6 = { type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH", tab };
            const obj10 = closure_130_1(closure_130_2[17]);
            obj10.dispatch(obj6);
            const HTTP = closure_130_0(closure_130_2[21]).HTTP;
            const obj7 = { url: closure_130_16.COLLECTIBLES_SHOP_TAB_LAYOUT(tab), rejectWithError: true, signal };
            const get = HTTP.get;
            c5 = 3;
            c6 = 1;
            const obj8 = { value: get(obj7), done: false };
            return obj8;
          }
        }
      }
    } else if (2 === c5) {
      c4 = 0;
      let closure_5 = body;
      const self = this;
      const self2 = this;
      const aPIError = new closure_130_0(closure_130_2[22]).APIError(closure_5);
      const obj9 = { type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE", tab, apiError: aPIError };
      const obj4 = closure_130_1(closure_130_2[17]);
      obj4.dispatch(obj9);
      throw aPIError;
    } else if (tab === 1) {
      c6 = 3;
      throw value;
    } else if (tab === 2) {
      c4 = 0;
      c6 = 3;
      const obj11 = { value, done: true };
      return obj11;
    } else {
      body = value;
      const obj12 = { type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS", tab, layoutId: body.body.layout_id };
      obj = closure_130_1(closure_130_2[17]);
      obj.dispatch(obj12);
      c4 = 0;
    }
    await "IconComponent";
    ({ tab: c0, abortSignal: c1 } = closure_0);
    return "Set";
  });
  return obj(...arguments);
};
const addDebugLog = CollectiblesDebugStore.addDebugLog;
let closure_10 = CollectiblesCategoriesRecord.CollectiblesCategoriesRecord;
let closure_11 = CollectiblesMarketingRecord.CollectiblesMarketingsRecord;
let closure_14 = CollectiblesShopHomeRecord.CollectiblesShopHomeRecord;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ Endpoints: closure_16, Routes, UserSettingsSections: closure_17 } = Constants);
let result = size.fileFinishedImporting("modules/collectibles/CollectiblesActionCreators.tsx");

export default { openCollectiblesShop, closeCollectiblesShop, fetchCollectiblesPurchases, fetchCollectiblesProduct, claimPremiumCollectiblesProduct };
export { openCollectiblesShop };
export { openCollectiblesShopMobile };
export const isCollectiblesShopOpen = function isCollectiblesShopOpen() {
  let isCollectiblesShopRoute;
  obj = isCollectiblesShopRoute(4737);
  const rootNavigationRef = obj.getRootNavigationRef();
  let tmp2 = !(null == rootNavigationRef || !rootNavigationRef.isReady());
  const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
  if (tmp2) {
    isCollectiblesShopRoute = function isCollectiblesShopRoute(dependencyMap) {
      let flag = "settings" !== dependencyMap.name;
      if (!flag) {
        const params = dependencyMap.params;
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
          if (isCollectiblesShopRoute(nextResult)) {
            iter.return();
            return tmp2;
          } else {
            let state = tmp2.state;
            routes = undefined;
            if (state != null) {
              routes = state.routes;
            }
            if (routes) {
              let tmp8 = searchRoutes(tmp2.state.routes);
              let tmp9 = tmp8;
              if (tmp9) {
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
  const dispatch = DispatcherDefault.dispatch;
  obj = { type: "COLLECTIBLES_SHOP_OPEN" };
  DispatcherDefault;
  const merged = Object.assign(arg0);
  dispatch(obj);
};
export { closeCollectiblesShop };
export const productDetailsOpened = function productDetailsOpened(skuId) {
  obj = DispatcherDefault;
  const obj2 = { type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId };
  obj.dispatch(obj2);
};
export const areRequestOptionsEqual = function areRequestOptionsEqual(noCache, noCache2) {
  noCache = undefined;
  if (noCache != null) {
    noCache = noCache.noCache;
  }
  let noCache1;
  if (noCache2 != null) {
    noCache1 = noCache2.noCache;
  }
  const BooleanResult = Boolean(noCache);
  let tmp4 = BooleanResult === Boolean(noCache1);
  if (tmp4) {
    let includeUnpublished;
    if (noCache != null) {
      includeUnpublished = noCache.includeUnpublished;
    }
    let includeUnpublished1;
    if (noCache2 != null) {
      includeUnpublished1 = noCache2.includeUnpublished;
    }
    const _Boolean = Boolean;
    const _Boolean2 = Boolean;
    const BooleanResult1 = Boolean(includeUnpublished);
    tmp4 = BooleanResult1 === Boolean(includeUnpublished1);
  }
  if (tmp4) {
    let includeBundles;
    if (noCache != null) {
      includeBundles = noCache.includeBundles;
    }
    let includeBundles1;
    if (noCache2 != null) {
      includeBundles1 = noCache2.includeBundles;
    }
    const _Boolean3 = Boolean;
    const _Boolean4 = Boolean;
    const BooleanResult2 = Boolean(includeBundles);
    tmp4 = BooleanResult2 === Boolean(includeBundles1);
  }
  if (tmp4) {
    let includeDynamicBlocks;
    if (noCache != null) {
      includeDynamicBlocks = noCache.includeDynamicBlocks;
    }
    let includeDynamicBlocks1;
    if (noCache2 != null) {
      includeDynamicBlocks1 = noCache2.includeDynamicBlocks;
    }
    const _Boolean5 = Boolean;
    const _Boolean6 = Boolean;
    const BooleanResult3 = Boolean(includeDynamicBlocks);
    tmp4 = BooleanResult3 === Boolean(includeDynamicBlocks1);
  }
  if (tmp4) {
    let countryCode;
    if (noCache != null) {
      countryCode = noCache.countryCode;
    }
    let countryCode1;
    if (noCache2 != null) {
      countryCode1 = noCache2.countryCode;
    }
    tmp4 = countryCode === countryCode1;
  }
  if (tmp4) {
    let paymentGateway;
    if (noCache != null) {
      paymentGateway = noCache.paymentGateway;
    }
    let paymentGateway1;
    if (noCache2 != null) {
      paymentGateway1 = noCache2.paymentGateway;
    }
    tmp4 = paymentGateway === paymentGateway1;
  }
  if (tmp4) {
    let shopHomeConfig;
    if (noCache != null) {
      shopHomeConfig = noCache.shopHomeConfig;
    }
    let shopHomeConfig1;
    if (noCache2 != null) {
      shopHomeConfig1 = noCache2.shopHomeConfig;
    }
    tmp4 = shopHomeConfig === shopHomeConfig1;
  }
  if (tmp4) {
    let skipNumCategories;
    if (noCache != null) {
      skipNumCategories = noCache.skipNumCategories;
    }
    let skipNumCategories1;
    if (noCache2 != null) {
      skipNumCategories1 = noCache2.skipNumCategories;
    }
    tmp4 = skipNumCategories === skipNumCategories1;
  }
  return tmp4;
};
export const fetchCollectiblesCategories = function fetchCollectiblesCategories() {
  return obj(...arguments);
};
export { fetchCollectiblesPurchases };
export { fetchCollectiblesProduct };
export const maybeFetchCollectiblesProduct = function maybeFetchCollectiblesProduct() {
  return obj(...arguments);
};
export const seedCollectiblesProductFromStandaloneLoad = function seedCollectiblesProductFromStandaloneLoad(memo) {
  const timestamp = Date.now();
  const items = [memo];
  obj = CollectiblesUtils;
  const result = obj.extendVariantsProducts(items);
  const iter = result[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (null == CollectiblesCategoryStore.getProduct(nextResult.skuId)) {
      let obj2 = DispatcherDefault;
      let obj3 = { type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: tmp4.skuId, product: tmp4, endedAt: timestamp };
      let dispatchResult = obj2.dispatch(obj3);
    }
    continue;
  }
};
export { claimPremiumCollectiblesProduct };
export const validateCollectiblesRecipient = function validateCollectiblesRecipient() {
  return obj(...arguments);
};
export const validateCollectiblesRecipientsBatch = function validateCollectiblesRecipientsBatch() {
  return obj(...arguments);
};
export const fetchCollectiblesMarketings = function fetchCollectiblesMarketings() {
  return obj(...arguments);
};
export const fetchCollectiblesShopHome = function fetchCollectiblesShopHome() {
  return obj(...arguments);
};
export const setShopHomeConfigOverride = function setShopHomeConfigOverride(shopHomeConfigOverride) {
  obj = DispatcherDefault;
  const obj2 = { type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride };
  obj.dispatch(obj2);
};
export const setShopLayoutUrlOverride = function setShopLayoutUrlOverride(shopLayoutUrlOverride) {
  obj = DispatcherDefault;
  const obj2 = { type: "COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE", shopLayoutUrlOverride };
  obj.dispatch(obj2);
};
export const setSkipNumCategories = function setSkipNumCategories(skipNumCategories) {
  obj = DispatcherDefault;
  const obj2 = { type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories };
  obj.dispatch(obj2);
};
export const maybeFetchCollectiblesShopTabLayout = function maybeFetchCollectiblesShopTabLayout() {
  return obj(...arguments);
};