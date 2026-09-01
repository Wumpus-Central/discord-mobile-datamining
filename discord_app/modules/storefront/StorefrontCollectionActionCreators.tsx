// discord_app/modules/storefront/StorefrontCollectionActionCreators.tsx
import setDefault from "../../utils/Durations.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../user_settings/LocaleStore.tsx";
import closure_5 from "StorefrontCollectionStore.tsx";
import closure_6 from "records/StorefrontCollectionRecord.tsx";
import { Endpoints } from "../../Constants.tsx";

const require = arg1;
function _maybeFetchCollectionsWithProducts() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (fromServer === 2) {
        fromServer = 3;
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
          fromServer = 2;
          if (0 === body) {
            if (arg0 === 1) {
              fromServer = 3;
              throw arg1;
            } else if (arg0 === 2) {
              fromServer = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let flag = tmp3;
              includeUnpublishedProducts = tmp7;
              let lib;
              includeUnpublishedProducts = undefined;
              flag = undefined;
              let flag2;
              ({ collectionIds: c0, includeUnpublishedProducts } = lib);
              if (includeUnpublishedProducts === undefined) {
                includeUnpublishedProducts = false;
              }
              flag = tmp56.includeUnpublishedCollections;
              if (flag === undefined) {
                flag = false;
              }
              flag2 = tmp56.ignoreCache;
              if (flag2 === undefined) {
                flag2 = false;
              }
              c4 = undefined;
              body = undefined;
              body = 1;
              fromServer = 1;
              return { value: "PX_16", done: null };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                fromServer = 3;
                throw arg1;
              } else if (arg0 === 2) {
                fromServer = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                c4 = lib.filter((arg0) => {
                  if (Boolean(arg0)) {
                    fetchState = fetchState.getFetchState(arg0);
                    if ("loading" === fetchState) {
                      return false;
                    } else {
                      const fetchedAt = obj.getFetchedAt(arg0);
                      if (null != fetchedAt) {
                        const _Date = Date;
                        return Date.now() - fetchedAt > ("error" === fetchState ? closure_9 : closure_8);
                      } else {
                        return true;
                      }
                    }
                    obj = fetchState;
                  } else {
                    return false;
                  }
                });
                if (0 !== c4.length) {
                  c4 = 1;
                  let obj5 = includeUnpublishedProducts(flag[6]);
                  const obj2 = { type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH", collectionIds: null };
                  obj2[1] = c4;
                  obj5.dispatch(obj2);
                  let obj7 = lib(flag[7]);
                  let obj3 = { url: null, query: null, rejectWithError: true };
                  obj3[0] = constants.STOREFRONT_COLLECTIONS_WITH_PRODUCTS;
                  const obj4 = { collection_ids: null, locale: null, with_bundled_skus: true, include_google_sku_ids: true, include_unpublished_products: null, include_unpublished_collections: null, ignore_cache: null };
                  obj4[0] = c4;
                  obj4[1] = c4.locale;
                  obj4[4] = includeUnpublishedProducts;
                  obj4[5] = flag;
                  obj4[6] = flag2;
                  obj3[1] = obj4;
                  body = 3;
                  fromServer = 1;
                  obj5 = { value: null, done: false };
                  obj5[0] = obj7.httpGetWithCountryCodeQuery(obj3);
                  return obj5;
                }
              }
            } else {
              if (2 === tmp7) {
                c4 = 0;
                fromServer = flag2;
                obj3 = includeUnpublishedProducts(flag[6]);
                const obj6 = { type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE", collectionIds: null, apiError: null };
                obj6[1] = c4;
                const tmp28 = new includeUnpublishedProducts(flag[8])(fromServer);
                obj6[2] = tmp28;
                obj3.dispatch(obj6);
              } else if (arg0 === 1) {
                fromServer = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                body = arg1;
                obj = includeUnpublishedProducts(flag[6]);
                obj7 = { type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS", collectionIds: null, collections: null };
                obj7[1] = c4;
                const collections = body.body.collections;
                obj7[2] = collections.map(fromServer.fromServer);
                obj.dispatch(obj7);
                c4 = 0;
              }
              c4 = 0;
              fromServer = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            }
            fromServer = 3;
          }
        } catch (tmp45) {
          flag2 = tmp45;
          if (tmp4 === c4) {
            fromServer = tmp2;
            throw tmp45;
          } else {
            body = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
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
  return "" + "" + applicationId + ":" + useShopOrdering + ":" + flag + ":" + flag2 + ":" + includeUnpublishedProducts.offset + ":" + includeUnpublishedProducts.limit;
}
function _maybeFetchCollectionsForApplicationPage() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (fromServer === 2) {
        fromServer = 3;
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
          fromServer = 2;
          if (0 === collectionPageFetchState) {
            if (arg0 === 1) {
              fromServer = 3;
              throw arg1;
            } else if (arg0 === 2) {
              fromServer = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp3;
              let callback2 = tmp5;
              let applicationId;
              callback2 = undefined;
              dependencyMap = undefined;
              closure_3 = undefined;
              applicationId = applicationId.applicationId;
              const useShopOrdering = applicationId.useShopOrdering;
              let tmp24 = undefined === useShopOrdering;
              ({ offset, limit } = applicationId);
              if (!tmp24) {
                tmp24 = useShopOrdering;
              }
              const includeUnpublishedProducts = tmp62.includeUnpublishedProducts;
              let tmp25 = undefined !== includeUnpublishedProducts;
              if (tmp25) {
                tmp25 = includeUnpublishedProducts;
              }
              const includeUnpublishedCollections = tmp62.includeUnpublishedCollections;
              let tmp26 = undefined !== includeUnpublishedCollections;
              if (tmp26) {
                tmp26 = includeUnpublishedCollections;
              }
              const ignoreCache = tmp62.ignoreCache;
              let tmp27 = undefined !== ignoreCache;
              if (tmp27) {
                tmp27 = ignoreCache;
              }
              const _Boolean = Boolean;
              if (Boolean(applicationId)) {
                const tmp29 = closure_1_12(tmp62);
                callback2 = tmp29;
                dependencyMap = closure_1_11(tmp62);
                let obj3 = collectionPageFetchState;
                collectionPageFetchState = collectionPageFetchState.getCollectionPageFetchState(tmp29);
                if ("loading" !== collectionPageFetchState) {
                  const collectionPageFetchedAt = obj3.getCollectionPageFetchedAt(tmp29);
                  if (!tmp27) {
                    if (null != collectionPageFetchedAt) {
                      if ("error" === collectionPageFetchState) {
                        let tmp33 = closure_1_9;
                      } else {
                        tmp33 = closure_1_8;
                      }
                      const _Date = Date;
                      if (Date.now() - collectionPageFetchedAt <= tmp33) {
                        fromServer = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    }
                  }
                  let locale = 1;
                  let obj4 = closure_1_1(closure_1_2[6]);
                  obj1 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH", pageKey: null };
                  obj1[1] = tmp29;
                  obj4.dispatch(obj1);
                  let obj6 = callback(closure_1_2[7]);
                  const obj2 = { url: null, query: null, rejectWithError: true };
                  obj2[0] = closure_1_7.STOREFRONT_COLLECTIONS_FOR_APPLICATION;
                  obj3 = { application_id: null, use_shop_ordering: null, offset: null, limit: null, include_pricing: true, locale: null, with_bundled_skus: true, include_google_sku_ids: true, include_unpublished_products: null, include_unpublished_collections: null, ignore_cache: null };
                  obj3[0] = applicationId;
                  obj3[1] = tmp24;
                  obj3[2] = offset;
                  obj3[3] = limit;
                  obj3[5] = locale.locale;
                  obj3[8] = tmp25;
                  obj3[9] = tmp26;
                  obj3[10] = tmp27;
                  obj2[1] = obj3;
                  collectionPageFetchState = 2;
                  fromServer = 1;
                  obj4 = { value: null, done: false };
                  obj4[0] = obj6.httpGetWithCountryCodeQuery(obj2);
                  return obj4;
                }
              }
            }
          } else {
            if (1 === tmp8) {
              locale = 0;
              locale = closure_3;
              obj1 = callback2(709);
              const obj5 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_FAILURE", pageKey: null, apiError: null };
              obj5[1] = callback2;
              const tmp21 = new callback2(4377)(locale);
              obj5[2] = tmp21;
              obj1.dispatch(obj5);
            } else if (arg0 === 1) {
              fromServer = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_3 = arg1;
              obj6 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS", pageKey: null, listKey: null, applicationId: null, collections: null, total: null };
              obj6[1] = callback2;
              obj6[2] = dependencyMap;
              obj6[3] = applicationId;
              const collections = closure_3.body.collections;
              obj6[4] = collections.map(fromServer.fromServer);
              obj6[5] = closure_3.body.total;
              callback2(709).dispatch(obj6);
              locale = 0;
              const obj13 = callback2(709);
            }
            locale = 0;
            fromServer = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          fromServer = 3;
        } catch (tmp41) {
          closure_3 = tmp41;
          if (tmp4 === locale) {
            fromServer = tmp2;
            throw tmp41;
          } else {
            collectionPageFetchState = tmp;
          }
        }
      }
    })();
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getCollectionsAfterKey(includeUnpublishedCollections) {
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
function _maybeFetchCollectionsAfter() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (fromServer === 2) {
        fromServer = 3;
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
          fromServer = 2;
          if (0 === collectionsAfterFetchState) {
            if (arg0 === 1) {
              fromServer = 3;
              throw arg1;
            } else if (arg0 === 2) {
              fromServer = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp3;
              let lib2 = tmp7;
              let lib;
              lib2 = undefined;
              ({ applicationId, anchorCollectionId, includeUnpublishedProducts } = lib);
              let tmp31 = undefined !== includeUnpublishedProducts;
              if (tmp31) {
                tmp31 = includeUnpublishedProducts;
              }
              const includeUnpublishedCollections = tmp56.includeUnpublishedCollections;
              let tmp32 = undefined !== includeUnpublishedCollections;
              if (tmp32) {
                tmp32 = includeUnpublishedCollections;
              }
              const ignoreCache = tmp56.ignoreCache;
              let tmp33 = undefined !== ignoreCache;
              if (tmp33) {
                tmp33 = ignoreCache;
              }
              const _Boolean = Boolean;
              if (Boolean(applicationId)) {
                const _Boolean2 = Boolean;
                if (Boolean(anchorCollectionId)) {
                  const tmp35 = closure_1_14(tmp56);
                  lib = tmp35;
                  let obj5 = collectionsAfterFetchState;
                  collectionsAfterFetchState = collectionsAfterFetchState.getCollectionsAfterFetchState(tmp35);
                  if ("loading" !== collectionsAfterFetchState) {
                    const collectionsAfterFetchedAt = obj5.getCollectionsAfterFetchedAt(tmp35);
                    if (!tmp33) {
                      if (null != collectionsAfterFetchedAt) {
                        if ("error" === collectionsAfterFetchState) {
                          let tmp38 = closure_1_9;
                        } else {
                          tmp38 = closure_1_8;
                        }
                        const _Date = Date;
                        if (Date.now() - collectionsAfterFetchedAt <= tmp38) {
                          fromServer = 3;
                          return { value: "HermesInternal", done: null };
                        }
                      }
                    }
                    let locale = 1;
                    let obj6 = closure_1_1(closure_1_2[6]);
                    obj1 = { type: "STOREFRONT_COLLECTIONS_AFTER_FETCH", requestKey: null };
                    obj1[1] = tmp35;
                    obj6.dispatch(obj1);
                    const obj2 = { url: null, query: null, rejectWithError: true };
                    obj2[0] = closure_1_7.STOREFRONT_COLLECTIONS_FOR_APPLICATION;
                    let obj3 = { application_id: null, use_shop_ordering: true, anchor_collection_id: null, limit: null, include_products: false, include_pricing: false, include_google_sku_ids: false, locale: null, include_unpublished_products: null, include_unpublished_collections: null, ignore_cache: null };
                    obj3[0] = applicationId;
                    obj3[2] = anchorCollectionId;
                    obj3[3] = lib.limit;
                    obj3[7] = locale.locale;
                    obj3[8] = tmp31;
                    obj3[9] = tmp32;
                    obj3[10] = tmp33;
                    obj2[1] = obj3;
                    collectionsAfterFetchState = 2;
                    fromServer = 1;
                    const obj4 = { value: null, done: false };
                    obj4[0] = lib(closure_1_2[7]).httpGetWithCountryCodeQuery(obj2);
                    return obj4;
                  }
                }
              }
            }
          } else {
            if (1 === tmp7) {
              locale = 0;
              dependencyMap = closure_3;
              obj3 = lib2(709);
              obj5 = { type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_FAILURE", requestKey: null, apiError: null };
              obj5[1] = lib;
              const tmp28 = new lib2(4377)(dependencyMap);
              obj5[2] = tmp28;
              obj3.dispatch(obj5);
            } else if (arg0 === 1) {
              fromServer = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib2 = arg1;
              obj = lib2(709);
              obj6 = { type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_SUCCESS", requestKey: null, collections: null };
              obj6[1] = lib;
              const collections = lib2.body.collections;
              obj6[2] = collections.map(fromServer.fromServer);
              obj.dispatch(obj6);
              locale = 0;
            }
            locale = 0;
            fromServer = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          }
          fromServer = 3;
        } catch (tmp46) {
          closure_3 = tmp46;
          if (tmp4 === locale) {
            fromServer = tmp2;
            throw tmp46;
          } else {
            collectionsAfterFetchState = tmp;
          }
        }
      }
    })();
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _maybeFetchCollectionsForApplication() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (fromServer === 2) {
        fromServer = 3;
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
          fromServer = 2;
          if (0 === store) {
            if (arg0 === 1) {
              fromServer = 3;
              throw arg1;
            } else if (arg0 === 2) {
              fromServer = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let flag = tmp3;
              includeUnpublishedProducts = tmp7;
              let callback;
              includeUnpublishedProducts = undefined;
              flag = undefined;
              let flag2;
              let locale;
              store = undefined;
              ({ applicationId: c0, includeUnpublishedProducts } = callback);
              if (includeUnpublishedProducts === undefined) {
                includeUnpublishedProducts = false;
              }
              flag = tmp99.includeUnpublishedCollections;
              if (flag === undefined) {
                flag = false;
              }
              flag2 = tmp99.ignoreCache;
              if (flag2 === undefined) {
                flag2 = false;
              }
              ({ skuTypes: c4, includePricing } = callback);
              if (includePricing === undefined) {
                includePricing = false;
              }
              store = includePricing;
              fromServer = undefined;
              let constants;
              closure_8 = undefined;
              let fetchParamsForApplication;
              let body;
              store = 1;
              fromServer = 1;
              return { value: "PX_16", done: null };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                fromServer = 3;
                throw arg1;
              } else if (arg0 === 2) {
                fromServer = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                const _Boolean = Boolean;
                if (Boolean(callback)) {
                  fromServer = store.getFetchStateForApplication(callback);
                  if ("loading" !== fromServer) {
                    constants = store.getFetchedAtForApplication(callback);
                    if (null != constants) {
                      if ("error" === fromServer) {
                        let tmp34 = fetchParamsForApplication;
                      } else {
                        tmp34 = closure_8;
                      }
                      closure_8 = tmp34;
                      const _Date = Date;
                      if (Date.now() - constants <= closure_8) {
                        fetchParamsForApplication = store.getFetchParamsForApplication(callback);
                        if ("error" !== fromServer) {
                          if (null != fetchParamsForApplication) {
                            const obj2 = { includePricing: null, skuTypes: null };
                            obj2[0] = store;
                            obj2[1] = locale;
                          }
                        }
                        fromServer = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    }
                    locale = 1;
                    let obj4 = includeUnpublishedProducts(flag[6]);
                    const obj3 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH", applicationId: null };
                    obj3[1] = callback;
                    obj4.dispatch(obj3);
                    let httpGetWithCountryCodeQuery = callback(flag[7]).httpGetWithCountryCodeQuery;
                    obj4 = { url: null, query: null, rejectWithError: true };
                    obj4[0] = constants.STOREFRONT_COLLECTIONS_FOR_APPLICATION;
                    const obj5 = { application_id: null, locale: null, with_bundled_skus: true, include_google_sku_ids: true, include_unpublished_products: null, include_unpublished_collections: null, ignore_cache: null };
                    obj5[0] = callback;
                    obj5[1] = locale.locale;
                    obj5[4] = includeUnpublishedProducts;
                    obj5[5] = flag;
                    obj5[6] = flag2;
                    if (null != locale) {
                      const obj6 = { sku_types: null };
                      obj6[0] = locale;
                      let obj7 = obj6;
                    } else {
                      obj7 = {};
                    }
                    const merged = Object.assign(obj7);
                    if (store) {
                      let obj8 = { include_pricing: true };
                    } else {
                      obj8 = {};
                    }
                    const merged1 = Object.assign(obj8);
                    obj4[1] = obj5;
                    httpGetWithCountryCodeQuery = httpGetWithCountryCodeQuery(obj4);
                    store = 3;
                    fromServer = 1;
                    const tmp55 = callback(flag[7]);
                  }
                }
              }
            } else {
              if (2 === tmp7) {
                locale = 0;
                closure_11 = flag2;
                obj1 = includeUnpublishedProducts(flag[6]);
                const obj9 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE", applicationId: null, apiError: null };
                obj9[1] = callback;
                const tmp20 = new includeUnpublishedProducts(flag[8])(closure_11);
                obj9[2] = tmp20;
                obj1.dispatch(obj9);
              } else if (arg0 === 1) {
                fromServer = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                body = arg1;
                const obj10 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS", applicationId: null, collections: null, includePricing: null, skuTypes: null };
                obj10[1] = callback;
                const collections = body.body.collections;
                obj10[2] = collections.map(fromServer.fromServer);
                obj10[3] = store;
                obj10[4] = locale;
                includeUnpublishedProducts(flag[6]).dispatch(obj10);
                locale = 0;
                const obj15 = includeUnpublishedProducts(flag[6]);
              }
              locale = 0;
              fromServer = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            fromServer = 3;
          }
        } catch (tmp73) {
          flag2 = tmp73;
          if (tmp4 === locale) {
            fromServer = tmp2;
            throw tmp73;
          } else {
            store = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = 12 * setDefault.Millis.HOUR;
let closure_9 = 10 * setDefault.Millis.MINUTE;
const result = require("set").fileFinishedImporting("modules/storefront/StorefrontCollectionActionCreators.tsx");

export const maybeFetchCollectionsWithProducts = function maybeFetchCollectionsWithProducts(arg0) {
  const self = this;
  const apply = _maybeFetchCollectionsWithProducts.apply;
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
  const apply = _maybeFetchCollectionsForApplicationPage.apply;
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
  const apply = _maybeFetchCollectionsAfter.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const maybeFetchCollectionsForApplication = function maybeFetchCollectionsForApplication() {
  const self = this;
  const apply = _maybeFetchCollectionsForApplication.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};