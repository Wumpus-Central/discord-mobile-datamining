// === Module 16301: GuildsBarDragPreview ===

// Module 16301 (GuildsBarDragPreview)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 4492 */;
import native from "native" /* 4589 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import GuildsBarConstants from "GuildsBarConstants" /* 16222 */;
import react_mod from "react" /* 19 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 16225 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let min, obj1, set, str, tmp11, tmp12, tmp16, tmp18, tmp9;

function getItemPreviewKey(id) {
  return "" + id.id;
}
function renderAnimatedItemPreview(key, node, transitionState, cleanUp) {
  return <closure_26 key={key} node={node} transitionState={transitionState} cleanUp={cleanUp} />;
}
let react = react_mod;
const GuildsNodeType = SortedGuildStore.GuildsNodeType;
const GUILD_ITEM_INSET_LEFT = GuildsBarConstants.GUILD_ITEM_INSET_LEFT;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles({ dragPreview: { position: "absolute", left: 0 }, animatedPreviewStyle: { position: "absolute" }, dragPreviewHome: { right: 0 } });
createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles((arg0) => {
  let items;
  let rect;
  const obj = { animatedPreviewStyleHome: rect };
  rect = { left: 0, right: 0, transformOrigin: items };
  items = [arg0, "50%", 0];
  return obj;
});
const DRAG_SPRING_PHYSICS = { mass: 0.5, damping: 80, stiffness: 320 };
const __initData = { code: "function GuildsBarDragPreviewTsx1(){const{scrollPosition,dragRegion,listInsets}=this.__closure;return Math.max(scrollPosition.get()<dragRegion.get().min?dragRegion.get().min-scrollPosition.get():0,listInsets.get().start);}" };
const __initData2 = { code: "function GuildsBarDragPreviewTsx2(){const{scrollPosition,windowSize,listInsets,dragRegion,draggedHeight}=this.__closure;return Math.min(scrollPosition.get()+(windowSize-listInsets.get().end)>dragRegion.get().max?dragRegion.get().max-draggedHeight-scrollPosition.get():windowSize-listInsets.get().end-draggedHeight,windowSize-listInsets.get().end-draggedHeight);}" };
const __initData3 = { code: "function GuildsBarDragPreviewTsx3(){const{dropPosition,scrollPosition,gestureState,draggedHeight,minY,maxY,windowSize,withSpring,DRAG_SPRING_PHYSICS,runOnJS,dropComplete}=this.__closure;let translateY=function(){if(dropPosition!=null){return dropPosition-scrollPosition.get();}return gestureState.get().absoluteY-draggedHeight/2;}();if(gestureState.get().mode!=null&&dropPosition==null){translateY=Math.min(Math.max(translateY,minY.get()),maxY.get());}else{translateY=Math.max(-draggedHeight,Math.min(translateY,windowSize));}return{top:withSpring(translateY,DRAG_SPRING_PHYSICS,\"animate-always\",function(finished){if(finished&&dropPosition!=null){runOnJS(dropComplete)();}})};}" };
const __initData4 = { code: "function GuildsBarDragPreviewTsx4(finished){const{dropPosition,runOnJS,dropComplete}=this.__closure;if(finished&&dropPosition!=null){runOnJS(dropComplete)();}}" };
const __initData5 = { code: "function GuildsBarDragPreviewTsx5(){const{scrollPosition,dragRegion,listInsets}=this.__closure;return Math.max(scrollPosition.get()<dragRegion.get().min?dragRegion.get().min-scrollPosition.get():0,listInsets.get().start);}" };
const __initData6 = { code: "function GuildsBarDragPreviewTsx6(){const{scrollPosition,windowSize,listInsets,dragRegion,draggedHeight}=this.__closure;return Math.min(scrollPosition.get()+(windowSize-listInsets.get().end)>dragRegion.get().max?dragRegion.get().max-draggedHeight-scrollPosition.get():windowSize-listInsets.get().end-draggedHeight,windowSize-listInsets.get().end-draggedHeight);}" };
const __initData7 = { code: "function GuildsBarDragPreviewTsx7(){const{dropPosition,scrollPosition,gestureState,draggedHeight,minY,maxY,windowSize,withSpring,DRAG_SPRING_PHYSICS,runOnJS,dropComplete}=this.__closure;let translateY=function(){if(dropPosition!=null){return dropPosition-scrollPosition.get();}return gestureState.get().absoluteY-draggedHeight/2;}();if(gestureState.get().mode!=null&&dropPosition==null){translateY=Math.min(Math.max(translateY,minY.get()),maxY.get());}else{translateY=Math.max(-draggedHeight,Math.min(translateY,windowSize));}return{top:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&dropPosition!=null){runOnJS(dropComplete)();}})};}" };
let closure_18 = { code: "function GuildsBarDragPreviewTsx8(finished){const{dropPosition,runOnJS,dropComplete}=this.__closure;if(finished&&dropPosition!=null){runOnJS(dropComplete)();}}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((dragRegion) => {
  let derivedValue;
  let draggedNode;
  let dropComplete;
  let items;
  let items1;
  let overNode;
  let overState;
  let scrollPosition;
  let tmp = dragRegion;
  let obj = dragRegion(dropComplete[7]);
  const cResult = obj.c(11);
  dragRegion = dragRegion.dragRegion;
  const draggedHeight = dragRegion.draggedHeight;
  ({ draggedNode, dropComplete } = dragRegion);
  const gestureState = dragRegion.gestureState;
  const listInsets = dragRegion.listInsets;
  ({ overNode, overState, scrollPosition } = dragRegion);
  const windowSize = dragRegion.windowSize;
  const dropPosition = dragRegion.dropPosition;
  let tmp4 = derivedValue();
  let obj2 = dragRegion(dropComplete[8]);
  const isHomeDrawerEnabled = obj2.useIsHomeDrawerEnabled();
  let fn = function o() {
    const _Math = Math;
    const value = scrollPosition.get();
    let num = 0;
    if (value < dragRegion.get().min) {
      num = dragRegion.get().min - scrollPosition.get();
    }
    return max(num, listInsets.get().start);
  };
  fn.__closure = { scrollPosition, dragRegion, listInsets };
  fn.__workletHash = 17436881889698;
  fn.__initData = __initData;
  const obj3 = dragRegion(dropComplete[9]);
  derivedValue = obj3.useDerivedValue(fn);
  const fn2 = function s() {
    let diff1;
    let tmp4;
    const _Math = Math;
    const value = scrollPosition.get();
    const sum = value + (windowSize - listInsets.get().end);
    if (sum > dragRegion.get().max) {
      const diff = dragRegion.get().max - draggedHeight;
      diff1 = diff - scrollPosition.get();
      tmp4 = draggedHeight;
    } else {
      tmp4 = draggedHeight;
      diff1 = windowSize - listInsets.get().end - draggedHeight;
    }
    return min(diff1, windowSize - listInsets.get().end - tmp4);
  };
  fn2.__closure = { scrollPosition, windowSize, listInsets, dragRegion, draggedHeight };
  fn2.__workletHash = 4371355784;
  fn2.__initData = __initData2;
  const obj4 = dragRegion(dropComplete[9]);
  const derivedValue1 = obj4.useDerivedValue(fn2);
  const obj5 = dragRegion(dropComplete[9]);
  class S {
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
          tmp9 = closure_8;
          min = Math.min;
          tmp11 = closure_9;
          bound = Math.max(diff, closure_8.get());
          minResult = min(bound, closure_9.get());
        }
        obj = { top: null };
        tmp12 = closure_0;
        tmp13 = closure_2;
        tmp14 = closure_0(closure_2[10]);
        tmp15 = closure_10;
        fn = function t(arg0) {
          const tmp = arg0 && null != dropPosition;
          if (tmp) {
            const obj = dragRegion(dropComplete[9]);
            obj.runOnJS(closure_1_2)();
          }
        };
        obj1 = { dropPosition: null, runOnJS: null, dropComplete: null };
        obj1.dropPosition = tmp;
        withSpring = tmp14.withSpring;
        obj1.runOnJS = closure_0(closure_2[9]).runOnJS;
        tmp16 = dropComplete;
        obj1.dropComplete = dropComplete;
        fn.__closure = obj1;
        num2 = 12640145939434;
        fn.__workletHash = 12640145939434;
        tmp17 = closure_14;
        fn.__initData = closure_14;
        str = "animate-always";
        tmp18 = tmp14;
        tmp19 = minResult;
        tmp20 = fn;
        obj.top = withSpring(minResult, closure_10, "animate-always", fn);
        return obj;
      }
      tmp6 = -draggedHeight;
      minResult = Math.max(tmp6, Math.min(diff, windowSize));
      return;
    }
  }
  S.__closure = { dropPosition, scrollPosition, gestureState, draggedHeight, minY: derivedValue, maxY: derivedValue1, windowSize, withSpring: dragRegion(dropComplete[10]).withSpring, DRAG_SPRING_PHYSICS, runOnJS: dragRegion(dropComplete[9]).runOnJS, dropComplete };
  S.__workletHash = 10861960441588;
  S.__initData = __initData3;
  ({ dropPosition, scrollPosition, gestureState, draggedHeight, minY: derivedValue, maxY: derivedValue1, windowSize, withSpring: dragRegion(dropComplete[10]).withSpring, DRAG_SPRING_PHYSICS, runOnJS: dragRegion(dropComplete[9]).runOnJS, dropComplete });
  const animatedStyle = obj5.useAnimatedStyle(S);
  if ("convert-after" === overState) {
    if (null != overNode) {
      if (cResult[0] !== overNode) {
        const element = { type: listInsets.FOLDER, id: -1, parentId: "Set", name: "Array", color: "unicodeVersion", expanded: 27207746, children: items };
        items = [overNode];
        let num = 0;
        cResult[0] = overNode;
        cResult[1] = element;
      }
    }
  }
  let dragPreviewHome = null;
  if (isHomeDrawerEnabled) {
    dragPreviewHome = tmp4.dragPreviewHome;
  }
  if (cResult[2] === tmp4.dragPreview) {
    if (cResult[3] === animatedStyle) {
      let tmp14;
      let tmp15;
      if (cResult[4] === dragPreviewHome) {
        tmp14 = cResult[5];
      }
      if (null != tmp9) {
        draggedNode = tmp9;
      }
      if (cResult[6] !== draggedNode) {
        const obj7 = { renderItem: renderAnimatedItemPreview, items: items1, getItemKey: getItemPreviewKey };
        items1 = [draggedNode];
        const tmp19 = dropPosition(tmp(dropComplete[11]).TransitionGroup, obj7);
        cResult[6] = draggedNode;
        cResult[7] = tmp19;
        tmp15 = tmp19;
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] === tmp14) {
        let tmp20;
        if (cResult[9] === tmp15) {
          tmp20 = cResult[10];
        }
        return tmp20;
      }
      const obj8 = { style: tmp14, nativeID: "guilds-bar-drag-preview", children: tmp15 };
      const tmp23 = dropPosition(draggedHeight(dropComplete[12]), obj8);
      cResult[8] = tmp14;
      cResult[9] = tmp15;
      cResult[10] = tmp23;
      tmp20 = tmp23;
    }
  }
  const items2 = [tmp4.dragPreview, dragPreviewHome, animatedStyle];
  cResult[2] = tmp4.dragPreview;
  cResult[3] = animatedStyle;
  cResult[4] = dragPreviewHome;
  cResult[5] = items2;
  tmp14 = items2;
}) : ((dragRegion) => {
  let TransitionGroup;
  let draggedNode;
  let dropComplete;
  let items2;
  let obj7;
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
  let tmp = windowSize();
  const tmp2 = dragRegion;
  let obj = dragRegion(dropComplete[8]);
  const isHomeDrawerEnabled = obj.useIsHomeDrawerEnabled();
  let obj2 = dragRegion(dropComplete[9]);
  const tmp3 = dropComplete;
  class H {
    constructor() {
      const _Math = Math;
      const value = scrollPosition.get();
      let num = 0;
      if (value < dragRegion.get().min) {
        num = dragRegion.get().min - scrollPosition.get();
      }
      return max(num, listInsets.get().start);
    }
  }
  H.__closure = { scrollPosition, dragRegion, listInsets };
  H.__workletHash = 6486942624678;
  H.__initData = __initData5;
  derivedValue = obj2.useDerivedValue(H);
  const obj3 = dragRegion(dropComplete[9]);
  class E {
    constructor() {
      let diff1;
      let tmp4;
      const _Math = Math;
      const value = scrollPosition.get();
      const sum = value + (windowSize - listInsets.get().end);
      if (sum > dragRegion.get().max) {
        const diff = dragRegion.get().max - draggedHeight;
        diff1 = diff - scrollPosition.get();
        tmp4 = draggedHeight;
      } else {
        tmp4 = draggedHeight;
        diff1 = windowSize - listInsets.get().end - draggedHeight;
      }
      return min(diff1, windowSize - listInsets.get().end - tmp4);
    }
  }
  E.__closure = { scrollPosition, windowSize, listInsets, dragRegion, draggedHeight };
  E.__workletHash = 6642323167884;
  E.__initData = __initData6;
  derivedValue1 = obj3.useDerivedValue(E);
  let fn = function y() {
    let diff;
    let fn;
    let withSpring;
    if (null != dropPosition) {
      diff = dropPosition - scrollPosition.get();
    } else {
      diff = gestureState.get().absoluteY - draggedHeight / 2;
    }
    if (null != gestureState.get().mode) {
      let minResult;
      if (null == dropPosition) {
        const _Math = Math;
        const _Math2 = Math;
        const bound = Math.max(diff, derivedValue.get());
        minResult = min(bound, derivedValue1.get());
      }
      let obj = { top: withSpring(minResult, DRAG_SPRING_PHYSICS, "animate-always", fn) };
      fn = function t(arg0) {
        const tmp = arg0 && null != dropPosition;
        if (tmp) {
          const obj = dragRegion(dropComplete[9]);
          obj.runOnJS(closure_1_2)();
        }
      };
      const tmp14 = spring;
      withSpring = tmp14.withSpring;
      fn.__closure = { dropPosition, runOnJS: ReanimatedRexport.runOnJS, dropComplete };
      fn.__workletHash = 11937132712422;
      fn.__initData = __initData;
      const obj2 = { dropPosition, runOnJS: ReanimatedRexport.runOnJS, dropComplete };
      return obj;
    }
    const tmp6 = -draggedHeight;
    minResult = Math.max(tmp6, Math.min(diff, windowSize));
  };
  const obj4 = dragRegion(dropComplete[9]);
  fn.__closure = { dropPosition, scrollPosition, gestureState, draggedHeight, minY: derivedValue, maxY: derivedValue1, windowSize, withSpring: dragRegion(dropComplete[10]).withSpring, DRAG_SPRING_PHYSICS: derivedValue, runOnJS: dragRegion(dropComplete[9]).runOnJS, dropComplete };
  fn.__workletHash = 16626431905552;
  fn.__initData = __initData7;
  let items = [overState, overNode];
  ({ dropPosition, scrollPosition, gestureState, draggedHeight, minY: derivedValue, maxY: derivedValue1, windowSize, withSpring: dragRegion(dropComplete[10]).withSpring, DRAG_SPRING_PHYSICS: derivedValue, runOnJS: dragRegion(dropComplete[9]).runOnJS, dropComplete });
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const memo = gestureState.useMemo(() => {
    let items;
    if ("convert-after" === overState) {
      if (null != overNode) {
        const element = { type: GuildsNodeType.FOLDER, id: -1, parentId: "Set", name: "Array", color: "unicodeVersion", expanded: 27207746, children: items };
        items = [tmp2];
        return element;
      }
    }
  }, items);
  const items1 = [tmp.dragPreview, , ];
  let dragPreviewHome = null;
  const tmp10 = draggedHeight(dropComplete[12]);
  if (isHomeDrawerEnabled) {
    dragPreviewHome = tmp.dragPreviewHome;
  }
  items1[1] = dragPreviewHome;
  items1[2] = animatedStyle;
  const obj6 = { style: items1, nativeID: "guilds-bar-drag-preview", children: scrollPosition(TransitionGroup, obj7) };
  obj7 = { renderItem: renderAnimatedItemPreview, items: items2, getItemKey: getItemPreviewKey };
  TransitionGroup = tmp2(tmp3[11]).TransitionGroup;
  if (null != memo) {
    draggedNode = memo;
  }
  items2 = [draggedNode];
  return scrollPosition(tmp10, obj6);
});
const __initData8 = { code: "function GuildsBarDragPreviewTsx9(){const{isFolder,visible,withSpring,DRAG_SPRING_PHYSICS,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const targetScale=function(){if(isFolder){return visible.get()===1?1:0.3;}return visible.get()===1?1:0.33;}();const{translateX:translateX,translateY:translateY}=function(){if(isFolder){return{translateX:0,translateY:0};}if(visible.get()===1){return{translateX:0,translateY:0};}return{translateX:10,translateY:-10};}();return{zIndex:isFolder?0:1,transform:[{translateY:withSpring(translateY,DRAG_SPRING_PHYSICS,\"animate-always\")},{translateX:withSpring(translateX,DRAG_SPRING_PHYSICS,\"animate-always\")},{scale:withSpring(targetScale,DRAG_SPRING_PHYSICS,\"animate-always\",function(finished){if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}})}],opacity:withSpring(isFolder?visible.get():1,DRAG_SPRING_PHYSICS,\"animate-always\")};}" };
let closure_23 = { code: "function GuildsBarDragPreviewTsx10(finished){const{transitionState,TransitionStates,isFolder,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}}" };
const __initData9 = { code: "function GuildsBarDragPreviewTsx11(){const{isFolder,visible,withSpring,DRAG_SPRING_PHYSICS,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const targetScale=function(){if(isFolder){return visible.get()===1?1:0.3;}return visible.get()===1?1:0.33;}();const{translateX:translateX,translateY:translateY}=function(){if(isFolder){return{translateX:0,translateY:0};}if(visible.get()===1){return{translateX:0,translateY:0};}return{translateX:10,translateY:-10};}();return{zIndex:isFolder?0:1,transform:[{translateY:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always')},{translateX:withSpring(translateX,DRAG_SPRING_PHYSICS,'animate-always')},{scale:withSpring(targetScale,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}})}],opacity:withSpring(isFolder?visible.get():1,DRAG_SPRING_PHYSICS,'animate-always')};}" };
let closure_25 = { code: "function GuildsBarDragPreviewTsx12(finished){const{transitionState,TransitionStates,isFolder,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((cleanUp) => {
  let isFolder;
  let node;
  let sharedValue;
  let transitionState;
  let obj = transitionState(sharedValue[7]);
  const cResult = obj.c(19);
  ({ node, transitionState } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  const tmp4 = closure_8();
  let obj2 = transitionState(sharedValue[13]);
  const tmp6 = closure_9(GUILD_ITEM_INSET_LEFT + obj2.useToken(cleanUp(sharedValue[14]).modules.mobile.GUILD_BAR_ITEM_SIZE) / 2);
  let obj3 = transitionState(sharedValue[8]);
  let isHomeDrawerEnabled = obj3.useIsHomeDrawerEnabled();
  const useSharedValue = transitionState(sharedValue[9]).useSharedValue;
  let num = 1;
  const tmp8 = transitionState(sharedValue[9]);
  if (transitionState === transitionState(sharedValue[11]).TransitionStates.ENTERED) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  react = tmp11;
  const YEETED = transitionState(tmp2[11]).TransitionStates.YEETED;
  if (isHomeDrawerEnabled) {
    isHomeDrawerEnabled = !tmp11;
  }
  let fn = function p() {
    let fn;
    let items;
    let num2;
    let obj;
    let obj5;
    let obj7;
    let translateX;
    let translateY;
    let withSpring;
    let withSpring2;
    const value = sharedValue.get();
    let num = 1;
    if (isFolder) {
      let num3 = 0.3;
      if (num === value) {
        num3 = num;
      }
      num2 = num3;
      obj = sharedValue;
    } else {
      num2 = 0.33;
      if (num === value) {
        num2 = num;
      }
      obj = sharedValue;
    }
    if (!isFolder) {
      let obj2;
      if (num !== obj.get()) {
        obj2 = { translateX: 10, translateY: -10 };
      }
      let num4 = num;
      ({ translateX, translateY } = obj2);
      if (isFolder) {
        num4 = 0;
      }
      const obj3 = { zIndex: num4, transform: items, opacity: withSpring2(num, DRAG_SPRING_PHYSICS, "animate-always") };
      const obj4 = { translateY: obj5.withSpring(translateY, DRAG_SPRING_PHYSICS, "animate-always") };
      items = [obj4, , ];
      obj5 = spring;
      const obj6 = { translateX: obj7.withSpring(translateX, DRAG_SPRING_PHYSICS, "animate-always") };
      items[1] = obj6;
      obj7 = spring;
      const obj8 = { scale: withSpring(num2, DRAG_SPRING_PHYSICS, "animate-always", fn) };
      fn = function t(arg0) {
        const tmp = arg0 && closure_1_0 === transitionState(sharedValue[11]).TransitionStates.YEETED && isFolder;
        if (tmp) {
          const obj = transitionState(sharedValue[9]);
          obj.runOnJS(cleanUp)();
        }
      };
      const tmp7 = spring;
      withSpring = tmp7.withSpring;
      fn.__closure = { transitionState, TransitionStates: native.TransitionStates, isFolder, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      fn.__workletHash = 16373676807751;
      fn.__initData = __initData;
      items[2] = obj8;
      const obj9 = { transitionState, TransitionStates: native.TransitionStates, isFolder, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      withSpring2 = spring.withSpring;
      spring;
      if (isFolder) {
        num = obj.get();
      }
      return obj3;
    }
    obj2 = { translateX: 0, translateY: 0 };
  };
  const tmpResult = transitionState(sharedValue[9]);
  let obj4 = { isFolder: tmp11, visible: sharedValue, withSpring: transitionState(tmp2[10]).withSpring, DRAG_SPRING_PHYSICS, transitionState, TransitionStates: transitionState(tmp2[11]).TransitionStates, runOnJS: transitionState(tmp2[9]).runOnJS, cleanUp };
  fn.__closure = obj4;
  fn.__workletHash = 5690622032937;
  fn.__initData = __initData8;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  if (cResult[0] === transitionState) {
    let tmp13;
    if (cResult[1] === sharedValue) {
      tmp13 = cResult[2];
    }
    const effect = react.useEffect(tmp13);
    let prop = null;
    if (isHomeDrawerEnabled) {
      prop = tmp6.animatedPreviewStyleHome;
    }
    if (cResult[3] === tmp4.animatedPreviewStyle) {
      if (cResult[4] === animatedStyle) {
        let tmp17;
        let tmp20Result;
        if (cResult[5] === prop) {
          tmp17 = cResult[6];
        }
        if (cResult[7] === isHomeDrawerEnabled) {
          if (cResult[8] === transitionState === YEETED) {
            if (cResult[9] === node.children) {
              if (cResult[10] === node.color) {
                if (cResult[11] === node.expanded) {
                  if (cResult[12] === node.id) {
                    if (cResult[13] === node.name) {
                      let tmp19;
                      if (cResult[14] === node.type) {
                        tmp19 = cResult[15];
                      }
                      if (cResult[16] === tmp17) {
                        let tmp25;
                        if (cResult[17] === tmp19) {
                          tmp25 = cResult[18];
                        }
                        return tmp25;
                      }
                      const tmp27 = jsx(cleanUp(sharedValue[12]), { style: tmp17, children: tmp19 });
                      cResult[16] = tmp17;
                      cResult[17] = tmp19;
                      cResult[18] = tmp27;
                      tmp25 = tmp27;
                    }
                  }
                }
              }
            }
          }
        }
        if (node.type === GuildsNodeType.FOLDER) {
          ({ id: obj7.id, expanded: obj7.expanded, color: obj7.color, name: obj7.name, children: obj7.childNodes } = node);
          tmp20Result = jsx(tmp5(tmp2[15]), { id: null, expanded: null, color: null, name: null, childNodes: null, isDragPreview: true, hideExpandedChildren: !isHomeDrawerEnabled });
        } else {
          let tmp22 = !isHomeDrawerEnabled;
          cleanUp(sharedValue[16]);
          if (isHomeDrawerEnabled) {
            tmp22 = tmp18;
          }
          tmp20Result = <tmp5Result guildId={node.id} isDragPreview hideExpandedChildren={tmp22} />;
        }
        cResult[7] = isHomeDrawerEnabled;
        cResult[8] = transitionState === YEETED;
        cResult[9] = node.children;
        cResult[10] = node.color;
        cResult[11] = node.expanded;
        cResult[12] = node.id;
        cResult[13] = node.name;
        cResult[14] = node.type;
        cResult[15] = tmp20Result;
        tmp19 = tmp20Result;
      }
    }
    let items = [tmp4.animatedPreviewStyle, prop, animatedStyle];
    let num2 = 3;
    cResult[3] = tmp4.animatedPreviewStyle;
    let num3 = 4;
    cResult[4] = animatedStyle;
    let num4 = 5;
    cResult[5] = prop;
    cResult[6] = items;
    tmp17 = items;
  }
  const fn2 = function w() {
    let num = 1;
    set = sharedValue.set;
    if (transitionState === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  };
  cResult[0] = transitionState;
  cResult[1] = sharedValue;
  cResult[2] = fn2;
  tmp13 = fn2;
}) : ((cleanUp) => {
  let isFolder;
  let node;
  let tmp13Result;
  let transitionState;
  ({ node, transitionState } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  let sharedValue;
  react = undefined;
  let tmp = closure_8();
  let obj = transitionState(sharedValue[13]);
  const tmp5 = closure_9(GUILD_ITEM_INSET_LEFT + obj.useToken(cleanUp(sharedValue[14]).modules.mobile.GUILD_BAR_ITEM_SIZE) / 2);
  let obj2 = transitionState(sharedValue[8]);
  let isHomeDrawerEnabled = obj2.useIsHomeDrawerEnabled();
  let tmp7 = transitionState(sharedValue[9]);
  const useSharedValue = tmp7.useSharedValue;
  let num = 1;
  if (transitionState === transitionState(sharedValue[11]).TransitionStates.ENTERED) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  react = tmp10;
  const YEETED = transitionState(tmp3[11]).TransitionStates.YEETED;
  if (isHomeDrawerEnabled) {
    isHomeDrawerEnabled = !tmp10;
  }
  let fn = function h() {
    let fn;
    let items;
    let num2;
    let obj;
    let obj5;
    let obj7;
    let translateX;
    let translateY;
    let withSpring;
    let withSpring2;
    const value = sharedValue.get();
    let num = 1;
    if (isFolder) {
      let num3 = 0.3;
      if (num === value) {
        num3 = num;
      }
      num2 = num3;
      obj = sharedValue;
    } else {
      num2 = 0.33;
      if (num === value) {
        num2 = num;
      }
      obj = sharedValue;
    }
    if (!isFolder) {
      let obj2;
      if (num !== obj.get()) {
        obj2 = { translateX: 10, translateY: -10 };
      }
      let num4 = num;
      ({ translateX, translateY } = obj2);
      if (isFolder) {
        num4 = 0;
      }
      const obj3 = { zIndex: num4, transform: items, opacity: withSpring2(num, DRAG_SPRING_PHYSICS, "animate-always") };
      const obj4 = { translateY: obj5.withSpring(translateY, DRAG_SPRING_PHYSICS, "animate-always") };
      items = [obj4, , ];
      obj5 = spring;
      const obj6 = { translateX: obj7.withSpring(translateX, DRAG_SPRING_PHYSICS, "animate-always") };
      items[1] = obj6;
      obj7 = spring;
      const obj8 = { scale: withSpring(num2, DRAG_SPRING_PHYSICS, "animate-always", fn) };
      fn = function t(arg0) {
        const tmp = arg0 && closure_1_0 === transitionState(sharedValue[11]).TransitionStates.YEETED && isFolder;
        if (tmp) {
          const obj = transitionState(sharedValue[9]);
          obj.runOnJS(cleanUp)();
        }
      };
      const tmp7 = spring;
      withSpring = tmp7.withSpring;
      fn.__closure = { transitionState, TransitionStates: native.TransitionStates, isFolder, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      fn.__workletHash = 11395470501253;
      fn.__initData = __initData;
      items[2] = obj8;
      const obj9 = { transitionState, TransitionStates: native.TransitionStates, isFolder, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      withSpring2 = spring.withSpring;
      spring;
      if (isFolder) {
        num = obj.get();
      }
      return obj3;
    }
    obj2 = { translateX: 0, translateY: 0 };
  };
  const tmp2Result = transitionState(sharedValue[9]);
  let obj3 = { isFolder: tmp10, visible: sharedValue, withSpring: transitionState(tmp3[10]).withSpring, DRAG_SPRING_PHYSICS, transitionState, TransitionStates: transitionState(tmp3[11]).TransitionStates, runOnJS: transitionState(tmp3[9]).runOnJS, cleanUp };
  fn.__closure = obj3;
  fn.__workletHash = 15327303510768;
  fn.__initData = __initData9;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (transitionState === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  });
  let items = [tmp.animatedPreviewStyle, , ];
  let prop = null;
  cleanUp(sharedValue[12]);
  if (isHomeDrawerEnabled) {
    prop = tmp5.animatedPreviewStyleHome;
  }
  items[1] = prop;
  items[2] = animatedStyle;
  if (node.type === GuildsNodeType.FOLDER) {
    ({ id: obj7.id, expanded: obj7.expanded, color: obj7.color, name: obj7.name, children: obj7.childNodes } = node);
    tmp13Result = jsx(tmp4(tmp3[15]), { id: null, expanded: null, color: null, name: null, childNodes: null, isDragPreview: true, hideExpandedChildren: !isHomeDrawerEnabled });
  } else {
    let tmp17 = !isHomeDrawerEnabled;
    cleanUp(sharedValue[16]);
    if (isHomeDrawerEnabled) {
      tmp17 = transitionState === YEETED;
    }
    tmp13Result = <tmp4Result2 guildId={node.id} isDragPreview hideExpandedChildren={tmp17} />;
  }
  return <tmp4Result style={items}>{tmp13Result}</tmp4Result>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      let dragRegion;
      let dragSpecs;
      let dropComplete;
      let dropSpecs;
      let gestureState;
      let listInsets;
      let node;
      let overNode;
      let overSpecs;
      let scrollPosition;
      let windowSize;
      ({ dragSpecs, overSpecs, gestureState, scrollPosition, dragRegion, windowSize, dropComplete, listInsets, dropSpecs } = arg0);
      if (null != dropSpecs) {
        const overState = dropSpecs.overState;
        const obj3 = { draggedNode: null, draggedHeight: null, overState, overNode, dropPosition: dropSpecs.dropPosition, gestureState, scrollPosition, dragRegion, windowSize, dropComplete, listInsets };
        ({ dragNode: obj2.draggedNode, itemSize: obj2.draggedHeight } = dropSpecs);
        overNode = undefined;
        if (overState.startsWith("convert")) {
          overNode = dropSpecs.overNode;
        }
        return obj3;
      } else {
        if (null != dragSpecs) {
          if (null != overSpecs) {
            const state = overSpecs.state;
            const obj = { draggedNode: null, draggedHeight: null, overState: state, overNode: node, dropPosition: "o", gestureState, scrollPosition, dragRegion, windowSize, dropComplete, listInsets };
            ({ node: obj.draggedNode, itemSize: obj.draggedHeight } = dragSpecs);
            node = undefined;
            if (state.startsWith("convert")) {
              node = overSpecs.node;
            }
            return obj;
          }
        }
        return null;
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = GuildsBarDnDStore(first, _slicedToArray.shallow);
  if (cResult[1] !== tmp5) {
    let tmp7 = null;
    if (null != tmp5) {
      const merged = Object.assign(tmp5);
      tmp7 = <closure_19 />;
    }
    cResult[1] = tmp5;
    cResult[2] = tmp7;
    tmp6 = tmp7;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : (() => {
  const tmp = GuildsBarDnDStore((arg0) => {
    let dragRegion;
    let dragSpecs;
    let dropComplete;
    let dropSpecs;
    let gestureState;
    let listInsets;
    let node;
    let overNode;
    let overSpecs;
    let scrollPosition;
    let windowSize;
    ({ dragSpecs, overSpecs, gestureState, scrollPosition, dragRegion, windowSize, dropComplete, listInsets, dropSpecs } = arg0);
    if (null != dropSpecs) {
      const overState = dropSpecs.overState;
      const obj3 = { draggedNode: null, draggedHeight: null, overState, overNode, dropPosition: dropSpecs.dropPosition, gestureState, scrollPosition, dragRegion, windowSize, dropComplete, listInsets };
      ({ dragNode: obj2.draggedNode, itemSize: obj2.draggedHeight } = dropSpecs);
      overNode = undefined;
      if (overState.startsWith("convert")) {
        overNode = dropSpecs.overNode;
      }
      return obj3;
    } else {
      if (null != dragSpecs) {
        if (null != overSpecs) {
          const state = overSpecs.state;
          const obj = { draggedNode: null, draggedHeight: null, overState: state, overNode: node, dropPosition: "o", gestureState, scrollPosition, dragRegion, windowSize, dropComplete, listInsets };
          ({ node: obj.draggedNode, itemSize: obj.draggedHeight } = dragSpecs);
          node = undefined;
          if (state.startsWith("convert")) {
            node = overSpecs.node;
          }
          return obj;
        }
      }
      return null;
    }
  }, _slicedToArray.shallow);
  let tmp2 = null;
  if (null != tmp) {
    const merged = Object.assign(tmp);
    tmp2 = <closure_19 />;
  }
  return tmp2;
}));
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarDragPreview.tsx");

export default memoResult;