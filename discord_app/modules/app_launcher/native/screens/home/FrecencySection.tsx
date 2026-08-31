// === Module 11591: Placeholder ===

// Module 11591 (Placeholder)
import ThemesDefault from "Themes" /* 712 */;
import usePlaceholderWidth from "usePlaceholderWidth" /* 11593 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "participantFromServer" /* 1386 */;
import closure_8 from "initialize" /* 11592 */;
import { FrecencySectionSelection } from "initialize" /* 11592 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
function Placeholder() {
  const tmp = callback4();
  let obj = usePlaceholderWidth;
  const placeholderWidth = obj.usePlaceholderWidth(20, 90);
  obj1 = usePlaceholderWidth;
  obj = { style: tmp.commandContainer, children: null };
  obj = { style: tmp.loadingCommandIcon };
  const placeholderWidth1 = obj1.usePlaceholderWidth(20, 70);
  const items = [callback2(closure_5, obj), ];
  obj1 = { children: null };
  const items1 = [tmp.loadingTextPlaceholder, { width: placeholderWidth }];
  const items2 = [callback2(closure_5, { style: items1 }), ];
  const items3 = [tmp.loadingTextPlaceholderSmall, { width: placeholderWidth1 }];
  items2[1] = callback2(closure_5, { style: items3 });
  obj1[0] = items2;
  items[1] = callback3(closure_5, obj1);
  obj[1] = items;
  return callback3(closure_5, obj);
}
function FrecentActivityOneClickCTA(context) {
  context = context.context;
  const app = context.app;
  let handleActivityItemSelected;
  let obj = context(handleActivityItemSelected[13]);
  const appLauncherContext = obj.useAppLauncherContext();
  obj1 = closure_4;
  ({ entrypoint, onActivityItemSelected } = appLauncherContext);
  let id = closure_4.useId();
  let items = [closure_7];
  const obj3 = context(handleActivityItemSelected[14]);
  [tmp6, tmp7] = callback(context(handleActivityItemSelected[14]).useStateFromStoresArray(items, () => {
    const items = [closure_1_7.isLaunchingActivity(), ];
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    items[1] = closure_1_7.getLaunchState(app.applicationId, id);
    return items;
  }), 2);
  const tmp5 = callback(context(handleActivityItemSelected[14]).useStateFromStoresArray(items, () => {
    const items = [closure_1_7.isLaunchingActivity(), ];
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    items[1] = closure_1_7.getLaunchState(app.applicationId, id);
    return items;
  }), 2);
  obj = { context, applicationId: app.applicationId };
  let isLaunching = null != tmp7;
  const activityAction = context(handleActivityItemSelected[30]).useActivityAction(obj);
  if (isLaunching) {
    isLaunching = tmp7.isLaunching;
  }
  if (isLaunching) {
    isLaunching = tmp7.componentId === id;
  }
  const obj4 = context(handleActivityItemSelected[30]);
  obj = { applicationId: app.applicationId, context, sectionName: tmp(tmp2[15]).AppLauncherSectionName.RECENT_APPS, onActivityItemSelected, location: tmp(tmp2[31]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, entrypoint, launchingComponentId: id, fetchesApplication: false };
  handleActivityItemSelected = context(handleActivityItemSelected[22]).useHandleActivityItemSelected(obj).handleActivityItemSelected;
  const items1 = [handleActivityItemSelected];
  obj1 = { app, disabled: null, submitting: null, onAppSelected: null };
  callback = obj1.useCallback(() => {
    handleActivityItemSelected();
  }, items1);
  if (!tmp6) {
    tmp6 = activityAction === tmp(tmp2[30]).ActivityAction.LEAVE;
  }
  obj1[1] = tmp6;
  obj1[2] = isLaunching;
  obj1[3] = callback;
  return closure_11(FrecentApp, obj1);
}
function FrecentApp(app) {
  app = app.app;
  ({ disabled, submitting } = app);
  if (submitting === undefined) {
    submitting = false;
  }
  const onAppSelected = app.onAppSelected;
  const tmp = callback4();
  if (null == app.section) {
    return null;
  } else {
    const appLauncherIconSource = app(11590).getAppLauncherIconSource(app.section.application);
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
        obj[1] = app(closure_1_2[15]).AppLauncherSectionName.RECENT_APPS;
        onAppSelected(obj);
      }
    };
    let tmp3 = null != appLauncherIconSource;
    if (tmp3) {
      obj = { style: null, source: null };
      obj[0] = tmp.appIcon;
      obj[1] = appLauncherIconSource;
      tmp3 = callback2(onAppSelected(5461), obj);
    }
    const items = [tmp3, ];
    obj = { submitting: null, style: null };
    obj[0] = submitting;
    obj[1] = tmp.submittingOverlay;
    items[1] = callback2(app(11599).SubmittingOverlay, obj);
    obj[6] = items;
    return closure_12(app(5036).PressableOpacity, obj, app.applicationId);
  }
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: null, headerContainer: null, header: null, scrollView: null, scrollViewContentContainer: null, contextMenuIcon: null, appContainer: null, appContainerDisabled: null, commandContainer: null, appIcon: null, loadingCommandIcon: null, loadingTextPlaceholder: null, loadingTextPlaceholderSmall: null, submittingOverlay: null };
createCacheKey = { marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
createCacheKey[2] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[3] = { marginTop: 8, overflow: "visible" };
let obj1 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[4] = { gap: ThemesDefault.space.PX_8 };
createCacheKey[5] = { height: 16, width: 16 };
let obj2 = { gap: ThemesDefault.space.PX_8 };
let merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
createCacheKey[6] = { backgroundColor: ThemesDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: ThemesDefault.radii.lg };
let obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: ThemesDefault.radii.lg };
const merged1 = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
createCacheKey[7] = { backgroundColor: ThemesDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: ThemesDefault.radii.lg, opacity: 0.4 };
let obj4 = { backgroundColor: ThemesDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: ThemesDefault.radii.lg, opacity: 0.4 };
createCacheKey[8] = { backgroundColor: ThemesDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: ThemesDefault.radii.md, paddingLeft: ThemesDefault.space.PX_12, paddingRight: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_12, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: ThemesDefault.space.PX_8 };
let obj5 = { backgroundColor: ThemesDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: ThemesDefault.radii.md, paddingLeft: ThemesDefault.space.PX_12, paddingRight: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_12, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[9] = { width: 60, height: 60, borderRadius: ThemesDefault.radii.lg };
let obj6 = { width: 60, height: 60, borderRadius: ThemesDefault.radii.lg };
createCacheKey[10] = { width: 36, height: 36, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj7 = { width: 36, height: 36, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[11] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start", marginBottom: ThemesDefault.space.PX_4 };
const obj8 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start", marginBottom: ThemesDefault.space.PX_4 };
createCacheKey[12] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start" };
const obj9 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start" };
createCacheKey[13] = { position: "absolute", top: 0, left: 0, width: 60, height: 60, borderRadius: ThemesDefault.radii.lg };
let closure_13 = createCacheKey.createStyles(createCacheKey);
const obj11 = { APPS: 0, [0]: "APPS", COMMANDS: 1, [1]: "COMMANDS" };
let closure_16 = { code: "function FrecencySectionTsx1(){const{withTiming,isRecentsMenuOpen}=this.__closure;return{transform:[{rotate:withTiming(isRecentsMenuOpen?'-180deg':'0deg')}]};}" };
const obj10 = { position: "absolute", top: 0, left: 0, width: 60, height: 60, borderRadius: ThemesDefault.radii.lg };
let result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySection.tsx");

export default function FrecencySection(loading) {
  ({ context: memo, sectionDescriptors: closure_1, commands } = loading);
  loading = loading.loading;
  const apps = loading.apps;
  ({ onAppSelected: closure_5, onCommandSelected: closure_6, onViewAllSelected: closure_7 } = loading);
  closure_8 = undefined;
  let first;
  closure_10 = undefined;
  let first1;
  closure_12 = undefined;
  let callback4;
  closure_14 = undefined;
  let COMMANDS;
  let tmp = callback4();
  closure_8 = tmp;
  let obj = memo(commands[13]);
  obj1 = apps;
  const tmp5 = loading(apps.useState(false), 2);
  first = tmp5[0];
  closure_10 = tmp5[1];
  let obj2 = memo(commands[14]);
  let items = [closure_8];
  const stateFromStores = obj2.useStateFromStores(items, () => selection.getSelection());
  memo(commands[14]);
  [][0] = closure_7;
  if (commands.length > 0) {
    if (stateFromStores === first.COMMANDS) {
      let APPS = COMMANDS.COMMANDS;
      let tmp12 = COMMANDS;
    }
    const tmp4Result = loading(tmp10(APPS), 2);
    first1 = tmp4Result[0];
    closure_12 = tmp4Result[1];
    const tmp16 = obj.useAppLauncherContext().entrypoint === tmp2(tmp3[15]).AppLauncherEntrypoint.VOICE;
    callback4 = tmp16;
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
        let trackWithMetadataResult = memo(commands[16]);
        if (first1 === COMMANDS.APPS) {
          let length = apps.length;
        } else {
          length = commands.length;
        }
        trackWithMetadataResult = { num: null, section_name: null, location: null };
        trackWithMetadataResult[0] = length;
        if (tmp7 === tmp8.APPS) {
          let RECENT_COMMANDS = tmp5(HOME[15]).AppLauncherSectionName.RECENT_APPS;
        } else {
          RECENT_COMMANDS = tmp5(HOME[15]).AppLauncherSectionName.RECENT_COMMANDS;
        }
        trackWithMetadataResult[1] = RECENT_COMMANDS;
        HOME = tmp5(HOME[15]).AppLauncherLocations.HOME;
        trackWithMetadataResult[2] = HOME;
        trackWithMetadataResult = trackWithMetadataResult.trackWithMetadata(lib.APP_LAUNCHER_FRECENTS_SEEN, trackWithMetadataResult);
        tmp7 = first1;
        tmp8 = COMMANDS;
      }
    }, items1);
    const items2 = [apps];
    memo = obj1.useMemo(() => apps.slice(0, 8), items2);
    importDefault = tmp16;
    const items3 = [memo, tmp16];
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
            obj = closure_1_0(closure_1_2[9]);
          }
          tmp = id;
        }
        return tmp;
      });
      return mapped.filter(memo(commands[10]).isNotNullish);
    }, items3);
    importDefault(tmp3[11])(memo1);
    class G {
      constructor() {
        obj = closure_0(commands[18]);
        str = "0deg";
        if (closure_9) {
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
    obj[0] = tmp2(tmp3[18]).withTiming;
    obj[1] = first;
    G.__closure = obj;
    G.__workletHash = 4528534448308;
    G.__initData = closure_16;
    closure_14 = tmp2(tmp3[17]).useAnimatedStyle(G);
    if (0 === commands.length) {
      if (0 === apps.length) {
        return null;
      }
    }
    obj = { label: null, IconComponent: null, action: null };
    let intl = tmp2(tmp3[19]).intl;
    obj[0] = intl.string(tmp2(tmp3[19]).t.XRBNsN);
    let prop;
    if (first1 === tmp12.COMMANDS) {
      prop = tmp2(tmp3[20]).CheckmarkSmallBoldIcon;
    }
    obj[1] = prop;
    obj[2] = function action() {
      callback2(COMMANDS.COMMANDS);
      let obj = memo(commands[21]);
      const result = obj.setFrecencySectionSelection(first.COMMANDS);
      obj = { num: commands.length, section_name: memo(commands[15]).AppLauncherSectionName.RECENT_COMMANDS };
      memo(commands[16]).trackWithMetadata(lib.APP_LAUNCHER_FRECENTS_TOGGLED, obj);
    };
    const items4 = [obj, ];
    obj1 = { label: null, IconComponent: null, action: null };
    const intl2 = tmp2(tmp3[19]).intl;
    obj1[0] = intl2.string(tmp2(tmp3[19]).t.TCAk0p);
    let prop1;
    if (first1 === tmp12.APPS) {
      prop1 = tmp2(tmp3[20]).CheckmarkSmallBoldIcon;
    }
    obj1[1] = prop1;
    obj1[2] = function action() {
      callback2(COMMANDS.APPS);
      let obj = memo(commands[21]);
      const result = obj.setFrecencySectionSelection(first.APPS);
      obj = { num: apps.length, section_name: memo(commands[15]).AppLauncherSectionName.RECENT_APPS };
      memo(commands[16]).trackWithMetadata(lib.APP_LAUNCHER_FRECENTS_TOGGLED, obj);
    };
    items4[1] = obj1;
    const substr = commands.slice(0, 8);
    let mapped = substr.map((type) => {
      closure_0 = type;
      found = found.find((id) => id.id === type.applicationId);
      let obj = memo(commands[22]);
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
        if (type.type === tmp2(tmp3[23]).ApplicationCommandType.PRIMARY_ENTRY_POINT) {
          tmp2Result = tmp2(tmp3[9]);
          let displayName = tmp2Result.formatPrimaryEntryPointCommandName(type.displayName);
        } else {
          displayName = type.displayName;
        }
        obj = { style: null, accessible: true, accessibilityLabel: null, accessibilityRole: "button", onPress: null, children: null };
        obj[0] = selection.commandContainer;
        const _HermesInternal = HermesInternal;
        obj[2] = "" + displayName + " " + sectionName;
        obj[4] = function onPress() {
          return closure_1_6(closure_0, found);
        };
        let tmp10 = null != appLauncherIconSource;
        if (tmp10) {
          obj = { iconSize: 36, iconSource: null };
          obj[1] = appLauncherIconSource;
          tmp10 = first1(callback(tmp3[25]), obj);
        }
        const items = [tmp10, ];
        obj1 = { children: null };
        const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
        obj2[2] = displayName;
        const items1 = [first1(tmp2(tmp3[26]).Text, obj2), ];
        const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: null };
        obj3[2] = sectionName;
        items1[1] = first1(tmp2(tmp3[26]).Text, obj3);
        obj1[0] = items1;
        items[1] = closure_12(closure_1_5, obj1);
        obj[5] = items;
        return closure_12(tmp2(tmp3[24]).PressableScale, obj, type.id);
      }
    });
    let found = mapped.filter(tmp2(tmp3[10]).isNotNullish);
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
          let tmp8 = first1(closure_1_17, obj, applicationId);
        }
        obj = { app: null, onAppSelected: null };
        obj[0] = applicationId;
        obj[1] = closure_5;
        tmp8 = first1(closure_1_18, obj, applicationId.applicationId);
      }
    });
    const filter = mapped1.filter;
    if (0 === commands.length) {
      if (apps.length > 0) {
        COMMANDS = tmp12.APPS;
      }
      let mapped2 = tmp25;
      if (COMMANDS === tmp12.COMMANDS) {
        mapped2 = found;
      }
      obj2 = { style: null, children: null };
      obj2[0] = tmp.container;
      let obj3 = { style: null, children: null };
      obj3[0] = tmp.headerContainer;
      let tmp30 = commands.length > 0;
      if (tmp30) {
        tmp30 = apps.length > 0;
      }
      const obj4 = { enabled: null, items: null, triggerOnTap: true, onOpen: null, onClose: null, children: null };
      obj4[0] = tmp30;
      obj4[1] = items4;
      obj4[3] = function onOpen() {
        return lib(true);
      };
      obj4[4] = function onClose() {
        return lib(false);
      };
      obj4[5] = function children(ref) {
        let obj = { style: selection.header };
        const merged = Object.assign(Object.assign(ref, Object.create(null)));
        obj.ref = ref.ref;
        obj = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", children: null };
        const intl = memo(commands[19]).intl;
        obj[3] = intl.string(memo(commands[19]).t.acSE0h);
        const items = [first1(memo(commands[26]).Text, obj), ];
        let tmp5Result = null;
        if (commands.length > 0) {
          tmp5Result = null;
          if (apps.length > 0) {
            obj = { style: null, children: null };
            obj[0] = closure_14;
            obj1 = { color: "interactive-text-default", style: null };
            obj1[1] = selection.contextMenuIcon;
            obj[1] = tmp5(memo(tmp7[28]).ChevronSmallDownIcon, obj1);
            tmp5Result = tmp5(callback(tmp7[17]).View, obj);
          }
        }
        items[1] = tmp5Result;
        obj.children = items;
        return closure_12(closure_1_5, obj);
      };
      const items5 = [first1(tmp2(tmp3[27]).ContextMenu, obj4), ];
      let tmp31 = COMMANDS === tmp12.APPS;
      if (tmp31) {
        tmp31 = tmp9;
      }
      const obj5 = { disabled: null, onPress: null, accessibilityRole: "button", children: null };
      class G {
        constructor() {
          obj = closure_0(commands[18]);
          str = "0deg";
          if (closure_9) {
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
      obj5[1] = function onPress() {
        return launchingActivity(COMMANDS);
      };
      const obj6 = { variant: "text-sm/medium", color: "text-brand", children: null };
      const intl3 = tmp2(tmp3[19]).intl;
      obj6[2] = intl3.string(tmp2(tmp3[19]).t["/qG8v7"]);
      obj5[3] = first1(tmp2(tmp3[26]).Text, obj6);
      items5[1] = first1(tmp2(tmp3[29]).PressableOpacity, obj5);
      obj3[1] = items5;
      const items6 = [closure_12(closure_5, obj3), ];
      const obj7 = { style: null, contentContainerStyle: null, horizontal: true, showsHorizontalScrollIndicator: false, children: null };
      ({ scrollView: obj13[0], scrollViewContentContainer: obj13[1] } = tmp);
      if (loading) {
        const items7 = [1, 2, 3, 4, 5];
        mapped2 = items7.map((arg0, arg1) => first1(closure_14, {}, arg1));
      }
      obj7[4] = mapped2;
      items6[1] = first1(closure_6, obj7);
      obj2[1] = items6;
      return closure_12(closure_5, obj2);
    }
    COMMANDS = first1;
    if (commands.length > 0) {
      COMMANDS = first1;
      if (0 === apps.length) {
        COMMANDS = tmp12.COMMANDS;
      }
    }
    let tmp2Result = tmp2(tmp3[17]);
  }
  tmp12 = COMMANDS;
  APPS = COMMANDS.APPS;
};
export const SectionItemType = obj11;