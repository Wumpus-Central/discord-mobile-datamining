// === Module 12792: useAutoSelectTraitOption ===

// Module 12792 (useAutoSelectTraitOption)
import noop from "module_19" /* 19 */;

const require = fn;
function getInitialTraitOption(availableTraitOptions) {
  let random = arg1;
  if (arg1 === undefined) {
    let _Math = Math;
    random = Math.random;
  }
  let found = availableTraitOptions.filter((item) => {
    ({ status, rarity } = item);
    return status === random(found[2]).CheckpointTraitOptionStatus.UNLOCKED && rarity !== random(found[1]).CheckpointTraitRarity.NITRO;
  });
  function _loop(iter) {
    closure_0 = iter;
    found = found.filter((rarity) => rarity.rarity === closure_0);
    if (1 === found.length) {
      const obj2 = { v: found[0] };
      let tmp = obj2;
    } else if (found.length > 1) {
      const obj = { v: null };
      const _Math = Math;
      obj.v = found[Math.floor(Math, random(undefined) * found.length)];
      tmp = obj;
    }
    return tmp;
  }
  const iter = items[Symbol.iterator]();
  while (iter !== undefined) {
    let _loopResult = _loop(iter.next());
    if (_loopResult) {
      iter.return();
      return _loopResult.v;
    }
  }
  return found[0];
}
let items = [fn(5970).CheckpointTraitRarity.ULTRA, fn(5970).CheckpointTraitRarity.EPIC, fn(5970).CheckpointTraitRarity.RARE, fn(5970).CheckpointTraitRarity.COMMON, fn(5970).CheckpointTraitRarity.DEFAULT];
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useAutoSelectTraitOption.tsx");

export { getInitialTraitOption };
export function useAutoSelectTraitOption(availableTraitOptions) {
  availableTraitOptions = availableTraitOptions.availableTraitOptions;
  ({ selectedOptionId: dependencyMap, onSelectOption } = availableTraitOptions);
  let flag = availableTraitOptions.isPaused;
  if (flag === undefined) {
    flag = false;
  }
  items = [availableTraitOptions];
  const memo = onSelectOption.useMemo(() => getInitialTraitOption(availableTraitOptions), items);
  const someResult = availableTraitOptions.some((optionId) => optionId.optionId === dependencyMap);
  c5 = someResult;
  const items1 = [memo, someResult, onSelectOption, flag];
  const effect = onSelectOption.useEffect(() => {
    let tmp = flag;
    if (!flag) {
      tmp = c5;
    }
    if (!tmp) {
      if (null != memo) {
        onSelectOption(memo.trait, memo.optionId);
      }
    }
  }, items1);
}