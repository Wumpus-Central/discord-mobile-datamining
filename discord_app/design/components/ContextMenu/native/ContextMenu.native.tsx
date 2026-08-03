// === Module 9482: ContextMenu ===

// Module 9482 (ContextMenu)
import noop from "noop";
import jsxProd from "jsxProd";
import isFabric from "isFabric";

let c4;
let c5;
const require = arg1;
({ Fragment: c4, jsx: c5 } = jsxProd);
isFabric = isFabric.isFabric();
if (isFabric) {
  isFabric = require("set").isIOS();
  let obj2 = require("set");
}
let closure_7 = { code: "function ContextMenuNativeTsx1(){const{_isFabricIOS,buttonTagSV,measureInWindowForFWO,measure,buttonRef,title,itemCount,dividerIndexes,approximateItemHeight,CONTEXT_MENU_DIVIDER_HEIGHT,CONTEXT_MENU_OFFSET,screenHeight,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,menuAlign,runOnJS,showMenu}=this.__closure;let pageX;let pageY;let width;let height;if(_isFabricIOS){const tag=buttonTagSV.get();if(tag===-1)return;const m=measureInWindowForFWO(tag);if(m==null)return;pageX=m.x;pageY=m.y;width=m.width;height=m.height;}else{const m=measure(buttonRef);if(m==null)return;pageX=m.pageX;pageY=m.pageY;width=m.width;height=m.height;}const rowCount=title!=null?itemCount+1:itemCount;const dividerCount=(title!=null?1:0)+dividerIndexes.length;const menuHeight=approximateItemHeight.get()*rowCount+CONTEXT_MENU_DIVIDER_HEIGHT*dividerCount;const positionBelowOffset=pageY+height+CONTEXT_MENU_OFFSET;const positionAboveOffset=screenHeight-pageY+CONTEXT_MENU_OFFSET;const availableSpaceBelow=screenHeight-positionBelowOffset-CONTEXT_MENU_EDGE_OFFSET;const availableSpaceAbove=pageY-CONTEXT_MENU_EDGE_OFFSET;const wouldOverflowBelow=availableSpaceBelow<menuHeight;const wouldOverflowAbove=availableSpaceAbove<menuHeight;const minimumRightPosition=Math.max(screenWidth-pageX-width,CONTEXT_MENU_EDGE_OFFSET);function autoPositionVertical(offset){'worklet';let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};}function autoPositionHorizontal(){'worklet';const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:x,positionX:positionX};}if(menuAlign==='auto'){const{y:y,positionY:positionY}=autoPositionVertical();const{x:x,positionX:positionX}=autoPositionHorizontal();runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);}else if(menuAlign==='above'||menuAlign==='below'){const positionY=menuAlign;const y=positionY==='above'?positionAboveOffset:positionBelowOffset;const{x:x,positionX:positionX}=autoPositionHorizontal();runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);}else{const positionX=menuAlign==='left'?'right':'left';const x=positionX==='left'?pageX+width+CONTEXT_MENU_OFFSET:minimumRightPosition+width+CONTEXT_MENU_OFFSET;const{y:y,positionY:positionY}=autoPositionVertical(-1*(CONTEXT_MENU_OFFSET+height));runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);}}" };
let closure_8 = { code: "function autoPositionVertical_ContextMenuNativeTsx2(offset){const{pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset}=this.__closure;let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};}" };
let closure_9 = { code: "function autoPositionHorizontal_ContextMenuNativeTsx3(){const{pageX,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,minimumRightPosition}=this.__closure;const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:x,positionX:positionX};}" };
let closure_10 = { code: "function onPanGestureEnd_ContextMenuNativeTsx4(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}" };
let closure_11 = { code: "function ContextMenuNativeTsx5(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}" };
let closure_12 = { code: "function ContextMenuNativeTsx6(){const{runOnJS,triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(CONTEXT_MENU_OPEN_HAPTIC);measureButtonAndShowMenu();}" };
let closure_13 = { code: "function ContextMenuNativeTsx7(){const{measureButtonAndShowMenu}=this.__closure;measureButtonAndShowMenu();}" };
let closure_14 = { code: "function ContextMenuNativeTsx8(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}" };
let closure_15 = { code: "function ContextMenuNativeTsx9(){const{runOnJS,triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(CONTEXT_MENU_OPEN_HAPTIC);measureButtonAndShowMenu();}" };
let result = require("isFabric").fileFinishedImporting("design/components/ContextMenu/native/ContextMenu.native.tsx");

export const ContextMenu = function ContextMenu(triggerOnLongPress) {
  let children;
  let items;
  ({ children, items } = triggerOnLongPress);
  let flag = triggerOnLongPress.triggerOnLongPress;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = triggerOnLongPress.triggerOnTap;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = triggerOnLongPress.disableGesture;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let str = triggerOnLongPress.align;
  if (str === undefined) {
    str = "auto";
  }
  const title = triggerOnLongPress.title;
  let onOpen = triggerOnLongPress.onOpen;
  let onClose = triggerOnLongPress.onClose;
  const keyboardShouldPersistTaps = triggerOnLongPress.keyboardShouldPersistTaps;
  let returnRef = triggerOnLongPress.returnRef;
  let flag4 = triggerOnLongPress.enabled;
  if (flag4 === undefined) {
    flag4 = true;
  }
  let buttonRef = triggerOnLongPress.buttonRef;
  let sharedValue;
  let items2;
  let dividerIndexes;
  let length;
  let width;
  let height;
  let contextMenuState;
  let activeIndex;
  let activeContextMenu;
  let sharedValue1;
  let closure_21;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let obj = items(flag2[4]);
  if (buttonRef == null) {
    buttonRef = obj.useAnimatedRef();
  }
  let tmpResult = tmp(tmp2[4]);
  sharedValue = tmpResult.useSharedValue(-1);
  let obj2 = str;
  items = [buttonRef, sharedValue];
  const effect = str.useEffect(() => buttonRef.observe((arg0) => {
    if (null != arg0) {
      const result = closure_11.set(arg0);
    }
  }), items);
  const items1 = [items];
  const memo = str.useMemo(() => {
    const isArray = Array.isArray(items[0]);
    if (isArray) {
      items = arr.flat();
    }
    const dividerIndexes = [];
    if (isArray) {
      const item = arr.forEach((arg0, arg1) => {
        if (arg1 > 0) {
          dividerIndexes.push(items.indexOf(arg0[0]));
        }
      });
    }
    return { items, dividerIndexes };
  }, items1);
  items2 = memo.items;
  dividerIndexes = memo.dividerIndexes;
  length = items2.length;
  obj = { ignoreKeyboard: null };
  tmpResult = tmp(tmp2[3]);
  obj[0] = tmpResult.isAndroid();
  const size = flag(flag2[5])(obj);
  width = size.width;
  height = size.height;
  let tmp6 = flag(flag2[5]);
  contextMenuState = items(flag2[6]).useContextMenuState();
  activeIndex = contextMenuState.activeIndex;
  const tmpResult1 = items(flag2[6]);
  const fontScale = items(flag2[7]).useFontScale();
  if (undefined === returnRef) {
    returnRef = buttonRef;
  }
  const tmpResult2 = items(flag2[7]);
  activeContextMenu = items(flag2[6]).useActiveContextMenu();
  const tmpResult3 = items(flag2[6]);
  let result = (tmp(tmp2[8]).CONTEXT_MENU_ITEM_BASE_HEIGHT - 2 * tmp(tmp2[8]).CONTEXT_MENU_ITEM_PADDING) * fontScale;
  let result1 = 2 * tmp(tmp2[8]).CONTEXT_MENU_ITEM_PADDING;
  sharedValue1 = items(flag2[4]).useSharedValue(Math.max(result + result1, tmp(tmp2[8]).CONTEXT_MENU_ITEM_BASE_HEIGHT));
  closure_21 = obj2.useRef(items2);
  const items3 = [items2];
  const layoutEffect = obj2.useLayoutEffect(() => {
    closure_21.current = items2;
  }, items3);
  const items4 = [activeContextMenu, contextMenuState];
  const layoutEffect1 = obj2.useLayoutEffect(() => {
    if (null == activeContextMenu) {
      const result = items(flag2[6]).resetContextMenuState(contextMenuState);
      const obj = items(flag2[6]);
    }
  }, items4);
  const items5 = [activeIndex, onClose];
  callback = obj2.useCallback((arg0) => {
    if (onClose != null) {
      tmp(arg0);
    }
    items(flag2[6]).hideContextMenu();
    const value = activeIndex.get();
    if (-1 !== value) {
      if (ref.current[value] != null) {
        obj2.action();
      }
    }
  }, items5);
  const items6 = [returnRef];
  callback1 = obj2.useCallback(() => {
    let obj = items(flag2[9]);
    obj = { ref: returnRef };
    const result = obj.setAccessibilityFocus(obj);
  }, items6);
  const items7 = [onOpen, contextMenuState, items2, title, keyboardShouldPersistTaps, callback, callback1, dividerIndexes];
  callback2 = obj2.useCallback((arg0, arg1, arg2, arg3, arg4, arg5) => {
    if (onOpen != null) {
      tmp();
    }
    const obj = { key: null, x: null, y: null, positionX: null, positionY: null, height: null, width: null, state: null, items: null, title: null, keyboardShouldPersistTaps: null, requestClose: null, onClose: null, dividerIndexes: null };
    obj[0] = items(flag2[10]).uid();
    obj[1] = arg0;
    obj[2] = arg1;
    obj[3] = arg2;
    obj[4] = arg3;
    obj[5] = arg4;
    obj[6] = arg5;
    obj[7] = contextMenuState;
    obj[8] = items2;
    obj[9] = title;
    obj[10] = keyboardShouldPersistTaps;
    obj[11] = callback;
    obj[12] = callback1;
    obj[13] = dividerIndexes;
    const obj2 = items(flag2[10]);
    items(flag2[6]).showContextMenu(obj);
    const obj3 = items(flag2[6]);
    if (obj4.isAndroid()) {
      const AccessibilityAnnouncer = tmp3(tmp4[11]).AccessibilityAnnouncer;
      const intl = tmp3(tmp4[12]).intl;
      AccessibilityAnnouncer.announce(intl.string(tmp3(tmp4[12]).t.ZqK0uI));
    }
  }, items7);
  class V {
    constructor() {
      if (onClose) {
        tmp11 = c11;
        value = c11.get();
        num = -1;
        if (-1 === value) {
          return;
        } else {
          tmp96 = items;
          tmp97 = c2;
          obj7 = items(c2[13]);
          result = obj7.measureInWindowForFWO(value);
          tmp99 = null;
          if (null == result) {
            return;
          } else {
            x = result.x;
            pageX = x;
            ({ y: pageY, width, height } = result);
            tmp6 = x;
            tmp7 = x;
            tmp8 = height;
            tmp9 = pageY;
            tmp10 = x;
          }
        }
      } else {
        tmp = items;
        tmp2 = c2;
        obj = items(c2[4]);
        tmp3 = buttonRef;
        measureResult = obj.measure(buttonRef);
        tmp5 = null;
        if (null == measureResult) {
          return;
        } else {
          pageX = measureResult.pageX;
          ({ pageY, width, height } = measureResult);
          tmp6 = pageX;
          tmp7 = pageX;
          tmp8 = height;
          tmp9 = pageY;
          tmp10 = pageX;
        }
      }
      tmp13 = title;
      if (null != title) {
        tmp15 = length;
        num2 = 1;
        sum = length + 1;
      } else {
        sum = length;
      }
      num3 = 0;
      if (null != tmp13) {
        num3 = 1;
      }
      sum1 = num3 + dividerIndexes.length;
      result1 = useSharedValue.get() * sum;
      sum2 = result1 + items(c2[8]).CONTEXT_MENU_DIVIDER_HEIGHT * sum1;
      sum3 = tmp9 + tmp8;
      sum4 = sum3 + items(c2[8]).CONTEXT_MENU_OFFSET;
      CONTEXT_MENU_OFFSET = sum4;
      diff = height - tmp9;
      sum5 = diff + items(c2[8]).CONTEXT_MENU_OFFSET;
      CONTEXT_MENU_OFFSET = sum5;
      diff1 = height - sum4;
      diff2 = diff1 - items(c2[8]).CONTEXT_MENU_EDGE_OFFSET;
      auto = diff2;
      diff3 = tmp9 - items(c2[8]).CONTEXT_MENU_EDGE_OFFSET;
      title = diff3;
      tmp26 = diff2 < sum2;
      onOpen = tmp26;
      tmp27 = diff3 < sum2;
      onClose = tmp27;
      tmp28 = width;
      diff4 = width - tmp10 - width;
      bound = Math.max(diff4, items(c2[8]).CONTEXT_MENU_EDGE_OFFSET);
      CONTEXT_MENU_EDGE_OFFSET = bound;
      autoPositionVertical = function autoPositionVertical(arg0) {
        const CONTEXT_MENU_OFFSET = items(flag2[8]).CONTEXT_MENU_OFFSET;
        if (closure_5 === closure_6) {
          let str2 = "above";
          if (diff2 > diff3) {
            str2 = "below";
          }
          let str = str2;
        } else {
          str = "below";
          if (tmp) {
            str = "above";
          }
        }
        let num = arg0;
        if (arg0 == null) {
          num = 0;
        }
        return { y: ("above" === str ? sum5 : sum4) + num, positionY: str };
      };
      obj = { pageY, height, CONTEXT_MENU_OFFSET: items(c2[8]).CONTEXT_MENU_OFFSET, wouldOverflowBelow: tmp26, wouldOverflowAbove: tmp27, availableSpaceBelow: diff2, availableSpaceAbove: diff3, positionAboveOffset: sum5, positionBelowOffset: sum4 };
      autoPositionVertical.__closure = obj;
      autoPositionVertical.__workletHash = 15309589830995;
      autoPositionVertical.__initData = returnRef;
      autoPositionHorizontal = function autoPositionHorizontal() {
        let x = pageX;
        const diff = pageX - items(flag2[8]).CONTEXT_MENU_EDGE_OFFSET;
        const diff1 = outer1_15 - items(flag2[8]).CONTEXT_MENU_EDGE_OFFSET;
        let positionX = "left";
        if (diff > diff1 - (pageX + items(flag2[8]).CONTEXT_MENU_MIN_WIDTH)) {
          x = bound;
          positionX = "right";
        }
        return { x, positionX };
      };
      obj1 = { pageX: tmp7, CONTEXT_MENU_EDGE_OFFSET: items(c2[8]).CONTEXT_MENU_EDGE_OFFSET, screenWidth: width, CONTEXT_MENU_MIN_WIDTH: items(c2[8]).CONTEXT_MENU_MIN_WIDTH, minimumRightPosition: bound };
      autoPositionHorizontal.__closure = obj1;
      autoPositionHorizontal.__workletHash = 14761866330436;
      autoPositionHorizontal.__initData = c9;
      tmp31 = auto;
      if ("auto" === auto) {
        tmp75 = items;
        tmp76 = c2;
        CONTEXT_MENU_OFFSET2 = items(c2[8]).CONTEXT_MENU_OFFSET;
        if (tmp26 === tmp27) {
          str7 = "above";
          if (diff2 > diff3) {
            str7 = "below";
          }
          str6 = str7;
        } else {
          str6 = "below";
          if (tmp26) {
            str6 = "above";
          }
        }
        str8 = "above";
        if ("above" === str6) {
          sum4 = sum5;
        }
        tmp77 = sum4;
        tmp78 = items;
        tmp79 = c2;
        tmp81 = items;
        tmp82 = c2;
        diff5 = tmp6 - items(c2[8]).CONTEXT_MENU_EDGE_OFFSET;
        tmp84 = items;
        tmp85 = c2;
        diff6 = tmp28 - items(c2[8]).CONTEXT_MENU_EDGE_OFFSET;
        str9 = "left";
        if (diff5 > diff6 - (tmp6 + items(c2[8]).CONTEXT_MENU_MIN_WIDTH)) {
          str9 = "right";
          tmp6 = bound;
        }
        tmp86 = items;
        tmp87 = c2;
        obj6 = items(c2[4]);
        tmp88 = keyboardShouldPersistTaps;
        tmp89 = tmp6;
        tmp90 = tmp77;
        tmp91 = str9;
        tmp92 = str6;
        tmp93 = sum2;
        tmp94 = width;
        tmp95 = obj6.runOnJS(keyboardShouldPersistTaps)(tmp6, tmp77, str9, str6, sum2, width);
      } else {
        str10 = "above";
        tmp = "above" === tmp31;
        if (!tmp) {
          str = "below";
          if ("below" !== tmp31) {
            str11 = "left";
            str2 = "left";
            if ("left" === tmp31) {
              str2 = "right";
            }
            if ("left" === str2) {
              tmp37 = items;
              tmp38 = c2;
              sum6 = tmp10 + width;
              sum7 = sum6 + items(c2[8]).CONTEXT_MENU_OFFSET;
            } else {
              tmp33 = items;
              tmp34 = c2;
              sum8 = bound + width;
              sum7 = sum8 + items(c2[8]).CONTEXT_MENU_OFFSET;
            }
            tmp39 = items;
            tmp40 = c2;
            num4 = -1;
            tmp42 = items;
            tmp43 = c2;
            result2 = -1 * (items(c2[8]).CONTEXT_MENU_OFFSET + tmp8);
            CONTEXT_MENU_OFFSET = items(c2[8]).CONTEXT_MENU_OFFSET;
            if (tmp26 === tmp27) {
              str4 = "above";
              if (diff2 > diff3) {
                str4 = "below";
              }
              str3 = str4;
            } else {
              str3 = "below";
              if (tmp26) {
                str3 = "above";
              }
            }
            tmp44 = sum4;
            if ("above" === str3) {
              tmp44 = sum5;
            }
            tmp46 = items;
            tmp47 = c2;
            sum9 = tmp44 + result2;
            obj4 = items(c2[4]);
            tmp48 = keyboardShouldPersistTaps;
            tmp49 = sum7;
            tmp50 = str2;
            tmp51 = str3;
            tmp52 = sum2;
            tmp53 = width;
            tmp54 = obj4.runOnJS(keyboardShouldPersistTaps)(sum7, sum9, str2, str3, sum2, width);
          }
        }
        tmp55 = sum4;
        if (tmp) {
          tmp55 = sum5;
        }
        tmp56 = items;
        tmp57 = c2;
        tmp59 = items;
        tmp60 = c2;
        diff7 = tmp6 - items(c2[8]).CONTEXT_MENU_EDGE_OFFSET;
        tmp62 = items;
        tmp63 = c2;
        diff8 = tmp28 - items(c2[8]).CONTEXT_MENU_EDGE_OFFSET;
        str5 = "left";
        tmp64 = tmp6;
        if (diff7 > diff8 - (tmp6 + items(c2[8]).CONTEXT_MENU_MIN_WIDTH)) {
          str5 = "right";
          tmp64 = bound;
        }
        tmp65 = items;
        tmp66 = c2;
        obj5 = items(c2[4]);
        tmp67 = keyboardShouldPersistTaps;
        tmp68 = tmp64;
        tmp69 = tmp55;
        tmp70 = str5;
        tmp71 = tmp31;
        tmp72 = sum2;
        tmp73 = width;
        tmp74 = obj5.runOnJS(keyboardShouldPersistTaps)(tmp64, tmp55, str5, tmp31, sum2, width);
      }
      return;
    }
  }
  obj = { _isFabricIOS: onClose, buttonTagSV: sharedValue, measureInWindowForFWO: tmp(tmp2[13]).measureInWindowForFWO, measure: tmp(tmp2[4]).measure, buttonRef, title, itemCount: length, dividerIndexes, approximateItemHeight: sharedValue1, CONTEXT_MENU_DIVIDER_HEIGHT: tmp(tmp2[8]).CONTEXT_MENU_DIVIDER_HEIGHT, CONTEXT_MENU_OFFSET: tmp(tmp2[8]).CONTEXT_MENU_OFFSET, screenHeight: height, CONTEXT_MENU_EDGE_OFFSET: tmp(tmp2[8]).CONTEXT_MENU_EDGE_OFFSET, screenWidth: width, CONTEXT_MENU_MIN_WIDTH: tmp(tmp2[8]).CONTEXT_MENU_MIN_WIDTH, menuAlign: str, runOnJS: tmp(tmp2[4]).runOnJS, showMenu: callback2 };
  V.__closure = obj;
  V.__workletHash = 6408542373252;
  V.__initData = keyboardShouldPersistTaps;
  const items8 = [buttonRef, sharedValue, sharedValue1, title, length, height, str, callback2, width, dividerIndexes];
  callback3 = obj2.useCallback(V, items8);
  const items9 = [flag, flag2, callback, flag4, contextMenuState, callback3];
  const items10 = [items2];
  const memo1 = obj2.useMemo(() => {
    function onPanGestureEnd() {
      activeIndex = activeIndex.activeIndex;
      const value = activeIndex.get();
      outer1_0(outer1_2[4]).runOnJS(closure_22)(-1 === value);
    }
    let obj = { state: contextMenuState, runOnJS: items(flag2[4]).runOnJS, requestClose: callback };
    onPanGestureEnd.__closure = obj;
    onPanGestureEnd.__workletHash = 12851223476540;
    onPanGestureEnd.__initData = buttonRef;
    if (flag) {
      const Gesture2 = tmp2(tmp3[14]).Gesture;
      const PanResult = Gesture2.Pan();
      const fn4 = function i(absoluteX) {
        const result = outer1_0(outer1_2[6]).updateContextMenuState(absoluteX.absoluteX, absoluteX.absoluteY, closure_17);
      };
      obj = { updateContextMenuState: null, state: null };
      obj[0] = tmp2(tmp3[6]).updateContextMenuState;
      obj[1] = tmp;
      fn4.__closure = obj;
      fn4.__workletHash = 2460213213323;
      fn4.__initData = sharedValue;
      const enabledResult = Gesture2.Pan().enabled(flag4);
      const onUpdateResult = Gesture2.Pan().enabled(flag4).onUpdate(fn4);
      const Gesture3 = tmp2(tmp3[14]).Gesture;
      const onEndResult = Gesture2.Pan().enabled(flag4).onUpdate(fn4).onEnd(onPanGestureEnd);
      const LongPressResult = Gesture3.LongPress();
      const enabledResult1 = Gesture3.LongPress().enabled(flag4);
      let result = Gesture3.LongPress().enabled(flag4).minDuration(tmp2(tmp3[8]).CONTEXT_MENU_LONG_PRESS_DURATION_MS).shouldCancelWhenOutside(false);
      const fn5 = function n() {
        const obj = outer1_0(outer1_2[4]);
        outer1_0(outer1_2[4]).runOnJS(outer1_0(outer1_2[15]).triggerHapticFeedback)(outer1_0(outer1_2[8]).CONTEXT_MENU_OPEN_HAPTIC);
        callback();
      };
      obj = { runOnJS: null, triggerHapticFeedback: null, CONTEXT_MENU_OPEN_HAPTIC: null, measureButtonAndShowMenu: null };
      obj[0] = tmp2(tmp3[4]).runOnJS;
      obj[1] = tmp2(tmp3[15]).triggerHapticFeedback;
      obj[2] = tmp2(tmp3[8]).CONTEXT_MENU_OPEN_HAPTIC;
      obj[3] = callback3;
      fn5.__closure = obj;
      fn5.__workletHash = 13919366908951;
      fn5.__initData = items2;
      const minDurationResult = Gesture3.LongPress().enabled(flag4).minDuration(tmp2(tmp3[8]).CONTEXT_MENU_LONG_PRESS_DURATION_MS);
      const Gesture4 = tmp2(tmp3[14]).Gesture;
      return Gesture4.Simultaneous(result.onStart(fn5), onEndResult);
    } else {
      const Gesture = tmp2(tmp3[14]).Gesture;
      if (flag2) {
        const TapResult = Gesture.Tap();
        const fn3 = function o() {
          callback();
        };
        const obj1 = { measureButtonAndShowMenu: null };
        obj1[0] = callback3;
        fn3.__closure = obj1;
        fn3.__workletHash = 13410382812897;
        fn3.__initData = dividerIndexes;
        let onStartResult1 = Gesture.Tap().enabled(flag4).onStart(fn3);
        const enabledResult2 = Gesture.Tap().enabled(flag4);
      } else {
        const PanResult1 = Gesture.Pan();
        const fn = function t() {
          const obj = outer1_0(outer1_2[4]);
          outer1_0(outer1_2[4]).runOnJS(outer1_0(outer1_2[15]).triggerHapticFeedback)(outer1_0(outer1_2[8]).CONTEXT_MENU_OPEN_HAPTIC);
          callback();
        };
        const obj2 = { runOnJS: null, triggerHapticFeedback: null, CONTEXT_MENU_OPEN_HAPTIC: null, measureButtonAndShowMenu: null };
        obj2[0] = tmp2(tmp3[4]).runOnJS;
        obj2[1] = tmp2(tmp3[15]).triggerHapticFeedback;
        obj2[2] = tmp2(tmp3[8]).CONTEXT_MENU_OPEN_HAPTIC;
        obj2[3] = callback3;
        fn.__closure = obj2;
        fn.__workletHash = 11906156003448;
        fn.__initData = width;
        const enabledResult3 = Gesture.Pan().enabled(flag4);
        const fn2 = function e(absoluteX) {
          const result = outer1_0(outer1_2[6]).updateContextMenuState(absoluteX.absoluteX, absoluteX.absoluteY, closure_17);
        };
        const obj3 = { updateContextMenuState: null, state: null };
        obj3[0] = tmp2(tmp3[6]).updateContextMenuState;
        obj3[1] = tmp;
        fn2.__closure = obj3;
        fn2.__workletHash = 17473642675622;
        fn2.__initData = length;
        const onBeginResult = Gesture.Pan().enabled(flag4).onBegin(fn);
        onStartResult1 = Gesture.Pan().enabled(flag4).onBegin(fn).onUpdate(fn2).onEnd(onPanGestureEnd);
        const onUpdateResult1 = Gesture.Pan().enabled(flag4).onBegin(fn).onUpdate(fn2);
      }
      return onStartResult1;
    }
  }, items9);
  const items11 = [items2];
  const memo2 = obj2.useMemo(() => items2.map((label) => ({ name: label.label, label: label.label })), items10);
  const items12 = [callback3];
  const callback4 = obj2.useCallback((arg0) => {
    let closure_0 = arg0;
    const found = items2.find((label) => label.label === nativeEvent.nativeEvent.actionName);
    if (found != null) {
      const action = found.action;
      if (action != null) {
        action();
      }
    }
  }, items11);
  [][0] = callback3;
  const callback5 = obj2.useCallback(() => {
    let isAndroidResult = items(flag2[3]).isAndroid();
    if (isAndroidResult) {
      let tmpResult = tmp(tmp2[16]);
      isAndroidResult = tmpResult.getIsScreenReaderEnabled();
    }
    if (isAndroidResult) {
      tmpResult = tmp(tmp2[4]);
      tmpResult.runOnUI(callback3)();
    }
  }, items12);
  let obj1 = { ref: buttonRef, onPress: callback5, onLongPress: null, accessibilityActions: null, onAccessibilityAction: null };
  let tmp24;
  if (flag) {
    if (flag3) {
      tmp24 = tmp23;
    }
  }
  obj1[2] = tmp24;
  obj1[3] = memo2;
  obj1[4] = callback4;
  if (flag3) {
    obj2 = { children: null };
    obj2[0] = children(obj1);
    let tmp25Result = tmp25(title, obj2);
  } else {
    let obj3 = { gesture: null, children: null };
    obj3[0] = memo1;
    obj3[1] = children(obj1);
    tmp25Result = tmp25(tmp(tmp2[14]).GestureDetector, obj3);
  }
  return tmp25Result;
};