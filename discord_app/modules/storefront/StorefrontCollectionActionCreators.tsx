// === Module 8539: StorefrontCollectionActionCreators ===

// Module 8539 (StorefrontCollectionActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import StoreUtils from "StoreUtils" /* 5322 */;
import StorefrontCacheUtils from "StorefrontCacheUtils" /* 7891 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import StorefrontCollectionStore from "StorefrontCollectionStore" /* 8537 */;
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7071 */;
import size from "module_2" /* 2 */;

let collectionPageFetchState, collectionsAfterFetchState, requestKey;

let obj = function _maybeFetchCollectionsWithProducts() {
  obj = _asyncToGenerator(async function(arg0) {
    let c0;
    let closure_1;
    let closure_2;
    let collections;
    let flag;
    let flag2;
    let flag3;
    let includeUnpublishedProducts;
    let length;
    let obj6;
    let obj8;
    let tmp26;
    let closure_0 = arg0;
    if (1 === tmp4) {
      if (arg0 === 1) {
        let c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        length = c0.filter((item) => {
          let shouldRefetchEntryResult = Boolean(item);
          if (shouldRefetchEntryResult) {
            obj = { fetchState: c5.getFetchState(item), fetchedAt: c5.getFetchedAt(item), needsPricing, hasPricingCoverage: c5.hasPricingCoverage(item) };
            const shouldRefetchEntry = closure_0(closure_2[5]).shouldRefetchEntry;
            closure_0(closure_2[5]);
            shouldRefetchEntryResult = shouldRefetchEntry(obj);
          }
          return shouldRefetchEntryResult;
        });
        if (0 !== length.length) {
          let c4 = 1;
          const obj7 = { type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH", collectionIds: length, includePricing: flag3 };
          const obj4 = closure_130_1(closure_130_2[6]);
          obj4.dispatch(obj7);
          const request = { url: closure_130_7.STOREFRONT_COLLECTIONS_WITH_PRODUCTS, query: obj8, rejectWithError: true };
          obj8 = { collection_ids: length, locale: closure_130_4.locale, with_bundled_skus: true, include_pricing: flag3, include_google_sku_ids: true, include_unpublished_products: includeUnpublishedProducts, include_unpublished_collections: flag, ignore_cache: flag2 };
          let c5 = 3;
          c6 = 1;
          const obj9 = { value: obj6.httpGetWithCountryCodeQuery(request), done: false };
          obj6 = closure_130_0(closure_130_2[7]);
          return obj9;
        }
      }
    } else if (2 === tmp4) {
      c4 = 0;
      let closure_7 = closure_3;
      const obj10 = { type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE", collectionIds: length, apiError: tmp26 };
      const dispatch2 = closure_130_1(closure_130_2[6]).dispatch;
      const self = this;
      const self2 = this;
      const tmp21 = closure_130_1(closure_130_2[6]);
      tmp26 = new closure_130_1(closure_130_2[8])(closure_7);
      dispatch2(obj10);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      const obj11 = { value, done: true };
      return obj11;
    } else {
      const body = value;
      obj = { type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS", collectionIds: length, collections: collections.map(closure_130_6.fromServer), includePricing: flag3 };
      collections = body.body.collections;
      const dispatch = closure_130_1(closure_130_2[6]).dispatch;
      const tmp9 = closure_130_1(closure_130_2[6]);
      dispatch(obj);
      c4 = 0;
    }
    await "IconComponent";
    ({ collectionIds: c0, includeUnpublishedProducts } = closure_0);
    if (includeUnpublishedProducts === undefined) {
      includeUnpublishedProducts = false;
    }
    flag = closure_0.includeUnpublishedCollections ?? false;
    flag2 = closure_0.ignoreCache ?? false;
    flag3 = closure_0.includePricing ?? false;
    return "Set";
  });
  return obj(...arguments);
};
function getCollectionListKey(includeUnpublishedProducts) {
  let applicationId;
  let useShopOrdering;
  ({ applicationId, useShopOrdering } = includeUnpublishedProducts);
  if (useShopOrdering === undefined) {
    useShopOrdering = true;
  }
  let flag = includeUnpublishedProducts.includeUnpublishedProducts;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = includeUnpublishedProducts.includeUnpublishedCollections;
  if (flag2 === undefined) {
    flag2 = false;
  }
  return "" + applicationId + ":" + useShopOrdering + ":" + flag + ":" + flag2;
}
function getCollectionPageKey(includeUnpublishedProducts) {
  let applicationId;
  let useShopOrdering;
  ({ applicationId, useShopOrdering } = includeUnpublishedProducts);
  if (useShopOrdering === undefined) {
    useShopOrdering = true;
  }
  let flag = includeUnpublishedProducts.includeUnpublishedProducts;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = includeUnpublishedProducts.includeUnpublishedCollections;
  if (flag2 === undefined) {
    flag2 = false;
  }
  return "" + "" + applicationId + ":" + useShopOrdering + ":" + flag + ":" + flag2 + ":" + includeUnpublishedProducts.offset + ":" + includeUnpublishedProducts.limit;
}
obj = function _maybeFetchCollectionsForApplicationPage() {
  let locale;
  obj = _asyncToGenerator(async function(arg0) {
    let closure_3;
    let collections;
    let limit;
    let obj7;
    let offset;
    let tmp16;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let tmp40;
      let c4;
      try {
        let pageKey;
        let listKey;
        let applicationId;
        let dispatch;
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
            pageKey = undefined;
            listKey = undefined;
            tmp40 = undefined;
            applicationId = closure_0.applicationId;
            const useShopOrdering = closure_0.useShopOrdering;
            let tmp19 = undefined === useShopOrdering;
            ({ offset, limit } = closure_0);
            if (!tmp19) {
              tmp19 = useShopOrdering;
            }
            const includeUnpublishedProducts = closure_0.includeUnpublishedProducts;
            const tmp20 = undefined !== includeUnpublishedProducts && includeUnpublishedProducts;
            const includeUnpublishedCollections = closure_0.includeUnpublishedCollections;
            const tmp21 = undefined !== includeUnpublishedCollections && includeUnpublishedCollections;
            const ignoreCache = closure_0.ignoreCache;
            const tmp22 = undefined !== ignoreCache && ignoreCache;
            const _Boolean = Boolean;
            if (Boolean(applicationId)) {
              const tmp24 = getCollectionPageKey(closure_0);
              pageKey = tmp24;
              listKey = getCollectionListKey(closure_0);
              const tmp26 = collectionPageFetchState;
              collectionPageFetchState = collectionPageFetchState.getCollectionPageFetchState(tmp24);
              if ("loading" !== collectionPageFetchState) {
                dispatch = tmp26.getCollectionPageFetchedAt;
                const dispatchResult = dispatch(tmp24);
                if (!tmp22) {
                  if (null != dispatchResult) {
                    if ("error" === collectionPageFetchState) {
                      dispatch = StorefrontCacheUtils.ERROR_STALE_THRESHOLD_MS;
                    } else {
                      dispatch = StorefrontCacheUtils.TWELVE_HOURS_MS;
                    }
                    const _Date = Date;
                    if (Date.now() - dispatchResult <= dispatch) {
                      c6 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  }
                }
                c4 = 1;
                const obj6 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH", pageKey: tmp24 };
                const obj3 = DispatcherDefault;
                obj3.dispatch(obj6);
                const request = { url: constants.STOREFRONT_COLLECTIONS_FOR_APPLICATION, query: obj7, rejectWithError: true };
                obj7 = { application_id: applicationId, use_shop_ordering: tmp19, offset, limit, include_pricing: true, locale: locale.locale, with_bundled_skus: true, include_google_sku_ids: true, include_unpublished_products: tmp20, include_unpublished_collections: tmp21, ignore_cache: tmp22 };
                const obj5 = StoreUtils;
                dispatch = obj5.httpGetWithCountryCodeQuery(request);
                c5 = 2;
                c6 = 1;
                const obj8 = { value: dispatch, done: false };
                return obj8;
              }
            }
          }
        } else if (1 === tmp4) {
          c4 = 0;
          let closure_4 = tmp40;
          dispatch = closure_130_1(closure_130_2[6]).dispatch;
          const obj9 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_FAILURE", pageKey, apiError: tmp16 };
          const self = this;
          const self2 = this;
          const tmp11 = closure_130_1(closure_130_2[6]);
          tmp16 = new closure_130_1(closure_130_2[8])(closure_4);
          dispatch(obj9);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          tmp40 = value;
          dispatch = closure_130_1(closure_130_2[6]).dispatch;
          const obj10 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS", pageKey, listKey, applicationId, collections: collections.map(closure_130_6.fromServer), total: tmp40.body.total };
          collections = tmp40.body.collections;
          const tmp52 = closure_130_1(closure_130_2[6]);
          dispatch(obj10);
          c4 = 0;
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp40) {
        if (0 === c4) {
          c6 = 3;
          throw tmp40;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function getCollectionsAfterKey(includeUnpublishedCollections) {
  let anchorCollectionId;
  let applicationId;
  let includeUnpublishedProducts;
  let limit;
  ({ applicationId, anchorCollectionId, limit, includeUnpublishedProducts } = includeUnpublishedCollections);
  if (includeUnpublishedProducts === undefined) {
    includeUnpublishedProducts = false;
  }
  let flag = includeUnpublishedCollections.includeUnpublishedCollections;
  if (flag === undefined) {
    flag = false;
  }
  return "" + applicationId + ":after:" + anchorCollectionId + ":" + limit + ":" + includeUnpublishedProducts + ":" + flag;
}
obj = function _maybeFetchCollectionsAfter() {
  let locale;
  obj = _asyncToGenerator(async (requestKey) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function(arg0) {
      let anchorCollectionId;
      let applicationId;
      let collections;
      let includeUnpublishedProducts;
      let obj7;
      let obj8;
      let tmp25;
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
              requestKey = undefined;
              body = undefined;
              ({ applicationId, anchorCollectionId, includeUnpublishedProducts } = requestKey);
              let tmp28 = undefined !== includeUnpublishedProducts;
              const limit = requestKey.limit;
              if (tmp28) {
                tmp28 = includeUnpublishedProducts;
              }
              const includeUnpublishedCollections = tmp54.includeUnpublishedCollections;
              const ignoreCache = tmp54.ignoreCache;
              const _Boolean = Boolean;
              const tmp29 = undefined !== includeUnpublishedCollections && includeUnpublishedCollections;
              if (Boolean(applicationId)) {
                const _Boolean2 = Boolean;
                if (Boolean(anchorCollectionId)) {
                  const tmp32 = getCollectionsAfterKey(requestKey);
                  requestKey = tmp32;
                  const obj4 = collectionsAfterFetchState;
                  collectionsAfterFetchState = collectionsAfterFetchState.getCollectionsAfterFetchState(tmp32);
                  if ("loading" !== collectionsAfterFetchState) {
                    const collectionsAfterFetchedAt = obj4.getCollectionsAfterFetchedAt(tmp32);
                    if (!(undefined !== ignoreCache && ignoreCache)) {
                      if (null != collectionsAfterFetchedAt) {
                        let TWELVE_HOURS_MS;
                        if ("error" === collectionsAfterFetchState) {
                          TWELVE_HOURS_MS = StorefrontCacheUtils.ERROR_STALE_THRESHOLD_MS;
                        } else {
                          TWELVE_HOURS_MS = StorefrontCacheUtils.TWELVE_HOURS_MS;
                        }
                        const _Date = Date;
                        if (Date.now() - collectionsAfterFetchedAt <= TWELVE_HOURS_MS) {
                          c6 = 3;
                          return { value: "IconComponent", done: null };
                        }
                      }
                    }
                    c4 = 1;
                    const obj6 = { type: "STOREFRONT_COLLECTIONS_AFTER_FETCH", requestKey: tmp32 };
                    const obj5 = DispatcherDefault;
                    obj5.dispatch(obj6);
                    const request = { url: constants.STOREFRONT_COLLECTIONS_FOR_APPLICATION, query: obj8, rejectWithError: true };
                    c5 = 2;
                    c6 = 1;
                    obj8 = { application_id: applicationId, use_shop_ordering: true, anchor_collection_id: anchorCollectionId, limit, include_products: false, include_pricing: false, include_google_sku_ids: false, locale: locale.locale, include_unpublished_products: tmp28, include_unpublished_collections: tmp29, ignore_cache: undefined !== ignoreCache && ignoreCache };
                    const obj9 = { value: obj7.httpGetWithCountryCodeQuery(request), done: false };
                    obj7 = StoreUtils;
                    return obj9;
                  }
                }
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            const obj10 = { type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_FAILURE", requestKey, apiError: tmp25 };
            const dispatch2 = closure_130_1(closure_130_2[6]).dispatch;
            const self = this;
            const self2 = this;
            closure_130_1(closure_130_2[6]);
            tmp25 = new closure_130_1(closure_130_2[8])(closure_2);
            dispatch2(obj10);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value;
            obj = { type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_SUCCESS", requestKey, collections: collections.map(closure_130_6.fromServer) };
            collections = body.body.collections;
            const dispatch = closure_130_1(closure_130_2[6]).dispatch;
            closure_130_1(closure_130_2[6]);
            dispatch(obj);
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp46) {
          closure_3 = tmp46;
          if (0 === c4) {
            c6 = 3;
            throw tmp46;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _maybeFetchCollectionsForApplication() {
  obj = _asyncToGenerator(async function(arg0) {
    let c0;
    let c4;
    let closure_1;
    let closure_2;
    let collections;
    let flag;
    let flag2;
    let includePricing;
    let includeUnpublishedProducts;
    let obj8;
    let skuTypes;
    let tmp16;
    let closure_0 = arg0;
    if (1 === c5) {
      if (arg0 === 1) {
        let c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const _Boolean = Boolean;
        if (Boolean(applicationId)) {
          const fetchStateForApplication = closure_130_5.getFetchStateForApplication(applicationId);
          if ("loading" !== fetchStateForApplication) {
            let obj10;
            let obj11;
            const fetchedAtForApplication = closure_130_5.getFetchedAtForApplication(applicationId);
            if (null != fetchedAtForApplication) {
              let TWELVE_HOURS_MS;
              if ("error" === fetchStateForApplication) {
                TWELVE_HOURS_MS = closure_130_0(closure_130_2[5]).ERROR_STALE_THRESHOLD_MS;
              } else {
                TWELVE_HOURS_MS = closure_130_0(closure_130_2[5]).TWELVE_HOURS_MS;
              }
              const _Date = Date;
              if (Date.now() - fetchedAtForApplication <= TWELVE_HOURS_MS) {
                const fetchParamsForApplication = closure_130_5.getFetchParamsForApplication(applicationId);
                if ("error" !== fetchStateForApplication) {
                  if (null != fetchParamsForApplication) {
                    const obj6 = { includePricing, skuTypes };
                  }
                }
                c6 = 3;
                return { value: "IconComponent", done: null };
              }
            }
            skuTypes = 1;
            const obj7 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH", applicationId };
            const obj4 = closure_130_1(closure_130_2[6]);
            obj4.dispatch(obj7);
            const request = { url: closure_130_7.STOREFRONT_COLLECTIONS_FOR_APPLICATION, query: obj8, rejectWithError: true };
            obj8 = { application_id: applicationId, locale: closure_130_4.locale, with_bundled_skus: true, include_google_sku_ids: true, include_unpublished_products: includeUnpublishedProducts, include_unpublished_collections: flag, ignore_cache: flag2 };
            const httpGetWithCountryCodeQuery = closure_130_0(closure_130_2[7]).httpGetWithCountryCodeQuery;
            const tmp55 = closure_130_0(closure_130_2[7]);
            if (null != skuTypes) {
              const obj9 = { sku_types: skuTypes };
              obj10 = obj9;
            } else {
              obj10 = {};
            }
            const merged = Object.assign(obj10);
            const tmp69 = includePricing;
            if (tmp69) {
              obj11 = { include_pricing: true };
            } else {
              obj11 = {};
            }
            const merged1 = Object.assign(obj11);
            c5 = 3;
            c6 = 1;
            const obj12 = { value: httpGetWithCountryCodeQuery(request), done: false };
            return obj12;
          }
        }
      }
    } else if (2 === c5) {
      skuTypes = 0;
      let closure_11 = closure_3;
      const obj13 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE", applicationId, apiError: tmp16 };
      const dispatch = closure_130_1(closure_130_2[6]).dispatch;
      const self = this;
      const self2 = this;
      const tmp11 = closure_130_1(closure_130_2[6]);
      tmp16 = new closure_130_1(closure_130_2[8])(closure_11);
      dispatch(obj13);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      skuTypes = 0;
      c6 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      const body = value;
      const obj14 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS", applicationId, collections: collections.map(closure_130_6.fromServer), includePricing, skuTypes };
      collections = body.body.collections;
      const dispatch2 = closure_130_1(closure_130_2[6]).dispatch;
      const tmp85 = closure_130_1(closure_130_2[6]);
      dispatch2(obj14);
      skuTypes = 0;
    }
    await "IconComponent";
    ({ applicationId: c0, includeUnpublishedProducts } = closure_0);
    if (includeUnpublishedProducts === undefined) {
      includeUnpublishedProducts = false;
    }
    flag = closure_0.includeUnpublishedCollections ?? false;
    flag2 = closure_0.ignoreCache ?? false;
    ({ skuTypes: c4, includePricing } = closure_0);
    if (includePricing === undefined) {
      includePricing = false;
    }
    return "Set";
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/storefront/StorefrontCollectionActionCreators.tsx");

export const maybeFetchCollectionsWithProducts = function maybeFetchCollectionsWithProducts() {
  return obj(...arguments);
};
export { getCollectionListKey };
export { getCollectionPageKey };
export const maybeFetchCollectionsForApplicationPage = function maybeFetchCollectionsForApplicationPage() {
  return obj(...arguments);
};
export { getCollectionsAfterKey };
export const maybeFetchCollectionsAfter = function maybeFetchCollectionsAfter() {
  return obj(...arguments);
};
export const maybeFetchCollectionsForApplication = function maybeFetchCollectionsForApplication() {
  return obj(...arguments);
};