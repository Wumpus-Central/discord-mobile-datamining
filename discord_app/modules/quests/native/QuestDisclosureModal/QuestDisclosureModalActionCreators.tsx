// === Module 17017: QuestDisclosureModalActionCreators ===

// Module 17017 (QuestDisclosureModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import AdCreativeType from "AdCreativeType" /* 6782 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7861 */;
import captureAdUserAction from "captureAdUserAction" /* 9664 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9667 */;
import AdCreativeUtils from "AdCreativeUtils" /* 17008 */;
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
    } else if (AdCreativeType.AdCreativeType.PLAYABLE === type) {
      const obj8 = { adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, gamePublisher: creative.playable.advertiserName };
      tmp6 = obj8;
    }
    const obj9 = {};
    const merged1 = Object.assign(tmp6);
    obj9.isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
    obj4.pushLazy(asyncRequireImpl(17018, dependencyMap.paths), obj9, QUEST_DISCLOSURE_MODAL);
    const tmp5 = asyncRequireImpl(17018, dependencyMap.paths);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(QUEST_DISCLOSURE_MODAL);
  }
};