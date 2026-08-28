// === Module 12512: _maybeFetchCollectionsWithProducts ===

// Module 12512 (_maybeFetchCollectionsWithProducts)
import setDefault from "set" /* 687 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_getSystemLocale" /* 1997 */;
import closure_5 from "getFetchState" /* 12510 */;
import closure_6 from "fromServer" /* 7253 */;
import { Endpoints } from "ME" /* 676 */;

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
              return { value: "ct", done: true };
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
              return { value: "ct", done: true };
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
  closure_11 = tmp;
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