// discord_app/modules/user_profile/hooks/useVisibleUserProfileConnectionsAndAppIdentities.tsx
import PlatformsDefault from "../../../lib/Platforms.tsx";
import useConnectionFilteredAppIdentitiesDefault from "../../user_application_identity/hooks/useConnectionFilteredAppIdentities.tsx";
import useUserProfileConnectionsDefault from "useUserProfileConnections.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault;

let tmp4;
const useGetOrFetchApplicationsDefault = tmp4(6663);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0) {
      let _require;
      let closure_1;
      let tmp11;
      let tmp15;
      let tmp5;
      let obj = require("react");
      const cResult = obj.c(20);
      const prop = useConnectionFilteredAppIdentitiesDefault(arg0).filteredAppIdentities;
      const arr2 = useUserProfileConnectionsDefault(arg0);
      const tmp = _require;
      if (cResult[0] !== prop) {
        let mapped;
        const _Set = Set;
        if (prop != null) {
          mapped = prop.map((application_id) => application_id.application_id);
        }
        if (mapped == null) {
          mapped = [];
        }
        const self2 = this;
        const self = this;
        const _Set1 = new _Set(mapped);
        cResult[0] = prop;
        cResult[1] = _Set1;
        tmp5 = _Set1;
      } else {
        tmp5 = cResult[1];
      }
      _require = tmp5;
      if (cResult[2] !== tmp5) {
        const items = [];
        HermesBuiltin.arraySpread(items, tmp5, 0);
        cResult[2] = tmp5;
        cResult[3] = items;
        tmp11 = items;
      } else {
        tmp11 = cResult[3];
      }
      const arr5 = useGetOrFetchApplicationsDefault(tmp11);
      if (cResult[4] !== arr5) {
        const found = arr5.filter(tmp(1375).isNotNullish);
        cResult[4] = arr5;
        cResult[5] = found;
        tmp15 = found;
      } else {
        tmp15 = cResult[5];
      }
      importDefault = tmp15;
      if (cResult[6] === tmp15) {
        let tmp17;
        if (cResult[7] === prop) {
          tmp17 = cResult[8];
        }
        if (cResult[12] === tmp5) {
          let tmp23;
          if (cResult[13] === arr2) {
            tmp23 = cResult[14];
          }
          if (cResult[17] === tmp17) {
            let tmp26;
            if (cResult[18] === tmp23) {
              tmp26 = cResult[19];
            }
            return tmp26;
          }
          const obj2 = { appIdentities: tmp17, connections: tmp23 };
          cResult[17] = tmp17;
          cResult[18] = tmp23;
          cResult[19] = obj2;
          tmp26 = obj2;
        }
        if (cResult[15] !== tmp5) {
          class I {
            constructor(type) {
              const obj = PlatformsDefault;
              const value = obj.get(type.type);
              let migrationExperimentEnabled;
              if (value != null) {
                const migrationData = value.migrationData;
                if (migrationData != null) {
                  migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled(
                    "useVisibleUserProfileConnectionsAndAppIdentities",
                  );
                }
              }
              let tmp3 = !migrationExperimentEnabled;
              if (migrationExperimentEnabled) {
                tmp3 = !set.has(value.migrationData.replacedBy);
              }
              return tmp3;
            }
          }
          cResult[15] = tmp5;
          cResult[16] = I;
        } else {
          class I {
            constructor(type) {
              const obj = PlatformsDefault;
              const value = obj.get(type.type);
              let migrationExperimentEnabled;
              if (value != null) {
                const migrationData = value.migrationData;
                if (migrationData != null) {
                  migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled(
                    "useVisibleUserProfileConnectionsAndAppIdentities",
                  );
                }
              }
              let tmp3 = !migrationExperimentEnabled;
              if (migrationExperimentEnabled) {
                tmp3 = !set.has(value.migrationData.replacedBy);
              }
              return tmp3;
            }
          }
        }
        const found1 = arr2.filter(I);
        cResult[12] = tmp5;
        cResult[13] = arr2;
        cResult[14] = found1;
        tmp23 = found1;
      }
      if (cResult[9] !== tmp15) {
        class I {
          constructor(type) {
            const obj = PlatformsDefault;
            const value = obj.get(type.type);
            let migrationExperimentEnabled;
            if (value != null) {
              const migrationData = value.migrationData;
              if (migrationData != null) {
                migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled(
                  "useVisibleUserProfileConnectionsAndAppIdentities",
                );
              }
            }
            let tmp3 = !migrationExperimentEnabled;
            if (migrationExperimentEnabled) {
              tmp3 = !set.has(value.migrationData.replacedBy);
            }
            return tmp3;
          }
        }
        cResult[9] = tmp15;
        cResult[10] = tmp19;
      } else {
        class I {
          constructor(type) {
            const obj = PlatformsDefault;
            const value = obj.get(type.type);
            let migrationExperimentEnabled;
            if (value != null) {
              const migrationData = value.migrationData;
              if (migrationData != null) {
                migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled(
                  "useVisibleUserProfileConnectionsAndAppIdentities",
                );
              }
            }
            let tmp3 = !migrationExperimentEnabled;
            if (migrationExperimentEnabled) {
              tmp3 = !set.has(value.migrationData.replacedBy);
            }
            return tmp3;
          }
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor(type) {
            const obj = PlatformsDefault;
            const value = obj.get(type.type);
            let migrationExperimentEnabled;
            if (value != null) {
              const migrationData = value.migrationData;
              if (migrationData != null) {
                migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled(
                  "useVisibleUserProfileConnectionsAndAppIdentities",
                );
              }
            }
            let tmp3 = !migrationExperimentEnabled;
            if (migrationExperimentEnabled) {
              tmp3 = !set.has(value.migrationData.replacedBy);
            }
            return tmp3;
          }
        }
        cResult[11] = tmp21;
      } else {
        class I {
          constructor(type) {
            const obj = PlatformsDefault;
            const value = obj.get(type.type);
            let migrationExperimentEnabled;
            if (value != null) {
              const migrationData = value.migrationData;
              if (migrationData != null) {
                migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled(
                  "useVisibleUserProfileConnectionsAndAppIdentities",
                );
              }
            }
            let tmp3 = !migrationExperimentEnabled;
            if (migrationExperimentEnabled) {
              tmp3 = !set.has(value.migrationData.replacedBy);
            }
            return tmp3;
          }
        }
      }
      const mapped1 = prop.map(tmp19);
      const found2 = mapped1.filter(tmp21);
      cResult[6] = tmp15;
      cResult[7] = prop;
      cResult[8] = found2;
      tmp17 = found2;
    }
  : (arg0) => {
      let closure_1;
      let found;
      let items2;
      let items3;
      let memo;
      const filteredAppIdentities = require("useConnectionFilteredAppIdentities")(arg0).filteredAppIdentities;
      const tmp2 = require("useUserProfileConnections")(arg0);
      importDefault = tmp2;
      const items = [filteredAppIdentities];
      memo = found.useMemo(() => {
        let mapped;
        const _Set = Set;
        if (filteredAppIdentities != null) {
          mapped = filteredAppIdentities.map((application_id) => application_id.application_id);
        }
        if (mapped == null) {
          mapped = [];
        }
        const _Set1 = new _Set(mapped);
        return _Set1;
      }, items);
      const items1 = [];
      const tmp4 = require("useGetOrFetchApplications");
      HermesBuiltin.arraySpread(items1, memo, 0);
      const tmp4Result = tmp4(items1);
      found = tmp4Result.filter(filteredAppIdentities(memo[6]).isNotNullish);
      let obj = {
        appIdentities: found.useMemo(() => {
          const mapped = filteredAppIdentities.map((identity) => {
            let closure_0 = identity;
            const obj = { identity, application: found.find((id) => id.id === application_id.application_id) };
            return obj;
          });
          return mapped.filter((application) => null != application.application);
        }, items2),
        connections: found.useMemo(
          () =>
            closure_1.filter((type) => {
              const obj = closure_1(memo[7]);
              const value = obj.get(type.type);
              let migrationExperimentEnabled;
              if (value != null) {
                const migrationData = value.migrationData;
                if (migrationData != null) {
                  migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled(
                    "useVisibleUserProfileConnectionsAndAppIdentities",
                  );
                }
              }
              let tmp3 = !migrationExperimentEnabled;
              if (migrationExperimentEnabled) {
                tmp3 = !set.has(value.migrationData.replacedBy);
              }
              return tmp3;
            }),
          items3,
        ),
      };
      items2 = [filteredAppIdentities, found];
      items3 = [tmp2, memo];
      return obj;
    };
const result = size.fileFinishedImporting(
  "modules/user_profile/hooks/useVisibleUserProfileConnectionsAndAppIdentities.tsx",
);

export default tmp2;
