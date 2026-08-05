// discord_app/modules/auth/native/useWideAuthView.tsx
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = require("../../screen/native/useIsWindowLarge.tsx")();
  const obj = require("../../device/MetaQuestUtils.android.tsx") /* isMetaQuest */;
  return require("../../device/MetaQuestUtils.android.tsx") /* isMetaQuest */.isMetaQuest() || tmp;
};