// === Module 16294: UnreadIndicator ===

// Module 16294 (UnreadIndicator)
import ThemesDefault from "Themes" /* 576 */;
import map from "map" /* 4262 */;
import closure_3 from "noop" /* 19 */;
import { IOS_POINTER_STYLE } from "IOS_POINTER_STYLE" /* 4984 */;
import GUILD_ITEM_SIZE from "GUILD_ITEM_SIZE" /* 16285 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
class UnreadIndicator {
  constructor(arg0) {
    sharedId = global.sharedId;
    id = global.id;
    MOUNTED = global.transitionState;
    if (MOUNTED === undefined) {
      tmp = sharedId;
      tmp2 = MOUNTED;
      MOUNTED = require("ManaContext").TransitionStates.MOUNTED;
    }
    cleanUp = global.cleanUp;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    c7 = undefined;
    tmp3 = sharedId;
    tmp4 = MOUNTED;
    obj = require("map");
    tmp5 = id;
    token = obj.useToken(require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE);
    closure_4 = token;
    tmp7 = closure_12(c7());
    closure_5 = tmp7;
    tmp8 = MOUNTED === require("ManaContext").TransitionStates.MOUNTED;
    closure_6 = tmp8;
    num = 8;
    if (global.selected) {
      num = 8;
      if (MOUNTED !== require("ManaContext").TransitionStates.YEETED) {
        num = 40;
      }
    }
    c7 = num;
    items = [, , ];
    items[0] = num;
    items[1] = MOUNTED;
    items[2] = tmp7.unreadIndicator;
    fn = function h(targetOriginY) {
      if (closure_6) {
        let obj = { animations: null, initialValues: null };
        obj[0] = {};
        obj[1] = {};
      } else {
        obj = sharedId;
        obj = { animations: null, initialValues: null };
        obj1 = { originY: null, originX: null, height: null };
        obj1[0] = sharedId(MOUNTED[8]).withSpring(targetOriginY.targetOriginY, closure_1_11, "animate-always");
        const obj4 = sharedId(MOUNTED[8]);
        obj1[1] = sharedId(MOUNTED[8]).withSpring(targetOriginY.targetOriginX, closure_1_11, "animate-always");
        const obj5 = sharedId(MOUNTED[8]);
        obj1[2] = sharedId(MOUNTED[8]).withSpring(targetOriginY.targetHeight, closure_1_11, "animate-always");
        obj[0] = obj1;
        const obj2 = { height: 8, originY: null, originX: -12 };
        obj2[1] = token / 2;
        obj[1] = obj2;
        const obj6 = sharedId(MOUNTED[8]);
      }
      return obj;
    };
    obj = { disableEntering: tmp8, sharedId, id, withSpring: null, BAR_SPRING_PHYSICS: null, guildItemSize: null };
    memo = cleanUp.useMemo(() => {
      const items = [unreadIndicator.unreadIndicator, ];
      const obj = { height: num, marginTop: num / 2 * -1, marginLeft: null };
      num = 0;
      if (MOUNTED === sharedId(MOUNTED[7]).TransitionStates.YEETED) {
        num = -4;
      }
      obj[2] = num;
      items[1] = obj;
      return items;
    }, items);
    obj[3] = require("CONFIG_NEVER_ANIMATE").withSpring;
    obj[4] = closure_11;
    obj[5] = token;
    fn.__closure = obj;
    fn.__workletHash = 404454683979;
    fn.__initData = closure_14;
    items1 = [, , , ];
    items1[0] = tmp8;
    items1[1] = sharedId;
    items1[2] = id;
    items1[3] = token;
    fn2 = function p(height) {
      let obj = { animations: null, initialValues: null, callback: null };
      obj = { originY: sharedId(MOUNTED[8]).withSpring(height.targetOriginY, closure_1_11, "animate-always"), originX: null, height: null };
      const obj3 = sharedId(MOUNTED[8]);
      obj[1] = sharedId(MOUNTED[8]).withSpring(height.targetOriginX, closure_1_11, "animate-always");
      const obj4 = sharedId(MOUNTED[8]);
      obj[2] = sharedId(MOUNTED[8]).withSpring(height.targetHeight, closure_1_11, "animate-always");
      obj[0] = obj;
      obj[1] = { height: height.currentHeight, originY: height.currentOriginY, originX: height.currentOriginX };
      obj[2] = function callback(arg0) {
        let tmp3 = closure_2 === closure_1_0(closure_1_2[7]).TransitionStates.YEETED && arg0;
        if (tmp3) {
          tmp3 = null != closure_3;
        }
        if (tmp3) {
          closure_1_0(closure_1_2[9]).runOnJS(closure_3)();
          const tmpResult = closure_1_0(closure_1_2[9]);
        }
      };
      return obj;
    };
    obj1 = { withSpring: null, BAR_SPRING_PHYSICS: null, transitionState: null, TransitionStates: null, cleanUp: null, runOnJS: null };
    callback = cleanUp.useCallback(fn, items1);
    obj1[0] = require("CONFIG_NEVER_ANIMATE").withSpring;
    obj1[1] = closure_11;
    obj1[2] = MOUNTED;
    obj1[3] = require("ManaContext").TransitionStates;
    obj1[4] = cleanUp;
    obj1[5] = require("module_4296").runOnJS;
    fn2.__closure = obj1;
    fn2.__workletHash = 10632665703864;
    fn2.__initData = closure_15;
    items2 = [, ];
    items2[0] = MOUNTED;
    items2[1] = cleanUp;
    callback1 = cleanUp.useCallback(fn2, items2);
    return jsx(require("set"), { collapsable: false, entering: callback, layout: callback1, style: memo, pointerEvents: "none" });
  }
}
function renderUnreadIndicator(arg0, sharedId, transitionState, cleanUp) {
  return callback2(UnreadIndicator, { sharedId: sharedId.sharedId, id: sharedId.id, selected: sharedId.selected, transitionState, cleanUp }, arg0);
}
({ GUILD_ITEM_HIT_SLOP: c5, GUILD_ITEM_INSET_LEFT: closure_6, useGuildWrapperSize: error } = GUILD_ITEM_SIZE);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = { mass: 0.8, damping: 100, stiffness: 150 };
let closure_11 = { mass: 0.25, damping: 100, stiffness: 200 };
let closure_12 = createCacheKey.createStyles(() => {
  let num = arg0;
  if (arg0 === undefined) {
    num = 56;
  }
  let obj = { draggedElement: { opacity: 0 }, selectedBackgroundOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, container: { position: "relative", overflow: "visible" }, unreadIndicator: null, expandedChildrenWrapper: null };
  obj = { position: "absolute", top: num / 2, left: -4, height: 8, width: 8, borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.TEXT_STRONG };
  obj[3] = obj;
  obj = { position: "absolute", left: num + 16, top: 0, right: 8, height: num, display: "flex", flexDirection: "row", alignItems: "center" };
  obj[4] = obj;
  return obj;
});
let closure_13 = createCacheKey.createStyles((arg0, arg1, width, height) => {
  let obj = { pressableWrapper: null, itemShape: null, itemShapeSelected: null };
  obj = { position: "relative", paddingTop: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, paddingBottom: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, paddingLeft: closure_6, height, width: width + closure_5.left + closure_5.right };
  obj[0] = obj;
  obj = { position: "relative", width, height: width, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: null };
  let str = "transparent";
  let str2 = "transparent";
  if (!arg1) {
    str2 = tmp(576).colors.MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT;
  }
  obj[6] = str2;
  obj[1] = obj;
  if (arg0) {
    if (!arg1) {
      str = tmp(576).colors.BACKGROUND_SURFACE_HIGH;
    }
    let BACKGROUND_BRAND = str;
  } else {
    BACKGROUND_BRAND = tmp(576).colors.BACKGROUND_BRAND;
  }
  obj[2] = { backgroundColor: BACKGROUND_BRAND };
  return obj;
});
let closure_14 = { code: "function GuildsBarAnimatedItemWrapperTsx1(values){const{disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,guildItemSize}=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:8,originY:guildItemSize/2,originX:-12}};}" };
let closure_15 = { code: "function GuildsBarAnimatedItemWrapperTsx2(values){const{withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,runOnJS}=this.__closure;return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight,originY:values.currentOriginY,originX:values.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){runOnJS(cleanUp)();}}};}" };
let closure_18 = { code: "function GuildsBarAnimatedItemWrapperTsx3(){const{withSpring,circle,guildItemSelectedBorderRadius,guildItemSize,CORNER_SPRING_PHYSICS}=this.__closure;return{borderRadius:withSpring(!circle?guildItemSelectedBorderRadius:guildItemSize/2,CORNER_SPRING_PHYSICS,'animate-always')};}" };
let result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx");

export default function GuildsBarAnimatedItemWrapper(id) {
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
  ({ accessibilityActions, expanded } = id);
  ({ zIndex, onAccessibilityAction, entering, exiting, layout } = id);
  if (zIndex === undefined) {
    zIndex = 0;
  }
  const sharedId = id.sharedId;
  closure_13 = undefined;
  let token;
  closure_15 = undefined;
  let token1;
  flag2 = undefined;
  closure_18 = undefined;
  closure_19 = undefined;
  let tmp = num();
  closure_13 = tmp;
  let obj = id(circle[6]);
  token = obj.useToken(selected(circle[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp6 = sharedId(tmp);
  closure_15 = tmp6;
  const tmp7 = selected(circle[11])(config);
  obj1 = id(circle[6]);
  token1 = obj1.useToken(selected(circle[5]).modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
  let obj2 = id(circle[9]);
  class X {
    constructor() {
      obj = id(circle[8]);
      if (circle) {
        tmp2 = closure_14;
        num = 2;
        result = closure_14 / 2;
      } else {
        result = closure_16;
      }
      obj = { borderRadius: obj.withSpring(result, expanded, "animate-always") };
      return obj;
    }
  }
  obj = { withSpring: id(circle[8]).withSpring, circle, guildItemSelectedBorderRadius: token1, guildItemSize: token, CORNER_SPRING_PHYSICS: expanded };
  X.__closure = obj;
  X.__workletHash = 15930523896348;
  X.__initData = closure_18;
  let obj4 = hint;
  const animatedStyle = obj2.useAnimatedStyle(X);
  const enableHome = hint.useContext(id(circle[12]).HomeDrawerStateContext).enableHome;
  let items = [isDragTarget, dragState, num, overState, zIndex, tmp];
  const memo = hint.useMemo(() => {
    if (isDragTarget) {
      if ("dragging" === dragState) {
        let tmp2 = overState;
        let str2 = "hide";
      }
      if ("drag-target" === str2) {
        num = closure_13 + num;
      } else {
        num = 0;
        if ("hide" !== str2) {
          num = closure_13;
        }
      }
      let obj = { height: null, top: null, zIndex: null };
      obj[0] = num;
      let num2 = 0;
      if ("drag-target" === str2) {
        if ("before" === tmp2) {
          num2 = num;
        } else {
          num2 = 0;
        }
      }
      obj = { style: null, unreadStyle: null };
      obj[1] = num2;
      obj[2] = zIndex;
      obj[0] = obj;
      obj = { position: "absolute", width: null, height: null };
      obj[1] = closure_13;
      obj[2] = closure_13;
      obj[1] = obj;
      return obj;
    }
    if (null != overState) {
      if ("self" !== tmp3) {
        let str5 = "drag-target";
      }
      str2 = str5;
      tmp2 = tmp3;
    }
    str5 = "none";
  }, items);
  const items1 = [styles.pressableWrapper, isDragTarget, tmp6.draggedElement];
  ({ style, unreadStyle } = memo);
  let tmp12 = !unread;
  const memo1 = hint.useMemo(() => {
    const items = [styles.pressableWrapper, , ];
    let draggedElement;
    if (isDragTarget) {
      draggedElement = draggedElement.draggedElement;
    }
    items[1] = draggedElement;
    items[2] = flag;
    return items;
  }, items1);
  if (!unread) {
    tmp12 = !selected;
  }
  if (!tmp12) {
    tmp12 = isDragTarget;
  }
  if (!tmp12) {
    tmp12 = flag2;
  }
  flag2 = tmp12;
  const items2 = [tmp12, selected, sharedId, id];
  const memo2 = obj4.useMemo(() => {
    if (!flag2) {
      const obj = { selected: null, sharedId: null, id: null };
      obj[0] = selected;
      obj[1] = sharedId;
      obj[2] = id;
      return obj;
    }
  }, items2);
  closure_18 = obj4.useRef(undefined);
  const items3 = [expanded];
  const effect = obj4.useEffect(() => {
    if (undefined !== ref.current) {
      if (tmp.current !== expanded) {
        let AccessibilityAnnouncer = id;
        let announceResult = circle;
        const intl = id(circle[13]).intl;
        const t = id(circle[13]).t;
        AccessibilityAnnouncer = AccessibilityAnnouncer(announceResult[14]).AccessibilityAnnouncer;
        announceResult = AccessibilityAnnouncer.announce(intl.string(tmp3 ? t.CUnsOR : t.jsudFd));
        tmp.current = tmp3;
        const stringResult = intl.string(tmp3 ? t.CUnsOR : t.jsudFd);
      }
    } else {
      tmp.current = expanded;
    }
  }, items3);
  let tmp15 = null != accessibilityActions;
  if (tmp15) {
    tmp15 = accessibilityActions.length > 0;
  }
  closure_19 = tmp15;
  const items4 = [hint, flag, tmp15];
  const memo3 = obj4.useMemo(() => {
    let arr = hint;
    let tmp = null != hint;
    if (tmp) {
      tmp = arr.length > 0;
    }
    const items = [];
    if (tmp) {
      arr = items.push(arr);
    }
    if (flag) {
      const intl = id(circle[13]).intl;
      arr = items.push(intl.string(id(circle[13]).t.BGMUFB));
    }
    if (closure_19) {
      const intl2 = id(circle[13]).intl;
      items.push(intl2.string(id(circle[13]).t.X2x0MF));
    }
    return items.join(". ");
  }, items4);
  obj = {};
  let tmp4Result = tmp4(tmp3[15]);
  const merged = Object.assign(tmp7);
  obj.style = memo1;
  obj.accessibilityLabel = label;
  obj.accessible = true;
  obj.focusable = true;
  obj.accessibilityRole = "button";
  obj.accessibilityState = { selected, expanded };
  obj.hitSlop = isDragTarget;
  let tmp19;
  if (memo3.length > 0) {
    tmp19 = memo3;
  }
  obj.accessibilityHint = tmp19;
  obj.collapsable = false;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  const items5 = [externalChildren, , ];
  obj1 = { pointerEvents: "none", style: unreadStyle, collapsable: false, children: null };
  tmp4Result = tmp4(tmp3[15]);
  obj2 = { item: memo2, renderItem: flag2 };
  obj1[3] = overState(id(circle[7]).TransitionItem, obj2);
  items5[1] = overState(tmp4Result, obj1);
  const obj3 = { style: items6, cutouts, children: null };
  items6 = [styles.itemShape, animatedStyle];
  const items7 = [tmp6.selectedBackgroundOverlay, ];
  let itemShapeSelected = null;
  if (selected) {
    itemShapeSelected = styles.itemShapeSelected;
  }
  items7[1] = itemShapeSelected;
  const items8 = [overState(selected(circle[15]), { pointerEvents: "none", style: items7 }), ];
  let tmp24 = !isDragTarget;
  if (!isDragTarget) {
    tmp24 = children;
  }
  items8[1] = tmp24;
  obj3[2] = items8;
  items5[2] = styles(id(circle[16]).ClipViewAnimated, obj3);
  obj.children = items5;
  const tmp4Result1 = selected(circle[15]);
  let container = null;
  const tmp16Result = styles(tmp4Result, obj);
  if (enableHome) {
    container = tmp6.container;
  }
  obj4 = { style: items9, layout, entering, exiting, collapsable: false, children: null };
  items9 = [container, style];
  const items10 = [tmp16Result, ];
  let tmp20Result = null;
  if (enableHome) {
    const obj5 = {};
    const merged1 = Object.assign(tmp7);
    obj5.style = tmp6.expandedChildrenWrapper;
    obj5.collapsable = false;
    let tmp33 = !isDragTarget;
    if (!isDragTarget) {
      tmp33 = expandedChildren;
    }
    obj5.children = tmp33;
    tmp20Result = tmp20(tmp4(tmp3[15]), obj5);
    const tmp4Result3 = tmp4(tmp3[15]);
  }
  items10[1] = tmp20Result;
  obj4[5] = items10;
  return styles(selected(circle[10]), obj4);
};
export const useGuildsBarAnimatedWrapperStyles = function useGuildsBarAnimatedWrapperStyles(arg0) {
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
  const token = map.useToken(ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  return callback4(flag, flag2, token, callback());
};
export { UnreadIndicator };
export { renderUnreadIndicator };