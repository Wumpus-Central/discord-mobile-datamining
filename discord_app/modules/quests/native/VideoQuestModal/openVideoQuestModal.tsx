// === Module 15182: openVideoQuestModal ===

// Module 15182 (openVideoQuestModal)
import v1All from "v1" /* 1256 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11606 */;
import QuestStore from "QuestStore" /* 7775 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx");

export default function openVideoQuestModal(questId) {
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  let obj = QuestStore;
  ({ questContentPosition, initialStep } = questId);
  if (QuestStore.isQuestAccessSuspended) {
    const quest = obj.getQuest(questId);
    let completedAt;
    if (quest != null) {
      const userStatus = quest.userStatus;
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
    }
    if (null == completedAt) {
      sourceQuestContent(15176)();
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
      const obj = { questId, sourceQuestContent, videoSessionId: v4Result };
      return obj.handleVideoQuestModalClose(obj);
    },
    sourceQuestContent
  };
  const obj3 = sourceQuestContent(4809);
  const tmp8 = questId(1896)(15183, dependencyMap.paths);
  return obj3.pushLazy(tmp8, obj, questId(11606).getVideoQuestModalKey(questId));
};