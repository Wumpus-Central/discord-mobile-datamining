// === Module 14966: openVideoQuestModal ===

// Module 14966 (openVideoQuestModal)
import v1All from "v1" /* 511 */;
import closure_4 from "initializeState" /* 7459 */;

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
      sourceQuestContent(14960)();
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
  const obj3 = sourceQuestContent(4724);
  const tmp8 = questId(2008)(14967, dependencyMap.paths);
  return obj3.pushLazy(tmp8, obj, questId(11336).getVideoQuestModalKey(questId));
};