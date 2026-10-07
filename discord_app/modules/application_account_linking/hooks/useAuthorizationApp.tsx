// === Module 6669: useAuthorizationApp ===

// Module 6669 (useAuthorizationApp)
import c from "c" /* 576 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6670 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import ApplicationRecord from "ApplicationRecord" /* 2009 */;

const require = globalThis.__r;

require = fn;
const ApplicationTypes = fn(1360).ApplicationTypes;
const ReactCompilerGating = fn(558);
function getAuthorizationApp(type) {
  if (null == type) {
    return null;
  } else if (type.type !== ApplicationTypes.GAME) {
    return type;
  } else {
    const linkedGames = type.linkedGames;
    let found;
    if (linkedGames != null) {
      found = linkedGames.find((type) => type.type === getOfficialApplicationId(getOrFetchApplication[4]).GameLinkTypes.OFFICIAL);
    }
    let application;
    if (found != null) {
      application = found.application;
    }
    if (application == null) {
      let id;
      if (found != null) {
        id = found.id;
      }
      application = ApplicationStore.getApplication(id);
    }
    if (application == null) {
      application = null;
    }
    return application;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizationApp.tsx");

export { getAuthorizationApp };
export const useAuthorizationApp = ReactCompilerGating.isReactCompilerEnabled() ? ((getOfficialApplicationId) => {
  const cResult = c.c(4);
  if (cResult[0] !== getOfficialApplicationId) {
    let officialApplicationId;
    if (null != getOfficialApplicationId) {
      if (!(getOfficialApplicationId instanceof ApplicationRecord)) {
        officialApplicationId = getOfficialApplicationId.getOfficialApplicationId();
      }
    }
    cResult[0] = getOfficialApplicationId;
    cResult[1] = officialApplicationId;
    let tmp4 = officialApplicationId;
  } else {
    tmp4 = cResult[1];
  }
  let getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(tmp4);
  let tmp9 = null;
  if (null != getOfficialApplicationId) {
    if (getOfficialApplicationId instanceof ApplicationRecord) {
      if (cResult[2] !== getOfficialApplicationId) {
        let tmp12 = null;
        if (null != getOfficialApplicationId) {
          tmp12 = getOfficialApplicationId;
          if (getOfficialApplicationId.type === ApplicationTypes.GAME) {
            const linkedGames = getOfficialApplicationId.linkedGames;
            let found;
            if (linkedGames != null) {
              found = linkedGames.find((type) => type.type === getOfficialApplicationId(getOrFetchApplication[4]).GameLinkTypes.OFFICIAL);
            }
            let application;
            if (found != null) {
              application = found.application;
            }
            if (application == null) {
              let id;
              if (found != null) {
                id = found.id;
              }
              application = ApplicationStore.getApplication(id);
            }
            if (application == null) {
              application = null;
            }
            tmp12 = application;
          }
        }
        cResult[2] = getOfficialApplicationId;
        cResult[3] = tmp12;
      }
    } else {
      if (getOrFetchApplication == null) {
        getOrFetchApplication = null;
      }
      tmp9 = getOrFetchApplication;
    }
  }
  return tmp9;
}) : ((getOfficialApplicationId) => {
  _require = getOfficialApplicationId;
  let officialApplicationId;
  if (null != getOfficialApplicationId) {
    if (!(getOfficialApplicationId instanceof ApplicationRecord)) {
      officialApplicationId = getOfficialApplicationId.getOfficialApplicationId();
    }
  }
  getOrFetchApplication = require("useGetOrFetchApplications").useGetOrFetchApplication(officialApplicationId);
  const items = [getOfficialApplicationId, getOrFetchApplication];
  return noop.useMemo(() => {
    let application = closure_0;
    if (null == closure_0) {
      return null;
    } else if (application instanceof ApplicationRecord) {
      if (null != application) {
        if (application.type === ApplicationTypes.GAME) {
          const linkedGames = application.linkedGames;
          let found;
          if (linkedGames != null) {
            found = linkedGames.find((type) => type.type === getOfficialApplicationId(getOrFetchApplication[4]).GameLinkTypes.OFFICIAL);
          }
          application = undefined;
          if (found != null) {
            application = found.application;
          }
          if (application == null) {
            let id;
            if (found != null) {
              id = found.id;
            }
            application = ApplicationStore.getApplication(id);
          }
          if (application == null) {
            application = null;
          }
        }
      }
    }
  }, items);
});