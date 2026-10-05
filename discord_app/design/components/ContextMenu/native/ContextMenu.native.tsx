// discord_app/design/components/ContextMenu/native/ContextMenu.native.tsx
import intl2 from "../../../../intl/index.native.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import shared from "../../../shared.tsx";
import HapticUtils from "../../../../modules/haptics/HapticUtils.native.tsx";
import useIsScreenReaderEnabled from "../../../../modules/a11y/native/useIsScreenReaderEnabled.native.tsx";
import react_native from "../../../../modules/a11y/native/setAccessibilityFocus.android.tsx";
import LegacyBaseButton from "../../../../../_runtime/06140_LegacyBaseButton.js";
import ContextMenuState from "ContextMenuState.native.tsx";
import ContextMenuConstants from "ContextMenuConstants.native.tsx";
import UID from "../../../../modules/core/web/UID.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
({ Fragment: closure_4, jsx: hasOwnProperty } = Fragment);
let closure_6 = PlatformUtils.isIOS();
let closure_7 = {
  code: "function ContextMenuNativeTsx1(){const{_isIOS,buttonTagSV,measureInWindowForFWO,measure,buttonRef,title,itemCount,dividerIndexes_0,approximateItemHeight,CONTEXT_MENU_DIVIDER_HEIGHT,CONTEXT_MENU_OFFSET,screenHeight,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,menuAlign,runOnJS,showMenu}=this.__closure;let pageX;let pageY;let width_0;let height_0;if(_isIOS){const tag_0=buttonTagSV.get();if(tag_0===-1)return;const m=measureInWindowForFWO(tag_0);if(m==null)return;pageX=m.x;pageY=m.y;width_0=m.width;height_0=m.height;}else{const m_0=measure(buttonRef);if(m_0==null)return;pageX=m_0.pageX;pageY=m_0.pageY;width_0=m_0.width;height_0=m_0.height;}const rowCount=title!=null?itemCount+1:itemCount;const dividerCount=(title!=null?1:0)+dividerIndexes_0.length;const menuHeight=approximateItemHeight.get()*rowCount+CONTEXT_MENU_DIVIDER_HEIGHT*dividerCount;const positionBelowOffset=pageY+height_0+CONTEXT_MENU_OFFSET;const positionAboveOffset=screenHeight-pageY+CONTEXT_MENU_OFFSET;const availableSpaceBelow=screenHeight-positionBelowOffset-CONTEXT_MENU_EDGE_OFFSET;const availableSpaceAbove=pageY-CONTEXT_MENU_EDGE_OFFSET;const wouldOverflowBelow=availableSpaceBelow<menuHeight;const wouldOverflowAbove=availableSpaceAbove<menuHeight;const minimumRightPosition=Math.max(screenWidth-pageX-width_0,CONTEXT_MENU_EDGE_OFFSET);function autoPositionVertical(offset){'worklet';let positionY_0='below';let y_0=pageY+height_0+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY_0='below';}else{positionY_0='above';}}else if(wouldOverflowBelow){positionY_0='above';}else{positionY_0='below';}y_0=(positionY_0==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y_0,positionY:positionY_0};}function autoPositionHorizontal(){'worklet';const maxOffset=Math.max(CONTEXT_MENU_EDGE_OFFSET,screenWidth-CONTEXT_MENU_EDGE_OFFSET-CONTEXT_MENU_MIN_WIDTH);const fitsLeft=pageX<=maxOffset;const fitsRight=minimumRightPosition<=maxOffset;const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX_0='left';let x_0=pageX;if(fitsLeft!==fitsRight?fitsRight:distanceFromLeftEdge>distanceFromRightEdge){positionX_0='right';x_0=minimumRightPosition;}return{x:Math.min(x_0,maxOffset),positionX:positionX_0};}if(menuAlign==='auto'){const{y:y_1,positionY:positionY_1}=autoPositionVertical();const{x:x_1,positionX:positionX_1}=autoPositionHorizontal();runOnJS(showMenu)(x_1,y_1,positionX_1,positionY_1,menuHeight,width_0);}else if(menuAlign==='above'||menuAlign==='below'){const positionY_2=menuAlign;const y_2=positionY_2==='above'?positionAboveOffset:positionBelowOffset;const{x:x_2,positionX:positionX_2}=autoPositionHorizontal();runOnJS(showMenu)(x_2,y_2,positionX_2,positionY_2,menuHeight,width_0);}else{const positionX_3=menuAlign==='left'?'right':'left';const x_3=positionX_3==='left'?pageX+width_0+CONTEXT_MENU_OFFSET:minimumRightPosition+width_0+CONTEXT_MENU_OFFSET;const{y:y_3,positionY:positionY_3}=autoPositionVertical(-1*(CONTEXT_MENU_OFFSET+height_0));runOnJS(showMenu)(x_3,y_3,positionX_3,positionY_3,menuHeight,width_0);}}",
};
const __initData = {
  code: "function autoPositionVertical_ContextMenuNativeTsx2(offset){const{pageY,height_0,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset}=this.__closure;let positionY_0='below';let y_0=pageY+height_0+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY_0='below';}else{positionY_0='above';}}else if(wouldOverflowBelow){positionY_0='above';}else{positionY_0='below';}y_0=(positionY_0==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y_0,positionY:positionY_0};}",
};
const __initData2 = {
  code: "function autoPositionHorizontal_ContextMenuNativeTsx3(){const{CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition}=this.__closure;const maxOffset=Math.max(CONTEXT_MENU_EDGE_OFFSET,screenWidth-CONTEXT_MENU_EDGE_OFFSET-CONTEXT_MENU_MIN_WIDTH);const fitsLeft=pageX<=maxOffset;const fitsRight=minimumRightPosition<=maxOffset;const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX_0='left';let x_0=pageX;if(fitsLeft!==fitsRight?fitsRight:distanceFromLeftEdge>distanceFromRightEdge){positionX_0='right';x_0=minimumRightPosition;}return{x:Math.min(x_0,maxOffset),positionX:positionX_0};}",
};
let closure_10 = {
  code: "function onPanGestureEnd_ContextMenuNativeTsx4(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex_0}=state;const isDismiss=activeIndex_0.get()===-1;runOnJS(requestClose)(isDismiss);}",
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
  code: "function ContextMenuNativeTsx8(e_0){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e_0.absoluteX,e_0.absoluteY,state);}",
};
let closure_15 = {
  code: "function ContextMenuNativeTsx9(){const{runOnJS,triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(CONTEXT_MENU_OPEN_HAPTIC);measureButtonAndShowMenu();}",
};
let size = size_mod;
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenu.native.tsx");

export const ContextMenu = function ContextMenu(triggerOnLongPress) {
  let __initData6;
  let children;
  let items;
  let tmp25;
  let tmp26Result;
  let tmpResult6;
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
  let items3;
  let dividerIndexes;
  let length;
  let width;
  let height;
  let contextMenuState;
  let activeIndex;
  let activeContextMenu;
  let sharedValue1;
  let ref;
  let requestClose;
  let callback1;
  let callback2;
  let callback3;
  const tmp = items;
  let obj = items(flag2[3]);
  if (buttonRef == null) {
    buttonRef = obj.useAnimatedRef();
  }
  let tmpResult = tmp(tmp2[3]);
  sharedValue = tmpResult.useSharedValue(-1);
  let obj3 = str;
  let items1 = [buttonRef, sharedValue];
  const effect = str.useEffect(
    () =>
      buttonRef.observe((arg0) => {
        if (null != arg0) {
          const result = __initData3.set(arg0);
        }
      }),
    items1,
  );
  const items2 = [items];
  const memo = str.useMemo(() => {
    const isArray = Array.isArray(items[0]);
    let items1 = items;
    if (isArray) {
      items1 = items.flat();
    }
    const dividerIndexes = [];
    if (isArray) {
      const item = items.forEach((item, index) => {
        if (index > 0) {
          dividerIndexes.push(items1.indexOf(item[0]));
        }
      });
    }
    return { items: items1, dividerIndexes };
  }, items2);
  items3 = memo.items;
  dividerIndexes = memo.dividerIndexes;
  length = items3.length;
  let obj2 = { ignoreKeyboard: tmpResult6.isAndroid() };
  let tmp6 = flag(tmp2[4]);
  tmpResult6 = tmp(flag2[2]);
  size = tmp6(obj2);
  width = size.width;
  height = size.height;
  const tmpResult7 = tmp(flag2[5]);
  contextMenuState = tmpResult7.useContextMenuState();
  activeIndex = contextMenuState.activeIndex;
  const tmpResult8 = tmp(flag2[6]);
  const fontScale = tmpResult8.useFontScale();
  if (undefined === returnRef) {
    returnRef = buttonRef;
  }
  const tmpResult9 = tmp(flag2[5]);
  activeContextMenu = tmpResult9.useActiveContextMenu();
  const useSharedValue = tmp(tmp2[3]).useSharedValue;
  tmp(flag2[3]);
  let result = (tmp(tmp2[7]).CONTEXT_MENU_ITEM_BASE_HEIGHT - 2 * tmp(tmp2[7]).CONTEXT_MENU_ITEM_PADDING) * fontScale;
  let result1 = 2 * tmp(tmp2[7]).CONTEXT_MENU_ITEM_PADDING;
  sharedValue1 = useSharedValue(max(result + result1, tmp(tmp2[7]).CONTEXT_MENU_ITEM_BASE_HEIGHT));
  ref = obj3.useRef(items3);
  const items4 = [items3];
  const layoutEffect = obj3.useLayoutEffect(() => {
    ref.current = items3;
  }, items4);
  const items5 = [activeContextMenu, contextMenuState];
  const layoutEffect1 = obj3.useLayoutEffect(() => {
    if (null == activeContextMenu) {
      const obj = ContextMenuState;
      const result = obj.resetContextMenuState(contextMenuState);
    }
  }, items5);
  const items6 = [activeIndex, onClose];
  requestClose = obj3.useCallback((arg0) => {
    if (onClose != null) {
      tmp(arg0);
    }
    const obj = ContextMenuState;
    obj.hideContextMenu();
    const value = activeIndex.get();
    if (-1 !== value) {
      if (ref.current[value] != null) {
        ref.current[value].action();
      }
    }
  }, items6);
  const items7 = [returnRef];
  callback1 = obj3.useCallback(() => {
    const obj = react_native;
    const obj2 = { ref: returnRef };
    const result = obj.setAccessibilityFocus(obj2);
  }, items7);
  const items8 = [
    onOpen,
    contextMenuState,
    items3,
    title,
    keyboardShouldPersistTaps,
    flag4,
    requestClose,
    callback1,
    dividerIndexes,
  ];
  callback2 = obj3.useCallback((x, y, positionX, positionY, height, width) => {
    let obj2;
    if (onOpen != null) {
      tmp();
    }
    size = {
      key: obj2.uid(),
      x,
      y,
      positionX,
      positionY,
      height,
      width,
      state: contextMenuState,
      items: items3,
      title,
      keyboardShouldPersistTaps,
      requestClose,
      onClose: callback1,
      dividerIndexes,
      ignoreKeyboardHide: flag4,
    };
    obj2 = UID;
    const obj3 = ContextMenuState;
    obj3.showContextMenu(size);
    const obj4 = PlatformUtils;
    if (obj4.isAndroid()) {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl2.intl;
      announce(intl.string(intl2.t.ZqK0uI));
    }
  }, items8);
  class V {
    constructor() {
      let diff3;
      let pageX;
      let pageY;
      let sum;
      let tmp10;
      let tmp7;
      let tmp8;
      let tmp9;
      if (onClose) {
        const value = sharedValue.get();
        let num = -1;
        if (-1 !== value) {
          const obj7 = items(flag2[12]);
          const result = obj7.measureInWindowForFWO(value);
          if (null != result) {
            const x3 = result.x;
            pageX = x3;
            ({ y: pageY, width, height } = result);
            tmp7 = x3;
            tmp8 = height;
            tmp9 = pageY;
            tmp10 = x3;
          }
        }
      } else {
        let obj = items(flag2[3]);
        const measureResult = obj.measure(buttonRef);
        let tmp6 = null;
        if (null != measureResult) {
          pageX = measureResult.pageX;
          ({ pageY, width, height } = measureResult);
          tmp7 = pageX;
          tmp8 = height;
          tmp9 = pageY;
          tmp10 = pageX;
        }
      }
      const tmp13 = diff3;
      if (null != diff3) {
        sum = length + 1;
      } else {
        sum = length;
      }
      let num3 = 0;
      if (null != tmp13) {
        num3 = 1;
      }
      const sum1 = num3 + dividerIndexes.length;
      const result1 = sharedValue1.get() * sum;
      const sum2 = result1 + items(flag2[7]).CONTEXT_MENU_DIVIDER_HEIGHT * sum1;
      const sum3 = tmp9 + tmp8;
      let sum4 = sum3 + items(flag2[7]).CONTEXT_MENU_OFFSET;
      let diff = height - tmp9;
      const sum5 = diff + items(flag2[7]).CONTEXT_MENU_OFFSET;
      let diff1 = height - sum4;
      let diff2 = diff1 - items(flag2[7]).CONTEXT_MENU_EDGE_OFFSET;
      diff3 = tmp9 - items(flag2[7]).CONTEXT_MENU_EDGE_OFFSET;
      let closure_5 = tmp26;
      closure_6 = tmp27;
      const diff4 = width - tmp10 - width;
      const bound = Math.max(diff4, items(flag2[7]).CONTEXT_MENU_EDGE_OFFSET);
      function autoPositionVertical(arg0) {
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
        const tmp4 = "above" === str ? sum5 : sum4;
        if (arg0 == null) {
          num = 0;
        }
        return { y: tmp4 + num, positionY: str };
      }
      autoPositionVertical.__closure = {
        pageY,
        height_0: height,
        CONTEXT_MENU_OFFSET: items(flag2[7]).CONTEXT_MENU_OFFSET,
        wouldOverflowBelow: diff2 < sum2,
        wouldOverflowAbove: diff3 < sum2,
        availableSpaceBelow: diff2,
        availableSpaceAbove: diff3,
        positionAboveOffset: sum5,
        positionBelowOffset: sum4,
      };
      autoPositionVertical.__workletHash = 4222464101587;
      autoPositionVertical.__initData = flag4;
      function autoPositionHorizontal() {
        const CONTEXT_MENU_EDGE_OFFSET = ContextMenuConstants.CONTEXT_MENU_EDGE_OFFSET;
        const diff = width - ContextMenuConstants.CONTEXT_MENU_EDGE_OFFSET;
        const maxResult = max(CONTEXT_MENU_EDGE_OFFSET, diff - ContextMenuConstants.CONTEXT_MENU_MIN_WIDTH);
        let tmp3 = pageX;
        let tmp6 = bound <= maxResult;
        const tmp4 = pageX <= maxResult;
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
        const obj = { x: Math.min(tmp3, maxResult), positionX: str };
        return obj;
      }
      ({
        pageY,
        height_0: height,
        CONTEXT_MENU_OFFSET: items(flag2[7]).CONTEXT_MENU_OFFSET,
        wouldOverflowBelow: diff2 < sum2,
        wouldOverflowAbove: diff3 < sum2,
        availableSpaceBelow: diff2,
        availableSpaceAbove: diff3,
        positionAboveOffset: sum5,
        positionBelowOffset: sum4,
      });
      autoPositionHorizontal.__closure = {
        CONTEXT_MENU_EDGE_OFFSET: items(flag2[7]).CONTEXT_MENU_EDGE_OFFSET,
        screenWidth: width,
        CONTEXT_MENU_MIN_WIDTH: items(flag2[7]).CONTEXT_MENU_MIN_WIDTH,
        pageX: tmp7,
        minimumRightPosition: bound,
      };
      autoPositionHorizontal.__workletHash = 7727399309508;
      autoPositionHorizontal.__initData = returnRef;
      ({
        CONTEXT_MENU_EDGE_OFFSET: items(flag2[7]).CONTEXT_MENU_EDGE_OFFSET,
        screenWidth: width,
        CONTEXT_MENU_MIN_WIDTH: items(flag2[7]).CONTEXT_MENU_MIN_WIDTH,
        pageX: tmp7,
        minimumRightPosition: bound,
      });
      if ("auto" === diff2) {
        let str5;
        const CONTEXT_MENU_OFFSET2 = items(flag2[7]).CONTEXT_MENU_OFFSET;
        if (diff2 < sum2 === diff3 < sum2) {
          let str6 = "above";
          if (diff2 > diff3) {
            str6 = "below";
          }
          str5 = str6;
        } else {
          str5 = "below";
          if (diff2 < sum2) {
            str5 = "above";
          }
        }
        if ("above" === str5) {
          sum4 = sum5;
        }
        const result2 = autoPositionHorizontal();
        const x2 = result2.x;
        const positionX2 = result2.positionX;
        const obj6 = items(flag2[3]);
        obj6.runOnJS(callback2)(x2, sum4, positionX2, str5, sum2, width);
      } else {
        if ("above" !== diff2) {
          str = "below";
          if ("below" !== diff2) {
            let sum7;
            let str3;
            let str2 = "left";
            if ("left" === diff2) {
              str2 = "right";
            }
            if ("left" === str2) {
              const sum6 = tmp10 + width;
              sum7 = sum6 + items(flag2[7]).CONTEXT_MENU_OFFSET;
            } else {
              const sum8 = bound + width;
              sum7 = sum8 + items(flag2[7]).CONTEXT_MENU_OFFSET;
            }
            const result3 = -1 * (items(flag2[7]).CONTEXT_MENU_OFFSET + tmp8);
            let CONTEXT_MENU_OFFSET = items(flag2[7]).CONTEXT_MENU_OFFSET;
            if (diff2 < sum2 === diff3 < sum2) {
              let str4 = "above";
              if (diff2 > diff3) {
                str4 = "below";
              }
              str3 = str4;
            } else {
              str3 = "below";
              if (diff2 < sum2) {
                str3 = "above";
              }
            }
            let tmp43 = sum4;
            if ("above" === str3) {
              tmp43 = sum5;
            }
            const sum9 = tmp43 + result3;
            const obj4 = items(flag2[3]);
            obj4.runOnJS(callback2)(sum7, sum9, str2, str3, sum2, width);
          }
        }
        let tmp54 = sum4;
        if ("above" === diff2) {
          tmp54 = sum5;
        }
        const result4 = autoPositionHorizontal();
        const x = result4.x;
        const positionX = result4.positionX;
        const obj5 = items(flag2[3]);
        obj5.runOnJS(callback2)(x, tmp54, positionX, diff2, sum2, width);
      }
    }
  }
  let obj4 = {
    _isIOS: onClose,
    buttonTagSV: sharedValue,
    measureInWindowForFWO: tmp(tmp2[12]).measureInWindowForFWO,
    measure: tmp(tmp2[3]).measure,
    buttonRef,
    title,
    itemCount: length,
    dividerIndexes_0: dividerIndexes,
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
  V.__closure = obj4;
  V.__workletHash = 14379784537061;
  V.__initData = keyboardShouldPersistTaps;
  const items9 = [buttonRef, sharedValue, sharedValue1, title, length, height, str, callback2, width, dividerIndexes];
  callback3 = obj3.useCallback(V, items9);
  const items10 = [flag, flag2, requestClose, flag5, contextMenuState, callback3];
  const items11 = [items3];
  const memo1 = obj3.useMemo(() => {
    function onPanGestureEnd() {
      activeIndex = activeIndex.activeIndex;
      const value = activeIndex.get();
      const obj = items(flag2[3]);
      obj.runOnJS(requestClose)(-1 === value);
    }
    let obj = { state: contextMenuState, runOnJS: ReanimatedRexport.runOnJS, requestClose };
    onPanGestureEnd.__closure = obj;
    onPanGestureEnd.__workletHash = 13880456258652;
    onPanGestureEnd.__initData = __initData;
    const tmp4 = flag;
    if (tmp4) {
      const Gesture2 = LegacyBaseButton.Gesture;
      const PanResult = Gesture2.Pan();
      const fn4 = function i(absoluteX) {
        const obj = items(flag2[5]);
        const result = obj.updateContextMenuState(absoluteX.absoluteX, absoluteX.absoluteY, activeIndex);
      };
      const obj2 = { updateContextMenuState: ContextMenuState.updateContextMenuState, state: contextMenuState };
      const onUpdate2 = PanResult.enabled(flag5).onUpdate;
      PanResult.enabled(flag5);
      fn4.__closure = obj2;
      fn4.__workletHash = 2460213213323;
      fn4.__initData = __initData2;
      const onUpdate2Result = onUpdate2(fn4);
      const onEndResult = onUpdate2Result.onEnd(onPanGestureEnd);
      const Gesture3 = LegacyBaseButton.Gesture;
      const LongPressResult = Gesture3.LongPress();
      const enabledResult1 = LongPressResult.enabled(flag5);
      const minDurationResult = enabledResult1.minDuration(ContextMenuConstants.CONTEXT_MENU_LONG_PRESS_DURATION_MS);
      let result = minDurationResult.shouldCancelWhenOutside(false);
      const fn5 = function n() {
        const obj = items(flag2[3]);
        const runOnJSResult = obj.runOnJS(items(flag2[14]).triggerHapticFeedback);
        runOnJSResult(items(flag2[7]).CONTEXT_MENU_OPEN_HAPTIC);
        callback3();
      };
      const onStart = result.onStart;
      fn5.__closure = {
        runOnJS: ReanimatedRexport.runOnJS,
        triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
        CONTEXT_MENU_OPEN_HAPTIC: ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC,
        measureButtonAndShowMenu: callback3,
      };
      fn5.__workletHash = 13919366908951;
      fn5.__initData = __initData3;
      const obj3 = {
        runOnJS: ReanimatedRexport.runOnJS,
        triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
        CONTEXT_MENU_OPEN_HAPTIC: ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC,
        measureButtonAndShowMenu: callback3,
      };
      const onStartResult = onStart(fn5);
      const Gesture4 = LegacyBaseButton.Gesture;
      return Gesture4.Simultaneous(onStartResult, onEndResult);
    } else {
      let onStartResult1;
      const Gesture = LegacyBaseButton.Gesture;
      if (flag2) {
        const fn3 = function o() {
          callback3();
        };
        const obj4 = { measureButtonAndShowMenu: callback3 };
        fn3.__closure = obj4;
        fn3.__workletHash = 13410382812897;
        fn3.__initData = __initData4;
        const TapResult = Gesture.Tap();
        const enabledResult2 = TapResult.enabled(flag5);
        onStartResult1 = enabledResult2.onStart(fn3);
      } else {
        const PanResult1 = Gesture.Pan();
        const fn = function t() {
          const obj = items(flag2[3]);
          const runOnJSResult = obj.runOnJS(items(flag2[14]).triggerHapticFeedback);
          runOnJSResult(items(flag2[7]).CONTEXT_MENU_OPEN_HAPTIC);
          callback3();
        };
        const obj5 = {
          runOnJS: ReanimatedRexport.runOnJS,
          triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
          CONTEXT_MENU_OPEN_HAPTIC: ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC,
          measureButtonAndShowMenu: callback3,
        };
        const onBegin = PanResult1.enabled(flag5).onBegin;
        PanResult1.enabled(flag5);
        fn.__closure = obj5;
        fn.__workletHash = 11906156003448;
        fn.__initData = __initData6;
        const fn2 = function e(absoluteX) {
          const obj = items(flag2[5]);
          const result = obj.updateContextMenuState(absoluteX.absoluteX, absoluteX.absoluteY, activeIndex);
        };
        const obj6 = { updateContextMenuState: ContextMenuState.updateContextMenuState, state: contextMenuState };
        const onUpdate = onBegin(fn).onUpdate;
        onBegin(fn);
        fn2.__closure = obj6;
        fn2.__workletHash = 12092888447433;
        fn2.__initData = __initData5;
        const onUpdateResult = onUpdate(fn2);
        onStartResult1 = onUpdateResult.onEnd(onPanGestureEnd);
      }
      return onStartResult1;
    }
  }, items10);
  const items12 = [items3];
  const memo2 = obj3.useMemo(() => items3.map((label) => ({ name: label.label, label: label.label })), items11);
  const items13 = [callback3];
  const callback4 = obj3.useCallback((arg0) => {
    let closure_0 = arg0;
    const found = items3.find((label) => label.label === nativeEvent.nativeEvent.actionName);
    if (found != null) {
      const action = found.action;
      if (action != null) {
        action();
      }
    }
  }, items12);
  [][0] = callback3;
  const callback5 = obj3.useCallback(() => {
    const obj = PlatformUtils;
    let isAndroidResult = obj.isAndroid();
    if (isAndroidResult) {
      const tmpResult = useIsScreenReaderEnabled;
      isAndroidResult = tmpResult.getIsScreenReaderEnabled();
    }
    if (isAndroidResult) {
      const tmpResult2 = ReanimatedRexport;
      tmpResult2.runOnUI(callback3)();
    }
  }, items13);
  let obj5 = {
    ref: buttonRef,
    onPress: callback5,
    onLongPress: tmp25,
    accessibilityActions: memo2,
    onAccessibilityAction: callback4,
  };
  tmp25 = undefined;
  if (flag) {
    if (flag3) {
      tmp25 = tmp24;
    }
  }
  const tmp26 = onOpen;
  if (flag3) {
    let obj6 = { children: children(obj5) };
    tmp26Result = tmp26(title, obj6);
  } else {
    let obj7 = { gesture: memo1, children: children(obj5) };
    const GestureDetector = tmp(tmp2[13]).GestureDetector;
    tmp26Result = tmp26(GestureDetector, obj7);
  }
  return tmp26Result;
};
