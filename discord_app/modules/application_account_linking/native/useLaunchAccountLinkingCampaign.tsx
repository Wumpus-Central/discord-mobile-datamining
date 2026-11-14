// discord_app/modules/application_account_linking/native/useLaunchAccountLinkingCampaign.tsx
import useAuthorizationApp from "../hooks/useAuthorizationApp.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import LocalAppDetectionStore from "../../local_app_detection/native/LocalAppDetectionStore.tsx";
import AuthorizedAppsStore from "../../oauth2/AuthorizedAppsStore.tsx";
import ConsentStore from "../../../stores/ConsentStore.tsx";
import AccountLinkingCampaignStore from "../AccountLinkingCampaignStore.tsx";

const require = globalThis.__r;

require = fn;
const noop = fn(19);
({ useEffect: closure_4, useState: hasOwnProperty } = noop);
const FetchState = fn(7221).FetchState;
const Consents = fn(1072).Consents;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/application_account_linking/native/useLaunchAccountLinkingCampaign.tsx",
);

export default function useLaunchAccountLinkingCampaign(disableFetch) {
  _require = disableFetch;
  const tmp = stateFromStoresArray(closure_5(Date.now), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  items = [AccountLinkingCampaignStore, LocalAppDetectionStore, ConsentStore];
  let items1 = [first];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items,
    () => {
      const campaigns = AccountLinkingCampaignStore.getCampaigns();
      return campaigns.filter((endAtUnixS) => {
        const result = 1000 * endAtUnixS.endAtUnixS;
        let tmp2 = result > Math.max(first, Date.now());
        if (tmp2) {
          let targetType1Eligible = endAtUnixS.targetType1Eligible;
          if (!targetType1Eligible) {
            let isAndroidResult = null != endAtUnixS.targetType2DetectableAppName;
            if (isAndroidResult) {
              isAndroidResult = closure_0(dependencyMap[9]).isAndroid();
              const obj = closure_0(dependencyMap[9]);
            }
            if (isAndroidResult) {
              isAndroidResult = ConsentStore.hasConsented(constants.PERSONALIZATION);
            }
            if (isAndroidResult) {
              isAndroidResult = appInstalled.isAppInstalled(endAtUnixS.targetType2DetectableAppName);
            }
            targetType1Eligible = isAndroidResult;
          }
          tmp2 = targetType1Eligible;
        }
        return tmp2;
      });
    },
    items1,
  );
  const items2 = [stateFromStoresArray, first];
  closure_4(() => {
    if (0 !== stateFromStoresArray.length) {
      const _Math = Math;
      items = [];
      HermesBuiltin.arraySpread(
        stateFromStoresArray.map((endAtUnixS) => 1000 * endAtUnixS.endAtUnixS),
        0,
      );
      const _Math2 = Math;
      const _setTimeout = setTimeout;
      const _Math3 = Math;
      const _Math4 = Math;
      const _Date = Date;
      const timeout = setTimeout(
        () => closure_1_2(Date.now()),
        Math.min(Math.max(0, HermesBuiltin.apply(items, Math) - Date.now()), 2147483647),
      );
      return () => clearTimeout(closure_0);
    }
  }, items2);
  let obj = require("initialize");
  const tmp4Result = first(7259)(
    stateFromStoresArray.map((applicationId) => applicationId.applicationId),
    disableFetch,
  );
  const tmp4 = first(7259);
  first(7259)(
    tmp4Result.map((linkedGames) => {
      let id;
      if (linkedGames != null) {
        linkedGames = linkedGames.linkedGames;
        if (linkedGames != null) {
          const found = linkedGames.find((type) => type.type === disableFetch(closure_1_2[11]).GameLinkTypes.OFFICIAL);
          if (found != null) {
            id = found.id;
          }
        }
      }
      return id;
    }),
    disableFetch,
  );
  const tmp5 = first(7259);
  const flatMapResult = tmp4Result.flatMap((item) => {
    const authorizationApp = disableFetch(closure_2[12]).getAuthorizationApp(item);
    let prop;
    if (authorizationApp != null) {
      prop = authorizationApp.connectionEntrypointUrl;
    }
    if (null != prop) {
      let id = authorizationApp.parentId;
      if (id == null) {
        id = authorizationApp.id;
      }
      items = [id];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
  const authorizedAppsTokens = require("useAuthorizedAppsToken").useAuthorizedAppsTokens(flatMapResult, {
    disableFetch: !disableFetch,
  });
  let obj2 = require("useAuthorizedAppsToken");
  const obj3 = { disableFetch: !disableFetch };
  const items3 = [ApplicationStore, AuthorizedAppsStore];
  return require("initialize").useStateFromStores(items3, () => {
    if (closure_0) {
      const iter = stateFromStoresArray[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let _Date = Date;
        let tmp9 = nextResult;
        let result = 1000 * nextResult.endAtUnixS;
        if (result > Date.now()) {
          let obj2 = useAuthorizationApp;
          let authorizationApp = obj2.getAuthorizationApp(ApplicationStore.getApplication(tmp9.applicationId));
          let tmp23 = authorizationApp;
          let prop;
          if (authorizationApp != null) {
            prop = authorizationApp.connectionEntrypointUrl;
          }
          if (null != prop) {
            let id = tmp23.parentId;
            if (id == null) {
              id = tmp23.id;
            }
            let tmp14 = id;
            if (AuthorizedAppsStore.getFetchStateForApplication(id) === FetchState.FETCHED) {
              if (null == AuthorizedAppsStore.getNewestTokenForApplication(tmp14)) {
                iter.return();
                return nextResult;
              }
            }
          }
        }
        continue;
      }
      return null;
    } else {
      return null;
    }
  });
}
