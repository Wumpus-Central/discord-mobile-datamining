// discord_app/modules/guilds_bar/native/GuildsBarDragPreview.tsx
import isIterable from "../../../../_runtime/04006_isIterable.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { GuildsNodeType } from "../../../stores/SortedGuildStore.tsx";
import withEqualityFn from "GuildsBarDnDStore.tsx";
import { GUILD_ITEM_INSET_LEFT } from "GuildsBarConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = fn;
function PreviewItem(dragRegion) {
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
  let derivedValue1;
  let tmp = windowSize();
  let obj = dragRegion(dropComplete[6]);
  const isHomeDrawerEnabled = obj.useIsHomeDrawerEnabled();
  obj1 = dragRegion(dropComplete[7]);
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
  fn.__initData = derivedValue1;
  const derivedValue = obj1.useDerivedValue(fn);
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
  E.__workletHash = 4371355784;
  E.__initData = closure_12;
  derivedValue1 = dragRegion(dropComplete[7]).useDerivedValue(E);
  const obj3 = dragRegion(dropComplete[7]);
  const tmp2 = dragRegion;
  const tmp3 = dropComplete;
  class T {
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
          tmp9 = closure_10;
          tmp11 = closure_11;
          bound = Math.max(diff, closure_10.get());
          bound1 = Math.min(bound, closure_11.get());
        }
        obj = { top: null };
        tmp12 = dragRegion;
        tmp13 = dropComplete;
        obj2 = dragRegion(dropComplete[8]);
        tmp14 = closure_10;
        fn = function t(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = null != closure_9;
          }
          if (tmp) {
            dragRegion(dropComplete[7]).runOnJS(closure_2)();
            const obj = dragRegion(dropComplete[7]);
          }
        };
        obj = { dropPosition: null, runOnJS: null, dropComplete: null };
        obj[0] = tmp;
        obj[1] = dragRegion(dropComplete[7]).runOnJS;
        tmp15 = dropComplete;
        obj[2] = dropComplete;
        fn.__closure = obj;
        num2 = 12640145939434;
        fn.__workletHash = 12640145939434;
        tmp16 = closure_1_14;
        fn.__initData = closure_1_14;
        str = "animate-always";
        tmp17 = obj2;
        tmp18 = bound1;
        tmp19 = fn;
        obj[0] = obj2.withSpring(bound1, closure_10, "animate-always", fn);
        return obj;
      }
      tmp6 = -draggedHeight;
      bound1 = Math.max(tmp6, Math.min(diff, windowSize));
      return;
    }
  }
  obj = { dropPosition, scrollPosition, gestureState, draggedHeight, minY: derivedValue, maxY: derivedValue1, windowSize, withSpring: dragRegion(dropComplete[8]).withSpring, DRAG_SPRING_PHYSICS: derivedValue, runOnJS: dragRegion(dropComplete[7]).runOnJS, dropComplete };
  T.__closure = obj;
  T.__workletHash = 5676492640532;
  T.__initData = closure_13;
  let items = [overState, overNode];
  const animatedStyle = dragRegion(dropComplete[7]).useAnimatedStyle(T);
  const memo = gestureState.useMemo(() => {
    if ("convert-after" === overState) {
      if (null != overNode) {
        const obj = { type: null, id: -1, parentId: "ct", name: "Array", color: "call", expanded: false, children: false };
        obj[0] = listInsets.FOLDER;
        const items = [tmp2];
        obj[6] = items;
        return obj;
      }
    }
  }, items);
  const items1 = [tmp.dragPreview, , ];
  let dragPreviewHome = null;
  const obj4 = dragRegion(dropComplete[7]);
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
  obj[2] = scrollPosition(tmp2(tmp3[10]).TransitionGroup, obj1);
  return scrollPosition(draggedHeight(dropComplete[9]), obj);
}
function getItemPreviewKey(id) {
  return "" + id.id;
}
function renderAnimatedItemPreview(arg0, node, transitionState, cleanUp) {
  return <AnimatedItemPreview key={arg0} node={node} transitionState={transitionState} cleanUp={cleanUp} />;
}
function AnimatedItemPreview(cleanUp) {
  ({ node, transitionState } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  let sharedValue;
  importAllResult = undefined;
  let obj = transitionState(sharedValue[11]);
  let tmp = callback2();
  obj1 = transitionState(sharedValue[6]);
  let isHomeDrawerEnabled = obj1.useIsHomeDrawerEnabled();
  let obj2 = transitionState(sharedValue[7]);
  let num = 1;
  if (transitionState === transitionState(sharedValue[10]).TransitionStates.ENTERED) {
    num = 0;
  }
  sharedValue = obj2.useSharedValue(num);
  importAllResult = tmp9;
  if (isHomeDrawerEnabled) {
    isHomeDrawerEnabled = !tmp9;
  }
  const tmp5 = callback3(GUILD_ITEM_INSET_LEFT + obj.useToken(cleanUp(sharedValue[12]).modules.mobile.GUILD_BAR_ITEM_SIZE) / 2);
  let fn = function _() {
    const value = sharedValue.get();
    let num = 1;
    if (closure_3) {
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
    if (!closure_3) {
      if (num !== obj.get()) {
        obj = { translateX: 10, translateY: -10 };
      }
      let num4 = num;
      ({ translateX, translateY } = obj);
      if (closure_3) {
        num4 = 0;
      }
      obj = { zIndex: null, transform: null, opacity: null };
      obj[0] = num4;
      obj1 = { translateY: null };
      let obj4 = transitionState(sharedValue[8]);
      obj1[0] = obj4.withSpring(translateY, closure_1_10, "animate-always");
      const items = [obj1, , ];
      const obj2 = { translateX: null };
      obj2[0] = transitionState(sharedValue[8]).withSpring(translateX, closure_1_10, "animate-always");
      items[1] = obj2;
      const obj3 = { scale: null };
      const obj9 = transitionState(sharedValue[8]);
      const fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = closure_0 === transitionState(sharedValue[10]).TransitionStates.YEETED;
        }
        if (tmp) {
          tmp = closure_3;
        }
        if (tmp) {
          transitionState(sharedValue[7]).runOnJS(closure_1)();
          const obj = transitionState(sharedValue[7]);
        }
      };
      obj4 = { transitionState: null, TransitionStates: null, isFolder: null, runOnJS: null, cleanUp: null };
      obj4[0] = transitionState;
      obj4[1] = transitionState(sharedValue[10]).TransitionStates;
      obj4[2] = closure_3;
      obj4[3] = transitionState(sharedValue[7]).runOnJS;
      obj4[4] = cleanUp;
      fn.__closure = obj4;
      fn.__workletHash = 9409925192880;
      fn.__initData = closure_1_19;
      obj3[0] = obj9.withSpring(num2, closure_1_10, "animate-always", fn);
      items[2] = obj3;
      obj[1] = items;
      const obj7 = transitionState(sharedValue[8]);
      if (closure_3) {
        num = obj.get();
      }
      obj[2] = transitionState(sharedValue[8]).withSpring(num, closure_1_10, "animate-always");
      return obj;
    }
    obj = { translateX: 0, translateY: 0 };
  };
  obj = { isFolder: tmp9, visible: sharedValue, withSpring: transitionState(tmp3[8]).withSpring, DRAG_SPRING_PHYSICS: closure_10, transitionState, TransitionStates: transitionState(tmp3[10]).TransitionStates, runOnJS: transitionState(tmp3[7]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 13465198693221;
  fn.__initData = closure_18;
  const animatedStyle = transitionState(sharedValue[7]).useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    let num = 1;
    if (transitionState === transitionState(sharedValue[10]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  });
  let items = [tmp.animatedPreviewStyle, , ];
  let prop = null;
  let tmp4Result = tmp4(tmp3[9]);
  if (isHomeDrawerEnabled) {
    prop = tmp5.animatedPreviewStyleHome;
  }
  obj = { style: items, children: null };
  items[1] = prop;
  items[2] = animatedStyle;
  if (node.type === GuildsNodeType.FOLDER) {
    obj1 = { id: null, expanded: null, color: null, name: null, childNodes: null, isDragPreview: true, hideExpandedChildren: null };
    ({ id: obj8[0], expanded: obj8[1], color: obj8[2], name: obj8[3], children: obj8[4] } = node);
    obj1[6] = !isHomeDrawerEnabled;
    let tmp12Result = jsx(tmp4(tmp3[13]), { id: null, expanded: null, color: null, name: null, childNodes: null, isDragPreview: true, hideExpandedChildren: null });
  } else {
    obj2 = { guildId: null, isDragPreview: true, hideExpandedChildren: null };
    obj2[0] = node.id;
    let tmp16 = !isHomeDrawerEnabled;
    tmp4Result = tmp4(tmp3[14]);
    if (isHomeDrawerEnabled) {
      tmp16 = transitionState === transitionState(tmp3[10]).TransitionStates.YEETED;
    }
    obj2[2] = tmp16;
    tmp12Result = <tmp4Result guildId={null} isDragPreview hideExpandedChildren={null} />;
  }
  obj[1] = tmp12Result;
  return <tmp4Result style={items}>{null}</tmp4Result>;
}
let c3 = importAllResult;
let closure_8 = createCacheKey.createStyles({ dragPreview: { position: "absolute", left: 0 }, animatedPreviewStyle: { position: "absolute" }, dragPreviewHome: { right: 0 } });
let closure_9 = createCacheKey.createStyles((arg0) => {
  const transformOrigin = [arg0, "50%", 0];
  return { animatedPreviewStyleHome: { left: 0, right: 0, transformOrigin } };
});
let closure_10 = { mass: 0.5, damping: 80, stiffness: 320 };
let closure_11 = { code: "function GuildsBarDragPreviewTsx1(){const{scrollPosition,dragRegion,listInsets}=this.__closure;return Math.max(scrollPosition.get()<dragRegion.get().min?dragRegion.get().min-scrollPosition.get():0,listInsets.get().start);}" };
let closure_12 = { code: "function GuildsBarDragPreviewTsx2(){const{scrollPosition,windowSize,listInsets,dragRegion,draggedHeight}=this.__closure;return Math.min(scrollPosition.get()+(windowSize-listInsets.get().end)>dragRegion.get().max?dragRegion.get().max-draggedHeight-scrollPosition.get():windowSize-listInsets.get().end-draggedHeight,windowSize-listInsets.get().end-draggedHeight);}" };
let closure_13 = { code: "function GuildsBarDragPreviewTsx3(){const{dropPosition,scrollPosition,gestureState,draggedHeight,minY,maxY,windowSize,withSpring,DRAG_SPRING_PHYSICS,runOnJS,dropComplete}=this.__closure;let translateY=function(){if(dropPosition!=null){return dropPosition-scrollPosition.get();}return gestureState.get().absoluteY-draggedHeight/2;}();if(gestureState.get().mode!=null&&dropPosition==null){translateY=Math.min(Math.max(translateY,minY.get()),maxY.get());}else{translateY=Math.max(-draggedHeight,Math.min(translateY,windowSize));}return{top:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&dropPosition!=null){runOnJS(dropComplete)();}})};}" };
let closure_14 = { code: "function GuildsBarDragPreviewTsx4(finished){const{dropPosition,runOnJS,dropComplete}=this.__closure;if(finished&&dropPosition!=null){runOnJS(dropComplete)();}}" };
let closure_18 = { code: "function GuildsBarDragPreviewTsx5(){const{isFolder,visible,withSpring,DRAG_SPRING_PHYSICS,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const targetScale=function(){if(isFolder){return visible.get()===1?1:0.3;}return visible.get()===1?1:0.33;}();const{translateX:translateX,translateY:translateY}=function(){if(isFolder){return{translateX:0,translateY:0};}if(visible.get()===1){return{translateX:0,translateY:0};}return{translateX:10,translateY:-10};}();return{zIndex:isFolder?0:1,transform:[{translateY:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always')},{translateX:withSpring(translateX,DRAG_SPRING_PHYSICS,'animate-always')},{scale:withSpring(targetScale,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}})}],opacity:withSpring(isFolder?visible.get():1,DRAG_SPRING_PHYSICS,'animate-always')};}" };
let closure_19 = { code: "function GuildsBarDragPreviewTsx6(finished){const{transitionState,TransitionStates,isFolder,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}}" };
const memoResult = importAllResult.memo(function GuildsBarDragPreview() {
  const tmp = callback((arg0) => {
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
          obj = { draggedNode: null, draggedHeight: null, overState: null, overNode: null, dropPosition: "o", gestureState: "documentElement", scrollPosition: null, dragRegion: "es", windowSize: null, dropComplete: null, listInsets: null };
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
    const merged = Object.assign(tmp);
    tmp2 = <PreviewItem />;
  }
  return tmp2;
});
let result = require("obj132").fileFinishedImporting("modules/guilds_bar/native/GuildsBarDragPreview.tsx");

export default memoResult;