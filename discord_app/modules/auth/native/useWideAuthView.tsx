// === Module 8582: useWideAuthView ===

// Module 8582 (useWideAuthView)
import obj132 from "obj132" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7925 */;

const result = obj132.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return isMetaQuest.isMetaQuest() || tmp;
};