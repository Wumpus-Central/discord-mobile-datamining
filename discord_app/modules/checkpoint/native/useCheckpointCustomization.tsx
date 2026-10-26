// === Module 12964: useCheckpointCustomization ===

// Module 12964 (useCheckpointCustomization)
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6016 */;
import CheckpointTrait from "CheckpointTrait" /* 6039 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6364 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import CheckpointStore from "CheckpointStore" /* 12953 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointCustomization.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCheckpointCustomization() {
  const cResult = selectedCharacterTraits(savedSelection[4]).c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function o() {
      return { selectedCharacterTraits: CheckpointStore.selectedCharacterTraits, savedSelection: CheckpointStore.character };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = selectedCharacterTraits(savedSelection[4]);
  const stateFromStoresObject = selectedCharacterTraits(savedSelection[5]).useStateFromStoresObject(tmp4, tmp5);
  selectedCharacterTraits = stateFromStoresObject.selectedCharacterTraits;
  savedSelection = stateFromStoresObject.savedSelection;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function u() {
      return selectedCharacterTraits(savedSelection[6]).isPremium(currentUser.getCurrentUser());
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = selectedCharacterTraits(savedSelection[5]);
  const stateFromStores = selectedCharacterTraits(savedSelection[5]).useStateFromStores(tmp8, tmp9);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === savedSelection) {
      if (cResult[6] === selectedCharacterTraits) {
        if (cResult[8] === cResult[7]) {
          if (cResult[9] === selectedCharacterTraits) {
            let tmp13 = cResult[10];
          }
          return tmp13;
        }
        const obj2 = { selectedCharacterTraits, blockedTraits: cResult[7] };
        cResult[8] = cResult[7];
        cResult[9] = selectedCharacterTraits;
        cResult[10] = obj2;
        tmp13 = obj2;
      }
    }
  }
  if (stateFromStores) {
    let items2 = [];
  } else {
    const _Object = Object;
    const values = Object.values(tmp(tmp2[7]).CheckpointTrait);
    items2 = values.filter((item) => {
      let tmp2 = null != tmp;
      if (tmp2) {
        let tmp3;
        if (savedSelection != null) {
          tmp3 = savedSelection[item];
        }
        tmp2 = tmp3 !== tmp;
      }
      if (tmp2) {
        const traitOptionRarity = CheckpointCharacterTraits.getTraitOptionRarity(item, tmp);
        tmp2 = traitOptionRarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO;
      }
      return tmp2;
    });
  }
  cResult[4] = stateFromStores;
  cResult[5] = savedSelection;
  cResult[6] = selectedCharacterTraits;
  cResult[7] = items2;
  const tmpResult2 = selectedCharacterTraits(savedSelection[5]);
}) : (function useCheckpointCustomization() {
  let items = [CheckpointStore];
  const stateFromStoresObject = selectedCharacterTraits(savedSelection[5]).useStateFromStoresObject(items, () => ({ selectedCharacterTraits: CheckpointStore.selectedCharacterTraits, savedSelection: CheckpointStore.character }));
  selectedCharacterTraits = stateFromStoresObject.selectedCharacterTraits;
  savedSelection = stateFromStoresObject.savedSelection;
  let obj = selectedCharacterTraits(savedSelection[5]);
  const items1 = [UserStore];
  const stateFromStores = selectedCharacterTraits(savedSelection[5]).useStateFromStores(items1, () => selectedCharacterTraits(savedSelection[6]).isPremium(currentUser.getCurrentUser()));
  const items2 = [stateFromStores, savedSelection, selectedCharacterTraits];
  const obj2 = selectedCharacterTraits(savedSelection[5]);
  return {
    selectedCharacterTraits,
    blockedTraits: stateFromStores.useMemo(() => {
      if (stateFromStores) {
        let items = [];
      } else {
        const _Object = Object;
        const values = Object.values(CheckpointTrait.CheckpointTrait);
        items = values.filter((item) => {
          let tmp2 = null != tmp;
          if (tmp2) {
            let tmp3;
            if (closure_1_1 != null) {
              tmp3 = closure_1_1[item];
            }
            tmp2 = tmp3 !== tmp;
          }
          if (tmp2) {
            const traitOptionRarity = selectedCharacterTraits(savedSelection[8]).getTraitOptionRarity(item, tmp);
            tmp2 = traitOptionRarity === selectedCharacterTraits(savedSelection[9]).CheckpointTraitRarity.NITRO;
            const obj = selectedCharacterTraits(savedSelection[8]);
          }
          return tmp2;
        });
      }
      return items;
    }, items2)
  };
});