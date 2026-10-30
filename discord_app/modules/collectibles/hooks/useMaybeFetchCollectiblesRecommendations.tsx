// discord_app/modules/collectibles/hooks/useMaybeFetchCollectiblesRecommendations.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import CollectiblesRecommendationActionCreators from "../CollectiblesRecommendationActionCreators.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import CollectiblesRecommendationStore from "../CollectiblesRecommendationStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useEffect = _mod19.useEffect;
let result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesRecommendations.tsx");

export default function useMaybeFetchCollectiblesRecommendations() {
  isEditProfileCollectiblesOrderingEnabled = isEditProfileCollectiblesOrderingEnabled(
    stateFromStores[3],
  ).useIsEditProfileCollectiblesOrderingEnabled("edit_profile_preload");
  let obj = isEditProfileCollectiblesOrderingEnabled(stateFromStores[3]);
  const items = [UserStore];
  stateFromStores = isEditProfileCollectiblesOrderingEnabled(stateFromStores[4]).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const obj2 = isEditProfileCollectiblesOrderingEnabled(stateFromStores[4]);
  const items1 = [CollectiblesRecommendationStore];
  const stateFromStores1 = isEditProfileCollectiblesOrderingEnabled(stateFromStores[4]).useStateFromStores(items1, () =>
    CollectiblesRecommendationStore.shouldFetch(),
  );
  const items2 = [isEditProfileCollectiblesOrderingEnabled, stateFromStores, stateFromStores1];
  stateFromStores1(() => {
    let tmp = isEditProfileCollectiblesOrderingEnabled;
    if (isEditProfileCollectiblesOrderingEnabled) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      tmp = stateFromStores1;
    }
    if (tmp) {
      const result = CollectiblesRecommendationActionCreators.maybeFetchCollectiblesRecommendations();
    }
  }, items2);
}
