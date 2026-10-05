// === Module 14488: useMaybeFetchCollectiblesRecommendations ===

// Module 14488 (useMaybeFetchCollectiblesRecommendations)
import _mod19 from "module_19" /* 19 */;
import CollectiblesRecommendationActionCreators from "CollectiblesRecommendationActionCreators" /* 14489 */;
import UserStore from "UserStore" /* 1377 */;
import CollectiblesRecommendationStore from "CollectiblesRecommendationStore" /* 13005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useEffect = _mod19.useEffect;
let result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesRecommendations.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = isEditProfileCollectiblesOrderingEnabled(stateFromStores[4]).c(9);
  let obj = isEditProfileCollectiblesOrderingEnabled(stateFromStores[4]);
  isEditProfileCollectiblesOrderingEnabled = isEditProfileCollectiblesOrderingEnabled(stateFromStores[5]).useIsEditProfileCollectiblesOrderingEnabled("edit_profile_preload");
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
  const obj2 = isEditProfileCollectiblesOrderingEnabled(stateFromStores[5]);
  stateFromStores = isEditProfileCollectiblesOrderingEnabled(stateFromStores[6]).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesRecommendationStore];
    const fn2 = function f() {
      return CollectiblesRecommendationStore.shouldFetch();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = isEditProfileCollectiblesOrderingEnabled(stateFromStores[6]);
  const stateFromStores1 = isEditProfileCollectiblesOrderingEnabled(stateFromStores[6]).useStateFromStores(tmp9, tmp10);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === isEditProfileCollectiblesOrderingEnabled) {
      if (cResult[6] === stateFromStores1) {
        let tmp13 = cResult[7];
        let tmp14 = cResult[8];
      }
      stateFromStores1(tmp13, tmp14);
    }
  }
  const fn3 = function h() {
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
  };
  const items2 = [isEditProfileCollectiblesOrderingEnabled, stateFromStores, stateFromStores1];
  cResult[4] = stateFromStores;
  cResult[5] = isEditProfileCollectiblesOrderingEnabled;
  cResult[6] = stateFromStores1;
  cResult[7] = fn3;
  cResult[8] = items2;
  tmp14 = items2;
  tmp13 = fn3;
  const tmpResult2 = isEditProfileCollectiblesOrderingEnabled(stateFromStores[6]);
}) : (() => {
  isEditProfileCollectiblesOrderingEnabled = isEditProfileCollectiblesOrderingEnabled(stateFromStores[5]).useIsEditProfileCollectiblesOrderingEnabled("edit_profile_preload");
  let obj = isEditProfileCollectiblesOrderingEnabled(stateFromStores[5]);
  const items = [UserStore];
  stateFromStores = isEditProfileCollectiblesOrderingEnabled(stateFromStores[6]).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const obj2 = isEditProfileCollectiblesOrderingEnabled(stateFromStores[6]);
  const items1 = [CollectiblesRecommendationStore];
  const stateFromStores1 = isEditProfileCollectiblesOrderingEnabled(stateFromStores[6]).useStateFromStores(items1, () => CollectiblesRecommendationStore.shouldFetch());
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
});