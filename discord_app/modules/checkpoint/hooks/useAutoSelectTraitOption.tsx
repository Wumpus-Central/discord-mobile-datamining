// === Module 13648: useAutoSelectTraitOption ===

// Module 13648 (useAutoSelectTraitOption)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useAutoSelectTraitOption.tsx");

export function useAutoSelectTraitOption(paused) {
  ({ availableTraitOptions, selectedOptionId: noop, onSelectOption } = paused);
  paused = paused.paused;
  const first = availableTraitOptions[0];
  const someResult = availableTraitOptions.some((optionId) => optionId.optionId === noop);
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
}