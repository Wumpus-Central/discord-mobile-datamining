// === Module 10005: ContextMenu ===

// Module 10005 (ContextMenu)
import util from "util" /* 1113 */;
import PlatformUtils2 from "PlatformUtils" /* 1377 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1705 from "module_1705" /* 1705 */;
import shared from "shared" /* 5148 */;
import HapticUtils from "HapticUtils" /* 5383 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5397 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5426 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 6141 */;
import ContextMenuState from "ContextMenuState" /* 10006 */;
import ContextMenuConstants from "ContextMenuConstants" /* 10007 */;
import UID from "UID" /* 10008 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ Fragment: closure_4, jsx: hasOwnProperty } = jsxProd);
const PlatformUtils = fn(1377);
let closure_6 = PlatformUtils.isIOS();
let closure_8 = { code: "(function autoPositionHorizontal_ContextMenuNativeTsx2(){let[CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition]=this.__closure;const maxOffset=Math.max(CONTEXT_MENU_EDGE_OFFSET,screenWidth-CONTEXT_MENU_EDGE_OFFSET-CONTEXT_MENU_MIN_WIDTH);const fitsLeft=pageX<=maxOffset;const fitsRight=minimumRightPosition<=maxOffset;const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(fitsLeft!==fitsRight?fitsRight:distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:Math.min(x,maxOffset),positionX:positionX};})" };
let closure_9 = { code: "(function ContextMenuNativeTsx3(){let[_isIOS,buttonTagSV,measureInWindowForFWO,measure,buttonRef,title,itemCount,dividerIndexes,approximateItemHeight,CONTEXT_MENU_DIVIDER_HEIGHT,CONTEXT_MENU_OFFSET,screenHeight,CONTEXT_MENU_EDGE_OFFSET,screenWidth,_worklet_6531739149033_init_data,_worklet_15634429266076_init_data,CONTEXT_MENU_MIN_WIDTH,menuAlign,scheduleOnRN,showMenu]=this.__closure;let pageX;let pageY;let width;let height;if(_isIOS){const tag=buttonTagSV.get();if(tag===-1)return;const m=measureInWindowForFWO(tag);if(m==null)return;pageX=m.x;pageY=m.y;width=m.width;height=m.height;}else{const m=measure(buttonRef);if(m==null)return;pageX=m.pageX;pageY=m.pageY;width=m.width;height=m.height;}const rowCount=title!=null?itemCount+1:itemCount;const dividerCount=(title!=null?1:0)+dividerIndexes.length;const menuHeight=approximateItemHeight.get()*rowCount+CONTEXT_MENU_DIVIDER_HEIGHT*dividerCount;const positionBelowOffset=pageY+height+CONTEXT_MENU_OFFSET;const positionAboveOffset=screenHeight-pageY+CONTEXT_MENU_OFFSET;const availableSpaceBelow=screenHeight-positionBelowOffset-CONTEXT_MENU_EDGE_OFFSET;const availableSpaceAbove=pageY-CONTEXT_MENU_EDGE_OFFSET;const wouldOverflowBelow=availableSpaceBelow<menuHeight;const wouldOverflowAbove=availableSpaceAbove<menuHeight;const minimumRightPosition=Math.max(screenWidth-pageX-width,CONTEXT_MENU_EDGE_OFFSET);const autoPositionVertical=function autoPositionVertical_ContextMenuNativeTsx1Factory([_worklet_6531739149033_init_data,pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset]){const autoPositionVertical=function(offset){let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};};autoPositionVertical.__closure=[pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset];autoPositionVertical.__workletHash=6531739149033;autoPositionVertical.__initData=_worklet_6531739149033_init_data;return autoPositionVertical;}([_worklet_6531739149033_init_data,pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset]);const autoPositionHorizontal=function autoPositionHorizontal_ContextMenuNativeTsx2Factory([_worklet_15634429266076_init_data,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition]){const autoPositionHorizontal=function(){const maxOffset=Math.max(CONTEXT_MENU_EDGE_OFFSET,screenWidth-CONTEXT_MENU_EDGE_OFFSET-CONTEXT_MENU_MIN_WIDTH);const fitsLeft=pageX<=maxOffset;const fitsRight=minimumRightPosition<=maxOffset;const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(fitsLeft!==fitsRight?fitsRight:distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:Math.min(x,maxOffset),positionX:positionX};};autoPositionHorizontal.__closure=[CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition];autoPositionHorizontal.__workletHash=15634429266076;autoPositionHorizontal.__initData=_worklet_15634429266076_init_data;return autoPositionHorizontal;}([_worklet_15634429266076_init_data,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition]);if(menuAlign==='auto'){const{y:y,positionY:positionY}=autoPositionVertical();const{x:x,positionX:positionX}=autoPositionHorizontal();scheduleOnRN(showMenu,x,y,positionX,positionY,menuHeight,width);}else if(menuAlign==='above'||menuAlign==='below'){const positionY=menuAlign;const y=positionY==='above'?positionAboveOffset:positionBelowOffset;const{x:x,positionX:positionX}=autoPositionHorizontal();scheduleOnRN(showMenu,x,y,positionX,positionY,menuHeight,width);}else{const positionX=menuAlign==='left'?'right':'left';const x=positionX==='left'?pageX+width+CONTEXT_MENU_OFFSET:minimumRightPosition+width+CONTEXT_MENU_OFFSET;const{y:y,positionY:positionY}=autoPositionVertical(-1*(CONTEXT_MENU_OFFSET+height));scheduleOnRN(showMenu,x,y,positionX,positionY,menuHeight,width);}})" };
let closure_10 = { code: "(function onPanGestureEnd_ContextMenuNativeTsx4(){let[state,scheduleOnRN,requestClose]=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;scheduleOnRN(requestClose,isDismiss);})" };
let closure_11 = { code: "(function ContextMenuNativeTsx5(e){let[updateContextMenuState,state]=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);})" };
let closure_12 = { code: "(function ContextMenuNativeTsx6(){let[scheduleOnRN,triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC,measureButtonAndShowMenu]=this.__closure;scheduleOnRN(triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC);measureButtonAndShowMenu();})" };
let closure_13 = { code: "(function ContextMenuNativeTsx7(){let[measureButtonAndShowMenu]=this.__closure;measureButtonAndShowMenu();})" };
let closure_14 = { code: "(function ContextMenuNativeTsx8(){let[scheduleOnRN,triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC,measureButtonAndShowMenu]=this.__closure;scheduleOnRN(triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC);measureButtonAndShowMenu();})" };
let closure_15 = { code: "(function ContextMenuNativeTsx9(e){let[updateContextMenuState,state]=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);})" };
let size = fn(2);
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenu.native.tsx");

export function ContextMenu(triggerOnLongPress) {
  ({ children, items } = triggerOnLongPress);
  _require = items;
  let flag = triggerOnLongPress.triggerOnLongPress;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = flag;
  let flag2 = triggerOnLongPress.triggerOnTap;
  if (flag2 === undefined) {
    flag2 = false;
  }
  dependencyMap = flag2;
  let flag3 = triggerOnLongPress.disableGesture;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let str = triggerOnLongPress.align;
  if (str === undefined) {
    str = "auto";
  }
  let title = triggerOnLongPress.title;
  noop = title;
  const onOpen = triggerOnLongPress.onOpen;
  c4 = onOpen;
  const onClose = triggerOnLongPress.onClose;
  c5 = onClose;
  const keyboardShouldPersistTaps = triggerOnLongPress.keyboardShouldPersistTaps;
  c6 = keyboardShouldPersistTaps;
  let flag4 = triggerOnLongPress.ignoreKeyboardHide;
  if (flag4 === undefined) {
    flag4 = false;
  }
  c7 = flag4;
  let returnRef = triggerOnLongPress.returnRef;
  c8 = returnRef;
  let flag5 = triggerOnLongPress.enabled;
  if (flag5 === undefined) {
    flag5 = true;
  }
  c9 = flag5;
  let buttonRef = triggerOnLongPress.buttonRef;
  c10 = buttonRef;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  c17 = undefined;
  c18 = undefined;
  c19 = undefined;
  let callback3;
  if (buttonRef == null) {
    buttonRef = obj.useAnimatedRef();
  }
  c10 = buttonRef;
  obj = require("module_1652");
  const sharedValue = require("module_1652").useSharedValue(-1);
  c11 = sharedValue;
  let items1 = [buttonRef, sharedValue];
  const effect = noop.useEffect(() => _undefined4.observe((arg0) => {
    if (null != arg0) {
      const result = closure_1_11.set(arg0);
    }
  }), items1);
  let items2 = [items];
  const memo = noop.useMemo(() => {
    const isArray = Array.isArray(_undefined[0]);
    let items1 = _undefined;
    if (isArray) {
      items1 = _undefined.flat();
    }
    dividerIndexes = [];
    if (isArray) {
      const item = _undefined.forEach((item, index) => {
        if (index > 0) {
          dividerIndexes.push(items1.indexOf(item[0]));
        }
      });
    }
    return { items: items1, dividerIndexes };
  }, items2);
  let items3 = memo.items;
  c12 = items3;
  let dividerIndexes = memo.dividerIndexes;
  c13 = dividerIndexes;
  let obj2 = { ignoreKeyboard: null };
  let tmpResult = require("module_1652");
  let tmp6 = useWindowDimensionsDefault;
  obj2.ignoreKeyboard = require("PlatformUtils").isAndroid();
  const tmpResult6 = require("PlatformUtils");
  ({ width, height } = tmp6(obj2));
  const tmp6Result = tmp6(obj2);
  const contextMenuState = require("ContextMenuState").useContextMenuState();
  c14 = contextMenuState;
  let activeIndex = contextMenuState.activeIndex;
  c15 = activeIndex;
  const tmpResult7 = require("ContextMenuState");
  const fontScale = require("useFontScale").useFontScale();
  if (undefined === returnRef) {
    returnRef = buttonRef;
  }
  c8 = returnRef;
  const tmpResult8 = require("useFontScale");
  const activeContextMenu = require("ContextMenuState").useActiveContextMenu();
  const tmpResult9 = require("ContextMenuState");
  let result = (tmp(10007).CONTEXT_MENU_ITEM_BASE_HEIGHT - 2 * tmp(10007).CONTEXT_MENU_ITEM_PADDING) * fontScale;
  const result1 = 2 * tmp(10007).CONTEXT_MENU_ITEM_PADDING;
  const sharedValue1 = require("module_1652").useSharedValue(Math.max(result + result1, tmp(10007).CONTEXT_MENU_ITEM_BASE_HEIGHT));
  obj3.useRef(items3);
  let items4 = [items3];
  const layoutEffect = obj3.useLayoutEffect(() => {
    c17.current = _undefined5;
  }, items4);
  let items5 = [activeContextMenu, contextMenuState];
  const layoutEffect1 = obj3.useLayoutEffect(() => {
    if (null == c16) {
      const result = ContextMenuState.resetContextMenuState(c14);
    }
  }, items5);
  let items6 = [activeIndex, onClose];
  const callback = obj3.useCallback((arg0) => {
    if (c5 != null) {
      tmp(arg0);
    }
    ContextMenuState.hideContextMenu();
    value = _undefined6.get();
    if (-1 !== value) {
      if (_undefined7.current[value] != null) {
        obj2.action();
      }
    }
  }, items6);
  let items7 = [returnRef];
  const callback1 = obj3.useCallback(() => {
    const result = setAccessibilityFocus.setAccessibilityFocus({ ref });
  }, items7);
  let items8 = [onOpen, contextMenuState, items3, title, keyboardShouldPersistTaps, flag4, callback, callback1, dividerIndexes];
  const callback2 = obj3.useCallback((x, y, positionX, positionY, height, width) => {
    if (c4 != null) {
      tmp();
    }
    const size = { key: UID.uid(), x, y, positionX, positionY, height, width, state, items: _undefined5, title, keyboardShouldPersistTaps, requestClose, onClose, dividerIndexes, ignoreKeyboardHide };
    ContextMenuState.showContextMenu(size);
    if (obj4.isAndroid()) {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t.ZqK0uI));
    }
    obj4 = PlatformUtils2;
  }, items8);
  let items9 = [c9, c6, sharedValue, require("FWOMeasureUtils").measureInWindowForFWO, require("module_1652").measure, buttonRef, title, items3.length, dividerIndexes, sharedValue1, require("ContextMenuConstants").CONTEXT_MENU_DIVIDER_HEIGHT, require("ContextMenuConstants").CONTEXT_MENU_OFFSET, height, require("ContextMenuConstants").CONTEXT_MENU_EDGE_OFFSET, width, c7, c8, require("ContextMenuConstants").CONTEXT_MENU_MIN_WIDTH, str, require("module_1705").scheduleOnRN, callback2];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  c17 = undefined;
  c18 = undefined;
  c19 = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39] = items9;
  class ContextMenuNativeTsx3 {
    constructor() {
      if (closure_0) {
        tmp5 = closure_1;
        value = closure_1.get();
        num = -1;
        if (-1 === value) {
          return;
        } else {
          tmp70 = closure_2;
          tmp71 = closure_2(value);
          tmp72 = null;
          if (null == tmp71) {
            return;
          } else {
            ({ x: pageX, y: pageY, width, height } = tmp71);
          }
        }
      } else {
        tmp = closure_3;
        tmp2 = closure_4;
        tmp3 = closure_3(closure_4);
        tmp4 = null;
        if (null == tmp3) {
          return;
        } else {
          ({ pageX, pageY, width, height } = tmp3);
        }
      }
      tmp7 = closure_5;
      if (null != closure_5) {
        tmp9 = closure_6;
        num2 = 1;
        sum = closure_6 + 1;
      } else {
        sum = closure_6;
      }
      num3 = 0;
      if (null != tmp7) {
        num3 = 1;
      }
      sum1 = num3 + closure_7.length;
      sum2 = closure_8.get() * sum + closure_9 * sum1;
      tmp12 = closure_10;
      sum3 = pageY + height + closure_10;
      sum4 = closure_11 - pageY + closure_10;
      diff = closure_11 - sum3 - closure_12;
      diff1 = pageY - closure_12;
      tmp15 = closure_12;
      tmp18 = closure_13;
      bound = Math.max(closure_13 - pageX - width, closure_12);
      items = [, , , , , , , , , ];
      items[0] = closure_14;
      items[1] = pageY;
      items[2] = height;
      items[3] = closure_10;
      items[4] = diff < sum2;
      items[5] = diff1 < sum2;
      items[6] = diff;
      items[7] = diff1;
      items[8] = sum4;
      items[9] = sum3;
      closure_0 = undefined;
      closure_1 = undefined;
      closure_2 = undefined;
      closure_3 = undefined;
      closure_4 = undefined;
      closure_5 = undefined;
      [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items;
      autoPositionVertical = function autoPositionVertical(arg0) {
        if (c0 === c1) {
          let str2 = "above";
          if (c2 > c3) {
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
        return { y: ("above" === str ? c4 : c5) + num, positionY: str };
      };
      items1 = [, , , , , , , , ];
      items1[0] = tmp21;
      items1[1] = tmp22;
      items1[2] = tmp23;
      items1[3] = tmp24;
      items1[4] = tmp25;
      items1[5] = tmp26;
      items1[6] = tmp27;
      items1[7] = tmp28;
      items1[8] = tmp29;
      autoPositionVertical.__closure = items1;
      autoPositionVertical.__workletHash = 6531739149033;
      autoPositionVertical.__initData = tmp20;
      items2 = [, , , , , ];
      items2[0] = closure_15;
      items2[1] = tmp15;
      items2[2] = tmp18;
      items2[3] = closure_16;
      items2[4] = pageX;
      items2[5] = bound;
      closure_0 = undefined;
      closure_1 = undefined;
      closure_2 = undefined;
      closure_3 = undefined;
      closure_4 = undefined;
      [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items2;
      autoPositionHorizontal = function autoPositionHorizontal() {
        const bound = Math.max(c0, c1 - c0 - c2);
        let tmp6 = c4 <= bound;
        let tmp7 = c3;
        if (c3 <= bound === tmp6) {
          tmp6 = tmp7 - c0 > c1 - c0 - (tmp7 + c2);
        }
        let str = "left";
        if (tmp6) {
          str = "right";
          tmp7 = c4;
        }
        return { x: Math.min(tmp7, bound), positionX: str };
      };
      items3 = [, , , , ];
      items3[0] = tmp31;
      items3[1] = tmp32;
      items3[2] = tmp33;
      items3[3] = tmp34;
      items3[4] = tmp35;
      autoPositionHorizontal.__closure = items3;
      autoPositionHorizontal.__workletHash = 15634429266076;
      autoPositionHorizontal.__initData = tmp30;
      tmp36 = closure_17;
      if ("auto" === closure_17) {
        if (tmp24 === tmp25) {
          str7 = "above";
          if (tmp26 > tmp27) {
            str7 = "below";
          }
          str6 = str7;
        } else {
          str6 = "below";
          if (tmp24) {
            str6 = "above";
          }
        }
        str8 = "above";
        if ("above" === str6) {
          tmp29 = tmp28;
        }
        tmp59 = tmp29;
        _Math3 = Math;
        bound1 = Math.max(tmp31, tmp32 - tmp31 - tmp33);
        tmp61 = tmp35 <= bound1;
        if (tmp34 <= bound1 === tmp61) {
          tmp61 = tmp34 - tmp31 > tmp32 - tmp31 - (tmp34 + tmp33);
        }
        str9 = "left";
        if (tmp61) {
          str9 = "right";
          tmp34 = tmp35;
        }
        _Math4 = Math;
        tmp62 = closure_18;
        tmp63 = closure_19;
        tmp64 = tmp59;
        tmp65 = str9;
        tmp66 = str6;
        tmp67 = sum2;
        tmp68 = width;
        tmp69 = closure_18(closure_19, Math.min(tmp34, bound1), tmp59, str9, str6, sum2, width);
      } else {
        str10 = "above";
        tmp73 = "above" === tmp36;
        if (!tmp73) {
          str = "below";
          if ("below" !== tmp36) {
            str11 = "left";
            str2 = "left";
            if ("left" === tmp36) {
              str2 = "right";
            }
            if ("left" === str2) {
              sum5 = pageX + width + tmp12;
            } else {
              sum5 = bound + width + tmp12;
            }
            num4 = -1;
            result = -1 * (tmp12 + height);
            if (tmp24 === tmp25) {
              str4 = "above";
              if (tmp26 > tmp27) {
                str4 = "below";
              }
              str3 = str4;
            } else {
              str3 = "below";
              if (tmp24) {
                str3 = "above";
              }
            }
            tmp39 = tmp29;
            if ("above" === str3) {
              tmp39 = tmp28;
            }
            tmp40 = closure_18;
            tmp41 = closure_19;
            tmp42 = sum5;
            tmp43 = str2;
            tmp44 = str3;
            tmp45 = sum2;
            tmp46 = width;
            tmp47 = closure_18(closure_19, sum5, tmp39 + result, str2, str3, sum2, width);
          }
        }
        if (tmp73) {
          sum3 = sum4;
        }
        _Math = Math;
        bound2 = Math.max(tmp31, tmp32 - tmp31 - tmp33);
        tmp49 = tmp35 <= bound2;
        if (tmp34 <= bound2 === tmp49) {
          tmp49 = tmp34 - tmp31 > tmp32 - tmp31 - (tmp34 + tmp33);
        }
        str5 = "left";
        tmp50 = tmp34;
        if (tmp49) {
          str5 = "right";
          tmp50 = tmp35;
        }
        _Math2 = Math;
        tmp51 = closure_18;
        tmp52 = closure_19;
        tmp53 = sum3;
        tmp54 = str5;
        tmp55 = tmp36;
        tmp56 = sum2;
        tmp57 = width;
        tmp58 = closure_18(closure_19, Math.min(tmp50, bound2), sum3, str5, tmp36, sum2, width);
      }
      return;
    }
  }
  let items10 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39];
  ContextMenuNativeTsx3.__closure = items10;
  ContextMenuNativeTsx3.__workletHash = 1550332207580;
  ContextMenuNativeTsx3.__initData = tmp19;
  let items11 = [buttonRef, sharedValue, sharedValue1, title, items3.length, height, str, callback2, width, dividerIndexes];
  callback3 = obj3.useCallback(ContextMenuNativeTsx3, items11);
  const items12 = [flag, flag2, callback, flag5, contextMenuState, callback3];
  const items13 = [items3];
  const memo1 = obj3.useMemo(() => {
    items = [closure_10, c14, _mod1705.scheduleOnRN, c18];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp4, tmp5, tmp6, tmp7] = items;
    function onPanGestureEnd() {
      const activeIndex = _undefined.activeIndex;
      _undefined2(c2, -1 === activeIndex.get());
    }
    const items1 = [tmp5, tmp6, tmp7];
    onPanGestureEnd.__closure = items1;
    onPanGestureEnd.__workletHash = 6633715277896;
    onPanGestureEnd.__initData = tmp4;
    if (c1) {
      const Gesture2 = LegacyBaseButton.Gesture;
      const PanResult = Gesture2.Pan();
      const items2 = [closure_11, ContextMenuState.updateContextMenuState, c14];
      c0 = undefined;
      c1 = undefined;
      [tmp32, tmp33, tmp34] = items2;
      class ContextMenuNativeTsx5 {
        constructor(arg0) {
          tmp = closure_0(arg0.absoluteX, arg0.absoluteY, closure_1);
          return;
        }
      }
      const items3 = [tmp33, tmp34];
      ContextMenuNativeTsx5.__closure = items3;
      ContextMenuNativeTsx5.__workletHash = 5295895820498;
      ContextMenuNativeTsx5.__initData = tmp32;
      const enabledResult = Gesture2.Pan().enabled(c9);
      const onUpdateResult = Gesture2.Pan().enabled(c9).onUpdate(ContextMenuNativeTsx5);
      const Gesture3 = LegacyBaseButton.Gesture;
      const onEndResult = Gesture2.Pan().enabled(c9).onUpdate(ContextMenuNativeTsx5).onEnd(onPanGestureEnd);
      const LongPressResult = Gesture3.LongPress();
      const enabledResult1 = Gesture3.LongPress().enabled(c9);
      const result = Gesture3.LongPress().enabled(c9).minDuration(ContextMenuConstants.CONTEXT_MENU_LONG_PRESS_DURATION_MS).shouldCancelWhenOutside(false);
      const items4 = [closure_12, _mod1705.scheduleOnRN, HapticUtils.triggerHapticFeedback, ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC, callback3];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      [tmp39, tmp40, tmp41, tmp42, tmp43] = items4;
      class ContextMenuNativeTsx6 {
        constructor() {
          tmp = closure_0(closure_1, closure_2);
          tmp2 = closure_3();
          return;
        }
      }
      const items5 = [tmp40, tmp41, tmp42, tmp43];
      ContextMenuNativeTsx6.__closure = items5;
      ContextMenuNativeTsx6.__workletHash = 14138010151587;
      ContextMenuNativeTsx6.__initData = tmp39;
      const minDurationResult = Gesture3.LongPress().enabled(c9).minDuration(ContextMenuConstants.CONTEXT_MENU_LONG_PRESS_DURATION_MS);
      const Gesture4 = LegacyBaseButton.Gesture;
      return Gesture4.Simultaneous(result.onStart(ContextMenuNativeTsx6), onEndResult);
    } else {
      const Gesture = LegacyBaseButton.Gesture;
      if (c2) {
        const TapResult = Gesture.Tap();
        const items6 = [closure_13, callback3];
        c0 = undefined;
        [tmp27, tmp28] = items6;
        class ContextMenuNativeTsx7 {
          constructor() {
            tmp = closure_0();
            return;
          }
        }
        const items7 = [tmp28];
        class ContextMenuNativeTsx5 {
          constructor(arg0) {
            tmp = closure_0(arg0.absoluteX, arg0.absoluteY, closure_1);
            return;
          }
        }
        ContextMenuNativeTsx7.__workletHash = 7507777918904;
        ContextMenuNativeTsx7.__initData = tmp27;
        let onStartResult1 = Gesture.Tap().enabled(c9).onStart(ContextMenuNativeTsx7);
        const enabledResult2 = Gesture.Tap().enabled(c9);
      } else {
        const PanResult1 = Gesture.Pan();
        const items8 = [closure_14, _mod1705.scheduleOnRN, HapticUtils.triggerHapticFeedback, ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC, ];
        class ContextMenuNativeTsx7 {
          constructor() {
            tmp = closure_0();
            return;
          }
        }
        c0 = undefined;
        c1 = undefined;
        class ContextMenuNativeTsx5 {
          constructor(arg0) {
            tmp = closure_0(arg0.absoluteX, arg0.absoluteY, closure_1);
            return;
          }
        }
        c3 = undefined;
        [tmp13, tmp14, tmp15, tmp16, tmp17] = items8;
        class ContextMenuNativeTsx8 {
          constructor() {
            tmp = closure_0(closure_1, closure_2);
            tmp2 = closure_3();
            return;
          }
        }
        const items9 = [tmp14, tmp15, tmp16, tmp17];
        ContextMenuNativeTsx8.__closure = items9;
        ContextMenuNativeTsx8.__workletHash = 1255029642413;
        ContextMenuNativeTsx8.__initData = tmp13;
        const enabledResult3 = Gesture.Pan().enabled(c9);
        const items10 = [closure_15, ContextMenuState.updateContextMenuState, c14];
        c0 = undefined;
        c1 = undefined;
        [r10099, tmp20, tmp21] = items10;
        class ContextMenuNativeTsx9 {
          constructor(arg0) {
            tmp = closure_0(arg0.absoluteX, arg0.absoluteY, closure_1);
            return;
          }
        }
        const items11 = [tmp20, tmp21];
        ContextMenuNativeTsx9.__closure = items11;
        ContextMenuNativeTsx9.__workletHash = 16373593377246;
        class ContextMenuNativeTsx6 {
          constructor() {
            tmp = closure_0(closure_1, closure_2);
            tmp2 = closure_3();
            return;
          }
        }
        const onBeginResult = Gesture.Pan().enabled(c9).onBegin(ContextMenuNativeTsx8);
        onStartResult1 = Gesture.Pan().enabled(c9).onBegin(ContextMenuNativeTsx8).onUpdate(ContextMenuNativeTsx9).onEnd(onPanGestureEnd);
        const onUpdateResult1 = Gesture.Pan().enabled(c9).onBegin(ContextMenuNativeTsx8).onUpdate(ContextMenuNativeTsx9);
      }
      return onStartResult1;
    }
  }, items12);
  const items14 = [items3];
  const memo2 = obj3.useMemo(() => _undefined5.map((label) => ({ name: label.label, label: label.label })), items13);
  const items15 = [callback3];
  const callback4 = obj3.useCallback((arg0) => {
    const nativeEvent = arg0;
    const found = _undefined5.find((label) => label.label === nativeEvent.nativeEvent.actionName);
    if (found != null) {
      const action = found.action;
      if (action != null) {
        action();
      }
    }
  }, items14);
  [][0] = callback3;
  const callback5 = obj3.useCallback(() => {
    let isAndroidResult = PlatformUtils2.isAndroid();
    if (isAndroidResult) {
      isAndroidResult = useIsScreenReaderEnabled.getIsScreenReaderEnabled();
      const tmpResult = useIsScreenReaderEnabled;
    }
    if (isAndroidResult) {
      _mod1705.scheduleOnUI(callback3);
      const tmpResult2 = _mod1705;
    }
  }, items15);
  let obj4 = { ref: buttonRef, onPress: callback5, onLongPress: null, accessibilityActions: null, onAccessibilityAction: null };
  let tmp46;
  if (flag) {
    if (flag3) {
      tmp46 = tmp45;
    }
  }
  obj4.onLongPress = tmp46;
  obj4.accessibilityActions = memo2;
  obj4.onAccessibilityAction = callback4;
  if (flag3) {
    const obj5 = { children: children(obj4) };
    let tmp47Result = tmp47(c4, obj5);
  } else {
    const obj6 = { gesture: memo1, children: children(obj4) };
    tmp47Result = tmp47(tmp(5426).GestureDetector, obj6);
  }
  return tmp47Result;
}