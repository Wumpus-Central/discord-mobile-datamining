// === Module 15284: QuestDockBountyBody ===

// Module 15284 (QuestDockBountyBody)
import QuestTypes from "QuestTypes" /* 5528 */;
import AdCreativeType from "AdCreativeType" /* 5532 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7830 */;
import captureAdUserAction from "captureAdUserAction" /* 11326 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 11330 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11629 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 15091 */;
import BountiesModalTypes from "BountiesModalTypes" /* 15093 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestDockMode = fn(5525).QuestDockMode;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBody.tsx");

export default noop.memo(function QuestDockBountyBody() {
  const isRendered = noop.useContext(setRestingQuestDockMode(getQuestImpressionId[3])).isRendered;
  let obj = questDockBounty(getQuestImpressionId[4]);
  questDockBounty = obj.useQuestDockBounty();
  let obj1 = questDockBounty(getQuestImpressionId[5]);
  let isQuestDockExpanded = obj1.useIsQuestDockExpanded();
  setRestingQuestDockMode = noop.useContext(questDockBounty(getQuestImpressionId[6]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  getQuestImpressionId = questDockBounty(getQuestImpressionId[7]).useGetQuestImpressionId();
  const items = [questDockBounty, getQuestImpressionId, setRestingQuestDockMode];
  const items1 = [, , ];
  ({ id: arr2[0], cta: arr2[1] } = questDockBounty);
  items1[2] = getQuestImpressionId;
  const callback = noop.useCallback(() => {
    let obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adCreativeId: questDockBounty.id, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() };
    obj.captureAdUserAction(obj);
    obj = { bountyId: questDockBounty.id, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, variant: BountiesModalTypes.BountiesModalVariant.SINGLE_VIDEO, bounty: questDockBounty };
    BountiesModalActionCreatorsDefault.showModal(obj);
    setRestingQuestDockMode(QuestDockMode.COLLAPSED);
  }, items);
  const callback1 = noop.useCallback(() => {
    let obj = { adContentId: questDockBounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: questDockBounty.cta };
    obj = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    const result = obj.openAdGameLinkDirectly(obj, obj);
  }, items1);
  const obj3 = questDockBounty(getQuestImpressionId[7]);
  obj = { assetUrl: setRestingQuestDockMode(getQuestImpressionId[17]), isAnimatedAsset: true, paused: null, withAnimation: null };
  let tmp11 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp11 = !isRendered;
  }
  obj.paused = tmp11;
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  obj = { rewardTile: jsx(questDockBounty(getQuestImpressionId[16]).QuestDockBodyRewardTile, { assetUrl: setRestingQuestDockMode(getQuestImpressionId[17]), isAnimatedAsset: true, paused: null, withAnimation: null }), contentBadge: jsx(tmp(tmp2[18]), {}), title: null, description: null, ctaText: null, onCtaPress: null, secondaryCta: null, withAnimation: isQuestDockExpanded };
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  obj.title = str;
  const intl = tmp3(tmp2[19]).intl;
  obj.description = intl.string(questDockBounty(getQuestImpressionId[19]).t["1uzE2S"]);
  const intl2 = tmp3(tmp2[19]).intl;
  obj.ctaText = intl2.string(questDockBounty(getQuestImpressionId[19]).t["1IPUq9"]);
  obj.onCtaPress = callback;
  obj1 = { variant: "secondary", size: "md", icon: tmp(tmp2[21]), accessibilityLabel: questDockBounty.cta.buttonLabel, onPress: callback1 };
  obj.secondaryCta = jsx(questDockBounty(getQuestImpressionId[20]).IconButton, { variant: "secondary", size: "md", icon: tmp(tmp2[21]), accessibilityLabel: questDockBounty.cta.buttonLabel, onPress: callback1 });
  return jsx(setRestingQuestDockMode(getQuestImpressionId[16]), { rewardTile: jsx(questDockBounty(getQuestImpressionId[16]).QuestDockBodyRewardTile, { assetUrl: setRestingQuestDockMode(getQuestImpressionId[17]), isAnimatedAsset: true, paused: null, withAnimation: null }), contentBadge: jsx(tmp(tmp2[18]), {}), title: null, description: null, ctaText: null, onCtaPress: null, secondaryCta: null, withAnimation: isQuestDockExpanded });
});