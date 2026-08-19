// discord_app/modules/quests/QuestTypes.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import QuestRewardCodePlatforms from "../../../discord_common/js/shared/shared-constants/QuestRewardCodePlatforms.tsx";
import set2 from "../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdPlacement from "../../../discord_common/js/shared/shared-constants/AdPlacement.tsx";

const values = Object.values(QuestRewardCodePlatforms.QuestRewardCodePlatforms);
const set = new Set(values.filter((item, index) => typeof item === "number"));
const result = obj132.fileFinishedImporting("modules/quests/QuestTypes.tsx");

export const QuestsVisibleMessagesChangedSource = { FIRST_LAYOUT: "FIRST_LAYOUT", SCROLL: "SCROLL", VISIBILITY_CHANGED: "VISIBILITY_CHANGED" };
export const QUEST_REWARD_CODE_PLATFORMS_SET = set;
export const QuestRewardCodePlatforms = QuestRewardCodePlatforms.QuestRewardCodePlatforms;
export const QuestContent = set2.QuestContent;
export const AdPlacement = AdPlacement.AdPlacement;
export const QuestConsoleStartErrorLocal = { GENERIC: "generic", RATE_LIMITED: "rate_limited" };
export const TaskPlatformScreen = { DESKTOP: "desktop", CONSOLE: "console", SELECT: "select" };
export const VideoPauseReason = { PAUSE_BUTTON: "PAUSE_BUTTON", LOST_FOCUS: "LOST_FOCUS", MODAL_CLOSED: "MODAL_CLOSED", ANOTHER_MODAL_OPENED: "ANOTHER_MODAL_OPENED", PICTURE_IN_PICTURE: "PICTURE_IN_PICTURE" };