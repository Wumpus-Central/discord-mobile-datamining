// discord_app/modules/checkpoint/hooks/useTraitPickerOptions.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import CheckpointCustomizationUtils from "../CheckpointCustomizationUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import CheckpointStore from "../CheckpointStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useTraitPickerOptions.tsx");

export const useTraitPickerOptions = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTraitPickerOptions(arg0) {
      const cResult = c.c(10);
      ({ customizationOption, options, savedOptionId } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CheckpointStore];
        const fn = function u() {
          return stats.stats;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        class P {
          constructor() {
            obj = closure_1_0(closure_1_1[6]);
            return obj.isPremium(closure_1_3.getCurrentUser());
          }
        }
        cResult[2] = items1;
        cResult[3] = P;
        let tmp9 = P;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = initialize;
      const stateFromStores1 = initialize.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === customizationOption) {
        if (cResult[5] === stateFromStores1) {
          if (cResult[6] === options) {
            if (cResult[7] === savedOptionId) {
              if (cResult[8] === stateFromStores) {
                let tmp12 = cResult[9];
              }
              return tmp12;
            }
          }
        }
      }
      const tmpResult3 = initialize;
      const traitPickerOptions = CheckpointCustomizationUtils.getTraitPickerOptions(
        customizationOption,
        options,
        stateFromStores,
        stateFromStores1,
        savedOptionId,
      );
      cResult[4] = customizationOption;
      cResult[5] = stateFromStores1;
      cResult[6] = options;
      cResult[7] = savedOptionId;
      cResult[8] = stateFromStores;
      cResult[9] = traitPickerOptions;
      tmp12 = traitPickerOptions;
      const tmpResult4 = CheckpointCustomizationUtils;
    }
  : function useTraitPickerOptions(customizationOption) {
      customizationOption = customizationOption.customizationOption;
      const options = customizationOption.options;
      const savedOptionId = customizationOption.savedOptionId;
      let stateFromStores1;
      const items = [stateFromStores1];
      const stateFromStores = customizationOption(options[5]).useStateFromStores(items, () => stateFromStores1.stats);
      const obj = customizationOption(options[5]);
      const items1 = [stateFromStores];
      stateFromStores1 = customizationOption(options[5]).useStateFromStores(items1, () =>
        customizationOption(options[6]).isPremium(stateFromStores.getCurrentUser()),
      );
      const items2 = [customizationOption, stateFromStores1, options, savedOptionId, stateFromStores];
      return savedOptionId.useMemo(
        () =>
          CheckpointCustomizationUtils.getTraitPickerOptions(
            customizationOption,
            options,
            stateFromStores,
            stateFromStores1,
            savedOptionId,
          ),
        items2,
      );
    };
