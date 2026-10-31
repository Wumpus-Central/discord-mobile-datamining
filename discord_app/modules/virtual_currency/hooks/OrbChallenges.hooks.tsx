// discord_app/modules/virtual_currency/hooks/OrbChallenges.hooks.tsx
import OrbChallengeActionCreators from "../stores/OrbChallengeActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import OrbChallengesStore from "../stores/OrbChallengesStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

({ useEffect: c2, useRef: c3 } = noop);
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/OrbChallenges.hooks.tsx");

export function useFetchOrbChallenges(shouldFetch) {
  _require = fetchChallengesError(false);
  const items = [shouldFetch];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({
    challengesForOrbWallet: shouldFetch.challengesForOrbWallet,
    hasFetchedChallenges: shouldFetch.hasFetchedChallenges,
    isFetchingChallenges: shouldFetch.isFetchingChallenges,
    fetchChallengesError: shouldFetch.fetchChallengesError,
  }));
  hasFetchedChallenges = stateFromStoresObject.hasFetchedChallenges;
  const isFetchingChallenges = stateFromStoresObject.isFetchingChallenges;
  fetchChallengesError = stateFromStoresObject.fetchChallengesError;
  shouldFetch = null != shouldFetch;
  if (shouldFetch) {
    shouldFetch = shouldFetch.shouldFetch;
  }
  const items1 = [hasFetchedChallenges, isFetchingChallenges, shouldFetch, fetchChallengesError];
  isFetchingChallenges(() => {
    let tmp = shouldFetch;
    if (shouldFetch) {
      tmp = !ref.current;
    }
    if (tmp) {
      let tmp3 = hasFetchedChallenges;
      if (!hasFetchedChallenges) {
        tmp3 = isFetchingChallenges;
      }
      if (!tmp3) {
        tmp3 = null != fetchChallengesError;
      }
      if (!tmp3) {
        const orbChallenges = OrbChallengeActionCreators.fetchOrbChallenges(function onSuccess() {
          ref.current = true;
        });
      }
    }
  }, items1);
  let obj = require("initialize");
  return {
    challengesForOrbWallet: stateFromStoresObject.challengesForOrbWallet,
    hasFetchedChallenges,
    isFetchingChallenges,
    refetch: require("OrbChallengeActionCreators").fetchOrbChallenges,
  };
}
export function useOrbChallengeUnreadState(enabled) {
  let tmp = null == enabled;
  if (!tmp) {
    tmp = false !== enabled.enabled;
  }
  _require = tmp;
  dependencyMap = closure_3(false);
  const items = [OrbChallengesStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({
    hasUnreadUpdate: OrbChallengesStore.hasUnreadUpdate,
    notificationType: OrbChallengesStore.clientUnreadNotificationType,
  }));
  const items1 = [tmp];
  ({ hasUnreadUpdate, notificationType } = stateFromStoresObject);
  closure_2(() => {
    let hasFetchedChallenges = !closure_0;
    if (closure_0) {
      hasFetchedChallenges = ref.current;
    }
    if (!hasFetchedChallenges) {
      hasFetchedChallenges = OrbChallengesStore.hasFetchedChallenges;
    }
    if (!hasFetchedChallenges) {
      ref.current = true;
      const orbChallengesUnread = OrbChallengeActionCreators.fetchOrbChallengesUnread();
    }
  }, items1);
  let obj = require("initialize");
  return { hasUnreadUpdate, notificationType, ackUnread: require("OrbChallengeActionCreators").ackOrbChallengesUnread };
}
