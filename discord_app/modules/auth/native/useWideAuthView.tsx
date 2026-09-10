// === Module 6994: useWideAuthView ===

// Module 6994 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6995 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};