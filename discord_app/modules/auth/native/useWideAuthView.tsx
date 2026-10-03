// === Module 6432: useWideAuthView ===

// Module 6432 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6433 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
}) : (() => {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
});