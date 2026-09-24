// discord_app/modules/collectibles/CollectiblesActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import RootNavigationRef from "../main_tabs_v2/RootNavigationRef.native.tsx";
import CollectiblesUtils from "CollectiblesUtils.tsx";
import LayerActionCreators from "../../actions/LayerActionCreators.tsx";
import utils_CollectiblesUtils from "utils/CollectiblesUtils.tsx";
import ShopVariantsReturnStyle from "../../../discord_common/js/shared/shared-constants/ShopVariantsReturnStyle.tsx";
import CollectiblesPerfLogging from "utils/CollectiblesPerfLogging.tsx";
import CollectiblesMarketingReleaseType from "../../../discord_common/js/shared/shared-constants/CollectiblesMarketingReleaseType.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import DevSettingsStore from "../devtools/dev_settings/DevSettingsStore.tsx";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import CollectiblesCategoryStore from "CollectiblesCategoryStore.tsx";
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore.tsx";
import CollectiblesShopStore from "CollectiblesShopStore.tsx";
import CollectiblesProductRecord from "records/CollectiblesProductRecord.tsx";
import CollectiblesPurchaseRecord from "records/CollectiblesPurchaseRecord.tsx";

require = fn;
function openCollectiblesShop(arg0) {
  ({ tab, initialCollectionId } = arg0);
  openCollectiblesShopMobile(Object.assign(arg0, Object.assign({ tab: 0, initialCollectionId: 0 })));
}
function openCollectiblesShopMobile(screen) {
  const merged = Object.assign(screen);
  DispatcherDefault.dispatch({ type: "COLLECTIBLES_SHOP_OPEN" });
  const obj2 = { type: "COLLECTIBLES_SHOP_OPEN" };
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      screen = screen.screen;
      if (screen != null) {
        const currentRoute = rootNavigationRef.getCurrentRoute();
        let screen1;
        if (currentRoute != null) {
          const params = currentRoute.params;
          if (params != null) {
            screen1 = params.screen;
          }
        }
        if (screen1 !== screen) {
          const obj4 = { screen: constants2.COLLECTIBLES_SHOP, params: null };
          const obj5 = { analyticsSource: screen.analyticsSource, screen, onNavigateAway: screen.onNavigateAway };
          obj4.params = obj5;
          rootNavigationRef.navigate("settings", obj4);
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
let closure_19 = async function _fetchCollectiblesCategories(arg0) {
  closure_5 = tmp3;
  closure_4 = tmp5;
  closure_132_0 = _require;
  closure_132_1 = closure_1;
  closure_132_2 = dependencyMap;
  let options = _require;
  if (_require == null) {
    options = {};
  }
  DispatcherDefault.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH", options });
  const fetchCollectiblesOptionsQuery = utils_CollectiblesUtils.buildFetchCollectiblesOptionsQuery(_require);
  value = DevSettingsStore.get("shop_show_debug_overlay");
  closure_132_3 = value;
  if (_require != null) {
    const logPerf = _require.logPerf;
  }
  if (logPerf) {
    let sessionId;
    if (dependencyMap != null) {
      sessionId = dependencyMap.sessionId;
    }
    const obj8 = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.CATEGORIES_FETCH_STARTED, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
    let tab;
    if (dependencyMap != null) {
      tab = dependencyMap.tab;
    }
    obj8.tab = tab;
    let includeUnpublished;
    if (_require != null) {
      includeUnpublished = _require.includeUnpublished;
    }
    obj8.unpublishedCategoriesShown = includeUnpublished;
    let noCache;
    if (_require != null) {
      noCache = _require.noCache;
    }
    obj8.cacheDisabled = noCache;
    CollectiblesPerfLogging.trackShopPerf(obj8);
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
    const result = closure_133_0(closure_133_2[23]).captureOrIgnoreApiError(closure_132_5);
    closure_133_0(closure_133_2[23]);
    closure_133_1(closure_133_2[17]).dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE", error: closure_132_5 });
    if (closure_132_3) {
      const _HermesInternal2 = HermesInternal;
      closure_133_7("fetchCollectiblesCategories failed: " + closure_132_5.message);
    }
    c9 = 3;
    closure_133_1(closure_133_2[17]);
  } else if (arg0 === 1) {
    c9 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_132_4 = value;
    let logPerf1;
    if (closure_132_0 != null) {
      logPerf1 = closure_132_0.logPerf;
    }
    if (logPerf1) {
      let sessionId1;
      if (closure_132_2 != null) {
        sessionId1 = closure_132_2.sessionId;
      }
      const obj13 = { sessionId: sessionId1, checkpoint: closure_133_0(closure_133_2[20]).CollectiblesShopPerfCheckpoint.CATEGORIES_FETCH_COMPLETED, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
      let tab1;
      if (closure_132_2 != null) {
        tab1 = closure_132_2.tab;
      }
      obj13.tab = tab1;
      let includeUnpublished1;
      if (closure_132_0 != null) {
        includeUnpublished1 = closure_132_0.includeUnpublished;
      }
      obj13.unpublishedCategoriesShown = includeUnpublished1;
      let noCache1;
      if (closure_132_0 != null) {
        noCache1 = closure_132_0.noCache;
      }
      obj13.cacheDisabled = noCache1;
      closure_133_0(closure_133_2[20]).trackShopPerf(obj13);
      closure_133_0(closure_133_2[20]);
    }
    if (closure_132_3) {
      const _HermesInternal = HermesInternal;
      closure_133_7("fetchCollectiblesCategories completed " + closure_132_4.body.categories.length + " categories");
    }
    closure_133_1(closure_133_2[17]).dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS", categories: closure_133_10.fromServer(closure_132_4.body), noOp: closure_132_1 });
    c7 = 0;
    closure_133_1(closure_133_2[17]);
    { type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS", categories: closure_133_10.fromServer(closure_132_4.body), noOp: closure_132_1 };
  }
  return value;
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
let closure_20 = async function _fetchCollectiblesPurchases() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
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
            const obj6 = { variants_return_style: ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP };
            request.query = obj6;
            if (value) {
              const _JSON = JSON;
              const _HermesInternal3 = HermesInternal;
              addDebugLog("fetchCollectiblesPurchases request: " + JSON.stringify(request, null, 2));
            }
            const HTTP = HTTPUtils.HTTP;
            c4 = 2;
            c5 = 1;
            const obj8 = { value: HTTP.get(request), done: false };
            return obj8;
          }
        }
      } else if (1 === tmp8) {
        c3 = 0;
        closure_128_3 = closure_2;
        const aPIError = new closure_129_0(closure_129_2[22]).APIError(closure_128_3);
        closure_128_2 = aPIError;
        const result = closure_129_0(closure_129_2[23]).captureOrIgnoreApiError(closure_128_2);
        if (closure_128_0) {
          const _HermesInternal2 = HermesInternal;
          closure_129_7("fetchCollectiblesPurchases failed: " + closure_128_2.message);
        }
        const obj4 = closure_129_0(closure_129_2[23]);
        const obj9 = { type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE", error: closure_128_2 };
        closure_129_1(closure_129_2[17]).dispatch(obj9);
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
        const obj10 = { type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: null };
        const body = closure_128_1.body;
        obj10.purchases = body.map(closure_129_13.fromServer);
        closure_129_1(closure_129_2[17]).dispatch(obj10);
        c3 = 0;
        const obj = closure_129_1(closure_129_2[17]);
      }
      c3 = 0;
      c5 = 3;
      const obj11 = { value, done: true };
      return obj11;
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
let closure_22 = async function _fetchCollectiblesProduct() {
  closure_1 = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp3;
    closure_130_0 = skuId;
    const _Date3 = Date;
    DispatcherDefault.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH", skuId, startedAt: Date.now() });
    const obj7 = { locale: locale.locale };
    if (closure_1 != null) {
      const countryCode = closure_1.countryCode;
    }
    if (null !== countryCode) {
      let countryCode1;
      if (closure_1 != null) {
        countryCode1 = closure_1.countryCode;
      }
      obj7.country_code = countryCode1;
    }
    if (closure_1 != null) {
      const paymentGateway = closure_1.paymentGateway;
    }
    if (null !== paymentGateway) {
      let paymentGateway1;
      if (closure_1 != null) {
        paymentGateway1 = closure_1.paymentGateway;
      }
      obj7.payment_gateway = paymentGateway1;
    }
    if (closure_1 != null) {
      const includeBundles = closure_1.includeBundles;
    }
    if (null !== includeBundles) {
      let includeBundles1;
      if (closure_1 != null) {
        includeBundles1 = closure_1.includeBundles;
      }
      obj7.include_bundles = includeBundles1;
    }
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_2_16.COLLECTIBLES_PRODUCTS(skuId), rejectWithError: true, query: obj7 };
    await HTTP.get(request);
    if (1 === tmp7) {
      c5 = 0;
      closure_130_3 = closure_4;
      const aPIError = new closure_131_0(closure_131_2[22]).APIError(closure_130_3);
      closure_130_2 = aPIError;
      const result = closure_131_0(closure_131_2[23]).captureOrIgnoreApiError(closure_130_2);
      closure_131_0(closure_131_2[23]);
      const obj9 = { type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE", skuId: closure_130_0, error: closure_130_2, endedAt: null };
      const _Date2 = Date;
      obj9.endedAt = Date.now();
      closure_131_1(closure_131_2[17]).dispatch(obj9);
      c7 = 3;
      closure_131_1(closure_131_2[17]);
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_130_1 = value;
      const obj10 = { type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: closure_130_0, product: closure_131_12.fromServer(closure_130_1.body), endedAt: null };
      const _Date = Date;
      obj10.endedAt = Date.now();
      closure_131_1(closure_131_2[17]).dispatch(obj10);
      c5 = 0;
      closure_131_1(closure_131_2[17]);
    }
    return value;
  })();
};
let closure_23 = async function _maybeFetchCollectiblesProduct(arg0) {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          let isFetchingProductResult = fetchingProduct.isFetchingProduct(closure_0);
          if (!isFetchingProductResult) {
            isFetchingProductResult = fetchingProduct.isProductFetchBackedOff(closure_0);
          }
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
        const obj = { value, done: true };
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
let closure_24 = async function _claimPremiumCollectiblesProduct(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = sku_id;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          const obj5 = { type: "COLLECTIBLES_CLAIM", skuId: sku_id };
          DispatcherDefault.dispatch(obj5);
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const request = { url: constants.COLLECTIBLES_CLAIM, body: null, rejectWithError: true };
          const obj6 = { sku_id };
          request.body = obj6;
          c5 = 2;
          c6 = 1;
          const obj8 = { value: HTTP.put(request), done: false };
          return obj8;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_3 = closure_3;
        const aPIError = new closure_130_0(closure_130_2[22]).APIError(closure_129_3);
        closure_129_2 = aPIError;
        const obj10 = { type: "COLLECTIBLES_CLAIM_FAILURE", skuId: closure_129_0, error: closure_129_2 };
        closure_130_1(closure_130_2[17]).dispatch(obj10);
        throw closure_129_2;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_129_1 = value;
        const obj11 = { type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: closure_129_0, purchases: null };
        const body = closure_129_1.body;
        let mapped;
        if (body != null) {
          mapped = body.map(closure_130_13.fromServer);
        }
        obj11.purchases = mapped;
        closure_130_1(closure_130_2[17]).dispatch(obj11);
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
let closure_25 = async function _validateCollectiblesRecipient() {
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.COLLECTIBLES_VALID_GIFT_RECIPIENT, query: null, rejectWithError: true };
            const obj5 = { sku_id, recipient_id };
            request.query = obj5;
            c6 = 2;
            c7 = 1;
            const obj6 = { value: HTTP.get(request), done: false };
            return obj6;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_0 = closure_4;
          const aPIError = new closure_131_0(closure_131_2[22]).APIError(closure_130_0);
          const result = closure_131_0(closure_131_2[23]).captureOrIgnoreApiError(aPIError);
          c7 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c5 = 0;
          c7 = 3;
          const obj = { value: value.body.valid, done: true };
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
let closure_26 = async function _validateCollectiblesRecipientsBatch() {
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.COLLECTIBLES_VALID_GIFT_RECIPIENTS_BATCH, query: null, rejectWithError: true };
            const obj5 = { sku_ids, recipient_id };
            request.query = obj5;
            c6 = 2;
            c7 = 1;
            const obj6 = { value: HTTP.get(request), done: false };
            return obj6;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_0 = closure_4;
          const aPIError = new closure_131_0(closure_131_2[22]).APIError(closure_130_0);
          const result = closure_131_0(closure_131_2[23]).captureOrIgnoreApiError(aPIError);
          c7 = 3;
          const obj7 = { value: {}, done: true };
          return obj7;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c5 = 0;
          c7 = 3;
          const obj = { value: value.body, done: true };
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
  let iter = (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
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
            return { value: "flex", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_130_1(closure_130_2[17]).dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
            const obj7 = { platform: closure_130_0(closure_130_2[27]).CollectiblesMarketingPlatform.MOBILE };
            closure_129_1 = obj7;
            if (closure_129_0 !== closure_130_0(closure_130_2[26]).CollectiblesMarketingReleaseType.PROD) {
              closure_129_1.release = closure_129_0;
            }
            c4 = 1;
            const HTTP = closure_130_0(closure_130_2[21]).HTTP;
            const request = { url: closure_130_16.COLLECTIBLES_MARKETING, query: closure_129_1, rejectWithError: true };
            c5 = 3;
            c6 = 1;
            const obj8 = { value: HTTP.get(request), done: false };
            return obj8;
          }
        } else {
          if (2 === tmp7) {
            c4 = 0;
            closure_129_3 = closure_3;
            const aPIError = new closure_130_0(closure_130_2[22]).APIError(closure_129_3);
            const result = closure_130_0(closure_130_2[23]).captureOrIgnoreApiError(aPIError);
            const obj4 = closure_130_0(closure_130_2[23]);
            closure_130_1(closure_130_2[17]).dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
            c6 = 3;
            const obj5 = closure_130_1(closure_130_2[17]);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_2 = value;
            const obj9 = { type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: closure_130_11.fromServer(closure_129_2.body) };
            closure_130_1(closure_130_2[17]).dispatch(obj9);
            c4 = 0;
            const obj = closure_130_1(closure_130_2[17]);
          }
          c4 = 0;
          c6 = 3;
          const obj10 = { value, done: true };
          return obj10;
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
let closure_28 = async function _fetchCollectiblesShopHome() {
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
    const obj5 = { type: "COLLECTIBLES_SHOP_HOME_FETCH", tab, options: null };
    options = closure_1;
    if (closure_1 == null) {
      options = {};
    }
    obj5.options = options;
    DispatcherDefault.dispatch(obj5);
    const fetchCollectiblesOptionsQuery = utils_CollectiblesUtils.buildFetchCollectiblesOptionsQuery(closure_1, tab);
    if (closure_1 != null) {
      const logPerf = closure_1.logPerf;
    }
    if (logPerf) {
      let sessionId;
      if (closure_2 != null) {
        sessionId = closure_2.sessionId;
      }
      const obj8 = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_HOME_FETCH_STARTED, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
      tab = undefined;
      if (closure_2 != null) {
        tab = closure_2.tab;
      }
      obj8.tab = tab;
      let includeUnpublished;
      if (closure_1 != null) {
        includeUnpublished = closure_1.includeUnpublished;
      }
      obj8.unpublishedCategoriesShown = includeUnpublished;
      let noCache;
      if (closure_1 != null) {
        noCache = closure_1.noCache;
      }
      obj8.cacheDisabled = noCache;
      CollectiblesPerfLogging.trackShopPerf(obj8);
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
      const result = closure_133_0(closure_133_2[23]).captureOrIgnoreApiError(closure_132_4);
      closure_133_0(closure_133_2[23]);
      closure_133_1(closure_133_2[17]).dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE", tab: closure_132_0, error: closure_132_4 });
      c9 = 3;
      closure_133_1(closure_133_2[17]);
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
        const obj13 = { sessionId: sessionId1, checkpoint: closure_133_0(closure_133_2[20]).CollectiblesShopPerfCheckpoint.SHOP_HOME_FETCH_COMPLETED, tab: null, unpublishedCategoriesShown: null, cacheDisabled: null };
        let tab1;
        if (closure_132_2 != null) {
          tab1 = closure_132_2.tab;
        }
        obj13.tab = tab1;
        let includeUnpublished1;
        if (closure_132_1 != null) {
          includeUnpublished1 = closure_132_1.includeUnpublished;
        }
        obj13.unpublishedCategoriesShown = includeUnpublished1;
        let noCache1;
        if (closure_132_1 != null) {
          noCache1 = closure_132_1.noCache;
        }
        obj13.cacheDisabled = noCache1;
        closure_133_0(closure_133_2[20]).trackShopPerf(obj13);
        closure_133_0(closure_133_2[20]);
      }
      closure_133_1(closure_133_2[17]).dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS", tab: closure_132_0, shopHome: closure_133_14.fromServer(closure_132_3.body) });
      c7 = 0;
      closure_133_1(closure_133_2[17]);
      { type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS", tab: closure_132_0, shopHome: closure_133_14.fromServer(closure_132_3.body) };
    }
    return value;
  })();
};
let closure_29 = async function _claimCollectiblesCategoryReward() {
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
        const obj3 = { value, done: true };
        return obj3;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = skuId;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            const obj5 = { type: "COLLECTIBLES_CLAIM", skuId };
            DispatcherDefault.dispatch(obj5);
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.COLLECTIBLES_CLAIM_CATEGORY_REWARD, body: null, rejectWithError: true };
            const obj6 = { category_id };
            request.body = obj6;
            c6 = 2;
            c7 = 1;
            const obj8 = { value: HTTP.put(request), done: false };
            return obj8;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_3 = closure_4;
          const aPIError = new closure_131_0(closure_131_2[22]).APIError(closure_130_3);
          closure_130_2 = aPIError;
          const obj10 = { type: "COLLECTIBLES_CLAIM_FAILURE", skuId: closure_130_0, error: closure_130_2 };
          closure_131_1(closure_131_2[17]).dispatch(obj10);
          throw closure_130_2;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_130_1 = value;
          const obj11 = { type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: closure_130_0, purchases: null };
          const body = closure_130_1.body;
          let mapped;
          if (body != null) {
            mapped = body.map(closure_131_13.fromServer);
          }
          obj11.purchases = mapped;
          closure_131_1(closure_131_2[17]).dispatch(obj11);
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
let closure_30 = async function _maybeFetchCollectiblesShopTabLayout(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
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
          return { value: "flex", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
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
                  const obj6 = { type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH", tab: closure_129_0 };
                  closure_130_1(closure_130_2[17]).dispatch(obj6);
                  const HTTP = closure_130_0(closure_130_2[21]).HTTP;
                  const obj7 = { url: closure_130_16.COLLECTIBLES_SHOP_TAB_LAYOUT(closure_129_0), rejectWithError: true, signal: closure_129_1 };
                  c5 = 3;
                  c6 = 1;
                  const obj8 = { value: HTTP.get(obj7), done: false };
                  return obj8;
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
          const obj9 = { type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE", tab: closure_129_0, apiError: closure_129_4 };
          closure_130_1(closure_130_2[17]).dispatch(obj9);
          throw closure_129_4;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_3 = value;
          const obj11 = { type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS", tab: closure_129_0, layoutId: closure_129_3.body.layout_id };
          closure_130_1(closure_130_2[17]).dispatch(obj11);
          c4 = 0;
          const obj = closure_130_1(closure_130_2[17]);
        }
        c4 = 0;
        c6 = 3;
        const obj12 = { value, done: true };
        return obj12;
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
const addDebugLog = fn(7886).addDebugLog;
let closure_10 = fn(7889).CollectiblesCategoriesRecord;
let closure_11 = fn(7893).CollectiblesMarketingsRecord;
let closure_14 = fn(7900).CollectiblesShopHomeRecord;
const constants = fn(1076).CollectiblesMobileShopScreen;
const Constants = fn(1074);
({ Endpoints: closure_16, Routes, UserSettingsSections: closure_17 } = Constants);
const CollectiblesMarketingsStore = fn(7914);
const CollectiblesShopHomeStore = fn(7915);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/CollectiblesActionCreators.tsx");

export default { openCollectiblesShop, closeCollectiblesShop, fetchCollectiblesPurchases, fetchCollectiblesProduct, claimPremiumCollectiblesProduct };
export { openCollectiblesShop };
export { openCollectiblesShopMobile };
export const isCollectiblesShopOpen = function isCollectiblesShopOpen() {
  const rootNavigationRef = isCollectiblesShopRoute(4687).getRootNavigationRef();
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
  const merged = Object.assign(arg0);
  DispatcherDefault.dispatch({ type: "COLLECTIBLES_SHOP_OPEN" });
};
export { closeCollectiblesShop };
export const productDetailsOpened = function productDetailsOpened(skuId) {
  DispatcherDefault.dispatch({ type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId });
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
  const items = [memo];
  const result = CollectiblesUtils.extendVariantsProducts(items);
  const iter = result[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (null == CollectiblesCategoryStore.getProduct(nextResult.skuId)) {
      let obj2 = DispatcherDefault;
      let obj3 = { type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: null, product: null, endedAt: null };
      obj3.skuId = tmp4.skuId;
      obj3.product = tmp4;
      obj3.endedAt = timestamp;
      let dispatchResult = obj2.dispatch(obj3);
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
  DispatcherDefault.dispatch({ type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride });
};
export const setShopLayoutUrlOverride = function setShopLayoutUrlOverride(shopLayoutUrlOverride) {
  DispatcherDefault.dispatch({ type: "COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE", shopLayoutUrlOverride });
};
export const setSkipNumCategories = function setSkipNumCategories(skipNumCategories) {
  DispatcherDefault.dispatch({ type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories });
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