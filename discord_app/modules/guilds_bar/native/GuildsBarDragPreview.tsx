// === Module 16341: GuildsBarDragPreview ===

// Module 16341 (GuildsBarDragPreview)
import c from "c" /* 576 */;
import _mod4498 from "module_4498" /* 4498 */;
import native from "native" /* 4595 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import spring from "spring" /* 5604 */;
import noop from "module_19" /* 19 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 16265 */;

require = fn;
function getItemPreviewKey(id) {
  return "" + id.id;
}
function renderAnimatedItemPreview(key, node, transitionState, cleanUp) {
  return <closure_26 key={key} node={node} transitionState={transitionState} cleanUp={cleanUp} />;
}
const GuildsNodeType = fn(5623).GuildsNodeType;
const GUILD_ITEM_INSET_LEFT = fn(16262).GUILD_ITEM_INSET_LEFT;
const jsx = fn(21).jsx;
let createStyles = fn(4896);
let closure_8 = createStyles.createStyles({ dragPreview: { position: "absolute", left: 0 }, animatedPreviewStyle: { position: "absolute" }, dragPreviewHome: { right: 0 } });
createStyles = fn(4896);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { animatedPreviewStyleHome: null };
  const rect = { left: 0, right: 0, transformOrigin: null };
  const items = [arg0, "50%", 0];
  rect.transformOrigin = items;
  obj.animatedPreviewStyleHome = rect;
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
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((dragRegion) => {
  const cResult = dragRegion(dropComplete[7]).c(11);
  dragRegion = dragRegion.dragRegion;
  const draggedHeight = dragRegion.draggedHeight;
  ({ draggedNode, dropComplete } = dragRegion);
  const gestureState = dragRegion.gestureState;
  const listInsets = dragRegion.listInsets;
  ({ overNode, overState, scrollPosition } = dragRegion);
  const windowSize = dragRegion.windowSize;
  const dropPosition = dragRegion.dropPosition;
  let tmp4 = derivedValue();
  let obj = dragRegion(dropComplete[7]);
  let tmp = dragRegion;
  const isHomeDrawerEnabled = dragRegion(dropComplete[8]).useIsHomeDrawerEnabled();
  let obj2 = dragRegion(dropComplete[8]);
  let fn = function o() {
    value = scrollPosition.get();
    let num = 0;
    if (value < dragRegion.get().min) {
      num = dragRegion.get().min - scrollPosition.get();
    }
    return Math.max(num, listInsets.get().start);
  };
  fn.__closure = { scrollPosition, dragRegion, listInsets };
  fn.__workletHash = 17436881889698;
  fn.__initData = __initData;
  derivedValue = dragRegion(dropComplete[9]).useDerivedValue(fn);
  let obj3 = dragRegion(dropComplete[9]);
  const fn2 = function s() {
    value = scrollPosition.get();
    const sum = value + (windowSize - listInsets.get().end);
    if (sum > dragRegion.get().max) {
      const diff = dragRegion.get().max - draggedHeight;
      let diff1 = diff - scrollPosition.get();
      let tmp4 = draggedHeight;
    } else {
      tmp4 = draggedHeight;
      diff1 = windowSize - listInsets.get().end - draggedHeight;
    }
    return Math.min(diff1, windowSize - listInsets.get().end - tmp4);
  };
  fn2.__closure = { scrollPosition, windowSize, listInsets, dragRegion, draggedHeight };
  fn2.__workletHash = 4371355784;
  fn2.__initData = __initData2;
  const derivedValue1 = dragRegion(dropComplete[9]).useDerivedValue(fn2);
  const obj4 = dragRegion(dropComplete[9]);
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
          tmp11 = closure_9;
          bound = Math.max(diff, closure_8.get());
          bound1 = Math.min(bound, closure_9.get());
        }
        obj = { top: null };
        tmp12 = closure_0;
        tmp13 = closure_2;
        obj2 = closure_0(closure_2[10]);
        tmp14 = closure_10;
        fn = function t(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = null != dropPosition;
          }
          if (tmp) {
            dragRegion(dropComplete[9]).runOnJS(closure_1_2)();
            const obj = dragRegion(dropComplete[9]);
          }
        };
        obj1 = { dropPosition: null, runOnJS: null, dropComplete: null };
        obj1.dropPosition = tmp;
        obj1.runOnJS = closure_0(closure_2[9]).runOnJS;
        tmp15 = dropComplete;
        obj1.dropComplete = dropComplete;
        fn.__closure = obj1;
        num2 = 12640145939434;
        fn.__workletHash = 12640145939434;
        tmp16 = closure_14;
        fn.__initData = closure_14;
        str = "animate-always";
        tmp17 = obj2;
        tmp18 = bound1;
        tmp19 = fn;
        obj.top = obj2.withSpring(bound1, closure_10, "animate-always", fn);
        return obj;
      }
      tmp6 = -draggedHeight;
      bound1 = Math.max(tmp6, Math.min(diff, windowSize));
      return;
    }
  }
  const obj5 = dragRegion(dropComplete[9]);
  S.__closure = { dropPosition, scrollPosition, gestureState, draggedHeight, minY: derivedValue, maxY: derivedValue1, windowSize, withSpring: dragRegion(dropComplete[10]).withSpring, DRAG_SPRING_PHYSICS, runOnJS: dragRegion(dropComplete[9]).runOnJS, dropComplete };
  S.__workletHash = 10861960441588;
  S.__initData = __initData3;
  const animatedStyle = obj5.useAnimatedStyle(S);
  if ("convert-after" === overState) {
    if (null != overNode) {
      if (cResult[0] !== overNode) {
        const element = { type: listInsets.FOLDER, id: -1, parentId: "Reflect", name: "Array", color: "apply", expanded: false, children: false };
        const items = [overNode];
        element.children = items;
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
      if (cResult[4] === dragPreviewHome) {
        let tmp15 = cResult[5];
      }
      if (null != tmp9) {
        draggedNode = tmp9;
      }
      if (cResult[6] !== draggedNode) {
        const obj7 = { renderItem: renderAnimatedItemPreview, items: null, getItemKey: null };
        const items1 = [draggedNode];
        obj7.items = items1;
        obj7.getItemKey = getItemPreviewKey;
        const tmp20 = dropPosition(tmp(dropComplete[11]).TransitionGroup, obj7);
        cResult[6] = draggedNode;
        cResult[7] = tmp20;
        let tmp16 = tmp20;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] === tmp15) {
        if (cResult[9] === tmp16) {
          let tmp21 = cResult[10];
        }
        return tmp21;
      }
      const obj8 = { style: tmp15, nativeID: "guilds-bar-drag-preview", children: tmp16 };
      const tmp24 = dropPosition(draggedHeight(dropComplete[12]), obj8);
      cResult[8] = tmp15;
      cResult[9] = tmp16;
      cResult[10] = tmp24;
      tmp21 = tmp24;
    }
  }
  const items2 = [tmp4.dragPreview, dragPreviewHome, animatedStyle];
  cResult[2] = tmp4.dragPreview;
  cResult[3] = animatedStyle;
  cResult[4] = dragPreviewHome;
  cResult[5] = items2;
  tmp15 = items2;
  const obj6 = { dropPosition, scrollPosition, gestureState, draggedHeight, minY: derivedValue, maxY: derivedValue1, windowSize, withSpring: dragRegion(dropComplete[10]).withSpring, DRAG_SPRING_PHYSICS, runOnJS: dragRegion(dropComplete[9]).runOnJS, dropComplete };
}) : ((dragRegion) => {
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
  const isHomeDrawerEnabled = dragRegion(dropComplete[8]).useIsHomeDrawerEnabled();
  let obj = dragRegion(dropComplete[8]);
  const tmp2 = dragRegion;
  const tmp3 = dropComplete;
  class H {
    constructor() {
      obj = scrollPosition;
      obj2 = dragRegion;
      value = scrollPosition.get();
      num = 0;
      if (value < dragRegion.get().min) {
        num = obj2.get().min - obj.get();
      }
      return Math.max(num, listInsets.get().start);
    }
  }
  H.__closure = { scrollPosition, dragRegion, listInsets };
  H.__workletHash = 6486942624678;
  H.__initData = __initData5;
  derivedValue = dragRegion(dropComplete[9]).useDerivedValue(H);
  let obj2 = dragRegion(dropComplete[9]);
  class E {
    constructor() {
      obj = scrollPosition;
      tmp2 = windowSize;
      obj2 = listInsets;
      value = scrollPosition.get();
      obj3 = dragRegion;
      sum = value + (windowSize - listInsets.get().end);
      if (sum > dragRegion.get().max) {
        tmp6 = draggedHeight;
        diff = obj3.get().max - draggedHeight;
        diff1 = diff - obj.get();
        tmp4 = draggedHeight;
      } else {
        tmp4 = draggedHeight;
        diff1 = tmp2 - obj2.get().end - draggedHeight;
      }
      return Math.min(diff1, tmp2 - obj2.get().end - tmp4);
    }
  }
  E.__closure = { scrollPosition, windowSize, listInsets, dragRegion, draggedHeight };
  E.__workletHash = 6642323167884;
  E.__initData = __initData6;
  derivedValue1 = dragRegion(dropComplete[9]).useDerivedValue(E);
  let obj3 = dragRegion(dropComplete[9]);
  let fn = function y() {
    if (null != dropPosition) {
      let diff = dropPosition - scrollPosition.get();
    } else {
      diff = gestureState.get().absoluteY - draggedHeight / 2;
    }
    if (null != gestureState.get().mode) {
      if (null == dropPosition) {
        const _Math = Math;
        const _Math2 = Math;
        const bound = Math.max(diff, derivedValue.get());
        let bound1 = Math.min(bound, derivedValue1.get());
      }
      let obj = { top: null };
      const obj2 = spring;
      const fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = null != dropPosition;
        }
        if (tmp) {
          dragRegion(dropComplete[9]).runOnJS(closure_1_2)();
          const obj = dragRegion(dropComplete[9]);
        }
      };
      const obj3 = { dropPosition, runOnJS: ReanimatedRexport.runOnJS, dropComplete };
      fn.__closure = obj3;
      fn.__workletHash = 11937132712422;
      fn.__initData = __initData;
      obj.top = obj2.withSpring(bound1, closure_10, "animate-always", fn);
      return obj;
    }
    bound1 = Math.max(-draggedHeight, Math.min(diff, windowSize));
    const tmp6 = -draggedHeight;
  };
  const obj4 = dragRegion(dropComplete[9]);
  fn.__closure = { dropPosition, scrollPosition, gestureState, draggedHeight, minY: derivedValue, maxY: derivedValue1, windowSize, withSpring: dragRegion(dropComplete[10]).withSpring, DRAG_SPRING_PHYSICS: derivedValue, runOnJS: dragRegion(dropComplete[9]).runOnJS, dropComplete };
  fn.__workletHash = 16626431905552;
  fn.__initData = __initData7;
  let items = [overState, overNode];
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const memo = gestureState.useMemo(() => {
    if ("convert-after" === overState) {
      if (null != overNode) {
        const element = { type: GuildsNodeType.FOLDER, id: -1, parentId: "Reflect", name: "Array", color: "apply", expanded: false, children: false };
        const items = [tmp2];
        element.children = items;
        return element;
      }
    }
  }, items);
  const items1 = [tmp.dragPreview, , ];
  let dragPreviewHome = null;
  const obj5 = { dropPosition, scrollPosition, gestureState, draggedHeight, minY: derivedValue, maxY: derivedValue1, windowSize, withSpring: dragRegion(dropComplete[10]).withSpring, DRAG_SPRING_PHYSICS: derivedValue, runOnJS: dragRegion(dropComplete[9]).runOnJS, dropComplete };
  if (isHomeDrawerEnabled) {
    dragPreviewHome = tmp.dragPreviewHome;
  }
  const obj6 = { style: items1, nativeID: "guilds-bar-drag-preview", children: null };
  items1[1] = dragPreviewHome;
  items1[2] = animatedStyle;
  const obj7 = { renderItem: renderAnimatedItemPreview, items: null, getItemKey: null };
  if (null != memo) {
    draggedNode = memo;
  }
  const items2 = [draggedNode];
  obj7.items = items2;
  obj7.getItemKey = getItemPreviewKey;
  obj6.children = scrollPosition(tmp2(tmp3[11]).TransitionGroup, obj7);
  return scrollPosition(draggedHeight(dropComplete[12]), obj6);
});
const __initData8 = { code: "function GuildsBarDragPreviewTsx9(){const{isFolder,visible,withSpring,DRAG_SPRING_PHYSICS,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const targetScale=function(){if(isFolder){return visible.get()===1?1:0.3;}return visible.get()===1?1:0.33;}();const{translateX:translateX,translateY:translateY}=function(){if(isFolder){return{translateX:0,translateY:0};}if(visible.get()===1){return{translateX:0,translateY:0};}return{translateX:10,translateY:-10};}();return{zIndex:isFolder?0:1,transform:[{translateY:withSpring(translateY,DRAG_SPRING_PHYSICS,\"animate-always\")},{translateX:withSpring(translateX,DRAG_SPRING_PHYSICS,\"animate-always\")},{scale:withSpring(targetScale,DRAG_SPRING_PHYSICS,\"animate-always\",function(finished){if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}})}],opacity:withSpring(isFolder?visible.get():1,DRAG_SPRING_PHYSICS,\"animate-always\")};}" };
let closure_23 = { code: "function GuildsBarDragPreviewTsx10(finished){const{transitionState,TransitionStates,isFolder,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}}" };
const __initData9 = { code: "function GuildsBarDragPreviewTsx11(){const{isFolder,visible,withSpring,DRAG_SPRING_PHYSICS,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const targetScale=function(){if(isFolder){return visible.get()===1?1:0.3;}return visible.get()===1?1:0.33;}();const{translateX:translateX,translateY:translateY}=function(){if(isFolder){return{translateX:0,translateY:0};}if(visible.get()===1){return{translateX:0,translateY:0};}return{translateX:10,translateY:-10};}();return{zIndex:isFolder?0:1,transform:[{translateY:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always')},{translateX:withSpring(translateX,DRAG_SPRING_PHYSICS,'animate-always')},{scale:withSpring(targetScale,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}})}],opacity:withSpring(isFolder?visible.get():1,DRAG_SPRING_PHYSICS,'animate-always')};}" };
let closure_25 = { code: "function GuildsBarDragPreviewTsx12(finished){const{transitionState,TransitionStates,isFolder,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}}" };
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((cleanUp) => {
  const cResult = transitionState(sharedValue[7]).c(19);
  ({ node, transitionState } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  const tmp4 = closure_8();
  let obj = transitionState(sharedValue[7]);
  let obj2 = transitionState(sharedValue[13]);
  const tmp6 = closure_9(GUILD_ITEM_INSET_LEFT + transitionState(sharedValue[13]).useToken(cleanUp(sharedValue[14]).modules.mobile.GUILD_BAR_ITEM_SIZE) / 2);
  name = transitionState(sharedValue[8]).useIsHomeDrawerEnabled();
  let obj3 = transitionState(sharedValue[8]);
  let num = 1;
  if (transitionState === transitionState(sharedValue[11]).TransitionStates.ENTERED) {
    num = 0;
  }
  sharedValue = transitionState(sharedValue[9]).useSharedValue(num);
  noop = tmp9;
  if (name) {
    name = !tmp9;
  }
  let obj4 = transitionState(sharedValue[9]);
  let fn = function p() {
    value = sharedValue.get();
    let num = 1;
    if (isFolder) {
      let num3 = 0.3;
      if (num === value) {
        num3 = num;
      }
      let num2 = num3;
      let obj = sharedValue;
    } else {
      num2 = 0.33;
      if (num === value) {
        num2 = num;
      }
      obj = sharedValue;
    }
    if (!isFolder) {
      if (num !== obj.get()) {
        let obj2 = { translateX: 10, translateY: -10 };
      }
      let num4 = num;
      ({ translateX, translateY } = obj2);
      if (isFolder) {
        num4 = 0;
      }
      const obj3 = { zIndex: num4, transform: null, opacity: null };
      const obj4 = { translateY: spring.withSpring(translateY, closure_10, "animate-always") };
      const items = [obj4, , ];
      const obj6 = { translateX: null };
      obj6.translateX = spring.withSpring(translateX, closure_10, "animate-always");
      items[1] = obj6;
      const obj8 = { scale: null };
      const obj9 = spring;
      const fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = closure_1_0 === transitionState(sharedValue[11]).TransitionStates.YEETED;
        }
        if (tmp) {
          tmp = isFolder;
        }
        if (tmp) {
          transitionState(sharedValue[9]).runOnJS(cleanUp)();
          const obj = transitionState(sharedValue[9]);
        }
      };
      const obj10 = { transitionState, TransitionStates: native.TransitionStates, isFolder, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      fn.__closure = obj10;
      fn.__workletHash = 16373676807751;
      fn.__initData = __initData;
      obj8.scale = obj9.withSpring(num2, closure_10, "animate-always", fn);
      items[2] = obj8;
      obj3.transform = items;
      if (isFolder) {
        num = obj.get();
      }
      obj3.opacity = spring.withSpring(num, closure_10, "animate-always");
      return obj3;
    }
    obj2 = { translateX: 0, translateY: 0 };
  };
  const tmpResult = transitionState(sharedValue[9]);
  fn.__closure = { isFolder: node.type === GuildsNodeType.FOLDER, visible: sharedValue, withSpring: transitionState(sharedValue[10]).withSpring, DRAG_SPRING_PHYSICS, transitionState, TransitionStates: transitionState(sharedValue[11]).TransitionStates, runOnJS: transitionState(sharedValue[9]).runOnJS, cleanUp };
  fn.__workletHash = 5690622032937;
  fn.__initData = __initData8;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  if (cResult[0] === transitionState) {
    if (cResult[1] === sharedValue) {
      let tmp11 = cResult[2];
    }
    const effect = noop.useEffect(tmp11);
    let prop = null;
    if (name) {
      prop = tmp6.animatedPreviewStyleHome;
    }
    if (cResult[3] === tmp4.animatedPreviewStyle) {
      if (cResult[4] === animatedStyle) {
        if (cResult[5] === prop) {
          let tmp15 = cResult[6];
        }
        const tmp16 = transitionState === transitionState(tmp2[11]).TransitionStates.YEETED;
        if (cResult[7] === name) {
          if (cResult[8] === tmp16) {
            if (cResult[9] === node.children) {
              if (cResult[10] === node.color) {
                if (cResult[11] === node.expanded) {
                  if (cResult[12] === node.id) {
                    if (cResult[13] === node.name) {
                      if (cResult[14] === node.type) {
                        if (cResult[16] === tmp15) {
                          if (cResult[17] === tmp17) {
                            let tmp24 = cResult[18];
                          }
                          return tmp24;
                        }
                        let obj6 = { style: tmp15, children: cResult[15] };
                        const tmp26 = jsx(tmp5(tmp2[12]), { style: tmp15, children: cResult[15] });
                        cResult[16] = tmp15;
                        cResult[17] = cResult[15];
                        cResult[18] = tmp26;
                        tmp24 = tmp26;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (node.type === GuildsNodeType.FOLDER) {
          let obj7 = { id: null, expanded: null, color: null, name: null, childNodes: null, isDragPreview: true, hideExpandedChildren: null };
          ({ id: obj8.id, expanded: obj8.expanded, color: obj8.color, name: obj8.name, children: obj8.childNodes } = node);
          obj7.hideExpandedChildren = !name;
          let tmp18Result = jsx(tmp5(tmp2[15]), { id: null, expanded: null, color: null, name: null, childNodes: null, isDragPreview: true, hideExpandedChildren: null });
        } else {
          let obj9 = { guildId: node.id, isDragPreview: true, hideExpandedChildren: null };
          let tmp20 = !name;
          if (name) {
            tmp20 = tmp16;
          }
          obj9.hideExpandedChildren = tmp20;
          tmp18Result = jsx(tmp5(tmp2[16]), { guildId: node.id, isDragPreview: true, hideExpandedChildren: null });
          const tmp5Result = tmp5(tmp2[16]);
        }
        cResult[7] = name;
        cResult[8] = tmp16;
        cResult[9] = node.children;
        cResult[10] = node.color;
        cResult[11] = node.expanded;
        ({ id: tmp3[12], name } = node);
        cResult[13] = name;
        node = node.type;
        cResult[14] = node;
        cResult[15] = tmp18Result;
      }
    }
    let items = [tmp4.animatedPreviewStyle, prop, animatedStyle];
    cResult[3] = tmp4.animatedPreviewStyle;
    cResult[4] = animatedStyle;
    cResult[5] = prop;
    cResult[6] = items;
    tmp15 = items;
  }
  const fn2 = function w() {
    let num = 1;
    if (transitionState === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  };
  cResult[0] = transitionState;
  cResult[1] = sharedValue;
  cResult[2] = fn2;
  tmp11 = fn2;
  let obj5 = { isFolder: node.type === GuildsNodeType.FOLDER, visible: sharedValue, withSpring: transitionState(sharedValue[10]).withSpring, DRAG_SPRING_PHYSICS, transitionState, TransitionStates: transitionState(sharedValue[11]).TransitionStates, runOnJS: transitionState(sharedValue[9]).runOnJS, cleanUp };
}) : ((cleanUp) => {
  ({ node, transitionState } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  let sharedValue;
  noop = undefined;
  let tmp = closure_8();
  let obj = transitionState(sharedValue[13]);
  const tmp5 = closure_9(GUILD_ITEM_INSET_LEFT + transitionState(sharedValue[13]).useToken(cleanUp(sharedValue[14]).modules.mobile.GUILD_BAR_ITEM_SIZE) / 2);
  let isHomeDrawerEnabled = transitionState(sharedValue[8]).useIsHomeDrawerEnabled();
  let obj2 = transitionState(sharedValue[8]);
  let num = 1;
  if (transitionState === transitionState(sharedValue[11]).TransitionStates.ENTERED) {
    num = 0;
  }
  sharedValue = transitionState(sharedValue[9]).useSharedValue(num);
  noop = tmp9;
  if (isHomeDrawerEnabled) {
    isHomeDrawerEnabled = !tmp9;
  }
  let obj3 = transitionState(sharedValue[9]);
  let fn = function h() {
    value = sharedValue.get();
    let num = 1;
    if (isFolder) {
      let num3 = 0.3;
      if (num === value) {
        num3 = num;
      }
      let num2 = num3;
      let obj = sharedValue;
    } else {
      num2 = 0.33;
      if (num === value) {
        num2 = num;
      }
      obj = sharedValue;
    }
    if (!isFolder) {
      if (num !== obj.get()) {
        let obj2 = { translateX: 10, translateY: -10 };
      }
      let num4 = num;
      ({ translateX, translateY } = obj2);
      if (isFolder) {
        num4 = 0;
      }
      const obj3 = { zIndex: num4, transform: null, opacity: null };
      const obj4 = { translateY: spring.withSpring(translateY, closure_10, "animate-always") };
      const items = [obj4, , ];
      const obj6 = { translateX: null };
      obj6.translateX = spring.withSpring(translateX, closure_10, "animate-always");
      items[1] = obj6;
      const obj8 = { scale: null };
      const obj9 = spring;
      const fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = closure_1_0 === transitionState(sharedValue[11]).TransitionStates.YEETED;
        }
        if (tmp) {
          tmp = isFolder;
        }
        if (tmp) {
          transitionState(sharedValue[9]).runOnJS(cleanUp)();
          const obj = transitionState(sharedValue[9]);
        }
      };
      const obj10 = { transitionState, TransitionStates: native.TransitionStates, isFolder, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      fn.__closure = obj10;
      fn.__workletHash = 11395470501253;
      fn.__initData = __initData;
      obj8.scale = obj9.withSpring(num2, closure_10, "animate-always", fn);
      items[2] = obj8;
      obj3.transform = items;
      if (isFolder) {
        num = obj.get();
      }
      obj3.opacity = spring.withSpring(num, closure_10, "animate-always");
      return obj3;
    }
    obj2 = { translateX: 0, translateY: 0 };
  };
  const tmp2Result = transitionState(sharedValue[9]);
  fn.__closure = { isFolder: node.type === GuildsNodeType.FOLDER, visible: sharedValue, withSpring: transitionState(sharedValue[10]).withSpring, DRAG_SPRING_PHYSICS, transitionState, TransitionStates: transitionState(sharedValue[11]).TransitionStates, runOnJS: transitionState(sharedValue[9]).runOnJS, cleanUp };
  fn.__workletHash = 15327303510768;
  fn.__initData = __initData9;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    let num = 1;
    if (transitionState === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  });
  let items = [tmp.animatedPreviewStyle, , ];
  let prop = null;
  let obj4 = { isFolder: node.type === GuildsNodeType.FOLDER, visible: sharedValue, withSpring: transitionState(sharedValue[10]).withSpring, DRAG_SPRING_PHYSICS, transitionState, TransitionStates: transitionState(sharedValue[11]).TransitionStates, runOnJS: transitionState(sharedValue[9]).runOnJS, cleanUp };
  if (isHomeDrawerEnabled) {
    prop = tmp5.animatedPreviewStyleHome;
  }
  let obj5 = { style: items, children: null };
  items[1] = prop;
  items[2] = animatedStyle;
  if (node.type === GuildsNodeType.FOLDER) {
    let obj6 = { id: null, expanded: null, color: null, name: null, childNodes: null, isDragPreview: true, hideExpandedChildren: null };
    ({ id: obj8.id, expanded: obj8.expanded, color: obj8.color, name: obj8.name, children: obj8.childNodes } = node);
    obj6.hideExpandedChildren = !isHomeDrawerEnabled;
    let tmp12Result = jsx(tmp4(tmp3[15]), { id: null, expanded: null, color: null, name: null, childNodes: null, isDragPreview: true, hideExpandedChildren: null });
  } else {
    let obj7 = { guildId: node.id, isDragPreview: true, hideExpandedChildren: null };
    let tmp16 = !isHomeDrawerEnabled;
    if (isHomeDrawerEnabled) {
      tmp16 = transitionState === transitionState(tmp3[11]).TransitionStates.YEETED;
    }
    obj7.hideExpandedChildren = tmp16;
    tmp12Result = jsx(tmp4(tmp3[16]), { guildId: node.id, isDragPreview: true, hideExpandedChildren: null });
    const tmp4Result2 = tmp4(tmp3[16]);
  }
  obj5.children = tmp12Result;
  return jsx(cleanUp(sharedValue[12]), { style: items, children: null });
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarDragPreview.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      ({ dragSpecs, overSpecs, gestureState, scrollPosition, dragRegion, windowSize, dropComplete, listInsets, dropSpecs } = arg0);
      if (null != dropSpecs) {
        const overState = dropSpecs.overState;
        const obj3 = { draggedNode: null, draggedHeight: null, overState: null, overNode: null, dropPosition: null, gestureState: null, scrollPosition: null, dragRegion: null, windowSize: null, dropComplete: null, listInsets: null };
        ({ dragNode: obj2.draggedNode, itemSize: obj2.draggedHeight } = dropSpecs);
        obj3.overState = overState;
        let overNode;
        if (overState.startsWith("convert")) {
          overNode = dropSpecs.overNode;
        }
        obj3.overNode = overNode;
        obj3.dropPosition = dropSpecs.dropPosition;
        obj3.gestureState = gestureState;
        obj3.scrollPosition = scrollPosition;
        obj3.dragRegion = dragRegion;
        obj3.windowSize = windowSize;
        obj3.dropComplete = dropComplete;
        obj3.listInsets = listInsets;
        return obj3;
      } else {
        if (null != dragSpecs) {
          if (null != overSpecs) {
            state = overSpecs.state;
            const obj = { draggedNode: null, draggedHeight: null, overState: null, overNode: null, dropPosition: "o", gestureState: "alle sekunti", scrollPosition: "alle {{count}} sekuntia", dragRegion: null, windowSize: "\u{1F6B4}", dropComplete: true, listInsets: 6 };
            ({ node: obj.draggedNode, itemSize: obj.draggedHeight } = dragSpecs);
            obj.overState = state;
            let node;
            if (state.startsWith("convert")) {
              node = overSpecs.node;
            }
            obj.overNode = node;
            obj.gestureState = gestureState;
            obj.scrollPosition = scrollPosition;
            obj.dragRegion = dragRegion;
            obj.windowSize = windowSize;
            obj.dropComplete = dropComplete;
            obj.listInsets = listInsets;
            return obj;
          }
        }
        return null;
      }
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = GuildsBarDnDStore(first, _mod4498.shallow);
  if (cResult[1] !== tmp5) {
    let tmp7 = null;
    if (null != tmp5) {
      const obj2 = {};
      const merged = Object.assign(tmp5);
      tmp7 = <closure_19 />;
    }
    cResult[1] = tmp5;
    cResult[2] = tmp7;
    let tmp6 = tmp7;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : (() => {
  const tmp = GuildsBarDnDStore((arg0) => {
    ({ dragSpecs, overSpecs, gestureState, scrollPosition, dragRegion, windowSize, dropComplete, listInsets, dropSpecs } = arg0);
    if (null != dropSpecs) {
      const overState = dropSpecs.overState;
      const obj3 = { draggedNode: null, draggedHeight: null, overState: null, overNode: null, dropPosition: null, gestureState: null, scrollPosition: null, dragRegion: null, windowSize: null, dropComplete: null, listInsets: null };
      ({ dragNode: obj2.draggedNode, itemSize: obj2.draggedHeight } = dropSpecs);
      obj3.overState = overState;
      let overNode;
      if (overState.startsWith("convert")) {
        overNode = dropSpecs.overNode;
      }
      obj3.overNode = overNode;
      obj3.dropPosition = dropSpecs.dropPosition;
      obj3.gestureState = gestureState;
      obj3.scrollPosition = scrollPosition;
      obj3.dragRegion = dragRegion;
      obj3.windowSize = windowSize;
      obj3.dropComplete = dropComplete;
      obj3.listInsets = listInsets;
      return obj3;
    } else {
      if (null != dragSpecs) {
        if (null != overSpecs) {
          state = overSpecs.state;
          const obj = { draggedNode: null, draggedHeight: null, overState: null, overNode: null, dropPosition: "o", gestureState: "alle sekunti", scrollPosition: "alle {{count}} sekuntia", dragRegion: null, windowSize: "\u{1F6B4}", dropComplete: true, listInsets: 6 };
          ({ node: obj.draggedNode, itemSize: obj.draggedHeight } = dragSpecs);
          obj.overState = state;
          let node;
          if (state.startsWith("convert")) {
            node = overSpecs.node;
          }
          obj.overNode = node;
          obj.gestureState = gestureState;
          obj.scrollPosition = scrollPosition;
          obj.dragRegion = dragRegion;
          obj.windowSize = windowSize;
          obj.dropComplete = dropComplete;
          obj.listInsets = listInsets;
          return obj;
        }
      }
      return null;
    }
  }, _mod4498.shallow);
  let tmp2 = null;
  if (null != tmp) {
    let obj = {};
    const merged = Object.assign(tmp);
    tmp2 = <closure_19 />;
  }
  return tmp2;
}));