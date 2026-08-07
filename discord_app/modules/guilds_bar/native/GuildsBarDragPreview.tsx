// discord_app/modules/guilds_bar/native/GuildsBarDragPreview.tsx
import importAllResult from "noop";
import { GuildsNodeType } from "insertUnsortedGuilds";
import withEqualityFn from "withEqualityFn";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { isIterable } from "../../../../_runtime/03914_isIterable.js";

const require = arg1;
function PreviewItem(dragRegion) {
  let draggedNode;
  let dropComplete;
  dragRegion = dragRegion.dragRegion;
  const draggedHeight = dragRegion.draggedHeight;
  ({ draggedNode, dropComplete } = dragRegion);
  const gestureState = dragRegion.gestureState;
  const listInsets = dragRegion.listInsets;
  const overNode = dragRegion.overNode;
  const overState = dragRegion.overState;
  const scrollPosition = dragRegion.scrollPosition;
  const windowSize = dragRegion.windowSize;
  const dropPosition = dragRegion.dropPosition;
  let derivedValue;
  let derivedValue1;
  let tmp = scrollPosition();
  let obj = dragRegion(dropComplete[5]);
  const isHomeDrawerEnabled = obj.useIsHomeDrawerEnabled();
  let obj1 = dragRegion(dropComplete[6]);
  let fn = function x() {
    const value = scrollPosition.get();
    let num = 0;
    if (value < dragRegion.get().min) {
      num = dragRegion.get().min - scrollPosition.get();
    }
    return Math.max(num, listInsets.get().start);
  };
  fn.__closure = { scrollPosition, dragRegion, listInsets };
  fn.__workletHash = 17436881889698;
  fn.__initData = dropPosition;
  derivedValue = obj1.useDerivedValue(fn);
  const fn2 = function y() {
    const value = scrollPosition.get();
    const sum = value + (windowSize - listInsets.get().end);
    if (sum > dragRegion.get().max) {
      const diff = dragRegion.get().max - draggedHeight;
      let diff1 = diff - scrollPosition.get();
      let tmp4 = draggedHeight;
    } else {
      tmp4 = draggedHeight;
      diff1 = tmp2 - obj2.get().end - draggedHeight;
    }
    return Math.min(diff1, windowSize - listInsets.get().end - tmp4);
  };
  fn2.__closure = { scrollPosition, windowSize, listInsets, dragRegion, draggedHeight };
  fn2.__workletHash = 4371355784;
  fn2.__initData = derivedValue;
  derivedValue1 = dragRegion(dropComplete[6]).useDerivedValue(fn2);
  const obj3 = dragRegion(dropComplete[6]);
  const tmp2 = dragRegion;
  const tmp3 = dropComplete;
  class G {
    constructor() {
      tmp = dropPosition;
      if (null != dropPosition) {
        tmp5 = scrollPosition;
        diff = tmp - scrollPosition.get();
      } else {
        tmp2 = gestureState;
        tmp3 = draggedHeight;
        num = 2;
        diff = gestureState.get().absoluteY - draggedHeight / 2;
      }
      if (null != gestureState.get().mode) {
        if (null == tmp) {
          tmp8 = globalThis;
          _Math = Math;
          _Math2 = Math;
          tmp9 = c10;
          tmp11 = dragRegion;
          bound = Math.max(diff, c10.get());
          bound1 = Math.min(bound, dragRegion.get());
        }
        obj = { top: null };
        tmp12 = dragRegion;
        tmp13 = dropComplete;
        obj2 = dragRegion(dropComplete[7]);
        tmp14 = windowSize;
        fn = function t(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = null != closure_9;
          }
          if (tmp) {
            outer1_0(outer1_2[6]).runOnJS(closure_2)();
            const obj = outer1_0(outer1_2[6]);
          }
        };
        obj = { dropPosition: null, runOnJS: null, dropComplete: null };
        obj[0] = tmp;
        obj[1] = dragRegion(dropComplete[6]).runOnJS;
        tmp15 = dropComplete;
        obj[2] = dropComplete;
        fn.__closure = obj;
        num2 = 12640145939434;
        fn.__workletHash = 12640145939434;
        tmp16 = outer1_12;
        fn.__initData = outer1_12;
        str = "animate-always";
        tmp17 = obj2;
        tmp18 = bound1;
        tmp19 = fn;
        obj[0] = obj2.withSpring(bound1, windowSize, "animate-always", fn);
        return obj;
      }
      tmp6 = -draggedHeight;
      bound1 = Math.max(tmp6, Math.min(diff, windowSize));
      return;
    }
  }
  obj = { dropPosition, scrollPosition, gestureState, draggedHeight, minY: derivedValue, maxY: derivedValue1, windowSize, withSpring: dragRegion(dropComplete[7]).withSpring, DRAG_SPRING_PHYSICS: windowSize, runOnJS: dragRegion(dropComplete[6]).runOnJS, dropComplete };
  G.__closure = obj;
  G.__workletHash = 5676492640532;
  G.__initData = derivedValue1;
  let items = [overState, overNode];
  const animatedStyle = dragRegion(dropComplete[6]).useAnimatedStyle(G);
  const memo = gestureState.useMemo(() => {
    if ("convert-after" === overState) {
      if (null != overNode) {
        const obj = { type: null, id: -1, parentId: "PX_8", name: "Array", color: "ao", expanded: true, children: true };
        obj[0] = listInsets.FOLDER;
        const items = [tmp2];
        obj[6] = items;
        return obj;
      }
    }
  }, items);
  const items1 = [tmp.dragPreview, , ];
  let dragPreviewHome = null;
  const obj4 = dragRegion(dropComplete[6]);
  if (isHomeDrawerEnabled) {
    dragPreviewHome = tmp.dragPreviewHome;
  }
  obj = { style: items1, nativeID: "guilds-bar-drag-preview", children: null };
  items1[1] = dragPreviewHome;
  items1[2] = animatedStyle;
  obj1 = { renderItem: renderAnimatedItemPreview, items: null, getItemKey: null };
  if (null != memo) {
    draggedNode = memo;
  }
  const items2 = [draggedNode];
  obj1[1] = items2;
  obj1[2] = getItemPreviewKey;
  obj[2] = overState(tmp2(tmp3[9]).TransitionGroup, obj1);
  return overState(draggedHeight(dropComplete[8]), obj);
}
function getItemPreviewKey(id) {
  return "" + id.id;
}
function renderAnimatedItemPreview(arg0, node, transitionState, cleanUp) {
  return <AnimatedItemPreview key={arg0} node={arg1} transitionState={arg2} cleanUp={arg3} />;
}
function AnimatedItemPreview(cleanUp) {
  let node;
  let transitionState;
  ({ node, transitionState } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  let sharedValue;
  let importAllResult;
  let tmp = callback2();
  let obj = transitionState(sharedValue[5]);
  const isHomeDrawerEnabled = obj.useIsHomeDrawerEnabled();
  let obj1 = transitionState(sharedValue[6]);
  let num = 1;
  if (transitionState === transitionState(sharedValue[9]).TransitionStates.ENTERED) {
    num = 0;
  }
  sharedValue = obj1.useSharedValue(num);
  importAllResult = tmp7;
  let tmp8 = isHomeDrawerEnabled;
  if (isHomeDrawerEnabled) {
    tmp8 = !tmp7;
  }
  if (tmp8) {
    tmp8 = transitionState !== tmp2(tmp3[9]).TransitionStates.YEETED;
  }
  let fn = function w() {
    let translateX;
    let translateY;
    const value = sharedValue.get();
    let num = 1;
    if (c3) {
      let num3 = 0.3;
      if (num === value) {
        num3 = num;
      }
      let num2 = num3;
      let obj = tmp2;
    } else {
      num2 = 0.33;
      if (num === value) {
        num2 = num;
      }
      obj = tmp2;
    }
    if (!c3) {
      if (num !== obj.get()) {
        obj = { translateX: 10, translateY: -10 };
      }
      let num4 = num;
      ({ translateX, translateY } = obj);
      if (tmp) {
        num4 = 0;
      }
      obj = { zIndex: null, transform: null, opacity: null };
      obj[0] = num4;
      const obj1 = { translateY: null };
      let obj4 = transitionState(sharedValue[7]);
      obj1[0] = obj4.withSpring(translateY, outer1_8, "animate-always");
      const items = [obj1, , ];
      const obj2 = { translateX: null };
      obj2[0] = transitionState(sharedValue[7]).withSpring(translateX, outer1_8, "animate-always");
      items[1] = obj2;
      const obj3 = { scale: null };
      const obj9 = transitionState(sharedValue[7]);
      const fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = closure_0 === outer1_0(outer1_2[9]).TransitionStates.YEETED;
        }
        if (tmp) {
          tmp = closure_3;
        }
        if (tmp) {
          outer1_0(outer1_2[6]).runOnJS(closure_1)();
          const obj = outer1_0(outer1_2[6]);
        }
      };
      obj4 = { transitionState: null, TransitionStates: null, isFolder: null, runOnJS: null, cleanUp: null };
      obj4[0] = transitionState;
      obj4[1] = transitionState(sharedValue[9]).TransitionStates;
      obj4[2] = tmp;
      obj4[3] = transitionState(sharedValue[6]).runOnJS;
      obj4[4] = cleanUp;
      fn.__closure = obj4;
      fn.__workletHash = 9409925192880;
      fn.__initData = outer1_17;
      obj3[0] = obj9.withSpring(num2, outer1_8, "animate-always", fn);
      items[2] = obj3;
      obj[1] = items;
      const obj7 = transitionState(sharedValue[7]);
      const tmp6 = outer1_8;
      if (tmp) {
        num = obj.get();
      }
      obj[2] = transitionState(sharedValue[7]).withSpring(num, tmp6, "animate-always");
      return obj;
    }
    obj = { translateX: 0, translateY: 0 };
  };
  obj = { isFolder: tmp7, visible: sharedValue, withSpring: tmp2(tmp3[7]).withSpring, DRAG_SPRING_PHYSICS: closure_8, transitionState, TransitionStates: tmp2(tmp3[9]).TransitionStates, runOnJS: tmp2(tmp3[6]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 13465198693221;
  fn.__initData = closure_16;
  const animatedStyle = transitionState(sharedValue[6]).useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    let num = 1;
    if (transitionState === transitionState(sharedValue[9]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  });
  let items = [tmp.animatedPreviewStyle, , ];
  let prop = null;
  const tmp2Result = transitionState(sharedValue[6]);
  let tmp6 = GuildsNodeType;
  if (tmp8) {
    prop = tmp.animatedPreviewStyleHome;
  }
  obj = { style: items, children: null };
  items[1] = prop;
  items[2] = animatedStyle;
  if (node.type === tmp6.FOLDER) {
    obj1 = { id: null, expanded: null, color: null, name: null, childNodes: null, isDragPreview: true, hideExpandedChildren: null };
    ({ id: obj7[0], expanded: obj7[1], color: obj7[2], name: obj7[3], children: obj7[4] } = node);
    obj1[6] = !tmp8;
    let tmp11Result = tmp11(tmp12(tmp3[10]), obj1);
  } else {
    let obj2 = { guildId: null, isDragPreview: true, hideExpandedChildren: null };
    obj2[0] = node.id;
    obj2[2] = !tmp8;
    tmp11Result = tmp11(tmp12(tmp3[11]), obj2);
  }
  obj[1] = tmp11Result;
  return jsx(cleanUp(sharedValue[8]), { style: items, children: null });
}
let c3 = importAllResult;
let closure_7 = createCacheKey.createStyles({ dragPreview: { position: "absolute", left: 0 }, animatedPreviewStyle: { position: "absolute" }, dragPreviewHome: { right: 0 }, animatedPreviewStyleHome: { left: 0, right: 0 } });
let closure_8 = { mass: 0.5, damping: 80, stiffness: 320 };
let closure_9 = { code: "function GuildsBarDragPreviewTsx1(){const{scrollPosition,dragRegion,listInsets}=this.__closure;return Math.max(scrollPosition.get()<dragRegion.get().min?dragRegion.get().min-scrollPosition.get():0,listInsets.get().start);}" };
let closure_10 = { code: "function GuildsBarDragPreviewTsx2(){const{scrollPosition,windowSize,listInsets,dragRegion,draggedHeight}=this.__closure;return Math.min(scrollPosition.get()+(windowSize-listInsets.get().end)>dragRegion.get().max?dragRegion.get().max-draggedHeight-scrollPosition.get():windowSize-listInsets.get().end-draggedHeight,windowSize-listInsets.get().end-draggedHeight);}" };
let closure_11 = { code: "function GuildsBarDragPreviewTsx3(){const{dropPosition,scrollPosition,gestureState,draggedHeight,minY,maxY,windowSize,withSpring,DRAG_SPRING_PHYSICS,runOnJS,dropComplete}=this.__closure;let translateY=function(){if(dropPosition!=null){return dropPosition-scrollPosition.get();}return gestureState.get().absoluteY-draggedHeight/2;}();if(gestureState.get().mode!=null&&dropPosition==null){translateY=Math.min(Math.max(translateY,minY.get()),maxY.get());}else{translateY=Math.max(-draggedHeight,Math.min(translateY,windowSize));}return{top:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&dropPosition!=null){runOnJS(dropComplete)();}})};}" };
let closure_12 = { code: "function GuildsBarDragPreviewTsx4(finished){const{dropPosition,runOnJS,dropComplete}=this.__closure;if(finished&&dropPosition!=null){runOnJS(dropComplete)();}}" };
let closure_16 = { code: "function GuildsBarDragPreviewTsx5(){const{isFolder,visible,withSpring,DRAG_SPRING_PHYSICS,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const targetScale=function(){if(isFolder){return visible.get()===1?1:0.3;}return visible.get()===1?1:0.33;}();const{translateX:translateX,translateY:translateY}=function(){if(isFolder){return{translateX:0,translateY:0};}if(visible.get()===1){return{translateX:0,translateY:0};}return{translateX:10,translateY:-10};}();return{zIndex:isFolder?0:1,transform:[{translateY:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always')},{translateX:withSpring(translateX,DRAG_SPRING_PHYSICS,'animate-always')},{scale:withSpring(targetScale,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}})}],opacity:withSpring(isFolder?visible.get():1,DRAG_SPRING_PHYSICS,'animate-always')};}" };
let closure_17 = { code: "function GuildsBarDragPreviewTsx6(finished){const{transitionState,TransitionStates,isFolder,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}}" };
const memoResult = importAllResult.memo(function GuildsBarDragPreview() {
  const tmp = callback((arg0) => {
    let dragRegion;
    let dragSpecs;
    let dropComplete;
    let dropSpecs;
    let gestureState;
    let listInsets;
    let overSpecs;
    let scrollPosition;
    let windowSize;
    ({ dragSpecs, overSpecs, gestureState, scrollPosition, dragRegion, windowSize, dropComplete, listInsets, dropSpecs } = arg0);
    if (null != dropSpecs) {
      const overState = dropSpecs.overState;
      let obj = { draggedNode: null, draggedHeight: null, overState: null, overNode: null, dropPosition: null, gestureState: null, scrollPosition: null, dragRegion: null, windowSize: null, dropComplete: null, listInsets: null };
      ({ dragNode: obj2[0], itemSize: obj2[1] } = dropSpecs);
      obj[2] = overState;
      let overNode;
      if (overState.startsWith("convert")) {
        overNode = dropSpecs.overNode;
      }
      obj[3] = overNode;
      obj[4] = dropSpecs.dropPosition;
      obj[5] = gestureState;
      obj[6] = scrollPosition;
      obj[7] = dragRegion;
      obj[8] = windowSize;
      obj[9] = dropComplete;
      obj[10] = listInsets;
      return obj;
    } else {
      if (null != dragSpecs) {
        if (null != overSpecs) {
          const state = overSpecs.state;
          obj = { draggedNode: null, draggedHeight: null, overState: null, overNode: null, dropPosition: "o", gestureState: "primary", scrollPosition: "lg", dragRegion: null, windowSize: null, dropComplete: true, listInsets: null };
          ({ node: obj[0], itemSize: obj[1] } = dragSpecs);
          obj[2] = state;
          let node;
          if (state.startsWith("convert")) {
            node = overSpecs.node;
          }
          obj[3] = node;
          obj[5] = gestureState;
          obj[6] = scrollPosition;
          obj[7] = dragRegion;
          obj[8] = windowSize;
          obj[9] = dropComplete;
          obj[10] = listInsets;
          return obj;
        }
      }
      return null;
    }
  }, isIterable.shallow);
  let tmp2 = null;
  if (null != tmp) {
    let obj = {};
    const merged = Object.assign(tmp);
    tmp2 = <PreviewItem />;
  }
  return tmp2;
});
let result = require("withEqualityFn").fileFinishedImporting("modules/guilds_bar/native/GuildsBarDragPreview.tsx");

export default memoResult;