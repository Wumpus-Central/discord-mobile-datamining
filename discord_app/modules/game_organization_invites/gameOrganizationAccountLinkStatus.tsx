// === Module 12722: gameOrganizationAccountLinkStatus ===

// Module 12722 (gameOrganizationAccountLinkStatus)
import useAuthorizationApp from "useAuthorizationApp" /* 7256 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7203 */;

const require = globalThis.__r;

require = fn;
function getGameOrganizationAccountLinkStatus(id) {
  let obj = ApplicationStore;
  if (ApplicationStore === undefined) {
    obj = ApplicationStore;
  }
  let obj2 = AuthorizedAppsStore;
  if (AuthorizedAppsStore === undefined) {
    obj2 = AuthorizedAppsStore;
  }
  if (obj.isHydrated(id)) {
    const authorizationApp = useAuthorizationApp.getAuthorizationApp(obj.getApplication(id));
    if (null == authorizationApp) {
      return "link_unavailable";
    } else {
      id = authorizationApp.parentId;
      if (id == null) {
        id = authorizationApp.id;
      }
      let str2 = "loading";
      if (obj2.getFetchStateForApplication(id) === FetchState.FETCHED) {
        let str3 = "linked";
        if (null == obj2.getNewestTokenForApplication(id)) {
          let str4 = "link_unavailable";
          if (null != authorizationApp.connectionEntrypointUrl) {
            str4 = "needs_link";
          }
          str3 = str4;
        }
        str2 = str3;
      }
      return str2;
    }
  } else {
    let str = "loading";
    if (obj.didFetchingApplicationFail(id)) {
      str = "error";
    }
    return str;
  }
}
const FetchState = fn(7203).FetchState;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/gameOrganizationAccountLinkStatus.tsx");

export { getGameOrganizationAccountLinkStatus };
export const useGameOrganizationAccountLinkStatus = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameOrganizationAccountLinkStatus(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore, AuthorizedAppsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let str = "loading";
      if (null != closure_0) {
        str = getGameOrganizationAccountLinkStatus(tmp, ApplicationStore, AuthorizedAppsStore);
      }
      return str;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : (function useGameOrganizationAccountLinkStatus(arg0) {
  _require = arg0;
  const items = [ApplicationStore, AuthorizedAppsStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let str = "loading";
    if (null != closure_0) {
      str = getGameOrganizationAccountLinkStatus(tmp, ApplicationStore, AuthorizedAppsStore);
    }
    return str;
  }, items1);
});