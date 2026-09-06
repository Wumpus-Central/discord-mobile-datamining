// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ButtonConstants from "../../../../design/components/Button/native/ButtonConstants.native.tsx";
import AdAnalyticsInterfaceExperiment from "../../experiments/AdAnalyticsInterfaceExperiment.tsx";
import QuestCopyUtils from "../../utils/QuestCopyUtils.tsx";
import ContentImpressionTrackerHooks from "../../lib/analytics/ContentImpressionTrackerHooks.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import MobileQuestVideoWatchCtaCopy from "../../utils/MobileQuestVideoWatchCtaCopy.tsx";
import QuestUtils from "../QuestUtils.native.tsx";
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
  let obj = quest(QUEST_BOTTOM_SHEET[11]);
  const progressState = obj.useProgressState(quest);
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
  let tmp3Result = tmp3(tmp4[15]);
  const items1 = [stateFromStores];
  const stateFromStoresObject = tmp3Result.useStateFromStoresObject(items1, () => ({
    isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id),
    isClaimingReward: QuestStore.isClaimingReward(quest.id),
  }));
  isFetchingRewardCode = stateFromStoresObject.isFetchingRewardCode;
  tmp3Result = tmp3(tmp4[15]);
  const items2 = [isFetchingRewardCode];
  stateFromStores = tmp3Result.useStateFromStores(items2, () => {
    const currentUser = isFetchingRewardCode.getCurrentUser();
    let result;
    if (currentUser != null) {
      result = currentUser.hasVerifiedEmailOrPhone();
    }
    return result;
  });
  const obj4 = quest(QUEST_BOTTOM_SHEET[14]);
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
  const tmp3Result1 = quest(QUEST_BOTTOM_SHEET[15]);
  const token = quest(QUEST_BOTTOM_SHEET[16]).useToken(flag(tmp4[8]).colors.BACKGROUND_BASE_LOWER);
  const tmp3Result2 = quest(QUEST_BOTTOM_SHEET[16]);
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
    obj = { buttonColors, confettiColors: null, backgroundColors: null };
    const styles = product.styles;
    let confettiColors;
    if (styles != null) {
      confettiColors = styles.confettiColors;
    }
    if (confettiColors == null) {
      confettiColors = [];
    }
    obj.confettiColors = confettiColors;
    const items5 = [tmp14(tmp4[17])(token1), tmp14(tmp4[17])(token), tmp14(tmp4[17])(tmp18)];
    obj.backgroundColors = items5;
    product.styles = obj;
  }
  obj = { isLoading: memo1, isClaiming: stateFromStoresObject.isClaimingReward, claim: null };
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
  obj.claim = sourceQuestContent.useCallback(() => {
    const obj = {
      quest,
      product,
      hideActionSheet: flag,
      questContent: QUEST_BOTTOM_SHEET,
      currentUserHasVerifiedEmailOrPhone: stateFromStores,
      currentUserHasVerifiedEmail: stateFromStores1,
      onSuccess,
      sourceQuestContent,
    };
    return obj.handleRewardClaimThenView(obj);
  }, items6);
  return obj;
}
function WatchTaskButton(arg0) {
  ({ questId, sourceQuestContent, taskDetails, disabled, onPressDisabled } = arg0);
  let obj = QuestBottomSheetHooks;
  obj = {
    grow: true,
    size: "lg",
    onPress: obj.useWatchTaskPressHandler({ questId, sourceQuestContent }),
    disabled,
    onPressDisabled,
    text: null,
  };
  const watchTaskPressHandler = obj.useWatchTaskPressHandler({ questId, sourceQuestContent });
  obj.text = MobileQuestVideoWatchCtaCopy.getVideoQuestWatchCtaText(taskDetails);
  return closure_1_10(components_Button_Button.Button, obj);
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
  let obj = AnalyticsHooks;
  closure_3 = obj.useTrackQuestContentClickedWithImpression();
  const impressionId = ContentImpressionTrackerHooks.useQuestImpressionId();
  obj = {
    grow: true,
    size: "lg",
    variant: "secondary",
    loading,
    disabled,
    onPressDisabled,
    icon: closure_10(RefreshIcon.RefreshIcon, {}),
    iconPosition: "end",
    onPress(arg0) {
      let obj = AdAnalyticsInterfaceExperiment;
      if (
        obj.shouldMigrateToAdAnalyticsInterface(
          AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
          "quest_bottom_sheet_footer",
        )
      ) {
        obj = {
          type: tmp(11197).AdUserActionType.CLICK_INTERNAL,
          adCreativeType: tmp(5451).AdCreativeType.QUEST,
          adCreativeId: questId,
          questContentCTA: tmp(7728).QuestContentCTA.DEFIBRILLATOR,
          surfaceId: tmp(5447).QuestContent.QUEST_BOTTOM_SHEET,
          sourceQuestContent,
          impressionId,
        };
        tmp(11193).captureAdUserAction(obj);
        const tmpResult = tmp(11193);
      } else {
        obj = {
          questId,
          questContent: tmp(5447).QuestContent.QUEST_BOTTOM_SHEET,
          questContentCTA: tmp(7728).QuestContentCTA.DEFIBRILLATOR,
          sourceQuestContent,
        };
        closure_3(obj);
      }
      if (importDefault != null) {
        tmp11(arg0);
      }
    },
    text: null,
  };
  const intl = util.intl;
  obj.text = intl.string(util.t.nPThNb);
  return closure_10(components_Button_Button.Button, obj);
}
function ClaimButton(arg0) {
  ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
  ({ disabled, loading, onPressDisabled } = arg0);
  let obj = AnalyticsHooks;
  closure_3 = obj.useTrackQuestContentClickedWithImpression();
  const impressionId = ContentImpressionTrackerHooks.useQuestImpressionId();
  obj = {
    grow: true,
    size: "lg",
    disabled,
    onPressDisabled,
    loading,
    onPress() {
      let obj = AdAnalyticsInterfaceExperiment;
      if (
        obj.shouldMigrateToAdAnalyticsInterface(
          AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
          "quest_bottom_sheet_footer",
        )
      ) {
        obj = {
          type: tmp(11197).AdUserActionType.CLICK_INTERNAL,
          adCreativeType: tmp(5451).AdCreativeType.QUEST,
          adCreativeId: questId,
          questContentCTA: tmp(7728).QuestContentCTA.CLAIM_REWARD,
          surfaceId: tmp(5447).QuestContent.QUEST_BOTTOM_SHEET,
          sourceQuestContent,
          impressionId,
        };
        tmp(11193).captureAdUserAction(obj);
        const tmpResult = tmp(11193);
      } else {
        obj = {
          questId,
          questContent: tmp(5447).QuestContent.QUEST_BOTTOM_SHEET,
          questContentCTA: tmp(7728).QuestContentCTA.CLAIM_REWARD,
          sourceQuestContent,
        };
        closure_3(obj);
      }
      importDefault();
    },
    text: null,
  };
  const intl = util.intl;
  obj.text = intl.string(util.t.cfY4PE);
  return closure_10(components_Button_Button.Button, obj);
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
  let obj = require("initialize");
  let items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = require("ReanimatedRexport");
  let num = 0;
  if (tmp) {
    num = 1;
  }
  sharedValue = obj1.useSharedValue(num);
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
  let tmp5Result = tmp5(tmp3[40]);
  const fn = function b() {
    const rect = { opacity: sharedValue.get(), position: "absolute", top: 0, left: 0, transform: null };
    const items = [{ translateX: PX_16 }];
    rect.transform = items;
    return rect;
  };
  obj = { animation: sharedValue, H_PADDING_PX: PX_16 };
  fn.__closure = obj;
  fn.__workletHash = 7564903336036;
  fn.__initData = __initData;
  const animatedStyle = tmp5Result.useAnimatedStyle(fn);
  tmp5Result = tmp5(tmp3[40]);
  const fn2 = function y() {
    const obj = { width: null, alignSelf: "flex-end" };
    const items = [width - 2 * PX_16];
    value = sharedValue.get();
    const diff = width - 2.5 * PX_16;
    items[1] = diff - ButtonConstants.LARGE_BUTTON_HEIGHT;
    obj.width = ReanimatedRexport.interpolate(value, [0, 1], items);
    return obj;
  };
  obj = {
    interpolate: tmp5(tmp3[40]).interpolate,
    animation: sharedValue,
    windowWidth: width,
    H_PADDING_PX: PX_16,
    ICON_SIZE_PX: tmp5(tmp3[42]).LARGE_BUTTON_HEIGHT,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 9095621288509;
  fn2.__initData = __initData2;
  const animatedStyle1 = tmp5Result.useAnimatedStyle(fn2);
  const items2 = [closure_13().container, ,];
  if (withSafeArea) {
    obj1 = { paddingBottom: tmp11 };
    withSafeArea = obj1;
  }
  const obj2 = { style: items2, onLayout, children: null };
  items2[1] = withSafeArea;
  items2[2] = style;
  const items3 = [
    closure_10(width(stateFromStores[40]).View, { style: animatedStyle, children: backButton }),
    closure_10(width(stateFromStores[40]).View, { style: animatedStyle1, children: ctaButton }),
  ];
  obj2.children = items3;
  return closure_11(View, obj2);
}
const View = fn(17).View;
let closure_9 = fn(7151).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
fn(4560);
let createStyles = { container: null };
createStyles = { display: "flex", flexGrow: 1, flexShrink: 1, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
let closure_13 = createStyles.createStyles(createStyles);
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
  let obj = quest(11483);
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  let obj1 = quest(11483);
  const isQuestProgressing = obj1.useIsQuestProgressing(quest);
  let obj2 = quest(11483);
  let obj3 = quest(11483);
  const xboxAndPlaystationAccounts = obj3.useConnectedAccounts().xboxAndPlaystationAccounts;
  const items = [quest, xboxAndPlaystationAccounts];
  const memo = noop.useMemo(
    () =>
      QuestPlatformUtils.supportedConsoles(quest).filter((item) => {
        closure_0 = item;
        return null != xboxAndPlaystationAccounts.find((type) => type.type === closure_0);
      }),
    items,
  );
  let obj4 = quest(15091);
  const hasWatchVideoOnMobileTasks = obj4.useHasWatchVideoOnMobileTasks(quest.config);
  let obj5 = quest(15091);
  const mobileActivityQuest = obj5.useMobileActivityQuest(quest);
  ({ isMobileActivityQuest, launchMobileActivity, questApplication } = mobileActivityQuest);
  let obj6 = quest(11775);
  const primaryCtaCopy = obj6.usePrimaryCtaCopy({ quest, application: questApplication });
  let obj7 = quest(15123);
  obj = { questId: quest.id, sourceQuestContent, launchMobileActivity };
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const userStatus2 = quest.userStatus;
  let claimedAt;
  if (userStatus2 != null) {
    claimedAt = userStatus2.claimedAt;
  }
  let tmp2Result = tmp2(11483);
  const isQuestAccessSuspended = tmp2Result.useIsQuestAccessSuspended();
  obj = { disabled: true, onPressDisabled: xboxAndPlaystationAccounts(15118) };
  let tmp40Result2 = null;
  if (step !== quest(15120).QuestBottomSheetStep.TASK_SELECT) {
    obj1 = { onLayout: quest.onLayout, ctaButton: null, backButton: null, style: null, withSafeArea: null };
    if (tmp2(15120).QuestBottomSheetStep.CONSOLE_CONNECT === step) {
      obj2 = { onPress: onConnectConsoleNext, disabled: 0 === memo.length };
      let tmp40Result = tmp40(NextButton, obj2);
    } else {
      tmp40Result = null;
      if (tmp2(15120).QuestBottomSheetStep.TASK_STATUS === step) {
        if (tmp11) {
          obj3 = { questId: quest.id, onPress: tmp.claim, disabled: tmp13, loading: null, sourceQuestContent: null };
          let isClaiming = tmp.isLoading;
          if (!isClaiming) {
            isClaiming = tmp.isClaiming;
          }
          obj3.loading = isClaiming;
          obj3.sourceQuestContent = sourceQuestContent;
          let tmp33 = null;
          if (isQuestAccessSuspended) {
            tmp33 = null;
            if (!tmp13) {
              tmp33 = obj;
            }
          }
          const merged = Object.assign(tmp33);
          tmp40Result = tmp40(ClaimButton, obj3);
        } else if (hasWatchVideoOnMobileTasks) {
          obj4 = { questId: quest.id, taskDetails: questTaskDetails, sourceQuestContent };
          let tmp28 = null;
          if (isQuestAccessSuspended) {
            tmp28 = obj;
          }
          const merged1 = Object.assign(tmp28);
          tmp40Result = tmp40(WatchTaskButton, obj4);
        } else if (isMobileActivityQuest) {
          obj5 = { grow: true, size: "lg", onPress: mobileActivityPressHandler, text: primaryCtaCopy, icon: null };
          tmp2Result = tmp2(11767);
          obj5.icon = tmp2Result.getPrimaryCtaIcon(quest);
          let tmp23 = null;
          if (isQuestAccessSuspended) {
            tmp23 = obj;
          }
          const merged2 = Object.assign(tmp23);
          tmp40Result = tmp40(tmp2(4975).Button, obj5);
        } else {
          if (
            _slicedToArray(obj2.useTaskPlatformScreen(quest, questTaskDetails), 1)[0] ===
            tmp2(5447).TaskPlatformScreen.CONSOLE
          ) {
            if (!isQuestProgressing) {
              obj6 = {
                questId: quest.id,
                loading: isDefibrilating,
                disabled: isDefibrilating,
                onPress: onDefib,
                sourceQuestContent,
              };
              let tmp17 = null;
              if (isQuestAccessSuspended) {
                tmp17 = obj;
              }
              const merged3 = Object.assign(tmp17);
              tmp40Result = tmp40(DefibButton, obj6);
            }
          }
          obj7 = { questId: quest.id, onPress: tmp.claim, disabled: true, sourceQuestContent };
          tmp40Result = tmp40(ClaimButton, obj7);
        }
      }
    }
    obj1.ctaButton = tmp40Result;
    let tmp40Result1 = null != onBack;
    if (tmp40Result1) {
      const obj8 = { accessibilityLabel: null, variant: "secondary", icon: null, onPress: null, size: "lg" };
      const intl = tmp2(1114).intl;
      obj8.accessibilityLabel = intl.string(tmp2(1114).t["13/7kX"]);
      obj8.icon = tmp40(tmp2(5628).ArrowLargeLeftIcon, {});
      obj8.onPress = onBack;
      tmp40Result1 = tmp40(tmp2(8097).IconButton, obj8);
    }
    obj1.backButton = tmp40Result1;
    obj1.style = style;
    obj1.withSafeArea = withSafeArea;
    tmp40Result2 = tmp40(AnimatedFooter, obj1);
  }
  return tmp40Result2;
}
export { useQuestRewardClaimHandler };
