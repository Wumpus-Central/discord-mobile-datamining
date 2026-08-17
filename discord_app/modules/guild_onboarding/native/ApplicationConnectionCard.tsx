// discord_app/modules/guild_onboarding/native/ApplicationConnectionCard.tsx
import closure_3 from "noop" /* 19 */;
import closure_4 from "addApplication" /* 4478 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_onboarding/native/ApplicationConnectionCard.tsx");

export default function ApplicationConnectionCard(connection) {
  connection = connection.connection;
  const guildId = connection.guildId;
  const _location = connection.location;
  let stateFromStores;
  let analyticsLocations;
  let startAuthorization;
  let obj = connection(_location[4]);
  const items = [analyticsLocations];
  const items1 = [connection.application_id];
  stateFromStores = obj.useStateFromStores(items, () => {
    let application = null;
    if (null != connection.application_id) {
      application = analyticsLocations.getApplication(tmp.application_id);
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
      result = analyticsLocations.isFetchingApplication(connection.application_id);
    }
    if (!result) {
      result = analyticsLocations.didFetchingApplicationFail(connection.application_id);
    }
    if (!result) {
      const application = connection(_location[6]).fetchApplication(connection.application_id);
      application.catch(() => {

      });
      const obj = connection(_location[6]);
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
  obj = { game: stateFromStores, size: connection(_location[9]).GameIconSizes.SMALL };
  const items3 = [startAuthorization, guildId, connection.application_id, _location, analyticsLocations];
  const obj2 = stateFromStores;
  const tmp4Result = guildId(_location[9]);
  const callback = obj2.useCallback(() => {
    let obj = guildId(_location[10]);
    obj = {};
    const merged = Object.assign(connection(_location[11]).collectGuildAnalyticsMetadata(guildId));
    obj.connection_type = "application";
    const application_id = connection.application_id;
    obj.application_id = application_id;
    obj.location = _location;
    obj.track(startAuthorization.GUILD_ONBOARDING_CONNECTION_CLICKED, obj);
    obj = { analyticsLocations };
    startAuthorization(obj);
  }, items3);
  obj = { displayName: name, description: connection.description, icon: jsx(guildId(_location[9]), { game: stateFromStores, size: connection(_location[9]).GameIconSizes.SMALL }), isLoading: !fetched, isConnected: hasAlreadyLinked, canConnect: canStartAuthorization, onConnect: callback };
  return jsx(guildId(_location[12]), { displayName: name, description: connection.description, icon: jsx(guildId(_location[9]), { game: stateFromStores, size: connection(_location[9]).GameIconSizes.SMALL }), isLoading: !fetched, isConnected: hasAlreadyLinked, canConnect: canStartAuthorization, onConnect: callback });
};