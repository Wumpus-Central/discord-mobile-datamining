// === Module 16663: QuestDockPlayableBody ===

// Module 16663 (QuestDockPlayableBody)
import QuestTypes from "QuestTypes" /* 6469 */;
import AdCreativeType from "AdCreativeType" /* 6473 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8342 */;
import captureAdUserAction from "captureAdUserAction" /* 9860 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9863 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9896 */;
import GamesActionCreatorsDefault from "GamesActionCreators" /* 12149 */;
import PlayableActionCreators from "PlayableActionCreators" /* 16664 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestDockMode = fn(6466).QuestDockMode;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockPlayableBody.tsx");

export default noop.memo(function QuestDockPlayableBody() {
  const isRendered = analyticsLocations.useContext(setRestingQuestDockMode(getQuestImpressionId[3])).isRendered;
  questDockPlayable = questDockPlayable(getQuestImpressionId[4]).useQuestDockPlayable();
  let obj = questDockPlayable(getQuestImpressionId[4]);
  let isQuestDockExpanded = questDockPlayable(getQuestImpressionId[5]).useIsQuestDockExpanded();
  setRestingQuestDockMode = analyticsLocations.useContext(questDockPlayable(getQuestImpressionId[6]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj2 = questDockPlayable(getQuestImpressionId[5]);
  getQuestImpressionId = questDockPlayable(getQuestImpressionId[7]).useGetQuestImpressionId();
  analyticsLocations = setRestingQuestDockMode(getQuestImpressionId[8])().analyticsLocations;
  items = [questDockPlayable, analyticsLocations, getQuestImpressionId, setRestingQuestDockMode];
  const items1 = [, , ];
  ({ id: arr2[0], cta: arr2[1] } = questDockPlayable);
  items1[2] = getQuestImpressionId;
  const callback = analyticsLocations.useCallback(() => {
    const obj = captureAdUserAction;
    obj.captureAdUserAction({ type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, adCreativeId: questDockPlayable.id, questContentCTA: AnalyticsTypes.QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() });
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, adCreativeId: questDockPlayable.id, questContentCTA: AnalyticsTypes.QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() };
    PlayableActionCreators.recordPlayableLaunch(questDockPlayable);
    GamesActionCreatorsDefault.launch({ applicationId: questDockPlayable.applicationId, analyticsLocations });
    setRestingQuestDockMode(QuestDockMode.COLLAPSED);
  }, items);
  const callback1 = analyticsLocations.useCallback(() => {
    const obj = QuestPlatformUtils;
    const obj2 = { adContentId: questDockPlayable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: questDockPlayable.cta };
    const result = obj.openAdGameLinkDirectly(obj2, { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
  }, items1);
  let obj3 = questDockPlayable(getQuestImpressionId[7]);
  const obj4 = { assetUrl: setRestingQuestDockMode(getQuestImpressionId[18]), isAnimatedAsset: true, paused: null, withAnimation: null };
  let tmp11 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp11 = !isRendered;
  }
  obj4.paused = tmp11;
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const obj5 = { rewardTile: jsx(questDockPlayable(getQuestImpressionId[17]).QuestDockBodyRewardTile, { assetUrl: setRestingQuestDockMode(getQuestImpressionId[18]), isAnimatedAsset: true, paused: null, withAnimation: null }), contentBadge: jsx(setRestingQuestDockMode(getQuestImpressionId[19]), {}), title: questDockPlayable.productName, description: null, ctaText: null, onCtaPress: null, ctaButtonVariant: "primary", secondaryCta: null };
  obj4.withAnimation = isQuestDockExpanded;
  const intl = tmp3(tmp2[20]).intl;
  obj5.description = intl.string(questDockPlayable(getQuestImpressionId[20]).t.vGP84Q);
  const intl2 = tmp3(tmp2[20]).intl;
  obj5.ctaText = intl2.formatToPlainString(questDockPlayable(getQuestImpressionId[20]).t.dPT1o7, { seconds: questDockPlayable.rewardTimerSeconds });
  obj5.onCtaPress = callback;
  const obj6 = { seconds: questDockPlayable.rewardTimerSeconds };
  const tmp10 = setRestingQuestDockMode(getQuestImpressionId[17]);
  obj5.secondaryCta = jsx(questDockPlayable(getQuestImpressionId[21]).IconButton, { variant: "secondary-overlay", size: "md", icon: setRestingQuestDockMode(getQuestImpressionId[22]), accessibilityLabel: questDockPlayable.cta.buttonLabel, onPress: callback1 });
  return <tmp10 rewardTile={jsx(questDockPlayable(getQuestImpressionId[17]).QuestDockBodyRewardTile, { assetUrl: setRestingQuestDockMode(getQuestImpressionId[18]), isAnimatedAsset: true, paused: null, withAnimation: null })} contentBadge={jsx(setRestingQuestDockMode(getQuestImpressionId[19]), {})} title={questDockPlayable.productName} description={null} ctaText={null} onCtaPress={null} ctaButtonVariant="primary" secondaryCta={null} />;
});