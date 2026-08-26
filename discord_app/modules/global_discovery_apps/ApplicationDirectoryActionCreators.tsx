// === Module 11727: _getEmbedApplication ===

// Module 11727 (_getEmbedApplication)
import refreshSourceMapCookieDefault from "refreshSourceMapCookie" /* 706 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "getUserAgnosticState" /* 4443 */;
import closure_5 from "_getSystemLocale" /* 1996 */;
import closure_6 from "set" /* 5902 */;
import { FetchState } from "set" /* 5902 */;
import closure_8 from "getLastFetchTimeMs" /* 11728 */;
import closure_9 from "getLastFetchTimeMs" /* 11729 */;
import { FetchState } from "getLastFetchTimeMs" /* 11729 */;
import closure_11 from "getSearchResults" /* 11724 */;
import { FetchState } from "getSearchResults" /* 11724 */;
import closure_13 from "getSimilarApplications" /* 11730 */;
import { FetchState } from "getSimilarApplications" /* 11730 */;
import closure_15 from "addToApplicationIdToGuildIds" /* 11731 */;
import { FetchState } from "addToApplicationIdToGuildIds" /* 11731 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
function _getEmbedApplication() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, body) {
      if (constants === 2) {
        constants = 3;
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
          constants = 2;
          if (0 === applicationFetchState) {
            if (arg0 === 1) {
              constants = 3;
              throw body;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              body = tmp3;
              let interceptResponse = tmp7;
              let callback2;
              interceptResponse = undefined;
              body = undefined;
              const _Date = Date;
              const timestamp = Date.now();
              const value = closure_1_19.get(callback);
              callback2 = value;
              if (value == null) {
                callback2 = 0;
              }
              let obj5 = applicationFetchState;
              if (applicationFetchState.getApplicationFetchState(callback) !== constants.FETCHING) {
                if (!obj5.isInvalidApplication(tmp34)) {
                  if (timestamp >= tmp21 + closure_1_18) {
                    const result = obj10.set(tmp34, timestamp);
                    obj1 = { type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId: null };
                    obj1[1] = tmp34;
                    closure_1_1(closure_1_2[11]).dispatch(obj1);
                    const tmp45 = new closure_1_1(closure_1_2[12])(1000, 5000);
                    callback2 = tmp45;
                    interceptResponse = function interceptResponse(status) {
                      closure_0 = arg1;
                      let flag = 429 === status.status;
                      if (flag) {
                        flag = closure_1.fails < 10;
                      }
                      if (flag) {
                        closure_1.fail(() => {
                          callback(undefined, closure_1_2);
                        });
                        flag = true;
                      }
                      return flag;
                    };
                    c5 = 1;
                    const HTTP = callback(closure_1_2[13]).HTTP;
                    const obj2 = { url: null, backoff: null, retries: 10, interceptResponse: null, rejectWithError: null };
                    obj2[0] = closure_1_17.APPLICATION_DIRECTORY_EMBED_APPLICATION(tmp34);
                    obj2[1] = tmp45;
                    obj2[3] = interceptResponse;
                    const obj11 = closure_1_1(closure_1_2[11]);
                    obj2[4] = callback(closure_1_2[13]).rejectWithMigratedError();
                    applicationFetchState = 2;
                    constants = 1;
                    let obj3 = { value: null, done: false };
                    obj3[0] = HTTP.get(obj2);
                    return obj3;
                  }
                }
              }
              obj10 = closure_1_19;
              tmp21 = callback2;
            }
          } else {
            if (1 === tmp7) {
              c5 = 0;
              obj3 = callback2(interceptResponse[11]);
              const obj4 = { type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE", applicationId: null, isInvalidApplication: true };
              obj4[1] = callback;
              obj3.dispatch(obj4);
            } else if (arg0 === 1) {
              constants = 3;
              throw body;
            } else if (arg0 !== 2) {
              body = body.body;
              obj = callback2(interceptResponse[11]);
              obj5 = { type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS", application: null };
              obj5[1] = body;
              obj.dispatch(obj5);
              c5 = 0;
            }
            c5 = 0;
            constants = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          }
          constants = 3;
        } catch (tmp24) {
          closure_4 = tmp24;
          if (tmp4 === c5) {
            constants = tmp2;
            throw tmp24;
          } else {
            applicationFetchState = tmp;
          }
        }
      }
    })();
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
function _getApplication() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === closure_7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let applicationLastFetchTime = tmp3;
              let applicationFetchState = tmp7;
              obj1 = undefined;
              if (obj1 === undefined) {
                obj1 = {};
              }
              dependencyMap = undefined;
              applicationFetchState = undefined;
              applicationLastFetchTime = undefined;
              let dontRefetchMs;
              let store;
              closure_7 = undefined;
              closure_7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                const _Date = Date;
                dependencyMap = Date.now();
                applicationFetchState = store.getApplicationFetchState(callback);
                applicationLastFetchTime = store.getApplicationLastFetchTime(callback);
                dontRefetchMs = obj1.dontRefetchMs;
                store = obj1.noCache;
                if (applicationFetchState !== closure_7.FETCHING) {
                  if (null != applicationLastFetchTime) {
                    dependencyMap = dontRefetchMs;
                    if (dontRefetchMs == null) {
                      dependencyMap = closure_18;
                    }
                    const tmp22 = applicationLastFetchTime;
                  }
                  let obj5 = obj1(709);
                  let obj3 = { type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId: null };
                  obj3[1] = callback;
                  obj5.dispatch(obj3);
                  store = 1;
                  const HTTP = callback(530).HTTP;
                  const obj4 = { url: null, query: null, rejectWithError: true };
                  obj4[0] = closure_17.APPLICATION_DIRECTORY_APPLICATION(callback);
                  obj5 = { locale: null, nocache: null };
                  obj5[0] = dontRefetchMs.locale;
                  obj5[1] = store;
                  obj4[1] = obj5;
                  closure_7 = 3;
                  c8 = 1;
                  const obj6 = { value: null, done: false };
                  obj6[0] = HTTP.get(obj4);
                  return obj6;
                }
              }
            } else {
              if (2 === tmp7) {
                store = 0;
                obj3 = obj1(709);
                const obj7 = { type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE", applicationId: null, isInvalidApplication: true };
                obj7[1] = callback;
                obj3.dispatch(obj7);
              } else if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                closure_7 = arg1;
                obj = obj1(709);
                const obj8 = { type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS", application: null };
                obj8[1] = closure_7.body;
                obj.dispatch(obj8);
                store = 0;
              }
              store = 0;
              c8 = 3;
              const obj9 = { value: null, done: true };
              obj9[0] = arg1;
              return obj9;
            }
            c8 = 3;
          }
        } catch (tmp44) {
          dontRefetchMs = tmp44;
          if (tmp4 === store) {
            c8 = tmp2;
            throw tmp44;
          } else {
            closure_7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_21 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getCategories() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp2;
            let body = tmp5;
            body = undefined;
            const _Date = Date;
            const timestamp = Date.now();
            const lastFetchTimeMs = closure_1_8.getLastFetchTimeMs();
            if (null != lastFetchTimeMs) {
              if (lastFetchTimeMs + closure_1_18 > timestamp) {
                c3 = 3;
              }
            }
            const HTTP = closure_1_0(530).HTTP;
            obj1 = { url: null, query: null, rejectWithError: null };
            obj1[0] = closure_1_17.APPLICATION_DIRECTORY_CATEGORIES;
            const obj2 = { locale: null };
            obj2[0] = closure_1_5.locale;
            obj1[1] = obj2;
            let obj5 = closure_1_0(530);
            obj1[2] = obj5.rejectWithMigratedError();
            dependencyMap = 1;
            c3 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = HTTP.get(obj1);
            return obj3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          body = arg1;
          obj = callback(709);
          const obj4 = { type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS", categories: null };
          obj4[1] = body.body;
          obj.dispatch(obj4);
        }
        c3 = 3;
        obj5 = { value: null, done: true };
        obj5[0] = arg1;
        return obj5;
      } catch (tmp18) {
        c3 = tmp;
        throw tmp18;
      }
    }
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
function _getSimilarApplications() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === closure_7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              let page = tmp7;
              let callback;
              let lib;
              let lastFetchTimeMs;
              ({ applicationId: c0, guildId: closure_1, options: closure_2 } = callback);
              page = undefined;
              closure_4 = undefined;
              let locale;
              let lastFetchTimeMs2;
              closure_7 = undefined;
              closure_7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                lib = lastFetchTimeMs;
                if (lastFetchTimeMs == null) {
                  lib = {};
                }
                page = lib.page;
                const _Date = Date;
                closure_4 = Date.now();
                const obj2 = { applicationId: null, guildId: null };
                obj2[0] = callback;
                obj2[1] = lib;
                locale = store.getFetchState(obj2);
                const obj3 = { applicationId: null, guildId: null };
                obj3[0] = callback;
                obj3[1] = lib;
                const similarApplications = store.getSimilarApplications(obj3);
                lastFetchTimeMs = similarApplications;
                if (similarApplications == null) {
                  lastFetchTimeMs = {};
                }
                lastFetchTimeMs2 = lastFetchTimeMs.lastFetchTimeMs;
                if (locale !== constants.FETCHING) {
                  let obj5 = lib(lastFetchTimeMs[11]);
                  const obj4 = { type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS", applicationId: null, guildId: null, page: null };
                  obj4[1] = callback;
                  obj4[2] = lib;
                  obj4[3] = page;
                  obj5.dispatch(obj4);
                  lastFetchTimeMs2 = 1;
                  const HTTP = callback(lastFetchTimeMs[13]).HTTP;
                  obj5 = { url: null, query: null, rejectWithError: true };
                  obj5[0] = closure_17.APPLICATION_DIRECTORY_SIMILAR(callback);
                  const obj6 = { guild_id: null, page: null, locale: null };
                  obj6[0] = lib;
                  obj6[1] = page;
                  obj6[2] = locale.locale;
                  obj5[1] = obj6;
                  closure_7 = 3;
                  c8 = 1;
                  const obj7 = { value: null, done: false };
                  obj7[0] = HTTP.get(obj5);
                  return obj7;
                }
              }
            } else {
              if (2 === tmp7) {
                lastFetchTimeMs2 = 0;
                obj1 = lib(lastFetchTimeMs[11]);
                const obj8 = { type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE", applicationId: null, guildId: null, page: null };
                obj8[1] = callback;
                obj8[2] = lib;
                obj8[3] = page;
                obj1.dispatch(obj8);
              } else if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                closure_7 = arg1;
                const obj9 = { type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS", applicationId: null, guildId: null, similarApplications: null, loadId: null, page: null, totalPages: null };
                obj9[1] = callback;
                obj9[2] = lib;
                obj9[3] = closure_7.body.applications;
                obj9[4] = closure_7.body.load_id;
                obj9[5] = page;
                obj9[6] = closure_7.body.num_pages;
                lib(lastFetchTimeMs[11]).dispatch(obj9);
                lastFetchTimeMs2 = 0;
                const obj14 = lib(lastFetchTimeMs[11]);
              }
              lastFetchTimeMs2 = 0;
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c8 = 3;
          }
        } catch (tmp54) {
          locale = tmp54;
          if (tmp4 === lastFetchTimeMs2) {
            c8 = tmp2;
            throw tmp54;
          } else {
            closure_7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
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
function _search() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (integrationType === 2) {
        integrationType = 3;
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
            integrationType = 2;
            if (0 === categoryId) {
              if (arg0 === 1) {
                integrationType = 3;
                throw arg1;
              } else if (arg0 === 2) {
                integrationType = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_4 = tmp3;
                c3 = tmp7;
                let callback;
                let callback2;
                let lastFetchTimeMs;
                c3 = undefined;
                throwTypeErrorResult = callback;
                ({ query: c0, guildId: closure_1, options: closure_2, onSuccessCallback: c3 } = callback);
                closure_4 = undefined;
                let page;
                let pageSize;
                categoryId = undefined;
                integrationType = undefined;
                closure_9 = undefined;
                closure_10 = undefined;
                let excludeNonEmbeddedApps;
                let constants;
                let source;
                let APP_DIRECTORY;
                closure_15 = undefined;
                let fetchState;
                lastFetchTimeMs = undefined;
                closure_18 = undefined;
                categoryId = 1;
                integrationType = 1;
                return { value: "ct", done: true };
              }
            } else {
              if (1 === tmp7) {
                if (arg0 === 1) {
                  integrationType = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  integrationType = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  throwTypeErrorResult = c3;
                  throwTypeErrorResult = lastFetchTimeMs;
                  callback2 = lastFetchTimeMs;
                  if (lastFetchTimeMs == null) {
                    callback2 = {};
                  }
                  closure_4 = callback2;
                  page = closure_4.page;
                  pageSize = closure_4.pageSize;
                  categoryId = closure_4.categoryId;
                  integrationType = closure_4.integrationType;
                  closure_9 = closure_4.minUserInstallCommandCount;
                  closure_10 = closure_4.excludeAppsWithCustomInstallUrl;
                  excludeNonEmbeddedApps = closure_4.excludeNonEmbeddedApps;
                  constants = closure_4.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
                  source = closure_4.source;
                  if (undefined === source) {
                    APP_DIRECTORY = callback(lastFetchTimeMs[14]).SearchAppsRequestSource.APP_DIRECTORY;
                  } else {
                    APP_DIRECTORY = source;
                  }
                  const _Date = Date;
                  closure_15 = Date.now();
                  const obj2 = { query: null, guildId: null, page: null, pageSize: null, categoryId: null, integrationType: null };
                  obj2[0] = callback;
                  obj2[1] = callback2;
                  obj2[2] = page;
                  obj2[3] = pageSize;
                  obj2[4] = categoryId;
                  obj2[5] = integrationType;
                  fetchState = excludeNonEmbeddedApps.getFetchState(obj2);
                  const obj3 = { query: null, guildId: null, page: null, pageSize: null, categoryId: null, integrationType: null };
                  obj3[0] = callback;
                  obj3[1] = callback2;
                  obj3[2] = page;
                  obj3[3] = pageSize;
                  obj3[4] = categoryId;
                  obj3[5] = integrationType;
                  const searchResults = excludeNonEmbeddedApps.getSearchResults(obj3);
                  lastFetchTimeMs = searchResults;
                  if (searchResults == null) {
                    lastFetchTimeMs = {};
                  }
                  lastFetchTimeMs = lastFetchTimeMs.lastFetchTimeMs;
                  if (fetchState !== constants.FETCHING) {
                    throwTypeErrorResult = c3;
                    throwTypeErrorResult = lastFetchTimeMs;
                    let obj5 = callback2(lastFetchTimeMs[11]);
                    const obj4 = { type: "APPLICATION_DIRECTORY_FETCH_SEARCH", query: null, guildId: null, page: null, pageSize: null, categoryId: null, integrationType: null, minUserInstallCommandCount: null, excludeAppsWithCustomInstallUrl: null, excludeNonEmbeddedApps: null, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: null, source: null };
                    obj4[1] = callback;
                    obj4[2] = callback2;
                    obj4[3] = page;
                    obj4[4] = pageSize;
                    obj4[5] = categoryId;
                    obj4[6] = integrationType;
                    obj4[7] = closure_9;
                    obj4[8] = closure_10;
                    obj4[9] = excludeNonEmbeddedApps;
                    obj4[10] = constants;
                    obj4[11] = APP_DIRECTORY;
                    obj5.dispatch(obj4);
                    pageSize = 1;
                    const HTTP = callback(lastFetchTimeMs[13]).HTTP;
                    obj5 = { url: null, query: null, rejectWithError: true };
                    obj5[0] = lastFetchTimeMs.APPLICATION_DIRECTORY_SEARCH;
                    const obj6 = { query: null, guild_id: null, page: null, page_size: null, category_id: null, locale: null, integration_type: null, min_user_install_command_count: null, exclude_apps_with_custom_install_url: null, exclude_non_embedded_apps: null, exclude_embedded_apps_without_primary_entry_point_app_command: null, source: null };
                    obj6[0] = callback;
                    obj6[1] = callback2;
                    obj6[2] = page;
                    obj6[3] = pageSize;
                    obj6[4] = categoryId;
                    obj6[5] = page.locale;
                    obj6[6] = integrationType;
                    obj6[7] = closure_9;
                    obj6[8] = closure_10;
                    throwTypeErrorResult = excludeNonEmbeddedApps;
                    obj6[9] = excludeNonEmbeddedApps;
                    throwTypeErrorResult = constants;
                    obj6[10] = constants;
                    throwTypeErrorResult = APP_DIRECTORY;
                    obj6[11] = APP_DIRECTORY;
                    obj5[1] = obj6;
                    categoryId = 3;
                    integrationType = 1;
                    const obj7 = { value: null, done: false };
                    obj7[0] = HTTP.get(obj5);
                    return obj7;
                  }
                }
              } else {
                if (2 === tmp7) {
                  pageSize = 0;
                  obj1 = callback2(lastFetchTimeMs[11]);
                  const obj8 = { type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE", query: null, guildId: null, page: null, pageSize: null, categoryId: null, integrationType: null, minUserInstallCommandCount: null, excludeAppsWithCustomInstallUrl: null, excludeNonEmbeddedApps: null, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: null, source: null };
                  obj8[1] = callback;
                  obj8[2] = callback2;
                  obj8[3] = page;
                  obj8[4] = pageSize;
                  obj8[5] = categoryId;
                  obj8[6] = integrationType;
                  obj8[7] = closure_9;
                  obj8[8] = closure_10;
                  obj8[9] = excludeNonEmbeddedApps;
                  obj8[10] = constants;
                  obj8[11] = APP_DIRECTORY;
                  obj1.dispatch(obj8);
                } else if (arg0 === 1) {
                  integrationType = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  throwTypeErrorResult = c3;
                  throwTypeErrorResult = closure_4;
                  closure_18 = arg1;
                  throwTypeErrorResult = callback2;
                  throwTypeErrorResult = lastFetchTimeMs;
                  const obj9 = { type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS", query: null, guildId: null, page: null, pageSize: null, categoryId: null, integrationType: null, result: null, minUserInstallCommandCount: null, excludeAppsWithCustomInstallUrl: null, excludeNonEmbeddedApps: null, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: null, source: null };
                  throwTypeErrorResult = callback;
                  obj9[1] = callback;
                  throwTypeErrorResult = callback2;
                  obj9[2] = callback2;
                  throwTypeErrorResult = page;
                  obj9[3] = page;
                  throwTypeErrorResult = pageSize;
                  obj9[4] = pageSize;
                  throwTypeErrorResult = categoryId;
                  obj9[5] = categoryId;
                  throwTypeErrorResult = integrationType;
                  obj9[6] = integrationType;
                  const obj10 = { results: null, countsByCategory: null, totalCount: null, totalPages: null, type: null, loadId: null };
                  throwTypeErrorResult = closure_18;
                  obj10[0] = closure_18.body.results;
                  throwTypeErrorResult = closure_18;
                  obj10[1] = closure_18.body.counts_by_category;
                  throwTypeErrorResult = closure_18;
                  obj10[2] = closure_18.body.result_count;
                  throwTypeErrorResult = closure_18;
                  obj10[3] = closure_18.body.num_pages;
                  throwTypeErrorResult = closure_18;
                  obj10[4] = closure_18.body.type;
                  throwTypeErrorResult = closure_18;
                  obj10[5] = closure_18.body.load_id;
                  obj9[7] = obj10;
                  throwTypeErrorResult = closure_9;
                  obj9[8] = closure_9;
                  throwTypeErrorResult = closure_10;
                  obj9[9] = closure_10;
                  throwTypeErrorResult = excludeNonEmbeddedApps;
                  obj9[10] = excludeNonEmbeddedApps;
                  throwTypeErrorResult = constants;
                  obj9[11] = constants;
                  throwTypeErrorResult = APP_DIRECTORY;
                  obj9[12] = APP_DIRECTORY;
                  throwTypeErrorResult = callback2(lastFetchTimeMs[11]).dispatch(obj9);
                  if (c3 != null) {
                    throwTypeErrorResult(closure_18.body.result_count);
                  }
                  pageSize = 0;
                  const obj14 = callback2(lastFetchTimeMs[11]);
                }
                pageSize = 0;
                integrationType = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              integrationType = 3;
            }
          } catch (throwTypeErrorResult) {
            page = throwTypeErrorResult;
            throwTypeErrorResult = pageSize;
            if (tmp4 === pageSize) {
              throwTypeErrorResult = tmp2;
              integrationType = tmp2;
              throw throwTypeErrorResult;
            } else {
              categoryId = throwTypeErrorResult;
            }
          }
        }
      }
    })();
    iter.next();
    return iter;
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
function _fetchCollections() {
  const self = this;
  const tmp = callback(() => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*() {
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
          if (0 === locale) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp3;
              let ACTIVE = tmp7;
              let APPLICATION_DIRECTORY;
              ACTIVE = undefined;
              obj1 = APPLICATION_DIRECTORY;
              if (APPLICATION_DIRECTORY === undefined) {
                obj1 = {};
              }
              APPLICATION_DIRECTORY = obj1.surface;
              if (APPLICATION_DIRECTORY === undefined) {
                APPLICATION_DIRECTORY = callback(closure_1_2[17]).ApplicationCollectionSurface.APPLICATION_DIRECTORY;
              }
              ACTIVE = obj1.activeState;
              if (ACTIVE === undefined) {
                ACTIVE = callback(closure_1_2[18]).ApplicationCollectionActiveState.ACTIVE;
              }
              dependencyMap = undefined;
              closure_3 = undefined;
              let fetchState;
              locale = undefined;
              c6 = undefined;
              let body;
              locale = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                dependencyMap = fetchState.get("disable_app_collections_cache");
                const _Date = Date;
                closure_3 = Date.now();
                let obj3 = { surface: null, activeState: null };
                obj3[0] = APPLICATION_DIRECTORY;
                obj3[1] = ACTIVE;
                fetchState = store.getFetchState(obj3);
                const obj4 = { surface: null, activeState: null };
                obj4[0] = APPLICATION_DIRECTORY;
                obj4[1] = ACTIVE;
                locale = store.getLastFetchTimeMs(obj4);
                if (fetchState !== constants.FETCHING) {
                  let tmp29 = !dependencyMap;
                  if (!dependencyMap) {
                    tmp29 = ACTIVE === APPLICATION_DIRECTORY(11734).ApplicationCollectionActiveState.ACTIVE;
                  }
                  c6 = tmp29;
                  let obj5 = ACTIVE(709);
                  obj5 = { type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS", surface: null, activeState: null };
                  obj5[1] = APPLICATION_DIRECTORY;
                  obj5[2] = ACTIVE;
                  obj5.dispatch(obj5);
                  fetchState = 1;
                  const HTTP = APPLICATION_DIRECTORY(530).HTTP;
                  let get = HTTP.get;
                  const obj6 = { url: null, query: null, rejectWithError: true };
                  obj6[0] = constants2.APPLICATION_DIRECTORY_COLLECTIONS;
                  const obj7 = { surface: null, active_state: null, platform: null, locale: null, cache: null };
                  obj7[0] = APPLICATION_DIRECTORY;
                  obj7[1] = ACTIVE;
                  let obj9 = APPLICATION_DIRECTORY(500);
                  locale = APPLICATION_DIRECTORY;
                  if (obj9.isAndroid()) {
                    let WEB = locale(11732).ApplicationCollectionPlatforms.ANDROID;
                  } else {
                    const localeResult = locale(500);
                    const ApplicationCollectionPlatforms = APPLICATION_DIRECTORY(11732).ApplicationCollectionPlatforms;
                    if (isIOSResult) {
                      WEB = ApplicationCollectionPlatforms.IOS;
                    } else {
                      WEB = ApplicationCollectionPlatforms.WEB;
                    }
                    isIOSResult = locale(500).isIOS();
                  }
                  obj7[2] = WEB;
                  locale = locale.locale;
                  obj7[3] = locale;
                  obj7[4] = c6;
                  obj6[1] = obj7;
                  get = get(obj6);
                  locale = 3;
                  c6 = 1;
                }
              }
            } else {
              if (2 === tmp7) {
                fetchState = 0;
                obj3 = ACTIVE(709);
                const obj8 = { type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE", surface: null, activeState: null };
                obj8[1] = APPLICATION_DIRECTORY;
                obj8[2] = ACTIVE;
                obj3.dispatch(obj8);
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                body = arg1;
                obj = ACTIVE(709);
                obj9 = { type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS", collections: null, surface: null, activeState: null };
                obj9[1] = body.body;
                obj9[2] = APPLICATION_DIRECTORY;
                obj9[3] = ACTIVE;
                obj.dispatch(obj9);
                fetchState = 0;
              }
              fetchState = 0;
              c6 = 3;
              const obj10 = { value: null, done: true };
              obj10[0] = arg1;
              return obj10;
            }
            c6 = 3;
          }
        } catch (tmp67) {
          closure_3 = tmp67;
          if (tmp4 === fetchState) {
            c6 = tmp2;
            throw tmp67;
          } else {
            locale = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
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
function _fetchIntegrationApplicationIdsForMyGuilds() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
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
            let callback = tmp3;
            let body = tmp7;
            body = undefined;
            callback = undefined;
            const _Date = Date;
            const timestamp = Date.now();
            const fetchState = closure_1_15.getFetchState();
            const lastFetchTimeMs = closure_1_15.getLastFetchTimeMs();
            const nextFetchRetryTimeMs = closure_1_15.getNextFetchRetryTimeMs();
            if (fetchState !== closure_1_16.FETCHING) {
              if (null == lastFetchTimeMs) {
                let obj5 = closure_1_1(closure_1_2[11]);
                obj5.dispatch({ type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS" });
                c3 = 1;
                const HTTP = closure_1_0(closure_1_2[13]).HTTP;
                obj1 = { url: null, rejectWithError: null };
                obj1[0] = closure_1_17.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS;
                obj1[1] = closure_1_0(closure_1_2[13]).rejectWithMigratedError();
                c4 = 2;
                c5 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = HTTP.get(obj1);
                return obj2;
              }
            }
            c5 = 3;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          let status;
          if (closure_2 != null) {
            status = closure_2.status;
          }
          callback = 429 === status;
          let obj3 = callback(closure_2[11]);
          let tmp23;
          if (callback) {
            let retry_after;
            if (closure_2 != null) {
              body = closure_2.body;
              if (body != null) {
                retry_after = body.retry_after;
              }
            }
            tmp23 = retry_after;
          }
          obj3 = { type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE", retryAfterSeconds: null };
          obj3[1] = tmp23;
          obj3.dispatch(obj3);
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          body = arg1;
          obj = callback(closure_2[11]);
          const obj4 = { type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS", guildIdToApplicationIds: null };
          obj4[1] = body.body;
          obj.dispatch(obj4);
          c3 = 0;
        }
        c3 = 0;
        c5 = 3;
        obj5 = { value: null, done: true };
        obj5[0] = arg1;
        return obj5;
      } catch (tmp34) {
        closure_2 = tmp34;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp34;
        } else {
          c4 = tmp;
        }
      }
    }
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
refreshSourceMapCookieDefault;
let c18 = 600000;
const map = new Map();
let result = require("set").fileFinishedImporting("modules/global_discovery_apps/ApplicationDirectoryActionCreators.tsx");

export const getEmbedApplication = function getEmbedApplication(code) {
  const self = this;
  const apply = _getEmbedApplication.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getApplication = function getApplication() {
  const self = this;
  const apply = _getApplication.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getCategories = function getCategories() {
  const self = this;
  const apply = _getCategories.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getSimilarApplications = function getSimilarApplications() {
  const self = this;
  const apply = _getSimilarApplications.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const search = function search() {
  const self = this;
  const apply = _search.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchCollections = function fetchCollections(arg0) {
  const self = this;
  const apply = _fetchCollections.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchIntegrationApplicationIdsForMyGuilds = function fetchIntegrationApplicationIdsForMyGuilds() {
  const self = this;
  const apply = _fetchIntegrationApplicationIdsForMyGuilds.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};