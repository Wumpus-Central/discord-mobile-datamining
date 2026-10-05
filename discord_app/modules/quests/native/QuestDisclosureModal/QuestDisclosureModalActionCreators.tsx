// discord_app/modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import QuestTaskUtils from "../../utils/QuestTaskUtils.tsx";
import captureAdUserAction2 from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../../experiments/AdAnalyticsInterfaceExperiment.tsx";
import AdCreativeUtils from "../../../ads/utils/AdCreativeUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const QUEST_DISCLOSURE_MODAL = "QUEST_DISCLOSURE_MODAL";
let obj = {
  showModal(isTargetedDisclosure) {
    let creative;
    let gamePublisher;
    let gameTitle;
    let name;
    let tmp13;
    let tmpResult6;
    let trackingCtx;
    ({ creative, trackingCtx } = isTargetedDisclosure);
    isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
    const obj = AdCreativeUtils;
    const creativeAnalyticsParams = obj.getCreativeAnalyticsParams(creative);
    const obj2 = AdAnalyticsInterfaceExperiment;
    if (
      obj2.shouldMigrateToAdAnalyticsInterface(
        AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
        "quest_disclosure_modal",
      )
    ) {
      const obj3 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
      const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
      captureAdUserAction2;
      const merged = Object.assign(creativeAnalyticsParams);
      ({
        ctaContent: obj7.questContentCTA,
        content: obj7.surfaceId,
        sourceQuestContent: obj7.sourceQuestContent,
        position: obj7.questContentPosition,
      } = trackingCtx);
      captureAdUserAction(obj3);
    } else if (creativeAnalyticsParams.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
      const obj5 = {
        questId: creativeAnalyticsParams.adCreativeId,
        questContent: null,
        questContentCTA: null,
        questContentPosition: null,
        sourceQuestContent: null,
      };
      ({
        content: obj6.questContent,
        ctaContent: obj6.questContentCTA,
        position: obj6.questContentPosition,
        sourceQuestContent: obj6.sourceQuestContent,
      } = trackingCtx);
      const tmpResult4 = AnalyticsActions;
      const result = tmpResult4.trackQuestContentClicked(obj5);
    } else {
      const obj8 = {
        adContentId: null,
        adCreativeType: null,
        questContent: null,
        questContentCTA: null,
        questContentPosition: null,
        sourceQuestContent: null,
      };
      ({ adCreativeId: obj4.adContentId, adCreativeType: obj4.adCreativeType } = creativeAnalyticsParams);
      ({
        content: obj4.questContent,
        ctaContent: obj4.questContentCTA,
        position: obj4.questContentPosition,
        sourceQuestContent: obj4.sourceQuestContent,
      } = trackingCtx);
      const tmpResult5 = AnalyticsActions;
      const result1 = tmpResult5.trackAdContentClicked(obj8);
    }
    const pushLazy = ModalActionCreatorsDefault.pushLazy;
    const type = creative.type;
    ModalActionCreatorsDefault;
    const tmp12 = asyncRequire(14915, dependencyMap.paths);
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj9 = {
        adCreativeType: AdCreativeType.AdCreativeType.QUEST,
        gamePublisher,
        gameTitle,
        cosponsorName: name,
        isVideoQuest: tmpResult6.hasWatchVideoTasks(creative.quest),
      };
      ({ gamePublisher, gameTitle } = creative.quest.config.messages);
      const cosponsorMetadata = creative.quest.config.cosponsorMetadata;
      name = undefined;
      if (cosponsorMetadata != null) {
        name = cosponsorMetadata.name;
      }
      tmp13 = obj9;
      tmpResult6 = QuestTaskUtils;
    } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      tmp13 = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, gamePublisher: creative.bounty.advertiserName };
      const obj10 = {
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        gamePublisher: creative.bounty.advertiserName,
      };
    }
    const obj11 = { isTargetedDisclosure };
    const merged1 = Object.assign(tmp13);
    pushLazy(tmp12, obj11, QUEST_DISCLOSURE_MODAL);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(QUEST_DISCLOSURE_MODAL);
  },
};
let result = size.fileFinishedImporting(
  "modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx",
);

export default obj;
