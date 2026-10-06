// discord_app/modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx
import v1All from "../../../../../_runtime/01266_v1.js";
import VideoQuestUtils from "../../utils/VideoQuestUtils.tsx";
import QuestStore from "../../QuestStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let importAll;

const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx");

export default function openVideoQuestModal(questId) {
  let initialStep;
  let questContentPosition;
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
      sourceQuestContent(14936)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(5099).pushLazy;
  const obj3 = {
    questId,
    questContentPosition,
    videoSessionId: v4Result,
    initialStep,
    onClose() {
      const obj = VideoQuestUtils;
      const obj2 = { questId, sourceQuestContent, videoSessionId: importAll };
      return obj.handleVideoQuestModalClose(obj2);
    },
    sourceQuestContent,
  };
  sourceQuestContent(5099);
  const tmp9 = questId(1987)(14944, dependencyMap.paths);
  const obj4 = questId(10953);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
}
