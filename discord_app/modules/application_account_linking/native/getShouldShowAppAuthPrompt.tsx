// discord_app/modules/application_account_linking/native/getShouldShowAppAuthPrompt.tsx
import recomputeFromAppTokens from "recomputeFromAppTokens";
import { FetchState } from "recomputeFromAppTokens";
import { tokensToAppTokensMap } from "../../oauth2/AuthorizedAppsActionCreators.tsx";
import { getAuthorizationApp } from "../hooks/useAuthorizationApp.tsx";

const require = arg1;
const result = require("tokensToAppTokensMap").fileFinishedImporting("modules/application_account_linking/native/getShouldShowAppAuthPrompt.tsx");

export const getShouldShowAppAuthPrompt = function getShouldShowAppAuthPrompt(application) {
  if (null == application) {
    return false;
  } else {
    let response = dependencyMap;
    const authorizationApp = getAuthorizationApp /* getAuthorizationApp */.getAuthorizationApp(application);
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
          response = tokensToAppTokensMap.fetch(items);
          let flag2 = false;
          const obj2 = tokensToAppTokensMap;
        } else {
          flag2 = !(obj.getFetchStateForApplication(parentId) === tmp5.FETCHED && null != obj.getNewestTokenForApplication(parentId));
          const tmp6 = obj.getFetchStateForApplication(parentId) === tmp5.FETCHED && null != obj.getNewestTokenForApplication(parentId);
        }
      } else {
        return false;
      }
    }
    const obj3 = getAuthorizationApp /* getAuthorizationApp */;
  }
};