// === Module 14613: ESTIMATED_CARD_HEIGHT ===

// Module 14613 (ESTIMATED_CARD_HEIGHT)
import ThemesDefault from "Themes" /* 712 */;
import _mod1350 from "module_1350" /* 1350 */;
import hexToRgba from "hexToRgba" /* 4292 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import closure_9 from "initializeState" /* 7371 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 5334 */;
import { NOOP } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
let c5 = importAllResult;
({ Image: closure_6, StyleSheet, View: error } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let result = createCacheKey.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = _mod1350;
  const tmp = require;
  const internal = ThemesDefault.internal;
  const colors = ThemesDefault.colors;
  const semanticColor = internal.resolveSemanticColor(theme, _mod1350.isThemeDark(theme) ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK);
  const isThemeDarkResult = _mod1350.isThemeDark(theme);
  return hexToRgba.hexOpacityToRgba(semanticColor, 0);
});
let result1 = createCacheKey.experimental_createToken((theme) => {
  theme = theme.theme;
  const isThemeDarkResult = _mod1350.isThemeDark(theme);
  const internal = ThemesDefault.internal;
  const colors = ThemesDefault.colors;
  const semanticColor = internal.resolveSemanticColor(theme, isThemeDarkResult ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK);
  const obj = _mod1350;
  const tmp = require;
  let num = 0.5;
  if (isThemeDarkResult) {
    num = 0.8;
  }
  return hexToRgba.hexOpacityToRgba(semanticColor, num);
});
let result2 = createCacheKey.experimental_createToken((theme) => {
  const obj = _mod1350;
  const colors = ThemesDefault.colors;
  return _mod1350.isThemeDark(theme.theme) ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK;
});
const PX_16 = ThemesDefault.space.PX_16;
let obj = { container: null, heroContainer: null, heroImg: null, heroLinearGradientOverlay: null, previewBadge: null, previewBadgeText: null, rewardImgContainer: null, heroFooterContainer: null, heroFooterLeftContainer: null, detailsWrapper: null, detailsContainer: null, questName: null, bodyContainer: null, subtitleRow: null, orbWithAmountRow: null, detailsTextContainer: null, buttonContainers: null, equalWidthContainer: null };
obj = { position: "relative", padding: 0, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: ThemesDefault.space.PX_16, overflow: "hidden" };
obj[0] = obj;
createCacheKey = { display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: ThemesDefault.space.PX_12 };
obj[1] = createCacheKey;
createCacheKey = { resizeMode: "cover" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj[2] = createCacheKey;
obj[3] = StyleSheet.absoluteFillObject;
createCacheKey = { position: "absolute", top: ThemesDefault.space.PX_8, right: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, padding: ThemesDefault.space.PX_4, borderRadius: ThemesDefault.radii.sm };
let merged1 = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
obj[4] = createCacheKey;
obj[5] = { textTransform: "uppercase" };
createCacheKey = { height: 64, width: 64, marginRight: ThemesDefault.space.PX_12 };
obj[6] = createCacheKey;
obj[7] = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end" };
obj[8] = { display: "flex", flexDirection: "column", alignItems: "flex-start" };
obj[9] = { display: "flex", padding: ThemesDefault.space.PX_12 };
obj[10] = { display: "flex", flexDirection: "row" };
let obj5 = { display: "flex", padding: ThemesDefault.space.PX_12 };
obj[11] = { marginBottom: ThemesDefault.space.PX_4 };
let obj6 = { marginBottom: ThemesDefault.space.PX_4 };
obj[12] = { display: "flex", flexDirection: "column", gap: ThemesDefault.space.PX_4 };
let obj7 = { display: "flex", flexDirection: "column", gap: ThemesDefault.space.PX_4 };
obj[13] = { flexDirection: "row", alignItems: "center", rowGap: ThemesDefault.space.PX_4, columnGap: ThemesDefault.space.PX_8, flexWrap: "wrap" };
obj[14] = { flexDirection: "row", alignItems: "center" };
obj[15] = { flex: 1, justifyContent: "center" };
let obj8 = { flexDirection: "row", alignItems: "center", rowGap: ThemesDefault.space.PX_4, columnGap: ThemesDefault.space.PX_8, flexWrap: "wrap" };
obj[16] = { borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", padding: ThemesDefault.space.PX_12 };
obj[17] = { flexBasis: 0, flexGrow: 1, flexShrink: 1 };
let closure_16 = createCacheKey.createStyles(obj);
let closure_17 = createCacheKey.createStyleProperties({ gradientStart: result, gradientMid: result1, gradientEnd: result2 });
let obj9 = { borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", padding: ThemesDefault.space.PX_12 };
const memoResult = importAllResult.memo((questContent) => {
  function trackClick(CLAIM_REWARD) {
    let obj = closure_1_0(QUEST_HOME_MOBILE[34]);
    if (obj.shouldMigrateToAdAnalyticsInterface(closure_1_0(QUEST_HOME_MOBILE[34]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_card")) {
      obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
      obj[0] = tmp(tmp2[36]).AdUserActionType.CLICK_INTERNAL;
      obj[1] = tmp(tmp2[37]).AdCreativeType.QUEST;
      obj[2] = quest.id;
      obj[3] = CLAIM_REWARD;
      obj[4] = QUEST_HOME_MOBILE;
      obj[5] = sourceQuestContent;
      obj[6] = getQuestImpressionId();
      tmp(tmp2[35]).captureAdUserAction(obj);
      const tmpResult = tmp(tmp2[35]);
    } else {
      obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
      obj[0] = quest.id;
      obj[1] = QUEST_HOME_MOBILE;
      obj[2] = CLAIM_REWARD;
      obj[3] = sourceQuestContent;
      callback(obj);
    }
  }
  function showQuestBottomSheet() {
    let obj = quest(QUEST_HOME_MOBILE[39]);
    obj = { questId: quest.id, questContentPosition: closure_3, sourceQuestContent };
    obj.openLazy(closure_1_0(QUEST_HOME_MOBILE[41])(QUEST_HOME_MOBILE[40], QUEST_HOME_MOBILE.paths), "QuestBottomSheet", obj);
  }
  ({ onLayout: require, quest } = questContent);
  let QUEST_HOME_MOBILE = questContent.questContent;
  if (undefined === QUEST_HOME_MOBILE) {
    let merged4 = require;
    QUEST_HOME_MOBILE = require(QUEST_HOME_MOBILE[13]).QuestContent.QUEST_HOME_MOBILE;
  }
  ({ questContentPosition: closure_3, sourceQuestContent } = questContent);
  const tmp3 = require;
  const tmp4 = QUEST_HOME_MOBILE;
  let obj = require(QUEST_HOME_MOBILE[14]);
  obj = { quest, location: first.QUEST_HOME_MOBILE };
  importAllResult = obj.getQuestLogger(obj);
  let obj2 = require(QUEST_HOME_MOBILE[15]);
  closure_6 = obj2.useTrackQuestContentClickedWithImpression();
  let obj3 = require(QUEST_HOME_MOBILE[16]);
  const questTaskDetails = obj3.useQuestTaskDetails(quest);
  let obj4 = require(QUEST_HOME_MOBILE[16]);
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const tmp9 = callback2();
  closure_7 = tmp9;
  const diff = quest(tmp4[17])().width - 2 * hasWatchVideoOnMobileTasks;
  let result = 0.2803030303030303 * diff;
  closure_9 = result;
  let obj5 = importAllResult;
  let items = [quest, diff, result];
  const memo = importAllResult.useMemo(() => {
    let obj = closure_1_0(QUEST_HOME_MOBILE[18]);
    const questAsset = obj.getQuestAsset(quest, closure_1_0(QUEST_HOME_MOBILE[18]).QuestAssetType.HERO);
    obj = {};
    const merged = Object.assign(questAsset);
    const obj3 = closure_1_0(QUEST_HOME_MOBILE[18]);
    if (questAsset.isAnimated) {
      obj = { assetUrl: null, width: null, height: null };
      obj[0] = questAsset.url;
      obj[1] = closure_8;
      obj[2] = closure_9;
      let url = obj3.getScaledFirstFrameImageUrl(obj);
      if (url == null) {
        url = questAsset.url;
      }
      obj.url = url;
      let tmp5 = obj;
    } else {
      obj1 = { assetUrl: null, width: null, height: null };
      obj1[0] = questAsset.url;
      obj1[1] = closure_8;
      obj1[2] = closure_9;
      obj.url = obj3.getScaledImageUrl(obj1);
      tmp5 = obj;
    }
    return tmp5;
  }, items);
  let tmp3Result = tmp3(tmp4[19]);
  const questGameLogotypeAssetUrl = tmp3Result.useQuestGameLogotypeAssetUrl(quest);
  ({ gradientStart, gradientMid, gradientEnd } = product());
  tmp3Result = tmp3(tmp4[20]);
  let items1 = [quest.id];
  let tmp17 = sourceQuestContent(tmp3Result.useRecyclingState(null, items1), 2);
  first = tmp17[0];
  closure_11 = tmp19;
  let items2 = [tmp17[1]];
  const callback = importAllResult.useCallback(() => {
    callback2(false);
  }, items2);
  let items3 = [first, quest.id, QUEST_HOME_MOBILE];
  const effect = importAllResult.useEffect(() => {
    if (false === first) {
      let obj = quest(QUEST_HOME_MOBILE[21]);
      obj = { name: null, tags: null };
      obj[0] = closure_1_0(QUEST_HOME_MOBILE[22]).MetricEvents.QUEST_CONTENT_RENDERING_FAILURE;
      const _HermesInternal = HermesInternal;
      const items = ["quest_id:" + quest.id, , ];
      const _HermesInternal2 = HermesInternal;
      items[1] = "quest_content:" + closure_1_0(QUEST_HOME_MOBILE[23]).getQuestContentName(QUEST_HOME_MOBILE);
      items[2] = "reason:asset_loading_error";
      obj[1] = items;
      obj.increment(obj);
      const obj3 = closure_1_0(QUEST_HOME_MOBILE[23]);
    }
  }, items3);
  const tmp11 = hasWatchVideoOnMobileTasks;
  const tmp16 = product();
  const tmp8 = null != enrolledAt;
  const items4 = [diff];
  const stateFromStores = tmp3(tmp4[24]).useStateFromStores(items4, () => diff.getCurrentUser());
  const tmp3Result1 = tmp3(tmp4[24]);
  const defaultRewardNameWithArticle = tmp3(tmp4[25]).getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const tmp3Result2 = tmp3(tmp4[25]);
  const items5 = [closure_9];
  const stateFromStoresObject = tmp3(tmp4[24]).useStateFromStoresObject(items5, () => ({ reward: result.getRewards(quest.id), isFetchingRewardCode: result.isFetchingRewardCode(quest.id), isClaimingReward: result.isClaimingReward(quest.id), isEnrolling: result.isEnrolling(quest.id), questEnrollmentBlockedUntil: result.questEnrollmentBlockedUntil }));
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
  let tmp92Result2 = null != completedAt1;
  const userStatus5 = quest.userStatus;
  let claimedAt;
  if (userStatus5 != null) {
    claimedAt = userStatus5.claimedAt;
  }
  callback2 = tmp35;
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
    if (tmp92Result2) {
      skuId = tmp3Result9.getDefaultReward(quest.config).skuId;
    }
  }
  const fetchCollectiblesProduct = tmp3(tmp4[30]).useFetchCollectiblesProduct(skuId);
  product = fetchCollectiblesProduct.product;
  const isFetching = fetchCollectiblesProduct.isFetching;
  const tmp3Result12 = tmp3(tmp4[30]);
  const items6 = [diff];
  closure_18 = tmp3(tmp4[24]).useStateFromStores(items6, () => {
    const currentUser = diff.getCurrentUser();
    result = undefined;
    if (currentUser != null) {
      result = currentUser.hasVerifiedEmailOrPhone();
    }
    return result;
  });
  const tmp3Result13 = tmp3(tmp4[24]);
  const items7 = [diff];
  closure_19 = tmp3(tmp4[24]).useStateFromStores(items7, () => {
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
    tmp47 = !tmp92Result2;
  }
  if (tmp47) {
    tmp47 = !tmp35;
  }
  const tmp3Result18 = tmp3(tmp4[31]);
  const isQuestAccessSuspended = tmp3(tmp4[16]).useIsQuestAccessSuspended();
  obj = {
    disabled: true,
    onPressDisabled() {
      callback({ questId: quest.id, questContent: QUEST_HOME_MOBILE, questContentCTA: closure_1_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent });
      quest(QUEST_HOME_MOBILE[32])();
    }
  };
  const tmp3Result19 = tmp3(tmp4[16]);
  const questFormattedDate1 = tmp3(tmp4[16]).useQuestFormattedDate(quest.config.expiresAt, { month: "numeric", day: "numeric" });
  const tmp3Result20 = tmp3(tmp4[16]);
  const getQuestImpressionId = tmp3(tmp4[33]).useGetQuestImpressionId();
  const items8 = [quest, QUEST_HOME_MOBILE, getQuestImpressionId, sourceQuestContent];
  const callback1 = obj5.useCallback(() => {
    let obj = closure_1_0(QUEST_HOME_MOBILE[38]);
    obj = { content: QUEST_HOME_MOBILE, ctaContent: closure_1_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
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
    obj1 = { buttonColors: null, confettiColors: null, backgroundColors: null };
    obj1[0] = buttonColors;
    const styles = product.styles;
    let confettiColors;
    if (styles != null) {
      confettiColors = styles.confettiColors;
    }
    if (confettiColors == null) {
      confettiColors = [];
    }
    obj1[1] = confettiColors;
    const items9 = [tmp10(tmp4[43])(token1), tmp10(tmp4[43])(token), tmp10(tmp4[43])(token2)];
    obj1[2] = items9;
    product.styles = obj1;
  }
  if (null != claimedAt) {
    obj2 = { text: null, loading: null, onPress: null };
    let intl4 = tmp3(tmp4[44]).intl;
    obj2[0] = intl4.string(tmp3(tmp4[44]).t.vTgCWx);
    obj2[1] = isFetching;
    obj2[2] = function onPress() {
      trackClick(closure_1_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.SHOW_REWARD);
      let obj = closure_1_0(QUEST_HOME_MOBILE[45]);
      obj = { product: closure_17, quest, questContent: QUEST_HOME_MOBILE, questContentPosition: closure_3, sourceQuestContent };
      obj.viewReward(obj);
    };
    let obj8 = obj2;
  } else {
    if (tmp92Result2) {
      obj3 = { text: null, loading: null, onPress: null };
      let intl3 = tmp3(tmp4[44]).intl;
      obj3[0] = intl3.string(tmp3(tmp4[44]).t.cfY4PE);
      if (!isClaimingReward) {
        isClaimingReward = isFetchingRewardCode;
      }
      if (!isClaimingReward) {
        isClaimingReward = isFetching;
      }
      obj3[1] = isClaimingReward;
      obj3[2] = function onPress() {
        trackClick(closure_1_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.CLAIM_REWARD);
        let obj = closure_1_0(QUEST_HOME_MOBILE[45]);
        obj = { product: closure_17, quest, questContent: QUEST_HOME_MOBILE, questContentPosition: closure_3, currentUserHasVerifiedEmailOrPhone: closure_18, currentUserHasVerifiedEmail: closure_19, sourceQuestContent };
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
      obj5 = { expiryDate: null };
      obj5[0] = questFormattedDate1;
      obj4[0] = intl2.formatToPlainString(tmp3(tmp4[44]).t["6p8BZx"], obj5);
      let tmp68 = isClaimingReward;
      if (!isClaimingReward) {
        tmp68 = isFetchingRewardCode;
      }
      if (!tmp68) {
        tmp68 = isFetching;
      }
      obj4[1] = tmp68;
      obj4[4] = closure_11;
      obj8 = obj4;
    } else {
      if (tmp31) {
        if (hasWatchVideoTasksResult) {
          let obj6 = { text: null, accessibilityLabel: null, disabled: false, onPress: null };
          obj6[0] = tmp3(tmp4[46]).getVideoQuestWatchCtaText(questTaskDetails);
          const tmp3Result23 = tmp3(tmp4[46]);
          obj6[1] = tmp3(tmp4[46]).getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails);
          obj6[3] = function onPress() {
            logger.log("Navigating to video quest bottom sheet");
            trackClick(closure_1_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.WATCH_VIDEO);
            if (hasWatchVideoOnMobileTasks) {
              let obj = { questId: null, sourceQuestContent: null };
              obj[0] = quest.id;
              obj[1] = sourceQuestContent;
              tmp5(tmp3[47])(obj);
            } else {
              obj = { questId: null, questContentPosition: null, sourceQuestContent: null };
              obj[0] = quest.id;
              obj[1] = closure_3;
              obj[2] = sourceQuestContent;
              tmp5(tmp3[39]).openLazy(closure_1_0(tmp3[41])(tmp3[40], tmp3.paths), "QuestBottomSheet", obj);
              const tmp5Result = tmp5(tmp3[39]);
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
          let obj7 = { text: null, icon: null, disabled: false, onPress: null };
          obj7[0] = primaryCtaCopy;
          obj7[1] = tmp3(tmp4[45]).getPrimaryCtaIcon(quest);
          obj7[3] = function onPress() {
            trackClick(closure_1_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY);
            callback3();
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
            obj8[0] = intl.string(tmp3(tmp4[44]).t.JiosAn);
            obj8[3] = function onPress() {
              logger.log("Navigating to console connection action sheet");
              trackClick(closure_1_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.VIEW_REQUIREMENTS);
              let obj = quest(QUEST_HOME_MOBILE[39]);
              obj = { questId: quest.id, questContentPosition: closure_3, sourceQuestContent };
              obj.openLazy(closure_1_0(QUEST_HOME_MOBILE[41])(QUEST_HOME_MOBILE[40], QUEST_HOME_MOBILE.paths), "QuestBottomSheet", obj);
            };
          }
        }
      }
      let obj9 = { text: null, disabled: false, loading: null, accessibilityLabel: null, icon: null, onPress: null };
      obj9[0] = primaryCtaCopy;
      obj9[2] = stateFromStoresObject.isEnrolling;
      let videoQuestWatchCtaAccessibilityLabel;
      if (hasWatchVideoTasksResult) {
        videoQuestWatchCtaAccessibilityLabel = tmp3(tmp4[46]).getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails);
        const tmp3Result26 = tmp3(tmp4[46]);
      }
      obj9[3] = videoQuestWatchCtaAccessibilityLabel;
      let primaryCtaIcon;
      if (isMobileActivityQuest) {
        primaryCtaIcon = tmp3(tmp4[45]).getPrimaryCtaIcon(quest);
        const tmp3Result27 = tmp3(tmp4[45]);
      }
      obj9[4] = primaryCtaIcon;
      closure_25 = callback(function*() {
        if (dependencyMap === 2) {
          dependencyMap = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            dependencyMap = 2;
            if (0 === v0) {
              if (arg0 === 1) {
                dependencyMap = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_0 = tmp2;
                closure_1_5.log("Enrolling in quest");
                closure_1_0(10601);
                obj1 = { questContent: null, questContentCTA: null, sourceQuestContent: null };
                obj1[0] = dependencyMap;
                if (!closure_1_20) {
                  if (!closure_1_14) {
                    let START_QUEST = tmp31(7398).QuestContentCTA.ACCEPT_QUEST;
                  }
                  obj1[1] = START_QUEST;
                  obj1[2] = closure_1_4;
                  obj1 = tmp34(tmp36, obj1);
                  v0 = 1;
                  dependencyMap = 1;
                }
                START_QUEST = tmp31(7398).QuestContentCTA.START_QUEST;
              }
            } else if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              if (closure_14) {
                if (closure_15) {
                  obj = { questId: null, sourceQuestContent: null };
                  obj[0] = v0.id;
                  obj[1] = closure_4;
                  v0(14647)(obj);
                  dependencyMap = 3;
                }
                callback2();
              }
              if (!closure_20) {
                callback();
              }
            }
          } catch (tmp21) {
            dependencyMap = tmp;
            throw tmp21;
          }
        }
      });
      obj9[5] = function() {
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
  const items10 = [null != claimedAt, result2, questOrbRewardQuantityForUser, orbQuantityClaimed, defaultRewardName, defaultRewardNameWithArticle, result3, scaledTextLineHeight, tmp9.orbWithAmountRow];
  let tmp87 = isQuestExpiredResult;
  const memo1 = obj5.useMemo(() => {
    let obj = closure_1_0(QUEST_HOME_MOBILE[54]);
    let num = 0;
    if (obj.isAndroid()) {
      num = 16 / scaledTextLineHeight;
    }
    result = tmp / 8;
    obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
    obj = { width: tmp, height: tmp, marginRight: result, marginTop: 0, transform: items };
    items = [{ translateY: num }];
    if (closure_16) {
      if (result2) {
        obj1 = { style: null, children: null };
        obj1[0] = closure_7.orbWithAmountRow;
        const obj2 = { size: "custom", color: "mobile-text-heading-primary", style: null };
        obj2[2] = obj;
        const items1 = [defaultRewardNameWithArticle(tmp2(tmp3[55]).OrbsIcon, obj2), , ];
        const obj3 = { style: null };
        const obj4 = { width: null };
        obj4[0] = result;
        obj3[0] = obj4;
        items1[1] = defaultRewardNameWithArticle(closure_7, obj3);
        const obj5 = {};
        const merged = Object.assign(obj);
        const intl4 = tmp2(tmp3[44]).intl;
        let num4 = orbQuantityClaimed;
        if (orbQuantityClaimed == null) {
          num4 = 0;
        }
        const obj6 = { orbAmount: null };
        obj6[0] = num4;
        obj5.children = intl4.format(tmp2(tmp3[44]).t["nLXlh+"], obj6);
        items1[2] = defaultRewardNameWithArticle(tmp2(tmp3[56]).Text, obj5);
        obj1[1] = items1;
        let tmp14Result = questEnrollmentBlockedUntil(closure_7, obj1);
        const tmp30 = questEnrollmentBlockedUntil;
        const tmp31 = closure_7;
        const tmp33 = defaultRewardNameWithArticle;
      }
      return tmp14Result;
    }
    if (closure_16) {
      const obj7 = {};
      const merged1 = Object.assign(obj);
      obj7.children = defaultRewardName;
      tmp14Result = defaultRewardNameWithArticle(tmp2(tmp3[56]).Text, obj7);
    } else if (result2) {
      const obj8 = { style: null, children: null };
      obj8[0] = closure_7.orbWithAmountRow;
      const obj9 = {};
      const merged2 = Object.assign(obj);
      const intl2 = tmp2(tmp3[44]).intl;
      const obj10 = { rewardWithArticleHook: null };
      obj10[0] = function rewardWithArticleHook() {
        return null;
      };
      obj9.children = intl2.format(tmp2(tmp3[44]).t["0IUT4Y"], obj10);
      const items2 = [defaultRewardNameWithArticle(tmp2(tmp3[56]).Text, obj9), ];
      const obj11 = { style: null, children: null };
      obj11[0] = closure_7.orbWithAmountRow;
      const obj12 = { size: "custom", color: "mobile-text-heading-primary", style: null };
      obj12[2] = obj;
      const items3 = [defaultRewardNameWithArticle(tmp2(tmp3[55]).OrbsIcon, obj12), , ];
      const obj13 = { style: null };
      const obj14 = { width: null };
      obj14[0] = result;
      obj13[0] = obj14;
      items3[1] = defaultRewardNameWithArticle(closure_7, obj13);
      const obj15 = {};
      const merged3 = Object.assign(obj);
      const intl3 = tmp2(tmp3[44]).intl;
      let num3 = questOrbRewardQuantityForUser;
      if (questOrbRewardQuantityForUser == null) {
        num3 = 0;
      }
      const obj16 = { orbAmount: null };
      obj16[0] = num3;
      obj15.children = intl3.format(tmp2(tmp3[44]).t["nLXlh+"], obj16);
      items3[2] = defaultRewardNameWithArticle(tmp2(tmp3[56]).Text, obj15);
      obj11[1] = items3;
      items2[1] = questEnrollmentBlockedUntil(closure_7, obj11);
      obj8[1] = items2;
      tmp14Result = tmp14(tmp15, obj8);
      const tmp17 = defaultRewardNameWithArticle;
    } else {
      const obj17 = {};
      const merged4 = Object.assign(obj);
      const intl = tmp2(tmp3[44]).intl;
      const obj18 = { rewardWithArticleHook: null };
      obj18[0] = function rewardWithArticleHook() {
        return closure_12;
      };
      obj17.children = intl.format(tmp2(tmp3[44]).t["0IUT4Y"], obj18);
      tmp14Result = defaultRewardNameWithArticle(tmp2(tmp3[56]).Text, obj17);
    }
  }, items10);
  if (isQuestExpiredResult) {
    tmp87 = tmp92Result2;
  }
  if (tmp87) {
    tmp87 = !tmp35;
  }
  let formatToPlainStringResult1 = questDescription;
  if (tmp87) {
    const intl6 = tmp3(tmp4[44]).intl;
    let obj11 = { date: null };
    obj11[0] = questFormattedDate;
    formatToPlainStringResult1 = intl6.formatToPlainString(tmp3(tmp4[44]).t["l1jCM/"], obj11);
  }
  const tmp3Result36 = tmp3(tmp4[42]);
  const items11 = [quest.id, sourceQuestContent];
  const ctaLink = tmp3(tmp4[28]).getCtaLink(quest.config);
  callback2 = obj5.useCallback(() => {
    const obj = { questId: quest.id, initialStep: closure_1_0(QUEST_HOME_MOBILE[57]).VideoQuestModalSteps.WATCH_VIDEO, sourceQuestContent };
    quest(QUEST_HOME_MOBILE[47])(obj);
  }, items11);
  const items12 = [launchMobileActivity];
  const callback3 = obj5.useCallback(callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            obj1 = v0(closure_1_2[45]);
            result = obj1.dismissOverlayScreens();
            c1 = 1;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_21();
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        v0 = tmp;
        throw tmp9;
      }
    }
  }), items12);
  let obj12 = {
    style: items13,
    onLayout(arg0) {
      if (closure_0 != null) {
        tmp(arg0, quest.id);
      }
    },
    children: null
  };
  items13 = [tmp9.container, { marginHorizontal: tmp11 - questContent.containerPadding }];
  let obj13 = { visible: tmp78, glow: true, children: null };
  let obj14 = { style: items14, children: null };
  items14 = [tmp9.heroContainer, { height: result }];
  let tmp10Result = tmp10(tmp4[59]);
  const items15 = [defaultRewardNameWithArticle(quest(tmp4[60]), { source: obj16, style: tmp9.heroImg, onError: callback, accessible: true, accessibilityRole: "image", accessibilityLabel: quest.config.messages.questName }), , , ];
  let obj17 = { style: tmp9.heroLinearGradientOverlay, start: null, end: null, colors: null };
  tmp10Result = tmp10(tmp4[61]);
  obj17[1] = tmp3(tmp4[62]).VerticalGradient.START;
  obj17[2] = tmp3(tmp4[62]).VerticalGradient.END;
  const items16 = [gradientStart, gradientMid, gradientEnd];
  obj17[3] = items16;
  items15[1] = defaultRewardNameWithArticle(tmp10Result, obj17);
  let preview = quest.preview;
  if (preview) {
    let obj18 = { style: null, children: null };
    obj18[0] = tmp9.previewBadge;
    const obj19 = { variant: "eyebrow", color: "text-overlay-light", style: null, children: null };
    obj19[2] = tmp9.previewBadgeText;
    const intl7 = tmp3(tmp4[44]).intl;
    obj19[3] = intl7.string(tmp3(tmp4[44]).t.SKNnqq);
    obj18[1] = tmp92(tmp3(tmp4[56]).Text, obj19);
    preview = tmp92(tmp95, obj18);
  }
  items15[2] = preview;
  const obj20 = { style: tmp9.heroFooterContainer, children: null };
  const obj21 = { style: tmp9.heroFooterLeftContainer, children: null };
  const items17 = [defaultRewardNameWithArticle(quest(tmp4[63]), { assetUrl: questGameLogotypeAssetUrl, onError: callback }), ];
  let str = "text-overlay-light";
  let str2 = "text-overlay-light";
  if (isThemeDarkResult) {
    str2 = "text-muted";
  }
  const obj22 = { direction: "horizontal", align: "center", spacing: 4, children: null };
  const obj23 = { variant: "text-xs/medium", color: str2, children: null };
  const intl8 = tmp3(tmp4[44]).intl;
  obj23[2] = intl8.string(tmp3(tmp4[44]).t.VAbKhK);
  const items18 = [defaultRewardNameWithArticle(tmp3(tmp4[56]).Text, obj23), , ];
  const obj24 = { source: quest(tmp4[65]), style: { height: 16, width: 16 }, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
  const intl9 = tmp3(tmp4[44]).intl;
  obj24[4] = intl9.string(tmp3(tmp4[44]).t.OfMjx9);
  items18[1] = defaultRewardNameWithArticle(closure_6, obj24);
  items18[2] = defaultRewardNameWithArticle(tmp3(tmp4[56]).Text, { variant: "text-xs/medium", color: "text-overlay-light", children: quest.config.messages.gamePublisher });
  obj22[3] = items18;
  items17[1] = questEnrollmentBlockedUntil(tmp3(tmp4[64]).Stack, obj22);
  obj21[1] = items17;
  const items19 = [questEnrollmentBlockedUntil(closure_7, obj21), ];
  let tmp92Result = !isQuestExpiredResult;
  if (!isQuestExpiredResult) {
    tmp92Result = !tmp35;
  }
  if (tmp92Result) {
    if (isThemeDarkResult) {
      str = "text-default";
    }
    const obj26 = { variant: "text-xs/medium", color: null, children: null };
    obj26[1] = str;
    const intl10 = tmp3(tmp4[44]).intl;
    const obj27 = { expiryDate: null };
    obj27[0] = questFormattedDate1;
    obj26[2] = intl10.format(tmp3(tmp4[44]).t["7D8r4F"], obj27);
    tmp92Result = tmp92(tmp3(tmp4[56]).Text, obj26);
  }
  items19[1] = tmp92Result;
  obj20[1] = items19;
  items15[3] = questEnrollmentBlockedUntil(closure_7, obj20);
  obj14[1] = items15;
  const items20 = [questEnrollmentBlockedUntil(closure_7, obj14), , ];
  const obj28 = { style: tmp9.detailsWrapper, children: null };
  const obj29 = { style: tmp9.detailsContainer, children: null };
  const obj30 = { style: tmp9.rewardImgContainer, children: null };
  if (tmp8) {
    const obj31 = { quest: null, progress: null, size: "sm" };
    obj31[0] = quest;
    obj31[1] = obj4.useQuestCompletionDetails(quest).completedRatio;
    tmp92Result = tmp92(tmp10(tmp4[66]), obj31);
  } else {
    const obj32 = { quest: null, height: 64, width: 64 };
    obj32[0] = quest;
    tmp92Result = tmp92(tmp10(tmp4[67]), obj32);
  }
  obj30[1] = tmp92Result;
  const items21 = [defaultRewardNameWithArticle(closure_7, obj30), ];
  const obj33 = { style: tmp9.detailsTextContainer, children: null };
  const items22 = [defaultRewardNameWithArticle(tmp3(tmp4[56]).Text, { variant: "eyebrow", color: "text-brand", style: tmp9.questName, accessibilityRole: "header", children: formatToPlainStringResult }), ];
  const obj35 = { style: tmp9.bodyContainer, children: null };
  const obj36 = { style: tmp9.subtitleRow, children: null };
  const items23 = [memo1, ];
  if (shouldShowBonusOrbsUX) {
    const obj37 = { questId: null, orbMultiplierEligibility: null };
    obj37[0] = quest.config.id;
    obj37[1] = questOrbMultiplierEligibility;
    shouldShowBonusOrbsUX = tmp92(tmp3(tmp4[68]).QuestOrbMultiplierPerkPill, obj37);
  }
  items23[1] = shouldShowBonusOrbsUX;
  obj36[1] = items23;
  const items24 = [questEnrollmentBlockedUntil(closure_7, obj36), ];
  let tmp92Result1 = null != formatToPlainStringResult1;
  if (tmp92Result1) {
    const obj38 = { variant: "text-sm/medium", color: "text-muted", children: null };
    obj38[2] = formatToPlainStringResult1;
    tmp92Result1 = tmp92(tmp3(tmp4[56]).Text, obj38);
  }
  items24[1] = tmp92Result1;
  obj35[1] = items24;
  items22[1] = questEnrollmentBlockedUntil(closure_7, obj35);
  obj33[1] = items22;
  items21[1] = questEnrollmentBlockedUntil(closure_7, obj33);
  obj29[1] = items21;
  obj28[1] = questEnrollmentBlockedUntil(closure_7, obj29);
  items20[1] = defaultRewardNameWithArticle(closure_7, obj28);
  const obj39 = { direction: "horizontal", align: "center", spacing: quest(tmp4[9]).space.PX_8, style: tmp9.buttonContainers, children: null };
  const obj40 = { children: null };
  merged4 = hasWatchVideoTasksResult;
  if (tmp47) {
    const obj41 = { grow: true, onPress: null, variant: "secondary", disabled: true, text: null };
    merged4 = closure_11;
    obj41[1] = closure_11;
    const intl11 = tmp3(tmp4[44]).intl;
    obj41[4] = intl11.string(tmp3(tmp4[44]).t.V293qn);
    const items25 = [tmp92(tmp3(tmp4[69]).Button, obj41), ];
    const obj42 = { onPress: null, variant: "tertiary", text: null };
    obj42[0] = function onPress() {
      let obj = quest(QUEST_HOME_MOBILE[39]);
      obj = { questId: quest.id, questEnrollmentBlockedUntil, sourceQuestContent };
      obj.openLazy(closure_1_0(QUEST_HOME_MOBILE[41])(QUEST_HOME_MOBILE[70], QUEST_HOME_MOBILE.paths), "QuestEnrollmentBlockedBottomSheet", obj);
    };
    const intl12 = tmp3(tmp4[44]).intl;
    obj42[2] = intl12.string(tmp3(tmp4[44]).t.vY9GgG);
    items25[1] = tmp92(tmp3(tmp4[69]).Button, obj42);
    obj40[0] = items25;
    merged4 = obj40;
  } else {
    merged4 = "" !== ctaLink && !tmp47 && !isQuestExpiredResult && !tmp35 && !tmp92Result2;
    if (merged4) {
      const obj43 = { style: null, children: null };
      obj43[0] = tmp9.equalWidthContainer;
      const obj44 = { grow: true, variant: "secondary", text: null, onPress: null };
      obj44[2] = tmp3(tmp4[28]).getExternalCtaLabel(quest);
      obj44[3] = callback1;
      obj43[1] = tmp92(tmp3(tmp4[69]).Button, obj44);
      merged4 = tmp92(tmp95, obj43);
      const tmp3Result38 = tmp3(tmp4[28]);
    }
    const items26 = [merged4, ];
    const obj45 = { style: null, children: null };
    obj45[0] = tmp9.equalWidthContainer;
    const obj46 = { grow: true };
    merged4 = obj46;
    merged4 = obj8;
    merged4 = Object.assign(obj8);
    obj45[1] = tmp92(tmp3(tmp4[69]).Button, obj46);
    items26[1] = tmp92(tmp95, obj45);
    obj40[0] = items26;
    merged4 = obj40;
  }
  const items27 = [questEnrollmentBlockedUntil(merged4, merged4), , , ];
  merged4 = tmp92Result2;
  if (tmp92Result2) {
    merged4 = hasWatchVideoTasksResult;
  }
  if (merged4) {
    merged4 = hasWatchVideoOnMobileTasks;
  }
  if (merged4) {
    const obj47 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
    const intl13 = tmp3(tmp4[44]).intl;
    obj47[0] = intl13.string(tmp3(tmp4[44]).t.YsCuyF);
    obj47[1] = tmp10(tmp4[72]);
    obj47[2] = callback2;
    merged4 = tmp92(tmp3(tmp4[71]).IconButton, obj47);
  }
  items27[1] = merged4;
  if (tmp92Result2) {
    tmp92Result2 = isMobileActivityQuest;
  }
  if (tmp92Result2) {
    const obj48 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
    const intl14 = tmp3(tmp4[44]).intl;
    obj48[0] = intl14.string(tmp3(tmp4[44]).t.CkUzLd);
    obj48[1] = tmp10(tmp4[72]);
    obj48[2] = callback3;
    tmp92Result2 = tmp92(tmp3(tmp4[71]).IconButton, obj48);
  }
  items27[2] = tmp92Result2;
  items27[3] = defaultRewardNameWithArticle(quest(tmp4[73]), { quest, showShareLink: !isQuestExpiredResult, location: first.QUESTS_CARD, sourceQuestContent });
  obj39[4] = items27;
  items20[2] = questEnrollmentBlockedUntil(tmp3(tmp4[64]).Stack, obj39);
  obj13[2] = items20;
  obj12[2] = questEnrollmentBlockedUntil(tmp10Result, obj13);
  return defaultRewardNameWithArticle(tmp3(tmp4[58]).Card, obj12);
});
let result3 = require("set").fileFinishedImporting("modules/quests/native/QuestCard.tsx");

export const ESTIMATED_CARD_HEIGHT = 348;
export const QuestCard = memoResult;