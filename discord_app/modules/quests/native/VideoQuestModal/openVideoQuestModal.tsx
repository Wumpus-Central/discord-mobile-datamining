// === Module 14924: openVideoQuestModal ===

// Module 14924 (openVideoQuestModal)
import v1All from "v1" /* 1266 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10940 */;
import QuestStore from "QuestStore" /* 7187 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx");

export default function openVideoQuestModal(questId) {
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  ({ questContentPosition, initialStep } = questId);
  if (QuestStore.isQuestAccessSuspended) {
    const quest = QuestStore.getQuest(questId);
    let completedAt;
    if (quest != null) {
      const userStatus = quest.userStatus;
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
    }
    if (null == completedAt) {
      sourceQuestContent(14917)();
    }
  }
  const v4Result = v1All.v4();
  importAll = v4Result;
  const obj3 = sourceQuestContent(5093);
  const obj4 = {
    questId,
    questContentPosition,
    videoSessionId: v4Result,
    initialStep,
    onClose() {
      return VideoQuestUtils.handleVideoQuestModalClose({ questId, sourceQuestContent, videoSessionId: v4Result });
    },
    sourceQuestContent
  };
  const tmp8 = questId(1987)(14925, dependencyMap.paths);
  return obj3.pushLazy(tmp8, obj4, questId(10940).getVideoQuestModalKey(questId));
};