// discord_app/modules/orbs_arcade/native/OrbsArcadeGameScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Link from "../../../../_runtime/01506_Link.js";
import leaveFrame from "../../frames/leaveFrame.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import FramesStore from "../../frames/FramesStore.tsx";

require = fn;
const View = fn(17).View;
const ThemeTypes = fn(1087).ThemeTypes;
const FramesConstants = fn(6761);
({ isLaunched: closure_7, FrameLayoutModes } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const OrbsArcadeGame = "OrbsArcadeGame";
const presentation = {
  layoutMode: FrameLayoutModes.FOCUSED,
  portraitSafeAreasConfig: fn(18285).DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG,
};
const createStyles = fn(4969);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BLACK }, wrapper: null, header: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
obj2.wrapper = {
  flex: 1,
  overflow: "hidden",
  borderTopStartRadius: nativeDefault.radii.lg,
  borderTopEndRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: fn(5595).ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK,
};
obj2.header = rect;
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  flex: 1,
  overflow: "hidden",
  borderTopStartRadius: nativeDefault.radii.lg,
  borderTopEndRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsArcadeGameScreen(navigation) {
      const cResult = navigation(frameId[11]).c(36);
      navigation = navigation.navigation;
      const route = navigation.route;
      frameId = route.params.frameId;
      const tmp4 = closure_12();
      const rect = route(frameId[12])();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FramesStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== frameId) {
        const fn = function p() {
          return FramesStore.getFrame(frameId);
        };
        const items1 = [frameId];
        cResult[1] = frameId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp9 = items1;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      let obj = navigation(frameId[11]);
      const stateFromStores = navigation(frameId[13]).useStateFromStores(first, tmp8, tmp9);
      noop = tmp11;
      if ((cResult[4] === null) != stateFromStores) {
        if (cResult[5] === navigation) {
          if (cResult[6] === route.key) {
            let tmp12 = cResult[7];
            let tmp13 = cResult[8];
          }
          const effect = noop.useEffect(tmp12, tmp13);
          let applicationId;
          if (stateFromStores != null) {
            applicationId = stateFromStores.applicationId;
          }
          if (applicationId == null) {
            applicationId = null;
          }
          tmp5(tmp2[15])(applicationId);
          if (cResult[9] !== frameId) {
            class T {
              constructor() {
                return () => {
                  if (null != frame.getFrame(closure_1_2)) {
                    navigation(frameId[16]).leaveFrame(closure_1_2);
                    const obj = navigation(frameId[16]);
                  }
                };
              }
            }
            const items2 = [frameId];
            cResult[9] = frameId;
            cResult[10] = T;
            cResult[11] = items2;
            let tmp19 = items2;
          } else {
            class T {
              constructor() {
                return () => {
                  if (null != frame.getFrame(closure_1_2)) {
                    navigation(frameId[16]).leaveFrame(closure_1_2);
                    const obj = navigation(frameId[16]);
                  }
                };
              }
            }
            tmp19 = cResult[11];
          }
          const effect1 = noop.useEffect(T, tmp19);
          if (cResult[12] !== frameId) {
            class O {
              constructor() {
                obj = closure_0(closure_2[16]);
                return obj.leaveFrame(frameId);
              }
            }
            cResult[12] = frameId;
            cResult[13] = O;
          } else {
            class O {
              constructor() {
                obj = closure_0(closure_2[16]);
                return obj.leaveFrame(frameId);
              }
            }
          }
          if (cResult[14] !== rect.top) {
            class O {
              constructor() {
                obj = closure_0(closure_2[16]);
                return obj.leaveFrame(frameId);
              }
            }
            tmp23[0] = rect.top;
            cResult[14] = rect.top;
            cResult[15] = tmp23;
          } else {
            class O {
              constructor() {
                obj = closure_0(closure_2[16]);
                return obj.leaveFrame(frameId);
              }
            }
          }
          if (cResult[16] === tmp4.container) {
            class O {
              constructor() {
                obj = closure_0(closure_2[16]);
                return obj.leaveFrame(frameId);
              }
            }
            const _Symbol = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              class O {
                constructor() {
                  obj = closure_0(closure_2[16]);
                  return obj.leaveFrame(frameId);
                }
              }
              const obj2 = { wakeLockKey: OrbsArcadeGame };
              const tmp27 = closure_8(tmp5(tmp2[17]), obj2);
              cResult[19] = tmp27;
            } else {
              class O {
                constructor() {
                  obj = closure_0(closure_2[16]);
                  return obj.leaveFrame(frameId);
                }
              }
            }
            if (cResult[20] === stateFromStores) {
              class O {
                constructor() {
                  obj = closure_0(closure_2[16]);
                  return obj.leaveFrame(frameId);
                }
              }
              if (cResult[23] === stateFromStores) {
                class O {
                  constructor() {
                    obj = closure_0(closure_2[16]);
                    return obj.leaveFrame(frameId);
                  }
                }
              }
              let tmp34 = null;
              if (null != stateFromStores) {
                class O {
                  constructor() {
                    obj = closure_0(closure_2[16]);
                    return obj.leaveFrame(frameId);
                  }
                }
                const obj4 = { style: null, children: null };
                const items3 = [tmp4.header];
                const obj5 = {
                  paddingLeft: tmp5(tmp2[9]).space.PX_8 + rect.left,
                  paddingRight: tmp5(tmp2[9]).space.PX_8 + rect.right,
                };
                items3[1] = obj5;
                obj4.style = items3;
                const obj6 = { applicationId: stateFromStores.applicationId };
                const items4 = [closure_8(tmp5(tmp2[20]), obj6)];
                const obj7 = { onPress: O };
                items4[1] = closure_8(tmp(tmp2[21]).BaseLeaveActivityButton, obj7);
                obj4.children = items4;
                tmp34 = closure_9(View, obj4);
              }
              cResult[23] = stateFromStores;
              cResult[24] = O;
              cResult[25] = rect.left;
              cResult[26] = rect.right;
              cResult[27] = tmp4.header;
              cResult[28] = tmp34;
            }
            let tmp30 = null;
            if (closure_7(stateFromStores)) {
              class O {
                constructor() {
                  obj = closure_0(closure_2[16]);
                  return obj.leaveFrame(frameId);
                }
              }
              const obj8 = { frameId, level: tmp(tmp2[19]).FrameStackLevel.AboveAppContent, presentation };
              tmp30 = closure_8(tmp5(tmp2[18]), obj8);
              const tmp5Result2 = tmp5(tmp2[18]);
            }
            cResult[20] = stateFromStores;
            cResult[21] = frameId;
            cResult[22] = tmp30;
          }
          const items5 = [tmp4.container, tmp23];
          cResult[16] = tmp4.container;
          cResult[17] = tmp23;
          cResult[18] = items5;
          const tmp5Result = tmp5(tmp2[15]);
        }
      }
      class L {
        constructor() {
          if (!closure_3) {
            tmp = navigation;
            obj = {};
            tmp2 = closure_0;
            tmp3 = closure_2;
            CommonActions = closure_0(closure_2[14]).CommonActions;
            tmp4 = obj;
            merged = Object.assign(CommonActions.goBack());
            tmp6 = route;
            obj.source = route.key;
            dispatchResult = navigation.dispatch(obj);
          }
          return;
        }
      }
      const items6 = [null != stateFromStores, navigation, route.key];
      cResult[4] = null != stateFromStores;
      cResult[5] = navigation;
      cResult[6] = route.key;
      cResult[7] = L;
      cResult[8] = items6;
      tmp13 = items6;
      tmp12 = L;
      const tmpResult = navigation(frameId[13]);
    }
  : function OrbsArcadeGameScreen(navigation) {
      navigation = navigation.navigation;
      const route = navigation.route;
      const frameId = route.params.frameId;
      const tmp = closure_12();
      const rect = route(frameId[12])();
      const items = [FramesStore];
      const items1 = [frameId];
      const stateFromStores = navigation(frameId[13]).useStateFromStores(
        items,
        () => FramesStore.getFrame(frameId),
        items1,
      );
      noop = tmp6;
      const items2 = [null != stateFromStores, navigation, route.key];
      const effect = noop.useEffect(() => {
        if (!closure_3) {
          const obj = {};
          const CommonActions = Link.CommonActions;
          const merged = Object.assign(CommonActions.goBack());
          obj.source = route.key;
          navigation.dispatch(obj);
        }
      }, items2);
      let applicationId;
      let obj = navigation(frameId[13]);
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      if (applicationId == null) {
        applicationId = null;
      }
      route(frameId[15])(applicationId);
      const items3 = [frameId];
      const effect1 = obj2.useEffect(
        () => () => {
          if (null != frame.getFrame(closure_1_2)) {
            navigation(frameId[16]).leaveFrame(closure_1_2);
            const obj = navigation(frameId[16]);
          }
        },
        items3,
      );
      const items4 = [frameId];
      const callback = obj2.useCallback(() => leaveFrame.leaveFrame(frameId), items4);
      const obj3 = { theme: ThemeTypes.DARK, children: null };
      const obj4 = { style: null, children: null };
      const items5 = [tmp.container, { paddingTop: rect.top }];
      obj4.style = items5;
      const items6 = [closure_8(route(frameId[17]), { wakeLockKey: OrbsArcadeGame })];
      const obj6 = { style: tmp.wrapper, children: null };
      let tmp13Result = null;
      if (closure_7(stateFromStores)) {
        const obj7 = { frameId, level: tmp4(tmp3[19]).FrameStackLevel.AboveAppContent, presentation };
        tmp13Result = closure_8(tmp2(tmp3[18]), obj7);
        const tmp2Result = tmp2(tmp3[18]);
      }
      const items7 = [tmp13Result];
      let tmp14Result = null;
      if (null != stateFromStores) {
        const obj8 = { style: null, children: null };
        const items8 = [tmp.header];
        const obj9 = {
          paddingLeft: tmp2(tmp3[9]).space.PX_8 + rect.left,
          paddingRight: tmp2(tmp3[9]).space.PX_8 + rect.right,
        };
        items8[1] = obj9;
        obj8.style = items8;
        const obj10 = { applicationId: stateFromStores.applicationId };
        const items9 = [closure_8(tmp2(tmp3[20]), obj10)];
        const obj11 = { onPress: callback };
        items9[1] = closure_8(tmp4(tmp3[21]).BaseLeaveActivityButton, obj11);
        obj8.children = items9;
        tmp14Result = closure_9(View, obj8);
      }
      items7[1] = tmp14Result;
      obj6.children = items7;
      items6[1] = closure_9(View, obj6);
      obj4.children = items6;
      obj3.children = closure_9(View, obj4);
      return closure_8(navigation(frameId[22]).ThemeContextProvider, obj3);
    };
