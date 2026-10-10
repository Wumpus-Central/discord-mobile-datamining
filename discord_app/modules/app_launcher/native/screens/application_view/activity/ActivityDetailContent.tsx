// discord_app/modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../../utils/AnalyticsUtils.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import useAnalyticsLocationsDefault from "../../../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../../../app_analytics/AnalyticsLocation.tsx";
import AppLauncherUtils from "../../../../utils/AppLauncherUtils.tsx";
import AppLauncherContext from "../../../AppLauncherContext.tsx";
import AppLauncherTypes from "../../../../AppLauncherTypes.tsx";
import roundToNearestPixelDefault from "../../../../../voice_panel/native/utils/roundToNearestPixel.tsx";
import DeveloperActivityShelfActionCreatorsAll from "../../../../../activities/DeveloperActivityShelfActionCreators.tsx";
import useActivityShelfItem from "../../../../../activities/utils/useActivityShelfItem.tsx";
import asyncGeneratorStep from "../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import DeveloperActivityShelfStore from "../../../../../activities/DeveloperActivityShelfStore.tsx";
import ApplicationRecord from "../../../../../../records/ApplicationRecord.tsx";

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(5092);
let obj2 = {
  container: { flex: 1 },
  cardContainer: {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.lg,
    overflow: "hidden",
    gap: nativeDefault.space.PX_16,
    paddingBottom: PX_12,
  },
  activityHeroDetailsLandscape: { flexDirection: "row" },
  heroMediaContainerLandscape: { width: "65%" },
  detailsContainerLandscape: { width: "35%" },
  details: { marginTop: 16, paddingHorizontal: PX_12, rowGap: 4 },
  tagList: null,
  tag: null,
  tagText: null,
  tagIcon: null,
  buttonContainer: null,
  activityUrlOverrideInputContainer: null,
  primaryEntryPointButtonDisabledCTA: null,
  tryItOutButtonContainerStyle: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  gap: nativeDefault.space.PX_16,
  paddingBottom: PX_12,
};
obj2.tagList = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: nativeDefault.space.PX_8,
  columnGap: 4,
  rowGap: 6,
};
let obj4 = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: nativeDefault.space.PX_8,
  columnGap: 4,
  rowGap: 6,
};
obj2.tag = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: 12,
  paddingVertical: 4,
};
obj2.tagText = { top: -1 };
obj2.tagIcon = { marginRight: 4 };
obj2.buttonContainer = { paddingTop: 16 };
obj2.activityUrlOverrideInputContainer = { marginTop: -4 };
let obj5 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: 12,
  paddingVertical: 4,
};
obj2.primaryEntryPointButtonDisabledCTA = {
  marginTop: nativeDefault.space.PX_12,
  color: nativeDefault.colors.TEXT_MUTED,
  textAlign: "center",
};
obj2.tryItOutButtonContainerStyle = { marginTop: 8 };
let closure_15 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Tag(arg0) {
      const cResult = c.c(8);
      ({ tagName, icon, accessibilityLabel } = arg0);
      const tmp4 = closure_15();
      if (cResult[0] === tmp4.tagText) {
        if (cResult[1] === tagName) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === accessibilityLabel) {
          if (cResult[4] === icon) {
            if (cResult[5] === tmp4.tag) {
              if (cResult[6] === tmp5) {
                let tmp7 = cResult[7];
              }
              return tmp7;
            }
          }
        }
        const obj2 = { style: tmp4.tag, accessible: true, accessibilityLabel, children: null };
        const items = [icon, tmp5];
        obj2.children = items;
        const tmp10 = __initData(View, obj2);
        cResult[3] = accessibilityLabel;
        cResult[4] = icon;
        cResult[5] = tmp4.tag;
        cResult[6] = tmp5;
        cResult[7] = tmp10;
        tmp7 = tmp10;
      }
      const tmp6 = closure_1_11(Text_Text.Text, { variant: "text-sm/normal", style: tmp4.tagText, children: tagName });
      cResult[0] = tmp4.tagText;
      cResult[1] = tagName;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj3 = { variant: "text-sm/normal", style: tmp4.tagText, children: tagName };
    }
  : function Tag(arg0) {
      ({ tagName, icon, accessibilityLabel } = arg0);
      const tmp = closure_15();
      const obj = { style: tmp.tag, accessible: true, accessibilityLabel, children: null };
      const items = [
        icon,
        closure_1_11(Text_Text.Text, { variant: "text-sm/normal", style: tmp.tagText, children: tagName }),
      ];
      obj.children = items;
      return __initData(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PrimaryEntryPointButton(applicationId) {
      const cResult = applicationId(keyboardCloseReasonRef[11]).c(32);
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
      const id = noop.useId();
      let obj = applicationId(keyboardCloseReasonRef[11]);
      const requiredAppLauncherContext = applicationId(keyboardCloseReasonRef[13]).useRequiredAppLauncherContext();
      const chatInputRef = requiredAppLauncherContext.chatInputRef;
      keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
      if (cResult[0] === chatInputRef) {
        if (cResult[1] === keyboardCloseReasonRef) {
          let tmp6 = cResult[2];
        }
        asyncGeneratorStep = tmp6;
        let tmp7;
        if (activityAction !== tmp(tmp2[14]).ActivityAction.LEAVE) {
          tmp7 = tmp6;
        }
        if (cResult[3] === applicationId) {
          if (cResult[4] === id) {
            if (cResult[5] === context) {
              if (cResult[6] === tmp7) {
                let tmp8 = cResult[7];
              }
              const submitting = activityAction(tmp2[15])(tmp8).submitting;
              if (cResult[8] === applicationId) {
                if (cResult[9] === id) {
                  if (cResult[10] === context) {
                    if (cResult[11] === entrypoint) {
                      if (cResult[12] === onActivityItemSelected) {
                        if (cResult[13] === sectionName) {
                          let tmp10 = cResult[14];
                        }
                        const handleActivityItemSelected = tmp(tmp2[17]).useHandleActivityItemSelected(
                          tmp10,
                        ).handleActivityItemSelected;
                        if (cResult[15] !== primaryEntryPointCommand.displayName) {
                          const result = tmp(tmp2[18]).formatPrimaryEntryPointCommandName(
                            primaryEntryPointCommand.displayName,
                          );
                          cResult[15] = primaryEntryPointCommand.displayName;
                          cResult[16] = result;
                          let tmp11 = result;
                          const tmpResult2 = tmp(tmp2[18]);
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
                        }
                        if (activityAction === tmp(tmp2[14]).ActivityAction.JOIN) {
                          const _Symbol = Symbol;
                          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl3 = tmp(tmp2[19]).intl;
                            const stringResult1 = intl3.string(tmp(tmp2[19]).t.d9PsMj);
                            cResult[19] = stringResult1;
                          }
                        } else {
                          if (activityAction === tmp(tmp2[14]).ActivityAction.LEAVE) {
                            const _Symbol2 = Symbol;
                            class M {
                              constructor() {
                                obj = closure_1(closure_3[20]);
                                obj1 = {
                                  application_id: applicationId,
                                  button_action: closure_0(closure_3[21]).EntryPointCommandButtonActions
                                    .USE_APP_COMMAND,
                                };
                                trackResult = obj.track(
                                  AnalyticEvents.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED,
                                  obj1,
                                );
                                tmp2 = closure_5();
                                if (activityAction === closure_0(closure_3[14]).ActivityAction.LEAVE) {
                                  tmp3 = closure_4;
                                  tmp4 = closure_4();
                                }
                                return;
                              }
                            }
                            if (tmp24 === Symbol.for("react.memo_cache_sentinel")) {
                              const intl2 = tmp(tmp2[19]).intl;
                              const stringResult2 = intl2.string(tmp(tmp2[19]).t["Hi1/aQ"]);
                              class M {
                                constructor() {
                                  obj = closure_1(closure_3[20]);
                                  obj1 = {
                                    application_id: applicationId,
                                    button_action: closure_0(closure_3[21]).EntryPointCommandButtonActions
                                      .USE_APP_COMMAND,
                                  };
                                  trackResult = obj.track(
                                    AnalyticEvents.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED,
                                    obj1,
                                  );
                                  tmp2 = closure_5();
                                  if (activityAction === closure_0(closure_3[14]).ActivityAction.LEAVE) {
                                    tmp3 = closure_4;
                                    tmp4 = closure_4();
                                  }
                                  return;
                                }
                              }
                              cResult[20] = stringResult2;
                            }
                          }
                          if (cResult[21] === activityAction) {
                            if (cResult[22] === applicationId) {
                              if (cResult[23] === handleActivityItemSelected) {
                                class M {
                                  constructor() {
                                    obj = closure_1(closure_3[20]);
                                    obj1 = {
                                      application_id: applicationId,
                                      button_action: closure_0(closure_3[21]).EntryPointCommandButtonActions
                                        .USE_APP_COMMAND,
                                    };
                                    trackResult = obj.track(
                                      AnalyticEvents.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED,
                                      obj1,
                                    );
                                    tmp2 = closure_5();
                                    if (activityAction === closure_0(closure_3[14]).ActivityAction.LEAVE) {
                                      tmp3 = closure_4;
                                      tmp4 = closure_4();
                                    }
                                    return;
                                  }
                                }
                              }
                            }
                          }
                          class M {
                            constructor() {
                              obj = closure_1(closure_3[20]);
                              obj1 = {
                                application_id: applicationId,
                                button_action: closure_0(closure_3[21]).EntryPointCommandButtonActions.USE_APP_COMMAND,
                              };
                              trackResult = obj.track(
                                AnalyticEvents.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED,
                                obj1,
                              );
                              tmp2 = closure_5();
                              if (activityAction === closure_0(closure_3[14]).ActivityAction.LEAVE) {
                                tmp3 = closure_4;
                                tmp4 = closure_4();
                              }
                              return;
                            }
                          }
                          cResult[21] = activityAction;
                          cResult[22] = applicationId;
                          cResult[23] = handleActivityItemSelected;
                          cResult[24] = tmp6;
                          cResult[25] = M;
                        }
                        const tmpResult = tmp(tmp2[17]);
                      }
                    }
                  }
                }
              }
              const obj3 = {
                applicationId,
                context,
                sectionName,
                onActivityItemSelected,
                location: tmp(tmp2[16]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW,
                entrypoint,
                launchingComponentId: id,
              };
              cResult[8] = applicationId;
              cResult[9] = id;
              cResult[10] = context;
              cResult[11] = entrypoint;
              cResult[12] = onActivityItemSelected;
              cResult[13] = sectionName;
              cResult[14] = obj3;
              tmp10 = obj3;
            }
          }
        }
        const obj4 = { applicationId, context, launchingComponentId: id, onSubmissionComplete: tmp7 };
        cResult[3] = applicationId;
        cResult[4] = id;
        cResult[5] = context;
        cResult[6] = tmp7;
        cResult[7] = obj4;
        tmp8 = obj4;
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
  : function PrimaryEntryPointButton(applicationId) {
      applicationId = applicationId.applicationId;
      ({ context, primaryEntryPointCommand } = applicationId);
      const activityAction = applicationId.activityAction;
      let chatInputRef;
      let handleActivityItemSelected;
      ({ sectionName, disabled, onActivityItemSelected, entrypoint } = applicationId);
      const id = handleActivityItemSelected.useId();
      const requiredAppLauncherContext = applicationId(chatInputRef[13]).useRequiredAppLauncherContext();
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
      const obj3 = { applicationId, context, launchingComponentId: id, onSubmissionComplete: null };
      let obj = handleActivityItemSelected;
      let obj2 = applicationId(chatInputRef[13]);
      let tmp7;
      if (activityAction !== applicationId(chatInputRef[14]).ActivityAction.LEAVE) {
        tmp7 = callback;
      }
      obj3.onSubmissionComplete = tmp7;
      const tmp6 = primaryEntryPointCommand(chatInputRef[15]);
      const tmp2Result = applicationId(chatInputRef[17]);
      handleActivityItemSelected = tmp2Result.useHandleActivityItemSelected({
        applicationId,
        context,
        sectionName,
        onActivityItemSelected,
        location: applicationId(chatInputRef[16]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW,
        entrypoint,
        launchingComponentId: id,
      }).handleActivityItemSelected;
      const items1 = [primaryEntryPointCommand.displayName];
      let memo = obj.useMemo(
        () => AppLauncherUtils.formatPrimaryEntryPointCommandName(primaryEntryPointCommand.displayName),
        items1,
      );
      if (memo == null) {
        const intl = tmp2(tmp3[19]).intl;
        memo = intl.string(tmp2(tmp3[19]).t.zKX8Nu);
      }
      if (activityAction === applicationId(chatInputRef[14]).ActivityAction.JOIN) {
        const intl3 = tmp2(tmp3[19]).intl;
        memo = intl3.string(tmp2(tmp3[19]).t.d9PsMj);
        let str = "active";
      } else {
        str = "primary";
        if (activityAction === tmp2(tmp3[14]).ActivityAction.LEAVE) {
          const intl2 = tmp2(tmp3[19]).intl;
          memo = intl2.string(tmp2(tmp3[19]).t["Hi1/aQ"]);
          str = "destructive";
        }
      }
      const items2 = [handleActivityItemSelected, activityAction, callback, applicationId];
      let tmp10 = null;
      if ("channel" === context.type) {
        const obj5 = { size: "lg", loading: tmp6(obj3).submitting, variant: str, text: memo, disabled, onPress: tmp9 };
        tmp10 = closure_11(tmp2(tmp3[22]).Button, obj5);
      }
      return tmp10;
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function TryItOutButton(botUserId) {
      const cResult = require("c").c(9);
      botUserId = botUserId.botUserId;
      _require = botUserId;
      const applicationId = botUserId.applicationId;
      const analyticsLocations = botUserId.analyticsLocations;
      const obj = require("c");
      [tmp5, dependencyMap] = noop.useState(false);
      asyncGeneratorStep = noop.useRef(null);
      if (cResult[0] === analyticsLocations) {
        if (cResult[1] === applicationId) {
          if (cResult[2] === botUserId) {
            let tmp6 = cResult[3];
          }
          let str = "primary";
          if ("channel" === botUserId.context.type) {
            str = "secondary";
          }
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.AUM8hY);
            cResult[4] = stringResult;
            let tmp8 = stringResult;
          } else {
            tmp8 = cResult[4];
          }
          if (cResult[5] === tmp5) {
            if (cResult[6] === tmp6) {
              if (cResult[7] === str) {
                let tmp10 = cResult[8];
              }
              return tmp10;
            }
          }
          const obj2 = { size: "lg", loading: tmp5, variant: str, text: tmp8, onPress: tmp6 };
          const tmp12 = closure_11(tmp(5379).Button, obj2);
          cResult[5] = tmp5;
          cResult[6] = tmp6;
          cResult[7] = str;
          cResult[8] = tmp12;
          tmp10 = tmp12;
        }
      }
      _require = asyncGeneratorStep(async () => {
        applicationId(1265).track(constants.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
          application_id: tmp3,
          button_action: recipientIds(10622).EntryPointCommandButtonActions.OPEN_APP_DM,
        });
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          v0(true);
        }, 250);
        let v0 = 1;
        await applicationId(7014).openPrivateChannel({ recipientIds });
        if (1 === tmp7) {
          v0 = 0;
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
          v0(false);
          c5 = 3;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            c5 = 3;
            return { value, done: true };
          } else {
            closure_128_0 = value;
            c5 = 1;
            return {
              value: applicationId(11613)({ targetApplicationId: tmp3, channelId: closure_128_0, analyticsLocations }),
              done: false,
            };
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          v0 = 0;
        }
        v0 = 0;
        return value;
      });
      function t1() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[0] = analyticsLocations;
      cResult[1] = applicationId;
      cResult[2] = botUserId;
      cResult[3] = t1;
      tmp6 = t1;
      const tmp4 = _slicedToArray(noop.useState(false), 2);
    }
  : function TryItOutButton(botUserId) {
      botUserId = botUserId.botUserId;
      const applicationId = botUserId.applicationId;
      const analyticsLocations = botUserId.analyticsLocations;
      const tmp = _slicedToArray(noop.useState(false), 2);
      dependencyMap = tmp[1];
      asyncGeneratorStep = noop.useRef(null);
      const items = [botUserId, applicationId, analyticsLocations];
      let str = "primary";
      const callback = noop.useCallback(
        asyncGeneratorStep(async () => {
          tmp3(1265).track(constants.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
            application_id: applicationId,
            button_action: botUserId(10622).EntryPointCommandButtonActions.OPEN_APP_DM,
          });
          const _setTimeout = setTimeout;
          closure_4.current = setTimeout(() => {
            dependencyMap(true);
          }, 250);
          await tmp3(7014).openPrivateChannel({ recipientIds: botUserId });
          if (1 === tmp7) {
            dependencyMap = 0;
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_129_4.current);
            closure_129_3(false);
            c5 = 3;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              return { value, done: true };
            } else {
              closure_128_0 = value;
              c4 = 3;
              c5 = 1;
              return {
                value: tmp3(11613)({
                  targetApplicationId: closure_129_1,
                  channelId: closure_128_0,
                  analyticsLocations: closure_129_2,
                }),
                done: false,
              };
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            dependencyMap = 0;
          }
          return value;
        }),
        items,
      );
      if ("channel" === botUserId.context.type) {
        str = "secondary";
      }
      const obj = { size: "lg", loading: tmp[0], variant: str, text: null, onPress: null };
      const intl = botUserId(1126).intl;
      obj.text = intl.string(botUserId(1126).t.AUM8hY);
      obj.onPress = callback;
      return closure_11(botUserId(5379).Button, obj);
    };
ReactCompilerGating = fn(558);
let obj6 = { marginTop: nativeDefault.space.PX_12, color: nativeDefault.colors.TEXT_MUTED, textAlign: "center" };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ActivityDetailContent(application) {
      const cResult = application(576).c(98);
      application = application.application;
      ({ context, sectionName, onActivityItemSelected, entrypoint } = application);
      const tmp4 = closure_15();
      let obj = application(576);
      const width = application(10621).useRequiredAppLauncherContext().width;
      const obj2 = application(10621);
      const getPrimaryAppCommand = application(10859).useGetPrimaryAppCommand(context, application.id);
      const obj3 = application(10859);
      const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.APP_DETAIL).analyticsLocations;
      [r10041, importDefault] = noop.useState(undefined);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function p(nativeEvent) {
          closure_1_1(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.width));
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const tmp7 = _slicedToArray(noop.useState(undefined), 2);
      const isScreenLandscape = application(8326).useIsScreenLandscape();
      entrypoint !== application(10622).AppLauncherEntrypoint.VOICE && isScreenLandscape;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DeveloperActivityShelfStore];
        cResult[1] = items;
        let tmp11 = items;
      } else {
        tmp11 = cResult[1];
      }
      if (cResult[2] !== application.id) {
        class G {
          constructor() {
            obj = {
              isDeveloperOfThisApp: closure_8.inDevModeForApplication(application.id),
              activityUrlOverride: closure_8.getActivityUrlOverride(),
              useActivityUrlOverride: closure_8.getUseActivityUrlOverride(),
            };
            return obj;
          }
        }
        cResult[2] = application.id;
        cResult[3] = G;
      } else {
        class G {
          constructor() {
            obj = {
              isDeveloperOfThisApp: closure_8.inDevModeForApplication(application.id),
              activityUrlOverride: closure_8.getActivityUrlOverride(),
              useActivityUrlOverride: closure_8.getUseActivityUrlOverride(),
            };
            return obj;
          }
        }
      }
      const tmpResult = application(8326);
      const stateFromStoresObject = application(504).useStateFromStoresObject(tmp11, G);
      ({ isDeveloperOfThisApp, activityUrlOverride, useActivityUrlOverride } = stateFromStoresObject);
      const tmpResult3 = application(504);
      if (tmpResult4.isRealApplication(application)) {
        class G {
          constructor() {
            obj = {
              isDeveloperOfThisApp: closure_8.inDevModeForApplication(application.id),
              activityUrlOverride: closure_8.getActivityUrlOverride(),
              useActivityUrlOverride: closure_8.getUseActivityUrlOverride(),
            };
            return obj;
          }
        }
        if (tmp19 == null) {
          class G {
            constructor() {
              obj = {
                isDeveloperOfThisApp: closure_8.inDevModeForApplication(application.id),
                activityUrlOverride: closure_8.getActivityUrlOverride(),
                useActivityUrlOverride: closure_8.getUseActivityUrlOverride(),
              };
              return obj;
            }
          }
        }
        if (cResult[4] === activityUrlOverride) {
          class G {
            constructor() {
              obj = {
                isDeveloperOfThisApp: closure_8.inDevModeForApplication(application.id),
                activityUrlOverride: closure_8.getActivityUrlOverride(),
                useActivityUrlOverride: closure_8.getUseActivityUrlOverride(),
              };
              return obj;
            }
          }
        }
        let tmp23Result = null;
        if (isDeveloperOfThisApp) {
          class G {
            constructor() {
              obj = {
                isDeveloperOfThisApp: closure_8.inDevModeForApplication(application.id),
                activityUrlOverride: closure_8.getActivityUrlOverride(),
                useActivityUrlOverride: closure_8.getUseActivityUrlOverride(),
              };
              return obj;
            }
          }
          const obj4 = { marginTop: PX_12, marginBottom: null };
          if (!useActivityUrlOverride) {
            class G {
              constructor() {
                obj = {
                  isDeveloperOfThisApp: closure_8.inDevModeForApplication(application.id),
                  activityUrlOverride: closure_8.getActivityUrlOverride(),
                  useActivityUrlOverride: closure_8.getUseActivityUrlOverride(),
                };
                return obj;
              }
            }
          }
          const obj5 = { style: null, children: null };
          obj4.marginBottom = 0;
          obj5.style = obj4;
          const items1 = [closure_11(tmp(6174).TableRowDivider, {}), ,];
          const obj6 = { label: null, value: null, onValueChange: null, end: true };
          let intl = tmp(1126).intl;
          obj6.label = intl.string(tmp(1126).t["3TSGuD"]);
          obj6.value = useActivityUrlOverride;
          obj6.onValueChange = DeveloperActivityShelfActionCreatorsAll.toggleUseActivityUrlOverride;
          items1[1] = closure_11(tmp(6895).TableSwitchRow, obj6);
          let tmp25Result = null;
          if (useActivityUrlOverride) {
            class G {
              constructor() {
                obj = {
                  isDeveloperOfThisApp: closure_8.inDevModeForApplication(application.id),
                  activityUrlOverride: closure_8.getActivityUrlOverride(),
                  useActivityUrlOverride: closure_8.getUseActivityUrlOverride(),
                };
                return obj;
              }
            }
            tmp28[0] = tmp4.activityUrlOverrideInputContainer;
            if (activityUrlOverride == null) {
              class G {
                constructor() {
                  obj = {
                    isDeveloperOfThisApp: closure_8.inDevModeForApplication(application.id),
                    activityUrlOverride: closure_8.getActivityUrlOverride(),
                    useActivityUrlOverride: closure_8.getUseActivityUrlOverride(),
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
            tmp28[1] = closure_11(tmp(6285).TextInput, obj7);
            tmp25Result = closure_11(tmp24, tmp28);
          }
          items1[2] = tmp25Result;
          obj5.children = items1;
          tmp23Result = closure_12(tmp24, obj5);
        }
        cResult[4] = activityUrlOverride;
        cResult[5] = isDeveloperOfThisApp;
        cResult[6] = tmp4.activityUrlOverrideInputContainer;
        cResult[7] = useActivityUrlOverride;
        cResult[8] = tmp23Result;
        tmp19 = application instanceof ApplicationRecord ? application.maxParticipants : application.max_participants;
      } else {
        class G {
          constructor() {
            obj = {
              isDeveloperOfThisApp: closure_8.inDevModeForApplication(application.id),
              activityUrlOverride: closure_8.getActivityUrlOverride(),
              useActivityUrlOverride: closure_8.getUseActivityUrlOverride(),
            };
            return obj;
          }
        }
        const error = new Error("ActivityDetailContent was passed the Built-in App, which is not supported.");
        throw error;
      }
      tmpResult4 = application(9246);
    }
  : function ActivityDetailContent(application) {
      application = application.application;
      ({ context, entrypoint } = application);
      importDefault = undefined;
      ({ sectionName, onActivityItemSelected, hasCommands } = application);
      const tmp = closure_15();
      const width = application(10621).useRequiredAppLauncherContext().width;
      let obj = application(10621);
      const getPrimaryAppCommand = application(10859).useGetPrimaryAppCommand(context, application.id);
      const obj2 = application(10859);
      const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.APP_DETAIL).analyticsLocations;
      [tmp8, c1] = noop.useState(undefined);
      const callback = noop.useCallback((nativeEvent) => {
        _undefined(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.width));
      }, []);
      const tmp7 = _slicedToArray(noop.useState(undefined), 2);
      const isScreenLandscape = application(8326).useIsScreenLandscape();
      let detailsContainerLandscape =
        entrypoint !== application(10622).AppLauncherEntrypoint.VOICE && isScreenLandscape;
      const obj3 = application(8326);
      const items = [DeveloperActivityShelfStore];
      const stateFromStoresObject = application(504).useStateFromStoresObject(items, () => ({
        isDeveloperOfThisApp: DeveloperActivityShelfStore.inDevModeForApplication(application.id),
        activityUrlOverride: DeveloperActivityShelfStore.getActivityUrlOverride(),
        useActivityUrlOverride: DeveloperActivityShelfStore.getUseActivityUrlOverride(),
      }));
      ({ isDeveloperOfThisApp, activityUrlOverride, useActivityUrlOverride } = stateFromStoresObject);
      const tmp2Result = application(504);
      if (tmp2Result7.isRealApplication(application)) {
        let num = application instanceof ApplicationRecord ? application.maxParticipants : application.max_participants;
        if (num == null) {
          num = 0;
        }
        let tmp20Result = null;
        if (isDeveloperOfThisApp) {
          const obj4 = { marginTop: PX_12, marginBottom: null };
          let num2 = 0;
          if (!useActivityUrlOverride) {
            num2 = -PX_12;
          }
          const obj5 = { style: null, children: null };
          obj4.marginBottom = num2;
          obj5.style = obj4;
          const items1 = [closure_11(tmp2(6174).TableRowDivider, {}), ,];
          const obj6 = { label: null, value: null, onValueChange: null, end: true };
          let intl = tmp2(1126).intl;
          obj6.label = intl.string(tmp2(1126).t["3TSGuD"]);
          obj6.value = useActivityUrlOverride;
          obj6.onValueChange = DeveloperActivityShelfActionCreatorsAll.toggleUseActivityUrlOverride;
          items1[1] = closure_11(tmp2(6895).TableSwitchRow, obj6);
          let tmp22Result = null;
          if (useActivityUrlOverride) {
            const obj7 = { style: tmp.activityUrlOverrideInputContainer, children: null };
            const obj8 = {
              placeholder: "e.g. http://192.168.1.1:3000",
              value: activityUrlOverride,
              onChange: DeveloperActivityShelfActionCreatorsAll.setActivityUrlOverride,
            };
            obj7.children = closure_11(tmp2(6285).TextInput, obj8);
            tmp22Result = closure_11(View, obj7);
          }
          items1[2] = tmp22Result;
          obj5.children = items1;
          tmp20Result = closure_12(View, obj5);
        }
        const getOrFetchApplication = tmp2(6857).useGetOrFetchApplication(application.id);
        let bot;
        if (getOrFetchApplication != null) {
          bot = getOrFetchApplication.bot;
        }
        const tmp2Result8 = tmp2(6857);
        const obj9 = { context, applicationId: application.id };
        const activityAction = tmp2(11733).useActivityAction(obj9);
        const tmp2Result9 = tmp2(11733);
        const delayedSwapToActivityActionLeave = tmp2(11828).useDelayedSwapToActivityActionLeave(activityAction);
        const obj10 = { context, application, activityAction: delayedSwapToActivityActionLeave };
        const tmp2Result10 = tmp2(11828);
        ({ reason, disabled } = tmp5(11829)(obj10));
        const obj11 = { context, application, botUserId: null };
        let id;
        tmp5(11830);
        if (bot != null) {
          id = bot.id;
        }
        obj11.botUserId = id;
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
          let tmp39Result = null;
          if (tmp32) {
            let id1;
            if (bot != null) {
              id1 = bot.id;
            }
            tmp39Result = null;
            if (null != id1) {
              const obj13 = { style: tmp.tryItOutButtonContainerStyle, children: null };
              const obj14 = { botUserId: bot.id, applicationId: application.id, analyticsLocations, context };
              obj13.children = closure_11(closure_18, obj14);
              tmp39Result = closure_11(View, obj13);
            }
          }
          const obj15 = { children: null };
          items2[1] = tmp39Result;
          obj15.children = items2;
          const obj16 = { style: tmp.buttonContainer, children: null };
          const items3 = [closure_12(closure_13, obj15)];
          let tmp39Result2 = null != reason;
          if (tmp39Result2) {
            const obj17 = {
              variant: "text-sm/normal",
              style: tmp.primaryEntryPointButtonDisabledCTA,
              children: reason,
            };
            tmp39Result2 = closure_11(tmp2(5088).Text, obj17);
          }
          items3[1] = tmp39Result2;
          obj16.children = items3;
          const tmp37Result = closure_12(View, obj16);
        } else {
          if (isDeveloperOfThisApp) {
            isDeveloperOfThisApp = !hasCommands;
          }
          if (isDeveloperOfThisApp) {
            isDeveloperOfThisApp = tmp2(9246).isActivityApp(application);
            const tmp2Result11 = tmp2(9246);
          }
          if (isDeveloperOfThisApp) {
            const obj18 = { style: tmp.buttonContainer, children: null };
            const obj19 = { type: "warning", message: null, role: "static" };
            const intl2 = tmp2(1126).intl;
            obj19.message = intl2.format(tmp2(1126).t["s/3hjE"], {});
            obj18.children = closure_11(tmp2(7567).InlineNotice, obj19);
            const tmp33 = closure_11(View, obj18);
          }
        }
        const obj20 = { value: analyticsLocations, children: null };
        const obj21 = { style: tmp.container, children: null };
        const obj22 = { style: tmp.cardContainer, children: null };
        let activityHeroDetailsLandscape = detailsContainerLandscape;
        if (detailsContainerLandscape) {
          activityHeroDetailsLandscape = tmp.activityHeroDetailsLandscape;
        }
        const obj23 = { style: activityHeroDetailsLandscape, children: null };
        let heroMediaContainerLandscape = detailsContainerLandscape;
        if (detailsContainerLandscape) {
          heroMediaContainerLandscape = tmp.heroMediaContainerLandscape;
        }
        const obj24 = { style: heroMediaContainerLandscape, onLayout: callback, children: null };
        const obj25 = { applicationId: application.id, width: null, contentWidth: null };
        let result = width;
        const tmp29 = tmp5(11829)(obj10);
        if (detailsContainerLandscape) {
          result = (65 * width) / 100;
        }
        obj25.width = result;
        obj25.contentWidth = tmp8;
        obj24.children = closure_11(tmp5(11769), obj25);
        const items4 = [closure_11(View, obj24)];
        const items5 = [tmp.details];
        if (detailsContainerLandscape) {
          detailsContainerLandscape = tmp.detailsContainerLandscape;
        }
        const obj26 = { style: null, children: null };
        items5[1] = detailsContainerLandscape;
        obj26.style = items5;
        const obj27 = { application };
        const items6 = [closure_11(tmp5(9245), obj27), , , ,];
        const obj28 = { style: tmp.tagList, children: null };
        const obj29 = { icon: null, tagName: null, accessibilityLabel: null };
        const obj30 = { style: tmp.tagIcon, size: "xs" };
        obj29.icon = closure_11(tmp2(8216).GroupIcon, obj30);
        const tmp5Result3 = tmp5(11769);
        let num5 = num;
        if (num == null) {
          num5 = 0;
        }
        obj29.tagName = tmp2(11832).getItemSubtitleForMaxPlayersShort(num5);
        const tmp2Result12 = tmp2(11832);
        if (num == null) {
          num = 0;
        }
        obj29.accessibilityLabel = tmp5(11832)(num);
        const items7 = [closure_11(closure_16, obj29, "participants")];
        const tags = application.tags;
        let mapped;
        if (tags != null) {
          mapped = tags.map((tagName) => {
            const obj = { tagName, accessibilityLabel: null };
            const intl = application(1126).intl;
            obj.accessibilityLabel = intl.formatToPlainString(application(1126).t.tXXD6v, { tagName });
            return closure_1_11(closure_1_16, obj, tagName);
          });
        }
        items7[1] = mapped;
        obj28.children = items7;
        items6[1] = closure_12(View, obj28);
        items6[2] = tmp37Result;
        items6[3] = tmp33;
        items6[4] = tmp20Result;
        obj26.children = items6;
        items4[1] = closure_12(View, obj26);
        obj23.children = items4;
        obj22.children = closure_12(View, obj23);
        obj21.children = closure_11(View, obj22);
        obj20.children = closure_11(View, obj21);
        return closure_11(tmp2(6851).AnalyticsLocationProvider, obj20);
      } else {
        const _Error = Error;
        const error = new Error("ActivityDetailContent was passed the Built-in App, which is not supported.");
        throw error;
      }
      tmp2Result7 = application(9246);
    };
