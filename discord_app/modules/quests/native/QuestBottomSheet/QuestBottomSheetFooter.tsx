// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import QuestsVisibleMessagesChangedSource from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import getQuestContentName from "../../lib/analytics/AnalyticsTypes.tsx";
import apexExperiment from "../../experiments/AdAnalyticsInterfaceExperiment.tsx";
import emitClickEventWithCreative from "../../../ads/analytics/captureAdUserAction.tsx";
import AdUserActionType from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import useAdContentImpressionTrackerProps from "../../lib/analytics/ContentImpressionTrackerHooks.tsx";
import formatWatchRemainingDurationShort from "../../utils/MobileQuestVideoWatchCtaCopy.tsx";
import useTrackQuestEventWithImpression from "../../lib/analytics/AnalyticsHooks.tsx";
import RefreshIcon from "../../../../design/components/Icon/native/redesign/generated/RefreshIcon.tsx";
import useWatchTaskPressHandler from "QuestBottomSheetHooks.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../../a11y/AccessibilityStore.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import initializeState from "../../QuestStore.tsx";
import { ACTION_SHEET_MINIMUM_BOTTOM_PADDING as closure_9 } from "../../../action_sheet/native/ActionSheetConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

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
      quest(QUEST_BOTTOM_SHEET[18]);
      const obj = { quest, product: c5, hideActionSheet: flag, questContent: QUEST_BOTTOM_SHEET, currentUserHasVerifiedEmailOrPhone: stateFromStores, currentUserHasVerifiedEmail: stateFromStores1, onSuccess, sourceQuestContent };
      return obj.handleRewardClaimThenView(obj);
    }, items6)
  };
  items6 = [quest, product, stateFromStores, stateFromStores1, flag, QUEST_BOTTOM_SHEET, onSuccess, sourceQuestContent];
  return obj;
}
function WatchTaskButton(arg0) {
  ({ questId, sourceQuestContent, taskDetails, disabled, onPressDisabled } = arg0);
  let obj = useWatchTaskPressHandler;
  obj = { grow: true, size: "lg", onPress: obj.useWatchTaskPressHandler({ questId, sourceQuestContent }), disabled, onPressDisabled, text: null };
  const watchTaskPressHandler = obj.useWatchTaskPressHandler({ questId, sourceQuestContent });
  obj[5] = formatWatchRemainingDurationShort.getVideoQuestWatchCtaText(taskDetails);
  return callback2(Button.Button, obj);
}
function NextButton(arg0) {
  ({ onPress, disabled } = arg0);
  const obj = { grow: true, size: "lg", onPress, disabled, text: null };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t.a9OfTN);
  return callback2(Button.Button, obj);
}
function DefibButton(arg0) {
  ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
  ({ loading, disabled, onPressDisabled } = arg0);
  let obj = useTrackQuestEventWithImpression;
  closure_3 = obj.useTrackQuestContentClickedWithImpression();
  closure_4 = useAdContentImpressionTrackerProps.useQuestImpressionId();
  obj = {
    grow: true,
    size: "lg",
    variant: "secondary",
    loading,
    disabled,
    onPressDisabled,
    icon: callback2(RefreshIcon.RefreshIcon, {}),
    iconPosition: "end",
    onPress(arg0) {
      let obj = apexExperiment;
      if (obj.shouldMigrateToAdAnalyticsInterface(apexExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_footer")) {
        obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
        obj[0] = AdUserActionType.AdUserActionType.CLICK_INTERNAL;
        obj[1] = AdCreativeType.AdCreativeType.QUEST;
        obj[2] = closure_0;
        obj[3] = getQuestContentName.QuestContentCTA.DEFIBRILLATOR;
        obj[4] = QuestsVisibleMessagesChangedSource.QuestContent.QUEST_BOTTOM_SHEET;
        obj[5] = closure_2;
        obj[6] = closure_4;
        emitClickEventWithCreative.captureAdUserAction(obj);
        const tmpResult = emitClickEventWithCreative;
      } else {
        obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
        obj[0] = closure_0;
        obj[1] = QuestsVisibleMessagesChangedSource.QuestContent.QUEST_BOTTOM_SHEET;
        obj[2] = getQuestContentName.QuestContentCTA.DEFIBRILLATOR;
        obj[3] = closure_2;
        callback(obj);
      }
      if (closure_1 != null) {
        tmp11(arg0);
      }
    },
    text: null
  };
  const intl = getSystemLocale.intl;
  obj[9] = intl.string(getSystemLocale.t.nPThNb);
  return callback2(Button.Button, obj);
}
function ClaimButton(arg0) {
  ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
  ({ disabled, loading, onPressDisabled } = arg0);
  let obj = useTrackQuestEventWithImpression;
  closure_3 = obj.useTrackQuestContentClickedWithImpression();
  closure_4 = useAdContentImpressionTrackerProps.useQuestImpressionId();
  obj = {
    grow: true,
    size: "lg",
    disabled,
    onPressDisabled,
    loading,
    onPress() {
      let obj = apexExperiment;
      if (obj.shouldMigrateToAdAnalyticsInterface(apexExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_footer")) {
        obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
        obj[0] = AdUserActionType.AdUserActionType.CLICK_INTERNAL;
        obj[1] = AdCreativeType.AdCreativeType.QUEST;
        obj[2] = closure_0;
        obj[3] = getQuestContentName.QuestContentCTA.CLAIM_REWARD;
        obj[4] = QuestsVisibleMessagesChangedSource.QuestContent.QUEST_BOTTOM_SHEET;
        obj[5] = closure_2;
        obj[6] = closure_4;
        emitClickEventWithCreative.captureAdUserAction(obj);
        const tmpResult = emitClickEventWithCreative;
      } else {
        obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
        obj[0] = closure_0;
        obj[1] = QuestsVisibleMessagesChangedSource.QuestContent.QUEST_BOTTOM_SHEET;
        obj[2] = getQuestContentName.QuestContentCTA.CLAIM_REWARD;
        obj[3] = closure_2;
        callback2(obj);
      }
      callback();
    },
    text: null
  };
  const intl = getSystemLocale.intl;
  obj[6] = intl.string(getSystemLocale.t.cfY4PE);
  return callback2(Button.Button, obj);
}
function AnimatedFooter(arg0) {
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
  const bottom = width(stateFromStores[38])().bottom;
  width = width(stateFromStores[39])().width;
  let obj = _require(stateFromStores[15]);
  let items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj1 = _require(stateFromStores[40]);
  let num = 0;
  if (tmp) {
    num = 1;
  }
  sharedValue = obj1.useSharedValue(num);
  const items1 = [tmp, stateFromStores, sharedValue];
  const effect = React.useEffect(() => {
    let num = 0;
    if (callback) {
      num = 1;
    }
    let num2 = 200;
    if (stateFromStores) {
      num2 = 0;
    }
    const result = sharedValue.set(callback(stateFromStores[41]).withTiming(num, { duration: num2 }));
    const obj = callback(stateFromStores[41]);
  }, items1);
  let tmp5Result = tmp5(tmp3[40]);
  const fn = function b() {
    { opacity: sharedValue.get(), position: "absolute", top: 0, left: 0, transform: items };
    const obj = { translateX: PX_16 };
    items = [obj];
    return obj;
  };
  obj = { animation: sharedValue, H_PADDING_PX: PX_16 };
  fn.__closure = obj;
  fn.__workletHash = 7564903336036;
  fn.__initData = closure_19;
  const animatedStyle = tmp5Result.useAnimatedStyle(fn);
  tmp5Result = tmp5(tmp3[40]);
  const fn2 = function y() {
    const obj = { width: null, alignSelf: "flex-end" };
    const items = [width - 2 * PX_16, ];
    const value = sharedValue.get();
    const diff = width - 2.5 * PX_16;
    items[1] = diff - callback(stateFromStores[42]).LARGE_BUTTON_HEIGHT;
    obj[0] = callback(stateFromStores[40]).interpolate(value, [0, 1], items);
    return obj;
  };
  obj = { interpolate: tmp5(tmp3[40]).interpolate, animation: sharedValue, windowWidth: width, H_PADDING_PX: PX_16, ICON_SIZE_PX: tmp5(tmp3[42]).LARGE_BUTTON_HEIGHT };
  fn2.__closure = obj;
  fn2.__workletHash = 9095621288509;
  fn2.__initData = closure_20;
  const animatedStyle1 = tmp5Result.useAnimatedStyle(fn2);
  const items2 = [callback3().container, , ];
  if (withSafeArea) {
    obj1 = { paddingBottom: null };
    obj1[0] = tmp11;
    withSafeArea = obj1;
  }
  const obj2 = { style: items2, onLayout, children: null };
  items2[1] = withSafeArea;
  items2[2] = style;
  const items3 = [callback2(width(stateFromStores[40]).View, { style: animatedStyle, children: backButton }), callback2(width(stateFromStores[40]).View, { style: animatedStyle1, children: ctaButton })];
  obj2[2] = items3;
  return callback2(View, obj2);
}
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const PX_16 = ThemesDefault.space.PX_16;
const createCacheKey = { display: "flex", flexGrow: 1, flexShrink: 1, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_13 = createCacheKey.createStyles(createCacheKey);
let closure_19 = { code: "function QuestBottomSheetFooterTsx1(){const{animation,H_PADDING_PX}=this.__closure;return{opacity:animation.get(),position:'absolute',top:0,left:0,transform:[{translateX:H_PADDING_PX}]};}" };
let closure_20 = { code: "function QuestBottomSheetFooterTsx2(){const{interpolate,animation,windowWidth,H_PADDING_PX,ICON_SIZE_PX}=this.__closure;return{width:interpolate(animation.get(),[0,1],[windowWidth-H_PADDING_PX*2,windowWidth-H_PADDING_PX*2.5-ICON_SIZE_PX]),alignSelf:'flex-end'};}" };
let result = require("obj132").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx");

export default function QuestBottomSheetFooter(quest) {
  quest = quest.quest;
  ({ step, isDefibrilating } = quest);
  if (isDefibrilating === undefined) {
    isDefibrilating = false;
  }
  ({ onBack, sourceQuestContent } = quest);
  ({ onConnectConsoleNext, onDefib, style, withSafeArea } = quest);
  const tmp = useQuestRewardClaimHandler({ quest, sourceQuestContent });
  let obj = quest(10684);
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  obj1 = quest(10684);
  const isQuestProgressing = obj1.useIsQuestProgressing(quest);
  let obj2 = quest(10684);
  let obj3 = quest(10684);
  const xboxAndPlaystationAccounts = obj3.useConnectedAccounts().xboxAndPlaystationAccounts;
  const items = [quest, xboxAndPlaystationAccounts];
  const memo = React.useMemo(() => {
    const obj = quest(dependencyMap[22]);
    return quest(dependencyMap[22]).supportedConsoles(quest).filter((item, index) => {
      closure_0 = item;
      return null != closure_1.find((item, index) => item.type === closure_0);
    });
  }, items);
  let obj4 = quest(14443);
  const hasWatchVideoOnMobileTasks = obj4.useHasWatchVideoOnMobileTasks(quest.config);
  let obj5 = quest(14443);
  const mobileActivityQuest = obj5.useMobileActivityQuest(quest);
  ({ isMobileActivityQuest, launchMobileActivity, questApplication } = mobileActivityQuest);
  let obj6 = quest(10954);
  const primaryCtaCopy = obj6.usePrimaryCtaCopy({ quest, application: questApplication });
  let obj7 = quest(14475);
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
  let tmp2Result = tmp2(10684);
  const isQuestAccessSuspended = tmp2Result.useIsQuestAccessSuspended();
  obj = { disabled: true, onPressDisabled: xboxAndPlaystationAccounts(14470) };
  let tmp40Result2 = null;
  if (step !== quest(14472).QuestBottomSheetStep.TASK_SELECT) {
    obj1 = { onLayout: null, ctaButton: null, backButton: null, style: null, withSafeArea: null };
    obj1[0] = quest.onLayout;
    if (tmp2(14472).QuestBottomSheetStep.CONSOLE_CONNECT === step) {
      obj2 = { onPress: null, disabled: null };
      obj2[0] = onConnectConsoleNext;
      obj2[1] = 0 === memo.length;
      let tmp40Result = callback(NextButton, obj2);
    } else {
      tmp40Result = null;
      if (tmp2(14472).QuestBottomSheetStep.TASK_STATUS === step) {
        if (tmp11) {
          obj3 = { questId: null, onPress: null, disabled: null, loading: null, sourceQuestContent: null };
          obj3[0] = quest.id;
          obj3[1] = tmp.claim;
          obj3[2] = tmp13;
          let isClaiming = tmp.isLoading;
          if (!isClaiming) {
            isClaiming = tmp.isClaiming;
          }
          obj3[3] = isClaiming;
          obj3[4] = sourceQuestContent;
          let tmp33 = null;
          if (isQuestAccessSuspended) {
            tmp33 = null;
            if (!tmp13) {
              tmp33 = obj;
            }
          }
          const merged = Object.assign(tmp33);
          tmp40Result = callback(ClaimButton, obj3);
        } else if (hasWatchVideoOnMobileTasks) {
          obj4 = { questId: null, taskDetails: null, sourceQuestContent: null };
          obj4[0] = quest.id;
          obj4[1] = questTaskDetails;
          obj4[2] = sourceQuestContent;
          let tmp28 = null;
          if (isQuestAccessSuspended) {
            tmp28 = obj;
          }
          const merged1 = Object.assign(tmp28);
          tmp40Result = callback(WatchTaskButton, obj4);
        } else if (isMobileActivityQuest) {
          obj5 = { grow: true, size: "lg", onPress: null, text: null, icon: null };
          obj5[2] = mobileActivityPressHandler;
          obj5[3] = primaryCtaCopy;
          tmp2Result = tmp2(10947);
          obj5[4] = tmp2Result.getPrimaryCtaIcon(quest);
          let tmp23 = null;
          if (isQuestAccessSuspended) {
            tmp23 = obj;
          }
          const merged2 = Object.assign(tmp23);
          tmp40Result = callback(tmp2(4745).Button, obj5);
        } else {
          if (callback(obj2.useTaskPlatformScreen(quest, questTaskDetails), 1)[0] === tmp2(6719).TaskPlatformScreen.CONSOLE) {
            if (!isQuestProgressing) {
              obj6 = { questId: null, loading: null, disabled: null, onPress: null, sourceQuestContent: null };
              obj6[0] = quest.id;
              obj6[1] = isDefibrilating;
              obj6[2] = isDefibrilating;
              obj6[3] = onDefib;
              obj6[4] = sourceQuestContent;
              let tmp17 = null;
              if (isQuestAccessSuspended) {
                tmp17 = obj;
              }
              const merged3 = Object.assign(tmp17);
              tmp40Result = callback(DefibButton, obj6);
            }
          }
          obj7 = { questId: null, onPress: null, disabled: true, sourceQuestContent: null };
          obj7[0] = quest.id;
          obj7[1] = tmp.claim;
          obj7[3] = sourceQuestContent;
          tmp40Result = callback(ClaimButton, obj7);
        }
      }
    }
    obj1[1] = tmp40Result;
    let tmp40Result1 = null != onBack;
    if (tmp40Result1) {
      const obj8 = { accessibilityLabel: null, variant: "secondary", icon: null, onPress: null, size: "lg" };
      const intl = tmp2(1236).intl;
      obj8[0] = intl.string(tmp2(1236).t["13/7kX"]);
      obj8[2] = callback(tmp2(6316).ArrowLargeLeftIcon, {});
      obj8[3] = onBack;
      tmp40Result1 = callback(tmp2(8035).IconButton, obj8);
    }
    obj1[2] = tmp40Result1;
    obj1[3] = style;
    obj1[4] = withSafeArea;
    tmp40Result2 = callback(AnimatedFooter, obj1);
  }
  return tmp40Result2;
};
export { useQuestRewardClaimHandler };