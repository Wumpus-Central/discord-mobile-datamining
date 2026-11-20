// === Module 7252: useWideAuthView ===

// Module 7252 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1625 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};