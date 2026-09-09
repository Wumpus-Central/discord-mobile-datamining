// === Module 15234: QuestDockBountyBody ===

// Module 15234 (QuestDockBountyBody)
import QuestTypes from "QuestTypes" /* 5461 */;
import AdCreativeType from "AdCreativeType" /* 5465 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7742 */;
import captureAdUserAction from "captureAdUserAction" /* 11225 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 11229 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 15031 */;
import BountiesModalTypes from "BountiesModalTypes" /* 15033 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestDockMode = fn(5458).QuestDockMode;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBody.tsx");

export default noop.memo(function QuestDockBountyBody() {
  const isRendered = noop.useContext(setRestingQuestDockMode(getQuestImpressionId[3])).isRendered;
  let obj = questDockBounty(getQuestImpressionId[4]);
  questDockBounty = obj.useQuestDockBounty();
  let isQuestDockExpanded = questDockBounty(getQuestImpressionId[5]).useIsQuestDockExpanded();
  setRestingQuestDockMode = noop.useContext(questDockBounty(getQuestImpressionId[6]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const obj2 = questDockBounty(getQuestImpressionId[5]);
  getQuestImpressionId = questDockBounty(getQuestImpressionId[7]).useGetQuestImpressionId();
  const items = [questDockBounty, getQuestImpressionId, setRestingQuestDockMode];
  const callback = noop.useCallback(() => {
    let obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adCreativeId: questDockBounty.id, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() };
    obj.captureAdUserAction(obj);
    obj = { bountyId: questDockBounty.id, variant: BountiesModalTypes.BountiesModalVariant.SINGLE_VIDEO, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    BountiesModalActionCreatorsDefault.showModal(obj);
    setRestingQuestDockMode(QuestDockMode.COLLAPSED);
  }, items);
  const obj3 = questDockBounty(getQuestImpressionId[7]);
  obj = { assetUrl: setRestingQuestDockMode(getQuestImpressionId[16]), isAnimatedAsset: true, paused: null, withAnimation: null };
  let tmp9 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp9 = !isRendered;
  }
  obj.paused = tmp9;
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  obj = { rewardTile: jsx(questDockBounty(getQuestImpressionId[15]).QuestDockBodyRewardTile, { assetUrl: setRestingQuestDockMode(getQuestImpressionId[16]), isAnimatedAsset: true, paused: null, withAnimation: null }), title: null, description: null, ctaText: null, onCtaPress: null, withAnimation: isQuestDockExpanded };
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  obj.title = str;
  const intl = tmp2(tmp[17]).intl;
  obj.description = intl.string(questDockBounty(getQuestImpressionId[17]).t["1uzE2S"]);
  const intl2 = tmp2(tmp[17]).intl;
  obj.ctaText = intl2.string(questDockBounty(getQuestImpressionId[17]).t["1IPUq9"]);
  obj.onCtaPress = callback;
  return jsx(setRestingQuestDockMode(getQuestImpressionId[15]), { rewardTile: jsx(questDockBounty(getQuestImpressionId[15]).QuestDockBodyRewardTile, { assetUrl: setRestingQuestDockMode(getQuestImpressionId[16]), isAnimatedAsset: true, paused: null, withAnimation: null }), title: null, description: null, ctaText: null, onCtaPress: null, withAnimation: isQuestDockExpanded });
});