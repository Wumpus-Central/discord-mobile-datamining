// === Module 12796: useLastMoreTabOption ===

// Module 12796 (useLastMoreTabOption)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6336 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useLastMoreTabOption.tsx");

export default function useLastMoreTabOption(arg0) {
  const FINALIZE_MORE_OPTIONS = CheckpointCustomizationUtils.FINALIZE_MORE_OPTIONS;
  let hasItem = FINALIZE_MORE_OPTIONS.includes(arg0);
  let tmp3 = null;
  if (hasItem) {
    tmp3 = arg0;
  }
  [tmp5, tmp6] = noop.useState(tmp3);
  if (hasItem) {
    hasItem = tmp5 !== arg0;
  }
  if (hasItem) {
    tmp6(arg0);
  }
  return tmp5;
};