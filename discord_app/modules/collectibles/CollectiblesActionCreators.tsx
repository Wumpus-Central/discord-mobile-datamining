// === Module 7541: CollectiblesActionCreators ===

// Module 7541 (CollectiblesActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7554 */;
import LayerActionCreators from "LayerActionCreators" /* 7587 */;
import utils_CollectiblesUtils from "utils/CollectiblesUtils" /* 7588 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7589 */;
import CollectiblesPerfLogging from "CollectiblesPerfLogging" /* 7590 */;
import CollectiblesMarketingReleaseType from "CollectiblesMarketingReleaseType" /* 7591 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import DevSettingsStore from "DevSettingsStore" /* 4559 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7542 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7558 */;
import CollectiblesShopStore from "CollectiblesShopStore" /* 7559 */;
import CollectiblesProductRecord from "CollectiblesProductRecord" /* 7544 */;
import CollectiblesPurchaseRecord from "CollectiblesPurchaseRecord" /* 7570 */;

require = fn;
function openCollectiblesShop(arg0) {
  openCollectiblesShopMobile(Object.assign(arg0, Object.assign({ tab: 0 })));
}
function openCollectiblesShopMobile(screen) {
  let obj = { type: "COLLECTIBLES_SHOP_OPEN" };
  const merged = Object.assign(screen);
  obj.dispatch(obj);
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
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
          obj = { screen: constants2.COLLECTIBLES_SHOP, params: null };
          const obj1 = { analyticsSource: screen.analyticsSource, screen, onNavigateAway: screen.onNavigateAway };
          obj.params = obj1;
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
  DispatcherDefault.dispatch({ type: "COLLECTIBLES_SHOP_CLOSE" });
  LayerActionCreators.popLayer();
}
let closure_19 = async function _fetchCollectiblesCategories(arg0, arg1) {
  closure_5 = tmp3;
  closure_4 = tmp5;
  closure_132_0 = closure_0;
  closure_132_1 = closure_1;
  closure_132_2 = closure_2;
  let options = closure_0;
  if (closure_0 == null) {
    options = {};
  }
  DispatcherDefault.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH", options });
  const fetchCollectiblesOptionsQuery = utils_CollectiblesUtils.buildFetchCollectiblesOptionsQuery(tmp96);
  value = DevSettingsStore.get("shop_show_debug_overlay");
  closure_132_3 = value;
  if (closure_0 != null) {
    const logPerf = tmp96.logPerf;
  }
  if (logPerf) {
    let sessionId;
    if (tmp98 != null) {
      sessionId = tmp98.sessionId;
    }
    let obj2 = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.CATEGORIES_FETCH_STARTED, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
    let tab;
    if (tmp98 != null) {
      tab = tmp98.tab;
    }
    obj2.tab = tab;
    let includeUnpublished;
    if (tmp96 != null) {
      includeUnpublished = tmp96.includeUnpublished;
    }
    obj2.unpublishedCategoriesShown = includeUnpublished;
    let noCache;
    if (tmp96 != null) {
      noCache = tmp96.noCache;
    }
    obj2.cacheDisabled = noCache;
    CollectiblesPerfLogging.trackShopPerf(obj2);
    CollectiblesPerfLogging;
  }
  if (value) {
    const _JSON = JSON;
    const _HermesInternal3 = HermesInternal;
    addDebugLog("fetchCollectiblesCategories started: " + JSON.stringify(fetchCollectiblesOptionsQuery, null, 2));
  }
  const HTTP = HTTPUtils.HTTP;
  const request = { url: value2.COLLECTIBLES_CATEGORIES_V2, query: fetchCollectiblesOptionsQuery, rejectWithError: true };
  await HTTP.get(request);
  if (1 === tmp8) {
    c7 = 0;
    closure_132_6 = closure_6;
    const aPIError = new closure_133_0(closure_133_2[22]).APIError(closure_132_6);
    closure_132_5 = aPIError;
    let obj5 = closure_133_0(closure_133_2[23]);
    const result = obj5.captureOrIgnoreApiError(closure_132_5);
    let obj6 = closure_133_1(closure_133_2[17]);
    obj6.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE", error: closure_132_5 });
    if (closure_132_3) {
      const _HermesInternal2 = HermesInternal;
      closure_133_7("fetchCollectiblesCategories failed: " + closure_132_5.message);
    }
    c9 = 3;
  } else if (arg0 === 1) {
    c9 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    closure_132_4 = arg1;
    let logPerf1;
    if (closure_132_0 != null) {
      logPerf1 = closure_132_0.logPerf;
    }
    if (logPerf1) {
      let sessionId1;
      if (closure_132_2 != null) {
        sessionId1 = closure_132_2.sessionId;
      }
      obj5 = { sessionId: sessionId1, checkpoint: closure_133_0(closure_133_2[20]).CollectiblesShopPerfCheckpoint.CATEGORIES_FETCH_COMPLETED, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
      let tab1;
      if (closure_132_2 != null) {
        tab1 = closure_132_2.tab;
      }
      obj5.tab = tab1;
      let includeUnpublished1;
      if (closure_132_0 != null) {
        includeUnpublished1 = closure_132_0.includeUnpublished;
      }
      obj5.unpublishedCategoriesShown = includeUnpublished1;
      let noCache1;
      if (closure_132_0 != null) {
        noCache1 = closure_132_0.noCache;
      }
      obj5.cacheDisabled = noCache1;
      closure_133_0(closure_133_2[20]).trackShopPerf(obj5);
      closure_133_0(closure_133_2[20]);
    }
    if (closure_132_3) {
      const _HermesInternal = HermesInternal;
      closure_133_7("fetchCollectiblesCategories completed " + closure_132_4.body.categories.length + " categories");
    }
    obj2 = closure_133_1(closure_133_2[17]);
    obj6 = { type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS", categories: closure_133_10.fromServer(closure_132_4.body), noOp: closure_132_1 };
    obj2.dispatch(obj6);
    c7 = 0;
  }
  return arg1;
};
function fetchCollectiblesPurchases() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_20 = async function _fetchCollectiblesPurchases(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
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
          closure_1 = tmp3;
          closure_0 = tmp5;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          closure_128_2 = undefined;
          if (isFetching.isFetching) {
            c5 = 3;
          } else {
            DispatcherDefault.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
            value = DevSettingsStore.get("shop_show_debug_overlay");
            closure_128_0 = value;
            if (value) {
              addDebugLog("fetchCollectiblesPurchases started");
            }
            c3 = 1;
            const request = { url: constants.COLLECTIBLES_PURCHASES, rejectWithError: true, query: null };
            const obj1 = { variants_return_style: ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP };
            request.query = obj1;
            if (value) {
              const _JSON = JSON;
              const _HermesInternal3 = HermesInternal;
              addDebugLog("fetchCollectiblesPurchases request: " + JSON.stringify(request, null, 2));
            }
            const HTTP = HTTPUtils.HTTP;
            c4 = 2;
            c5 = 1;
            const obj2 = { value: HTTP.get(request), done: false };
            return obj2;
          }
        }
      } else if (1 === tmp8) {
        c3 = 0;
        closure_128_3 = closure_2;
        const aPIError = new closure_129_0(closure_129_2[22]).APIError(closure_128_3);
        closure_128_2 = aPIError;
        let obj3 = closure_129_0(closure_129_2[23]);
        const result = obj3.captureOrIgnoreApiError(closure_128_2);
        if (closure_128_0) {
          const _HermesInternal2 = HermesInternal;
          closure_129_7("fetchCollectiblesPurchases failed: " + closure_128_2.message);
        }
        let obj4 = closure_129_1(closure_129_2[17]);
        obj3 = { type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE", error: closure_128_2 };
        obj4.dispatch(obj3);
        throw closure_128_2;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_1 = value;
        if (closure_128_0) {
          const _HermesInternal = HermesInternal;
          closure_129_7("fetchCollectiblesPurchases completed with " + closure_128_1.body.length + " purchases");
        }
        obj = closure_129_1(closure_129_2[17]);
        obj4 = { type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: null };
        const body = closure_128_1.body;
        obj4.purchases = body.map(closure_129_13.fromServer);
        obj.dispatch(obj4);
        c3 = 0;
      }
      c3 = 0;
      c5 = 3;
      const obj5 = { value, done: true };
      return obj5;
    } catch (tmp62) {
      closure_2 = tmp62;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp62;
      } else {
        c4 = tmp;
      }
    }
  }
};
function fetchCollectiblesProduct() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_22 = async function _fetchCollectiblesProduct(skuId, arg1) {
  closure_1 = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp3;
    closure_130_0 = skuId;
    const _Date3 = Date;
    DispatcherDefault.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH", skuId, startedAt: Date.now() });
    const obj2 = { locale: locale.locale };
    if (closure_1 != null) {
      const countryCode = tmp55.countryCode;
    }
    if (null !== countryCode) {
      let countryCode1;
      if (tmp55 != null) {
        countryCode1 = tmp55.countryCode;
      }
      obj2.country_code = countryCode1;
    }
    if (closure_1 != null) {
      const paymentGateway = tmp55.paymentGateway;
    }
    if (null !== paymentGateway) {
      let paymentGateway1;
      if (tmp55 != null) {
        paymentGateway1 = tmp55.paymentGateway;
      }
      obj2.payment_gateway = paymentGateway1;
    }
    if (closure_1 != null) {
      const includeBundles = tmp55.includeBundles;
    }
    if (null !== includeBundles) {
      let includeBundles1;
      if (tmp55 != null) {
        includeBundles1 = tmp55.includeBundles;
      }
      obj2.include_bundles = includeBundles1;
    }
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_2_16.COLLECTIBLES_PRODUCTS(skuId), rejectWithError: true, query: obj2 };
    await HTTP.get(request);
    if (1 === tmp7) {
      c5 = 0;
      closure_130_3 = closure_4;
      const aPIError = new closure_131_0(closure_131_2[22]).APIError(closure_130_3);
      closure_130_2 = aPIError;
      const result = closure_131_0(closure_131_2[23]).captureOrIgnoreApiError(closure_130_2);
      closure_131_1(closure_131_2[17]);
      const obj4 = { type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE", skuId: closure_130_0, error: closure_130_2, endedAt: null };
      const _Date2 = Date;
      obj4.endedAt = Date.now();
      obj4.dispatch(obj4);
      c7 = 3;
      closure_131_0(closure_131_2[23]);
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_130_1 = value;
      const obj5 = { type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: closure_130_0, product: closure_131_12.fromServer(closure_130_1.body), endedAt: null };
      const _Date = Date;
      obj5.endedAt = Date.now();
      closure_131_1(closure_131_2[17]).dispatch(obj5);
      c5 = 0;
      closure_131_1(closure_131_2[17]);
    }
    return value;
  })();
};
let closure_23 = async function _maybeFetchCollectiblesProduct(arg0, value) {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c2 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          let obj1 = fetchingProduct;
          let isFetchingProductResult = fetchingProduct.isFetchingProduct(closure_0);
          if (!isFetchingProductResult) {
            isFetchingProductResult = obj1.isProductFetchBackedOff(tmp5);
          }
          if (!isFetchingProductResult) {
            c3 = 1;
            c2 = 1;
            obj1 = { value: fetchCollectiblesProduct(tmp5, tmp6), done: false };
            return obj1;
          }
          tmp6 = closure_1;
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
      return { value: "HermesInternal", done: null };
    } catch (tmp9) {
      c2 = tmp;
      throw tmp9;
    }
  }
};
function claimPremiumCollectiblesProduct() {
  const self = this;
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_24 = async function _claimPremiumCollectiblesProduct(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
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
          closure_1 = tmp7;
          closure_129_0 = sku_id;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          let obj1 = { type: "COLLECTIBLES_CLAIM", skuId: sku_id };
          DispatcherDefault.dispatch(obj1);
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const request = { url: constants.COLLECTIBLES_CLAIM, body: null, rejectWithError: true };
          const obj2 = { sku_id };
          request.body = obj2;
          c5 = 2;
          c6 = 1;
          const obj3 = { value: HTTP.put(request), done: false };
          return obj3;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_3 = closure_3;
        const aPIError = new closure_130_0(closure_130_2[22]).APIError(closure_129_3);
        closure_129_2 = aPIError;
        obj1 = closure_130_1(closure_130_2[17]);
        const obj4 = { type: "COLLECTIBLES_CLAIM_FAILURE", skuId: closure_129_0, error: closure_129_2 };
        obj1.dispatch(obj4);
        throw closure_129_2;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_129_1 = value;
        const obj5 = { type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: closure_129_0, purchases: null };
        const body = closure_129_1.body;
        let mapped;
        if (body != null) {
          mapped = body.map(closure_130_13.fromServer);
        }
        obj5.purchases = mapped;
        closure_130_1(closure_130_2[17]).dispatch(obj5);
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
};
let closure_25 = async function _validateCollectiblesRecipient(recipient_id, sku_id) {
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.COLLECTIBLES_VALID_GIFT_RECIPIENT, query: null, rejectWithError: true };
            const obj1 = { sku_id, recipient_id };
            request.query = obj1;
            c6 = 2;
            c7 = 1;
            let obj2 = { value: HTTP.get(request), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_0 = closure_4;
          obj2 = closure_131_0(closure_131_2[23]);
          const aPIError = new closure_131_0(closure_131_2[22]).APIError(closure_130_0);
          const result = obj2.captureOrIgnoreApiError(aPIError);
          c7 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c5 = 0;
          c7 = 3;
          obj = { value: value.body.valid, done: true };
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
};
let closure_26 = async function _validateCollectiblesRecipientsBatch(recipient_id, sku_ids) {
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.COLLECTIBLES_VALID_GIFT_RECIPIENTS_BATCH, query: null, rejectWithError: true };
            const obj1 = { sku_ids, recipient_id };
            request.query = obj1;
            c6 = 2;
            c7 = 1;
            let obj2 = { value: HTTP.get(request), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_0 = closure_4;
          obj2 = closure_131_0(closure_131_2[23]);
          const aPIError = new closure_131_0(closure_131_2[22]).APIError(closure_130_0);
          const result = obj2.captureOrIgnoreApiError(aPIError);
          c7 = 3;
          const obj3 = { value: {}, done: true };
          return obj3;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c5 = 0;
          c7 = 3;
          obj = { value: value.body, done: true };
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
};
let closure_27 = async function _fetchCollectiblesMarketings(arg0) {
  let release = arg0;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  let iter = (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
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
            closure_1 = tmp7;
            closure_129_0 = undefined;
            let PROD = release.release;
            if (PROD === undefined) {
              PROD = CollectiblesMarketingReleaseType.CollectiblesMarketingReleaseType.PROD;
            }
            closure_129_0 = PROD;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            closure_130_1(closure_130_2[17]).dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
            const obj2 = { platform: closure_130_0(closure_130_2[27]).CollectiblesMarketingPlatform.MOBILE };
            closure_129_1 = obj2;
            if (closure_129_0 !== closure_130_0(closure_130_2[26]).CollectiblesMarketingReleaseType.PROD) {
              closure_129_1.release = closure_129_0;
            }
            c4 = 1;
            const HTTP = closure_130_0(closure_130_2[21]).HTTP;
            const request = { url: closure_130_16.COLLECTIBLES_MARKETING, query: closure_129_1, rejectWithError: true };
            c5 = 3;
            c6 = 1;
            let obj3 = { value: HTTP.get(request), done: false };
            return obj3;
          }
        } else {
          if (2 === tmp7) {
            c4 = 0;
            closure_129_3 = closure_3;
            obj3 = closure_130_0(closure_130_2[23]);
            const aPIError = new closure_130_0(closure_130_2[22]).APIError(closure_129_3);
            const result = obj3.captureOrIgnoreApiError(aPIError);
            let obj4 = closure_130_1(closure_130_2[17]);
            obj4.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
            c6 = 3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_2 = value;
            obj = closure_130_1(closure_130_2[17]);
            obj4 = { type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: closure_130_11.fromServer(closure_129_2.body) };
            obj.dispatch(obj4);
            c4 = 0;
          }
          c4 = 0;
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
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
};
let closure_28 = async function _fetchCollectiblesShopHome(tab, arg1, arg2) {
  closure_1 = arg1;
  closure_2 = arg2;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0, value, arg2) => {
    closure_5 = tmp3;
    closure_132_0 = tab;
    closure_132_1 = closure_1;
    closure_132_2 = closure_2;
    const obj1 = { type: "COLLECTIBLES_SHOP_HOME_FETCH", tab, options: null };
    options = closure_1;
    if (closure_1 == null) {
      options = {};
    }
    obj1.options = options;
    DispatcherDefault.dispatch(obj1);
    const fetchCollectiblesOptionsQuery = utils_CollectiblesUtils.buildFetchCollectiblesOptionsQuery(tmp80, tab);
    if (closure_1 != null) {
      const logPerf = tmp80.logPerf;
    }
    if (logPerf) {
      let sessionId;
      if (tmp81 != null) {
        sessionId = tmp81.sessionId;
      }
      let obj2 = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_HOME_FETCH_STARTED, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
      tab = undefined;
      if (tmp81 != null) {
        tab = tmp81.tab;
      }
      obj2.tab = tab;
      let includeUnpublished;
      if (tmp80 != null) {
        includeUnpublished = tmp80.includeUnpublished;
      }
      obj2.unpublishedCategoriesShown = includeUnpublished;
      let noCache;
      if (tmp80 != null) {
        noCache = tmp80.noCache;
      }
      obj2.cacheDisabled = noCache;
      CollectiblesPerfLogging.trackShopPerf(obj2);
      CollectiblesPerfLogging;
    }
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants.COLLECTIBLES_SHOP, query: fetchCollectiblesOptionsQuery, rejectWithError: true };
    await HTTP.get(request);
    if (1 === tmp7) {
      c7 = 0;
      closure_132_5 = closure_6;
      const aPIError = new closure_133_0(closure_133_2[22]).APIError(closure_132_5);
      closure_132_4 = aPIError;
      let obj5 = closure_133_0(closure_133_2[23]);
      const result = obj5.captureOrIgnoreApiError(closure_132_4);
      let obj6 = closure_133_1(closure_133_2[17]);
      obj6.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE", tab: closure_132_0, error: closure_132_4 });
      c9 = 3;
    } else if (arg0 === 1) {
      c9 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_132_3 = value;
      let logPerf1;
      if (closure_132_1 != null) {
        logPerf1 = closure_132_1.logPerf;
      }
      if (logPerf1) {
        let sessionId1;
        if (closure_132_2 != null) {
          sessionId1 = closure_132_2.sessionId;
        }
        obj5 = { sessionId: sessionId1, checkpoint: closure_133_0(closure_133_2[20]).CollectiblesShopPerfCheckpoint.SHOP_HOME_FETCH_COMPLETED, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
        let tab1;
        if (closure_132_2 != null) {
          tab1 = closure_132_2.tab;
        }
        obj5.tab = tab1;
        let includeUnpublished1;
        if (closure_132_1 != null) {
          includeUnpublished1 = closure_132_1.includeUnpublished;
        }
        obj5.unpublishedCategoriesShown = includeUnpublished1;
        let noCache1;
        if (closure_132_1 != null) {
          noCache1 = closure_132_1.noCache;
        }
        obj5.cacheDisabled = noCache1;
        closure_133_0(closure_133_2[20]).trackShopPerf(obj5);
        closure_133_0(closure_133_2[20]);
      }
      obj2 = closure_133_1(closure_133_2[17]);
      obj6 = { type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS", tab: closure_132_0, shopHome: closure_133_14.fromServer(closure_132_3.body) };
      obj2.dispatch(obj6);
      c7 = 0;
    }
    return value;
  })();
};
let closure_29 = async function _claimCollectiblesCategoryReward(category_id, skuId) {
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = skuId;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            let obj1 = { type: "COLLECTIBLES_CLAIM", skuId };
            DispatcherDefault.dispatch(obj1);
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.COLLECTIBLES_CLAIM_CATEGORY_REWARD, body: null, rejectWithError: true };
            const obj2 = { category_id };
            request.body = obj2;
            c6 = 2;
            c7 = 1;
            const obj3 = { value: HTTP.put(request), done: false };
            return obj3;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_3 = closure_4;
          const aPIError = new closure_131_0(closure_131_2[22]).APIError(closure_130_3);
          closure_130_2 = aPIError;
          obj1 = closure_131_1(closure_131_2[17]);
          const obj4 = { type: "COLLECTIBLES_CLAIM_FAILURE", skuId: closure_130_0, error: closure_130_2 };
          obj1.dispatch(obj4);
          throw closure_130_2;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_130_1 = value;
          const obj5 = { type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: closure_130_0, purchases: null };
          const body = closure_130_1.body;
          let mapped;
          if (body != null) {
            mapped = body.map(closure_131_13.fromServer);
          }
          obj5.purchases = mapped;
          closure_131_1(closure_131_2[17]).dispatch(obj5);
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
};
let closure_30 = async function _maybeFetchCollectiblesShopTabLayout(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
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
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ tab: closure_129_0, abortSignal: closure_129_1 } = closure_0);
          let layoutFetchError;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            if (!closure_130_9.isFetchingLayout(closure_129_0)) {
              layoutFetchError = closure_130_9.getLayoutFetchError(closure_129_0);
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
                  const obj2 = { type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH", tab: closure_129_0 };
                  closure_130_1(closure_130_2[17]).dispatch(obj2);
                  const HTTP = closure_130_0(closure_130_2[21]).HTTP;
                  let obj3 = { url: closure_130_16.COLLECTIBLES_SHOP_TAB_LAYOUT(closure_129_0), rejectWithError: true, signal: closure_129_1 };
                  c5 = 3;
                  c6 = 1;
                  const obj4 = { value: HTTP.get(obj3), done: false };
                  return obj4;
                }
              }
            }
            c6 = 3;
          }
        } else if (2 === tmp7) {
          c4 = 0;
          closure_129_5 = closure_3;
          const aPIError = new closure_130_0(closure_130_2[22]).APIError(closure_129_5);
          closure_129_4 = aPIError;
          obj3 = closure_130_1(closure_130_2[17]);
          const obj5 = { type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE", tab: closure_129_0, apiError: closure_129_4 };
          obj3.dispatch(obj5);
          throw closure_129_4;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_3 = value;
          obj = closure_130_1(closure_130_2[17]);
          const obj6 = { type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS", tab: closure_129_0, layoutId: closure_129_3.body.layout_id };
          obj.dispatch(obj6);
          c4 = 0;
        }
        c4 = 0;
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      }
    } catch (tmp39) {
      closure_3 = tmp39;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp39;
      } else {
        c5 = tmp;
      }
    }
  }
};
const addDebugLog = fn(7557).addDebugLog;
let closure_10 = fn(7560).CollectiblesCategoriesRecord;
let closure_11 = fn(7564).CollectiblesMarketingsRecord;
let closure_14 = fn(7571).CollectiblesShopHomeRecord;
const constants = fn(1076).CollectiblesMobileShopScreen;
const Constants = fn(1074);
({ Endpoints: closure_16, Routes, UserSettingsSections: closure_17 } = Constants);
const CollectiblesMarketingsStore = fn(7585);
const CollectiblesShopHomeStore = fn(7586);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/CollectiblesActionCreators.tsx");

export default { openCollectiblesShop, closeCollectiblesShop, fetchCollectiblesPurchases, fetchCollectiblesProduct, claimPremiumCollectiblesProduct };
export { openCollectiblesShop };
export { openCollectiblesShopMobile };
export const isCollectiblesShopOpen = function isCollectiblesShopOpen() {
  const rootNavigationRef = isCollectiblesShopRoute(4418).getRootNavigationRef();
  const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
  let tmp2 = !tmp;
  if (!tmp) {
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
              if (tmp8) {
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
  const obj = { type: "COLLECTIBLES_SHOP_OPEN" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
};
export { closeCollectiblesShop };
export const productDetailsOpened = function productDetailsOpened(skuId) {
  const obj = { type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId };
  obj.dispatch(obj);
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
  let tmp4 = Boolean(noCache) === Boolean(noCache1);
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
    tmp4 = Boolean(includeUnpublished) === Boolean(includeUnpublished1);
    const BooleanResult1 = Boolean(includeUnpublished);
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
    tmp4 = Boolean(includeBundles) === Boolean(includeBundles1);
    const BooleanResult2 = Boolean(includeBundles);
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
    tmp4 = Boolean(includeDynamicBlocks) === Boolean(includeDynamicBlocks1);
    const BooleanResult3 = Boolean(includeDynamicBlocks);
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
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { fetchCollectiblesPurchases };
export { fetchCollectiblesProduct };
export const maybeFetchCollectiblesProduct = function maybeFetchCollectiblesProduct() {
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const seedCollectiblesProductFromStandaloneLoad = function seedCollectiblesProductFromStandaloneLoad(memo) {
  const timestamp = Date.now();
  let obj = CollectiblesUtils;
  const items = [memo];
  const result = obj.extendVariantsProducts(items);
  const iter = result[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (null == CollectiblesCategoryStore.getProduct(nextResult.skuId)) {
      let obj2 = DispatcherDefault;
      obj = { type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: null, product: null, endedAt: null };
      obj.skuId = tmp4.skuId;
      obj.product = tmp4;
      obj.endedAt = timestamp;
      let dispatchResult = obj2.dispatch(obj);
    }
    continue;
  }
};
export { claimPremiumCollectiblesProduct };
export const validateCollectiblesRecipient = function validateCollectiblesRecipient() {
  const self = this;
  const apply = closure_25.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const validateCollectiblesRecipientsBatch = function validateCollectiblesRecipientsBatch() {
  const self = this;
  const apply = closure_26.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchCollectiblesMarketings = function fetchCollectiblesMarketings() {
  const self = this;
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchCollectiblesShopHome = function fetchCollectiblesShopHome() {
  const self = this;
  const apply = closure_28.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setShopHomeConfigOverride = function setShopHomeConfigOverride(shopHomeConfigOverride) {
  const obj = { type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride };
  obj.dispatch(obj);
};
export const setShopLayoutUrlOverride = function setShopLayoutUrlOverride(shopLayoutUrlOverride) {
  const obj = { type: "COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE", shopLayoutUrlOverride };
  obj.dispatch(obj);
};
export const setSkipNumCategories = function setSkipNumCategories(skipNumCategories) {
  const obj = { type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories };
  obj.dispatch(obj);
};
export const claimCollectiblesCategoryReward = function claimCollectiblesCategoryReward() {
  const self = this;
  const apply = closure_29.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const maybeFetchCollectiblesShopTabLayout = function maybeFetchCollectiblesShopTabLayout() {
  const self = this;
  const apply = closure_30.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};