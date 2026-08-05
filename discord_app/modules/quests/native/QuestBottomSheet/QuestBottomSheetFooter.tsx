// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx
import apexExperiment from "apexExperiment";
import useWatchTaskPressHandler from "useWatchTaskPressHandler";
import { View } from "tinycolor";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import mergeGuildAvatar from "mergeGuildAvatar";
import initializeState from "initializeState";
import { ACTION_SHEET_MINIMUM_BOTTOM_PADDING as closure_9 } from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "formatWatchRemainingDurationShort";
import createCacheKey from "createCacheKey";
import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
import { RefreshIcon } from "../../../../design/components/Icon/native/redesign/generated/RefreshIcon.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { useTrackQuestEventWithImpression } from "../../lib/analytics/AnalyticsHooks.tsx";
import { useAdContentImpressionTrackerProps } from "../../lib/analytics/ContentImpressionTrackerHooks.tsx";
import { formatWatchRemainingDurationShort } from "../../utils/MobileQuestVideoWatchCtaCopy.tsx";
import { useWatchTaskPressHandler } from "QuestBottomSheetHooks.tsx";

let c10;
let unpackModuleId;
const require = arg1;
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
  let c5;
  let isFetching;
  let isFetchingRewardCode;
  let stateFromStores;
  let stateFromStores1;
  let obj = quest(QUEST_BOTTOM_SHEET[11]);
  const progressState = obj.useProgressState(quest);
  const items = [quest.config];
  let result = quest(QUEST_BOTTOM_SHEET[12]).hasCollectiblesQuestReward(quest.config);
  const memo = sourceQuestContent.useMemo(() => quest(QUEST_BOTTOM_SHEET[13]).getDefaultReward(quest.config).skuId, items);
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
  const stateFromStoresObject = tmp3Result.useStateFromStoresObject(items1, () => ({ isFetchingRewardCode: stateFromStores.isFetchingRewardCode(quest.id), isClaimingReward: stateFromStores.isClaimingReward(quest.id) }));
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
    const items5 = [tmp14(tmp4[17])(token1), tmp14(tmp4[17])(token), tmp14(tmp4[17])(tmp18)];
    obj[2] = items5;
    product.styles = obj;
  }
  obj = {
    isLoading: memo1,
    isClaiming: stateFromStoresObject.isClaimingReward,
    claim: obj3.useCallback(() => {
      let obj = quest(QUEST_BOTTOM_SHEET[18]);
      obj = { quest, product: c5, hideActionSheet: flag, questContent: QUEST_BOTTOM_SHEET, currentUserHasVerifiedEmailOrPhone: stateFromStores, currentUserHasVerifiedEmail: stateFromStores1, onSuccess, sourceQuestContent };
      return obj.handleRewardClaimThenView(obj);
    }, items6)
  };
  items6 = [quest, product, stateFromStores, stateFromStores1, flag, QUEST_BOTTOM_SHEET, onSuccess, sourceQuestContent];
  return obj;
}
function WatchTaskButton(arg0) {
  let questId;
  let sourceQuestContent;
  let taskDetails;
  ({ questId, sourceQuestContent, taskDetails } = arg0);
  let obj = useWatchTaskPressHandler;
  obj = { grow: true, size: "lg", onPress: obj.useWatchTaskPressHandler({ questId, sourceQuestContent }), text: null };
  const watchTaskPressHandler = obj.useWatchTaskPressHandler({ questId, sourceQuestContent });
  obj[3] = formatWatchRemainingDurationShort.getVideoQuestWatchCtaText(taskDetails);
  return callback2(Button.Button, obj);
}
function NextButton(arg0) {
  let disabled;
  let onPress;
  ({ onPress, disabled } = arg0);
  const obj = { grow: true, size: "lg", onPress, disabled, text: null };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t.a9OfTN);
  return callback2(Button.Button, obj);
}
function DefibButton(arg0) {
  let dependencyMap;
  let disabled;
  let importDefault;
  let loading;
  let require;
  ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
  let apexExperiment;
  let useWatchTaskPressHandler;
  ({ loading, disabled } = arg0);
  let obj = useTrackQuestEventWithImpression;
  apexExperiment = obj.useTrackQuestContentClickedWithImpression();
  useWatchTaskPressHandler = useAdContentImpressionTrackerProps.useQuestImpressionId();
  obj = { grow: true, size: "lg", variant: "secondary", loading, disabled, icon: null, iconPosition: "end", onPress: null, text: null };
  obj[5] = callback2(RefreshIcon.RefreshIcon, {});
  obj[7] = function onPress(arg0) {
    let obj = outer1_0(outer1_2[32]);
    if (obj.shouldMigrateToAdAnalyticsInterface(outer1_0(outer1_2[32]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_footer")) {
      obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
      obj[0] = tmp(tmp2[34]).AdUserActionType.CLICK_INTERNAL;
      obj[1] = tmp(tmp2[35]).AdCreativeType.QUEST;
      obj[2] = closure_0;
      obj[3] = tmp(tmp2[36]).QuestContentCTA.DEFIBRILLATOR;
      obj[4] = tmp(tmp2[10]).QuestContent.QUEST_BOTTOM_SHEET;
      obj[5] = closure_2;
      obj[6] = useWatchTaskPressHandler;
      tmp(tmp2[33]).captureAdUserAction(obj);
      const tmpResult = tmp(tmp2[33]);
    } else {
      obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
      obj[0] = closure_0;
      obj[1] = tmp(tmp2[10]).QuestContent.QUEST_BOTTOM_SHEET;
      obj[2] = tmp(tmp2[36]).QuestContentCTA.DEFIBRILLATOR;
      obj[3] = closure_2;
      callback(obj);
    }
    if (closure_1 != null) {
      tmp11(arg0);
    }
  };
  const intl = getSystemLocale.intl;
  obj[8] = intl.string(getSystemLocale.t.nPThNb);
  return callback2(Button.Button, obj);
}
function ClaimButton(arg0) {
  let dependencyMap;
  let disabled;
  let importDefault;
  let loading;
  let require;
  ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
  let apexExperiment;
  let useWatchTaskPressHandler;
  ({ disabled, loading } = arg0);
  let obj = useTrackQuestEventWithImpression;
  apexExperiment = obj.useTrackQuestContentClickedWithImpression();
  useWatchTaskPressHandler = useAdContentImpressionTrackerProps.useQuestImpressionId();
  obj = {
    grow: true,
    size: "lg",
    disabled,
    loading,
    onPress() {
      let obj = outer1_0(outer1_2[32]);
      if (obj.shouldMigrateToAdAnalyticsInterface(outer1_0(outer1_2[32]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_footer")) {
        obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
        obj[0] = tmp(tmp2[34]).AdUserActionType.CLICK_INTERNAL;
        obj[1] = tmp(tmp2[35]).AdCreativeType.QUEST;
        obj[2] = closure_0;
        obj[3] = tmp(tmp2[36]).QuestContentCTA.CLAIM_REWARD;
        obj[4] = tmp(tmp2[10]).QuestContent.QUEST_BOTTOM_SHEET;
        obj[5] = closure_2;
        obj[6] = useWatchTaskPressHandler;
        tmp(tmp2[33]).captureAdUserAction(obj);
        const tmpResult = tmp(tmp2[33]);
      } else {
        obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
        obj[0] = closure_0;
        obj[1] = tmp(tmp2[10]).QuestContent.QUEST_BOTTOM_SHEET;
        obj[2] = tmp(tmp2[36]).QuestContentCTA.CLAIM_REWARD;
        obj[3] = closure_2;
        callback2(obj);
      }
      callback();
    },
    text: null
  };
  const intl = getSystemLocale.intl;
  obj[5] = intl.string(getSystemLocale.t.cfY4PE);
  return callback2(Button.Button, obj);
}
function AnimatedFooter(arg0) {
  let backButton;
  let ctaButton;
  let onLayout;
  let style;
  let withSafeArea;
  ({ backButton, withSafeArea } = arg0);
  ({ onLayout, ctaButton, style } = arg0);
  if (withSafeArea === undefined) {
    withSafeArea = true;
  }
  let _require;
  let width;
  let stateFromStores;
  let sharedValue;
  let tmp = null != backButton;
  if (tmp) {
    tmp = false !== backButton;
  }
  _require = tmp;
  const bottom = width(stateFromStores[37])().bottom;
  width = width(stateFromStores[38])().width;
  let obj = _require(stateFromStores[15]);
  let items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = _require(stateFromStores[39]);
  let num = 0;
  if (tmp) {
    num = 1;
  }
  sharedValue = obj1.useSharedValue(num);
  const items1 = [tmp, stateFromStores, sharedValue];
  const effect = React.useEffect(() => {
    let num = 0;
    if (_undefined) {
      num = 1;
    }
    let num2 = 200;
    if (stateFromStores) {
      num2 = 0;
    }
    const result = sharedValue.set(_undefined(stateFromStores[40]).withTiming(num, { duration: num2 }));
  }, items1);
  let tmp5Result = tmp5(tmp3[39]);
  const fn = function y() {
    let obj = { opacity: sharedValue.get(), position: "absolute", top: 0, left: 0, transform: items };
    obj = { translateX: outer1_12 };
    items = [obj];
    return obj;
  };
  obj = { animation: sharedValue, H_PADDING_PX: PX_16 };
  fn.__closure = obj;
  fn.__workletHash = 7564903336036;
  fn.__initData = closure_19;
  const animatedStyle = tmp5Result.useAnimatedStyle(fn);
  tmp5Result = tmp5(tmp3[39]);
  class B {
    constructor() {
      obj = { width: null, alignSelf: "flex-end" };
      obj2 = c0(f110254[39]);
      items = [, ];
      items[0] = width - 2 * outer1_12;
      value = c3.get();
      diff = width - 2.5 * outer1_12;
      items[1] = diff - c0(f110254[41]).LARGE_BUTTON_HEIGHT;
      obj[0] = obj2.interpolate(value, [0, 1], items);
      return obj;
    }
  }
  obj = { interpolate: tmp5(tmp3[39]).interpolate, animation: sharedValue, windowWidth: width, H_PADDING_PX: PX_16, ICON_SIZE_PX: tmp5(tmp3[41]).LARGE_BUTTON_HEIGHT };
  B.__closure = obj;
  B.__workletHash = 9095621288509;
  B.__initData = closure_20;
  const animatedStyle1 = tmp5Result.useAnimatedStyle(B);
  const items2 = [createCacheKey().container, , ];
  if (withSafeArea) {
    obj1 = { paddingBottom: null };
    obj1[0] = tmp11;
    withSafeArea = obj1;
  }
  const obj2 = { style: items2, onLayout, children: null };
  items2[1] = withSafeArea;
  items2[2] = style;
  const items3 = [callback2(width(stateFromStores[39]).View, { style: animatedStyle, children: backButton }), callback2(width(stateFromStores[39]).View, { style: animatedStyle1, children: ctaButton })];
  obj2[2] = items3;
  return closure_11(View, obj2);
}
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const PX_16 = require("Themes").space.PX_16;
createCacheKey = { container: null };
createCacheKey = { display: "flex", flexGrow: 1, flexShrink: 1, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_19 = { code: "function QuestBottomSheetFooterTsx1(){const{animation,H_PADDING_PX}=this.__closure;return{opacity:animation.get(),position:'absolute',top:0,left:0,transform:[{translateX:H_PADDING_PX}]};}" };
let closure_20 = { code: "function QuestBottomSheetFooterTsx2(){const{interpolate,animation,windowWidth,H_PADDING_PX,ICON_SIZE_PX}=this.__closure;return{width:interpolate(animation.get(),[0,1],[windowWidth-H_PADDING_PX*2,windowWidth-H_PADDING_PX*2.5-ICON_SIZE_PX]),alignSelf:'flex-end'};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx");

export default function QuestBottomSheetFooter(quest) {
  let isDefibrilating;
  let isMobileActivityQuest;
  let launchMobileActivity;
  let onBack;
  let onConnectConsoleNext;
  let onDefib;
  let questApplication;
  let sourceQuestContent;
  let step;
  let style;
  let withSafeArea;
  quest = quest.quest;
  ({ step, isDefibrilating } = quest);
  if (isDefibrilating === undefined) {
    isDefibrilating = false;
  }
  ({ onBack, sourceQuestContent } = quest);
  let xboxAndPlaystationAccounts;
  ({ onConnectConsoleNext, onDefib, style, withSafeArea } = quest);
  const tmp = useQuestRewardClaimHandler({ quest, sourceQuestContent });
  let obj = quest(10374);
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  let obj1 = quest(10374);
  const isQuestProgressing = obj1.useIsQuestProgressing(quest);
  let obj2 = quest(10374);
  let obj3 = quest(10374);
  xboxAndPlaystationAccounts = obj3.useConnectedAccounts().xboxAndPlaystationAccounts;
  const items = [quest, xboxAndPlaystationAccounts];
  const memo = React.useMemo(() => {
    const obj = quest(outer1_2[22]);
    return quest(outer1_2[22]).supportedConsoles(quest).filter((arg0) => {
      let closure_0 = arg0;
      return null != closure_1.find((type) => type.type === closure_0);
    });
  }, items);
  let obj4 = quest(14236);
  const hasWatchVideoOnMobileTasks = obj4.useHasWatchVideoOnMobileTasks(quest.config);
  let obj5 = quest(14236);
  const mobileActivityQuest = obj5.useMobileActivityQuest(quest);
  ({ isMobileActivityQuest, launchMobileActivity, questApplication } = mobileActivityQuest);
  let obj6 = quest(11087);
  const primaryCtaCopy = obj6.usePrimaryCtaCopy({ quest, application: questApplication });
  let obj7 = quest(14265);
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
  let tmp23Result2 = null;
  if (step !== quest(14262).QuestBottomSheetStep.TASK_SELECT) {
    obj = { onLayout: null, ctaButton: null, backButton: null, style: null, withSafeArea: null };
    obj[0] = quest.onLayout;
    if (tmp2(14262).QuestBottomSheetStep.CONSOLE_CONNECT === step) {
      obj1 = { onPress: null, disabled: null };
      obj1[0] = onConnectConsoleNext;
      obj1[1] = 0 === memo.length;
      let tmp23Result = tmp23(NextButton, obj1);
    } else {
      tmp23Result = null;
      if (tmp2(14262).QuestBottomSheetStep.TASK_STATUS === step) {
        if (tmp11) {
          obj2 = { questId: null, onPress: null, disabled: null, loading: null, sourceQuestContent: null };
          obj2[0] = quest.id;
          obj2[1] = tmp.claim;
          obj2[2] = tmp13;
          let isClaiming = tmp.isLoading;
          if (!isClaiming) {
            isClaiming = tmp.isClaiming;
          }
          obj2[3] = isClaiming;
          obj2[4] = sourceQuestContent;
          tmp23Result = tmp23(ClaimButton, obj2);
          const tmp19 = ClaimButton;
        } else if (hasWatchVideoOnMobileTasks) {
          obj3 = { questId: null, taskDetails: null, sourceQuestContent: null };
          obj3[0] = quest.id;
          obj3[1] = questTaskDetails;
          obj3[2] = sourceQuestContent;
          tmp23Result = tmp23(WatchTaskButton, obj3);
        } else if (isMobileActivityQuest) {
          obj4 = { grow: true, size: "lg", onPress: null, text: null, icon: null };
          obj4[2] = mobileActivityPressHandler;
          obj4[3] = primaryCtaCopy;
          obj4[4] = tmp2(11080).getPrimaryCtaIcon(quest);
          tmp23Result = tmp23(tmp2(4695).Button, obj4);
          const tmp2Result = tmp2(11080);
        } else {
          if (callback(obj2.useTaskPlatformScreen(quest, questTaskDetails), 1)[0] === tmp2(5131).TaskPlatformScreen.CONSOLE) {
            if (!isQuestProgressing) {
              obj5 = { questId: null, loading: null, disabled: null, onPress: null, sourceQuestContent: null };
              obj5[0] = quest.id;
              obj5[1] = isDefibrilating;
              obj5[2] = isDefibrilating;
              obj5[3] = onDefib;
              obj5[4] = sourceQuestContent;
              tmp23Result = tmp23(DefibButton, obj5);
            }
          }
          obj6 = { questId: null, onPress: null, disabled: true, sourceQuestContent: null };
          obj6[0] = quest.id;
          obj6[1] = tmp.claim;
          obj6[3] = sourceQuestContent;
          tmp23Result = tmp23(ClaimButton, obj6);
        }
      }
    }
    obj[1] = tmp23Result;
    let tmp23Result1 = null != onBack;
    if (tmp23Result1) {
      obj7 = { accessibilityLabel: null, variant: "secondary", icon: null, onPress: null, size: "lg" };
      const intl = tmp2(1236).intl;
      obj7[0] = intl.string(tmp2(1236).t["13/7kX"]);
      obj7[2] = tmp23(tmp2(5242).ArrowLargeLeftIcon, {});
      obj7[3] = onBack;
      tmp23Result1 = tmp23(tmp2(7672).IconButton, obj7);
    }
    obj[2] = tmp23Result1;
    obj[3] = style;
    obj[4] = withSafeArea;
    tmp23Result2 = tmp23(AnimatedFooter, obj);
    const tmp24 = AnimatedFooter;
  }
  return tmp23Result2;
};
export { useQuestRewardClaimHandler };