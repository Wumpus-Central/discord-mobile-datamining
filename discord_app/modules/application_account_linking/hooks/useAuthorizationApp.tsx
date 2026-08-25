// === Module 5839: getAuthorizationApp ===

// Module 5839 (getAuthorizationApp)
import closure_2 from "noop" /* 19 */;
import closure_3 from "addApplication" /* 4421 */;
import closure_4 from "createExecutable" /* 4406 */;
import { ApplicationTypes } from "ApplicationTypes" /* 4409 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizationApp.tsx");

export const getAuthorizationApp = function getAuthorizationApp(type) {
  if (null == type) {
    return null;
  } else if (type.type !== ApplicationTypes.GAME) {
    return type;
  } else {
    const linkedGames = type.linkedGames;
    let found;
    if (linkedGames != null) {
      found = linkedGames.find((type) => type.type === callback(table[4]).GameLinkTypes.OFFICIAL);
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
      application = application.getApplication(id);
    }
    if (application == null) {
      application = null;
    }
    return application;
  }
};
export const useAuthorizationApp = function useAuthorizationApp(getOfficialApplicationId) {
  const _require = getOfficialApplicationId;
  let officialApplicationId;
  if (null != getOfficialApplicationId) {
    if (!(getOfficialApplicationId instanceof closure_4)) {
      officialApplicationId = getOfficialApplicationId.getOfficialApplicationId();
    }
  }
  getOrFetchApplication = _require(getOrFetchApplication[5]).useGetOrFetchApplication(officialApplicationId);
  const items = [getOfficialApplicationId, getOrFetchApplication];
  return React.useMemo(() => {
    let application = closure_0;
    if (null == closure_0) {
      return null;
    } else if (application instanceof closure_1_4) {
      let tmp4 = null;
      if (null != application) {
        tmp4 = application;
        if (application.type === closure_1_5.GAME) {
          const linkedGames = application.linkedGames;
          let found;
          if (linkedGames != null) {
            found = linkedGames.find((type) => type.type === callback(table[4]).GameLinkTypes.OFFICIAL);
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
            application = closure_1_3.getApplication(id);
          }
          if (application == null) {
            application = null;
          }
          tmp4 = application;
        }
      }
      let tmp3 = tmp4;
    } else {
      tmp3 = getOrFetchApplication;
      if (getOrFetchApplication == null) {
        tmp3 = null;
      }
    }
  }, items);
};