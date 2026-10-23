// === Module 16370: QuestDisclosureModalActionCreators ===

// Module 16370 (QuestDisclosureModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import AdCreativeType from "AdCreativeType" /* 6702 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7783 */;
import captureAdUserAction from "captureAdUserAction" /* 9549 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9552 */;
import AdCreativeUtils from "AdCreativeUtils" /* 16361 */;
import size from "module_2" /* 2 */;

const QUEST_DISCLOSURE_MODAL = "QUEST_DISCLOSURE_MODAL";
const result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default {
  showModal(isTargetedDisclosure) {
    ({ creative, trackingCtx } = isTargetedDisclosure);
    const obj = captureAdUserAction;
    const obj5 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
    const merged = Object.assign(AdCreativeUtils.getCreativeAnalyticsParams(creative));
    ({ ctaContent: obj2.questContentCTA, content: obj2.surfaceId, sourceQuestContent: obj2.sourceQuestContent, position: obj2.questContentPosition } = trackingCtx);
    obj.captureAdUserAction(obj5);
    const type = creative.type;
    const obj4 = ModalActionCreatorsDefault;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj6 = { adCreativeType: null, gamePublisher: null, gameTitle: null, cosponsorName: null, isVideoQuest: null };
      ({ gamePublisher, gameTitle } = creative.quest.config.messages);
      obj6.adCreativeType = AdCreativeType.AdCreativeType.QUEST;
      obj6.gamePublisher = gamePublisher;
      obj6.gameTitle = gameTitle;
      const cosponsorMetadata = creative.quest.config.cosponsorMetadata;
      let name;
      if (cosponsorMetadata != null) {
        name = cosponsorMetadata.name;
      }
      obj6.cosponsorName = name;
      obj6.isVideoQuest = QuestTaskUtils.hasWatchVideoTasks(creative.quest);
      let tmp6 = obj6;
      const tmpResult = QuestTaskUtils;
    } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      const obj7 = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, gamePublisher: creative.bounty.advertiserName };
      tmp6 = obj7;
    }
    const obj8 = {};
    const merged1 = Object.assign(tmp6);
    obj8.isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
    obj4.pushLazy(asyncRequireImpl(16371, dependencyMap.paths), obj8, QUEST_DISCLOSURE_MODAL);
    const tmp5 = asyncRequireImpl(16371, dependencyMap.paths);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(QUEST_DISCLOSURE_MODAL);
  }
};