// discord_app/modules/user_application_identity/hooks/useConnectionFilteredAppIdentities.tsx
import noop from "noop";
import { APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS as closure_3 } from "items";

const require = arg1;
const result = require("fetchStore").fileFinishedImporting("modules/user_application_identity/hooks/useConnectionFilteredAppIdentities.tsx");

export default function useConnectionFilteredAppIdentities(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let _require;
  let data;
  const includeHidden = obj.includeHidden;
  _require = tmp;
  const userApplicationIdentities = _require(data[2]).useUserApplicationIdentities(arg0);
  data = userApplicationIdentities.data;
  obj = {
    isLoading: userApplicationIdentities.isLoading,
    filteredAppIdentities: React.useMemo(() => {
      let items = data;
      if (data == null) {
        items = [];
      }
      return items.filter((profile) => {
        let closure_0 = profile;
        let someResult = outer1_3.some((applicationId) => {
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
          someResult = true === profile.profile.connection_visible || closure_0;
          const tmp4 = true === profile.profile.connection_visible || closure_0;
        }
        return someResult;
      });
    }, items)
  };
  items = [data, undefined !== includeHidden && includeHidden];
  return obj;
};