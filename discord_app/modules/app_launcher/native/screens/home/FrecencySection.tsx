// discord_app/modules/app_launcher/native/screens/home/FrecencySection.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import ReanimatedRexportDefault from "../../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import AppAnalyticsUtils from "../../../../app_analytics/AppAnalyticsUtils.tsx";
import useGetOrFetchApplicationsDefault from "../../../../applications/useGetOrFetchApplications.tsx";
import AppLauncherUtils from "../../../utils/AppLauncherUtils.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import ChevronSmallDownIcon from "../../../../../design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx";
import usePlaceholderSize from "../../hooks/usePlaceholderSize.tsx";
import FrecencySectionStoreActionCreators from "FrecencySectionStoreActionCreators.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../../activities/EmbeddedActivitiesStore.tsx";
import FrecencySectionStore from "FrecencySectionStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_3 = ["ref"];
get_ActivityIndicator = fn(17);
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
let FrecencySectionSelection = fn(11681).FrecencySectionSelection;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: { marginBottom: nativeDefault.space.PX_16 },
  headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  header: null,
  scrollView: null,
  scrollViewContentContainer: null,
  contextMenuIcon: null,
  appContainer: null,
  appContainerDisabled: null,
  commandContainer: null,
  appIcon: null,
  loadingCommandIcon: null,
  loadingTextPlaceholder: null,
  loadingTextPlaceholderSmall: null,
  submittingOverlay: null,
};
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.scrollView = { marginTop: 8, overflow: "visible" };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.scrollViewContentContainer = { gap: nativeDefault.space.PX_8 };
obj2.contextMenuIcon = { height: 16, width: 16 };
let obj5 = { gap: nativeDefault.space.PX_8 };
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.appContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
};
let obj6 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
};
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.appContainerDisabled = {
  backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
  opacity: 0.4,
};
let obj7 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
  opacity: 0.4,
};
obj2.commandContainer = {
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
let size = { width: 60, height: 60, borderRadius: nativeDefault.radii.lg };
obj2.appIcon = size;
const size1 = {
  width: 36,
  height: 36,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.loadingCommandIcon = size1;
let obj8 = {
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
obj2.loadingTextPlaceholder = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
  marginBottom: nativeDefault.space.PX_4,
};
let obj9 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
  marginBottom: nativeDefault.space.PX_4,
};
obj2.loadingTextPlaceholderSmall = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
const size2 = { position: "absolute", top: 0, left: 0, width: 60, height: 60, borderRadius: nativeDefault.radii.lg };
obj2.submittingOverlay = size2;
let closure_15 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = onlyActivityApps(576).c(5);
      ({ apps, onlyActivityApps } = arg0);
      if (cResult[0] === apps) {
        if (cResult[1] === onlyActivityApps) {
          useGetOrFetchApplicationsDefault(cResult[2]);
        }
      }
      if (cResult[3] !== onlyActivityApps) {
        const fn = function o(section) {
          let tmp = null;
          if (null != section.section) {
            let id = null;
            if (null != section.section.application) {
              id = null;
              if (obj.isActivityApp(section.section.application)) {
                id = null;
                if (onlyActivityApps) {
                  id = section.section.application.id;
                }
              }
              obj = AppLauncherUtils;
            }
            tmp = id;
          }
          return tmp;
        };
        cResult[3] = onlyActivityApps;
        cResult[4] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[4];
      }
      const mapped = apps.map(tmp4);
      const found = mapped.filter(onlyActivityApps(1375).isNotNullish);
      cResult[0] = apps;
      cResult[1] = onlyActivityApps;
      cResult[2] = found;
      let obj = onlyActivityApps(576);
    }
  : (apps) => {
      apps = apps.apps;
      const onlyActivityApps = apps.onlyActivityApps;
      const items = [apps, onlyActivityApps];
      const memo = noop.useMemo(() => {
        const mapped = apps.map((section) => {
          let tmp = null;
          if (null != section.section) {
            let id = null;
            if (null != section.section.application) {
              id = null;
              if (obj.isActivityApp(section.section.application)) {
                id = null;
                if (onlyActivityApps) {
                  id = section.section.application.id;
                }
              }
              obj = apps(dependencyMap[12]);
            }
            tmp = id;
          }
          return tmp;
        });
        return mapped.filter(GlobalUtils.isNotNullish);
      }, items);
      onlyActivityApps(6670)(memo);
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(19);
      const tmp2 = closure_15();
      const placeholderWidth = usePlaceholderSize.usePlaceholderWidth(20, 90);
      const placeholderWidth1 = usePlaceholderSize.usePlaceholderWidth(20, 70);
      if (cResult[0] !== tmp2.loadingCommandIcon) {
        const obj4 = { style: tmp2.loadingCommandIcon };
        const tmp8 = __initData2(React5, obj4);
        cResult[0] = tmp2.loadingCommandIcon;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== placeholderWidth) {
        const obj5 = { width: placeholderWidth };
        cResult[2] = placeholderWidth;
        cResult[3] = obj5;
        let tmp9 = obj5;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp2.loadingTextPlaceholder) {
        if (cResult[5] === tmp9) {
          let tmp10 = cResult[6];
        }
        if (cResult[7] !== placeholderWidth1) {
          const obj6 = { width: placeholderWidth1 };
          cResult[7] = placeholderWidth1;
          cResult[8] = obj6;
          let tmp12 = obj6;
        } else {
          tmp12 = cResult[8];
        }
        if (cResult[9] === tmp2.loadingTextPlaceholderSmall) {
          if (cResult[10] === tmp12) {
            let tmp13 = cResult[11];
          }
          if (cResult[12] === tmp10) {
            if (cResult[13] === tmp13) {
              let tmp17 = cResult[14];
            }
            if (cResult[15] === tmp2.commandContainer) {
              if (cResult[16] === tmp5) {
                if (cResult[17] === tmp17) {
                  let tmp21 = cResult[18];
                }
                return tmp21;
              }
            }
            const obj7 = { style: tmp2.commandContainer, children: null };
            const items = [tmp5, tmp17];
            obj7.children = items;
            const tmp24 = state(React5, obj7);
            cResult[15] = tmp2.commandContainer;
            cResult[16] = tmp5;
            cResult[17] = tmp17;
            cResult[18] = tmp24;
            tmp21 = tmp24;
          }
          const obj8 = { children: null };
          const items1 = [tmp10, tmp13];
          obj8.children = items1;
          const tmp20 = state(React5, obj8);
          cResult[12] = tmp10;
          cResult[13] = tmp13;
          cResult[14] = tmp20;
          tmp17 = tmp20;
        }
        const obj9 = { style: null };
        const items2 = [tmp2.loadingTextPlaceholderSmall, tmp12];
        obj9.style = items2;
        const tmp16 = __initData2(React5, obj9);
        cResult[9] = tmp2.loadingTextPlaceholderSmall;
        cResult[10] = tmp12;
        cResult[11] = tmp16;
        tmp13 = tmp16;
      }
      const obj10 = { style: null };
      const items3 = [tmp2.loadingTextPlaceholder, tmp9];
      obj10.style = items3;
      const tmp11 = __initData2(React5, obj10);
      cResult[4] = tmp2.loadingTextPlaceholder;
      cResult[5] = tmp9;
      cResult[6] = tmp11;
      tmp10 = tmp11;
    }
  : () => {
      const tmp = closure_15();
      const placeholderWidth = usePlaceholderSize.usePlaceholderWidth(20, 90);
      const obj3 = { style: tmp.commandContainer, children: null };
      const placeholderWidth1 = usePlaceholderSize.usePlaceholderWidth(20, 70);
      const items = [__initData2(React5, { style: tmp.loadingCommandIcon })];
      const obj5 = { children: null };
      const obj6 = { style: null };
      const items1 = [tmp.loadingTextPlaceholder, { width: placeholderWidth }];
      obj6.style = items1;
      const items2 = [__initData2(React5, obj6)];
      const obj7 = { style: null };
      const items3 = [tmp.loadingTextPlaceholderSmall, { width: placeholderWidth1 }];
      obj7.style = items3;
      items2[1] = __initData2(React5, obj7);
      obj5.children = items2;
      items[1] = state(React5, obj5);
      obj3.children = items;
      return state(React5, obj3);
    };
let obj11 = { APPS: 0, [0]: "APPS", COMMANDS: 1, [1]: "COMMANDS" };
let closure_19 = {
  code: 'function FrecencySectionTsx1(){const{withTiming,isRecentsMenuOpen}=this.__closure;return{transform:[{rotate:withTiming(isRecentsMenuOpen?"-180deg":"0deg")}]};}',
};
const __initData = {
  code: "function FrecencySectionTsx2(){const{withTiming,isRecentsMenuOpen}=this.__closure;return{transform:[{rotate:withTiming(isRecentsMenuOpen?'-180deg':'0deg')}]};}",
};
fn(558);
let obj10 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (context) => {
      const cResult = context(handleActivityItemSelected[11]).c(21);
      context = context.context;
      const app = context.app;
      const obj = context(handleActivityItemSelected[11]);
      const appLauncherContext = context(handleActivityItemSelected[16]).useAppLauncherContext();
      ({ entrypoint, onActivityItemSelected } = appLauncherContext);
      let id = noop.useId();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [EmbeddedActivitiesStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === app.applicationId) {
        if (cResult[2] === context.channel) {
          if (cResult[3] === context.type) {
            let tmp8 = cResult[4];
          }
          const tmpResult = tmp(tmp2[17]);
          [tmp11, tmp12] = tmp(tmp2[17]).useStateFromStoresArray(first, tmp8);
          if (cResult[5] === app.applicationId) {
            if (cResult[6] === context) {
              let tmp13 = cResult[7];
            }
            let isLaunching = null != tmp12;
            const activityAction = tmp(tmp2[33]).useActivityAction(tmp13);
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
                    if (cResult[12] === onActivityItemSelected) {
                      let tmp16 = cResult[13];
                    }
                    handleActivityItemSelected = tmp(tmp2[25]).useHandleActivityItemSelected(
                      tmp16,
                    ).handleActivityItemSelected;
                    if (cResult[14] !== handleActivityItemSelected) {
                      class O {
                        constructor() {
                          tmp = closure_2();
                          return;
                        }
                      }
                      cResult[14] = handleActivityItemSelected;
                      cResult[15] = O;
                    } else {
                      class O {
                        constructor() {
                          tmp = closure_2();
                          return;
                        }
                      }
                    }
                    if (!tmp11) {
                      class O {
                        constructor() {
                          tmp = closure_2();
                          return;
                        }
                      }
                    }
                    if (cResult[16] === app) {
                      class O {
                        constructor() {
                          tmp = closure_2();
                          return;
                        }
                      }
                    }
                    const obj3 = { app, disabled: tmp11, submitting: isLaunching, onAppSelected: O };
                    const tmp21 = closure_13(closure_22, obj3);
                    cResult[16] = app;
                    cResult[17] = O;
                    cResult[18] = isLaunching;
                    cResult[19] = tmp11;
                    cResult[20] = tmp21;
                    const tmpResult4 = tmp(tmp2[25]);
                  }
                }
              }
            }
            const obj4 = {
              applicationId: app.applicationId,
              context,
              sectionName: tmp(tmp2[18]).AppLauncherSectionName.RECENT_APPS,
              onActivityItemSelected,
              location: tmp(tmp2[34]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME,
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
            const tmpResult3 = tmp(tmp2[33]);
          }
          const obj5 = { context, applicationId: app.applicationId };
          cResult[5] = app.applicationId;
          cResult[6] = context;
          cResult[7] = obj5;
          tmp13 = obj5;
          const tmp10 = _slicedToArray(tmp(tmp2[17]).useStateFromStoresArray(first, tmp8), 2);
        }
      }
      const fn = function c() {
        const items = [EmbeddedActivitiesStore.isLaunchingActivity()];
        let id;
        if ("channel" === context.type) {
          id = context.channel.id;
        }
        items[1] = EmbeddedActivitiesStore.getLaunchState(app.applicationId, id);
        return items;
      };
      cResult[1] = app.applicationId;
      cResult[2] = context.channel;
      cResult[3] = context.type;
      cResult[4] = fn;
      tmp8 = fn;
      const obj2 = context(handleActivityItemSelected[16]);
    }
  : (context) => {
      context = context.context;
      const app = context.app;
      let handleActivityItemSelected;
      const appLauncherContext = context(handleActivityItemSelected[16]).useAppLauncherContext();
      ({ entrypoint, onActivityItemSelected } = appLauncherContext);
      let id = noop.useId();
      const obj = context(handleActivityItemSelected[16]);
      let items = [EmbeddedActivitiesStore];
      const obj3 = context(handleActivityItemSelected[17]);
      [tmp6, tmp7] = context(handleActivityItemSelected[17]).useStateFromStoresArray(items, () => {
        const items = [EmbeddedActivitiesStore.isLaunchingActivity()];
        let id;
        if ("channel" === context.type) {
          id = context.channel.id;
        }
        items[1] = EmbeddedActivitiesStore.getLaunchState(app.applicationId, id);
        return items;
      });
      const tmp5 = _slicedToArray(
        context(handleActivityItemSelected[17]).useStateFromStoresArray(items, () => {
          const items = [EmbeddedActivitiesStore.isLaunchingActivity()];
          let id;
          if ("channel" === context.type) {
            id = context.channel.id;
          }
          items[1] = EmbeddedActivitiesStore.getLaunchState(app.applicationId, id);
          return items;
        }),
        2,
      );
      let isLaunching = null != tmp7;
      const activityAction = context(handleActivityItemSelected[33]).useActivityAction({
        context,
        applicationId: app.applicationId,
      });
      if (isLaunching) {
        isLaunching = tmp7.isLaunching;
      }
      if (isLaunching) {
        isLaunching = tmp7.componentId === id;
      }
      const obj4 = context(handleActivityItemSelected[33]);
      const obj5 = { context, applicationId: app.applicationId };
      const tmpResult = context(handleActivityItemSelected[25]);
      handleActivityItemSelected = tmpResult.useHandleActivityItemSelected({
        applicationId: app.applicationId,
        context,
        sectionName: context(handleActivityItemSelected[18]).AppLauncherSectionName.RECENT_APPS,
        onActivityItemSelected,
        location: context(handleActivityItemSelected[34]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME,
        entrypoint,
        launchingComponentId: id,
        fetchesApplication: false,
      }).handleActivityItemSelected;
      const items1 = [handleActivityItemSelected];
      const obj7 = { app, disabled: null, submitting: null, onAppSelected: null };
      const callback = noop.useCallback(() => {
        handleActivityItemSelected();
      }, items1);
      if (!tmp6) {
        tmp6 = activityAction === tmp(tmp2[33]).ActivityAction.LEAVE;
      }
      obj7.disabled = tmp6;
      obj7.submitting = isLaunching;
      obj7.onAppSelected = callback;
      return closure_13(closure_22, obj7);
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (app) => {
      const cResult = app(576).c(19);
      app = app.app;
      ({ disabled, submitting, onAppSelected } = app);
      const tmp5 = closure_15();
      if (null == app.section) {
        return null;
      } else {
        if (cResult[0] !== app.section.application) {
          const appLauncherIconSource = tmp(11679).getAppLauncherIconSource(app.section.application);
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
          const tmpResult = tmp(11679);
        }
        const tmp8 = disabled ? tmp5.appContainerDisabled : tmp5.appContainer;
        const application = app.section.application;
        if (application != null) {
          const name = application.name;
        }
        if (cResult[2] === app.section.application) {
          if (cResult[3] === onAppSelected) {
            let tmp9 = cResult[4];
          }
          if (cResult[5] === tmp6) {
            if (cResult[6] === tmp5.appIcon) {
              let tmp10 = cResult[7];
            }
            if (cResult[8] === tmp5.submittingOverlay) {
              if (cResult[9] === tmp4) {
                let tmp14 = cResult[10];
              }
              if (cResult[11] === app.applicationId) {
                if (cResult[12] === disabled) {
                  if (cResult[13] === tmp8) {
                    if (cResult[14] === name) {
                      if (cResult[15] === tmp9) {
                        if (cResult[16] === tmp10) {
                          if (cResult[17] === tmp14) {
                            let tmp17 = cResult[18];
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
                onPress: null,
                children: null,
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
              obj2.onPress = tmp9;
              const items = [tmp10, tmp14];
              obj2.children = items;
              const tmp19 = closure_14(tmp(5916).PressableOpacity, obj2, app.applicationId);
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
            const obj3 = { submitting: tmp4, style: tmp5.submittingOverlay };
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
            cResult[9] = tmp4;
            cResult[10] = tmp16;
            tmp14 = tmp16;
          }
          let tmp11 = null != tmp6;
          if (tmp11) {
            const obj4 = { style: tmp5.appIcon, source: tmp6 };
            tmp11 = closure_13(onAppSelected(5981), obj4);
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
      let obj = app(576);
    }
  : (app) => {
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
        const appLauncherIconSource = app(11679).getAppLauncherIconSource(app.section.application);
        let obj = {
          style: disabled ? tmp.appContainerDisabled : tmp.appContainer,
          disabled,
          accessible: true,
          accessibilityLabel: null,
          accessibilityRole: "button",
          onPress: null,
          children: null,
        };
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
            const obj = {
              application: app.section.application,
              sectionName: AppLauncherTypes.AppLauncherSectionName.RECENT_APPS,
            };
            onAppSelected(obj);
          }
        };
        let tmp3 = null != appLauncherIconSource;
        if (tmp3) {
          const obj2 = { style: tmp.appIcon, source: appLauncherIconSource };
          tmp3 = closure_13(onAppSelected(5981), obj2);
        }
        const items = [tmp3];
        const obj3 = { submitting, style: tmp.submittingOverlay };
        items[1] = closure_13(app(11688).SubmittingOverlay, obj3);
        obj.children = items;
        return closure_14(app(5916).PressableOpacity, obj, app.applicationId);
      }
    };
size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (context) => {
      const cResult = context(commands[11]).c(78);
      context = context.context;
      const sectionDescriptors = context.sectionDescriptors;
      commands = context.commands;
      const loading = context.loading;
      const apps = context.apps;
      const onAppSelected = context.onAppSelected;
      const onCommandSelected = context.onCommandSelected;
      const onViewAllSelected = context.onViewAllSelected;
      let obj = context(commands[11]);
      closure_8 = closure_15();
      const tmp4 = closure_15();
      const tmp6 = onAppSelected(onCommandSelected.useState(false), 2);
      EmbeddedActivitiesStore = tmp6[0];
      FrecencySectionStore = tmp6[1];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [FrecencySectionStore];
        class I {
          constructor() {
            return closure_10.getSelection();
          }
        }
        cResult[0] = items;
        cResult[1] = I;
        tmp7 = items;
      } else {
        [tmp7, tmp8] = cResult;
      }
      let obj2 = context(commands[16]);
      let obj3 = onCommandSelected;
      const tmp5 = onAppSelected;
      const stateFromStores = context(commands[17]).useStateFromStores(tmp7, I);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items1 = [EmbeddedActivitiesStore];
        class K {
          constructor() {
            return closure_9.isLaunchingActivity();
          }
        }
        cResult[2] = items1;
        cResult[3] = K;
      }
      context(commands[17]);
      if (commands.length > 0) {
        if (stateFromStores === FrecencySectionSelection.COMMANDS) {
          let APPS = obj11.COMMANDS;
        }
        class K {
          constructor() {
            return closure_9.isLaunchingActivity();
          }
        }
        FrecencySectionSelection = tmp20;
        closure_12 = tmp5(tmp15(APPS), 2)[1];
        const tmp21 = obj2.useAppLauncherContext().entrypoint === tmp(tmp2[18]).AppLauncherEntrypoint.VOICE;
        closure_13 = tmp21;
        if (cResult[4] === apps.length) {
          if (cResult[5] === commands.length) {
            if (cResult[6] === loading) {
              if (cResult[7] === tmp20) {
                let tmp22 = cResult[8];
                let tmp23 = cResult[9];
              }
              const effect = obj3.useEffect(tmp22, tmp23);
              if (cResult[10] !== apps) {
                const substr = apps.slice(0, 8);
                class K {
                  constructor() {
                    return closure_9.isLaunchingActivity();
                  }
                }
                cResult[11] = substr;
                let tmp25 = substr;
              } else {
                tmp25 = cResult[11];
              }
              class K {
                constructor() {
                  return closure_9.isLaunchingActivity();
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
            if (closure_11 === obj11.APPS) {
              let length = apps.length;
            } else {
              length = commands.length;
            }
            let obj2 = { num: length, section_name: null, location: null };
            if (closure_11 === obj11.APPS) {
              let RECENT_COMMANDS = AppLauncherTypes.AppLauncherSectionName.RECENT_APPS;
            } else {
              RECENT_COMMANDS = AppLauncherTypes.AppLauncherSectionName.RECENT_COMMANDS;
            }
            obj2.section_name = RECENT_COMMANDS;
            HOME = AppLauncherTypes.AppLauncherLocations.HOME;
            obj2.location = HOME;
            obj2 = AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN, obj2);
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
        let tmp5Result = tmp5(tmp15(APPS), 2);
      }
      APPS = obj11.APPS;
      const tmpResult = context(commands[17]);
    }
  : (loading) => {
      ({ context: require, sectionDescriptors: importDefault, commands } = loading);
      loading = loading.loading;
      const apps = loading.apps;
      ({ onAppSelected: _slicedToArray, onCommandSelected: noop, onViewAllSelected: closure_7 } = loading);
      isRecentsMenuOpen = undefined;
      selection = undefined;
      first1 = undefined;
      closure_12 = undefined;
      closure_13 = undefined;
      let style;
      let COMMANDS;
      let tmp = COMMANDS();
      closure_8 = tmp;
      [isRecentsMenuOpen, selection] = noop.useState(false);
      let obj = require("AppLauncherContext");
      let items = [selection];
      const stateFromStores = require("initialize").useStateFromStores(items, () => selection.getSelection());
      require("initialize");
      [][0] = isRecentsMenuOpen;
      if (commands.length > 0) {
        if (stateFromStores === first1.COMMANDS) {
          let APPS = obj11.COMMANDS;
          let tmp12 = obj11;
        }
        [first1, closure_12] = tmp10(APPS);
        const tmp16 =
          obj.useAppLauncherContext().entrypoint === require("AppLauncherTypes").AppLauncherEntrypoint.VOICE;
        closure_13 = tmp16;
        let items1 = [commands.length, apps.length, loading, first1];
        const effect = noop.useEffect(() => {
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
        const memo = noop.useMemo(() => apps.slice(0, 8), items2);
        let obj4 = { apps: memo, onlyActivityApps: tmp16 };
        closure_16(obj4);
        const fn = function z() {
          let str = "0deg";
          if (first) {
            str = "-180deg";
          }
          const obj2 = { transform: null };
          const items = [{ rotate: timing.withTiming(str) }];
          obj2.transform = items;
          return obj2;
        };
        let obj5 = { withTiming: require("timing").withTiming, isRecentsMenuOpen };
        fn.__closure = obj5;
        fn.__workletHash = 1244874825047;
        fn.__initData = __initData;
        style = require("ReanimatedRexport").useAnimatedStyle(fn);
        if (0 === commands.length) {
          if (0 === apps.length) {
            return null;
          }
        }
        let obj6 = { label: null, IconComponent: null, action: null };
        let intl = require("util").intl;
        obj6.label = intl.string(require("util").t.XRBNsN);
        let prop;
        if (first1 === tmp12.COMMANDS) {
          prop = require("CheckmarkSmallBoldIcon").CheckmarkSmallBoldIcon;
        }
        obj6.IconComponent = prop;
        obj6.action = function action() {
          closure_12(obj11.COMMANDS);
          const result = FrecencySectionStoreActionCreators.setFrecencySectionSelection(
            FrecencySectionSelection.COMMANDS,
          );
          const obj2 = AppAnalyticsUtils;
          obj2.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_TOGGLED, {
            num: commands.length,
            section_name: AppLauncherTypes.AppLauncherSectionName.RECENT_COMMANDS,
          });
        };
        const items3 = [obj6];
        const obj7 = { label: null, IconComponent: null, action: null };
        const intl2 = require("util").intl;
        obj7.label = intl2.string(require("util").t.TCAk0p);
        let prop1;
        if (first1 === tmp12.APPS) {
          prop1 = require("CheckmarkSmallBoldIcon").CheckmarkSmallBoldIcon;
        }
        obj7.IconComponent = prop1;
        obj7.action = function action() {
          closure_12(obj11.APPS);
          const result = FrecencySectionStoreActionCreators.setFrecencySectionSelection(FrecencySectionSelection.APPS);
          const obj2 = AppAnalyticsUtils;
          obj2.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_TOGGLED, {
            num: apps.length,
            section_name: AppLauncherTypes.AppLauncherSectionName.RECENT_APPS,
          });
        };
        items3[1] = obj7;
        const substr = commands.slice(0, 8);
        const mapped = substr.map((type) => {
          found = found.find((id) => id.id === type.applicationId);
          let application;
          if (found != null) {
            application = found.application;
          }
          const appLauncherIconSource = context(commands[25]).getAppLauncherIconSource(application);
          if (null == found) {
            return null;
          } else {
            let FAKE_BUILT_IN_APP = found.application;
            if (FAKE_BUILT_IN_APP == null) {
              FAKE_BUILT_IN_APP = context(commands[12]).FAKE_BUILT_IN_APP;
            }
            const sectionName = context(commands[12]).getSectionName(FAKE_BUILT_IN_APP);
            if (type.type === context(commands[26]).ApplicationCommandType.PRIMARY_ENTRY_POINT) {
              let displayName = context(commands[12]).formatPrimaryEntryPointCommandName(type.displayName);
              const tmp2Result2 = context(commands[12]);
            } else {
              displayName = type.displayName;
            }
            const obj2 = {
              style: closure_8.commandContainer,
              accessible: true,
              accessibilityLabel: null,
              accessibilityRole: "button",
              onPress: null,
              children: null,
            };
            const _HermesInternal = HermesInternal;
            obj2.accessibilityLabel = "" + displayName + " " + sectionName;
            obj2.onPress = function onPress() {
              return noop(closure_0, found);
            };
            let tmp10 = null != appLauncherIconSource;
            if (tmp10) {
              const obj3 = { iconSize: 36, iconSource: appLauncherIconSource };
              tmp10 = closure_13(require("EntityBorderAppIcon"), obj3);
            }
            const items = [tmp10];
            const obj4 = { children: null };
            const obj5 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: displayName };
            const items1 = [closure_13(context(commands[29]).Text, obj5)];
            const obj6 = { variant: "text-xs/normal", color: "text-subtle", children: sectionName };
            items1[1] = closure_13(context(commands[29]).Text, obj6);
            obj4.children = items1;
            items[1] = style(closure_1_7, obj4);
            obj2.children = items;
            return style(context(commands[27]).PressableScale, obj2, type.id);
          }
          const obj = context(commands[25]);
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
              let tmp8 = __initData2(closure_21, obj2, applicationId);
            }
            const obj3 = { app: applicationId, onAppSelected };
            tmp8 = __initData2(closure_22, obj3, applicationId.applicationId);
          }
        });
        const filter = mapped1.filter;
        if (0 === commands.length) {
          if (apps.length > 0) {
            COMMANDS = tmp12.APPS;
          }
          let mapped2 = tmp24;
          if (COMMANDS === tmp12.COMMANDS) {
            mapped2 = found;
          }
          const obj8 = { style: tmp.container, children: null };
          const obj9 = { style: tmp.headerContainer, children: null };
          let tmp29 = commands.length > 0;
          if (tmp29) {
            tmp29 = apps.length > 0;
          }
          const obj10 = {
            enabled: tmp29,
            items: items3,
            triggerOnTap: true,
            onOpen() {
              return selection(true);
            },
            onClose() {
              return selection(false);
            },
            children(ref) {
              const obj = { style: closure_8.header };
              const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
              obj.ref = ref.ref;
              const obj2 = {
                accessibilityRole: "header",
                variant: "text-lg/bold",
                color: "mobile-text-heading-primary",
                children: null,
              };
              const intl = util.intl;
              obj2.children = intl.string(util.t.acSE0h);
              const items = [__initData2(Text_Text.Text, obj2)];
              let tmp5Result = null;
              if (commands.length > 0) {
                tmp5Result = null;
                if (apps.length > 0) {
                  const obj3 = { style, children: null };
                  const obj4 = { color: "interactive-text-default", style: closure_8.contextMenuIcon };
                  obj3.children = __initData2(ChevronSmallDownIcon.ChevronSmallDownIcon, obj4);
                  tmp5Result = __initData2(ReanimatedRexportDefault.View, obj3);
                }
              }
              items[1] = tmp5Result;
              obj.children = items;
              return state(React5, obj);
            },
          };
          const items4 = [closure_13(require("ContextMenu").ContextMenu, obj10)];
          let tmp30 = COMMANDS === tmp12.APPS;
          if (tmp30) {
            tmp30 = tmp9;
          }
          obj11 = {
            disabled: tmp30,
            onPress() {
              return closure_1_7(COMMANDS);
            },
            accessibilityRole: "button",
            children: null,
          };
          const obj12 = { variant: "text-sm/medium", color: "text-brand", children: null };
          const intl3 = require("util").intl;
          obj12.children = intl3.string(require("util").t["/qG8v7"]);
          obj11.children = closure_13(require("Text/Text").Text, obj12);
          items4[1] = closure_13(require("Pressables").PressableOpacity, obj11);
          obj9.children = items4;
          const items5 = [style(closure_7, obj9)];
          const obj13 = {
            style: null,
            contentContainerStyle: null,
            horizontal: true,
            showsHorizontalScrollIndicator: false,
            children: null,
          };
          ({ scrollView: obj14.style, scrollViewContentContainer: obj14.contentContainerStyle } = tmp);
          if (loading) {
            const items6 = [1, 2, 3, 4, 5];
            mapped2 = items6.map((item, index) => closure_13(closure_1_17, {}, index));
          }
          obj13.children = mapped2;
          items5[1] = closure_13(closure_8, obj13);
          obj8.children = items5;
          return style(closure_7, obj8);
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
      tmp12 = obj11;
      APPS = obj11.APPS;
      let obj3 = require("initialize");
    };
export const SectionItemType = obj11;
