// discord_app/modules/quests/native/QuestDock/QuestDockBountyBody.tsx
import util from "../../../../intl/index.native.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestTaskUtils from "../../utils/QuestTaskUtils.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import captureAdUserAction from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import MobileQuestVideoWatchCtaCopy from "../../utils/MobileQuestVideoWatchCtaCopy.tsx";
import BountiesModalActionCreatorsDefault from "../BountiesModal/BountiesModalActionCreators.tsx";
import BountiesModalTypes from "../BountiesModal/BountiesModalTypes.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const QuestDockMode = fn(5747).QuestDockMode;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBody.tsx");

export default noop.memo(function QuestDockBountyBody() {
  const isRendered = noop.useContext(setRestingQuestDockMode(getQuestImpressionId[3])).isRendered;
  questDockBounty = questDockBounty(getQuestImpressionId[4]).useQuestDockBounty();
  let obj = questDockBounty(getQuestImpressionId[4]);
  let isQuestDockExpanded = questDockBounty(getQuestImpressionId[5]).useIsQuestDockExpanded();
  setRestingQuestDockMode = noop.useContext(
    questDockBounty(getQuestImpressionId[6]).QuestDockExternalCoordinationContext,
  ).setRestingQuestDockMode;
  let obj2 = questDockBounty(getQuestImpressionId[5]);
  getQuestImpressionId = questDockBounty(getQuestImpressionId[7]).useGetQuestImpressionId();
  const items = [questDockBounty.videoDurationSeconds];
  const items1 = [questDockBounty, getQuestImpressionId, setRestingQuestDockMode];
  const memo = noop.useMemo(() => {
    let num = questDockBounty.videoDurationSeconds;
    if (num == null) {
      num = 0;
    }
    if (num <= 0) {
      const intl = util.intl;
      let stringResult = intl.string(util.t.kfks9Y);
    } else {
      const obj = MobileQuestVideoWatchCtaCopy;
      const obj3 = { progressSeconds: 0, targetSeconds: num };
      stringResult = obj.getBountyWatchCtaText(QuestTaskUtils.getWatchVideoTaskDetailsFromProgress(obj3));
    }
    return stringResult;
  }, items);
  const items2 = [, ,];
  ({ id: arr3[0], cta: arr3[1] } = questDockBounty);
  items2[2] = getQuestImpressionId;
  const callback = noop.useCallback(() => {
    const obj = captureAdUserAction;
    obj.captureAdUserAction({
      type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      adCreativeId: questDockBounty.id,
      questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY,
      surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      impressionId: getQuestImpressionId(),
    });
    const obj2 = {
      type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      adCreativeId: questDockBounty.id,
      questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY,
      surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      impressionId: getQuestImpressionId(),
    };
    const obj3 = BountiesModalActionCreatorsDefault;
    obj3.showModal({
      bountyId: questDockBounty.id,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      variant: BountiesModalTypes.BountiesModalVariant.SINGLE_VIDEO,
      bounty: questDockBounty,
    });
    setRestingQuestDockMode(QuestDockMode.COLLAPSED);
  }, items1);
  const callback1 = noop.useCallback(() => {
    const obj = QuestPlatformUtils;
    const obj2 = {
      adContentId: questDockBounty.id,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      cta: questDockBounty.cta,
    };
    const result = obj.openAdGameLinkDirectly(obj2, {
      content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
      impressionId: getQuestImpressionId(),
      sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
    });
  }, items2);
  let obj3 = questDockBounty(getQuestImpressionId[7]);
  const obj4 = {
    assetUrl: setRestingQuestDockMode(getQuestImpressionId[20]),
    isAnimatedAsset: true,
    paused: null,
    withAnimation: null,
  };
  let tmp12 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp12 = !isRendered;
  }
  obj4.paused = tmp12;
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const obj5 = {
    rewardTile: jsx(questDockBounty(getQuestImpressionId[19]).QuestDockBodyRewardTile, {
      assetUrl: setRestingQuestDockMode(getQuestImpressionId[20]),
      isAnimatedAsset: true,
      paused: null,
      withAnimation: null,
    }),
    contentBadge: jsx(setRestingQuestDockMode(getQuestImpressionId[21]), {}),
    title: null,
    description: null,
    ctaText: null,
    onCtaPress: null,
    ctaButtonVariant: "primary",
    secondaryCta: null,
  };
  obj4.withAnimation = isQuestDockExpanded;
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  obj5.title = str;
  let intl = tmp3(tmp2[8]).intl;
  obj5.description = intl.string(questDockBounty(getQuestImpressionId[8]).t["1uzE2S"]);
  obj5.ctaText = memo;
  obj5.onCtaPress = callback;
  const tmp11 = setRestingQuestDockMode(getQuestImpressionId[19]);
  obj5.secondaryCta = jsx(questDockBounty(getQuestImpressionId[22]).IconButton, {
    variant: "secondary",
    size: "md",
    icon: setRestingQuestDockMode(getQuestImpressionId[23]),
    accessibilityLabel: questDockBounty.cta.buttonLabel,
    onPress: callback1,
  });
  return (
    <tmp11
      rewardTile={jsx(questDockBounty(getQuestImpressionId[19]).QuestDockBodyRewardTile, {
        assetUrl: setRestingQuestDockMode(getQuestImpressionId[20]),
        isAnimatedAsset: true,
        paused: null,
        withAnimation: null,
      })}
      contentBadge={jsx(setRestingQuestDockMode(getQuestImpressionId[21]), {})}
      title={null}
      description={null}
      ctaText={null}
      onCtaPress={null}
      ctaButtonVariant="primary"
      secondaryCta={null}
    />
  );
});
