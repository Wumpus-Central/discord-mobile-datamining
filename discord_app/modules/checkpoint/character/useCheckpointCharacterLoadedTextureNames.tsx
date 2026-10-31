// === Module 13616: useCheckpointCharacterLoadedTextureNames ===

// Module 13616 (useCheckpointCharacterLoadedTextureNames)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/character/useCheckpointCharacterLoadedTextureNames.tsx");

export function useCheckpointCharacterLoadedTextureNames(visibleTextureNames) {
  visibleTextureNames = visibleTextureNames.visibleTextureNames;
  const requestedTextureNames = visibleTextureNames.requestedTextureNames;
  first = undefined;
  let set;
  [first] = noop.useState(visibleTextureNames);
  closure_3 = tmp3;
  const tmp4 = _slicedToArray(noop.useState(visibleTextureNames), 2);
  if (visibleTextureNames !== tmp4[0]) {
    tmp4[1](visibleTextureNames);
    const _Set = Set;
    set = new Set(first);
    const item = visibleTextureNames.forEach((item) => set.add(item));
    tmp3(set);
  }
  let items = [visibleTextureNames];
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => closure_1_3(closure_0), 600);
    return () => clearTimeout(closure_0);
  }, items);
  const items1 = [first, requestedTextureNames];
  return noop.useMemo(() => {
    const items = [...requestedTextureNames];
    return new Set(items);
  }, items1);
}