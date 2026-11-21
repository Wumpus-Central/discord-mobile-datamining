// === Module 7372: useWideAuthView ===

// Module 7372 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1625 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7373 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};