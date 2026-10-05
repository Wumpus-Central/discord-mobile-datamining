// discord_app/modules/activities/panel/native/ActivityPanelHeader.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import LegacyBaseButton from "../../../../../_runtime/06140_LegacyBaseButton.js";
import useGetOrFetchApplicationsDefault from "../../../applications/useGetOrFetchApplications.tsx";
import ActivityPanelStateContextDefault from "ActivityPanelStateContext.tsx";
import BlurVisualEffectViewDefault from "BlurVisualEffectView.tsx";
import InviteActivityButtonDefault from "InviteActivityButton.tsx";
import MinimizeActivityButtonDefault from "MinimizeActivityButton.tsx";
import QuestActivityButtonDefault from "../../../frames/panel/native/QuestActivityButton.tsx";
import LeaveActivityButtonDefault from "LeaveActivityButton.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import EmbeddedActivitiesStore from "../../EmbeddedActivitiesStore.tsx";
import ActivityPanelConstants from "../ActivityPanelConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let context, dependencyMap;

let StyleSheet;
let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let obj2;
let obj4;
let size;
({ View: hasOwnProperty, StyleSheet } = react_native);
({
  ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT: metroImportAll,
  LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: c9,
  ActivityPanelModes: c10,
} = ActivityPanelConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  panelHeader: obj2,
  panelLandscape: { flexDirection: "column-reverse" },
  headerContainer: { position: "absolute", top: 0 },
  pullIndicator: size,
};
obj2 = { justifyContent: "space-between", alignItems: "center", flexDirection: "row", gap: 8 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
size = {
  backgroundColor: nativeDefault.colors.WHITE,
  borderRadius: nativeDefault.radii.sm,
  width: 32,
  height: 4,
  alignSelf: "center",
  marginTop: 4,
  opacity: 0.3,
};
let closure_14 = createStyles(obj);
const __initData = {
  code: "function ActivityPanelHeaderTsx1(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PIP);}",
};
const __initData2 = {
  code: "function ActivityPanelHeaderTsx2(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PIP);}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let landscape;
      let panelLandscape;
      let pipState;
      let setMode;
      let tmp6;
      let wrapperOffset;
      let obj = setMode(576);
      const cResult = obj.c(24);
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
        tmp6 = obj2;
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
        panelLandscape = tmp4.panelLandscape;
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
            let tmp9;
            if (cResult[7] === num8) {
              tmp9 = cResult[8];
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
                  T.__closure = { runOnJS: setMode(4612).runOnJS, setMode, ActivityPanelModes };
                  T.__workletHash = 14504167937928;
                  T.__initData = __initData;
                  cResult[13] = setMode;
                  cResult[14] = T;
                  const obj3 = { runOnJS: setMode(4612).runOnJS, setMode, ActivityPanelModes };
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
                cResult[15] = T;
                cResult[16] = pipState;
                cResult[17] = wrapperOffset;
                cResult[18] = {
                  mode: setMode(17174).MorphablePanelModes.PANEL,
                  panGestureEnabled: true,
                  pipState,
                  swipeRequiresPop: true,
                  wrapperOffset,
                  onPanMinimizeGestureEnd: T,
                  disableHorizontalSafeAreas: true,
                };
                const obj4 = {
                  mode: setMode(17174).MorphablePanelModes.PANEL,
                  panGestureEnabled: true,
                  pipState,
                  swipeRequiresPop: true,
                  wrapperOffset,
                  onPanMinimizeGestureEnd: T,
                  disableHorizontalSafeAreas: true,
                };
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
    }
  : (landscape) => {
      let closure_2;
      let obj3;
      let pipState;
      let tmp6;
      let wrapperOffset;
      landscape = landscape.landscape;
      const setMode = landscape.setMode;
      ({ wrapperOffset, pipState } = landscape);
      const tmp = closure_14();
      dependencyMap = tmp;
      const tmp2 = setMode(1618)();
      let closure_3 = tmp2;
      let items = [landscape];
      const items1 = [landscape, tmp2, ,];
      ({ panelHeader: arr2[2], panelLandscape: arr2[3] } = tmp);
      const memo = react.useMemo(() => {
        let num = 0;
        if (!landscape) {
          num = nativeDefault.radii.lg;
        }
        const items = [StyleSheet.absoluteFill, { borderTopStartRadius: num, borderTopEndRadius: num }];
        return items;
      }, items);
      const fn = function c() {
        const obj = ReanimatedRexport;
        obj.runOnJS(setMode)(constants.PIP);
      };
      let obj = { runOnJS: landscape(4612).runOnJS, setMode, ActivityPanelModes };
      const memo1 = react.useMemo(() => {
        let num2;
        let num3;
        let num4;
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
        const obj = { paddingTop: num, paddingBottom: num2, paddingLeft: num4, paddingRight: num3 };
        num2 = 8;
        if (landscape) {
          num2 = 24;
        }
        num3 = 16;
        num4 = 16;
        if (!landscape) {
          num4 = 8 + closure_3.left;
        }
        if (!landscape) {
          num3 = 8 + closure_3.right;
        }
        items[2] = obj;
        return items;
      }, items1);
      const useCallback = react.useCallback;
      fn.__closure = obj;
      fn.__workletHash = 2822287991787;
      fn.__initData = __initData2;
      const items2 = [setMode];
      const obj2 = { gesture: tmp6(obj3), headerWrapperStyles: memo, headerStyles: memo1, styles: tmp };
      const callback = useCallback(fn, items2);
      obj3 = {
        mode: landscape(17174).MorphablePanelModes.PANEL,
        panGestureEnabled: true,
        pipState,
        swipeRequiresPop: true,
        wrapperOffset,
        onPanMinimizeGestureEnd: callback,
        disableHorizontalSafeAreas: true,
      };
      tmp6 = setMode(17174);
      return obj2;
    };
let closure_17 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (hasConnectedActivity) => {
      let children;
      let gesture;
      let headerStyles;
      let headerWrapperStyles;
      let items;
      let landscape;
      let obj3;
      const obj = react2;
      const cResult = obj.c(14);
      ({ children, gesture, headerWrapperStyles, headerStyles, landscape } = hasConnectedActivity);
      hasConnectedActivity = hasConnectedActivity.hasConnectedActivity;
      const tmp4 = closure_14();
      let tmp5 = null;
      if (hasConnectedActivity) {
        let first;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp10 = closure_12(BlurVisualEffectViewDefault, {});
          cResult[0] = tmp10;
          first = tmp10;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === landscape) {
          let tmp11;
          if (cResult[2] === tmp4) {
            tmp11 = cResult[3];
          }
          if (cResult[4] === children) {
            let tmp15;
            if (cResult[5] === headerStyles) {
              tmp15 = cResult[6];
            }
            if (cResult[7] === headerWrapperStyles) {
              if (cResult[8] === tmp11) {
                let tmp19;
                if (cResult[9] === tmp15) {
                  tmp19 = cResult[10];
                }
                if (cResult[11] === gesture) {
                  let tmp23;
                  if (cResult[12] === tmp19) {
                    tmp23 = cResult[13];
                  }
                  tmp5 = tmp23;
                }
                const obj2 = { theme: ThemeTypes.DARK, children: closure_12(LegacyBaseButton.GestureDetector, obj3) };
                const ThemeContextProvider = native.ThemeContextProvider;
                obj3 = { gesture, children: tmp19 };
                const tmp26 = closure_12(ThemeContextProvider, obj2);
                cResult[11] = gesture;
                cResult[12] = tmp19;
                cResult[13] = tmp26;
                tmp23 = tmp26;
              }
            }
            const obj4 = { style: headerWrapperStyles, children: items };
            items = [first, tmp11, tmp15];
            const tmp22 = map1(hasOwnProperty, obj4);
            cResult[7] = headerWrapperStyles;
            cResult[8] = tmp11;
            cResult[9] = tmp15;
            cResult[10] = tmp22;
            tmp19 = tmp22;
          }
          const obj5 = { style: headerStyles, children };
          const tmp18 = closure_12(hasOwnProperty, obj5);
          cResult[4] = children;
          cResult[5] = headerStyles;
          cResult[6] = tmp18;
          tmp15 = tmp18;
        }
        let tmp12 = !landscape;
        if (tmp12) {
          const obj6 = { style: tmp4.pullIndicator };
          tmp12 = closure_12(hasOwnProperty, obj6);
        }
        cResult[1] = landscape;
        cResult[2] = tmp4;
        cResult[3] = tmp12;
        tmp11 = tmp12;
      }
      return tmp5;
    }
  : (landscape) => {
      let GestureDetector;
      let children;
      let gesture;
      let hasConnectedActivity;
      let headerStyles;
      let headerWrapperStyles;
      let items;
      let obj2;
      let obj3;
      landscape = landscape.landscape;
      ({ children, hasConnectedActivity, gesture, headerWrapperStyles, headerStyles } = landscape);
      let tmp3Result2 = null;
      if (hasConnectedActivity) {
        const obj = { theme: ThemeTypes.DARK, children: closure_12(GestureDetector, obj2) };
        const ThemeContextProvider = native.ThemeContextProvider;
        obj2 = { gesture, children: map1(hasOwnProperty, obj3) };
        obj3 = { style: headerWrapperStyles, children: items };
        GestureDetector = LegacyBaseButton.GestureDetector;
        items = [closure_12(BlurVisualEffectViewDefault, {}), ,];
        let tmp3Result = !landscape;
        if (tmp3Result) {
          const obj4 = { style: tmp.pullIndicator };
          tmp3Result = closure_12(hasOwnProperty, obj4);
        }
        items[1] = tmp3Result;
        const obj5 = { style: headerStyles, children };
        items[2] = closure_12(hasOwnProperty, obj5);
        tmp3Result2 = closure_12(ThemeContextProvider, obj);
      }
      return tmp3Result2;
    };
let closure_18 = tmp8;
createStyles = createStyles_mod;
let obj3 = { buttonContainer: obj4, buttonContainerLandscape: { flexDirection: "column-reverse" } };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
const styles = createStyles.createStyles(obj3);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let gesture;
        let headerStyles;
        let headerWrapperStyles;
        let items3;
        let items4;
        let landscape;
        let pipState;
        let setMode;
        let wrapperOffset;
        const obj = react2;
        const cResult = obj.c(37);
        ({ landscape, setMode, pipState, wrapperOffset } = arg0);
        if (cResult[0] === landscape) {
          if (cResult[1] === pipState) {
            if (cResult[2] === setMode) {
              let tmp4;
              let tmp10;
              let tmp9;
              let tmp8;
              let tmp15;
              let tmp22;
              if (cResult[3] === wrapperOffset) {
                tmp4 = cResult[4];
              }
              ({ gesture, headerWrapperStyles, headerStyles } = closure_17(tmp4));
              const _Symbol = Symbol;
              closure_17(tmp4);
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
                tmp10 = items1;
                tmp9 = fn;
                tmp8 = items;
              } else {
                tmp8 = cResult[5];
                tmp9 = cResult[6];
                tmp10 = cResult[7];
              }
              const tmpResult = get_initialized;
              const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9, tmp10);
              let applicationId;
              if (stateFromStores != null) {
                applicationId = stateFromStores.applicationId;
              }
              if (cResult[8] !== applicationId) {
                const items2 = [applicationId];
                cResult[8] = applicationId;
                cResult[9] = items2;
                tmp15 = items2;
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
                const tmp24 = closure_12(InviteActivityButtonDefault, obj2);
                cResult[10] = id;
                cResult[11] = tmp24;
                tmp22 = tmp24;
              } else {
                tmp22 = cResult[11];
              }
              let prop;
              if (landscape) {
                prop = tmp20.buttonContainerLandscape;
              }
              if (cResult[12] === tmp20.buttonContainer) {
                let tmp27;
                if (cResult[13] === prop) {
                  tmp27 = cResult[14];
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
                  let tmp30;
                  let tmp33;
                  if (cResult[16] === tmp28) {
                    tmp30 = cResult[17];
                  }
                  if (cResult[18] !== applicationId) {
                    let tmp34 = null != applicationId;
                    if (tmp34) {
                      const obj3 = { applicationId };
                      tmp34 = closure_12(QuestActivityButtonDefault, obj3);
                    }
                    cResult[18] = applicationId;
                    cResult[19] = tmp34;
                    tmp33 = tmp34;
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
                        let tmp37;
                        if (cResult[23] === tmp36) {
                          tmp37 = cResult[24];
                        }
                        let tmp41 = null;
                        if (!landscape) {
                          tmp41 = tmp22;
                        }
                        if (cResult[25] === setMode) {
                          let tmp43;
                          if (cResult[26] === stateFromStores) {
                            tmp43 = cResult[27];
                          }
                          if (cResult[28] === gesture) {
                            if (cResult[29] === headerStyles) {
                              if (cResult[30] === headerWrapperStyles) {
                                if (cResult[31] === landscape) {
                                  if (cResult[32] === tmp37) {
                                    if (cResult[33] === tmp41) {
                                      if (cResult[34] === tmp43) {
                                        let tmp46;
                                        if ((cResult[35] === null) != stateFromStores) {
                                          tmp46 = cResult[36];
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
                            hasConnectedActivity: null != stateFromStores,
                            gesture,
                            headerWrapperStyles,
                            headerStyles,
                            landscape,
                            children: items3,
                          };
                          items3 = [tmp37, tmp41, tmp43];
                          const tmp49 = map1(closure_18, obj4);
                          cResult[28] = gesture;
                          cResult[29] = headerStyles;
                          cResult[30] = headerWrapperStyles;
                          cResult[31] = landscape;
                          cResult[32] = tmp37;
                          cResult[33] = tmp41;
                          cResult[34] = tmp43;
                          cResult[35] = null != stateFromStores;
                          cResult[36] = tmp49;
                          tmp46 = tmp49;
                        }
                        const obj5 = { selfEmbeddedActivity: stateFromStores, setMode };
                        const tmp45 = closure_12(LeaveActivityButtonDefault, obj5);
                        cResult[25] = setMode;
                        cResult[26] = stateFromStores;
                        cResult[27] = tmp45;
                        tmp43 = tmp45;
                      }
                    }
                  }
                  const obj6 = { style: tmp27, children: items4 };
                  items4 = [tmp30, tmp33, tmp36];
                  const tmp40 = map1(hasOwnProperty, obj6);
                  cResult[20] = tmp27;
                  cResult[21] = tmp30;
                  cResult[22] = tmp33;
                  cResult[23] = tmp36;
                  cResult[24] = tmp40;
                  tmp37 = tmp40;
                }
                const obj7 = { activityName: tmp28, setMode };
                const tmp32 = closure_12(MinimizeActivityButtonDefault, obj7);
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
        let gesture;
        let headerStyles;
        let headerWrapperStyles;
        let items3;
        let items4;
        let landscape;
        let setMode;
        ({ landscape, setMode } = wrapperOffset);
        const obj = {
          landscape,
          setMode,
          wrapperOffset: wrapperOffset.wrapperOffset,
          pipState: wrapperOffset.pipState,
        };
        ({ gesture, headerWrapperStyles, headerStyles } = closure_17(obj));
        closure_17(obj);
        const items = [EmbeddedActivitiesStore];
        const obj2 = get_initialized;
        const stateFromStores = obj2.useStateFromStores(
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
        const tmp9 = InviteActivityButtonDefault;
        if (first != null) {
          id = first.id;
        }
        const tmp8Result = closure_12(tmp9, { applicationId: id });
        const items2 = [tmp7.buttonContainer];
        let prop;
        const obj3 = {
          hasConnectedActivity: null != stateFromStores,
          gesture,
          headerWrapperStyles,
          headerStyles,
          landscape,
          children: items4,
        };
        if (landscape) {
          prop = tmp7.buttonContainerLandscape;
        }
        const obj4 = { style: items2, children: items3 };
        items2[1] = prop;
        let tmp17;
        const tmp5Result = MinimizeActivityButtonDefault;
        if (!landscape) {
          let name;
          if (first != null) {
            name = first.name;
          }
          tmp17 = name;
        }
        items3 = [closure_12(tmp5Result, { activityName: tmp17, setMode }), ,];
        let tmp8Result2 = null != applicationId;
        if (tmp8Result2) {
          const obj5 = { applicationId };
          tmp8Result2 = closure_12(QuestActivityButtonDefault, obj5);
        }
        items3[1] = tmp8Result2;
        let tmp20 = null;
        if (landscape) {
          tmp20 = tmp8Result;
        }
        items3[2] = tmp20;
        items4 = [map1(hasOwnProperty, obj4), ,];
        let tmp21 = null;
        if (!landscape) {
          tmp21 = tmp8Result;
        }
        items4[1] = tmp21;
        const tmp5Result2 = LeaveActivityButtonDefault;
        items4[2] = closure_12(tmp5Result2, { selfEmbeddedActivity: stateFromStores, setMode });
        return map1(closure_18, obj3);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (context) => {
      let num;
      let pipState;
      let setMode;
      let str;
      let str2;
      let tmp4;
      let wrapperDimensions;
      let wrapperOffset;
      const obj = react2;
      const cResult = obj.c(14);
      context = context.context;
      const tmp2 = closure_14();
      const context1 = react.useContext(context);
      ({ wrapperDimensions, setMode, wrapperOffset, pipState } = context1);
      if (wrapperDimensions.isWindowLandscape) {
        str2 = React4;
        tmp4 = 0;
        num = null;
        str = "auto";
      } else {
        str = metroImportAll;
        str2 = "auto";
        tmp4 = null;
        num = 0;
      }
      if (cResult[0] === tmp4) {
        if (cResult[1] === str) {
          if (cResult[2] === num) {
            let tmp5;
            if (cResult[3] === str2) {
              tmp5 = cResult[4];
            }
            if (cResult[5] === tmp2.headerContainer) {
              let tmp6;
              if (cResult[6] === tmp5) {
                tmp6 = cResult[7];
              }
              if (cResult[8] === tmp6) {
                if (cResult[9] === pipState) {
                  if (cResult[10] === setMode) {
                    if (cResult[11] === wrapperDimensions) {
                      let tmp7;
                      if (cResult[12] === wrapperOffset) {
                        tmp7 = cResult[13];
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
      size = { width: str2, height: str, right: 0, left: num, bottom: tmp4 };
      cResult[0] = tmp4;
      cResult[1] = str;
      cResult[2] = num;
      cResult[3] = str2;
      cResult[4] = size;
      tmp5 = size;
    }
  : (context) => {
      let items;
      let pipState;
      let setMode;
      let wrapperOffset;
      context = context.context;
      let tmp = closure_14();
      const headerContainer = tmp;
      const context1 = react.useContext(context);
      const wrapperDimensions = context1.wrapperDimensions;
      const obj = {
        headerStyles: react.useMemo(() => {
          let num;
          let str;
          let str2;
          let tmp;
          if (wrapperDimensions.isWindowLandscape) {
            str2 = React4;
            tmp = 0;
            num = null;
            str = "auto";
          } else {
            str = metroImportAll;
            str2 = "auto";
            tmp = null;
            num = 0;
          }
          const items = [
            headerContainer.headerContainer,
            { width: str2, height: str, right: 0, left: num, bottom: tmp },
          ];
          return items;
        }, items),
        wrapperDimensions,
        setMode,
        wrapperOffset,
        pipState,
      };
      items = [tmp.headerContainer, wrapperDimensions.isWindowLandscape];
      ({ setMode, wrapperOffset, pipState } = context1);
      return obj;
    };
let closure_21 = tmp10;
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let headerStyles;
        let pipState;
        let setMode;
        let wrapperDimensions;
        let wrapperOffset;
        const obj = react2;
        const cResult = obj.c(9);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { context: ActivityPanelStateContextDefault };
          cResult[0] = obj2;
          first = obj2;
        } else {
          first = cResult[0];
        }
        ({ headerStyles, wrapperDimensions, setMode, wrapperOffset, pipState } = closure_21(first));
        closure_21(first);
        if (cResult[1] === pipState) {
          if (cResult[2] === setMode) {
            if (cResult[3] === wrapperDimensions.isWindowLandscape) {
              let tmp6;
              if (cResult[4] === wrapperOffset) {
                tmp6 = cResult[5];
              }
              if (cResult[6] === headerStyles) {
                let tmp8;
                if (cResult[7] === tmp6) {
                  tmp8 = cResult[8];
                }
                return tmp8;
              }
              const obj3 = { style: headerStyles, children: tmp6 };
              const tmp11 = closure_12(hasOwnProperty, obj3);
              cResult[6] = headerStyles;
              cResult[7] = tmp6;
              cResult[8] = tmp11;
              tmp8 = tmp11;
            }
          }
        }
        const obj4 = { landscape: wrapperDimensions.isWindowLandscape, setMode, wrapperOffset, pipState };
        const tmp7 = closure_12(closure_20, obj4);
        cResult[1] = pipState;
        cResult[2] = setMode;
        cResult[3] = wrapperDimensions.isWindowLandscape;
        cResult[4] = wrapperOffset;
        cResult[5] = tmp7;
        tmp6 = tmp7;
      }
    : () => {
        let obj3;
        const obj = { context: ActivityPanelStateContextDefault };
        const tmp = closure_21(obj);
        const obj2 = { style: tmp.headerStyles, children: closure_12(closure_20, obj3) };
        obj3 = {
          landscape: tmp.wrapperDimensions.isWindowLandscape,
          setMode: tmp.setMode,
          wrapperOffset: tmp.wrapperOffset,
          pipState: tmp.pipState,
        };
        return closure_12(hasOwnProperty, obj2);
      },
);
size = size_mod;
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelHeader.tsx");

export default memoResult;
export const useBaseActivityPanelHeaderContent = tmp7;
export const BaseActivityPanelContent = tmp8;
export const useMinimizeAndQuestButtonContainerStyles = styles;
export const useBaseActivityPanelHeader = tmp10;
