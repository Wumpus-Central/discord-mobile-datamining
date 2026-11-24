// discord_app/modules/collectibles/hooks/useMaybeFetchCollectiblesRecommendations.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import CollectiblesRecommendationActionCreators from "../CollectiblesRecommendationActionCreators.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import CollectiblesRecommendationStore from "../CollectiblesRecommendationStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  stateFromStores1 = stateFromStores(stateFromStores1[3]).useStateFromStores(items1, () =>
    CollectiblesRecommendationStore.shouldFetch(),
  );
  const items2 = [stateFromStores, stateFromStores1];
  useEffect(() => {
    if (tmp) {
      const result = CollectiblesRecommendationActionCreators.maybeFetchCollectiblesRecommendations();
    }
    tmp = null != stateFromStores && stateFromStores1;
  }, items2);
}
