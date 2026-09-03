// === Module 11558: getShouldShowAppAuthPrompt ===

// Module 11558 (getShouldShowAppAuthPrompt)
import getAuthorizationApp from "getAuthorizationApp" /* 5967 */;
import tokensToAppTokensMapDefault from "tokensToAppTokensMap" /* 5970 */;
import closure_3 from "recomputeFromAppTokens" /* 5484 */;
import { FetchState } from "recomputeFromAppTokens" /* 5484 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/application_account_linking/native/getShouldShowAppAuthPrompt.tsx");

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
          const obj2 = tokensToAppTokensMapDefault;
        } else {
          flag2 = !(obj.getFetchStateForApplication(parentId) === tmp5.FETCHED && null != obj.getNewestTokenForApplication(parentId));
          const tmp6 = obj.getFetchStateForApplication(parentId) === tmp5.FETCHED && null != obj.getNewestTokenForApplication(parentId);
        }
      } else {
        return false;
      }
    }
    const obj3 = getAuthorizationApp;
  }
};