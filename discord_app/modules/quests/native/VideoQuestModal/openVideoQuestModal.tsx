// discord_app/modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx
import v1All from "../../../../../_runtime/00514_v1.js";
import closure_4 from "../../QuestStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx");

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
      sourceQuestContent(14686)();
    }
  }
  const v4Result = v1All.v4();
  importAll = v4Result;
  const obj2 = v1All;
  obj = {
    questId,
    questContentPosition,
    videoSessionId: v4Result,
    initialStep,
    onClose() {
      let obj = questId(closure_1_3[6]);
      obj = { questId, sourceQuestContent, videoSessionId: closure_2 };
      return obj.handleVideoQuestModalClose(obj);
    },
    sourceQuestContent
  };
  const obj3 = sourceQuestContent(4691);
  const tmp8 = questId(2009)(14693, dependencyMap.paths);
  return obj3.pushLazy(tmp8, obj, questId(11074).getVideoQuestModalKey(questId));
};