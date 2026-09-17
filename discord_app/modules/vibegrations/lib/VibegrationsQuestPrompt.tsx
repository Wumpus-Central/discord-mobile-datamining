// discord_app/modules/vibegrations/lib/VibegrationsQuestPrompt.tsx
import QuestDataUtils from "../../quests/utils/QuestDataUtils.tsx";
import QuestsEligibility from "../../quests/lib/QuestsEligibility.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c2 = false;
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsQuestPrompt.tsx");

export const watchableQuest = function watchableQuest(quest, arg1) {
  let tmp3 = null;
  let tmp4 = null;
  if (null != quest) {
    if (!obj.getIsEligibleForQuests()) {
      tmp4 = null;
    } else if (tmp) {
      const userStatus2 = quest.userStatus;
      let claimedAt;
      if (userStatus2 != tmp3) {
        claimedAt = userStatus2.claimedAt;
      }
      tmp3 = null;
      if (!tmp11) {
        tmp3 = quest;
      }
      tmp11 = tmp3 != claimedAt;
    } else if (!tmp2) {
      if (!tmp5Result.isQuestExpired(quest)) {
        const userStatus = quest.userStatus;
        let completedAt;
        if (userStatus != tmp3) {
          completedAt = userStatus.completedAt;
        }
      }
      tmp5Result = QuestDataUtils;
    }
    obj = QuestsEligibility;
  }
  return tmp4;
};
export function isQuestPromptDismissed() {
  return c2;
}
export function dismissQuestPrompt() {
  c2 = true;
}
