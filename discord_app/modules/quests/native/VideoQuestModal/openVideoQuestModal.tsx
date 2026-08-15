// discord_app/modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx
import initializeState from "initializeState";

const require = arg1;
const result = require("v1").fileFinishedImporting("modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx");

export default function openVideoQuestModal(questId) {
  let initialStep;
  let questContentPosition;
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
  const v4Result = importAll(514).v4();
  importAll = v4Result;
  const obj2 = importAll(514);
  obj = {
    questId,
    questContentPosition,
    videoSessionId: v4Result,
    initialStep,
    onClose() {
      let obj = questId(outer1_3[6]);
      obj = { questId, sourceQuestContent, videoSessionId: closure_2 };
      return obj.handleVideoQuestModalClose(obj);
    },
    sourceQuestContent
  };
  const obj3 = sourceQuestContent(5260);
  const tmp8 = questId(2007)(14477, dependencyMap.paths);
  return obj3.pushLazy(tmp8, obj, questId(10704).getVideoQuestModalKey(questId));
};