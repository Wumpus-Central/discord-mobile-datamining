// === Module 9330: useGameProfileMobileStoreReviews ===

// Module 9330 (useGameProfileMobileStoreReviews)
import c from "c" /* 576 */;
import GameProfileMobileReviewsExperiment from "GameProfileMobileReviewsExperiment" /* 9331 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileMobileStoreReviews.tsx");

export const useGameProfileMobileStoreReviews = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileMobileStoreReviews(arg0) {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "GameProfileReviews" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const isGameProfileMobileReviewsEnabled = GameProfileMobileReviewsExperiment.useIsGameProfileMobileReviewsEnabled(first);
  if (cResult[1] === isGameProfileMobileReviewsEnabled) {
    if (cResult[2] === arg0) {
      let tmp6 = cResult[3];
    }
    return tmp6;
  }
  let items = arg0;
  if (!isGameProfileMobileReviewsEnabled) {
    items = [];
  }
  cResult[1] = isGameProfileMobileReviewsEnabled;
  cResult[2] = arg0;
  cResult[3] = items;
  tmp6 = items;
  const tmpResult = GameProfileMobileReviewsExperiment;
}) : (function useGameProfileMobileStoreReviews(arg0) {
  let items = arg0;
  if (!obj.useIsGameProfileMobileReviewsEnabled({ location: "GameProfileReviews" })) {
    items = [];
  }
  return items;
});