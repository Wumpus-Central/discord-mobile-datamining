// === Module 12071: ApplicationDirectoryActionCreators ===

// Module 12071 (ApplicationDirectoryActionCreators)
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import ApplicationCollectionSurface from "ApplicationCollectionSurface" /* 12077 */;
import ApplicationCollectionActiveState from "ApplicationCollectionActiveState" /* 12078 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import DevSettingsStore from "DevSettingsStore" /* 4559 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1347 */;
import ApplicationDirectoryApplicationsStore from "ApplicationDirectoryApplicationsStore" /* 7164 */;
import ApplicationDirectoryCategoriesStore from "ApplicationDirectoryCategoriesStore" /* 12072 */;
import ApplicationDirectoryCollectionsStore from "ApplicationDirectoryCollectionsStore" /* 12073 */;
import ApplicationDirectorySearchStore from "ApplicationDirectorySearchStore" /* 12068 */;
import ApplicationDirectorySimilarApplicationsStore from "ApplicationDirectorySimilarApplicationsStore" /* 12074 */;
import MyGuildApplicationsStore from "MyGuildApplicationsStore" /* 12075 */;

require = fn;
let closure_20 = async function _getEmbedApplication(arg0, value) {
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
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          let body;
          const _Date = Date;
          const timestamp = Date.now();
          value = map.get(closure_0);
          c1 = value;
          if (value == null) {
            c1 = 0;
          }
          let obj5 = applicationFetchState;
          if (applicationFetchState.getApplicationFetchState(closure_0) !== constants.FETCHING) {
            if (!obj5.isInvalidApplication(tmp33)) {
              if (timestamp >= tmp21 + collapsedCategories) {
                const result = obj10.set(tmp33, timestamp);
                const obj1 = { type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId: tmp33 };
                DispatcherDefault.dispatch(obj1);
                const tmp44 = new BackoffDefault(1000, 5000);
                closure_130_1 = tmp44;
                function interceptResponse(status, arg1) {
                  closure_0 = arg1;
                  let flag = 429 === status.status;
                  if (flag) {
                    flag = closure_1.fails < 10;
                  }
                  if (flag) {
                    closure_1.fail(() => {
                      closure_0(undefined, closure_2_2);
                    });
                    flag = true;
                  }
                  return flag;
                }
                closure_130_2 = interceptResponse;
                c5 = 1;
                const HTTP = HTTPUtils.HTTP;
                const obj2 = { url: Endpoints.APPLICATION_DIRECTORY_EMBED_APPLICATION(tmp33), backoff: tmp44, retries: 10, interceptResponse, rejectWithError: null };
                obj2.rejectWithError = HTTPUtils.rejectWithMigratedError();
                c6 = 2;
                c7 = 1;
                let obj3 = { value: HTTP.get(obj2), done: false };
                return obj3;
              }
            }
          }
          obj10 = map;
          tmp21 = c1;
        }
      } else {
        if (1 === tmp7) {
          c5 = 0;
          obj3 = closure_131_1(closure_131_2[11]);
          const obj4 = { type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE", applicationId: closure_130_0, isInvalidApplication: true };
          obj3.dispatch(obj4);
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          body = value.body;
          obj = closure_131_1(closure_131_2[11]);
          obj5 = { type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS", application: body };
          obj.dispatch(obj5);
          c5 = 0;
        }
        c5 = 0;
        c7 = 3;
        const obj6 = { value, done: true };
        return obj6;
      }
      c7 = 3;
    } catch (tmp24) {
      closure_4 = tmp24;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp24;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_21 = async function _getApplication(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_1 = undefined;
          closure_131_0 = closure_0;
          let obj1 = closure_1;
          if (closure_1 === undefined) {
            obj1 = {};
          }
          closure_131_1 = obj1;
          closure_131_2 = undefined;
          let applicationFetchState;
          let applicationLastFetchTime;
          let dontRefetchMs;
          let noCache;
          closure_131_7 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            const _Date = Date;
            closure_131_2 = Date.now();
            applicationFetchState = closure_132_6.getApplicationFetchState(closure_131_0);
            applicationLastFetchTime = closure_132_6.getApplicationLastFetchTime(closure_131_0);
            dontRefetchMs = closure_131_1.dontRefetchMs;
            noCache = closure_131_1.noCache;
            if (applicationFetchState !== closure_132_7.FETCHING) {
              if (null != applicationLastFetchTime) {
                closure_2 = dontRefetchMs;
                if (dontRefetchMs == null) {
                  closure_2 = closure_132_18;
                }
              }
              let obj5 = closure_132_1(closure_132_2[11]);
              let obj3 = { type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId: closure_131_0 };
              obj5.dispatch(obj3);
              c6 = 1;
              const HTTP = closure_132_0(closure_132_2[13]).HTTP;
              const request = { url: closure_132_17.APPLICATION_DIRECTORY_APPLICATION(closure_131_0), query: null, rejectWithError: true };
              const obj4 = { locale: closure_132_5.locale, nocache: noCache };
              request.query = obj4;
              c7 = 3;
              c8 = 1;
              obj5 = { value: HTTP.get(request), done: false };
              return obj5;
            }
          }
        } else {
          if (2 === tmp7) {
            c6 = 0;
            obj3 = closure_132_1(closure_132_2[11]);
            const obj6 = { type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE", applicationId: closure_131_0, isInvalidApplication: true };
            obj3.dispatch(obj6);
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_131_7 = value;
            obj = closure_132_1(closure_132_2[11]);
            const obj7 = { type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS", application: closure_131_7.body };
            obj.dispatch(obj7);
            c6 = 0;
          }
          c6 = 0;
          c8 = 3;
          const obj8 = { value, done: true };
          return obj8;
        }
        c8 = 3;
      }
    } catch (tmp44) {
      closure_5 = tmp44;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp44;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_22 = async function _getCategories(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_0 = tmp5;
          closure_128_0 = undefined;
          const _Date = Date;
          const timestamp = Date.now();
          lastFetchTimeMs = lastFetchTimeMs.getLastFetchTimeMs();
          if (null != lastFetchTimeMs) {
            if (lastFetchTimeMs + collapsedCategories > timestamp) {
              c3 = 3;
            }
          }
          const HTTP = HTTPUtils.HTTP;
          const request = { url: constants.APPLICATION_DIRECTORY_CATEGORIES, query: null, rejectWithError: null };
          const obj1 = { locale: locale.locale };
          request.query = obj1;
          request.rejectWithError = HTTPUtils.rejectWithMigratedError();
          c2 = 1;
          c3 = 1;
          const obj2 = { value: HTTP.get(request), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
        obj = closure_129_1(closure_129_2[11]);
        const obj3 = { type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS", categories: closure_128_0.body };
        obj.dispatch(obj3);
      }
      c3 = 3;
      const obj4 = { value, done: true };
      return obj4;
    } catch (tmp18) {
      c3 = tmp;
      throw tmp18;
    }
  }
};
let closure_23 = async function _getSimilarApplications(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          ({ applicationId: closure_131_0, guildId: closure_131_1, options: closure_131_2 } = closure_0);
          let page2;
          closure_131_4 = undefined;
          let fetchState;
          let lastFetchTimeMs2;
          closure_131_7 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj1 = { value, done: true };
            return obj1;
          } else {
            let page = closure_131_2;
            if (closure_131_2 == null) {
              page = {};
            }
            page2 = page.page;
            const _Date = Date;
            closure_131_4 = Date.now();
            const obj2 = { applicationId: closure_131_0, guildId: closure_131_1 };
            fetchState = closure_132_13.getFetchState(obj2);
            const obj3 = { applicationId: closure_131_0, guildId: closure_131_1 };
            const similarApplications = closure_132_13.getSimilarApplications(obj3);
            let lastFetchTimeMs = similarApplications;
            if (similarApplications == null) {
              lastFetchTimeMs = {};
            }
            lastFetchTimeMs2 = lastFetchTimeMs.lastFetchTimeMs;
            if (fetchState !== closure_132_14.FETCHING) {
              let obj5 = closure_132_1(closure_132_2[11]);
              const obj4 = { type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS", applicationId: closure_131_0, guildId: closure_131_1, page: page2 };
              obj5.dispatch(obj4);
              c6 = 1;
              const HTTP = closure_132_0(closure_132_2[13]).HTTP;
              const request = { url: closure_132_17.APPLICATION_DIRECTORY_SIMILAR(closure_131_0), query: null, rejectWithError: true };
              obj5 = { guild_id: closure_131_1, page: page2, locale: closure_132_5.locale };
              request.query = obj5;
              c7 = 3;
              c8 = 1;
              const obj6 = { value: HTTP.get(request), done: false };
              return obj6;
            }
          }
        } else {
          if (2 === tmp7) {
            c6 = 0;
            obj1 = closure_132_1(closure_132_2[11]);
            const obj7 = { type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE", applicationId: closure_131_0, guildId: closure_131_1, page: page2 };
            obj1.dispatch(obj7);
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_131_7 = value;
            const obj8 = { type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS", applicationId: closure_131_0, guildId: closure_131_1, similarApplications: closure_131_7.body.applications, loadId: closure_131_7.body.load_id, page: page2, totalPages: closure_131_7.body.num_pages };
            closure_132_1(closure_132_2[11]).dispatch(obj8);
            c6 = 0;
            const obj14 = closure_132_1(closure_132_2[11]);
          }
          c6 = 0;
          c8 = 3;
          obj = { value, done: true };
          return obj;
        }
        c8 = 3;
      }
    } catch (tmp54) {
      closure_5 = tmp54;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp54;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_24 = async function _search(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          ({ query: closure_131_0, guildId: closure_131_1, options: closure_131_2, onSuccessCallback: closure_131_3 } = closure_0);
          closure_131_4 = undefined;
          let page;
          let pageSize;
          let categoryId;
          let integrationType;
          closure_131_9 = undefined;
          closure_131_10 = undefined;
          closure_131_11 = undefined;
          closure_131_12 = undefined;
          let source;
          closure_131_14 = undefined;
          closure_131_15 = undefined;
          let fetchState;
          let lastFetchTimeMs2;
          closure_131_18 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj1 = { value, done: true };
            return obj1;
          } else {
            closure_1 = closure_131_2;
            if (closure_131_2 == null) {
              closure_1 = {};
            }
            closure_131_4 = closure_1;
            page = closure_131_4.page;
            pageSize = closure_131_4.pageSize;
            categoryId = closure_131_4.categoryId;
            integrationType = closure_131_4.integrationType;
            closure_131_9 = closure_131_4.minUserInstallCommandCount;
            closure_131_10 = closure_131_4.excludeAppsWithCustomInstallUrl;
            closure_131_11 = closure_131_4.excludeNonEmbeddedApps;
            closure_131_12 = closure_131_4.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
            source = closure_131_4.source;
            if (undefined === source) {
              let APP_DIRECTORY = closure_132_0(closure_132_2[14]).SearchAppsRequestSource.APP_DIRECTORY;
            } else {
              APP_DIRECTORY = source;
            }
            closure_131_14 = APP_DIRECTORY;
            const _Date = Date;
            closure_131_15 = Date.now();
            const obj2 = { query: closure_131_0, guildId: closure_131_1, page, pageSize, categoryId, integrationType };
            fetchState = closure_132_11.getFetchState(obj2);
            const obj3 = { query: closure_131_0, guildId: closure_131_1, page, pageSize, categoryId, integrationType };
            const searchResults = closure_132_11.getSearchResults(obj3);
            let lastFetchTimeMs = searchResults;
            if (searchResults == null) {
              lastFetchTimeMs = {};
            }
            lastFetchTimeMs2 = lastFetchTimeMs.lastFetchTimeMs;
            if (fetchState !== closure_132_12.FETCHING) {
              let obj5 = closure_132_1(closure_132_2[11]);
              const obj4 = { type: "APPLICATION_DIRECTORY_FETCH_SEARCH", query: closure_131_0, guildId: closure_131_1, page, pageSize, categoryId, integrationType, minUserInstallCommandCount: closure_131_9, excludeAppsWithCustomInstallUrl: closure_131_10, excludeNonEmbeddedApps: closure_131_11, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: closure_131_12, source: closure_131_14 };
              obj5.dispatch(obj4);
              c6 = 1;
              const HTTP = closure_132_0(closure_132_2[13]).HTTP;
              const request = { url: closure_132_17.APPLICATION_DIRECTORY_SEARCH, query: null, rejectWithError: true };
              obj5 = { query: closure_131_0, guild_id: closure_131_1, page, page_size: pageSize, category_id: categoryId, locale: closure_132_5.locale, integration_type: integrationType, min_user_install_command_count: closure_131_9, exclude_apps_with_custom_install_url: closure_131_10, exclude_non_embedded_apps: closure_131_11, exclude_embedded_apps_without_primary_entry_point_app_command: closure_131_12, source: closure_131_14 };
              request.query = obj5;
              c7 = 3;
              c8 = 1;
              const obj6 = { value: HTTP.get(request), done: false };
              return obj6;
            }
          }
        } else {
          if (2 === tmp7) {
            c6 = 0;
            obj1 = closure_132_1(closure_132_2[11]);
            const obj7 = { type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE", query: closure_131_0, guildId: closure_131_1, page, pageSize, categoryId, integrationType, minUserInstallCommandCount: closure_131_9, excludeAppsWithCustomInstallUrl: closure_131_10, excludeNonEmbeddedApps: closure_131_11, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: closure_131_12, source: closure_131_14 };
            obj1.dispatch(obj7);
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_131_18 = value;
            const obj8 = { type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS", query: closure_131_0, guildId: closure_131_1, page, pageSize, categoryId, integrationType, result: null, minUserInstallCommandCount: null, excludeAppsWithCustomInstallUrl: null, excludeNonEmbeddedApps: null, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: null, source: null };
            const obj9 = { results: closure_131_18.body.results, countsByCategory: closure_131_18.body.counts_by_category, totalCount: closure_131_18.body.result_count, totalPages: closure_131_18.body.num_pages, type: closure_131_18.body.type, loadId: closure_131_18.body.load_id };
            obj8.result = obj9;
            obj8.minUserInstallCommandCount = closure_131_9;
            obj8.excludeAppsWithCustomInstallUrl = closure_131_10;
            obj8.excludeNonEmbeddedApps = closure_131_11;
            obj8.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand = closure_131_12;
            obj8.source = closure_131_14;
            closure_132_1(closure_132_2[11]).dispatch(obj8);
            if (closure_131_3 != null) {
              tmp134(closure_131_18.body.result_count);
            }
            c6 = 0;
            const obj14 = closure_132_1(closure_132_2[11]);
          }
          c6 = 0;
          c8 = 3;
          obj = { value, done: true };
          return obj;
        }
        c8 = 3;
      }
    } catch (tmp103) {
      closure_5 = tmp103;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp103;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_25 = async function _fetchCollections(arg0, value) {
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
          let obj1 = closure_0;
          if (closure_0 === undefined) {
            obj1 = {};
          }
          let APPLICATION_DIRECTORY = obj1.surface;
          if (APPLICATION_DIRECTORY === undefined) {
            APPLICATION_DIRECTORY = ApplicationCollectionSurface.ApplicationCollectionSurface.APPLICATION_DIRECTORY;
          }
          closure_129_0 = APPLICATION_DIRECTORY;
          let ACTIVE = obj1.activeState;
          if (ACTIVE === undefined) {
            ACTIVE = ApplicationCollectionActiveState.ApplicationCollectionActiveState.ACTIVE;
          }
          closure_129_1 = ACTIVE;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          let fetchState;
          let lastFetchTimeMs;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
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
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_129_2 = closure_130_4.get("disable_app_collections_cache");
            const _Date = Date;
            closure_129_3 = Date.now();
            let obj3 = { surface: closure_129_0, activeState: closure_129_1 };
            fetchState = closure_130_9.getFetchState(obj3);
            const obj4 = { surface: closure_129_0, activeState: closure_129_1 };
            lastFetchTimeMs = closure_130_9.getLastFetchTimeMs(obj4);
            if (fetchState !== closure_130_10.FETCHING) {
              let tmp29 = !closure_129_2;
              if (!closure_129_2) {
                tmp29 = closure_129_1 === closure_130_0(closure_130_2[18]).ApplicationCollectionActiveState.ACTIVE;
              }
              closure_129_6 = tmp29;
              let obj5 = closure_130_1(closure_130_2[11]);
              obj5 = { type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS", surface: closure_129_0, activeState: closure_129_1 };
              obj5.dispatch(obj5);
              c4 = 1;
              const HTTP = closure_130_0(closure_130_2[13]).HTTP;
              let get = HTTP.get;
              const request = { url: closure_130_17.APPLICATION_DIRECTORY_COLLECTIONS, query: null, rejectWithError: true };
              const obj6 = { surface: closure_129_0, active_state: closure_129_1, platform: null, locale: null, cache: null };
              let obj9 = closure_130_0(closure_130_2[15]);
              locale = closure_130_0;
              let tmp55 = closure_130_2;
              if (obj9.isAndroid()) {
                let WEB = locale(tmp55[16]).ApplicationCollectionPlatforms.ANDROID;
              } else {
                const localeResult = locale(tmp55[15]);
                const ApplicationCollectionPlatforms = closure_130_0(closure_130_2[16]).ApplicationCollectionPlatforms;
                if (isIOSResult) {
                  WEB = ApplicationCollectionPlatforms.IOS;
                } else {
                  WEB = ApplicationCollectionPlatforms.WEB;
                }
                isIOSResult = locale(tmp55[15]).isIOS();
              }
              obj6.platform = WEB;
              locale = closure_130_5.locale;
              obj6.locale = locale;
              tmp55 = closure_129_6;
              obj6.cache = closure_129_6;
              request.query = obj6;
              get = get(request);
              c5 = 3;
              c6 = 1;
            }
          }
        } else {
          if (2 === tmp7) {
            c4 = 0;
            obj3 = closure_130_1(closure_130_2[11]);
            const obj7 = { type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE", surface: closure_129_0, activeState: closure_129_1 };
            obj3.dispatch(obj7);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_7 = value;
            obj = closure_130_1(closure_130_2[11]);
            const obj8 = { type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS", collections: closure_129_7.body, surface: closure_129_0, activeState: closure_129_1 };
            obj.dispatch(obj8);
            c4 = 0;
          }
          c4 = 0;
          c6 = 3;
          obj9 = { value, done: true };
          return obj9;
        }
        c6 = 3;
      }
    } catch (tmp67) {
      closure_3 = tmp67;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp67;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_26 = async function _fetchIntegrationApplicationIdsForMyGuilds(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
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
          closure_0 = tmp7;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          const _Date = Date;
          const timestamp = Date.now();
          const fetchState = MyGuildApplicationsStore.getFetchState();
          const lastFetchTimeMs = MyGuildApplicationsStore.getLastFetchTimeMs();
          const nextFetchRetryTimeMs = MyGuildApplicationsStore.getNextFetchRetryTimeMs();
          if (fetchState !== constants.FETCHING) {
            if (null == lastFetchTimeMs) {
              let obj5 = DispatcherDefault;
              obj5.dispatch({ type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS" });
              c3 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj1 = { url: constants2.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS, rejectWithError: HTTPUtils.rejectWithMigratedError() };
              c4 = 2;
              c5 = 1;
              const obj2 = { value: HTTP.get(obj1), done: false };
              return obj2;
            }
          }
          c5 = 3;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_2 = closure_2;
        let status;
        if (closure_128_2 != null) {
          status = closure_128_2.status;
        }
        closure_128_1 = 429 === status;
        let obj3 = closure_129_1(closure_129_2[11]);
        let tmp23;
        if (closure_128_1) {
          let retry_after;
          if (closure_128_2 != null) {
            const body = closure_128_2.body;
            if (body != null) {
              retry_after = body.retry_after;
            }
          }
          tmp23 = retry_after;
        }
        obj3 = { type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE", retryAfterSeconds: tmp23 };
        obj3.dispatch(obj3);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
        obj = closure_129_1(closure_129_2[11]);
        const obj4 = { type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS", guildIdToApplicationIds: closure_128_0.body };
        obj.dispatch(obj4);
        c3 = 0;
      }
      c3 = 0;
      c5 = 3;
      obj5 = { value, done: true };
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
};
fn(7164).FetchState;
fn(12073).FetchState;
fn(12068).FetchState;
fn(12074).FetchState;
const FetchState = fn(12075).FetchState;
const Endpoints = fn(1074).Endpoints;
let c18 = 600000;
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/global_discovery_apps/ApplicationDirectoryActionCreators.tsx");

export const getEmbedApplication = function getEmbedApplication() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getApplication = function getApplication() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getCategories = function getCategories() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getSimilarApplications = function getSimilarApplications() {
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const search = function search() {
  const self = this;
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchCollections = function fetchCollections() {
  const self = this;
  const apply = closure_25.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchIntegrationApplicationIdsForMyGuilds = function fetchIntegrationApplicationIdsForMyGuilds() {
  const self = this;
  const apply = closure_26.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};