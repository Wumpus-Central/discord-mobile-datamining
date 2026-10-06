// discord_app/modules/global_discovery_apps/ApplicationDirectoryActionCreators.tsx
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ApplicationDirectoryApplicationsStore2 from "stores/ApplicationDirectoryApplicationsStore.tsx";
import ApplicationDirectorySearchStore2 from "stores/ApplicationDirectorySearchStore.tsx";
import ApplicationDirectoryCollectionsStore2 from "stores/ApplicationDirectoryCollectionsStore.tsx";
import ApplicationDirectorySimilarApplicationsStore2 from "stores/ApplicationDirectorySimilarApplicationsStore.tsx";
import MyGuildApplicationsStore2 from "stores/MyGuildApplicationsStore.tsx";
import ApplicationCollectionSurface from "../../../discord_common/js/shared/shared-constants/ApplicationCollectionSurface.tsx";
import ApplicationCollectionActiveState from "../../../discord_common/js/shared/shared-constants/ApplicationCollectionActiveState.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import DevSettingsStore from "../devtools/dev_settings/DevSettingsStore.tsx";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import DeveloperOptionsStore from "../../stores/DeveloperOptionsStore.tsx";
import ApplicationDirectoryCategoriesStore from "stores/ApplicationDirectoryCategoriesStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const MyGuildApplicationsStore = MyGuildApplicationsStore2;
let closure_12;

let obj = function _getEmbedApplication() {
  let applicationFetchState;
  obj = _asyncToGenerator(async (applicationId) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function (arg0) {
      let obj14;
      let value;
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
          let body;
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
              let closure_1;
              let interceptResponse;
              body = undefined;
              const _Date = Date;
              const timestamp = Date.now();
              value = map.get(applicationId);
              c1 = value;
              if (value == null) {
                c1 = 0;
              }
              const tmp18 = c1;
              if (applicationFetchState.getApplicationFetchState(applicationId) !== constants.FETCHING) {
                if (!applicationFetchState.isInvalidApplication(applicationId)) {
                  if (timestamp >= tmp18 + closure_2_18) {
                    const result = map.set(applicationId, timestamp);
                    const obj5 = { type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId };
                    const obj11 = DispatcherDefault;
                    obj11.dispatch(obj5);
                    const self = this;
                    const self2 = this;
                    const tmp38 = new BackoffDefault(1000, 5000);
                    closure_1 = tmp38;
                    interceptResponse = function interceptResponse(status, arg1) {
                      let closure_0 = arg1;
                      let flag = 429 === status.status && closure_1.fails < 10;
                      if (flag) {
                        closure_1.fail(() => {
                          closure_0(undefined, closure_2_2);
                        });
                        flag = true;
                      }
                      return flag;
                    };
                    c5 = 1;
                    const HTTP = HTTPUtils.HTTP;
                    const get = HTTP.get;
                    const obj7 = {
                      url: Endpoints.APPLICATION_DIRECTORY_EMBED_APPLICATION(applicationId),
                      backoff: tmp38,
                      retries: 10,
                      interceptResponse,
                      rejectWithError: obj14.rejectWithMigratedError(),
                    };
                    c6 = 2;
                    c7 = 1;
                    obj14 = HTTPUtils;
                    const obj8 = { value: get(obj7), done: false };
                    return obj8;
                  }
                }
              }
            }
          } else if (1 === c6) {
            c5 = 0;
            const obj9 = {
              type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
              applicationId,
              isInvalidApplication: true,
            };
            const obj4 = closure_131_1(closure_131_2[11]);
            obj4.dispatch(obj9);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            const obj13 = { type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS", application: body };
            obj = closure_131_1(closure_131_2[11]);
            obj.dispatch(obj13);
            c5 = 0;
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp21) {
          closure_4 = tmp21;
          if (0 === c5) {
            c7 = 3;
            throw tmp21;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _getApplication() {
  obj = _asyncToGenerator(async (applicationId) => {
    let closure_3;
    let closure_4;
    let closure_5;
    let obj5;
    let obj9;
    let closure_1 = arg1;
    if (1 === c7) {
      if (applicationId === 1) {
        let c8 = 3;
        throw value;
      } else if (applicationId === 2) {
        c8 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        const _Date = Date;
        let closure_2 = Date.now();
        let applicationFetchState = closure_132_6.getApplicationFetchState(applicationId);
        let applicationLastFetchTime = closure_132_6.getApplicationLastFetchTime(applicationId);
        const dontRefetchMs = obj5.dontRefetchMs;
        const noCache = obj5.noCache;
        if (applicationFetchState !== closure_132_7.FETCHING) {
          if (null != applicationLastFetchTime) {
            closure_2 = dontRefetchMs;
          }
          const obj8 = { type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId };
          const obj6 = closure_132_1(closure_132_2[11]);
          obj6.dispatch(obj8);
          let c6 = 1;
          const HTTP = closure_132_0(closure_132_2[13]).HTTP;
          const request = {
            url: closure_132_17.APPLICATION_DIRECTORY_APPLICATION(applicationId),
            query: obj9,
            rejectWithError: true,
          };
          const get = HTTP.get;
          obj9 = { locale: closure_132_5.locale, nocache: noCache };
          c7 = 3;
          c8 = 1;
          const obj10 = { value: get(request), done: false };
          return obj10;
        }
      }
    } else if (2 === c7) {
      c6 = 0;
      const obj11 = {
        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
        applicationId,
        isInvalidApplication: true,
      };
      const obj4 = closure_132_1(closure_132_2[11]);
      obj4.dispatch(obj11);
    } else if (applicationId === 1) {
      c8 = 3;
      throw value;
    } else if (applicationId === 2) {
      c6 = 0;
      c8 = 3;
      const obj12 = { value, done: true };
      return obj12;
    } else {
      const body = value;
      const obj13 = { type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS", application: body.body };
      obj = closure_132_1(closure_132_2[11]);
      obj.dispatch(obj13);
      c6 = 0;
    }
    await "IconComponent";
    applicationLastFetchTime = tmp;
    applicationFetchState = tmp4;
    obj5 = closure_1;
    if (closure_1 === undefined) {
      obj5 = {};
    }
    return "Reflect";
  });
  return obj(...arguments);
};
obj = function _getCategories() {
  let locale;
  obj = _asyncToGenerator(async () => {
    let obj4;
    let obj6;
    if (c3 === 2) {
      c3 = 3;
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
      try {
        let body;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            body = undefined;
            const _Date = Date;
            const timestamp = Date.now();
            lastFetchTimeMs = lastFetchTimeMs.getLastFetchTimeMs();
            const HTTP = HTTPUtils.HTTP;
            const request = {
              url: constants.APPLICATION_DIRECTORY_CATEGORIES,
              query: obj4,
              rejectWithError: obj6.rejectWithMigratedError(),
            };
            obj4 = { locale: locale.locale };
            const get = HTTP.get;
            obj6 = HTTPUtils;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: get(request), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          body = value;
          const obj8 = { type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS", categories: body.body };
          obj = closure_129_1(closure_129_2[11]);
          obj.dispatch(obj8);
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp17) {
        c3 = 3;
        throw tmp17;
      }
    }
  });
  return obj(...arguments);
};
obj = function _getSimilarApplications() {
  obj = _asyncToGenerator(async (applicationId) => {
    let c0;
    let c1;
    let c2;
    let closure_3;
    let closure_5;
    let obj10;
    let page;
    if (1 === c7) {
      if (applicationId === 1) {
        let c8 = 3;
        throw value;
      } else if (applicationId === 2) {
        c8 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        page = c2;
        if (c2 == null) {
          page = {};
        }
        page = page.page;
        const _Date = Date;
        let closure_4 = Date.now();
        const obj7 = { applicationId, guildId: page };
        const fetchState = closure_132_13.getFetchState(obj7);
        const obj8 = { applicationId, guildId: page };
        const similarApplications = closure_132_13.getSimilarApplications(obj8);
        let lastFetchTimeMs = similarApplications;
        if (similarApplications == null) {
          lastFetchTimeMs = {};
        }
        lastFetchTimeMs = lastFetchTimeMs.lastFetchTimeMs;
        if (fetchState !== closure_132_14.FETCHING) {
          const obj9 = { type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS", applicationId, guildId: page, page };
          const obj6 = closure_132_1(closure_132_2[11]);
          obj6.dispatch(obj9);
          let c6 = 1;
          const HTTP = closure_132_0(closure_132_2[13]).HTTP;
          const request = {
            url: closure_132_17.APPLICATION_DIRECTORY_SIMILAR(applicationId),
            query: obj10,
            rejectWithError: true,
          };
          const get = HTTP.get;
          obj10 = { guild_id: page, page, locale: closure_132_5.locale };
          c7 = 3;
          c8 = 1;
          const obj11 = { value: get(request), done: false };
          return obj11;
        }
      }
    } else if (2 === c7) {
      c6 = 0;
      const obj12 = {
        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
        applicationId,
        guildId: page,
        page,
      };
      const obj2 = closure_132_1(closure_132_2[11]);
      obj2.dispatch(obj12);
    } else if (applicationId === 1) {
      c8 = 3;
      throw value;
    } else if (applicationId === 2) {
      c6 = 0;
      c8 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      let closure_7 = value;
      const obj13 = {
        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
        applicationId,
        guildId: page,
        similarApplications: closure_7.body.applications,
        loadId: closure_7.body.load_id,
        page,
        totalPages: closure_7.body.num_pages,
      };
      const obj14 = closure_132_1(closure_132_2[11]);
      obj14.dispatch(obj13);
      c6 = 0;
    }
    await "IconComponent";
    ({ applicationId: c0, guildId: c1, options: c2 } = closure_0);
    return "Reflect";
  });
  return obj(...arguments);
};
obj = function _search() {
  obj = _asyncToGenerator(async (query) => {
    let APP_DIRECTORY;
    let c0;
    let c1;
    let c2;
    let c3;
    let categoryId;
    let closure_3;
    let closure_4;
    let closure_5;
    let excludeAppsWithCustomInstallUrl;
    let excludeNonEmbeddedApps;
    let integrationType;
    let minUserInstallCommandCount;
    let obj10;
    let obj15;
    let page;
    let pageSize;
    if (1 === c7) {
      if (query === 1) {
        let c8 = 3;
        throw value;
      } else if (query === 2) {
        c8 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        let closure_1 = c2;
        if (c2 == null) {
          closure_1 = {};
        }
        const tmp = closure_1;
        page = tmp.page;
        pageSize = tmp.pageSize;
        categoryId = tmp.categoryId;
        integrationType = tmp.integrationType;
        minUserInstallCommandCount = tmp.minUserInstallCommandCount;
        excludeAppsWithCustomInstallUrl = tmp.excludeAppsWithCustomInstallUrl;
        excludeNonEmbeddedApps = tmp.excludeNonEmbeddedApps;
        closure_12 = tmp.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
        const source = tmp.source;
        if (undefined === source) {
          APP_DIRECTORY = closure_132_0(closure_132_2[14]).SearchAppsRequestSource.APP_DIRECTORY;
        } else {
          APP_DIRECTORY = source;
        }
        const _Date = Date;
        let closure_15 = Date.now();
        const obj7 = { query, guildId, page, pageSize, categoryId, integrationType };
        const fetchState = closure_132_11.getFetchState(obj7);
        const obj8 = { query, guildId, page, pageSize, categoryId, integrationType };
        const searchResults = closure_132_11.getSearchResults(obj8);
        let lastFetchTimeMs = searchResults;
        if (searchResults == null) {
          lastFetchTimeMs = {};
        }
        lastFetchTimeMs = lastFetchTimeMs.lastFetchTimeMs;
        if (fetchState !== closure_132_12.FETCHING) {
          const obj9 = {
            type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
            query,
            guildId,
            page,
            pageSize,
            categoryId,
            integrationType,
            minUserInstallCommandCount,
            excludeAppsWithCustomInstallUrl,
            excludeNonEmbeddedApps,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: closure_12,
            source: APP_DIRECTORY,
          };
          const obj6 = closure_132_1(closure_132_2[11]);
          obj6.dispatch(obj9);
          let c6 = 1;
          const HTTP = closure_132_0(closure_132_2[13]).HTTP;
          const request = { url: closure_132_17.APPLICATION_DIRECTORY_SEARCH, query: obj10, rejectWithError: true };
          obj10 = {
            query,
            guild_id: guildId,
            page,
            page_size: pageSize,
            category_id: categoryId,
            locale: closure_132_5.locale,
            integration_type: integrationType,
            min_user_install_command_count: minUserInstallCommandCount,
            exclude_apps_with_custom_install_url: excludeAppsWithCustomInstallUrl,
            exclude_non_embedded_apps: excludeNonEmbeddedApps,
            exclude_embedded_apps_without_primary_entry_point_app_command: closure_12,
            source: APP_DIRECTORY,
          };
          c7 = 3;
          c8 = 1;
          const obj11 = { value: HTTP.get(request), done: false };
          return obj11;
        }
      }
    } else if (2 === c7) {
      c6 = 0;
      const obj12 = {
        type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
        query,
        guildId,
        page,
        pageSize,
        categoryId,
        integrationType,
        minUserInstallCommandCount,
        excludeAppsWithCustomInstallUrl,
        excludeNonEmbeddedApps,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: closure_12,
        source: APP_DIRECTORY,
      };
      const obj2 = closure_132_1(closure_132_2[11]);
      obj2.dispatch(obj12);
    } else if (query === 1) {
      c8 = 3;
      throw value;
    } else if (query === 2) {
      c6 = 0;
      c8 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      let closure_18 = value;
      const obj13 = {
        type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
        query,
        guildId,
        page,
        pageSize,
        categoryId,
        integrationType,
        result: obj15,
        minUserInstallCommandCount,
        excludeAppsWithCustomInstallUrl,
        excludeNonEmbeddedApps,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: closure_12,
        source: APP_DIRECTORY,
      };
      obj15 = {
        results: closure_18.body.results,
        countsByCategory: closure_18.body.counts_by_category,
        totalCount: closure_18.body.result_count,
        totalPages: closure_18.body.num_pages,
        type: closure_18.body.type,
        loadId: closure_18.body.load_id,
      };
      const obj14 = closure_132_1(closure_132_2[11]);
      obj14.dispatch(obj13);
      if (c3 != null) {
        tmp130(closure_18.body.result_count);
      }
      c6 = 0;
    }
    await "IconComponent";
    ({ query: c0, guildId: c1, options: c2, onSuccessCallback: c3 } = closure_0);
    return "Reflect";
  });
  return obj(...arguments);
};
obj = function _fetchCollections() {
  obj = _asyncToGenerator(async () => {
    let ACTIVE;
    let APPLICATION_DIRECTORY;
    let WEB;
    let closure_1;
    let obj12;
    let closure_0 = arg0;
    if (1 === c5) {
      if (arg0 === 1) {
        let c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        let closure_2 = closure_130_4.get("disable_app_collections_cache");
        const _Date = Date;
        let closure_3 = Date.now();
        const obj8 = { surface: APPLICATION_DIRECTORY, activeState: ACTIVE };
        const fetchState = closure_130_9.getFetchState(obj8);
        const obj9 = { surface: APPLICATION_DIRECTORY, activeState: ACTIVE };
        const lastFetchTimeMs = closure_130_9.getLastFetchTimeMs(obj9);
        if (fetchState !== closure_130_10.FETCHING) {
          const tmp26 =
            !closure_2 && ACTIVE === closure_130_0(closure_130_2[18]).ApplicationCollectionActiveState.ACTIVE;
          const cache = tmp26;
          const obj11 = {
            type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS",
            surface: APPLICATION_DIRECTORY,
            activeState: ACTIVE,
          };
          const obj6 = closure_130_1(closure_130_2[11]);
          obj6.dispatch(obj11);
          let c4 = 1;
          const HTTP = closure_130_0(closure_130_2[13]).HTTP;
          const request = {
            url: closure_130_17.APPLICATION_DIRECTORY_COLLECTIONS,
            query: obj12,
            rejectWithError: true,
          };
          obj12 = {
            surface: APPLICATION_DIRECTORY,
            active_state: ACTIVE,
            platform: WEB,
            locale: closure_130_5.locale,
            cache,
          };
          const get = HTTP.get;
          const obj10 = closure_130_0(closure_130_2[15]);
          if (obj10.isAndroid()) {
            WEB = closure_130_0(closure_130_2[16]).ApplicationCollectionPlatforms.ANDROID;
          } else {
            const tmp52Result = closure_130_0(closure_130_2[15]);
            const isIOSResult = tmp52Result.isIOS();
            const ApplicationCollectionPlatforms = closure_130_0(closure_130_2[16]).ApplicationCollectionPlatforms;
            if (isIOSResult) {
              WEB = ApplicationCollectionPlatforms.IOS;
            } else {
              WEB = ApplicationCollectionPlatforms.WEB;
            }
          }
          c5 = 3;
          c6 = 1;
          const obj13 = { value: get(request), done: false };
          return obj13;
        }
      }
    } else if (2 === c5) {
      c4 = 0;
      const obj14 = {
        type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE",
        surface: APPLICATION_DIRECTORY,
        activeState: ACTIVE,
      };
      const obj4 = closure_130_1(closure_130_2[11]);
      obj4.dispatch(obj14);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      const obj15 = { value, done: true };
      return obj15;
    } else {
      const body = value;
      const obj16 = {
        type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
        collections: body.body,
        surface: APPLICATION_DIRECTORY,
        activeState: ACTIVE,
      };
      obj = closure_130_1(closure_130_2[11]);
      obj.dispatch(obj16);
      c4 = 0;
    }
    await "IconComponent";
    closure_2 = tmp;
    let obj5 = closure_0;
    if (closure_0 === undefined) {
      obj5 = {};
    }
    APPLICATION_DIRECTORY =
      obj5.surface ?? ApplicationCollectionSurface.ApplicationCollectionSurface.APPLICATION_DIRECTORY;
    ACTIVE = obj5.activeState ?? ApplicationCollectionActiveState.ApplicationCollectionActiveState.ACTIVE;
    return "Reflect";
  });
  return obj(...arguments);
};
obj = function _fetchIntegrationApplicationIdsForMyGuilds() {
  let constants2;
  obj = _asyncToGenerator(async () => {
    let closure_2;
    let obj7;
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        let body;
        let closure_1;
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
            body = undefined;
            closure_1 = undefined;
            const _Date = Date;
            const timestamp = Date.now();
            const fetchState = MyGuildApplicationsStore.getFetchState();
            const lastFetchTimeMs = MyGuildApplicationsStore.getLastFetchTimeMs();
            const nextFetchRetryTimeMs = MyGuildApplicationsStore.getNextFetchRetryTimeMs();
            if (fetchState !== constants.FETCHING) {
              if (null == lastFetchTimeMs) {
                const obj5 = DispatcherDefault;
                obj5.dispatch({ type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS" });
                c3 = 1;
                const HTTP = HTTPUtils.HTTP;
                const obj4 = {
                  url: constants2.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS,
                  rejectWithError: obj7.rejectWithMigratedError(),
                };
                const get = HTTP.get;
                obj7 = HTTPUtils;
                c4 = 2;
                c5 = 1;
                const obj6 = { value: get(obj4), done: false };
                return obj6;
              }
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          let status;
          if (tmp32 != null) {
            status = tmp32.status;
          }
          closure_1 = 429 === status;
          let tmp21;
          const dispatch = closure_129_1(closure_129_2[11]).dispatch;
          const tmp19 = closure_129_1(closure_129_2[11]);
          if (closure_1) {
            let retry_after;
            if (tmp32 != null) {
              body = tmp32.body;
              if (body != null) {
                retry_after = body.retry_after;
              }
            }
            tmp21 = retry_after;
          }
          const obj8 = { type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE", retryAfterSeconds: tmp21 };
          dispatch(obj8);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          body = value;
          const obj10 = {
            type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
            guildIdToApplicationIds: body.body,
          };
          obj = closure_129_1(closure_129_2[11]);
          obj.dispatch(obj10);
          c3 = 0;
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp32) {
        if (0 === c3) {
          c5 = 3;
          throw tmp32;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const FetchState = MyGuildApplicationsStore2.FetchState;
const Endpoints = Constants.Endpoints;
let c18 = 600000;
const map = new Map();
let result = size.fileFinishedImporting("modules/global_discovery_apps/ApplicationDirectoryActionCreators.tsx");

export const getEmbedApplication = function getEmbedApplication() {
  return obj(...arguments);
};
export const getApplication = function getApplication() {
  return obj(...arguments);
};
export const getCategories = function getCategories() {
  return obj(...arguments);
};
export const getSimilarApplications = function getSimilarApplications() {
  return obj(...arguments);
};
export const search = function search() {
  return obj(...arguments);
};
export const fetchCollections = function fetchCollections() {
  return obj(...arguments);
};
export const fetchIntegrationApplicationIdsForMyGuilds = function fetchIntegrationApplicationIdsForMyGuilds() {
  return obj(...arguments);
};
