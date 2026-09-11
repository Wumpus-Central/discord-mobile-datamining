// === Module 7015: useWideAuthView ===

// Module 7015 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7016 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};