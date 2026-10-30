// === Module 7105: useWideAuthView ===

// Module 7105 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1623 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7106 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};