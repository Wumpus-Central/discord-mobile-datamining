// === Module 13081: useConnectionFilteredAppIdentities ===

// Module 13081 (useConnectionFilteredAppIdentities)
import noop from "module_19" /* 19 */;

const require = fn;
let closure_3 = fn(1921).APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_application_identity/hooks/useConnectionFilteredAppIdentities.tsx");

export default function useConnectionFilteredAppIdentities(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let data;
  const includeHidden = obj.includeHidden;
  _require = tmp;
  const userApplicationIdentities = require("UserApplicationIdentityActionCreators").useUserApplicationIdentities(arg0);
  data = userApplicationIdentities.data;
  obj = { isLoading: userApplicationIdentities.isLoading, filteredAppIdentities: null };
  let items = [data, undefined !== includeHidden && includeHidden];
  obj.filteredAppIdentities = noop.useMemo(() => {
    let items = data;
    if (data == null) {
      items = [];
    }
    return items.filter((profile) => {
      let someResult = closure_2_3.some((applicationId) => {
        let migrationExperimentEnabled = applicationId.applicationId === profile.application_id;
        if (migrationExperimentEnabled) {
          migrationExperimentEnabled = applicationId.getMigrationExperimentEnabled("useConnectionFilteredAppIdentities");
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
  return obj;
};