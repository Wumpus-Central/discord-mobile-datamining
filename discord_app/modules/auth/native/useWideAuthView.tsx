// discord_app/modules/auth/native/useWideAuthView.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import isMetaQuest from "../../device/MetaQuestUtils.android.tsx";
import useIsWindowLargeDefault from "../../screen/native/useIsWindowLarge.tsx";

const result = obj132.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return isMetaQuest.isMetaQuest() || tmp;
};