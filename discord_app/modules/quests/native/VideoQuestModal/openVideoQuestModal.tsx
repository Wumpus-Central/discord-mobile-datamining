// discord_app/modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx
import v1All from "../../../../../_runtime/00514_v1.js";
import initializeState from "../../QuestStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx");

export default function openVideoQuestModal(questId) {
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  ({ questContentPosition, initialStep } = questId);
  if (obj.isQuestAccessSuspended) {
    const quest = obj.getQuest(questId);
    let completedAt;
    if (quest != null) {
      const userStatus = quest.userStatus;
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
    }
    if (null == completedAt) {
      sourceQuestContent(14470)();
    }
  }
  const v4Result = v1All.v4();
  importAll = v4Result;
  obj = {
    questId,
    questContentPosition,
    videoSessionId: v4Result,
    initialStep,
    onClose() {
      questId(dependencyMap[6]);
      const obj = { questId, sourceQuestContent, videoSessionId: closure_2 };
      return obj.handleVideoQuestModalClose(obj);
    },
    sourceQuestContent
  };
  const obj3 = sourceQuestContent(5260);
  const tmp8 = questId(2007)(14477, dependencyMap.paths);
  return obj3.pushLazy(tmp8, obj, questId(10704).getVideoQuestModalKey(questId));
};