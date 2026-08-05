// discord_app/modules/auth/native/useWideAuthView.tsx
import { isMetaQuest } from "../../device/MetaQuestUtils.android.tsx";
import { useIsWindowLarge } from "../../screen/native/useIsWindowLarge.tsx";
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLarge();
  const obj = isMetaQuest;
  return isMetaQuest.isMetaQuest() || tmp;
};