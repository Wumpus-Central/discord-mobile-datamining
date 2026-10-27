// === Module 12152: useConjureStartPublish ===

// Module 12152 (useConjureStartPublish)
import publish_useConjureStartPublishDefault from "publish/useConjureStartPublish" /* 12153 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12154 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  return publish_useConjureStartPublishDefault(arg0, arg1, arg2, ConjurePublishSheetDefault);
};