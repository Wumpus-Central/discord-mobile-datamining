// === Module 6363: useWideAuthView ===

// Module 6363 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6364 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};