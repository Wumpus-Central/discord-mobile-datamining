// === Module 6656: ApplicationConnectionCard ===

// Module 6656 (ApplicationConnectionCard)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6658 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/native/ApplicationConnectionCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((connection) => {
  const cResult = connection(_location[5]).c(26);
  connection = connection.connection;
  const guildId = connection.guildId;
  _location = connection.location;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [analyticsLocations];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== connection.application_id) {
    const fn = function s() {
      let application = null;
      if (null != connection.application_id) {
        application = ApplicationStore.getApplication(tmp.application_id);
      }
      return application;
    };
    const items1 = [connection.application_id];
    cResult[1] = connection.application_id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = connection(_location[5]);
  const stateFromStores = connection(_location[6]).useStateFromStores(first, tmp6, tmp7);
  analyticsLocations = guildId(tmp2[7])(_location).analyticsLocations;
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === connection.application_id) {
      let tmp10 = cResult[6];
      let tmp11 = cResult[7];
    }
    const effect = stateFromStores.useEffect(tmp10, tmp11);
    let name;
    if (stateFromStores != null) {
      name = stateFromStores.name;
    }
    if (cResult[8] !== name) {
      let name1;
      if (stateFromStores != null) {
        name1 = stateFromStores.name;
      }
      if (name1 == null) {
        const intl = tmp(tmp2[9]).intl;
        name1 = intl.string(tmp(tmp2[9]).t.cgPbaZ);
      }
      let name2;
      if (stateFromStores != null) {
        name2 = stateFromStores.name;
      }
      cResult[8] = name2;
      cResult[9] = name1;
      let tmp16 = name1;
    } else {
      tmp16 = cResult[9];
    }
    const tmp19 = tmp9(tmp2[10])(stateFromStores);
    ({ hasAlreadyLinked, canStartAuthorization, startAuthorization } = tmp19);
    if (cResult[10] !== stateFromStores) {
      let obj2 = { game: stateFromStores, size: tmp(tmp2[11]).GameIconSizes.SMALL };
      const tmp23 = jsx(tmp9(tmp2[11]), { game: stateFromStores, size: tmp(tmp2[11]).GameIconSizes.SMALL });
      cResult[10] = stateFromStores;
      cResult[11] = tmp23;
      let tmp20 = tmp23;
      const tmp9Result = tmp9(tmp2[11]);
    } else {
      tmp20 = cResult[11];
    }
    if (cResult[12] === analyticsLocations) {
      if (cResult[13] === connection.application_id) {
        if (cResult[14] === guildId) {
          if (cResult[15] === _location) {
            if (cResult[16] === startAuthorization) {
              let tmp24 = cResult[17];
            }
            if (cResult[18] === canStartAuthorization) {
              if (cResult[19] === connection.description) {
                if (cResult[20] === tmp16) {
                  if (cResult[21] === tmp24) {
                    if (cResult[22] === hasAlreadyLinked) {
                      if (cResult[23] === tmp20) {
                        if (cResult[24] === tmp25) {
                          let tmp26 = cResult[25];
                        }
                        return tmp26;
                      }
                    }
                  }
                }
              }
            }
            const obj3 = { displayName: tmp16, description: connection.description, icon: tmp20, isLoading: !tmp19.fetched, isConnected: hasAlreadyLinked, canConnect: canStartAuthorization, onConnect: tmp24 };
            const tmp28 = jsx(tmp9(tmp2[14]), { displayName: tmp16, description: connection.description, icon: tmp20, isLoading: !tmp19.fetched, isConnected: hasAlreadyLinked, canConnect: canStartAuthorization, onConnect: tmp24 });
            cResult[18] = canStartAuthorization;
            cResult[19] = connection.description;
            cResult[20] = tmp16;
            cResult[21] = tmp24;
            cResult[22] = hasAlreadyLinked;
            cResult[23] = tmp20;
            class L {
              constructor() {
                result = null != closure_3;
                if (!result) {
                  tmp2 = connection;
                  result = null == connection.application_id;
                }
                if (!result) {
                  tmp3 = closure_4;
                  tmp4 = connection;
                  result = closure_4.isFetchingApplication(connection.application_id);
                }
                if (!result) {
                  tmp5 = closure_4;
                  tmp6 = connection;
                  result = closure_4.didFetchingApplicationFail(connection.application_id);
                }
                if (!result) {
                  tmp7 = closure_0;
                  tmp8 = closure_2;
                  obj = closure_0(closure_2[8]);
                  tmp9 = connection;
                  application = obj.fetchApplication(connection.application_id);
                  catchPromise = application.catch(() => {

                  });
                }
                return;
              }
            }
            cResult[25] = tmp28;
            tmp26 = tmp28;
          }
        }
      }
    }
    const fn2 = function b() {
      const obj2 = {};
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      obj2.connection_type = "application";
      const application_id = connection.application_id;
      obj2.application_id = application_id;
      obj2.location = _location;
      obj.track(AnalyticEvents.GUILD_ONBOARDING_CONNECTION_CLICKED, obj2);
      startAuthorization({ analyticsLocations });
    };
    cResult[12] = analyticsLocations;
    cResult[13] = connection.application_id;
    cResult[14] = guildId;
    cResult[15] = _location;
    class L {
      constructor() {
        result = null != closure_3;
        if (!result) {
          tmp2 = connection;
          result = null == connection.application_id;
        }
        if (!result) {
          tmp3 = closure_4;
          tmp4 = connection;
          result = closure_4.isFetchingApplication(connection.application_id);
        }
        if (!result) {
          tmp5 = closure_4;
          tmp6 = connection;
          result = closure_4.didFetchingApplicationFail(connection.application_id);
        }
        if (!result) {
          tmp7 = closure_0;
          tmp8 = closure_2;
          obj = closure_0(closure_2[8]);
          tmp9 = connection;
          application = obj.fetchApplication(connection.application_id);
          catchPromise = application.catch(() => {

          });
        }
        return;
      }
    }
    cResult[17] = fn2;
    tmp24 = fn2;
  }
  class L {
    constructor() {
      result = null != closure_3;
      if (!result) {
        tmp2 = connection;
        result = null == connection.application_id;
      }
      if (!result) {
        tmp3 = closure_4;
        tmp4 = connection;
        result = closure_4.isFetchingApplication(connection.application_id);
      }
      if (!result) {
        tmp5 = closure_4;
        tmp6 = connection;
        result = closure_4.didFetchingApplicationFail(connection.application_id);
      }
      if (!result) {
        tmp7 = closure_0;
        tmp8 = closure_2;
        obj = closure_0(closure_2[8]);
        tmp9 = connection;
        application = obj.fetchApplication(connection.application_id);
        catchPromise = application.catch(() => {

        });
      }
      return;
    }
  }
  const items2 = [stateFromStores, connection.application_id];
  cResult[4] = stateFromStores;
  cResult[5] = connection.application_id;
  cResult[6] = L;
  cResult[7] = items2;
  tmp11 = items2;
  tmp10 = L;
  const tmpResult = connection(_location[6]);
}) : ((connection) => {
  connection = connection.connection;
  const guildId = connection.guildId;
  const _location = connection.location;
  let analyticsLocations;
  let startAuthorization;
  const items = [analyticsLocations];
  const items1 = [connection.application_id];
  const stateFromStores = connection(_location[6]).useStateFromStores(items, () => {
    let application = null;
    if (null != connection.application_id) {
      application = ApplicationStore.getApplication(tmp.application_id);
    }
    return application;
  }, items1);
  analyticsLocations = guildId(_location[7])(_location).analyticsLocations;
  const items2 = [stateFromStores, connection.application_id];
  const effect = stateFromStores.useEffect(() => {
    let result = null != stateFromStores;
    if (!result) {
      result = null == connection.application_id;
    }
    if (!result) {
      result = ApplicationStore.isFetchingApplication(connection.application_id);
    }
    if (!result) {
      result = ApplicationStore.didFetchingApplicationFail(connection.application_id);
    }
    if (!result) {
      const application = ApplicationActionCreators.fetchApplication(connection.application_id);
      application.catch(() => {

      });
    }
  }, items2);
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (name == null) {
    const intl = tmp(tmp2[9]).intl;
    name = intl.string(tmp(tmp2[9]).t.cgPbaZ);
  }
  const tmp7 = guildId(_location[10])(stateFromStores);
  startAuthorization = tmp7.startAuthorization;
  ({ hasAlreadyLinked, canStartAuthorization, fetched } = tmp7);
  const obj3 = { game: stateFromStores, size: null };
  let obj = connection(_location[6]);
  let obj2 = stateFromStores;
  obj3.size = connection(_location[11]).GameIconSizes.SMALL;
  const items3 = [startAuthorization, guildId, connection.application_id, _location, analyticsLocations];
  const tmp4Result = guildId(_location[11]);
  const callback = obj2.useCallback(() => {
    const obj2 = {};
    const obj = AnalyticsUtilsDefault;
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
    obj2.connection_type = "application";
    const application_id = connection.application_id;
    obj2.application_id = application_id;
    obj2.location = _location;
    obj.track(AnalyticEvents.GUILD_ONBOARDING_CONNECTION_CLICKED, obj2);
    startAuthorization({ analyticsLocations });
  }, items3);
  const tmp9 = jsx(guildId(_location[11]), { game: stateFromStores, size: null });
  return jsx(guildId(_location[14]), { displayName: name, description: connection.description, icon: jsx(guildId(_location[11]), { game: stateFromStores, size: null }), isLoading: !fetched, isConnected: hasAlreadyLinked, canConnect: canStartAuthorization, onConnect: callback });
});