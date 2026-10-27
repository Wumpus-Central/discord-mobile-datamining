// discord_app/modules/checkpoint/hooks/useTraitPickerSelection.tsx
import CheckpointCharacterTraits from "../CheckpointCharacterTraits.tsx";
import CheckpointCustomizationUtils from "../CheckpointCustomizationUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../CheckpointStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useTraitPickerSelection.tsx");

export const useTraitPickerSelection = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTraitPickerSelection(customizationOption) {
      let tmpResult3 = onSelectOption;
      const cResult = customizationOption(onSelectOption[6]).c(15);
      customizationOption = customizationOption.customizationOption;
      onSelectOption = customizationOption.onSelectOption;
      const tmp4 = customizationOption(onSelectOption[2]).CUSTOMIZATION_OPTION_TO_TRAIT[customizationOption];
      closure_2 = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [selectedOptionId];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === customizationOption) {
        if (cResult[2] === tmp4) {
          let tmp7 = cResult[3];
        }
        const stateFromStoresObject = tmp(tmpResult3[7]).useStateFromStoresObject(first, tmp7);
        selectedOptionId = stateFromStoresObject.selectedOptionId;
        const savedOptionId = stateFromStoresObject.savedOptionId;
        if (cResult[4] === onSelectOption) {
          if (cResult[5] === selectedOptionId) {
            let tmp9 = cResult[6];
          }
          if (cResult[7] === customizationOption) {
            if (cResult[8] === selectedOptionId) {
              if (cResult[10] === tmp9) {
                if (cResult[11] === savedOptionId) {
                  if (cResult[12] === selectedOptionId) {
                    if (cResult[13] === tmp10) {
                      let tmp13 = cResult[14];
                    }
                    return tmp13;
                  }
                }
              }
              const obj2 = { optionIds: cResult[9], selectedOptionId, savedOptionId, onSelectOption: tmp9 };
              cResult[10] = tmp9;
              cResult[11] = savedOptionId;
              cResult[12] = selectedOptionId;
              cResult[13] = cResult[9];
              cResult[14] = obj2;
              tmp13 = obj2;
            }
          }
          if (tmp(tmpResult3[2]).CheckpointCustomizationOption.OUTFIT === customizationOption) {
            tmpResult3 = tmp(tmpResult3[3]);
            let OUTFIT_DEFAULT_OPTION_IDS = tmpResult3.OUTFIT_DEFAULT_OPTION_IDS;
          } else if (tmp(tmpResult3[2]).CheckpointCustomizationOption.OUTFIT_COLOR === customizationOption) {
            let NONE = selectedOptionId;
            if (selectedOptionId == null) {
              NONE = tmp(tmpResult3[4]).CheckpointCharacterOutfit.NONE;
            }
            OUTFIT_DEFAULT_OPTION_IDS = tmp(tmpResult3[3]).getOutfitColorOptionIds(NONE);
            const tmpResult4 = tmp(tmpResult3[3]);
          }
          cResult[7] = customizationOption;
          cResult[8] = selectedOptionId;
          cResult[9] = OUTFIT_DEFAULT_OPTION_IDS;
        }
        const fn2 = function u(arg0, arg1) {
          if (arg1 !== selectedOptionId) {
            onSelectOption(arg0, arg1);
          }
        };
        cResult[4] = onSelectOption;
        cResult[5] = selectedOptionId;
        cResult[6] = fn2;
        tmp9 = fn2;
        const tmpResult = tmp(tmpResult3[7]);
      }
      const fn = function c() {
        let tmp7 = tmp4;
        if (customizationOption === CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT) {
          let outfitDefaultOptionId;
          if (null != tmp4) {
            outfitDefaultOptionId = CheckpointCharacterTraits.getOutfitDefaultOptionId(tmp4);
            const tmp5Result = CheckpointCharacterTraits;
          }
          tmp7 = outfitDefaultOptionId;
        }
        const obj = { selectedOptionId: tmp7, savedOptionId: null };
        const character = CheckpointStore.character;
        let tmp10;
        if (character != null) {
          tmp10 = character[closure_2];
        }
        let tmp11 = tmp10;
        if (customizationOption === CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT) {
          let outfitDefaultOptionId1;
          if (null != tmp10) {
            outfitDefaultOptionId1 = CheckpointCharacterTraits.getOutfitDefaultOptionId(tmp10);
            const tmp5Result2 = CheckpointCharacterTraits;
          }
          tmp11 = outfitDefaultOptionId1;
        }
        obj.savedOptionId = tmp11;
        return obj;
      };
      cResult[1] = customizationOption;
      cResult[2] = tmp4;
      cResult[3] = fn;
      tmp7 = fn;
    }
  : function useTraitPickerSelection(customizationOption) {
      customizationOption = customizationOption.customizationOption;
      const onSelectOption = customizationOption.onSelectOption;
      let selectedOptionId;
      noop = customizationOption(onSelectOption[2]).CUSTOMIZATION_OPTION_TO_TRAIT[customizationOption];
      const items = [selectedOptionId];
      const savedOptionId = customizationOption(onSelectOption[7]).useStateFromStoresObject(items, () => {
        let tmp7 = tmp4;
        if (customizationOption === CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT) {
          let outfitDefaultOptionId;
          if (null != tmp4) {
            outfitDefaultOptionId = CheckpointCharacterTraits.getOutfitDefaultOptionId(tmp4);
            const tmp5Result = CheckpointCharacterTraits;
          }
          tmp7 = outfitDefaultOptionId;
        }
        const obj = { selectedOptionId: tmp7, savedOptionId: null };
        const character = CheckpointStore.character;
        let tmp10;
        if (character != null) {
          tmp10 = character[closure_2];
        }
        let tmp11 = tmp10;
        if (customizationOption === CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT) {
          let outfitDefaultOptionId1;
          if (null != tmp10) {
            outfitDefaultOptionId1 = CheckpointCharacterTraits.getOutfitDefaultOptionId(tmp10);
            const tmp5Result2 = CheckpointCharacterTraits;
          }
          tmp11 = outfitDefaultOptionId1;
        }
        obj.savedOptionId = tmp11;
        return obj;
      });
      selectedOptionId = savedOptionId.selectedOptionId;
      const items1 = [onSelectOption, selectedOptionId];
      const onSelectOption1 = noop.useCallback((arg0, arg1) => {
        if (arg1 !== selectedOptionId) {
          onSelectOption(arg0, arg1);
        }
      }, items1);
      if (customizationOption(onSelectOption[2]).CheckpointCustomizationOption.OUTFIT === customizationOption) {
        let optionIds = tmp(tmp2[3]).OUTFIT_DEFAULT_OPTION_IDS;
      } else if (tmp(tmp2[2]).CheckpointCustomizationOption.OUTFIT_COLOR === customizationOption) {
        let NONE = selectedOptionId;
        if (selectedOptionId == null) {
          NONE = tmp(tmp2[4]).CheckpointCharacterOutfit.NONE;
        }
        optionIds = tmp(tmp2[3]).getOutfitColorOptionIds(NONE);
        const tmpResult = tmp(tmp2[3]);
      }
      return {
        optionIds,
        selectedOptionId,
        savedOptionId: savedOptionId.savedOptionId,
        onSelectOption: onSelectOption1,
      };
    };
