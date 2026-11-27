// === Module 16062: useMaybeFetchCollectiblesRecommendations ===

// Module 16062 (useMaybeFetchCollectiblesRecommendations)
import _mod19 from "module_19" /* 19 */;
import CollectiblesRecommendationActionCreators from "CollectiblesRecommendationActionCreators" /* 16063 */;
import UserStore from "UserStore" /* 1387 */;
import CollectiblesRecommendationStore from "CollectiblesRecommendationStore" /* 14469 */;
import size from "module_2" /* 2 */;

const useEffect = _mod19.useEffect;
let result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesRecommendations.tsx");

export default function useMaybeFetchCollectiblesRecommendations() {
  items = [UserStore];
  stateFromStores = stateFromStores(stateFromStores1[3]).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj = stateFromStores(stateFromStores1[3]);
  const items1 = [CollectiblesRecommendationStore];
  stateFromStores1 = stateFromStores(stateFromStores1[3]).useStateFromStores(items1, () => CollectiblesRecommendationStore.shouldFetch());
  const items2 = [stateFromStores, stateFromStores1];
  useEffect(() => {
    if (tmp) {
      const result = CollectiblesRecommendationActionCreators.maybeFetchCollectiblesRecommendations();
    }
    tmp = null != stateFromStores && stateFromStores1;
  }, items2);
};