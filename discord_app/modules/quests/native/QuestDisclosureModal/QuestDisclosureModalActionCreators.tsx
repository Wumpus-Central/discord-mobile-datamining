// === Module 15113: ? ===

// Module 15113
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import apexExperiment from "apexExperiment" /* 11192 */;
import getCreativeAnalyticsParams from "getCreativeAnalyticsParams" /* 15102 */;

const QUEST_DISCLOSURE_MODAL = "QUEST_DISCLOSURE_MODAL";
let result = set.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default {
  showModal(isTargetedDisclosure) {
    ({ creative, trackingCtx } = isTargetedDisclosure);
    let obj = getCreativeAnalyticsParams;
    const creativeAnalyticsParams = obj.getCreativeAnalyticsParams(creative);
    obj1 = apexExperiment;
    if (obj1.shouldMigrateToAdAnalyticsInterface(apexExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_disclosure_modal")) {
      let tmpResult = tmp(11193);
      obj = { type: null };
      obj[0] = tmp(11197).AdUserActionType.CLICK_INTERNAL;
      const merged = Object.assign(creativeAnalyticsParams);
      ({ ctaContent: obj8.questContentCTA, content: obj8.surfaceId, sourceQuestContent: obj8.sourceQuestContent, position: obj8.questContentPosition } = trackingCtx);
      tmpResult.captureAdUserAction(obj);
    } else if (creativeAnalyticsParams.adCreativeType === tmp(5451).AdCreativeType.QUEST) {
      tmpResult = tmp(7718);
      obj = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
      obj[0] = creativeAnalyticsParams.adCreativeId;
      ({ content: obj6[1], ctaContent: obj6[2], position: obj6[3], sourceQuestContent: obj6[4] } = trackingCtx);
      const result = tmpResult.trackQuestContentClicked(obj);
    } else {
      obj1 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
      ({ adCreativeId: obj4[0], adCreativeType: obj4[1] } = creativeAnalyticsParams);
      ({ content: obj4[2], ctaContent: obj4[3], position: obj4[4], sourceQuestContent: obj4[5] } = trackingCtx);
      const result1 = tmp(7718).trackAdContentClicked(obj1);
      const tmpResult1 = tmp(7718);
    }
    const type = creative.type;
    const obj9 = _modDef4763;
    const tmp2 = dependencyMap;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj2 = { adCreativeType: null, gamePublisher: null, gameTitle: null, cosponsorName: null, isVideoQuest: null };
      ({ gamePublisher, gameTitle } = creative.quest.config.messages);
      obj2[0] = tmp(5451).AdCreativeType.QUEST;
      obj2[1] = gamePublisher;
      obj2[2] = gameTitle;
      const cosponsorMetadata = creative.quest.config.cosponsorMetadata;
      let name;
      if (cosponsorMetadata != null) {
        name = cosponsorMetadata.name;
      }
      obj2[3] = name;
      obj2[4] = tmp(7724).hasWatchVideoTasks(creative.quest);
      let tmp11 = obj2;
      const tmpResult2 = tmp(7724);
    } else if (tmp(5451).AdCreativeType.BOUNTY === type) {
      const obj3 = { adCreativeType: null, gamePublisher: null };
      obj3[0] = tmp(5451).AdCreativeType.BOUNTY;
      obj3[1] = creative.bounty.advertiserName;
      tmp11 = obj3;
    }
    const obj4 = {};
    const merged1 = Object.assign(tmp11);
    obj4.isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
    obj9.pushLazy(asyncRequireImpl(15114, dependencyMap.paths), obj4, QUEST_DISCLOSURE_MODAL);
  },
  hideModal() {
    _modDef4763.popWithKey(QUEST_DISCLOSURE_MODAL);
  }
};