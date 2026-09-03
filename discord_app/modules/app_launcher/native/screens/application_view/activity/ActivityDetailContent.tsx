// discord_app/modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../../../design/components/Text/native/Text.tsx";
import contextDefault from "../../../../../app_analytics/useAnalyticsLocations.tsx";
import QUICK_SWITCHERDefault from "../../../../../app_analytics/AnalyticsLocation.tsx";
import toggleUseActivityUrlOverrideAll from "../../../../../activities/DeveloperActivityShelfActionCreators.tsx";
import closure_4 from "../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_6 from "../../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../../../activities/DeveloperActivityShelfStore.tsx";
import closure_9 from "../../../../../../records/ApplicationRecord.tsx";
import { AnalyticEvents } from "../../../../../../Constants.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function Tag(arg0) {
  ({ tagName, icon, accessibilityLabel } = arg0);
  const tmp = callback5();
  let obj = { style: tmp.tag, accessible: true, accessibilityLabel, children: null };
  const items = [icon];
  obj = { variant: "text-sm/normal", style: tmp.tagText, children: tagName };
  items[1] = callback3(Text.Text, obj);
  obj[3] = items;
  return callback4(View, obj);
}
function PrimaryEntryPointButton(applicationId) {
  applicationId = applicationId.applicationId;
  ({ context, primaryEntryPointCommand } = applicationId);
  const activityAction = applicationId.activityAction;
  let chatInputRef;
  let keyboardCloseReasonRef;
  let callback;
  let handleActivityItemSelected;
  let obj = handleActivityItemSelected;
  ({ sectionName, disabled, onActivityItemSelected, entrypoint } = applicationId);
  const id = handleActivityItemSelected.useId();
  obj1 = applicationId(chatInputRef[11]);
  const requiredAppLauncherContext = obj1.useRequiredAppLauncherContext();
  chatInputRef = requiredAppLauncherContext.chatInputRef;
  keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const items = [chatInputRef, keyboardCloseReasonRef];
  callback = handleActivityItemSelected.useCallback(() => {
    keyboardCloseReasonRef.current = applicationId(chatInputRef[11]).AppLauncherKeyboardCloseReason.ACTIVITY;
    const current = chatInputRef.current;
    if (current != null) {
      current.closeCustomKeyboard();
    }
  }, items);
  obj = { applicationId, context, launchingComponentId: id, onSubmissionComplete: null };
  let tmp7;
  if (activityAction !== applicationId(chatInputRef[13]).ActivityAction.LEAVE) {
    tmp7 = callback;
  }
  obj[3] = tmp7;
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
    () => applicationId(chatInputRef[16]).formatPrimaryEntryPointCommandName(primaryEntryPointCommand.displayName),
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
    obj1 = { size: "lg", loading: null, variant: null, text: null, disabled: null, onPress: null };
    obj1[1] = tmp6(obj).submitting;
    obj1[2] = str;
    obj1[3] = memo;
    obj1[4] = disabled;
    obj1[5] = tmp9;
    tmp10 = callback3(tmp2(tmp3[20]).Button, obj1);
  }
  return tmp10;
}
function TryItOutButton(botUserId) {
  botUserId = botUserId.botUserId;
  const applicationId = botUserId.applicationId;
  const analyticsLocations = botUserId.analyticsLocations;
  dependencyMap = undefined;
  let callback;
  const tmp = callback2(React.useState(false), 2);
  dependencyMap = tmp[1];
  callback = React.useRef(null);
  const items = [botUserId, applicationId, analyticsLocations];
  let str = "primary";
  callback = React.useCallback(
    callback(function* () {
      closure_1 = tmp3;
      obj1 = { application_id: null, button_action: null };
      obj1[0] = closure_1_1;
      obj1[1] = closure_1_0(8448).EntryPointCommandButtonActions.OPEN_APP_DM;
      closure_1_1(695).track(closure_1_10.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, obj1);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        v0(true);
      }, 250);
      dependencyMap = 1;
      const obj8 = closure_1_1(695);
      const obj2 = { recipientIds: null };
      obj2[0] = closure_1_0;
      yield closure_1_1(4491).openPrivateChannel(obj2);
      if (1 === tmp7) {
        dependencyMap = 0;
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        dependencyMap(false);
        c5 = 3;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 0;
          c5 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          closure_0 = arg1;
          const obj5 = { targetApplicationId: null, channelId: null, analyticsLocations: null };
          obj5[0] = closure_1;
          obj5[1] = closure_0;
          obj5[2] = closure_2;
          ref = 3;
          c5 = 1;
          const obj6 = { value: null, done: false };
          obj6[0] = closure_1_1(9532)(obj5);
          return obj6;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        dependencyMap = 0;
      }
      dependencyMap = 0;
      return arg1;
    }),
    items,
  );
  if ("channel" === botUserId.context.type) {
    str = "secondary";
  }
  const obj = { size: "lg", loading: tmp[0], variant: str, text: null, onPress: null };
  const intl = botUserId(1233).intl;
  obj[3] = intl.string(botUserId(1233).t.AUM8hY);
  obj[4] = callback;
  return callback3(botUserId(4929).Button, obj);
}
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PX_12 = ThemesDefault.space.PX_12;
createCacheKey = {
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
createCacheKey = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: ThemesDefault.radii.lg,
  overflow: "hidden",
  gap: ThemesDefault.space.PX_16,
  paddingBottom: PX_12,
};
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexDirection: "row" };
createCacheKey[3] = { width: "65%" };
createCacheKey[4] = { width: "35%" };
createCacheKey[5] = { marginTop: 16, paddingHorizontal: PX_12, rowGap: 4 };
createCacheKey[6] = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: ThemesDefault.space.PX_8,
  columnGap: 4,
  rowGap: 6,
};
let obj1 = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: ThemesDefault.space.PX_8,
  columnGap: 4,
  rowGap: 6,
};
createCacheKey[7] = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: ThemesDefault.radii.round,
  paddingHorizontal: 12,
  paddingVertical: 4,
};
createCacheKey[8] = { top: -1 };
createCacheKey[9] = { marginRight: 4 };
createCacheKey[10] = { paddingTop: 16 };
createCacheKey[11] = { marginTop: -4 };
let obj2 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: ThemesDefault.radii.round,
  paddingHorizontal: 12,
  paddingVertical: 4,
};
createCacheKey[12] = {
  marginTop: ThemesDefault.space.PX_12,
  color: ThemesDefault.colors.TEXT_MUTED,
  textAlign: "center",
};
createCacheKey[13] = { marginTop: 8 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginTop: ThemesDefault.space.PX_12, color: ThemesDefault.colors.TEXT_MUTED, textAlign: "center" };
let result = require("set").fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx",
);

export default function ActivityDetailContent(application) {
  application = application.application;
  ({ context, entrypoint } = application);
  importDefault = undefined;
  ({ sectionName, onActivityItemSelected, hasCommands } = application);
  const tmp = callback5();
  let obj = application(9067);
  const width = obj.useRequiredAppLauncherContext().width;
  obj1 = application(9493);
  const getPrimaryAppCommand = obj1.useGetPrimaryAppCommand(context, application.id);
  const analyticsLocations = contextDefault(QUICK_SWITCHERDefault.APP_DETAIL).analyticsLocations;
  const tmp6 = contextDefault;
  [tmp8, c1] = callback2(React.useState(undefined), 2);
  const callback = React.useCallback((nativeEvent) => {
    _undefined(_undefined(closure_1_3[26])(nativeEvent.nativeEvent.layout.width));
  }, []);
  let obj2 = application(5080);
  const isScreenLandscape = obj2.useIsScreenLandscape();
  let detailsContainerLandscape = entrypoint !== application(8448).AppLauncherEntrypoint.VOICE && isScreenLandscape;
  let tmp2Result = tmp2(586);
  const items = [closure_8];
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items, () => ({
    isDeveloperOfThisApp: closure_1_8.inDevModeForApplication(application.id),
    activityUrlOverride: closure_1_8.getActivityUrlOverride(),
    useActivityUrlOverride: closure_1_8.getUseActivityUrlOverride(),
  }));
  ({ isDeveloperOfThisApp, activityUrlOverride, useActivityUrlOverride } = stateFromStoresObject);
  tmp2Result = tmp2(8157);
  if (tmp2Result.isRealApplication(application)) {
    let num = application instanceof closure_9 ? application.maxParticipants : application.max_participants;
    if (num == null) {
      num = 0;
    }
    let tmp20Result = null;
    if (isDeveloperOfThisApp) {
      obj = { marginTop: null, marginBottom: null };
      obj[0] = PX_12;
      let num2 = 0;
      if (!useActivityUrlOverride) {
        num2 = -PX_12;
      }
      obj = { style: null, children: null };
      obj[1] = num2;
      obj[0] = obj;
      const items1 = [callback3(tmp2(5566).TableRowDivider, {}), ,];
      obj1 = { label: null, value: null, onValueChange: null, end: true };
      let intl = tmp2(1233).intl;
      obj1[0] = intl.string(tmp2(1233).t["3TSGuD"]);
      obj1[1] = useActivityUrlOverride;
      obj1[2] = toggleUseActivityUrlOverrideAll.toggleUseActivityUrlOverride;
      items1[1] = callback3(tmp2(6002).TableSwitchRow, obj1);
      let tmp22Result = null;
      if (useActivityUrlOverride) {
        obj2 = { style: null, children: null };
        obj2[0] = tmp.activityUrlOverrideInputContainer;
        const obj3 = { placeholder: "e.g. http://192.168.1.1:3000", value: null, onChange: null };
        obj3[1] = activityUrlOverride;
        obj3[2] = tmp23(9533).setActivityUrlOverride;
        obj2[1] = tmp22(tmp2(7717).TextInput, obj3);
        tmp22Result = tmp22(tmp21, obj2);
      }
      items1[2] = tmp22Result;
      obj[1] = items1;
      tmp20Result = closure_12(tmp21, obj);
      const tmp20 = closure_12;
      tmp23 = importAll;
    }
    const getOrFetchApplication = tmp2(5968).useGetOrFetchApplication(application.id);
    let bot;
    if (getOrFetchApplication != null) {
      bot = getOrFetchApplication.bot;
    }
    const tmp2Result1 = tmp2(5968);
    const obj4 = { context: null, applicationId: null };
    obj4[0] = context;
    obj4[1] = application.id;
    const activityAction = tmp2(11858).useActivityAction(obj4);
    const tmp2Result2 = tmp2(11858);
    const delayedSwapToActivityActionLeave = tmp2(11942).useDelayedSwapToActivityActionLeave(activityAction);
    const obj5 = { context: null, application: null, activityAction: null };
    obj5[0] = context;
    obj5[1] = application;
    obj5[2] = delayedSwapToActivityActionLeave;
    const tmp2Result3 = tmp2(11942);
    ({ reason, disabled } = tmp5(11943)(obj5));
    const obj6 = { context: null, application: null, botUserId: null };
    obj6[0] = context;
    obj6[1] = application;
    let id;
    let tmp5Result = tmp5(11944);
    if (bot != null) {
      id = bot.id;
    }
    obj6[2] = id;
    if (null != getPrimaryAppCommand) {
      const obj7 = {
        applicationId: null,
        context: null,
        sectionName: null,
        primaryEntryPointCommand: null,
        disabled: null,
        onActivityItemSelected: null,
        entrypoint: null,
        activityAction: null,
      };
      obj7[0] = application.id;
      obj7[1] = context;
      obj7[2] = sectionName;
      obj7[3] = getPrimaryAppCommand;
      obj7[4] = disabled;
      obj7[5] = onActivityItemSelected;
      obj7[6] = entrypoint;
      obj7[7] = delayedSwapToActivityActionLeave;
      const items2 = [callback3(PrimaryEntryPointButton, obj7)];
      let tmp39Result = null;
      if (tmp32) {
        let id1;
        if (bot != null) {
          id1 = bot.id;
        }
        tmp39Result = null;
        if (null != id1) {
          const obj8 = { style: null, children: null };
          obj8[0] = tmp.tryItOutButtonContainerStyle;
          const obj9 = { botUserId: null, applicationId: null, analyticsLocations: null, context: null };
          obj9[0] = bot.id;
          obj9[1] = application.id;
          obj9[2] = analyticsLocations;
          obj9[3] = context;
          obj8[1] = tmp39(TryItOutButton, obj9);
          tmp39Result = tmp39(View, obj8);
        }
      }
      const obj10 = { children: null };
      items2[1] = tmp39Result;
      obj10[0] = items2;
      const obj11 = { style: null, children: null };
      obj11[0] = tmp.buttonContainer;
      const items3 = [closure_12(closure_13, obj10)];
      tmp39Result = null != reason;
      if (tmp39Result) {
        const obj12 = { variant: "text-sm/normal", style: null, children: null };
        obj12[1] = tmp.primaryEntryPointButtonDisabledCTA;
        obj12[2] = reason;
        tmp39Result = tmp39(tmp2(4474).Text, obj12);
      }
      items3[1] = tmp39Result;
      obj11[1] = items3;
      const tmp37Result = closure_12(View, obj11);
      const tmp38 = closure_13;
      const tmp45 = View;
    } else {
      if (isDeveloperOfThisApp) {
        isDeveloperOfThisApp = !hasCommands;
      }
      if (isDeveloperOfThisApp) {
        isDeveloperOfThisApp = tmp2(8157).isEmbeddedApp(application);
        const tmp2Result4 = tmp2(8157);
      }
      if (isDeveloperOfThisApp) {
        const obj13 = { style: null, children: null };
        obj13[0] = tmp.buttonContainer;
        const obj14 = { messageType: null, children: null };
        obj14[0] = tmp2(1296).HelpMessageTypes.WARNING;
        const intl2 = tmp2(1233).intl;
        obj14[1] = intl2.format(tmp2(1233).t["s/3hjE"], {});
        obj13[1] = callback3(tmp2(1296).HelpMessage, obj14);
        const tmp33 = callback3(View, obj13);
      }
    }
    const obj15 = { value: null, children: null };
    obj15[0] = analyticsLocations;
    const obj16 = { style: null, children: null };
    const items4 = [tmp.container];
    obj16[0] = items4;
    const obj17 = { style: null, children: null };
    obj17[0] = tmp.cardContainer;
    let activityHeroDetailsLandscape = detailsContainerLandscape;
    if (detailsContainerLandscape) {
      activityHeroDetailsLandscape = tmp.activityHeroDetailsLandscape;
    }
    const obj18 = { style: null, children: null };
    obj18[0] = activityHeroDetailsLandscape;
    let heroMediaContainerLandscape = detailsContainerLandscape;
    if (detailsContainerLandscape) {
      heroMediaContainerLandscape = tmp.heroMediaContainerLandscape;
    }
    const obj19 = { style: null, onLayout: null, children: null };
    obj19[0] = heroMediaContainerLandscape;
    obj19[1] = callback;
    const obj20 = { applicationId: null, width: null, contentWidth: null };
    obj20[0] = application.id;
    let result = width;
    tmp5Result = tmp5(11885);
    if (detailsContainerLandscape) {
      result = (65 * width) / 100;
    }
    obj20[1] = result;
    obj20[2] = tmp8;
    obj19[2] = callback3(tmp5Result, obj20);
    const items5 = [callback3(View, obj19)];
    const items6 = [tmp.details];
    if (detailsContainerLandscape) {
      detailsContainerLandscape = tmp.detailsContainerLandscape;
    }
    const obj21 = { style: null, children: null };
    items6[1] = detailsContainerLandscape;
    obj21[0] = items6;
    const obj22 = { application: null };
    obj22[0] = application;
    const items7 = [callback3(tmp5(9374), obj22), , , ,];
    const obj23 = { style: null, children: null };
    obj23[0] = tmp.tagList;
    const obj24 = { icon: null, tagName: null, accessibilityLabel: null };
    const obj25 = { style: null, size: "xs" };
    obj25[0] = tmp.tagIcon;
    obj24[0] = callback3(tmp2(5043).GroupIcon, obj25);
    const tmp29 = tmp5(11943)(obj5);
    const tmp52 = Tag;
    let num5 = num;
    if (num == null) {
      num5 = 0;
    }
    obj24[1] = tmp2(11945).getItemSubtitleForMaxPlayersShort(num5);
    const tmp2Result5 = tmp2(11945);
    if (num == null) {
      num = 0;
    }
    obj24[2] = tmp5(11945)(num);
    const items8 = [callback3(tmp52, obj24, "participants")];
    const tags = application.tags;
    let mapped;
    if (tags != null) {
      mapped = tags.map((tagName) => {
        let obj = { tagName, accessibilityLabel: null };
        const intl = application(1233).intl;
        obj = { tagName };
        obj[1] = intl.formatToPlainString(application(1233).t.tXXD6v, obj);
        return callback(closure_16, obj, tagName);
      });
    }
    items8[1] = mapped;
    obj23[1] = items8;
    items7[1] = closure_12(View, obj23);
    items7[2] = tmp37Result;
    items7[3] = tmp33;
    items7[4] = tmp20Result;
    obj21[1] = items7;
    items5[1] = closure_12(View, obj21);
    obj18[1] = items5;
    obj17[1] = closure_12(View, obj18);
    obj16[1] = callback3(View, obj17);
    obj15[1] = callback3(View, obj16);
    return callback3(tmp2(5962).AnalyticsLocationProvider, obj15);
  } else {
    const _Error = Error;
    error = new Error("ActivityDetailContent was passed the Built-in App, which is not supported.");
    throw error;
  }
  const tmp7 = callback2(React.useState(undefined), 2);
}
