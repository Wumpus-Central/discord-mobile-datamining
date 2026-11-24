// === Module 14287: CollectiblesRecommendationStore ===

// Module 14287 (CollectiblesRecommendationStore)
import initializeDefault from "initialize" /* 504 */;
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import DurationsDefault from "Durations" /* 1088 */;

const DAY = DurationsDefault.Millis.DAY;
let c1 = null;
let c2 = null;
let c3 = null;
let c4 = false;
let closure_5 = new BackoffDefault(DurationsDefault.Millis.MINUTE, DurationsDefault.Millis.HOUR);
const Store = initializeDefault.Store;
class CollectiblesRecommendationStore extends Store {
}
const prototype = CollectiblesRecommendationStore.prototype;
prototype["getRecommendations"] = function getRecommendations() {
  return c1;
};
prototype["shouldFetch"] = function shouldFetch() {
  let tmp = c4;
  if (!c4) {
    let tmp4 = null != c3;
    if (tmp4) {
      const _Date = Date;
      tmp4 = Date.now() < c3;
    }
    tmp = tmp4;
  }
  let tmp7 = !tmp;
  if (!tmp) {
    let tmp10 = null == c2;
    if (!tmp10) {
      const _Date2 = Date;
      tmp10 = Date.now() - c2 >= DAY;
    }
    tmp7 = tmp10;
  }
  return tmp7;
};
CollectiblesRecommendationStore.displayName = "CollectiblesRecommendationStore";
const collectiblesRecommendationStore = new CollectiblesRecommendationStore(DispatcherDefault, {
  COLLECTIBLES_RECOMMENDATIONS_FETCH_START: function handleFetchStart() {
    c1 = null;
    c2 = null;
    c4 = true;
  },
  COLLECTIBLES_RECOMMENDATIONS_FETCH_SUCCESS: function handleFetchSuccess(recommendation) {
    recommendation = recommendation.recommendation;
    c2 = Date.now();
    c3 = null;
    c4 = false;
    closure_5.succeed();
  },
  COLLECTIBLES_RECOMMENDATIONS_FETCH_FAILURE: function handleFetchFailure() {
    const timestamp = Date.now();
    c3 = timestamp + closure_5.fail();
    c4 = false;
  },
  LOGOUT: function handleLogout() {
    c1 = null;
    c2 = null;
    c3 = null;
    c4 = false;
    closure_5.succeed();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesRecommendationStore.tsx");

export default collectiblesRecommendationStore;