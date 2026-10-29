// discord_app/modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx
import asyncRequireImpl from "../../../../../_runtime/02000_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestTaskUtils from "../../utils/QuestTaskUtils.tsx";
import captureAdUserAction from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import AdCreativeUtils from "../../../ads/utils/AdCreativeUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const QUEST_DISCLOSURE_MODAL = "QUEST_DISCLOSURE_MODAL";
const result = size.fileFinishedImporting(
  "modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx",
);

export default {
  showModal(isTargetedDisclosure) {
    ({ creative, trackingCtx } = isTargetedDisclosure);
    const obj = captureAdUserAction;
    const obj5 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
    const merged = Object.assign(AdCreativeUtils.getCreativeAnalyticsParams(creative));
    ({
      ctaContent: obj2.questContentCTA,
      content: obj2.surfaceId,
      sourceQuestContent: obj2.sourceQuestContent,
      position: obj2.questContentPosition,
    } = trackingCtx);
    obj.captureAdUserAction(obj5);
    const type = creative.type;
    const obj4 = ModalActionCreatorsDefault;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj6 = {
        adCreativeType: null,
        gamePublisher: null,
        gameTitle: null,
        cosponsorName: null,
        isVideoQuest: null,
      };
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
      const obj7 = {
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        gamePublisher: creative.bounty.advertiserName,
      };
      tmp6 = obj7;
    } else if (AdCreativeType.AdCreativeType.PLAYABLE === type) {
      const obj8 = {
        adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE,
        gamePublisher: creative.playable.advertiserName,
      };
      tmp6 = obj8;
    }
    const obj9 = {};
    const merged1 = Object.assign(tmp6);
    obj9.isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
    obj4.pushLazy(asyncRequireImpl(16964, dependencyMap.paths), obj9, QUEST_DISCLOSURE_MODAL);
    const tmp5 = asyncRequireImpl(16964, dependencyMap.paths);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(QUEST_DISCLOSURE_MODAL);
  },
};
