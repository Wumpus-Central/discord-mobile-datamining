// discord_app/modules/user_application_identity/hooks/useConnectionFilteredAppIdentities.tsx
import noop from "../../../../_runtime/00019_noop.js";
import { APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS as closure_3 } from "../UserApplicationIdentityConstants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_application_identity/hooks/useConnectionFilteredAppIdentities.tsx");

export default function useConnectionFilteredAppIdentities(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let data;
  const includeHidden = obj.includeHidden;
  const _require = tmp;
  const userApplicationIdentities = _require(data[2]).useUserApplicationIdentities(arg0);
  data = userApplicationIdentities.data;
  obj = {
    isLoading: userApplicationIdentities.isLoading,
    filteredAppIdentities: React.useMemo(() => {
      let items = data;
      if (data == null) {
        items = [];
      }
      return items.filter((item, index) => {
        closure_0 = item;
        let someResult = closure_1_3.some((item, index) => {
          let migrationExperimentEnabled = item.applicationId === item.application_id;
          if (migrationExperimentEnabled) {
            migrationExperimentEnabled = item.getMigrationExperimentEnabled("useConnectionFilteredAppIdentities");
          }
          return migrationExperimentEnabled;
        });
        if (someResult) {
          someResult = null != item.profile;
        }
        if (someResult) {
          someResult = null != item.profile.username;
        }
        if (someResult) {
          someResult = true === item.profile.connection_visible || closure_0;
        }
        return someResult;
      });
    }, items)
  };
  items = [data, undefined !== includeHidden && includeHidden];
  return obj;
};