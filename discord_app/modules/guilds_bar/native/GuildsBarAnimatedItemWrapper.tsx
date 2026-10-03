// discord_app/modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function renderUnreadIndicator(arg0, sharedId, transitionState, cleanUp) {
  return closure_1_8(closure_18, { sharedId: sharedId.sharedId, id: sharedId.id, selected: sharedId.selected, transitionState, cleanUp }, arg0);
}
const IOS_POINTER_STYLE = fn(5611).IOS_POINTER_STYLE;
const GuildsBarConstants = fn(16218);
({ GUILD_ITEM_HIT_SLOP: hasOwnProperty, GUILD_ITEM_INSET_LEFT: metroRequire, useGuildWrapperSize: closure_7 } = GuildsBarConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const CORNER_SPRING_PHYSICS = { mass: 0.8, damping: 100, stiffness: 150 };
const BAR_SPRING_PHYSICS = { mass: 0.25, damping: 100, stiffness: 200 };
let createStyles = fn(4890);
let closure_12 = createStyles.createStyles(() => {
  let num = arg0;
  if (arg0 === undefined) {
    num = 56;
  }
  const obj = { draggedElement: { opacity: 0 }, selectedBackgroundOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, container: { position: "relative", overflow: "visible" }, unreadIndicator: null, expandedChildrenWrapper: null };
  const size = { position: "absolute", top: num / 2, left: -4, height: 8, width: 8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.TEXT_STRONG };
  obj.unreadIndicator = size;
  const rect = { position: "absolute", left: num + 16, top: 0, right: 8, height: num, display: "flex", flexDirection: "row", alignItems: "center" };
  obj.expandedChildrenWrapper = rect;
  return obj;
});
createStyles = fn(4890);
let closure_13 = createStyles.createStyles((arg0, arg1, width, height) => {
  const obj = { pressableWrapper: null, itemShape: null, itemShapeSelected: null };
  const size = { position: "relative", paddingTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, paddingBottom: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, paddingLeft, height, width: width + hasOwnProperty.left + hasOwnProperty.right };
  obj.pressableWrapper = size;
  const size1 = { position: "relative", width, height: width, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: null };
  let str = "transparent";
  let str2 = "transparent";
  if (!arg1) {
    str2 = nativeDefault.colors.MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT;
  }
  size1.backgroundColor = str2;
  obj.itemShape = size1;
  if (arg0) {
    if (!arg1) {
      str = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
    }
    let BACKGROUND_BRAND = str;
  } else {
    BACKGROUND_BRAND = nativeDefault.colors.BACKGROUND_BRAND;
  }
  obj.itemShapeSelected = { backgroundColor: BACKGROUND_BRAND };
  return obj;
});
fn(558);
const __initData = { code: "function GuildsBarAnimatedItemWrapperTsx1(values){const{disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,guildItemSize}=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,\"animate-always\"),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,\"animate-always\"),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,\"animate-always\")},initialValues:{height:8,originY:guildItemSize/2,originX:-12}};}" };
const __initData2 = { code: "function GuildsBarAnimatedItemWrapperTsx2(values_0){const{withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,runOnJS}=this.__closure;return{animations:{originY:withSpring(values_0.targetOriginY,BAR_SPRING_PHYSICS,\"animate-always\"),originX:withSpring(values_0.targetOriginX,BAR_SPRING_PHYSICS,\"animate-always\"),height:withSpring(values_0.targetHeight,BAR_SPRING_PHYSICS,\"animate-always\")},initialValues:{height:values_0.currentHeight,originY:values_0.currentOriginY,originX:values_0.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){runOnJS(cleanUp)();}}};}" };
const __initData3 = { code: "function GuildsBarAnimatedItemWrapperTsx3(values){const{disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,guildItemSize}=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:8,originY:guildItemSize/2,originX:-12}};}" };
const __initData4 = { code: "function GuildsBarAnimatedItemWrapperTsx4(values_0){const{withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,runOnJS}=this.__closure;return{animations:{originY:withSpring(values_0.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values_0.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values_0.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:values_0.currentHeight,originY:values_0.currentOriginY,originX:values_0.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){runOnJS(cleanUp)();}}};}" };
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((sharedId) => {
  const cResult = sharedId(cleanUp[7]).c(19);
  sharedId = sharedId.sharedId;
  const id = sharedId.id;
  ({ transitionState, cleanUp } = sharedId);
  if (undefined === transitionState) {
    transitionState = tmp(cleanUp[9]).TransitionStates.MOUNTED;
  }
  let obj = sharedId(cleanUp[7]);
  const token = sharedId(cleanUp[8]).useToken(id(cleanUp[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp6 = closure_12(closure_7());
  const tmp7 = transitionState === sharedId(cleanUp[9]).TransitionStates.MOUNTED;
  closure_5 = tmp7;
  let num = 8;
  if (sharedId.selected) {
    num = 8;
    if (transitionState !== tmp(cleanUp[9]).TransitionStates.YEETED) {
      num = 40;
    }
  }
  let num2 = 0;
  if (transitionState === sharedId(cleanUp[9]).TransitionStates.YEETED) {
    num2 = -4;
  }
  const result = num / 2 * -1;
  if (cResult[0] === num) {
    if (cResult[1] === result) {
      if (cResult[2] === num2) {
        let tmp9 = cResult[3];
      }
      if (cResult[4] === tmp6.unreadIndicator) {
        if (cResult[5] === tmp9) {
          let tmp10 = cResult[6];
        }
        if (cResult[7] === tmp7) {
          if (cResult[8] === token) {
            if (cResult[9] === id) {
              if (cResult[10] === sharedId) {
                let tmp12 = cResult[11];
              }
              if (cResult[12] === cleanUp) {
                if (cResult[13] === transitionState) {
                  let tmp15 = cResult[14];
                }
                if (cResult[15] === tmp12) {
                  if (cResult[16] === tmp15) {
                    if (cResult[17] === tmp10) {
                      let tmp18 = cResult[18];
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
                    obj.initialValues = { height: sharedId.currentHeight, originY: sharedId.currentOriginY, originX: sharedId.currentOriginX };
                    obj.callback = function callback() { ... };
                    return obj;
                  }
                }
                let obj2 = { collapsable: false, entering: tmp12, layout: tmp15, style: tmp10, pointerEvents: "none" };
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
                  obj.initialValues = { height: sharedId.currentHeight, originY: sharedId.currentOriginY, originX: sharedId.currentOriginX };
                  obj.callback = function callback() { ... };
                  return obj;
                }
              }
              let obj3 = { withSpring: tmp(cleanUp[10]).withSpring, BAR_SPRING_PHYSICS, transitionState, TransitionStates: tmp(cleanUp[9]).TransitionStates, cleanUp, runOnJS: tmp(cleanUp[11]).runOnJS };
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
            if (closure_5) {
              obj1 = { animations: null, initialValues: null };
              obj1.animations = {};
              obj1.initialValues = {};
              obj9 = obj1;
            } else {
              obj = sharedId;
              tmp = null;
              if (null != sharedId) {
                tmp2 = id;
              }
              tmp3 = sharedId;
              obj9 = { animations: null, initialValues: null };
              obj10 = { originY: null, originX: null, height: null };
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj4 = closure_0(closure_2[10]);
              tmp6 = closure_11;
              str = "animate-always";
              obj10.originY = obj4.withSpring(sharedId.targetOriginY, closure_11, "animate-always");
              obj5 = closure_0(closure_2[10]);
              obj10.originX = obj5.withSpring(sharedId.targetOriginX, closure_11, "animate-always");
              obj6 = closure_0(closure_2[10]);
              obj10.height = obj6.withSpring(sharedId.targetHeight, closure_11, "animate-always");
              obj9.animations = obj10;
              obj11 = { height: 8, originY: null, originX: -12 };
              tmp7 = closure_4;
              num = 2;
              obj11.originY = closure_4 / 2;
              obj9.initialValues = obj11;
            }
            return obj9;
          }
        }
        let obj4 = { disableEntering: tmp7, sharedId, id, withSpring: tmp(cleanUp[10]).withSpring, BAR_SPRING_PHYSICS, guildItemSize: token };
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
  tmp4 = id;
  let tmpResult = sharedId(cleanUp[8]);
}) : ((sharedId) => {
  sharedId = sharedId.sharedId;
  const id = sharedId.id;
  let MOUNTED = sharedId.transitionState;
  if (MOUNTED === undefined) {
    MOUNTED = sharedId(MOUNTED[9]).TransitionStates.MOUNTED;
  }
  const cleanUp = sharedId.cleanUp;
  let num;
  const token = sharedId(MOUNTED[8]).useToken(id(MOUNTED[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp7 = closure_12(num());
  const unreadIndicator = tmp7;
  const tmp8 = MOUNTED === sharedId(MOUNTED[9]).TransitionStates.MOUNTED;
  closure_6 = tmp8;
  num = 8;
  if (sharedId.selected) {
    num = 8;
    if (MOUNTED !== tmp3(tmp4[9]).TransitionStates.YEETED) {
      num = 40;
    }
  }
  let items = [num, MOUNTED, tmp7.unreadIndicator];
  const fn = function h(targetOriginY) {
    if (closure_6) {
      const obj2 = { animations: {}, initialValues: {} };
      let obj3 = obj2;
    } else {
      obj3 = { animations: null, initialValues: null };
      const obj7 = { originY: spring.withSpring(targetOriginY.targetOriginY, closure_11, "animate-always"), originX: null, height: null };
      obj7.originX = spring.withSpring(targetOriginY.targetOriginX, closure_11, "animate-always");
      obj7.height = spring.withSpring(targetOriginY.targetHeight, closure_11, "animate-always");
      obj3.animations = obj7;
      const obj8 = { height: 8, originY: token / 2, originX: -12 };
      obj3.initialValues = obj8;
    }
    return obj3;
  };
  let obj2 = { disableEntering: tmp8, sharedId, id, withSpring: null, BAR_SPRING_PHYSICS: null, guildItemSize: null };
  const style = cleanUp.useMemo(() => {
    const items = [unreadIndicator.unreadIndicator, ];
    const obj = { height: num, marginTop: num / 2 * -1, marginLeft: null };
    num = 0;
    if (MOUNTED === native.TransitionStates.YEETED) {
      num = -4;
    }
    obj.marginLeft = num;
    items[1] = obj;
    return items;
  }, items);
  obj2.withSpring = sharedId(MOUNTED[10]).withSpring;
  obj2.BAR_SPRING_PHYSICS = BAR_SPRING_PHYSICS;
  obj2.guildItemSize = token;
  fn.__closure = obj2;
  fn.__workletHash = 8054478360265;
  fn.__initData = __initData3;
  const items1 = [tmp8, sharedId, id, token];
  const fn2 = function p(height) {
    const obj = { animations: null, initialValues: null, callback: null };
    const obj2 = { originY: spring.withSpring(height.targetOriginY, closure_11, "animate-always"), originX: null, height: null };
    obj2.originX = spring.withSpring(height.targetOriginX, closure_11, "animate-always");
    obj2.height = spring.withSpring(height.targetHeight, closure_11, "animate-always");
    obj.animations = obj2;
    obj.initialValues = { height: height.currentHeight, originY: height.currentOriginY, originX: height.currentOriginX };
    obj.callback = function callback(arg0) {
      let tmp3 = closure_1_2 === sharedId(MOUNTED[9]).TransitionStates.YEETED && arg0;
      if (tmp3) {
        tmp3 = null != cleanUp;
      }
      if (tmp3) {
        sharedId(MOUNTED[11]).runOnJS(cleanUp)();
        const tmpResult = sharedId(MOUNTED[11]);
      }
    };
    return obj;
  };
  let obj3 = { withSpring: null, BAR_SPRING_PHYSICS: null, transitionState: null, TransitionStates: null, cleanUp: null, runOnJS: null };
  const entering = cleanUp.useCallback(fn, items1);
  obj3.withSpring = sharedId(MOUNTED[10]).withSpring;
  obj3.BAR_SPRING_PHYSICS = BAR_SPRING_PHYSICS;
  obj3.transitionState = MOUNTED;
  obj3.TransitionStates = sharedId(MOUNTED[9]).TransitionStates;
  obj3.cleanUp = cleanUp;
  obj3.runOnJS = sharedId(MOUNTED[11]).runOnJS;
  fn2.__closure = obj3;
  fn2.__workletHash = 4690084405489;
  fn2.__initData = __initData4;
  const items2 = [MOUNTED, cleanUp];
  const layout = cleanUp.useCallback(fn2, items2);
  return closure_8(id(MOUNTED[12]), { collapsable: false, entering, layout, style, pointerEvents: "none" });
});
let closure_18 = tmp5;
const __initData5 = { code: "function GuildsBarAnimatedItemWrapperTsx5(){const{withSpring,circle,guildItemSelectedBorderRadius,guildItemSize,CORNER_SPRING_PHYSICS}=this.__closure;return{borderRadius:withSpring(!circle?guildItemSelectedBorderRadius:guildItemSize/2,CORNER_SPRING_PHYSICS,\"animate-always\")};}" };
let __initData6 = { code: "function GuildsBarAnimatedItemWrapperTsx6(){const{withSpring,circle,guildItemSelectedBorderRadius,guildItemSize,CORNER_SPRING_PHYSICS}=this.__closure;return{borderRadius:withSpring(!circle?guildItemSelectedBorderRadius:guildItemSize/2,CORNER_SPRING_PHYSICS,'animate-always')};}" };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ disableSelectedColor, disableBGColor } = tmp4);
  const tmp5 = undefined !== disableSelectedColor && disableSelectedColor;
  const tmp6 = undefined !== disableBGColor && disableBGColor;
  const token = useToken.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  return closure_13(tmp5, tmp6, token, React5());
}) : (() => {
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
  const token = useToken.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  return closure_13(flag, flag2, token, React5());
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = circle(expanded[7]).c(84);
  ({ id, selected, circle } = arg0);
  ({ externalChildren, expandedChildren, label, hint, draggable, cutouts, isDragTarget, dragState, isDragPreview, draggedItemSize, overState, styles, accessibilityActions, onAccessibilityAction } = arg0);
  ({ preventClipping, expanded } = arg0);
  ({ entering, exiting, layout, zIndex, sharedId } = arg0);
  let tmp4 = undefined !== draggable;
  ({ unread, children, config } = arg0);
  if (tmp4) {
    tmp4 = draggable;
  }
  let num = 0;
  if (undefined !== draggedItemSize) {
    num = draggedItemSize;
  }
  let num2 = 0;
  if (undefined !== zIndex) {
    num2 = zIndex;
  }
  const tmp7 = closure_7();
  let obj = circle(expanded[7]);
  const tmp6 = undefined !== isDragPreview && isDragPreview;
  const token = circle(expanded[8]).useToken(onAccessibilityAction(expanded[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmpResult = circle(expanded[8]);
  onAccessibilityAction(expanded[13])(config);
  const tmp10 = closure_12(tmp7);
  const token1 = circle(expanded[8]).useToken(onAccessibilityAction(expanded[5]).modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
  const tmpResult4 = circle(expanded[8]);
  const fn = function o() {
    if (circle) {
      let result = token / 2;
    } else {
      result = token1;
    }
    return { borderRadius: spring.withSpring(result, closure_10, "animate-always") };
  };
  const tmpResult5 = circle(expanded[11]);
  fn.__closure = { withSpring: circle(expanded[10]).withSpring, circle, guildItemSelectedBorderRadius: token1, guildItemSize: token, CORNER_SPRING_PHYSICS };
  fn.__workletHash = 12720556666938;
  fn.__initData = __initData5;
  const animatedStyle = tmpResult5.useAnimatedStyle(fn);
  const enableHome = token.useContext(circle(expanded[14]).HomeDrawerStateContext).enableHome;
  const obj2 = { withSpring: circle(expanded[10]).withSpring, circle, guildItemSelectedBorderRadius: token1, guildItemSize: token, CORNER_SPRING_PHYSICS };
  const drawerOpen = circle(expanded[15]).useDrawerOpen(enableHome);
  if (undefined !== isDragTarget && isDragTarget) {
    if ("dragging" === dragState) {
      let str2 = "hide";
    }
    if ("drag-target" === str2) {
      let num3 = tmp7 + num;
    } else {
      num3 = 0;
      if ("hide" !== str2) {
        num3 = tmp7;
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
    if (cResult[0] !== tmp7) {
      const size = { position: "absolute", width: tmp7, height: tmp7 };
      cResult[0] = tmp7;
      cResult[1] = size;
      let tmp15 = size;
    } else {
      tmp15 = cResult[1];
    }
    if (cResult[2] === num3) {
      if (cResult[3] === num4) {
        if (cResult[4] === num2) {
          let tmp16 = cResult[5];
        }
        if (cResult[6] === tmp16) {
          if (cResult[7] === tmp15) {
            let tmp17 = cResult[8];
          }
          ({ style, unreadStyle } = tmp17);
          let draggedElement;
          if (tmp5) {
            draggedElement = tmp10.draggedElement;
          }
          if (cResult[9] === styles.pressableWrapper) {
            if (unread) {
              if (!tmp5) {
                if (!tmp6) {
                  if (cResult[12] === id) {
                    if (cResult[13] === selected) {
                    }
                  }
                  const obj3 = { selected, sharedId, id };
                  cResult[12] = id;
                  cResult[13] = selected;
                  cResult[14] = sharedId;
                  cResult[15] = obj3;
                }
              }
            }
            obj6.useRef(undefined);
            if (cResult[16] !== expanded) {
              function we() {
                if (undefined !== ref.current) {
                  if (ref.current !== expanded) {
                    let AccessibilityAnnouncer = require;
                    const intl = util.intl;
                    const t = util.t;
                    AccessibilityAnnouncer = AccessibilityAnnouncer(4590).AccessibilityAnnouncer;
                    AccessibilityAnnouncer.announce(intl.string(expanded ? t.CUnsOR : t.jsudFd));
                    ref.current = expanded;
                    const stringResult = intl.string(expanded ? t.CUnsOR : t.jsudFd);
                  }
                } else {
                  ref.current = expanded;
                }
              }
              const items = [expanded];
              cResult[16] = expanded;
              cResult[17] = we;
              cResult[18] = items;
              let tmp25 = items;
              let tmp24 = we;
            } else {
              tmp24 = cResult[17];
              tmp25 = cResult[18];
            }
            const effect = obj6.useEffect(tmp24, tmp25);
            const tmp27 = onAccessibilityAction(expanded[18])(enableHome, drawerOpen);
            closure_6 = tmp27;
            if (null == tmp27) {
              if (cResult[27] === onAccessibilityAction) {
                class Be {
                  constructor(arg0) {
                    obj = closure_6;
                    if (null != closure_6) {
                      if (arg0.nativeEvent.actionName === obj.name) {
                        actionResult = obj.action();
                      }
                      return;
                    }
                    if (onAccessibilityAction != null) {
                      tmp2Result = tmp2(arg0);
                    }
                    return;
                  }
                }
                if (cResult[30] === tmp4) {
                  if (cResult[31] === tmp34) {
                    if (cResult[32] === hint) {
                      let obj13 = cResult[33];
                    }
                    class Be {
                      constructor(arg0) {
                        obj = closure_6;
                        if (null != closure_6) {
                          if (arg0.nativeEvent.actionName === obj.name) {
                            actionResult = obj.action();
                          }
                          return;
                        }
                        if (onAccessibilityAction != null) {
                          tmp2Result = tmp2(arg0);
                        }
                        return;
                      }
                    }
                    const joined = obj13.join(". ");
                    if (cResult[36] === expanded) {
                      class Be {
                        constructor(arg0) {
                          obj = closure_6;
                          if (null != closure_6) {
                            if (arg0.nativeEvent.actionName === obj.name) {
                              actionResult = obj.action();
                            }
                            return;
                          }
                          if (onAccessibilityAction != null) {
                            tmp2Result = tmp2(arg0);
                          }
                          return;
                        }
                      }
                      if (cResult[39] !== tmp21) {
                        class Be {
                          constructor(arg0) {
                            obj = closure_6;
                            if (null != closure_6) {
                              if (arg0.nativeEvent.actionName === obj.name) {
                                actionResult = obj.action();
                              }
                              return;
                            }
                            if (onAccessibilityAction != null) {
                              tmp2Result = tmp2(arg0);
                            }
                            return;
                          }
                        }
                        tmp51[0] = tmp21;
                        tmp51[1] = renderUnreadIndicator;
                        const tmp53 = closure_8(circle(expanded[9]).TransitionItem, tmp51);
                        cResult[39] = tmp21;
                        cResult[40] = tmp53;
                        let tmp49 = tmp53;
                      } else {
                        tmp49 = cResult[40];
                      }
                      if (cResult[41] === tmp49) {
                        class Be {
                          constructor(arg0) {
                            obj = closure_6;
                            if (null != closure_6) {
                              if (arg0.nativeEvent.actionName === obj.name) {
                                actionResult = obj.action();
                              }
                              return;
                            }
                            if (onAccessibilityAction != null) {
                              tmp2Result = tmp2(arg0);
                            }
                            return;
                          }
                        }
                        const items1 = [styles.itemShape, animatedStyle];
                        cResult[44] = animatedStyle;
                        cResult[45] = styles.itemShape;
                        cResult[46] = items1;
                      }
                      const obj4 = { pointerEvents: "none", style: unreadStyle, collapsable: false, children: tmp49 };
                      const tmp56 = closure_8(onAccessibilityAction(expanded[19]), obj4);
                      cResult[41] = tmp49;
                      cResult[42] = unreadStyle;
                      cResult[43] = tmp56;
                    }
                    const obj5 = { selected, expanded };
                    cResult[36] = expanded;
                    cResult[37] = selected;
                    cResult[38] = obj5;
                  }
                }
                const items2 = [];
                if (tmp35) {
                  items2.push(hint);
                }
                if (!tmp4) {
                  if (!tmp34) {
                    class Be {
                      constructor(arg0) {
                        obj = closure_6;
                        if (null != closure_6) {
                          if (arg0.nativeEvent.actionName === obj.name) {
                            actionResult = obj.action();
                          }
                          return;
                        }
                        if (onAccessibilityAction != null) {
                          tmp2Result = tmp2(arg0);
                        }
                        return;
                      }
                    }
                    cResult[31] = tmp34;
                    cResult[32] = hint;
                    cResult[33] = items2;
                    obj13 = items2;
                  } else {
                    class Be {
                      constructor(arg0) {
                        obj = closure_6;
                        if (null != closure_6) {
                          if (arg0.nativeEvent.actionName === obj.name) {
                            actionResult = obj.action();
                          }
                          return;
                        }
                        if (onAccessibilityAction != null) {
                          tmp2Result = tmp2(arg0);
                        }
                        return;
                      }
                    }
                    if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                      class Be {
                        constructor(arg0) {
                          obj = closure_6;
                          if (null != closure_6) {
                            if (arg0.nativeEvent.actionName === obj.name) {
                              actionResult = obj.action();
                            }
                            return;
                          }
                          if (onAccessibilityAction != null) {
                            tmp2Result = tmp2(arg0);
                          }
                          return;
                        }
                      }
                      const tmp44Result = tmp44(circle(expanded[16]).t.X2x0MF);
                      cResult[35] = tmp44Result;
                      let tmp43 = tmp44Result;
                    } else {
                      tmp43 = cResult[35];
                    }
                    items2.push(tmp43);
                  }
                } else {
                  class Be {
                    constructor(arg0) {
                      obj = closure_6;
                      if (null != closure_6) {
                        if (arg0.nativeEvent.actionName === obj.name) {
                          actionResult = obj.action();
                        }
                        return;
                      }
                      if (onAccessibilityAction != null) {
                        tmp2Result = tmp2(arg0);
                      }
                      return;
                    }
                  }
                  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                    class Be {
                      constructor(arg0) {
                        obj = closure_6;
                        if (null != closure_6) {
                          if (arg0.nativeEvent.actionName === obj.name) {
                            actionResult = obj.action();
                          }
                          return;
                        }
                        if (onAccessibilityAction != null) {
                          tmp2Result = tmp2(arg0);
                        }
                        return;
                      }
                    }
                    const tmp39Result = tmp39(circle(expanded[16]).t.BGMUFB);
                    cResult[34] = tmp39Result;
                    let tmp38 = tmp39Result;
                  } else {
                    tmp38 = cResult[34];
                  }
                  items2.push(tmp38);
                }
                tmp35 = null != hint && hint.length > 0;
              }
              class Be {
                constructor(arg0) {
                  obj = closure_6;
                  if (null != closure_6) {
                    if (arg0.nativeEvent.actionName === obj.name) {
                      actionResult = obj.action();
                    }
                    return;
                  }
                  if (onAccessibilityAction != null) {
                    tmp2Result = tmp2(arg0);
                  }
                  return;
                }
              }
              cResult[27] = onAccessibilityAction;
              cResult[28] = tmp27;
              cResult[29] = Be;
            } else {
              if (cResult[19] !== accessibilityActions) {
                class Be {
                  constructor(arg0) {
                    obj = closure_6;
                    if (null != closure_6) {
                      if (arg0.nativeEvent.actionName === obj.name) {
                        actionResult = obj.action();
                      }
                      return;
                    }
                    if (onAccessibilityAction != null) {
                      tmp2Result = tmp2(arg0);
                    }
                    return;
                  }
                }
                cResult[19] = accessibilityActions;
                cResult[20] = accessibilityActions;
              }
              class Be {
                constructor(arg0) {
                  obj = closure_6;
                  if (null != closure_6) {
                    if (arg0.nativeEvent.actionName === obj.name) {
                      actionResult = obj.action();
                    }
                    return;
                  }
                  if (onAccessibilityAction != null) {
                    tmp2Result = tmp2(arg0);
                  }
                  return;
                }
              }
              const obj7 = { name: null, label: null };
              ({ name: obj12.name, label: obj12.label } = tmp27);
              cResult[21] = tmp27.label;
              cResult[22] = tmp27.name;
              cResult[23] = obj7;
            }
          }
          const items3 = [styles.pressableWrapper, draggedElement, token1];
          cResult[9] = styles.pressableWrapper;
          cResult[10] = draggedElement;
          cResult[11] = items3;
        }
        const obj8 = { style: tmp16, unreadStyle: tmp15 };
        cResult[6] = tmp16;
        cResult[7] = tmp15;
        cResult[8] = obj8;
        tmp17 = obj8;
      }
    }
    const obj9 = { height: num3, top: num4, zIndex: num2 };
    cResult[2] = num3;
    cResult[3] = num4;
    cResult[4] = num2;
    cResult[5] = obj9;
    tmp16 = obj9;
  }
  if (null != overState) {
    class Be {
      constructor(arg0) {
        obj = closure_6;
        if (null != closure_6) {
          if (arg0.nativeEvent.actionName === obj.name) {
            actionResult = obj.action();
          }
          return;
        }
        if (onAccessibilityAction != null) {
          tmp2Result = tmp2(arg0);
        }
        return;
      }
    }
    str2 = "none";
  }
  const tmpResult6 = circle(expanded[15]);
}) : ((id) => {
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
  __initData6 = undefined;
  closure_22 = undefined;
  let tmp = num();
  closure_15 = tmp;
  const token = id(circle[8]).useToken(selected(circle[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp6 = expanded(tmp);
  let draggedElement = tmp6;
  const tmp7 = selected(circle[13])(config);
  let obj = id(circle[8]);
  const token1 = id(circle[8]).useToken(selected(circle[5]).modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
  let obj2 = id(circle[8]);
  class W {
    constructor() {
      obj = closure_0(closure_2[10]);
      if (circle) {
        tmp2 = closure_16;
        num = 2;
        result = closure_16 / 2;
      } else {
        result = closure_18;
      }
      obj1 = { borderRadius: obj.withSpring(result, closure_10, "animate-always") };
      return obj1;
    }
  }
  const obj3 = id(circle[11]);
  W.__closure = { withSpring: id(circle[10]).withSpring, circle, guildItemSelectedBorderRadius: token1, guildItemSize: token, CORNER_SPRING_PHYSICS: accessibilityActions };
  W.__workletHash = 8990556629081;
  W.__initData = __initData6;
  const animatedStyle = obj3.useAnimatedStyle(W);
  const enableHome = hint.useContext(id(circle[14]).HomeDrawerStateContext).enableHome;
  const obj4 = { withSpring: id(circle[10]).withSpring, circle, guildItemSelectedBorderRadius: token1, guildItemSize: token, CORNER_SPRING_PHYSICS: accessibilityActions };
  const drawerOpen = id(circle[15]).useDrawerOpen(enableHome);
  let items = [isDragTarget, dragState, num, overState, zIndex, tmp];
  const memo = hint.useMemo(() => {
    if (isDragTarget) {
      if ("dragging" === dragState) {
        let tmp2 = overState;
        let str2 = "hide";
      }
      if ("drag-target" === str2) {
        num = height + num;
      } else {
        num = 0;
        if ("hide" !== str2) {
          num = height;
        }
      }
      const obj = { height: num, top: null, zIndex: null };
      let num2 = 0;
      if ("drag-target" === str2) {
        if ("before" === tmp2) {
          num2 = num;
        } else {
          num2 = 0;
        }
      }
      const obj2 = { style: null, unreadStyle: null };
      obj.top = num2;
      obj.zIndex = zIndex;
      obj2.style = obj;
      const size = { position: "absolute", width: height, height };
      obj2.unreadStyle = size;
      return obj2;
    }
    if (null != overState) {
      if ("self" !== overState) {
        let str5 = "drag-target";
      }
      str2 = str5;
      tmp2 = overState;
    }
    str5 = "none";
  }, items);
  let items1 = [styles.pressableWrapper, isDragTarget, tmp6.draggedElement];
  ({ style, unreadStyle } = memo);
  let tmp13 = !unread;
  const memo1 = hint.useMemo(() => {
    const items = [styles.pressableWrapper, , ];
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
      const obj = { selected, sharedId, id };
      return obj;
    }
  }, items2);
  hint.useRef(undefined);
  const items3 = [expanded];
  const effect = obj5.useEffect(() => {
    if (undefined !== ref.current) {
      if (ref.current !== expanded) {
        let AccessibilityAnnouncer = require;
        const intl = util.intl;
        const t = util.t;
        AccessibilityAnnouncer = AccessibilityAnnouncer(4590).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(intl.string(expanded ? t.CUnsOR : t.jsudFd));
        ref.current = expanded;
        const stringResult = intl.string(expanded ? t.CUnsOR : t.jsudFd);
      }
    } else {
      ref.current = expanded;
    }
  }, items3);
  const tmp16 = selected(circle[18])(enableHome, drawerOpen);
  __initData6 = tmp16;
  const items4 = [accessibilityActions, tmp16];
  const memo3 = obj5.useMemo(() => {
    if (null == closure_21) {
      let items1 = accessibilityActions;
    } else {
      let items = accessibilityActions;
      if (accessibilityActions == null) {
        items = [];
      }
      items1 = [];
      const obj = { name: null, label: null };
      ({ name: obj.name, label: obj.label } = closure_21);
      items1[HermesBuiltin.arraySpread(items, 0)] = obj;
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
    tmp18 = memo3.length > 0;
  }
  closure_22 = tmp18;
  const items6 = [hint, flag, tmp18];
  const memo4 = obj5.useMemo(() => {
    let tmp = null != hint;
    if (tmp) {
      tmp = hint.length > 0;
    }
    const items = [];
    if (tmp) {
      items.push(hint);
    }
    if (flag) {
      const intl = util.intl;
      items.push(intl.string(util.t.BGMUFB));
    }
    if (closure_22) {
      const intl2 = util.intl;
      items.push(intl2.string(util.t.X2x0MF));
    }
    return items.join(". ");
  }, items6);
  const obj7 = {};
  const obj6 = id(circle[15]);
  const merged = Object.assign(tmp7);
  obj7.style = memo1;
  obj7.accessibilityLabel = label;
  obj7.accessible = true;
  obj7.focusable = true;
  obj7.accessibilityRole = "button";
  obj7.accessibilityState = { selected, expanded };
  obj7.hitSlop = isDragTarget;
  let tmp22;
  if (memo4.length > 0) {
    tmp22 = memo4;
  }
  obj7.accessibilityHint = tmp22;
  obj7.collapsable = false;
  obj7.accessibilityActions = memo3;
  obj7.onAccessibilityAction = callback;
  const items7 = [externalChildren, , ];
  const obj8 = { pointerEvents: "none", style: unreadStyle, collapsable: false, children: null };
  const tmp4Result = selected(circle[19]);
  obj8.children = overState(id(circle[9]).TransitionItem, { item: memo2, renderItem: flag2 });
  items7[1] = overState(selected(circle[19]), obj8);
  const obj10 = { style: null, cutouts, children: null };
  const items8 = [styles.itemShape, animatedStyle];
  obj10.style = items8;
  const items9 = [tmp6.selectedBackgroundOverlay, ];
  let itemShapeSelected = null;
  const obj9 = { item: memo2, renderItem: flag2 };
  const tmp4Result5 = selected(circle[19]);
  if (selected) {
    itemShapeSelected = styles.itemShapeSelected;
  }
  items9[1] = itemShapeSelected;
  const items10 = [overState(selected(circle[19]), { pointerEvents: "none", style: items9 }), ];
  let tmp27 = !isDragTarget;
  if (!isDragTarget) {
    tmp27 = children;
  }
  items10[1] = tmp27;
  obj10.children = items10;
  items7[2] = styles(id(circle[20]).ClipViewAnimated, obj10);
  obj7.children = items7;
  const tmp4Result6 = selected(circle[19]);
  let container = null;
  const tmp19Result = styles(tmp4Result, obj7);
  if (enableHome) {
    container = tmp6.container;
  }
  const obj11 = { style: null, layout, entering, exiting, preventClipping: flag3, collapsable: false, children: null };
  const items11 = [container, style];
  obj11.style = items11;
  const items12 = [tmp19Result, ];
  let tmp23Result = null;
  if (enableHome) {
    const obj12 = {};
    const merged1 = Object.assign(tmp7);
    obj12.style = tmp6.expandedChildrenWrapper;
    obj12.collapsable = false;
    obj12.accessibilityElementsHidden = !drawerOpen;
    let str = "no-hide-descendants";
    if (drawerOpen) {
      str = "auto";
    }
    obj12.importantForAccessibility = str;
    let tmp36 = !isDragTarget;
    if (!isDragTarget) {
      tmp36 = expandedChildren;
    }
    obj12.children = tmp36;
    tmp23Result = tmp23(tmp4(tmp3[19]), obj12);
    const tmp4Result8 = tmp4(tmp3[19]);
  }
  items12[1] = tmp23Result;
  obj11.children = items12;
  return styles(selected(circle[12]), obj11);
});
export const useGuildsBarAnimatedWrapperStyles = tmp4;
export const UnreadIndicator = tmp5;
export { renderUnreadIndicator };