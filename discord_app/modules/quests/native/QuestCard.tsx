// === Module 15090: QuestCard ===

// Module 15090 (QuestCard)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import design_shared from "design/shared" /* 4412 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7602 */;
import MetricEvents from "MetricEvents" /* 7607 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 11192 */;
import AssetUtils from "AssetUtils" /* 11285 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11496 */;
import QuestUtils from "QuestUtils" /* 11767 */;
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet" /* 15118 */;
import openVideoQuestModalDefault from "openVideoQuestModal" /* 15124 */;
import VideoQuestModal from "VideoQuestModal" /* 15125 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import QuestStore from "QuestStore" /* 7703 */;

const ColorUtils = tmp(4409);
require = fn;
get_ActivityIndicator = fn(17);
({ Image: metroRequire, StyleSheet, View: closure_7 } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let createStyles = fn(4560);
let result = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const internal = nativeDefault.internal;
  const colors = nativeDefault.colors;
  const semanticColor = internal.resolveSemanticColor(theme, design_shared.isThemeDark(theme) ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK);
  const isThemeDarkResult = design_shared.isThemeDark(theme);
  return ColorUtils.hexOpacityToRgba(semanticColor, 0);
});
createStyles = fn(4560);
let result1 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const isThemeDarkResult = design_shared.isThemeDark(theme);
  const internal = nativeDefault.internal;
  const colors = nativeDefault.colors;
  const semanticColor = internal.resolveSemanticColor(theme, isThemeDarkResult ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK);
  let num = 0.5;
  if (isThemeDarkResult) {
    num = 0.8;
  }
  return ColorUtils.hexOpacityToRgba(semanticColor, num);
});
createStyles = fn(4560);
let result2 = createStyles.experimental_createToken((theme) => {
  const colors = nativeDefault.colors;
  return design_shared.isThemeDark(theme.theme) ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK;
});
const PX_16 = nativeDefault.space.PX_16;
fn(4560);
let obj = { container: null, heroContainer: null, heroImg: null, heroLinearGradientOverlay: null, previewBadge: null, previewBadgeText: null, rewardImgContainer: null, heroFooterContainer: null, heroFooterLeftContainer: null, promotedByRow: null, shrinkableText: null, detailsWrapper: null, detailsContainer: null, questName: null, bodyContainer: null, subtitleRow: null, rewardSubtitleRow: null, orbWithAmountRow: null, detailsTextContainer: null, buttonContainers: null, equalWidthContainer: null };
obj = { position: "relative", padding: 0, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: nativeDefault.space.PX_16, overflow: "hidden" };
obj.container = obj;
createStyles = { display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: nativeDefault.space.PX_12 };
obj.heroContainer = createStyles;
createStyles = { resizeMode: "cover" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.heroImg = createStyles;
obj.heroLinearGradientOverlay = StyleSheet.absoluteFillObject;
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm };
let merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj.previewBadge = rect;
obj.previewBadgeText = { textTransform: "uppercase" };
let size = { height: 64, width: 64, marginRight: nativeDefault.space.PX_12 };
obj.rewardImgContainer = size;
obj.heroFooterContainer = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end" };
obj.heroFooterLeftContainer = { display: "flex", flexDirection: "column", alignItems: "flex-start", flexShrink: 1 };
createStyles = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", columnGap: nativeDefault.space.PX_4, rowGap: nativeDefault.space.PX_4 };
obj.promotedByRow = createStyles;
obj.shrinkableText = { flexShrink: 1 };
createStyles = { display: "flex", padding: nativeDefault.space.PX_12 };
obj.detailsWrapper = createStyles;
obj.detailsContainer = { display: "flex", flexDirection: "row" };
obj.questName = { marginBottom: nativeDefault.space.PX_4 };
let obj5 = { marginBottom: nativeDefault.space.PX_4 };
obj.bodyContainer = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
let obj6 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
obj.subtitleRow = { flexDirection: "row", alignItems: "center", rowGap: nativeDefault.space.PX_4, columnGap: nativeDefault.space.PX_8, flexWrap: "wrap" };
obj.rewardSubtitleRow = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", flexShrink: 1 };
obj.orbWithAmountRow = { flexDirection: "row", alignItems: "center", flexShrink: 1 };
obj.detailsTextContainer = { flex: 1, justifyContent: "center" };
let obj7 = { flexDirection: "row", alignItems: "center", rowGap: nativeDefault.space.PX_4, columnGap: nativeDefault.space.PX_8, flexWrap: "wrap" };
obj.buttonContainers = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12 };
obj.equalWidthContainer = { flexBasis: 0, flexGrow: 1, flexShrink: 1 };
let closure_16 = createStyles.createStyles(obj);
createStyles = fn(4560);
let closure_17 = createStyles.createStyleProperties({ gradientStart: result, gradientMid: result1, gradientEnd: result2 });
let obj8 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12 };
size = fn(2);
let result3 = size.fileFinishedImporting("modules/quests/native/QuestCard.tsx");

export const ESTIMATED_CARD_HEIGHT = 348;
export const QuestCard = noop.memo((questContent) => {
  function trackClick(CLAIM_REWARD) {
    let obj = AdAnalyticsInterfaceExperiment;
    if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_card")) {
      obj = { type: tmp(11197).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(5451).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: CLAIM_REWARD, surfaceId: QUEST_HOME_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
      tmp(11193).captureAdUserAction(obj);
      const tmpResult = tmp(11193);
    } else {
      obj = { questId: quest.id, questContent: QUEST_HOME_MOBILE, questContentCTA: CLAIM_REWARD, sourceQuestContent };
      closure_6(obj);
    }
  }
  function showQuestBottomSheet() {
    const obj = { questId: quest.id, questContentPosition, sourceQuestContent };
    obj.openLazy(asyncRequireImpl(15120, dependencyMap.paths), "QuestBottomSheet", obj);
  }
  ({ onLayout: require, quest } = questContent);
  let QUEST_HOME_MOBILE = questContent.questContent;
  if (undefined === QUEST_HOME_MOBILE) {
    QUEST_HOME_MOBILE = require("QuestTypes").QuestContent.QUEST_HOME_MOBILE;
  }
  ({ questContentPosition: asyncGeneratorStep, sourceQuestContent } = questContent);
  const tmp3 = require;
  const tmp4 = QUEST_HOME_MOBILE;
  require("getQuestLogger");
  let obj = { quest, location: first.QUEST_HOME_MOBILE };
  noop = obj.getQuestLogger(obj);
  let obj2 = require("AnalyticsHooks");
  closure_6 = obj2.useTrackQuestContentClickedWithImpression();
  let obj3 = require("hooks/QuestHooks");
  const questTaskDetails = obj3.useQuestTaskDetails(quest);
  let obj4 = require("hooks/QuestHooks");
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const tmp9 = closure_16();
  const shrinkableText = tmp9;
  const diff = quest(tmp4[17])().width - 2 * hasWatchVideoOnMobileTasks;
  UserStore = diff;
  let result = 0.2803030303030303 * diff;
  QuestStore = result;
  let obj5 = noop;
  let items = [quest, diff, result];
  const memo = noop.useMemo(() => {
    let obj = AssetUtils;
    const questAsset = obj.getQuestAsset(quest, AssetUtils.QuestAssetType.HERO);
    obj = {};
    const merged = Object.assign(questAsset);
    const obj3 = AssetUtils;
    if (questAsset.isAnimated) {
      const size = { assetUrl: questAsset.url, width: diff, height: result };
      let url = obj3.getScaledFirstFrameImageUrl(size);
      if (url == null) {
        url = questAsset.url;
      }
      obj.url = url;
      let tmp5 = obj;
    } else {
      const size1 = { assetUrl: questAsset.url, width: diff, height: result };
      obj.url = obj3.getScaledImageUrl(size1);
      tmp5 = obj;
    }
    return tmp5;
  }, items);
  let tmp3Result = tmp3(tmp4[19]);
  const questGameLogotypeAssetUrl = tmp3Result.useQuestGameLogotypeAssetUrl(quest);
  ({ gradientEnd, gradientStart, gradientMid } = product());
  tmp3Result = tmp3(tmp4[20]);
  let items1 = [quest.id];
  let tmp17 = sourceQuestContent(tmp3Result.useRecyclingState(null, items1), 2);
  first = tmp17[0];
  onPress = tmp19;
  let items2 = [tmp17[1]];
  const callback = noop.useCallback(() => {
    closure_11(false);
  }, items2);
  let items3 = [first, quest.id, QUEST_HOME_MOBILE];
  const effect = noop.useEffect(() => {
    if (false === first) {
      const obj = { name: MetricEvents.MetricEvents.QUEST_CONTENT_RENDERING_FAILURE, tags: null };
      const _HermesInternal = HermesInternal;
      const items = ["quest_id:" + quest.id, , ];
      const _HermesInternal2 = HermesInternal;
      items[1] = "quest_content:" + AnalyticsTypes.getQuestContentName(QUEST_HOME_MOBILE);
      items[2] = "reason:asset_loading_error";
      obj.tags = items;
      obj.increment(obj);
    }
  }, items3);
  const tmp11 = hasWatchVideoOnMobileTasks;
  const tmp16 = product();
  const tmp8 = null != enrolledAt;
  const items4 = [UserStore];
  const stateFromStores = tmp3(tmp4[24]).useStateFromStores(items4, () => diff.getCurrentUser());
  const tmp3Result1 = tmp3(tmp4[24]);
  const defaultRewardNameWithArticle = tmp3(tmp4[25]).getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const tmp3Result2 = tmp3(tmp4[25]);
  const items5 = [QuestStore];
  const stateFromStoresObject = tmp3(tmp4[24]).useStateFromStoresObject(items5, () => ({ reward: QuestStore.getRewards(quest.id), isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id), isClaimingReward: QuestStore.isClaimingReward(quest.id), isEnrolling: QuestStore.isEnrolling(quest.id), questEnrollmentBlockedUntil: QuestStore.questEnrollmentBlockedUntil }));
  ({ isFetchingRewardCode, isClaimingReward, questEnrollmentBlockedUntil } = stateFromStoresObject);
  const tmp3Result3 = tmp3(tmp4[24]);
  const userStatus2 = quest.userStatus;
  let completedAt;
  if (userStatus2 != null) {
    completedAt = userStatus2.completedAt;
  }
  const questFormattedDate = tmp3(tmp4[16]).useQuestFormattedDate(completedAt, { year: "numeric", month: "long", day: "numeric" });
  const tmp3Result4 = tmp3(tmp4[16]);
  const hasWatchVideoTasksResult = tmp3(tmp4[26]).hasWatchVideoTasks(quest);
  const tmp3Result5 = tmp3(tmp4[26]);
  hasWatchVideoOnMobileTasks = tmp3(tmp4[19]).useHasWatchVideoOnMobileTasks(quest.config);
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
  let tmp92Result4 = null != completedAt1;
  const userStatus5 = quest.userStatus;
  let claimedAt;
  if (userStatus5 != null) {
    claimedAt = userStatus5.claimedAt;
  }
  closure_16 = tmp35;
  const tmp3Result6 = tmp3(tmp4[19]);
  const isQuestExpiredResult = tmp3(tmp4[27]).isQuestExpired(quest);
  const tmp3Result7 = tmp3(tmp4[27]);
  const isQuestExpiredButWithinThirtyDayLookback = tmp3(tmp4[27]).getIsQuestExpiredButWithinThirtyDayLookback(quest);
  const tmp3Result8 = tmp3(tmp4[27]);
  const tmp3Result9 = tmp3(tmp4[28]);
  const tmp38 = quest(tmp4[29])();
  const isThemeDarkResult = tmp3(tmp4[11]).isThemeDark(tmp38);
  const tmp3Result10 = tmp3(tmp4[11]);
  const result1 = tmp3(tmp4[25]).hasCollectiblesQuestReward(quest.config);
  const tmp3Result11 = tmp3(tmp4[25]);
  let skuId = null;
  if (result1) {
    skuId = null;
    if (tmp92Result4) {
      skuId = tmp3Result9.getDefaultReward(quest.config).skuId;
    }
  }
  const fetchCollectiblesProduct = tmp3(tmp4[30]).useFetchCollectiblesProduct(skuId);
  product = fetchCollectiblesProduct.product;
  const isFetching = fetchCollectiblesProduct.isFetching;
  const tmp3Result12 = tmp3(tmp4[30]);
  const items6 = [UserStore];
  const currentUserHasVerifiedEmailOrPhone = tmp3(tmp4[24]).useStateFromStores(items6, () => {
    const currentUser = diff.getCurrentUser();
    result = undefined;
    if (currentUser != null) {
      result = currentUser.hasVerifiedEmailOrPhone();
    }
    return result;
  });
  const tmp3Result13 = tmp3(tmp4[24]);
  const items7 = [UserStore];
  const currentUserHasVerifiedEmail = tmp3(tmp4[24]).useStateFromStores(items7, () => {
    const currentUser = diff.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    return verified;
  });
  const tmp3Result14 = tmp3(tmp4[24]);
  const mobileActivityQuest = tmp3(tmp4[19]).useMobileActivityQuest(quest);
  const isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  const tmp3Result15 = tmp3(tmp4[19]);
  const token = tmp3(tmp4[31]).useToken(tmp10(tmp4[9]).colors.BACKGROUND_BASE_LOWER);
  const tmp3Result16 = tmp3(tmp4[31]);
  const token1 = tmp3(tmp4[31]).useToken(tmp10(tmp4[9]).colors.BACKGROUND_BASE_LOW);
  const tmp3Result17 = tmp3(tmp4[31]);
  let tmp47 = null != questEnrollmentBlockedUntil;
  const token2 = tmp3(tmp4[31]).useToken(tmp10(tmp4[9]).colors.BACKGROUND_BASE_LOWEST);
  if (tmp47) {
    tmp47 = !tmp31;
  }
  if (tmp47) {
    tmp47 = !tmp92Result4;
  }
  if (tmp47) {
    tmp47 = !tmp35;
  }
  const tmp3Result18 = tmp3(tmp4[31]);
  const isQuestAccessSuspended = tmp3(tmp4[16]).useIsQuestAccessSuspended();
  obj = {
    disabled: true,
    onPressDisabled() {
      closure_6({ questId: quest.id, questContent: QUEST_HOME_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent });
      openQuestAccessSuspendedBottomSheetDefault();
    }
  };
  const tmp3Result19 = tmp3(tmp4[16]);
  const questFormattedDate1 = tmp3(tmp4[16]).useQuestFormattedDate(quest.config.expiresAt, { month: "numeric", day: "numeric" });
  const tmp3Result20 = tmp3(tmp4[16]);
  const getQuestImpressionId = tmp3(tmp4[33]).useGetQuestImpressionId();
  const items8 = [quest, QUEST_HOME_MOBILE, getQuestImpressionId, sourceQuestContent];
  const callback1 = obj5.useCallback(() => {
    const obj = { content: QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    obj.openGameLinkDirectly(quest, obj);
  }, items8);
  const tmp3Result21 = tmp3(tmp4[33]);
  const primaryCtaCopy = tmp3(tmp4[42]).usePrimaryCtaCopy({ quest, application: mobileActivityQuest.questApplication, shortText: true });
  if (null != product) {
    const styles2 = product.styles;
    let buttonColors;
    if (styles2 != null) {
      buttonColors = styles2.buttonColors;
    }
    if (buttonColors == null) {
      buttonColors = [];
    }
    let obj1 = { buttonColors, confettiColors: null, backgroundColors: null };
    const styles = product.styles;
    let confettiColors;
    if (styles != null) {
      confettiColors = styles.confettiColors;
    }
    if (confettiColors == null) {
      confettiColors = [];
    }
    obj1.confettiColors = confettiColors;
    const items9 = [tmp10(tmp4[43])(token1), tmp10(tmp4[43])(token), tmp10(tmp4[43])(token2)];
    obj1.backgroundColors = items9;
    product.styles = obj1;
  }
  if (null != claimedAt) {
    obj2 = { text: null, loading: null, onPress: null };
    let intl4 = tmp3(tmp4[44]).intl;
    obj2.text = intl4.string(tmp3(tmp4[44]).t.vTgCWx);
    obj2.loading = isFetching;
    obj2.onPress = function onPress() {
      trackClick(AnalyticsTypes.QuestContentCTA.SHOW_REWARD);
      const obj = { product, quest, questContent: QUEST_HOME_MOBILE, questContentPosition, sourceQuestContent };
      obj.viewReward(obj);
    };
    let obj8 = obj2;
  } else {
    if (tmp92Result4) {
      obj3 = { text: null, loading: null, onPress: null };
      let intl3 = tmp3(tmp4[44]).intl;
      obj3.text = intl3.string(tmp3(tmp4[44]).t.cfY4PE);
      if (!isClaimingReward) {
        isClaimingReward = isFetchingRewardCode;
      }
      if (!isClaimingReward) {
        isClaimingReward = isFetching;
      }
      obj3.loading = isClaimingReward;
      obj3.onPress = function onPress() {
        trackClick(AnalyticsTypes.QuestContentCTA.CLAIM_REWARD);
        const obj = { product, quest, questContent: QUEST_HOME_MOBILE, questContentPosition, currentUserHasVerifiedEmailOrPhone, currentUserHasVerifiedEmail, sourceQuestContent };
        result = obj.handleRewardClaimThenView(obj);
      };
      let tmp70 = null;
      if (isQuestAccessSuspended) {
        tmp70 = obj;
      }
      let merged = Object.assign(tmp70);
      obj8 = obj3;
    }
    if (isQuestExpiredResult) {
      obj4 = { text: null, loading: null, disabled: true, variant: "secondary", onPress: null };
      let intl2 = tmp3(tmp4[44]).intl;
      obj5 = { expiryDate: questFormattedDate1 };
      obj4.text = intl2.formatToPlainString(tmp3(tmp4[44]).t["6p8BZx"], obj5);
      let tmp68 = isClaimingReward;
      if (!isClaimingReward) {
        tmp68 = isFetchingRewardCode;
      }
      if (!tmp68) {
        tmp68 = isFetching;
      }
      obj4.loading = tmp68;
      obj4.onPress = onPress;
      obj8 = obj4;
    } else {
      if (tmp31) {
        if (hasWatchVideoTasksResult) {
          let obj6 = { text: tmp3(tmp4[46]).getVideoQuestWatchCtaText(questTaskDetails), accessibilityLabel: null, disabled: false, onPress: null };
          const tmp3Result23 = tmp3(tmp4[46]);
          obj6.accessibilityLabel = tmp3(tmp4[46]).getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails);
          obj6.onPress = function onPress() {
            logger.log("Navigating to video quest bottom sheet");
            trackClick(AnalyticsTypes.QuestContentCTA.WATCH_VIDEO);
            if (hasWatchVideoOnMobileTasks) {
              let obj = { questId: quest.id, sourceQuestContent };
              tmp5(15124)(obj);
            } else {
              obj = { questId: quest.id, questContentPosition, sourceQuestContent };
              tmp5(4527).openLazy(asyncRequireImpl(15120, dependencyMap.paths), "QuestBottomSheet", obj);
              const tmp5Result = tmp5(4527);
            }
          };
          let tmp64 = null;
          if (isQuestAccessSuspended) {
            tmp64 = obj;
          }
          let merged1 = Object.assign(tmp64);
          obj8 = obj6;
          const tmp3Result24 = tmp3(tmp4[46]);
        }
      }
      if (tmp31) {
        if (isMobileActivityQuest) {
          let obj7 = {
            text: primaryCtaCopy,
            icon: tmp3(tmp4[45]).getPrimaryCtaIcon(quest),
            disabled: false,
            onPress() {
                      trackClick(AnalyticsTypes.QuestContentCTA.LAUNCH_MOBILE_ACTIVITY);
                      callback3();
                    }
          };
          let tmp60 = null;
          if (isQuestAccessSuspended) {
            tmp60 = obj;
          }
          let merged2 = Object.assign(tmp60);
          obj8 = obj7;
          const tmp3Result25 = tmp3(tmp4[45]);
        }
      }
      if (tmp31) {
        if (!hasWatchVideoTasksResult) {
          if (!isMobileActivityQuest) {
            obj8 = { text: null, variant: "secondary", disabled: false, onPress: null };
            let intl = tmp3(tmp4[44]).intl;
            obj8.text = intl.string(tmp3(tmp4[44]).t.JiosAn);
            obj8.onPress = function onPress() {
              logger.log("Navigating to console connection action sheet");
              trackClick(AnalyticsTypes.QuestContentCTA.VIEW_REQUIREMENTS);
              const obj = { questId: quest.id, questContentPosition, sourceQuestContent };
              obj.openLazy(asyncRequireImpl(15120, dependencyMap.paths), "QuestBottomSheet", obj);
            };
          }
        }
      }
      let obj9 = { text: primaryCtaCopy, disabled: false, loading: stateFromStoresObject.isEnrolling, accessibilityLabel: null, icon: null, onPress: null };
      let videoQuestWatchCtaAccessibilityLabel;
      if (hasWatchVideoTasksResult) {
        videoQuestWatchCtaAccessibilityLabel = tmp3(tmp4[46]).getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails);
        const tmp3Result26 = tmp3(tmp4[46]);
      }
      obj9.accessibilityLabel = videoQuestWatchCtaAccessibilityLabel;
      let primaryCtaIcon;
      if (isMobileActivityQuest) {
        primaryCtaIcon = tmp3(tmp4[45]).getPrimaryCtaIcon(quest);
        const tmp3Result27 = tmp3(tmp4[45]);
      }
      obj9.icon = primaryCtaIcon;
      closure_25 = asyncGeneratorStep(async (arg0, value) => {
        if (dependencyMap === 2) {
          dependencyMap = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            dependencyMap = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                obj = { value, done: true };
                return obj;
              } else {
                logger.log("Enrolling in quest");
                tmp2(11276);
                let obj1 = { questContent: QUEST_HOME_MOBILE, questContentCTA: null, sourceQuestContent: null };
                if (!isMobileActivityQuest) {
                  if (!hasWatchVideoTasksResult) {
                    let START_QUEST = tmp30(7728).QuestContentCTA.ACCEPT_QUEST;
                  }
                  obj1.questContentCTA = START_QUEST;
                  obj1.sourceQuestContent = sourceQuestContent;
                  obj1 = tmp33(tmp35, obj1);
                  v1 = 1;
                  dependencyMap = 1;
                }
                START_QUEST = tmp30(7728).QuestContentCTA.START_QUEST;
              }
            } else if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else {
              if (closure_128_14) {
                if (closure_128_15) {
                  obj = { questId: closure_128_1.id, sourceQuestContent: closure_128_4 };
                  v1(15124)(obj);
                  dependencyMap = 3;
                }
                closure_128_32();
              }
              if (!closure_128_20) {
                closure_128_24();
              }
            }
          } catch (tmp21) {
            dependencyMap = tmp;
            throw tmp21;
          }
        }
      });
      obj9.onPress = function() {
        const self = this;
        const apply = closure_25.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      let tmp56 = null;
      if (isQuestAccessSuspended) {
        tmp56 = obj;
      }
      let merged3 = Object.assign(tmp56);
      obj8 = obj9;
    }
  }
  const intl5 = tmp3(tmp4[44]).intl;
  let obj10 = { questName: quest.config.messages.questName };
  const tmp3Result22 = tmp3(tmp4[42]);
  const formatToPlainStringResult = intl5.formatToPlainString(tmp3(tmp4[44]).t.EAYZAr, { questName: quest.config.messages.questName });
  const result2 = tmp3(tmp4[25]).hasVirtualCurrencyReward(quest.config);
  const tmp3Result28 = tmp3(tmp4[25]);
  const questOrbMultiplierEligibility = tmp3(tmp4[49]).useQuestOrbMultiplierEligibility();
  const tmp3Result29 = tmp3(tmp4[49]);
  let shouldShowBonusOrbsUX = tmp3(tmp4[16]).useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility);
  let tmp78 = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    tmp78 = questOrbMultiplierEligibility === tmp3(tmp4[50]).QuestOrbMultiplierEligibilityType.NITRO;
  }
  const userStatus6 = quest.userStatus;
  let orbQuantityClaimed;
  if (userStatus6 != null) {
    orbQuantityClaimed = userStatus6.orbQuantityClaimed;
  }
  if (orbQuantityClaimed == null) {
    orbQuantityClaimed = tmp3(tmp4[25]).getVirtualCurrencyRewardOrbQuantity(quest.config);
    const tmp3Result31 = tmp3(tmp4[25]);
  }
  const tmp3Result30 = tmp3(tmp4[16]);
  const questOrbRewardQuantityForUser = tmp3(tmp4[25]).getQuestOrbRewardQuantityForUser(quest.config, stateFromStores);
  const tmp3Result32 = tmp3(tmp4[25]);
  const defaultRewardName = tmp3(tmp4[25]).getDefaultRewardName(quest.config, stateFromStores);
  const tmp3Result33 = tmp3(tmp4[25]);
  const fontScale = tmp3(tmp4[51]).useFontScale();
  const tmp3Result34 = tmp3(tmp4[51]);
  const scaledTextLineHeight = tmp3(tmp4[52]).useScaledTextLineHeight("text-md/semibold");
  const tmp3Result35 = tmp3(tmp4[52]);
  const questDescription = tmp3(tmp4[42]).useQuestDescription(quest, sourceQuestContent, tmp5.QUEST_HOME_MOBILE, tmp3(tmp4[53]).GameProfileSources.QuestHome);
  const result3 = 16 * Math.min(fontScale, 1.3);
  const items10 = [null != claimedAt, result2, questOrbRewardQuantityForUser, orbQuantityClaimed, defaultRewardName, defaultRewardNameWithArticle, result3, scaledTextLineHeight, , , ];
  ({ orbWithAmountRow: arr13[8], rewardSubtitleRow: arr13[9], shrinkableText: arr13[10] } = tmp9);
  let tmp87 = isQuestExpiredResult;
  const memo1 = obj5.useMemo(() => {
    let obj = PlatformUtils;
    let num = 0;
    if (obj.isAndroid()) {
      num = 16 / scaledTextLineHeight;
    }
    result = tmp / 8;
    obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: shrinkableText.shrinkableText };
    const size = { width: tmp, height: tmp, marginRight: result, marginTop: 0, transform: null };
    const items = [{ translateY: num }];
    size.transform = items;
    if (closure_16) {
      if (result2) {
        obj = { style: tmp6.orbWithAmountRow, children: null };
        const obj1 = { size: "custom", color: "mobile-text-heading-primary", style: size };
        const items1 = [closure_2_12(tmp2(8837).OrbsIcon, obj1), , ];
        const obj2 = { style: null };
        const obj3 = { width: result };
        obj2.style = obj3;
        items1[1] = closure_2_12(React5, obj2);
        const obj4 = {};
        const merged = Object.assign(obj);
        const intl4 = tmp2(1114).intl;
        let num4 = orbQuantityClaimed;
        if (orbQuantityClaimed == null) {
          num4 = 0;
        }
        const obj5 = { orbAmount: num4 };
        obj4.children = intl4.format(tmp2(1114).t["nLXlh+"], obj5);
        items1[2] = closure_2_12(tmp2(4556).Text, obj4);
        obj.children = items1;
        let tmp15Result = map1(React5, obj);
      }
      return tmp15Result;
    }
    if (closure_16) {
      const obj6 = {};
      const merged1 = Object.assign(obj);
      obj6.children = defaultRewardName;
      tmp15Result = closure_2_12(tmp2(4556).Text, obj6);
    } else if (result2) {
      const obj7 = { style: tmp6.rewardSubtitleRow, children: null };
      const obj8 = {};
      const merged2 = Object.assign(obj);
      const intl2 = tmp2(1114).intl;
      const obj9 = {
        rewardWithArticleHook() {
            return null;
          }
      };
      obj8.children = intl2.format(tmp2(1114).t["0IUT4Y"], obj9);
      const items2 = [closure_2_12(tmp2(4556).Text, obj8), ];
      const obj10 = { style: tmp6.orbWithAmountRow, children: null };
      const obj11 = { size: "custom", color: "mobile-text-heading-primary", style: size };
      const items3 = [closure_2_12(tmp2(8837).OrbsIcon, obj11), , ];
      const obj12 = { style: null };
      const obj13 = { width: result };
      obj12.style = obj13;
      items3[1] = closure_2_12(React5, obj12);
      const obj14 = {};
      const merged3 = Object.assign(obj);
      const intl3 = tmp2(1114).intl;
      let num3 = questOrbRewardQuantityForUser;
      if (questOrbRewardQuantityForUser == null) {
        num3 = 0;
      }
      const obj15 = { orbAmount: num3 };
      obj14.children = intl3.format(tmp2(1114).t["nLXlh+"], obj15);
      items3[2] = closure_2_12(tmp2(4556).Text, obj14);
      obj10.children = items3;
      items2[1] = map1(React5, obj10);
      obj7.children = items2;
      tmp15Result = tmp15(tmp16, obj7);
    } else {
      const obj16 = {};
      const merged4 = Object.assign(obj);
      const intl = tmp2(1114).intl;
      const obj17 = {
        rewardWithArticleHook() {
            return defaultRewardNameWithArticle;
          }
      };
      obj16.children = intl.format(tmp2(1114).t["0IUT4Y"], obj17);
      tmp15Result = closure_2_12(tmp2(4556).Text, obj16);
    }
  }, items10);
  if (isQuestExpiredResult) {
    tmp87 = tmp92Result4;
  }
  if (tmp87) {
    tmp87 = !tmp35;
  }
  let formatToPlainStringResult1 = questDescription;
  if (tmp87) {
    const intl6 = tmp3(tmp4[44]).intl;
    let obj11 = { date: questFormattedDate };
    formatToPlainStringResult1 = intl6.formatToPlainString(tmp3(tmp4[44]).t["l1jCM/"], obj11);
  }
  const tmp3Result36 = tmp3(tmp4[42]);
  const items11 = [quest.id, sourceQuestContent];
  const ctaLink = tmp3(tmp4[28]).getCtaLink(quest.config);
  const callback2 = obj5.useCallback(() => {
    const obj = { questId: quest.id, initialStep: VideoQuestModal.VideoQuestModalSteps.WATCH_VIDEO, sourceQuestContent };
    openVideoQuestModalDefault(obj);
  }, items11);
  const items12 = [launchMobileActivity];
  const callback3 = obj5.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            let obj1 = v3(QUEST_HOME_MOBILE[45]);
            result = obj1.dismissOverlayScreens();
            c1 = 1;
            v3 = 1;
            obj1 = { value: launchMobileActivity(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          v3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        v3 = tmp;
        throw tmp9;
      }
    }
  }), items12);
  let obj12 = {
    style: null,
    onLayout(arg0) {
      if (require != null) {
        tmp(arg0, quest.id);
      }
    },
    children: null
  };
  const items13 = [tmp9.container, { marginHorizontal: tmp11 - questContent.containerPadding }];
  obj12.style = items13;
  let obj13 = { visible: tmp78, glow: true, children: null };
  let obj14 = { style: null, children: null };
  const items14 = [tmp9.heroContainer, { minHeight: result, backgroundColor: gradientEnd }];
  obj14.style = items14;
  tmp10(tmp4[59]);
  const items15 = [defaultRewardNameWithArticle(quest(tmp4[60]), { source: { uri: memo.url }, style: tmp9.heroImg, onError: callback, accessible: true, accessibilityRole: "image", accessibilityLabel: quest.config.messages.questName }), , , ];
  let obj16 = { style: tmp9.heroLinearGradientOverlay, start: null, end: null, colors: null };
  const tmp10Result = tmp10(tmp4[61]);
  obj16.start = tmp3(tmp4[62]).VerticalGradient.START;
  obj16.end = tmp3(tmp4[62]).VerticalGradient.END;
  const items16 = [gradientStart, gradientMid, gradientEnd];
  obj16.colors = items16;
  items15[1] = defaultRewardNameWithArticle(tmp10Result, obj16);
  let preview = quest.preview;
  if (preview) {
    let obj17 = { style: tmp9.previewBadge, children: null };
    const obj18 = { variant: "eyebrow", color: "text-overlay-light", style: tmp9.previewBadgeText, children: null };
    const intl7 = tmp3(tmp4[44]).intl;
    obj18.children = intl7.string(tmp3(tmp4[44]).t.SKNnqq);
    obj17.children = tmp92(tmp3(tmp4[56]).Text, obj18);
    preview = tmp92(tmp95, obj17);
  }
  items15[2] = preview;
  const obj19 = { style: tmp9.heroFooterContainer, children: null };
  const obj20 = { style: tmp9.heroFooterLeftContainer, children: null };
  const items17 = [defaultRewardNameWithArticle(quest(tmp4[63]), { assetUrl: questGameLogotypeAssetUrl, onError: callback }), ];
  const obj21 = { style: tmp9.promotedByRow, children: null };
  let str = "text-overlay-light";
  let str2 = "text-overlay-light";
  if (isThemeDarkResult) {
    str2 = "text-muted";
  }
  const obj22 = { variant: "text-xs/medium", color: str2, style: tmp9.shrinkableText, children: null };
  const intl8 = tmp3(tmp4[44]).intl;
  obj22.children = intl8.string(tmp3(tmp4[44]).t.VAbKhK);
  const items18 = [defaultRewardNameWithArticle(tmp3(tmp4[56]).Text, obj22), , ];
  const obj23 = { source: quest(tmp4[64]), style: { height: 16, width: 16 }, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
  const intl9 = tmp3(tmp4[44]).intl;
  obj23.accessibilityLabel = intl9.string(tmp3(tmp4[44]).t.OfMjx9);
  items18[1] = defaultRewardNameWithArticle(closure_6, obj23);
  items18[2] = defaultRewardNameWithArticle(tmp3(tmp4[56]).Text, { variant: "text-xs/medium", color: "text-overlay-light", style: tmp9.shrinkableText, children: quest.config.messages.gamePublisher });
  obj21.children = items18;
  items17[1] = questEnrollmentBlockedUntil(shrinkableText, obj21);
  obj20.children = items17;
  const items19 = [questEnrollmentBlockedUntil(shrinkableText, obj20), ];
  let tmp92Result = !isQuestExpiredResult;
  if (!isQuestExpiredResult) {
    tmp92Result = !tmp35;
  }
  if (tmp92Result) {
    if (isThemeDarkResult) {
      str = "text-default";
    }
    const obj25 = { variant: "text-xs/medium", color: str, style: tmp9.shrinkableText, children: null };
    const intl10 = tmp3(tmp4[44]).intl;
    const obj26 = { expiryDate: questFormattedDate1 };
    obj25.children = intl10.format(tmp3(tmp4[44]).t["7D8r4F"], obj26);
    tmp92Result = tmp92(tmp3(tmp4[56]).Text, obj25);
  }
  items19[1] = tmp92Result;
  obj19.children = items19;
  items15[3] = questEnrollmentBlockedUntil(shrinkableText, obj19);
  obj14.children = items15;
  const items20 = [questEnrollmentBlockedUntil(shrinkableText, obj14), , ];
  const obj27 = { style: tmp9.detailsWrapper, children: null };
  const obj28 = { style: tmp9.detailsContainer, children: null };
  const obj29 = { style: tmp9.rewardImgContainer, children: null };
  if (tmp8) {
    const obj30 = { quest, progress: obj4.useQuestCompletionDetails(quest).completedRatio, size: "sm" };
    tmp92Result = tmp92(tmp10(tmp4[65]), obj30);
  } else {
    let size = { quest, height: 64, width: 64 };
    tmp92Result = tmp92(tmp10(tmp4[66]), size);
  }
  obj29.children = tmp92Result;
  const items21 = [defaultRewardNameWithArticle(shrinkableText, obj29), ];
  const obj31 = { style: tmp9.detailsTextContainer, children: null };
  const items22 = [defaultRewardNameWithArticle(tmp3(tmp4[56]).Text, { variant: "eyebrow", color: "text-brand", style: tmp9.questName, accessibilityRole: "header", children: formatToPlainStringResult }), ];
  const obj33 = { style: tmp9.bodyContainer, children: null };
  const obj34 = { style: tmp9.subtitleRow, children: null };
  const items23 = [memo1, ];
  if (shouldShowBonusOrbsUX) {
    const obj35 = { questId: quest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
    shouldShowBonusOrbsUX = tmp92(tmp3(tmp4[67]).QuestOrbMultiplierPerkPill, obj35);
  }
  items23[1] = shouldShowBonusOrbsUX;
  obj34.children = items23;
  const items24 = [questEnrollmentBlockedUntil(shrinkableText, obj34), ];
  let tmp92Result1 = null != formatToPlainStringResult1;
  if (tmp92Result1) {
    const obj36 = { variant: "text-sm/medium", color: "text-muted", children: formatToPlainStringResult1 };
    tmp92Result1 = tmp92(tmp3(tmp4[56]).Text, obj36);
  }
  items24[1] = tmp92Result1;
  obj33.children = items24;
  items22[1] = questEnrollmentBlockedUntil(shrinkableText, obj33);
  obj31.children = items22;
  items21[1] = questEnrollmentBlockedUntil(shrinkableText, obj31);
  obj28.children = items21;
  obj27.children = questEnrollmentBlockedUntil(shrinkableText, obj28);
  items20[1] = defaultRewardNameWithArticle(shrinkableText, obj27);
  const obj37 = { direction: "horizontal", align: "center", spacing: quest(tmp4[9]).space.PX_8, style: tmp9.buttonContainers, children: null };
  const obj38 = { children: null };
  if (tmp47) {
    const obj39 = { grow: true, onPress, variant: "secondary", disabled: true, text: null };
    const intl11 = tmp3(tmp4[44]).intl;
    obj39.text = intl11.string(tmp3(tmp4[44]).t.V293qn);
    const items25 = [tmp92(tmp3(tmp4[69]).Button, obj39), ];
    const obj40 = {
      onPress() {
          const obj = { questId: quest.id, questEnrollmentBlockedUntil, sourceQuestContent };
          obj.openLazy(asyncRequireImpl(15168, dependencyMap.paths), "QuestEnrollmentBlockedBottomSheet", obj);
        },
      variant: "tertiary",
      text: null
    };
    const intl12 = tmp3(tmp4[44]).intl;
    obj40.text = intl12.string(tmp3(tmp4[44]).t.vY9GgG);
    items25[1] = tmp92(tmp3(tmp4[69]).Button, obj40);
    obj38.children = items25;
    let tmp105 = obj38;
  } else {
    let tmp92Result2 = "" !== ctaLink && !tmp47 && !isQuestExpiredResult && !tmp35 && !tmp92Result4;
    if (tmp92Result2) {
      const obj41 = { style: tmp9.equalWidthContainer, children: null };
      const obj42 = { grow: true, variant: "secondary", text: tmp3(tmp4[28]).getExternalCtaLabel(quest), onPress: callback1 };
      obj41.children = tmp92(tmp3(tmp4[69]).Button, obj42);
      tmp92Result2 = tmp92(tmp95, obj41);
      const tmp3Result38 = tmp3(tmp4[28]);
    }
    const items26 = [tmp92Result2, ];
    const obj43 = { style: tmp9.equalWidthContainer, children: null };
    const obj44 = { grow: true };
    let merged4 = Object.assign(obj8);
    obj43.children = tmp92(tmp3(tmp4[69]).Button, obj44);
    items26[1] = tmp92(tmp95, obj43);
    obj38.children = items26;
    tmp105 = obj38;
  }
  const items27 = [questEnrollmentBlockedUntil(hasWatchVideoTasksResult, tmp105), , , ];
  let tmp92Result3 = tmp92Result4;
  if (tmp92Result4) {
    tmp92Result3 = hasWatchVideoTasksResult;
  }
  if (tmp92Result3) {
    tmp92Result3 = hasWatchVideoOnMobileTasks;
  }
  if (tmp92Result3) {
    const obj45 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
    const intl13 = tmp3(tmp4[44]).intl;
    obj45.accessibilityLabel = intl13.string(tmp3(tmp4[44]).t.YsCuyF);
    obj45.icon = tmp10(tmp4[72]);
    obj45.onPress = callback2;
    tmp92Result3 = tmp92(tmp3(tmp4[71]).IconButton, obj45);
  }
  items27[1] = tmp92Result3;
  if (tmp92Result4) {
    tmp92Result4 = isMobileActivityQuest;
  }
  if (tmp92Result4) {
    const obj46 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
    const intl14 = tmp3(tmp4[44]).intl;
    obj46.accessibilityLabel = intl14.string(tmp3(tmp4[44]).t.CkUzLd);
    obj46.icon = tmp10(tmp4[72]);
    obj46.onPress = callback3;
    tmp92Result4 = tmp92(tmp3(tmp4[71]).IconButton, obj46);
  }
  items27[2] = tmp92Result4;
  items27[3] = defaultRewardNameWithArticle(quest(tmp4[73]), { quest, showShareLink: !isQuestExpiredResult, location: first.QUESTS_CARD, sourceQuestContent });
  obj37.children = items27;
  items20[2] = questEnrollmentBlockedUntil(tmp3(tmp4[68]).Stack, obj37);
  obj13.children = items20;
  obj12.children = questEnrollmentBlockedUntil(tmp10Result, obj13);
  return defaultRewardNameWithArticle(tmp3(tmp4[58]).Card, obj12);
});