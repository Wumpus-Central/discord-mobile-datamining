// === Module 7308: useWideAuthView ===

// Module 7308 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1626 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7309 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};