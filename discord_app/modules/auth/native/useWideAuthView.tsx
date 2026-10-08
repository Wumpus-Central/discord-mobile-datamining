// === Module 6617: useWideAuthView ===

// Module 6617 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6618 */;
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