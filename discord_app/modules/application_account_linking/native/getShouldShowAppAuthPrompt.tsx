// discord_app/modules/application_account_linking/native/getShouldShowAppAuthPrompt.tsx
import getAuthorizationApp from "../hooks/useAuthorizationApp.tsx";
import tokensToAppTokensMapDefault from "../../oauth2/AuthorizedAppsActionCreators.tsx";
import recomputeFromAppTokens from "../../oauth2/AuthorizedAppsStore.tsx";
import { FetchState } from "../../oauth2/AuthorizedAppsStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/application_account_linking/native/getShouldShowAppAuthPrompt.tsx");

export const getShouldShowAppAuthPrompt = function getShouldShowAppAuthPrompt(application) {
  if (null == application) {
    return false;
  } else {
    let response = dependencyMap;
    const authorizationApp = getAuthorizationApp.getAuthorizationApp(application);
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
        } else if (fetchStateForApplication.getFetchStateForApplication(parentId) === FetchState.NOT_FETCHED) {
          const items = [parentId];
          response = tokensToAppTokensMapDefault.fetch(items);
          let flag2 = false;
        } else {
          flag2 = !(fetchStateForApplication.getFetchStateForApplication(parentId) === tmp5.FETCHED && null != fetchStateForApplication.getNewestTokenForApplication(parentId));
          const tmp6 = fetchStateForApplication.getFetchStateForApplication(parentId) === tmp5.FETCHED && null != fetchStateForApplication.getNewestTokenForApplication(parentId);
        }
      } else {
        return false;
      }
    }
  }
};