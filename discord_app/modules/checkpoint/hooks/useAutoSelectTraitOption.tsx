// === Module 14426: useAutoSelectTraitOption ===

// Module 14426 (useAutoSelectTraitOption)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useAutoSelectTraitOption.tsx");

export function useAutoSelectTraitOption(isPaused) {
  ({ availableTraitOptions, selectedOptionId: noop, onSelectOption } = isPaused);
  let flag = isPaused.isPaused;
  if (flag === undefined) {
    flag = false;
  }
  const first = availableTraitOptions[0];
  const someResult = availableTraitOptions.some((optionId) => optionId.optionId === noop);
  c4 = someResult;
  items = [first, someResult, onSelectOption, flag];
  const effect = noop.useEffect(() => {
    let tmp = flag;
    if (!flag) {
      tmp = null == first;
    }
    if (!tmp) {
      tmp = c4;
    }
    if (!tmp) {
      onSelectOption(first.trait, first.optionId);
    }
  }, items);
}