// === Module 13024: CollectiblesRecommendationStore ===

// Module 13024 (CollectiblesRecommendationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import size from "module_2" /* 2 */;

const DAY = DurationsDefault.Millis.DAY;
let c1 = null;
let c2 = null;
let c3 = false;
const Store = get_initializedDefault.Store;
class CollectiblesRecommendationStore extends Store {
  getRecommendations() {
    return c1;
  }
  shouldFetch() {
    let tmp = !c3;
    if (tmp) {
      let tmp4 = null == c2;
      if (!tmp4) {
        const _Date = Date;
        tmp4 = Date.now() - c2 >= DAY;
      }
      tmp = tmp4;
    }
    return tmp;
  }
}
const prototype = CollectiblesRecommendationStore.prototype;
CollectiblesRecommendationStore.displayName = "CollectiblesRecommendationStore";
const obj = {
  COLLECTIBLES_RECOMMENDATIONS_FETCH_START: function handleFetchStart() {
    c1 = null;
    c2 = null;
    c3 = true;
  },
  COLLECTIBLES_RECOMMENDATIONS_FETCH_SUCCESS: function handleFetchSuccess(recommendation) {
    recommendation = recommendation.recommendation;
    c2 = Date.now();
    c3 = false;
  },
  COLLECTIBLES_RECOMMENDATIONS_FETCH_FAILURE: function handleFetchFailure() {
    c3 = false;
  },
  LOGOUT: function handleLogout() {
    c1 = null;
    c2 = null;
    c3 = false;
  }
};
const collectiblesRecommendationStore = new CollectiblesRecommendationStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesRecommendationStore.tsx");

export default collectiblesRecommendationStore;