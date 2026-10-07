// === Module 12953: useVisibleUserProfileConnectionsAndAppIdentities ===

// Module 12953 (useVisibleUserProfileConnectionsAndAppIdentities)
import PlatformsDefault from "Platforms" /* 5449 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6670 */;
import useConnectionFilteredAppIdentitiesDefault from "useConnectionFilteredAppIdentities" /* 12954 */;
import useUserProfileConnectionsDefault from "useUserProfileConnections" /* 12955 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useVisibleUserProfileConnectionsAndAppIdentities.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(20);
  const prop = useConnectionFilteredAppIdentitiesDefault(arg0).filteredAppIdentities;
  const arr2 = useUserProfileConnectionsDefault(arg0);
  if (cResult[0] !== prop) {
    let mapped;
    if (prop != null) {
      mapped = prop.map((application_id) => application_id.application_id);
    }
    if (mapped == null) {
      mapped = [];
    }
    set = new Set(mapped);
    cResult[0] = prop;
    cResult[1] = set;
    let tmp5 = set;
  } else {
    tmp5 = cResult[1];
  }
  _require = tmp5;
  if (cResult[2] !== tmp5) {
    const items = [];
    HermesBuiltin.arraySpread(tmp5, 0);
    cResult[2] = tmp5;
    cResult[3] = items;
    let tmp13 = items;
  } else {
    tmp13 = cResult[3];
  }
  const arr5 = useGetOrFetchApplicationsDefault(tmp13);
  if (cResult[4] !== arr5) {
    const found = arr5.filter(tmp(1375).isNotNullish);
    cResult[4] = arr5;
    cResult[5] = found;
    let tmp17 = found;
  } else {
    tmp17 = cResult[5];
  }
  importDefault = tmp17;
  if (cResult[6] === tmp17) {
    if (cResult[7] === prop) {
      if (cResult[12] === tmp5) {
        if (cResult[13] === arr2) {
          if (cResult[17] === tmp19) {
            if (cResult[18] === tmp24) {
              let tmp28 = cResult[19];
            }
            return tmp28;
          }
          const obj2 = { appIdentities: tmp19, connections: cResult[14] };
          cResult[17] = tmp19;
          cResult[18] = cResult[14];
          cResult[19] = obj2;
          tmp28 = obj2;
        }
      }
      if (cResult[15] !== tmp5) {
        class I {
          constructor(arg0) {
            obj = closure_1(closure_2[7]);
            value = obj.get(arg0.type);
            migrationExperimentEnabled = undefined;
            if (value != null) {
              migrationData = value.migrationData;
              if (migrationData != null) {
                str = "useVisibleUserProfileConnectionsAndAppIdentities";
                migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("useVisibleUserProfileConnectionsAndAppIdentities");
              }
            }
            tmp3 = !migrationExperimentEnabled;
            if (migrationExperimentEnabled) {
              tmp4 = closure_0;
              tmp3 = !closure_0.has(value.migrationData.replacedBy);
            }
            return tmp3;
          }
        }
        cResult[15] = tmp5;
        cResult[16] = I;
      } else {
        class I {
          constructor(arg0) {
            obj = closure_1(closure_2[7]);
            value = obj.get(arg0.type);
            migrationExperimentEnabled = undefined;
            if (value != null) {
              migrationData = value.migrationData;
              if (migrationData != null) {
                str = "useVisibleUserProfileConnectionsAndAppIdentities";
                migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("useVisibleUserProfileConnectionsAndAppIdentities");
              }
            }
            tmp3 = !migrationExperimentEnabled;
            if (migrationExperimentEnabled) {
              tmp4 = closure_0;
              tmp3 = !closure_0.has(value.migrationData.replacedBy);
            }
            return tmp3;
          }
        }
      }
      const found1 = arr2.filter(I);
      cResult[12] = tmp5;
      cResult[13] = arr2;
      cResult[14] = found1;
    }
  }
  if (cResult[9] !== tmp17) {
    class I {
      constructor(arg0) {
        obj = closure_1(closure_2[7]);
        value = obj.get(arg0.type);
        migrationExperimentEnabled = undefined;
        if (value != null) {
          migrationData = value.migrationData;
          if (migrationData != null) {
            str = "useVisibleUserProfileConnectionsAndAppIdentities";
            migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("useVisibleUserProfileConnectionsAndAppIdentities");
          }
        }
        tmp3 = !migrationExperimentEnabled;
        if (migrationExperimentEnabled) {
          tmp4 = closure_0;
          tmp3 = !closure_0.has(value.migrationData.replacedBy);
        }
        return tmp3;
      }
    }
    cResult[9] = tmp17;
    cResult[10] = tmp20;
    let mapped1 = tmp20;
  } else {
    class I {
      constructor(arg0) {
        obj = closure_1(closure_2[7]);
        value = obj.get(arg0.type);
        migrationExperimentEnabled = undefined;
        if (value != null) {
          migrationData = value.migrationData;
          if (migrationData != null) {
            str = "useVisibleUserProfileConnectionsAndAppIdentities";
            migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("useVisibleUserProfileConnectionsAndAppIdentities");
          }
        }
        tmp3 = !migrationExperimentEnabled;
        if (migrationExperimentEnabled) {
          tmp4 = closure_0;
          tmp3 = !closure_0.has(value.migrationData.replacedBy);
        }
        return tmp3;
      }
    }
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(arg0) {
        obj = closure_1(closure_2[7]);
        value = obj.get(arg0.type);
        migrationExperimentEnabled = undefined;
        if (value != null) {
          migrationData = value.migrationData;
          if (migrationData != null) {
            str = "useVisibleUserProfileConnectionsAndAppIdentities";
            migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("useVisibleUserProfileConnectionsAndAppIdentities");
          }
        }
        tmp3 = !migrationExperimentEnabled;
        if (migrationExperimentEnabled) {
          tmp4 = closure_0;
          tmp3 = !closure_0.has(value.migrationData.replacedBy);
        }
        return tmp3;
      }
    }
    cResult[11] = tmp22;
  } else {
    class I {
      constructor(arg0) {
        obj = closure_1(closure_2[7]);
        value = obj.get(arg0.type);
        migrationExperimentEnabled = undefined;
        if (value != null) {
          migrationData = value.migrationData;
          if (migrationData != null) {
            str = "useVisibleUserProfileConnectionsAndAppIdentities";
            migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("useVisibleUserProfileConnectionsAndAppIdentities");
          }
        }
        tmp3 = !migrationExperimentEnabled;
        if (migrationExperimentEnabled) {
          tmp4 = closure_0;
          tmp3 = !closure_0.has(value.migrationData.replacedBy);
        }
        return tmp3;
      }
    }
  }
  mapped1 = prop.map(mapped1);
  const found2 = mapped1.filter(tmp22);
  cResult[6] = tmp17;
  cResult[7] = prop;
  cResult[8] = found2;
  const obj = require("c");
  tmp = _require;
}) : ((arg0) => {
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
  found = require("useGetOrFetchApplications")(items1).filter(filteredAppIdentities(memo[6]).isNotNullish);
  const obj = { appIdentities: null, connections: null };
  const items2 = [filteredAppIdentities, found];
  obj.appIdentities = found.useMemo(() => {
    const mapped = filteredAppIdentities.map((identity) => ({ identity, application: found.find((id) => id.id === identity.application_id) }));
    return mapped.filter((application) => null != application.application);
  }, items2);
  const items3 = [tmp, memo];
  obj.connections = found.useMemo(() => closure_1.filter((type) => {
    value = closure_1(memo[7]).get(type.type);
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
});