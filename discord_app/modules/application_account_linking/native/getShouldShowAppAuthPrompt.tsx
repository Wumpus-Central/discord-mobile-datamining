// === Module 10926: getShouldShowAppAuthPrompt ===

// Module 10926 (getShouldShowAppAuthPrompt)
import getAuthorizationApp from "getAuthorizationApp" /* 7144 */;
import tokensToAppTokensMapDefault from "tokensToAppTokensMap" /* 7147 */;
import recomputeFromAppTokens from "recomputeFromAppTokens" /* 5289 */;
import { FetchState } from "recomputeFromAppTokens" /* 5289 */;

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