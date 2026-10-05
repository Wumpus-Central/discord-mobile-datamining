// === Module 14891: QuestCard ===

// Module 14891 (QuestCard)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import intl15 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import design_shared from "design/shared" /* 4730 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5409 */;
import MetricEvents from "MetricEvents" /* 5414 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7212 */;
import captureAdUserAction2 from "captureAdUserAction" /* 7213 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7223 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7224 */;
import OrbsIcon from "OrbsIcon" /* 8491 */;
import AssetUtils from "AssetUtils" /* 10000 */;
import QuestUtils from "QuestUtils" /* 10908 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10918 */;
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet" /* 14921 */;
import openVideoQuestModalDefault from "openVideoQuestModal" /* 14928 */;
import VideoQuestModal from "VideoQuestModal" /* 14929 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore_mod from "UserStore" /* 1377 */;
import QuestStore_mod from "QuestStore" /* 7187 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, onPress, theme;

let StyleSheet;
let closure_12;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
let react = react_mod;
({ Image: metroRequire, StyleSheet, View: metroImportDefault } = react_native);
let UserStore = UserStore_mod;
let QuestStore = QuestStore_mod;
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const NOOP = Constants.NOOP;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
const BACKGROUND_SURFACE_HIGH = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
const BORDER_SUBTLE = nativeDefault.colors.BORDER_SUBTLE;
let createStyles = createStyles_mod;
let result = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = design_shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const internal = nativeDefault.internal;
  const resolveSemanticColor = internal.resolveSemanticColor;
  const colors = nativeDefault.colors;
  const semanticColor = resolveSemanticColor(theme, isThemeDarkResult ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK);
  const tmpResult = ColorUtils;
  return tmpResult.hexOpacityToRgba(semanticColor, 0);
});
createStyles = createStyles_mod;
let result1 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = design_shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const internal = nativeDefault.internal;
  const resolveSemanticColor = internal.resolveSemanticColor;
  const colors = nativeDefault.colors;
  const semanticColor = resolveSemanticColor(theme, isThemeDarkResult ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK);
  let num = 0.5;
  const hexOpacityToRgba = ColorUtils.hexOpacityToRgba;
  ColorUtils;
  if (isThemeDarkResult) {
    num = 0.8;
  }
  return hexOpacityToRgba(semanticColor, num);
});
createStyles = createStyles_mod;
let result2 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = design_shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const colors = nativeDefault.colors;
  return isThemeDarkResult ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK;
});
const PX_16 = nativeDefault.space.PX_16;
createStyles = createStyles_mod;
let obj = { container: obj2, heroContainer: obj3, heroImg: obj4, heroLinearGradientOverlay: StyleSheet.absoluteFillObject, previewBadge: rect, previewBadgeText: { textTransform: "uppercase" }, rewardImgContainer: size, heroFooterContainer: { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end" }, heroFooterLeftContainer: { display: "flex", flexDirection: "column", alignItems: "flex-start", flexShrink: 1 }, promotedByRow: obj5, shrinkableText: { flexShrink: 1 }, detailsWrapper: obj6, detailsContainer: { display: "flex", flexDirection: "row" }, questName: obj7, bodyContainer: obj8, subtitleRow: obj9, rewardSubtitleRow: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", flexShrink: 1 }, orbWithAmountRow: { flexDirection: "row", alignItems: "center", flexShrink: 1 }, detailsTextContainer: { flex: 1, justifyContent: "center" }, buttonContainers: obj10, equalWidthContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1 } };
obj2 = { position: "relative", padding: 0, borderRadius: nativeDefault.radii.sm, backgroundColor: BACKGROUND_SURFACE_HIGH, marginBottom: nativeDefault.space.PX_16, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: nativeDefault.space.PX_12 };
obj4 = { resizeMode: "cover" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm };
let merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
size = { height: 64, width: 64, marginRight: nativeDefault.space.PX_12 };
obj5 = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", columnGap: nativeDefault.space.PX_4, rowGap: nativeDefault.space.PX_4 };
obj6 = { display: "flex", padding: nativeDefault.space.PX_12 };
obj7 = { marginBottom: nativeDefault.space.PX_4 };
obj8 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", alignItems: "center", rowGap: nativeDefault.space.PX_4, columnGap: nativeDefault.space.PX_8, flexWrap: "wrap" };
obj10 = { borderTopWidth: 1, borderTopColor: BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12 };
let closure_16 = createStyles(obj);
createStyles = createStyles_mod;
let closure_17 = createStyles.createStyleProperties({ gradientStart: result, gradientMid: result1, gradientEnd: result2 });
const memoResult = react.memo((questContent) => {
  let Button;
  let Button2;
  let QUEST_HOME_MOBILE;
  let Text;
  let closure_11;
  let confettiColors;
  let first;
  let gradientEnd;
  let gradientMid;
  let gradientStart;
  let hasWatchVideoOnMobileTasks;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl2;
  let intl3;
  let intl4;
  let intl7;
  let intl8;
  let intl9;
  let isClaimingReward;
  let isFetchingRewardCode;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items27;
  let items9;
  let logger;
  let obj12;
  let obj17;
  let obj22;
  let obj30;
  let obj32;
  let obj46;
  let obj48;
  let obj9;
  let primaryCtaIcon;
  let product;
  let quest;
  let questContentPosition;
  let questEnrollmentBlockedUntil;
  let sourceQuestContent;
  let tmp105;
  let tmp92Result6;
  let tmp9Result;
  let tmpResult71;
  let tmpResult72;
  let tmpResult73;
  let tmpResult86;
  let videoQuestWatchCtaAccessibilityLabel;
  function trackClick(CLAIM_REWARD) {
    const obj = AdAnalyticsInterfaceExperiment;
    if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_card")) {
      const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: CLAIM_REWARD, surfaceId: QUEST_HOME_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
      const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
      captureAdUserAction2;
      captureAdUserAction(obj2);
    } else {
      const obj3 = { questId: quest.id, questContent: QUEST_HOME_MOBILE, questContentCTA: CLAIM_REWARD, sourceQuestContent };
      closure_6(obj3);
    }
  }
  function showQuestBottomSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { questId: quest.id, questContentPosition: _asyncToGenerator, sourceQuestContent };
    obj.openLazy(asyncRequire(14923, dependencyMap.paths), "QuestBottomSheet", obj2);
  }
  const tmp2 = QUEST_HOME_MOBILE;
  let obj = require("useBadgeTextVariant");
  ({ onLayout: require, quest } = questContent);
  QUEST_HOME_MOBILE = questContent.questContent;
  const badgeTextVariant = obj.useBadgeTextVariant();
  const containerPadding = questContent.containerPadding;
  if (undefined === QUEST_HOME_MOBILE) {
    QUEST_HOME_MOBILE = require("QuestTypes").QuestContent.QUEST_HOME_MOBILE;
  }
  ({ questContentPosition: _asyncToGenerator, sourceQuestContent } = questContent);
  const tmpResult = require("getQuestLogger");
  let obj2 = { quest, location: first.QUEST_HOME_MOBILE };
  react = tmpResult.getQuestLogger(obj2);
  const tmpResult44 = require("AnalyticsHooks");
  let closure_6 = tmpResult44.useTrackQuestContentClickedWithImpression();
  const tmpResult45 = require("hooks/QuestHooks");
  const questTaskDetails = tmpResult45.useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let enrolledAt;
  const tmpResult46 = require("hooks/QuestHooks");
  const completedRatio = tmpResult46.useQuestCompletionDetails(quest).completedRatio;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const tmp7 = null != enrolledAt;
  const tmp8 = closure_16();
  const shrinkableText = tmp8;
  const diff = quest(tmp2[18])().width - 2 * hasWatchVideoOnMobileTasks;
  UserStore = diff;
  let result = 0.2803030303030303 * diff;
  QuestStore = result;
  let obj7 = react;
  let items = [quest, diff, result];
  const memo = react.useMemo(() => {
    let tmp5;
    const obj = AssetUtils;
    const questAsset = obj.getQuestAsset(quest, AssetUtils.QuestAssetType.HERO);
    const obj2 = {};
    const isAnimated = questAsset.isAnimated;
    const merged = Object.assign(questAsset);
    const obj3 = AssetUtils;
    if (isAnimated) {
      size = { assetUrl: questAsset.url, width: UserStore, height: QuestStore };
      let url = obj3.getScaledFirstFrameImageUrl(size);
      if (url == null) {
        url = questAsset.url;
      }
      obj2.url = url;
      tmp5 = obj2;
    } else {
      const size1 = { assetUrl: questAsset.url, width: UserStore, height: QuestStore };
      obj2.url = obj3.getScaledImageUrl(size1);
      tmp5 = obj2;
    }
    return tmp5;
  }, items);
  const tmpResult47 = require("QuestHooks");
  const questGameLogotypeAssetUrl = tmpResult47.useQuestGameLogotypeAssetUrl(quest);
  ({ gradientEnd, gradientStart, gradientMid } = product());
  let items1 = [quest.id];
  const tmp15 = product();
  const tmpResult48 = require("defaultMVCPConfig");
  const tmp16 = sourceQuestContent(tmpResult48.useRecyclingState(null, items1), 2);
  first = tmp16[0];
  onPress = tmp18;
  let items2 = [tmp18];
  const callback = react.useCallback(() => {
    closure_11(false);
  }, items2);
  let items3 = [first, quest.id, QUEST_HOME_MOBILE];
  const effect = react.useEffect(() => {
    let items;
    if (false === first) {
      const obj = { name: MetricEvents.MetricEvents.QUEST_CONTENT_RENDERING_FAILURE, tags: items };
      const increment = MonitoringAgentDefault.increment;
      MonitoringAgentDefault;
      const _HermesInternal = HermesInternal;
      items = ["quest_id:" + quest.id, , ];
      const _HermesInternal2 = HermesInternal;
      const obj2 = AnalyticsTypes;
      items[1] = "quest_content:" + obj2.getQuestContentName(QUEST_HOME_MOBILE);
      items[2] = "reason:asset_loading_error";
      increment(obj);
    }
  }, items3);
  const items4 = [UserStore];
  const tmpResult49 = require("get initialized");
  const stateFromStores = tmpResult49.useStateFromStores(items4, () => UserStore.getCurrentUser());
  const tmpResult50 = require("QuestRewardUtils");
  const defaultRewardNameWithArticle = tmpResult50.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const items5 = [QuestStore];
  const tmpResult51 = require("get initialized");
  const stateFromStoresObject = tmpResult51.useStateFromStoresObject(items5, () => {
    const obj = { reward: QuestStore.getRewards(quest.id), isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id), isClaimingReward: QuestStore.isClaimingReward(quest.id), isEnrolling: QuestStore.isEnrolling(quest.id), questEnrollmentBlockedUntil: QuestStore.questEnrollmentBlockedUntil };
    return obj;
  });
  ({ isFetchingRewardCode, isClaimingReward, questEnrollmentBlockedUntil } = stateFromStoresObject);
  const isEnrolling = stateFromStoresObject.isEnrolling;
  const userStatus2 = quest.userStatus;
  let completedAt;
  const useQuestFormattedDate = require("hooks/QuestHooks").useQuestFormattedDate;
  require("hooks/QuestHooks");
  const tmp10 = hasWatchVideoOnMobileTasks;
  if (userStatus2 != null) {
    completedAt = userStatus2.completedAt;
  }
  const questFormattedDate = useQuestFormattedDate(completedAt, { year: "numeric", month: "long", day: "numeric" });
  const tmpResult53 = require("QuestTaskUtils");
  const hasWatchVideoTasksResult = tmpResult53.hasWatchVideoTasks(quest);
  const tmpResult54 = require("QuestHooks");
  hasWatchVideoOnMobileTasks = tmpResult54.useHasWatchVideoOnMobileTasks(quest.config);
  const userStatus3 = quest.userStatus;
  let enrolledAt1;
  if (userStatus3 != null) {
    enrolledAt1 = userStatus3.enrolledAt;
  }
  const tmp31 = null != enrolledAt1;
  const userStatus4 = quest.userStatus;
  let completedAt1;
  if (userStatus4 != null) {
    completedAt1 = userStatus4.completedAt;
  }
  let tmp92Result10 = null != completedAt1;
  const userStatus5 = quest.userStatus;
  let claimedAt;
  if (userStatus5 != null) {
    claimedAt = userStatus5.claimedAt;
  }
  closure_16 = tmp35;
  const tmpResult55 = require("QuestDataUtils");
  const isQuestExpiredResult = tmpResult55.isQuestExpired(quest);
  const tmpResult56 = require("QuestDataUtils");
  const isQuestExpiredButWithinThirtyDayLookback = tmpResult56.getIsQuestExpiredButWithinThirtyDayLookback(quest);
  const tmpResult57 = require("QuestCopyUtils");
  const skuId = tmpResult57.getDefaultReward(quest.config).skuId;
  const tmp38 = quest(tmp2[30])();
  const tmpResult58 = require("design/shared");
  const isThemeDarkResult = tmpResult58.isThemeDark(tmp38);
  const tmpResult59 = require("QuestRewardUtils");
  const result1 = tmpResult59.hasCollectiblesQuestReward(quest.config);
  let tmp42 = null;
  const useFetchCollectiblesProduct = require("useFetchCollectiblesProduct").useFetchCollectiblesProduct;
  require("useFetchCollectiblesProduct");
  if (result1) {
    tmp42 = null;
    if (tmp92Result10) {
      tmp42 = skuId;
    }
  }
  const fetchCollectiblesProduct = useFetchCollectiblesProduct(tmp42);
  product = fetchCollectiblesProduct.product;
  const isFetching = fetchCollectiblesProduct.isFetching;
  const items6 = [tmp21];
  const tmpResult61 = require("get initialized");
  const currentUserHasVerifiedEmailOrPhone = tmpResult61.useStateFromStores(items6, () => {
    const currentUser = UserStore.getCurrentUser();
    result = undefined;
    if (currentUser != null) {
      result = currentUser.hasVerifiedEmailOrPhone();
    }
    return result;
  });
  const items7 = [tmp21];
  const tmpResult62 = require("get initialized");
  const currentUserHasVerifiedEmail = tmpResult62.useStateFromStores(items7, () => {
    const currentUser = UserStore.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    return verified;
  });
  const tmpResult63 = require("QuestHooks");
  const mobileActivityQuest = tmpResult63.useMobileActivityQuest(quest);
  const isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  const questApplication = mobileActivityQuest.questApplication;
  const tmpResult64 = require("useToken");
  const token = tmpResult64.useToken(quest(tmp2[9]).colors.BACKGROUND_BASE_LOWER);
  const tmpResult65 = require("useToken");
  const token1 = tmpResult65.useToken(quest(tmp2[9]).colors.BACKGROUND_BASE_LOW);
  let tmp48 = null != questEnrollmentBlockedUntil;
  const tmpResult66 = require("useToken");
  const token2 = tmpResult66.useToken(quest(tmp2[9]).colors.BACKGROUND_BASE_LOWEST);
  if (tmp48) {
    tmp48 = !tmp31;
  }
  if (tmp48) {
    tmp48 = !tmp92Result10;
  }
  if (tmp48) {
    tmp48 = !tmp35;
  }
  const tmpResult67 = require("hooks/QuestHooks");
  const isQuestAccessSuspended = tmpResult67.useIsQuestAccessSuspended();
  let obj3 = {
    disabled: true,
    onPressDisabled() {
      const obj = { questId: quest.id, questContent: QUEST_HOME_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent };
      closure_6(obj);
      openQuestAccessSuspendedBottomSheetDefault();
    }
  };
  const tmpResult68 = require("hooks/QuestHooks");
  const questFormattedDate1 = tmpResult68.useQuestFormattedDate(quest.config.expiresAt, { month: "numeric", day: "numeric" });
  const tmpResult69 = require("ContentImpressionTrackerHooks");
  const getQuestImpressionId = tmpResult69.useGetQuestImpressionId();
  const items8 = [quest, QUEST_HOME_MOBILE, getQuestImpressionId, sourceQuestContent];
  const callback1 = obj7.useCallback(() => {
    const obj = QuestPlatformUtils;
    const obj2 = { content: QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    obj.openGameLinkDirectly(quest, obj2);
  }, items8);
  const tmpResult70 = require("QuestCopyHooks");
  const primaryCtaCopy = tmpResult70.usePrimaryCtaCopy({ quest, application: questApplication, shortText: true });
  if (null != product) {
    const styles2 = product.styles;
    let buttonColors;
    if (styles2 != null) {
      buttonColors = styles2.buttonColors;
    }
    if (buttonColors == null) {
      buttonColors = [];
    }
    let obj4 = { buttonColors, confettiColors, backgroundColors: items9 };
    const styles = product.styles;
    confettiColors = undefined;
    if (styles != null) {
      confettiColors = styles.confettiColors;
    }
    if (confettiColors == null) {
      confettiColors = [];
    }
    items9 = [quest(tmp2[44])(token1), quest(tmp2[44])(token), quest(tmp2[44])(token2)];
    product.styles = obj4;
  }
  if (null != claimedAt) {
    let obj5 = {
      text: intl4.string(require("intl").t.vTgCWx),
      loading: isFetching,
      onPress() {
          trackClick(AnalyticsTypes.QuestContentCTA.SHOW_REWARD);
          const obj = QuestUtils;
          const obj2 = { product, quest, questContent: QUEST_HOME_MOBILE, questContentPosition: _asyncToGenerator, sourceQuestContent };
          obj.viewReward(obj2);
        }
    };
    intl4 = require("intl").intl;
    obj12 = obj5;
  } else {
    if (tmp92Result10) {
      let obj6 = {
        text: intl3.string(require("intl").t.cfY4PE),
        loading: isClaimingReward,
        onPress() {
              trackClick(AnalyticsTypes.QuestContentCTA.CLAIM_REWARD);
              const obj = QuestUtils;
              const obj2 = { product, quest, questContent: QUEST_HOME_MOBILE, questContentPosition: _asyncToGenerator, currentUserHasVerifiedEmailOrPhone, currentUserHasVerifiedEmail, sourceQuestContent };
              result = obj.handleRewardClaimThenView(obj2);
            }
      };
      intl3 = require("intl").intl;
      if (!isClaimingReward) {
        isClaimingReward = isFetchingRewardCode;
      }
      if (!isClaimingReward) {
        isClaimingReward = isFetching;
      }
      let tmp70 = null;
      if (isQuestAccessSuspended) {
        tmp70 = obj3;
      }
      let merged = Object.assign(tmp70);
      obj12 = obj6;
    }
    if (isQuestExpiredResult) {
      let obj8 = { text: intl2.formatToPlainString(require("intl").t["6p8BZx"], obj9), loading: isClaimingReward || isFetchingRewardCode || isFetching, disabled: true, variant: "secondary", onPress };
      intl2 = require("intl").intl;
      obj9 = { expiryDate: questFormattedDate1 };
      obj12 = obj8;
    } else {
      if (tmp31) {
        if (hasWatchVideoTasksResult) {
          let obj10 = {
            text: tmpResult71.getVideoQuestWatchCtaText(questTaskDetails),
            accessibilityLabel: tmpResult72.getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails),
            disabled: false,
            onPress() {
                      logger.log("Navigating to video quest bottom sheet");
                      trackClick(AnalyticsTypes.QuestContentCTA.WATCH_VIDEO);
                      if (hasWatchVideoOnMobileTasks) {
                        const obj = { questId: quest.id, sourceQuestContent };
                        openVideoQuestModalDefault(obj);
                      } else {
                        const obj2 = { questId: quest.id, questContentPosition: _asyncToGenerator, sourceQuestContent };
                        const tmp5Result = ActionSheetActionCreatorsDefault;
                        tmp5Result.openLazy(asyncRequire(14923, dependencyMap.paths), "QuestBottomSheet", obj2);
                      }
                    }
          };
          tmpResult71 = require("MobileQuestVideoWatchCtaCopy");
          let tmp65 = null;
          tmpResult72 = require("MobileQuestVideoWatchCtaCopy");
          if (isQuestAccessSuspended) {
            tmp65 = obj3;
          }
          let merged1 = Object.assign(tmp65);
          obj12 = obj10;
        }
      }
      if (tmp31) {
        if (isMobileActivityQuest) {
          let obj11 = {
            text: primaryCtaCopy,
            icon: tmpResult73.getPrimaryCtaIcon(quest),
            disabled: false,
            onPress() {
                      trackClick(AnalyticsTypes.QuestContentCTA.LAUNCH_MOBILE_ACTIVITY);
                      callback3();
                    }
          };
          let tmp61 = null;
          tmpResult73 = require("QuestUtils");
          if (isQuestAccessSuspended) {
            tmp61 = obj3;
          }
          let merged2 = Object.assign(tmp61);
          obj12 = obj11;
        }
      }
      if (tmp31) {
        if (!hasWatchVideoTasksResult) {
          if (!isMobileActivityQuest) {
            obj12 = {
              text: intl.string(require("intl").t.JiosAn),
              variant: "secondary",
              disabled: false,
              onPress() {
                          logger.log("Navigating to console connection action sheet");
                          trackClick(AnalyticsTypes.QuestContentCTA.VIEW_REQUIREMENTS);
                          const obj = ActionSheetActionCreatorsDefault;
                          const obj2 = { questId: quest.id, questContentPosition: _asyncToGenerator, sourceQuestContent };
                          obj.openLazy(asyncRequire(14923, dependencyMap.paths), "QuestBottomSheet", obj2);
                        }
            };
            intl = require("intl").intl;
          }
        }
      }
      let obj13 = {
        text: primaryCtaCopy,
        disabled: false,
        loading: isEnrolling,
        accessibilityLabel: videoQuestWatchCtaAccessibilityLabel,
        icon: primaryCtaIcon,
        onPress: function() {
              return closure_25(...arguments);
            }
      };
      videoQuestWatchCtaAccessibilityLabel = undefined;
      if (hasWatchVideoTasksResult) {
        const tmpResult74 = require("MobileQuestVideoWatchCtaCopy");
        videoQuestWatchCtaAccessibilityLabel = tmpResult74.getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails);
      }
      primaryCtaIcon = undefined;
      if (isMobileActivityQuest) {
        const tmpResult75 = require("QuestUtils");
        primaryCtaIcon = tmpResult75.getPrimaryCtaIcon(quest);
      }
      let closure_25 = _asyncToGenerator(async () => {
        let c2;
        let closure_0;
        let v1;
        if (QUEST_HOME_MOBILE === 2) {
          QUEST_HOME_MOBILE = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
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
            QUEST_HOME_MOBILE = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                QUEST_HOME_MOBILE = 3;
                throw value;
              } else if (arg0 === 2) {
                QUEST_HOME_MOBILE = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                logger.log("Enrolling in quest");
                tmp(QUEST_HOME_MOBILE[49]);
                const obj4 = { questContent: QUEST_HOME_MOBILE, questContentCTA: null, sourceQuestContent: null };
                if (!isMobileActivityQuest) {
                  let START_QUEST;
                  if (!hasWatchVideoTasksResult) {
                    START_QUEST = tmp(QUEST_HOME_MOBILE[24]).QuestContentCTA.ACCEPT_QUEST;
                  }
                  obj4.questContentCTA = START_QUEST;
                  obj4.sourceQuestContent = sourceQuestContent;
                  v1 = 1;
                  QUEST_HOME_MOBILE = 1;
                  const obj5 = { value: tmp31(tmp33, obj4), done: false };
                  return obj5;
                }
                START_QUEST = tmp(QUEST_HOME_MOBILE[24]).QuestContentCTA.START_QUEST;
              }
            } else if (arg0 === 1) {
              QUEST_HOME_MOBILE = 3;
              throw value;
            } else if (arg0 === 2) {
              QUEST_HOME_MOBILE = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              if (closure_128_14) {
                if (closure_128_15) {
                  const obj = { questId: closure_128_1.id, sourceQuestContent: closure_128_4 };
                  v1(QUEST_HOME_MOBILE[48])(obj);
                }
                QUEST_HOME_MOBILE = 3;
                return { value: "IconComponent", done: null };
              }
              if (closure_128_20) {
                closure_128_32();
              } else {
                closure_128_24();
              }
            }
          } catch (tmp20) {
            QUEST_HOME_MOBILE = 3;
            throw tmp20;
          }
        }
      });
      let tmp57 = null;
      if (isQuestAccessSuspended) {
        tmp57 = obj3;
      }
      let merged3 = Object.assign(tmp57);
      obj12 = obj13;
    }
  }
  const intl5 = require("intl").intl;
  let obj14 = { questName: quest.config.messages.questName };
  const formatToPlainStringResult = intl5.formatToPlainString(require("intl").t.EAYZAr, obj14);
  const tmpResult76 = require("QuestRewardUtils");
  const result2 = tmpResult76.hasVirtualCurrencyReward(quest.config);
  const tmpResult77 = require("QuestOrbMultiplierHooks");
  const questOrbMultiplierEligibility = tmpResult77.useQuestOrbMultiplierEligibility();
  const tmpResult78 = require("hooks/QuestHooks");
  let shouldShowBonusOrbsUX = tmpResult78.useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility);
  const userStatus6 = quest.userStatus;
  let orbQuantityClaimed;
  const tmp78 = shouldShowBonusOrbsUX && questOrbMultiplierEligibility === require("QuestOrbMultiplierUtils").QuestOrbMultiplierEligibilityType.NITRO;
  if (userStatus6 != null) {
    orbQuantityClaimed = userStatus6.orbQuantityClaimed;
  }
  if (orbQuantityClaimed == null) {
    const tmpResult79 = require("QuestRewardUtils");
    orbQuantityClaimed = tmpResult79.getVirtualCurrencyRewardOrbQuantity(quest.config);
  }
  const tmpResult80 = require("QuestRewardUtils");
  const questOrbRewardQuantityForUser = tmpResult80.getQuestOrbRewardQuantityForUser(quest.config, stateFromStores);
  const tmpResult81 = require("QuestRewardUtils");
  const defaultRewardName = tmpResult81.getDefaultRewardName(quest.config, stateFromStores);
  const tmpResult82 = require("useFontScale");
  const fontScale = tmpResult82.useFontScale();
  const tmpResult83 = require("useScaledTextLineHeight");
  const scaledTextLineHeight = tmpResult83.useScaledTextLineHeight("text-md/semibold");
  const tmpResult84 = require("QuestCopyHooks");
  const questDescription = tmpResult84.useQuestDescription(quest, sourceQuestContent, tmp4.QUEST_HOME_MOBILE, require("GameProfileAnalyticUtils").GameProfileSources.QuestHome);
  const result3 = 16 * Math.min(fontScale, 1.3);
  const items10 = [tmp35, result2, questOrbRewardQuantityForUser, orbQuantityClaimed, defaultRewardName, defaultRewardNameWithArticle, result3, scaledTextLineHeight, , , ];
  ({ orbWithAmountRow: arr13[8], rewardSubtitleRow: arr13[9], shrinkableText: arr13[10] } = tmp8);
  let tmp87 = isQuestExpiredResult;
  const memo1 = obj7.useMemo(() => {
    let format;
    let format2;
    let intl;
    let intl2;
    let items;
    let items1;
    let items2;
    let items3;
    let obj12;
    let obj16;
    let obj18;
    let obj20;
    let obj6;
    let obj8;
    let prop;
    let prop1;
    let tmp15Result;
    let num = 0;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      num = 16 / scaledTextLineHeight;
    }
    result = result3 / 8;
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: shrinkableText.shrinkableText };
    size = { width: result3, height: result3, marginRight: result, marginTop: 0, transform: items };
    items = [{ translateY: num }];
    if (closure_16) {
      if (result2) {
        const obj3 = { style: shrinkableText.orbWithAmountRow, children: items1 };
        const obj4 = { size: "custom", color: "mobile-text-heading-primary", style: size };
        items1 = [defaultRewardNameWithArticle(OrbsIcon.OrbsIcon, obj4), , ];
        const obj5 = { style: obj6 };
        obj6 = { width: result };
        items1[1] = defaultRewardNameWithArticle(metroImportDefault, obj5);
        const obj7 = { children: format2(prop, obj8) };
        const Text5 = Text_Text.Text;
        const merged = Object.assign(obj2);
        const intl4 = intl15.intl;
        format2 = intl4.format;
        let num4 = orbQuantityClaimed;
        prop = intl15.t["nLXlh+"];
        if (orbQuantityClaimed == null) {
          num4 = 0;
        }
        obj8 = { orbAmount: num4 };
        items1[2] = defaultRewardNameWithArticle(Text5, obj7);
        tmp15Result = map1(metroImportDefault, obj3);
      }
      return tmp15Result;
    }
    if (closure_16) {
      const obj9 = { children: defaultRewardName };
      const Text4 = Text_Text.Text;
      const merged1 = Object.assign(obj2);
      tmp15Result = defaultRewardNameWithArticle(Text4, obj9);
    } else if (result2) {
      const obj10 = { style: shrinkableText.rewardSubtitleRow, children: items2 };
      const obj11 = { children: intl2.format(intl15.t["0IUT4Y"], obj12) };
      const Text2 = Text_Text.Text;
      const merged2 = Object.assign(obj2);
      intl2 = intl15.intl;
      obj12 = {
        rewardWithArticleHook() {
            return null;
          }
      };
      items2 = [defaultRewardNameWithArticle(Text2, obj11), ];
      const obj13 = { style: shrinkableText.orbWithAmountRow, children: items3 };
      const obj14 = { size: "custom", color: "mobile-text-heading-primary", style: size };
      items3 = [defaultRewardNameWithArticle(OrbsIcon.OrbsIcon, obj14), , ];
      const obj15 = { style: obj16 };
      obj16 = { width: result };
      items3[1] = defaultRewardNameWithArticle(metroImportDefault, obj15);
      const obj17 = { children: format(prop1, obj18) };
      const Text3 = Text_Text.Text;
      const merged3 = Object.assign(obj2);
      const intl3 = intl15.intl;
      format = intl3.format;
      let num3 = questOrbRewardQuantityForUser;
      prop1 = intl15.t["nLXlh+"];
      if (questOrbRewardQuantityForUser == null) {
        num3 = 0;
      }
      obj18 = { orbAmount: num3 };
      items3[2] = defaultRewardNameWithArticle(Text3, obj17);
      items2[1] = map1(metroImportDefault, obj13);
      tmp15Result = map1(metroImportDefault, obj10);
    } else {
      const obj19 = { children: intl.format(intl15.t["0IUT4Y"], obj20) };
      const Text = Text_Text.Text;
      const merged4 = Object.assign(obj2);
      intl = intl15.intl;
      obj20 = {
        rewardWithArticleHook() {
            return defaultRewardNameWithArticle;
          }
      };
      tmp15Result = defaultRewardNameWithArticle(Text, obj19);
    }
  }, items10);
  if (isQuestExpiredResult) {
    tmp87 = tmp92Result10;
  }
  if (tmp87) {
    tmp87 = !tmp35;
  }
  let formatToPlainStringResult1 = questDescription;
  if (tmp87) {
    const intl6 = require("intl").intl;
    let obj15 = { date: questFormattedDate };
    formatToPlainStringResult1 = intl6.formatToPlainString(require("intl").t["l1jCM/"], obj15);
  }
  const items11 = [quest.id, sourceQuestContent];
  const tmpResult85 = require("QuestCopyUtils");
  const ctaLink = tmpResult85.getCtaLink(quest.config);
  const callback2 = obj7.useCallback(() => {
    const obj = { questId: quest.id, initialStep: VideoQuestModal.VideoQuestModalSteps.WATCH_VIDEO, sourceQuestContent };
    const tmp = openVideoQuestModalDefault;
    tmp(obj);
  }, items11);
  const items12 = [launchMobileActivity];
  const callback3 = obj7.useCallback(_asyncToGenerator(async () => {
    let v3;
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
            const obj2 = v3(QUEST_HOME_MOBILE[46]);
            result = obj2.dismissOverlayScreens();
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
      } catch (tmp8) {
        v3 = 3;
        throw tmp8;
      }
    }
  }), items12);
  let obj16 = {
    style: items13,
    onLayout(arg0) {
      if (require != null) {
        tmp(arg0, quest.id);
      }
    },
    children: questEnrollmentBlockedUntil(tmp9Result, obj17)
  };
  items13 = [tmp8.container, { marginHorizontal: tmp10 - containerPadding }];
  const Card = require("Card/Card").Card;
  obj17 = { visible: tmp78, glow: true, children: items20 };
  let obj18 = { style: items14, children: items15 };
  items14 = [tmp8.heroContainer, { minHeight: result, backgroundColor: gradientEnd }];
  let obj19 = { source: { uri: memo.url }, style: tmp8.heroImg, onError: callback, accessible: true, accessibilityRole: "image", accessibilityLabel: quest.config.messages.questName };
  items15 = [, , , ];
  tmp9Result = quest(tmp2[60]);
  items15[0] = defaultRewardNameWithArticle(quest(tmp2[61]), obj19);
  let obj20 = { style: tmp8.heroLinearGradientOverlay, start: require("ConstantsIOS").VerticalGradient.START, end: require("ConstantsIOS").VerticalGradient.END, colors: items16 };
  items16 = [gradientStart, gradientMid, gradientEnd];
  const tmp9Result2 = quest(tmp2[62]);
  items15[1] = defaultRewardNameWithArticle(tmp9Result2, obj20);
  let preview = quest.preview;
  if (preview) {
    const obj21 = { style: tmp8.previewBadge, children: defaultRewardNameWithArticle(Text, obj22) };
    obj22 = { variant: badgeTextVariant, color: "text-overlay-light", style: tmp8.previewBadgeText, children: intl7.string(require("intl").t.SKNnqq) };
    Text = require("Text/Text").Text;
    intl7 = require("intl").intl;
    preview = tmp92(tmp95, obj21);
  }
  items15[2] = preview;
  const obj23 = { style: tmp8.heroFooterContainer, children: items19 };
  const obj24 = { style: tmp8.heroFooterLeftContainer, children: items17 };
  items17 = [defaultRewardNameWithArticle(quest(tmp2[64]), { assetUrl: questGameLogotypeAssetUrl, onError: callback }), ];
  let str = "text-overlay-light";
  let str2 = "text-overlay-light";
  const obj25 = { style: tmp8.promotedByRow, children: items18 };
  let Text2 = require("Text/Text").Text;
  if (isThemeDarkResult) {
    str2 = "text-muted";
  }
  const obj26 = { variant: "text-xs/medium", color: str2, style: tmp8.shrinkableText, children: intl8.string(require("intl").t.VAbKhK) };
  intl8 = require("intl").intl;
  items18 = [defaultRewardNameWithArticle(Text2, obj26), , ];
  const obj27 = { source: quest(tmp2[65]), style: { height: 16, width: 16 }, accessible: true, accessibilityRole: "image", accessibilityLabel: intl9.string(require("intl").t.OfMjx9) };
  intl9 = require("intl").intl;
  items18[1] = defaultRewardNameWithArticle(closure_6, obj27);
  const obj28 = { variant: "text-xs/medium", color: "text-overlay-light", style: tmp8.shrinkableText, children: quest.config.messages.gamePublisher };
  items18[2] = defaultRewardNameWithArticle(require("Text/Text").Text, obj28);
  items17[1] = questEnrollmentBlockedUntil(shrinkableText, obj25);
  items19 = [questEnrollmentBlockedUntil(shrinkableText, obj24), ];
  let tmp92Result = !isQuestExpiredResult && !tmp35;
  if (tmp92Result) {
    let Text3 = require("Text/Text").Text;
    if (isThemeDarkResult) {
      str = "text-default";
    }
    const obj29 = { variant: "text-xs/medium", color: str, style: tmp8.shrinkableText, children: intl10.format(require("intl").t["7D8r4F"], obj30) };
    intl10 = require("intl").intl;
    obj30 = { expiryDate: questFormattedDate1 };
    tmp92Result = tmp92(Text3, obj29);
  }
  items19[1] = tmp92Result;
  items15[3] = questEnrollmentBlockedUntil(shrinkableText, obj23);
  items20 = [questEnrollmentBlockedUntil(shrinkableText, obj18), , ];
  const obj31 = { style: tmp8.detailsWrapper, children: questEnrollmentBlockedUntil(shrinkableText, obj32) };
  obj32 = { style: tmp8.detailsContainer, children: items21 };
  const obj33 = { style: tmp8.rewardImgContainer, children: tmp92Result6 };
  if (tmp7) {
    const obj34 = { quest, progress: completedRatio, size: "sm" };
    tmp92Result6 = tmp92(quest(tmp2[66]), obj34);
  } else {
    size = { quest, height: 64, width: 64 };
    tmp92Result6 = tmp92(quest(tmp2[67]), size);
  }
  items21 = [defaultRewardNameWithArticle(shrinkableText, obj33), ];
  const obj35 = { style: tmp8.detailsTextContainer, children: items22 };
  items22 = [, ];
  const obj36 = { variant: "eyebrow", color: "text-brand", style: tmp8.questName, accessibilityRole: "header", children: formatToPlainStringResult };
  items22[0] = defaultRewardNameWithArticle(require("Text/Text").Text, obj36);
  const obj38 = { style: tmp8.subtitleRow, children: items23 };
  items23 = [memo1, ];
  const obj37 = { style: tmp8.bodyContainer, children: items24 };
  if (shouldShowBonusOrbsUX) {
    const obj39 = { questId: quest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
    shouldShowBonusOrbsUX = tmp92(require("QuestOrbMultiplierPerkPill").QuestOrbMultiplierPerkPill, obj39);
  }
  items23[1] = shouldShowBonusOrbsUX;
  items24 = [questEnrollmentBlockedUntil(shrinkableText, obj38), ];
  let tmp92Result7 = null != formatToPlainStringResult1;
  if (tmp92Result7) {
    const obj40 = { variant: "text-sm/medium", color: "text-muted", children: formatToPlainStringResult1 };
    tmp92Result7 = tmp92(require("Text/Text").Text, obj40);
  }
  items24[1] = tmp92Result7;
  items22[1] = questEnrollmentBlockedUntil(shrinkableText, obj37);
  items21[1] = questEnrollmentBlockedUntil(shrinkableText, obj35);
  items20[1] = defaultRewardNameWithArticle(shrinkableText, obj31);
  const obj41 = { direction: "horizontal", align: "center", spacing: quest(tmp2[9]).space.PX_8, style: tmp8.buttonContainers, children: items27 };
  const Stack = require("Stack/Stack").Stack;
  const obj42 = { children: null };
  const tmp100 = hasWatchVideoTasksResult;
  if (tmp48) {
    const obj43 = { grow: true, onPress, variant: "secondary", disabled: true, text: intl11.string(require("intl").t.V293qn) };
    const Button3 = require("components/Button/Button").Button;
    intl11 = require("intl").intl;
    const items25 = [defaultRewardNameWithArticle(Button3, obj43), ];
    const obj44 = {
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { questId: quest.id, questEnrollmentBlockedUntil, sourceQuestContent };
          obj.openLazy(asyncRequire(14970, dependencyMap.paths), "QuestEnrollmentBlockedBottomSheet", obj2);
        },
      variant: "tertiary",
      text: intl12.string(require("intl").t.vY9GgG)
    };
    const Button4 = require("components/Button/Button").Button;
    intl12 = require("intl").intl;
    items25[1] = defaultRewardNameWithArticle(Button4, obj44);
    obj42.children = items25;
    tmp105 = obj42;
  } else {
    let tmp92Result8 = "" !== ctaLink && !tmp48 && !isQuestExpiredResult && !tmp35 && !tmp92Result10;
    if (tmp92Result8) {
      const obj45 = { style: tmp8.equalWidthContainer, children: defaultRewardNameWithArticle(Button, obj46) };
      obj46 = { grow: true, variant: "secondary", text: tmpResult86.getExternalCtaLabel(quest), onPress: callback1 };
      Button = require("components/Button/Button").Button;
      tmpResult86 = require("QuestCopyUtils");
      tmp92Result8 = tmp92(tmp95, obj45);
    }
    const items26 = [tmp92Result8, ];
    const obj47 = { style: tmp8.equalWidthContainer, children: defaultRewardNameWithArticle(Button2, obj48) };
    obj48 = { grow: true };
    Button2 = require("components/Button/Button").Button;
    let merged4 = Object.assign(obj12);
    items26[1] = defaultRewardNameWithArticle(shrinkableText, obj47);
    obj42.children = items26;
    tmp105 = obj42;
  }
  items27 = [questEnrollmentBlockedUntil(tmp100, tmp105), , , ];
  let tmp92Result9 = tmp92Result10 && hasWatchVideoTasksResult && hasWatchVideoOnMobileTasks;
  if (tmp92Result9) {
    const obj49 = { accessibilityLabel: intl13.string(require("intl").t.YsCuyF), icon: quest(tmp2[73]), onPress: callback2, variant: "secondary" };
    const IconButton = require("IconButton").IconButton;
    intl13 = require("intl").intl;
    tmp92Result9 = tmp92(IconButton, obj49);
  }
  items27[1] = tmp92Result9;
  if (tmp92Result10) {
    tmp92Result10 = isMobileActivityQuest;
  }
  if (tmp92Result10) {
    const obj50 = { accessibilityLabel: intl14.string(require("intl").t.CkUzLd), icon: quest(tmp2[73]), onPress: callback3, variant: "secondary" };
    const IconButton2 = require("IconButton").IconButton;
    intl14 = require("intl").intl;
    tmp92Result10 = tmp92(IconButton2, obj50);
  }
  items27[2] = tmp92Result10;
  const obj51 = { quest, showShareLink: !isQuestExpiredResult, location: first.QUESTS_CARD, sourceQuestContent };
  items27[3] = defaultRewardNameWithArticle(quest(tmp2[74]), obj51);
  items20[2] = questEnrollmentBlockedUntil(Stack, obj41);
  return defaultRewardNameWithArticle(Card, obj16);
});
size = size_mod;
let result3 = size.fileFinishedImporting("modules/quests/native/QuestCard.tsx");

export const ESTIMATED_CARD_HEIGHT = 348;
export const QuestCard = memoResult;