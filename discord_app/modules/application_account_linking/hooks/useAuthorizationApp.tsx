// discord_app/modules/application_account_linking/hooks/useAuthorizationApp.tsx
import noop from "noop";
import addApplication from "addApplication";
import createExecutable from "createExecutable";
import { ApplicationTypes } from "ApplicationTypes";

const require = arg1;
const result = require("createExecutable").fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizationApp.tsx");

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
    if (!(getOfficialApplicationId instanceof createExecutable)) {
      officialApplicationId = getOfficialApplicationId.getOfficialApplicationId();
    }
  }
  getOrFetchApplication = _require(getOrFetchApplication[5]).useGetOrFetchApplication(officialApplicationId);
  const items = [getOfficialApplicationId, getOrFetchApplication];
  return React.useMemo(() => {
    let application = closure_0;
    if (null == closure_0) {
      return null;
    } else if (application instanceof outer1_4) {
      let tmp4 = null;
      if (null != application) {
        tmp4 = application;
        if (application.type === outer1_5.GAME) {
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
            application = outer1_3.getApplication(id);
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