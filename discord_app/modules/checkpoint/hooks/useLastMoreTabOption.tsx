// discord_app/modules/checkpoint/hooks/useLastMoreTabOption.tsx
import CheckpointCustomizationUtils from "../CheckpointCustomizationUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
}
