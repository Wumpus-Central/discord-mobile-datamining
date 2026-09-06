// === Module 13080: useVisibleUserProfileConnectionsAndAppIdentities ===

// Module 13080 (useVisibleUserProfileConnectionsAndAppIdentities)
import noop from "module_19" /* 19 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useVisibleUserProfileConnectionsAndAppIdentities.tsx");

export default function useVisibleUserProfileConnectionsAndAppIdentities(arg0) {
  const filteredAppIdentities = require("useConnectionFilteredAppIdentities")(arg0).filteredAppIdentities;
  const tmp = require("useUserProfileConnections")(arg0);
  importDefault = tmp;
  const items = [filteredAppIdentities];
  memo = found.useMemo(() => {
    let mapped;
    if (filteredAppIdentities != null) {
      mapped = filteredAppIdentities.map((application_id) => application_id.application_id);
    }
    if (mapped == null) {
      mapped = [];
    }
    return new Set(mapped);
  }, items);
  const items1 = [];
  HermesBuiltin.arraySpread(memo, 0);
  let tmp3 = require("useGetOrFetchApplications");
  found = require("useGetOrFetchApplications")(items1).filter(filteredAppIdentities(memo[4]).isNotNullish);
  const obj = { appIdentities: null, connections: null };
  const items2 = [filteredAppIdentities, found];
  obj.appIdentities = found.useMemo(() => {
    const mapped = filteredAppIdentities.map((identity) => ({ identity, application: found.find((id) => id.id === identity.application_id) }));
    return mapped.filter((application) => null != application.application);
  }, items2);
  const items3 = [tmp, memo];
  obj.connections = found.useMemo(() => closure_1.filter((type) => {
    value = closure_1(memo[5]).get(type.type);
    let migrationExperimentEnabled;
    if (value != null) {
      const migrationData = value.migrationData;
      if (migrationData != null) {
        migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("useVisibleUserProfileConnectionsAndAppIdentities");
      }
    }
    let tmp3 = !migrationExperimentEnabled;
    if (migrationExperimentEnabled) {
      tmp3 = !set.has(value.migrationData.replacedBy);
    }
    return tmp3;
  }), items3);
  return obj;
};