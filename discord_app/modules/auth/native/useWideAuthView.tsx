// === Module 7237: useWideAuthView ===

// Module 7237 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7238 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};