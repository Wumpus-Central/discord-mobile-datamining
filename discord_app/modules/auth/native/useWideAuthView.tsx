// === Module 6549: useWideAuthView ===

// Module 6549 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6550 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};