// === Module 13429: useCheckpointCharacterLoadedTextureNames ===

// Module 13429 (useCheckpointCharacterLoadedTextureNames)
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/character/useCheckpointCharacterLoadedTextureNames.tsx");

export const useCheckpointCharacterLoadedTextureNames = ReactCompilerGating.isReactCompilerEnabled() ? (function useCheckpointCharacterLoadedTextureNames(arr) {
  closure_0 = arr;
  const cResult = c.c(3);
  [tmp3, tmp4] = noop.useState(arr);
  dependencyMap = tmp4;
  const tmp5 = _slicedToArray(noop.useState(arr), 2);
  if (arr !== tmp5[0]) {
    tmp5[1](arr);
    const _Set = Set;
    const set = new Set(tmp3);
    const item = arr.forEach((item) => set.add(item));
    tmp4(set);
  }
  if (cResult[0] !== arr) {
    const fn = function o() {
      const timeout = setTimeout(() => closure_1_1(closure_0), 600);
      return () => clearTimeout(closure_0);
    };
    const items = [arr];
    cResult[0] = arr;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp16 = items;
    let tmp15 = fn;
  } else {
    tmp15 = cResult[1];
    tmp16 = cResult[2];
  }
  const effect = noop.useEffect(tmp15, tmp16);
  return tmp3;
}) : (function useCheckpointCharacterLoadedTextureNames(arr) {
  closure_0 = arr;
  [tmp2, tmp3] = noop.useState(arr);
  dependencyMap = tmp3;
  const tmp4 = _slicedToArray(noop.useState(arr), 2);
  if (arr !== tmp4[0]) {
    tmp4[1](arr);
    const _Set = Set;
    const set = new Set(tmp2);
    const item = arr.forEach((item) => set.add(item));
    tmp3(set);
  }
  const items = [arr];
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => closure_1_1(closure_0), 600);
    return () => clearTimeout(closure_0);
  }, items);
  return tmp2;
});