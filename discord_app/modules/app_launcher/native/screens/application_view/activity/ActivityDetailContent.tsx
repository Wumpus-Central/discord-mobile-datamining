// === Module 11318: Tag ===

// Module 11318 (Tag)
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import contextDefault from "context" /* 7139 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7159 */;
import toggleUseActivityUrlOverrideAll from "toggleUseActivityUrlOverride" /* 8747 */;
import _modDef9815 from "module_9815" /* 9815 */;
import HeroMediaDefault from "HeroMedia" /* 11260 */;
import useIsPrimaryEntryPointDisabledDefault from "useIsPrimaryEntryPointDisabled" /* 11321 */;
import useShowTryItOutButtonInAppLauncherDefault from "useShowTryItOutButtonInAppLauncher" /* 11322 */;
import getItemSubtitleForMaxPlayersDefault from "getItemSubtitleForMaxPlayers" /* 11324 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import initialize from "initialize" /* 7872 */;
import createExecutable from "createExecutable" /* 4479 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function Tag(arg0) {
  ({ tagName, icon, accessibilityLabel } = arg0);
  const tmp = callback5();
  const items = [icon, ];
  const obj = { variant: "text-sm/normal", style: tmp.tagText, children: tagName };
  items[1] = callback3(Text.Text, obj);
  obj[3] = items;
  return callback4(View, obj);
}
function PrimaryEntryPointButton(applicationId) {
  applicationId = applicationId.applicationId;
  ({ context, primaryEntryPointCommand } = applicationId);
  const activityAction = applicationId.activityAction;
  let chatInputRef;
  let handleActivityItemSelected;
  ({ sectionName, disabled, onActivityItemSelected, entrypoint } = applicationId);
  const id = handleActivityItemSelected.useId();
  obj1 = applicationId(chatInputRef[11]);
  const requiredAppLauncherContext = obj1.useRequiredAppLauncherContext();
  chatInputRef = requiredAppLauncherContext.chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const items = [chatInputRef, keyboardCloseReasonRef];
  const callback = handleActivityItemSelected.useCallback(() => {
    keyboardCloseReasonRef.current = applicationId(chatInputRef[11]).AppLauncherKeyboardCloseReason.ACTIVITY;
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
  obj[3] = tmp7;
  const tmp6 = primaryEntryPointCommand(chatInputRef[12]);
  obj = { applicationId, context, sectionName, onActivityItemSelected, location: tmp2(tmp3[15]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW, entrypoint, launchingComponentId: id };
  handleActivityItemSelected = applicationId(chatInputRef[14]).useHandleActivityItemSelected(obj).handleActivityItemSelected;
  const items1 = [primaryEntryPointCommand.displayName];
  let memo = obj.useMemo(() => applicationId(chatInputRef[16]).formatPrimaryEntryPointCommandName(primaryEntryPointCommand.displayName), items1);
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
  const tmp = callback2(React.useState(false), 2);
  dependencyMap = tmp[1];
  let callback = React.useRef(null);
  const items = [botUserId, applicationId, analyticsLocations];
  let str = "primary";
  callback = React.useCallback(callback(function*() {
    closure_1 = tmp3;
    obj1 = { application_id: null, button_action: null };
    obj1[0] = applicationId;
    obj1[1] = botUserId(9566).EntryPointCommandButtonActions.OPEN_APP_DM;
    applicationId(698).track(closure_1_10.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, obj1);
    const _setTimeout = setTimeout;
    ref.current = setTimeout(() => {
      v0(true);
    }, 250);
    dependencyMap = 1;
    const obj8 = applicationId(698);
    const obj2 = { recipientIds: null };
    obj2[0] = botUserId;
    yield applicationId(4770).openPrivateChannel(obj2);
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
        obj6[0] = applicationId(8746)(obj5);
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
  }), items);
  if ("channel" === botUserId.context.type) {
    str = "secondary";
  }
  const obj = { size: "lg", loading: tmp[0], variant: str, text: null, onPress: null };
  const intl = botUserId(1236).intl;
  obj[3] = intl.string(botUserId(1236).t.AUM8hY);
  obj[4] = callback;
  return callback3(botUserId(4745).Button, obj);
}
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PX_12 = ThemesDefault.space.PX_12;
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg, overflow: "hidden", gap: ThemesDefault.space.PX_16, paddingBottom: PX_12 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexDirection: "row" };
createCacheKey[3] = { width: "65%" };
createCacheKey[4] = { width: "35%" };
createCacheKey[5] = { marginTop: 16, paddingHorizontal: PX_12, rowGap: 4 };
createCacheKey[6] = { display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: ThemesDefault.space.PX_8, columnGap: 4, rowGap: 6 };
createCacheKey[7] = { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round, paddingHorizontal: 12, paddingVertical: 4 };
createCacheKey[8] = { top: -1 };
createCacheKey[9] = { marginRight: 4 };
createCacheKey[10] = { paddingTop: 16 };
createCacheKey[11] = { marginTop: -4 };
createCacheKey[12] = { marginTop: ThemesDefault.space.PX_12, color: ThemesDefault.colors.TEXT_MUTED, textAlign: "center" };
createCacheKey[13] = { marginTop: 8 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx");

export default function ActivityDetailContent(application) {
  application = application.application;
  ({ context, entrypoint } = application);
  ({ sectionName, onActivityItemSelected, hasCommands } = application);
  const tmp = callback5();
  let obj = application(9565);
  const width = obj.useRequiredAppLauncherContext().width;
  obj1 = application(8769);
  const getPrimaryAppCommand = obj1.useGetPrimaryAppCommand(context, application.id);
  const analyticsLocations = contextDefault(QUICK_SWITCHERDefault.APP_DETAIL).analyticsLocations;
  let obj2 = application(8944);
  const isScreenLandscape = obj2.useIsScreenLandscape();
  let detailsContainerLandscape = entrypoint !== application(9566).AppLauncherEntrypoint.VOICE && isScreenLandscape;
  let tmp2Result = tmp2(589);
  const items = [closure_8];
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items, () => ({ isDeveloperOfThisApp: closure_1_8.inDevModeForApplication(application.id), activityUrlOverride: closure_1_8.getActivityUrlOverride(), useActivityUrlOverride: closure_1_8.getUseActivityUrlOverride() }));
  ({ isDeveloperOfThisApp, activityUrlOverride, useActivityUrlOverride } = stateFromStoresObject);
  tmp2Result = tmp2(8447);
  if (tmp2Result.isRealApplication(application)) {
    let num = application instanceof closure_9 ? application.maxParticipants : application.max_participants;
    if (num == null) {
      num = 0;
    }
    let tmp17Result = null;
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
      const items1 = [callback3(tmp2(6287).TableRowDivider, {}), , ];
      obj1 = { label: null, value: null, onValueChange: null, end: true };
      let intl = tmp2(1236).intl;
      obj1[0] = intl.string(tmp2(1236).t["3TSGuD"]);
      obj1[1] = useActivityUrlOverride;
      obj1[2] = toggleUseActivityUrlOverrideAll.toggleUseActivityUrlOverride;
      items1[1] = callback3(tmp2(7178).TableSwitchRow, obj1);
      let tmp19Result = null;
      if (useActivityUrlOverride) {
        obj2 = { style: null, children: null };
        obj2[0] = tmp.activityUrlOverrideInputContainer;
        const obj3 = { placeholder: "e.g. http://192.168.1.1:3000", value: null, onChange: null };
        obj3[1] = activityUrlOverride;
        obj3[2] = toggleUseActivityUrlOverrideAll.setActivityUrlOverride;
        obj2[1] = callback3(tmp2(8071).TextInput, obj3);
        tmp19Result = callback3(View, obj2);
      }
      items1[2] = tmp19Result;
      obj[1] = items1;
      tmp17Result = callback(View, obj);
    }
    const getOrFetchApplication = tmp2(7145).useGetOrFetchApplication(application.id);
    let bot;
    if (getOrFetchApplication != null) {
      bot = getOrFetchApplication.bot;
    }
    const tmp2Result1 = tmp2(7145);
    const obj4 = { context: null, applicationId: null };
    obj4[0] = context;
    obj4[1] = application.id;
    const activityAction = tmp2(11230).useActivityAction(obj4);
    const tmp2Result2 = tmp2(11230);
    const delayedSwapToActivityActionLeave = tmp2(11320).useDelayedSwapToActivityActionLeave(activityAction);
    const obj5 = { context: null, application: null, activityAction: null };
    obj5[0] = context;
    obj5[1] = application;
    obj5[2] = delayedSwapToActivityActionLeave;
    const tmp2Result3 = tmp2(11320);
    ({ reason, disabled } = useIsPrimaryEntryPointDisabledDefault(obj5));
    const obj6 = { context: null, application: null, botUserId: null };
    obj6[0] = context;
    obj6[1] = application;
    let id;
    let tmp5Result = useShowTryItOutButtonInAppLauncherDefault;
    if (bot != null) {
      id = bot.id;
    }
    obj6[2] = id;
    if (null != getPrimaryAppCommand) {
      const obj7 = { applicationId: null, context: null, sectionName: null, primaryEntryPointCommand: null, disabled: null, onActivityItemSelected: null, entrypoint: null, activityAction: null };
      obj7[0] = application.id;
      obj7[1] = context;
      obj7[2] = sectionName;
      obj7[3] = getPrimaryAppCommand;
      obj7[4] = disabled;
      obj7[5] = onActivityItemSelected;
      obj7[6] = entrypoint;
      obj7[7] = delayedSwapToActivityActionLeave;
      const items2 = [callback3(PrimaryEntryPointButton, obj7), ];
      let tmp36Result = null;
      if (tmp29) {
        let id1;
        if (bot != null) {
          id1 = bot.id;
        }
        tmp36Result = null;
        if (null != id1) {
          const obj8 = { style: null, children: null };
          obj8[0] = tmp.tryItOutButtonContainerStyle;
          const obj9 = { botUserId: null, applicationId: null, analyticsLocations: null, context: null };
          obj9[0] = bot.id;
          obj9[1] = application.id;
          obj9[2] = analyticsLocations;
          obj9[3] = context;
          obj8[1] = callback3(TryItOutButton, obj9);
          tmp36Result = callback3(View, obj8);
        }
      }
      const obj10 = { children: null };
      items2[1] = tmp36Result;
      obj10[0] = items2;
      const obj11 = { style: null, children: null };
      obj11[0] = tmp.buttonContainer;
      const items3 = [callback(closure_13, obj10), ];
      tmp36Result = null != reason;
      if (tmp36Result) {
        const obj12 = { variant: "text-sm/normal", style: null, children: null };
        obj12[1] = tmp.primaryEntryPointButtonDisabledCTA;
        obj12[2] = reason;
        tmp36Result = callback3(tmp2(4734).Text, obj12);
      }
      items3[1] = tmp36Result;
      obj11[1] = items3;
      const tmp34Result = callback(View, obj11);
    } else {
      if (isDeveloperOfThisApp) {
        isDeveloperOfThisApp = !hasCommands;
      }
      if (isDeveloperOfThisApp) {
        isDeveloperOfThisApp = tmp2(8447).isEmbeddedApp(application);
        const tmp2Result4 = tmp2(8447);
      }
      if (isDeveloperOfThisApp) {
        const obj13 = { style: null, children: null };
        obj13[0] = tmp.buttonContainer;
        const obj14 = { messageType: null, children: null };
        obj14[0] = tmp2(1297).HelpMessageTypes.WARNING;
        const intl2 = tmp2(1236).intl;
        obj14[1] = intl2.format(tmp2(1236).t["s/3hjE"], {});
        obj13[1] = callback3(tmp2(1297).HelpMessage, obj14);
        const tmp30 = callback3(View, obj13);
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
    const obj19 = { style: null, children: null };
    obj19[0] = heroMediaContainerLandscape;
    const obj20 = { applicationId: null, width: null };
    obj20[0] = application.id;
    let result = width;
    tmp5Result = HeroMediaDefault;
    if (detailsContainerLandscape) {
      result = 65 * width / 100;
    }
    obj20[1] = result;
    obj19[1] = callback3(tmp5Result, obj20);
    const items5 = [callback3(View, obj19), ];
    const items6 = [tmp.details, ];
    if (detailsContainerLandscape) {
      detailsContainerLandscape = tmp.detailsContainerLandscape;
    }
    const obj21 = { style: null, children: null };
    items6[1] = detailsContainerLandscape;
    obj21[0] = items6;
    const obj22 = { application: null };
    obj22[0] = application;
    const items7 = [callback3(_modDef9815, obj22), , , , ];
    const obj23 = { style: null, children: null };
    obj23[0] = tmp.tagList;
    const obj24 = { icon: null, tagName: null, accessibilityLabel: null };
    const obj25 = { style: null, size: "xs" };
    obj25[0] = tmp.tagIcon;
    obj24[0] = callback3(tmp2(6884).GroupIcon, obj25);
    const tmp26 = useIsPrimaryEntryPointDisabledDefault(obj5);
    let num5 = num;
    if (num == null) {
      num5 = 0;
    }
    obj24[1] = tmp2(11324).getItemSubtitleForMaxPlayersShort(num5);
    const tmp2Result5 = tmp2(11324);
    if (num == null) {
      num = 0;
    }
    obj24[2] = getItemSubtitleForMaxPlayersDefault(num);
    const items8 = [callback3(Tag, obj24, "participants"), ];
    const tags = application.tags;
    let mapped;
    if (tags != null) {
      mapped = tags.map((item, index) => {
        const intl = application(1236).intl;
        const obj = { tagName: item };
        obj[1] = intl.formatToPlainString(application(1236).t.tXXD6v, obj);
        return callback(closure_16, obj, item);
      });
    }
    items8[1] = mapped;
    obj23[1] = items8;
    items7[1] = callback(View, obj23);
    items7[2] = tmp34Result;
    items7[3] = tmp30;
    items7[4] = tmp17Result;
    obj21[1] = items7;
    items5[1] = callback(View, obj21);
    obj18[1] = items5;
    obj17[1] = callback(View, obj18);
    obj16[1] = callback3(View, obj17);
    obj15[1] = callback3(View, obj16);
    return callback3(tmp2(7139).AnalyticsLocationProvider, obj15);
  } else {
    const _Error = Error;
    error = new Error("ActivityDetailContent was passed the Built-in App, which is not supported.");
    throw error;
  }
};