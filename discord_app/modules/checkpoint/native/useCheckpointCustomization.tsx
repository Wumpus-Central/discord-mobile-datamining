// === Module 15989: useCheckpointCustomization ===

// Module 15989 (useCheckpointCustomization)
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 5438 */;
import CheckpointTrait from "CheckpointTrait" /* 5461 */;
import CheckpointCharacterBase from "CheckpointCharacterBase" /* 5463 */;
import CheckpointCharacterFace from "CheckpointCharacterFace" /* 5565 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 15987 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import CheckpointStore from "CheckpointStore" /* 15977 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointCustomization.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCheckpointCustomization() {
  const cResult = selectedCharacterTraits(savedSelection[4]).c(20);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function s() {
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
    class C {
      constructor() {
        obj = selectedCharacterTraits(savedSelection[6]);
        return obj.isPremium(closure_1_3.getCurrentUser());
      }
    }
    cResult[2] = items1;
    cResult[3] = C;
    let tmp9 = C;
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
        const tmp14 = selectedCharacterTraits[tmp(undefined, tmp2[7]).CheckpointTrait.BASE];
        class C {
          constructor() {
            obj = selectedCharacterTraits(savedSelection[6]);
            return obj.isPremium(closure_1_3.getCurrentUser());
          }
        }
        let num5 = selectedCharacterTraits[tmp(undefined, tmp2[7]).CheckpointTrait.SHOES];
        if (num5 == null) {
          num5 = 0;
        }
        let num6 = selectedCharacterTraits[tmp(undefined, tmp2[7]).CheckpointTrait.OUTFIT];
        if (num6 == null) {
          num6 = 0;
        }
        let CHILL = selectedCharacterTraits[tmp(undefined, tmp2[7]).CheckpointTrait.FACE];
        if (CHILL == null) {
          CHILL = tmp(tmp2[11]).CheckpointCharacterFace.CHILL;
        }
        let num7 = selectedCharacterTraits[tmp(undefined, tmp2[7]).CheckpointTrait.HAT];
        if (num7 == null) {
          num7 = 0;
        }
        let num8 = selectedCharacterTraits[tmp(undefined, tmp2[7]).CheckpointTrait.WEARABLE];
        if (num8 == null) {
          num8 = 0;
        }
        let num9 = selectedCharacterTraits[tmp(undefined, tmp2[7]).CheckpointTrait.AURA];
        if (num9 == null) {
          num9 = 0;
        }
        if (cResult[8] === num8) {
          if (cResult[9] === num9) {
            if (cResult[10] === tmp14) {
              if (cResult[11] === num5) {
                if (cResult[12] === num6) {
                  if (cResult[13] === CHILL) {
                    if (cResult[14] === num7) {
                      let tmp16 = cResult[15];
                    }
                    if (cResult[16] === tmp12) {
                      if (cResult[17] === tmp16) {
                        if (cResult[18] === selectedCharacterTraits) {
                          let tmp17 = cResult[19];
                        }
                        return tmp17;
                      }
                    }
                    const obj2 = { selectedCharacterTraits: null, blockedTraits: null, character: null };
                    class C {
                      constructor() {
                        obj = selectedCharacterTraits(savedSelection[6]);
                        return obj.isPremium(closure_1_3.getCurrentUser());
                      }
                    }
                    obj2.blockedTraits = tmp12;
                    obj2.character = tmp16;
                    cResult[16] = tmp12;
                    cResult[17] = tmp16;
                    cResult[18] = selectedCharacterTraits;
                    cResult[19] = obj2;
                    tmp17 = obj2;
                  }
                }
              }
            }
          }
        }
        const obj3 = { base: tmp14, shoes: num5, outfit: num6, face: CHILL, hat: num7, wearable: num8, aura: num9 };
        cResult[8] = num8;
        cResult[9] = num9;
        cResult[10] = tmp14;
        cResult[11] = num5;
        cResult[12] = num6;
        cResult[13] = CHILL;
        cResult[14] = num7;
        cResult[15] = obj3;
        tmp16 = obj3;
      }
    }
  }
  if (stateFromStores) {
    const items2 = [];
  } else {
    const _Object = Object;
    const values = Object.values(tmp(tmp2[7]).CheckpointTrait);
    class C {
      constructor() {
        obj = selectedCharacterTraits(savedSelection[6]);
        return obj.isPremium(closure_1_3.getCurrentUser());
      }
    }
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
  const items3 = [selectedCharacterTraits];
  const memo = stateFromStores.useMemo(() => {
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
  }, items2);
  const obj2 = selectedCharacterTraits(savedSelection[5]);
  return {
    selectedCharacterTraits,
    blockedTraits: memo,
    character: stateFromStores.useMemo(() => {
      let ICY = selectedCharacterTraits[CheckpointTrait.CheckpointTrait.BASE];
      if (ICY == null) {
        ICY = CheckpointCharacterBase.CheckpointCharacterBase.ICY;
      }
      const obj = { base: ICY, shoes: null, outfit: null, face: null, hat: null, wearable: null, aura: null };
      let num = selectedCharacterTraits[CheckpointTrait.CheckpointTrait.SHOES];
      if (num == null) {
        num = 0;
      }
      obj.shoes = num;
      let num2 = selectedCharacterTraits[CheckpointTrait.CheckpointTrait.OUTFIT];
      if (num2 == null) {
        num2 = 0;
      }
      obj.outfit = num2;
      let CHILL = selectedCharacterTraits[CheckpointTrait.CheckpointTrait.FACE];
      if (CHILL == null) {
        CHILL = CheckpointCharacterFace.CheckpointCharacterFace.CHILL;
      }
      obj.face = CHILL;
      let num3 = selectedCharacterTraits[CheckpointTrait.CheckpointTrait.HAT];
      if (num3 == null) {
        num3 = 0;
      }
      obj.hat = num3;
      let num4 = selectedCharacterTraits[CheckpointTrait.CheckpointTrait.WEARABLE];
      if (num4 == null) {
        num4 = 0;
      }
      obj.wearable = num4;
      let num5 = selectedCharacterTraits[CheckpointTrait.CheckpointTrait.AURA];
      if (num5 == null) {
        num5 = 0;
      }
      obj.aura = num5;
      return obj;
    }, items3)
  };
});