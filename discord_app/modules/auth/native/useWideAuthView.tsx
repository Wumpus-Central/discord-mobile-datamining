// === Module 7111: useWideAuthView ===

// Module 7111 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1622 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7112 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};