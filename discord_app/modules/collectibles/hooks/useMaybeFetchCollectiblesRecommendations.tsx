// === Module 14504: useMaybeFetchCollectiblesRecommendations ===

// Module 14504 (useMaybeFetchCollectiblesRecommendations)
import react from "react" /* 19 */;
import CollectiblesRecommendationActionCreators from "CollectiblesRecommendationActionCreators" /* 14505 */;
import UserStore from "UserStore" /* 1377 */;
import CollectiblesRecommendationStore from "CollectiblesRecommendationStore" /* 13024 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let currentUser;

const useEffect = react.useEffect;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let isEditProfileCollectiblesOrderingEnabled;
  let stateFromStores;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp9;
  let tmp = isEditProfileCollectiblesOrderingEnabled;
  let obj = isEditProfileCollectiblesOrderingEnabled(stateFromStores[4]);
  const cResult = obj.c(9);
  const obj2 = isEditProfileCollectiblesOrderingEnabled(stateFromStores[5]);
  isEditProfileCollectiblesOrderingEnabled = obj2.useIsEditProfileCollectiblesOrderingEnabled("edit_profile_preload");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      currentUser = currentUser.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      return id;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(stateFromStores[6]);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesRecommendationStore];
    const fn2 = function f() {
      return CollectiblesRecommendationStore.shouldFetch();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult2 = tmp(stateFromStores[6]);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === isEditProfileCollectiblesOrderingEnabled) {
      let tmp13;
      let tmp14;
      if (cResult[6] === stateFromStores1) {
        tmp13 = cResult[7];
        tmp14 = cResult[8];
      }
      stateFromStores1(tmp13, tmp14);
    }
  }
  const fn3 = function h() {
    const tmp = isEditProfileCollectiblesOrderingEnabled && null != stateFromStores && stateFromStores1;
    if (tmp) {
      const obj = CollectiblesRecommendationActionCreators;
      const result = obj.maybeFetchCollectiblesRecommendations();
    }
  };
  const items2 = [isEditProfileCollectiblesOrderingEnabled, stateFromStores, stateFromStores1];
  cResult[4] = stateFromStores;
  cResult[5] = isEditProfileCollectiblesOrderingEnabled;
  cResult[6] = stateFromStores1;
  cResult[7] = fn3;
  cResult[8] = items2;
  tmp14 = items2;
  tmp13 = fn3;
}) : (() => {
  let isEditProfileCollectiblesOrderingEnabled;
  let stateFromStores;
  let obj = isEditProfileCollectiblesOrderingEnabled(stateFromStores[5]);
  isEditProfileCollectiblesOrderingEnabled = obj.useIsEditProfileCollectiblesOrderingEnabled("edit_profile_preload");
  const items = [UserStore];
  const obj2 = isEditProfileCollectiblesOrderingEnabled(stateFromStores[6]);
  stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items1 = [CollectiblesRecommendationStore];
  const obj3 = isEditProfileCollectiblesOrderingEnabled(stateFromStores[6]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => CollectiblesRecommendationStore.shouldFetch());
  const items2 = [isEditProfileCollectiblesOrderingEnabled, stateFromStores, stateFromStores1];
  stateFromStores1(() => {
    const tmp = isEditProfileCollectiblesOrderingEnabled && null != stateFromStores && stateFromStores1;
    if (tmp) {
      const obj = CollectiblesRecommendationActionCreators;
      const result = obj.maybeFetchCollectiblesRecommendations();
    }
  }, items2);
});
let result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesRecommendations.tsx");

export default tmp2;