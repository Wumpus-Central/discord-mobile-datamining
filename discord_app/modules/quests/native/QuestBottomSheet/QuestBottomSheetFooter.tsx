// === Module 17728: QuestBottomSheetFooter ===

// Module 17728 (QuestBottomSheetFooter)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _modDef1655 from "module_1655" /* 1655 */;
import QuestTypes from "QuestTypes" /* 5341 */;
import AdCreativeType from "AdCreativeType" /* 5345 */;
import timing_timing from "timing/timing" /* 5548 */;
import components_Button_Button from "components/Button/Button" /* 5936 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8834 */;
import QuestUtils from "QuestUtils" /* 10128 */;
import captureAdUserAction from "captureAdUserAction" /* 10135 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 10138 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10156 */;
import ContentImpressionTrackerHooks from "ContentImpressionTrackerHooks" /* 10168 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10170 */;
import RefreshIcon from "RefreshIcon" /* 13308 */;
import MobileQuestVideoWatchCtaCopy from "MobileQuestVideoWatchCtaCopy" /* 15250 */;
import QuestBottomSheetHooks from "QuestBottomSheetHooks" /* 17729 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import UserStore from "UserStore" /* 1388 */;
import QuestStore from "QuestStore" /* 8808 */;

require = fn;
function useQuestRewardClaimHandler(quest) {
  quest = quest.quest;
  let flag = quest.hideActionSheet;
  if (flag === undefined) {
    flag = true;
  }
  let QUEST_BOTTOM_SHEET = quest.questContent;
  if (QUEST_BOTTOM_SHEET === undefined) {
    QUEST_BOTTOM_SHEET = quest(QUEST_BOTTOM_SHEET[10]).QuestContent.QUEST_BOTTOM_SHEET;
  }
  const onSuccess = quest.onSuccess;
  const sourceQuestContent = quest.sourceQuestContent;
  c5 = undefined;
  let isFetching;
  let isFetchingRewardCode;
  let stateFromStores;
  let stateFromStores1;
  const progressState = quest(QUEST_BOTTOM_SHEET[11]).useProgressState(quest);
  const obj = quest(QUEST_BOTTOM_SHEET[11]);
  items = [quest.config];
  let result = quest(QUEST_BOTTOM_SHEET[12]).hasCollectiblesQuestReward(quest.config);
  const memo = sourceQuestContent.useMemo(() => QuestCopyUtils.getDefaultReward(quest.config).skuId, items);
  const obj2 = quest(QUEST_BOTTOM_SHEET[12]);
  let tmp8 = null;
  if (progressState === quest(QUEST_BOTTOM_SHEET[11]).QuestProgressState.COMPLETED) {
    tmp8 = null;
    if (result) {
      tmp8 = memo;
    }
  }
  const fetchCollectiblesProduct = quest(QUEST_BOTTOM_SHEET[14]).useFetchCollectiblesProduct(tmp8);
  const product = fetchCollectiblesProduct.product;
  c5 = product;
  isFetching = fetchCollectiblesProduct.isFetching;
  const obj4 = quest(QUEST_BOTTOM_SHEET[14]);
  const items1 = [stateFromStores];
  const stateFromStoresObject = quest(QUEST_BOTTOM_SHEET[15]).useStateFromStoresObject(items1, () => ({ isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id), isClaimingReward: QuestStore.isClaimingReward(quest.id) }));
  isFetchingRewardCode = stateFromStoresObject.isFetchingRewardCode;
  const tmp3Result = quest(QUEST_BOTTOM_SHEET[15]);
  const items2 = [isFetchingRewardCode];
  stateFromStores = quest(QUEST_BOTTOM_SHEET[15]).useStateFromStores(items2, () => {
    const currentUser = isFetchingRewardCode.getCurrentUser();
    let result;
    if (currentUser != null) {
      result = currentUser.hasVerifiedEmailOrPhone();
    }
    return result;
  });
  const tmp3Result6 = quest(QUEST_BOTTOM_SHEET[15]);
  const items3 = [isFetchingRewardCode];
  stateFromStores1 = quest(QUEST_BOTTOM_SHEET[15]).useStateFromStores(items3, () => {
    const currentUser = isFetchingRewardCode.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    return verified;
  });
  const items4 = [isFetching, isFetchingRewardCode];
  const memo1 = obj3.useMemo(() => {
    let tmp = isFetching;
    if (!isFetching) {
      tmp = isFetchingRewardCode;
    }
    return tmp;
  }, items4);
  const tmp3Result7 = quest(QUEST_BOTTOM_SHEET[15]);
  const token = quest(QUEST_BOTTOM_SHEET[16]).useToken(flag(tmp4[8]).colors.BACKGROUND_BASE_LOWER);
  const tmp3Result8 = quest(QUEST_BOTTOM_SHEET[16]);
  const token1 = quest(QUEST_BOTTOM_SHEET[16]).useToken(flag(tmp4[8]).colors.BACKGROUND_BASE_LOW);
  quest(QUEST_BOTTOM_SHEET[16]);
  if (null != product) {
    const styles2 = product.styles;
    let buttonColors;
    if (styles2 != null) {
      buttonColors = styles2.buttonColors;
    }
    if (buttonColors == null) {
      buttonColors = [];
    }
    const obj5 = { buttonColors, confettiColors: null, backgroundColors: null };
    const styles = product.styles;
    let confettiColors;
    if (styles != null) {
      confettiColors = styles.confettiColors;
    }
    if (confettiColors == null) {
      confettiColors = [];
    }
    obj5.confettiColors = confettiColors;
    const items5 = [tmp14(tmp4[17])(token1), tmp14(tmp4[17])(token), tmp14(tmp4[17])(tmp18)];
    obj5.backgroundColors = items5;
    product.styles = obj5;
  }
  const obj6 = { isLoading: memo1, isClaiming: stateFromStoresObject.isClaimingReward, claim: null };
  const items6 = [quest, product, stateFromStores, stateFromStores1, flag, QUEST_BOTTOM_SHEET, onSuccess, sourceQuestContent];
  obj6.claim = sourceQuestContent.useCallback(() => QuestUtils.handleRewardClaimThenView({ quest, product, hideActionSheet: flag, questContent: QUEST_BOTTOM_SHEET, currentUserHasVerifiedEmailOrPhone: stateFromStores, currentUserHasVerifiedEmail: stateFromStores1, onSuccess, sourceQuestContent }), items6);
  return obj6;
}
function WatchTaskButton(arg0) {
  ({ questId, sourceQuestContent, taskDetails, disabled, onPressDisabled } = arg0);
  const obj2 = { grow: true, size: "lg", onPress: QuestBottomSheetHooks.useWatchTaskPressHandler({ questId, sourceQuestContent }), disabled, onPressDisabled, text: null };
  const watchTaskPressHandler = QuestBottomSheetHooks.useWatchTaskPressHandler({ questId, sourceQuestContent });
  obj2.text = MobileQuestVideoWatchCtaCopy.getVideoQuestWatchCtaText(taskDetails);
  return refs(components_Button_Button.Button, obj2);
}
function NextButton(arg0) {
  ({ onPress, disabled } = arg0);
  const obj = { grow: true, size: "lg", onPress, disabled, text: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.a9OfTN);
  return refs(components_Button_Button.Button, obj);
}
function DefibButton(arg0) {
  ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
  ({ loading, disabled, onPressDisabled } = arg0);
  closure_3 = ContentImpressionTrackerHooks.useGetQuestImpressionId();
  const obj2 = {
    grow: true,
    size: "lg",
    variant: "secondary",
    loading,
    disabled,
    onPressDisabled,
    icon: closure_10(RefreshIcon.RefreshIcon, {}),
    iconPosition: "end",
    onPress: function handlePress(arg0) {
      const obj = captureAdUserAction;
      obj.captureAdUserAction({ type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId, questContentCTA: AnalyticsTypes.QuestContentCTA.DEFIBRILLATOR, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: closure_3() });
      if (importDefault != null) {
        tmp2(arg0);
      }
    },
    text: null
  };
  const intl = util.intl;
  obj2.text = intl.string(util.t.nPThNb);
  return closure_10(components_Button_Button.Button, obj2);
}
function ClaimButton(arg0) {
  ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
  ({ disabled, loading, onPressDisabled } = arg0);
  closure_3 = ContentImpressionTrackerHooks.useGetQuestImpressionId();
  const obj2 = {
    grow: true,
    size: "lg",
    disabled,
    onPressDisabled,
    loading,
    onPress: function handlePress() {
      const obj = captureAdUserAction;
      obj.captureAdUserAction({ type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId, questContentCTA: AnalyticsTypes.QuestContentCTA.CLAIM_REWARD, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: closure_3() });
      importDefault();
    },
    text: null
  };
  const intl = util.intl;
  obj2.text = intl.string(util.t.cfY4PE);
  return closure_10(components_Button_Button.Button, obj2);
}
function AnimatedFooter(arg0) {
  ({ backButton, withSafeArea } = arg0);
  ({ onLayout, ctaButton, style } = arg0);
  if (withSafeArea === undefined) {
    withSafeArea = true;
  }
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  let tmp = null != backButton;
  if (tmp) {
    tmp = false !== backButton;
  }
  _require = tmp;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp4 = closure_13();
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  importDefault = stateFromStores;
  let obj = require("initialize");
  let num = 0;
  if (tmp) {
    num = 1;
  }
  const sharedValue = require("module_1655").useSharedValue(num);
  dependencyMap = sharedValue;
  const items1 = [tmp, stateFromStores, sharedValue];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (c0) {
      num = 1;
    }
    let num2 = 200;
    if (c1) {
      num2 = 0;
    }
    const result = _undefined2.set(timing_timing.withTiming(num, { duration: num2 }));
  }, items1);
  const obj2 = require("module_1655");
  const items2 = [closure_19, sharedValue, PX_16];
  _require = undefined;
  importDefault = undefined;
  [tmp10, tmp11, tmp12] = items2;
  class QuestBottomSheetFooterTsx1 {
    constructor() {
      rect = { opacity: closure_0.get(), position: "absolute", top: 0, left: 0, transform: null };
      obj1 = { translateX: closure_1 };
      items = [];
      items[0] = obj1;
      rect.transform = items;
      return rect;
    }
  }
  const items3 = [tmp11, tmp12];
  QuestBottomSheetFooterTsx1.__closure = items3;
  QuestBottomSheetFooterTsx1.__workletHash = 4236879270525;
  QuestBottomSheetFooterTsx1.__initData = tmp10;
  const animatedStyle = require("module_1655").useAnimatedStyle(QuestBottomSheetFooterTsx1);
  const tmp5Result = require("module_1655");
  const items4 = [closure_20, require("module_1655").interpolate, sharedValue, useWindowDimensionsDefault().width, PX_16, require("ButtonConstants").LARGE_BUTTON_HEIGHT];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items4;
  class QuestBottomSheetFooterTsx2 {
    constructor() {
      obj = { width: null, alignSelf: "flex-end" };
      items = [, ];
      items[0] = closure_2 - 2 * closure_3;
      items[1] = closure_2 - 2.5 * closure_3 - closure_4;
      obj.width = closure_0(closure_1.get(), [0, 1], items);
      return obj;
    }
  }
  const items5 = [tmp15, tmp16, tmp17, tmp18, tmp19];
  QuestBottomSheetFooterTsx2.__closure = items5;
  QuestBottomSheetFooterTsx2.__workletHash = 2701300818660;
  QuestBottomSheetFooterTsx2.__initData = tmp14;
  const animatedStyle1 = require("module_1655").useAnimatedStyle(QuestBottomSheetFooterTsx2);
  const items6 = [tmp4.container, , ];
  if (withSafeArea) {
    const obj3 = { paddingBottom: tmp21 };
    withSafeArea = obj3;
  }
  const obj4 = { style: items6, onLayout, children: null };
  items6[1] = withSafeArea;
  items6[2] = style;
  const items7 = [closure_10(_modDef1655.View, { style: animatedStyle, children: backButton }), closure_10(_modDef1655.View, { style: animatedStyle1, children: ctaButton })];
  obj4.children = items7;
  return closure_11(View, obj4);
}
const View = fn(17).View;
let closure_9 = fn(5567).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(5306);
let obj2 = { container: { display: "flex", flexGrow: 1, flexShrink: 1, paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_13 = createStyles.createStyles(obj2);
let closure_19 = { code: "(function QuestBottomSheetFooterTsx1(){let[animation,H_PADDING_PX]=this.__closure;return{opacity:animation.get(),position:'absolute',top:0,left:0,transform:[{translateX:H_PADDING_PX}]};})" };
let closure_20 = { code: "(function QuestBottomSheetFooterTsx2(){let[interpolate,animation,windowWidth,H_PADDING_PX,ICON_SIZE_PX]=this.__closure;return{width:interpolate(animation.get(),[0,1],[windowWidth-H_PADDING_PX*2,windowWidth-H_PADDING_PX*2.5-ICON_SIZE_PX]),alignSelf:'flex-end'};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx");

export default function QuestBottomSheetFooter(quest) {
  quest = quest.quest;
  ({ step, isDefibrilating } = quest);
  if (isDefibrilating === undefined) {
    isDefibrilating = false;
  }
  ({ onBack, sourceQuestContent } = quest);
  ({ onConnectConsoleNext, onDefib, style, withSafeArea } = quest);
  const tmp = useQuestRewardClaimHandler({ quest, sourceQuestContent });
  const questTaskDetails = quest(10131).useQuestTaskDetails(quest);
  let obj = quest(10131);
  const isQuestProgressing = quest(10131).useIsQuestProgressing(quest);
  const obj2 = quest(10131);
  const obj3 = quest(10131);
  const xboxAndPlaystationAccounts = quest(10131).useConnectedAccounts().xboxAndPlaystationAccounts;
  items = [quest, xboxAndPlaystationAccounts];
  const memo = noop.useMemo(() => QuestPlatformUtils.supportedConsoles(quest).filter((item) => {
    closure_0 = item;
    return null != xboxAndPlaystationAccounts.find((type) => type.type === closure_0);
  }), items);
  const obj4 = quest(10131);
  const hasWatchVideoOnMobileTasks = quest(17693).useHasWatchVideoOnMobileTasks(quest.config);
  const obj5 = quest(17693);
  const mobileActivityQuest = quest(17693).useMobileActivityQuest(quest);
  ({ isMobileActivityQuest, launchMobileActivity, questApplication } = mobileActivityQuest);
  const obj6 = quest(17693);
  const primaryCtaCopy = quest(15261).usePrimaryCtaCopy({ quest, application: questApplication });
  const obj7 = quest(15261);
  const userStatus = quest.userStatus;
  let completedAt;
  const obj8 = quest(17729);
  const obj9 = { questId: quest.id, sourceQuestContent, launchMobileActivity };
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const userStatus2 = quest.userStatus;
  let claimedAt;
  if (userStatus2 != null) {
    claimedAt = userStatus2.claimedAt;
  }
  const mobileActivityPressHandler = quest(17729).useMobileActivityPressHandler({ questId: quest.id, sourceQuestContent, launchMobileActivity });
  const tmp11 = null != completedAt;
  const isQuestAccessSuspended = quest(10131).useIsQuestAccessSuspended();
  const obj10 = { disabled: true, onPressDisabled: xboxAndPlaystationAccounts(17723) };
  let tmp40Result6 = null;
  if (step !== quest(17725).QuestBottomSheetStep.TASK_SELECT) {
    const obj11 = { onLayout: quest.onLayout, ctaButton: null, backButton: null, style: null, withSafeArea: null };
    if (tmp2(17725).QuestBottomSheetStep.CONSOLE_CONNECT === step) {
      const obj12 = { onPress: onConnectConsoleNext, disabled: 0 === memo.length };
      let tmp40Result = closure_10(NextButton, obj12);
    } else {
      tmp40Result = null;
      if (tmp2(17725).QuestBottomSheetStep.TASK_STATUS === step) {
        if (tmp11) {
          const obj13 = { questId: quest.id, onPress: tmp.claim, disabled: tmp13, loading: null, sourceQuestContent: null };
          let isClaiming = tmp.isLoading;
          if (!isClaiming) {
            isClaiming = tmp.isClaiming;
          }
          obj13.loading = isClaiming;
          obj13.sourceQuestContent = sourceQuestContent;
          let tmp33 = null;
          if (isQuestAccessSuspended) {
            tmp33 = null;
            if (!tmp13) {
              tmp33 = obj10;
            }
          }
          const merged = Object.assign(tmp33);
          let tmp40Result4 = closure_10(ClaimButton, obj13);
        } else if (hasWatchVideoOnMobileTasks) {
          const obj14 = { questId: quest.id, taskDetails: questTaskDetails, sourceQuestContent };
          let tmp28 = null;
          if (isQuestAccessSuspended) {
            tmp28 = obj10;
          }
          const merged1 = Object.assign(tmp28);
          tmp40Result4 = closure_10(WatchTaskButton, obj14);
        } else if (isMobileActivityQuest) {
          const obj15 = { grow: true, size: "lg", onPress: mobileActivityPressHandler, text: primaryCtaCopy, icon: tmp2(10128).getPrimaryCtaIcon(quest) };
          let tmp23 = null;
          if (isQuestAccessSuspended) {
            tmp23 = obj10;
          }
          const merged2 = Object.assign(tmp23);
          tmp40Result4 = closure_10(tmp2(5936).Button, obj15);
          const tmp2Result2 = tmp2(10128);
        } else {
          if (_slicedToArray(obj3.useTaskPlatformScreen(quest, questTaskDetails), 1)[0] === tmp2(5341).TaskPlatformScreen.CONSOLE) {
            if (!isQuestProgressing) {
              const obj16 = { questId: quest.id, loading: isDefibrilating, disabled: isDefibrilating, onPress: onDefib, sourceQuestContent };
              let tmp17 = null;
              if (isQuestAccessSuspended) {
                tmp17 = obj10;
              }
              const merged3 = Object.assign(tmp17);
              tmp40Result4 = closure_10(DefibButton, obj16);
            }
          }
          const obj17 = { questId: quest.id, onPress: tmp.claim, disabled: true, sourceQuestContent };
          tmp40Result4 = closure_10(ClaimButton, obj17);
        }
        tmp40Result = tmp40Result4;
      }
    }
    obj11.ctaButton = tmp40Result;
    let tmp40Result5 = null != onBack;
    if (tmp40Result5) {
      const obj18 = { accessibilityLabel: null, variant: "secondary", icon: null, onPress: null, size: "lg" };
      const intl = tmp2(1113).intl;
      obj18.accessibilityLabel = intl.string(tmp2(1113).t["13/7kX"]);
      obj18.icon = closure_10(tmp2(7497).ArrowLargeLeftIcon, {});
      obj18.onPress = onBack;
      tmp40Result5 = closure_10(tmp2(7988).IconButton, obj18);
    }
    obj11.backButton = tmp40Result5;
    obj11.style = style;
    obj11.withSafeArea = withSafeArea;
    tmp40Result6 = closure_10(AnimatedFooter, obj11);
  }
  return tmp40Result6;
};
export { useQuestRewardClaimHandler };