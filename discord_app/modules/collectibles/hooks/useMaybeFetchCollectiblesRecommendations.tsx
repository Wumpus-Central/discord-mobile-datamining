// === Module 16563: useMaybeFetchCollectiblesRecommendations ===

// Module 16563 (useMaybeFetchCollectiblesRecommendations)
import _mod19 from "module_19" /* 19 */;
import CollectiblesRecommendationActionCreators from "CollectiblesRecommendationActionCreators" /* 16564 */;
import UserStore from "UserStore" /* 1383 */;
import CollectiblesRecommendationStore from "CollectiblesRecommendationStore" /* 15065 */;
import size from "module_2" /* 2 */;

const useEffect = _mod19.useEffect;
let result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesRecommendations.tsx");

export default function useMaybeFetchCollectiblesRecommendations() {
  isEditProfileCollectiblesOrderingEnabled = isEditProfileCollectiblesOrderingEnabled(stateFromStores[3]).useIsEditProfileCollectiblesOrderingEnabled("edit_profile_preload");
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
  const stateFromStores1 = isEditProfileCollectiblesOrderingEnabled(stateFromStores[4]).useStateFromStores(items1, () => CollectiblesRecommendationStore.shouldFetch());
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
};