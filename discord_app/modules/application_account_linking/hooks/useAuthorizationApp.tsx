// === Module 7393: useAuthorizationApp ===

// Module 7393 (useAuthorizationApp)
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import ApplicationRecord from "ApplicationRecord" /* 2140 */;

const require = globalThis.__r;

const require = fn;
const ApplicationTypes = fn(1362).ApplicationTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizationApp.tsx");

export function getAuthorizationApp(application) {
  if (null == application) {
    return null;
  } else if (application.type !== ApplicationTypes.GAME) {
    return application;
  } else {
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
    return application;
  }
}
export function useAuthorizationApp(getOfficialApplicationId) {
  _require = getOfficialApplicationId;
  let officialApplicationId;
  if (null != getOfficialApplicationId) {
    if (!(getOfficialApplicationId instanceof ApplicationRecord)) {
      officialApplicationId = getOfficialApplicationId.getOfficialApplicationId();
    }
  }
  getOrFetchApplication = require("useGetOrFetchApplications").useGetOrFetchApplication(officialApplicationId);
  items = [getOfficialApplicationId, getOrFetchApplication];
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
}