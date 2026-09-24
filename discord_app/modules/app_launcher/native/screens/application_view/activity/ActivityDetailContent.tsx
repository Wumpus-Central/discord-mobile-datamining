// === Module 12482: ActivityDetailContent ===

// Module 12482 (ActivityDetailContent)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Text_Text from "Text/Text" /* 4825 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7495 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7515 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9484 */;
import AppLauncherTypes from "AppLauncherTypes" /* 9606 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11347 */;
import AppLauncherContext from "AppLauncherContext" /* 11567 */;
import DeveloperActivityShelfActionCreatorsAll from "DeveloperActivityShelfActionCreators" /* 11860 */;
import useActivityShelfItem from "useActivityShelfItem" /* 12399 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 9214 */;
import ApplicationRecord from "ApplicationRecord" /* 2002 */;

require = fn;
function Tag(arg0) {
  ({ tagName, icon, accessibilityLabel } = arg0);
  const tmp = closure_15();
  const obj = { style: tmp.tag, accessible: true, accessibilityLabel, children: null };
  const items = [icon, closure_1_11(Text_Text.Text, { variant: "text-sm/normal", style: tmp.tagText, children: tagName })];
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
  const requiredAppLauncherContext = applicationId(chatInputRef[11]).useRequiredAppLauncherContext();
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
  let obj2 = applicationId(chatInputRef[11]);
  let tmp7;
  if (activityAction !== applicationId(chatInputRef[13]).ActivityAction.LEAVE) {
    tmp7 = callback;
  }
  obj3.onSubmissionComplete = tmp7;
  const tmp6 = primaryEntryPointCommand(chatInputRef[12]);
  const tmp2Result = applicationId(chatInputRef[14]);
  handleActivityItemSelected = tmp2Result.useHandleActivityItemSelected({ applicationId, context, sectionName, onActivityItemSelected, location: applicationId(chatInputRef[15]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW, entrypoint, launchingComponentId: id }).handleActivityItemSelected;
  const items1 = [primaryEntryPointCommand.displayName];
  let memo = obj.useMemo(() => AppLauncherUtils.formatPrimaryEntryPointCommandName(primaryEntryPointCommand.displayName), items1);
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
    const obj5 = { size: "lg", loading: tmp6(obj3).submitting, variant: str, text: memo, disabled, onPress: tmp9 };
    tmp10 = closure_11(tmp2(tmp3[20]).Button, obj5);
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
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    tmp3(1241).track(constants.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, { application_id: applicationId, button_action: botUserId(9606).EntryPointCommandButtonActions.OPEN_APP_DM });
    const _setTimeout = setTimeout;
    closure_4.current = setTimeout(() => {
      dependencyMap(true);
    }, 250);
    await tmp3(4842).openPrivateChannel({ recipientIds: botUserId });
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
        return { value: tmp3(11859)({ targetApplicationId: closure_129_1, channelId: closure_128_0, analyticsLocations: closure_129_2 }), done: false };
      }
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      dependencyMap = 0;
    }
    return value;
  }), items);
  if ("channel" === botUserId.context.type) {
    str = "secondary";
  }
  const obj = { size: "lg", loading: tmp[0], variant: str, text: null, onPress: null };
  const intl = botUserId(1115).intl;
  obj.text = intl.string(botUserId(1115).t.AUM8hY);
  obj.onPress = callback;
  return closure_11(botUserId(5273).Button, obj);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(4829);
let obj2 = { container: { flex: 1 }, cardContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden", gap: nativeDefault.space.PX_16, paddingBottom: PX_12 }, activityHeroDetailsLandscape: { flexDirection: "row" }, heroMediaContainerLandscape: { width: "65%" }, detailsContainerLandscape: { width: "35%" }, details: { marginTop: 16, paddingHorizontal: PX_12, rowGap: 4 }, tagList: null, tag: null, tagText: null, tagIcon: null, buttonContainer: null, activityUrlOverrideInputContainer: null, primaryEntryPointButtonDisabledCTA: null, tryItOutButtonContainerStyle: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden", gap: nativeDefault.space.PX_16, paddingBottom: PX_12 };
obj2.tagList = { display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: nativeDefault.space.PX_8, columnGap: 4, rowGap: 6 };
let obj4 = { display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: nativeDefault.space.PX_8, columnGap: 4, rowGap: 6 };
obj2.tag = { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: 12, paddingVertical: 4 };
obj2.tagText = { top: -1 };
obj2.tagIcon = { marginRight: 4 };
obj2.buttonContainer = { paddingTop: 16 };
obj2.activityUrlOverrideInputContainer = { marginTop: -4 };
let obj5 = { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: 12, paddingVertical: 4 };
obj2.primaryEntryPointButtonDisabledCTA = { marginTop: nativeDefault.space.PX_12, color: nativeDefault.colors.TEXT_MUTED, textAlign: "center" };
obj2.tryItOutButtonContainerStyle = { marginTop: 8 };
let closure_15 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx");

export default function ActivityDetailContent(application) {
  application = application.application;
  ({ context, entrypoint } = application);
  importDefault = undefined;
  ({ sectionName, onActivityItemSelected, hasCommands } = application);
  const tmp = closure_15();
  const width = application(11567).useRequiredAppLauncherContext().width;
  let obj = application(11567);
  const getPrimaryAppCommand = application(9684).useGetPrimaryAppCommand(context, application.id);
  const obj2 = application(9684);
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.APP_DETAIL).analyticsLocations;
  [tmp8, c1] = noop.useState(undefined);
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.width));
  }, []);
  const tmp7 = _slicedToArray(noop.useState(undefined), 2);
  const isScreenLandscape = application(5430).useIsScreenLandscape();
  let detailsContainerLandscape = entrypoint !== application(9606).AppLauncherEntrypoint.VOICE && isScreenLandscape;
  const obj3 = application(5430);
  const items = [DeveloperActivityShelfStore];
  const stateFromStoresObject = application(504).useStateFromStoresObject(items, () => ({ isDeveloperOfThisApp: DeveloperActivityShelfStore.inDevModeForApplication(application.id), activityUrlOverride: DeveloperActivityShelfStore.getActivityUrlOverride(), useActivityUrlOverride: DeveloperActivityShelfStore.getUseActivityUrlOverride() }));
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
      const items1 = [closure_11(tmp2(5907).TableRowDivider, {}), , ];
      const obj6 = { label: null, value: null, onValueChange: null, end: true };
      let intl = tmp2(1115).intl;
      obj6.label = intl.string(tmp2(1115).t["3TSGuD"]);
      obj6.value = useActivityUrlOverride;
      obj6.onValueChange = DeveloperActivityShelfActionCreatorsAll.toggleUseActivityUrlOverride;
      items1[1] = closure_11(tmp2(7533).TableSwitchRow, obj6);
      let tmp22Result = null;
      if (useActivityUrlOverride) {
        const obj7 = { style: tmp.activityUrlOverrideInputContainer, children: null };
        const obj8 = { placeholder: "e.g. http://192.168.1.1:3000", value: activityUrlOverride, onChange: DeveloperActivityShelfActionCreatorsAll.setActivityUrlOverride };
        obj7.children = closure_11(tmp2(6936).TextInput, obj8);
        tmp22Result = closure_11(View, obj7);
      }
      items1[2] = tmp22Result;
      obj5.children = items1;
      tmp20Result = closure_12(View, obj5);
    }
    const getOrFetchApplication = tmp2(7501).useGetOrFetchApplication(application.id);
    let bot;
    if (getOrFetchApplication != null) {
      bot = getOrFetchApplication.bot;
    }
    const tmp2Result8 = tmp2(7501);
    const obj9 = { context, applicationId: application.id };
    const activityAction = tmp2(12399).useActivityAction(obj9);
    const tmp2Result9 = tmp2(12399);
    const delayedSwapToActivityActionLeave = tmp2(12484).useDelayedSwapToActivityActionLeave(activityAction);
    const obj10 = { context, application, activityAction: delayedSwapToActivityActionLeave };
    const tmp2Result10 = tmp2(12484);
    ({ reason, disabled } = tmp5(12485)(obj10));
    const obj11 = { context, application, botUserId: null };
    let id;
    tmp5(12486);
    if (bot != null) {
      id = bot.id;
    }
    obj11.botUserId = id;
    if (null != getPrimaryAppCommand) {
      const obj12 = { applicationId: application.id, context, sectionName, primaryEntryPointCommand: getPrimaryAppCommand, disabled, onActivityItemSelected, entrypoint, activityAction: delayedSwapToActivityActionLeave };
      const items2 = [closure_11(PrimaryEntryPointButton, obj12), ];
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
          obj13.children = closure_11(TryItOutButton, obj14);
          tmp39Result = closure_11(View, obj13);
        }
      }
      const obj15 = { children: null };
      items2[1] = tmp39Result;
      obj15.children = items2;
      const obj16 = { style: tmp.buttonContainer, children: null };
      const items3 = [closure_12(closure_13, obj15), ];
      let tmp39Result2 = null != reason;
      if (tmp39Result2) {
        const obj17 = { variant: "text-sm/normal", style: tmp.primaryEntryPointButtonDisabledCTA, children: reason };
        tmp39Result2 = closure_11(tmp2(4825).Text, obj17);
      }
      items3[1] = tmp39Result2;
      obj16.children = items3;
      const tmp37Result = closure_12(View, obj16);
    } else {
      if (isDeveloperOfThisApp) {
        isDeveloperOfThisApp = !hasCommands;
      }
      if (isDeveloperOfThisApp) {
        isDeveloperOfThisApp = tmp2(9484).isEmbeddedApp(application);
        const tmp2Result11 = tmp2(9484);
      }
      if (isDeveloperOfThisApp) {
        const obj18 = { style: tmp.buttonContainer, children: null };
        const obj19 = { messageType: tmp2(1177).HelpMessageTypes.WARNING, children: null };
        const intl2 = tmp2(1115).intl;
        obj19.children = intl2.format(tmp2(1115).t["s/3hjE"], {});
        obj18.children = closure_11(tmp2(1177).HelpMessage, obj19);
        const tmp33 = closure_11(View, obj18);
      }
    }
    const obj20 = { value: analyticsLocations, children: null };
    const obj21 = { style: null, children: null };
    const items4 = [tmp.container];
    obj21.style = items4;
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
    const tmp29 = tmp5(12485)(obj10);
    if (detailsContainerLandscape) {
      result = 65 * width / 100;
    }
    obj25.width = result;
    obj25.contentWidth = tmp8;
    obj24.children = closure_11(tmp5(12426), obj25);
    const items5 = [closure_11(View, obj24), ];
    const items6 = [tmp.details, ];
    if (detailsContainerLandscape) {
      detailsContainerLandscape = tmp.detailsContainerLandscape;
    }
    const obj26 = { style: null, children: null };
    items6[1] = detailsContainerLandscape;
    obj26.style = items6;
    const obj27 = { application };
    const items7 = [closure_11(tmp5(9483), obj27), , , , ];
    const obj28 = { style: tmp.tagList, children: null };
    const obj29 = { icon: null, tagName: null, accessibilityLabel: null };
    const obj30 = { style: tmp.tagIcon, size: "xs" };
    obj29.icon = closure_11(tmp2(5395).GroupIcon, obj30);
    const tmp5Result3 = tmp5(12426);
    let num5 = num;
    if (num == null) {
      num5 = 0;
    }
    obj29.tagName = tmp2(12488).getItemSubtitleForMaxPlayersShort(num5);
    const tmp2Result12 = tmp2(12488);
    if (num == null) {
      num = 0;
    }
    obj29.accessibilityLabel = tmp5(12488)(num);
    const items8 = [closure_11(Tag, obj29, "participants"), ];
    const tags = application.tags;
    let mapped;
    if (tags != null) {
      mapped = tags.map((tagName) => {
        const obj = { tagName, accessibilityLabel: null };
        const intl = application(1115).intl;
        obj.accessibilityLabel = intl.formatToPlainString(application(1115).t.tXXD6v, { tagName });
        return closure_1_11(Tag, obj, tagName);
      });
    }
    items8[1] = mapped;
    obj28.children = items8;
    items7[1] = closure_12(View, obj28);
    items7[2] = tmp37Result;
    items7[3] = tmp33;
    items7[4] = tmp20Result;
    obj26.children = items7;
    items5[1] = closure_12(View, obj26);
    obj23.children = items5;
    obj22.children = closure_12(View, obj23);
    obj21.children = closure_11(View, obj22);
    obj20.children = closure_11(View, obj21);
    return closure_11(tmp2(7495).AnalyticsLocationProvider, obj20);
  } else {
    const _Error = Error;
    const error = new Error("ActivityDetailContent was passed the Built-in App, which is not supported.");
    throw error;
  }
  tmp2Result7 = application(9484);
};