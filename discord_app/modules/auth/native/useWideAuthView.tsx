// === Module 7780: useWideAuthView ===

// Module 7780 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7781 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};