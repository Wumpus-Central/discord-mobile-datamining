// === Module 7650: useWideAuthView ===

// Module 7650 (useWideAuthView)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7651 */;

const result = set.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = isMetaQuest;
  return isMetaQuest.isMetaQuest() || tmp;
};