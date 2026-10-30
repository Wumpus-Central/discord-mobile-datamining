// === Module 13579: useCheckpointCharacterLoadedTextureNames ===

// Module 13579 (useCheckpointCharacterLoadedTextureNames)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/character/useCheckpointCharacterLoadedTextureNames.tsx");

export function useCheckpointCharacterLoadedTextureNames(memo1) {
  closure_0 = memo1;
  [tmp2, tmp3] = noop.useState(memo1);
  noop = tmp3;
  const tmp4 = _slicedToArray(noop.useState(memo1), 2);
  if (memo1 !== tmp4[0]) {
    tmp4[1](memo1);
    const _Set = Set;
    const set = new Set(tmp2);
    const item = memo1.forEach((item) => set.add(item));
    tmp3(set);
  }
  const items = [memo1];
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => closure_1_1(closure_0), 600);
    return () => clearTimeout(closure_0);
  }, items);
  return tmp2;
}