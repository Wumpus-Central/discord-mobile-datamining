// discord_app/modules/app_launcher/native/screens/home/FrecencySection.tsx
import ApplicationCommandSectionType from "ApplicationCommandSectionType";
import CONFIG_NEVER_ANIMATE_TIMING from "CONFIG_NEVER_ANIMATE_TIMING";
import get_ActivityIndicator from "collectGuildAnalyticsMetadata";
import participantFromServer from "participantFromServer";
import initialize from "initialize";
import { FrecencySectionSelection } from "initialize";
import { AnalyticEvents } from "ME";
import jsxProd from "CheckmarkSmallBoldIcon";
import createCacheKey from "createCacheKey";

let c5;
let closure_12;
let closure_6;
let unpackModuleId;
const require = arg1;
function Placeholder() {
  const tmp = importDefault(1348)("AppLauncherRecents-native");
  const tmp2 = createCacheKey();
  let obj = require(11242) /* usePlaceholderWidth */;
  const placeholderWidth = obj.usePlaceholderWidth(20, 90);
  let obj1 = require(11242) /* usePlaceholderWidth */;
  const items = [tmp2.commandContainer, ];
  let rowShadow = !tmp;
  const placeholderWidth1 = obj1.usePlaceholderWidth(20, 70);
  if (!tmp) {
    rowShadow = tmp2.rowShadow;
  }
  obj = { style: items, children: null };
  items[1] = rowShadow;
  obj = { style: tmp2.loadingCommandIcon };
  const items1 = [callback2(closure_5, obj), ];
  obj1 = { children: null };
  const items2 = [tmp2.loadingTextPlaceholder, { width: placeholderWidth }];
  const items3 = [callback2(closure_5, { style: items2 }), ];
  const items4 = [tmp2.loadingTextPlaceholderSmall, { width: placeholderWidth1 }];
  items3[1] = callback2(closure_5, { style: items4 });
  obj1[0] = items3;
  items1[1] = closure_12(closure_5, obj1);
  obj[1] = items1;
  return closure_12(closure_5, obj);
}
function FrecentActivityOneClickCTA(context) {
  let entrypoint;
  let onActivityItemSelected;
  let tmp6;
  let tmp7;
  context = context.context;
  const app = context.app;
  let handleActivityItemSelected;
  let obj = context(handleActivityItemSelected[14]);
  const appLauncherContext = obj.useAppLauncherContext();
  let obj1 = CONFIG_NEVER_ANIMATE_TIMING;
  ({ entrypoint, onActivityItemSelected } = appLauncherContext);
  let id = CONFIG_NEVER_ANIMATE_TIMING.useId();
  let items = [participantFromServer];
  const obj3 = context(handleActivityItemSelected[15]);
  [tmp6, tmp7] = callback(context(handleActivityItemSelected[15]).useStateFromStoresArray(items, () => {
    const items = [outer1_7.isLaunchingActivity(), ];
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    items[1] = outer1_7.getLaunchState(app.applicationId, id);
    return items;
  }), 2);
  const tmp5 = callback(context(handleActivityItemSelected[15]).useStateFromStoresArray(items, () => {
    const items = [outer1_7.isLaunchingActivity(), ];
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    items[1] = outer1_7.getLaunchState(app.applicationId, id);
    return items;
  }), 2);
  obj = { context, applicationId: app.applicationId };
  let isLaunching = null != tmp7;
  const activityAction = context(handleActivityItemSelected[31]).useActivityAction(obj);
  if (isLaunching) {
    isLaunching = tmp7.isLaunching;
  }
  if (isLaunching) {
    isLaunching = tmp7.componentId === id;
  }
  const obj4 = context(handleActivityItemSelected[31]);
  obj = { applicationId: app.applicationId, context, sectionName: tmp(tmp2[16]).AppLauncherSectionName.RECENT_APPS, onActivityItemSelected, location: tmp(tmp2[32]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, entrypoint, launchingComponentId: id, fetchesApplication: false };
  handleActivityItemSelected = context(handleActivityItemSelected[23]).useHandleActivityItemSelected(obj).handleActivityItemSelected;
  const items1 = [handleActivityItemSelected];
  obj1 = { app, disabled: null, submitting: null, onAppSelected: null };
  callback = obj1.useCallback(() => {
    handleActivityItemSelected();
  }, items1);
  if (!tmp6) {
    tmp6 = activityAction === tmp(tmp2[31]).ActivityAction.LEAVE;
  }
  obj1[1] = tmp6;
  obj1[2] = isLaunching;
  obj1[3] = callback;
  return closure_11(FrecentApp, obj1);
}
function FrecentApp(app) {
  let disabled;
  let submitting;
  app = app.app;
  ({ disabled, submitting } = app);
  if (submitting === undefined) {
    submitting = false;
  }
  const onAppSelected = app.onAppSelected;
  const tmp = createCacheKey();
  if (null == app.section) {
    return null;
  } else {
    const appLauncherIconSource = app(11239).getAppLauncherIconSource(app.section.application);
    let obj = { style: null, disabled: null, accessible: true, accessibilityLabel: null, accessibilityRole: "button", onPress: null, children: null };
    obj[0] = disabled ? tmp.appContainerDisabled : tmp.appContainer;
    obj[1] = disabled;
    const application = app.section.application;
    let name;
    if (application != null) {
      name = application.name;
    }
    obj[3] = name;
    obj[5] = function onPress() {
      let tmp2 = null != onAppSelected;
      if (tmp2) {
        tmp2 = null != app.section.application;
      }
      if (tmp2) {
        const obj = { application: null, sectionName: null };
        obj[0] = app.section.application;
        obj[1] = app(outer1_2[16]).AppLauncherSectionName.RECENT_APPS;
        onAppSelected(obj);
      }
    };
    let tmp3 = null != appLauncherIconSource;
    if (tmp3) {
      obj = { style: null, source: null };
      obj[0] = tmp.appIcon;
      obj[1] = appLauncherIconSource;
      tmp3 = callback2(onAppSelected(5145), obj);
    }
    const items = [tmp3, ];
    obj = { submitting: null, style: null };
    obj[0] = submitting;
    obj[1] = tmp.submittingOverlay;
    items[1] = callback2(app(11248).SubmittingOverlay, obj);
    obj[6] = items;
    return closure_12(app(4721).PressableOpacity, obj, app.applicationId);
  }
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: null, headerContainer: null, header: null, scrollView: null, scrollViewContentContainer: null, contextMenuIcon: null, appContainer: null, appContainerDisabled: null, commandContainer: null, rowShadow: null, appIcon: null, loadingCommandIcon: null, loadingTextPlaceholder: null, loadingTextPlaceholderSmall: null, submittingOverlay: null };
createCacheKey = { marginBottom: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
createCacheKey[2] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[3] = { marginTop: 8, overflow: "visible" };
let obj1 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[4] = { gap: require("Themes").space.PX_8 };
createCacheKey[5] = { height: 16, width: 16 };
let obj2 = { gap: require("Themes").space.PX_8 };
let merged = Object.assign(require("Themes").shadows.SHADOW_LOW);
createCacheKey[6] = { backgroundColor: require("Themes").colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: require("Themes").radii.lg };
let obj3 = { backgroundColor: require("Themes").colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: require("Themes").radii.lg };
const merged1 = Object.assign(require("Themes").shadows.SHADOW_LOW);
createCacheKey[7] = { backgroundColor: require("Themes").colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: require("Themes").radii.lg, opacity: 0.4 };
let obj4 = { backgroundColor: require("Themes").colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: require("Themes").radii.lg, opacity: 0.4 };
createCacheKey[8] = { backgroundColor: require("Themes").colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: require("Themes").radii.md, paddingLeft: require("Themes").space.PX_12, paddingRight: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_12, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: require("Themes").space.PX_8 };
const merged2 = Object.assign(require("Themes").shadows.SHADOW_LOW);
createCacheKey[9] = {};
let obj5 = { backgroundColor: require("Themes").colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: require("Themes").radii.md, paddingLeft: require("Themes").space.PX_12, paddingRight: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_12, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: require("Themes").space.PX_8 };
let obj6 = {};
createCacheKey[10] = { width: 60, height: 60, borderRadius: require("Themes").radii.lg };
const obj7 = { width: 60, height: 60, borderRadius: require("Themes").radii.lg };
createCacheKey[11] = { width: 36, height: 36, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
const obj8 = { width: 36, height: 36, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[12] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: require("Themes").radii.lg, alignSelf: "flex-start", marginBottom: require("Themes").space.PX_4 };
const obj9 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: require("Themes").radii.lg, alignSelf: "flex-start", marginBottom: require("Themes").space.PX_4 };
createCacheKey[13] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: require("Themes").radii.lg, alignSelf: "flex-start" };
const obj10 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: require("Themes").radii.lg, alignSelf: "flex-start" };
createCacheKey[14] = { position: "absolute", top: 0, left: 0, width: 60, height: 60, borderRadius: require("Themes").radii.lg };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj12 = { APPS: 0, [0]: "APPS", COMMANDS: 1, [1]: "COMMANDS" };
let closure_16 = { code: "function FrecencySectionTsx1(){const{withTiming,isRecentsMenuOpen}=this.__closure;return{transform:[{rotate:withTiming(isRecentsMenuOpen?'-180deg':'0deg')}]};}" };
const obj11 = { position: "absolute", top: 0, left: 0, width: 60, height: 60, borderRadius: require("Themes").radii.lg };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySection.tsx");

export default function FrecencySection(loading) {
  let closure_5;
  let closure_6;
  let participantFromServer;
  let commands;
  let importDefault;
  let memo;
  ({ context: memo, sectionDescriptors: importDefault, commands } = loading);
  loading = loading.loading;
  const apps = loading.apps;
  ({ onAppSelected: closure_5, onCommandSelected: closure_6, onViewAllSelected: participantFromServer } = loading);
  let initialize;
  let FrecencySectionSelection;
  let first;
  let closure_11;
  let first1;
  let createCacheKey;
  let c14;
  let obj12;
  let COMMANDS;
  initialize = importDefault(commands[12])("AppLauncherRecents-native");
  let tmp3 = createCacheKey();
  FrecencySectionSelection = tmp3;
  let obj = memo(commands[14]);
  let obj1 = apps;
  const tmp6 = loading(apps.useState(false), 2);
  first = tmp6[0];
  closure_11 = tmp6[1];
  let obj2 = memo(commands[15]);
  let items = [initialize];
  const stateFromStores = obj2.useStateFromStores(items, () => selection.getSelection());
  memo(commands[15]);
  [][0] = participantFromServer;
  if (commands.length > 0) {
    if (stateFromStores === FrecencySectionSelection.COMMANDS) {
      let APPS = obj12.COMMANDS;
      let tmp13 = obj12;
    }
    let tmp5Result = loading(tmp11(APPS), 2);
    first1 = tmp5Result[0];
    createCacheKey = tmp5Result[1];
    const tmp17 = obj.useAppLauncherContext().entrypoint === tmp4(tmp2[16]).AppLauncherEntrypoint.VOICE;
    c14 = tmp17;
    let items1 = [commands.length, apps.length, loading, first1];
    const effect = obj1.useEffect(() => {
      let tmp = loading;
      if (!loading) {
        let tmp3 = 0 === commands.length;
        if (tmp3) {
          tmp3 = 0 === apps.length;
        }
        tmp = tmp3;
      }
      if (!tmp) {
        let HOME = commands;
        let trackWithMetadataResult = memo(commands[17]);
        if (first1 === constants.APPS) {
          let length = apps.length;
        } else {
          length = commands.length;
        }
        trackWithMetadataResult = { num: null, section_name: null, location: null };
        trackWithMetadataResult[0] = length;
        if (tmp7 === tmp8.APPS) {
          let RECENT_COMMANDS = tmp5(HOME[16]).AppLauncherSectionName.RECENT_APPS;
        } else {
          RECENT_COMMANDS = tmp5(HOME[16]).AppLauncherSectionName.RECENT_COMMANDS;
        }
        trackWithMetadataResult[1] = RECENT_COMMANDS;
        HOME = tmp5(HOME[16]).AppLauncherLocations.HOME;
        trackWithMetadataResult[2] = HOME;
        trackWithMetadataResult = trackWithMetadataResult.trackWithMetadata(first.APP_LAUNCHER_FRECENTS_SEEN, trackWithMetadataResult);
        tmp7 = first1;
        tmp8 = constants;
      }
    }, items1);
    let items2 = [apps];
    memo = obj1.useMemo(() => apps.slice(0, 8), items2);
    importDefault = tmp17;
    const items3 = [memo, tmp17];
    const memo1 = obj1.useMemo(() => {
      const mapped = memo.map((section) => {
        let tmp = null;
        if (null != section.section) {
          let id = null;
          if (null != section.section.application) {
            id = null;
            if (obj.isEmbeddedApp(section.section.application)) {
              id = null;
              if (closure_1) {
                id = section.section.application.id;
              }
            }
            obj = outer1_0(outer1_2[9]);
          }
          tmp = id;
        }
        return tmp;
      });
      return mapped.filter(memo(commands[10]).isNotNullish);
    }, items3);
    importDefault(tmp2[11])(memo1);
    class V {
      constructor() {
        obj = useMemo(commands[19]);
        str = "0deg";
        if (c10) {
          str = "-180deg";
        }
        obj = { transform: null };
        obj1 = { rotate: obj.withTiming(str) };
        items = [];
        items[0] = obj1;
        obj[0] = items;
        return obj;
      }
    }
    obj = { withTiming: null, isRecentsMenuOpen: null };
    obj[0] = tmp4(tmp2[19]).withTiming;
    obj[1] = first;
    V.__closure = obj;
    V.__workletHash = 4528534448308;
    V.__initData = COMMANDS;
    obj12 = tmp4(tmp2[18]).useAnimatedStyle(V);
    if (0 === commands.length) {
      if (0 === apps.length) {
        return null;
      }
    }
    obj = { label: null, IconComponent: null, action: null };
    let intl = tmp4(tmp2[20]).intl;
    obj[0] = intl.string(tmp4(tmp2[20]).t.XRBNsN);
    let prop;
    if (first1 === tmp13.COMMANDS) {
      prop = tmp4(tmp2[21]).CheckmarkSmallBoldIcon;
    }
    obj[1] = prop;
    obj[2] = function action() {
      callback2(constants.COMMANDS);
      let obj = memo(commands[22]);
      const result = obj.setFrecencySectionSelection(_undefined.COMMANDS);
      obj = { num: commands.length, section_name: memo(commands[16]).AppLauncherSectionName.RECENT_COMMANDS };
      memo(commands[17]).trackWithMetadata(first.APP_LAUNCHER_FRECENTS_TOGGLED, obj);
    };
    const items4 = [obj, ];
    obj1 = { label: null, IconComponent: null, action: null };
    const intl2 = tmp4(tmp2[20]).intl;
    obj1[0] = intl2.string(tmp4(tmp2[20]).t.TCAk0p);
    let prop1;
    if (first1 === tmp13.APPS) {
      prop1 = tmp4(tmp2[21]).CheckmarkSmallBoldIcon;
    }
    obj1[1] = prop1;
    obj1[2] = function action() {
      callback2(constants.APPS);
      let obj = memo(commands[22]);
      const result = obj.setFrecencySectionSelection(_undefined.APPS);
      obj = { num: apps.length, section_name: memo(commands[16]).AppLauncherSectionName.RECENT_APPS };
      memo(commands[17]).trackWithMetadata(first.APP_LAUNCHER_FRECENTS_TOGGLED, obj);
    };
    items4[1] = obj1;
    const substr = commands.slice(0, 8);
    let mapped = substr.map((type) => {
      let closure_0 = type;
      found = found.find((id) => id.id === type.applicationId);
      let obj = memo(commands[23]);
      let application;
      if (found != null) {
        application = found.application;
      }
      const appLauncherIconSource = obj.getAppLauncherIconSource(application);
      if (null == found) {
        return null;
      } else {
        let tmp2Result = tmp2(tmp3[9]);
        let FAKE_BUILT_IN_APP = found.application;
        if (FAKE_BUILT_IN_APP == null) {
          FAKE_BUILT_IN_APP = tmp2(tmp3[9]).FAKE_BUILT_IN_APP;
        }
        const sectionName = tmp2Result.getSectionName(FAKE_BUILT_IN_APP);
        if (type.type === tmp2(tmp3[24]).ApplicationCommandType.PRIMARY_ENTRY_POINT) {
          tmp2Result = tmp2(tmp3[9]);
          let displayName = tmp2Result.formatPrimaryEntryPointCommandName(type.displayName);
        } else {
          displayName = type.displayName;
        }
        const items = [_undefined.commandContainer, ];
        let rowShadow = !initialize;
        if (!initialize) {
          rowShadow = _undefined.rowShadow;
        }
        obj = { style: null, accessible: true, accessibilityLabel: null, accessibilityRole: "button", onPress: null, children: null };
        items[1] = rowShadow;
        obj[0] = items;
        const _HermesInternal = HermesInternal;
        obj[2] = "" + displayName + " " + sectionName;
        obj[4] = function onPress() {
          return outer1_6(closure_0, found);
        };
        let tmp10 = null != appLauncherIconSource;
        if (tmp10) {
          obj = { iconSize: 36, iconSource: null };
          obj[1] = appLauncherIconSource;
          tmp10 = callback(tmp17(tmp3[26]), obj);
        }
        const items1 = [tmp10, ];
        const obj1 = { children: null };
        const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
        obj2[2] = displayName;
        const items2 = [callback(tmp2(tmp3[27]).Text, obj2), ];
        const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: null };
        obj3[2] = sectionName;
        items2[1] = callback(tmp2(tmp3[27]).Text, obj3);
        obj1[0] = items2;
        items1[1] = first1(outer1_5, obj1);
        obj[5] = items1;
        return first1(tmp2(tmp3[25]).PressableScale, obj, type.id);
      }
    });
    let found = mapped.filter(tmp4(tmp2[10]).isNotNullish);
    const mapped1 = memo.map((section) => {
      let applicationId = section;
      let tmp = null;
      if (null == section.section) {
        return null;
      } else {
        if (tmp != applicationId.section.application) {
          tmp = undefined;
          let obj = memo(commands[9]);
          obj = { context: null, app: null };
          obj[0] = memo;
          obj[1] = applicationId;
          applicationId = applicationId.applicationId;
          let tmp8 = callback(outer1_17, obj, applicationId);
        }
        obj = { app: null, onAppSelected: null };
        obj[0] = applicationId;
        obj[1] = closure_5;
        tmp8 = callback(outer1_18, obj, applicationId.applicationId);
      }
    });
    const filter = mapped1.filter;
    if (0 === commands.length) {
      if (apps.length > 0) {
        COMMANDS = tmp13.APPS;
      }
      let mapped2 = tmp25;
      if (COMMANDS === tmp13.COMMANDS) {
        mapped2 = found;
      }
      obj2 = { style: null, children: null };
      obj2[0] = tmp3.container;
      let obj3 = { style: null, children: null };
      obj3[0] = tmp3.headerContainer;
      let tmp30 = commands.length > 0;
      if (tmp30) {
        tmp30 = apps.length > 0;
      }
      const obj4 = { enabled: null, items: null, triggerOnTap: true, onOpen: null, onClose: null, children: null };
      obj4[0] = tmp30;
      obj4[1] = items4;
      obj4[3] = function onOpen() {
        return callback(true);
      };
      obj4[4] = function onClose() {
        return callback(false);
      };
      obj4[5] = function children(ref) {
        let obj = { style: _undefined.header };
        const merged = Object.assign(Object.assign(ref, Object.create(null)));
        obj.ref = ref.ref;
        obj = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", children: null };
        const intl = memo(commands[20]).intl;
        obj[3] = intl.string(memo(commands[20]).t.acSE0h);
        const items = [callback(memo(commands[27]).Text, obj), ];
        let tmp5Result = null;
        if (commands.length > 0) {
          tmp5Result = null;
          if (apps.length > 0) {
            obj = { style: null, children: null };
            obj[0] = closure_15;
            const obj1 = { color: "interactive-text-default", style: null };
            obj1[1] = _undefined.contextMenuIcon;
            obj[1] = tmp5(memo(tmp7[29]).ChevronSmallDownIcon, obj1);
            tmp5Result = tmp5(tmp17(tmp7[18]).View, obj);
          }
        }
        items[1] = tmp5Result;
        obj.children = items;
        return first1(outer1_5, obj);
      };
      const items5 = [closure_11(tmp4(tmp2[28]).ContextMenu, obj4), ];
      let tmp31 = COMMANDS === tmp13.APPS;
      if (tmp31) {
        tmp31 = tmp10;
      }
      class V {
        constructor() {
          obj = useMemo(commands[19]);
          str = "0deg";
          if (c10) {
            str = "-180deg";
          }
          obj = { transform: null };
          obj1 = { rotate: obj.withTiming(str) };
          items = [];
          items[0] = obj1;
          obj[0] = items;
          return obj;
        }
      }
      tmp32[0] = tmp31;
      tmp32[1] = function onPress() {
        return launchingActivity(COMMANDS);
      };
      const obj5 = { variant: "text-sm/medium", color: "text-brand", children: null };
      const intl3 = tmp4(tmp2[20]).intl;
      obj5[2] = intl3.string(tmp4(tmp2[20]).t["/qG8v7"]);
      tmp32[3] = closure_11(tmp4(tmp2[27]).Text, obj5);
      items5[1] = closure_11(tmp4(tmp2[30]).PressableOpacity, tmp32);
      obj3[1] = items5;
      const items6 = [first1(closure_5, obj3), ];
      const obj6 = { style: null, contentContainerStyle: null, horizontal: true, showsHorizontalScrollIndicator: false, children: null };
      ({ scrollView: obj12[0], scrollViewContentContainer: obj12[1] } = tmp3);
      if (loading) {
        const items7 = [1, 2, 3, 4, 5];
        mapped2 = items7.map((arg0, arg1) => callback(c14, {}, arg1));
      }
      obj6[4] = mapped2;
      items6[1] = closure_11(closure_6, obj6);
      obj2[1] = items6;
      return first1(closure_5, obj2);
    }
    COMMANDS = first1;
    if (commands.length > 0) {
      COMMANDS = first1;
      if (0 === apps.length) {
        COMMANDS = tmp13.COMMANDS;
      }
    }
    const tmp4Result = tmp4(tmp2[18]);
  }
  tmp13 = obj12;
  APPS = obj12.APPS;
};
export const SectionItemType = obj12;