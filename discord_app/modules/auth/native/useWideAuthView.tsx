// === Module 6848: useWideAuthView ===

// Module 6848 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6849 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
}) : (function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
});