// discord_app/modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx
import noop from "noop";
import { IOS_POINTER_STYLE } from "IOS_POINTER_STYLE";
import GUILD_ITEM_SIZE from "GUILD_ITEM_SIZE";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../design/tokens/native/useToken.tsx";

let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
class UnreadIndicator {
  constructor(arg0) {
    sharedId = global.sharedId;
    id = global.id;
    MOUNTED = global.transitionState;
    if (MOUNTED === undefined) {
      tmp = sharedId;
      tmp2 = MOUNTED;
      MOUNTED = require("wrapChildrenDefault").TransitionStates.MOUNTED;
    }
    cleanUp = global.cleanUp;
    c4 = undefined;
    GUILD_BAR_ITEM_SIZE = undefined;
    c6 = undefined;
    c7 = undefined;
    tmp3 = sharedId;
    tmp4 = MOUNTED;
    obj = require("map");
    tmp5 = id;
    token = obj.useToken(require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE);
    c4 = token;
    tmp7 = f61866(c7());
    GUILD_BAR_ITEM_SIZE = tmp7;
    tmp8 = MOUNTED === require("wrapChildrenDefault").TransitionStates.MOUNTED;
    c6 = tmp8;
    num = 8;
    if (global.selected) {
      num = 8;
      if (MOUNTED !== require("wrapChildrenDefault").TransitionStates.YEETED) {
        num = 40;
      }
    }
    c7 = num;
    items = [, , ];
    items[0] = num;
    items[1] = MOUNTED;
    items[2] = tmp7.unreadIndicator;
    fn = function h(targetOriginY) {
      if (c6) {
        let obj = { animations: null, initialValues: null };
        obj[0] = {};
        obj[1] = {};
      } else {
        obj = sharedId;
        obj = { animations: null, initialValues: null };
        const obj1 = { originY: null, originX: null, height: null };
        obj1[0] = sharedId(MOUNTED[8]).withSpring(targetOriginY.targetOriginY, outer1_11, "animate-always");
        const obj4 = sharedId(MOUNTED[8]);
        obj1[1] = sharedId(MOUNTED[8]).withSpring(targetOriginY.targetOriginX, outer1_11, "animate-always");
        const obj5 = sharedId(MOUNTED[8]);
        obj1[2] = sharedId(MOUNTED[8]).withSpring(targetOriginY.targetHeight, outer1_11, "animate-always");
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
      const items = [_undefined.unreadIndicator, ];
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
    obj[4] = jsxs;
    obj[5] = token;
    fn.__closure = obj;
    fn.__workletHash = 404454683979;
    fn.__initData = f61867;
    items1 = [, , , ];
    items1[0] = tmp8;
    items1[1] = sharedId;
    items1[2] = id;
    items1[3] = token;
    fn2 = function p(height) {
      let obj = { animations: null, initialValues: null, callback: null };
      obj = { originY: null, originX: null, height: null };
      obj[0] = sharedId(MOUNTED[8]).withSpring(height.targetOriginY, outer1_11, "animate-always");
      const obj3 = sharedId(MOUNTED[8]);
      obj[1] = sharedId(MOUNTED[8]).withSpring(height.targetOriginX, outer1_11, "animate-always");
      const obj4 = sharedId(MOUNTED[8]);
      obj[2] = sharedId(MOUNTED[8]).withSpring(height.targetHeight, outer1_11, "animate-always");
      obj[0] = obj;
      obj[1] = { height: height.currentHeight, originY: height.currentOriginY, originX: height.currentOriginX };
      obj[2] = function callback(arg0) {
        let tmp3 = closure_2 === outer1_0(outer1_2[7]).TransitionStates.YEETED && arg0;
        if (tmp3) {
          tmp3 = null != noop;
        }
        if (tmp3) {
          outer1_0(outer1_2[9]).runOnJS(noop)();
          const tmpResult = outer1_0(outer1_2[9]);
        }
      };
      return obj;
    };
    obj1 = { withSpring: null, BAR_SPRING_PHYSICS: null, transitionState: null, TransitionStates: null, cleanUp: null, runOnJS: null };
    callback = cleanUp.useCallback(fn, items1);
    obj1[0] = require("CONFIG_NEVER_ANIMATE").withSpring;
    obj1[1] = jsxs;
    obj1[2] = MOUNTED;
    obj1[3] = require("wrapChildrenDefault").TransitionStates;
    obj1[4] = cleanUp;
    obj1[5] = require("module_4083").runOnJS;
    fn2.__closure = obj1;
    fn2.__workletHash = 10632665703864;
    fn2.__initData = f61867;
    items2 = [, ];
    items2[0] = MOUNTED;
    items2[1] = cleanUp;
    callback1 = cleanUp.useCallback(fn2, items2);
    return jsx(require("module_8050"), { collapsable: false, entering: callback, layout: callback1, style: memo, pointerEvents: "none" });
  }
}
function renderUnreadIndicator(arg0, sharedId, transitionState, cleanUp) {
  return callback2(UnreadIndicator, { sharedId: sharedId.sharedId, id: sharedId.id, selected: sharedId.selected, transitionState, cleanUp }, arg0);
}
({ GUILD_ITEM_HIT_SLOP: c5, GUILD_ITEM_INSET_LEFT: closure_6, useGuildWrapperSize: error } = GUILD_ITEM_SIZE);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = { mass: 0.8, damping: 100, stiffness: 150 };
let closure_11 = { mass: 0.25, damping: 100, stiffness: 200 };
let closure_12 = createCacheKey.createStyles(() => {
  let num = arg0;
  if (arg0 === undefined) {
    num = 56;
  }
  let obj = { draggedElement: { opacity: 0 }, selectedBackgroundOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, container: { position: "relative", overflow: "visible" }, unreadIndicator: null, expandedChildrenWrapper: null };
  obj = { position: "absolute", top: num / 2, left: -4, height: 8, width: 8, borderRadius: Themes.radii.xs, backgroundColor: Themes.colors.TEXT_STRONG };
  obj[3] = obj;
  obj = { position: "absolute", left: num + 16, top: 0, right: 8, height: num, transformOrigin: "0% 50%", display: "flex", flexDirection: "row", alignItems: "center" };
  obj[4] = obj;
  return obj;
});
let closure_13 = createCacheKey.createStyles((arg0, arg1, width, height) => {
  let obj = { pressableWrapper: null, itemShape: null, itemShapeSelected: null };
  obj = { position: "relative", paddingTop: Themes.modules.mobile.GUILD_BAR_ITEM_MARGIN, paddingBottom: Themes.modules.mobile.GUILD_BAR_ITEM_MARGIN, paddingLeft: closure_6, height, width: width + closure_5.left + closure_5.right };
  obj[0] = obj;
  obj = { position: "relative", width, height: width, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: null };
  let str = "transparent";
  let str2 = "transparent";
  if (!arg1) {
    str2 = tmp(712).colors.MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT;
  }
  obj[6] = str2;
  obj[1] = obj;
  if (arg0) {
    if (!arg1) {
      str = tmp(712).colors.BACKGROUND_SURFACE_HIGH;
    }
    let BACKGROUND_BRAND = str;
  } else {
    BACKGROUND_BRAND = tmp(712).colors.BACKGROUND_BRAND;
  }
  obj[2] = { backgroundColor: BACKGROUND_BRAND };
  return obj;
});
let closure_14 = { code: "function GuildsBarAnimatedItemWrapperTsx1(values){const{disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,guildItemSize}=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:8,originY:guildItemSize/2,originX:-12}};}" };
let closure_15 = { code: "function GuildsBarAnimatedItemWrapperTsx2(values){const{withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,runOnJS}=this.__closure;return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight,originY:values.currentOriginY,originX:values.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){runOnJS(cleanUp)();}}};}" };
let closure_18 = { code: "function GuildsBarAnimatedItemWrapperTsx3(){const{withSpring,circle,guildItemSelectedBorderRadius,guildItemSize,CORNER_SPRING_PHYSICS}=this.__closure;return{borderRadius:withSpring(!circle?guildItemSelectedBorderRadius:guildItemSize/2,CORNER_SPRING_PHYSICS,'animate-always')};}" };
let result = require("GUILD_ITEM_SIZE").fileFinishedImporting("modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx");

export default function GuildsBarAnimatedItemWrapper(id) {
  let accessibilityActions;
  let children;
  let circle;
  let config;
  let cutouts;
  let enableHome;
  let entering;
  let exiting;
  let expandedChildren;
  let externalChildren;
  let guildsBarIconDrawerStyle;
  let guildsBarLabelDrawerStyle;
  let guildsBarUnreadDrawerStyle;
  let homeDrawerState;
  let isDragTarget;
  let label;
  let layout;
  let onAccessibilityAction;
  let preventClipping;
  let unread;
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
  ({ accessibilityActions, preventClipping, onAccessibilityAction } = id);
  if (preventClipping === undefined) {
    preventClipping = false;
  }
  const expanded = id.expanded;
  ({ zIndex, entering, exiting, layout } = id);
  if (zIndex === undefined) {
    zIndex = 0;
  }
  const sharedId = id.sharedId;
  let c13;
  let token;
  let c15;
  let token1;
  let c17;
  let closure_18;
  let c19;
  let tmp = num();
  c13 = tmp;
  let obj = id(circle[6]);
  token = obj.useToken(selected(circle[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp6 = sharedId(tmp);
  c15 = tmp6;
  const tmp7 = selected(circle[11])(config);
  let obj1 = id(circle[6]);
  token1 = obj1.useToken(selected(circle[5]).modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
  let obj2 = id(circle[9]);
  class W {
    constructor() {
      obj = id(circle[8]);
      if (circle) {
        tmp2 = c14;
        num = 2;
        result = c14 / 2;
      } else {
        result = c16;
      }
      obj = { borderRadius: obj.withSpring(result, expanded, "animate-always") };
      return obj;
    }
  }
  obj = { withSpring: id(circle[8]).withSpring, circle, guildItemSelectedBorderRadius: token1, guildItemSize: token, CORNER_SPRING_PHYSICS: expanded };
  W.__closure = obj;
  W.__workletHash = 15930523896348;
  W.__initData = closure_18;
  let obj4 = hint;
  const animatedStyle = obj2.useAnimatedStyle(W);
  const context = hint.useContext(id(circle[12]).HomeDrawerStateContext);
  ({ homeDrawerState, enableHome } = context);
  let items = [isDragTarget, dragState, num, overState, zIndex, tmp];
  ({ guildsBarLabelDrawerStyle, guildsBarIconDrawerStyle, guildsBarUnreadDrawerStyle } = homeDrawerState);
  const memo = hint.useMemo(() => {
    if (isDragTarget) {
      if ("dragging" === dragState) {
        let tmp2 = overState;
        let str2 = "hide";
      }
      if ("drag-target" === str2) {
        num = c13 + num;
      } else {
        num = 0;
        if ("hide" !== str2) {
          num = c13;
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
      obj[1] = c13;
      obj[2] = c13;
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
  const unreadStyle = memo.unreadStyle;
  const items1 = [styles.pressableWrapper, isDragTarget, tmp6.draggedElement];
  let tmp13 = !unread;
  const memo1 = hint.useMemo(() => {
    const items = [styles.pressableWrapper, , ];
    let draggedElement;
    if (isDragTarget) {
      draggedElement = _undefined.draggedElement;
    }
    items[1] = draggedElement;
    items[2] = flag;
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
  c17 = tmp13;
  const items2 = [tmp13, selected, sharedId, id];
  const memo2 = obj4.useMemo(() => {
    if (!c17) {
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
  let tmp16 = null != accessibilityActions;
  if (tmp16) {
    tmp16 = accessibilityActions.length > 0;
  }
  c19 = tmp16;
  const items4 = [hint, flag, tmp16];
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
    if (c19) {
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
  let tmp20;
  if (memo3.length > 0) {
    tmp20 = memo3;
  }
  obj.accessibilityHint = tmp20;
  obj.collapsable = false;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  const items5 = [externalChildren, , ];
  if (enableHome) {
    obj1 = { pointerEvents: "none", style: null, children: null };
    const items6 = [unreadStyle, guildsBarUnreadDrawerStyle];
    obj1[1] = items6;
    tmp4Result = tmp4(tmp3[10]);
    obj2 = { item: null, renderItem: null };
    obj2[0] = memo2;
    obj2[1] = c17;
    obj1[2] = tmp21(tmp2(tmp3[7]).TransitionItem, obj2);
    let tmp21Result = tmp21(tmp4Result, obj1);
    let tmp25 = tmp21;
  } else {
    const obj3 = { pointerEvents: "none", style: null, collapsable: false, children: null };
    obj3[1] = unreadStyle;
    obj4 = { item: null, renderItem: null };
    obj4[0] = memo2;
    obj4[1] = c17;
    obj3[3] = tmp21(tmp2(tmp3[7]).TransitionItem, obj4);
    tmp21Result = tmp21(tmp4(tmp3[15]), obj3);
    tmp25 = tmp21;
    const tmp4Result1 = tmp4(tmp3[15]);
  }
  items5[1] = tmp21Result;
  const obj5 = { style: items7, cutouts, children: null };
  items7 = [styles.itemShape, animatedStyle];
  const items8 = [tmp6.selectedBackgroundOverlay, ];
  let itemShapeSelected = null;
  if (selected) {
    itemShapeSelected = styles.itemShapeSelected;
  }
  items8[1] = itemShapeSelected;
  const items9 = [tmp25(selected(circle[15]), { pointerEvents: "none", style: items8 }), ];
  let tmp30 = !isDragTarget;
  if (!isDragTarget) {
    tmp30 = children;
  }
  items9[1] = tmp30;
  obj5[2] = items9;
  items5[2] = styles(id(circle[16]).ClipViewAnimated, obj5);
  obj.children = items5;
  const tmp17Result = styles(tmp4Result, obj);
  let container = null;
  const tmp4Result2 = selected(circle[15]);
  if (enableHome) {
    container = tmp6.container;
  }
  const obj6 = { style: items10, layout, entering, exiting, preventClipping, collapsable: false, children: null };
  items10 = [container, memo.style];
  let tmp25Result = tmp17Result;
  if (enableHome) {
    const obj7 = { style: null, children: null };
    obj7[0] = guildsBarIconDrawerStyle;
    obj7[1] = tmp17Result;
    tmp25Result = tmp25(tmp4(tmp3[10]), obj7);
  }
  const items11 = [tmp25Result, ];
  tmp25Result = null;
  if (enableHome) {
    const obj8 = {};
    const merged1 = Object.assign(tmp7);
    const items12 = [tmp6.expandedChildrenWrapper, guildsBarLabelDrawerStyle];
    obj8.style = items12;
    let tmp40 = !isDragTarget;
    if (!isDragTarget) {
      tmp40 = expandedChildren;
    }
    obj8.children = tmp40;
    tmp25Result = tmp25(tmp4(tmp3[10]), obj8);
    const tmp4Result4 = tmp4(tmp3[10]);
  }
  items11[1] = tmp25Result;
  obj6[6] = items11;
  return styles(selected(circle[10]), obj6);
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
  const token = map.useToken(Themes.modules.mobile.GUILD_BAR_ITEM_SIZE);
  return callback4(flag, flag2, token, callback());
};
export { UnreadIndicator };
export { renderUnreadIndicator };