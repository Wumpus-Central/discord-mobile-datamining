// discord_app/modules/auth/native/useWideAuthView.tsx
import set from "../../../../_runtime/00002_set.js";
import isMetaQuest from "../../device/MetaQuestUtils.android.tsx";
import useIsWindowLargeDefault from "../../screen/native/useIsWindowLarge.tsx";

const result = set.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = isMetaQuest;
  return isMetaQuest.isMetaQuest() || tmp;
};