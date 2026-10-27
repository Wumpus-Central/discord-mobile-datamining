// discord_app/modules/conjure/publish/native/useConjureStartPublish.tsx
import publish_useConjureStartPublishDefault from "../useConjureStartPublish.tsx";
import ConjurePublishSheetDefault from "ConjurePublishSheet.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  return publish_useConjureStartPublishDefault(arg0, arg1, arg2, ConjurePublishSheetDefault);
}
