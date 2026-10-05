// discord_app/modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../../../utils/AnalyticsUtils.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import useAnalyticsLocationsDefault from "../../../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../../../app_analytics/AnalyticsLocation.tsx";
import DetailsHeaderDefault from "../app/DetailsHeader.tsx";
import AppLauncherUtils from "../../../../utils/AppLauncherUtils.tsx";
import AppLauncherTypes from "../../../../AppLauncherTypes.tsx";
import roundToNearestPixelDefault from "../../../../../voice_panel/native/utils/roundToNearestPixel.tsx";
import DeveloperActivityShelfActionCreatorsAll from "../../../../../activities/DeveloperActivityShelfActionCreators.tsx";
import AppLauncherContext from "../../../AppLauncherContext.tsx";
import useActivityShelfItem from "../../../../../activities/utils/useActivityShelfItem.tsx";
import HeroMediaDefault from "HeroMedia.tsx";
import useIsPrimaryEntryPointDisabledDefault from "../../../../hooks/useIsPrimaryEntryPointDisabled.tsx";
import useShowTryItOutButtonInAppLauncherDefault from "../../../../../app_dms/useShowTryItOutButtonInAppLauncher.tsx";
import getItemSubtitleForMaxPlayersDefault from "../../../../../activities/utils/getItemSubtitleForMaxPlayers.tsx";
import _asyncToGenerator_mod from "../../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../../_runtime/00019_react.js";
import DeveloperActivityShelfStore from "../../../../../activities/DeveloperActivityShelfStore.tsx";
import ApplicationRecord from "../../../../../../records/ApplicationRecord.tsx";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let botUserId, c3, c4, c5, dependencyMap, importDefault;

let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = {
  container: { flex: 1 },
  cardContainer: obj2,
  activityHeroDetailsLandscape: { flexDirection: "row" },
  heroMediaContainerLandscape: { width: "65%" },
  detailsContainerLandscape: { width: "35%" },
  details: { marginTop: 16, paddingHorizontal: PX_12, rowGap: 4 },
  tagList: obj3,
  tag: obj4,
  tagText: { top: -1 },
  tagIcon: { marginRight: 4 },
  buttonContainer: { paddingTop: 16 },
  activityUrlOverrideInputContainer: { marginTop: -4 },
  primaryEntryPointButtonDisabledCTA: obj5,
  tryItOutButtonContainerStyle: { marginTop: 8 },
};
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  gap: nativeDefault.space.PX_16,
  paddingBottom: PX_12,
};
createStyles = createStyles.createStyles;
obj3 = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: nativeDefault.space.PX_8,
  columnGap: 4,
  rowGap: 6,
};
obj4 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: 12,
  paddingVertical: 4,
};
obj5 = { marginTop: nativeDefault.space.PX_12, color: nativeDefault.colors.TEXT_MUTED, textAlign: "center" };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let icon;
      let items;
      let tagName;
      const obj = react2;
      const cResult = obj.c(8);
      ({ tagName, icon, accessibilityLabel } = arg0);
      const tmp4 = closure_15();
      if (cResult[0] === tmp4.tagText) {
        let tmp5;
        if (cResult[1] === tagName) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === accessibilityLabel) {
          if (cResult[4] === icon) {
            if (cResult[5] === tmp4.tag) {
              let tmp7;
              if (cResult[6] === tmp5) {
                tmp7 = cResult[7];
              }
              return tmp7;
            }
          }
        }
        const obj2 = { style: tmp4.tag, accessible: true, accessibilityLabel, children: items };
        items = [icon, tmp5];
        const tmp10 = closure_12(View, obj2);
        cResult[3] = accessibilityLabel;
        cResult[4] = icon;
        cResult[5] = tmp4.tag;
        cResult[6] = tmp5;
        cResult[7] = tmp10;
        tmp7 = tmp10;
      }
      const obj3 = { variant: "text-sm/normal", style: tmp4.tagText, children: tagName };
      const tmp6 = unpackModuleId(Text_Text.Text, obj3);
      cResult[0] = tmp4.tagText;
      cResult[1] = tagName;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let accessibilityLabel;
      let icon;
      let items;
      let tagName;
      ({ tagName, icon, accessibilityLabel } = arg0);
      const tmp = closure_15();
      const obj = { style: tmp.tag, accessible: true, accessibilityLabel, children: items };
      items = [icon];
      const obj2 = { variant: "text-sm/normal", style: tmp.tagText, children: tagName };
      items[1] = unpackModuleId(Text_Text.Text, obj2);
      return closure_12(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (applicationId) => {
      let activityAction;
      let closure_4;
      let context;
      let disabled;
      let entrypoint;
      let keyboardCloseReasonRef;
      let onActivityItemSelected;
      let primaryEntryPointCommand;
      let sectionName;
      let obj = applicationId(keyboardCloseReasonRef[11]);
      const cResult = obj.c(32);
      applicationId = applicationId.applicationId;
      ({
        context,
        sectionName,
        primaryEntryPointCommand,
        disabled,
        onActivityItemSelected,
        entrypoint,
        activityAction,
      } = applicationId);
      const id = react.useId();
      let obj2 = applicationId(keyboardCloseReasonRef[13]);
      const requiredAppLauncherContext = obj2.useRequiredAppLauncherContext();
      const chatInputRef = requiredAppLauncherContext.chatInputRef;
      keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
      if (cResult[0] === chatInputRef) {
        let tmp6;
        if (cResult[1] === keyboardCloseReasonRef) {
          tmp6 = cResult[2];
        }
        _asyncToGenerator = tmp6;
        let tmp7;
        if (activityAction !== applicationId(keyboardCloseReasonRef[14]).ActivityAction.LEAVE) {
          tmp7 = tmp6;
        }
        if (cResult[3] === applicationId) {
          if (cResult[4] === id) {
            if (cResult[5] === context) {
              let tmp8;
              if (cResult[6] === tmp7) {
                tmp8 = cResult[7];
              }
              const submitting = activityAction(tmp2[15])(tmp8).submitting;
              if (cResult[8] === applicationId) {
                if (cResult[9] === id) {
                  if (cResult[10] === context) {
                    if (cResult[11] === entrypoint) {
                      if (cResult[12] === onActivityItemSelected) {
                        let tmp10;
                        let tmp11;
                        let tmp13;
                        let str;
                        if (cResult[13] === sectionName) {
                          tmp10 = cResult[14];
                        }
                        const tmpResult = applicationId(keyboardCloseReasonRef[17]);
                        const handleActivityItemSelected =
                          tmpResult.useHandleActivityItemSelected(tmp10).handleActivityItemSelected;
                        if (cResult[15] !== primaryEntryPointCommand.displayName) {
                          const tmpResult2 = applicationId(keyboardCloseReasonRef[18]);
                          const result = tmpResult2.formatPrimaryEntryPointCommandName(
                            primaryEntryPointCommand.displayName,
                          );
                          cResult[15] = primaryEntryPointCommand.displayName;
                          cResult[16] = result;
                          tmp11 = result;
                        } else {
                          tmp11 = cResult[16];
                        }
                        if (cResult[17] !== tmp11) {
                          let stringResult = tmp11;
                          if (tmp11 == null) {
                            const intl = tmp(tmp2[19]).intl;
                            stringResult = intl.string(tmp(tmp2[19]).t.zKX8Nu);
                          }
                          cResult[17] = tmp11;
                          cResult[18] = stringResult;
                          tmp13 = stringResult;
                        } else {
                          tmp13 = cResult[18];
                        }
                        if (activityAction === applicationId(keyboardCloseReasonRef[14]).ActivityAction.JOIN) {
                          let tmp19;
                          const _Symbol = Symbol;
                          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl3 = tmp(tmp2[19]).intl;
                            const stringResult1 = intl3.string(applicationId(keyboardCloseReasonRef[19]).t.d9PsMj);
                            cResult[19] = stringResult1;
                            tmp19 = stringResult1;
                          } else {
                            tmp19 = cResult[19];
                          }
                          str = "active";
                          tmp13 = tmp19;
                        } else {
                          str = "primary";
                          if (activityAction === applicationId(keyboardCloseReasonRef[14]).ActivityAction.LEAVE) {
                            let tmp16;
                            const _Symbol2 = Symbol;
                            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl2 = tmp(tmp2[19]).intl;
                              const stringResult2 = intl2.string(applicationId(keyboardCloseReasonRef[19]).t["Hi1/aQ"]);
                              cResult[20] = stringResult2;
                              tmp16 = stringResult2;
                            } else {
                              tmp16 = cResult[20];
                            }
                            str = "destructive";
                            tmp13 = tmp16;
                          }
                        }
                        if (cResult[21] === activityAction) {
                          if (cResult[22] === applicationId) {
                            if (cResult[23] === handleActivityItemSelected) {
                              let tmp21;
                              if (cResult[24] === tmp6) {
                                tmp21 = cResult[25];
                              }
                              let tmp22 = null;
                              if ("channel" === context.type) {
                                if (cResult[26] === tmp13) {
                                  if (cResult[27] === str) {
                                    if (cResult[28] === disabled) {
                                      if (cResult[29] === tmp21) {
                                        let tmp23;
                                        if (cResult[30] === submitting) {
                                          tmp23 = cResult[31];
                                        }
                                        tmp22 = tmp23;
                                      }
                                    }
                                  }
                                }
                                class B {
                                  constructor() {
                                    const obj = AnalyticsUtilsDefault;
                                    const obj2 = {
                                      application_id: applicationId,
                                      button_action: AppLauncherTypes.EntryPointCommandButtonActions.USE_APP_COMMAND,
                                    };
                                    obj.track(AnalyticEvents.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, obj2);
                                    handleActivityItemSelected();
                                    if (activityAction === useActivityShelfItem.ActivityAction.LEAVE) {
                                      closure_4();
                                    }
                                  }
                                }
                                cResult[26] = tmp13;
                                cResult[27] = str;
                                cResult[28] = disabled;
                                cResult[29] = tmp21;
                                cResult[30] = submitting;
                                cResult[31] = tmp25;
                                tmp23 = tmp25;
                              }
                              return tmp22;
                            }
                          }
                        }
                        class B {
                          constructor() {
                            const obj = AnalyticsUtilsDefault;
                            const obj2 = {
                              application_id: applicationId,
                              button_action: AppLauncherTypes.EntryPointCommandButtonActions.USE_APP_COMMAND,
                            };
                            obj.track(AnalyticEvents.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, obj2);
                            handleActivityItemSelected();
                            if (activityAction === useActivityShelfItem.ActivityAction.LEAVE) {
                              closure_4();
                            }
                          }
                        }
                        cResult[21] = activityAction;
                        cResult[22] = applicationId;
                        cResult[23] = handleActivityItemSelected;
                        cResult[24] = tmp6;
                        cResult[25] = B;
                        tmp21 = B;
                      }
                    }
                  }
                }
              }
              const obj4 = {
                applicationId,
                context,
                sectionName,
                onActivityItemSelected: null,
                location: applicationId(keyboardCloseReasonRef[16]).ApplicationCommandTriggerLocations
                  .APP_LAUNCHER_APPLICATION_VIEW,
                entrypoint,
                launchingComponentId: id,
              };
              cResult[8] = applicationId;
              cResult[9] = id;
              cResult[10] = context;
              cResult[11] = entrypoint;
              cResult[12] = onActivityItemSelected;
              cResult[13] = sectionName;
              cResult[14] = obj4;
              tmp10 = obj4;
            }
          }
        }
        const obj5 = { applicationId, context, launchingComponentId: null, onSubmissionComplete: tmp7 };
        cResult[3] = applicationId;
        cResult[4] = id;
        cResult[5] = context;
        cResult[6] = tmp7;
        cResult[7] = obj5;
        tmp8 = obj5;
      }
      const fn = function n() {
        keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.ACTIVITY;
        const current = chatInputRef.current;
        if (current != null) {
          current.closeCustomKeyboard();
        }
      };
      cResult[0] = chatInputRef;
      cResult[1] = keyboardCloseReasonRef;
      cResult[2] = fn;
      tmp6 = fn;
    }
  : (applicationId) => {
      let context;
      let disabled;
      let entrypoint;
      let onActivityItemSelected;
      let primaryEntryPointCommand;
      let sectionName;
      let str;
      let tmp7;
      applicationId = applicationId.applicationId;
      ({ context, primaryEntryPointCommand } = applicationId);
      const activityAction = applicationId.activityAction;
      let chatInputRef;
      let handleActivityItemSelected;
      let obj = handleActivityItemSelected;
      ({ sectionName, disabled, onActivityItemSelected, entrypoint } = applicationId);
      const id = handleActivityItemSelected.useId();
      let obj2 = applicationId(chatInputRef[13]);
      const requiredAppLauncherContext = obj2.useRequiredAppLauncherContext();
      chatInputRef = requiredAppLauncherContext.chatInputRef;
      const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
      const items = [chatInputRef, keyboardCloseReasonRef];
      const callback = handleActivityItemSelected.useCallback(() => {
        keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.ACTIVITY;
        const current = chatInputRef.current;
        if (current != null) {
          current.closeCustomKeyboard();
        }
      }, items);
      const obj3 = { applicationId, context, launchingComponentId: id, onSubmissionComplete: tmp7 };
      tmp7 = undefined;
      const tmp6 = primaryEntryPointCommand(chatInputRef[15]);
      if (activityAction !== applicationId(chatInputRef[14]).ActivityAction.LEAVE) {
        tmp7 = callback;
      }
      const submitting = tmp6(obj3).submitting;
      const tmp2Result = applicationId(chatInputRef[17]);
      const obj4 = {
        applicationId,
        context,
        sectionName,
        onActivityItemSelected,
        location: applicationId(chatInputRef[16]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW,
        entrypoint,
        launchingComponentId: id,
      };
      handleActivityItemSelected = tmp2Result.useHandleActivityItemSelected(obj4).handleActivityItemSelected;
      const items1 = [primaryEntryPointCommand.displayName];
      let memo = obj.useMemo(() => {
        const obj = AppLauncherUtils;
        return obj.formatPrimaryEntryPointCommandName(primaryEntryPointCommand.displayName);
      }, items1);
      if (memo == null) {
        const intl = tmp2(tmp3[19]).intl;
        memo = intl.string(tmp2(tmp3[19]).t.zKX8Nu);
      }
      if (activityAction === applicationId(chatInputRef[14]).ActivityAction.JOIN) {
        const intl3 = tmp2(tmp3[19]).intl;
        memo = intl3.string(tmp2(tmp3[19]).t.d9PsMj);
        str = "active";
      } else {
        str = "primary";
        if (activityAction === applicationId(chatInputRef[14]).ActivityAction.LEAVE) {
          const intl2 = tmp2(tmp3[19]).intl;
          memo = intl2.string(tmp2(tmp3[19]).t["Hi1/aQ"]);
          str = "destructive";
        }
      }
      const items2 = [handleActivityItemSelected, activityAction, callback, applicationId];
      let tmp10 = null;
      if ("channel" === context.type) {
        const obj5 = { size: "lg", loading: submitting, variant: str, text: memo, disabled, onPress: tmp9 };
        tmp10 = closure_11(tmp2(tmp3[22]).Button, obj5);
      }
      return tmp10;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (botUserId) => {
      let closure_4;
      let tmp5;
      const tmp = botUserId;
      let obj = botUserId(576);
      const cResult = obj.c(9);
      botUserId = botUserId.botUserId;
      const applicationId = botUserId.applicationId;
      let analyticsLocations = botUserId.analyticsLocations;
      const context = botUserId.context;
      const tmp4 = _slicedToArray(react.useState(false), 2);
      [tmp5, dependencyMap] = tmp4;
      _asyncToGenerator = react.useRef(null);
      if (cResult[0] === analyticsLocations) {
        if (cResult[1] === applicationId) {
          let tmp6;
          let tmp8;
          if (cResult[2] === botUserId) {
            tmp6 = cResult[3];
          }
          let str = "primary";
          if ("channel" === context.type) {
            str = "secondary";
          }
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.AUM8hY);
            cResult[4] = stringResult;
            tmp8 = stringResult;
          } else {
            tmp8 = cResult[4];
          }
          if (cResult[5] === tmp5) {
            if (cResult[6] === tmp6) {
              let tmp10;
              if (cResult[7] === str) {
                tmp10 = cResult[8];
              }
              return tmp10;
            }
          }
          let obj2 = { size: "lg", loading: tmp5, variant: str, text: tmp8, onPress: tmp6 };
          const tmp12 = closure_11(tmp(5594).Button, obj2);
          cResult[5] = tmp5;
          cResult[6] = tmp6;
          cResult[7] = str;
          cResult[8] = tmp12;
          tmp10 = tmp12;
        }
      }
      let closure_0 = _asyncToGenerator(async () => {
        let closure_1;
        let obj9;
        let ref;
        if (c5 === 2) {
          c5 = 3;
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
          let v0;
          try {
            let channelId;
            c5 = 2;
            if (0 === ref) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                channelId = undefined;
                const obj4 = {
                  application_id: tmp,
                  button_action: channelId(dependencyMap[21]).EntryPointCommandButtonActions.OPEN_APP_DM,
                };
                const track = applicationId(dependencyMap[20]).track;
                const APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED =
                  constants.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED;
                const tmp27 = applicationId(dependencyMap[20]);
                track(APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, obj4);
                const _setTimeout = setTimeout;
                ref.current = setTimeout(() => {
                  v0(true);
                }, 250);
                v0 = 1;
                const obj5 = { recipientIds: channelId };
                ref = 2;
                c5 = 1;
                const obj6 = { value: obj9.openPrivateChannel(obj5), done: false };
                obj9 = applicationId(dependencyMap[23]);
                return obj6;
              }
            } else {
              if (1 === ref) {
                v0 = 0;
              } else if (2 === ref) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v0 = 0;
                  c5 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  channelId = value;
                  const obj8 = { targetApplicationId: tmp, channelId, analyticsLocations };
                  ref = 3;
                  c5 = 1;
                  const obj10 = { value: applicationId(dependencyMap[24])(obj8), done: false };
                  return obj10;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                c5 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                v0 = 0;
              }
              const _clearTimeout = clearTimeout;
              clearTimeout(ref.current);
              v0(false);
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp18) {
            analyticsLocations = tmp18;
            if (0 === v0) {
              c5 = 3;
              throw tmp18;
            } else {
              ref = 1;
            }
          }
        }
      });
      const fn = function () {
        return closure_0(...arguments);
      };
      cResult[0] = analyticsLocations;
      cResult[1] = applicationId;
      cResult[2] = botUserId;
      cResult[3] = fn;
      tmp6 = fn;
    }
  : (botUserId) => {
      let closure_3;
      let closure_4;
      let first;
      let intl;
      botUserId = botUserId.botUserId;
      const applicationId = botUserId.applicationId;
      const analyticsLocations = botUserId.analyticsLocations;
      dependencyMap = undefined;
      const context = botUserId.context;
      [first, dependencyMap] = react.useState(false);
      _asyncToGenerator = react.useRef(null);
      const items = [botUserId, applicationId, analyticsLocations];
      let str = "primary";
      const callback = react.useCallback(
        _asyncToGenerator(async () => {
          let closure_1;
          let obj9;
          if (c5 === 2) {
            c5 = 3;
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
              let channelId;
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  channelId = undefined;
                  const obj4 = {
                    application_id: applicationId,
                    button_action: channelId(c3[21]).EntryPointCommandButtonActions.OPEN_APP_DM,
                  };
                  const track = tmp(c3[20]).track;
                  const APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED =
                    constants.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED;
                  const tmp27 = tmp(c3[20]);
                  track(APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, obj4);
                  const _setTimeout = setTimeout;
                  closure_4.current = setTimeout(() => {
                    closure_1_3(true);
                  }, 250);
                  c3 = 1;
                  const obj5 = { recipientIds: botUserId };
                  c4 = 2;
                  c5 = 1;
                  const obj6 = { value: obj9.openPrivateChannel(obj5), done: false };
                  obj9 = tmp(c3[23]);
                  return obj6;
                }
              } else {
                if (1 === c4) {
                  c3 = 0;
                } else if (2 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    c5 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    channelId = value;
                    const obj8 = { targetApplicationId: closure_129_1, channelId, analyticsLocations: closure_129_2 };
                    c4 = 3;
                    c5 = 1;
                    const obj10 = { value: tmp(c3[24])(obj8), done: false };
                    return obj10;
                  }
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c3 = 0;
                }
                const _clearTimeout = clearTimeout;
                clearTimeout(closure_129_4.current);
                closure_129_3(false);
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp18) {
              let closure_2 = tmp18;
              if (0 === c3) {
                c5 = 3;
                throw tmp18;
              } else {
                c4 = 1;
              }
            }
          }
        }),
        items,
      );
      if ("channel" === context.type) {
        str = "secondary";
      }
      let obj = {
        size: "lg",
        loading: first,
        variant: str,
        text: intl.string(botUserId(1126).t.AUM8hY),
        onPress: callback,
      };
      const Button = botUserId(5594).Button;
      intl = botUserId(1126).intl;
      return closure_11(Button, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (application) {
      let activityUrlOverride;
      let context;
      let entrypoint;
      let intl;
      let isDeveloperOfThisApp;
      let items1;
      let onActivityItemSelected;
      let sectionName;
      let tmp11;
      let useActivityUrlOverride;
      let obj = application(576);
      const cResult = obj.c(100);
      application = application.application;
      ({ context, sectionName, onActivityItemSelected, entrypoint } = application);
      const tmp4 = closure_15();
      let obj2 = application(10994);
      const width = obj2.useRequiredAppLauncherContext().width;
      const obj3 = application(9001);
      const getPrimaryAppCommand = obj3.useGetPrimaryAppCommand(context, application.id);
      const tmp6 = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp6(AnalyticsLocationDefault.APP_DETAIL).analyticsLocations;
      [r10041, importDefault] = react.useState(undefined);
      _slicedToArray(react.useState(undefined), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function p(nativeEvent) {
          importDefault(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.width));
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const tmpResult = application(5912);
      const isScreenLandscape = tmpResult.useIsScreenLandscape();
      entrypoint !== application(8932).AppLauncherEntrypoint.VOICE && isScreenLandscape;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DeveloperActivityShelfStore];
        cResult[1] = items;
        tmp11 = items;
      } else {
        tmp11 = cResult[1];
      }
      if (cResult[2] !== application.id) {
        class G {
          constructor() {
            const obj = {
              isDeveloperOfThisApp: DeveloperActivityShelfStore.inDevModeForApplication(application.id),
              activityUrlOverride: DeveloperActivityShelfStore.getActivityUrlOverride(),
              useActivityUrlOverride: DeveloperActivityShelfStore.getUseActivityUrlOverride(),
            };
            return obj;
          }
        }
        cResult[2] = application.id;
        cResult[3] = G;
      } else {
        class G {
          constructor() {
            const obj = {
              isDeveloperOfThisApp: DeveloperActivityShelfStore.inDevModeForApplication(application.id),
              activityUrlOverride: DeveloperActivityShelfStore.getActivityUrlOverride(),
              useActivityUrlOverride: DeveloperActivityShelfStore.getUseActivityUrlOverride(),
            };
            return obj;
          }
        }
      }
      const tmpResult3 = application(504);
      const stateFromStoresObject = tmpResult3.useStateFromStoresObject(tmp11, G);
      ({ isDeveloperOfThisApp, activityUrlOverride, useActivityUrlOverride } = stateFromStoresObject);
      const tmpResult4 = application(8794);
      if (tmpResult4.isRealApplication(application)) {
        class G {
          constructor() {
            const obj = {
              isDeveloperOfThisApp: DeveloperActivityShelfStore.inDevModeForApplication(application.id),
              activityUrlOverride: DeveloperActivityShelfStore.getActivityUrlOverride(),
              useActivityUrlOverride: DeveloperActivityShelfStore.getUseActivityUrlOverride(),
            };
            return obj;
          }
        }
        const tmp17 =
          application instanceof ApplicationRecord ? application.maxParticipants : application.max_participants;
        if (tmp17 == null) {
          class G {
            constructor() {
              const obj = {
                isDeveloperOfThisApp: DeveloperActivityShelfStore.inDevModeForApplication(application.id),
                activityUrlOverride: DeveloperActivityShelfStore.getActivityUrlOverride(),
                useActivityUrlOverride: DeveloperActivityShelfStore.getUseActivityUrlOverride(),
              };
              return obj;
            }
          }
        }
        if (cResult[4] === activityUrlOverride) {
          class G {
            constructor() {
              const obj = {
                isDeveloperOfThisApp: DeveloperActivityShelfStore.inDevModeForApplication(application.id),
                activityUrlOverride: DeveloperActivityShelfStore.getActivityUrlOverride(),
                useActivityUrlOverride: DeveloperActivityShelfStore.getUseActivityUrlOverride(),
              };
              return obj;
            }
          }
        }
        let tmp21Result = null;
        if (isDeveloperOfThisApp) {
          class G {
            constructor() {
              const obj = {
                isDeveloperOfThisApp: DeveloperActivityShelfStore.inDevModeForApplication(application.id),
                activityUrlOverride: DeveloperActivityShelfStore.getActivityUrlOverride(),
                useActivityUrlOverride: DeveloperActivityShelfStore.getUseActivityUrlOverride(),
              };
              return obj;
            }
          }
          const obj4 = { marginTop: PX_12, marginBottom: 0 };
          if (!useActivityUrlOverride) {
            class G {
              constructor() {
                const obj = {
                  isDeveloperOfThisApp: DeveloperActivityShelfStore.inDevModeForApplication(application.id),
                  activityUrlOverride: DeveloperActivityShelfStore.getActivityUrlOverride(),
                  useActivityUrlOverride: DeveloperActivityShelfStore.getUseActivityUrlOverride(),
                };
                return obj;
              }
            }
          }
          const obj5 = { style: obj4, children: items1 };
          items1 = [closure_11(tmp(5988).TableRowDivider, {}), ,];
          const obj6 = {
            label: intl.string(application(1126).t["3TSGuD"]),
            value: useActivityUrlOverride,
            onValueChange: DeveloperActivityShelfActionCreatorsAll.toggleUseActivityUrlOverride,
            end: true,
          };
          const TableSwitchRow = tmp(6698).TableSwitchRow;
          intl = tmp(1126).intl;
          items1[1] = closure_11(TableSwitchRow, obj6);
          let tmp23Result = null;
          if (useActivityUrlOverride) {
            class G {
              constructor() {
                const obj = {
                  isDeveloperOfThisApp: DeveloperActivityShelfStore.inDevModeForApplication(application.id),
                  activityUrlOverride: DeveloperActivityShelfStore.getActivityUrlOverride(),
                  useActivityUrlOverride: DeveloperActivityShelfStore.getUseActivityUrlOverride(),
                };
                return obj;
              }
            }
            tmp26[0] = tmp4.activityUrlOverrideInputContainer;
            const TextInput = tmp(6098).TextInput;
            if (activityUrlOverride == null) {
              class G {
                constructor() {
                  const obj = {
                    isDeveloperOfThisApp: DeveloperActivityShelfStore.inDevModeForApplication(application.id),
                    activityUrlOverride: DeveloperActivityShelfStore.getActivityUrlOverride(),
                    useActivityUrlOverride: DeveloperActivityShelfStore.getUseActivityUrlOverride(),
                  };
                  return obj;
                }
              }
            }
            const obj7 = {
              placeholder: "e.g. http://192.168.1.1:3000",
              value: activityUrlOverride,
              onChange: DeveloperActivityShelfActionCreatorsAll.setActivityUrlOverride,
            };
            tmp26[1] = closure_11(TextInput, obj7);
            tmp23Result = closure_11(tmp22, tmp26);
          }
          items1[2] = tmp23Result;
          tmp21Result = closure_12(tmp22, obj5);
        }
        cResult[4] = activityUrlOverride;
        cResult[5] = isDeveloperOfThisApp;
        cResult[6] = tmp4.activityUrlOverrideInputContainer;
        cResult[7] = useActivityUrlOverride;
        cResult[8] = tmp21Result;
      } else {
        class G {
          constructor() {
            const obj = {
              isDeveloperOfThisApp: DeveloperActivityShelfStore.inDevModeForApplication(application.id),
              activityUrlOverride: DeveloperActivityShelfStore.getActivityUrlOverride(),
              useActivityUrlOverride: DeveloperActivityShelfStore.getUseActivityUrlOverride(),
            };
            return obj;
          }
        }
        const self = this;
        const self2 = this;
        const error = new Error("ActivityDetailContent was passed the Built-in App, which is not supported.");
        throw error;
      }
    }
  : function (application) {
      let HelpMessage;
      let TextInput;
      let _undefined;
      let activityUrlOverride;
      let c1;
      let context;
      let disabled;
      let entrypoint;
      let getItemSubtitleForMaxPlayersShort;
      let hasCommands;
      let intl;
      let intl2;
      let isDeveloperOfThisApp;
      let items1;
      let items3;
      let items4;
      let items5;
      let items7;
      let items8;
      let num2;
      let num5;
      let obj14;
      let obj19;
      let obj21;
      let obj22;
      let obj23;
      let obj25;
      let obj30;
      let obj8;
      let onActivityItemSelected;
      let reason;
      let result;
      let sectionName;
      let tmp48;
      let tmp5Result3;
      let tmp5Result4;
      let tmp8;
      let useActivityUrlOverride;
      application = application.application;
      ({ context, entrypoint } = application);
      importDefault = undefined;
      ({ sectionName, onActivityItemSelected, hasCommands } = application);
      const tmp = closure_15();
      let obj = application(10994);
      const width = obj.useRequiredAppLauncherContext().width;
      let obj2 = application(9001);
      const getPrimaryAppCommand = obj2.useGetPrimaryAppCommand(context, application.id);
      const tmp6 = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp6(AnalyticsLocationDefault.APP_DETAIL).analyticsLocations;
      [tmp8, c1] = react.useState(undefined);
      _slicedToArray(react.useState(undefined), 2);
      const callback = react.useCallback((nativeEvent) => {
        _undefined(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.width));
      }, []);
      const obj3 = application(5912);
      const isScreenLandscape = obj3.useIsScreenLandscape();
      let detailsContainerLandscape = entrypoint !== application(8932).AppLauncherEntrypoint.VOICE && isScreenLandscape;
      const items = [DeveloperActivityShelfStore];
      const tmp2Result = application(504);
      const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items, () => {
        const obj = {
          isDeveloperOfThisApp: DeveloperActivityShelfStore.inDevModeForApplication(application.id),
          activityUrlOverride: DeveloperActivityShelfStore.getActivityUrlOverride(),
          useActivityUrlOverride: DeveloperActivityShelfStore.getUseActivityUrlOverride(),
        };
        return obj;
      });
      ({ isDeveloperOfThisApp, activityUrlOverride, useActivityUrlOverride } = stateFromStoresObject);
      const tmp2Result7 = application(8794);
      if (tmp2Result7.isRealApplication(application)) {
        let tmp35Result;
        let tmp31;
        let num = application instanceof ApplicationRecord ? application.maxParticipants : application.max_participants;
        if (num == null) {
          num = 0;
        }
        let tmp18Result = null;
        if (isDeveloperOfThisApp) {
          const obj4 = { marginTop: PX_12, marginBottom: num2 };
          num2 = 0;
          if (!useActivityUrlOverride) {
            num2 = -PX_12;
          }
          const obj5 = { style: obj4, children: items1 };
          items1 = [closure_11(application(5988).TableRowDivider, {}), ,];
          const obj6 = {
            label: intl.string(application(1126).t["3TSGuD"]),
            value: useActivityUrlOverride,
            onValueChange: DeveloperActivityShelfActionCreatorsAll.toggleUseActivityUrlOverride,
            end: true,
          };
          const TableSwitchRow = tmp2(6698).TableSwitchRow;
          intl = tmp2(1126).intl;
          items1[1] = closure_11(TableSwitchRow, obj6);
          let tmp20Result = null;
          if (useActivityUrlOverride) {
            const obj7 = { style: tmp.activityUrlOverrideInputContainer, children: closure_11(TextInput, obj8) };
            TextInput = tmp2(6098).TextInput;
            obj8 = {
              placeholder: "e.g. http://192.168.1.1:3000",
              value: activityUrlOverride,
              onChange: DeveloperActivityShelfActionCreatorsAll.setActivityUrlOverride,
            };
            tmp20Result = closure_11(View, obj7);
          }
          items1[2] = tmp20Result;
          tmp18Result = closure_12(View, obj5);
        }
        const tmp2Result8 = application(6663);
        const getOrFetchApplication = tmp2Result8.useGetOrFetchApplication(application.id);
        let bot;
        if (getOrFetchApplication != null) {
          bot = getOrFetchApplication.bot;
        }
        const obj9 = { context, applicationId: application.id };
        const tmp2Result9 = application(11671);
        const activityAction = tmp2Result9.useActivityAction(obj9);
        const tmp2Result10 = application(11766);
        const delayedSwapToActivityActionLeave = tmp2Result10.useDelayedSwapToActivityActionLeave(activityAction);
        const obj10 = { context, application, activityAction: delayedSwapToActivityActionLeave };
        ({ reason, disabled } = useIsPrimaryEntryPointDisabledDefault(obj10));
        let id;
        useIsPrimaryEntryPointDisabledDefault(obj10);
        useShowTryItOutButtonInAppLauncherDefault;
        if (bot != null) {
          id = bot.id;
        }
        if (null != getPrimaryAppCommand) {
          const obj12 = {
            applicationId: application.id,
            context,
            sectionName,
            primaryEntryPointCommand: getPrimaryAppCommand,
            disabled,
            onActivityItemSelected,
            entrypoint,
            activityAction: delayedSwapToActivityActionLeave,
          };
          const items2 = [closure_11(closure_17, obj12)];
          let tmp37Result = null;
          if (tmp30) {
            let id1;
            if (bot != null) {
              id1 = bot.id;
            }
            tmp37Result = null;
            if (null != id1) {
              const obj13 = { style: tmp.tryItOutButtonContainerStyle, children: closure_11(closure_18, obj14) };
              obj14 = { botUserId: bot.id, applicationId: application.id, analyticsLocations, context };
              tmp37Result = closure_11(View, obj13);
            }
          }
          const obj15 = { children: items2 };
          items2[1] = tmp37Result;
          const obj16 = { style: tmp.buttonContainer, children: items3 };
          items3 = [closure_12(closure_13, obj15)];
          let tmp37Result2 = null != reason;
          if (tmp37Result2) {
            const obj17 = {
              variant: "text-sm/normal",
              style: tmp.primaryEntryPointButtonDisabledCTA,
              children: reason,
            };
            tmp37Result2 = closure_11(tmp2(4886).Text, obj17);
          }
          items3[1] = tmp37Result2;
          tmp35Result = closure_12(View, obj16);
        } else {
          if (isDeveloperOfThisApp) {
            isDeveloperOfThisApp = !hasCommands;
          }
          if (isDeveloperOfThisApp) {
            const tmp2Result11 = application(8794);
            isDeveloperOfThisApp = tmp2Result11.isActivityApp(application);
          }
          if (isDeveloperOfThisApp) {
            const obj18 = { style: tmp.buttonContainer, children: closure_11(HelpMessage, obj19) };
            obj19 = {
              messageType: application(1188).HelpMessageTypes.WARNING,
              children: intl2.format(application(1126).t["s/3hjE"], {}),
            };
            HelpMessage = tmp2(1188).HelpMessage;
            intl2 = tmp2(1126).intl;
            tmp31 = closure_11(View, obj18);
          }
        }
        const obj20 = { value: analyticsLocations, children: closure_11(View, obj21) };
        obj21 = { style: items4, children: closure_11(View, obj22) };
        items4 = [tmp.container];
        let activityHeroDetailsLandscape = detailsContainerLandscape;
        obj22 = { style: tmp.cardContainer, children: closure_12(View, obj23) };
        const AnalyticsLocationProvider = tmp2(6657).AnalyticsLocationProvider;
        if (detailsContainerLandscape) {
          activityHeroDetailsLandscape = tmp.activityHeroDetailsLandscape;
        }
        obj23 = { style: activityHeroDetailsLandscape, children: items5 };
        const obj24 = { style: tmp48, onLayout: callback, children: closure_11(tmp5Result3, obj25) };
        obj25 = { applicationId: application.id, width: result, contentWidth: tmp8 };
        result = width;
        tmp48 = detailsContainerLandscape && tmp.heroMediaContainerLandscape;
        tmp5Result3 = HeroMediaDefault;
        if (detailsContainerLandscape) {
          result = (65 * width) / 100;
        }
        items5 = [closure_11(View, obj24)];
        const items6 = [tmp.details];
        if (detailsContainerLandscape) {
          detailsContainerLandscape = tmp.detailsContainerLandscape;
        }
        const obj26 = { style: items6, children: items7 };
        items6[1] = detailsContainerLandscape;
        const obj27 = { application };
        items7 = [closure_11(DetailsHeaderDefault, obj27), , , ,];
        const obj28 = { style: tmp.tagList, children: items8 };
        const obj29 = {
          icon: closure_11(application(5873).GroupIcon, obj30),
          tagName: getItemSubtitleForMaxPlayersShort(num5),
          accessibilityLabel: tmp5Result4(num),
        };
        num5 = num;
        obj30 = { style: tmp.tagIcon, size: "xs" };
        getItemSubtitleForMaxPlayersShort = application(11770).getItemSubtitleForMaxPlayersShort;
        application(11770);
        if (num == null) {
          num5 = 0;
        }
        tmp5Result4 = getItemSubtitleForMaxPlayersDefault;
        if (num == null) {
          num = 0;
        }
        items8 = [closure_11(closure_16, obj29, "participants")];
        const tags = application.tags;
        let mapped;
        if (tags != null) {
          mapped = tags.map((tagName) => {
            let intl;
            let obj2;
            const obj = {
              tagName,
              accessibilityLabel: intl.formatToPlainString(application(dependencyMap[19]).t.tXXD6v, obj2),
            };
            intl = application(dependencyMap[19]).intl;
            obj2 = { tagName };
            return closure_1_11(closure_1_16, obj, tagName);
          });
        }
        items8[1] = mapped;
        items7[1] = closure_12(View, obj28);
        items7[2] = tmp35Result;
        items7[3] = tmp31;
        items7[4] = tmp18Result;
        items5[1] = closure_12(View, obj26);
        return closure_11(AnalyticsLocationProvider, obj20);
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("ActivityDetailContent was passed the Built-in App, which is not supported.");
        throw error;
      }
    };
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx",
);

export default tmp4;
