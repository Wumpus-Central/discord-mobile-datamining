// discord_app/modules/application_account_linking/hooks/useAuthorizationApp.tsx
import react2 from "../../../../_runtime/00576_react.js";
import ApplicationConstants from "../../applications/ApplicationConstants.tsx";
import useGetOrFetchApplications from "../../applications/useGetOrFetchApplications.tsx";
import react from "../../../../_runtime/00019_react.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import ApplicationRecord from "../../../records/ApplicationRecord.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const ApplicationTypes = ApplicationConstants.ApplicationTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (getOfficialApplicationId) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(4);
      if (cResult[0] !== getOfficialApplicationId) {
        let officialApplicationId;
        if (null != getOfficialApplicationId) {
          if (!(getOfficialApplicationId instanceof ApplicationRecord)) {
            officialApplicationId = getOfficialApplicationId.getOfficialApplicationId();
          }
        }
        cResult[0] = getOfficialApplicationId;
        cResult[1] = officialApplicationId;
        tmp4 = officialApplicationId;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult = useGetOrFetchApplications;
      let getOrFetchApplication = tmpResult.useGetOrFetchApplication(tmp4);
      let tmp9 = null;
      if (null != getOfficialApplicationId) {
        if (getOfficialApplicationId instanceof ApplicationRecord) {
          let tmp11;
          if (cResult[2] !== getOfficialApplicationId) {
            let tmp12 = null;
            if (null != getOfficialApplicationId) {
              tmp12 = getOfficialApplicationId;
              if (getOfficialApplicationId.type === ApplicationTypes.GAME) {
                const linkedGames = getOfficialApplicationId.linkedGames;
                let found;
                if (linkedGames != null) {
                  found = linkedGames.find(
                    (type) => type.type === getOfficialApplicationId(getOrFetchApplication[4]).GameLinkTypes.OFFICIAL,
                  );
                }
                let application;
                if (found != null) {
                  application = found.application;
                }
                if (application == null) {
                  let id;
                  const getApplication = ApplicationStore.getApplication;
                  if (found != null) {
                    id = found.id;
                  }
                  application = getApplication(id);
                }
                if (application == null) {
                  application = null;
                }
                tmp12 = application;
              }
            }
            cResult[2] = getOfficialApplicationId;
            cResult[3] = tmp12;
            tmp11 = tmp12;
          } else {
            tmp11 = cResult[3];
          }
          tmp9 = tmp11;
        } else {
          if (getOrFetchApplication == null) {
            getOrFetchApplication = null;
          }
          tmp9 = getOrFetchApplication;
        }
      }
      return tmp9;
    }
  : (getOfficialApplicationId) => {
      let getOrFetchApplication;
      _require = getOfficialApplicationId;
      let officialApplicationId;
      if (null != getOfficialApplicationId) {
        if (!(getOfficialApplicationId instanceof ApplicationRecord)) {
          officialApplicationId = getOfficialApplicationId.getOfficialApplicationId();
        }
      }
      const obj = require("useGetOrFetchApplications");
      getOrFetchApplication = obj.useGetOrFetchApplication(officialApplicationId);
      const items = [getOfficialApplicationId, getOrFetchApplication];
      return react.useMemo(() => {
        let tmp2 = null;
        if (null != getOfficialApplicationId) {
          let tmp4;
          if (getOfficialApplicationId instanceof ApplicationRecord) {
            let tmp5 = null;
            if (null != getOfficialApplicationId) {
              tmp5 = getOfficialApplicationId;
              if (getOfficialApplicationId.type === ApplicationTypes.GAME) {
                const linkedGames = getOfficialApplicationId.linkedGames;
                let found;
                if (linkedGames != null) {
                  found = linkedGames.find(
                    (type) => type.type === getOfficialApplicationId(getOrFetchApplication[4]).GameLinkTypes.OFFICIAL,
                  );
                }
                let application;
                if (found != null) {
                  application = found.application;
                }
                if (application == null) {
                  let id;
                  const getApplication = ApplicationStore.getApplication;
                  if (found != null) {
                    id = found.id;
                  }
                  application = getApplication(id);
                }
                if (application == null) {
                  application = null;
                }
                tmp5 = application;
              }
            }
            tmp4 = tmp5;
          } else {
            tmp4 = getOrFetchApplication;
            if (getOrFetchApplication == null) {
              tmp4 = null;
            }
          }
          tmp2 = tmp4;
        }
        return tmp2;
      }, items);
    };
function getAuthorizationApp(type) {
  if (null == type) {
    return null;
  } else if (type.type !== ApplicationTypes.GAME) {
    return type;
  } else {
    const linkedGames = type.linkedGames;
    let found;
    if (linkedGames != null) {
      found = linkedGames.find(
        (type) => type.type === getOfficialApplicationId(getOrFetchApplication[4]).GameLinkTypes.OFFICIAL,
      );
    }
    let application;
    if (found != null) {
      application = found.application;
    }
    if (application == null) {
      let id;
      const getApplication = ApplicationStore.getApplication;
      if (found != null) {
        id = found.id;
      }
      application = getApplication(id);
    }
    if (application == null) {
      application = null;
    }
    return application;
  }
}
const result = size.fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizationApp.tsx");

export { getAuthorizationApp };
export const useAuthorizationApp = tmp2;
