// === Module 6577: ApplicationConnectionCard ===

// Module 6577 (ApplicationConnectionCard)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5009 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6579 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5056 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/native/ApplicationConnectionCard.tsx");

export default function ApplicationConnectionCard(connection) {
  connection = connection.connection;
  const guildId = connection.guildId;
  const _location = connection.location;
  let analyticsLocations;
  let startAuthorization;
  const items = [analyticsLocations];
  const items1 = [connection.application_id];
  const stateFromStores = connection(_location[4]).useStateFromStores(items, () => {
    let application = null;
    if (null != connection.application_id) {
      application = ApplicationStore.getApplication(tmp.application_id);
    }
    return application;
  }, items1);
  analyticsLocations = guildId(_location[5])(_location).analyticsLocations;
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
    const intl = tmp(tmp2[7]).intl;
    name = intl.string(tmp(tmp2[7]).t.cgPbaZ);
  }
  const tmp7 = guildId(_location[8])(stateFromStores);
  startAuthorization = tmp7.startAuthorization;
  ({ hasAlreadyLinked, canStartAuthorization, fetched } = tmp7);
  const obj3 = { game: stateFromStores, size: null };
  let obj = connection(_location[4]);
  let obj2 = stateFromStores;
  obj3.size = connection(_location[9]).GameIconSizes.SMALL;
  const items3 = [startAuthorization, guildId, connection.application_id, _location, analyticsLocations];
  const tmp4Result = guildId(_location[9]);
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
  const tmp9 = jsx(guildId(_location[9]), { game: stateFromStores, size: null });
  return jsx(guildId(_location[12]), { displayName: name, description: connection.description, icon: jsx(guildId(_location[9]), { game: stateFromStores, size: null }), isLoading: !fetched, isConnected: hasAlreadyLinked, canConnect: canStartAuthorization, onConnect: callback });
};