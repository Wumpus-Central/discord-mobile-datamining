import { isMetaQuest } from "../../device/MetaQuestUtils.android.tsx";
import { useIsWindowLarge } from "../../screen/native/useIsWindowLarge.tsx";
// discord_app/modules/auth/native/useWideAuthView.tsx
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLarge();
  const obj = isMetaQuest /* isMetaQuest */;
  return isMetaQuest /* isMetaQuest */.isMetaQuest() || tmp;
};