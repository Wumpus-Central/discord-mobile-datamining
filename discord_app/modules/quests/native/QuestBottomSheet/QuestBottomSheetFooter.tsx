// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ButtonConstants from "../../../../design/components/Button/native/ButtonConstants.native.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import captureAdUserAction from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../../experiments/AdAnalyticsInterfaceExperiment.tsx";
import QuestUtils from "../QuestUtils.native.tsx";
import QuestCopyUtils from "../../utils/QuestCopyUtils.tsx";
import ContentImpressionTrackerHooks from "../../lib/analytics/ContentImpressionTrackerHooks.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import MobileQuestVideoWatchCtaCopy from "../../utils/MobileQuestVideoWatchCtaCopy.tsx";
import AnalyticsHooks from "../../lib/analytics/AnalyticsHooks.tsx";
import QuestBottomSheetHooks from "QuestBottomSheetHooks.tsx";
import RefreshIcon from "../../../../design/components/Icon/native/redesign/generated/RefreshIcon.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import QuestStore from "../../QuestStore.tsx";

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
  const items = [quest.config];
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
  const stateFromStoresObject = quest(QUEST_BOTTOM_SHEET[15]).useStateFromStoresObject(items1, () => ({
    isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id),
    isClaimingReward: QuestStore.isClaimingReward(quest.id),
  }));
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
  const items6 = [
    quest,
    product,
    stateFromStores,
    stateFromStores1,
    flag,
    QUEST_BOTTOM_SHEET,
    onSuccess,
    sourceQuestContent,
  ];
  obj6.claim = sourceQuestContent.useCallback(
    () =>
      QuestUtils.handleRewardClaimThenView({
        quest,
        product,
        hideActionSheet: flag,
        questContent: QUEST_BOTTOM_SHEET,
        currentUserHasVerifiedEmailOrPhone: stateFromStores,
        currentUserHasVerifiedEmail: stateFromStores1,
        onSuccess,
        sourceQuestContent,
      }),
    items6,
  );
  return obj6;
}
function WatchTaskButton(arg0) {
  ({ questId, sourceQuestContent, taskDetails, disabled, onPressDisabled } = arg0);
  const obj2 = {
    grow: true,
    size: "lg",
    onPress: QuestBottomSheetHooks.useWatchTaskPressHandler({ questId, sourceQuestContent }),
    disabled,
    onPressDisabled,
    text: null,
  };
  const watchTaskPressHandler = QuestBottomSheetHooks.useWatchTaskPressHandler({ questId, sourceQuestContent });
  obj2.text = MobileQuestVideoWatchCtaCopy.getVideoQuestWatchCtaText(taskDetails);
  return closure_1_10(components_Button_Button.Button, obj2);
}
function NextButton(arg0) {
  ({ onPress, disabled } = arg0);
  const obj = { grow: true, size: "lg", onPress, disabled, text: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.a9OfTN);
  return closure_1_10(components_Button_Button.Button, obj);
}
function DefibButton(arg0) {
  ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
  ({ loading, disabled, onPressDisabled } = arg0);
  closure_3 = AnalyticsHooks.useTrackQuestContentClickedWithImpression();
  const impressionId = ContentImpressionTrackerHooks.useQuestImpressionId();
  let obj3 = {
    grow: true,
    size: "lg",
    variant: "secondary",
    loading,
    disabled,
    onPressDisabled,
    icon: closure_10(RefreshIcon.RefreshIcon, {}),
    iconPosition: "end",
    onPress(arg0) {
      if (
        obj.shouldMigrateToAdAnalyticsInterface(
          AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
          "quest_bottom_sheet_footer",
        )
      ) {
        const obj2 = {
          type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
          adCreativeType: AdCreativeType.AdCreativeType.QUEST,
          adCreativeId: questId,
          questContentCTA: AnalyticsTypes.QuestContentCTA.DEFIBRILLATOR,
          surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
          sourceQuestContent,
          impressionId,
        };
        captureAdUserAction.captureAdUserAction(obj2);
        const tmpResult = captureAdUserAction;
      } else {
        const obj3 = {
          questId,
          questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
          questContentCTA: AnalyticsTypes.QuestContentCTA.DEFIBRILLATOR,
          sourceQuestContent,
        };
        closure_3(obj3);
      }
      if (importDefault != null) {
        tmp11(arg0);
      }
      obj = AdAnalyticsInterfaceExperiment;
    },
    text: null,
  };
  const intl = util.intl;
  obj3.text = intl.string(util.t.nPThNb);
  return closure_10(components_Button_Button.Button, obj3);
}
function ClaimButton(arg0) {
  ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
  ({ disabled, loading, onPressDisabled } = arg0);
  closure_3 = AnalyticsHooks.useTrackQuestContentClickedWithImpression();
  const impressionId = ContentImpressionTrackerHooks.useQuestImpressionId();
  let obj3 = {
    grow: true,
    size: "lg",
    disabled,
    onPressDisabled,
    loading,
    onPress() {
      if (
        obj.shouldMigrateToAdAnalyticsInterface(
          AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
          "quest_bottom_sheet_footer",
        )
      ) {
        const obj2 = {
          type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
          adCreativeType: AdCreativeType.AdCreativeType.QUEST,
          adCreativeId: questId,
          questContentCTA: AnalyticsTypes.QuestContentCTA.CLAIM_REWARD,
          surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
          sourceQuestContent,
          impressionId,
        };
        captureAdUserAction.captureAdUserAction(obj2);
        const tmpResult = captureAdUserAction;
      } else {
        const obj3 = {
          questId,
          questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
          questContentCTA: AnalyticsTypes.QuestContentCTA.CLAIM_REWARD,
          sourceQuestContent,
        };
        closure_3(obj3);
      }
      importDefault();
      obj = AdAnalyticsInterfaceExperiment;
    },
    text: null,
  };
  const intl = util.intl;
  obj3.text = intl.string(util.t.cfY4PE);
  return closure_10(components_Button_Button.Button, obj3);
}
function AnimatedFooter(arg0) {
  ({ backButton, withSafeArea } = arg0);
  ({ onLayout, ctaButton, style } = arg0);
  if (withSafeArea === undefined) {
    withSafeArea = true;
  }
  _require = undefined;
  let width;
  let stateFromStores;
  let sharedValue;
  let tmp = null != backButton;
  if (tmp) {
    tmp = false !== backButton;
  }
  _require = tmp;
  const bottom = width(stateFromStores[38])().bottom;
  width = width(stateFromStores[39])().width;
  const tmp4 = closure_13();
  let items = [AccessibilityStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = require("initialize");
  let num = 0;
  if (tmp) {
    num = 1;
  }
  sharedValue = require("ReanimatedRexport").useSharedValue(num);
  const items1 = [tmp, stateFromStores, sharedValue];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (closure_0) {
      num = 1;
    }
    let num2 = 200;
    if (stateFromStores) {
      num2 = 0;
    }
    const result = sharedValue.set(timing.withTiming(num, { duration: num2 }));
  }, items1);
  const obj2 = require("ReanimatedRexport");
  const fn = function b() {
    const rect = { opacity: sharedValue.get(), position: "absolute", top: 0, left: 0, transform: null };
    const items = [{ translateX: PX_16 }];
    rect.transform = items;
    return rect;
  };
  fn.__closure = { animation: sharedValue, H_PADDING_PX: PX_16 };
  fn.__workletHash = 7564903336036;
  fn.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  const obj3 = { animation: sharedValue, H_PADDING_PX: PX_16 };
  const tmp5Result = require("ReanimatedRexport");
  const fn2 = function y() {
    const obj = { width: null, alignSelf: "flex-end" };
    const items = [width - 2 * PX_16];
    value = sharedValue.get();
    const diff = width - 2.5 * PX_16;
    items[1] = diff - ButtonConstants.LARGE_BUTTON_HEIGHT;
    obj.width = ReanimatedRexport.interpolate(value, [0, 1], items);
    return obj;
  };
  const tmp5Result2 = require("ReanimatedRexport");
  fn2.__closure = {
    interpolate: require("ReanimatedRexport").interpolate,
    animation: sharedValue,
    windowWidth: width,
    H_PADDING_PX: PX_16,
    ICON_SIZE_PX: require("ButtonConstants").LARGE_BUTTON_HEIGHT,
  };
  fn2.__workletHash = 9095621288509;
  fn2.__initData = __initData2;
  const animatedStyle1 = tmp5Result2.useAnimatedStyle(fn2);
  const items2 = [tmp4.container, ,];
  if (withSafeArea) {
    const obj5 = { paddingBottom: tmp11 };
    withSafeArea = obj5;
  }
  const obj6 = { style: items2, onLayout, children: null };
  items2[1] = withSafeArea;
  items2[2] = style;
  const items3 = [
    closure_10(width(stateFromStores[40]).View, { style: animatedStyle, children: backButton }),
    closure_10(width(stateFromStores[40]).View, { style: animatedStyle1, children: ctaButton }),
  ];
  obj6.children = items3;
  return closure_11(View, obj6);
}
const View = fn(17).View;
let closure_9 = fn(6572).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(4836);
let obj2 = { container: { display: "flex", flexGrow: 1, flexShrink: 1, paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_13 = createStyles.createStyles(obj2);
const __initData = {
  code: "function QuestBottomSheetFooterTsx1(){const{animation,H_PADDING_PX}=this.__closure;return{opacity:animation.get(),position:'absolute',top:0,left:0,transform:[{translateX:H_PADDING_PX}]};}",
};
const __initData2 = {
  code: "function QuestBottomSheetFooterTsx2(){const{interpolate,animation,windowWidth,H_PADDING_PX,ICON_SIZE_PX}=this.__closure;return{width:interpolate(animation.get(),[0,1],[windowWidth-H_PADDING_PX*2,windowWidth-H_PADDING_PX*2.5-ICON_SIZE_PX]),alignSelf:'flex-end'};}",
};
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
  const questTaskDetails = quest(10681).useQuestTaskDetails(quest);
  let obj = quest(10681);
  const isQuestProgressing = quest(10681).useIsQuestProgressing(quest);
  const obj2 = quest(10681);
  const obj3 = quest(10681);
  const xboxAndPlaystationAccounts = quest(10681).useConnectedAccounts().xboxAndPlaystationAccounts;
  const items = [quest, xboxAndPlaystationAccounts];
  const memo = noop.useMemo(
    () =>
      QuestPlatformUtils.supportedConsoles(quest).filter((item) => {
        closure_0 = item;
        return null != xboxAndPlaystationAccounts.find((type) => type.type === closure_0);
      }),
    items,
  );
  const obj4 = quest(10681);
  const hasWatchVideoOnMobileTasks = quest(14620).useHasWatchVideoOnMobileTasks(quest.config);
  const obj5 = quest(14620);
  const mobileActivityQuest = quest(14620).useMobileActivityQuest(quest);
  ({ isMobileActivityQuest, launchMobileActivity, questApplication } = mobileActivityQuest);
  const obj6 = quest(14620);
  const primaryCtaCopy = quest(10750).usePrimaryCtaCopy({ quest, application: questApplication });
  const obj7 = quest(10750);
  const userStatus = quest.userStatus;
  let completedAt;
  const obj8 = quest(14654);
  const obj9 = { questId: quest.id, sourceQuestContent, launchMobileActivity };
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const userStatus2 = quest.userStatus;
  let claimedAt;
  if (userStatus2 != null) {
    claimedAt = userStatus2.claimedAt;
  }
  const mobileActivityPressHandler = quest(14654).useMobileActivityPressHandler({
    questId: quest.id,
    sourceQuestContent,
    launchMobileActivity,
  });
  const tmp11 = null != completedAt;
  const isQuestAccessSuspended = quest(10681).useIsQuestAccessSuspended();
  const obj10 = { disabled: true, onPressDisabled: xboxAndPlaystationAccounts(14649) };
  let tmp40Result6 = null;
  if (step !== quest(14651).QuestBottomSheetStep.TASK_SELECT) {
    const obj11 = { onLayout: quest.onLayout, ctaButton: null, backButton: null, style: null, withSafeArea: null };
    if (tmp2(14651).QuestBottomSheetStep.CONSOLE_CONNECT === step) {
      const obj12 = { onPress: onConnectConsoleNext, disabled: 0 === memo.length };
      let tmp40Result = closure_10(NextButton, obj12);
    } else {
      tmp40Result = null;
      if (tmp2(14651).QuestBottomSheetStep.TASK_STATUS === step) {
        if (tmp11) {
          const obj13 = {
            questId: quest.id,
            onPress: tmp.claim,
            disabled: tmp13,
            loading: null,
            sourceQuestContent: null,
          };
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
          const obj15 = {
            grow: true,
            size: "lg",
            onPress: mobileActivityPressHandler,
            text: primaryCtaCopy,
            icon: tmp2(10678).getPrimaryCtaIcon(quest),
          };
          let tmp23 = null;
          if (isQuestAccessSuspended) {
            tmp23 = obj10;
          }
          const merged2 = Object.assign(tmp23);
          tmp40Result4 = closure_10(tmp2(5281).Button, obj15);
          const tmp2Result2 = tmp2(10678);
        } else {
          if (
            _slicedToArray(obj3.useTaskPlatformScreen(quest, questTaskDetails), 1)[0] ===
            tmp2(5759).TaskPlatformScreen.CONSOLE
          ) {
            if (!isQuestProgressing) {
              const obj16 = {
                questId: quest.id,
                loading: isDefibrilating,
                disabled: isDefibrilating,
                onPress: onDefib,
                sourceQuestContent,
              };
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
      const intl = tmp2(1115).intl;
      obj18.accessibilityLabel = intl.string(tmp2(1115).t["13/7kX"]);
      obj18.icon = closure_10(tmp2(5940).ArrowLargeLeftIcon, {});
      obj18.onPress = onBack;
      tmp40Result5 = closure_10(tmp2(7363).IconButton, obj18);
    }
    obj11.backButton = tmp40Result5;
    obj11.style = style;
    obj11.withSafeArea = withSafeArea;
    tmp40Result6 = closure_10(AnimatedFooter, obj11);
  }
  return tmp40Result6;
}
export { useQuestRewardClaimHandler };
