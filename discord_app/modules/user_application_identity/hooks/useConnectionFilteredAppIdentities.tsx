// === Module 12935: useConnectionFilteredAppIdentities ===

// Module 12935 (useConnectionFilteredAppIdentities)
import UserApplicationIdentityConstants from "UserApplicationIdentityConstants" /* 2013 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

let closure_3 = UserApplicationIdentityConstants.APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let arr;
  let data;
  let isLoading;
  let tmp4;
  let tmp9;
  const obj = require("react");
  const cResult = obj.c(12);
  const tmp = _require;
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const includeHidden = tmp4.includeHidden;
  _require = tmp5;
  const tmpResult = tmp(8692);
  const userApplicationIdentities = tmpResult.useUserApplicationIdentities(arg0);
  ({ isLoading, data } = userApplicationIdentities);
  if (cResult[2] !== data) {
    let items = data;
    if (data == null) {
      items = [];
    }
    cResult[2] = data;
    cResult[3] = items;
    arr = items;
  } else {
    arr = cResult[3];
  }
  if (cResult[4] === (undefined !== includeHidden && includeHidden)) {
    let tmp8;
    if (cResult[5] === arr) {
      tmp8 = cResult[6];
    }
    if (cResult[9] === tmp8) {
      let tmp11;
      if (cResult[10] === isLoading) {
        tmp11 = cResult[11];
      }
      return tmp11;
    }
    const obj3 = { isLoading, filteredAppIdentities: tmp8 };
    cResult[9] = tmp8;
    cResult[10] = isLoading;
    cResult[11] = obj3;
    tmp11 = obj3;
  }
  if (cResult[7] !== (undefined !== includeHidden && includeHidden)) {
    const fn = function c(profile) {
      closure_0 = profile;
      let someResult = closure_3.some((applicationId) => {
        const migrationExperimentEnabled = applicationId.applicationId === application_id.application_id && applicationId.getMigrationExperimentEnabled("useConnectionFilteredAppIdentities");
        return migrationExperimentEnabled;
      }) && null != profile.profile && null != profile.profile.username;
      if (someResult) {
        someResult = true === profile.profile.connection_visible || closure_0;
      }
      return someResult;
    };
    cResult[7] = undefined !== includeHidden && includeHidden;
    cResult[8] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[8];
  }
  const found = arr.filter(tmp9);
  cResult[4] = undefined !== includeHidden && includeHidden;
  cResult[5] = arr;
  cResult[6] = found;
  tmp8 = found;
}) : ((arg0) => {
  let items;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let data;
  const includeHidden = obj.includeHidden;
  _require = tmp;
  const obj2 = require("UserApplicationIdentityActionCreators");
  const userApplicationIdentities = obj2.useUserApplicationIdentities(arg0);
  data = userApplicationIdentities.data;
  const obj3 = {
    isLoading: userApplicationIdentities.isLoading,
    filteredAppIdentities: react.useMemo(() => {
      let items = data;
      if (data == null) {
        items = [];
      }
      return items.filter((profile) => {
        closure_0 = profile;
        let someResult = closure_2_3.some((applicationId) => {
          const migrationExperimentEnabled = applicationId.applicationId === application_id.application_id && applicationId.getMigrationExperimentEnabled("useConnectionFilteredAppIdentities");
          return migrationExperimentEnabled;
        }) && null != profile.profile && null != profile.profile.username;
        if (someResult) {
          someResult = true === profile.profile.connection_visible || closure_1_0;
        }
        return someResult;
      });
    }, items)
  };
  items = [data, undefined !== includeHidden && includeHidden];
  return obj3;
});
const result = size.fileFinishedImporting("modules/user_application_identity/hooks/useConnectionFilteredAppIdentities.tsx");

export default tmp2;