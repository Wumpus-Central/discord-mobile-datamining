// discord_app/modules/quests/native/QuestCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import design_shared from "../../../../discord_common/js/packages/design/shared.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import MonitoringAgentDefault from "../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../lib/analytics/AnalyticsTypes.tsx";
import captureAdUserAction from "../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../ads/analytics/captureAdUserActionTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../experiments/AdAnalyticsInterfaceExperiment.tsx";
import OrbsIcon from "../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import QuestUtils from "QuestUtils.native.tsx";
import AssetUtils from "../lib/AssetUtils.tsx";
import QuestPlatformUtils from "../utils/QuestPlatformUtils.tsx";
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet.tsx";
import openVideoQuestModalDefault from "VideoQuestModal/openVideoQuestModal.tsx";
import VideoQuestModal from "VideoQuestModal/VideoQuestModal.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import QuestStore from "../QuestStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: metroRequire } = get_ActivityIndicator);
let QuestsExperimentLocations = fn(5979).QuestsExperimentLocations;
const NOOP = fn(1096).NOOP;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let createStyles = fn(5091);
let result = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const internal = nativeDefault.internal;
  const colors = nativeDefault.colors;
  const semanticColor = internal.resolveSemanticColor(
    theme,
    design_shared.isThemeDark(theme) ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK,
  );
  const isThemeDarkResult = design_shared.isThemeDark(theme);
  return ColorUtils.hexOpacityToRgba(semanticColor, 0);
});
createStyles = fn(5091);
let result1 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const isThemeDarkResult = design_shared.isThemeDark(theme);
  const internal = nativeDefault.internal;
  const colors = nativeDefault.colors;
  const semanticColor = internal.resolveSemanticColor(
    theme,
    isThemeDarkResult ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK,
  );
  let num = 0.5;
  if (isThemeDarkResult) {
    num = 0.8;
  }
  return ColorUtils.hexOpacityToRgba(semanticColor, num);
});
createStyles = fn(5091);
let result2 = createStyles.experimental_createToken((theme) => {
  const colors = nativeDefault.colors;
  return design_shared.isThemeDark(theme.theme) ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK;
});
let PX_16 = nativeDefault.space.PX_16;
createStyles = fn(5091);
let obj = {
  container: {
    position: "relative",
    padding: 0,
    borderRadius: nativeDefault.radii.sm,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    marginBottom: nativeDefault.space.PX_16,
    overflow: "hidden",
  },
  heroContainer: null,
  heroImg: null,
  heroLinearGradientOverlay: null,
  previewBadge: null,
  previewBadgeText: null,
  rewardImgContainer: null,
  heroFooterContainer: null,
  heroFooterLeftContainer: null,
  promotedByRow: null,
  shrinkableText: null,
  detailsWrapper: null,
  detailsContainer: null,
  questName: null,
  bodyContainer: null,
  subtitleRow: null,
  rewardSubtitleRow: null,
  orbWithAmountRow: null,
  detailsTextContainer: null,
  buttonContainers: null,
  equalWidthContainer: null,
};
let obj6 = {
  position: "relative",
  padding: 0,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginBottom: nativeDefault.space.PX_16,
  overflow: "hidden",
};
obj.heroContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: nativeDefault.space.PX_12,
};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.heroImg = { resizeMode: "cover" };
obj.heroLinearGradientOverlay = StyleSheet.absoluteFillObject;
const rect = {
  position: "absolute",
  top: nativeDefault.space.PX_8,
  right: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  padding: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.sm,
};
let merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj.previewBadge = rect;
obj.previewBadgeText = { textTransform: "uppercase" };
let size = { height: 64, width: 64, marginRight: nativeDefault.space.PX_12 };
obj.rewardImgContainer = size;
obj.heroFooterContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "flex-end",
};
obj.heroFooterLeftContainer = { display: "flex", flexDirection: "column", alignItems: "flex-start", flexShrink: 1 };
let obj7 = { display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: nativeDefault.space.PX_12 };
let obj8 = { resizeMode: "cover" };
obj.promotedByRow = {
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  columnGap: nativeDefault.space.PX_4,
  rowGap: nativeDefault.space.PX_4,
};
obj.shrinkableText = { flexShrink: 1 };
let obj9 = {
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  columnGap: nativeDefault.space.PX_4,
  rowGap: nativeDefault.space.PX_4,
};
obj.detailsWrapper = { display: "flex", padding: nativeDefault.space.PX_12 };
obj.detailsContainer = { display: "flex", flexDirection: "row" };
let obj10 = { display: "flex", padding: nativeDefault.space.PX_12 };
obj.questName = { marginBottom: nativeDefault.space.PX_4 };
let obj11 = { marginBottom: nativeDefault.space.PX_4 };
obj.bodyContainer = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
let obj12 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
obj.subtitleRow = {
  flexDirection: "row",
  alignItems: "center",
  rowGap: nativeDefault.space.PX_4,
  columnGap: nativeDefault.space.PX_8,
  flexWrap: "wrap",
};
obj.rewardSubtitleRow = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", flexShrink: 1 };
obj.orbWithAmountRow = { flexDirection: "row", alignItems: "center", flexShrink: 1 };
obj.detailsTextContainer = { flex: 1, justifyContent: "center" };
let obj13 = {
  flexDirection: "row",
  alignItems: "center",
  rowGap: nativeDefault.space.PX_4,
  columnGap: nativeDefault.space.PX_8,
  flexWrap: "wrap",
};
obj.buttonContainers = {
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: nativeDefault.space.PX_12,
};
obj.equalWidthContainer = { flexBasis: 0, flexGrow: 1, flexShrink: 1 };
let closure_15 = createStyles.createStyles(obj);
createStyles = fn(5091);
let closure_16 = createStyles.createStyleProperties({
  gradientStart: result,
  gradientMid: result1,
  gradientEnd: result2,
});
let obj14 = {
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: nativeDefault.space.PX_12,
};
size = fn(2);
let result3 = size.fileFinishedImporting("modules/quests/native/QuestCard.tsx");

export const ESTIMATED_CARD_HEIGHT = 348;
export const QuestCard = noop.memo(function QuestCard(questContent) {
  function trackClick(questContentCTA) {
    if (
      obj.shouldMigrateToAdAnalyticsInterface(
        AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
        "quest_card",
      )
    ) {
      const obj2 = {
        type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
        adCreativeType: AdCreativeType.AdCreativeType.QUEST,
        adCreativeId: quest.id,
        questContentCTA,
        surfaceId: QUEST_HOME_MOBILE,
        sourceQuestContent,
        impressionId: getQuestImpressionId(),
      };
      captureAdUserAction.captureAdUserAction(obj2);
      const tmpResult = captureAdUserAction;
    } else {
      const obj3 = { questId: quest.id, questContent: QUEST_HOME_MOBILE, questContentCTA, sourceQuestContent };
      closure_6(obj3);
    }
    obj = AdAnalyticsInterfaceExperiment;
  }
  function showQuestBottomSheet() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15313, dependencyMap.paths), "QuestBottomSheet", {
      questId: quest.id,
      questContentPosition,
      sourceQuestContent,
    });
  }
  const tmp = _require;
  const tmp2 = QUEST_HOME_MOBILE;
  ({ onLayout: closure_0, quest } = questContent);
  QUEST_HOME_MOBILE = questContent.questContent;
  const badgeTextVariant = require("useBadgeTextVariant").useBadgeTextVariant();
  if (undefined === QUEST_HOME_MOBILE) {
    QUEST_HOME_MOBILE = tmp(tmp2[14]).QuestContent.QUEST_HOME_MOBILE;
  }
  ({ questContentPosition: asyncGeneratorStep, sourceQuestContent } = questContent);
  let obj = require("useBadgeTextVariant");
  noop = tmp(tmp2[15]).getQuestLogger({ quest, location: QuestsExperimentLocations.QUEST_HOME_MOBILE });
  let obj2 = { quest, location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  let tmpResult = tmp(tmp2[15]);
  closure_6 = tmp(tmp2[16]).useTrackQuestContentClickedWithImpression();
  const tmpResult44 = tmp(tmp2[16]);
  const questTaskDetails = tmp(tmp2[17]).useQuestTaskDetails(quest);
  const tmpResult45 = tmp(tmp2[17]);
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const tmp8 = hasWatchVideoOnMobileTasks();
  const authStore = tmp8;
  const diff = quest(tmp2[18])().width - 2 * PX_16;
  QuestStore = diff;
  let result = 0.2803030303030303 * diff;
  QuestsExperimentLocations = result;
  let items = [quest, diff, result];
  const memo = noop.useMemo(() => {
    const questAsset = AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.HERO);
    const obj2 = {};
    const merged = Object.assign(questAsset);
    const obj3 = AssetUtils;
    if (questAsset.isAnimated) {
      const size = { assetUrl: questAsset.url, width: diff, height: result };
      let url = obj3.getScaledFirstFrameImageUrl(size);
      if (url == null) {
        url = questAsset.url;
      }
      obj2.url = url;
      let tmp5 = obj2;
    } else {
      const size1 = { assetUrl: questAsset.url, width: diff, height: result };
      obj2.url = obj3.getScaledImageUrl(size1);
      tmp5 = obj2;
    }
    return tmp5;
  }, items);
  const tmp10 = PX_16;
  const tmp7 = null != enrolledAt;
  const tmpResult46 = tmp(tmp2[17]);
  const questGameLogotypeAssetUrl = tmp(tmp2[20]).useQuestGameLogotypeAssetUrl(quest);
  const tmpResult47 = tmp(tmp2[20]);
  ({ gradientEnd, gradientStart, gradientMid } = closure_16());
  const tmp15 = closure_16();
  let items1 = [quest.id];
  const tmp16 = sourceQuestContent(tmp(tmp2[21]).useRecyclingState(null, items1), 2);
  const onPress = tmp16[0];
  closure_11 = tmp18;
  let items2 = [tmp16[1]];
  const callback = noop.useCallback(() => {
    closure_11(false);
  }, items2);
  let items3 = [onPress, quest.id, QUEST_HOME_MOBILE];
  const effect = noop.useEffect(() => {
    if (false === first) {
      const obj2 = { name: MetricEvents.MetricEvents.QUEST_CONTENT_RENDERING_FAILURE, tags: null };
      const _HermesInternal = HermesInternal;
      const items = ["quest_id:" + quest.id, ,];
      const obj = MonitoringAgentDefault;
      const _HermesInternal2 = HermesInternal;
      items[1] = "quest_content:" + AnalyticsTypes.getQuestContentName(QUEST_HOME_MOBILE);
      items[2] = "reason:asset_loading_error";
      obj2.tags = items;
      obj.increment(obj2);
    }
  }, items3);
  const tmpResult48 = tmp(tmp2[21]);
  const items4 = [authStore];
  const stateFromStores = tmp(tmp2[25]).useStateFromStores(items4, () => authStore.getCurrentUser());
  const tmpResult49 = tmp(tmp2[25]);
  const defaultRewardNameWithArticle = tmp(tmp2[26]).getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const tmpResult50 = tmp(tmp2[26]);
  const items5 = [QuestStore];
  const stateFromStoresObject = tmp(tmp2[25]).useStateFromStoresObject(items5, () => ({
    reward: QuestStore.getRewards(quest.id),
    isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id),
    isClaimingReward: QuestStore.isClaimingReward(quest.id),
    isEnrolling: QuestStore.isEnrolling(quest.id),
    questEnrollmentBlockedUntil: QuestStore.questEnrollmentBlockedUntil,
  }));
  ({ isFetchingRewardCode, isClaimingReward, questEnrollmentBlockedUntil } = stateFromStoresObject);
  const tmpResult51 = tmp(tmp2[25]);
  const userStatus2 = quest.userStatus;
  let completedAt;
  if (userStatus2 != null) {
    completedAt = userStatus2.completedAt;
  }
  const questFormattedDate = tmp(tmp2[17]).useQuestFormattedDate(completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const tmpResult52 = tmp(tmp2[17]);
  const hasWatchVideoTasksResult = tmp(tmp2[27]).hasWatchVideoTasks(quest);
  PX_16 = hasWatchVideoTasksResult;
  const tmpResult53 = tmp(tmp2[27]);
  hasWatchVideoOnMobileTasks = tmp(tmp2[20]).useHasWatchVideoOnMobileTasks(quest.config);
  const userStatus3 = quest.userStatus;
  let enrolledAt1;
  if (userStatus3 != null) {
    enrolledAt1 = userStatus3.enrolledAt;
  }
  const userStatus4 = quest.userStatus;
  let completedAt1;
  if (userStatus4 != null) {
    completedAt1 = userStatus4.completedAt;
  }
  let tmp98Result10 = null != completedAt1;
  const userStatus5 = quest.userStatus;
  let claimedAt;
  if (userStatus5 != null) {
    claimedAt = userStatus5.claimedAt;
  }
  closure_16 = tmp34;
  const tmpResult54 = tmp(tmp2[20]);
  const isQuestExpiredResult = tmp(tmp2[28]).isQuestExpired(quest);
  const tmpResult55 = tmp(tmp2[28]);
  const isQuestExpiredButWithinThirtyDayLookback = tmp(tmp2[29]).getIsQuestExpiredButWithinThirtyDayLookback(quest);
  const tmpResult56 = tmp(tmp2[29]);
  const tmpResult57 = tmp(tmp2[30]);
  const tmp37 = quest(tmp2[31])();
  const isThemeDarkResult = tmp(tmp2[11]).isThemeDark(tmp37);
  const tmpResult58 = tmp(tmp2[11]);
  const result1 = tmp(tmp2[26]).hasCollectiblesQuestReward(quest.config);
  const tmpResult59 = tmp(tmp2[26]);
  let skuId = null;
  if (result1) {
    skuId = null;
    if (tmp98Result10) {
      skuId = tmpResult57.getDefaultReward(quest.config).skuId;
    }
  }
  const fetchCollectiblesProduct = tmp(tmp2[32]).useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  const isFetching = fetchCollectiblesProduct.isFetching;
  const tmpResult60 = tmp(tmp2[32]);
  const items6 = [authStore];
  const currentUserHasVerifiedEmailOrPhone = tmp(tmp2[25]).useStateFromStores(items6, () => {
    const currentUser = authStore.getCurrentUser();
    result = undefined;
    if (currentUser != null) {
      result = currentUser.hasVerifiedEmailOrPhone();
    }
    return result;
  });
  const tmpResult61 = tmp(tmp2[25]);
  const items7 = [authStore];
  const currentUserHasVerifiedEmail = tmp(tmp2[25]).useStateFromStores(items7, () => {
    const currentUser = authStore.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    return verified;
  });
  const tmpResult62 = tmp(tmp2[25]);
  const mobileActivityQuest = tmp(tmp2[20]).useMobileActivityQuest(quest);
  const isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  const tmpResult63 = tmp(tmp2[20]);
  const token = tmp(tmp2[33]).useToken(quest(tmp2[9]).colors.BACKGROUND_BASE_LOWER);
  const tmpResult64 = tmp(tmp2[33]);
  const token1 = tmp(tmp2[33]).useToken(quest(tmp2[9]).colors.BACKGROUND_BASE_LOW);
  const tmpResult65 = tmp(tmp2[33]);
  let tmp46 = null != questEnrollmentBlockedUntil;
  const token2 = tmp(tmp2[33]).useToken(quest(tmp2[9]).colors.BACKGROUND_BASE_LOWEST);
  if (tmp46) {
    tmp46 = !tmp30;
  }
  if (tmp46) {
    tmp46 = !tmp98Result10;
  }
  if (tmp46) {
    tmp46 = !tmp34;
  }
  const tmpResult66 = tmp(tmp2[33]);
  const isQuestAccessSuspended = tmp(tmp2[17]).useIsQuestAccessSuspended();
  let obj3 = {
    disabled: true,
    onPressDisabled() {
      closure_6({
        questId: quest.id,
        questContent: QUEST_HOME_MOBILE,
        questContentCTA: AnalyticsTypes.QuestContentCTA.QUEST_ACCESS_SUSPENDED,
        sourceQuestContent,
      });
      openQuestAccessSuspendedBottomSheetDefault();
    },
  };
  const tmpResult67 = tmp(tmp2[17]);
  const questFormattedDate1 = tmp(tmp2[17]).useQuestFormattedDate(quest.config.expiresAt, {
    month: "numeric",
    day: "numeric",
  });
  const tmpResult68 = tmp(tmp2[17]);
  const getQuestImpressionId = tmp(tmp2[35]).useGetQuestImpressionId();
  const items8 = [quest, QUEST_HOME_MOBILE, getQuestImpressionId, sourceQuestContent];
  const callback1 = obj7.useCallback(() => {
    const obj = QuestPlatformUtils;
    obj.openGameLinkDirectly(quest, {
      content: QUEST_HOME_MOBILE,
      ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
      impressionId: getQuestImpressionId(),
      sourceQuestContent,
    });
  }, items8);
  const tmpResult69 = tmp(tmp2[35]);
  const primaryCtaCopy = tmp(tmp2[44]).usePrimaryCtaCopy({
    quest,
    application: mobileActivityQuest.questApplication,
    shortText: true,
  });
  const tmpResult70 = tmp(tmp2[44]);
  _require = undefined;
  const ctaLink = tmp(tmp2[30]).getCtaLink(quest.config);
  if (null != product) {
    const styles2 = product.styles;
    let buttonColors;
    if (styles2 != null) {
      buttonColors = styles2.buttonColors;
    }
    if (buttonColors == null) {
      buttonColors = [];
    }
    let obj4 = { buttonColors, confettiColors: null, backgroundColors: null };
    const styles = product.styles;
    let confettiColors;
    if (styles != null) {
      confettiColors = styles.confettiColors;
    }
    if (confettiColors == null) {
      confettiColors = [];
    }
    obj4.confettiColors = confettiColors;
    const items9 = [quest(tmp2[45])(token1), quest(tmp2[45])(token), quest(tmp2[45])(token2)];
    obj4.backgroundColors = items9;
    product.styles = obj4;
  }
  let tmp98Result8 = "" !== ctaLink;
  if (null != claimedAt) {
    const MobileQuestRewardButtonToSecondaryButtonExperiment = tmp(
      tmp2[46],
    ).MobileQuestRewardButtonToSecondaryButtonExperiment;
    let obj5 = { location: tmp4.QUEST_HOME_MOBILE };
    if (!MobileQuestRewardButtonToSecondaryButtonExperiment.getConfig(obj5).enabled) {
      let obj6 = { text: null, loading: null, onPress: null };
      let intl4 = tmp(tmp2[47]).intl;
      obj6.text = intl4.string(tmp(tmp2[47]).t.vTgCWx);
      obj6.loading = isFetching;
      obj6.onPress = function onPress() {
        trackClick(AnalyticsTypes.QuestContentCTA.SHOW_REWARD);
        QuestUtils.viewReward({
          product,
          quest,
          questContent: QUEST_HOME_MOBILE,
          questContentPosition,
          sourceQuestContent,
        });
      };
    }
    let obj8 = {
      text: quest.config.ctaConfig.buttonLabel,
      variant: "secondary",
      onPress() {
        callback1();
      },
    };
    obj6 = obj8;
  } else {
    if (tmp98Result10) {
      if (isQuestExpiredResult) {
        const intl5 = tmp(tmp2[47]).intl;
        let obj9 = { questName: quest.config.messages.questName };
        const formatToPlainStringResult = intl5.formatToPlainString(tmp(tmp2[47]).t.EAYZAr, obj9);
        const result2 = tmp(tmp2[26]).hasVirtualCurrencyReward(quest.config);
        const tmpResult72 = tmp(tmp2[26]);
        const questOrbMultiplierEligibility = tmp(tmp2[52]).useQuestOrbMultiplierEligibility();
        const tmpResult73 = tmp(tmp2[52]);
        let shouldShowBonusOrbsUX = tmp(tmp2[17]).useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility);
        let tmp80 = shouldShowBonusOrbsUX;
        if (shouldShowBonusOrbsUX) {
          tmp80 = questOrbMultiplierEligibility === tmp(tmp2[53]).QuestOrbMultiplierEligibilityType.NITRO;
        }
        const userStatus6 = quest.userStatus;
        let orbQuantityClaimed;
        if (userStatus6 != null) {
          orbQuantityClaimed = userStatus6.orbQuantityClaimed;
        }
        if (orbQuantityClaimed == null) {
          orbQuantityClaimed = tmp(tmp2[26]).getVirtualCurrencyRewardOrbQuantity(quest.config);
          const tmpResult75 = tmp(tmp2[26]);
        }
        const tmpResult74 = tmp(tmp2[17]);
        const questOrbRewardQuantityForUser = tmp(tmp2[26]).getQuestOrbRewardQuantityForUser(
          quest.config,
          stateFromStores,
        );
        const tmpResult76 = tmp(tmp2[26]);
        const defaultRewardName = tmp(tmp2[26]).getDefaultRewardName(quest.config, stateFromStores);
        const tmpResult77 = tmp(tmp2[26]);
        const fontScale = tmp(tmp2[54]).useFontScale();
        const tmpResult78 = tmp(tmp2[54]);
        const scaledTextLineHeight = tmp(tmp2[55]).useScaledTextLineHeight("text-md/semibold");
        const tmpResult80 = tmp(tmp2[44]);
        const _Math = Math;
        const questDescription = tmpResult80.useQuestDescription(
          quest,
          sourceQuestContent,
          tmp4.QUEST_HOME_MOBILE,
          tmp(tmp2[56]).GameProfileSources.QuestHome,
        );
        const result3 = 16 * Math.min(fontScale, 1.3);
        const items10 = [
          tmp34,
          result2,
          questOrbRewardQuantityForUser,
          orbQuantityClaimed,
          defaultRewardName,
          defaultRewardNameWithArticle,
          result3,
          scaledTextLineHeight,
          ,
          ,
        ];
        ({ orbWithAmountRow: arr13[8], rewardSubtitleRow: arr13[9], shrinkableText: arr13[10] } = tmp8);
        let tmp93 = isQuestExpiredResult;
        const memo1 = obj7.useMemo(() => {
          let num = 0;
          if (obj.isAndroid()) {
            num = 16 / scaledTextLineHeight;
          }
          result = result3 / 8;
          const obj2 = {
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            style: authStore.shrinkableText,
          };
          const size = { width: result3, height: result3, marginRight: result, marginTop: 0, transform: null };
          const items = [{ translateY: num }];
          size.transform = items;
          if (closure_16) {
            if (result2) {
              const obj3 = { style: authStore.orbWithAmountRow, children: null };
              const obj4 = { size: "custom", color: "mobile-text-heading-primary", style: size };
              const items1 = [closure_2_11(OrbsIcon.OrbsIcon, obj4), ,];
              const obj5 = { style: null };
              const obj6 = { width: result };
              obj5.style = obj6;
              items1[1] = closure_2_11(timestampProducer, obj5);
              const obj7 = {};
              const merged = Object.assign(obj2);
              const intl4 = util.intl;
              let num4 = orbQuantityClaimed;
              if (orbQuantityClaimed == null) {
                num4 = 0;
              }
              const obj8 = { orbAmount: num4 };
              obj7.children = intl4.format(util.t["nLXlh+"], obj8);
              items1[2] = closure_2_11(Text_Text.Text, obj7);
              obj3.children = items1;
              let tmp15Result = __initData(timestampProducer, obj3);
            }
            return tmp15Result;
          }
          if (closure_16) {
            const obj9 = {};
            const merged1 = Object.assign(obj2);
            obj9.children = defaultRewardName;
            tmp15Result = closure_2_11(Text_Text.Text, obj9);
          } else if (result2) {
            const obj10 = { style: authStore.rewardSubtitleRow, children: null };
            const obj11 = {};
            const merged2 = Object.assign(obj2);
            const intl2 = util.intl;
            const obj12 = {
              rewardWithArticleHook() {
                return null;
              },
            };
            obj11.children = intl2.format(util.t["0IUT4Y"], obj12);
            const items2 = [closure_2_11(Text_Text.Text, obj11)];
            const obj13 = { style: authStore.orbWithAmountRow, children: null };
            const obj14 = { size: "custom", color: "mobile-text-heading-primary", style: size };
            const items3 = [closure_2_11(OrbsIcon.OrbsIcon, obj14), ,];
            const obj15 = { style: null };
            const obj16 = { width: result };
            obj15.style = obj16;
            items3[1] = closure_2_11(timestampProducer, obj15);
            const obj17 = {};
            const merged3 = Object.assign(obj2);
            const intl3 = util.intl;
            let num3 = questOrbRewardQuantityForUser;
            if (questOrbRewardQuantityForUser == null) {
              num3 = 0;
            }
            const obj18 = { orbAmount: num3 };
            obj17.children = intl3.format(util.t["nLXlh+"], obj18);
            items3[2] = closure_2_11(Text_Text.Text, obj17);
            obj13.children = items3;
            items2[1] = __initData(timestampProducer, obj13);
            obj10.children = items2;
            tmp15Result = __initData(timestampProducer, obj10);
          } else {
            const obj19 = {};
            const merged4 = Object.assign(obj2);
            const intl = util.intl;
            const obj20 = {
              rewardWithArticleHook() {
                return defaultRewardNameWithArticle;
              },
            };
            obj19.children = intl.format(util.t["0IUT4Y"], obj20);
            tmp15Result = closure_2_11(Text_Text.Text, obj19);
          }
          obj = PlatformUtils;
        }, items10);
        if (isQuestExpiredResult) {
          tmp93 = tmp98Result10;
        }
        if (tmp93) {
          tmp93 = !tmp34;
        }
        let formatToPlainStringResult1 = questDescription;
        if (tmp93) {
          const intl6 = tmp(tmp2[47]).intl;
          let obj10 = { date: questFormattedDate };
          formatToPlainStringResult1 = intl6.formatToPlainString(tmp(tmp2[47]).t["l1jCM/"], obj10);
        }
        const items11 = [quest.id, sourceQuestContent];
        const callback2 = obj7.useCallback(() => {
          const obj = {
            questId: quest.id,
            initialStep: VideoQuestModal.VideoQuestModalSteps.WATCH_VIDEO,
            sourceQuestContent,
          };
          openVideoQuestModalDefault(obj);
        }, items11);
        const items12 = [launchMobileActivity];
        const callback3 = obj7.useCallback(
          asyncGeneratorStep(async () => {
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                v3 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    result = v3(QUEST_HOME_MOBILE[48]).dismissOverlayScreens();
                    c1 = 1;
                    v3 = 1;
                    const obj5 = { value: launchMobileActivity(), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  v3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp9) {
                v3 = tmp;
                throw tmp9;
              }
            }
          }),
          items12,
        );
        let obj11 = { style: null, onLayout: null, children: null };
        const items13 = [tmp8.container];
        let obj12 = { marginHorizontal: tmp10 - questContent.containerPadding };
        items13[1] = obj12;
        obj11.style = items13;
        obj11.onLayout = function onLayout(arg0) {
          if (closure_0 != null) {
            tmp(arg0, quest.id);
          }
        };
        let obj13 = { visible: tmp80, glow: true, children: null };
        let obj14 = { style: null, children: null };
        const items14 = [tmp8.heroContainer];
        let obj15 = { minHeight: result, backgroundColor: gradientEnd };
        items14[1] = obj15;
        obj14.style = items14;
        const tmpResult79 = tmp(tmp2[55]);
        let obj16 = {
          source: null,
          style: null,
          onError: null,
          accessible: true,
          accessibilityRole: "image",
          accessibilityLabel: null,
        };
        let obj17 = { uri: memo.url };
        obj16.source = obj17;
        obj16.style = tmp8.heroImg;
        obj16.onError = callback;
        obj16.accessibilityLabel = quest.config.messages.questName;
        const items15 = [closure_11(quest(tmp2[63]), obj16), , ,];
        let obj18 = { style: tmp8.heroLinearGradientOverlay, start: null, end: null, colors: null };
        const tmp9Result = quest(tmp2[62]);
        obj18.start = tmp(tmp2[65]).VerticalGradient.START;
        obj18.end = tmp(tmp2[65]).VerticalGradient.END;
        const items16 = [gradientStart, gradientMid, gradientEnd];
        obj18.colors = items16;
        items15[1] = closure_11(quest(tmp2[64]), obj18);
        let preview = quest.preview;
        if (preview) {
          let obj19 = { style: tmp8.previewBadge, children: null };
          let obj20 = {
            variant: badgeTextVariant,
            color: "text-overlay-light",
            style: tmp8.previewBadgeText,
            children: null,
          };
          const intl7 = tmp(tmp2[47]).intl;
          obj20.children = intl7.string(tmp(tmp2[47]).t.SKNnqq);
          obj19.children = tmp98(tmp(tmp2[59]).Text, obj20);
          preview = tmp98(tmp101, obj19);
        }
        items15[2] = preview;
        const obj21 = { style: tmp8.heroFooterContainer, children: null };
        const obj22 = { style: tmp8.heroFooterLeftContainer, children: null };
        const obj23 = { assetUrl: questGameLogotypeAssetUrl, onError: callback };
        const items17 = [closure_11(quest(tmp2[66]), obj23)];
        const obj24 = { style: tmp8.promotedByRow, children: null };
        let str2 = "text-overlay-light";
        let str3 = "text-overlay-light";
        if (isThemeDarkResult) {
          str3 = "text-muted";
        }
        const obj25 = { variant: "text-xs/medium", color: str3, style: tmp8.shrinkableText, children: null };
        const intl8 = tmp(tmp2[47]).intl;
        obj25.children = intl8.string(tmp(tmp2[47]).t.VAbKhK);
        const items18 = [closure_11(tmp(tmp2[59]).Text, obj25), ,];
        const obj26 = {
          source: null,
          style: null,
          accessible: true,
          accessibilityRole: "image",
          accessibilityLabel: null,
        };
        const tmp9Result3 = quest(tmp2[64]);
        obj26.source = quest(tmp2[67]);
        obj26.style = { height: 16, width: 16 };
        const intl9 = tmp(tmp2[47]).intl;
        obj26.accessibilityLabel = intl9.string(tmp(tmp2[47]).t.OfMjx9);
        items18[1] = closure_11(quest(tmp2[63]), obj26);
        const obj27 = {
          variant: "text-xs/medium",
          color: "text-overlay-light",
          style: tmp8.shrinkableText,
          children: quest.config.messages.gamePublisher,
        };
        items18[2] = closure_11(tmp(tmp2[59]).Text, obj27);
        obj24.children = items18;
        items17[1] = defaultRewardNameWithArticle(closure_6, obj24);
        obj22.children = items17;
        const items19 = [defaultRewardNameWithArticle(closure_6, obj22)];
        let tmp98Result = !isQuestExpiredResult;
        if (!isQuestExpiredResult) {
          tmp98Result = !tmp34;
        }
        if (tmp98Result) {
          if (isThemeDarkResult) {
            str2 = "text-default";
          }
          const obj28 = { variant: "text-xs/medium", color: str2, style: tmp8.shrinkableText, children: null };
          const intl10 = tmp(tmp2[47]).intl;
          const obj29 = { expiryDate: questFormattedDate1 };
          obj28.children = intl10.format(tmp(tmp2[47]).t["7D8r4F"], obj29);
          tmp98Result = tmp98(tmp(tmp2[59]).Text, obj28);
        }
        items19[1] = tmp98Result;
        obj21.children = items19;
        items15[3] = defaultRewardNameWithArticle(closure_6, obj21);
        obj14.children = items15;
        const items20 = [defaultRewardNameWithArticle(closure_6, obj14), ,];
        const obj30 = { style: tmp8.detailsWrapper, children: null };
        const obj31 = { style: tmp8.detailsContainer, children: null };
        const obj32 = { style: tmp8.rewardImgContainer, children: null };
        if (tmp7) {
          const obj33 = { quest, progress: tmpResult46.useQuestCompletionDetails(quest).completedRatio, size: "sm" };
          let tmp98Result6 = tmp98(quest(tmp2[68]), obj33);
        } else {
          let size = { quest, height: 64, width: 64 };
          tmp98Result6 = tmp98(quest(tmp2[69]), size);
        }
        obj32.children = tmp98Result6;
        const items21 = [closure_11(closure_6, obj32)];
        const obj34 = { style: tmp8.detailsTextContainer, children: null };
        const obj35 = {
          variant: "eyebrow",
          color: "text-brand",
          style: tmp8.questName,
          accessibilityRole: "header",
          children: formatToPlainStringResult,
        };
        const items22 = [closure_11(tmp(tmp2[59]).Text, obj35)];
        const obj36 = { style: tmp8.bodyContainer, children: null };
        const obj37 = { style: tmp8.subtitleRow, children: null };
        const items23 = [memo1];
        if (shouldShowBonusOrbsUX) {
          const obj38 = { questId: quest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
          shouldShowBonusOrbsUX = tmp98(tmp(tmp2[70]).QuestOrbMultiplierPerkPill, obj38);
        }
        items23[1] = shouldShowBonusOrbsUX;
        obj37.children = items23;
        const items24 = [defaultRewardNameWithArticle(closure_6, obj37)];
        let tmp98Result7 = null != formatToPlainStringResult1;
        if (tmp98Result7) {
          const obj39 = { variant: "text-sm/medium", color: "text-muted", children: formatToPlainStringResult1 };
          tmp98Result7 = tmp98(tmp(tmp2[59]).Text, obj39);
        }
        items24[1] = tmp98Result7;
        obj36.children = items24;
        items22[1] = defaultRewardNameWithArticle(closure_6, obj36);
        obj34.children = items22;
        items21[1] = defaultRewardNameWithArticle(closure_6, obj34);
        obj31.children = items21;
        obj30.children = defaultRewardNameWithArticle(closure_6, obj31);
        items20[1] = closure_11(closure_6, obj30);
        const obj40 = {
          direction: "horizontal",
          align: "center",
          spacing: quest(tmp2[9]).space.PX_8,
          style: tmp8.buttonContainers,
          children: null,
        };
        const obj41 = { children: null };
        if (tmp46) {
          const obj42 = { grow: true, onPress, variant: "secondary", disabled: true, text: null };
          const intl11 = tmp(tmp2[47]).intl;
          obj42.text = intl11.string(tmp(tmp2[47]).t.V293qn);
          const items25 = [tmp98(tmp(tmp2[72]).Button, obj42)];
          const obj43 = {
            onPress: function showQuestEnrollmentBlockedBottomSheet() {
              ActionSheetActionCreatorsDefault.openLazy(
                asyncRequireImpl(15360, dependencyMap.paths),
                "QuestEnrollmentBlockedBottomSheet",
                { questId: quest.id, questEnrollmentBlockedUntil, sourceQuestContent },
              );
            },
            variant: "tertiary",
            text: null,
          };
          const intl12 = tmp(tmp2[47]).intl;
          obj43.text = intl12.string(tmp(tmp2[47]).t.vY9GgG);
          items25[1] = tmp98(tmp(tmp2[72]).Button, obj43);
          obj41.children = items25;
          let tmp111 = obj41;
        } else {
          if (tmp98Result8) {
            tmp98Result8 = !tmp46;
          }
          if (tmp98Result8) {
            tmp98Result8 = !isQuestExpiredResult;
          }
          if (tmp98Result8) {
            tmp98Result8 = !tmp34;
          }
          if (tmp98Result8) {
            tmp98Result8 = !tmp98Result10;
          }
          if (tmp98Result8) {
            const obj44 = { style: tmp8.equalWidthContainer, children: null };
            const obj45 = {
              grow: true,
              variant: "secondary",
              text: tmp(tmp2[30]).getExternalCtaLabel(quest),
              onPress: callback1,
            };
            obj44.children = tmp98(tmp(tmp2[72]).Button, obj45);
            tmp98Result8 = tmp98(tmp101, obj44);
            const tmpResult81 = tmp(tmp2[30]);
          }
          const items26 = [tmp98Result8];
          const obj46 = { style: tmp8.equalWidthContainer, children: null };
          const obj47 = { grow: true };
          let merged = Object.assign(obj56);
          obj46.children = tmp98(tmp(tmp2[72]).Button, obj47);
          items26[1] = tmp98(tmp101, obj46);
          obj41.children = items26;
          tmp111 = obj41;
        }
        const items27 = [defaultRewardNameWithArticle(questEnrollmentBlockedUntil, tmp111), , ,];
        let tmp98Result9 = tmp98Result10;
        if (tmp98Result10) {
          tmp98Result9 = hasWatchVideoTasksResult;
        }
        if (tmp98Result9) {
          tmp98Result9 = hasWatchVideoOnMobileTasks;
        }
        if (tmp98Result9) {
          const obj48 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
          const intl13 = tmp(tmp2[47]).intl;
          obj48.accessibilityLabel = intl13.string(tmp(tmp2[47]).t.YsCuyF);
          obj48.icon = quest(tmp2[75]);
          obj48.onPress = callback2;
          tmp98Result9 = tmp98(tmp(tmp2[74]).IconButton, obj48);
        }
        items27[1] = tmp98Result9;
        if (tmp98Result10) {
          tmp98Result10 = isMobileActivityQuest;
        }
        if (tmp98Result10) {
          const obj49 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
          const intl14 = tmp(tmp2[47]).intl;
          obj49.accessibilityLabel = intl14.string(tmp(tmp2[47]).t.CkUzLd);
          obj49.icon = quest(tmp2[75]);
          obj49.onPress = callback3;
          tmp98Result10 = tmp98(tmp(tmp2[74]).IconButton, obj49);
        }
        items27[2] = tmp98Result10;
        const obj50 = { quest, showShareLink: !isQuestExpiredResult, location: tmp4.QUESTS_CARD, sourceQuestContent };
        items27[3] = closure_11(quest(tmp2[76]), obj50);
        obj40.children = items27;
        items20[2] = defaultRewardNameWithArticle(tmp(tmp2[71]).Stack, obj40);
        obj13.children = items20;
        obj11.children = defaultRewardNameWithArticle(tmp9Result, obj13);
        return closure_11(tmp(tmp2[61]).Card, obj11);
      }
      const obj51 = { text: null, loading: null, onPress: null };
      let intl3 = tmp(tmp2[47]).intl;
      obj51.text = intl3.string(tmp(tmp2[47]).t.cfY4PE);
      if (!isClaimingReward) {
        isClaimingReward = isFetchingRewardCode;
      }
      if (!isClaimingReward) {
        isClaimingReward = isFetching;
      }
      obj51.loading = isClaimingReward;
      obj51.onPress = function onPress() {
        trackClick(AnalyticsTypes.QuestContentCTA.CLAIM_REWARD);
        result = QuestUtils.handleRewardClaimThenView({
          product,
          quest,
          questContent: QUEST_HOME_MOBILE,
          questContentPosition,
          currentUserHasVerifiedEmailOrPhone,
          currentUserHasVerifiedEmail,
          sourceQuestContent,
        });
      };
      let tmp71 = null;
      if (isQuestAccessSuspended) {
        tmp71 = obj3;
      }
      let merged1 = Object.assign(tmp71);
      obj56 = obj51;
    }
    if (isQuestExpiredResult) {
      const obj52 = { text: null, loading: null, disabled: true, variant: "secondary", onPress: null };
      let intl2 = tmp(tmp2[47]).intl;
      const obj53 = { expiryDate: questFormattedDate1 };
      obj52.text = intl2.formatToPlainString(tmp(tmp2[47]).t["6p8BZx"], obj53);
      let tmp69 = isClaimingReward;
      if (!isClaimingReward) {
        tmp69 = isFetchingRewardCode;
      }
      if (!tmp69) {
        tmp69 = isFetching;
      }
      obj52.loading = tmp69;
      obj52.onPress = onPress;
      obj56 = obj52;
    } else {
      if (tmp30) {
        if (hasWatchVideoTasksResult) {
          const obj54 = {
            text: tmp(tmp2[49]).getVideoQuestWatchCtaText(questTaskDetails),
            accessibilityLabel: null,
            disabled: false,
            onPress: null,
          };
          const tmpResult82 = tmp(tmp2[49]);
          obj54.accessibilityLabel = tmp(tmp2[49]).getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails);
          obj54.onPress = function onPress() {
            logger.log("Navigating to video quest bottom sheet");
            trackClick(AnalyticsTypes.QuestContentCTA.WATCH_VIDEO);
            if (hasWatchVideoOnMobileTasks) {
              const obj2 = { questId: quest.id, sourceQuestContent };
              openVideoQuestModalDefault(obj2);
            } else {
              const obj3 = { questId: quest.id, questContentPosition, sourceQuestContent };
              ActionSheetActionCreatorsDefault.openLazy(
                asyncRequireImpl(15313, dependencyMap.paths),
                "QuestBottomSheet",
                obj3,
              );
            }
          };
          let tmp65 = null;
          if (isQuestAccessSuspended) {
            tmp65 = obj3;
          }
          let merged2 = Object.assign(tmp65);
          obj56 = obj54;
          const tmpResult83 = tmp(tmp2[49]);
        }
      }
      if (tmp30) {
        if (isMobileActivityQuest) {
          const obj55 = {
            text: primaryCtaCopy,
            icon: tmp(tmp2[48]).getPrimaryCtaIcon(quest),
            disabled: false,
            onPress() {
              trackClick(AnalyticsTypes.QuestContentCTA.LAUNCH_MOBILE_ACTIVITY);
              callback3();
            },
          };
          let tmp61 = null;
          if (isQuestAccessSuspended) {
            tmp61 = obj3;
          }
          let merged3 = Object.assign(tmp61);
          obj56 = obj55;
          const tmpResult84 = tmp(tmp2[48]);
        }
      }
      if (tmp30) {
        if (!hasWatchVideoTasksResult) {
          if (!isMobileActivityQuest) {
            obj56 = { text: null, variant: "secondary", disabled: false, onPress: null };
            let intl = tmp(tmp2[47]).intl;
            obj56.text = intl.string(tmp(tmp2[47]).t.JiosAn);
            obj56.onPress = function onPress() {
              logger.log("Navigating to console connection action sheet");
              trackClick(AnalyticsTypes.QuestContentCTA.VIEW_REQUIREMENTS);
              ActionSheetActionCreatorsDefault.openLazy(
                asyncRequireImpl(15313, dependencyMap.paths),
                "QuestBottomSheet",
                { questId: quest.id, questContentPosition, sourceQuestContent },
              );
            };
          }
        }
      }
      const obj57 = {
        text: primaryCtaCopy,
        disabled: false,
        loading: stateFromStoresObject.isEnrolling,
        accessibilityLabel: null,
        icon: null,
        onPress: null,
      };
      let videoQuestWatchCtaAccessibilityLabel;
      if (hasWatchVideoTasksResult) {
        videoQuestWatchCtaAccessibilityLabel = tmp(tmp2[49]).getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails);
        const tmpResult85 = tmp(tmp2[49]);
      }
      obj57.accessibilityLabel = videoQuestWatchCtaAccessibilityLabel;
      let primaryCtaIcon;
      if (isMobileActivityQuest) {
        primaryCtaIcon = tmp(tmp2[48]).getPrimaryCtaIcon(quest);
        const tmpResult86 = tmp(tmp2[48]);
      }
      obj57.icon = primaryCtaIcon;
      _require = asyncGeneratorStep(async () => {
        if (questContent === 2) {
          questContent = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            questContent = 2;
            if (0 === id) {
              if (arg0 === 1) {
                questContent = 3;
                throw value;
              } else if (arg0 === 2) {
                questContent = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                logger.log("Enrolling in quest");
                tmp2(QUEST_HOME_MOBILE[51]);
                let obj4 = { questContent, questContentCTA: null, sourceQuestContent: null };
                if (!isMobileActivityQuest) {
                  if (!PX_16) {
                    let START_QUEST = tmp2(QUEST_HOME_MOBILE[24]).QuestContentCTA.ACCEPT_QUEST;
                  }
                  obj4.questContentCTA = START_QUEST;
                  obj4.sourceQuestContent = sourceQuestContent;
                  obj4 = tmp33(tmp35, obj4);
                  id = 1;
                  questContent = 1;
                }
                START_QUEST = tmp2(QUEST_HOME_MOBILE[24]).QuestContentCTA.START_QUEST;
              }
            } else if (arg0 === 1) {
              questContent = 3;
              throw value;
            } else if (arg0 === 2) {
              questContent = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              if (PX_16) {
                if (hasWatchVideoOnMobileTasks) {
                  const obj = { questId: id.id, sourceQuestContent };
                  quest(QUEST_HOME_MOBILE[50])(obj);
                  questContent = 3;
                }
                callback3();
              }
              if (!isMobileActivityQuest) {
                showQuestBottomSheet();
              }
            }
          } catch (tmp21) {
            questContent = tmp;
            throw tmp21;
          }
        }
      });
      obj57.onPress = function onPress() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      let tmp57 = null;
      if (isQuestAccessSuspended) {
        tmp57 = obj3;
      }
      let merged4 = Object.assign(tmp57);
      obj56 = obj57;
    }
  }
  const tmpResult71 = tmp(tmp2[30]);
});
