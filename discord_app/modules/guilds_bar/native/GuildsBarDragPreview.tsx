// discord_app/modules/guilds_bar/native/GuildsBarDragPreview.tsx
import _mod4184 from "../../../../_runtime/metro/04184__.js";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildsBarDnDStore from "GuildsBarDnDStore.tsx";

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
  let obj1 = dragRegion(dropComplete[7]);
  let fn = function x() {
    value = scrollPosition.get();
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
  E.__initData = __initData;
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
        tmp12 = closure_0;
        tmp13 = closure_2;
        obj2 = closure_0(closure_2[8]);
        tmp14 = closure_10;
        fn = function t(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = null != dropPosition;
          }
          if (tmp) {
            dragRegion(dropComplete[7]).runOnJS(closure_1_2)();
            const obj = dragRegion(dropComplete[7]);
          }
        };
        obj = { dropPosition: null, runOnJS: null, dropComplete: null };
        obj.dropPosition = tmp;
        obj.runOnJS = closure_0(closure_2[7]).runOnJS;
        tmp15 = dropComplete;
        obj.dropComplete = dropComplete;
        fn.__closure = obj;
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
  obj = {
    dropPosition,
    scrollPosition,
    gestureState,
    draggedHeight,
    minY: derivedValue,
    maxY: derivedValue1,
    windowSize,
    withSpring: dragRegion(dropComplete[8]).withSpring,
    DRAG_SPRING_PHYSICS: derivedValue,
    runOnJS: dragRegion(dropComplete[7]).runOnJS,
    dropComplete,
  };
  T.__closure = obj;
  T.__workletHash = 5676492640532;
  T.__initData = __initData2;
  let items = [overState, overNode];
  const animatedStyle = dragRegion(dropComplete[7]).useAnimatedStyle(T);
  const memo = gestureState.useMemo(() => {
    if ("convert-after" === overState) {
      if (null != overNode) {
        const element = {
          type: GuildsNodeType.FOLDER,
          id: -1,
          parentId: "PX_16",
          name: "Array",
          color: "displayName",
          expanded: false,
          children: false,
        };
        const items = [tmp2];
        element.children = items;
        return element;
      }
    }
  }, items);
  const items1 = [tmp.dragPreview, ,];
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
  obj1.items = items2;
  obj1.getItemKey = getItemPreviewKey;
  obj.children = scrollPosition(tmp2(tmp3[10]).TransitionGroup, obj1);
  return scrollPosition(draggedHeight(dropComplete[9]), obj);
}
function getItemPreviewKey(id) {
  return "" + id.id;
}
function renderAnimatedItemPreview(key, node, transitionState, cleanUp) {
  return <AnimatedItemPreview key={key} node={node} transitionState={transitionState} cleanUp={cleanUp} />;
}
function AnimatedItemPreview(cleanUp) {
  ({ node, transitionState } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  let sharedValue;
  noop = undefined;
  let obj = transitionState(sharedValue[11]);
  let tmp = closure_8();
  let obj1 = transitionState(sharedValue[6]);
  let isHomeDrawerEnabled = obj1.useIsHomeDrawerEnabled();
  let obj2 = transitionState(sharedValue[7]);
  let num = 1;
  if (transitionState === transitionState(sharedValue[10]).TransitionStates.ENTERED) {
    num = 0;
  }
  sharedValue = obj2.useSharedValue(num);
  noop = tmp9;
  if (isHomeDrawerEnabled) {
    isHomeDrawerEnabled = !tmp9;
  }
  const tmp5 = closure_9(
    GUILD_ITEM_INSET_LEFT + obj.useToken(cleanUp(sharedValue[12]).modules.mobile.GUILD_BAR_ITEM_SIZE) / 2,
  );
  let fn = function _() {
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
        obj = { translateX: 10, translateY: -10 };
      }
      let num4 = num;
      ({ translateX, translateY } = obj);
      if (isFolder) {
        num4 = 0;
      }
      obj = { zIndex: num4, transform: null, opacity: null };
      const obj1 = { translateY: null };
      let obj4 = spring;
      obj1.translateY = obj4.withSpring(translateY, closure_10, "animate-always");
      const items = [obj1, ,];
      const obj2 = { translateX: spring.withSpring(translateX, closure_10, "animate-always") };
      items[1] = obj2;
      const obj3 = { scale: null };
      const obj9 = spring;
      const fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = closure_1_0 === transitionState(sharedValue[10]).TransitionStates.YEETED;
        }
        if (tmp) {
          tmp = isFolder;
        }
        if (tmp) {
          transitionState(sharedValue[7]).runOnJS(cleanUp)();
          const obj = transitionState(sharedValue[7]);
        }
      };
      obj4 = {
        transitionState,
        TransitionStates: native.TransitionStates,
        isFolder,
        runOnJS: ReanimatedRexport.runOnJS,
        cleanUp,
      };
      fn.__closure = obj4;
      fn.__workletHash = 9409925192880;
      fn.__initData = __initData;
      obj3.scale = obj9.withSpring(num2, closure_10, "animate-always", fn);
      items[2] = obj3;
      obj.transform = items;
      if (isFolder) {
        num = obj.get();
      }
      obj.opacity = spring.withSpring(num, closure_10, "animate-always");
      return obj;
    }
    obj = { translateX: 0, translateY: 0 };
  };
  obj = {
    isFolder: tmp9,
    visible: sharedValue,
    withSpring: transitionState(tmp3[8]).withSpring,
    DRAG_SPRING_PHYSICS,
    transitionState,
    TransitionStates: transitionState(tmp3[10]).TransitionStates,
    runOnJS: transitionState(tmp3[7]).runOnJS,
    cleanUp,
  };
  fn.__closure = obj;
  fn.__workletHash = 13465198693221;
  fn.__initData = __initData4;
  const animatedStyle = transitionState(sharedValue[7]).useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    let num = 1;
    if (transitionState === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  });
  let items = [tmp.animatedPreviewStyle, ,];
  let prop = null;
  let tmp4Result = tmp4(tmp3[9]);
  if (isHomeDrawerEnabled) {
    prop = tmp5.animatedPreviewStyleHome;
  }
  obj = { style: items, children: null };
  items[1] = prop;
  items[2] = animatedStyle;
  if (node.type === GuildsNodeType.FOLDER) {
    obj1 = {
      id: null,
      expanded: null,
      color: null,
      name: null,
      childNodes: null,
      isDragPreview: true,
      hideExpandedChildren: null,
    };
    ({ id: obj8.id, expanded: obj8.expanded, color: obj8.color, name: obj8.name, children: obj8.childNodes } = node);
    obj1.hideExpandedChildren = !isHomeDrawerEnabled;
    let tmp12Result = jsx(tmp4(tmp3[13]), {
      id: null,
      expanded: null,
      color: null,
      name: null,
      childNodes: null,
      isDragPreview: true,
      hideExpandedChildren: null,
    });
  } else {
    obj2 = { guildId: node.id, isDragPreview: true, hideExpandedChildren: null };
    let tmp16 = !isHomeDrawerEnabled;
    tmp4Result = tmp4(tmp3[14]);
    if (isHomeDrawerEnabled) {
      tmp16 = transitionState === transitionState(tmp3[10]).TransitionStates.YEETED;
    }
    obj2.hideExpandedChildren = tmp16;
    tmp12Result = <tmp4Result guildId={node.id} isDragPreview hideExpandedChildren={null} />;
  }
  obj.children = tmp12Result;
  return <tmp4Result style={items}>{null}</tmp4Result>;
}
const GuildsNodeType = fn(5438).GuildsNodeType;
const GUILD_ITEM_INSET_LEFT = fn(16285).GUILD_ITEM_INSET_LEFT;
const jsx = fn(21).jsx;
let createStyles = fn(4560);
let closure_8 = createStyles.createStyles({
  dragPreview: { position: "absolute", left: 0 },
  animatedPreviewStyle: { position: "absolute" },
  dragPreviewHome: { right: 0 },
});
createStyles = fn(4560);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { animatedPreviewStyleHome: null };
  const rect = { left: 0, right: 0, transformOrigin: null };
  const items = [arg0, "50%", 0];
  rect.transformOrigin = items;
  obj.animatedPreviewStyleHome = rect;
  return obj;
});
const DRAG_SPRING_PHYSICS = { mass: 0.5, damping: 80, stiffness: 320 };
let closure_11 = {
  code: "function GuildsBarDragPreviewTsx1(){const{scrollPosition,dragRegion,listInsets}=this.__closure;return Math.max(scrollPosition.get()<dragRegion.get().min?dragRegion.get().min-scrollPosition.get():0,listInsets.get().start);}",
};
const __initData = {
  code: "function GuildsBarDragPreviewTsx2(){const{scrollPosition,windowSize,listInsets,dragRegion,draggedHeight}=this.__closure;return Math.min(scrollPosition.get()+(windowSize-listInsets.get().end)>dragRegion.get().max?dragRegion.get().max-draggedHeight-scrollPosition.get():windowSize-listInsets.get().end-draggedHeight,windowSize-listInsets.get().end-draggedHeight);}",
};
const __initData2 = {
  code: "function GuildsBarDragPreviewTsx3(){const{dropPosition,scrollPosition,gestureState,draggedHeight,minY,maxY,windowSize,withSpring,DRAG_SPRING_PHYSICS,runOnJS,dropComplete}=this.__closure;let translateY=function(){if(dropPosition!=null){return dropPosition-scrollPosition.get();}return gestureState.get().absoluteY-draggedHeight/2;}();if(gestureState.get().mode!=null&&dropPosition==null){translateY=Math.min(Math.max(translateY,minY.get()),maxY.get());}else{translateY=Math.max(-draggedHeight,Math.min(translateY,windowSize));}return{top:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&dropPosition!=null){runOnJS(dropComplete)();}})};}",
};
const __initData3 = {
  code: "function GuildsBarDragPreviewTsx4(finished){const{dropPosition,runOnJS,dropComplete}=this.__closure;if(finished&&dropPosition!=null){runOnJS(dropComplete)();}}",
};
const __initData4 = {
  code: "function GuildsBarDragPreviewTsx5(){const{isFolder,visible,withSpring,DRAG_SPRING_PHYSICS,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const targetScale=function(){if(isFolder){return visible.get()===1?1:0.3;}return visible.get()===1?1:0.33;}();const{translateX:translateX,translateY:translateY}=function(){if(isFolder){return{translateX:0,translateY:0};}if(visible.get()===1){return{translateX:0,translateY:0};}return{translateX:10,translateY:-10};}();return{zIndex:isFolder?0:1,transform:[{translateY:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always')},{translateX:withSpring(translateX,DRAG_SPRING_PHYSICS,'animate-always')},{scale:withSpring(targetScale,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}})}],opacity:withSpring(isFolder?visible.get():1,DRAG_SPRING_PHYSICS,'animate-always')};}",
};
let closure_19 = {
  code: "function GuildsBarDragPreviewTsx6(finished){const{transitionState,TransitionStates,isFolder,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarDragPreview.tsx");

export default noop.memo(function GuildsBarDragPreview() {
  const tmp = GuildsBarDnDStore((arg0) => {
    ({
      dragSpecs,
      overSpecs,
      gestureState,
      scrollPosition,
      dragRegion,
      windowSize,
      dropComplete,
      listInsets,
      dropSpecs,
    } = arg0);
    if (null != dropSpecs) {
      const overState = dropSpecs.overState;
      let obj = {
        draggedNode: null,
        draggedHeight: null,
        overState: null,
        overNode: null,
        dropPosition: null,
        gestureState: null,
        scrollPosition: null,
        dragRegion: null,
        windowSize: null,
        dropComplete: null,
        listInsets: null,
      };
      ({ dragNode: obj2.draggedNode, itemSize: obj2.draggedHeight } = dropSpecs);
      obj.overState = overState;
      let overNode;
      if (overState.startsWith("convert")) {
        overNode = dropSpecs.overNode;
      }
      obj.overNode = overNode;
      obj.dropPosition = dropSpecs.dropPosition;
      obj.gestureState = gestureState;
      obj.scrollPosition = scrollPosition;
      obj.dragRegion = dragRegion;
      obj.windowSize = windowSize;
      obj.dropComplete = dropComplete;
      obj.listInsets = listInsets;
      return obj;
    } else {
      if (null != dragSpecs) {
        if (null != overSpecs) {
          const state = overSpecs.state;
          obj = {
            draggedNode: null,
            draggedHeight: null,
            overState: null,
            overNode: null,
            dropPosition: "o",
            gestureState: "LongPressCommandMention",
            scrollPosition: null,
            dragRegion: true,
            windowSize: "button",
            dropComplete: null,
            listInsets: null,
          };
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
  }, _mod4184.shallow);
  let tmp2 = null;
  if (null != tmp) {
    let obj = {};
    const merged = Object.assign(tmp);
    tmp2 = <PreviewItem />;
  }
  return tmp2;
});
