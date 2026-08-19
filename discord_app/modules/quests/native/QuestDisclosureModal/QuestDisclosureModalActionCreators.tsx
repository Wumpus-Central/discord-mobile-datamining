// === Module 14457: ? ===

// Module 14457
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;
import AdCreativeType from "AdCreativeType" /* 7469 */;
import trackQuestEvent from "trackQuestEvent" /* 7470 */;
import getApplicationIdsByTaskTypes from "getApplicationIdsByTaskTypes" /* 7476 */;
import apexExperiment from "apexExperiment" /* 9502 */;
import emitClickEventWithCreative from "emitClickEventWithCreative" /* 9503 */;
import AdUserActionType from "AdUserActionType" /* 9507 */;

const QUEST_DISCLOSURE_MODAL = "QUEST_DISCLOSURE_MODAL";
let result = obj132.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default {
  showModal(isTargetedDisclosure) {
    ({ quest, trackingCtx } = isTargetedDisclosure);
    ({ gamePublisher, gameTitle } = quest.config.messages);
    let obj = getApplicationIdsByTaskTypes;
    obj1 = apexExperiment;
    if (obj1.shouldMigrateToAdAnalyticsInterface(apexExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_disclosure_modal")) {
      let tmpResult = emitClickEventWithCreative;
      obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null };
      obj[0] = AdUserActionType.AdUserActionType.CLICK_INTERNAL;
      obj[1] = AdCreativeType.AdCreativeType.QUEST;
      obj[2] = quest.id;
      ({ ctaContent: obj6[3], content: obj6[4], sourceQuestContent: obj6[5], position: obj6[6] } = trackingCtx);
      tmpResult.captureAdUserAction(obj);
    } else {
      tmpResult = trackQuestEvent;
      obj = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
      obj[0] = quest.id;
      ({ content: obj4[1], ctaContent: obj4[2], position: obj4[3], sourceQuestContent: obj4[4] } = trackingCtx);
      const result = tmpResult.trackQuestContentClicked(obj);
    }
    const hasWatchVideoTasksResult = obj.hasWatchVideoTasks(quest);
    obj1 = { gamePublisher, gameTitle, isTargetedDisclosure: isTargetedDisclosure.isTargetedDisclosure, cosponsorName: null, isVideoQuest: null };
    const cosponsorMetadata = quest.config.cosponsorMetadata;
    let name;
    const obj7 = _modDef5260;
    if (cosponsorMetadata != null) {
      name = cosponsorMetadata.name;
    }
    obj1[3] = name;
    obj1[4] = hasWatchVideoTasksResult;
    obj7.pushLazy(asyncRequireImpl(14458, dependencyMap.paths), obj1, QUEST_DISCLOSURE_MODAL);
    const tmp6 = asyncRequireImpl(14458, dependencyMap.paths);
  },
  hideModal() {
    _modDef5260.popWithKey(QUEST_DISCLOSURE_MODAL);
  }
};