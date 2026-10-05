// === Module 6656: ApplicationConnectionCard ===

// Module 6656 (ApplicationConnectionCard)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6658 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let catchPromise, connection, tmp3, tmp4, tmp5, tmp8;

const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((connection) => {
  let _location;
  let analyticsLocations;
  let canStartAuthorization;
  let first;
  let hasAlreadyLinked;
  let startAuthorization;
  let tmp6;
  let tmp7;
  const tmp = connection;
  let obj = connection(_location[5]);
  const cResult = obj.c(26);
  connection = connection.connection;
  const guildId = connection.guildId;
  _location = connection.location;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [analyticsLocations];
    cResult[0] = items;
    first = items;
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
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(_location[6]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  analyticsLocations = guildId(tmp2[7])(_location).analyticsLocations;
  if (cResult[4] === stateFromStores) {
    let tmp10;
    let tmp11;
    let tmp17;
    let tmp21;
    if (cResult[5] === connection.application_id) {
      tmp10 = cResult[6];
      tmp11 = cResult[7];
    }
    const effect = stateFromStores.useEffect(tmp10, tmp11);
    let name;
    const tmp14 = cResult[8];
    if (stateFromStores != null) {
      name = stateFromStores.name;
    }
    if (tmp14 !== name) {
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
      tmp17 = name1;
    } else {
      tmp17 = cResult[9];
    }
    const tmp20 = guildId(_location[10])(stateFromStores);
    ({ hasAlreadyLinked, canStartAuthorization, startAuthorization } = tmp20);
    const fetched = tmp20.fetched;
    if (cResult[10] !== stateFromStores) {
      guildId(_location[11]);
      const tmp24 = <tmp9Result game={stateFromStores} size={tmp(_location[11]).GameIconSizes.SMALL} />;
      cResult[10] = stateFromStores;
      cResult[11] = tmp24;
      tmp21 = tmp24;
    } else {
      tmp21 = cResult[11];
    }
    if (cResult[12] === analyticsLocations) {
      if (cResult[13] === connection.application_id) {
        if (cResult[14] === guildId) {
          if (cResult[15] === _location) {
            let tmp25;
            if (cResult[16] === startAuthorization) {
              tmp25 = cResult[17];
            }
            if (cResult[18] === canStartAuthorization) {
              if (cResult[19] === connection.description) {
                if (cResult[20] === tmp17) {
                  if (cResult[21] === tmp25) {
                    if (cResult[22] === hasAlreadyLinked) {
                      if (cResult[23] === tmp21) {
                        let tmp27;
                        if (cResult[24] === !fetched) {
                          tmp27 = cResult[25];
                        }
                        return tmp27;
                      }
                    }
                  }
                }
              }
            }
            const tmp29 = jsx(guildId(_location[14]), { displayName: tmp17, description: connection.description, icon: tmp21, isLoading: !fetched, isConnected: hasAlreadyLinked, canConnect: canStartAuthorization, onConnect: tmp25 });
            cResult[18] = canStartAuthorization;
            cResult[19] = connection.description;
            cResult[20] = tmp17;
            cResult[21] = tmp25;
            cResult[22] = hasAlreadyLinked;
            cResult[23] = tmp21;
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
            cResult[25] = tmp29;
            tmp27 = tmp29;
          }
        }
      }
    }
    const fn2 = function b() {
      let application_id;
      const obj = { connection_type: "application", application_id, location: _location };
      const track = AnalyticsUtilsDefault.track;
      const GUILD_ONBOARDING_CONNECTION_CLICKED = AnalyticEvents.GUILD_ONBOARDING_CONNECTION_CLICKED;
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
      application_id = connection.application_id;
      track(GUILD_ONBOARDING_CONNECTION_CLICKED, obj);
      const obj3 = { analyticsLocations };
      startAuthorization(obj3);
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
    tmp25 = fn2;
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
}) : ((connection) => {
  let canStartAuthorization;
  let fetched;
  let hasAlreadyLinked;
  connection = connection.connection;
  const guildId = connection.guildId;
  const _location = connection.location;
  let analyticsLocations;
  let startAuthorization;
  const tmp = connection;
  let obj = connection(_location[6]);
  const items = [analyticsLocations];
  const items1 = [connection.application_id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let application = null;
    if (null != connection.application_id) {
      application = ApplicationStore.getApplication(tmp.application_id);
    }
    return application;
  }, items1);
  analyticsLocations = guildId(_location[7])(_location).analyticsLocations;
  let obj2 = stateFromStores;
  const items2 = [stateFromStores, connection.application_id];
  const effect = stateFromStores.useEffect(() => {
    const result = null != stateFromStores || null == connection.application_id || ApplicationStore.isFetchingApplication(connection.application_id) || ApplicationStore.didFetchingApplicationFail(connection.application_id);
    if (!result) {
      const obj = ApplicationActionCreators;
      const application = obj.fetchApplication(connection.application_id);
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
  guildId(_location[11]);
  const items3 = [startAuthorization, guildId, connection.application_id, _location, analyticsLocations];
  const tmp9 = <tmp4Result game={stateFromStores} size={tmp(_location[11]).GameIconSizes.SMALL} />;
  const callback = obj2.useCallback(() => {
    let application_id;
    const obj = { connection_type: "application", application_id, location: _location };
    const track = AnalyticsUtilsDefault.track;
    const GUILD_ONBOARDING_CONNECTION_CLICKED = AnalyticEvents.GUILD_ONBOARDING_CONNECTION_CLICKED;
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
    application_id = connection.application_id;
    track(GUILD_ONBOARDING_CONNECTION_CLICKED, obj);
    const obj3 = { analyticsLocations };
    startAuthorization(obj3);
  }, items3);
  return jsx(guildId(_location[14]), { displayName: name, description: connection.description, icon: tmp9, isLoading: !fetched, isConnected: hasAlreadyLinked, canConnect: canStartAuthorization, onConnect: callback });
});
let result = size.fileFinishedImporting("modules/guild_onboarding/native/ApplicationConnectionCard.tsx");

export default tmp2;