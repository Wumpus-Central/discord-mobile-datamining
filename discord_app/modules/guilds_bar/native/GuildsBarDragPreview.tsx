// === Module 18586: GuildsBarDragPreview ===

// Module 18586 (GuildsBarDragPreview)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import _mod5056 from "module_5056" /* 5056 */;
import native from "native" /* 5207 */;
import noop from "module_19" /* 19 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 18506 */;

require = fn;
function PreviewItem(overState) {
  ({ dragRegion, draggedHeight, draggedNode, listInsets, overNode } = overState);
  _require = overNode;
  overState = overState.overState;
  ({ scrollPosition, windowSize } = overState);
  ({ dropComplete, gestureState, dropPosition } = overState);
  let tmp = c8();
  const isHomeDrawerEnabled = require("useHomeDrawerGesture").useIsHomeDrawerEnabled();
  let obj = require("useHomeDrawerGesture");
  items = [c11, scrollPosition, dragRegion, listInsets];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp5, tmp6, tmp7, tmp8] = items;
  class GuildsBarDragPreviewTsx1 {
    constructor() {
      obj = closure_0;
      obj2 = closure_1;
      value = closure_0.get();
      num = 0;
      if (value < closure_1.get().min) {
        num = obj2.get().min - obj.get();
      }
      return Math.max(num, closure_2.get().start);
    }
  }
  let items1 = [tmp6, tmp7, tmp8];
  GuildsBarDragPreviewTsx1.__closure = items1;
  GuildsBarDragPreviewTsx1.__workletHash = 1882650321947;
  GuildsBarDragPreviewTsx1.__initData = tmp5;
  const derivedValue = require("module_1652").useDerivedValue(GuildsBarDragPreviewTsx1);
  const obj2 = require("module_1652");
  const items2 = [closure_12, scrollPosition, windowSize, listInsets, dragRegion, draggedHeight];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  class GuildsBarDragPreviewTsx2 {
    constructor() {
      obj = closure_0;
      tmp2 = closure_1;
      obj2 = closure_2;
      value = closure_0.get();
      obj3 = closure_3;
      sum = value + (closure_1 - closure_2.get().end);
      if (sum > closure_3.get().max) {
        tmp6 = closure_4;
        diff = obj3.get().max - closure_4;
        diff1 = diff - obj.get();
        tmp4 = closure_4;
      } else {
        tmp4 = closure_4;
        diff1 = tmp2 - obj2.get().end - closure_4;
      }
      return Math.min(diff1, tmp2 - obj2.get().end - tmp4);
    }
  }
  const items3 = [tmp11, tmp12, tmp13, tmp14, tmp15];
  GuildsBarDragPreviewTsx2.__closure = items3;
  GuildsBarDragPreviewTsx2.__workletHash = 14975465511473;
  GuildsBarDragPreviewTsx2.__initData = tmp10;
  const derivedValue1 = require("module_1652").useDerivedValue(GuildsBarDragPreviewTsx2);
  const tmp2Result = require("module_1652");
  const items4 = [closure_14, dropPosition, scrollPosition, gestureState, draggedHeight, derivedValue, derivedValue1, windowSize, require("spring/spring").withSpring, c10, closure_13, require("module_1705").scheduleOnRN, dropComplete];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  jsx = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items4;
  class GuildsBarDragPreviewTsx4 {
    constructor() {
      tmp = closure_0;
      if (null != closure_0) {
        tmp5 = closure_1;
        diff = tmp - closure_1.get();
      } else {
        tmp2 = closure_2;
        tmp3 = closure_3;
        num = 2;
        diff = closure_2.get().absoluteY - closure_3 / 2;
      }
      if (null != closure_2.get().mode) {
        if (null == tmp) {
          tmp8 = globalThis;
          _Math = Math;
          _Math2 = Math;
          tmp9 = closure_4;
          tmp11 = closure_5;
          bound = Math.max(diff, closure_4.get());
          bound1 = Math.min(bound, closure_5.get());
        }
        tmp12 = closure_8;
        tmp13 = closure_9;
        items = [, , , ];
        items[0] = closure_9;
        items[1] = tmp;
        tmp14 = closure_10;
        items[2] = closure_10;
        tmp15 = closure_11;
        items[3] = closure_11;
        tmp16 = items;
        [tmp17, tmp18, tmp19, tmp20] = items;
        obj = { top: null };
        class GuildsBarDragPreviewTsx3 {
          constructor(arg0) {
            tmp = overState;
            if (overState) {
              tmp2 = closure_0;
              tmp3 = null;
              tmp = null != closure_0;
            }
            if (tmp) {
              tmp4 = closure_1;
              tmp5 = closure_2;
              tmp6 = closure_1(closure_2);
            }
            return;
          }
        }
        items1 = [, , ];
        items1[0] = tmp18;
        items1[1] = tmp19;
        items1[2] = tmp20;
        GuildsBarDragPreviewTsx3.__closure = items1;
        num2 = 1491691266645;
        GuildsBarDragPreviewTsx3.__workletHash = 1491691266645;
        GuildsBarDragPreviewTsx3.__initData = tmp17;
        str = "animate-always";
        tmp21 = bound1;
        tmp22 = tmp12;
        tmp23 = GuildsBarDragPreviewTsx3;
        obj.top = closure_7(bound1, tmp12, "animate-always", GuildsBarDragPreviewTsx3);
        return obj;
      }
      tmp6 = -closure_3;
      bound1 = Math.max(tmp6, Math.min(diff, closure_6));
      return;
    }
  }
  const items5 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29];
  GuildsBarDragPreviewTsx4.__closure = items5;
  GuildsBarDragPreviewTsx4.__workletHash = 1941615705344;
  GuildsBarDragPreviewTsx4.__initData = tmp17;
  const items6 = [overState, overNode];
  const animatedStyle = require("module_1652").useAnimatedStyle(GuildsBarDragPreviewTsx4);
  const memo = noop.useMemo(() => {
    if ("convert-after" === c1) {
      if (null != c0) {
        const element = { type: GuildsNodeType.FOLDER, id: -1, parentId: "flexDirection", name: "Array", color: "applicationId", expanded: "r", children: "isArray" };
        items = [tmp2];
        element.children = items;
        return element;
      }
    }
  }, items6);
  const items7 = [tmp.dragPreview, , ];
  let dragPreviewHome = null;
  if (isHomeDrawerEnabled) {
    dragPreviewHome = tmp.dragPreviewHome;
  }
  const obj3 = { style: items7, nativeID: "guilds-bar-drag-preview", children: null };
  items7[1] = dragPreviewHome;
  items7[2] = animatedStyle;
  const obj4 = { renderItem: renderAnimatedItemPreview, items: null, getItemKey: null };
  if (null != memo) {
    draggedNode = memo;
  }
  const items8 = [draggedNode];
  obj4.items = items8;
  obj4.getItemKey = getItemPreviewKey;
  obj3.children = jsx(require("native").TransitionGroup, obj4);
  return jsx(_modDef1652.View, obj3);
}
function getItemPreviewKey(id) {
  return "" + id.id;
}
function renderAnimatedItemPreview(key, node, transitionState, cleanUp) {
  return <AnimatedItemPreview key={key} node={node} transitionState={transitionState} cleanUp={cleanUp} />;
}
function AnimatedItemPreview(cleanUp) {
  ({ node, transitionState } = cleanUp);
  _require = transitionState;
  importDefault = undefined;
  let tmp = c8();
  let obj = require("useToken");
  const tmp5 = closure_9(c6 + require("useToken").useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE) / 2);
  let isHomeDrawerEnabled = require("useHomeDrawerGesture").useIsHomeDrawerEnabled();
  let obj2 = require("useHomeDrawerGesture");
  let num = 1;
  if (transitionState === require("native").TransitionStates.ENTERED) {
    num = 0;
  }
  const sharedValue = require("module_1652").useSharedValue(num);
  importDefault = sharedValue;
  if (isHomeDrawerEnabled) {
    isHomeDrawerEnabled = !tmp9;
  }
  let obj3 = require("module_1652");
  const tmp8 = GuildsNodeType;
  items = [closure_19, node.type === GuildsNodeType.FOLDER, sharedValue, require("spring/spring").withSpring, closure_10, closure_18, transitionState, require("native").TransitionStates, require("module_1705").scheduleOnRN, cleanUp.cleanUp];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  GuildsNodeType = undefined;
  c5 = undefined;
  c6 = undefined;
  jsx = undefined;
  c8 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items;
  class GuildsBarDragPreviewTsx6 {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_1;
      value = closure_1.get();
      num = 1;
      if (closure_0) {
        num3 = 0.3;
        if (num === value) {
          num3 = num;
        }
        num2 = num3;
        obj = tmp2;
      } else {
        num2 = 0.33;
        if (num === value) {
          num2 = num;
        }
        obj = tmp2;
      }
      if (!tmp) {
        if (num !== obj.get()) {
          obj1 = { translateX: 10, translateY: -10 };
        }
        num4 = num;
        if (tmp) {
          num4 = 0;
        }
        obj7 = { zIndex: null, transform: null, opacity: null };
        obj7.zIndex = num4;
        obj8 = { translateY: null };
        tmp4 = closure_2;
        tmp5 = closure_3;
        str = "animate-always";
        obj8.translateY = closure_2(obj1.translateY, closure_3, "animate-always");
        items = [, , ];
        items[0] = obj8;
        obj9 = { translateX: null };
        obj9.translateX = closure_2(obj1.translateX, closure_3, "animate-always");
        items[1] = obj9;
        tmp6 = closure_4;
        items1 = [, , , , , ];
        items1[0] = closure_4;
        tmp7 = closure_5;
        items1[1] = closure_5;
        tmp8 = closure_6;
        items1[2] = closure_6;
        items1[3] = tmp;
        tmp9 = closure_7;
        items1[4] = closure_7;
        tmp10 = closure_8;
        items1[5] = closure_8;
        closure_0 = undefined;
        closure_1 = undefined;
        closure_2 = undefined;
        closure_3 = undefined;
        closure_4 = undefined;
        tmp11 = items1;
        [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items1;
        obj10 = { scale: null };
        class GuildsBarDragPreviewTsx5 {
          constructor(arg0) {
            tmp = cleanUp;
            if (cleanUp) {
              tmp2 = closure_0;
              tmp3 = closure_1;
              tmp = closure_0 === closure_1.YEETED;
            }
            if (tmp) {
              tmp = closure_2;
            }
            if (tmp) {
              tmp4 = closure_3;
              tmp5 = closure_4;
              tmp6 = closure_3(closure_4);
            }
            return;
          }
        }
        items2 = [, , , , ];
        items2[0] = tmp13;
        items2[1] = tmp14;
        items2[2] = tmp15;
        items2[3] = tmp16;
        items2[4] = tmp17;
        GuildsBarDragPreviewTsx5.__closure = items2;
        num5 = 9896827730539;
        GuildsBarDragPreviewTsx5.__workletHash = 9896827730539;
        GuildsBarDragPreviewTsx5.__initData = tmp12;
        tmp18 = num2;
        tmp19 = tmp5;
        str2 = "animate-always";
        tmp20 = GuildsBarDragPreviewTsx5;
        obj10.scale = tmp4(num2, tmp5, "animate-always", GuildsBarDragPreviewTsx5);
        items[2] = obj10;
        obj7.transform = items;
        if (tmp) {
          num = obj.get();
        }
        obj7.opacity = tmp4(num, tmp5, "animate-always");
        return obj7;
      }
      obj1 = { translateX: 0, translateY: 0 };
      return;
    }
  }
  let items1 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
  GuildsBarDragPreviewTsx6.__closure = items1;
  GuildsBarDragPreviewTsx6.__workletHash = 9452285169812;
  GuildsBarDragPreviewTsx6.__initData = tmp10;
  const animatedStyle = require("module_1652").useAnimatedStyle(GuildsBarDragPreviewTsx6);
  const effect = noop.useEffect(() => {
    let num = 1;
    if (c0 === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = _undefined.set(num);
  });
  let items2 = [tmp.animatedPreviewStyle, , ];
  let prop = null;
  if (isHomeDrawerEnabled) {
    prop = tmp5.animatedPreviewStyleHome;
  }
  let obj4 = { style: items2, children: null };
  items2[1] = prop;
  items2[2] = animatedStyle;
  if (node.type === tmp8.FOLDER) {
    let obj5 = { id: null, expanded: null, color: null, name: null, childNodes: null, isDragPreview: true, hideExpandedChildren: null };
    ({ id: obj7.id, expanded: obj7.expanded, color: obj7.color, name: obj7.name, children: obj7.childNodes } = node);
    obj5.hideExpandedChildren = !isHomeDrawerEnabled;
    let tmp22Result = tmp22(tmp4(18514), obj5);
  } else {
    let obj6 = { guildId: node.id, isDragPreview: true, hideExpandedChildren: null };
    let tmp25 = !isHomeDrawerEnabled;
    if (isHomeDrawerEnabled) {
      tmp25 = transitionState === tmp2(5207).TransitionStates.YEETED;
    }
    obj6.hideExpandedChildren = tmp25;
    tmp22Result = tmp22(tmp4(18535), obj6);
    const tmp4Result = tmp4(18535);
  }
  obj4.children = tmp22Result;
  return jsx(_modDef1652.View, obj4);
}
let GuildsNodeType = fn(6892).GuildsNodeType;
const GUILD_ITEM_INSET_LEFT = fn(18503).GUILD_ITEM_INSET_LEFT;
let jsx = fn(21).jsx;
let createStyles = fn(5141);
let closure_8 = createStyles.createStyles({ dragPreview: { position: "absolute", left: 0 }, animatedPreviewStyle: { position: "absolute" }, dragPreviewHome: { right: 0 } });
createStyles = fn(5141);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { animatedPreviewStyleHome: null };
  const rect = { left: 0, right: 0, transformOrigin: null };
  items = [arg0, "50%", 0];
  rect.transformOrigin = items;
  obj.animatedPreviewStyleHome = rect;
  return obj;
});
let closure_10 = { mass: 0.5, damping: 80, stiffness: 320 };
let closure_11 = { code: "(function GuildsBarDragPreviewTsx1(){let[scrollPosition,dragRegion,listInsets]=this.__closure;return Math.max(scrollPosition.get()<dragRegion.get().min?dragRegion.get().min-scrollPosition.get():0,listInsets.get().start);})" };
let closure_12 = { code: "(function GuildsBarDragPreviewTsx2(){let[scrollPosition,windowSize,listInsets,dragRegion,draggedHeight]=this.__closure;return Math.min(scrollPosition.get()+(windowSize-listInsets.get().end)>dragRegion.get().max?dragRegion.get().max-draggedHeight-scrollPosition.get():windowSize-listInsets.get().end-draggedHeight,windowSize-listInsets.get().end-draggedHeight);})" };
let closure_13 = { code: "(function GuildsBarDragPreviewTsx3(finished){let[dropPosition,scheduleOnRN,dropComplete]=this.__closure;if(finished&&dropPosition!=null){scheduleOnRN(dropComplete);}})" };
let closure_14 = { code: "(function GuildsBarDragPreviewTsx4(){let[dropPosition,scrollPosition,gestureState,draggedHeight,minY,maxY,windowSize,withSpring,DRAG_SPRING_PHYSICS,_worklet_1491691266645_init_data,scheduleOnRN,dropComplete]=this.__closure;let translateY=function(){if(dropPosition!=null){return dropPosition-scrollPosition.get();}return gestureState.get().absoluteY-draggedHeight/2;}();if(gestureState.get().mode!=null&&dropPosition==null){translateY=Math.min(Math.max(translateY,minY.get()),maxY.get());}else{translateY=Math.max(-draggedHeight,Math.min(translateY,windowSize));}return{top:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always',function GuildsBarDragPreviewTsx3Factory([_worklet_1491691266645_init_data,dropPosition,scheduleOnRN,dropComplete]){const GuildsBarDragPreviewTsx3=function(finished){if(finished&&dropPosition!=null){scheduleOnRN(dropComplete);}};GuildsBarDragPreviewTsx3.__closure=[dropPosition,scheduleOnRN,dropComplete];GuildsBarDragPreviewTsx3.__workletHash=1491691266645;GuildsBarDragPreviewTsx3.__initData=_worklet_1491691266645_init_data;return GuildsBarDragPreviewTsx3;}([_worklet_1491691266645_init_data,dropPosition,scheduleOnRN,dropComplete]))};})" };
let closure_18 = { code: "(function GuildsBarDragPreviewTsx5(finished){let[transitionState,TransitionStates,isFolder,scheduleOnRN,cleanUp]=this.__closure;if(finished&&transitionState===TransitionStates.YEETED&&isFolder){scheduleOnRN(cleanUp);}})" };
let closure_19 = { code: "(function GuildsBarDragPreviewTsx6(){let[isFolder,visible,withSpring,DRAG_SPRING_PHYSICS,_worklet_9896827730539_init_data,transitionState,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;const targetScale=function(){if(isFolder){return visible.get()===1?1:0.3;}return visible.get()===1?1:0.33;}();const{translateX:translateX,translateY:translateY}=function(){if(isFolder){return{translateX:0,translateY:0};}if(visible.get()===1){return{translateX:0,translateY:0};}return{translateX:10,translateY:-10};}();return{zIndex:isFolder?0:1,transform:[{translateY:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always')},{translateX:withSpring(translateX,DRAG_SPRING_PHYSICS,'animate-always')},{scale:withSpring(targetScale,DRAG_SPRING_PHYSICS,'animate-always',function GuildsBarDragPreviewTsx5Factory([_worklet_9896827730539_init_data,transitionState,TransitionStates,isFolder,scheduleOnRN,cleanUp]){const GuildsBarDragPreviewTsx5=function(finished){if(finished&&transitionState===TransitionStates.YEETED&&isFolder){scheduleOnRN(cleanUp);}};GuildsBarDragPreviewTsx5.__closure=[transitionState,TransitionStates,isFolder,scheduleOnRN,cleanUp];GuildsBarDragPreviewTsx5.__workletHash=9896827730539;GuildsBarDragPreviewTsx5.__initData=_worklet_9896827730539_init_data;return GuildsBarDragPreviewTsx5;}([_worklet_9896827730539_init_data,transitionState,TransitionStates,isFolder,scheduleOnRN,cleanUp]))}],opacity:withSpring(isFolder?visible.get():1,DRAG_SPRING_PHYSICS,'animate-always')};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarDragPreview.tsx");

export default noop.memo(function GuildsBarDragPreview() {
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
          const obj = { draggedNode: null, draggedHeight: null, overState: null, overNode: null, dropPosition: "o", gestureState: "\u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC \u03AD\u03BD\u03B1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03BF", scrollPosition: "\u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC {{count}} \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1", dragRegion: "1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03BF", windowSize: "{{count}} \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1", dropComplete: "\u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC \u03AD\u03BD\u03B1 \u03BB\u03B5\u03C0\u03C4\u03CC", listInsets: "\u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC {{count}} \u03BB\u03B5\u03C0\u03C4\u03AC" };
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
  }, _mod5056.shallow);
  let tmp2 = null;
  if (null != tmp) {
    let obj = {};
    const merged = Object.assign(tmp);
    tmp2 = <PreviewItem />;
  }
  return tmp2;
});