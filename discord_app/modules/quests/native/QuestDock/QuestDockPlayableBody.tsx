// discord_app/modules/quests/native/QuestDock/QuestDockPlayableBody.tsx
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const QuestDockMode = fn(6840).QuestDockMode;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockPlayableBody.tsx");

export default noop.memo(function QuestDockPlayableBody() {
  const isRendered = noop.useContext(setRestingQuestDockMode(getQuestImpressionId[4])).isRendered;
  questDockPlayable = questDockPlayable(getQuestImpressionId[5]).useQuestDockPlayable();
  let obj = questDockPlayable(getQuestImpressionId[5]);
  let isQuestDockExpanded = questDockPlayable(getQuestImpressionId[6]).useIsQuestDockExpanded();
  setRestingQuestDockMode = noop.useContext(
    questDockPlayable(getQuestImpressionId[7]).QuestDockExternalCoordinationContext,
  ).setRestingQuestDockMode;
  let obj2 = questDockPlayable(getQuestImpressionId[6]);
  getQuestImpressionId = questDockPlayable(getQuestImpressionId[8]).useGetQuestImpressionId();
  const analyticsLocations = setRestingQuestDockMode(getQuestImpressionId[9])().analyticsLocations;
  items = [questDockPlayable, analyticsLocations, getQuestImpressionId, setRestingQuestDockMode];
  const items1 = [, ,];
  ({ id: arr2[0], cta: arr2[1] } = questDockPlayable);
  items1[2] = getQuestImpressionId;
  const callback = noop.useCallback(
    analyticsLocations(function* () {
      closure_3 = tmp3;
      closure_4 = tmp19;
      const tmp25 = getQuestImpressionId();
      recordPlayableLaunchResult(9815).captureAdUserAction({
        type: recordPlayableLaunchResult(9819).AdUserActionType.CLICK_INTERNAL,
        adCreativeType: recordPlayableLaunchResult(6847).AdCreativeType.PLAYABLE,
        adCreativeId: questDockPlayable.id,
        questContentCTA: recordPlayableLaunchResult(8350).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY,
        surfaceId: recordPlayableLaunchResult(6843).QuestContent.QUEST_BAR_MOBILE,
        sourceQuestContent: recordPlayableLaunchResult(6843).QuestContent.QUEST_BAR_MOBILE,
        impressionId: tmp25,
      });
      recordPlayableLaunchResult = recordPlayableLaunchResult(16759).recordPlayableLaunch(questDockPlayable, tmp25);
      closure_132_0 = recordPlayableLaunchResult;
      constants = 1;
      setRestingQuestDockMode(constants.COLLAPSED);
      const tmp52 = recordPlayableLaunchResult(16759);
      const completePlayableLaunch = tmp52.completePlayableLaunch;
      yield completePlayableLaunch(12241).launch({
        applicationId: questDockPlayable.applicationId,
        analyticsLocations,
      });
      if (1 === tmp7) {
        constants = 0;
        const result = recordPlayableLaunchResult(16759).completePlayableLaunch(closure_132_0, false);
        c7 = 3;
        recordPlayableLaunchResult(16759);
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 !== 2) {
        completePlayableLaunch(recordPlayableLaunchResult, value);
        constants = 0;
      }
      constants = 0;
      return value;
    }),
    items,
  );
  const callback1 = noop.useCallback(() => {
    const obj = QuestPlatformUtils;
    const obj2 = {
      adContentId: questDockPlayable.id,
      adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE,
      cta: questDockPlayable.cta,
    };
    const result = obj.openAdGameLinkDirectly(obj2, {
      content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
      impressionId: getQuestImpressionId(),
      sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
    });
  }, items1);
  const obj3 = questDockPlayable(getQuestImpressionId[8]);
  const obj4 = {
    assetUrl: setRestingQuestDockMode(getQuestImpressionId[19]),
    isAnimatedAsset: true,
    paused: null,
    withAnimation: null,
  };
  let tmp11 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp11 = !isRendered;
  }
  obj4.paused = tmp11;
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const obj5 = {
    rewardTile: jsx(questDockPlayable(getQuestImpressionId[18]).QuestDockBodyRewardTile, {
      assetUrl: setRestingQuestDockMode(getQuestImpressionId[19]),
      isAnimatedAsset: true,
      paused: null,
      withAnimation: null,
    }),
    contentBadge: jsx(setRestingQuestDockMode(getQuestImpressionId[20]), {}),
    title: questDockPlayable.productName,
    description: null,
    ctaText: null,
    onCtaPress: null,
    ctaButtonVariant: "primary",
    secondaryCta: null,
  };
  obj4.withAnimation = isQuestDockExpanded;
  const intl = tmp3(tmp2[21]).intl;
  obj5.description = intl.string(questDockPlayable(getQuestImpressionId[21]).t.vGP84Q);
  const intl2 = tmp3(tmp2[21]).intl;
  obj5.ctaText = intl2.formatToPlainString(questDockPlayable(getQuestImpressionId[21]).t.dPT1o7, {
    seconds: questDockPlayable.rewardTimerSeconds,
  });
  obj5.onCtaPress = callback;
  const obj6 = { seconds: questDockPlayable.rewardTimerSeconds };
  const tmp10 = setRestingQuestDockMode(getQuestImpressionId[18]);
  obj5.secondaryCta = jsx(questDockPlayable(getQuestImpressionId[22]).IconButton, {
    variant: "secondary-overlay",
    size: "md",
    icon: setRestingQuestDockMode(getQuestImpressionId[23]),
    accessibilityLabel: questDockPlayable.cta.buttonLabel,
    onPress: callback1,
  });
  return (
    <tmp10
      rewardTile={jsx(questDockPlayable(getQuestImpressionId[18]).QuestDockBodyRewardTile, {
        assetUrl: setRestingQuestDockMode(getQuestImpressionId[19]),
        isAnimatedAsset: true,
        paused: null,
        withAnimation: null,
      })}
      contentBadge={jsx(setRestingQuestDockMode(getQuestImpressionId[20]), {})}
      title={questDockPlayable.productName}
      description={null}
      ctaText={null}
      onCtaPress={null}
      ctaButtonVariant="primary"
      secondaryCta={null}
    />
  );
});
