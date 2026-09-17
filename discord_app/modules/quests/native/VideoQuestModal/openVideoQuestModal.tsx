// discord_app/modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx
import v1All from "../../../../../_runtime/01255_v1.js";
import VideoQuestUtils from "../../utils/VideoQuestUtils.tsx";
import QuestStore from "../../QuestStore.tsx";

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
      sourceQuestContent(15230)();
    }
  }
  const v4Result = v1All.v4();
  importAll = v4Result;
  const obj3 = sourceQuestContent(4843);
  const obj4 = {
    questId,
    questContentPosition,
    videoSessionId: v4Result,
    initialStep,
    onClose() {
      return VideoQuestUtils.handleVideoQuestModalClose({ questId, sourceQuestContent, videoSessionId: v4Result });
    },
    sourceQuestContent,
  };
  const tmp8 = questId(1897)(15237, dependencyMap.paths);
  return obj3.pushLazy(tmp8, obj4, questId(11666).getVideoQuestModalKey(questId));
}
