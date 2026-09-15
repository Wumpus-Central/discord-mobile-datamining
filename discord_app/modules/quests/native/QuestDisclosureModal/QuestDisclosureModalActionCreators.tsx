// === Module 15204: QuestDisclosureModalActionCreators ===

// Module 15204 (QuestDisclosureModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4842 */;
import AdCreativeType from "AdCreativeType" /* 5536 */;
import AnalyticsActions from "AnalyticsActions" /* 7823 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7829 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 11330 */;
import captureAdUserAction from "captureAdUserAction" /* 11331 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 11335 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 15193 */;
import size from "module_2" /* 2 */;

const QUEST_DISCLOSURE_MODAL = "QUEST_DISCLOSURE_MODAL";
let result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default {
  showModal(isTargetedDisclosure) {
    ({ creative, trackingCtx } = isTargetedDisclosure);
    const creativeAnalyticsParams = QuestDockCreativeContext.getCreativeAnalyticsParams(creative);
    if (obj2.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_disclosure_modal")) {
      const obj3 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
      const merged = Object.assign(creativeAnalyticsParams);
      ({ ctaContent: obj8.questContentCTA, content: obj8.surfaceId, sourceQuestContent: obj8.sourceQuestContent, position: obj8.questContentPosition } = trackingCtx);
      captureAdUserAction.captureAdUserAction(obj3);
      const tmpResult = captureAdUserAction;
    } else if (creativeAnalyticsParams.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
      const obj5 = { questId: creativeAnalyticsParams.adCreativeId, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
      ({ content: obj6.questContent, ctaContent: obj6.questContentCTA, position: obj6.questContentPosition, sourceQuestContent: obj6.sourceQuestContent } = trackingCtx);
      const result = AnalyticsActions.trackQuestContentClicked(obj5);
      const tmpResult4 = AnalyticsActions;
    } else {
      ({ adCreativeId: obj4.adContentId, adCreativeType: obj4.adCreativeType } = creativeAnalyticsParams);
      ({ content: obj4.questContent, ctaContent: obj4.questContentCTA, position: obj4.questContentPosition, sourceQuestContent: obj4.sourceQuestContent } = trackingCtx);
      const result1 = AnalyticsActions.trackAdContentClicked({ adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null });
      const obj7 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
      const tmpResult5 = AnalyticsActions;
    }
    obj2 = AdAnalyticsInterfaceExperiment;
    const type = creative.type;
    const obj9 = ModalActionCreatorsDefault;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj10 = { adCreativeType: null, gamePublisher: null, gameTitle: null, cosponsorName: null, isVideoQuest: null };
      ({ gamePublisher, gameTitle } = creative.quest.config.messages);
      obj10.adCreativeType = AdCreativeType.AdCreativeType.QUEST;
      obj10.gamePublisher = gamePublisher;
      obj10.gameTitle = gameTitle;
      const cosponsorMetadata = creative.quest.config.cosponsorMetadata;
      let name;
      if (cosponsorMetadata != null) {
        name = cosponsorMetadata.name;
      }
      obj10.cosponsorName = name;
      obj10.isVideoQuest = QuestTaskUtils.hasWatchVideoTasks(creative.quest);
      let tmp11 = obj10;
      const tmpResult6 = QuestTaskUtils;
    } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      const obj11 = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, gamePublisher: creative.bounty.advertiserName };
      tmp11 = obj11;
    }
    const obj12 = {};
    const merged1 = Object.assign(tmp11);
    obj12.isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
    obj9.pushLazy(asyncRequireImpl(15205, dependencyMap.paths), obj12, QUEST_DISCLOSURE_MODAL);
    const tmp10 = asyncRequireImpl(15205, dependencyMap.paths);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(QUEST_DISCLOSURE_MODAL);
  }
};