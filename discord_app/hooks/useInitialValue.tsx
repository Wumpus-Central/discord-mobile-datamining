// discord_app/hooks/useInitialValue.tsx
import noop from "../../_runtime/metro/00019__.js";

let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("hooks/useInitialValue.tsx");

export default function useInitialValue(flag) {
  return noop.useState(flag)[0];
}
