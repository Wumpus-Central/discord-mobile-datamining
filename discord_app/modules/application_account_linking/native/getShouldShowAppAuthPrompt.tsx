// === Module 11763: getShouldShowAppAuthPrompt ===

// Module 11763 (getShouldShowAppAuthPrompt)
import useAuthorizationApp from "useAuthorizationApp" /* 7167 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 7170 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7107 */;

require = fn;
const FetchState = fn(7107).FetchState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/getShouldShowAppAuthPrompt.tsx");

export const getShouldShowAppAuthPrompt = function getShouldShowAppAuthPrompt(application) {
  if (null == application) {
    return false;
  } else {
    let response = dependencyMap;
    const authorizationApp = useAuthorizationApp.getAuthorizationApp(application);
    if (null == authorizationApp) {
      return false;
    } else {
      let prop;
      if (authorizationApp != null) {
        prop = authorizationApp.connectionEntrypointUrl;
      }
      if (null != prop) {
        let parentId;
        if (authorizationApp != null) {
          parentId = authorizationApp.parentId;
        }
        if (parentId == null) {
          let id;
          if (authorizationApp != null) {
            id = authorizationApp.id;
          }
          parentId = id;
        }
        if (null == parentId) {
          return tmp4;
        } else if (AuthorizedAppsStore.getFetchStateForApplication(parentId) === FetchState.NOT_FETCHED) {
          const items = [parentId];
          response = AuthorizedAppsActionCreatorsDefault.fetch(items);
          let flag2 = false;
        } else {
          flag2 = !(AuthorizedAppsStore.getFetchStateForApplication(parentId) === tmp5.FETCHED && null != AuthorizedAppsStore.getNewestTokenForApplication(parentId));
          const tmp6 = AuthorizedAppsStore.getFetchStateForApplication(parentId) === tmp5.FETCHED && null != AuthorizedAppsStore.getNewestTokenForApplication(parentId);
        }
      } else {
        return false;
      }
    }
  }
};