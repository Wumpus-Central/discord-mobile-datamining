// === Module 15203: QuestBottomSheetFooter ===

// Module 15203 (QuestBottomSheetFooter)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import timing from "timing" /* 5091 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import ButtonConstants from "ButtonConstants" /* 5380 */;
import QuestTypes from "QuestTypes" /* 5980 */;
import AdCreativeType from "AdCreativeType" /* 5984 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 6207 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7404 */;
import captureAdUserAction from "captureAdUserAction" /* 7405 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7415 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7416 */;
import IconButton from "IconButton" /* 8106 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9554 */;
import QuestUtils from "QuestUtils" /* 10572 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10575 */;
import ContentImpressionTrackerHooks from "ContentImpressionTrackerHooks" /* 10580 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10582 */;
import MobileQuestVideoWatchCtaCopy from "MobileQuestVideoWatchCtaCopy" /* 10605 */;
import AnalyticsHooks from "AnalyticsHooks" /* 11160 */;
import QuestCopyHooks from "QuestCopyHooks" /* 11161 */;
import RefreshIcon from "RefreshIcon" /* 15055 */;
import QuestHooks from "QuestHooks" /* 15170 */;
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet" /* 15198 */;
import QuestBottomSheet from "QuestBottomSheet" /* 15200 */;
import QuestBottomSheetHooks from "QuestBottomSheetHooks" /* 15204 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import UserStore from "UserStore" /* 1389 */;
import QuestStore from "QuestStore" /* 7379 */;

require = fn;
function useQuestRewardClaimHandler(cResult) {
  const quest = cResult.quest;
  let flag = cResult.hideActionSheet;
  if (flag === undefined) {
    flag = true;
  }
  let QUEST_BOTTOM_SHEET = cResult.questContent;
  if (QUEST_BOTTOM_SHEET === undefined) {
    QUEST_BOTTOM_SHEET = quest(QUEST_BOTTOM_SHEET[10]).QuestContent.QUEST_BOTTOM_SHEET;
  }
  const onSuccess = cResult.onSuccess;
  const sourceQuestContent = cResult.sourceQuestContent;
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
const View = fn(17).View;
let closure_9 = fn(6830).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(5090);
let obj2 = { container: { display: "flex", flexGrow: 1, flexShrink: 1, paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function WatchTaskButton(arg0) {
  const cResult = c.c(10);
  ({ questId, sourceQuestContent, taskDetails, disabled, onPressDisabled } = arg0);
  if (cResult[0] === questId) {
    if (cResult[1] === sourceQuestContent) {
      let tmp4 = cResult[2];
    }
    const watchTaskPressHandler = QuestBottomSheetHooks.useWatchTaskPressHandler(tmp4);
    if (cResult[3] !== taskDetails) {
      const videoQuestWatchCtaText = MobileQuestVideoWatchCtaCopy.getVideoQuestWatchCtaText(taskDetails);
      cResult[3] = taskDetails;
      cResult[4] = videoQuestWatchCtaText;
      let tmp6 = videoQuestWatchCtaText;
      const tmpResult2 = MobileQuestVideoWatchCtaCopy;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === disabled) {
      if (cResult[6] === watchTaskPressHandler) {
        if (cResult[7] === onPressDisabled) {
          if (cResult[8] === tmp6) {
            let tmp8 = cResult[9];
          }
          return tmp8;
        }
      }
    }
    const obj2 = { grow: true, size: "lg", onPress: watchTaskPressHandler, disabled, onPressDisabled, text: tmp6 };
    const tmp10 = collapsed(components_Button_Button.Button, obj2);
    cResult[5] = disabled;
    cResult[6] = watchTaskPressHandler;
    cResult[7] = onPressDisabled;
    cResult[8] = tmp6;
    cResult[9] = tmp10;
    tmp8 = tmp10;
    const tmpResult = QuestBottomSheetHooks;
  }
  const obj3 = { questId, sourceQuestContent };
  cResult[0] = questId;
  cResult[1] = sourceQuestContent;
  cResult[2] = obj3;
  tmp4 = obj3;
}) : (function WatchTaskButton(arg0) {
  ({ questId, sourceQuestContent, taskDetails, disabled, onPressDisabled } = arg0);
  const obj2 = { grow: true, size: "lg", onPress: QuestBottomSheetHooks.useWatchTaskPressHandler({ questId, sourceQuestContent }), disabled, onPressDisabled, text: null };
  const watchTaskPressHandler = QuestBottomSheetHooks.useWatchTaskPressHandler({ questId, sourceQuestContent });
  obj2.text = MobileQuestVideoWatchCtaCopy.getVideoQuestWatchCtaText(taskDetails);
  return collapsed(components_Button_Button.Button, obj2);
});
fn(558);
let obj3 = { display: "flex", flexGrow: 1, flexShrink: 1, paddingHorizontal: nativeDefault.space.PX_16 };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function NextButton(arg0) {
  const cResult = c.c(4);
  ({ onPress, disabled } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.a9OfTN);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === disabled) {
    if (cResult[2] === onPress) {
      let tmp6 = cResult[3];
    }
    return tmp6;
  }
  const tmp7 = collapsed(components_Button_Button.Button, { grow: true, size: "lg", onPress, disabled, text: first });
  cResult[1] = disabled;
  cResult[2] = onPress;
  cResult[3] = tmp7;
  tmp6 = tmp7;
}) : (function NextButton(arg0) {
  ({ onPress, disabled } = arg0);
  const obj = { grow: true, size: "lg", onPress, disabled, text: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.a9OfTN);
  return collapsed(components_Button_Button.Button, obj);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function DefibButton(questId) {
  const cResult = questId(sourceQuestContent[20]).c(13);
  questId = questId.questId;
  ({ loading, disabled, onPress } = questId);
  ({ onPressDisabled, sourceQuestContent } = questId);
  let obj = questId(sourceQuestContent[20]);
  const trackQuestContentClickedWithImpression = questId(sourceQuestContent[32]).useTrackQuestContentClickedWithImpression();
  let obj2 = questId(sourceQuestContent[32]);
  const getQuestImpressionId = questId(sourceQuestContent[33]).useGetQuestImpressionId();
  if (cResult[0] === getQuestImpressionId) {
    if (cResult[1] === onPress) {
      if (cResult[2] === questId) {
        if (cResult[3] === sourceQuestContent) {
          if (cResult[4] === trackQuestContentClickedWithImpression) {
            let tmp6 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp10 = closure_10(tmp(sourceQuestContent[39]).RefreshIcon, {});
            cResult[6] = tmp10;
            let tmp8 = tmp10;
          } else {
            tmp8 = cResult[6];
          }
          const _Symbol2 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(sourceQuestContent[30]).intl;
            const stringResult = intl.string(tmp(sourceQuestContent[30]).t.nPThNb);
            cResult[7] = stringResult;
            let tmp11 = stringResult;
          } else {
            tmp11 = cResult[7];
          }
          if (cResult[8] === disabled) {
            if (cResult[9] === tmp6) {
              if (cResult[10] === loading) {
                if (cResult[11] === onPressDisabled) {
                  let tmp13 = cResult[12];
                }
                return tmp13;
              }
            }
          }
          const obj4 = { grow: true, size: "lg", variant: "secondary", loading, disabled, onPressDisabled, icon: tmp8, iconPosition: "end", onPress: tmp6, text: tmp11 };
          const tmp15 = closure_10(tmp(sourceQuestContent[23]).Button, obj4);
          cResult[8] = disabled;
          cResult[9] = tmp6;
          cResult[10] = loading;
          cResult[11] = onPressDisabled;
          cResult[12] = tmp15;
          tmp13 = tmp15;
        }
      }
    }
  }
  function handlePress(arg0) {
    if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_footer")) {
      const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId, questContentCTA: AnalyticsTypes.QuestContentCTA.DEFIBRILLATOR, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: getQuestImpressionId() };
      captureAdUserAction.captureAdUserAction(obj2);
      const tmpResult = captureAdUserAction;
    } else {
      const obj3 = { questId, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.DEFIBRILLATOR, sourceQuestContent };
      trackQuestContentClickedWithImpression(obj3);
    }
    if (onPress != null) {
      tmp11(arg0);
    }
    obj = AdAnalyticsInterfaceExperiment;
  }
  cResult[0] = getQuestImpressionId;
  cResult[1] = onPress;
  cResult[2] = questId;
  cResult[3] = sourceQuestContent;
  cResult[4] = trackQuestContentClickedWithImpression;
  cResult[5] = handlePress;
  tmp6 = handlePress;
  let obj3 = questId(sourceQuestContent[33]);
}) : (function DefibButton(arg0) {
  ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
  ({ loading, disabled, onPressDisabled } = arg0);
  closure_3 = AnalyticsHooks.useTrackQuestContentClickedWithImpression();
  closure_4 = ContentImpressionTrackerHooks.useGetQuestImpressionId();
  let obj3 = {
    grow: true,
    size: "lg",
    variant: "secondary",
    loading,
    disabled,
    onPressDisabled,
    icon: closure_10(RefreshIcon.RefreshIcon, {}),
    iconPosition: "end",
    onPress: function handlePress(arg0) {
      if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_footer")) {
        const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId, questContentCTA: AnalyticsTypes.QuestContentCTA.DEFIBRILLATOR, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: closure_4() };
        captureAdUserAction.captureAdUserAction(obj2);
        const tmpResult = captureAdUserAction;
      } else {
        const obj3 = { questId, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.DEFIBRILLATOR, sourceQuestContent };
        closure_3(obj3);
      }
      if (importDefault != null) {
        tmp11(arg0);
      }
      obj = AdAnalyticsInterfaceExperiment;
    },
    text: null
  };
  const intl = util.intl;
  obj3.text = intl.string(util.t.nPThNb);
  return closure_10(components_Button_Button.Button, obj3);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function ClaimButton(questId) {
  const cResult = questId(sourceQuestContent[20]).c(12);
  questId = questId.questId;
  ({ disabled, loading, onPress } = questId);
  ({ onPressDisabled, sourceQuestContent } = questId);
  let obj = questId(sourceQuestContent[20]);
  const trackQuestContentClickedWithImpression = questId(sourceQuestContent[32]).useTrackQuestContentClickedWithImpression();
  let obj2 = questId(sourceQuestContent[32]);
  const getQuestImpressionId = questId(sourceQuestContent[33]).useGetQuestImpressionId();
  if (cResult[0] === getQuestImpressionId) {
    if (cResult[1] === onPress) {
      if (cResult[2] === questId) {
        if (cResult[3] === sourceQuestContent) {
          if (cResult[4] === trackQuestContentClickedWithImpression) {
            let tmp6 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(sourceQuestContent[30]).intl;
            const stringResult = intl.string(tmp(sourceQuestContent[30]).t.cfY4PE);
            cResult[6] = stringResult;
            let tmp8 = stringResult;
          } else {
            tmp8 = cResult[6];
          }
          if (cResult[7] === disabled) {
            if (cResult[8] === tmp6) {
              if (cResult[9] === loading) {
                if (cResult[10] === onPressDisabled) {
                  let tmp10 = cResult[11];
                }
                return tmp10;
              }
            }
          }
          const obj4 = { grow: true, size: "lg", disabled, onPressDisabled, loading, onPress: tmp6, text: tmp8 };
          const tmp12 = closure_10(tmp(sourceQuestContent[23]).Button, obj4);
          cResult[7] = disabled;
          cResult[8] = tmp6;
          cResult[9] = loading;
          cResult[10] = onPressDisabled;
          cResult[11] = tmp12;
          tmp10 = tmp12;
        }
      }
    }
  }
  function handlePress() {
    if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_footer")) {
      const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId, questContentCTA: AnalyticsTypes.QuestContentCTA.CLAIM_REWARD, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: getQuestImpressionId() };
      captureAdUserAction.captureAdUserAction(obj2);
      const tmpResult = captureAdUserAction;
    } else {
      const obj3 = { questId, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.CLAIM_REWARD, sourceQuestContent };
      trackQuestContentClickedWithImpression(obj3);
    }
    onPress();
    obj = AdAnalyticsInterfaceExperiment;
  }
  cResult[0] = getQuestImpressionId;
  cResult[1] = onPress;
  cResult[2] = questId;
  cResult[3] = sourceQuestContent;
  cResult[4] = trackQuestContentClickedWithImpression;
  cResult[5] = handlePress;
  tmp6 = handlePress;
  let obj3 = questId(sourceQuestContent[33]);
}) : (function ClaimButton(arg0) {
  ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
  ({ disabled, loading, onPressDisabled } = arg0);
  closure_3 = AnalyticsHooks.useTrackQuestContentClickedWithImpression();
  closure_4 = ContentImpressionTrackerHooks.useGetQuestImpressionId();
  let obj3 = {
    grow: true,
    size: "lg",
    disabled,
    onPressDisabled,
    loading,
    onPress: function handlePress() {
      if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_footer")) {
        const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId, questContentCTA: AnalyticsTypes.QuestContentCTA.CLAIM_REWARD, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: closure_4() };
        captureAdUserAction.captureAdUserAction(obj2);
        const tmpResult = captureAdUserAction;
      } else {
        const obj3 = { questId, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.CLAIM_REWARD, sourceQuestContent };
        closure_3(obj3);
      }
      importDefault();
      obj = AdAnalyticsInterfaceExperiment;
    },
    text: null
  };
  const intl = util.intl;
  obj3.text = intl.string(util.t.cfY4PE);
  return closure_10(components_Button_Button.Button, obj3);
});
const __initData = { code: "function QuestBottomSheetFooterTsx1(){const{animation,H_PADDING_PX}=this.__closure;return{opacity:animation.get(),position:\"absolute\",top:0,left:0,transform:[{translateX:H_PADDING_PX}]};}" };
const __initData2 = { code: "function QuestBottomSheetFooterTsx2(){const{interpolate,animation,windowWidth,H_PADDING_PX,ICON_SIZE_PX}=this.__closure;return{width:interpolate(animation.get(),[0,1],[windowWidth-H_PADDING_PX*2,windowWidth-H_PADDING_PX*2.5-ICON_SIZE_PX]),alignSelf:\"flex-end\"};}" };
const __initData3 = { code: "function QuestBottomSheetFooterTsx3(){const{animation,H_PADDING_PX}=this.__closure;return{opacity:animation.get(),position:'absolute',top:0,left:0,transform:[{translateX:H_PADDING_PX}]};}" };
const __initData4 = { code: "function QuestBottomSheetFooterTsx4(){const{interpolate,animation,windowWidth,H_PADDING_PX,ICON_SIZE_PX}=this.__closure;return{width:interpolate(animation.get(),[0,1],[windowWidth-H_PADDING_PX*2,windowWidth-H_PADDING_PX*2.5-ICON_SIZE_PX]),alignSelf:'flex-end'};}" };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedFooter(arg0) {
  const cResult = require("c").c(23);
  ({ onLayout, ctaButton, backButton, style, withSafeArea } = arg0);
  let tmp5 = null != backButton;
  if (tmp5) {
    tmp5 = false !== backButton;
  }
  _require = tmp5;
  const tmp7 = closure_13();
  width = width(1496)().width;
  const tmp8 = closure_24();
  dependencyMap = tmp8;
  let obj = require("c");
  let num = 0;
  if (tmp5) {
    num = 1;
  }
  const sharedValue = require("ReanimatedRexport").useSharedValue(num);
  if (cResult[0] === sharedValue) {
    if (cResult[1] === tmp8) {
      if (cResult[2] === tmp5) {
        let tmp10 = cResult[3];
        let tmp11 = cResult[4];
      }
      const effect = noop.useEffect(tmp10, tmp11);
      const fn2 = function v() {
        const rect = { opacity: sharedValue.get(), position: "absolute", top: 0, left: 0, transform: null };
        const items = [{ translateX: PX_16 }];
        rect.transform = items;
        return rect;
      };
      const obj2 = { animation: sharedValue, H_PADDING_PX: PX_16 };
      fn2.__closure = obj2;
      fn2.__workletHash = 12824906142404;
      fn2.__initData = __initData;
      const animatedStyle = tmp(4810).useAnimatedStyle(fn2);
      const tmpResult3 = tmp(4810);
      class N {
        constructor() {
          obj = { width: null, alignSelf: "flex-end" };
          obj2 = closure_0(closure_2[42]);
          items = [, ];
          items[0] = width - 2 * PX_16;
          value = closure_3.get();
          diff = width - 2.5 * PX_16;
          items[1] = diff - closure_0(closure_2[44]).LARGE_BUTTON_HEIGHT;
          obj.width = obj2.interpolate(value, [0, 1], items);
          return obj;
        }
      }
      const obj3 = { interpolate: tmp(4810).interpolate, animation: sharedValue, windowWidth: width, H_PADDING_PX: PX_16, ICON_SIZE_PX: tmp(5380).LARGE_BUTTON_HEIGHT };
      N.__closure = obj3;
      N.__workletHash = 6037256479965;
      N.__initData = __initData2;
      const animatedStyle1 = tmp(4810).useAnimatedStyle(N);
      const _Math = Math;
      const bound = Math.max(width(1630)().bottom, closure_9);
      if (cResult[5] === bound) {
        if (cResult[6] === tmp4) {
          let tmp22 = cResult[7];
        }
        if (cResult[8] === style) {
          if (cResult[9] === tmp7.container) {
            if (cResult[10] === tmp22) {
              let tmp24 = cResult[11];
            }
            if (cResult[12] === animatedStyle) {
              if (cResult[13] === backButton) {
                let tmp25 = cResult[14];
              }
              if (cResult[15] === animatedStyle1) {
                if (cResult[16] === ctaButton) {
                  let tmp28 = cResult[17];
                }
                if (cResult[18] === onLayout) {
                  if (cResult[19] === tmp24) {
                    if (cResult[20] === tmp25) {
                      if (cResult[21] === tmp28) {
                        let tmp31 = cResult[22];
                      }
                      return tmp31;
                    }
                  }
                }
                const obj4 = { style: tmp24, onLayout, children: null };
                let items = [tmp25, tmp28];
                obj4.children = items;
                const tmp34 = closure_11(View, obj4);
                cResult[18] = onLayout;
                cResult[19] = tmp24;
                class N {
                  constructor() {
                    obj = { width: null, alignSelf: "flex-end" };
                    obj2 = closure_0(closure_2[42]);
                    items = [, ];
                    items[0] = width - 2 * PX_16;
                    value = closure_3.get();
                    diff = width - 2.5 * PX_16;
                    items[1] = diff - closure_0(closure_2[44]).LARGE_BUTTON_HEIGHT;
                    obj.width = obj2.interpolate(value, [0, 1], items);
                    return obj;
                  }
                }
                cResult[20] = tmp25;
                cResult[21] = tmp28;
                cResult[22] = tmp34;
                tmp31 = tmp34;
              }
              const obj5 = { style: animatedStyle1, children: ctaButton };
              const tmp30 = closure_10(tmp6(4810).View, obj5);
              cResult[15] = animatedStyle1;
              cResult[16] = ctaButton;
              cResult[17] = tmp30;
              tmp28 = tmp30;
            }
            const obj6 = { style: animatedStyle, children: backButton };
            const tmp27 = closure_10(tmp6(4810).View, obj6);
            cResult[12] = animatedStyle;
            cResult[13] = backButton;
            cResult[14] = tmp27;
            tmp25 = tmp27;
          }
        }
        const items1 = [tmp7.container, tmp22, style];
        cResult[8] = style;
        cResult[9] = tmp7.container;
        cResult[10] = tmp22;
        cResult[11] = items1;
        tmp24 = items1;
      }
      let tmp23 = tmp4;
      if (tmp4) {
        const obj7 = { paddingBottom: bound };
        tmp23 = obj7;
      }
      cResult[5] = bound;
      cResult[6] = tmp4;
      cResult[7] = tmp23;
      tmp22 = tmp23;
      const tmpResult4 = tmp(4810);
    }
  }
  const fn = function n() {
    let num = 0;
    if (closure_0) {
      num = 1;
    }
    let num2 = 200;
    if (closure_2) {
      num2 = 0;
    }
    const result = sharedValue.set(timing.withTiming(num, { duration: num2 }));
  };
  const items2 = [tmp5, tmp8, sharedValue];
  cResult[0] = sharedValue;
  cResult[1] = tmp8;
  cResult[2] = tmp5;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp11 = items2;
  tmp10 = fn;
  const tmpResult = require("ReanimatedRexport");
}) : (function AnimatedFooter(arg0) {
  ({ backButton, withSafeArea } = arg0);
  ({ onLayout, ctaButton, style } = arg0);
  if (withSafeArea === undefined) {
    withSafeArea = true;
  }
  _require = undefined;
  let width;
  dependencyMap = undefined;
  let sharedValue;
  let tmp = null != backButton;
  if (tmp) {
    tmp = false !== backButton;
  }
  _require = tmp;
  const bottom = width(1630)().bottom;
  width = width(1496)().width;
  const tmp5 = closure_24();
  dependencyMap = tmp5;
  const tmp4 = closure_13();
  let num = 0;
  if (tmp) {
    num = 1;
  }
  sharedValue = require("ReanimatedRexport").useSharedValue(num);
  let items = [tmp, tmp5, sharedValue];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (closure_0) {
      num = 1;
    }
    let num2 = 200;
    if (closure_2) {
      num2 = 0;
    }
    const result = sharedValue.set(timing.withTiming(num, { duration: num2 }));
  }, items);
  let obj = require("ReanimatedRexport");
  const fn = function b() {
    const rect = { opacity: sharedValue.get(), position: "absolute", top: 0, left: 0, transform: null };
    const items = [{ translateX: PX_16 }];
    rect.transform = items;
    return rect;
  };
  fn.__closure = { animation: sharedValue, H_PADDING_PX: PX_16 };
  fn.__workletHash = 7526979046886;
  fn.__initData = __initData3;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  const obj2 = { animation: sharedValue, H_PADDING_PX: PX_16 };
  const tmp6Result = require("ReanimatedRexport");
  class Q {
    constructor() {
      obj = { width: null, alignSelf: "flex-end" };
      obj2 = closure_0(closure_2[42]);
      items = [, ];
      items[0] = width - 2 * PX_16;
      value = closure_3.get();
      diff = width - 2.5 * PX_16;
      items[1] = diff - closure_0(closure_2[44]).LARGE_BUTTON_HEIGHT;
      obj.width = obj2.interpolate(value, [0, 1], items);
      return obj;
    }
  }
  const tmp6Result2 = require("ReanimatedRexport");
  Q.__closure = { interpolate: require("ReanimatedRexport").interpolate, animation: sharedValue, windowWidth: width, H_PADDING_PX: PX_16, ICON_SIZE_PX: require("ButtonConstants").LARGE_BUTTON_HEIGHT };
  Q.__workletHash = 11275370871227;
  Q.__initData = __initData4;
  const animatedStyle1 = tmp6Result2.useAnimatedStyle(Q);
  const items1 = [tmp4.container, , ];
  if (withSafeArea) {
    const obj4 = { paddingBottom: tmp11 };
    withSafeArea = obj4;
  }
  const obj5 = { style: items1, onLayout, children: null };
  items1[1] = withSafeArea;
  items1[2] = style;
  const items2 = [closure_10(width(4810).View, { style: animatedStyle, children: backButton }), closure_10(width(4810).View, { style: animatedStyle1, children: ctaButton })];
  obj5.children = items2;
  return closure_11(View, obj5);
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function useReducedMotion() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function t() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useReducedMotion() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function QuestBottomSheetFooter(arg0) {
  const cResult = c.c(56);
  ({ quest, onLayout, step, isDefibrilating, onConnectConsoleNext, onBack, onDefib, style, withSafeArea, sourceQuestContent } = arg0);
  if (cResult[0] === quest) {
    if (cResult[1] === sourceQuestContent) {
      let tmp5 = cResult[2];
    }
    const tmp7 = useQuestRewardClaimHandler(tmp5);
    const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(quest);
    const tmpResult = hooks_QuestHooks;
    const isQuestProgressing = hooks_QuestHooks.useIsQuestProgressing(quest);
    const tmpResult11 = hooks_QuestHooks;
    const tmpResult12 = hooks_QuestHooks;
    const xboxAndPlaystationAccounts = hooks_QuestHooks.useConnectedAccounts().xboxAndPlaystationAccounts;
    if (cResult[3] === quest) {
      if (cResult[4] === xboxAndPlaystationAccounts) {
        const hasWatchVideoOnMobileTasks = QuestHooks.useHasWatchVideoOnMobileTasks(quest.config);
        const tmpResult14 = QuestHooks;
        const mobileActivityQuest = QuestHooks.useMobileActivityQuest(quest);
        ({ launchMobileActivity, questApplication } = mobileActivityQuest);
        if (cResult[8] === quest) {
          if (cResult[9] === questApplication) {
            let tmp17 = cResult[10];
          }
          const primaryCtaCopy = QuestCopyHooks.usePrimaryCtaCopy(tmp17);
          if (cResult[11] === launchMobileActivity) {
            if (cResult[12] === quest.id) {
              if (cResult[13] === sourceQuestContent) {
                let tmp19 = cResult[14];
              }
              const mobileActivityPressHandler = QuestBottomSheetHooks.useMobileActivityPressHandler(tmp19);
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
              const tmp23 = null != completedAt;
              const tmpResult17 = QuestBottomSheetHooks;
              const isQuestAccessSuspended = hooks_QuestHooks.useIsQuestAccessSuspended();
              const _Symbol = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const obj2 = { disabled: true, onPressDisabled: openQuestAccessSuspendedBottomSheetDefault };
                cResult[15] = obj2;
                let tmp28 = obj2;
              } else {
                tmp28 = cResult[15];
              }
              if (step === QuestBottomSheet.QuestBottomSheetStep.TASK_SELECT) {
                return null;
              } else if (QuestBottomSheet.QuestBottomSheetStep.CONSOLE_CONNECT === step) {
                if (cResult[16] === onConnectConsoleNext) {
                }
                const obj3 = { onPress: onConnectConsoleNext, disabled: 0 === cResult[5].length };
                const tmp73 = collapsed(closure_16, obj3);
                cResult[16] = onConnectConsoleNext;
                cResult[17] = 0 === cResult[5].length;
                cResult[18] = tmp73;
              } else {
                let tmp38 = null;
                if (QuestBottomSheet.QuestBottomSheetStep.TASK_STATUS === step) {
                  if (tmp23) {
                    let tmp61 = null;
                    if (isQuestAccessSuspended) {
                      tmp61 = null;
                      if (!tmp25) {
                        tmp61 = tmp28;
                      }
                    }
                    if (cResult[19] === tmp25) {
                      if (cResult[20] === quest.id) {
                        if (cResult[21] === tmp7.claim) {
                          if (cResult[22] === sourceQuestContent) {
                            if (cResult[23] === tmp60) {
                              if (cResult[24] === tmp61) {
                                let tmp62 = cResult[25];
                              }
                              tmp38 = tmp62;
                            }
                          }
                        }
                      }
                    }
                    const obj4 = { questId: quest.id, onPress: tmp7.claim, disabled: tmp25, loading: tmp7.isLoading || tmp7.isClaiming, sourceQuestContent };
                    const merged = Object.assign(tmp61);
                    const tmp68 = collapsed(closure_18, obj4);
                    cResult[19] = tmp25;
                    cResult[20] = quest.id;
                    cResult[21] = tmp7.claim;
                    cResult[22] = sourceQuestContent;
                    cResult[23] = tmp7.isLoading || tmp7.isClaiming;
                    cResult[24] = tmp61;
                    cResult[25] = tmp68;
                    tmp62 = tmp68;
                  } else if (hasWatchVideoOnMobileTasks) {
                    let tmp52 = null;
                    if (isQuestAccessSuspended) {
                      tmp52 = tmp28;
                    }
                    if (cResult[26] === quest.id) {
                      if (cResult[27] === sourceQuestContent) {
                        if (cResult[28] === tmp52) {
                          if (cResult[29] === questTaskDetails) {
                            let tmp53 = cResult[30];
                          }
                          tmp38 = tmp53;
                        }
                      }
                    }
                    const obj5 = { questId: quest.id, taskDetails: questTaskDetails, sourceQuestContent };
                    const merged1 = Object.assign(tmp52);
                    const tmp59 = collapsed(closure_15, obj5);
                    cResult[26] = quest.id;
                    cResult[27] = sourceQuestContent;
                    cResult[28] = tmp52;
                    cResult[29] = questTaskDetails;
                    cResult[30] = tmp59;
                    tmp53 = tmp59;
                  } else if (tmp16) {
                    if (cResult[31] !== quest) {
                      const primaryCtaIcon = QuestUtils.getPrimaryCtaIcon(quest);
                      cResult[31] = quest;
                      cResult[32] = primaryCtaIcon;
                      let tmp43 = primaryCtaIcon;
                      const tmpResult19 = QuestUtils;
                    } else {
                      tmp43 = cResult[32];
                    }
                    let tmp45 = null;
                    if (isQuestAccessSuspended) {
                      tmp45 = tmp28;
                    }
                    if (cResult[33] === mobileActivityPressHandler) {
                      if (cResult[34] === primaryCtaCopy) {
                        if (cResult[35] === tmp43) {
                          if (cResult[36] === tmp45) {
                            let tmp46 = cResult[37];
                          }
                          tmp38 = tmp46;
                        }
                      }
                    }
                    const obj6 = { grow: true, size: "lg", onPress: mobileActivityPressHandler, text: primaryCtaCopy, icon: tmp43 };
                    const merged2 = Object.assign(tmp45);
                    const tmp51 = collapsed(components_Button_Button.Button, obj6);
                    cResult[33] = mobileActivityPressHandler;
                    cResult[34] = primaryCtaCopy;
                    cResult[35] = tmp43;
                    cResult[36] = tmp45;
                    cResult[37] = tmp51;
                    tmp46 = tmp51;
                  } else {
                    if (_slicedToArray(tmpResult12.useTaskPlatformScreen(quest, questTaskDetails), 1)[0] === QuestTypes.TaskPlatformScreen.CONSOLE) {
                      if (!isQuestProgressing) {
                        let tmp30 = null;
                        if (isQuestAccessSuspended) {
                          tmp30 = tmp28;
                        }
                        if (cResult[38] === tmp4) {
                          if (cResult[39] === onDefib) {
                            if (cResult[40] === quest.id) {
                              if (cResult[41] === sourceQuestContent) {
                                if (cResult[42] === tmp30) {
                                  let tmp31 = cResult[43];
                                }
                                tmp38 = tmp31;
                              }
                            }
                          }
                        }
                        const obj7 = { questId: quest.id, loading: tmp4, disabled: tmp4, onPress: onDefib, sourceQuestContent };
                        const merged3 = Object.assign(tmp30);
                        const tmp37 = collapsed(closure_17, obj7);
                        cResult[38] = tmp4;
                        cResult[39] = onDefib;
                        cResult[40] = quest.id;
                        cResult[41] = sourceQuestContent;
                        cResult[42] = tmp30;
                        cResult[43] = tmp37;
                        tmp31 = tmp37;
                      }
                    }
                    if (cResult[44] === quest.id) {
                      if (cResult[45] === tmp7.claim) {
                        if (cResult[46] === sourceQuestContent) {
                          let tmp39 = cResult[47];
                        }
                        tmp38 = tmp39;
                      }
                    }
                    const obj8 = { questId: quest.id, onPress: tmp7.claim, disabled: true, sourceQuestContent };
                    const tmp42 = collapsed(closure_18, obj8);
                    cResult[44] = quest.id;
                    cResult[45] = tmp7.claim;
                    cResult[46] = sourceQuestContent;
                    cResult[47] = tmp42;
                    tmp39 = tmp42;
                  }
                }
                if (cResult[48] !== onBack) {
                  let tmp76 = null != onBack;
                  if (tmp76) {
                    const obj9 = { accessibilityLabel: null, variant: "secondary", icon: null, onPress: null, size: "lg" };
                    const intl = util.intl;
                    obj9.accessibilityLabel = intl.string(util.t["13/7kX"]);
                    obj9.icon = collapsed(ArrowLargeLeftIcon.ArrowLargeLeftIcon, {});
                    obj9.onPress = onBack;
                    tmp76 = collapsed(IconButton.IconButton, obj9);
                  }
                  cResult[48] = onBack;
                  cResult[49] = tmp76;
                  let tmp75 = tmp76;
                } else {
                  tmp75 = cResult[49];
                }
                if (cResult[50] === onLayout) {
                  if (cResult[51] === style) {
                    if (cResult[52] === tmp38) {
                      if (cResult[53] === tmp75) {
                        if (cResult[54] === withSafeArea) {
                          let tmp78 = cResult[55];
                        }
                        return tmp78;
                      }
                    }
                  }
                }
                const obj10 = { onLayout, ctaButton: tmp38, backButton: tmp75, style, withSafeArea };
                const tmp81 = collapsed(closure_23, obj10);
                cResult[50] = onLayout;
                cResult[51] = style;
                cResult[52] = tmp38;
                cResult[53] = tmp75;
                cResult[54] = withSafeArea;
                cResult[55] = tmp81;
                tmp78 = tmp81;
              }
              const tmpResult18 = hooks_QuestHooks;
            }
          }
          const obj11 = { questId: quest.id, sourceQuestContent, launchMobileActivity };
          cResult[11] = launchMobileActivity;
          cResult[12] = quest.id;
          cResult[13] = sourceQuestContent;
          cResult[14] = obj11;
          tmp19 = obj11;
          const tmpResult16 = QuestCopyHooks;
        }
        const obj12 = { quest, application: questApplication };
        cResult[8] = quest;
        cResult[9] = questApplication;
        cResult[10] = obj12;
        tmp17 = obj12;
        const tmpResult15 = QuestHooks;
      }
    }
    if (cResult[6] !== xboxAndPlaystationAccounts) {
      const fn = function y(arg0) {
        closure_0 = arg0;
        return null != xboxAndPlaystationAccounts.find((type) => type.type === closure_0);
      };
      cResult[6] = xboxAndPlaystationAccounts;
      cResult[7] = fn;
      let tmp11 = fn;
    } else {
      tmp11 = cResult[7];
    }
    const tmpResult13 = hooks_QuestHooks;
    const tmpResult20 = QuestPlatformUtils;
    const found = QuestPlatformUtils.supportedConsoles(quest).filter(tmp11);
    cResult[3] = quest;
    cResult[4] = xboxAndPlaystationAccounts;
    cResult[5] = found;
    const supportedConsolesResult = QuestPlatformUtils.supportedConsoles(quest);
  }
  const obj13 = { quest, sourceQuestContent };
  cResult[0] = quest;
  cResult[1] = sourceQuestContent;
  cResult[2] = obj13;
  tmp5 = obj13;
}) : (function QuestBottomSheetFooter(quest) {
  quest = quest.quest;
  ({ step, isDefibrilating } = quest);
  if (isDefibrilating === undefined) {
    isDefibrilating = false;
  }
  ({ onBack, sourceQuestContent } = quest);
  ({ onConnectConsoleNext, onDefib, style, withSafeArea } = quest);
  const tmp = useQuestRewardClaimHandler({ quest, sourceQuestContent });
  const questTaskDetails = quest(10575).useQuestTaskDetails(quest);
  let obj = quest(10575);
  const isQuestProgressing = quest(10575).useIsQuestProgressing(quest);
  const obj2 = quest(10575);
  const obj3 = quest(10575);
  const xboxAndPlaystationAccounts = quest(10575).useConnectedAccounts().xboxAndPlaystationAccounts;
  const items = [quest, xboxAndPlaystationAccounts];
  const memo = noop.useMemo(() => QuestPlatformUtils.supportedConsoles(quest).filter((item) => {
    closure_0 = item;
    return null != xboxAndPlaystationAccounts.find((type) => type.type === closure_0);
  }), items);
  const obj4 = quest(10575);
  const hasWatchVideoOnMobileTasks = quest(15170).useHasWatchVideoOnMobileTasks(quest.config);
  const obj5 = quest(15170);
  const mobileActivityQuest = quest(15170).useMobileActivityQuest(quest);
  ({ isMobileActivityQuest, launchMobileActivity, questApplication } = mobileActivityQuest);
  const obj6 = quest(15170);
  const primaryCtaCopy = quest(11161).usePrimaryCtaCopy({ quest, application: questApplication });
  const obj7 = quest(11161);
  const userStatus = quest.userStatus;
  let completedAt;
  const obj8 = quest(15204);
  const obj9 = { questId: quest.id, sourceQuestContent, launchMobileActivity };
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const userStatus2 = quest.userStatus;
  let claimedAt;
  if (userStatus2 != null) {
    claimedAt = userStatus2.claimedAt;
  }
  const mobileActivityPressHandler = quest(15204).useMobileActivityPressHandler({ questId: quest.id, sourceQuestContent, launchMobileActivity });
  const tmp11 = null != completedAt;
  const isQuestAccessSuspended = quest(10575).useIsQuestAccessSuspended();
  const obj10 = { disabled: true, onPressDisabled: xboxAndPlaystationAccounts(15198) };
  let tmp40Result6 = null;
  if (step !== quest(15200).QuestBottomSheetStep.TASK_SELECT) {
    const obj11 = { onLayout: quest.onLayout, ctaButton: null, backButton: null, style: null, withSafeArea: null };
    if (tmp2(15200).QuestBottomSheetStep.CONSOLE_CONNECT === step) {
      const obj12 = { onPress: onConnectConsoleNext, disabled: 0 === memo.length };
      let tmp40Result = closure_10(closure_16, obj12);
    } else {
      tmp40Result = null;
      if (tmp2(15200).QuestBottomSheetStep.TASK_STATUS === step) {
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
          let tmp40Result4 = closure_10(closure_18, obj13);
        } else if (hasWatchVideoOnMobileTasks) {
          const obj14 = { questId: quest.id, taskDetails: questTaskDetails, sourceQuestContent };
          let tmp28 = null;
          if (isQuestAccessSuspended) {
            tmp28 = obj10;
          }
          const merged1 = Object.assign(tmp28);
          tmp40Result4 = closure_10(closure_15, obj14);
        } else if (isMobileActivityQuest) {
          const obj15 = { grow: true, size: "lg", onPress: mobileActivityPressHandler, text: primaryCtaCopy, icon: tmp2(10572).getPrimaryCtaIcon(quest) };
          let tmp23 = null;
          if (isQuestAccessSuspended) {
            tmp23 = obj10;
          }
          const merged2 = Object.assign(tmp23);
          tmp40Result4 = closure_10(tmp2(5375).Button, obj15);
          const tmp2Result2 = tmp2(10572);
        } else {
          if (_slicedToArray(obj3.useTaskPlatformScreen(quest, questTaskDetails), 1)[0] === tmp2(5980).TaskPlatformScreen.CONSOLE) {
            if (!isQuestProgressing) {
              const obj16 = { questId: quest.id, loading: isDefibrilating, disabled: isDefibrilating, onPress: onDefib, sourceQuestContent };
              let tmp17 = null;
              if (isQuestAccessSuspended) {
                tmp17 = obj10;
              }
              const merged3 = Object.assign(tmp17);
              tmp40Result4 = closure_10(closure_17, obj16);
            }
          }
          const obj17 = { questId: quest.id, onPress: tmp.claim, disabled: true, sourceQuestContent };
          tmp40Result4 = closure_10(closure_18, obj17);
        }
        tmp40Result = tmp40Result4;
      }
    }
    obj11.ctaButton = tmp40Result;
    let tmp40Result5 = null != onBack;
    if (tmp40Result5) {
      const obj18 = { accessibilityLabel: null, variant: "secondary", icon: null, onPress: null, size: "lg" };
      const intl = tmp2(1126).intl;
      obj18.accessibilityLabel = intl.string(tmp2(1126).t["13/7kX"]);
      obj18.icon = closure_10(tmp2(6207).ArrowLargeLeftIcon, {});
      obj18.onPress = onBack;
      tmp40Result5 = closure_10(tmp2(8106).IconButton, obj18);
    }
    obj11.backButton = tmp40Result5;
    obj11.style = style;
    obj11.withSafeArea = withSafeArea;
    tmp40Result6 = closure_10(closure_23, obj11);
  }
  return tmp40Result6;
});
export { useQuestRewardClaimHandler };