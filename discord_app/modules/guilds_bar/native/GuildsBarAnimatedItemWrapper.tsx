// discord_app/modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef1652 from "../../../../_runtime/metro/01652__.js";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import NativeViewDefault from "../../core/native/NativeView.tsx";
import usePressabilityDefault from "../../core/native/usePressability.tsx";
import useHomeDrawerToggleAccessibilityActionDefault from "../../home_drawer/native/useHomeDrawerToggleAccessibilityAction.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
class UnreadIndicator {
  constructor(arg0) {
    ({ sharedId, id, transitionState } = global);
    if (transitionState === undefined) {
      tmp = closure_0;
      tmp2 = closure_2;
      transitionState = closure_0(closure_2[7]).TransitionStates.MOUNTED;
    }
    closure_0 = transitionState;
    cleanUp = global.cleanUp;
    closure_1 = undefined;
    closure_2 = undefined;
    tmp3 = closure_0;
    tmp4 = closure_2;
    obj = closure_0(closure_2[6]);
    tmp5 = closure_1;
    token = obj.useToken(closure_1(closure_2[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
    tmp7 = closure_12(useGuildWrapperSize());
    closure_1 = tmp7;
    num = 8;
    if (global.selected) {
      num = 8;
      if (transitionState !== tmp3(tmp4[7]).TransitionStates.YEETED) {
        num = 40;
      }
    }
    tmp8 = transitionState === closure_0(closure_2[7]).TransitionStates.MOUNTED;
    closure_2 = num;
    obj2 = closure_3;
    items = [, ,];
    items[0] = num;
    items[1] = transitionState;
    items[2] = tmp7.unreadIndicator;
    items1 = [, , , , , ,];
    items1[0] = closure_14;
    items1[1] = tmp8;
    items1[2] = sharedId;
    items1[3] = id;
    memo = closure_3.useMemo(() => {
      items = [_undefined2.unreadIndicator];
      const obj = { height, marginTop: (height / 2) * -1, marginLeft: null };
      let num = 0;
      if (c0 === native.TransitionStates.YEETED) {
        num = -4;
      }
      obj.marginLeft = num;
      items[1] = obj;
      return items;
    }, items);
    items1[4] = tmp3(tmp4[8]).withSpring;
    items1[5] = closure_11;
    items1[6] = token;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items1;
    class GuildsBarAnimatedItemWrapperTsx1 {
      constructor(arg0) {
        if (closure_0) {
          obj1 = { animations: null, initialValues: null };
          obj1.animations = {};
          obj1.initialValues = {};
          obj6 = obj1;
        } else {
          obj = closure_1;
          tmp = null;
          if (null != closure_1) {
            tmp2 = closure_2;
          }
          tmp3 = global;
          obj6 = { animations: null, initialValues: null };
          obj7 = { originY: null, originX: null, height: null };
          tmp4 = closure_3;
          tmp5 = closure_4;
          str = "animate-always";
          obj7.originY = closure_3(global.targetOriginY, closure_4, "animate-always");
          obj7.originX = closure_3(global.targetOriginX, closure_4, "animate-always");
          obj7.height = closure_3(global.targetHeight, closure_4, "animate-always");
          obj6.animations = obj7;
          obj8 = { height: 8, originY: null, originX: -12 };
          tmp6 = closure_5;
          num = 2;
          obj8.originY = closure_5 / 2;
          obj6.initialValues = obj8;
        }
        return obj6;
      }
    }
    items2 = [, , , , ,];
    items2[0] = tmp12;
    items2[1] = tmp13;
    items2[2] = tmp14;
    items2[3] = tmp15;
    items2[4] = tmp16;
    items2[5] = tmp17;
    GuildsBarAnimatedItemWrapperTsx1.__closure = items2;
    GuildsBarAnimatedItemWrapperTsx1.__workletHash = 14383411265202;
    GuildsBarAnimatedItemWrapperTsx1.__initData = tmp11;
    items3 = [, , ,];
    items3[0] = tmp8;
    items3[1] = sharedId;
    items3[2] = id;
    items3[3] = token;
    tmp10 = closure_11;
    items4 = [, , , , , ,];
    items4[0] = closure_15;
    callback = closure_3.useCallback(GuildsBarAnimatedItemWrapperTsx1, items3);
    items4[1] = tmp3(tmp4[8]).withSpring;
    items4[2] = tmp10;
    items4[3] = transitionState;
    items4[4] = tmp3(tmp4[7]).TransitionStates;
    items4[5] = cleanUp;
    items4[6] = tmp3(tmp4[9]).scheduleOnRN;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items4;
    class GuildsBarAnimatedItemWrapperTsx2 {
      constructor(arg0) {
        obj = { animations: null, initialValues: null, callback: null };
        obj1 = {
          originY: closure_0(global.targetOriginY, closure_1, "animate-always"),
          originX: closure_0(global.targetOriginX, closure_1, "animate-always"),
          height: closure_0(global.targetHeight, closure_1, "animate-always"),
        };
        obj.animations = obj1;
        obj.initialValues = {
          height: global.currentHeight,
          originY: global.currentOriginY,
          originX: global.currentOriginX,
        };
        obj.callback = function callback(arg0) {
          let tmp = height === constants.YEETED && arg0;
          if (tmp) {
            tmp = null != closure_1_4;
          }
          if (tmp) {
            closure_1_5(closure_1_4);
          }
        };
        return obj;
      }
    }
    items5 = [, , , , ,];
    items5[0] = tmp20;
    items5[1] = tmp21;
    items5[2] = tmp22;
    items5[3] = tmp23;
    items5[4] = tmp24;
    items5[5] = tmp25;
    GuildsBarAnimatedItemWrapperTsx2.__closure = items5;
    GuildsBarAnimatedItemWrapperTsx2.__workletHash = 14169006071008;
    GuildsBarAnimatedItemWrapperTsx2.__initData = tmp19;
    items6 = [,];
    items6[0] = transitionState;
    items6[1] = cleanUp;
    callback1 = obj2.useCallback(GuildsBarAnimatedItemWrapperTsx2, items6);
    return jsx(tmp5(tmp4[10]).View, {
      collapsable: false,
      entering: callback,
      layout: callback1,
      style: memo,
      pointerEvents: "none",
    });
  }
}
function renderUnreadIndicator(arg0, sharedId, transitionState, cleanUp) {
  return React5(
    UnreadIndicator,
    { sharedId: sharedId.sharedId, id: sharedId.id, selected: sharedId.selected, transitionState, cleanUp },
    arg0,
  );
}
const IOS_POINTER_STYLE = fn(5778).IOS_POINTER_STYLE;
const GuildsBarConstants = fn(18598);
({
  GUILD_ITEM_HIT_SLOP: hasOwnProperty,
  GUILD_ITEM_INSET_LEFT: closure_6,
  useGuildWrapperSize: metroImportDefault,
} = GuildsBarConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = { mass: 0.8, damping: 100, stiffness: 150 };
let closure_11 = { mass: 0.25, damping: 100, stiffness: 200 };
let createStyles = fn(5141);
const application_id = createStyles.createStyles(() => {
  let num = arg0;
  if (arg0 === undefined) {
    num = 56;
  }
  const obj = {
    draggedElement: { opacity: 0 },
    selectedBackgroundOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
    container: { position: "relative", overflow: "visible" },
    unreadIndicator: null,
    expandedChildrenWrapper: null,
  };
  const size = {
    position: "absolute",
    top: num / 2,
    left: -4,
    height: 8,
    width: 8,
    borderRadius: nativeDefault.radii.xs,
    backgroundColor: nativeDefault.colors.TEXT_STRONG,
  };
  obj.unreadIndicator = size;
  const rect = {
    position: "absolute",
    left: num + 16,
    top: 0,
    right: 8,
    height: num,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };
  obj.expandedChildrenWrapper = rect;
  return obj;
});
createStyles = fn(5141);
let closure_13 = createStyles.createStyles((arg0, arg1, width, height) => {
  const obj = { pressableWrapper: null, itemShape: null, itemShapeSelected: null };
  const size = {
    position: "relative",
    paddingTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN,
    paddingBottom: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN,
    paddingLeft,
    height,
    width: width + hasOwnProperty.left + hasOwnProperty.right,
  };
  obj.pressableWrapper = size;
  const size1 = {
    position: "relative",
    width,
    height: width,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: null,
  };
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
let closure_14 = {
  code: "(function GuildsBarAnimatedItemWrapperTsx1(values){let[disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,guildItemSize]=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:8,originY:guildItemSize/2,originX:-12}};})",
};
let closure_15 = {
  code: "(function GuildsBarAnimatedItemWrapperTsx2(values){let[withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,scheduleOnRN]=this.__closure;return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight,originY:values.currentOriginY,originX:values.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){scheduleOnRN(cleanUp);}}};})",
};
let closure_18 = {
  code: "(function GuildsBarAnimatedItemWrapperTsx3(){let[withSpring,circle,guildItemSelectedBorderRadius,guildItemSize,CORNER_SPRING_PHYSICS]=this.__closure;return{borderRadius:withSpring(!circle?guildItemSelectedBorderRadius:guildItemSize/2,CORNER_SPRING_PHYSICS,'animate-always')};})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx");

export default function GuildsBarAnimatedItemWrapper(id) {
  id = id.id;
  _require = id;
  const selected = id.selected;
  importDefault = selected;
  ({ unread, hint } = id);
  dependencyMap = hint;
  let flag = id.draggable;
  ({ circle, children, externalChildren, expandedChildren, config, label } = id);
  if (flag === undefined) {
    flag = false;
  }
  noop = flag;
  ({ isDragTarget, cutouts } = id);
  if (isDragTarget === undefined) {
    isDragTarget = false;
  }
  c4 = isDragTarget;
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
  renderItem = undefined;
  closure_18 = undefined;
  closure_19 = undefined;
  let tmp = overState();
  closure_14 = tmp;
  const token = require("useToken").useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp6 = zIndex(tmp);
  let draggedElement = tmp6;
  const tmp7 = usePressabilityDefault(config);
  let obj = require("useToken");
  const token1 = require("useToken").useToken(nativeDefault.modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
  let obj2 = require("useToken");
  items = [closure_18, require("spring/spring").withSpring, circle, token1, token, onAccessibilityAction];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  class GuildsBarAnimatedItemWrapperTsx3 {
    constructor() {
      tmp = closure_0;
      if (closure_1) {
        tmp3 = closure_3;
        num = 2;
        result = closure_3 / 2;
      } else {
        result = closure_2;
      }
      obj = { borderRadius: tmp(result, closure_4, "animate-always") };
      return obj;
    }
  }
  let items1 = [tmp10, tmp11, tmp12, tmp13, tmp14];
  GuildsBarAnimatedItemWrapperTsx3.__closure = items1;
  GuildsBarAnimatedItemWrapperTsx3.__workletHash = 2090076448645;
  GuildsBarAnimatedItemWrapperTsx3.__initData = tmp9;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    GuildsBarAnimatedItemWrapperTsx3,
  );
  const enableHome = noop.useContext(tmp2(18321).HomeDrawerStateContext).enableHome;
  const obj3 = require("../../../../_runtime/metro/01652__.js");
  const drawerOpen = require("useDrawerState").useDrawerOpen(enableHome);
  const items2 = [isDragTarget, dragState, num, overState, zIndex, tmp];
  const memo = noop.useMemo(() => {
    if (c4) {
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
  }, items2);
  const items3 = [styles.pressableWrapper, isDragTarget, tmp6.draggedElement];
  ({ style, unreadStyle } = memo);
  let tmp19 = !unread;
  const memo1 = noop.useMemo(() => {
    items = [styles.pressableWrapper, ,];
    draggedElement = undefined;
    if (c4) {
      draggedElement = draggedElement.draggedElement;
    }
    items[1] = draggedElement;
    items[2] = IOS_POINTER_STYLE;
    return items;
  }, items3);
  if (!unread) {
    tmp19 = !selected;
  }
  if (!tmp19) {
    tmp19 = isDragTarget;
  }
  if (!tmp19) {
    tmp19 = flag2;
  }
  flag2 = tmp19;
  const items4 = [tmp19, selected, sharedId, id];
  const memo2 = obj4.useMemo(() => {
    if (!flag2) {
      const obj = { selected, sharedId, id };
      return obj;
    }
  }, items4);
  renderItem = obj4.useRef(undefined);
  const items5 = [expanded];
  const effect = obj4.useEffect(() => {
    if (undefined !== ref.current) {
      if (ref.current !== expanded) {
        let AccessibilityAnnouncer = require;
        const intl = util.intl;
        const t = util.t;
        AccessibilityAnnouncer = AccessibilityAnnouncer(5150).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(intl.string(expanded ? t.CUnsOR : t.jsudFd));
        ref.current = expanded;
        const stringResult = intl.string(expanded ? t.CUnsOR : t.jsudFd);
      }
    } else {
      ref.current = expanded;
    }
  }, items5);
  const tmp22 = useHomeDrawerToggleAccessibilityActionDefault(enableHome, drawerOpen);
  closure_18 = tmp22;
  const items6 = [accessibilityActions, tmp22];
  const memo3 = obj4.useMemo(() => {
    if (null == closure_18) {
      let items1 = accessibilityActions;
    } else {
      items = accessibilityActions;
      if (accessibilityActions == null) {
        items = [];
      }
      items1 = [];
      const obj = { name: null, label: null };
      ({ name: obj.name, label: obj.label } = closure_18);
      items1[HermesBuiltin.arraySpread(items, 0)] = obj;
    }
    return items1;
  }, items6);
  const items7 = [tmp22, onAccessibilityAction];
  let tmp24 = null != memo3;
  const callback = obj4.useCallback((nativeEvent) => {
    if (null != closure_18) {
      if (nativeEvent.nativeEvent.actionName === closure_18.name) {
        closure_18.action();
      }
    }
    if (onAccessibilityAction != null) {
      tmp2(nativeEvent);
    }
  }, items7);
  if (tmp24) {
    tmp24 = memo3.length > 0;
  }
  closure_19 = tmp24;
  const items8 = [hint, flag, tmp24];
  const memo4 = obj4.useMemo(() => {
    let tmp = null != _undefined;
    if (tmp) {
      tmp = _undefined.length > 0;
    }
    items = [];
    if (tmp) {
      items.push(_undefined);
    }
    if (c3) {
      const intl = util.intl;
      items.push(intl.string(util.t.BGMUFB));
    }
    if (closure_19) {
      const intl2 = util.intl;
      items.push(intl2.string(util.t.X2x0MF));
    }
    return items.join(". ");
  }, items8);
  const obj5 = {};
  const tmp2Result = require("useDrawerState");
  const merged = Object.assign(tmp7);
  obj5.style = memo1;
  obj5.accessibilityLabel = label;
  obj5.accessible = true;
  obj5.focusable = true;
  obj5.accessibilityRole = "button";
  obj5.accessibilityState = { selected, expanded };
  obj5.hitSlop = dragState;
  let tmp28;
  if (memo4.length > 0) {
    tmp28 = memo4;
  }
  obj5.accessibilityHint = tmp28;
  obj5.collapsable = false;
  obj5.accessibilityActions = memo3;
  obj5.onAccessibilityAction = callback;
  const items9 = [externalChildren, ,];
  const obj6 = { pointerEvents: "none", style: unreadStyle, collapsable: false, children: null };
  const tmp4Result = NativeViewDefault;
  obj6.children = styles(require("native").TransitionItem, { item: memo2, renderItem });
  items9[1] = styles(NativeViewDefault, obj6);
  const obj8 = { style: null, cutouts, children: null };
  const items10 = [styles.itemShape, animatedStyle];
  obj8.style = items10;
  const items11 = [tmp6.selectedBackgroundOverlay];
  let itemShapeSelected = null;
  const obj7 = { item: memo2, renderItem };
  const tmp4Result4 = NativeViewDefault;
  if (selected) {
    itemShapeSelected = styles.itemShapeSelected;
  }
  items11[1] = itemShapeSelected;
  const items12 = [styles(NativeViewDefault, { pointerEvents: "none", style: items11 })];
  let tmp33 = !isDragTarget;
  if (!isDragTarget) {
    tmp33 = children;
  }
  items12[1] = tmp33;
  obj8.children = items12;
  items9[2] = accessibilityActions(require("ClipView").ClipViewAnimated, obj8);
  obj5.children = items9;
  const tmp4Result5 = NativeViewDefault;
  let container = null;
  if (enableHome) {
    container = tmp6.container;
  }
  const obj9 = { style: null, layout, entering, exiting, preventClipping: flag3, collapsable: false, children: null };
  const items13 = [container, style];
  obj9.style = items13;
  const items14 = [accessibilityActions(tmp4Result, obj5)];
  let tmp29Result = null;
  if (enableHome) {
    const obj10 = {};
    const merged1 = Object.assign(tmp7);
    obj10.style = tmp6.expandedChildrenWrapper;
    obj10.collapsable = false;
    obj10.accessibilityElementsHidden = !drawerOpen;
    let str = "no-hide-descendants";
    if (drawerOpen) {
      str = "auto";
    }
    obj10.importantForAccessibility = str;
    let tmp41 = !isDragTarget;
    if (!isDragTarget) {
      tmp41 = expandedChildren;
    }
    obj10.children = tmp41;
    tmp29Result = tmp29(tmp4(7101), obj10);
    const tmp4Result6 = tmp4(7101);
  }
  items14[1] = tmp29Result;
  obj9.children = items14;
  return accessibilityActions(_modDef1652.View, obj9);
}
export function useGuildsBarAnimatedWrapperStyles(arg0) {
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
  return closure_13(flag, flag2, token, metroImportDefault());
}
export { UnreadIndicator };
export { renderUnreadIndicator };
