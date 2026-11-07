// discord_app/modules/quests/native/QuestCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02118_asyncRequireImpl.js";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import design_shared from "../../../../discord_common/js/packages/design/shared.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import MonitoringAgentDefault from "../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../lib/analytics/AnalyticsTypes.tsx";
import OrbsIcon from "../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import QuestUtils from "QuestUtils.native.tsx";
import captureAdUserAction from "../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../ads/analytics/captureAdUserActionTypes.tsx";
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
({ StyleSheet, View: closure_6 } = get_ActivityIndicator);
let QuestsExperimentLocations = fn(6836).QuestsExperimentLocations;
const Constants = fn(1083);
({ NOOP: closure_10, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let createStyles = fn(5140);
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
createStyles = fn(5140);
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
createStyles = fn(5140);
let result2 = createStyles.experimental_createToken((theme) => {
  const colors = nativeDefault.colors;
  return design_shared.isThemeDark(theme.theme) ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK;
});
let PX_16 = nativeDefault.space.PX_16;
createStyles = fn(5140);
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
obj.questName = {
  marginBottom: nativeDefault.space.PX_4,
  fontSize: 12,
  lineHeight: 16,
  fontFamily: Fonts.PRIMARY_BOLD,
  letterSpacing: 0.2,
  textTransform: "uppercase",
};
let obj11 = {
  marginBottom: nativeDefault.space.PX_4,
  fontSize: 12,
  lineHeight: 16,
  fontFamily: Fonts.PRIMARY_BOLD,
  letterSpacing: 0.2,
  textTransform: "uppercase",
};
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
createStyles = fn(5140);
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
  function showQuestBottomSheet() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17409, dependencyMap.paths), "QuestBottomSheet", {
      questId: quest.id,
      questContentPosition,
      sourceQuestContent,
    });
  }
  ({ onLayout: closure_0, quest } = questContent);
  let QUEST_HOME_MOBILE = questContent.questContent;
  if (undefined === QUEST_HOME_MOBILE) {
    QUEST_HOME_MOBILE = require("QuestTypes").QuestContent.QUEST_HOME_MOBILE;
  }
  ({ questContentPosition: asyncGeneratorStep, sourceQuestContent } = questContent);
  const tmp3 = _require;
  const tmp4 = QUEST_HOME_MOBILE;
  noop = require("getQuestLogger").getQuestLogger({ quest, location: QuestsExperimentLocations.QUEST_HOME_MOBILE });
  let obj = require("getQuestLogger");
  let obj2 = { quest, location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  closure_6 = require("AnalyticsHooks").useTrackQuestContentClickedWithImpression();
  let obj3 = require("AnalyticsHooks");
  const questTaskDetails = require("hooks/QuestHooks").useQuestTaskDetails(quest);
  let obj4 = require("hooks/QuestHooks");
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const tmp9 = hasWatchVideoOnMobileTasks();
  const authStore = tmp9;
  let obj5 = require("hooks/QuestHooks");
  const tmp8 = null != enrolledAt;
  const isFocused = tmp3(tmp4[17]).useIsFocused();
  const diff = quest(tmp4[18])().width - 2 * PX_16;
  QuestStore = diff;
  let result = 0.2803030303030303 * diff;
  QuestsExperimentLocations = result;
  items = [quest, diff, result];
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
  const tmp12 = PX_16;
  const tmp3Result = tmp3(tmp4[17]);
  const questGameLogotypeAssetUrl = tmp3(tmp4[20]).useQuestGameLogotypeAssetUrl(quest);
  const tmp3Result41 = tmp3(tmp4[20]);
  ({ gradientEnd, gradientStart, gradientMid } = closure_16());
  const tmp17 = closure_16();
  let items1 = [quest.id];
  const tmp18 = sourceQuestContent(tmp3(tmp4[21]).useRecyclingState(null, items1), 2);
  const onPress = tmp18[0];
  closure_11 = tmp20;
  let items2 = [tmp18[1]];
  const callback = noop.useCallback(() => {
    closure_11(false);
  }, items2);
  let items3 = [onPress, quest.id, QUEST_HOME_MOBILE];
  const effect = noop.useEffect(() => {
    if (false === first) {
      const obj2 = { name: MetricEvents.MetricEvents.QUEST_CONTENT_RENDERING_FAILURE, tags: null };
      const _HermesInternal = HermesInternal;
      items = ["quest_id:" + quest.id, ,];
      const obj = MonitoringAgentDefault;
      const _HermesInternal2 = HermesInternal;
      items[1] = "quest_content:" + AnalyticsTypes.getQuestContentName(QUEST_HOME_MOBILE);
      items[2] = "reason:asset_loading_error";
      obj2.tags = items;
      obj.increment(obj2);
    }
  }, items3);
  const tmp3Result42 = tmp3(tmp4[21]);
  const items4 = [authStore];
  const stateFromStores = tmp3(tmp4[25]).useStateFromStores(items4, () => authStore.getCurrentUser());
  const tmp3Result43 = tmp3(tmp4[25]);
  const defaultRewardNameWithArticle = tmp3(tmp4[26]).getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const tmp3Result44 = tmp3(tmp4[26]);
  const items5 = [QuestStore];
  const stateFromStoresObject = tmp3(tmp4[25]).useStateFromStoresObject(items5, () => ({
    reward: QuestStore.getRewards(quest.id),
    isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id),
    isClaimingReward: QuestStore.isClaimingReward(quest.id),
    isEnrolling: QuestStore.isEnrolling(quest.id),
    questEnrollmentBlockedUntil: QuestStore.questEnrollmentBlockedUntil,
  }));
  ({ isFetchingRewardCode, isClaimingReward, questEnrollmentBlockedUntil } = stateFromStoresObject);
  const tmp3Result45 = tmp3(tmp4[25]);
  const userStatus2 = quest.userStatus;
  let completedAt;
  if (userStatus2 != null) {
    completedAt = userStatus2.completedAt;
  }
  const questFormattedDate = tmp3(tmp4[16]).useQuestFormattedDate(completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const tmp3Result46 = tmp3(tmp4[16]);
  const hasWatchVideoTasksResult = tmp3(tmp4[27]).hasWatchVideoTasks(quest);
  PX_16 = hasWatchVideoTasksResult;
  const tmp3Result47 = tmp3(tmp4[27]);
  hasWatchVideoOnMobileTasks = tmp3(tmp4[20]).useHasWatchVideoOnMobileTasks(quest.config);
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
  let tmp100Result10 = null != completedAt1;
  const userStatus5 = quest.userStatus;
  let claimedAt;
  if (userStatus5 != null) {
    claimedAt = userStatus5.claimedAt;
  }
  closure_16 = tmp36;
  const tmp3Result48 = tmp3(tmp4[20]);
  const isQuestExpiredResult = tmp3(tmp4[28]).isQuestExpired(quest);
  const tmp3Result49 = tmp3(tmp4[28]);
  const isQuestExpiredButWithinThirtyDayLookback = tmp3(tmp4[29]).getIsQuestExpiredButWithinThirtyDayLookback(quest);
  const tmp3Result50 = tmp3(tmp4[29]);
  const tmp3Result51 = tmp3(tmp4[30]);
  const tmp39 = quest(tmp4[31])();
  const isThemeDarkResult = tmp3(tmp4[11]).isThemeDark(tmp39);
  const tmp3Result52 = tmp3(tmp4[11]);
  const result1 = tmp3(tmp4[26]).hasCollectiblesQuestReward(quest.config);
  const tmp3Result53 = tmp3(tmp4[26]);
  let skuId = null;
  if (result1) {
    skuId = null;
    if (tmp100Result10) {
      skuId = tmp3Result51.getDefaultReward(quest.config).skuId;
    }
  }
  const fetchCollectiblesProduct = tmp3(tmp4[32]).useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  const isFetching = fetchCollectiblesProduct.isFetching;
  const tmp3Result54 = tmp3(tmp4[32]);
  const items6 = [authStore];
  const currentUserHasVerifiedEmailOrPhone = tmp3(tmp4[25]).useStateFromStores(items6, () => {
    const currentUser = authStore.getCurrentUser();
    result = undefined;
    if (currentUser != null) {
      result = currentUser.hasVerifiedEmailOrPhone();
    }
    return result;
  });
  const tmp3Result55 = tmp3(tmp4[25]);
  const items7 = [authStore];
  const currentUserHasVerifiedEmail = tmp3(tmp4[25]).useStateFromStores(items7, () => {
    const currentUser = authStore.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    return verified;
  });
  const tmp3Result56 = tmp3(tmp4[25]);
  const mobileActivityQuest = tmp3(tmp4[20]).useMobileActivityQuest(quest);
  const isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  const tmp3Result57 = tmp3(tmp4[20]);
  const token = tmp3(tmp4[33]).useToken(quest(tmp4[9]).colors.BACKGROUND_BASE_LOWER);
  const tmp3Result58 = tmp3(tmp4[33]);
  const token1 = tmp3(tmp4[33]).useToken(quest(tmp4[9]).colors.BACKGROUND_BASE_LOW);
  const tmp3Result59 = tmp3(tmp4[33]);
  let tmp48 = null != questEnrollmentBlockedUntil;
  const token2 = tmp3(tmp4[33]).useToken(quest(tmp4[9]).colors.BACKGROUND_BASE_LOWEST);
  if (tmp48) {
    tmp48 = !tmp32;
  }
  if (tmp48) {
    tmp48 = !tmp100Result10;
  }
  if (tmp48) {
    tmp48 = !tmp36;
  }
  const tmp3Result60 = tmp3(tmp4[33]);
  const isQuestAccessSuspended = tmp3(tmp4[16]).useIsQuestAccessSuspended();
  let obj6 = {
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
  const tmp3Result61 = tmp3(tmp4[16]);
  const questFormattedDate1 = tmp3(tmp4[16]).useQuestFormattedDate(quest.config.expiresAt, {
    month: "numeric",
    day: "numeric",
  });
  const tmp3Result62 = tmp3(tmp4[16]);
  const getQuestImpressionId = tmp3(tmp4[35]).useGetQuestImpressionId();
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
  const tmp3Result63 = tmp3(tmp4[35]);
  const primaryCtaCopy = tmp3(tmp4[43]).usePrimaryCtaCopy({
    quest,
    application: mobileActivityQuest.questApplication,
    shortText: true,
  });
  const tmp3Result64 = tmp3(tmp4[43]);
  _require = undefined;
  const ctaLink = tmp3(tmp4[30]).getCtaLink(quest.config);
  if (null != product) {
    const styles2 = product.styles;
    let buttonColors;
    if (styles2 != null) {
      buttonColors = styles2.buttonColors;
    }
    if (buttonColors == null) {
      buttonColors = [];
    }
    let obj8 = { buttonColors, confettiColors: null, backgroundColors: null };
    const styles = product.styles;
    let confettiColors;
    if (styles != null) {
      confettiColors = styles.confettiColors;
    }
    if (confettiColors == null) {
      confettiColors = [];
    }
    obj8.confettiColors = confettiColors;
    const items9 = [quest(tmp4[44])(token1), quest(tmp4[44])(token), quest(tmp4[44])(token2)];
    obj8.backgroundColors = items9;
    product.styles = obj8;
  }
  let tmp100Result8 = "" !== ctaLink;
  if (null != claimedAt) {
    const MobileQuestRewardButtonToSecondaryButtonExperiment = tmp3(
      tmp4[45],
    ).MobileQuestRewardButtonToSecondaryButtonExperiment;
    let obj9 = { location: tmp5.QUEST_HOME_MOBILE };
    if (!MobileQuestRewardButtonToSecondaryButtonExperiment.getConfig(obj9).enabled) {
      let obj10 = { text: null, loading: null, onPress: null };
      let intl4 = tmp3(tmp4[46]).intl;
      obj10.text = intl4.string(tmp3(tmp4[46]).t.vTgCWx);
      obj10.loading = isFetching;
      obj10.onPress = function onPress() {
        const obj = captureAdUserAction;
        obj.captureAdUserAction({
          type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
          adCreativeType: AdCreativeType.AdCreativeType.QUEST,
          adCreativeId: quest.id,
          questContentCTA: AnalyticsTypes.QuestContentCTA.SHOW_REWARD,
          surfaceId: QUEST_HOME_MOBILE,
          sourceQuestContent,
          impressionId: getQuestImpressionId(),
        });
        const obj2 = {
          type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
          adCreativeType: AdCreativeType.AdCreativeType.QUEST,
          adCreativeId: quest.id,
          questContentCTA: AnalyticsTypes.QuestContentCTA.SHOW_REWARD,
          surfaceId: QUEST_HOME_MOBILE,
          sourceQuestContent,
          impressionId: getQuestImpressionId(),
        };
        QuestUtils.viewReward({
          product,
          quest,
          questContent: QUEST_HOME_MOBILE,
          questContentPosition,
          sourceQuestContent,
        });
      };
    }
    let obj11 = {
      text: quest.config.ctaConfig.buttonLabel,
      variant: "secondary",
      onPress() {
        callback1();
      },
    };
    obj10 = obj11;
  } else {
    if (tmp100Result10) {
      if (isQuestExpiredResult) {
        const intl5 = tmp3(tmp4[46]).intl;
        let obj12 = { questName: quest.config.messages.questName };
        const formatToPlainStringResult = intl5.formatToPlainString(tmp3(tmp4[46]).t.EAYZAr, obj12);
        const result2 = tmp3(tmp4[26]).hasVirtualCurrencyReward(quest.config);
        const tmp3Result66 = tmp3(tmp4[26]);
        const questOrbMultiplierEligibility = tmp3(tmp4[51]).useQuestOrbMultiplierEligibility();
        const tmp3Result67 = tmp3(tmp4[51]);
        let shouldShowBonusOrbsUX = tmp3(tmp4[16]).useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility);
        let tmp82 = shouldShowBonusOrbsUX;
        if (shouldShowBonusOrbsUX) {
          tmp82 = questOrbMultiplierEligibility === tmp3(tmp4[52]).QuestOrbMultiplierEligibilityType.NITRO;
        }
        const userStatus6 = quest.userStatus;
        let orbQuantityClaimed;
        if (userStatus6 != null) {
          orbQuantityClaimed = userStatus6.orbQuantityClaimed;
        }
        if (orbQuantityClaimed == null) {
          orbQuantityClaimed = tmp3(tmp4[26]).getVirtualCurrencyRewardOrbQuantity(quest.config);
          const tmp3Result69 = tmp3(tmp4[26]);
        }
        const tmp3Result68 = tmp3(tmp4[16]);
        const questOrbRewardQuantityForUser = tmp3(tmp4[26]).getQuestOrbRewardQuantityForUser(
          quest.config,
          stateFromStores,
        );
        const tmp3Result70 = tmp3(tmp4[26]);
        const defaultRewardName = tmp3(tmp4[26]).getDefaultRewardName(quest.config, stateFromStores);
        const tmp3Result71 = tmp3(tmp4[26]);
        const fontScale = tmp3(tmp4[53]).useFontScale();
        const tmp3Result72 = tmp3(tmp4[53]);
        const scaledTextLineHeight = tmp3(tmp4[54]).useScaledTextLineHeight("body-md/semibold");
        const tmp3Result74 = tmp3(tmp4[43]);
        const _Math = Math;
        const questDescription = tmp3Result74.useQuestDescription(
          quest,
          sourceQuestContent,
          tmp5.QUEST_HOME_MOBILE,
          tmp3(tmp4[55]).GameProfileSources.QuestHome,
        );
        const result3 = 16 * Math.min(fontScale, 1.3);
        const items10 = [
          tmp36,
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
        ({ orbWithAmountRow: arr13[8], rewardSubtitleRow: arr13[9], shrinkableText: arr13[10] } = tmp9);
        let tmp95 = isQuestExpiredResult;
        const memo1 = obj7.useMemo(() => {
          let num = 0;
          if (obj.isAndroid()) {
            num = 16 / scaledTextLineHeight;
          }
          result = result3 / 8;
          const obj2 = {
            variant: "body-md/semibold",
            color: "mobile-text-heading-primary",
            style: authStore.shrinkableText,
          };
          const size = { width: result3, height: result3, marginRight: result, marginTop: 0, transform: null };
          items = [{ translateY: num }];
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
              let tmp15Result = application_id(timestampProducer, obj3);
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
            items2[1] = application_id(timestampProducer, obj13);
            obj10.children = items2;
            tmp15Result = application_id(timestampProducer, obj10);
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
          tmp95 = tmp100Result10;
        }
        if (tmp95) {
          tmp95 = !tmp36;
        }
        let formatToPlainStringResult1 = questDescription;
        if (tmp95) {
          const intl6 = tmp3(tmp4[46]).intl;
          let obj13 = { date: questFormattedDate };
          formatToPlainStringResult1 = intl6.formatToPlainString(tmp3(tmp4[46]).t["l1jCM/"], obj13);
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
                return { value: "HermesInternal", done: "HermesInternal" };
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
                    result = v3(QUEST_HOME_MOBILE[47]).dismissOverlayScreens();
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
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
              } catch (tmp9) {
                v3 = tmp;
                throw tmp9;
              }
            }
          }),
          items12,
        );
        let obj14 = { style: null, onLayout: null, children: null };
        const items13 = [tmp9.container];
        let obj15 = { marginHorizontal: tmp12 - questContent.containerPadding };
        items13[1] = obj15;
        obj14.style = items13;
        obj14.onLayout = function onLayout(arg0) {
          if (closure_0 != null) {
            tmp(arg0, quest.id);
          }
        };
        let obj16 = { visible: tmp82, glow: true, children: null };
        let obj17 = { style: null, children: null };
        const items14 = [tmp9.heroContainer];
        let obj18 = { minHeight: result, backgroundColor: gradientEnd };
        items14[1] = obj18;
        obj17.style = items14;
        const tmp3Result73 = tmp3(tmp4[54]);
        let obj19 = {
          source: null,
          style: null,
          onError: null,
          accessible: true,
          accessibilityRole: "image",
          accessibilityLabel: null,
        };
        let obj20 = { uri: memo.url };
        obj19.source = obj20;
        obj19.style = tmp9.heroImg;
        obj19.onError = callback;
        obj19.accessibilityLabel = quest.config.messages.questName;
        const items15 = [closure_11(quest(tmp4[62]), obj19), , ,];
        const obj21 = { style: tmp9.heroLinearGradientOverlay, start: null, end: null, colors: null };
        const tmp11Result = quest(tmp4[61]);
        obj21.start = tmp3(tmp4[64]).VerticalGradient.START;
        obj21.end = tmp3(tmp4[64]).VerticalGradient.END;
        const items16 = [gradientStart, gradientMid, gradientEnd];
        obj21.colors = items16;
        items15[1] = closure_11(quest(tmp4[63]), obj21);
        let preview = quest.preview;
        if (preview) {
          const obj22 = { style: tmp9.previewBadge, children: null };
          const obj23 = {
            variant: "body-xs/semibold",
            color: "text-overlay-light",
            style: tmp9.previewBadgeText,
            children: null,
          };
          const intl7 = tmp3(tmp4[46]).intl;
          obj23.children = intl7.string(tmp3(tmp4[46]).t.SKNnqq);
          obj22.children = tmp100(tmp3(tmp4[58]).Text, obj23);
          preview = tmp100(tmp103, obj22);
        }
        items15[2] = preview;
        const obj24 = { style: tmp9.heroFooterContainer, children: null };
        const obj25 = { style: tmp9.heroFooterLeftContainer, children: null };
        const obj26 = { assetUrl: questGameLogotypeAssetUrl, onError: callback };
        const items17 = [closure_11(quest(tmp4[65]), obj26)];
        const obj27 = { style: tmp9.promotedByRow, children: null };
        let str2 = "text-overlay-light";
        let str3 = "text-overlay-light";
        if (isThemeDarkResult) {
          str3 = "text-muted";
        }
        const obj28 = { variant: "body-xs/medium", color: str3, style: tmp9.shrinkableText, children: null };
        const intl8 = tmp3(tmp4[46]).intl;
        obj28.children = intl8.string(tmp3(tmp4[46]).t.VAbKhK);
        const items18 = [closure_11(tmp3(tmp4[58]).Text, obj28), ,];
        const obj29 = {
          source: null,
          style: null,
          accessible: true,
          accessibilityRole: "image",
          accessibilityLabel: null,
        };
        const tmp11Result3 = quest(tmp4[63]);
        obj29.source = quest(tmp4[66]);
        obj29.style = { height: 16, width: 16 };
        const intl9 = tmp3(tmp4[46]).intl;
        obj29.accessibilityLabel = intl9.string(tmp3(tmp4[46]).t.OfMjx9);
        items18[1] = closure_11(quest(tmp4[62]), obj29);
        const obj30 = {
          variant: "body-xs/medium",
          color: "text-overlay-light",
          style: tmp9.shrinkableText,
          children: quest.config.messages.gamePublisher,
        };
        items18[2] = closure_11(tmp3(tmp4[58]).Text, obj30);
        obj27.children = items18;
        items17[1] = defaultRewardNameWithArticle(closure_6, obj27);
        obj25.children = items17;
        const items19 = [defaultRewardNameWithArticle(closure_6, obj25)];
        let tmp100Result = !isQuestExpiredResult;
        if (!isQuestExpiredResult) {
          tmp100Result = !tmp36;
        }
        if (tmp100Result) {
          if (isThemeDarkResult) {
            str2 = "text-default";
          }
          const obj31 = { variant: "body-xs/medium", color: str2, style: tmp9.shrinkableText, children: null };
          const intl10 = tmp3(tmp4[46]).intl;
          const obj32 = { expiryDate: questFormattedDate1 };
          obj31.children = intl10.format(tmp3(tmp4[46]).t["7D8r4F"], obj32);
          tmp100Result = tmp100(tmp3(tmp4[58]).Text, obj31);
        }
        items19[1] = tmp100Result;
        obj24.children = items19;
        items15[3] = defaultRewardNameWithArticle(closure_6, obj24);
        obj17.children = items15;
        const items20 = [defaultRewardNameWithArticle(closure_6, obj17), ,];
        const obj33 = { style: tmp9.detailsWrapper, children: null };
        const obj34 = { style: tmp9.detailsContainer, children: null };
        const obj35 = { style: tmp9.rewardImgContainer, children: null };
        if (tmp8) {
          const obj36 = {
            quest,
            progress: obj5.useQuestCompletionDetails(quest).completedRatio,
            size: "sm",
            paused: !isFocused,
          };
          let tmp100Result6 = tmp100(quest(tmp4[67]), obj36);
        } else {
          let size = { quest, height: 64, width: 64, paused: !isFocused };
          tmp100Result6 = tmp100(quest(tmp4[68]), size);
        }
        obj35.children = tmp100Result6;
        const items21 = [closure_11(closure_6, obj35)];
        const obj37 = { style: tmp9.detailsTextContainer, children: null };
        const obj38 = {
          variant: "body-sm/medium",
          color: "text-brand",
          style: tmp9.questName,
          accessibilityRole: "header",
          children: formatToPlainStringResult,
        };
        const items22 = [closure_11(tmp3(tmp4[58]).Text, obj38)];
        const obj39 = { style: tmp9.bodyContainer, children: null };
        const obj40 = { style: tmp9.subtitleRow, children: null };
        const items23 = [memo1];
        if (shouldShowBonusOrbsUX) {
          const obj41 = { questId: quest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
          shouldShowBonusOrbsUX = tmp100(tmp3(tmp4[69]).QuestOrbMultiplierPerkPill, obj41);
        }
        items23[1] = shouldShowBonusOrbsUX;
        obj40.children = items23;
        const items24 = [defaultRewardNameWithArticle(closure_6, obj40)];
        let tmp100Result7 = null != formatToPlainStringResult1;
        if (tmp100Result7) {
          const obj42 = { variant: "body-sm/medium", color: "text-muted", children: formatToPlainStringResult1 };
          tmp100Result7 = tmp100(tmp3(tmp4[58]).Text, obj42);
        }
        items24[1] = tmp100Result7;
        obj39.children = items24;
        items22[1] = defaultRewardNameWithArticle(closure_6, obj39);
        obj37.children = items22;
        items21[1] = defaultRewardNameWithArticle(closure_6, obj37);
        obj34.children = items21;
        obj33.children = defaultRewardNameWithArticle(closure_6, obj34);
        items20[1] = closure_11(closure_6, obj33);
        const obj43 = {
          direction: "horizontal",
          align: "center",
          spacing: quest(tmp4[9]).space.PX_8,
          style: tmp9.buttonContainers,
          children: null,
        };
        const obj44 = { children: null };
        if (tmp48) {
          const obj45 = { grow: true, onPress, variant: "secondary", disabled: true, text: null };
          const intl11 = tmp3(tmp4[46]).intl;
          obj45.text = intl11.string(tmp3(tmp4[46]).t.V293qn);
          const items25 = [tmp100(tmp3(tmp4[71]).Button, obj45)];
          const obj46 = {
            onPress: function showQuestEnrollmentBlockedBottomSheet() {
              ActionSheetActionCreatorsDefault.openLazy(
                asyncRequireImpl(17454, dependencyMap.paths),
                "QuestEnrollmentBlockedBottomSheet",
                { questId: quest.id, questEnrollmentBlockedUntil, sourceQuestContent },
              );
            },
            variant: "tertiary",
            text: null,
          };
          const intl12 = tmp3(tmp4[46]).intl;
          obj46.text = intl12.string(tmp3(tmp4[46]).t.vY9GgG);
          items25[1] = tmp100(tmp3(tmp4[71]).Button, obj46);
          obj44.children = items25;
          let tmp113 = obj44;
        } else {
          if (tmp100Result8) {
            tmp100Result8 = !tmp48;
          }
          if (tmp100Result8) {
            tmp100Result8 = !isQuestExpiredResult;
          }
          if (tmp100Result8) {
            tmp100Result8 = !tmp36;
          }
          if (tmp100Result8) {
            tmp100Result8 = !tmp100Result10;
          }
          if (tmp100Result8) {
            const obj47 = { style: tmp9.equalWidthContainer, children: null };
            const obj48 = {
              grow: true,
              variant: "secondary",
              text: tmp3(tmp4[30]).getExternalCtaLabel(quest),
              onPress: callback1,
            };
            obj47.children = tmp100(tmp3(tmp4[71]).Button, obj48);
            tmp100Result8 = tmp100(tmp103, obj47);
            const tmp3Result75 = tmp3(tmp4[30]);
          }
          const items26 = [tmp100Result8];
          const obj49 = { style: tmp9.equalWidthContainer, children: null };
          const obj50 = { grow: true };
          let merged = Object.assign(obj59);
          obj49.children = tmp100(tmp3(tmp4[71]).Button, obj50);
          items26[1] = tmp100(tmp103, obj49);
          obj44.children = items26;
          tmp113 = obj44;
        }
        const items27 = [defaultRewardNameWithArticle(questEnrollmentBlockedUntil, tmp113), , ,];
        let tmp100Result9 = tmp100Result10;
        if (tmp100Result10) {
          tmp100Result9 = hasWatchVideoTasksResult;
        }
        if (tmp100Result9) {
          tmp100Result9 = hasWatchVideoOnMobileTasks;
        }
        if (tmp100Result9) {
          const obj51 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
          const intl13 = tmp3(tmp4[46]).intl;
          obj51.accessibilityLabel = intl13.string(tmp3(tmp4[46]).t.YsCuyF);
          obj51.icon = quest(tmp4[74]);
          obj51.onPress = callback2;
          tmp100Result9 = tmp100(tmp3(tmp4[73]).IconButton, obj51);
        }
        items27[1] = tmp100Result9;
        if (tmp100Result10) {
          tmp100Result10 = isMobileActivityQuest;
        }
        if (tmp100Result10) {
          const obj52 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
          const intl14 = tmp3(tmp4[46]).intl;
          obj52.accessibilityLabel = intl14.string(tmp3(tmp4[46]).t.CkUzLd);
          obj52.icon = quest(tmp4[74]);
          obj52.onPress = callback3;
          tmp100Result10 = tmp100(tmp3(tmp4[73]).IconButton, obj52);
        }
        items27[2] = tmp100Result10;
        const obj53 = { quest, showShareLink: !isQuestExpiredResult, location: tmp5.QUESTS_CARD, sourceQuestContent };
        items27[3] = closure_11(quest(tmp4[75]), obj53);
        obj43.children = items27;
        items20[2] = defaultRewardNameWithArticle(tmp3(tmp4[70]).Stack, obj43);
        obj16.children = items20;
        obj14.children = defaultRewardNameWithArticle(tmp11Result, obj16);
        return closure_11(tmp3(tmp4[60]).Card, obj14);
      }
      const obj54 = { text: null, loading: null, onPress: null };
      let intl3 = tmp3(tmp4[46]).intl;
      obj54.text = intl3.string(tmp3(tmp4[46]).t.cfY4PE);
      if (!isClaimingReward) {
        isClaimingReward = isFetchingRewardCode;
      }
      if (!isClaimingReward) {
        isClaimingReward = isFetching;
      }
      obj54.loading = isClaimingReward;
      obj54.onPress = function onPress() {
        const obj = captureAdUserAction;
        obj.captureAdUserAction({
          type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
          adCreativeType: AdCreativeType.AdCreativeType.QUEST,
          adCreativeId: quest.id,
          questContentCTA: AnalyticsTypes.QuestContentCTA.CLAIM_REWARD,
          surfaceId: QUEST_HOME_MOBILE,
          sourceQuestContent,
          impressionId: getQuestImpressionId(),
        });
        const obj2 = {
          type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
          adCreativeType: AdCreativeType.AdCreativeType.QUEST,
          adCreativeId: quest.id,
          questContentCTA: AnalyticsTypes.QuestContentCTA.CLAIM_REWARD,
          surfaceId: QUEST_HOME_MOBILE,
          sourceQuestContent,
          impressionId: getQuestImpressionId(),
        };
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
      let tmp73 = null;
      if (isQuestAccessSuspended) {
        tmp73 = obj6;
      }
      let merged1 = Object.assign(tmp73);
      obj59 = obj54;
    }
    if (isQuestExpiredResult) {
      const obj55 = { text: null, loading: null, disabled: true, variant: "secondary", onPress: null };
      let intl2 = tmp3(tmp4[46]).intl;
      const obj56 = { expiryDate: questFormattedDate1 };
      obj55.text = intl2.formatToPlainString(tmp3(tmp4[46]).t["6p8BZx"], obj56);
      let tmp71 = isClaimingReward;
      if (!isClaimingReward) {
        tmp71 = isFetchingRewardCode;
      }
      if (!tmp71) {
        tmp71 = isFetching;
      }
      obj55.loading = tmp71;
      obj55.onPress = onPress;
      obj59 = obj55;
    } else {
      if (tmp32) {
        if (hasWatchVideoTasksResult) {
          const obj57 = {
            text: tmp3(tmp4[48]).getVideoQuestWatchCtaText(questTaskDetails),
            accessibilityLabel: null,
            disabled: false,
            onPress: null,
          };
          const tmp3Result76 = tmp3(tmp4[48]);
          obj57.accessibilityLabel = tmp3(tmp4[48]).getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails);
          obj57.onPress = function onPress() {
            logger.log("Navigating to video quest bottom sheet");
            const obj = captureAdUserAction;
            obj.captureAdUserAction({
              type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
              adCreativeType: AdCreativeType.AdCreativeType.QUEST,
              adCreativeId: quest.id,
              questContentCTA: AnalyticsTypes.QuestContentCTA.WATCH_VIDEO,
              surfaceId: QUEST_HOME_MOBILE,
              sourceQuestContent,
              impressionId: getQuestImpressionId(),
            });
            if (hasWatchVideoOnMobileTasks) {
              const obj4 = { questId: quest.id, sourceQuestContent };
              openVideoQuestModalDefault(obj4);
            } else {
              const obj5 = { questId: quest.id, questContentPosition, sourceQuestContent };
              ActionSheetActionCreatorsDefault.openLazy(
                asyncRequireImpl(17409, dependencyMap.paths),
                "QuestBottomSheet",
                obj5,
              );
            }
            const obj2 = {
              type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
              adCreativeType: AdCreativeType.AdCreativeType.QUEST,
              adCreativeId: quest.id,
              questContentCTA: AnalyticsTypes.QuestContentCTA.WATCH_VIDEO,
              surfaceId: QUEST_HOME_MOBILE,
              sourceQuestContent,
              impressionId: getQuestImpressionId(),
            };
          };
          let tmp67 = null;
          if (isQuestAccessSuspended) {
            tmp67 = obj6;
          }
          let merged2 = Object.assign(tmp67);
          obj59 = obj57;
          const tmp3Result77 = tmp3(tmp4[48]);
        }
      }
      if (tmp32) {
        if (isMobileActivityQuest) {
          const obj58 = {
            text: primaryCtaCopy,
            icon: tmp3(tmp4[47]).getPrimaryCtaIcon(quest),
            disabled: false,
            onPress() {
              const obj = captureAdUserAction;
              obj.captureAdUserAction({
                type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
                adCreativeType: AdCreativeType.AdCreativeType.QUEST,
                adCreativeId: quest.id,
                questContentCTA: AnalyticsTypes.QuestContentCTA.LAUNCH_MOBILE_ACTIVITY,
                surfaceId: QUEST_HOME_MOBILE,
                sourceQuestContent,
                impressionId: getQuestImpressionId(),
              });
              callback3();
            },
          };
          let tmp63 = null;
          if (isQuestAccessSuspended) {
            tmp63 = obj6;
          }
          let merged3 = Object.assign(tmp63);
          obj59 = obj58;
          const tmp3Result78 = tmp3(tmp4[47]);
        }
      }
      if (tmp32) {
        if (!hasWatchVideoTasksResult) {
          if (!isMobileActivityQuest) {
            obj59 = { text: null, variant: "secondary", disabled: false, onPress: null };
            let intl = tmp3(tmp4[46]).intl;
            obj59.text = intl.string(tmp3(tmp4[46]).t.JiosAn);
            obj59.onPress = function onPress() {
              logger.log("Navigating to console connection action sheet");
              const obj = captureAdUserAction;
              obj.captureAdUserAction({
                type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
                adCreativeType: AdCreativeType.AdCreativeType.QUEST,
                adCreativeId: quest.id,
                questContentCTA: AnalyticsTypes.QuestContentCTA.VIEW_REQUIREMENTS,
                surfaceId: QUEST_HOME_MOBILE,
                sourceQuestContent,
                impressionId: getQuestImpressionId(),
              });
              const obj2 = {
                type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
                adCreativeType: AdCreativeType.AdCreativeType.QUEST,
                adCreativeId: quest.id,
                questContentCTA: AnalyticsTypes.QuestContentCTA.VIEW_REQUIREMENTS,
                surfaceId: QUEST_HOME_MOBILE,
                sourceQuestContent,
                impressionId: getQuestImpressionId(),
              };
              ActionSheetActionCreatorsDefault.openLazy(
                asyncRequireImpl(17409, dependencyMap.paths),
                "QuestBottomSheet",
                { questId: quest.id, questContentPosition, sourceQuestContent },
              );
            };
          }
        }
      }
      const obj60 = {
        text: primaryCtaCopy,
        disabled: false,
        loading: stateFromStoresObject.isEnrolling,
        accessibilityLabel: null,
        icon: null,
        onPress: null,
      };
      let videoQuestWatchCtaAccessibilityLabel;
      if (hasWatchVideoTasksResult) {
        videoQuestWatchCtaAccessibilityLabel = tmp3(tmp4[48]).getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails);
        const tmp3Result79 = tmp3(tmp4[48]);
      }
      obj60.accessibilityLabel = videoQuestWatchCtaAccessibilityLabel;
      let primaryCtaIcon;
      if (isMobileActivityQuest) {
        primaryCtaIcon = tmp3(tmp4[47]).getPrimaryCtaIcon(quest);
        const tmp3Result80 = tmp3(tmp4[47]);
      }
      obj60.icon = primaryCtaIcon;
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                tmp2(QUEST_HOME_MOBILE[50]);
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
                  quest(QUEST_HOME_MOBILE[49])(obj);
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
      obj60.onPress = function onPress() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      let tmp59 = null;
      if (isQuestAccessSuspended) {
        tmp59 = obj6;
      }
      let merged4 = Object.assign(tmp59);
      obj59 = obj60;
    }
  }
  const tmp3Result65 = tmp3(tmp4[30]);
});
