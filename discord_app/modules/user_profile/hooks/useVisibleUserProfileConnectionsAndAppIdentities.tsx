// discord_app/modules/user_profile/hooks/useVisibleUserProfileConnectionsAndAppIdentities.tsx
import noop from "../../../../_runtime/00019_noop.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_profile/hooks/useVisibleUserProfileConnectionsAndAppIdentities.tsx");

export default function useVisibleUserProfileConnectionsAndAppIdentities(arg0) {
  const filteredAppIdentities = importDefault(memo[1])(arg0).filteredAppIdentities;
  const tmp = importDefault(memo[2])(arg0);
  importDefault = tmp;
  const items = [filteredAppIdentities];
  memo = found.useMemo(() => {
    let mapped;
    if (filteredAppIdentities != null) {
      mapped = filteredAppIdentities.map((item, index) => item.application_id);
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
      const mapped = filteredAppIdentities.map((item, index) => {
        closure_0 = item;
        return { identity: item, application: closure_3.find((item, index) => item.id === item.application_id) };
      });
      return mapped.filter((item, index) => null != item.application);
    }, items2),
    connections: found.useMemo(() => closure_1.filter((item, index) => {
      const value = closure_1_1(memo[5]).get(item.type);
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