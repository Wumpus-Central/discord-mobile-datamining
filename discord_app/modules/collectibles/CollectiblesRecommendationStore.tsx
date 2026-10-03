// discord_app/modules/collectibles/CollectiblesRecommendationStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";

const DAY = DurationsDefault.Millis.DAY;
let c1 = null;
let c2 = null;
let c3 = false;
const Store = initializeDefault.Store;
class CollectiblesRecommendationStore extends Store {}
const prototype = CollectiblesRecommendationStore.prototype;
prototype["getRecommendations"] = function getRecommendations() {
  return c1;
};
prototype["shouldFetch"] = function shouldFetch() {
  let tmp = !c3;
  if (!c3) {
    let tmp4 = null == c2;
    if (!tmp4) {
      const _Date = Date;
      tmp4 = Date.now() - c2 >= DAY;
    }
    tmp = tmp4;
  }
  return tmp;
};
CollectiblesRecommendationStore.displayName = "CollectiblesRecommendationStore";
const collectiblesRecommendationStore = new CollectiblesRecommendationStore(DispatcherDefault, {
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
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesRecommendationStore.tsx");

export default collectiblesRecommendationStore;
