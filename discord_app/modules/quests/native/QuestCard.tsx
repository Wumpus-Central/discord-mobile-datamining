// === Module 14202: ESTIMATED_CARD_HEIGHT ===

// Module 14202 (ESTIMATED_CARD_HEIGHT)
import initializeState from "initializeState";
import useAdContentImpressionTrackerProps from "useAdContentImpressionTrackerProps";
import importAllResult from "useIsMobileQuestDockRenderedBase";
import get_ActivityIndicator from "useWindowDimensions";
import mergeGuildAvatar from "mergeGuildAvatar";
import closure_9 from "initializeState";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import { NOOP } from "sum";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let StyleSheet;
let closure_12;
let closure_14;
let closure_6;
let error;
let map1;
const require = arg1;
let c5 = importAllResult;
({ Image: closure_6, StyleSheet, View: error } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let result = createCacheKey.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = require(4070);
  const tmp = require;
  const internal = importDefault(712).internal;
  const colors = importDefault(712).colors;
  const semanticColor = internal.resolveSemanticColor(theme, require(4070).isThemeDark(theme) ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK);
  const isThemeDarkResult = require(4070).isThemeDark(theme);
  return tmp(4099).hexOpacityToRgba(semanticColor, 0);
});
let result1 = createCacheKey.experimental_createToken((theme) => {
  theme = theme.theme;
  const isThemeDarkResult = require(4070).isThemeDark(theme);
  const internal = importDefault(712).internal;
  const colors = importDefault(712).colors;
  const semanticColor = internal.resolveSemanticColor(theme, isThemeDarkResult ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK);
  const obj = require(4070);
  const tmp = require;
  let num = 0.5;
  if (isThemeDarkResult) {
    num = 0.8;
  }
  return require(4099) /* hexToRgba */.hexOpacityToRgba(semanticColor, num);
});
let result2 = createCacheKey.experimental_createToken((theme) => {
  const obj = require(4070);
  const colors = importDefault(712).colors;
  return require(4070).isThemeDark(theme.theme) ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK;
});
const PX_16 = require("Themes").space.PX_16;
let obj = { container: null, heroContainer: null, heroImg: null, heroLinearGradientOverlay: null, previewBadge: null, rewardImgContainer: null, heroFooterContainer: null, heroFooterLeftContainer: null, detailsWrapper: null, detailsContainer: null, questName: null, bodyContainer: null, subtitleRow: null, orbWithAmountRow: null, detailsTextContainer: null, buttonContainers: null, equalWidthContainer: null };
obj = { position: "relative", padding: 0, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginBottom: require("Themes").space.PX_16, overflow: "hidden" };
obj[0] = obj;
createCacheKey = { display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: require("Themes").space.PX_12 };
obj[1] = createCacheKey;
createCacheKey = { resizeMode: "cover" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj[2] = createCacheKey;
obj[3] = StyleSheet.absoluteFillObject;
createCacheKey = { position: "absolute", top: require("Themes").space.PX_8, right: require("Themes").space.PX_8, backgroundColor: require("Themes").colors.BACKGROUND_BRAND, padding: require("Themes").space.PX_4, borderRadius: require("Themes").radii.sm };
let merged1 = Object.assign(require("Themes").shadows.SHADOW_LOW);
obj[4] = createCacheKey;
createCacheKey = { height: 64, width: 64, marginRight: require("Themes").space.PX_12 };
obj[5] = createCacheKey;
obj[6] = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end" };
obj[7] = { display: "flex", flexDirection: "column", alignItems: "flex-start" };
obj[8] = { display: "flex", padding: require("Themes").space.PX_12 };
obj[9] = { display: "flex", flexDirection: "row" };
let obj5 = { display: "flex", padding: require("Themes").space.PX_12 };
obj[10] = { marginBottom: require("Themes").space.PX_4 };
let obj6 = { marginBottom: require("Themes").space.PX_4 };
obj[11] = { display: "flex", flexDirection: "column", gap: require("Themes").space.PX_4 };
let obj7 = { display: "flex", flexDirection: "column", gap: require("Themes").space.PX_4 };
obj[12] = { flexDirection: "row", alignItems: "center", rowGap: require("Themes").space.PX_4, columnGap: require("Themes").space.PX_8, flexWrap: "wrap" };
obj[13] = { flexDirection: "row", alignItems: "center" };
obj[14] = { flex: 1, justifyContent: "center" };
let obj8 = { flexDirection: "row", alignItems: "center", rowGap: require("Themes").space.PX_4, columnGap: require("Themes").space.PX_8, flexWrap: "wrap" };
obj[15] = { borderTopWidth: 1, borderTopColor: require("Themes").colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", padding: require("Themes").space.PX_12 };
obj[16] = { flexBasis: 0, flexGrow: 1, flexShrink: 1 };
let closure_16 = createCacheKey.createStyles(obj);
let closure_17 = createCacheKey.createStyleProperties({ gradientStart: result, gradientMid: result1, gradientEnd: result2 });
let obj9 = { borderTopWidth: 1, borderTopColor: require("Themes").colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", padding: require("Themes").space.PX_12 };
const memoResult = importAllResult.memo((questContent) => {
  let initializeState;
  let gradientEnd;
  let gradientMid;
  let gradientStart;
  let isClaimingReward;
  let isFetchingRewardCode;
  let quest;
  let questEnrollmentBlockedUntil;
  let require;
  let sourceQuestContent;
  function trackClick(CLAIM_REWARD) {
    let obj = outer1_0(QUEST_HOME_MOBILE[33]);
    if (obj.shouldMigrateToAdAnalyticsInterface(outer1_0(QUEST_HOME_MOBILE[33]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_card")) {
      obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
      obj[0] = tmp(tmp2[35]).AdUserActionType.CLICK_INTERNAL;
      obj[1] = tmp(tmp2[36]).AdCreativeType.QUEST;
      obj[2] = quest.id;
      obj[3] = CLAIM_REWARD;
      obj[4] = QUEST_HOME_MOBILE;
      obj[5] = sourceQuestContent;
      obj[6] = getQuestImpressionId();
      tmp(tmp2[34]).captureAdUserAction(obj);
      const tmpResult = tmp(tmp2[34]);
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
    let obj = quest(QUEST_HOME_MOBILE[38]);
    obj = { questId: quest.id, questContentPosition: initializeState, sourceQuestContent };
    obj.openLazy(outer1_0(QUEST_HOME_MOBILE[40])(QUEST_HOME_MOBILE[39], QUEST_HOME_MOBILE.paths), "QuestBottomSheet", obj);
  }
  ({ onLayout: require, quest } = questContent);
  let QUEST_HOME_MOBILE = questContent.questContent;
  if (undefined === QUEST_HOME_MOBILE) {
    QUEST_HOME_MOBILE = require(QUEST_HOME_MOBILE[13]).QuestContent.QUEST_HOME_MOBILE;
  }
  ({ questContentPosition: initializeState, sourceQuestContent } = questContent);
  const tmp3 = require;
  const tmp4 = QUEST_HOME_MOBILE;
  let obj = require(QUEST_HOME_MOBILE[14]);
  obj = { quest, location: first.QUEST_HOME_MOBILE };
  const importAllResult = obj.getQuestLogger(obj);
  let obj2 = require(QUEST_HOME_MOBILE[15]);
  let closure_6 = obj2.useTrackQuestContentClickedWithImpression();
  let obj3 = require(QUEST_HOME_MOBILE[16]);
  const questTaskDetails = obj3.useQuestTaskDetails(quest);
  let obj4 = require(QUEST_HOME_MOBILE[16]);
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const tmp9 = callback2();
  let closure_7 = tmp9;
  const diff = quest(tmp4[17])().width - 2 * hasWatchVideoOnMobileTasks;
  let mergeGuildAvatar = diff;
  let result = 0.2803030303030303 * diff;
  let closure_9 = result;
  let obj5 = importAllResult;
  let items = [quest, diff, result];
  const memo = importAllResult.useMemo(() => {
    let obj = outer1_0(QUEST_HOME_MOBILE[18]);
    const questAsset = obj.getQuestAsset(quest, outer1_0(QUEST_HOME_MOBILE[18]).QuestAssetType.HERO);
    obj = {};
    const merged = Object.assign(questAsset);
    const obj3 = outer1_0(QUEST_HOME_MOBILE[18]);
    if (questAsset.isAnimated) {
      obj = { assetUrl: null, width: null, height: null };
      obj[0] = questAsset.url;
      obj[1] = mergeGuildAvatar;
      obj[2] = closure_9;
      let url = obj3.getScaledFirstFrameImageUrl(obj);
      if (url == null) {
        url = questAsset.url;
      }
      obj.url = url;
      let tmp5 = obj;
    } else {
      const obj1 = { assetUrl: null, width: null, height: null };
      obj1[0] = questAsset.url;
      obj1[1] = mergeGuildAvatar;
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
  const tmp17 = sourceQuestContent(tmp3Result.useRecyclingState(null, items1), 2);
  first = tmp17[0];
  const NOOP = tmp19;
  let items2 = [tmp17[1]];
  const callback = importAllResult.useCallback(() => {
    tmp19(false);
  }, items2);
  let items3 = [first, quest.id, QUEST_HOME_MOBILE];
  const effect = importAllResult.useEffect(() => {
    if (false === first) {
      let obj = quest(QUEST_HOME_MOBILE[21]);
      obj = { name: null, tags: null };
      obj[0] = outer1_0(QUEST_HOME_MOBILE[22]).MetricEvents.QUEST_CONTENT_RENDERING_FAILURE;
      const _HermesInternal = HermesInternal;
      const items = ["quest_id:" + quest.id, , ];
      const _HermesInternal2 = HermesInternal;
      items[1] = "quest_content:" + outer1_0(QUEST_HOME_MOBILE[23]).getQuestContentName(QUEST_HOME_MOBILE);
      items[2] = "reason:asset_loading_error";
      obj[1] = items;
      obj.increment(obj);
      const obj3 = outer1_0(QUEST_HOME_MOBILE[23]);
    }
  }, items3);
  const tmp11 = hasWatchVideoOnMobileTasks;
  const tmp16 = product();
  const tmp8 = null != enrolledAt;
  const items4 = [mergeGuildAvatar];
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
  let tmp75Result4 = null != completedAt1;
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
    if (tmp75Result4) {
      skuId = tmp3Result9.getDefaultReward(quest.config).skuId;
    }
  }
  const fetchCollectiblesProduct = tmp3(tmp4[30]).useFetchCollectiblesProduct(skuId);
  product = fetchCollectiblesProduct.product;
  const isFetching = fetchCollectiblesProduct.isFetching;
  const tmp3Result12 = tmp3(tmp4[30]);
  const items6 = [mergeGuildAvatar];
  let closure_18 = tmp3(tmp4[24]).useStateFromStores(items6, () => {
    const currentUser = diff.getCurrentUser();
    let result;
    if (currentUser != null) {
      result = currentUser.hasVerifiedEmailOrPhone();
    }
    return result;
  });
  const tmp3Result13 = tmp3(tmp4[24]);
  const items7 = [mergeGuildAvatar];
  let closure_19 = tmp3(tmp4[24]).useStateFromStores(items7, () => {
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
    tmp47 = !tmp75Result4;
  }
  if (tmp47) {
    tmp47 = !tmp35;
  }
  const tmp3Result18 = tmp3(tmp4[31]);
  const questFormattedDate1 = tmp3(tmp4[16]).useQuestFormattedDate(quest.config.expiresAt, { month: "numeric", day: "numeric" });
  const tmp3Result19 = tmp3(tmp4[16]);
  const getQuestImpressionId = tmp3(tmp4[32]).useGetQuestImpressionId();
  const items8 = [quest, QUEST_HOME_MOBILE, getQuestImpressionId, sourceQuestContent];
  const callback1 = obj5.useCallback(() => {
    let obj = outer1_0(QUEST_HOME_MOBILE[37]);
    obj = { content: QUEST_HOME_MOBILE, ctaContent: outer1_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    obj.openGameLinkDirectly(quest, obj);
  }, items8);
  const tmp3Result20 = tmp3(tmp4[32]);
  const primaryCtaCopy = tmp3(tmp4[41]).usePrimaryCtaCopy({ quest, application: mobileActivityQuest.questApplication, shortText: true });
  if (null != product) {
    const styles2 = product.styles;
    let buttonColors;
    if (styles2 != null) {
      buttonColors = styles2.buttonColors;
    }
    if (buttonColors == null) {
      buttonColors = [];
    }
    obj = { buttonColors: null, confettiColors: null, backgroundColors: null };
    obj[0] = buttonColors;
    const styles = product.styles;
    let confettiColors;
    if (styles != null) {
      confettiColors = styles.confettiColors;
    }
    if (confettiColors == null) {
      confettiColors = [];
    }
    obj[1] = confettiColors;
    const items9 = [tmp10(tmp4[42])(token1), tmp10(tmp4[42])(token), tmp10(tmp4[42])(token2)];
    obj[2] = items9;
    product.styles = obj;
  }
  if (null != claimedAt) {
    let obj1 = { text: null, loading: null, onPress: null };
    let intl4 = tmp3(tmp4[43]).intl;
    obj1[0] = intl4.string(tmp3(tmp4[43]).t.vTgCWx);
    obj1[1] = isFetching;
    obj1[2] = function onPress() {
      trackClick(outer1_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.SHOW_REWARD);
      let obj = outer1_0(QUEST_HOME_MOBILE[44]);
      obj = { product: closure_17, quest, questContent: QUEST_HOME_MOBILE, questContentPosition: initializeState, sourceQuestContent };
      obj.viewReward(obj);
    };
    let obj7 = obj1;
  } else {
    if (tmp75Result4) {
      obj2 = { text: null, loading: null, onPress: null };
      let intl3 = tmp3(tmp4[43]).intl;
      obj2[0] = intl3.string(tmp3(tmp4[43]).t.cfY4PE);
      if (!isClaimingReward) {
        isClaimingReward = isFetchingRewardCode;
      }
      if (!isClaimingReward) {
        isClaimingReward = isFetching;
      }
      obj2[1] = isClaimingReward;
      obj2[2] = function onPress() {
        trackClick(outer1_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.CLAIM_REWARD);
        let obj = outer1_0(QUEST_HOME_MOBILE[44]);
        obj = { product: closure_17, quest, questContent: QUEST_HOME_MOBILE, questContentPosition: initializeState, currentUserHasVerifiedEmailOrPhone: closure_18, currentUserHasVerifiedEmail: closure_19, sourceQuestContent };
        const result = obj.handleRewardClaimThenView(obj);
      };
      obj7 = obj2;
    }
    if (isQuestExpiredResult) {
      obj3 = { text: null, loading: null, disabled: true, variant: "secondary", onPress: null };
      let intl2 = tmp3(tmp4[43]).intl;
      obj4 = { expiryDate: null };
      obj4[0] = questFormattedDate1;
      obj3[0] = intl2.formatToPlainString(tmp3(tmp4[43]).t["6p8BZx"], obj4);
      let tmp55 = isClaimingReward;
      if (!isClaimingReward) {
        tmp55 = isFetchingRewardCode;
      }
      if (!tmp55) {
        tmp55 = isFetching;
      }
      obj3[1] = tmp55;
      obj3[4] = NOOP;
      obj7 = obj3;
    } else {
      if (tmp31) {
        if (hasWatchVideoTasksResult) {
          obj5 = { text: null, accessibilityLabel: null, disabled: false, onPress: null };
          obj5[0] = tmp3(tmp4[45]).getVideoQuestWatchCtaText(questTaskDetails);
          const tmp3Result22 = tmp3(tmp4[45]);
          obj5[1] = tmp3(tmp4[45]).getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails);
          obj5[3] = function onPress() {
            logger.log("Navigating to video quest bottom sheet");
            trackClick(outer1_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.WATCH_VIDEO);
            if (hasWatchVideoOnMobileTasks) {
              let obj = { questId: null, sourceQuestContent: null };
              obj[0] = quest.id;
              obj[1] = sourceQuestContent;
              tmp5(tmp3[46])(obj);
            } else {
              obj = { questId: null, questContentPosition: null, sourceQuestContent: null };
              obj[0] = quest.id;
              obj[1] = initializeState;
              obj[2] = sourceQuestContent;
              tmp5(tmp3[38]).openLazy(outer1_0(tmp3[40])(tmp3[39], tmp3.paths), "QuestBottomSheet", obj);
              const tmp5Result = tmp5(tmp3[38]);
            }
          };
          obj7 = obj5;
          const tmp3Result23 = tmp3(tmp4[45]);
        }
      }
      if (tmp31) {
        if (isMobileActivityQuest) {
          let obj6 = { text: null, icon: null, disabled: false, onPress: null };
          obj6[0] = primaryCtaCopy;
          obj6[1] = tmp3(tmp4[44]).getPrimaryCtaIcon(quest);
          obj6[3] = function onPress() {
            trackClick(outer1_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY);
            callback3();
          };
          obj7 = obj6;
          const tmp3Result24 = tmp3(tmp4[44]);
        }
      }
      if (tmp31) {
        if (!hasWatchVideoTasksResult) {
          if (!isMobileActivityQuest) {
            obj7 = { text: null, variant: "secondary", disabled: false, onPress: null };
            let intl = tmp3(tmp4[43]).intl;
            obj7[0] = intl.string(tmp3(tmp4[43]).t.JiosAn);
            obj7[3] = function onPress() {
              logger.log("Navigating to console connection action sheet");
              trackClick(outer1_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.VIEW_REQUIREMENTS);
              let obj = quest(QUEST_HOME_MOBILE[38]);
              obj = { questId: quest.id, questContentPosition: initializeState, sourceQuestContent };
              obj.openLazy(outer1_0(QUEST_HOME_MOBILE[40])(QUEST_HOME_MOBILE[39], QUEST_HOME_MOBILE.paths), "QuestBottomSheet", obj);
            };
          }
        }
      }
      let obj8 = { text: null, disabled: false, loading: null, accessibilityLabel: null, icon: null, onPress: null };
      obj8[0] = primaryCtaCopy;
      obj8[2] = stateFromStoresObject.isEnrolling;
      let videoQuestWatchCtaAccessibilityLabel;
      if (hasWatchVideoTasksResult) {
        videoQuestWatchCtaAccessibilityLabel = tmp3(tmp4[45]).getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails);
        const tmp3Result25 = tmp3(tmp4[45]);
      }
      obj8[3] = videoQuestWatchCtaAccessibilityLabel;
      let primaryCtaIcon;
      if (isMobileActivityQuest) {
        primaryCtaIcon = tmp3(tmp4[44]).getPrimaryCtaIcon(quest);
        const tmp3Result26 = tmp3(tmp4[44]);
      }
      obj8[4] = primaryCtaIcon;
      let closure_25 = callback(function*() {
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
                let closure_0 = tmp2;
                outer1_5.log("Enrolling in quest");
                outer1_0(9627);
                let obj1 = { questContent: null, questContentCTA: null, sourceQuestContent: null };
                obj1[0] = dependencyMap;
                if (!outer1_20) {
                  if (!outer1_14) {
                    let START_QUEST = tmp31(7095).QuestContentCTA.ACCEPT_QUEST;
                  }
                  obj1[1] = START_QUEST;
                  obj1[2] = outer1_4;
                  obj1 = tmp34(tmp36, obj1);
                  v0 = 1;
                  dependencyMap = 1;
                }
                START_QUEST = tmp31(7095).QuestContentCTA.START_QUEST;
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
                  obj[1] = useAdContentImpressionTrackerProps;
                  v0(14233)(obj);
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
      obj8[5] = function() {
        const self = this;
        const apply = closure_25.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj7 = obj8;
    }
  }
  const intl5 = tmp3(tmp4[43]).intl;
  let obj9 = { questName: quest.config.messages.questName };
  const tmp3Result21 = tmp3(tmp4[41]);
  const formatToPlainStringResult = intl5.formatToPlainString(tmp3(tmp4[43]).t.EAYZAr, { questName: quest.config.messages.questName });
  const result2 = tmp3(tmp4[25]).hasVirtualCurrencyReward(quest.config);
  const tmp3Result27 = tmp3(tmp4[25]);
  const questOrbMultiplierEligibility = tmp3(tmp4[48]).useQuestOrbMultiplierEligibility();
  const tmp3Result28 = tmp3(tmp4[48]);
  let shouldShowBonusOrbsUX = tmp3(tmp4[16]).useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility);
  let tmp61 = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    tmp61 = questOrbMultiplierEligibility === tmp3(tmp4[49]).QuestOrbMultiplierEligibilityType.NITRO;
  }
  const userStatus6 = quest.userStatus;
  let orbQuantityClaimed;
  if (userStatus6 != null) {
    orbQuantityClaimed = userStatus6.orbQuantityClaimed;
  }
  if (orbQuantityClaimed == null) {
    orbQuantityClaimed = tmp3(tmp4[25]).getVirtualCurrencyRewardOrbQuantity(quest.config);
    const tmp3Result30 = tmp3(tmp4[25]);
  }
  const tmp3Result29 = tmp3(tmp4[16]);
  const questOrbRewardQuantityForUser = tmp3(tmp4[25]).getQuestOrbRewardQuantityForUser(quest.config, stateFromStores);
  const tmp3Result31 = tmp3(tmp4[25]);
  const defaultRewardName = tmp3(tmp4[25]).getDefaultRewardName(quest.config, stateFromStores);
  const tmp3Result32 = tmp3(tmp4[25]);
  const fontScale = tmp3(tmp4[50]).useFontScale();
  const tmp3Result33 = tmp3(tmp4[50]);
  const scaledTextLineHeight = tmp3(tmp4[51]).useScaledTextLineHeight("text-md/semibold");
  const tmp3Result34 = tmp3(tmp4[51]);
  const questDescription = tmp3(tmp4[41]).useQuestDescription(quest, sourceQuestContent, tmp5.QUEST_HOME_MOBILE, tmp3(tmp4[52]).GameProfileSources.QuestHome);
  const result3 = 16 * Math.min(fontScale, 1.3);
  const items10 = [null != claimedAt, result2, questOrbRewardQuantityForUser, orbQuantityClaimed, defaultRewardName, defaultRewardNameWithArticle, result3, scaledTextLineHeight, tmp9.orbWithAmountRow];
  let tmp70 = isQuestExpiredResult;
  const memo1 = obj5.useMemo(() => {
    let obj = outer1_0(QUEST_HOME_MOBILE[53]);
    let isFabricResult = obj.isFabric();
    let num = 0;
    if (isFabricResult) {
      num = 0;
      if (tmpResult.isAndroid()) {
        num = 16 / scaledTextLineHeight;
      }
      tmpResult = tmp(tmp2[54]);
    }
    const result = tmp4 / 8;
    obj = { width: tmp4, height: tmp4, marginRight: result, marginTop: 0, transform: null };
    let tmp7;
    if (isFabricResult) {
      obj = { translateY: null };
      obj[0] = num;
      const items = [obj];
      tmp7 = items;
    }
    const obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
    obj[4] = tmp7;
    if (closure_16) {
      if (result2) {
        const obj2 = { style: null, children: null };
        obj2[0] = tmp9.orbWithAmountRow;
        const obj3 = { size: "custom", color: "mobile-text-heading-primary", style: null };
        obj3[2] = obj;
        const items1 = [defaultRewardNameWithArticle(tmp(tmp2[55]).OrbsIcon, obj3), , ];
        if (isFabricResult) {
          const obj4 = { style: null };
          const obj5 = { width: null };
          obj5[0] = result;
          obj4[0] = obj5;
          isFabricResult = tmp36(tmp34, obj4);
        }
        items1[1] = isFabricResult;
        const obj6 = {};
        const merged = Object.assign(obj1);
        const intl4 = tmp(tmp2[43]).intl;
        let num4 = orbQuantityClaimed;
        if (orbQuantityClaimed == null) {
          num4 = 0;
        }
        const obj7 = { orbAmount: null };
        obj7[0] = num4;
        obj6.children = intl4.format(tmp(tmp2[43]).t["nLXlh+"], obj7);
        items1[2] = defaultRewardNameWithArticle(tmp(tmp2[56]).Text, obj6);
        obj2[1] = items1;
        let tmp16Result = questEnrollmentBlockedUntil(tmp34, obj2);
        const tmp33 = questEnrollmentBlockedUntil;
      }
      return tmp16Result;
    }
    if (closure_16) {
      const obj8 = {};
      const merged1 = Object.assign(obj1);
      obj8.children = defaultRewardName;
      tmp16Result = defaultRewardNameWithArticle(tmp(tmp2[56]).Text, obj8);
    } else if (result2) {
      const obj9 = { style: null, children: null };
      obj9[0] = tmp9.orbWithAmountRow;
      const obj10 = {};
      const merged2 = Object.assign(obj1);
      const intl2 = tmp(tmp2[43]).intl;
      const obj11 = { rewardWithArticleHook: null };
      obj11[0] = function rewardWithArticleHook() {
        return null;
      };
      obj10.children = intl2.format(tmp(tmp2[43]).t["0IUT4Y"], obj11);
      const items2 = [defaultRewardNameWithArticle(tmp(tmp2[56]).Text, obj10), ];
      const obj12 = { style: null, children: null };
      obj12[0] = tmp9.orbWithAmountRow;
      const obj13 = { size: "custom", color: "mobile-text-heading-primary", style: null };
      obj13[2] = obj;
      const items3 = [defaultRewardNameWithArticle(tmp(tmp2[55]).OrbsIcon, obj13), , ];
      let tmp19Result = isFabricResult;
      if (isFabricResult) {
        const obj14 = { style: null };
        const obj15 = { width: null };
        obj15[0] = result;
        obj14[0] = obj15;
        tmp19Result = tmp19(tmp17, obj14);
      }
      items3[1] = tmp19Result;
      const obj16 = {};
      const merged3 = Object.assign(obj1);
      const intl3 = tmp(tmp2[43]).intl;
      let num3 = questOrbRewardQuantityForUser;
      if (questOrbRewardQuantityForUser == null) {
        num3 = 0;
      }
      const obj17 = { orbAmount: null };
      obj17[0] = num3;
      obj16.children = intl3.format(tmp(tmp2[43]).t["nLXlh+"], obj17);
      items3[2] = defaultRewardNameWithArticle(tmp(tmp2[56]).Text, obj16);
      obj12[1] = items3;
      items2[1] = questEnrollmentBlockedUntil(tmp9, obj12);
      obj9[1] = items2;
      tmp16Result = tmp16(tmp17, obj9);
    } else {
      const obj18 = {};
      const merged4 = Object.assign(obj1);
      const intl = tmp(tmp2[43]).intl;
      const obj19 = { rewardWithArticleHook: null };
      obj19[0] = function rewardWithArticleHook() {
        return closure_12;
      };
      obj18.children = intl.format(tmp(tmp2[43]).t["0IUT4Y"], obj19);
      tmp16Result = defaultRewardNameWithArticle(tmp(tmp2[56]).Text, obj18);
    }
  }, items10);
  if (isQuestExpiredResult) {
    tmp70 = tmp75Result4;
  }
  if (tmp70) {
    tmp70 = !tmp35;
  }
  let formatToPlainStringResult1 = questDescription;
  if (tmp70) {
    const intl6 = tmp3(tmp4[43]).intl;
    let obj10 = { date: null };
    obj10[0] = questFormattedDate;
    formatToPlainStringResult1 = intl6.formatToPlainString(tmp3(tmp4[43]).t["l1jCM/"], obj10);
  }
  const tmp3Result35 = tmp3(tmp4[41]);
  const items11 = [quest.id, sourceQuestContent];
  const ctaLink = tmp3(tmp4[28]).getCtaLink(quest.config);
  callback2 = obj5.useCallback(() => {
    const obj = { questId: quest.id, initialStep: null, sourceQuestContent: null };
    obj[1] = outer1_0(QUEST_HOME_MOBILE[57]).VideoQuestModalSteps.WATCH_VIDEO;
    obj[2] = sourceQuestContent;
    quest(QUEST_HOME_MOBILE[46])(obj);
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
            let obj1 = v0(outer1_2[44]);
            const result = obj1.dismissOverlayScreens();
            c1 = 1;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = outer1_21();
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
  let obj11 = {
    style: items13,
    onLayout(arg0) {
      if (closure_0 != null) {
        tmp(arg0, quest.id);
      }
    },
    children: null
  };
  items13 = [tmp9.container, { marginHorizontal: tmp11 - questContent.containerPadding }];
  let obj12 = { visible: tmp61, glow: true, children: null };
  let obj13 = { style: items14, children: null };
  items14 = [tmp9.heroContainer, { height: result }];
  let tmp10Result = tmp10(tmp4[59]);
  const items15 = [defaultRewardNameWithArticle(quest(tmp4[60]), { source: obj15, style: tmp9.heroImg, onError: callback, accessible: true, accessibilityRole: "image", accessibilityLabel: quest.config.messages.questName }), , , ];
  let obj16 = { style: tmp9.heroLinearGradientOverlay, start: null, end: null, colors: null };
  tmp10Result = tmp10(tmp4[61]);
  obj16[1] = tmp3(tmp4[62]).VerticalGradient.START;
  obj16[2] = tmp3(tmp4[62]).VerticalGradient.END;
  const items16 = [gradientStart, gradientMid, gradientEnd];
  obj16[3] = items16;
  items15[1] = defaultRewardNameWithArticle(tmp10Result, obj16);
  let preview = quest.preview;
  if (preview) {
    let obj17 = { style: null, children: null };
    obj17[0] = tmp9.previewBadge;
    let obj18 = { variant: "eyebrow", color: "text-overlay-light", children: null };
    const intl7 = tmp3(tmp4[43]).intl;
    obj18[2] = intl7.string(tmp3(tmp4[43]).t.SKNnqq);
    obj17[1] = tmp75(tmp3(tmp4[56]).Text, obj18);
    preview = tmp75(tmp78, obj17);
  }
  items15[2] = preview;
  let obj19 = { style: tmp9.heroFooterContainer, children: null };
  const obj20 = { style: tmp9.heroFooterLeftContainer, children: null };
  const items17 = [defaultRewardNameWithArticle(quest(tmp4[63]), { assetUrl: questGameLogotypeAssetUrl, onError: callback }), ];
  let str = "text-overlay-light";
  let str2 = "text-overlay-light";
  if (isThemeDarkResult) {
    str2 = "text-muted";
  }
  const obj21 = { direction: "horizontal", align: "center", spacing: 4, children: null };
  const obj22 = { variant: "text-xs/medium", color: str2, children: null };
  const intl8 = tmp3(tmp4[43]).intl;
  obj22[2] = intl8.string(tmp3(tmp4[43]).t.VAbKhK);
  const items18 = [defaultRewardNameWithArticle(tmp3(tmp4[56]).Text, obj22), , ];
  const obj23 = { source: quest(tmp4[65]), style: { height: 16, width: 16 }, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
  const intl9 = tmp3(tmp4[43]).intl;
  obj23[4] = intl9.string(tmp3(tmp4[43]).t.OfMjx9);
  items18[1] = defaultRewardNameWithArticle(closure_6, obj23);
  items18[2] = defaultRewardNameWithArticle(tmp3(tmp4[56]).Text, { variant: "text-xs/medium", color: "text-overlay-light", children: quest.config.messages.gamePublisher });
  obj21[3] = items18;
  items17[1] = questEnrollmentBlockedUntil(tmp3(tmp4[64]).Stack, obj21);
  obj20[1] = items17;
  const items19 = [questEnrollmentBlockedUntil(closure_7, obj20), ];
  let tmp75Result = !isQuestExpiredResult;
  if (!isQuestExpiredResult) {
    tmp75Result = !tmp35;
  }
  if (tmp75Result) {
    if (isThemeDarkResult) {
      str = "text-default";
    }
    const obj25 = { variant: "text-xs/medium", color: null, children: null };
    obj25[1] = str;
    const intl10 = tmp3(tmp4[43]).intl;
    const obj26 = { expiryDate: null };
    obj26[0] = questFormattedDate1;
    obj25[2] = intl10.format(tmp3(tmp4[43]).t["7D8r4F"], obj26);
    tmp75Result = tmp75(tmp3(tmp4[56]).Text, obj25);
  }
  items19[1] = tmp75Result;
  obj19[1] = items19;
  items15[3] = questEnrollmentBlockedUntil(closure_7, obj19);
  obj13[1] = items15;
  const items20 = [questEnrollmentBlockedUntil(closure_7, obj13), , ];
  const obj27 = { style: tmp9.detailsWrapper, children: null };
  const obj28 = { style: tmp9.detailsContainer, children: null };
  const obj29 = { style: tmp9.rewardImgContainer, children: null };
  if (tmp8) {
    const obj30 = { quest: null, progress: null, size: "sm" };
    obj30[0] = quest;
    obj30[1] = obj4.useQuestCompletionDetails(quest).completedRatio;
    tmp75Result = tmp75(tmp10(tmp4[66]), obj30);
  } else {
    const obj31 = { quest: null, height: 64, width: 64 };
    obj31[0] = quest;
    tmp75Result = tmp75(tmp10(tmp4[67]), obj31);
  }
  obj29[1] = tmp75Result;
  const items21 = [defaultRewardNameWithArticle(closure_7, obj29), ];
  const obj32 = { style: tmp9.detailsTextContainer, children: null };
  const items22 = [defaultRewardNameWithArticle(tmp3(tmp4[56]).Text, { variant: "eyebrow", color: "text-brand", style: tmp9.questName, accessibilityRole: "header", children: formatToPlainStringResult }), ];
  const obj34 = { style: tmp9.bodyContainer, children: null };
  const obj35 = { style: tmp9.subtitleRow, children: null };
  const items23 = [memo1, ];
  if (shouldShowBonusOrbsUX) {
    const obj36 = { questId: null, orbMultiplierEligibility: null };
    obj36[0] = quest.config.id;
    obj36[1] = questOrbMultiplierEligibility;
    shouldShowBonusOrbsUX = tmp75(tmp3(tmp4[68]).QuestOrbMultiplierPerkPill, obj36);
  }
  items23[1] = shouldShowBonusOrbsUX;
  obj35[1] = items23;
  const items24 = [questEnrollmentBlockedUntil(closure_7, obj35), ];
  let tmp75Result1 = null != formatToPlainStringResult1;
  if (tmp75Result1) {
    const obj37 = { variant: "text-sm/medium", color: "text-muted", children: null };
    obj37[2] = formatToPlainStringResult1;
    tmp75Result1 = tmp75(tmp3(tmp4[56]).Text, obj37);
  }
  items24[1] = tmp75Result1;
  obj34[1] = items24;
  items22[1] = questEnrollmentBlockedUntil(closure_7, obj34);
  obj32[1] = items22;
  items21[1] = questEnrollmentBlockedUntil(closure_7, obj32);
  obj28[1] = items21;
  obj27[1] = questEnrollmentBlockedUntil(closure_7, obj28);
  items20[1] = defaultRewardNameWithArticle(closure_7, obj27);
  const obj38 = { direction: "horizontal", align: "center", spacing: null, style: null, children: null };
  obj38[2] = quest(tmp4[9]).space.PX_8;
  obj38[3] = tmp9.buttonContainers;
  const obj39 = { children: null };
  if (tmp47) {
    const obj40 = { grow: true, onPress: null, variant: "secondary", disabled: true, text: null };
    obj40[1] = NOOP;
    const intl11 = tmp3(tmp4[43]).intl;
    obj40[4] = intl11.string(tmp3(tmp4[43]).t.V293qn);
    const items25 = [tmp75(tmp3(tmp4[69]).Button, obj40), ];
    const obj41 = { onPress: null, variant: "tertiary", text: null };
    obj41[0] = function onPress() {
      let obj = quest(QUEST_HOME_MOBILE[38]);
      obj = { questId: quest.id, questEnrollmentBlockedUntil, sourceQuestContent };
      obj.openLazy(outer1_0(QUEST_HOME_MOBILE[40])(QUEST_HOME_MOBILE[70], QUEST_HOME_MOBILE.paths), "QuestEnrollmentBlockedBottomSheet", obj);
    };
    const intl12 = tmp3(tmp4[43]).intl;
    obj41[2] = intl12.string(tmp3(tmp4[43]).t.vY9GgG);
    items25[1] = tmp75(tmp3(tmp4[69]).Button, obj41);
    obj39[0] = items25;
    let tmp88 = obj39;
  } else {
    let tmp75Result2 = "" !== ctaLink && !tmp47 && !isQuestExpiredResult && !tmp35 && !tmp75Result4;
    if (tmp75Result2) {
      const obj42 = { style: null, children: null };
      obj42[0] = tmp9.equalWidthContainer;
      const obj43 = { grow: true, variant: "secondary", text: null, onPress: null };
      obj43[2] = tmp3(tmp4[28]).getExternalCtaLabel(quest);
      obj43[3] = callback1;
      obj42[1] = tmp75(tmp3(tmp4[69]).Button, obj43);
      tmp75Result2 = tmp75(tmp78, obj42);
      const tmp3Result37 = tmp3(tmp4[28]);
    }
    const items26 = [tmp75Result2, ];
    const obj44 = { style: null, children: null };
    obj44[0] = tmp9.equalWidthContainer;
    const obj45 = { grow: true };
    let merged = Object.assign(obj7);
    obj44[1] = tmp75(tmp3(tmp4[69]).Button, obj45);
    items26[1] = tmp75(tmp78, obj44);
    obj39[0] = items26;
    tmp88 = obj39;
  }
  const items27 = [questEnrollmentBlockedUntil(hasWatchVideoTasksResult, tmp88), , , ];
  let tmp75Result3 = tmp75Result4;
  if (tmp75Result4) {
    tmp75Result3 = hasWatchVideoTasksResult;
  }
  if (tmp75Result3) {
    tmp75Result3 = hasWatchVideoOnMobileTasks;
  }
  if (tmp75Result3) {
    const obj46 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
    const intl13 = tmp3(tmp4[43]).intl;
    obj46[0] = intl13.string(tmp3(tmp4[43]).t.YsCuyF);
    obj46[1] = tmp10(tmp4[72]);
    obj46[2] = callback2;
    tmp75Result3 = tmp75(tmp3(tmp4[71]).IconButton, obj46);
  }
  items27[1] = tmp75Result3;
  if (tmp75Result4) {
    tmp75Result4 = isMobileActivityQuest;
  }
  if (tmp75Result4) {
    const obj47 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
    const intl14 = tmp3(tmp4[43]).intl;
    obj47[0] = intl14.string(tmp3(tmp4[43]).t.CkUzLd);
    obj47[1] = tmp10(tmp4[72]);
    obj47[2] = callback3;
    tmp75Result4 = tmp75(tmp3(tmp4[71]).IconButton, obj47);
  }
  items27[2] = tmp75Result4;
  items27[3] = defaultRewardNameWithArticle(quest(tmp4[73]), { quest, showShareLink: !isQuestExpiredResult, location: first.QUESTS_CARD, sourceQuestContent });
  obj38[4] = items27;
  items20[2] = questEnrollmentBlockedUntil(tmp3(tmp4[64]).Stack, obj38);
  obj12[2] = items20;
  obj11[2] = questEnrollmentBlockedUntil(tmp10Result, obj12);
  return defaultRewardNameWithArticle(tmp3(tmp4[58]).Card, obj11);
});
let result3 = require("noop").fileFinishedImporting("modules/quests/native/QuestCard.tsx");

export const ESTIMATED_CARD_HEIGHT = 348;
export const QuestCard = memoResult;