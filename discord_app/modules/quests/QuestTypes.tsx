// discord_app/modules/quests/QuestTypes.tsx
import QuestRewardCodePlatforms from "../../../discord_common/js/shared/shared-constants/QuestRewardCodePlatforms.tsx";
import QuestContent from "../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdPlacement from "../../../discord_common/js/shared/shared-constants/AdPlacement.tsx";
import size from "../../../_runtime/metro/00002__.js";

const values = Object.values(QuestRewardCodePlatforms.QuestRewardCodePlatforms);
const result = size.fileFinishedImporting("modules/quests/QuestTypes.tsx");

export const QuestsVisibleMessagesChangedSource = {
  FIRST_LAYOUT: "FIRST_LAYOUT",
  SCROLL: "SCROLL",
  VISIBILITY_CHANGED: "VISIBILITY_CHANGED",
};
export const QUEST_REWARD_CODE_PLATFORMS_SET = new Set(values.filter((item) => typeof item === "number"));
export const QuestRewardCodePlatforms = QuestRewardCodePlatforms.QuestRewardCodePlatforms;
export const QuestContent = QuestContent.QuestContent;
export const AdPlacement = AdPlacement.AdPlacement;
export const QuestConsoleStartErrorLocal = { GENERIC: "generic", RATE_LIMITED: "rate_limited" };
export const TaskPlatformScreen = { DESKTOP: "desktop", CONSOLE: "console", SELECT: "select" };
export const VideoPauseReason = {
  PAUSE_BUTTON: "PAUSE_BUTTON",
  LOST_FOCUS: "LOST_FOCUS",
  MODAL_CLOSED: "MODAL_CLOSED",
  ANOTHER_MODAL_OPENED: "ANOTHER_MODAL_OPENED",
  PICTURE_IN_PICTURE: "PICTURE_IN_PICTURE",
};
