// discord_app/modules/user_application_identity/hooks/useConnectionFilteredAppIdentities.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
let closure_3 = fn(2025).APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_application_identity/hooks/useConnectionFilteredAppIdentities.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConnectionFilteredAppIdentities(arg0, arg1) {
      const cResult = require("c").c(12);
      if (cResult[0] !== arg1) {
        let obj2 = arg1;
        if (undefined === arg1) {
          obj2 = {};
        }
        cResult[0] = arg1;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const includeHidden = tmp4.includeHidden;
      _require = tmp5;
      const obj = require("c");
      const userApplicationIdentities = require("UserApplicationIdentityActionCreators").useUserApplicationIdentities(
        arg0,
      );
      ({ isLoading, data } = userApplicationIdentities);
      if (cResult[2] !== data) {
        let items = data;
        if (data == null) {
          items = [];
        }
        cResult[2] = data;
        cResult[3] = items;
        let arr = items;
      } else {
        arr = cResult[3];
      }
      if (cResult[4] === (undefined !== includeHidden && includeHidden)) {
        if (cResult[5] === arr) {
          if (cResult[9] === cResult[6]) {
            if (cResult[10] === isLoading) {
              let tmp11 = cResult[11];
            }
            return tmp11;
          }
          const obj3 = { isLoading, filteredAppIdentities: cResult[6] };
          cResult[9] = cResult[6];
          cResult[10] = isLoading;
          cResult[11] = obj3;
          tmp11 = obj3;
        }
      }
      if (cResult[7] !== (undefined !== includeHidden && includeHidden)) {
        const fn = function c(profile) {
          let someResult = closure_3.some((applicationId) => {
            let migrationExperimentEnabled = applicationId.applicationId === profile.application_id;
            if (migrationExperimentEnabled) {
              migrationExperimentEnabled = applicationId.getMigrationExperimentEnabled(
                "useConnectionFilteredAppIdentities",
              );
            }
            return migrationExperimentEnabled;
          });
          if (someResult) {
            someResult = null != profile.profile;
          }
          if (someResult) {
            someResult = null != profile.profile.username;
          }
          if (someResult) {
            someResult = true === profile.profile.connection_visible || profile;
            const tmp4 = true === profile.profile.connection_visible || profile;
          }
          return someResult;
        };
        cResult[7] = tmp5;
        cResult[8] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[8];
      }
      const found = arr.filter(tmp9);
      cResult[4] = undefined !== includeHidden && includeHidden;
      cResult[5] = arr;
      cResult[6] = found;
      const tmpResult = require("UserApplicationIdentityActionCreators");
    }
  : function useConnectionFilteredAppIdentities(arg0) {
      let obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      let data;
      const includeHidden = obj.includeHidden;
      _require = tmp;
      const userApplicationIdentities = require("UserApplicationIdentityActionCreators").useUserApplicationIdentities(
        arg0,
      );
      data = userApplicationIdentities.data;
      const obj3 = { isLoading: userApplicationIdentities.isLoading, filteredAppIdentities: null };
      let items = [data, undefined !== includeHidden && includeHidden];
      obj3.filteredAppIdentities = noop.useMemo(() => {
        let items = data;
        if (data == null) {
          items = [];
        }
        return items.filter((profile) => {
          let someResult = closure_2_3.some((applicationId) => {
            let migrationExperimentEnabled = applicationId.applicationId === profile.application_id;
            if (migrationExperimentEnabled) {
              migrationExperimentEnabled = applicationId.getMigrationExperimentEnabled(
                "useConnectionFilteredAppIdentities",
              );
            }
            return migrationExperimentEnabled;
          });
          if (someResult) {
            someResult = null != profile.profile;
          }
          if (someResult) {
            someResult = null != profile.profile.username;
          }
          if (someResult) {
            someResult = true === profile.profile.connection_visible || closure_1_0;
            const tmp4 = true === profile.profile.connection_visible || closure_1_0;
          }
          return someResult;
        });
      }, items);
      return obj3;
    };
