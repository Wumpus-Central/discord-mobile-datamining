// discord_app/modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx
const QUEST_DISCLOSURE_MODAL = "QUEST_DISCLOSURE_MODAL";
let result = require("emitClickEventWithCreative").fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default {
  showModal(isTargetedDisclosure) {
    let gamePublisher;
    let gameTitle;
    let quest;
    let trackingCtx;
    ({ quest, trackingCtx } = isTargetedDisclosure);
    ({ gamePublisher, gameTitle } = quest.config.messages);
    let obj = require("../../utils/QuestTaskUtils.tsx") /* getApplicationIdsByTaskTypes */;
    let obj1 = require("../../experiments/AdAnalyticsInterfaceExperiment.tsx") /* apexExperiment */;
    if (obj1.shouldMigrateToAdAnalyticsInterface(require("../../experiments/AdAnalyticsInterfaceExperiment.tsx") /* apexExperiment */.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_disclosure_modal")) {
      let tmpResult = tmp(9435);
      obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null };
      obj[0] = tmp(9439).AdUserActionType.CLICK_INTERNAL;
      obj[1] = tmp(7108).AdCreativeType.QUEST;
      obj[2] = quest.id;
      ({ ctaContent: obj6[3], content: obj6[4], sourceQuestContent: obj6[5], position: obj6[6] } = trackingCtx);
      tmpResult.captureAdUserAction(obj);
    } else {
      tmpResult = tmp(7097);
      obj = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
      obj[0] = quest.id;
      ({ content: obj4[1], ctaContent: obj4[2], position: obj4[3], sourceQuestContent: obj4[4] } = trackingCtx);
      const result = tmpResult.trackQuestContentClicked(obj);
    }
    const hasWatchVideoTasksResult = obj.hasWatchVideoTasks(quest);
    const tmp2 = dependencyMap;
    obj1 = { gamePublisher, gameTitle, isTargetedDisclosure: isTargetedDisclosure.isTargetedDisclosure, cosponsorName: null, isVideoQuest: null };
    const cosponsorMetadata = quest.config.cosponsorMetadata;
    let name;
    const obj7 = require("../../../../actions/ModalActionCreators.tsx");
    if (cosponsorMetadata != null) {
      name = cosponsorMetadata.name;
    }
    obj1[3] = name;
    obj1[4] = hasWatchVideoTasksResult;
    obj7.pushLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(14251, tmp2.paths), obj1, QUEST_DISCLOSURE_MODAL);
  },
  hideModal() {
    require("../../../../actions/ModalActionCreators.tsx").popWithKey(QUEST_DISCLOSURE_MODAL);
  }
};