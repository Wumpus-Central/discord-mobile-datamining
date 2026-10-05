// discord_app/modules/app_launcher/native/screens/home/FrecencySection.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import intl4 from "../../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import ReanimatedRexportDefault from "../../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import AppAnalyticsUtils from "../../../../app_analytics/AppAnalyticsUtils.tsx";
import useGetOrFetchApplicationsDefault from "../../../../applications/useGetOrFetchApplications.tsx";
import AppLauncherUtils from "../../../utils/AppLauncherUtils.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import ChevronSmallDownIcon from "../../../../../design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx";
import FrecencySectionStore2 from "FrecencySectionStore.tsx";
import usePlaceholderSize from "../../hooks/usePlaceholderSize.tsx";
import FrecencySectionStoreActionCreators from "FrecencySectionStoreActionCreators.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import EmbeddedActivitiesStore_mod from "../../../../activities/EmbeddedActivitiesStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const FrecencySectionStore_mod = FrecencySectionStore2;
let closure_12;

let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let size2;
let closure_3 = ["ref"];
({ View: metroImportDefault, ScrollView: metroImportAll } = react_native);
let EmbeddedActivitiesStore = EmbeddedActivitiesStore_mod;
let FrecencySectionStore = FrecencySectionStore_mod;
let FrecencySectionSelection = FrecencySectionStore2.FrecencySectionSelection;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  header: obj3,
  scrollView: { marginTop: 8, overflow: "visible" },
  scrollViewContentContainer: obj4,
  contextMenuIcon: { height: 16, width: 16 },
  appContainer: obj5,
  appContainerDisabled: obj6,
  commandContainer: obj7,
  appIcon: size,
  loadingCommandIcon: size1,
  loadingTextPlaceholder: obj8,
  loadingTextPlaceholderSmall: obj9,
  submittingOverlay: size2,
};
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
};
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj6 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
  opacity: 0.4,
};
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj7 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT,
  borderRadius: nativeDefault.radii.md,
  paddingLeft: nativeDefault.space.PX_12,
  paddingRight: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_12,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
size = { width: 60, height: 60, borderRadius: nativeDefault.radii.lg };
size1 = {
  width: 36,
  height: 36,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj8 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
  marginBottom: nativeDefault.space.PX_4,
};
obj9 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
size2 = { position: "absolute", top: 0, left: 0, width: 60, height: 60, borderRadius: nativeDefault.radii.lg };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let apps;
      let onlyActivityApps;
      let tmp5;
      let obj = onlyActivityApps(576);
      const cResult = obj.c(5);
      ({ apps, onlyActivityApps } = arg0);
      if (cResult[0] === apps) {
        let tmp4;
        if (cResult[1] === onlyActivityApps) {
          tmp4 = cResult[2];
        }
        useGetOrFetchApplicationsDefault(tmp4);
      }
      if (cResult[3] !== onlyActivityApps) {
        const fn = function o(section) {
          let tmp = null;
          if (null != section.section) {
            let id = null;
            if (null != section.section.application) {
              id = null;
              const obj = AppLauncherUtils;
              if (obj.isActivityApp(section.section.application)) {
                id = null;
                if (onlyActivityApps) {
                  id = section.section.application.id;
                }
              }
            }
            tmp = id;
          }
          return tmp;
        };
        cResult[3] = onlyActivityApps;
        cResult[4] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[4];
      }
      const mapped = apps.map(tmp5);
      const found = mapped.filter(onlyActivityApps(1375).isNotNullish);
      cResult[0] = apps;
      cResult[1] = onlyActivityApps;
      cResult[2] = found;
      tmp4 = found;
    }
  : (apps) => {
      apps = apps.apps;
      const onlyActivityApps = apps.onlyActivityApps;
      const items = [apps, onlyActivityApps];
      const memo = react.useMemo(() => {
        const mapped = apps.map((section) => {
          let tmp = null;
          if (null != section.section) {
            let id = null;
            if (null != section.section.application) {
              id = null;
              const obj = apps(dependencyMap[12]);
              if (obj.isActivityApp(section.section.application)) {
                id = null;
                if (onlyActivityApps) {
                  id = section.section.application.id;
                }
              }
            }
            tmp = id;
          }
          return tmp;
        });
        return mapped.filter(GlobalUtils.isNotNullish);
      }, items);
      onlyActivityApps(6663)(memo);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let items1;
      let items2;
      let items3;
      let tmp5;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(19);
      const tmp2 = closure_15();
      const obj2 = usePlaceholderSize;
      const placeholderWidth = obj2.usePlaceholderWidth(20, 90);
      const obj3 = usePlaceholderSize;
      const placeholderWidth1 = obj3.usePlaceholderWidth(20, 70);
      if (cResult[0] !== tmp2.loadingCommandIcon) {
        const obj4 = { style: tmp2.loadingCommandIcon };
        const tmp8 = map1(metroImportDefault, obj4);
        cResult[0] = tmp2.loadingCommandIcon;
        cResult[1] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== placeholderWidth) {
        const obj5 = { width: placeholderWidth };
        cResult[2] = placeholderWidth;
        cResult[3] = obj5;
        tmp9 = obj5;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp2.loadingTextPlaceholder) {
        let tmp10;
        let tmp12;
        if (cResult[5] === tmp9) {
          tmp10 = cResult[6];
        }
        if (cResult[7] !== placeholderWidth1) {
          const obj6 = { width: placeholderWidth1 };
          cResult[7] = placeholderWidth1;
          cResult[8] = obj6;
          tmp12 = obj6;
        } else {
          tmp12 = cResult[8];
        }
        if (cResult[9] === tmp2.loadingTextPlaceholderSmall) {
          let tmp13;
          if (cResult[10] === tmp12) {
            tmp13 = cResult[11];
          }
          if (cResult[12] === tmp10) {
            let tmp17;
            if (cResult[13] === tmp13) {
              tmp17 = cResult[14];
            }
            if (cResult[15] === tmp2.commandContainer) {
              if (cResult[16] === tmp5) {
                let tmp21;
                if (cResult[17] === tmp17) {
                  tmp21 = cResult[18];
                }
                return tmp21;
              }
            }
            const obj7 = { style: tmp2.commandContainer, children: items };
            items = [tmp5, tmp17];
            const tmp24 = authStore2(metroImportDefault, obj7);
            cResult[15] = tmp2.commandContainer;
            cResult[16] = tmp5;
            cResult[17] = tmp17;
            cResult[18] = tmp24;
            tmp21 = tmp24;
          }
          const obj8 = { children: items1 };
          items1 = [tmp10, tmp13];
          const tmp20 = authStore2(metroImportDefault, obj8);
          cResult[12] = tmp10;
          cResult[13] = tmp13;
          cResult[14] = tmp20;
          tmp17 = tmp20;
        }
        const obj9 = { style: items2 };
        items2 = [tmp2.loadingTextPlaceholderSmall, tmp12];
        const tmp16 = map1(metroImportDefault, obj9);
        cResult[9] = tmp2.loadingTextPlaceholderSmall;
        cResult[10] = tmp12;
        cResult[11] = tmp16;
        tmp13 = tmp16;
      }
      obj10 = { style: items3 };
      items3 = [tmp2.loadingTextPlaceholder, tmp9];
      const tmp11 = map1(metroImportDefault, obj10);
      cResult[4] = tmp2.loadingTextPlaceholder;
      cResult[5] = tmp9;
      cResult[6] = tmp11;
      tmp10 = tmp11;
    }
  : () => {
      let items;
      let items1;
      let items2;
      let items3;
      const tmp = closure_15();
      const obj = usePlaceholderSize;
      const placeholderWidth = obj.usePlaceholderWidth(20, 90);
      const obj3 = { style: tmp.commandContainer, children: items };
      const obj2 = usePlaceholderSize;
      const obj4 = { style: tmp.loadingCommandIcon };
      const placeholderWidth1 = obj2.usePlaceholderWidth(20, 70);
      items = [map1(metroImportDefault, obj4)];
      const obj6 = { style: items1 };
      items1 = [tmp.loadingTextPlaceholder, { width: placeholderWidth }];
      const obj5 = { children: items2 };
      items2 = [map1(metroImportDefault, obj6)];
      const obj7 = { style: items3 };
      items3 = [tmp.loadingTextPlaceholderSmall, { width: placeholderWidth1 }];
      items2[1] = map1(metroImportDefault, obj7);
      items[1] = authStore2(metroImportDefault, obj5);
      return authStore2(metroImportDefault, obj3);
    };
let obj10 = { APPS: 0, [0]: "APPS", COMMANDS: 1, [1]: "COMMANDS" };
let closure_19 = {
  code: 'function FrecencySectionTsx1(){const{withTiming,isRecentsMenuOpen}=this.__closure;return{transform:[{rotate:withTiming(isRecentsMenuOpen?"-180deg":"0deg")}]};}',
};
const __initData = {
  code: "function FrecencySectionTsx2(){const{withTiming,isRecentsMenuOpen}=this.__closure;return{transform:[{rotate:withTiming(isRecentsMenuOpen?'-180deg':'0deg')}]};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (context) => {
      let closure_11;
      let commands;
      let launchingActivity;
      let selection;
      let style;
      let tmp7;
      let tmp8;
      let tmp = context;
      let obj = context(commands[11]);
      const cResult = obj.c(78);
      context = context.context;
      const sectionDescriptors = context.sectionDescriptors;
      commands = context.commands;
      const loading = context.loading;
      const apps = context.apps;
      const onAppSelected = context.onAppSelected;
      const onCommandSelected = context.onCommandSelected;
      const onViewAllSelected = context.onViewAllSelected;
      const tmp4 = closure_15();
      let closure_8 = tmp4;
      let obj2 = context(commands[16]);
      let obj3 = onCommandSelected;
      const entrypoint = obj2.useAppLauncherContext().entrypoint;
      const tmp6 = onAppSelected(onCommandSelected.useState(false), 2);
      EmbeddedActivitiesStore = tmp6[0];
      FrecencySectionStore = tmp6[1];
      const tmp5 = onAppSelected;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [FrecencySectionStore];
        class I {
          constructor() {
            return selection.getSelection();
          }
        }
        cResult[0] = items;
        cResult[1] = I;
        tmp7 = items;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const tmpResult = tmp(commands[17]);
      const stateFromStores = tmpResult.useStateFromStores(tmp7, I);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items1 = [EmbeddedActivitiesStore];
        class K {
          constructor() {
            return launchingActivity.isLaunchingActivity();
          }
        }
        cResult[2] = items1;
        cResult[3] = K;
        let tmp11 = items1;
      } else {
        tmp11 = cResult[2];
      }
      tmp(commands[17]);
      if (commands.length > 0) {
        let APPS;
        if (stateFromStores === FrecencySectionSelection.COMMANDS) {
          APPS = obj10.COMMANDS;
        }
        let tmp5Result = tmp5(tmp15(APPS), 2);
        class K {
          constructor() {
            return launchingActivity.isLaunchingActivity();
          }
        }
        FrecencySectionSelection = tmp20;
        closure_12 = tmp5Result[1];
        const tmp21 = entrypoint === tmp(commands[18]).AppLauncherEntrypoint.VOICE;
        let closure_13 = tmp21;
        if (cResult[4] === apps.length) {
          if (cResult[5] === commands.length) {
            if (cResult[6] === loading) {
              let tmp22;
              let tmp23;
              let tmp25;
              if (cResult[7] === tmp20) {
                tmp22 = cResult[8];
                tmp23 = cResult[9];
              }
              const effect = obj3.useEffect(tmp22, tmp23);
              if (cResult[10] !== apps) {
                const substr = apps.slice(0, 8);
                class K {
                  constructor() {
                    return launchingActivity.isLaunchingActivity();
                  }
                }
                cResult[11] = substr;
                tmp25 = substr;
              } else {
                tmp25 = cResult[11];
              }
              class K {
                constructor() {
                  return launchingActivity.isLaunchingActivity();
                }
              }
              let obj4 = { apps: tmp25, onlyActivityApps: tmp21 };
              cResult[12] = tmp21;
              cResult[13] = tmp25;
              cResult[14] = obj4;
            }
          }
        }
        const fn = function j() {
          let RECENT_COMMANDS;
          let tmp = loading;
          if (!tmp) {
            tmp = 0 === commands.length && 0 === apps.length;
            const tmp3 = 0 === commands.length && 0 === apps.length;
          }
          if (!tmp) {
            let length;
            const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
            const APP_LAUNCHER_FRECENTS_SEEN = AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN;
            AppAnalyticsUtils;
            if (FrecencySectionSelection === obj10.APPS) {
              length = apps.length;
            } else {
              length = commands.length;
            }
            const obj = {
              num: length,
              section_name: RECENT_COMMANDS,
              location: AppLauncherTypes.AppLauncherLocations.HOME,
            };
            if (FrecencySectionSelection === obj10.APPS) {
              RECENT_COMMANDS = AppLauncherTypes.AppLauncherSectionName.RECENT_APPS;
            } else {
              RECENT_COMMANDS = AppLauncherTypes.AppLauncherSectionName.RECENT_COMMANDS;
            }
            trackWithMetadata(APP_LAUNCHER_FRECENTS_SEEN, obj);
          }
        };
        const items2 = [commands.length, apps.length, loading, tmp20];
        cResult[4] = apps.length;
        cResult[5] = commands.length;
        cResult[6] = loading;
        cResult[7] = tmp20;
        cResult[8] = fn;
        cResult[9] = items2;
        tmp23 = items2;
        tmp22 = fn;
      }
      APPS = obj10.APPS;
    }
  : (loading) => {
      let Text;
      let closure_7;
      let commands;
      let context;
      let first1;
      let intl;
      let intl2;
      let intl3;
      let isRecentsMenuOpen;
      let items4;
      let items5;
      let obj12;
      let onAppSelected;
      let prop;
      let prop1;
      let require;
      let selection;
      ({ context: require, sectionDescriptors: importDefault, commands } = loading);
      loading = loading.loading;
      const apps = loading.apps;
      ({ onAppSelected: _slicedToArray, onCommandSelected: react, onViewAllSelected: closure_7 } = loading);
      isRecentsMenuOpen = undefined;
      selection = undefined;
      first1 = undefined;
      closure_12 = undefined;
      let closure_13;
      let style;
      let COMMANDS;
      let tmp = COMMANDS();
      let closure_8 = tmp;
      let obj = require("AppLauncherContext");
      const entrypoint = obj.useAppLauncherContext().entrypoint;
      [isRecentsMenuOpen, selection] = react.useState(false);
      let obj3 = require("get initialized");
      let items = [selection];
      const stateFromStores = obj3.useStateFromStores(items, () => selection.getSelection());
      let tmp8 = require("get initialized");
      [][0] = isRecentsMenuOpen;
      if (commands.length > 0) {
        let APPS;
        let tmp12;
        let tmp11 = first1;
        if (stateFromStores === first1.COMMANDS) {
          APPS = obj10.COMMANDS;
          tmp12 = obj10;
        }
        [first1, closure_12] = tmp10(APPS);
        const tmp16 = entrypoint === require("AppLauncherTypes").AppLauncherEntrypoint.VOICE;
        closure_13 = tmp16;
        let items1 = [commands.length, apps.length, loading, first1];
        const effect = react.useEffect(() => {
          let RECENT_COMMANDS;
          let tmp = loading;
          if (!tmp) {
            tmp = 0 === commands.length && 0 === apps.length;
            const tmp3 = 0 === commands.length && 0 === apps.length;
          }
          if (!tmp) {
            let length;
            const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
            const APP_LAUNCHER_FRECENTS_SEEN = AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN;
            AppAnalyticsUtils;
            if (first1 === obj10.APPS) {
              length = apps.length;
            } else {
              length = commands.length;
            }
            const obj = {
              num: length,
              section_name: RECENT_COMMANDS,
              location: AppLauncherTypes.AppLauncherLocations.HOME,
            };
            if (first1 === obj10.APPS) {
              RECENT_COMMANDS = AppLauncherTypes.AppLauncherSectionName.RECENT_APPS;
            } else {
              RECENT_COMMANDS = AppLauncherTypes.AppLauncherSectionName.RECENT_COMMANDS;
            }
            trackWithMetadata(APP_LAUNCHER_FRECENTS_SEEN, obj);
          }
        }, items1);
        const items2 = [apps];
        const memo = react.useMemo(() => apps.slice(0, 8), items2);
        let obj4 = { apps: memo, onlyActivityApps: tmp16 };
        closure_16(obj4);
        const tmp2Result = require("ReanimatedRexport");
        const fn = function z() {
          let items;
          let str = "0deg";
          const withTiming = timing.withTiming;
          timing;
          if (first) {
            str = "-180deg";
          }
          const obj = { transform: items };
          items = [{ rotate: withTiming(str) }];
          ({ rotate: withTiming(str) });
          return obj;
        };
        let obj5 = { withTiming: require("timing").withTiming, isRecentsMenuOpen };
        const useAnimatedStyle = tmp2Result.useAnimatedStyle;
        fn.__closure = obj5;
        fn.__workletHash = 1244874825047;
        fn.__initData = __initData;
        style = useAnimatedStyle(fn);
        if (0 === commands.length) {
          if (0 === apps.length) {
            return null;
          }
        }
        const obj6 = {
          label: intl.string(require("intl").t.XRBNsN),
          IconComponent: prop,
          action() {
            closure_12(obj10.COMMANDS);
            const obj = FrecencySectionStoreActionCreators;
            const result = obj.setFrecencySectionSelection(FrecencySectionSelection.COMMANDS);
            const obj2 = AppAnalyticsUtils;
            const obj3 = {
              num: commands.length,
              section_name: AppLauncherTypes.AppLauncherSectionName.RECENT_COMMANDS,
            };
            obj2.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_TOGGLED, obj3);
          },
        };
        intl = require("intl").intl;
        prop = undefined;
        if (first1 === tmp12.COMMANDS) {
          prop = require("CheckmarkSmallBoldIcon").CheckmarkSmallBoldIcon;
        }
        const items3 = [obj6];
        const obj7 = {
          label: intl2.string(require("intl").t.TCAk0p),
          IconComponent: prop1,
          action() {
            closure_12(obj10.APPS);
            const obj = FrecencySectionStoreActionCreators;
            const result = obj.setFrecencySectionSelection(FrecencySectionSelection.APPS);
            const obj2 = AppAnalyticsUtils;
            const obj3 = { num: apps.length, section_name: AppLauncherTypes.AppLauncherSectionName.RECENT_APPS };
            obj2.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_TOGGLED, obj3);
          },
        };
        intl2 = require("intl").intl;
        prop1 = undefined;
        if (first1 === tmp12.APPS) {
          prop1 = require("CheckmarkSmallBoldIcon").CheckmarkSmallBoldIcon;
        }
        items3[1] = obj7;
        const substr = commands.slice(0, 8);
        const mapped = substr.map((type) => {
          let found;
          let items;
          let items1;
          found = found.find((id) => id.id === type.applicationId);
          let application;
          const getAppLauncherIconSource = require("AppLauncherNativeUtils").getAppLauncherIconSource;
          require("AppLauncherNativeUtils");
          if (found != null) {
            application = found.application;
          }
          const appLauncherIconSource = getAppLauncherIconSource(application);
          if (null == found) {
            return null;
          } else {
            let displayName;
            let FAKE_BUILT_IN_APP = found.application;
            const getSectionName = require("AppLauncherUtils").getSectionName;
            require("AppLauncherUtils");
            if (FAKE_BUILT_IN_APP == null) {
              FAKE_BUILT_IN_APP = require("AppLauncherUtils").FAKE_BUILT_IN_APP;
            }
            const sectionName = getSectionName(FAKE_BUILT_IN_APP);
            if (type.type === require("Server").ApplicationCommandType.PRIMARY_ENTRY_POINT) {
              const tmp2Result2 = require("AppLauncherUtils");
              displayName = tmp2Result2.formatPrimaryEntryPointCommandName(type.displayName);
            } else {
              displayName = type.displayName;
            }
            const _HermesInternal = HermesInternal;
            const obj = {
              style: closure_8.commandContainer,
              accessible: true,
              accessibilityLabel: "" + displayName + " " + sectionName,
              accessibilityRole: "button",
              onPress() {
                return react(type, found);
              },
              children: items,
            };
            const PressableScale = require("native").PressableScale;
            let tmp11 = null != appLauncherIconSource;
            if (tmp11) {
              const obj2 = { iconSize: 36, iconSource: appLauncherIconSource };
              tmp11 = closure_13(require("EntityBorderAppIcon"), obj2);
            }
            items = [tmp11];
            const obj3 = { children: items1 };
            const obj4 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: displayName };
            items1 = [closure_13(require("Text/Text").Text, obj4)];
            const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: sectionName };
            items1[1] = closure_13(require("Text/Text").Text, obj5);
            items[1] = style(closure_7, obj3);
            return style(PressableScale, obj, type.id);
          }
        });
        let found = mapped.filter(require("GlobalUtils").isNotNullish);
        const mapped1 = memo.map((section) => {
          let tmp = null;
          if (null != section.section) {
            if (null != section.section.application) {
              const obj = AppLauncherUtils;
              if (obj.isActivityApp(section.section.application)) {
                let tmp8;
                if (map1) {
                  const obj2 = { context: require, app: section };
                  tmp8 = map1(closure_21, obj2, section.applicationId);
                }
                tmp = tmp8;
              }
            }
            const obj3 = { app: section, onAppSelected: _slicedToArray };
            tmp8 = map1(closure_22, obj3, section.applicationId);
          }
          return tmp;
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
          let tmp30 = commands.length > 0;
          const obj8 = { style: tmp.container, children: items5 };
          const obj9 = { style: tmp.headerContainer, children: items4 };
          const ContextMenu = require("ContextMenu").ContextMenu;
          if (tmp30) {
            tmp30 = apps.length > 0;
          }
          obj10 = {
            enabled: tmp30,
            items: items3,
            triggerOnTap: true,
            onOpen() {
              return selection(true);
            },
            onClose() {
              return selection(false);
            },
            children(ref) {
              let intl;
              let items;
              let obj4;
              const obj = { style: closure_8.header, ref: ref.ref, children: items };
              const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
              const obj2 = {
                accessibilityRole: "header",
                variant: "text-lg/bold",
                color: "mobile-text-heading-primary",
                children: intl.string(intl4.t.acSE0h),
              };
              const Text = Text_Text.Text;
              intl = intl4.intl;
              items = [map1(Text, obj2)];
              let tmp5Result = null;
              if (commands.length > 0) {
                tmp5Result = null;
                if (apps.length > 0) {
                  const obj3 = { style, children: map1(ChevronSmallDownIcon.ChevronSmallDownIcon, obj4) };
                  const View = ReanimatedRexportDefault.View;
                  obj4 = { color: "interactive-text-default", style: closure_8.contextMenuIcon };
                  tmp5Result = map1(View, obj3);
                }
              }
              items[1] = tmp5Result;
              return authStore2(metroImportDefault, obj);
            },
          };
          items4 = [closure_13(ContextMenu, obj10)];
          let tmp31 = COMMANDS === tmp12.APPS;
          const PressableOpacity = require("Pressables").PressableOpacity;
          if (tmp31) {
            tmp31 = tmp9;
          }
          const obj11 = {
            disabled: tmp31,
            onPress() {
              return closure_7(COMMANDS);
            },
            accessibilityRole: "button",
            children: closure_13(Text, obj12),
          };
          obj12 = {
            variant: "text-sm/medium",
            color: "text-brand",
            children: intl3.string(require("intl").t["/qG8v7"]),
          };
          Text = require("Text/Text").Text;
          intl3 = require("intl").intl;
          items4[1] = closure_13(PressableOpacity, obj11);
          items5 = [style(closure_7, obj9)];
          const obj23 = {
            style: null,
            contentContainerStyle: null,
            horizontal: true,
            showsHorizontalScrollIndicator: false,
            children: mapped2,
          };
          ({ scrollView: obj13.style, scrollViewContentContainer: obj13.contentContainerStyle } = tmp);
          const tmp32 = closure_8;
          if (loading) {
            const items6 = [1, 2, 3, 4, 5];
            mapped2 = items6.map((item, index) => closure_13(closure_1_17, {}, index));
          }
          items5[1] = closure_13(tmp32, obj23);
          return style(closure_7, obj8);
        }
        COMMANDS = first1;
        if (commands.length > 0) {
          COMMANDS = first1;
          if (0 === apps.length) {
            COMMANDS = tmp12.COMMANDS;
          }
        }
      }
      tmp12 = obj10;
      APPS = obj10.APPS;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (context) => {
      let entrypoint;
      let first;
      let handleActivityItemSelected;
      let onActivityItemSelected;
      let tmp11;
      let tmp12;
      const obj = context(handleActivityItemSelected[11]);
      const cResult = obj.c(21);
      context = context.context;
      const app = context.app;
      const obj2 = context(handleActivityItemSelected[16]);
      const appLauncherContext = obj2.useAppLauncherContext();
      ({ entrypoint, onActivityItemSelected } = appLauncherContext);
      let id = react.useId();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [EmbeddedActivitiesStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === app.applicationId) {
        if (cResult[2] === context.channel) {
          let tmp8;
          if (cResult[3] === context.type) {
            tmp8 = cResult[4];
          }
          const tmpResult = context(handleActivityItemSelected[17]);
          [tmp11, tmp12] = tmpResult.useStateFromStoresArray(first, tmp8);
          _slicedToArray(tmpResult.useStateFromStoresArray(first, tmp8), 2);
          if (cResult[5] === app.applicationId) {
            let tmp13;
            if (cResult[6] === context) {
              tmp13 = cResult[7];
            }
            let isLaunching = null != tmp12;
            const tmpResult3 = context(handleActivityItemSelected[33]);
            const activityAction = tmpResult3.useActivityAction(tmp13);
            if (isLaunching) {
              isLaunching = tmp12.isLaunching;
            }
            if (isLaunching) {
              isLaunching = tmp12.componentId === id;
            }
            if (cResult[8] === app.applicationId) {
              if (cResult[9] === context) {
                if (cResult[10] === entrypoint) {
                  if (cResult[11] === id) {
                    let tmp16;
                    if (cResult[12] === onActivityItemSelected) {
                      tmp16 = cResult[13];
                    }
                    const tmpResult4 = context(handleActivityItemSelected[25]);
                    handleActivityItemSelected =
                      tmpResult4.useHandleActivityItemSelected(tmp16).handleActivityItemSelected;
                    if (cResult[14] !== handleActivityItemSelected) {
                      class O {
                        constructor() {
                          handleActivityItemSelected();
                        }
                      }
                      cResult[14] = handleActivityItemSelected;
                      cResult[15] = O;
                    } else {
                      class O {
                        constructor() {
                          handleActivityItemSelected();
                        }
                      }
                    }
                    if (!tmp11) {
                      class O {
                        constructor() {
                          handleActivityItemSelected();
                        }
                      }
                    }
                    if (cResult[16] === app) {
                      class O {
                        constructor() {
                          handleActivityItemSelected();
                        }
                      }
                    }
                    const obj3 = { app, disabled: tmp11, submitting: isLaunching, onAppSelected: O };
                    cResult[16] = app;
                    cResult[17] = O;
                    cResult[18] = isLaunching;
                    cResult[19] = tmp11;
                    cResult[20] = closure_13(closure_22, obj3);
                    const tmp21 = closure_13(closure_22, obj3);
                  }
                }
              }
            }
            const obj4 = {
              applicationId: app.applicationId,
              context,
              sectionName: context(handleActivityItemSelected[18]).AppLauncherSectionName.RECENT_APPS,
              onActivityItemSelected,
              location: context(handleActivityItemSelected[34]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME,
              entrypoint,
              launchingComponentId: id,
              fetchesApplication: false,
            };
            cResult[8] = app.applicationId;
            cResult[9] = context;
            cResult[10] = entrypoint;
            cResult[11] = id;
            cResult[12] = onActivityItemSelected;
            cResult[13] = obj4;
            tmp16 = obj4;
          }
          const obj5 = { context, applicationId: app.applicationId };
          cResult[5] = app.applicationId;
          cResult[6] = context;
          cResult[7] = obj5;
          tmp13 = obj5;
        }
      }
      const fn = function c() {
        const items = [EmbeddedActivitiesStore.isLaunchingActivity()];
        let id;
        const getLaunchState = EmbeddedActivitiesStore.getLaunchState;
        const applicationId = app.applicationId;
        if ("channel" === context.type) {
          id = context.channel.id;
        }
        items[1] = getLaunchState(applicationId, id);
        return items;
      };
      cResult[1] = app.applicationId;
      cResult[2] = context.channel;
      cResult[3] = context.type;
      cResult[4] = fn;
      tmp8 = fn;
    }
  : (context) => {
      let callback;
      let entrypoint;
      let onActivityItemSelected;
      let tmp6;
      let tmp7;
      const f108600 = () => {
        const items = [EmbeddedActivitiesStore.isLaunchingActivity()];
        let id;
        const getLaunchState = EmbeddedActivitiesStore.getLaunchState;
        const applicationId = app.applicationId;
        if ("channel" === context.type) {
          id = context.channel.id;
        }
        items[1] = getLaunchState(applicationId, id);
        return items;
      };
      context = context.context;
      const app = context.app;
      let handleActivityItemSelected;
      const obj = context(handleActivityItemSelected[16]);
      const appLauncherContext = obj.useAppLauncherContext();
      ({ entrypoint, onActivityItemSelected } = appLauncherContext);
      let id = react.useId();
      let items = [EmbeddedActivitiesStore];
      const obj3 = context(handleActivityItemSelected[17]);
      [tmp6, tmp7] = obj3.useStateFromStoresArray(items, f108600);
      _slicedToArray(obj3.useStateFromStoresArray(items, f108600), 2);
      let isLaunching = null != tmp7;
      const obj4 = context(handleActivityItemSelected[33]);
      const obj5 = { context, applicationId: app.applicationId };
      const activityAction = obj4.useActivityAction(obj5);
      if (isLaunching) {
        isLaunching = tmp7.isLaunching;
      }
      if (isLaunching) {
        isLaunching = tmp7.componentId === id;
      }
      const tmpResult = context(handleActivityItemSelected[25]);
      const obj6 = {
        applicationId: app.applicationId,
        context,
        sectionName: context(handleActivityItemSelected[18]).AppLauncherSectionName.RECENT_APPS,
        onActivityItemSelected,
        location: context(handleActivityItemSelected[34]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME,
        entrypoint,
        launchingComponentId: id,
        fetchesApplication: false,
      };
      handleActivityItemSelected = tmpResult.useHandleActivityItemSelected(obj6).handleActivityItemSelected;
      const items1 = [handleActivityItemSelected];
      const obj7 = { app, disabled: tmp6, submitting: isLaunching, onAppSelected: callback };
      callback = react.useCallback(() => {
        handleActivityItemSelected();
      }, items1);
      if (!tmp6) {
        tmp6 = activityAction === context(handleActivityItemSelected[33]).ActivityAction.LEAVE;
      }
      return closure_13(closure_22, obj7);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (app) => {
      let disabled;
      let items;
      let onAppSelected;
      let submitting;
      let obj = app(576);
      const cResult = obj.c(19);
      app = app.app;
      ({ disabled, submitting, onAppSelected } = app);
      const tmp5 = closure_15();
      if (null == app.section) {
        return null;
      } else {
        let name;
        if (cResult[0] !== app.section.application) {
          const tmpResult = tmp(11665);
          const appLauncherIconSource = tmpResult.getAppLauncherIconSource(app.section.application);
          cResult[0] = app.section.application;
          cResult[1] = appLauncherIconSource;
          class A {
            constructor() {
              tmp2 = null != onAppSelected;
              tmp = onAppSelected;
              if (tmp2) {
                tmp3 = app;
                tmp2 = null != app.section.application;
              }
              if (tmp2) {
                obj = { application: null, sectionName: null };
                tmp4 = app;
                obj.application = app.section.application;
                tmp5 = closure_0;
                tmp6 = closure_2;
                obj.sectionName = closure_0(closure_2[18]).AppLauncherSectionName.RECENT_APPS;
                tmpResult = tmp(obj);
              }
              return;
            }
          }
        }
        const tmp8 = disabled ? tmp5.appContainerDisabled : tmp5.appContainer;
        const application = app.section.application;
        if (application != null) {
          name = application.name;
        }
        if (cResult[2] === app.section.application) {
          let tmp9;
          if (cResult[3] === onAppSelected) {
            tmp9 = cResult[4];
          }
          if (cResult[5] === tmp6) {
            let tmp10;
            if (cResult[6] === tmp5.appIcon) {
              tmp10 = cResult[7];
            }
            if (cResult[8] === tmp5.submittingOverlay) {
              let tmp14;
              if (cResult[9] === (undefined !== submitting && submitting)) {
                tmp14 = cResult[10];
              }
              if (cResult[11] === app.applicationId) {
                if (cResult[12] === disabled) {
                  if (cResult[13] === tmp8) {
                    if (cResult[14] === name) {
                      if (cResult[15] === tmp9) {
                        if (cResult[16] === tmp10) {
                          let tmp17;
                          if (cResult[17] === tmp14) {
                            tmp17 = cResult[18];
                          }
                          return tmp17;
                        }
                      }
                    }
                  }
                }
              }
              const obj2 = {
                style: tmp8,
                disabled,
                accessible: true,
                accessibilityLabel: null,
                accessibilityRole: "button",
                onPress: tmp9,
                children: items,
              };
              class A {
                constructor() {
                  tmp2 = null != onAppSelected;
                  tmp = onAppSelected;
                  if (tmp2) {
                    tmp3 = app;
                    tmp2 = null != app.section.application;
                  }
                  if (tmp2) {
                    obj = { application: null, sectionName: null };
                    tmp4 = app;
                    obj.application = app.section.application;
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    obj.sectionName = closure_0(closure_2[18]).AppLauncherSectionName.RECENT_APPS;
                    tmpResult = tmp(obj);
                  }
                  return;
                }
              }
              items = [tmp10, tmp14];
              const tmp19 = closure_14(app(5909).PressableOpacity, obj2, app.applicationId);
              cResult[11] = app.applicationId;
              cResult[12] = disabled;
              cResult[13] = tmp8;
              cResult[14] = name;
              cResult[15] = tmp9;
              cResult[16] = tmp10;
              cResult[17] = tmp14;
              cResult[18] = tmp19;
              tmp17 = tmp19;
            }
            class A {
              constructor() {
                tmp2 = null != onAppSelected;
                tmp = onAppSelected;
                if (tmp2) {
                  tmp3 = app;
                  tmp2 = null != app.section.application;
                }
                if (tmp2) {
                  obj = { application: null, sectionName: null };
                  tmp4 = app;
                  obj.application = app.section.application;
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  obj.sectionName = closure_0(closure_2[18]).AppLauncherSectionName.RECENT_APPS;
                  tmpResult = tmp(obj);
                }
                return;
              }
            }
            cResult[8] = tmp5.submittingOverlay;
            cResult[9] = undefined !== submitting && submitting;
            cResult[10] = tmp16;
            tmp14 = tmp16;
          }
          let tmp11 = null != tmp6;
          if (tmp11) {
            const obj4 = { style: tmp5.appIcon, source: tmp6 };
            tmp11 = closure_13(onAppSelected(5974), obj4);
          }
          cResult[5] = tmp6;
          class A {
            constructor() {
              tmp2 = null != onAppSelected;
              tmp = onAppSelected;
              if (tmp2) {
                tmp3 = app;
                tmp2 = null != app.section.application;
              }
              if (tmp2) {
                obj = { application: null, sectionName: null };
                tmp4 = app;
                obj.application = app.section.application;
                tmp5 = closure_0;
                tmp6 = closure_2;
                obj.sectionName = closure_0(closure_2[18]).AppLauncherSectionName.RECENT_APPS;
                tmpResult = tmp(obj);
              }
              return;
            }
          }
          cResult[6] = tmp5.appIcon;
          cResult[7] = tmp11;
          tmp10 = tmp11;
        }
        class A {
          constructor() {
            tmp2 = null != onAppSelected;
            tmp = onAppSelected;
            if (tmp2) {
              tmp3 = app;
              tmp2 = null != app.section.application;
            }
            if (tmp2) {
              obj = { application: null, sectionName: null };
              tmp4 = app;
              obj.application = app.section.application;
              tmp5 = closure_0;
              tmp6 = closure_2;
              obj.sectionName = closure_0(closure_2[18]).AppLauncherSectionName.RECENT_APPS;
              tmpResult = tmp(obj);
            }
            return;
          }
        }
        cResult[2] = app.section.application;
        cResult[3] = onAppSelected;
        cResult[4] = A;
        tmp9 = A;
      }
    }
  : (app) => {
      let disabled;
      let items;
      let name;
      let submitting;
      app = app.app;
      ({ disabled, submitting } = app);
      if (submitting === undefined) {
        submitting = false;
      }
      const onAppSelected = app.onAppSelected;
      const tmp = closure_15();
      if (null == app.section) {
        return null;
      } else {
        const obj4 = app(11665);
        const appLauncherIconSource = obj4.getAppLauncherIconSource(app.section.application);
        let obj = {
          style: disabled ? tmp.appContainerDisabled : tmp.appContainer,
          disabled,
          accessible: true,
          accessibilityLabel: name,
          accessibilityRole: "button",
          onPress() {
            const tmp2 = null != onAppSelected && null != app.section.application;
            if (tmp2) {
              const obj = {
                application: app.section.application,
                sectionName: AppLauncherTypes.AppLauncherSectionName.RECENT_APPS,
              };
              onAppSelected(obj);
            }
          },
          children: items,
        };
        const application = app.section.application;
        name = undefined;
        const PressableOpacity = app(5909).PressableOpacity;
        const tmp7 = app;
        if (application != null) {
          name = application.name;
        }
        let tmp3 = null != appLauncherIconSource;
        if (tmp3) {
          const obj2 = { style: tmp.appIcon, source: appLauncherIconSource };
          tmp3 = closure_13(onAppSelected(5974), obj2);
        }
        items = [tmp3];
        const obj3 = { submitting, style: tmp.submittingOverlay };
        items[1] = closure_13(tmp7(11674).SubmittingOverlay, obj3);
        return closure_14(PressableOpacity, obj, app.applicationId);
      }
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySection.tsx");

export default tmp7;
export const SectionItemType = obj10;
