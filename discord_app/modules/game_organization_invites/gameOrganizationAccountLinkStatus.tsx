// discord_app/modules/game_organization_invites/gameOrganizationAccountLinkStatus.tsx
import useAuthorizationApp from "../application_account_linking/hooks/useAuthorizationApp.tsx";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import AuthorizedAppsStore from "../oauth2/AuthorizedAppsStore.tsx";

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
const FetchState = fn(7276).FetchState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/gameOrganizationAccountLinkStatus.tsx");

export { getGameOrganizationAccountLinkStatus };
export function useGameOrganizationAccountLinkStatus(id) {
  _require = id;
  const items = [ApplicationStore, AuthorizedAppsStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(
    items,
    () => {
      let str = "loading";
      if (null != closure_0) {
        str = getGameOrganizationAccountLinkStatus(tmp, ApplicationStore, AuthorizedAppsStore);
      }
      return str;
    },
    items1,
  );
}
