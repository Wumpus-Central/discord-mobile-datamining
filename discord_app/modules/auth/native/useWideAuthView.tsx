// discord_app/modules/auth/native/useWideAuthView.tsx
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import useIsWindowLargeDefault from "../../screen/native/useIsWindowLarge.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
}
