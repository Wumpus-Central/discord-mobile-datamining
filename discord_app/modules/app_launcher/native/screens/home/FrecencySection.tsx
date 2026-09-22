// === Module 12309: FrecencySection ===

// Module 12309 (FrecencySection)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4493 */;
import Text_Text from "Text/Text" /* 4753 */;
import timing from "timing" /* 4758 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4937 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9409 */;
import AppLauncherTypes from "AppLauncherTypes" /* 9529 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 11424 */;
import usePlaceholderSize from "usePlaceholderSize" /* 12311 */;
import FrecencySectionStoreActionCreators from "FrecencySectionStoreActionCreators" /* 12312 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2041 */;
import FrecencySectionStore from "FrecencySectionStore" /* 12310 */;

const require = globalThis.__r;

require = fn;
function Placeholder() {
  const tmp = closure_13();
  const placeholderWidth = usePlaceholderSize.usePlaceholderWidth(20, 90);
  const obj3 = { style: tmp.commandContainer, children: null };
  const placeholderWidth1 = usePlaceholderSize.usePlaceholderWidth(20, 70);
  const items = [closure_1_11(hasOwnProperty, { style: tmp.loadingCommandIcon }), ];
  const obj5 = { children: null };
  const obj6 = { style: null };
  const items1 = [tmp.loadingTextPlaceholder, { width: placeholderWidth }];
  obj6.style = items1;
  const items2 = [closure_1_11(hasOwnProperty, obj6), ];
  const obj7 = { style: null };
  const items3 = [tmp.loadingTextPlaceholderSmall, { width: placeholderWidth1 }];
  obj7.style = items3;
  items2[1] = closure_1_11(hasOwnProperty, obj7);
  obj5.children = items2;
  items[1] = closure_1_12(hasOwnProperty, obj5);
  obj3.children = items;
  return closure_1_12(hasOwnProperty, obj3);
}
function FrecentActivityOneClickCTA(context) {
  context = context.context;
  const app = context.app;
  let handleActivityItemSelected;
  const appLauncherContext = context(handleActivityItemSelected[13]).useAppLauncherContext();
  ({ entrypoint, onActivityItemSelected } = appLauncherContext);
  let id = noop.useId();
  const obj = context(handleActivityItemSelected[13]);
  let items = [EmbeddedActivitiesStore];
  const obj3 = context(handleActivityItemSelected[14]);
  [tmp6, tmp7] = context(handleActivityItemSelected[14]).useStateFromStoresArray(items, () => {
    const items = [EmbeddedActivitiesStore.isLaunchingActivity(), ];
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    items[1] = EmbeddedActivitiesStore.getLaunchState(app.applicationId, id);
    return items;
  });
  const tmp5 = _slicedToArray(context(handleActivityItemSelected[14]).useStateFromStoresArray(items, () => {
    const items = [EmbeddedActivitiesStore.isLaunchingActivity(), ];
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    items[1] = EmbeddedActivitiesStore.getLaunchState(app.applicationId, id);
    return items;
  }), 2);
  let isLaunching = null != tmp7;
  const activityAction = context(handleActivityItemSelected[30]).useActivityAction({ context, applicationId: app.applicationId });
  if (isLaunching) {
    isLaunching = tmp7.isLaunching;
  }
  if (isLaunching) {
    isLaunching = tmp7.componentId === id;
  }
  const obj4 = context(handleActivityItemSelected[30]);
  const obj5 = { context, applicationId: app.applicationId };
  const tmpResult = context(handleActivityItemSelected[22]);
  handleActivityItemSelected = tmpResult.useHandleActivityItemSelected({ applicationId: app.applicationId, context, sectionName: context(handleActivityItemSelected[15]).AppLauncherSectionName.RECENT_APPS, onActivityItemSelected, location: context(handleActivityItemSelected[31]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, entrypoint, launchingComponentId: id, fetchesApplication: false }).handleActivityItemSelected;
  const items1 = [handleActivityItemSelected];
  const obj7 = { app, disabled: null, submitting: null, onAppSelected: null };
  const callback = noop.useCallback(() => {
    handleActivityItemSelected();
  }, items1);
  if (!tmp6) {
    tmp6 = activityAction === tmp(tmp2[30]).ActivityAction.LEAVE;
  }
  obj7.disabled = tmp6;
  obj7.submitting = isLaunching;
  obj7.onAppSelected = callback;
  return closure_11(FrecentApp, obj7);
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
    const appLauncherIconSource = app(12308).getAppLauncherIconSource(app.section.application);
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
      const obj2 = { style: tmp.appIcon, source: appLauncherIconSource };
      tmp3 = closure_11(onAppSelected(5806), obj2);
    }
    const items = [tmp3, ];
    const obj3 = { submitting, style: tmp.submittingOverlay };
    items[1] = closure_11(app(12317).SubmittingOverlay, obj3);
    obj.children = items;
    return closure_12(app(5341).PressableOpacity, obj, app.applicationId);
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const FrecencySectionSelection = fn(12310).FrecencySectionSelection;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { container: { marginBottom: nativeDefault.space.PX_16 }, headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, header: null, scrollView: null, scrollViewContentContainer: null, contextMenuIcon: null, appContainer: null, appContainerDisabled: null, commandContainer: null, appIcon: null, loadingCommandIcon: null, loadingTextPlaceholder: null, loadingTextPlaceholderSmall: null, submittingOverlay: null };
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.scrollView = { marginTop: 8, overflow: "visible" };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.scrollViewContentContainer = { gap: nativeDefault.space.PX_8 };
obj2.contextMenuIcon = { height: 16, width: 16 };
let obj5 = { gap: nativeDefault.space.PX_8 };
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.appContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.lg };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.lg };
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.appContainerDisabled = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.lg, opacity: 0.4 };
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.lg, opacity: 0.4 };
obj2.commandContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.md, paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_8 };
let size = { width: 60, height: 60, borderRadius: nativeDefault.radii.lg };
obj2.appIcon = size;
const size1 = { width: 36, height: 36, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.loadingCommandIcon = size1;
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.md, paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.loadingTextPlaceholder = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start", marginBottom: nativeDefault.space.PX_4 };
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start", marginBottom: nativeDefault.space.PX_4 };
obj2.loadingTextPlaceholderSmall = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
const size2 = { position: "absolute", top: 0, left: 0, width: 60, height: 60, borderRadius: nativeDefault.radii.lg };
obj2.submittingOverlay = size2;
let closure_13 = createStyles.createStyles(obj2);
let obj11 = { APPS: 0, [0]: "APPS", COMMANDS: 1, [1]: "COMMANDS" };
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
  const tmp5 = loading(apps.useState(false), 2);
  const isRecentsMenuOpen = tmp5[0];
  closure_10 = tmp5[1];
  let obj = require("AppLauncherContext");
  const tmp4 = loading;
  let items = [selection];
  const stateFromStores = require("initialize").useStateFromStores(items, () => selection.getSelection());
  require("initialize");
  [][0] = EmbeddedActivitiesStore;
  if (commands.length > 0) {
    if (stateFromStores === isRecentsMenuOpen.COMMANDS) {
      let APPS = COMMANDS.COMMANDS;
      let tmp12 = COMMANDS;
    }
    const tmp4Result = tmp4(tmp10(APPS), 2);
    first1 = tmp4Result[0];
    closure_12 = tmp4Result[1];
    const tmp16 = obj.useAppLauncherContext().entrypoint === require("AppLauncherTypes").AppLauncherEntrypoint.VOICE;
    closure_13 = tmp16;
    let items1 = [commands.length, apps.length, loading, first1];
    const effect = obj2.useEffect(() => {
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
        if (first1 === obj11.APPS) {
          let length = apps.length;
        } else {
          length = commands.length;
        }
        let obj2 = { num: length, section_name: null, location: null };
        if (first1 === obj11.APPS) {
          let RECENT_COMMANDS = AppLauncherTypes.AppLauncherSectionName.RECENT_APPS;
        } else {
          RECENT_COMMANDS = AppLauncherTypes.AppLauncherSectionName.RECENT_COMMANDS;
        }
        obj2.section_name = RECENT_COMMANDS;
        HOME = AppLauncherTypes.AppLauncherLocations.HOME;
        obj2.location = HOME;
        obj2 = AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN, obj2);
      }
    }, items1);
    const items2 = [apps];
    const memo = obj2.useMemo(() => apps.slice(0, 8), items2);
    closure_129_0 = memo;
    closure_129_1 = tmp16;
    const items3 = [memo, tmp16];
    const memo1 = obj2.useMemo(() => {
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
        obj1 = { transform: null };
        obj4 = { rotate: obj.withTiming(str) };
        items = [];
        items[0] = obj4;
        obj1.transform = items;
        return obj1;
      }
    }
    let obj4 = { withTiming: require("timing").withTiming, isRecentsMenuOpen };
    G.__closure = obj4;
    G.__workletHash = 4528534448308;
    G.__initData = __initData;
    style = require("ReanimatedRexport").useAnimatedStyle(G);
    if (0 === commands.length) {
      if (0 === apps.length) {
        return null;
      }
    }
    let obj5 = { label: null, IconComponent: null, action: null };
    let intl = require("util").intl;
    obj5.label = intl.string(require("util").t.XRBNsN);
    let prop;
    if (first1 === tmp12.COMMANDS) {
      prop = require("CheckmarkSmallBoldIcon").CheckmarkSmallBoldIcon;
    }
    obj5.IconComponent = prop;
    obj5.action = function action() {
      closure_12(obj11.COMMANDS);
      const result = FrecencySectionStoreActionCreators.setFrecencySectionSelection(FrecencySectionSelection.COMMANDS);
      const obj2 = AppAnalyticsUtils;
      obj2.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_TOGGLED, { num: commands.length, section_name: AppLauncherTypes.AppLauncherSectionName.RECENT_COMMANDS });
    };
    const items4 = [obj5, ];
    let obj6 = { label: null, IconComponent: null, action: null };
    const intl2 = require("util").intl;
    obj6.label = intl2.string(require("util").t.TCAk0p);
    let prop1;
    if (first1 === tmp12.APPS) {
      prop1 = require("CheckmarkSmallBoldIcon").CheckmarkSmallBoldIcon;
    }
    obj6.IconComponent = prop1;
    obj6.action = function action() {
      closure_12(obj11.APPS);
      const result = FrecencySectionStoreActionCreators.setFrecencySectionSelection(FrecencySectionSelection.APPS);
      const obj2 = AppAnalyticsUtils;
      obj2.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_TOGGLED, { num: apps.length, section_name: AppLauncherTypes.AppLauncherSectionName.RECENT_APPS });
    };
    items4[1] = obj6;
    const substr = commands.slice(0, 8);
    let mapped = substr.map((type) => {
      found = found.find((id) => id.id === type.applicationId);
      let application;
      if (found != null) {
        application = found.application;
      }
      const appLauncherIconSource = context(commands[22]).getAppLauncherIconSource(application);
      if (null == found) {
        return null;
      } else {
        let FAKE_BUILT_IN_APP = found.application;
        if (FAKE_BUILT_IN_APP == null) {
          FAKE_BUILT_IN_APP = context(commands[9]).FAKE_BUILT_IN_APP;
        }
        const sectionName = context(commands[9]).getSectionName(FAKE_BUILT_IN_APP);
        if (type.type === context(commands[23]).ApplicationCommandType.PRIMARY_ENTRY_POINT) {
          let displayName = context(commands[9]).formatPrimaryEntryPointCommandName(type.displayName);
          const tmp2Result2 = context(commands[9]);
        } else {
          displayName = type.displayName;
        }
        const obj2 = { style: selection.commandContainer, accessible: true, accessibilityLabel: null, accessibilityRole: "button", onPress: null, children: null };
        const _HermesInternal = HermesInternal;
        obj2.accessibilityLabel = "" + displayName + " " + sectionName;
        obj2.onPress = function onPress() {
          return closure_2_6(closure_0, found);
        };
        let tmp10 = null != appLauncherIconSource;
        if (tmp10) {
          const obj3 = { iconSize: 36, iconSource: appLauncherIconSource };
          tmp10 = first1(require("EntityBorderAppIcon"), obj3);
        }
        const items = [tmp10, ];
        const obj4 = { children: null };
        const obj5 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: displayName };
        const items1 = [first1(context(commands[26]).Text, obj5), ];
        const obj6 = { variant: "text-xs/normal", color: "text-subtle", children: sectionName };
        items1[1] = first1(context(commands[26]).Text, obj6);
        obj4.children = items1;
        items[1] = closure_12(onAppSelected, obj4);
        obj2.children = items;
        return closure_12(context(commands[24]).PressableScale, obj2, type.id);
      }
      const obj = context(commands[22]);
    });
    let found = mapped.filter(require("GlobalUtils").isNotNullish);
    const mapped1 = memo.map((section) => {
      let applicationId = section;
      let tmp = null;
      if (null == section.section) {
        return null;
      } else {
        if (tmp != applicationId.section.application) {
          tmp = undefined;
          const obj2 = { context, app: applicationId };
          applicationId = applicationId.applicationId;
          let tmp8 = closure_2_11(FrecentActivityOneClickCTA, obj2, applicationId);
        }
        const obj3 = { app: applicationId, onAppSelected };
        tmp8 = closure_2_11(FrecentApp, obj3, applicationId.applicationId);
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
      const obj7 = { style: tmp.container, children: null };
      const obj8 = { style: tmp.headerContainer, children: null };
      let tmp30 = commands.length > 0;
      if (tmp30) {
        tmp30 = apps.length > 0;
      }
      const obj9 = {
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
              const obj = { style: selection.header };
              const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
              obj.ref = ref.ref;
              const obj2 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", children: null };
              const intl = util.intl;
              obj2.children = intl.string(util.t.acSE0h);
              const items = [closure_2_11(Text_Text.Text, obj2), ];
              let tmp5Result = null;
              if (commands.length > 0) {
                tmp5Result = null;
                if (apps.length > 0) {
                  const obj3 = { style, children: null };
                  const obj4 = { color: "interactive-text-default", style: selection.contextMenuIcon };
                  obj3.children = closure_2_11(ChevronSmallDownIcon.ChevronSmallDownIcon, obj4);
                  tmp5Result = closure_2_11(ReanimatedRexportDefault.View, obj3);
                }
              }
              items[1] = tmp5Result;
              obj.children = items;
              return closure_2_12(hasOwnProperty, obj);
            }
      };
      const items5 = [first1(require("ContextMenu").ContextMenu, obj9), ];
      let tmp31 = COMMANDS === tmp12.APPS;
      if (tmp31) {
        tmp31 = tmp9;
      }
      const obj10 = { disabled: null, onPress: null, accessibilityRole: "button", children: null };
      class G {
        constructor() {
          obj = closure_0(closure_2[18]);
          str = "0deg";
          if (closure_9) {
            str = "-180deg";
          }
          obj1 = { transform: null };
          obj4 = { rotate: obj.withTiming(str) };
          items = [];
          items[0] = obj4;
          obj1.transform = items;
          return obj1;
        }
      }
      obj10.onPress = function onPress() {
        return launchingActivity(COMMANDS);
      };
      obj11 = { variant: "text-sm/medium", color: "text-brand", children: null };
      const intl3 = require("util").intl;
      obj11.children = intl3.string(require("util").t["/qG8v7"]);
      obj10.children = first1(require("Text/Text").Text, obj11);
      items5[1] = first1(require("Pressables").PressableOpacity, obj10);
      obj8.children = items5;
      const items6 = [closure_12(onAppSelected, obj8), ];
      const obj12 = { style: null, contentContainerStyle: null, horizontal: true, showsHorizontalScrollIndicator: false, children: null };
      ({ scrollView: obj13.style, scrollViewContentContainer: obj13.contentContainerStyle } = tmp);
      if (loading) {
        const items7 = [1, 2, 3, 4, 5];
        mapped2 = items7.map((item, index) => first1(closure_14, {}, index));
      }
      obj12.children = mapped2;
      items6[1] = first1(closure_6, obj12);
      obj7.children = items6;
      return closure_12(onAppSelected, obj7);
    }
    COMMANDS = first1;
    if (commands.length > 0) {
      COMMANDS = first1;
      if (0 === apps.length) {
        COMMANDS = tmp12.COMMANDS;
      }
    }
    const tmp2Result = require("ReanimatedRexport");
  }
  tmp12 = COMMANDS;
  APPS = COMMANDS.APPS;
  let obj3 = require("initialize");
};
export const SectionItemType = obj11;