// === Module 13034: useAutoSelectTraitOption ===

// Module 13034 (useAutoSelectTraitOption)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useAutoSelectTraitOption.tsx");

export const useAutoSelectTraitOption = ReactCompilerGating.isReactCompilerEnabled() ? (function useAutoSelectTraitOption(onSelectOption) {
  const cResult = c.c(11);
  ({ availableTraitOptions, selectedOptionId } = onSelectOption);
  onSelectOption = onSelectOption.onSelectOption;
  const paused = onSelectOption.paused;
  const first = availableTraitOptions[0];
  if (cResult[0] === availableTraitOptions) {
    if (cResult[1] === selectedOptionId) {
      closure_4 = tmp3;
      if (cResult[5] === first) {
        if (cResult[6] === tmp3) {
          if (cResult[7] === onSelectOption) {
            if (cResult[8] === paused) {
              let tmp6 = cResult[9];
              let tmp7 = cResult[10];
            }
            const effect = noop.useEffect(tmp6, tmp7);
          }
        }
      }
      const fn2 = function v() {
        let tmp = paused;
        if (!paused) {
          tmp = null == first;
        }
        if (!tmp) {
          tmp = closure_4;
        }
        if (!tmp) {
          onSelectOption(first.trait, first.optionId);
        }
      };
      const items = [first, cResult[2], onSelectOption, paused];
      cResult[5] = first;
      cResult[6] = cResult[2];
      cResult[7] = onSelectOption;
      cResult[8] = paused;
      cResult[9] = fn2;
      cResult[10] = items;
      tmp7 = items;
      tmp6 = fn2;
    }
  }
  if (cResult[3] !== selectedOptionId) {
    const fn = function l(optionId) {
      return optionId.optionId === selectedOptionId;
    };
    cResult[3] = selectedOptionId;
    cResult[4] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[4];
  }
  cResult[0] = availableTraitOptions;
  cResult[1] = selectedOptionId;
  cResult[2] = availableTraitOptions.some(tmp4);
  const someResult = availableTraitOptions.some(tmp4);
}) : (function useAutoSelectTraitOption(paused) {
  ({ availableTraitOptions, selectedOptionId: require, onSelectOption } = paused);
  paused = paused.paused;
  const first = availableTraitOptions[0];
  const someResult = availableTraitOptions.some((optionId) => optionId.optionId === require);
  c4 = someResult;
  const items = [first, someResult, onSelectOption, paused];
  const effect = noop.useEffect(() => {
    let tmp = paused;
    if (!paused) {
      tmp = null == first;
    }
    if (!tmp) {
      tmp = c4;
    }
    if (!tmp) {
      onSelectOption(first.trait, first.optionId);
    }
  }, items);
});