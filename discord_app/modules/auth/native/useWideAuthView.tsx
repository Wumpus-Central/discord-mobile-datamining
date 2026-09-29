// === Module 6529: useWideAuthView ===

// Module 6529 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6530 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};