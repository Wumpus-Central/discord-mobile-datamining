// === Module 12052: FrecencySection ===

// Module 12052 (FrecencySection)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import Text_Text from "Text/Text" /* 4556 */;
import timing from "timing" /* 4561 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9289 */;
import AppLauncherTypes from "AppLauncherTypes" /* 9409 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 11153 */;
import usePlaceholderSize from "usePlaceholderSize" /* 12054 */;
import FrecencySectionStoreActionCreators from "FrecencySectionStoreActionCreators" /* 12055 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import FrecencySectionStore from "FrecencySectionStore" /* 12053 */;

require = fn;
function Placeholder() {
  const tmp = closure_13();
  let obj = usePlaceholderSize;
  const placeholderWidth = obj.usePlaceholderWidth(20, 90);
  let obj1 = usePlaceholderSize;
  obj = { style: tmp.commandContainer, children: null };
  obj = { style: tmp.loadingCommandIcon };
  const placeholderWidth1 = obj1.usePlaceholderWidth(20, 70);
  const items = [closure_1_11(hasOwnProperty, obj), ];
  obj1 = { children: null };
  const obj2 = { style: null };
  const items1 = [tmp.loadingTextPlaceholder, { width: placeholderWidth }];
  obj2.style = items1;
  const items2 = [closure_1_11(hasOwnProperty, obj2), ];
  const obj3 = { style: null };
  const items3 = [tmp.loadingTextPlaceholderSmall, { width: placeholderWidth1 }];
  obj3.style = items3;
  items2[1] = closure_1_11(hasOwnProperty, obj3);
  obj1.children = items2;
  items[1] = closure_1_12(hasOwnProperty, obj1);
  obj.children = items;
  return closure_1_12(hasOwnProperty, obj);
}
function FrecentActivityOneClickCTA(context) {
  context = context.context;
  const app = context.app;
  let handleActivityItemSelected;
  let obj = context(handleActivityItemSelected[13]);
  const appLauncherContext = obj.useAppLauncherContext();
  let obj1 = noop;
  ({ entrypoint, onActivityItemSelected } = appLauncherContext);
  let id = noop.useId();
  let items = [EmbeddedActivitiesStore];
  const obj3 = context(handleActivityItemSelected[14]);
  [tmp6, tmp7] = _slicedToArray(context(handleActivityItemSelected[14]).useStateFromStoresArray(items, () => {
    const items = [EmbeddedActivitiesStore.isLaunchingActivity(), ];
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    items[1] = EmbeddedActivitiesStore.getLaunchState(app.applicationId, id);
    return items;
  }), 2);
  const tmp5 = _slicedToArray(context(handleActivityItemSelected[14]).useStateFromStoresArray(items, () => {
    const items = [EmbeddedActivitiesStore.isLaunchingActivity(), ];
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    items[1] = EmbeddedActivitiesStore.getLaunchState(app.applicationId, id);
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
  const callback = obj1.useCallback(() => {
    handleActivityItemSelected();
  }, items1);
  if (!tmp6) {
    tmp6 = activityAction === tmp(tmp2[30]).ActivityAction.LEAVE;
  }
  obj1.disabled = tmp6;
  obj1.submitting = isLaunching;
  obj1.onAppSelected = callback;
  return closure_11(FrecentApp, obj1);
}
function FrecentApp(app) {
  app = app.app;
  ({ disabled, submitting } = app);
  if (submitting === undefined) {
    submitting = false;
  }
  const onAppSelected = app.onAppSelected;
  const tmp = closure_13();
  if (null == app.section) {
    return null;
  } else {
    const appLauncherIconSource = app(12051).getAppLauncherIconSource(app.section.application);
    let obj = { style: disabled ? tmp.appContainerDisabled : tmp.appContainer, disabled, accessible: true, accessibilityLabel: null, accessibilityRole: "button", onPress: null, children: null };
    const application = app.section.application;
    let name;
    if (application != null) {
      name = application.name;
    }
    obj.accessibilityLabel = name;
    obj.onPress = function onPress() {
      let tmp2 = null != onAppSelected;
      if (tmp2) {
        tmp2 = null != app.section.application;
      }
      if (tmp2) {
        const obj = { application: app.section.application, sectionName: AppLauncherTypes.AppLauncherSectionName.RECENT_APPS };
        onAppSelected(obj);
      }
    };
    let tmp3 = null != appLauncherIconSource;
    if (tmp3) {
      obj = { style: tmp.appIcon, source: appLauncherIconSource };
      tmp3 = closure_11(onAppSelected(5587), obj);
    }
    const items = [tmp3, ];
    obj = { submitting, style: tmp.submittingOverlay };
    items[1] = closure_11(app(12060).SubmittingOverlay, obj);
    obj.children = items;
    return closure_12(app(5123).PressableOpacity, obj, app.applicationId);
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const FrecencySectionSelection = fn(12053).FrecencySectionSelection;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { container: null, headerContainer: null, header: null, scrollView: null, scrollViewContentContainer: null, contextMenuIcon: null, appContainer: null, appContainerDisabled: null, commandContainer: null, appIcon: null, loadingCommandIcon: null, loadingTextPlaceholder: null, loadingTextPlaceholderSmall: null, submittingOverlay: null };
createStyles = { marginBottom: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.headerContainer = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
createStyles.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles.scrollView = { marginTop: 8, overflow: "visible" };
let obj1 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles.scrollViewContentContainer = { gap: nativeDefault.space.PX_8 };
createStyles.contextMenuIcon = { height: 16, width: 16 };
let obj2 = { gap: nativeDefault.space.PX_8 };
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
createStyles.appContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.lg };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.lg };
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
createStyles.appContainerDisabled = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.lg, opacity: 0.4 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.lg, opacity: 0.4 };
createStyles.commandContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.md, paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_8 };
let size = { width: 60, height: 60, borderRadius: nativeDefault.radii.lg };
createStyles.appIcon = size;
const size1 = { width: 36, height: 36, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles.loadingCommandIcon = size1;
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.md, paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.loadingTextPlaceholder = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start", marginBottom: nativeDefault.space.PX_4 };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start", marginBottom: nativeDefault.space.PX_4 };
createStyles.loadingTextPlaceholderSmall = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
const size2 = { position: "absolute", top: 0, left: 0, width: 60, height: 60, borderRadius: nativeDefault.radii.lg };
createStyles.submittingOverlay = size2;
let closure_13 = createStyles.createStyles(createStyles);
const obj8 = { APPS: 0, [0]: "APPS", COMMANDS: 1, [1]: "COMMANDS" };
const __initData = { code: "function FrecencySectionTsx1(){const{withTiming,isRecentsMenuOpen}=this.__closure;return{transform:[{rotate:withTiming(isRecentsMenuOpen?'-180deg':'0deg')}]};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySection.tsx");

export default function FrecencySection(loading) {
  ({ context: require, sectionDescriptors: importDefault, commands } = loading);
  loading = loading.loading;
  const apps = loading.apps;
  ({ onAppSelected: closure_5, onCommandSelected: closure_6, onViewAllSelected: EmbeddedActivitiesStore } = loading);
  let first1;
  closure_12 = undefined;
  closure_13 = undefined;
  let style;
  let COMMANDS;
  let tmp = closure_13();
  const selection = tmp;
  let obj = require("AppLauncherContext");
  let obj1 = apps;
  const tmp5 = loading(apps.useState(false), 2);
  const isRecentsMenuOpen = tmp5[0];
  closure_10 = tmp5[1];
  let obj2 = require("initialize");
  let items = [selection];
  const stateFromStores = obj2.useStateFromStores(items, () => selection.getSelection());
  require("initialize");
  [][0] = EmbeddedActivitiesStore;
  if (commands.length > 0) {
    if (stateFromStores === isRecentsMenuOpen.COMMANDS) {
      let APPS = COMMANDS.COMMANDS;
      let tmp12 = COMMANDS;
    }
    const tmp4Result = loading(tmp10(APPS), 2);
    first1 = tmp4Result[0];
    closure_12 = tmp4Result[1];
    const tmp16 = obj.useAppLauncherContext().entrypoint === tmp2(tmp3[15]).AppLauncherEntrypoint.VOICE;
    closure_13 = tmp16;
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
        let HOME = dependencyMap;
        let trackWithMetadataResult = AppAnalyticsUtils;
        if (first1 === obj8.APPS) {
          let length = apps.length;
        } else {
          length = commands.length;
        }
        trackWithMetadataResult = { num: length, section_name: null, location: null };
        if (tmp7 === tmp8.APPS) {
          let RECENT_COMMANDS = tmp5(9409).AppLauncherSectionName.RECENT_APPS;
        } else {
          RECENT_COMMANDS = tmp5(9409).AppLauncherSectionName.RECENT_COMMANDS;
        }
        trackWithMetadataResult.section_name = RECENT_COMMANDS;
        HOME = tmp5(9409).AppLauncherLocations.HOME;
        trackWithMetadataResult.location = HOME;
        trackWithMetadataResult = trackWithMetadataResult.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN, trackWithMetadataResult);
        tmp7 = first1;
        tmp8 = obj8;
      }
    }, items1);
    const items2 = [apps];
    const memo = obj1.useMemo(() => apps.slice(0, 8), items2);
    closure_129_0 = memo;
    closure_129_1 = tmp16;
    const items3 = [memo, tmp16];
    const memo1 = obj1.useMemo(() => {
      const mapped = context.map((section) => {
        let tmp = null;
        if (null != section.section) {
          let id = null;
          if (null != section.section.application) {
            id = null;
            if (obj.isEmbeddedApp(section.section.application)) {
              id = null;
              if (closure_1_1) {
                id = section.section.application.id;
              }
            }
            obj = context(commands[9]);
          }
          tmp = id;
        }
        return tmp;
      });
      return mapped.filter(GlobalUtils.isNotNullish);
    }, items3);
    require("useGetOrFetchApplications")(memo1);
    class G {
      constructor() {
        obj = closure_0(closure_2[18]);
        str = "0deg";
        if (closure_9) {
          str = "-180deg";
        }
        obj = { transform: null };
        obj1 = { rotate: obj.withTiming(str) };
        items = [];
        items[0] = obj1;
        obj.transform = items;
        return obj;
      }
    }
    obj = { withTiming: tmp2(tmp3[18]).withTiming, isRecentsMenuOpen };
    G.__closure = obj;
    G.__workletHash = 4528534448308;
    G.__initData = __initData;
    style = tmp2(tmp3[17]).useAnimatedStyle(G);
    if (0 === commands.length) {
      if (0 === apps.length) {
        return null;
      }
    }
    obj = { label: null, IconComponent: null, action: null };
    let intl = tmp2(tmp3[19]).intl;
    obj.label = intl.string(tmp2(tmp3[19]).t.XRBNsN);
    let prop;
    if (first1 === tmp12.COMMANDS) {
      prop = tmp2(tmp3[20]).CheckmarkSmallBoldIcon;
    }
    obj.IconComponent = prop;
    obj.action = function action() {
      closure_12(obj8.COMMANDS);
      let obj = FrecencySectionStoreActionCreators;
      const result = obj.setFrecencySectionSelection(FrecencySectionSelection.COMMANDS);
      obj = { num: commands.length, section_name: AppLauncherTypes.AppLauncherSectionName.RECENT_COMMANDS };
      AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_TOGGLED, obj);
    };
    const items4 = [obj, ];
    obj1 = { label: null, IconComponent: null, action: null };
    const intl2 = tmp2(tmp3[19]).intl;
    obj1.label = intl2.string(tmp2(tmp3[19]).t.TCAk0p);
    let prop1;
    if (first1 === tmp12.APPS) {
      prop1 = tmp2(tmp3[20]).CheckmarkSmallBoldIcon;
    }
    obj1.IconComponent = prop1;
    obj1.action = function action() {
      closure_12(obj8.APPS);
      let obj = FrecencySectionStoreActionCreators;
      const result = obj.setFrecencySectionSelection(FrecencySectionSelection.APPS);
      obj = { num: apps.length, section_name: AppLauncherTypes.AppLauncherSectionName.RECENT_APPS };
      AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_TOGGLED, obj);
    };
    items4[1] = obj1;
    const substr = commands.slice(0, 8);
    let mapped = substr.map((type) => {
      found = found.find((id) => id.id === type.applicationId);
      let obj = context(commands[22]);
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
        obj = { style: selection.commandContainer, accessible: true, accessibilityLabel: null, accessibilityRole: "button", onPress: null, children: null };
        const _HermesInternal = HermesInternal;
        obj.accessibilityLabel = "" + displayName + " " + sectionName;
        obj.onPress = function onPress() {
          return closure_2_6(closure_0, found);
        };
        let tmp10 = null != appLauncherIconSource;
        if (tmp10) {
          obj = { iconSize: 36, iconSource: appLauncherIconSource };
          tmp10 = first1(require("EntityBorderAppIcon"), obj);
        }
        const items = [tmp10, ];
        const obj1 = { children: null };
        const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: displayName };
        const items1 = [first1(tmp2(tmp3[26]).Text, obj2), ];
        const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: sectionName };
        items1[1] = first1(tmp2(tmp3[26]).Text, obj3);
        obj1.children = items1;
        items[1] = closure_12(onAppSelected, obj1);
        obj.children = items;
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
          let obj = { context, app: applicationId };
          applicationId = applicationId.applicationId;
          let tmp8 = closure_2_11(FrecentActivityOneClickCTA, obj, applicationId);
        }
        obj = { app: applicationId, onAppSelected };
        tmp8 = closure_2_11(FrecentApp, obj, applicationId.applicationId);
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
      obj2 = { style: tmp.container, children: null };
      let obj3 = { style: tmp.headerContainer, children: null };
      let tmp30 = commands.length > 0;
      if (tmp30) {
        tmp30 = apps.length > 0;
      }
      const obj4 = {
        enabled: tmp30,
        items: items4,
        triggerOnTap: true,
        onOpen() {
              return closure_10(true);
            },
        onClose() {
              return closure_10(false);
            },
        children(ref) {
              let obj = { style: selection.header };
              const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
              obj.ref = ref.ref;
              obj = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", children: null };
              const intl = util.intl;
              obj.children = intl.string(util.t.acSE0h);
              const items = [closure_2_11(Text_Text.Text, obj), ];
              let tmp5Result = null;
              if (commands.length > 0) {
                tmp5Result = null;
                if (apps.length > 0) {
                  obj = { style, children: null };
                  const obj1 = { color: "interactive-text-default", style: selection.contextMenuIcon };
                  obj.children = tmp5(ChevronSmallDownIcon.ChevronSmallDownIcon, obj1);
                  tmp5Result = tmp5(ReanimatedRexportDefault.View, obj);
                }
              }
              items[1] = tmp5Result;
              obj.children = items;
              return closure_2_12(hasOwnProperty, obj);
            }
      };
      const items5 = [first1(tmp2(tmp3[27]).ContextMenu, obj4), ];
      let tmp31 = COMMANDS === tmp12.APPS;
      if (tmp31) {
        tmp31 = tmp9;
      }
      const obj5 = { disabled: null, onPress: null, accessibilityRole: "button", children: null };
      class G {
        constructor() {
          obj = closure_0(closure_2[18]);
          str = "0deg";
          if (closure_9) {
            str = "-180deg";
          }
          obj = { transform: null };
          obj1 = { rotate: obj.withTiming(str) };
          items = [];
          items[0] = obj1;
          obj.transform = items;
          return obj;
        }
      }
      obj5.onPress = function onPress() {
        return launchingActivity(COMMANDS);
      };
      const obj6 = { variant: "text-sm/medium", color: "text-brand", children: null };
      const intl3 = tmp2(tmp3[19]).intl;
      obj6.children = intl3.string(tmp2(tmp3[19]).t["/qG8v7"]);
      obj5.children = first1(tmp2(tmp3[26]).Text, obj6);
      items5[1] = first1(tmp2(tmp3[29]).PressableOpacity, obj5);
      obj3.children = items5;
      const items6 = [closure_12(onAppSelected, obj3), ];
      const obj7 = { style: null, contentContainerStyle: null, horizontal: true, showsHorizontalScrollIndicator: false, children: null };
      ({ scrollView: obj13.style, scrollViewContentContainer: obj13.contentContainerStyle } = tmp);
      if (loading) {
        const items7 = [1, 2, 3, 4, 5];
        mapped2 = items7.map((item, index) => first1(closure_14, {}, index));
      }
      obj7.children = mapped2;
      items6[1] = first1(closure_6, obj7);
      obj2.children = items6;
      return closure_12(onAppSelected, obj2);
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
export const SectionItemType = obj8;