// === Module 15295: QuestDockBountyBody ===

// Module 15295 (QuestDockBountyBody)
import util from "util" /* 1115 */;
import QuestTypes from "QuestTypes" /* 5532 */;
import AdCreativeType from "AdCreativeType" /* 5536 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7829 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7833 */;
import captureAdUserAction from "captureAdUserAction" /* 11331 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 11335 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11634 */;
import MobileQuestVideoWatchCtaCopy from "MobileQuestVideoWatchCtaCopy" /* 11651 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 15102 */;
import BountiesModalTypes from "BountiesModalTypes" /* 15104 */;
import noop from "module_19" /* 19 */;
import BountyStore from "BountyStore" /* 7807 */;

require = fn;
const QuestDockMode = fn(5529).QuestDockMode;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBody.tsx");

export default noop.memo(function QuestDockBountyBody() {
  const isRendered = stateFromStores.useContext(setRestingQuestDockMode(getQuestImpressionId[4])).isRendered;
  questDockBounty = questDockBounty(getQuestImpressionId[5]).useQuestDockBounty();
  let obj = questDockBounty(getQuestImpressionId[5]);
  let isQuestDockExpanded = questDockBounty(getQuestImpressionId[6]).useIsQuestDockExpanded();
  setRestingQuestDockMode = stateFromStores.useContext(questDockBounty(getQuestImpressionId[7]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj2 = questDockBounty(getQuestImpressionId[6]);
  getQuestImpressionId = questDockBounty(getQuestImpressionId[8]).useGetQuestImpressionId();
  let obj3 = questDockBounty(getQuestImpressionId[8]);
  const items = [BountyStore];
  const items1 = [questDockBounty.id];
  stateFromStores = questDockBounty(getQuestImpressionId[9]).useStateFromStores(items, () => BountyStore.getBountyVideoProgress(questDockBounty.id), items1);
  const items2 = [stateFromStores];
  const items3 = [questDockBounty, getQuestImpressionId, setRestingQuestDockMode];
  const memo = stateFromStores.useMemo(() => {
    let num;
    if (stateFromStores != null) {
      num = stateFromStores.maxTimestampSec;
    }
    if (num == null) {
      num = 0;
    }
    let num2;
    if (stateFromStores != null) {
      num2 = stateFromStores.duration;
    }
    if (num2 == null) {
      num2 = 0;
    }
    if (num2 <= 0) {
      const intl = util.intl;
      let stringResult = intl.string(util.t.kfks9Y);
    } else {
      const obj = MobileQuestVideoWatchCtaCopy;
      const obj3 = { progressSeconds: num, targetSeconds: num2 };
      stringResult = obj.getVideoQuestWatchCtaText(QuestTaskUtils.getWatchVideoTaskDetailsFromProgress(obj3));
    }
    return stringResult;
  }, items2);
  const items4 = [, , ];
  ({ id: arr5[0], cta: arr5[1] } = questDockBounty);
  items4[2] = getQuestImpressionId;
  const callback = stateFromStores.useCallback(() => {
    const obj = captureAdUserAction;
    obj.captureAdUserAction({ type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adCreativeId: questDockBounty.id, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() });
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adCreativeId: questDockBounty.id, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() };
    const obj3 = BountiesModalActionCreatorsDefault;
    obj3.showModal({ bountyId: questDockBounty.id, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, variant: BountiesModalTypes.BountiesModalVariant.SINGLE_VIDEO, bounty: questDockBounty });
    setRestingQuestDockMode(QuestDockMode.COLLAPSED);
  }, items3);
  const callback1 = stateFromStores.useCallback(() => {
    const obj = QuestPlatformUtils;
    const obj2 = { adContentId: questDockBounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: questDockBounty.cta };
    const result = obj.openAdGameLinkDirectly(obj2, { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
  }, items4);
  const obj4 = questDockBounty(getQuestImpressionId[9]);
  const obj5 = { assetUrl: setRestingQuestDockMode(getQuestImpressionId[22]), isAnimatedAsset: true, paused: null, withAnimation: null };
  let tmp13 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp13 = !isRendered;
  }
  obj5.paused = tmp13;
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const obj6 = { rewardTile: jsx(questDockBounty(getQuestImpressionId[21]).QuestDockBodyRewardTile, { assetUrl: setRestingQuestDockMode(getQuestImpressionId[22]), isAnimatedAsset: true, paused: null, withAnimation: null }), contentBadge: jsx(setRestingQuestDockMode(getQuestImpressionId[23]), {}), title: null, description: null, ctaText: null, onCtaPress: null, secondaryCta: null };
  obj5.withAnimation = isQuestDockExpanded;
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  obj6.title = str;
  let intl = tmp3(tmp2[10]).intl;
  obj6.description = intl.string(questDockBounty(getQuestImpressionId[10]).t["1uzE2S"]);
  obj6.ctaText = memo;
  obj6.onCtaPress = callback;
  const tmp12 = setRestingQuestDockMode(getQuestImpressionId[21]);
  obj6.secondaryCta = jsx(questDockBounty(getQuestImpressionId[24]).IconButton, { variant: "secondary", size: "md", icon: setRestingQuestDockMode(getQuestImpressionId[25]), accessibilityLabel: questDockBounty.cta.buttonLabel, onPress: callback1 });
  return <tmp12 rewardTile={jsx(questDockBounty(getQuestImpressionId[21]).QuestDockBodyRewardTile, { assetUrl: setRestingQuestDockMode(getQuestImpressionId[22]), isAnimatedAsset: true, paused: null, withAnimation: null })} contentBadge={jsx(setRestingQuestDockMode(getQuestImpressionId[23]), {})} title={null} description={null} ctaText={null} onCtaPress={null} secondaryCta={null} />;
});