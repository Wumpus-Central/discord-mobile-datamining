// discord_app/modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import styleConstants from "../../../design/components/Styles/native/styleConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import GuildsBarConstants from "GuildsBarConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let hitSlop, obj1;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function renderUnreadIndicator(id, sharedId, transitionState, cleanUp) {
  const obj = { sharedId: sharedId.sharedId, id: sharedId.id, selected: sharedId.selected, transitionState, cleanUp };
  return metroImportAll(closure_18, obj, id);
}
const IOS_POINTER_STYLE = styleConstants.IOS_POINTER_STYLE;
({
  GUILD_ITEM_HIT_SLOP: hasOwnProperty,
  GUILD_ITEM_INSET_LEFT: metroRequire,
  useGuildWrapperSize: metroImportDefault,
} = GuildsBarConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const CORNER_SPRING_PHYSICS = { mass: 0.8, damping: 100, stiffness: 150 };
const BAR_SPRING_PHYSICS = { mass: 0.25, damping: 100, stiffness: 200 };
let createStyles = createStyles_mod;
let closure_12 = createStyles.createStyles(() => {
  let rect;
  let num = arg0;
  if (arg0 === undefined) {
    num = 56;
  }
  const obj = {
    draggedElement: { opacity: 0 },
    selectedBackgroundOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
    container: { position: "relative", overflow: "visible" },
    unreadIndicator: size,
    expandedChildrenWrapper: rect,
  };
  size = {
    position: "absolute",
    top: num / 2,
    left: -4,
    height: 8,
    width: 8,
    borderRadius: nativeDefault.radii.xs,
    backgroundColor: nativeDefault.colors.TEXT_STRONG,
  };
  rect = {
    position: "absolute",
    left: num + 16,
    top: 0,
    right: 8,
    height: num,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };
  return obj;
});
createStyles = createStyles_mod;
let closure_13 = createStyles.createStyles((arg0, arg1, width, height) => {
  let BACKGROUND_BRAND;
  let size1;
  let str2;
  const obj = { pressableWrapper: size, itemShape: size1, itemShapeSelected: { backgroundColor: BACKGROUND_BRAND } };
  size = {
    position: "relative",
    paddingTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN,
    paddingBottom: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN,
    paddingLeft: metroRequire,
    height,
    width: width + hasOwnProperty.left + hasOwnProperty.right,
  };
  size1 = {
    position: "relative",
    width,
    height: width,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: str2,
  };
  let str = "transparent";
  str2 = "transparent";
  if (!arg1) {
    str2 = nativeDefault.colors.MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT;
  }
  if (arg0) {
    if (!arg1) {
      str = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
    }
    BACKGROUND_BRAND = str;
  } else {
    BACKGROUND_BRAND = nativeDefault.colors.BACKGROUND_BRAND;
  }
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = {
  code: 'function GuildsBarAnimatedItemWrapperTsx1(values){const{disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,guildItemSize}=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,"animate-always"),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,"animate-always"),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,"animate-always")},initialValues:{height:8,originY:guildItemSize/2,originX:-12}};}',
};
const __initData2 = {
  code: 'function GuildsBarAnimatedItemWrapperTsx2(values_0){const{withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,runOnJS}=this.__closure;return{animations:{originY:withSpring(values_0.targetOriginY,BAR_SPRING_PHYSICS,"animate-always"),originX:withSpring(values_0.targetOriginX,BAR_SPRING_PHYSICS,"animate-always"),height:withSpring(values_0.targetHeight,BAR_SPRING_PHYSICS,"animate-always")},initialValues:{height:values_0.currentHeight,originY:values_0.currentOriginY,originX:values_0.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){runOnJS(cleanUp)();}}};}',
};
const __initData3 = {
  code: "function GuildsBarAnimatedItemWrapperTsx3(values){const{disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,guildItemSize}=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:8,originY:guildItemSize/2,originX:-12}};}",
};
const __initData4 = {
  code: "function GuildsBarAnimatedItemWrapperTsx4(values_0){const{withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,runOnJS}=this.__closure;return{animations:{originY:withSpring(values_0.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values_0.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values_0.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:values_0.currentHeight,originY:values_0.currentOriginY,originX:values_0.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){runOnJS(cleanUp)();}}};}",
};
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let disableBGColor;
      let disableSelectedColor;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== arg0) {
        let obj2 = arg0;
        if (undefined === arg0) {
          obj2 = {};
        }
        cResult[0] = arg0;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      ({ disableSelectedColor, disableBGColor } = tmp4);
      const tmp5 = undefined !== disableSelectedColor && disableSelectedColor;
      const tmp6 = undefined !== disableBGColor && disableBGColor;
      const tmpResult = useToken;
      const token = tmpResult.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
      return closure_13(tmp5, tmp6, token, metroImportDefault());
    }
  : () => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      let flag = obj.disableSelectedColor;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = obj.disableBGColor;
      if (flag2 === undefined) {
        flag2 = false;
      }
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
      return closure_13(flag, flag2, token, metroImportDefault());
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (sharedId) => {
      let cleanUp;
      let transitionState;
      let obj = sharedId(cleanUp[7]);
      const cResult = obj.c(19);
      sharedId = sharedId.sharedId;
      const id = sharedId.id;
      ({ transitionState, cleanUp } = sharedId);
      const selected = sharedId.selected;
      if (undefined === transitionState) {
        transitionState = tmp(cleanUp[9]).TransitionStates.MOUNTED;
      }
      let tmpResult = tmp(cleanUp[8]);
      const token = tmpResult.useToken(id(cleanUp[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
      const tmp6 = closure_12(closure_7());
      const tmp7 = transitionState === tmp(cleanUp[9]).TransitionStates.MOUNTED;
      let closure_5 = tmp7;
      let num = 8;
      const tmp4 = id;
      if (selected) {
        num = 8;
        if (transitionState !== sharedId(cleanUp[9]).TransitionStates.YEETED) {
          num = 40;
        }
      }
      let num2 = 0;
      if (transitionState === sharedId(cleanUp[9]).TransitionStates.YEETED) {
        num2 = -4;
      }
      const result = (num / 2) * -1;
      if (cResult[0] === num) {
        if (cResult[1] === result) {
          let tmp9;
          if (cResult[2] === num2) {
            tmp9 = cResult[3];
          }
          if (cResult[4] === tmp6.unreadIndicator) {
            let tmp10;
            if (cResult[5] === tmp9) {
              tmp10 = cResult[6];
            }
            if (cResult[7] === tmp7) {
              if (cResult[8] === token) {
                if (cResult[9] === id) {
                  let tmp12;
                  if (cResult[10] === sharedId) {
                    tmp12 = cResult[11];
                  }
                  if (cResult[12] === cleanUp) {
                    let tmp15;
                    if (cResult[13] === transitionState) {
                      tmp15 = cResult[14];
                    }
                    if (cResult[15] === tmp12) {
                      if (cResult[16] === tmp15) {
                        let tmp18;
                        if (cResult[17] === tmp10) {
                          tmp18 = cResult[18];
                        }
                        return tmp18;
                      }
                    }
                    class H {
                      constructor(arg0) {
                        obj = { animations: null, initialValues: null, callback: null };
                        obj1 = { originY: null, originX: null, height: null };
                        obj3 = closure_0(closure_2[10]);
                        obj1.originY = obj3.withSpring(sharedId.targetOriginY, closure_11, "animate-always");
                        obj4 = closure_0(closure_2[10]);
                        obj1.originX = obj4.withSpring(sharedId.targetOriginX, closure_11, "animate-always");
                        obj5 = closure_0(closure_2[10]);
                        obj1.height = obj5.withSpring(sharedId.targetHeight, closure_11, "animate-always");
                        obj.animations = obj1;
                        obj.initialValues = {
                          height: sharedId.currentHeight,
                          originY: sharedId.currentOriginY,
                          originX: sharedId.currentOriginX,
                        };
                        obj.callback = function callback() {
                          /* body not rendered: F145916 */
                        };
                        return obj;
                      }
                    }
                    let obj2 = {
                      collapsable: false,
                      entering: tmp12,
                      layout: tmp15,
                      style: tmp10,
                      pointerEvents: "none",
                    };
                    const tmp19 = closure_8(tmp4(cleanUp[12]), obj2);
                    cResult[15] = tmp12;
                    cResult[16] = tmp15;
                    cResult[17] = tmp10;
                    cResult[18] = tmp19;
                    tmp18 = tmp19;
                  }
                  class H {
                    constructor(arg0) {
                      obj = { animations: null, initialValues: null, callback: null };
                      obj1 = { originY: null, originX: null, height: null };
                      obj3 = closure_0(closure_2[10]);
                      obj1.originY = obj3.withSpring(sharedId.targetOriginY, closure_11, "animate-always");
                      obj4 = closure_0(closure_2[10]);
                      obj1.originX = obj4.withSpring(sharedId.targetOriginX, closure_11, "animate-always");
                      obj5 = closure_0(closure_2[10]);
                      obj1.height = obj5.withSpring(sharedId.targetHeight, closure_11, "animate-always");
                      obj.animations = obj1;
                      obj.initialValues = {
                        height: sharedId.currentHeight,
                        originY: sharedId.currentOriginY,
                        originX: sharedId.currentOriginX,
                      };
                      obj.callback = function callback() {
                        /* body not rendered: F145916 */
                      };
                      return obj;
                    }
                  }
                  let obj3 = {
                    withSpring: sharedId(cleanUp[10]).withSpring,
                    BAR_SPRING_PHYSICS,
                    transitionState,
                    TransitionStates: sharedId(cleanUp[9]).TransitionStates,
                    cleanUp,
                    runOnJS: sharedId(cleanUp[11]).runOnJS,
                  };
                  H.__closure = obj3;
                  H.__workletHash = 1393166702359;
                  H.__initData = __initData2;
                  cResult[12] = cleanUp;
                  cResult[13] = transitionState;
                  cResult[14] = H;
                  tmp15 = H;
                }
              }
            }
            class B {
              constructor(arg0) {
                tmp = closure_5;
                if (tmp) {
                  obj1 = { animations: null, initialValues: null };
                  obj1.animations = {};
                  obj1.initialValues = {};
                  obj9 = obj1;
                } else {
                  obj = sharedId;
                  tmp2 = null;
                  if (null != sharedId) {
                    tmp3 = id;
                  }
                  tmp4 = sharedId;
                  obj9 = { animations: null, initialValues: null };
                  obj10 = { originY: null, originX: null, height: null };
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  obj4 = closure_0(closure_2[10]);
                  tmp7 = closure_11;
                  str = "animate-always";
                  obj10.originY = obj4.withSpring(sharedId.targetOriginY, closure_11, "animate-always");
                  obj5 = closure_0(closure_2[10]);
                  obj10.originX = obj5.withSpring(sharedId.targetOriginX, closure_11, "animate-always");
                  obj6 = closure_0(closure_2[10]);
                  obj10.height = obj6.withSpring(sharedId.targetHeight, closure_11, "animate-always");
                  obj9.animations = obj10;
                  obj11 = { height: 8, originY: null, originX: -12 };
                  tmp8 = closure_4;
                  num = 2;
                  obj11.originY = closure_4 / 2;
                  obj9.initialValues = obj11;
                }
                return obj9;
              }
            }
            let obj4 = {
              disableEntering: tmp7,
              sharedId,
              id,
              withSpring: sharedId(cleanUp[10]).withSpring,
              BAR_SPRING_PHYSICS,
              guildItemSize: token,
            };
            B.__closure = obj4;
            B.__workletHash = 12996428552555;
            B.__initData = __initData;
            cResult[7] = tmp7;
            cResult[8] = token;
            cResult[9] = id;
            cResult[10] = sharedId;
            cResult[11] = B;
            tmp12 = B;
          }
          tmp11[0] = tmp6.unreadIndicator;
          tmp11[1] = tmp9;
          cResult[4] = tmp6.unreadIndicator;
          cResult[5] = tmp9;
          cResult[6] = tmp11;
          tmp10 = tmp11;
        }
      }
      let obj5 = { height: num, marginTop: result, marginLeft: num2 };
      cResult[0] = num;
      cResult[1] = result;
      cResult[2] = num2;
      cResult[3] = obj5;
      tmp9 = obj5;
    }
  : (sharedId) => {
      sharedId = sharedId.sharedId;
      const id = sharedId.id;
      let MOUNTED = sharedId.transitionState;
      const selected = sharedId.selected;
      if (MOUNTED === undefined) {
        MOUNTED = sharedId(MOUNTED[9]).TransitionStates.MOUNTED;
      }
      const cleanUp = sharedId.cleanUp;
      let num;
      let tmp3 = sharedId;
      let obj = sharedId(MOUNTED[8]);
      const token = obj.useToken(id(MOUNTED[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
      const tmp7 = closure_12(num());
      const unreadIndicator = tmp7;
      const tmp8 = MOUNTED === sharedId(MOUNTED[9]).TransitionStates.MOUNTED;
      let closure_6 = tmp8;
      num = 8;
      const tmp5 = id;
      if (selected) {
        num = 8;
        if (MOUNTED !== tmp3(MOUNTED[9]).TransitionStates.YEETED) {
          num = 40;
        }
      }
      let items = [num, MOUNTED, tmp7.unreadIndicator];
      const fn = function h(targetOriginY) {
        let obj3;
        let obj4;
        let obj5;
        let obj6;
        let obj7;
        let obj8;
        if (closure_6) {
          obj3 = { animations: {}, initialValues: {} };
          const obj2 = { animations: {}, initialValues: {} };
        } else {
          obj3 = { animations: obj7, initialValues: obj8 };
          obj7 = {
            originY: obj4.withSpring(targetOriginY.targetOriginY, BAR_SPRING_PHYSICS, "animate-always"),
            originX: obj5.withSpring(targetOriginY.targetOriginX, BAR_SPRING_PHYSICS, "animate-always"),
            height: obj6.withSpring(targetOriginY.targetHeight, BAR_SPRING_PHYSICS, "animate-always"),
          };
          obj4 = spring;
          obj5 = spring;
          obj6 = spring;
          obj8 = { height: 8, originY: token / 2, originX: -12 };
        }
        return obj3;
      };
      let obj2 = {
        disableEntering: tmp8,
        sharedId,
        id,
        withSpring: tmp3(tmp4[10]).withSpring,
        BAR_SPRING_PHYSICS,
        guildItemSize: token,
      };
      const style = cleanUp.useMemo(() => {
        const items = [unreadIndicator.unreadIndicator];
        const obj = { height: num, marginTop: (num / 2) * -1, marginLeft: num };
        num = 0;
        if (MOUNTED === native.TransitionStates.YEETED) {
          num = -4;
        }
        items[1] = obj;
        return items;
      }, items);
      const useCallback = cleanUp.useCallback;
      fn.__closure = obj2;
      fn.__workletHash = 8054478360265;
      fn.__initData = __initData3;
      const items1 = [tmp8, sharedId, id, token];
      const fn2 = function p(height) {
        let obj2;
        let obj3;
        let obj4;
        let obj5;
        const obj = {
          animations: obj2,
          initialValues: {
            height: height.currentHeight,
            originY: height.currentOriginY,
            originX: height.currentOriginX,
          },
          callback(arg0) {
            const tmp3 = closure_1_2 === sharedId(MOUNTED[9]).TransitionStates.YEETED && arg0 && null != cleanUp;
            if (tmp3) {
              const tmpResult = sharedId(MOUNTED[11]);
              tmpResult.runOnJS(cleanUp)();
            }
          },
        };
        obj2 = {
          originY: obj3.withSpring(height.targetOriginY, BAR_SPRING_PHYSICS, "animate-always"),
          originX: obj4.withSpring(height.targetOriginX, BAR_SPRING_PHYSICS, "animate-always"),
          height: obj5.withSpring(height.targetHeight, BAR_SPRING_PHYSICS, "animate-always"),
        };
        obj3 = spring;
        obj4 = spring;
        obj5 = spring;
        return obj;
      };
      let obj3 = {
        withSpring: tmp3(tmp4[10]).withSpring,
        BAR_SPRING_PHYSICS,
        transitionState: MOUNTED,
        TransitionStates: tmp3(tmp4[9]).TransitionStates,
        cleanUp,
        runOnJS: tmp3(tmp4[11]).runOnJS,
      };
      const entering = useCallback(fn, items1);
      const useCallback2 = cleanUp.useCallback;
      fn2.__closure = obj3;
      fn2.__workletHash = 4690084405489;
      fn2.__initData = __initData4;
      const items2 = [MOUNTED, cleanUp];
      const layout = useCallback2(fn2, items2);
      return closure_8(tmp5(MOUNTED[12]), { collapsable: false, entering, layout, style, pointerEvents: "none" });
    };
let closure_18 = tmp5;
const __initData5 = {
  code: 'function GuildsBarAnimatedItemWrapperTsx5(){const{withSpring,circle,guildItemSelectedBorderRadius,guildItemSize,CORNER_SPRING_PHYSICS}=this.__closure;return{borderRadius:withSpring(!circle?guildItemSelectedBorderRadius:guildItemSize/2,CORNER_SPRING_PHYSICS,"animate-always")};}',
};
let __initData6 = {
  code: "function GuildsBarAnimatedItemWrapperTsx6(){const{withSpring,circle,guildItemSelectedBorderRadius,guildItemSize,CORNER_SPRING_PHYSICS}=this.__closure;return{borderRadius:withSpring(!circle?guildItemSelectedBorderRadius:guildItemSize/2,CORNER_SPRING_PHYSICS,'animate-always')};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityActions;
      let children;
      let circle;
      let config;
      let cutouts;
      let dragState;
      let draggable;
      let draggedItemSize;
      let entering;
      let exiting;
      let expanded;
      let expandedChildren;
      let externalChildren;
      let hint;
      let id;
      let isDragPreview;
      let isDragTarget;
      let items3;
      let items5;
      let items7;
      let label;
      let layout;
      let onAccessibilityAction;
      let overState;
      let preventClipping;
      let ref;
      let selected;
      let sharedId;
      let str2;
      let style;
      let styles;
      let unread;
      let unreadStyle;
      let zIndex;
      let obj = circle(expanded[7]);
      const cResult = obj.c(84);
      ({ id, selected, circle } = arg0);
      ({
        externalChildren,
        expandedChildren,
        label,
        hint,
        draggable,
        cutouts,
        isDragTarget,
        dragState,
        isDragPreview,
        draggedItemSize,
        overState,
        styles,
        accessibilityActions,
        onAccessibilityAction,
      } = arg0);
      ({ preventClipping, expanded } = arg0);
      ({ entering, exiting, layout, zIndex, sharedId } = arg0);
      let tmp5 = undefined !== draggable;
      ({ unread, children, config } = arg0);
      if (tmp5) {
        tmp5 = draggable;
      }
      let num = 0;
      const tmp7 = undefined !== isDragPreview && isDragPreview;
      if (undefined !== draggedItemSize) {
        num = draggedItemSize;
      }
      let num2 = 0;
      if (undefined !== zIndex) {
        num2 = zIndex;
      }
      const tmp9 = closure_7();
      const tmp2Result = circle(expanded[8]);
      const token = tmp2Result.useToken(onAccessibilityAction(expanded[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
      const tmp12 = closure_12(tmp9);
      const tmp13 = onAccessibilityAction(expanded[13])(config);
      const tmp2Result4 = circle(expanded[8]);
      const token1 = tmp2Result4.useToken(
        onAccessibilityAction(expanded[5]).modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS,
      );
      const fn = function o() {
        let result;
        const withSpring = spring.withSpring;
        spring;
        if (circle) {
          result = token / 2;
        } else {
          result = token1;
        }
        const obj = { borderRadius: withSpring(result, CORNER_SPRING_PHYSICS, "animate-always") };
        return obj;
      };
      const tmp2Result5 = circle(expanded[11]);
      fn.__closure = {
        withSpring: circle(expanded[10]).withSpring,
        circle,
        guildItemSelectedBorderRadius: token1,
        guildItemSize: token,
        CORNER_SPRING_PHYSICS,
      };
      fn.__workletHash = 12720556666938;
      fn.__initData = __initData5;
      ({
        withSpring: circle(expanded[10]).withSpring,
        circle,
        guildItemSelectedBorderRadius: token1,
        guildItemSize: token,
        CORNER_SPRING_PHYSICS,
      });
      const animatedStyle = tmp2Result5.useAnimatedStyle(fn);
      const enableHome = token.useContext(circle(expanded[14]).HomeDrawerStateContext).enableHome;
      const tmp2Result6 = circle(expanded[15]);
      const drawerOpen = tmp2Result6.useDrawerOpen(enableHome);
      if (undefined !== isDragTarget && isDragTarget) {
        let num3;
        let tmp17;
        if ("dragging" === dragState) {
          str2 = "hide";
        }
        if ("drag-target" === str2) {
          num3 = tmp9 + num;
        } else {
          num3 = 0;
          if ("hide" !== str2) {
            num3 = tmp9;
          }
        }
        let num4 = 0;
        if ("drag-target" === str2) {
          if ("before" === overState) {
            num4 = num;
          } else {
            num4 = 0;
          }
        }
        if (cResult[0] !== tmp9) {
          size = { position: "absolute", width: tmp9, height: tmp9 };
          cResult[0] = tmp9;
          cResult[1] = size;
          tmp17 = size;
        } else {
          tmp17 = cResult[1];
        }
        if (cResult[2] === num3) {
          if (cResult[3] === num4) {
            let tmp18;
            if (cResult[4] === num2) {
              tmp18 = cResult[5];
            }
            if (cResult[6] === tmp18) {
              let tmp19;
              if (cResult[7] === tmp17) {
                tmp19 = cResult[8];
              }
              ({ style, unreadStyle } = tmp19);
              let draggedElement;
              if (undefined !== isDragTarget && isDragTarget) {
                draggedElement = tmp12.draggedElement;
              }
              if (cResult[9] === styles.pressableWrapper) {
                let tmp21;
                let tmp26;
                let tmp25;
                if (cResult[10] === draggedElement) {
                  tmp21 = cResult[11];
                }
                if (unread) {
                  if (!(undefined !== isDragTarget && isDragTarget)) {
                    if (!tmp7) {
                      const obj3 = { selected, sharedId, id };
                      cResult[12] = id;
                      cResult[13] = selected;
                      cResult[14] = sharedId;
                      class Be {
                        constructor(nativeEvent) {
                          if (null != closure_6) {
                            if (nativeEvent.nativeEvent.actionName === closure_6.name) {
                              closure_6.action();
                            }
                          }
                          if (onAccessibilityAction != null) {
                            tmp2(nativeEvent);
                          }
                        }
                      }
                      cResult[15] = obj3;
                    }
                  }
                }
                hitSlop = obj6.useRef(undefined);
                if (cResult[16] !== expanded) {
                  function we() {
                    if (undefined !== ref.current) {
                      if (ref.current !== expanded) {
                        const intl = intl3.intl;
                        const string = intl.string;
                        const t = intl3.t;
                        const stringResult = string(expanded ? t.CUnsOR : t.jsudFd);
                        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                        AccessibilityAnnouncer.announce(stringResult);
                        ref.current = expanded;
                      }
                    } else {
                      ref.current = expanded;
                    }
                  }
                  const items = [expanded];
                  cResult[16] = expanded;
                  cResult[17] = we;
                  cResult[18] = items;
                  tmp26 = items;
                  tmp25 = we;
                } else {
                  tmp25 = cResult[17];
                  tmp26 = cResult[18];
                }
                const effect = obj6.useEffect(tmp25, tmp26);
                const tmp28 = onAccessibilityAction(expanded[18])(enableHome, drawerOpen);
                let closure_6 = tmp28;
                let arr3 = accessibilityActions;
                if (null != tmp28) {
                  let tmp30;
                  if (cResult[19] !== accessibilityActions) {
                    let items1 = accessibilityActions;
                    if (accessibilityActions == null) {
                      items1 = [];
                    }
                    cResult[19] = accessibilityActions;
                    cResult[20] = items1;
                    tmp30 = items1;
                  } else {
                    tmp30 = cResult[20];
                  }
                  if (cResult[21] === tmp28.label) {
                    if (cResult[24] === tmp30) {
                      let tmp32;
                      if (cResult[25] === tmp31) {
                        tmp32 = cResult[26];
                      }
                      arr3 = tmp32;
                    }
                    const items2 = [];
                    items2[HermesBuiltin.arraySpread(items2, tmp30, 0)] = tmp31;
                    cResult[24] = tmp30;
                    cResult[25] = tmp31;
                    class Be {
                      constructor(nativeEvent) {
                        if (null != closure_6) {
                          if (nativeEvent.nativeEvent.actionName === closure_6.name) {
                            closure_6.action();
                          }
                        }
                        if (onAccessibilityAction != null) {
                          tmp2(nativeEvent);
                        }
                      }
                    }
                    cResult[26] = items2;
                    tmp32 = items2;
                  }
                  const obj4 = { name: null, label: null };
                  ({ name: obj12.name, label: obj12.label } = tmp28);
                  cResult[21] = tmp28.label;
                  cResult[22] = tmp28.name;
                  cResult[23] = obj4;
                  class Be {
                    constructor(nativeEvent) {
                      if (null != closure_6) {
                        if (nativeEvent.nativeEvent.actionName === closure_6.name) {
                          closure_6.action();
                        }
                      }
                      if (onAccessibilityAction != null) {
                        tmp2(nativeEvent);
                      }
                    }
                  }
                }
                if (cResult[27] === onAccessibilityAction) {
                  let tmp35;
                  if (cResult[28] === tmp28) {
                    tmp35 = cResult[29];
                  }
                  if (cResult[30] === tmp5) {
                    if (cResult[31] === (null != arr3 && arr3.length > 0)) {
                      let obj13;
                      if (cResult[32] === hint) {
                        obj13 = cResult[33];
                      }
                      const joined = obj13.join(". ");
                      if (cResult[36] === expanded) {
                        let tmp47;
                        let tmp49;
                        if (cResult[37] === selected) {
                          tmp47 = cResult[38];
                        }
                        if (cResult[39] !== tmp23) {
                          const obj5 = { item: tmp23, renderItem: renderUnreadIndicator };
                          const tmp52 = closure_8(circle(expanded[9]).TransitionItem, obj5);
                          cResult[39] = tmp23;
                          cResult[40] = tmp52;
                          tmp49 = tmp52;
                        } else {
                          tmp49 = cResult[40];
                        }
                        if (cResult[41] === tmp49) {
                          let tmp53;
                          if (cResult[42] === unreadStyle) {
                            tmp53 = cResult[43];
                          }
                          if (cResult[44] === animatedStyle) {
                            let itemShapeSelected = null;
                            if (selected) {
                              itemShapeSelected = styles.itemShapeSelected;
                            }
                            if (cResult[47] === tmp12.selectedBackgroundOverlay) {
                              let tmp58;
                              if (cResult[48] === itemShapeSelected) {
                                tmp58 = cResult[49];
                              }
                              if (cResult[50] === cutouts) {
                                if (cResult[51] === tmp56) {
                                  if (cResult[52] === tmp58) {
                                    let tmp62;
                                    if (cResult[53] === (!(undefined !== isDragTarget && isDragTarget) && children)) {
                                      tmp62 = cResult[54];
                                    }
                                    if (cResult[55] === tmp13) {
                                      if (cResult[56] === externalChildren) {
                                        if (cResult[57] === tmp21) {
                                          if (cResult[58] === label) {
                                            if (cResult[59] === arr3) {
                                              if (cResult[60] === tmp35) {
                                                if (cResult[61] === tmp47) {
                                                  if (cResult[62] === tmp48) {
                                                    if (cResult[63] === tmp53) {
                                                      let tmp65;
                                                      if (cResult[64] === tmp62) {
                                                        tmp65 = cResult[65];
                                                      }
                                                      let container = null;
                                                      if (enableHome) {
                                                        container = tmp12.container;
                                                      }
                                                      if (cResult[66] === style) {
                                                        let tmp74;
                                                        if (cResult[67] === container) {
                                                          tmp74 = cResult[68];
                                                        }
                                                        if (cResult[69] === enableHome) {
                                                          if (cResult[70] === tmp13) {
                                                            if (cResult[71] === expandedChildren) {
                                                              if (
                                                                cResult[72] ===
                                                                (undefined !== isDragTarget && isDragTarget)
                                                              ) {
                                                                if (cResult[73] === drawerOpen) {
                                                                  let tmp75;
                                                                  if (cResult[74] === tmp12.expandedChildrenWrapper) {
                                                                    tmp75 = cResult[75];
                                                                  }
                                                                  if (cResult[76] === entering) {
                                                                    if (cResult[77] === exiting) {
                                                                      if (cResult[78] === tmp65) {
                                                                        if (cResult[79] === layout) {
                                                                          if (
                                                                            cResult[80] ===
                                                                            (undefined !== preventClipping &&
                                                                              preventClipping)
                                                                          ) {
                                                                            if (cResult[81] === tmp74) {
                                                                              let tmp82;
                                                                              if (cResult[82] === tmp75) {
                                                                                tmp82 = cResult[83];
                                                                              }
                                                                              return tmp82;
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                  const obj7 = {
                                                                    style: tmp74,
                                                                    layout,
                                                                    entering,
                                                                    exiting,
                                                                    preventClipping:
                                                                      undefined !== preventClipping && preventClipping,
                                                                    collapsable: false,
                                                                    children: items3,
                                                                  };
                                                                  items3 = [tmp65];
                                                                  class Be {
                                                                    constructor(nativeEvent) {
                                                                      if (null != closure_6) {
                                                                        if (
                                                                          nativeEvent.nativeEvent.actionName ===
                                                                          closure_6.name
                                                                        ) {
                                                                          closure_6.action();
                                                                        }
                                                                      }
                                                                      if (onAccessibilityAction != null) {
                                                                        tmp2(nativeEvent);
                                                                      }
                                                                    }
                                                                  }
                                                                  const tmp84 = closure_9(
                                                                    onAccessibilityAction(expanded[12]),
                                                                    obj7,
                                                                  );
                                                                  cResult[76] = entering;
                                                                  cResult[77] = exiting;
                                                                  cResult[78] = tmp65;
                                                                  cResult[79] = layout;
                                                                  cResult[80] =
                                                                    undefined !== preventClipping && preventClipping;
                                                                  cResult[81] = tmp74;
                                                                  cResult[82] = tmp75;
                                                                  cResult[83] = tmp84;
                                                                  tmp82 = tmp84;
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        let tmp77Result = null;
                                                        if (enableHome) {
                                                          const obj8 = {
                                                            style: tmp12.expandedChildrenWrapper,
                                                            collapsable: false,
                                                            accessibilityElementsHidden: !drawerOpen,
                                                            importantForAccessibility: "no-hide-descendants",
                                                            children:
                                                              !(undefined !== isDragTarget && isDragTarget) &&
                                                              expandedChildren,
                                                          };
                                                          const tmp10Result = onAccessibilityAction(expanded[19]);
                                                          const merged = Object.assign(tmp13);
                                                          class Be {
                                                            constructor(nativeEvent) {
                                                              if (null != closure_6) {
                                                                if (
                                                                  nativeEvent.nativeEvent.actionName === closure_6.name
                                                                ) {
                                                                  closure_6.action();
                                                                }
                                                              }
                                                              if (onAccessibilityAction != null) {
                                                                tmp2(nativeEvent);
                                                              }
                                                            }
                                                          }
                                                          tmp77Result = closure_8(tmp10Result, obj8);
                                                        }
                                                        cResult[69] = enableHome;
                                                        cResult[70] = tmp13;
                                                        cResult[71] = expandedChildren;
                                                        class Be {
                                                          constructor(nativeEvent) {
                                                            if (null != closure_6) {
                                                              if (
                                                                nativeEvent.nativeEvent.actionName === closure_6.name
                                                              ) {
                                                                closure_6.action();
                                                              }
                                                            }
                                                            if (onAccessibilityAction != null) {
                                                              tmp2(nativeEvent);
                                                            }
                                                          }
                                                        }
                                                        cResult[73] = drawerOpen;
                                                        cResult[74] = tmp12.expandedChildrenWrapper;
                                                        cResult[75] = tmp77Result;
                                                        tmp75 = tmp77Result;
                                                      }
                                                      const items4 = [container, style];
                                                      cResult[66] = style;
                                                      cResult[67] = container;
                                                      class Be {
                                                        constructor(nativeEvent) {
                                                          if (null != closure_6) {
                                                            if (nativeEvent.nativeEvent.actionName === closure_6.name) {
                                                              closure_6.action();
                                                            }
                                                          }
                                                          if (onAccessibilityAction != null) {
                                                            tmp2(nativeEvent);
                                                          }
                                                        }
                                                      }
                                                      cResult[68] = items4;
                                                      tmp74 = items4;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const obj9 = {
                                      style: tmp21,
                                      accessibilityLabel: label,
                                      focusable: true,
                                      accessibilityRole: "button",
                                      accessibilityState: tmp47,
                                      hitSlop,
                                      accessibilityHint: tmp48,
                                      collapsable: false,
                                      accessibilityActions: arr3,
                                      onAccessibilityAction: tmp35,
                                      children: items5,
                                    };
                                    const tmp10Result2 = onAccessibilityAction(expanded[19]);
                                    const merged1 = Object.assign(tmp13);
                                    class Be {
                                      constructor(nativeEvent) {
                                        if (null != closure_6) {
                                          if (nativeEvent.nativeEvent.actionName === closure_6.name) {
                                            closure_6.action();
                                          }
                                        }
                                        if (onAccessibilityAction != null) {
                                          tmp2(nativeEvent);
                                        }
                                      }
                                    }
                                    items5 = [externalChildren, tmp53, tmp62];
                                    const tmp72 = closure_9(tmp10Result2, obj9);
                                    cResult[55] = tmp13;
                                    cResult[56] = externalChildren;
                                    cResult[57] = tmp21;
                                    cResult[58] = label;
                                    cResult[59] = arr3;
                                    cResult[60] = tmp35;
                                    cResult[61] = tmp47;
                                    cResult[62] = tmp48;
                                    cResult[63] = tmp53;
                                    cResult[64] = tmp62;
                                    cResult[65] = tmp72;
                                    tmp65 = tmp72;
                                  }
                                }
                              }
                              const items6 = [tmp58, !(undefined !== isDragTarget && isDragTarget) && children];
                              class Be {
                                constructor(nativeEvent) {
                                  if (null != closure_6) {
                                    if (nativeEvent.nativeEvent.actionName === closure_6.name) {
                                      closure_6.action();
                                    }
                                  }
                                  if (onAccessibilityAction != null) {
                                    tmp2(nativeEvent);
                                  }
                                }
                              }
                              cResult[50] = cutouts;
                              cResult[51] = tmp56;
                              cResult[52] = tmp58;
                              cResult[53] = !(undefined !== isDragTarget && isDragTarget) && children;
                              cResult[54] = tmp64;
                              tmp62 = tmp64;
                            }
                            const obj11 = { pointerEvents: "none", style: items7 };
                            items7 = [tmp12.selectedBackgroundOverlay, itemShapeSelected];
                            const tmp60 = closure_8(onAccessibilityAction(expanded[19]), obj11);
                            class Be {
                              constructor(nativeEvent) {
                                if (null != closure_6) {
                                  if (nativeEvent.nativeEvent.actionName === closure_6.name) {
                                    closure_6.action();
                                  }
                                }
                                if (onAccessibilityAction != null) {
                                  tmp2(nativeEvent);
                                }
                              }
                            }
                            cResult[47] = tmp12.selectedBackgroundOverlay;
                            cResult[48] = itemShapeSelected;
                            cResult[49] = tmp60;
                            tmp58 = tmp60;
                          }
                          const items8 = [styles.itemShape, animatedStyle];
                          cResult[44] = animatedStyle;
                          cResult[45] = styles.itemShape;
                          cResult[46] = items8;
                          class Be {
                            constructor(nativeEvent) {
                              if (null != closure_6) {
                                if (nativeEvent.nativeEvent.actionName === closure_6.name) {
                                  closure_6.action();
                                }
                              }
                              if (onAccessibilityAction != null) {
                                tmp2(nativeEvent);
                              }
                            }
                          }
                        }
                        const obj14 = {
                          pointerEvents: "none",
                          style: unreadStyle,
                          collapsable: false,
                          children: tmp49,
                        };
                        const tmp55 = closure_8(onAccessibilityAction(expanded[19]), obj14);
                        class Be {
                          constructor(nativeEvent) {
                            if (null != closure_6) {
                              if (nativeEvent.nativeEvent.actionName === closure_6.name) {
                                closure_6.action();
                              }
                            }
                            if (onAccessibilityAction != null) {
                              tmp2(nativeEvent);
                            }
                          }
                        }
                        cResult[42] = unreadStyle;
                        cResult[43] = tmp55;
                        tmp53 = tmp55;
                      }
                      const obj15 = { selected, expanded };
                      cResult[36] = expanded;
                      cResult[37] = selected;
                      class Be {
                        constructor(nativeEvent) {
                          if (null != closure_6) {
                            if (nativeEvent.nativeEvent.actionName === closure_6.name) {
                              closure_6.action();
                            }
                          }
                          if (onAccessibilityAction != null) {
                            tmp2(nativeEvent);
                          }
                        }
                      }
                      cResult[38] = obj15;
                      tmp47 = obj15;
                    }
                  }
                  const items9 = [];
                  const tmp37 = null != hint && hint.length > 0;
                  if (tmp37) {
                    items9.push(hint);
                  }
                  if (tmp5) {
                    let tmp40;
                    const _Symbol = Symbol;
                    if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                      let intl = circle(expanded[16]).intl;
                      let stringResult = intl.string(circle(expanded[16]).t.BGMUFB);
                      cResult[34] = stringResult;
                      tmp40 = stringResult;
                    } else {
                      tmp40 = cResult[34];
                    }
                    items9.push(tmp40);
                  }
                  if (null != arr3 && arr3.length > 0) {
                    let tmp44;
                    const _Symbol2 = Symbol;
                    if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl2 = circle(expanded[16]).intl;
                      const stringResult1 = intl2.string(circle(expanded[16]).t.X2x0MF);
                      cResult[35] = stringResult1;
                      tmp44 = stringResult1;
                    } else {
                      tmp44 = cResult[35];
                    }
                    items9.push(tmp44);
                  }
                  cResult[30] = tmp5;
                  class Be {
                    constructor(nativeEvent) {
                      if (null != closure_6) {
                        if (nativeEvent.nativeEvent.actionName === closure_6.name) {
                          closure_6.action();
                        }
                      }
                      if (onAccessibilityAction != null) {
                        tmp2(nativeEvent);
                      }
                    }
                  }
                  cResult[32] = hint;
                  cResult[33] = items9;
                  obj13 = items9;
                }
                class Be {
                  constructor(nativeEvent) {
                    if (null != closure_6) {
                      if (nativeEvent.nativeEvent.actionName === closure_6.name) {
                        closure_6.action();
                      }
                    }
                    if (onAccessibilityAction != null) {
                      tmp2(nativeEvent);
                    }
                  }
                }
                cResult[27] = onAccessibilityAction;
                cResult[28] = tmp28;
                cResult[29] = Be;
                tmp35 = Be;
              }
              const items10 = [styles.pressableWrapper, draggedElement, token1];
              cResult[9] = styles.pressableWrapper;
              cResult[10] = draggedElement;
              cResult[11] = items10;
              tmp21 = items10;
            }
            const obj16 = { style: tmp18, unreadStyle: tmp17 };
            cResult[6] = tmp18;
            cResult[7] = tmp17;
            cResult[8] = obj16;
          }
        }
        const obj17 = { height: num3, top: num4, zIndex: null };
        cResult[2] = num3;
        cResult[3] = num4;
        cResult[4] = num2;
        cResult[5] = obj17;
        tmp18 = obj17;
      }
      if (null != overState) {
        let str5;
        if ("self" !== overState) {
          str5 = "drag-target";
        }
        str2 = str5;
      }
      str5 = "none";
    }
  : (id) => {
      let children;
      let circle;
      let closure_21;
      let config;
      let cutouts;
      let entering;
      let exiting;
      let expandedChildren;
      let externalChildren;
      let isDragTarget;
      let items10;
      let items11;
      let items12;
      let items7;
      let items8;
      let label;
      let layout;
      let obj9;
      let str;
      let style;
      let tmp22;
      let unread;
      let unreadStyle;
      let zIndex;
      id = id.id;
      const selected = id.selected;
      ({ unread, circle } = id);
      const hint = id.hint;
      let flag = id.draggable;
      ({ children, externalChildren, expandedChildren, config, label } = id);
      if (flag === undefined) {
        flag = false;
      }
      ({ isDragTarget, cutouts } = id);
      if (isDragTarget === undefined) {
        isDragTarget = false;
      }
      const dragState = id.dragState;
      let flag2 = id.isDragPreview;
      if (flag2 === undefined) {
        flag2 = false;
      }
      let num = id.draggedItemSize;
      if (num === undefined) {
        num = 0;
      }
      const overState = id.overState;
      const styles = id.styles;
      const accessibilityActions = id.accessibilityActions;
      const onAccessibilityAction = id.onAccessibilityAction;
      let flag3 = id.preventClipping;
      if (flag3 === undefined) {
        flag3 = false;
      }
      const expanded = id.expanded;
      ({ zIndex, entering, exiting, layout } = id);
      if (zIndex === undefined) {
        zIndex = 0;
      }
      const sharedId = id.sharedId;
      flag2 = undefined;
      let ref;
      __initData6 = undefined;
      let closure_22;
      let tmp = num();
      let closure_15 = tmp;
      const tmp2 = id;
      let tmp3 = circle;
      let obj = id(circle[8]);
      const token = obj.useToken(selected(circle[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
      const tmp6 = expanded(tmp);
      let draggedElement = tmp6;
      const tmp7 = selected(circle[13])(config);
      let obj2 = id(circle[8]);
      const token1 = obj2.useToken(selected(circle[5]).modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
      const obj3 = id(circle[11]);
      class W {
        constructor() {
          let result;
          const withSpring = spring.withSpring;
          spring;
          if (circle) {
            result = token / 2;
          } else {
            result = token1;
          }
          const obj = { borderRadius: withSpring(result, CORNER_SPRING_PHYSICS, "animate-always") };
          return obj;
        }
      }
      W.__closure = {
        withSpring: id(circle[10]).withSpring,
        circle,
        guildItemSelectedBorderRadius: token1,
        guildItemSize: token,
        CORNER_SPRING_PHYSICS: accessibilityActions,
      };
      W.__workletHash = 8990556629081;
      W.__initData = __initData6;
      ({
        withSpring: id(circle[10]).withSpring,
        circle,
        guildItemSelectedBorderRadius: token1,
        guildItemSize: token,
        CORNER_SPRING_PHYSICS: accessibilityActions,
      });
      const animatedStyle = obj3.useAnimatedStyle(W);
      const enableHome = hint.useContext(id(circle[14]).HomeDrawerStateContext).enableHome;
      const obj6 = id(circle[15]);
      const drawerOpen = obj6.useDrawerOpen(enableHome);
      let items = [isDragTarget, dragState, num, overState, zIndex, tmp];
      const memo = hint.useMemo(() => {
        let num2;
        let str2;
        let tmp3;
        if (isDragTarget) {
          if ("dragging" === dragState) {
            tmp3 = overState;
            str2 = "hide";
          }
          if ("drag-target" === str2) {
            num = height + num;
          } else {
            num = 0;
            if ("hide" !== str2) {
              num = height;
            }
          }
          const obj = { height: num, top: num2, zIndex };
          num2 = 0;
          if ("drag-target" === str2) {
            if ("before" === tmp3) {
              num2 = num;
            } else {
              num2 = 0;
            }
          }
          const obj2 = { style: obj, unreadStyle: size };
          size = { position: "absolute", width: height, height };
          return obj2;
        }
        if (null != overState) {
          let str5;
          if ("self" !== overState) {
            str5 = "drag-target";
          }
          str2 = str5;
          tmp3 = overState;
        }
        str5 = "none";
      }, items);
      let items1 = [styles.pressableWrapper, isDragTarget, tmp6.draggedElement];
      ({ style, unreadStyle } = memo);
      let tmp13 = !unread;
      const memo1 = hint.useMemo(() => {
        const items = [styles.pressableWrapper, ,];
        draggedElement = undefined;
        if (isDragTarget) {
          draggedElement = draggedElement.draggedElement;
        }
        items[1] = draggedElement;
        items[2] = IOS_POINTER_STYLE;
        return items;
      }, items1);
      if (!unread) {
        tmp13 = !selected;
      }
      if (!tmp13) {
        tmp13 = isDragTarget;
      }
      if (!tmp13) {
        tmp13 = flag2;
      }
      flag2 = tmp13;
      const items2 = [tmp13, selected, sharedId, id];
      const memo2 = obj5.useMemo(() => {
        if (!flag2) {
          return { selected, sharedId, id };
        }
      }, items2);
      ref = obj5.useRef(undefined);
      const items3 = [expanded];
      const effect = obj5.useEffect(() => {
        if (undefined !== ref.current) {
          if (ref.current !== expanded) {
            const intl = intl3.intl;
            const string = intl.string;
            const t = intl3.t;
            const stringResult = string(expanded ? t.CUnsOR : t.jsudFd);
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(stringResult);
            ref.current = expanded;
          }
        } else {
          ref.current = expanded;
        }
      }, items3);
      const tmp16 = selected(tmp3[18])(enableHome, drawerOpen);
      __initData6 = tmp16;
      const items4 = [accessibilityActions, tmp16];
      const memo3 = obj5.useMemo(() => {
        let items1;
        if (null == closure_21) {
          items1 = accessibilityActions;
        } else {
          let items = accessibilityActions;
          if (accessibilityActions == null) {
            items = [];
          }
          items1 = [];
          const obj = { name: null, label: null };
          ({ name: obj.name, label: obj.label } = closure_21);
          items1[HermesBuiltin.arraySpread(items1, items, 0)] = obj;
        }
        return items1;
      }, items4);
      const items5 = [tmp16, onAccessibilityAction];
      let tmp18 = null != memo3;
      const callback = obj5.useCallback((nativeEvent) => {
        if (null != closure_21) {
          if (nativeEvent.nativeEvent.actionName === closure_21.name) {
            closure_21.action();
          }
        }
        if (onAccessibilityAction != null) {
          tmp2(nativeEvent);
        }
      }, items5);
      if (tmp18) {
        let num2 = 0;
        tmp18 = memo3.length > 0;
      }
      closure_22 = tmp18;
      const items6 = [hint, flag, tmp18];
      const memo4 = obj5.useMemo(() => {
        const items = [];
        const tmp = null != hint && hint.length > 0;
        if (tmp) {
          items.push(hint);
        }
        if (flag) {
          const push = items.push;
          const intl = intl3.intl;
          push(intl.string(intl3.t.BGMUFB));
        }
        if (closure_22) {
          const push2 = items.push;
          const intl2 = intl3.intl;
          push2(intl2.string(intl3.t.X2x0MF));
        }
        return items.join(". ");
      }, items6);
      const obj7 = {
        style: memo1,
        accessibilityLabel: label,
        accessible: true,
        focusable: true,
        accessibilityRole: "button",
        accessibilityState: { selected, expanded },
        hitSlop: isDragTarget,
        accessibilityHint: tmp22,
        collapsable: false,
        accessibilityActions: memo3,
        onAccessibilityAction: callback,
        children: items7,
      };
      const tmp4Result = selected(tmp3[19]);
      const merged = Object.assign(tmp7);
      tmp22 = undefined;
      if (memo4.length > 0) {
        tmp22 = memo4;
      }
      items7 = [externalChildren, ,];
      const obj8 = {
        pointerEvents: "none",
        style: unreadStyle,
        collapsable: false,
        children: overState(tmp2(tmp3[9]).TransitionItem, obj9),
      };
      obj9 = { item: memo2, renderItem: flag2 };
      const tmp4Result5 = selected(tmp3[19]);
      items7[1] = overState(tmp4Result5, obj8);
      const obj10 = { style: items8, cutouts, children: items10 };
      items8 = [styles.itemShape, animatedStyle];
      const ClipViewAnimated = tmp2(tmp3[20]).ClipViewAnimated;
      const items9 = [tmp6.selectedBackgroundOverlay];
      let itemShapeSelected = null;
      const tmp4Result6 = selected(tmp3[19]);
      if (selected) {
        itemShapeSelected = styles.itemShapeSelected;
      }
      items9[1] = itemShapeSelected;
      items10 = [overState(tmp4Result6, { pointerEvents: "none", style: items9 }), !isDragTarget && children];
      items7[2] = styles(ClipViewAnimated, obj10);
      let container = null;
      const tmp19Result = styles(tmp4Result, obj7);
      const tmp4Result7 = selected(tmp3[12]);
      if (enableHome) {
        container = tmp6.container;
      }
      const obj11 = {
        style: items11,
        layout,
        entering,
        exiting,
        preventClipping: flag3,
        collapsable: false,
        children: items12,
      };
      items11 = [container, style];
      items12 = [tmp19Result];
      let tmp23Result = null;
      if (enableHome) {
        const obj12 = {
          style: tmp6.expandedChildrenWrapper,
          collapsable: false,
          accessibilityElementsHidden: !drawerOpen,
          importantForAccessibility: str,
          children: !isDragTarget && expandedChildren,
        };
        const tmp4Result8 = selected(tmp3[19]);
        const merged1 = Object.assign(tmp7);
        str = "no-hide-descendants";
        if (drawerOpen) {
          str = "auto";
        }
        tmp23Result = tmp23(tmp4Result8, obj12);
      }
      items12[1] = tmp23Result;
      return styles(tmp4Result7, obj11);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx");

export default tmp6;
export const useGuildsBarAnimatedWrapperStyles = tmp4;
export const UnreadIndicator = tmp5;
export { renderUnreadIndicator };
