// === Module 7726: useWideAuthView ===

// Module 7726 (useWideAuthView)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1623 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7727 */;

const result = set.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = isMetaQuest;
  return isMetaQuest.isMetaQuest() || tmp;
};