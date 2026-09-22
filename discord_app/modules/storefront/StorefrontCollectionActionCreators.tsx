// discord_app/modules/storefront/StorefrontCollectionActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import StoreUtils from "../../utils/StoreUtils.tsx";
import StorefrontCacheUtils from "StorefrontCacheUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import StorefrontCollectionStore from "StorefrontCollectionStore.tsx";
import StorefrontCollectionRecord from "records/StorefrontCollectionRecord.tsx";

require = fn;
let closure_8 = async function _maybeFetchCollectionsWithProducts(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
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
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          ({ collectionIds: closure_129_0, includeUnpublishedProducts } = _require);
          if (includeUnpublishedProducts === undefined) {
            includeUnpublishedProducts = false;
          }
          closure_129_1 = includeUnpublishedProducts;
          let flag = _require.includeUnpublishedCollections;
          if (flag === undefined) {
            flag = false;
          }
          closure_129_2 = flag;
          let flag2 = _require.ignoreCache;
          if (flag2 === undefined) {
            flag2 = false;
          }
          closure_129_3 = flag2;
          let flag3 = _require.includePricing;
          if (flag3 === undefined) {
            flag3 = false;
          }
          closure_129_4 = flag3;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
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
            closure_129_5 = closure_129_0.filter((item) => {
              let shouldRefetchEntryResult = Boolean(item);
              if (shouldRefetchEntryResult) {
                const obj2 = {
                  fetchState: c5.getFetchState(item),
                  fetchedAt: c5.getFetchedAt(item),
                  needsPricing,
                  hasPricingCoverage: c5.hasPricingCoverage(item),
                };
                shouldRefetchEntryResult = closure_0(dependencyMap[5]).shouldRefetchEntry(obj2);
                const obj = closure_0(dependencyMap[5]);
              }
              return shouldRefetchEntryResult;
            });
            if (0 !== closure_129_5.length) {
              c4 = 1;
              const obj7 = {
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH",
                collectionIds: closure_129_5,
                includePricing: closure_129_4,
              };
              closure_130_1(closure_130_2[6]).dispatch(obj7);
              const obj6 = closure_130_1(closure_130_2[6]);
              const request = {
                url: closure_130_7.STOREFRONT_COLLECTIONS_WITH_PRODUCTS,
                query: null,
                rejectWithError: true,
              };
              const obj9 = {
                collection_ids: closure_129_5,
                locale: closure_130_4.locale,
                with_bundled_skus: true,
                include_pricing: closure_129_4,
                include_google_sku_ids: true,
                include_unpublished_products: closure_129_1,
                include_unpublished_collections: closure_129_2,
                ignore_cache: closure_129_3,
              };
              request.query = obj9;
              c5 = 3;
              c6 = 1;
              const obj10 = {
                value: closure_130_0(closure_130_2[7]).httpGetWithCountryCodeQuery(request),
                done: false,
              };
              return obj10;
            }
          }
        } else {
          if (2 === tmp7) {
            c4 = 0;
            closure_129_7 = closure_3;
            const obj11 = {
              type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE",
              collectionIds: closure_129_5,
              apiError: null,
            };
            const tmp29 = new closure_130_1(closure_130_2[8])(closure_129_7);
            obj11.apiError = tmp29;
            closure_130_1(closure_130_2[6]).dispatch(obj11);
            const obj4 = closure_130_1(closure_130_2[6]);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_6 = value;
            const obj12 = {
              type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS",
              collectionIds: closure_129_5,
              collections: null,
              includePricing: null,
            };
            const collections = closure_129_6.body.collections;
            obj12.collections = collections.map(closure_130_6.fromServer);
            obj12.includePricing = closure_129_4;
            closure_130_1(closure_130_2[6]).dispatch(obj12);
            c4 = 0;
            let obj = closure_130_1(closure_130_2[6]);
          }
          c4 = 0;
          c6 = 3;
          const obj13 = { value, done: true };
          return obj13;
        }
        c6 = 3;
      }
    } catch (tmp48) {
      closure_3 = tmp48;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp48;
      } else {
        c5 = tmp;
      }
    }
  }
};
function getCollectionListKey(includeUnpublishedProducts) {
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
  return (
    "" +
    "" +
    applicationId +
    ":" +
    useShopOrdering +
    ":" +
    flag +
    ":" +
    flag2 +
    ":" +
    includeUnpublishedProducts.offset +
    ":" +
    includeUnpublishedProducts.limit
  );
}
let closure_11 = async function _maybeFetchCollectionsForApplicationPage(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          const applicationId = _require.applicationId;
          closure_129_0 = applicationId;
          const useShopOrdering = _require.useShopOrdering;
          let tmp24 = undefined === useShopOrdering;
          ({ offset, limit } = _require);
          if (!tmp24) {
            tmp24 = useShopOrdering;
          }
          const includeUnpublishedProducts = _require.includeUnpublishedProducts;
          let tmp25 = undefined !== includeUnpublishedProducts;
          if (tmp25) {
            tmp25 = includeUnpublishedProducts;
          }
          const includeUnpublishedCollections = _require.includeUnpublishedCollections;
          let tmp26 = undefined !== includeUnpublishedCollections;
          if (tmp26) {
            tmp26 = includeUnpublishedCollections;
          }
          const ignoreCache = _require.ignoreCache;
          let tmp27 = undefined !== ignoreCache;
          if (tmp27) {
            tmp27 = ignoreCache;
          }
          const _Boolean = Boolean;
          if (Boolean(applicationId)) {
            const tmp29 = getCollectionPageKey(_require);
            closure_129_1 = tmp29;
            closure_129_2 = getCollectionListKey(_require);
            collectionPageFetchState = collectionPageFetchState.getCollectionPageFetchState(tmp29);
            if ("loading" !== collectionPageFetchState) {
              const collectionPageFetchedAt = obj4.getCollectionPageFetchedAt(tmp29);
              if (!tmp27) {
                if (null != collectionPageFetchedAt) {
                  if ("error" === collectionPageFetchState) {
                    let TWELVE_HOURS_MS = StorefrontCacheUtils.ERROR_STALE_THRESHOLD_MS;
                  } else {
                    TWELVE_HOURS_MS = StorefrontCacheUtils.TWELVE_HOURS_MS;
                  }
                  const _Date = Date;
                  if (Date.now() - collectionPageFetchedAt <= TWELVE_HOURS_MS) {
                    c6 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                }
              }
              c4 = 1;
              const obj8 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH", pageKey: tmp29 };
              DispatcherDefault.dispatch(obj8);
              const request = {
                url: constants.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
                query: null,
                rejectWithError: true,
              };
              const obj9 = {
                application_id: applicationId,
                use_shop_ordering: tmp24,
                offset,
                limit,
                include_pricing: true,
                locale: locale.locale,
                with_bundled_skus: true,
                include_google_sku_ids: true,
                include_unpublished_products: tmp25,
                include_unpublished_collections: tmp26,
                ignore_cache: tmp27,
              };
              request.query = obj9;
              c5 = 2;
              c6 = 1;
              const obj10 = { value: StoreUtils.httpGetWithCountryCodeQuery(request), done: false };
              return obj10;
            }
            obj4 = collectionPageFetchState;
          }
        }
      } else {
        if (1 === tmp8) {
          c4 = 0;
          closure_129_4 = closure_3;
          const obj11 = {
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_FAILURE",
            pageKey: closure_129_1,
            apiError: null,
          };
          const tmp21 = new closure_130_1(closure_130_2[8])(closure_129_4);
          obj11.apiError = tmp21;
          closure_130_1(closure_130_2[6]).dispatch(obj11);
          const obj2 = closure_130_1(closure_130_2[6]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_3 = value;
          const obj12 = {
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS",
            pageKey: closure_129_1,
            listKey: closure_129_2,
            applicationId: closure_129_0,
            collections: null,
            total: null,
          };
          const collections = closure_129_3.body.collections;
          obj12.collections = collections.map(closure_130_6.fromServer);
          obj12.total = closure_129_3.body.total;
          closure_130_1(closure_130_2[6]).dispatch(obj12);
          c4 = 0;
          const obj13 = closure_130_1(closure_130_2[6]);
        }
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c6 = 3;
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
};
function getCollectionsAfterKey(includeUnpublishedCollections) {
  ({ applicationId, anchorCollectionId, limit, includeUnpublishedProducts } = includeUnpublishedCollections);
  if (includeUnpublishedProducts === undefined) {
    includeUnpublishedProducts = false;
  }
  let flag = includeUnpublishedCollections.includeUnpublishedCollections;
  if (flag === undefined) {
    flag = false;
  }
  return (
    "" + applicationId + ":after:" + anchorCollectionId + ":" + limit + ":" + includeUnpublishedProducts + ":" + flag
  );
}
let closure_13 = async function _maybeFetchCollectionsAfter(arg0) {
  let limit = arg0;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
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
            ({ applicationId, anchorCollectionId, includeUnpublishedProducts } = limit);
            let tmp31 = undefined !== includeUnpublishedProducts;
            if (tmp31) {
              tmp31 = includeUnpublishedProducts;
            }
            const includeUnpublishedCollections = limit.includeUnpublishedCollections;
            let tmp32 = undefined !== includeUnpublishedCollections;
            if (tmp32) {
              tmp32 = includeUnpublishedCollections;
            }
            const ignoreCache = limit.ignoreCache;
            let tmp33 = undefined !== ignoreCache;
            if (tmp33) {
              tmp33 = ignoreCache;
            }
            const _Boolean = Boolean;
            if (Boolean(applicationId)) {
              const _Boolean2 = Boolean;
              if (Boolean(anchorCollectionId)) {
                const tmp35 = getCollectionsAfterKey(limit);
                closure_129_0 = tmp35;
                collectionsAfterFetchState = collectionsAfterFetchState.getCollectionsAfterFetchState(tmp35);
                if ("loading" !== collectionsAfterFetchState) {
                  const collectionsAfterFetchedAt = obj6.getCollectionsAfterFetchedAt(tmp35);
                  if (!tmp33) {
                    if (null != collectionsAfterFetchedAt) {
                      if ("error" === collectionsAfterFetchState) {
                        let TWELVE_HOURS_MS = StorefrontCacheUtils.ERROR_STALE_THRESHOLD_MS;
                      } else {
                        TWELVE_HOURS_MS = StorefrontCacheUtils.TWELVE_HOURS_MS;
                      }
                      const _Date = Date;
                      if (Date.now() - collectionsAfterFetchedAt <= TWELVE_HOURS_MS) {
                        c6 = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    }
                  }
                  c4 = 1;
                  const obj5 = { type: "STOREFRONT_COLLECTIONS_AFTER_FETCH", requestKey: tmp35 };
                  DispatcherDefault.dispatch(obj5);
                  const request = {
                    url: constants.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
                    query: null,
                    rejectWithError: true,
                  };
                  const obj8 = {
                    application_id: applicationId,
                    use_shop_ordering: true,
                    anchor_collection_id: anchorCollectionId,
                    limit: limit.limit,
                    include_products: false,
                    include_pricing: false,
                    include_google_sku_ids: false,
                    locale: locale.locale,
                    include_unpublished_products: tmp31,
                    include_unpublished_collections: tmp32,
                    ignore_cache: tmp33,
                  };
                  request.query = obj8;
                  c5 = 2;
                  c6 = 1;
                  const obj10 = { value: StoreUtils.httpGetWithCountryCodeQuery(request), done: false };
                  return obj10;
                }
                obj6 = collectionsAfterFetchState;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            closure_129_2 = closure_3;
            const obj11 = {
              type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_FAILURE",
              requestKey: closure_129_0,
              apiError: null,
            };
            const tmp28 = new closure_130_1(closure_130_2[8])(closure_129_2);
            obj11.apiError = tmp28;
            closure_130_1(closure_130_2[6]).dispatch(obj11);
            const obj4 = closure_130_1(closure_130_2[6]);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_1 = value;
            const obj12 = {
              type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_SUCCESS",
              requestKey: closure_129_0,
              collections: null,
            };
            const collections = closure_129_1.body.collections;
            obj12.collections = collections.map(closure_130_6.fromServer);
            closure_130_1(closure_130_2[6]).dispatch(obj12);
            c4 = 0;
            const obj = closure_130_1(closure_130_2[6]);
          }
          c4 = 0;
          c6 = 3;
          const obj13 = { value, done: true };
          return obj13;
        }
        c6 = 3;
      } catch (tmp49) {
        closure_3 = tmp49;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp49;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
let closure_14 = async function _maybeFetchCollectionsForApplication(arg0) {
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
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({ applicationId: closure_129_0, includeUnpublishedProducts } = _require);
          if (includeUnpublishedProducts === undefined) {
            includeUnpublishedProducts = false;
          }
          closure_129_1 = includeUnpublishedProducts;
          let flag = _require.includeUnpublishedCollections;
          if (flag === undefined) {
            flag = false;
          }
          closure_129_2 = flag;
          let flag2 = _require.ignoreCache;
          if (flag2 === undefined) {
            flag2 = false;
          }
          closure_129_3 = flag2;
          ({ skuTypes: closure_129_4, includePricing } = _require);
          if (includePricing === undefined) {
            includePricing = false;
          }
          closure_129_5 = includePricing;
          let fetchStateForApplication;
          let fetchedAtForApplication;
          closure_129_8 = undefined;
          let fetchParamsForApplication;
          closure_129_10 = undefined;
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
            const obj6 = { value, done: true };
            return obj6;
          } else {
            const _Boolean = Boolean;
            if (Boolean(closure_129_0)) {
              fetchStateForApplication = closure_130_5.getFetchStateForApplication(closure_129_0);
              if ("loading" !== fetchStateForApplication) {
                fetchedAtForApplication = closure_130_5.getFetchedAtForApplication(closure_129_0);
                if (null != fetchedAtForApplication) {
                  if ("error" === fetchStateForApplication) {
                    let TWELVE_HOURS_MS = closure_130_0(closure_130_2[5]).ERROR_STALE_THRESHOLD_MS;
                  } else {
                    TWELVE_HOURS_MS = closure_130_0(closure_130_2[5]).TWELVE_HOURS_MS;
                  }
                  closure_129_8 = TWELVE_HOURS_MS;
                  const _Date = Date;
                  if (Date.now() - fetchedAtForApplication <= closure_129_8) {
                    fetchParamsForApplication = closure_130_5.getFetchParamsForApplication(closure_129_0);
                    if ("error" !== fetchStateForApplication) {
                      if (null != fetchParamsForApplication) {
                        const obj7 = { includePricing: closure_129_5, skuTypes: closure_129_4 };
                      }
                    }
                    c6 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                }
                c4 = 1;
                const obj8 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH", applicationId: closure_129_0 };
                closure_130_1(closure_130_2[6]).dispatch(obj8);
                const obj5 = closure_130_1(closure_130_2[6]);
                let httpGetWithCountryCodeQuery = closure_130_0(closure_130_2[7]).httpGetWithCountryCodeQuery;
                const request = {
                  url: closure_130_7.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
                  query: null,
                  rejectWithError: true,
                };
                const obj9 = {
                  application_id: closure_129_0,
                  locale: closure_130_4.locale,
                  with_bundled_skus: true,
                  include_google_sku_ids: true,
                  include_unpublished_products: closure_129_1,
                  include_unpublished_collections: closure_129_2,
                  ignore_cache: closure_129_3,
                };
                if (null != closure_129_4) {
                  const obj10 = { sku_types: closure_129_4 };
                  let obj11 = obj10;
                } else {
                  obj11 = {};
                }
                const merged = Object.assign(obj11);
                if (closure_129_5) {
                  let obj12 = { include_pricing: true };
                } else {
                  obj12 = {};
                }
                const merged1 = Object.assign(obj12);
                request.query = obj9;
                httpGetWithCountryCodeQuery = httpGetWithCountryCodeQuery(request);
                c5 = 3;
                c6 = 1;
                const tmp59 = closure_130_0(closure_130_2[7]);
              }
            }
          }
        } else {
          if (2 === tmp7) {
            c4 = 0;
            closure_129_11 = closure_3;
            const obj13 = {
              type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE",
              applicationId: closure_129_0,
              apiError: null,
            };
            const tmp20 = new closure_130_1(closure_130_2[8])(closure_129_11);
            obj13.apiError = tmp20;
            closure_130_1(closure_130_2[6]).dispatch(obj13);
            const obj2 = closure_130_1(closure_130_2[6]);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_10 = value;
            const obj14 = {
              type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS",
              applicationId: closure_129_0,
              collections: null,
              includePricing: null,
              skuTypes: null,
            };
            const collections = closure_129_10.body.collections;
            obj14.collections = collections.map(closure_130_6.fromServer);
            obj14.includePricing = closure_129_5;
            obj14.skuTypes = closure_129_4;
            closure_130_1(closure_130_2[6]).dispatch(obj14);
            c4 = 0;
            const obj15 = closure_130_1(closure_130_2[6]);
          }
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c6 = 3;
      }
    } catch (tmp77) {
      closure_3 = tmp77;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp77;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/StorefrontCollectionActionCreators.tsx");

export const maybeFetchCollectionsWithProducts = function maybeFetchCollectionsWithProducts() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { getCollectionListKey };
export { getCollectionPageKey };
export const maybeFetchCollectionsForApplicationPage = function maybeFetchCollectionsForApplicationPage() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { getCollectionsAfterKey };
export const maybeFetchCollectionsAfter = function maybeFetchCollectionsAfter() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const maybeFetchCollectionsForApplication = function maybeFetchCollectionsForApplication() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
