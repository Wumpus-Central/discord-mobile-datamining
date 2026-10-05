// discord_app/modules/activities/panel/native/ActivityPanelHeader.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import useGetOrFetchApplicationsDefault from "../../../applications/useGetOrFetchApplications.tsx";
import ActivityPanelStateContextDefault from "ActivityPanelStateContext.tsx";
import BlurVisualEffectViewDefault from "BlurVisualEffectView.tsx";
import InviteActivityButtonDefault from "InviteActivityButton.tsx";
import MinimizeActivityButtonDefault from "MinimizeActivityButton.tsx";
import QuestActivityButtonDefault from "../../../frames/panel/native/QuestActivityButton.tsx";
import LeaveActivityButtonDefault from "LeaveActivityButton.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../EmbeddedActivitiesStore.tsx";

const native = GestureDetector(4589);
const LegacyBaseButton = GestureDetector(6140);
require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const ActivityPanelConstants = fn(8705);
({
  ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT: closure_8,
  LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: closure_9,
  ActivityPanelModes: c10,
} = ActivityPanelConstants);
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let createStyles = fn(4890);
let obj = { panelHeader: null, panelLandscape: null, headerContainer: null, pullIndicator: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.justifyContent = "space-between";
obj3.alignItems = "center";
obj3.flexDirection = "row";
obj3.gap = 8;
obj.panelHeader = obj3;
obj.panelLandscape = { flexDirection: "column-reverse" };
obj.headerContainer = { position: "absolute", top: 0 };
let size = {
  backgroundColor: nativeDefault.colors.WHITE,
  borderRadius: nativeDefault.radii.sm,
  width: 32,
  height: 4,
  alignSelf: "center",
  marginTop: 4,
  opacity: 0.3,
};
obj.pullIndicator = size;
let closure_14 = createStyles.createStyles(obj);
const __initData = {
  code: "function ActivityPanelHeaderTsx1(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PIP);}",
};
const __initData2 = {
  code: "function ActivityPanelHeaderTsx2(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PIP);}",
};
let ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = setMode(576).c(24);
      ({ landscape, setMode } = arg0);
      ({ wrapperOffset, pipState } = arg0);
      const tmp4 = closure_14();
      const rect = useSafeAreaInsetsDefault();
      let num = 0;
      if (!landscape) {
        num = nativeDefault.radii.lg;
      }
      if (cResult[0] !== num) {
        const obj2 = { borderTopStartRadius: num, borderTopEndRadius: num };
        cResult[0] = num;
        cResult[1] = obj2;
        let tmp6 = obj2;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== tmp6) {
        const items = [StyleSheet.absoluteFill, tmp6];
        cResult[2] = tmp6;
        cResult[3] = items;
      }
      let num5 = 8;
      if (landscape) {
        num5 = 24;
      }
      if (landscape) {
        const panelLandscape = tmp4.panelLandscape;
      }
      let num6 = 8;
      if (landscape) {
        num6 = 24;
      }
      let num7 = 16;
      if (!landscape) {
        num7 = 8 + rect.left;
      }
      let num8 = 16;
      if (!landscape) {
        num8 = 8 + rect.right;
      }
      if (cResult[4] === num5) {
        if (cResult[5] === num6) {
          if (cResult[6] === num7) {
            if (cResult[7] === num8) {
              let tmp9 = cResult[8];
            }
            if (cResult[9] === tmp4.panelHeader) {
              if (cResult[10] === panelLandscape) {
                if (cResult[13] !== setMode) {
                  class T {
                    constructor() {
                      obj = closure_0(closure_2[12]);
                      tmp = obj.runOnJS(setMode)(ActivityPanelModes.PIP);
                      return;
                    }
                  }
                  const obj3 = { runOnJS: setMode(4612).runOnJS, setMode, ActivityPanelModes };
                  T.__closure = obj3;
                  T.__workletHash = 14504167937928;
                  T.__initData = __initData;
                  cResult[13] = setMode;
                  cResult[14] = T;
                } else {
                  class T {
                    constructor() {
                      obj = closure_0(closure_2[12]);
                      tmp = obj.runOnJS(setMode)(ActivityPanelModes.PIP);
                      return;
                    }
                  }
                }
                if (cResult[15] === T) {
                  class T {
                    constructor() {
                      obj = closure_0(closure_2[12]);
                      tmp = obj.runOnJS(setMode)(ActivityPanelModes.PIP);
                      return;
                    }
                  }
                }
                const obj4 = {
                  mode: setMode(17174).MorphablePanelModes.PANEL,
                  panGestureEnabled: true,
                  pipState,
                  swipeRequiresPop: true,
                  wrapperOffset,
                  onPanMinimizeGestureEnd: T,
                  disableHorizontalSafeAreas: true,
                };
                cResult[15] = T;
                cResult[16] = pipState;
                cResult[17] = wrapperOffset;
                cResult[18] = obj4;
              }
            }
            const items1 = [tmp4.panelHeader, panelLandscape, tmp9];
            cResult[9] = tmp4.panelHeader;
            cResult[10] = panelLandscape;
            cResult[11] = tmp9;
            cResult[12] = items1;
          }
        }
      }
      const obj5 = { paddingTop: num5, paddingBottom: num6, paddingLeft: num7, paddingRight: num8 };
      cResult[4] = num5;
      cResult[5] = num6;
      cResult[6] = num7;
      cResult[7] = num8;
      cResult[8] = obj5;
      tmp9 = obj5;
      const obj = setMode(576);
    }
  : (landscape) => {
      landscape = landscape.landscape;
      const setMode = landscape.setMode;
      ({ wrapperOffset, pipState } = landscape);
      const tmp = closure_14();
      dependencyMap = tmp;
      const tmp2 = setMode(1618)();
      closure_3 = tmp2;
      let items = [landscape];
      const items1 = [landscape, tmp2, ,];
      ({ panelHeader: arr2[2], panelLandscape: arr2[3] } = tmp);
      const memo = noop.useMemo(() => {
        let num = 0;
        if (!landscape) {
          num = nativeDefault.radii.lg;
        }
        const items = [StyleSheet.absoluteFill, { borderTopStartRadius: num, borderTopEndRadius: num }];
        return items;
      }, items);
      const fn = function c() {
        ReanimatedRexport.runOnJS(setMode)(ActivityPanelModes.PIP);
      };
      let obj = { runOnJS: null, setMode: null, ActivityPanelModes: null };
      const memo1 = noop.useMemo(() => {
        let num = 8;
        if (landscape) {
          num = 24;
        }
        const items = [closure_2.panelHeader, ,];
        let panelLandscape;
        if (landscape) {
          panelLandscape = closure_2.panelLandscape;
        }
        items[1] = panelLandscape;
        const obj = { paddingTop: num, paddingBottom: null, paddingLeft: null, paddingRight: null };
        let num2 = 8;
        if (landscape) {
          num2 = 24;
        }
        obj.paddingBottom = num2;
        let num3 = 16;
        let num4 = 16;
        if (!landscape) {
          num4 = 8 + closure_3.left;
        }
        obj.paddingLeft = num4;
        if (!landscape) {
          num3 = 8 + closure_3.right;
        }
        obj.paddingRight = num3;
        items[2] = obj;
        return items;
      }, items1);
      obj.runOnJS = landscape(4612).runOnJS;
      obj.setMode = setMode;
      obj.ActivityPanelModes = ActivityPanelModes;
      fn.__closure = obj;
      fn.__workletHash = 2822287991787;
      fn.__initData = __initData2;
      const items2 = [setMode];
      const obj2 = { gesture: null, headerWrapperStyles: null, headerStyles: null, styles: null };
      const callback = noop.useCallback(fn, items2);
      const obj3 = {
        mode: landscape(17174).MorphablePanelModes.PANEL,
        panGestureEnabled: true,
        pipState,
        swipeRequiresPop: true,
        wrapperOffset,
        onPanMinimizeGestureEnd: callback,
        disableHorizontalSafeAreas: true,
      };
      obj2.gesture = setMode(17174)(obj3);
      obj2.headerWrapperStyles = memo;
      obj2.headerStyles = memo1;
      obj2.styles = tmp;
      return obj2;
    };
let closure_17 = tmp6;
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (hasConnectedActivity) => {
      let GestureDetector = require;
      let tmp = dependencyMap;
      const cResult = c.c(14);
      ({ children, gesture, headerWrapperStyles, headerStyles, landscape } = hasConnectedActivity);
      const tmp3 = closure_14();
      if (!hasConnectedActivity.hasConnectedActivity) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp8 = __initData(BlurVisualEffectViewDefault, {});
          cResult[0] = tmp8;
          let first = tmp8;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === landscape) {
          if (cResult[2] === tmp3) {
            let tmp9 = cResult[3];
          }
          if (cResult[4] === children) {
            if (cResult[5] === headerStyles) {
              let tmp13 = cResult[6];
            }
            if (cResult[7] === headerWrapperStyles) {
              if (cResult[8] === tmp9) {
                if (cResult[9] === tmp13) {
                  let tmp17 = cResult[10];
                }
                if (cResult[11] === gesture) {
                }
                const obj2 = { theme: ThemeTypes.DARK, children: null };
                GestureDetector = LegacyBaseButton.GestureDetector;
                const obj3 = { gesture, children: tmp17 };
                tmp = __initData(GestureDetector, obj3);
                obj2.children = tmp;
                const tmp24 = __initData(native.ThemeContextProvider, obj2);
                cResult[11] = gesture;
                cResult[12] = tmp17;
                cResult[13] = tmp24;
              }
            }
            const obj4 = { style: headerWrapperStyles, children: null };
            const items = [first, tmp9, tmp13];
            obj4.children = items;
            const tmp20 = __initData2(hasOwnProperty, obj4);
            cResult[7] = headerWrapperStyles;
            cResult[8] = tmp9;
            cResult[9] = tmp13;
            cResult[10] = tmp20;
            tmp17 = tmp20;
          }
          const obj5 = { style: headerStyles, children };
          const tmp16 = __initData(hasOwnProperty, obj5);
          cResult[4] = children;
          cResult[5] = headerStyles;
          cResult[6] = tmp16;
          tmp13 = tmp16;
        }
        let tmp10 = !landscape;
        if (!landscape) {
          const obj6 = { style: tmp3.pullIndicator };
          tmp10 = __initData(hasOwnProperty, obj6);
        }
        cResult[1] = landscape;
        cResult[2] = tmp3;
        cResult[3] = tmp10;
        tmp9 = tmp10;
      }
    }
  : (landscape) => {
      landscape = landscape.landscape;
      ({ children, hasConnectedActivity, gesture, headerWrapperStyles, headerStyles } = landscape);
      let tmp3Result2 = null;
      if (hasConnectedActivity) {
        const obj = { theme: ThemeTypes.DARK, children: null };
        const obj2 = { gesture, children: null };
        const obj3 = { style: headerWrapperStyles, children: null };
        const items = [__initData(BlurVisualEffectViewDefault, {}), ,];
        let tmp3Result = !landscape;
        if (!landscape) {
          const obj4 = { style: tmp.pullIndicator };
          tmp3Result = __initData(hasOwnProperty, obj4);
        }
        items[1] = tmp3Result;
        const obj5 = { style: headerStyles, children };
        items[2] = __initData(hasOwnProperty, obj5);
        obj3.children = items;
        obj2.children = __initData2(hasOwnProperty, obj3);
        obj.children = __initData(LegacyBaseButton.GestureDetector, obj2);
        tmp3Result2 = __initData(native.ThemeContextProvider, obj);
      }
      return tmp3Result2;
    };
let closure_18 = tmp7;
createStyles = fn(4890);
let obj4 = {
  buttonContainer: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 },
  buttonContainerLandscape: { flexDirection: "column-reverse" },
};
const styles = createStyles.createStyles(obj4);
ReactCompilerGating = fn(558);
let closure_20 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(37);
        ({ landscape, setMode, pipState, wrapperOffset } = arg0);
        if (cResult[0] === landscape) {
          if (cResult[1] === pipState) {
            if (cResult[2] === setMode) {
              if (cResult[3] === wrapperOffset) {
                let tmp4 = cResult[4];
              }
              ({ gesture, headerWrapperStyles, headerStyles } = closure_17(tmp4));
              const _Symbol = Symbol;
              if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
                const items = [EmbeddedActivitiesStore];
                const fn = function y() {
                  return EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(
                    EmbeddedActivitiesStore.getConnectedActivityLocation(),
                  );
                };
                const items1 = [];
                cResult[5] = items;
                cResult[6] = fn;
                cResult[7] = items1;
                let tmp10 = items1;
                let tmp9 = fn;
                let tmp8 = items;
              } else {
                tmp8 = cResult[5];
                tmp9 = cResult[6];
                tmp10 = cResult[7];
              }
              const tmp6 = closure_17(tmp4);
              const stateFromStores = initialize.useStateFromStores(tmp8, tmp9, tmp10);
              let applicationId;
              if (stateFromStores != null) {
                applicationId = stateFromStores.applicationId;
              }
              if (cResult[8] !== applicationId) {
                const items2 = [applicationId];
                cResult[8] = applicationId;
                cResult[9] = items2;
                let tmp15 = items2;
              } else {
                tmp15 = cResult[9];
              }
              const first = _slicedToArray(useGetOrFetchApplicationsDefault(tmp15), 1)[0];
              const tmp20 = styles();
              let id;
              if (first != null) {
                id = first.id;
              }
              if (cResult[10] !== id) {
                const obj2 = { applicationId: id };
                const tmp24 = __initData(InviteActivityButtonDefault, obj2);
                cResult[10] = id;
                cResult[11] = tmp24;
                let tmp22 = tmp24;
              } else {
                tmp22 = cResult[11];
              }
              let prop;
              if (landscape) {
                prop = tmp20.buttonContainerLandscape;
              }
              if (cResult[12] === tmp20.buttonContainer) {
                if (cResult[13] === prop) {
                  let tmp27 = cResult[14];
                }
                let tmp28;
                if (!landscape) {
                  let name;
                  if (first != null) {
                    name = first.name;
                  }
                  tmp28 = name;
                }
                if (cResult[15] === setMode) {
                  if (cResult[16] === tmp28) {
                    let tmp30 = cResult[17];
                  }
                  if (cResult[18] !== applicationId) {
                    let tmp34 = null != applicationId;
                    if (tmp34) {
                      const obj3 = { applicationId };
                      tmp34 = __initData(QuestActivityButtonDefault, obj3);
                    }
                    cResult[18] = applicationId;
                    cResult[19] = tmp34;
                    let tmp33 = tmp34;
                  } else {
                    tmp33 = cResult[19];
                  }
                  let tmp36 = null;
                  if (landscape) {
                    tmp36 = tmp22;
                  }
                  if (cResult[20] === tmp27) {
                    if (cResult[21] === tmp30) {
                      if (cResult[22] === tmp33) {
                        if (cResult[23] === tmp36) {
                          let tmp37 = cResult[24];
                        }
                        let tmp41 = null;
                        if (!landscape) {
                          tmp41 = tmp22;
                        }
                        if (cResult[25] === setMode) {
                          if (cResult[26] === tmp42) {
                            let tmp43 = cResult[27];
                          }
                          if (cResult[28] === gesture) {
                            if (cResult[29] === headerStyles) {
                              if (cResult[30] === headerWrapperStyles) {
                                if (cResult[31] === landscape) {
                                  if (cResult[32] === tmp37) {
                                    if (cResult[33] === tmp41) {
                                      if (cResult[34] === tmp43) {
                                        if (cResult[35] === tmp25) {
                                          let tmp46 = cResult[36];
                                        }
                                        return tmp46;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          const obj4 = {
                            hasConnectedActivity: tmp25,
                            gesture,
                            headerWrapperStyles,
                            headerStyles,
                            landscape,
                            children: null,
                          };
                          const items3 = [tmp37, tmp41, tmp43];
                          obj4.children = items3;
                          const tmp49 = __initData2(closure_18, obj4);
                          cResult[28] = gesture;
                          cResult[29] = headerStyles;
                          cResult[30] = headerWrapperStyles;
                          cResult[31] = landscape;
                          cResult[32] = tmp37;
                          cResult[33] = tmp41;
                          cResult[34] = tmp43;
                          cResult[35] = tmp25;
                          cResult[36] = tmp49;
                          tmp46 = tmp49;
                        }
                        const obj5 = { selfEmbeddedActivity: stateFromStores, setMode };
                        const tmp45 = __initData(LeaveActivityButtonDefault, obj5);
                        cResult[25] = setMode;
                        cResult[26] = stateFromStores;
                        cResult[27] = tmp45;
                        tmp43 = tmp45;
                      }
                    }
                  }
                  const obj6 = { style: tmp27, children: null };
                  const items4 = [tmp30, tmp33, tmp36];
                  obj6.children = items4;
                  const tmp40 = __initData2(hasOwnProperty, obj6);
                  cResult[20] = tmp27;
                  cResult[21] = tmp30;
                  cResult[22] = tmp33;
                  cResult[23] = tmp36;
                  cResult[24] = tmp40;
                  tmp37 = tmp40;
                }
                const obj7 = { activityName: tmp28, setMode };
                const tmp32 = __initData(MinimizeActivityButtonDefault, obj7);
                cResult[15] = setMode;
                cResult[16] = tmp28;
                cResult[17] = tmp32;
                tmp30 = tmp32;
              }
              const items5 = [tmp20.buttonContainer, prop];
              cResult[12] = tmp20.buttonContainer;
              cResult[13] = prop;
              cResult[14] = items5;
              tmp27 = items5;
              const tmpResult = initialize;
            }
          }
        }
        const obj8 = { landscape, setMode, wrapperOffset, pipState };
        cResult[0] = landscape;
        cResult[1] = pipState;
        cResult[2] = setMode;
        cResult[3] = wrapperOffset;
        cResult[4] = obj8;
        tmp4 = obj8;
      }
    : (wrapperOffset) => {
        ({ landscape, setMode } = wrapperOffset);
        ({ gesture, headerWrapperStyles, headerStyles } = closure_17({
          landscape,
          setMode,
          wrapperOffset: wrapperOffset.wrapperOffset,
          pipState: wrapperOffset.pipState,
        }));
        const obj = {
          landscape,
          setMode,
          wrapperOffset: wrapperOffset.wrapperOffset,
          pipState: wrapperOffset.pipState,
        };
        const tmp = closure_17({
          landscape,
          setMode,
          wrapperOffset: wrapperOffset.wrapperOffset,
          pipState: wrapperOffset.pipState,
        });
        const items = [EmbeddedActivitiesStore];
        const stateFromStores = initialize.useStateFromStores(
          items,
          () =>
            EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(
              EmbeddedActivitiesStore.getConnectedActivityLocation(),
            ),
          [],
        );
        let applicationId;
        if (stateFromStores != null) {
          applicationId = stateFromStores.applicationId;
        }
        const items1 = [applicationId];
        const first = _slicedToArray(useGetOrFetchApplicationsDefault(items1), 1)[0];
        const tmp7 = styles();
        let id;
        if (first != null) {
          id = first.id;
        }
        const tmp8Result = __initData(InviteActivityButtonDefault, { applicationId: id });
        const obj3 = {
          hasConnectedActivity: null != stateFromStores,
          gesture,
          headerWrapperStyles,
          headerStyles,
          landscape,
          children: null,
        };
        const items2 = [tmp7.buttonContainer];
        let prop;
        if (landscape) {
          prop = tmp7.buttonContainerLandscape;
        }
        const obj4 = { style: items2, children: null };
        items2[1] = prop;
        let tmp17;
        if (!landscape) {
          let name;
          if (first != null) {
            name = first.name;
          }
          tmp17 = name;
        }
        const items3 = [__initData(MinimizeActivityButtonDefault, { activityName: tmp17, setMode }), ,];
        let tmp8Result2 = null != applicationId;
        if (tmp8Result2) {
          const obj5 = { applicationId };
          tmp8Result2 = __initData(QuestActivityButtonDefault, obj5);
        }
        items3[1] = tmp8Result2;
        let tmp20 = null;
        if (landscape) {
          tmp20 = tmp8Result;
        }
        items3[2] = tmp20;
        obj4.children = items3;
        const items4 = [__initData2(hasOwnProperty, obj4), ,];
        let tmp21 = null;
        if (!landscape) {
          tmp21 = tmp8Result;
        }
        items4[1] = tmp21;
        const tmp23 = stateFromStores;
        const tmp5Result = MinimizeActivityButtonDefault;
        items4[2] = __initData(LeaveActivityButtonDefault, { selfEmbeddedActivity: tmp23, setMode });
        obj3.children = items4;
        return __initData2(closure_18, obj3);
      },
);
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (context) => {
      const cResult = c.c(14);
      const tmp2 = closure_14();
      context = noop.useContext(context.context);
      ({ wrapperDimensions, setMode, wrapperOffset, pipState } = context);
      if (wrapperDimensions.isWindowLandscape) {
        let str2 = options;
        let tmp4 = 0;
        let num = null;
        let str = "auto";
      } else {
        str = closure_1_8;
        str2 = "auto";
        tmp4 = null;
        num = 0;
      }
      if (cResult[0] === tmp4) {
        if (cResult[1] === str) {
          if (cResult[2] === num) {
            if (cResult[3] === str2) {
              let tmp5 = cResult[4];
            }
            if (cResult[5] === tmp2.headerContainer) {
              if (cResult[6] === tmp5) {
                let tmp6 = cResult[7];
              }
              if (cResult[8] === tmp6) {
                if (cResult[9] === pipState) {
                  if (cResult[10] === setMode) {
                    if (cResult[11] === wrapperDimensions) {
                      if (cResult[12] === wrapperOffset) {
                        let tmp7 = cResult[13];
                      }
                      return tmp7;
                    }
                  }
                }
              }
              const obj2 = { headerStyles: tmp6, wrapperDimensions, setMode, wrapperOffset, pipState };
              cResult[8] = tmp6;
              cResult[9] = pipState;
              cResult[10] = setMode;
              cResult[11] = wrapperDimensions;
              cResult[12] = wrapperOffset;
              cResult[13] = obj2;
              tmp7 = obj2;
            }
            const items = [tmp2.headerContainer, tmp5];
            cResult[5] = tmp2.headerContainer;
            cResult[6] = tmp5;
            cResult[7] = items;
            tmp6 = items;
          }
        }
      }
      const size = { width: str2, height: str, right: 0, left: num, bottom: tmp4 };
      cResult[0] = tmp4;
      cResult[1] = str;
      cResult[2] = num;
      cResult[3] = str2;
      cResult[4] = size;
      tmp5 = size;
    }
  : (context) => {
      let tmp = closure_14();
      const headerContainer = tmp;
      context = noop.useContext(context.context);
      const wrapperDimensions = context.wrapperDimensions;
      const obj = { headerStyles: null, wrapperDimensions, setMode, wrapperOffset, pipState };
      let items = [tmp.headerContainer, wrapperDimensions.isWindowLandscape];
      ({ setMode, wrapperOffset, pipState } = context);
      obj.headerStyles = noop.useMemo(() => {
        if (wrapperDimensions.isWindowLandscape) {
          let str2 = options;
          let tmp = 0;
          let num = null;
          let str = "auto";
        } else {
          str = closure_2_8;
          str2 = "auto";
          tmp = null;
          num = 0;
        }
        const items = [headerContainer.headerContainer, { width: str2, height: str, right: 0, left: num, bottom: tmp }];
        return items;
      }, items);
      return obj;
    };
let closure_21 = tmp9;
ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelHeader.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(9);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { context: ActivityPanelStateContextDefault };
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        ({ headerStyles, wrapperDimensions, setMode, wrapperOffset, pipState } = closure_21(first));
        if (cResult[1] === pipState) {
          if (cResult[2] === setMode) {
            if (cResult[3] === wrapperDimensions.isWindowLandscape) {
              if (cResult[4] === wrapperOffset) {
                let tmp6 = cResult[5];
              }
              if (cResult[6] === headerStyles) {
                if (cResult[7] === tmp6) {
                  let tmp8 = cResult[8];
                }
                return tmp8;
              }
              const obj3 = { style: headerStyles, children: tmp6 };
              const tmp11 = __initData(hasOwnProperty, obj3);
              cResult[6] = headerStyles;
              cResult[7] = tmp6;
              cResult[8] = tmp11;
              tmp8 = tmp11;
            }
          }
        }
        const tmp7 = __initData(closure_20, {
          landscape: wrapperDimensions.isWindowLandscape,
          setMode,
          wrapperOffset,
          pipState,
        });
        cResult[1] = pipState;
        cResult[2] = setMode;
        cResult[3] = wrapperDimensions.isWindowLandscape;
        cResult[4] = wrapperOffset;
        cResult[5] = tmp7;
        tmp6 = tmp7;
        const obj4 = { landscape: wrapperDimensions.isWindowLandscape, setMode, wrapperOffset, pipState };
        const tmp5 = closure_21(first);
      }
    : () => {
        const tmp = closure_21({ context: ActivityPanelStateContextDefault });
        const obj2 = {
          style: tmp.headerStyles,
          children: __initData(closure_20, {
            landscape: tmp.wrapperDimensions.isWindowLandscape,
            setMode: tmp.setMode,
            wrapperOffset: tmp.wrapperOffset,
            pipState: tmp.pipState,
          }),
        };
        return __initData(hasOwnProperty, obj2);
      },
);
export const useBaseActivityPanelHeaderContent = tmp6;
export const BaseActivityPanelContent = tmp7;
export const useMinimizeAndQuestButtonContainerStyles = styles;
export const useBaseActivityPanelHeader = tmp9;
