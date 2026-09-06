// === Module 15113: QuestDisclosureModalActionCreators ===

// Module 15113 (QuestDisclosureModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import AnalyticsActions from "AnalyticsActions" /* 7718 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7724 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 11192 */;
import captureAdUserAction from "captureAdUserAction" /* 11193 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 11197 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 15102 */;
import size from "module_2" /* 2 */;

const QUEST_DISCLOSURE_MODAL = "QUEST_DISCLOSURE_MODAL";
let result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default {
  showModal(isTargetedDisclosure) {
    ({ creative, trackingCtx } = isTargetedDisclosure);
    let obj = QuestDockCreativeContext;
    const creativeAnalyticsParams = obj.getCreativeAnalyticsParams(creative);
    let obj1 = AdAnalyticsInterfaceExperiment;
    if (obj1.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_disclosure_modal")) {
      let tmpResult = captureAdUserAction;
      obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
      const merged = Object.assign(creativeAnalyticsParams);
      ({ ctaContent: obj8.questContentCTA, content: obj8.surfaceId, sourceQuestContent: obj8.sourceQuestContent, position: obj8.questContentPosition } = trackingCtx);
      tmpResult.captureAdUserAction(obj);
    } else if (creativeAnalyticsParams.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
      tmpResult = AnalyticsActions;
      obj = { questId: creativeAnalyticsParams.adCreativeId, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
      ({ content: obj6.questContent, ctaContent: obj6.questContentCTA, position: obj6.questContentPosition, sourceQuestContent: obj6.sourceQuestContent } = trackingCtx);
      const result = tmpResult.trackQuestContentClicked(obj);
    } else {
      obj1 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
      ({ adCreativeId: obj4.adContentId, adCreativeType: obj4.adCreativeType } = creativeAnalyticsParams);
      ({ content: obj4.questContent, ctaContent: obj4.questContentCTA, position: obj4.questContentPosition, sourceQuestContent: obj4.sourceQuestContent } = trackingCtx);
      const result1 = AnalyticsActions.trackAdContentClicked(obj1);
      const tmpResult1 = AnalyticsActions;
    }
    const type = creative.type;
    const obj9 = ModalActionCreatorsDefault;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj2 = { adCreativeType: null, gamePublisher: null, gameTitle: null, cosponsorName: null, isVideoQuest: null };
      ({ gamePublisher, gameTitle } = creative.quest.config.messages);
      obj2.adCreativeType = AdCreativeType.AdCreativeType.QUEST;
      obj2.gamePublisher = gamePublisher;
      obj2.gameTitle = gameTitle;
      const cosponsorMetadata = creative.quest.config.cosponsorMetadata;
      let name;
      if (cosponsorMetadata != null) {
        name = cosponsorMetadata.name;
      }
      obj2.cosponsorName = name;
      obj2.isVideoQuest = QuestTaskUtils.hasWatchVideoTasks(creative.quest);
      let tmp11 = obj2;
      const tmpResult2 = QuestTaskUtils;
    } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      const obj3 = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, gamePublisher: creative.bounty.advertiserName };
      tmp11 = obj3;
    }
    const obj4 = {};
    const merged1 = Object.assign(tmp11);
    obj4.isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
    obj9.pushLazy(asyncRequireImpl(15114, dependencyMap.paths), obj4, QUEST_DISCLOSURE_MODAL);
    const tmp10 = asyncRequireImpl(15114, dependencyMap.paths);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(QUEST_DISCLOSURE_MODAL);
  }
};