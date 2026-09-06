// === Module 7167: useAuthorizationApp ===

// Module 7167 (useAuthorizationApp)
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import ApplicationRecord from "ApplicationRecord" /* 1918 */;

const require = fn;
const ApplicationTypes = fn(1350).ApplicationTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizationApp.tsx");

export const getAuthorizationApp = function getAuthorizationApp(type) {
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
};
export const useAuthorizationApp = function useAuthorizationApp(getOfficialApplicationId) {
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
};