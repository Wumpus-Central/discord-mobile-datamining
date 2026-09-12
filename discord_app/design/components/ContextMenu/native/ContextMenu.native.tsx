// discord_app/design/components/ContextMenu/native/ContextMenu.native.tsx
import util from "../../../../intl/index.native.tsx";
import PlatformUtils2 from "../../../../utils/PlatformUtils.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import shared from "../../../shared.tsx";
import HapticUtils from "../../../../modules/haptics/HapticUtils.native.tsx";
import useIsScreenReaderEnabled from "../../../../modules/a11y/native/useIsScreenReaderEnabled.native.tsx";
import setAccessibilityFocus from "../../../../modules/a11y/native/setAccessibilityFocus.android.tsx";
import LegacyBaseButton from "../../../../../_runtime/06756_LegacyBaseButton.js";
import ContextMenuState from "ContextMenuState.native.tsx";
import ContextMenuConstants from "ContextMenuConstants.native.tsx";
import UID from "../../../../modules/core/web/UID.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ Fragment: closure_4, jsx: hasOwnProperty } = jsxProd);
const PlatformUtils = fn(1150);
let closure_6 = PlatformUtils.isIOS();
let closure_7 = {
  code: "function ContextMenuNativeTsx1(){const{_isIOS,buttonTagSV,measureInWindowForFWO,measure,buttonRef,title,itemCount,dividerIndexes,approximateItemHeight,CONTEXT_MENU_DIVIDER_HEIGHT,CONTEXT_MENU_OFFSET,screenHeight,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,menuAlign,runOnJS,showMenu}=this.__closure;let pageX;let pageY;let width;let height;if(_isIOS){const tag=buttonTagSV.get();if(tag===-1)return;const m=measureInWindowForFWO(tag);if(m==null)return;pageX=m.x;pageY=m.y;width=m.width;height=m.height;}else{const m=measure(buttonRef);if(m==null)return;pageX=m.pageX;pageY=m.pageY;width=m.width;height=m.height;}const rowCount=title!=null?itemCount+1:itemCount;const dividerCount=(title!=null?1:0)+dividerIndexes.length;const menuHeight=approximateItemHeight.get()*rowCount+CONTEXT_MENU_DIVIDER_HEIGHT*dividerCount;const positionBelowOffset=pageY+height+CONTEXT_MENU_OFFSET;const positionAboveOffset=screenHeight-pageY+CONTEXT_MENU_OFFSET;const availableSpaceBelow=screenHeight-positionBelowOffset-CONTEXT_MENU_EDGE_OFFSET;const availableSpaceAbove=pageY-CONTEXT_MENU_EDGE_OFFSET;const wouldOverflowBelow=availableSpaceBelow<menuHeight;const wouldOverflowAbove=availableSpaceAbove<menuHeight;const minimumRightPosition=Math.max(screenWidth-pageX-width,CONTEXT_MENU_EDGE_OFFSET);function autoPositionVertical(offset){'worklet';let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};}function autoPositionHorizontal(){'worklet';const maxOffset=Math.max(CONTEXT_MENU_EDGE_OFFSET,screenWidth-CONTEXT_MENU_EDGE_OFFSET-CONTEXT_MENU_MIN_WIDTH);const fitsLeft=pageX<=maxOffset;const fitsRight=minimumRightPosition<=maxOffset;const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(fitsLeft!==fitsRight?fitsRight:distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:Math.min(x,maxOffset),positionX:positionX};}if(menuAlign==='auto'){const{y:y,positionY:positionY}=autoPositionVertical();const{x:x,positionX:positionX}=autoPositionHorizontal();runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);}else if(menuAlign==='above'||menuAlign==='below'){const positionY=menuAlign;const y=positionY==='above'?positionAboveOffset:positionBelowOffset;const{x:x,positionX:positionX}=autoPositionHorizontal();runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);}else{const positionX=menuAlign==='left'?'right':'left';const x=positionX==='left'?pageX+width+CONTEXT_MENU_OFFSET:minimumRightPosition+width+CONTEXT_MENU_OFFSET;const{y:y,positionY:positionY}=autoPositionVertical(-1*(CONTEXT_MENU_OFFSET+height));runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);}}",
};
const __initData = {
  code: "function autoPositionVertical_ContextMenuNativeTsx2(offset){const{pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset}=this.__closure;let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};}",
};
const __initData2 = {
  code: "function autoPositionHorizontal_ContextMenuNativeTsx3(){const{CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition}=this.__closure;const maxOffset=Math.max(CONTEXT_MENU_EDGE_OFFSET,screenWidth-CONTEXT_MENU_EDGE_OFFSET-CONTEXT_MENU_MIN_WIDTH);const fitsLeft=pageX<=maxOffset;const fitsRight=minimumRightPosition<=maxOffset;const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(fitsLeft!==fitsRight?fitsRight:distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:Math.min(x,maxOffset),positionX:positionX};}",
};
let closure_10 = {
  code: "function onPanGestureEnd_ContextMenuNativeTsx4(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}",
};
let closure_11 = {
  code: "function ContextMenuNativeTsx5(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}",
};
let closure_12 = {
  code: "function ContextMenuNativeTsx6(){const{runOnJS,triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(CONTEXT_MENU_OPEN_HAPTIC);measureButtonAndShowMenu();}",
};
let closure_13 = {
  code: "function ContextMenuNativeTsx7(){const{measureButtonAndShowMenu}=this.__closure;measureButtonAndShowMenu();}",
};
let closure_14 = {
  code: "function ContextMenuNativeTsx8(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}",
};
let closure_15 = {
  code: "function ContextMenuNativeTsx9(){const{runOnJS,triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(CONTEXT_MENU_OPEN_HAPTIC);measureButtonAndShowMenu();}",
};
let size = fn(2);
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenu.native.tsx");

export const ContextMenu = function ContextMenu(triggerOnLongPress) {
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
  const onOpen = triggerOnLongPress.onOpen;
  const onClose = triggerOnLongPress.onClose;
  const keyboardShouldPersistTaps = triggerOnLongPress.keyboardShouldPersistTaps;
  let flag4 = triggerOnLongPress.ignoreKeyboardHide;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let returnRef = triggerOnLongPress.returnRef;
  let flag5 = triggerOnLongPress.enabled;
  if (flag5 === undefined) {
    flag5 = true;
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
  let requestClose;
  let callback1;
  let callback2;
  let callback3;
  let obj = items(flag2[3]);
  if (buttonRef == null) {
    buttonRef = obj.useAnimatedRef();
  }
  let tmpResult = tmp(tmp2[3]);
  sharedValue = tmpResult.useSharedValue(-1);
  let obj2 = str;
  items = [buttonRef, sharedValue];
  const effect = str.useEffect(
    () =>
      buttonRef.observe((arg0) => {
        if (null != arg0) {
          const result = __initData3.set(arg0);
        }
      }),
    items,
  );
  const items1 = [items];
  const memo = str.useMemo(() => {
    const isArray = Array.isArray(items[0]);
    if (isArray) {
      items = arr.flat();
    }
    const dividerIndexes = [];
    if (isArray) {
      const item = arr.forEach((item, index) => {
        if (index > 0) {
          dividerIndexes.push(items.indexOf(item[0]));
        }
      });
    }
    return { items, dividerIndexes };
  }, items1);
  items2 = memo.items;
  dividerIndexes = memo.dividerIndexes;
  length = items2.length;
  obj = { ignoreKeyboard: null };
  tmpResult = tmp(tmp2[2]);
  obj.ignoreKeyboard = tmpResult.isAndroid();
  let size = flag(flag2[4])(obj);
  width = size.width;
  height = size.height;
  let tmp6 = flag(flag2[4]);
  contextMenuState = items(flag2[5]).useContextMenuState();
  activeIndex = contextMenuState.activeIndex;
  const tmpResult1 = items(flag2[5]);
  const fontScale = items(flag2[6]).useFontScale();
  if (undefined === returnRef) {
    returnRef = buttonRef;
  }
  const tmpResult2 = items(flag2[6]);
  activeContextMenu = items(flag2[5]).useActiveContextMenu();
  const tmpResult3 = items(flag2[5]);
  let result = (tmp(tmp2[7]).CONTEXT_MENU_ITEM_BASE_HEIGHT - 2 * tmp(tmp2[7]).CONTEXT_MENU_ITEM_PADDING) * fontScale;
  let result1 = 2 * tmp(tmp2[7]).CONTEXT_MENU_ITEM_PADDING;
  sharedValue1 = items(flag2[3]).useSharedValue(Math.max(result + result1, tmp(tmp2[7]).CONTEXT_MENU_ITEM_BASE_HEIGHT));
  obj2.useRef(items2);
  const items3 = [items2];
  const layoutEffect = obj2.useLayoutEffect(() => {
    closure_22.current = items2;
  }, items3);
  const items4 = [activeContextMenu, contextMenuState];
  const layoutEffect1 = obj2.useLayoutEffect(() => {
    if (null == activeContextMenu) {
      const result = ContextMenuState.resetContextMenuState(contextMenuState);
    }
  }, items4);
  const items5 = [activeIndex, onClose];
  requestClose = obj2.useCallback((arg0) => {
    if (onClose != null) {
      tmp(arg0);
    }
    ContextMenuState.hideContextMenu();
    value = activeIndex.get();
    if (-1 !== value) {
      if (ref.current[value] != null) {
        obj2.action();
      }
    }
  }, items5);
  const items6 = [returnRef];
  callback1 = obj2.useCallback(() => {
    const obj = { ref: returnRef };
    const result = obj.setAccessibilityFocus(obj);
  }, items6);
  const items7 = [
    onOpen,
    contextMenuState,
    items2,
    title,
    keyboardShouldPersistTaps,
    flag4,
    requestClose,
    callback1,
    dividerIndexes,
  ];
  callback2 = obj2.useCallback((x, y, positionX, positionY, height, width) => {
    if (onOpen != null) {
      tmp();
    }
    const size = {
      key: UID.uid(),
      x,
      y,
      positionX,
      positionY,
      height,
      width,
      state: contextMenuState,
      items: items2,
      title,
      keyboardShouldPersistTaps,
      requestClose,
      onClose: callback1,
      dividerIndexes,
      ignoreKeyboardHide: flag4,
    };
    ContextMenuState.showContextMenu(size);
    if (obj4.isAndroid()) {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t.ZqK0uI));
    }
    obj4 = PlatformUtils2;
  }, items7);
  class V {
    constructor() {
      if (onClose) {
        tmp10 = closure_12;
        value = closure_12.get();
        num = -1;
        if (-1 === value) {
          return;
        } else {
          tmp76 = items;
          tmp77 = c2;
          obj7 = items(c2[12]);
          result = obj7.measureInWindowForFWO(value);
          tmp79 = null;
          if (null == result) {
            return;
          } else {
            x3 = result.x;
            pageX = x3;
            ({ y: pageY, width, height } = result);
            tmp6 = x3;
            tmp7 = height;
            tmp8 = pageY;
            tmp9 = x3;
          }
        }
      } else {
        tmp = items;
        tmp2 = c2;
        obj = items(c2[3]);
        tmp3 = closure_11;
        measureResult = obj.measure(closure_11);
        tmp5 = null;
        if (null == measureResult) {
          return;
        } else {
          pageX = measureResult.pageX;
          ({ pageY, width, height } = measureResult);
          tmp6 = pageX;
          tmp7 = height;
          tmp8 = pageY;
          tmp9 = pageX;
        }
      }
      tmp12 = closure_4;
      if (null != closure_4) {
        tmp14 = length;
        num2 = 1;
        sum = length + 1;
      } else {
        sum = length;
      }
      num3 = 0;
      if (null != tmp12) {
        num3 = 1;
      }
      sum1 = num3 + dividerIndexes.length;
      result1 = closure_21.get() * sum;
      sum2 = result1 + items(c2[7]).CONTEXT_MENU_DIVIDER_HEIGHT * sum1;
      sum3 = tmp8 + tmp7;
      sum4 = sum3 + items(c2[7]).CONTEXT_MENU_OFFSET;
      closure_1 = sum4;
      diff = height - tmp8;
      sum5 = diff + items(c2[7]).CONTEXT_MENU_OFFSET;
      closure_2 = sum5;
      diff1 = height - sum4;
      diff2 = diff1 - items(c2[7]).CONTEXT_MENU_EDGE_OFFSET;
      closure_3 = diff2;
      diff3 = tmp8 - items(c2[7]).CONTEXT_MENU_EDGE_OFFSET;
      closure_4 = diff3;
      tmp25 = diff2 < sum2;
      closure_5 = tmp25;
      tmp26 = diff3 < sum2;
      closure_6 = tmp26;
      diff4 = width - tmp9 - width;
      bound = Math.max(diff4, items(c2[7]).CONTEXT_MENU_EDGE_OFFSET);
      closure_7 = bound;
      autoPositionVertical = function autoPositionVertical(arg0) {
        const CONTEXT_MENU_OFFSET = ContextMenuConstants.CONTEXT_MENU_OFFSET;
        if (closure_5 === closure_6) {
          let str2 = "above";
          if (diff2 > diff3) {
            str2 = "below";
          }
          str = str2;
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
      obj = {
        pageY,
        height,
        CONTEXT_MENU_OFFSET: items(c2[7]).CONTEXT_MENU_OFFSET,
        wouldOverflowBelow: tmp25,
        wouldOverflowAbove: tmp26,
        availableSpaceBelow: diff2,
        availableSpaceAbove: diff3,
        positionAboveOffset: sum5,
        positionBelowOffset: sum4,
      };
      autoPositionVertical.__closure = obj;
      autoPositionVertical.__workletHash = 15309589830995;
      autoPositionVertical.__initData = c8;
      autoPositionHorizontal = function autoPositionHorizontal() {
        const diff = width - ContextMenuConstants.CONTEXT_MENU_EDGE_OFFSET;
        bound = Math.max(
          ContextMenuConstants.CONTEXT_MENU_EDGE_OFFSET,
          diff - ContextMenuConstants.CONTEXT_MENU_MIN_WIDTH,
        );
        let tmp3 = pageX;
        let tmp6 = bound <= bound;
        const diff1 = pageX - ContextMenuConstants.CONTEXT_MENU_EDGE_OFFSET;
        diff2 = width - ContextMenuConstants.CONTEXT_MENU_EDGE_OFFSET;
        if (tmp4 === tmp6) {
          tmp6 = diff1 > diff2 - (pageX + ContextMenuConstants.CONTEXT_MENU_MIN_WIDTH);
        }
        str = "left";
        if (tmp6) {
          str = "right";
          tmp3 = bound;
        }
        return { x: Math.min(tmp3, bound), positionX: str };
      };
      obj1 = {
        CONTEXT_MENU_EDGE_OFFSET: items(c2[7]).CONTEXT_MENU_EDGE_OFFSET,
        screenWidth: width,
        CONTEXT_MENU_MIN_WIDTH: items(c2[7]).CONTEXT_MENU_MIN_WIDTH,
        pageX: tmp6,
        minimumRightPosition: bound,
      };
      autoPositionHorizontal.__closure = obj1;
      autoPositionHorizontal.__workletHash = 7547923192836;
      autoPositionHorizontal.__initData = closure_9;
      tmp29 = closure_3;
      if ("auto" === closure_3) {
        tmp64 = items;
        tmp65 = c2;
        CONTEXT_MENU_OFFSET2 = items(c2[7]).CONTEXT_MENU_OFFSET;
        if (tmp25 === tmp26) {
          str6 = "above";
          if (diff2 > diff3) {
            str6 = "below";
          }
          str5 = str6;
        } else {
          str5 = "below";
          if (tmp25) {
            str5 = "above";
          }
        }
        str7 = "above";
        if ("above" === str5) {
          sum4 = sum5;
        }
        tmp66 = sum4;
        result2 = autoPositionHorizontal();
        x2 = result2.x;
        tmp68 = items;
        tmp69 = c2;
        obj6 = items(c2[3]);
        tmp70 = closure_25;
        tmp71 = x2;
        tmp72 = str5;
        tmp73 = sum2;
        tmp74 = width;
        tmp75 = obj6.runOnJS(closure_25)(x2, tmp66, result2.positionX, str5, sum2, width);
      } else {
        str8 = "above";
        tmp80 = "above" === tmp29;
        if (!tmp80) {
          str = "below";
          if ("below" !== tmp29) {
            str9 = "left";
            str2 = "left";
            if ("left" === tmp29) {
              str2 = "right";
            }
            if ("left" === str2) {
              tmp35 = items;
              tmp36 = c2;
              sum6 = tmp9 + width;
              sum7 = sum6 + items(c2[7]).CONTEXT_MENU_OFFSET;
            } else {
              tmp31 = items;
              tmp32 = c2;
              sum8 = bound + width;
              sum7 = sum8 + items(c2[7]).CONTEXT_MENU_OFFSET;
            }
            tmp37 = items;
            tmp38 = c2;
            num4 = -1;
            tmp40 = items;
            tmp41 = c2;
            result3 = -1 * (items(c2[7]).CONTEXT_MENU_OFFSET + tmp7);
            CONTEXT_MENU_OFFSET = items(c2[7]).CONTEXT_MENU_OFFSET;
            if (tmp25 === tmp26) {
              str4 = "above";
              if (diff2 > diff3) {
                str4 = "below";
              }
              str3 = str4;
            } else {
              str3 = "below";
              if (tmp25) {
                str3 = "above";
              }
            }
            tmp42 = sum4;
            if ("above" === str3) {
              tmp42 = sum5;
            }
            tmp44 = items;
            tmp45 = c2;
            sum9 = tmp42 + result3;
            obj4 = items(c2[3]);
            tmp46 = closure_25;
            tmp47 = sum7;
            tmp48 = str2;
            tmp49 = str3;
            tmp50 = sum2;
            tmp51 = width;
            tmp52 = obj4.runOnJS(closure_25)(sum7, sum9, str2, str3, sum2, width);
          }
        }
        tmp53 = sum4;
        if (tmp80) {
          tmp53 = sum5;
        }
        result4 = autoPositionHorizontal();
        x = result4.x;
        tmp55 = items;
        tmp56 = c2;
        obj5 = items(c2[3]);
        tmp57 = closure_25;
        tmp58 = x;
        tmp59 = tmp53;
        tmp60 = tmp29;
        tmp61 = sum2;
        tmp62 = width;
        tmp63 = obj5.runOnJS(closure_25)(x, tmp53, result4.positionX, tmp29, sum2, width);
      }
      return;
    }
  }
  obj = {
    _isIOS: onClose,
    buttonTagSV: sharedValue,
    measureInWindowForFWO: tmp(tmp2[12]).measureInWindowForFWO,
    measure: tmp(tmp2[3]).measure,
    buttonRef,
    title,
    itemCount: length,
    dividerIndexes,
    approximateItemHeight: sharedValue1,
    CONTEXT_MENU_DIVIDER_HEIGHT: tmp(tmp2[7]).CONTEXT_MENU_DIVIDER_HEIGHT,
    CONTEXT_MENU_OFFSET: tmp(tmp2[7]).CONTEXT_MENU_OFFSET,
    screenHeight: height,
    CONTEXT_MENU_EDGE_OFFSET: tmp(tmp2[7]).CONTEXT_MENU_EDGE_OFFSET,
    screenWidth: width,
    CONTEXT_MENU_MIN_WIDTH: tmp(tmp2[7]).CONTEXT_MENU_MIN_WIDTH,
    menuAlign: str,
    runOnJS: tmp(tmp2[3]).runOnJS,
    showMenu: callback2,
  };
  V.__closure = obj;
  V.__workletHash = 4092679983812;
  V.__initData = keyboardShouldPersistTaps;
  const items8 = [buttonRef, sharedValue, sharedValue1, title, length, height, str, callback2, width, dividerIndexes];
  callback3 = obj2.useCallback(V, items8);
  const items9 = [flag, flag2, requestClose, flag5, contextMenuState, callback3];
  const items10 = [items2];
  const memo1 = obj2.useMemo(() => {
    function onPanGestureEnd() {
      activeIndex = activeIndex.activeIndex;
      value = activeIndex.get();
      items(flag2[3]).runOnJS(requestClose)(-1 === value);
    }
    let obj = { state: contextMenuState, runOnJS: ReanimatedRexport.runOnJS, requestClose };
    onPanGestureEnd.__closure = obj;
    onPanGestureEnd.__workletHash = 12851223476540;
    onPanGestureEnd.__initData = __initData;
    if (flag) {
      const Gesture2 = LegacyBaseButton.Gesture;
      const PanResult = Gesture2.Pan();
      const fn4 = function i(absoluteX) {
        const result = items(flag2[5]).updateContextMenuState(absoluteX.absoluteX, absoluteX.absoluteY, activeIndex);
      };
      obj = { updateContextMenuState: ContextMenuState.updateContextMenuState, state: contextMenuState };
      fn4.__closure = obj;
      fn4.__workletHash = 2460213213323;
      fn4.__initData = __initData2;
      const enabledResult = Gesture2.Pan().enabled(flag5);
      const onUpdateResult = Gesture2.Pan().enabled(flag5).onUpdate(fn4);
      const Gesture3 = LegacyBaseButton.Gesture;
      const onEndResult = Gesture2.Pan().enabled(flag5).onUpdate(fn4).onEnd(onPanGestureEnd);
      const LongPressResult = Gesture3.LongPress();
      const enabledResult1 = Gesture3.LongPress().enabled(flag5);
      let result = Gesture3.LongPress()
        .enabled(flag5)
        .minDuration(ContextMenuConstants.CONTEXT_MENU_LONG_PRESS_DURATION_MS)
        .shouldCancelWhenOutside(false);
      const fn5 = function n() {
        const obj = items(flag2[3]);
        items(flag2[3]).runOnJS(items(flag2[14]).triggerHapticFeedback)(items(flag2[7]).CONTEXT_MENU_OPEN_HAPTIC);
        callback3();
      };
      obj = {
        runOnJS: ReanimatedRexport.runOnJS,
        triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
        CONTEXT_MENU_OPEN_HAPTIC: ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC,
        measureButtonAndShowMenu: callback3,
      };
      fn5.__closure = obj;
      fn5.__workletHash = 13919366908951;
      fn5.__initData = __initData3;
      const minDurationResult = Gesture3.LongPress()
        .enabled(flag5)
        .minDuration(ContextMenuConstants.CONTEXT_MENU_LONG_PRESS_DURATION_MS);
      const Gesture4 = LegacyBaseButton.Gesture;
      return Gesture4.Simultaneous(result.onStart(fn5), onEndResult);
    } else {
      const Gesture = LegacyBaseButton.Gesture;
      if (flag2) {
        const TapResult = Gesture.Tap();
        const fn3 = function o() {
          callback3();
        };
        const obj1 = { measureButtonAndShowMenu: callback3 };
        fn3.__closure = obj1;
        fn3.__workletHash = 13410382812897;
        fn3.__initData = __initData4;
        let onStartResult1 = Gesture.Tap().enabled(flag5).onStart(fn3);
        const enabledResult2 = Gesture.Tap().enabled(flag5);
      } else {
        const PanResult1 = Gesture.Pan();
        const fn = function t() {
          const obj = items(flag2[3]);
          items(flag2[3]).runOnJS(items(flag2[14]).triggerHapticFeedback)(items(flag2[7]).CONTEXT_MENU_OPEN_HAPTIC);
          callback3();
        };
        const obj2 = {
          runOnJS: ReanimatedRexport.runOnJS,
          triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
          CONTEXT_MENU_OPEN_HAPTIC: ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC,
          measureButtonAndShowMenu: callback3,
        };
        fn.__closure = obj2;
        fn.__workletHash = 11906156003448;
        fn.__initData = __initData6;
        const enabledResult3 = Gesture.Pan().enabled(flag5);
        const fn2 = function e(absoluteX) {
          const result = items(flag2[5]).updateContextMenuState(absoluteX.absoluteX, absoluteX.absoluteY, activeIndex);
        };
        const obj3 = { updateContextMenuState: ContextMenuState.updateContextMenuState, state: contextMenuState };
        fn2.__closure = obj3;
        fn2.__workletHash = 17473642675622;
        fn2.__initData = __initData5;
        const onBeginResult = Gesture.Pan().enabled(flag5).onBegin(fn);
        onStartResult1 = Gesture.Pan().enabled(flag5).onBegin(fn).onUpdate(fn2).onEnd(onPanGestureEnd);
        const onUpdateResult1 = Gesture.Pan().enabled(flag5).onBegin(fn).onUpdate(fn2);
      }
      return onStartResult1;
    }
  }, items9);
  const items11 = [items2];
  const memo2 = obj2.useMemo(() => items2.map((label) => ({ name: label.label, label: label.label })), items10);
  const items12 = [callback3];
  const callback4 = obj2.useCallback((arg0) => {
    const nativeEvent = arg0;
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
    let isAndroidResult = PlatformUtils2.isAndroid();
    if (isAndroidResult) {
      let tmpResult = useIsScreenReaderEnabled;
      isAndroidResult = tmpResult.getIsScreenReaderEnabled();
    }
    if (isAndroidResult) {
      tmpResult = ReanimatedRexport;
      tmpResult.runOnUI(callback3)();
    }
  }, items12);
  let obj1 = {
    ref: buttonRef,
    onPress: callback5,
    onLongPress: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
  };
  let tmp24;
  if (flag) {
    if (flag3) {
      tmp24 = tmp23;
    }
  }
  obj1.onLongPress = tmp24;
  obj1.accessibilityActions = memo2;
  obj1.onAccessibilityAction = callback4;
  if (flag3) {
    obj2 = { children: children(obj1) };
    let tmp25Result = tmp25(title, obj2);
  } else {
    let obj3 = { gesture: memo1, children: children(obj1) };
    tmp25Result = tmp25(tmp(tmp2[13]).GestureDetector, obj3);
  }
  return tmp25Result;
};
