// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ButtonConstants from "../../../../design/components/Button/native/ButtonConstants.native.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import ArrowLargeLeftIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import ActionSheetConstants from "../../../action_sheet/native/ActionSheetConstants.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import captureAdUserAction2 from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../../experiments/AdAnalyticsInterfaceExperiment.tsx";
import IconButton2 from "../../../../design/components/Button/native/IconButton.native.tsx";
import QuestCopyUtils from "../../utils/QuestCopyUtils.tsx";
import QuestUtils from "../QuestUtils.native.tsx";
import hooks_QuestHooks from "../../hooks/QuestHooks.tsx";
import ContentImpressionTrackerHooks from "../../lib/analytics/ContentImpressionTrackerHooks.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import MobileQuestVideoWatchCtaCopy from "../../utils/MobileQuestVideoWatchCtaCopy.tsx";
import AnalyticsHooks from "../../lib/analytics/AnalyticsHooks.tsx";
import QuestCopyHooks from "../../hooks/QuestCopyHooks.tsx";
import RefreshIcon from "../../../../design/components/Icon/native/redesign/generated/RefreshIcon.tsx";
import QuestHooks from "../QuestHooks.native.tsx";
import openQuestAccessSuspendedBottomSheetDefault from "../openQuestAccessSuspendedBottomSheet.tsx";
import QuestBottomSheet from "QuestBottomSheet.tsx";
import QuestBottomSheetHooks from "QuestBottomSheetHooks.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import QuestStore from "../../QuestStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, set;

let c10;
let obj2;
let unpackModuleId;
function useQuestRewardClaimHandler(cResult) {
  let confettiColors;
  let items5;
  let items6;
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
  let c5;
  let isFetching;
  let isFetchingRewardCode;
  let stateFromStores;
  let stateFromStores1;
  let obj = quest(QUEST_BOTTOM_SHEET[11]);
  const progressState = obj.useProgressState(quest);
  let obj2 = quest(QUEST_BOTTOM_SHEET[12]);
  const items = [quest.config];
  let result = obj2.hasCollectiblesQuestReward(quest.config);
  const memo = sourceQuestContent.useMemo(() => {
    const obj = QuestCopyUtils;
    return obj.getDefaultReward(quest.config).skuId;
  }, items);
  const useFetchCollectiblesProduct = quest(QUEST_BOTTOM_SHEET[14]).useFetchCollectiblesProduct;
  let tmp9 = null;
  quest(QUEST_BOTTOM_SHEET[14]);
  if (progressState === quest(QUEST_BOTTOM_SHEET[11]).QuestProgressState.COMPLETED) {
    tmp9 = null;
    if (result) {
      tmp9 = memo;
    }
  }
  const fetchCollectiblesProduct = useFetchCollectiblesProduct(tmp9);
  const product = fetchCollectiblesProduct.product;
  c5 = product;
  isFetching = fetchCollectiblesProduct.isFetching;
  const items1 = [stateFromStores];
  const tmp3Result = quest(QUEST_BOTTOM_SHEET[15]);
  const stateFromStoresObject = tmp3Result.useStateFromStoresObject(items1, () => {
    const obj = {
      isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id),
      isClaimingReward: QuestStore.isClaimingReward(quest.id),
    };
    return obj;
  });
  isFetchingRewardCode = stateFromStoresObject.isFetchingRewardCode;
  const isClaimingReward = stateFromStoresObject.isClaimingReward;
  const items2 = [isFetchingRewardCode];
  const tmp3Result6 = quest(QUEST_BOTTOM_SHEET[15]);
  stateFromStores = tmp3Result6.useStateFromStores(items2, () => {
    const currentUser = isFetchingRewardCode.getCurrentUser();
    let result;
    if (currentUser != null) {
      result = currentUser.hasVerifiedEmailOrPhone();
    }
    return result;
  });
  const items3 = [isFetchingRewardCode];
  const tmp3Result7 = quest(QUEST_BOTTOM_SHEET[15]);
  stateFromStores1 = tmp3Result7.useStateFromStores(items3, () => {
    const currentUser = isFetchingRewardCode.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    return verified;
  });
  const items4 = [isFetching, isFetchingRewardCode];
  const memo1 = obj3.useMemo(() => isFetching || isFetchingRewardCode, items4);
  const tmp3Result8 = quest(QUEST_BOTTOM_SHEET[16]);
  const token = tmp3Result8.useToken(flag(tmp4[8]).colors.BACKGROUND_BASE_LOWER);
  const tmp3Result9 = quest(QUEST_BOTTOM_SHEET[16]);
  const token1 = tmp3Result9.useToken(flag(tmp4[8]).colors.BACKGROUND_BASE_LOW);
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
    const styles = product.styles;
    const obj4 = { buttonColors, confettiColors, backgroundColors: items5 };
    confettiColors = undefined;
    if (styles != null) {
      confettiColors = styles.confettiColors;
    }
    if (confettiColors == null) {
      confettiColors = [];
    }
    items5 = [
      flag(QUEST_BOTTOM_SHEET[17])(token1),
      flag(QUEST_BOTTOM_SHEET[17])(token),
      flag(QUEST_BOTTOM_SHEET[17])(tmp19),
    ];
    product.styles = obj4;
  }
  const obj5 = {
    isLoading: memo1,
    isClaiming: isClaimingReward,
    claim: sourceQuestContent.useCallback(() => {
      const obj = QuestUtils;
      const obj2 = {
        quest,
        product,
        hideActionSheet: flag,
        questContent: QUEST_BOTTOM_SHEET,
        currentUserHasVerifiedEmailOrPhone: stateFromStores,
        currentUserHasVerifiedEmail: stateFromStores1,
        onSuccess,
        sourceQuestContent,
      };
      return obj.handleRewardClaimThenView(obj2);
    }, items6),
  };
  items6 = [quest, product, stateFromStores, stateFromStores1, flag, QUEST_BOTTOM_SHEET, onSuccess, sourceQuestContent];
  return obj5;
}
const View = react_native.View;
let closure_9 = ActionSheetConstants.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let obj = { container: obj2 };
obj2 = { display: "flex", flexGrow: 1, flexShrink: 1, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let disabled;
      let onPressDisabled;
      let questId;
      let sourceQuestContent;
      let taskDetails;
      const obj = react2;
      const cResult = obj.c(10);
      ({ questId, sourceQuestContent, taskDetails, disabled, onPressDisabled } = arg0);
      if (cResult[0] === questId) {
        let tmp4;
        let tmp6;
        if (cResult[1] === sourceQuestContent) {
          tmp4 = cResult[2];
        }
        const tmpResult = QuestBottomSheetHooks;
        const watchTaskPressHandler = tmpResult.useWatchTaskPressHandler(tmp4);
        if (cResult[3] !== taskDetails) {
          const tmpResult2 = MobileQuestVideoWatchCtaCopy;
          const videoQuestWatchCtaText = tmpResult2.getVideoQuestWatchCtaText(taskDetails);
          cResult[3] = taskDetails;
          cResult[4] = videoQuestWatchCtaText;
          tmp6 = videoQuestWatchCtaText;
        } else {
          tmp6 = cResult[4];
        }
        if (cResult[5] === disabled) {
          if (cResult[6] === watchTaskPressHandler) {
            if (cResult[7] === onPressDisabled) {
              let tmp8;
              if (cResult[8] === tmp6) {
                tmp8 = cResult[9];
              }
              return tmp8;
            }
          }
        }
        const obj2 = { grow: true, size: "lg", onPress: watchTaskPressHandler, disabled, onPressDisabled, text: tmp6 };
        const tmp10 = authStore(components_Button_Button.Button, obj2);
        cResult[5] = disabled;
        cResult[6] = watchTaskPressHandler;
        cResult[7] = onPressDisabled;
        cResult[8] = tmp6;
        cResult[9] = tmp10;
        tmp8 = tmp10;
      }
      const obj3 = { questId, sourceQuestContent };
      cResult[0] = questId;
      cResult[1] = sourceQuestContent;
      cResult[2] = obj3;
      tmp4 = obj3;
    }
  : (arg0) => {
      let disabled;
      let obj3;
      let onPressDisabled;
      let questId;
      let sourceQuestContent;
      let taskDetails;
      ({ questId, sourceQuestContent, taskDetails, disabled, onPressDisabled } = arg0);
      const obj = QuestBottomSheetHooks;
      const obj2 = {
        grow: true,
        size: "lg",
        onPress: obj.useWatchTaskPressHandler({ questId, sourceQuestContent }),
        disabled,
        onPressDisabled,
        text: obj3.getVideoQuestWatchCtaText(taskDetails),
      };
      const Button = components_Button_Button.Button;
      obj3 = MobileQuestVideoWatchCtaCopy;
      return authStore(Button, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let intl;
      let isDefibrilating;
      let launchMobileActivity;
      let onBack;
      let onConnectConsoleNext;
      let onDefib;
      let onLayout;
      let quest;
      let questApplication;
      let sourceQuestContent;
      let step;
      let style;
      let withSafeArea;
      const obj = react2;
      const cResult = obj.c(56);
      ({
        quest,
        onLayout,
        step,
        isDefibrilating,
        onConnectConsoleNext,
        onBack,
        onDefib,
        style,
        withSafeArea,
        sourceQuestContent,
      } = arg0);
      if (cResult[0] === quest) {
        let tmp5;
        let tmp12;
        if (cResult[1] === sourceQuestContent) {
          tmp5 = cResult[2];
        }
        const tmp7 = useQuestRewardClaimHandler(tmp5);
        const tmpResult = hooks_QuestHooks;
        const questTaskDetails = tmpResult.useQuestTaskDetails(quest);
        const tmpResult11 = hooks_QuestHooks;
        const isQuestProgressing = tmpResult11.useIsQuestProgressing(quest);
        const tmpResult12 = hooks_QuestHooks;
        const first = _slicedToArray(tmpResult12.useTaskPlatformScreen(quest, questTaskDetails), 1)[0];
        const tmpResult13 = hooks_QuestHooks;
        const xboxAndPlaystationAccounts = tmpResult13.useConnectedAccounts().xboxAndPlaystationAccounts;
        if (cResult[3] === quest) {
          let arr;
          if (cResult[4] === xboxAndPlaystationAccounts) {
            arr = cResult[5];
          }
          const tmpResult14 = QuestHooks;
          const hasWatchVideoOnMobileTasks = tmpResult14.useHasWatchVideoOnMobileTasks(quest.config);
          const tmpResult15 = QuestHooks;
          const mobileActivityQuest = tmpResult15.useMobileActivityQuest(quest);
          ({ launchMobileActivity, questApplication } = mobileActivityQuest);
          if (cResult[8] === quest) {
            let tmp17;
            if (cResult[9] === questApplication) {
              tmp17 = cResult[10];
            }
            const tmpResult16 = QuestCopyHooks;
            const primaryCtaCopy = tmpResult16.usePrimaryCtaCopy(tmp17);
            if (cResult[11] === launchMobileActivity) {
              if (cResult[12] === quest.id) {
                let tmp19;
                let tmp28;
                if (cResult[13] === sourceQuestContent) {
                  tmp19 = cResult[14];
                }
                const tmpResult17 = QuestBottomSheetHooks;
                const mobileActivityPressHandler = tmpResult17.useMobileActivityPressHandler(tmp19);
                const userStatus = quest.userStatus;
                let completedAt;
                if (userStatus != null) {
                  completedAt = userStatus.completedAt;
                }
                const userStatus2 = quest.userStatus;
                let claimedAt;
                const tmp23 = null != completedAt;
                if (userStatus2 != null) {
                  claimedAt = userStatus2.claimedAt;
                }
                const tmpResult18 = hooks_QuestHooks;
                const isQuestAccessSuspended = tmpResult18.useIsQuestAccessSuspended();
                const _Symbol = Symbol;
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj2 = { disabled: true, onPressDisabled: openQuestAccessSuspendedBottomSheetDefault };
                  cResult[15] = obj2;
                  tmp28 = obj2;
                } else {
                  tmp28 = cResult[15];
                }
                if (step === QuestBottomSheet.QuestBottomSheetStep.TASK_SELECT) {
                  return null;
                } else {
                  let tmp38;
                  let tmp74;
                  if (QuestBottomSheet.QuestBottomSheetStep.CONSOLE_CONNECT === step) {
                    if (cResult[16] === onConnectConsoleNext) {
                      let tmp70;
                      if ((cResult[17] === 0) === arr.length) {
                        tmp70 = cResult[18];
                      }
                      tmp38 = tmp70;
                    }
                    const obj3 = { onPress: onConnectConsoleNext, disabled: 0 === arr.length };
                    const tmp73 = authStore(closure_16, obj3);
                    cResult[16] = onConnectConsoleNext;
                    cResult[17] = 0 === arr.length;
                    cResult[18] = tmp73;
                    tmp70 = tmp73;
                  } else {
                    tmp38 = null;
                    if (QuestBottomSheet.QuestBottomSheetStep.TASK_STATUS === step) {
                      if (tmp23) {
                        let tmp61 = null;
                        if (isQuestAccessSuspended) {
                          tmp61 = null;
                          if (null == claimedAt) {
                            tmp61 = tmp28;
                          }
                        }
                        if ((cResult[19] === null) != claimedAt) {
                          if (cResult[20] === quest.id) {
                            if (cResult[21] === tmp7.claim) {
                              if (cResult[22] === sourceQuestContent) {
                                if (cResult[23] === (tmp7.isLoading || tmp7.isClaiming)) {
                                  let tmp62;
                                  if (cResult[24] === tmp61) {
                                    tmp62 = cResult[25];
                                  }
                                  tmp38 = tmp62;
                                }
                              }
                            }
                          }
                        }
                        const obj4 = {
                          questId: quest.id,
                          onPress: tmp7.claim,
                          disabled: null != claimedAt,
                          loading: tmp7.isLoading || tmp7.isClaiming,
                          sourceQuestContent,
                        };
                        const merged = Object.assign(tmp61);
                        const tmp68 = authStore(closure_18, obj4);
                        cResult[19] = null != claimedAt;
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
                              let tmp53;
                              if (cResult[29] === questTaskDetails) {
                                tmp53 = cResult[30];
                              }
                              tmp38 = tmp53;
                            }
                          }
                        }
                        const obj5 = { questId: quest.id, taskDetails: questTaskDetails, sourceQuestContent };
                        const merged1 = Object.assign(tmp52);
                        const tmp59 = authStore(closure_15, obj5);
                        cResult[26] = quest.id;
                        cResult[27] = sourceQuestContent;
                        cResult[28] = tmp52;
                        cResult[29] = questTaskDetails;
                        cResult[30] = tmp59;
                        tmp53 = tmp59;
                      } else if (tmp16) {
                        let tmp43;
                        if (cResult[31] !== quest) {
                          const tmpResult19 = QuestUtils;
                          const primaryCtaIcon = tmpResult19.getPrimaryCtaIcon(quest);
                          cResult[31] = quest;
                          cResult[32] = primaryCtaIcon;
                          tmp43 = primaryCtaIcon;
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
                              let tmp46;
                              if (cResult[36] === tmp45) {
                                tmp46 = cResult[37];
                              }
                              tmp38 = tmp46;
                            }
                          }
                        }
                        const obj6 = {
                          grow: true,
                          size: "lg",
                          onPress: mobileActivityPressHandler,
                          text: primaryCtaCopy,
                          icon: tmp43,
                        };
                        const Button = components_Button_Button.Button;
                        const merged2 = Object.assign(tmp45);
                        const tmp51 = authStore(Button, obj6);
                        cResult[33] = mobileActivityPressHandler;
                        cResult[34] = primaryCtaCopy;
                        cResult[35] = tmp43;
                        cResult[36] = tmp45;
                        cResult[37] = tmp51;
                        tmp46 = tmp51;
                      } else {
                        if (first === QuestTypes.TaskPlatformScreen.CONSOLE) {
                          if (!isQuestProgressing) {
                            let tmp30 = null;
                            if (isQuestAccessSuspended) {
                              tmp30 = tmp28;
                            }
                            if (cResult[38] === (undefined !== isDefibrilating && isDefibrilating)) {
                              if (cResult[39] === onDefib) {
                                if (cResult[40] === quest.id) {
                                  if (cResult[41] === sourceQuestContent) {
                                    let tmp31;
                                    if (cResult[42] === tmp30) {
                                      tmp31 = cResult[43];
                                    }
                                    tmp38 = tmp31;
                                  }
                                }
                              }
                            }
                            const obj7 = {
                              questId: quest.id,
                              loading: undefined !== isDefibrilating && isDefibrilating,
                              disabled: undefined !== isDefibrilating && isDefibrilating,
                              onPress: onDefib,
                              sourceQuestContent,
                            };
                            const merged3 = Object.assign(tmp30);
                            const tmp37 = authStore(closure_17, obj7);
                            cResult[38] = undefined !== isDefibrilating && isDefibrilating;
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
                            let tmp39;
                            if (cResult[46] === sourceQuestContent) {
                              tmp39 = cResult[47];
                            }
                            tmp38 = tmp39;
                          }
                        }
                        const obj8 = { questId: quest.id, onPress: tmp7.claim, disabled: true, sourceQuestContent };
                        const tmp42 = authStore(closure_18, obj8);
                        cResult[44] = quest.id;
                        cResult[45] = tmp7.claim;
                        cResult[46] = sourceQuestContent;
                        cResult[47] = tmp42;
                        tmp39 = tmp42;
                      }
                    }
                  }
                  if (cResult[48] !== onBack) {
                    let tmp75 = null != onBack;
                    if (tmp75) {
                      const obj9 = {
                        accessibilityLabel: intl.string(intl2.t["13/7kX"]),
                        variant: "secondary",
                        icon: authStore(ArrowLargeLeftIcon.ArrowLargeLeftIcon, {}),
                        onPress: onBack,
                        size: "lg",
                      };
                      const IconButton = IconButton2.IconButton;
                      intl = intl2.intl;
                      tmp75 = authStore(IconButton, obj9);
                    }
                    cResult[48] = onBack;
                    cResult[49] = tmp75;
                    tmp74 = tmp75;
                  } else {
                    tmp74 = cResult[49];
                  }
                  if (cResult[50] === onLayout) {
                    if (cResult[51] === style) {
                      if (cResult[52] === tmp38) {
                        if (cResult[53] === tmp74) {
                          let tmp77;
                          if (cResult[54] === withSafeArea) {
                            tmp77 = cResult[55];
                          }
                          return tmp77;
                        }
                      }
                    }
                  }
                  const obj10 = { onLayout, ctaButton: tmp38, backButton: tmp74, style, withSafeArea };
                  const tmp80 = authStore(closure_23, obj10);
                  cResult[50] = onLayout;
                  cResult[51] = style;
                  cResult[52] = tmp38;
                  cResult[53] = tmp74;
                  cResult[54] = withSafeArea;
                  cResult[55] = tmp80;
                  tmp77 = tmp80;
                }
              }
            }
            const obj11 = { questId: quest.id, sourceQuestContent, launchMobileActivity };
            cResult[11] = launchMobileActivity;
            cResult[12] = quest.id;
            cResult[13] = sourceQuestContent;
            cResult[14] = obj11;
            tmp19 = obj11;
          }
          const obj12 = { quest, application: questApplication };
          cResult[8] = quest;
          cResult[9] = questApplication;
          cResult[10] = obj12;
          tmp17 = obj12;
        }
        if (cResult[6] !== xboxAndPlaystationAccounts) {
          const fn = function y(arg0) {
            let closure_0 = arg0;
            return null != xboxAndPlaystationAccounts.find((type) => type.type === closure_0);
          };
          cResult[6] = xboxAndPlaystationAccounts;
          cResult[7] = fn;
          tmp12 = fn;
        } else {
          tmp12 = cResult[7];
        }
        const tmpResult20 = QuestPlatformUtils;
        const supportedConsolesResult = tmpResult20.supportedConsoles(quest);
        const found = supportedConsolesResult.filter(tmp12);
        cResult[3] = quest;
        cResult[4] = xboxAndPlaystationAccounts;
        cResult[5] = found;
        arr = found;
      }
      const obj13 = { quest, sourceQuestContent };
      cResult[0] = quest;
      cResult[1] = sourceQuestContent;
      cResult[2] = obj13;
      tmp5 = obj13;
    }
  : (quest) => {
      let intl;
      let isClaiming;
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
      let tmp2Result2;
      let tmp41Result;
      let tmp41Result5;
      let withSafeArea;
      quest = quest.quest;
      ({ step, isDefibrilating } = quest);
      const onLayout = quest.onLayout;
      if (isDefibrilating === undefined) {
        isDefibrilating = false;
      }
      ({ onBack, sourceQuestContent } = quest);
      ({ onConnectConsoleNext, onDefib, style, withSafeArea } = quest);
      const tmp = useQuestRewardClaimHandler({ quest, sourceQuestContent });
      let obj = quest(10911);
      const questTaskDetails = obj.useQuestTaskDetails(quest);
      const obj2 = quest(10911);
      const isQuestProgressing = obj2.useIsQuestProgressing(quest);
      const obj3 = quest(10911);
      const first = _slicedToArray(obj3.useTaskPlatformScreen(quest, questTaskDetails), 1)[0];
      const obj4 = quest(10911);
      const xboxAndPlaystationAccounts = obj4.useConnectedAccounts().xboxAndPlaystationAccounts;
      const items = [quest, xboxAndPlaystationAccounts];
      const memo = react.useMemo(() => {
        const obj = QuestPlatformUtils;
        const supportedConsolesResult = obj.supportedConsoles(quest);
        return supportedConsolesResult.filter((item) => {
          let closure_0 = item;
          return null != xboxAndPlaystationAccounts.find((type) => type.type === closure_0);
        });
      }, items);
      const obj5 = quest(14892);
      const hasWatchVideoOnMobileTasks = obj5.useHasWatchVideoOnMobileTasks(quest.config);
      const obj6 = quest(14892);
      const mobileActivityQuest = obj6.useMobileActivityQuest(quest);
      ({ isMobileActivityQuest, launchMobileActivity, questApplication } = mobileActivityQuest);
      const obj7 = quest(10955);
      const primaryCtaCopy = obj7.usePrimaryCtaCopy({ quest, application: questApplication });
      const userStatus = quest.userStatus;
      let completedAt;
      const obj8 = quest(14927);
      const obj9 = { questId: quest.id, sourceQuestContent, launchMobileActivity };
      const mobileActivityPressHandler = obj8.useMobileActivityPressHandler(obj9);
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
      const userStatus2 = quest.userStatus;
      let claimedAt;
      const tmp12 = null != completedAt;
      if (userStatus2 != null) {
        claimedAt = userStatus2.claimedAt;
      }
      const tmp2Result = quest(10911);
      const isQuestAccessSuspended = tmp2Result.useIsQuestAccessSuspended();
      const obj10 = { disabled: true, onPressDisabled: xboxAndPlaystationAccounts(14921) };
      let tmp41Result6 = null;
      if (step !== quest(14923).QuestBottomSheetStep.TASK_SELECT) {
        const obj11 = { onLayout, ctaButton: tmp41Result, backButton: tmp41Result5, style, withSafeArea };
        if (quest(14923).QuestBottomSheetStep.CONSOLE_CONNECT === step) {
          const obj12 = { onPress: onConnectConsoleNext, disabled: 0 === memo.length };
          tmp41Result = closure_10(closure_16, obj12);
        } else {
          tmp41Result = null;
          if (quest(14923).QuestBottomSheetStep.TASK_STATUS === step) {
            let tmp41Result4;
            if (tmp12) {
              const obj13 = {
                questId: quest.id,
                onPress: tmp.claim,
                disabled: null != claimedAt,
                loading: isClaiming,
                sourceQuestContent,
              };
              isClaiming = tmp.isLoading || tmp.isClaiming;
              let tmp34 = null;
              if (isQuestAccessSuspended) {
                tmp34 = null;
                if (null == claimedAt) {
                  tmp34 = obj10;
                }
              }
              const merged = Object.assign(tmp34);
              tmp41Result4 = closure_10(closure_18, obj13);
            } else if (hasWatchVideoOnMobileTasks) {
              let tmp29 = null;
              const obj14 = { questId: quest.id, taskDetails: questTaskDetails, sourceQuestContent };
              if (isQuestAccessSuspended) {
                tmp29 = obj10;
              }
              const merged1 = Object.assign(tmp29);
              tmp41Result4 = closure_10(closure_15, obj14);
            } else if (isMobileActivityQuest) {
              const obj15 = {
                grow: true,
                size: "lg",
                onPress: mobileActivityPressHandler,
                text: primaryCtaCopy,
                icon: tmp2Result2.getPrimaryCtaIcon(quest),
              };
              const Button = tmp2(5594).Button;
              let tmp24 = null;
              tmp2Result2 = quest(10908);
              if (isQuestAccessSuspended) {
                tmp24 = obj10;
              }
              const merged2 = Object.assign(tmp24);
              tmp41Result4 = closure_10(Button, obj15);
            } else {
              if (first === quest(5626).TaskPlatformScreen.CONSOLE) {
                if (!isQuestProgressing) {
                  let tmp18 = null;
                  const obj16 = {
                    questId: quest.id,
                    loading: isDefibrilating,
                    disabled: isDefibrilating,
                    onPress: onDefib,
                    sourceQuestContent,
                  };
                  if (isQuestAccessSuspended) {
                    tmp18 = obj10;
                  }
                  const merged3 = Object.assign(tmp18);
                  tmp41Result4 = closure_10(closure_17, obj16);
                }
              }
              const obj17 = { questId: quest.id, onPress: tmp.claim, disabled: true, sourceQuestContent };
              tmp41Result4 = closure_10(closure_18, obj17);
            }
            tmp41Result = tmp41Result4;
          }
        }
        tmp41Result5 = null != onBack;
        if (tmp41Result5) {
          const obj18 = {
            accessibilityLabel: intl.string(quest(1126).t["13/7kX"]),
            variant: "secondary",
            icon: closure_10(quest(6014).ArrowLargeLeftIcon, {}),
            onPress: onBack,
            size: "lg",
          };
          const IconButton = tmp2(7575).IconButton;
          intl = tmp2(1126).intl;
          tmp41Result5 = closure_10(IconButton, obj18);
        }
        tmp41Result6 = closure_10(closure_23, obj11);
      }
      return tmp41Result6;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let disabled;
      let first;
      let onPress;
      const obj = react2;
      const cResult = obj.c(4);
      ({ onPress, disabled } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.a9OfTN);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === disabled) {
        let tmp6;
        if (cResult[2] === onPress) {
          tmp6 = cResult[3];
        }
        return tmp6;
      }
      const tmp7 = authStore(components_Button_Button.Button, {
        grow: true,
        size: "lg",
        onPress,
        disabled,
        text: first,
      });
      cResult[1] = disabled;
      cResult[2] = onPress;
      cResult[3] = tmp7;
      tmp6 = tmp7;
    }
  : (arg0) => {
      let disabled;
      let intl;
      let onPress;
      ({ onPress, disabled } = arg0);
      const obj = { grow: true, size: "lg", onPress, disabled, text: intl.string(intl2.t.a9OfTN) };
      const Button = components_Button_Button.Button;
      intl = intl2.intl;
      return authStore(Button, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (questId) => {
      let disabled;
      let loading;
      let onPress;
      let onPressDisabled;
      let sourceQuestContent;
      let obj = questId(sourceQuestContent[20]);
      const cResult = obj.c(13);
      questId = questId.questId;
      ({ loading, disabled, onPress } = questId);
      ({ onPressDisabled, sourceQuestContent } = questId);
      let obj2 = questId(sourceQuestContent[32]);
      const trackQuestContentClickedWithImpression = obj2.useTrackQuestContentClickedWithImpression();
      let obj3 = questId(sourceQuestContent[33]);
      const getQuestImpressionId = obj3.useGetQuestImpressionId();
      if (cResult[0] === getQuestImpressionId) {
        if (cResult[1] === onPress) {
          if (cResult[2] === questId) {
            if (cResult[3] === sourceQuestContent) {
              let tmp6;
              let tmp8;
              let tmp11;
              if (cResult[4] === trackQuestContentClickedWithImpression) {
                tmp6 = cResult[5];
              }
              const _Symbol = Symbol;
              if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp10 = closure_10(questId(sourceQuestContent[39]).RefreshIcon, {});
                cResult[6] = tmp10;
                tmp8 = tmp10;
              } else {
                tmp8 = cResult[6];
              }
              const _Symbol2 = Symbol;
              if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(sourceQuestContent[30]).intl;
                const stringResult = intl.string(questId(sourceQuestContent[30]).t.nPThNb);
                cResult[7] = stringResult;
                tmp11 = stringResult;
              } else {
                tmp11 = cResult[7];
              }
              if (cResult[8] === disabled) {
                if (cResult[9] === tmp6) {
                  if (cResult[10] === loading) {
                    let tmp13;
                    if (cResult[11] === onPressDisabled) {
                      tmp13 = cResult[12];
                    }
                    return tmp13;
                  }
                }
              }
              const obj4 = {
                grow: true,
                size: "lg",
                variant: "secondary",
                loading,
                disabled,
                onPressDisabled,
                icon: tmp8,
                iconPosition: "end",
                onPress: tmp6,
                text: tmp11,
              };
              const tmp15 = closure_10(questId(sourceQuestContent[23]).Button, obj4);
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
      const fn = function t(arg0) {
        const obj = AdAnalyticsInterfaceExperiment;
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
            impressionId: getQuestImpressionId(),
          };
          const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
          captureAdUserAction2;
          captureAdUserAction(obj2);
        } else {
          const obj3 = {
            questId,
            questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
            questContentCTA: AnalyticsTypes.QuestContentCTA.DEFIBRILLATOR,
            sourceQuestContent,
          };
          trackQuestContentClickedWithImpression(obj3);
        }
        if (onPress != null) {
          tmp12(arg0);
        }
      };
      cResult[0] = getQuestImpressionId;
      cResult[1] = onPress;
      cResult[2] = questId;
      cResult[3] = sourceQuestContent;
      cResult[4] = trackQuestContentClickedWithImpression;
      cResult[5] = fn;
      tmp6 = fn;
    }
  : (arg0) => {
      let disabled;
      let intl;
      let loading;
      let onPressDisabled;
      let require;
      let sourceQuestContent;
      ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
      ({ loading, disabled, onPressDisabled } = arg0);
      let obj = AnalyticsHooks;
      let closure_3 = obj.useTrackQuestContentClickedWithImpression();
      let obj2 = ContentImpressionTrackerHooks;
      let closure_4 = obj2.useGetQuestImpressionId();
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
          const obj = AdAnalyticsInterfaceExperiment;
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
              sourceQuestContent: dependencyMap,
              impressionId: closure_4(),
            };
            const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
            captureAdUserAction2;
            captureAdUserAction(obj2);
          } else {
            const obj3 = {
              questId,
              questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
              questContentCTA: AnalyticsTypes.QuestContentCTA.DEFIBRILLATOR,
              sourceQuestContent: dependencyMap,
            };
            closure_3(obj3);
          }
          if (importDefault != null) {
            tmp12(arg0);
          }
        },
        text: intl.string(intl2.t.nPThNb),
      };
      const Button = components_Button_Button.Button;
      intl = intl2.intl;
      return closure_10(Button, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (questId) => {
      let disabled;
      let loading;
      let onPress;
      let onPressDisabled;
      let sourceQuestContent;
      let obj = questId(sourceQuestContent[20]);
      const cResult = obj.c(12);
      questId = questId.questId;
      ({ disabled, loading, onPress } = questId);
      ({ onPressDisabled, sourceQuestContent } = questId);
      let obj2 = questId(sourceQuestContent[32]);
      const trackQuestContentClickedWithImpression = obj2.useTrackQuestContentClickedWithImpression();
      let obj3 = questId(sourceQuestContent[33]);
      const getQuestImpressionId = obj3.useGetQuestImpressionId();
      if (cResult[0] === getQuestImpressionId) {
        if (cResult[1] === onPress) {
          if (cResult[2] === questId) {
            if (cResult[3] === sourceQuestContent) {
              let tmp6;
              let tmp8;
              if (cResult[4] === trackQuestContentClickedWithImpression) {
                tmp6 = cResult[5];
              }
              const _Symbol = Symbol;
              if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(sourceQuestContent[30]).intl;
                const stringResult = intl.string(questId(sourceQuestContent[30]).t.cfY4PE);
                cResult[6] = stringResult;
                tmp8 = stringResult;
              } else {
                tmp8 = cResult[6];
              }
              if (cResult[7] === disabled) {
                if (cResult[8] === tmp6) {
                  if (cResult[9] === loading) {
                    let tmp10;
                    if (cResult[10] === onPressDisabled) {
                      tmp10 = cResult[11];
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
      const fn = function t() {
        const obj = AdAnalyticsInterfaceExperiment;
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
            impressionId: getQuestImpressionId(),
          };
          const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
          captureAdUserAction2;
          captureAdUserAction(obj2);
        } else {
          const obj3 = {
            questId,
            questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
            questContentCTA: AnalyticsTypes.QuestContentCTA.CLAIM_REWARD,
            sourceQuestContent,
          };
          trackQuestContentClickedWithImpression(obj3);
        }
        onPress();
      };
      cResult[0] = getQuestImpressionId;
      cResult[1] = onPress;
      cResult[2] = questId;
      cResult[3] = sourceQuestContent;
      cResult[4] = trackQuestContentClickedWithImpression;
      cResult[5] = fn;
      tmp6 = fn;
    }
  : (arg0) => {
      let disabled;
      let intl;
      let loading;
      let onPressDisabled;
      let require;
      let sourceQuestContent;
      ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
      ({ disabled, loading, onPressDisabled } = arg0);
      let obj = AnalyticsHooks;
      let closure_3 = obj.useTrackQuestContentClickedWithImpression();
      let obj2 = ContentImpressionTrackerHooks;
      let closure_4 = obj2.useGetQuestImpressionId();
      let obj3 = {
        grow: true,
        size: "lg",
        disabled,
        onPressDisabled,
        loading,
        onPress() {
          const obj = AdAnalyticsInterfaceExperiment;
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
              sourceQuestContent: dependencyMap,
              impressionId: closure_4(),
            };
            const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
            captureAdUserAction2;
            captureAdUserAction(obj2);
          } else {
            const obj3 = {
              questId,
              questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
              questContentCTA: AnalyticsTypes.QuestContentCTA.CLAIM_REWARD,
              sourceQuestContent: dependencyMap,
            };
            closure_3(obj3);
          }
          importDefault();
        },
        text: intl.string(intl2.t.cfY4PE),
      };
      const Button = components_Button_Button.Button;
      intl = intl2.intl;
      return closure_10(Button, obj3);
    };
const __initData = {
  code: 'function QuestBottomSheetFooterTsx1(){const{animation,H_PADDING_PX}=this.__closure;return{opacity:animation.get(),position:"absolute",top:0,left:0,transform:[{translateX:H_PADDING_PX}]};}',
};
const __initData2 = {
  code: 'function QuestBottomSheetFooterTsx2(){const{interpolate,animation,windowWidth,H_PADDING_PX,ICON_SIZE_PX}=this.__closure;return{width:interpolate(animation.get(),[0,1],[windowWidth-H_PADDING_PX*2,windowWidth-H_PADDING_PX*2.5-ICON_SIZE_PX]),alignSelf:"flex-end"};}',
};
const __initData3 = {
  code: "function QuestBottomSheetFooterTsx3(){const{animation,H_PADDING_PX}=this.__closure;return{opacity:animation.get(),position:'absolute',top:0,left:0,transform:[{translateX:H_PADDING_PX}]};}",
};
const __initData4 = {
  code: "function QuestBottomSheetFooterTsx4(){const{interpolate,animation,windowWidth,H_PADDING_PX,ICON_SIZE_PX}=this.__closure;return{width:interpolate(animation.get(),[0,1],[windowWidth-H_PADDING_PX*2,windowWidth-H_PADDING_PX*2.5-ICON_SIZE_PX]),alignSelf:'flex-end'};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let backButton;
      let closure_0;
      let closure_2;
      let ctaButton;
      let onLayout;
      let style;
      let width;
      let withSafeArea;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(23);
      ({ onLayout, ctaButton, backButton, style, withSafeArea } = arg0);
      _require = tmp5;
      const bottom = width(1618)().bottom;
      const tmp7 = closure_13();
      width = width(1484)().width;
      const tmp8 = closure_24();
      dependencyMap = tmp8;
      let num = 0;
      const useSharedValue = tmp(4612).useSharedValue;
      tmp(4612);
      if (null != backButton && false !== backButton) {
        num = 1;
      }
      const sharedValue = useSharedValue(num);
      if (cResult[0] === sharedValue) {
        if (cResult[1] === tmp8) {
          let tmp11;
          let tmp12;
          if (cResult[2] === (null != backButton && false !== backButton)) {
            tmp11 = cResult[3];
            tmp12 = cResult[4];
          }
          const effect = react.useEffect(tmp11, tmp12);
          const tmpResult3 = tmp(4612);
          class B {
            constructor() {
              let items;
              const rect = { opacity: sharedValue.get(), position: "absolute", top: 0, left: 0, transform: items };
              items = [];
              const obj = { translateX: PX_16 };
              items[0] = obj;
              return rect;
            }
          }
          const obj2 = { animation: sharedValue, H_PADDING_PX: PX_16 };
          B.__closure = obj2;
          let num2 = 12824906142404;
          B.__workletHash = 12824906142404;
          B.__initData = __initData;
          const animatedStyle = tmpResult3.useAnimatedStyle(B);
          const tmpResult4 = tmp(4612);
          class N {
            constructor() {
              let interpolate;
              let items;
              let value;
              const obj = { width: interpolate(value, [0, 1], items), alignSelf: "flex-end" };
              interpolate = ReanimatedRexport.interpolate;
              items = [width - 2 * PX_16];
              ReanimatedRexport;
              value = sharedValue.get();
              const diff = width - 2.5 * PX_16;
              items[1] = diff - ButtonConstants.LARGE_BUTTON_HEIGHT;
              return obj;
            }
          }
          const useAnimatedStyle = tmpResult4.useAnimatedStyle;
          N.__closure = {
            interpolate: tmp(4612).interpolate,
            animation: sharedValue,
            windowWidth: width,
            H_PADDING_PX: PX_16,
            ICON_SIZE_PX: tmp(5600).LARGE_BUTTON_HEIGHT,
          };
          N.__workletHash = 6037256479965;
          N.__initData = __initData2;
          const obj3 = {
            interpolate: tmp(4612).interpolate,
            animation: sharedValue,
            windowWidth: width,
            H_PADDING_PX: PX_16,
            ICON_SIZE_PX: tmp(5600).LARGE_BUTTON_HEIGHT,
          };
          const animatedStyle1 = useAnimatedStyle(N);
          const _Math = Math;
          const bound = Math.max(bottom, closure_9);
          if (cResult[5] === bound) {
            let tmp24;
            if (cResult[6] === (undefined === withSafeArea || withSafeArea)) {
              tmp24 = cResult[7];
            }
            if (cResult[8] === style) {
              if (cResult[9] === tmp7.container) {
                let tmp26;
                if (cResult[10] === tmp24) {
                  tmp26 = cResult[11];
                }
                if (cResult[12] === animatedStyle) {
                  let tmp27;
                  if (cResult[13] === backButton) {
                    tmp27 = cResult[14];
                  }
                  if (cResult[15] === animatedStyle1) {
                    let tmp30;
                    if (cResult[16] === ctaButton) {
                      tmp30 = cResult[17];
                    }
                    if (cResult[18] === onLayout) {
                      if (cResult[19] === tmp26) {
                        if (cResult[20] === tmp27) {
                          let tmp33;
                          if (cResult[21] === tmp30) {
                            tmp33 = cResult[22];
                          }
                          return tmp33;
                        }
                      }
                    }
                    class B {
                      constructor() {
                        let items;
                        const rect = {
                          opacity: sharedValue.get(),
                          position: "absolute",
                          top: 0,
                          left: 0,
                          transform: items,
                        };
                        items = [];
                        const obj = { translateX: PX_16 };
                        items[0] = obj;
                        return rect;
                      }
                    }
                    tmp36[0] = tmp26;
                    tmp36[1] = onLayout;
                    let items = [tmp27, tmp30];
                    tmp36[2] = items;
                    const tmp37 = closure_11(View, tmp36);
                    cResult[18] = onLayout;
                    cResult[19] = tmp26;
                    class N {
                      constructor() {
                        let interpolate;
                        let items;
                        let value;
                        const obj = { width: interpolate(value, [0, 1], items), alignSelf: "flex-end" };
                        interpolate = ReanimatedRexport.interpolate;
                        items = [width - 2 * PX_16];
                        ReanimatedRexport;
                        value = sharedValue.get();
                        const diff = width - 2.5 * PX_16;
                        items[1] = diff - ButtonConstants.LARGE_BUTTON_HEIGHT;
                        return obj;
                      }
                    }
                    cResult[20] = tmp27;
                    cResult[21] = tmp30;
                    cResult[22] = tmp37;
                    tmp33 = tmp37;
                  }
                  const obj4 = { style: null, children: ctaButton };
                  class B {
                    constructor() {
                      let items;
                      const rect = {
                        opacity: sharedValue.get(),
                        position: "absolute",
                        top: 0,
                        left: 0,
                        transform: items,
                      };
                      items = [];
                      const obj = { translateX: PX_16 };
                      items[0] = obj;
                      return rect;
                    }
                  }
                  const tmp32 = closure_10(width(4612).View, obj4);
                  cResult[15] = animatedStyle1;
                  cResult[16] = ctaButton;
                  cResult[17] = tmp32;
                  tmp30 = tmp32;
                }
                const obj5 = { style: null, children: backButton };
                class B {
                  constructor() {
                    let items;
                    const rect = {
                      opacity: sharedValue.get(),
                      position: "absolute",
                      top: 0,
                      left: 0,
                      transform: items,
                    };
                    items = [];
                    const obj = { translateX: PX_16 };
                    items[0] = obj;
                    return rect;
                  }
                }
                const tmp29 = closure_10(width(4612).View, obj5);
                cResult[12] = animatedStyle;
                cResult[13] = backButton;
                cResult[14] = tmp29;
                tmp27 = tmp29;
              }
            }
            const items1 = [tmp7.container, ,];
            class B {
              constructor() {
                let items;
                const rect = { opacity: sharedValue.get(), position: "absolute", top: 0, left: 0, transform: items };
                items = [];
                const obj = { translateX: PX_16 };
                items[0] = obj;
                return rect;
              }
            }
            items1[2] = style;
            cResult[8] = style;
            cResult[9] = tmp7.container;
            cResult[10] = tmp24;
            cResult[11] = items1;
            tmp26 = items1;
          }
          let tmp25 = tmp4;
          if (tmp25) {
            tmp25 = { paddingBottom: bound };
            const obj6 = { paddingBottom: bound };
          }
          cResult[5] = bound;
          cResult[6] = undefined === withSafeArea || withSafeArea;
          cResult[7] = tmp25;
          tmp24 = tmp25;
        }
      }
      const fn = function n() {
        let num = 0;
        set = sharedValue.set;
        const withTiming = timing.withTiming;
        timing;
        if (closure_0) {
          num = 1;
        }
        let num2 = 200;
        if (closure_2) {
          num2 = 0;
        }
        const result = set(withTiming(num, { duration: num2 }));
      };
      const items2 = [tmp5, tmp8, sharedValue];
      cResult[0] = sharedValue;
      cResult[1] = tmp8;
      cResult[2] = null != backButton && false !== backButton;
      cResult[3] = fn;
      cResult[4] = items2;
      tmp12 = items2;
      tmp11 = fn;
    }
  : (arg0) => {
      let backButton;
      let closure_0;
      let closure_2;
      let ctaButton;
      let items2;
      let onLayout;
      let style;
      let withSafeArea;
      ({ backButton, withSafeArea } = arg0);
      ({ onLayout, ctaButton, style } = arg0);
      if (withSafeArea === undefined) {
        withSafeArea = true;
      }
      let width;
      let sharedValue;
      const tmp = null != backButton && false !== backButton;
      _require = tmp;
      const tmp2 = width;
      const bottom = width(1618)().bottom;
      const tmp4 = closure_13();
      width = width(1484)().width;
      const tmp5 = closure_24();
      dependencyMap = tmp5;
      let num = 0;
      const useSharedValue = require("ReanimatedRexport").useSharedValue;
      require("ReanimatedRexport");
      if (tmp) {
        num = 1;
      }
      sharedValue = useSharedValue(num);
      let items = [tmp, tmp5, sharedValue];
      const effect = react.useEffect(() => {
        let num = 0;
        set = sharedValue.set;
        const withTiming = timing.withTiming;
        timing;
        if (closure_0) {
          num = 1;
        }
        let num2 = 200;
        if (closure_2) {
          num2 = 0;
        }
        const result = set(withTiming(num, { duration: num2 }));
      }, items);
      const fn = function p() {
        let items;
        const rect = { opacity: sharedValue.get(), position: "absolute", top: 0, left: 0, transform: items };
        items = [];
        const obj = { translateX: PX_16 };
        items[0] = obj;
        return rect;
      };
      let obj = { animation: sharedValue, H_PADDING_PX: PX_16 };
      fn.__closure = obj;
      fn.__workletHash = 7526979046886;
      fn.__initData = __initData3;
      const tmp6Result = require("ReanimatedRexport");
      const animatedStyle = tmp6Result.useAnimatedStyle(fn);
      const tmp6Result2 = require("ReanimatedRexport");
      class Q {
        constructor() {
          let interpolate;
          let items;
          let value;
          const obj = { width: interpolate(value, [0, 1], items), alignSelf: "flex-end" };
          interpolate = ReanimatedRexport.interpolate;
          items = [width - 2 * PX_16];
          ReanimatedRexport;
          value = sharedValue.get();
          const diff = width - 2.5 * PX_16;
          items[1] = diff - ButtonConstants.LARGE_BUTTON_HEIGHT;
          return obj;
        }
      }
      Q.__closure = {
        interpolate: require("ReanimatedRexport").interpolate,
        animation: sharedValue,
        windowWidth: width,
        H_PADDING_PX: PX_16,
        ICON_SIZE_PX: require("ButtonConstants").LARGE_BUTTON_HEIGHT,
      };
      Q.__workletHash = 11275370871227;
      Q.__initData = __initData4;
      ({
        interpolate: require("ReanimatedRexport").interpolate,
        animation: sharedValue,
        windowWidth: width,
        H_PADDING_PX: PX_16,
        ICON_SIZE_PX: require("ButtonConstants").LARGE_BUTTON_HEIGHT,
      });
      const animatedStyle1 = tmp6Result2.useAnimatedStyle(Q);
      const items1 = [tmp4.container, ,];
      if (withSafeArea) {
        withSafeArea = { paddingBottom: tmp12 };
        const obj3 = { paddingBottom: tmp12 };
      }
      const obj4 = { style: items1, onLayout, children: items2 };
      items1[1] = withSafeArea;
      items1[2] = style;
      items2 = [
        closure_10(tmp2(4612).View, { style: animatedStyle, children: backButton }),
        closure_10(tmp2(4612).View, { style: animatedStyle1, children: ctaButton }),
      ];
      return closure_11(View, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      let useReducedMotion;
      const obj = react2;
      const cResult = obj.c(2);
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
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let useReducedMotion;
      const items = [AccessibilityStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    };
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx");

export default tmp3;
export { useQuestRewardClaimHandler };
