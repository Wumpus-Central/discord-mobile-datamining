// === Module 7182: useWideAuthView ===

// Module 7182 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7183 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};