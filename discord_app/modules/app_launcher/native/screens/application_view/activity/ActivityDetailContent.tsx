// discord_app/modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../../utils/AnalyticsUtils.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import useAnalyticsLocationsDefault from "../../../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../../../app_analytics/AnalyticsLocation.tsx";
import AppLauncherUtils from "../../../../utils/AppLauncherUtils.tsx";
import AppLauncherTypes from "../../../../AppLauncherTypes.tsx";
import DeveloperActivityShelfActionCreatorsAll from "../../../../../activities/DeveloperActivityShelfActionCreators.tsx";
import roundToNearestPixelDefault from "../../../../../voice_panel/native/utils/roundToNearestPixel.tsx";
import AppLauncherContext from "../../../AppLauncherContext.tsx";
import useActivityShelfItem from "../../../../../activities/utils/useActivityShelfItem.tsx";
import asyncGeneratorStep from "../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import DeveloperActivityShelfStore from "../../../../../activities/DeveloperActivityShelfStore.tsx";
import ApplicationRecord from "../../../../../../records/ApplicationRecord.tsx";

require = fn;
function Tag(arg0) {
  ({ tagName, icon, accessibilityLabel } = arg0);
  const tmp = closure_15();
  let obj = { style: tmp.tag, accessible: true, accessibilityLabel, children: null };
  const items = [icon];
  obj = { variant: "text-sm/normal", style: tmp.tagText, children: tagName };
  items[1] = closure_1_11(Text_Text.Text, obj);
  obj.children = items;
  return closure_1_12(View, obj);
}
function PrimaryEntryPointButton(applicationId) {
  applicationId = applicationId.applicationId;
  ({ context, primaryEntryPointCommand } = applicationId);
  const activityAction = applicationId.activityAction;
  let chatInputRef;
  let handleActivityItemSelected;
  ({ sectionName, disabled, onActivityItemSelected, entrypoint } = applicationId);
  const id = handleActivityItemSelected.useId();
  let obj1 = applicationId(chatInputRef[11]);
  const requiredAppLauncherContext = obj1.useRequiredAppLauncherContext();
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
  let obj = { applicationId, context, launchingComponentId: id, onSubmissionComplete: null };
  let tmp7;
  if (activityAction !== applicationId(chatInputRef[13]).ActivityAction.LEAVE) {
    tmp7 = callback;
  }
  obj.onSubmissionComplete = tmp7;
  const tmp6 = primaryEntryPointCommand(chatInputRef[12]);
  obj = {
    applicationId,
    context,
    sectionName,
    onActivityItemSelected,
    location: tmp2(tmp3[15]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW,
    entrypoint,
    launchingComponentId: id,
  };
  handleActivityItemSelected = applicationId(chatInputRef[14]).useHandleActivityItemSelected(
    obj,
  ).handleActivityItemSelected;
  const items1 = [primaryEntryPointCommand.displayName];
  let memo = obj.useMemo(
    () => AppLauncherUtils.formatPrimaryEntryPointCommandName(primaryEntryPointCommand.displayName),
    items1,
  );
  if (memo == null) {
    const intl = tmp2(tmp3[17]).intl;
    memo = intl.string(tmp2(tmp3[17]).t.zKX8Nu);
  }
  if (activityAction === applicationId(chatInputRef[13]).ActivityAction.JOIN) {
    const intl3 = tmp2(tmp3[17]).intl;
    memo = intl3.string(tmp2(tmp3[17]).t.d9PsMj);
    let str = "active";
  } else {
    str = "primary";
    if (activityAction === tmp2(tmp3[13]).ActivityAction.LEAVE) {
      const intl2 = tmp2(tmp3[17]).intl;
      memo = intl2.string(tmp2(tmp3[17]).t["Hi1/aQ"]);
      str = "destructive";
    }
  }
  const items2 = [handleActivityItemSelected, activityAction, callback, applicationId];
  let tmp10 = null;
  if ("channel" === context.type) {
    obj1 = { size: "lg", loading: tmp6(obj).submitting, variant: str, text: memo, disabled, onPress: tmp9 };
    tmp10 = closure_11(tmp2(tmp3[20]).Button, obj1);
  }
  return tmp10;
}
function TryItOutButton(botUserId) {
  botUserId = botUserId.botUserId;
  const applicationId = botUserId.applicationId;
  const analyticsLocations = botUserId.analyticsLocations;
  const tmp = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp[1];
  asyncGeneratorStep = noop.useRef(null);
  const items = [botUserId, applicationId, analyticsLocations];
  let str = "primary";
  const callback = noop.useCallback(
    asyncGeneratorStep(async (arg0, value) => {
      tmp3(1242).track(constants.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
        application_id: applicationId,
        button_action: botUserId(9409).EntryPointCommandButtonActions.OPEN_APP_DM,
      });
      const _setTimeout = setTimeout;
      closure_4.current = setTimeout(() => {
        dependencyMap(true);
      }, 250);
      await tmp3(4573).openPrivateChannel({ recipientIds: botUserId });
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
            value: tmp3(9548)({
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
  const intl = botUserId(1114).intl;
  obj.text = intl.string(botUserId(1114).t.AUM8hY);
  obj.onPress = callback;
  return closure_11(botUserId(4975).Button, obj);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
fn(4560);
let createStyles = {
  container: { flex: 1 },
  cardContainer: null,
  activityHeroDetailsLandscape: null,
  heroMediaContainerLandscape: null,
  detailsContainerLandscape: null,
  details: null,
  tagList: null,
  tag: null,
  tagText: null,
  tagIcon: null,
  buttonContainer: null,
  activityUrlOverrideInputContainer: null,
  primaryEntryPointButtonDisabledCTA: null,
  tryItOutButtonContainerStyle: null,
};
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  gap: nativeDefault.space.PX_16,
  paddingBottom: PX_12,
};
createStyles.cardContainer = createStyles;
createStyles.activityHeroDetailsLandscape = { flexDirection: "row" };
createStyles.heroMediaContainerLandscape = { width: "65%" };
createStyles.detailsContainerLandscape = { width: "35%" };
createStyles.details = { marginTop: 16, paddingHorizontal: PX_12, rowGap: 4 };
createStyles.tagList = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: nativeDefault.space.PX_8,
  columnGap: 4,
  rowGap: 6,
};
let obj1 = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: nativeDefault.space.PX_8,
  columnGap: 4,
  rowGap: 6,
};
createStyles.tag = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: 12,
  paddingVertical: 4,
};
createStyles.tagText = { top: -1 };
createStyles.tagIcon = { marginRight: 4 };
createStyles.buttonContainer = { paddingTop: 16 };
createStyles.activityUrlOverrideInputContainer = { marginTop: -4 };
let obj2 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: 12,
  paddingVertical: 4,
};
createStyles.primaryEntryPointButtonDisabledCTA = {
  marginTop: nativeDefault.space.PX_12,
  color: nativeDefault.colors.TEXT_MUTED,
  textAlign: "center",
};
createStyles.tryItOutButtonContainerStyle = { marginTop: 8 };
let closure_15 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx",
);

export default function ActivityDetailContent(application) {
  application = application.application;
  ({ context, entrypoint } = application);
  importDefault = undefined;
  ({ sectionName, onActivityItemSelected, hasCommands } = application);
  const tmp = closure_15();
  let obj = application(11215);
  const width = obj.useRequiredAppLauncherContext().width;
  let obj1 = application(9571);
  const getPrimaryAppCommand = obj1.useGetPrimaryAppCommand(context, application.id);
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.APP_DETAIL).analyticsLocations;
  [tmp8, c1] = _slicedToArray(noop.useState(undefined), 2);
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.width));
  }, []);
  let obj2 = application(5126);
  const isScreenLandscape = obj2.useIsScreenLandscape();
  let detailsContainerLandscape = entrypoint !== application(9409).AppLauncherEntrypoint.VOICE && isScreenLandscape;
  let tmp2Result = tmp2(504);
  const items = [DeveloperActivityShelfStore];
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items, () => ({
    isDeveloperOfThisApp: DeveloperActivityShelfStore.inDevModeForApplication(application.id),
    activityUrlOverride: DeveloperActivityShelfStore.getActivityUrlOverride(),
    useActivityUrlOverride: DeveloperActivityShelfStore.getUseActivityUrlOverride(),
  }));
  ({ isDeveloperOfThisApp, activityUrlOverride, useActivityUrlOverride } = stateFromStoresObject);
  tmp2Result = tmp2(9289);
  if (tmp2Result.isRealApplication(application)) {
    let num = application instanceof ApplicationRecord ? application.maxParticipants : application.max_participants;
    if (num == null) {
      num = 0;
    }
    let tmp20Result = null;
    if (isDeveloperOfThisApp) {
      obj = { marginTop: PX_12, marginBottom: null };
      let num2 = 0;
      if (!useActivityUrlOverride) {
        num2 = -PX_12;
      }
      obj = { style: null, children: null, marginBottom: num2 };
      obj.style = obj;
      const items1 = [closure_11(tmp2(5602).TableRowDivider, {}), ,];
      obj1 = { label: null, value: null, onValueChange: null, end: true };
      let intl = tmp2(1114).intl;
      obj1.label = intl.string(tmp2(1114).t["3TSGuD"]);
      obj1.value = useActivityUrlOverride;
      obj1.onValueChange = DeveloperActivityShelfActionCreatorsAll.toggleUseActivityUrlOverride;
      items1[1] = closure_11(tmp2(7201).TableSwitchRow, obj1);
      let tmp22Result = null;
      if (useActivityUrlOverride) {
        obj2 = { style: tmp.activityUrlOverrideInputContainer, children: null };
        const obj3 = {
          placeholder: "e.g. http://192.168.1.1:3000",
          value: activityUrlOverride,
          onChange: tmp23(9549).setActivityUrlOverride,
        };
        obj2.children = tmp22(tmp2(6606).TextInput, obj3);
        tmp22Result = tmp22(tmp21, obj2);
      }
      items1[2] = tmp22Result;
      obj.children = items1;
      tmp20Result = closure_12(tmp21, obj);
      tmp23 = importAll;
    }
    const getOrFetchApplication = tmp2(7168).useGetOrFetchApplication(application.id);
    let bot;
    if (getOrFetchApplication != null) {
      bot = getOrFetchApplication.bot;
    }
    const tmp2Result1 = tmp2(7168);
    const obj4 = { context, applicationId: application.id };
    const activityAction = tmp2(12057).useActivityAction(obj4);
    const tmp2Result2 = tmp2(12057);
    const delayedSwapToActivityActionLeave = tmp2(12142).useDelayedSwapToActivityActionLeave(activityAction);
    const obj5 = { context, application, activityAction: delayedSwapToActivityActionLeave };
    const tmp2Result3 = tmp2(12142);
    ({ reason, disabled } = tmp5(12143)(obj5));
    const obj6 = { context, application, botUserId: null };
    let id;
    let tmp5Result = tmp5(12144);
    if (bot != null) {
      id = bot.id;
    }
    obj6.botUserId = id;
    if (null != getPrimaryAppCommand) {
      const obj7 = {
        applicationId: application.id,
        context,
        sectionName,
        primaryEntryPointCommand: getPrimaryAppCommand,
        disabled,
        onActivityItemSelected,
        entrypoint,
        activityAction: delayedSwapToActivityActionLeave,
      };
      const items2 = [closure_11(PrimaryEntryPointButton, obj7)];
      let tmp39Result = null;
      if (tmp32) {
        let id1;
        if (bot != null) {
          id1 = bot.id;
        }
        tmp39Result = null;
        if (null != id1) {
          const obj8 = { style: tmp.tryItOutButtonContainerStyle, children: null };
          const obj9 = { botUserId: bot.id, applicationId: application.id, analyticsLocations, context };
          obj8.children = tmp39(TryItOutButton, obj9);
          tmp39Result = tmp39(View, obj8);
        }
      }
      const obj10 = { children: null };
      items2[1] = tmp39Result;
      obj10.children = items2;
      const obj11 = { style: tmp.buttonContainer, children: null };
      const items3 = [closure_12(closure_13, obj10)];
      tmp39Result = null != reason;
      if (tmp39Result) {
        const obj12 = { variant: "text-sm/normal", style: tmp.primaryEntryPointButtonDisabledCTA, children: reason };
        tmp39Result = tmp39(tmp2(4556).Text, obj12);
      }
      items3[1] = tmp39Result;
      obj11.children = items3;
      const tmp37Result = closure_12(View, obj11);
    } else {
      if (isDeveloperOfThisApp) {
        isDeveloperOfThisApp = !hasCommands;
      }
      if (isDeveloperOfThisApp) {
        isDeveloperOfThisApp = tmp2(9289).isEmbeddedApp(application);
        const tmp2Result4 = tmp2(9289);
      }
      if (isDeveloperOfThisApp) {
        const obj13 = { style: tmp.buttonContainer, children: null };
        const obj14 = { messageType: tmp2(1178).HelpMessageTypes.WARNING, children: null };
        const intl2 = tmp2(1114).intl;
        obj14.children = intl2.format(tmp2(1114).t["s/3hjE"], {});
        obj13.children = closure_11(tmp2(1178).HelpMessage, obj14);
        const tmp33 = closure_11(View, obj13);
      }
    }
    const obj15 = { value: analyticsLocations, children: null };
    const obj16 = { style: null, children: null };
    const items4 = [tmp.container];
    obj16.style = items4;
    const obj17 = { style: tmp.cardContainer, children: null };
    let activityHeroDetailsLandscape = detailsContainerLandscape;
    if (detailsContainerLandscape) {
      activityHeroDetailsLandscape = tmp.activityHeroDetailsLandscape;
    }
    const obj18 = { style: activityHeroDetailsLandscape, children: null };
    let heroMediaContainerLandscape = detailsContainerLandscape;
    if (detailsContainerLandscape) {
      heroMediaContainerLandscape = tmp.heroMediaContainerLandscape;
    }
    const obj19 = { style: heroMediaContainerLandscape, onLayout: callback, children: null };
    const obj20 = { applicationId: application.id, width: null, contentWidth: null };
    let result = width;
    tmp5Result = tmp5(12084);
    if (detailsContainerLandscape) {
      result = (65 * width) / 100;
    }
    obj20.width = result;
    obj20.contentWidth = tmp8;
    obj19.children = closure_11(tmp5Result, obj20);
    const items5 = [closure_11(View, obj19)];
    const items6 = [tmp.details];
    if (detailsContainerLandscape) {
      detailsContainerLandscape = tmp.detailsContainerLandscape;
    }
    const obj21 = { style: null, children: null };
    items6[1] = detailsContainerLandscape;
    obj21.style = items6;
    const obj22 = { application };
    const items7 = [closure_11(tmp5(9288), obj22), , , ,];
    const obj23 = { style: tmp.tagList, children: null };
    const obj24 = { icon: null, tagName: null, accessibilityLabel: null };
    const obj25 = { style: tmp.tagIcon, size: "xs" };
    obj24.icon = closure_11(tmp2(5089).GroupIcon, obj25);
    const tmp29 = tmp5(12143)(obj5);
    const tmp52 = Tag;
    let num5 = num;
    if (num == null) {
      num5 = 0;
    }
    obj24.tagName = tmp2(12146).getItemSubtitleForMaxPlayersShort(num5);
    const tmp2Result5 = tmp2(12146);
    if (num == null) {
      num = 0;
    }
    obj24.accessibilityLabel = tmp5(12146)(num);
    const items8 = [closure_11(tmp52, obj24, "participants")];
    const tags = application.tags;
    let mapped;
    if (tags != null) {
      mapped = tags.map((tagName) => {
        let obj = { tagName, accessibilityLabel: null };
        const intl = application(1114).intl;
        obj = { tagName };
        obj.accessibilityLabel = intl.formatToPlainString(application(1114).t.tXXD6v, obj);
        return closure_1_11(Tag, obj, tagName);
      });
    }
    items8[1] = mapped;
    obj23.children = items8;
    items7[1] = closure_12(View, obj23);
    items7[2] = tmp37Result;
    items7[3] = tmp33;
    items7[4] = tmp20Result;
    obj21.children = items7;
    items5[1] = closure_12(View, obj21);
    obj18.children = items5;
    obj17.children = closure_12(View, obj18);
    obj16.children = closure_11(View, obj17);
    obj15.children = closure_11(View, obj16);
    return closure_11(tmp2(7162).AnalyticsLocationProvider, obj15);
  } else {
    const _Error = Error;
    const error = new Error("ActivityDetailContent was passed the Built-in App, which is not supported.");
    throw error;
  }
  const tmp7 = _slicedToArray(noop.useState(undefined), 2);
}
