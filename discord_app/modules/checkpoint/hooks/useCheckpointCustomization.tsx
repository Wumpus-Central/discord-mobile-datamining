// discord_app/modules/checkpoint/hooks/useCheckpointCustomization.tsx
import CheckpointTraitRarity from "../../../../discord_common/js/shared/shared-constants/CheckpointTraitRarity.tsx";
import CheckpointCharacterTraits from "../CheckpointCharacterTraits.tsx";
import CheckpointTrait from "../../../../discord_common/js/shared/shared-constants/CheckpointTrait.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import CheckpointStore from "../CheckpointStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointCustomization.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useCheckpointCustomization() {
      const cResult = selectedCharacterTraits(savedSelection[4]).c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CheckpointStore];
        const fn = function o() {
          return {
            selectedCharacterTraits: CheckpointStore.selectedCharacterTraits,
            savedSelection: CheckpointStore.character,
            stats: CheckpointStore.stats,
          };
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
      const stats = stateFromStoresObject.stats;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [stateFromStores];
        const fn2 = function u() {
          return selectedCharacterTraits(savedSelection[6]).isPremium(stateFromStores.getCurrentUser());
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
      stateFromStores = selectedCharacterTraits(savedSelection[5]).useStateFromStores(tmp8, tmp9);
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === savedSelection) {
          if (cResult[6] === selectedCharacterTraits) {
            if (cResult[7] === stats) {
              let tmp12 = cResult[8];
            }
            if (cResult[9] === tmp12) {
              if (cResult[10] === selectedCharacterTraits) {
                let tmp14 = cResult[11];
              }
              return tmp14;
            }
            const obj2 = { selectedCharacterTraits, blockedTraits: tmp12 };
            cResult[9] = tmp12;
            cResult[10] = selectedCharacterTraits;
            cResult[11] = obj2;
            tmp14 = obj2;
          }
        }
      }
      const values = Object.values(tmp(tmp2[7]).CheckpointTrait);
      const found = values.filter((item) => {
        if (null != selectedCharacterTraits[item]) {
          let tmp2;
          if (savedSelection != null) {
            tmp2 = savedSelection[item];
          }
          if (tmp2 !== tmp) {
            const traitOptionRarity = CheckpointCharacterTraits.getTraitOptionRarity(item, tmp);
            if (null == traitOptionRarity) {
              return tmp6;
            } else if (traitOptionRarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
              let tmp8 = !stateFromStores;
            } else {
              const visibleTraitRarities = CheckpointCharacterTraits.getVisibleTraitRarities(item, stats);
              tmp8 = !visibleTraitRarities.has(traitOptionRarity);
              const tmp3Result = CheckpointCharacterTraits;
            }
          }
        }
        return false;
      });
      cResult[4] = stateFromStores;
      cResult[5] = savedSelection;
      cResult[6] = selectedCharacterTraits;
      cResult[7] = stats;
      cResult[8] = found;
      tmp12 = found;
      const tmpResult2 = selectedCharacterTraits(savedSelection[5]);
    }
  : function useCheckpointCustomization() {
      const items = [CheckpointStore];
      const stateFromStoresObject = selectedCharacterTraits(savedSelection[5]).useStateFromStoresObject(items, () => ({
        selectedCharacterTraits: CheckpointStore.selectedCharacterTraits,
        savedSelection: CheckpointStore.character,
        stats: CheckpointStore.stats,
      }));
      selectedCharacterTraits = stateFromStoresObject.selectedCharacterTraits;
      savedSelection = stateFromStoresObject.savedSelection;
      const stats = stateFromStoresObject.stats;
      let obj = selectedCharacterTraits(savedSelection[5]);
      const items1 = [stateFromStores];
      stateFromStores = selectedCharacterTraits(savedSelection[5]).useStateFromStores(items1, () =>
        selectedCharacterTraits(savedSelection[6]).isPremium(stateFromStores.getCurrentUser()),
      );
      const items2 = [stateFromStores, savedSelection, selectedCharacterTraits, stats];
      const obj2 = selectedCharacterTraits(savedSelection[5]);
      return {
        selectedCharacterTraits,
        blockedTraits: stats.useMemo(() => {
          const values = Object.values(CheckpointTrait.CheckpointTrait);
          return values.filter((item) => {
            if (null != closure_1_0[item]) {
              let tmp2;
              if (closure_1_1 != null) {
                tmp2 = closure_1_1[item];
              }
              if (tmp2 !== tmp) {
                const traitOptionRarity = selectedCharacterTraits(savedSelection[8]).getTraitOptionRarity(item, tmp);
                if (null == traitOptionRarity) {
                  return tmp6;
                } else if (
                  traitOptionRarity === selectedCharacterTraits(savedSelection[9]).CheckpointTraitRarity.NITRO
                ) {
                  let tmp8 = !stateFromStores;
                } else {
                  const visibleTraitRarities = selectedCharacterTraits(savedSelection[8]).getVisibleTraitRarities(
                    item,
                    stats,
                  );
                  tmp8 = !visibleTraitRarities.has(traitOptionRarity);
                  const tmp3Result = selectedCharacterTraits(savedSelection[8]);
                }
                const obj = selectedCharacterTraits(savedSelection[8]);
              }
            }
            return false;
          });
        }, items2),
      };
    };
