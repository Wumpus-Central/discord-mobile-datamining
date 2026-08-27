// === Module 12427: useVisibleUserProfileConnectionsAndAppIdentities ===

// Module 12427 (useVisibleUserProfileConnectionsAndAppIdentities)
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useVisibleUserProfileConnectionsAndAppIdentities.tsx");

export default function useVisibleUserProfileConnectionsAndAppIdentities(arg0) {
  const filteredAppIdentities = importDefault(memo[1])(arg0).filteredAppIdentities;
  const tmp = importDefault(memo[2])(arg0);
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
  let tmp3 = importDefault(memo[3]);
  found = importDefault(memo[3])(items1).filter(filteredAppIdentities(memo[4]).isNotNullish);
  const tmp3Result = importDefault(memo[3])(items1);
  const items2 = [filteredAppIdentities, found];
  const items3 = [tmp, memo];
  return {
    appIdentities: found.useMemo(() => {
      const mapped = filteredAppIdentities.map((identity) => {
        closure_0 = identity;
        return { identity, application: closure_3.find((id) => id.id === identity.application_id) };
      });
      return mapped.filter((application) => null != application.application);
    }, items2),
    connections: found.useMemo(() => closure_1.filter((type) => {
      const value = closure_1_1(closure_1_2[5]).get(type.type);
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
    }), items3)
  };
};