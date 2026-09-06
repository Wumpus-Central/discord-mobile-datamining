// === Module 6944: useWideAuthView ===

// Module 6944 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6945 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};