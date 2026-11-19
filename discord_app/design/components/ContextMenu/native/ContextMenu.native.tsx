// === Module 8539: ContextMenu ===

// Module 8539 (ContextMenu)
import util from "util" /* 1113 */;
import PlatformUtils2 from "PlatformUtils" /* 1380 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import _mod1708 from "module_1708" /* 1708 */;
import shared from "shared" /* 4799 */;
import HapticUtils from "HapticUtils" /* 5008 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5022 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5052 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5802 */;
import ContextMenuConstants from "ContextMenuConstants" /* 8540 */;
import ContextMenuState from "ContextMenuState" /* 8541 */;
import UID from "UID" /* 8542 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ Fragment: closure_4, jsx: hasOwnProperty } = jsxProd);
const PlatformUtils = fn(1380);
let closure_6 = PlatformUtils.isIOS();
let closure_7 = { code: "(function autoPositionHorizontal_ContextMenuNativeTsx1(){let[CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition]=this.__closure;const maxOffset=Math.max(CONTEXT_MENU_EDGE_OFFSET,screenWidth-CONTEXT_MENU_EDGE_OFFSET-CONTEXT_MENU_MIN_WIDTH);const fitsLeft=pageX<=maxOffset;const fitsRight=minimumRightPosition<=maxOffset;const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(fitsLeft!==fitsRight?fitsRight:distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:Math.min(x,maxOffset),positionX:positionX};})" };
let closure_8 = { code: "(function alignedPositionHorizontal_ContextMenuNativeTsx2(){let[menuAlign,pageX,width,CONTEXT_MENU_OFFSET,minimumRightPosition]=this.__closure;const positionX=menuAlign==='left'?'right':'left';const x=positionX==='left'?pageX+width+CONTEXT_MENU_OFFSET:minimumRightPosition+width+CONTEXT_MENU_OFFSET;return{x:x,positionX:positionX};})" };
let closure_9 = { code: "(function autoPositionVertical_ContextMenuNativeTsx3(offset){let[pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset]=this.__closure;let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};})" };
let closure_10 = { code: "(function ContextMenuNativeTsx4(){let[_isIOS,buttonTagSV,measureInWindowForFWO,measure,buttonRef,screenWidth,CONTEXT_MENU_EDGE_OFFSET,_worklet_6415449136191_init_data,CONTEXT_MENU_MIN_WIDTH,_worklet_902167285228_init_data,menuAlign,CONTEXT_MENU_OFFSET,title,itemCount,dividerIndexes,subLabelSizes,approximateItemHeight,CONTEXT_MENU_DIVIDER_HEIGHT,subLabelLineHeight,screenHeight,_worklet_17476909660843_init_data,scheduleOnRN,showMenu]=this.__closure;let pageX;let pageY;let width;let height;if(_isIOS){const tag=buttonTagSV.get();if(tag===-1)return;const m=measureInWindowForFWO(tag);if(m==null)return;pageX=m.x;pageY=m.y;width=m.width;height=m.height;}else{const m=measure(buttonRef);if(m==null)return;pageX=m.pageX;pageY=m.pageY;width=m.width;height=m.height;}const minimumRightPosition=Math.max(screenWidth-pageX-width,CONTEXT_MENU_EDGE_OFFSET);const autoPositionHorizontal=function autoPositionHorizontal_ContextMenuNativeTsx1Factory([_worklet_6415449136191_init_data,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition]){const autoPositionHorizontal=function(){const maxOffset=Math.max(CONTEXT_MENU_EDGE_OFFSET,screenWidth-CONTEXT_MENU_EDGE_OFFSET-CONTEXT_MENU_MIN_WIDTH);const fitsLeft=pageX<=maxOffset;const fitsRight=minimumRightPosition<=maxOffset;const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(fitsLeft!==fitsRight?fitsRight:distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:Math.min(x,maxOffset),positionX:positionX};};autoPositionHorizontal.__closure=[CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition];autoPositionHorizontal.__workletHash=6415449136191;autoPositionHorizontal.__initData=_worklet_6415449136191_init_data;return autoPositionHorizontal;}([_worklet_6415449136191_init_data,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition]);const alignedPositionHorizontal=function alignedPositionHorizontal_ContextMenuNativeTsx2Factory([_worklet_902167285228_init_data,menuAlign,pageX,width,CONTEXT_MENU_OFFSET,minimumRightPosition]){const alignedPositionHorizontal=function(){const positionX=menuAlign==='left'?'right':'left';const x=positionX==='left'?pageX+width+CONTEXT_MENU_OFFSET:minimumRightPosition+width+CONTEXT_MENU_OFFSET;return{x:x,positionX:positionX};};alignedPositionHorizontal.__closure=[menuAlign,pageX,width,CONTEXT_MENU_OFFSET,minimumRightPosition];alignedPositionHorizontal.__workletHash=902167285228;alignedPositionHorizontal.__initData=_worklet_902167285228_init_data;return alignedPositionHorizontal;}([_worklet_902167285228_init_data,menuAlign,pageX,width,CONTEXT_MENU_OFFSET,minimumRightPosition]);const{x:x,positionX:positionX}=menuAlign==='left'||menuAlign==='right'?alignedPositionHorizontal():autoPositionHorizontal();const rowCount=title!=null?itemCount+1:itemCount;const dividerCount=(title!=null?1:0)+dividerIndexes.length;const menuWidth=Math.max(screenWidth-CONTEXT_MENU_EDGE_OFFSET-x,CONTEXT_MENU_MIN_WIDTH);let subLabelLineCount=0;for(const{textWidth:textWidth,inset:inset}of subLabelSizes){subLabelLineCount+=Math.max(1,Math.ceil(textWidth/(menuWidth-inset)));}const menuHeight=approximateItemHeight.get()*rowCount+CONTEXT_MENU_DIVIDER_HEIGHT*dividerCount+subLabelLineHeight*subLabelLineCount;const positionBelowOffset=pageY+height+CONTEXT_MENU_OFFSET;const positionAboveOffset=screenHeight-pageY+CONTEXT_MENU_OFFSET;const availableSpaceBelow=screenHeight-positionBelowOffset-CONTEXT_MENU_EDGE_OFFSET;const availableSpaceAbove=pageY-CONTEXT_MENU_EDGE_OFFSET;const wouldOverflowBelow=availableSpaceBelow<menuHeight;const wouldOverflowAbove=availableSpaceAbove<menuHeight;const autoPositionVertical=function autoPositionVertical_ContextMenuNativeTsx3Factory([_worklet_17476909660843_init_data,pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset]){const autoPositionVertical=function(offset){let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};};autoPositionVertical.__closure=[pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset];autoPositionVertical.__workletHash=17476909660843;autoPositionVertical.__initData=_worklet_17476909660843_init_data;return autoPositionVertical;}([_worklet_17476909660843_init_data,pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset]);if(menuAlign==='auto'){const{y:y,positionY:positionY}=autoPositionVertical();scheduleOnRN(showMenu,x,y,positionX,positionY,menuHeight,width);}else if(menuAlign==='above'||menuAlign==='below'){const positionY=menuAlign;const y=positionY==='above'?positionAboveOffset:positionBelowOffset;scheduleOnRN(showMenu,x,y,positionX,positionY,menuHeight,width);}else{const{y:y,positionY:positionY}=autoPositionVertical(-1*(CONTEXT_MENU_OFFSET+height));scheduleOnRN(showMenu,x,y,positionX,positionY,menuHeight,width);}})" };
let closure_11 = { code: "(function onPanGestureEnd_ContextMenuNativeTsx5(){let[state,scheduleOnRN,requestClose]=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;scheduleOnRN(requestClose,isDismiss);})" };
let closure_12 = { code: "(function ContextMenuNativeTsx6(e){let[updateContextMenuState,state]=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);})" };
let closure_13 = { code: "(function ContextMenuNativeTsx7(){let[scheduleOnRN,triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC,measureButtonAndShowMenu]=this.__closure;scheduleOnRN(triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC);measureButtonAndShowMenu();})" };
const dependencyMap2 = { code: "(function ContextMenuNativeTsx9(){let[scheduleOnRN,triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC,measureButtonAndShowMenu]=this.__closure;scheduleOnRN(triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC);measureButtonAndShowMenu();})" };
let closure_16 = { code: "(function ContextMenuNativeTsx10(e){let[updateContextMenuState,state]=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);})" };
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
  const title = triggerOnLongPress.title;
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
  c20 = undefined;
  let callback3;
  if (buttonRef == null) {
    buttonRef = obj.useAnimatedRef();
  }
  c10 = buttonRef;
  obj = require("module_1655");
  const sharedValue = require("module_1655").useSharedValue(-1);
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
  let tmpResult = require("module_1655");
  const scaledTextLineHeight = require("useScaledTextLineHeight").useScaledTextLineHeight(tmp(8540).CONTEXT_MENU_ITEM_SUB_LABEL_VARIANT);
  c14 = scaledTextLineHeight;
  let items4 = [items3, scaledTextLineHeight];
  const memo1 = noop.useMemo(() => {
    ({ fontSize: c0, lineHeight: c1 } = _undefined(_undefined3[6]).TextStyleSheet[_undefined(undefined, _undefined3[5]).CONTEXT_MENU_ITEM_SUB_LABEL_VARIANT]);
    return _undefined5.flatMap((subLabel) => {
      if (null == subLabel.subLabel) {
        return [];
      } else {
        const result = 2 * ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING;
        const sum = result + ContextMenuConstants.CONTEXT_MENU_ITEM_GAP;
        if (null != tmp) {
          let num = ContextMenuConstants.CONTEXT_MENU_ITEM_ICON_SIZE;
        } else {
          num = 0;
        }
        let num2 = 0;
        const sum1 = sum + num;
        if (null != tmp3) {
          num2 = ContextMenuConstants.CONTEXT_MENU_ITEM_GAP + ContextMenuConstants.CONTEXT_MENU_ITEM_ICON_SIZE;
        }
        const sum2 = sum1 + num2;
        const match = str.match(ContextMenuConstants.CONTEXT_MENU_ITEM_SUB_LABEL_FULL_WIDTH_CHARACTERS);
        let num3;
        if (match != null) {
          num3 = match.length;
        }
        if (num3 == null) {
          num3 = 0;
        }
        const obj = { textWidth: null, inset: null };
        const result1 = _undefined * (c14 / _undefined2);
        const diff = str.length - num3;
        obj.textWidth = result1 * (diff * ContextMenuConstants.CONTEXT_MENU_ITEM_SUB_LABEL_GLYPH_WIDTH + num3);
        obj.inset = sum2;
        items = [obj];
        return items;
      }
    });
  }, items4);
  let obj2 = { ignoreKeyboard: null };
  const tmpResult7 = require("useScaledTextLineHeight");
  const tmp8 = useWindowDimensionsDefault;
  obj2.ignoreKeyboard = require("PlatformUtils").isAndroid();
  const tmpResult8 = require("PlatformUtils");
  ({ width, height } = tmp8(obj2));
  const tmp8Result = tmp8(obj2);
  const contextMenuState = require("ContextMenuState").useContextMenuState();
  c15 = contextMenuState;
  let activeIndex = contextMenuState.activeIndex;
  c16 = activeIndex;
  const tmpResult9 = require("ContextMenuState");
  const fontScale = require("useFontScale").useFontScale();
  if (undefined === returnRef) {
    returnRef = buttonRef;
  }
  c8 = returnRef;
  const tmpResult10 = require("useFontScale");
  const isContextMenuActive = require("ContextMenuState").useIsContextMenuActive(contextMenuState);
  const tmpResult11 = require("ContextMenuState");
  let result = (tmp(8540).CONTEXT_MENU_ITEM_BASE_HEIGHT - 2 * tmp(8540).CONTEXT_MENU_ITEM_PADDING) * fontScale;
  let result1 = 2 * tmp(8540).CONTEXT_MENU_ITEM_PADDING;
  const sharedValue1 = require("module_1655").useSharedValue(Math.max(result + result1, tmp(8540).CONTEXT_MENU_ITEM_BASE_HEIGHT));
  obj3.useRef(items3);
  let items5 = [isContextMenuActive, contextMenuState];
  const layoutEffect = obj3.useLayoutEffect(() => {
    if (!c17) {
      const result = ContextMenuState.resetContextMenuState(c15);
    }
  }, items5);
  let items6 = [activeIndex, onClose];
  const callback = obj3.useCallback((arg0) => {
    if (c5 != null) {
      tmp(arg0);
    }
    ContextMenuState.hideContextMenu();
    value = _undefined7.get();
    if (-1 !== value) {
      if (_undefined8.current[value] != null) {
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
    c18.current = _undefined5;
    const size = { key: UID.uid(), x, y, positionX, positionY, height, width, state, items: _undefined5, title, keyboardShouldPersistTaps, requestClose, onClose, dividerIndexes, ignoreKeyboardHide };
    ContextMenuState.showContextMenu(size);
    if (obj4.isAndroid()) {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t.ZqK0uI));
    }
    obj4 = PlatformUtils2;
  }, items8);
  let items9 = [c10, c6, sharedValue, require("FWOMeasureUtils").measureInWindowForFWO, require("module_1655").measure, buttonRef, width, require("ContextMenuConstants").CONTEXT_MENU_EDGE_OFFSET, c7, require("ContextMenuConstants").CONTEXT_MENU_MIN_WIDTH, c8, str, require("ContextMenuConstants").CONTEXT_MENU_OFFSET, title, items3.length, dividerIndexes, memo1, sharedValue1, require("ContextMenuConstants").CONTEXT_MENU_DIVIDER_HEIGHT, scaledTextLineHeight, height, c9, require("module_1708").scheduleOnRN, callback2];
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
  c20 = undefined;
  callback3 = undefined;
  c22 = undefined;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43] = items9;
  class ContextMenuNativeTsx4 {
    constructor() {
      if (closure_0) {
        tmp5 = closure_1;
        value = closure_1.get();
        num = -1;
        if (-1 === value) {
          return;
        } else {
          tmp69 = closure_2;
          tmp70 = closure_2(value);
          tmp71 = null;
          if (null == tmp70) {
            return;
          } else {
            ({ x: pageX, y: pageY, width, height } = tmp70);
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
      tmp8 = closure_6;
      bound = Math.max(closure_5 - pageX - width, closure_6);
      items = [, , , , , ];
      items[0] = closure_7;
      items[1] = closure_6;
      items[2] = closure_5;
      items[3] = closure_8;
      items[4] = pageX;
      items[5] = bound;
      tmp10 = closure_8;
      items1 = [, , , , , ];
      items1[0] = closure_9;
      items1[1] = closure_10;
      items1[2] = pageX;
      items1[3] = width;
      items1[4] = closure_11;
      items1[5] = bound;
      tmp11 = (function autoPositionHorizontal_ContextMenuNativeTsx1Factory(items) {
        [tmp, tmp2, tmp3, tmp4, tmp5, tmp6] = items;
        function autoPositionHorizontal() {
          const bound = Math.max(closure_1_0, closure_1_1 - closure_1_0 - closure_1_2);
          let tmp6 = closure_1_4 <= bound;
          let tmp7 = closure_1_3;
          if (closure_1_3 <= bound === tmp6) {
            tmp6 = tmp7 - closure_1_0 > closure_1_1 - closure_1_0 - (tmp7 + closure_1_2);
          }
          let str = "left";
          if (tmp6) {
            str = "right";
            tmp7 = closure_1_4;
          }
          return { x: Math.min(tmp7, bound), positionX: str };
        }
        items = [tmp2, tmp3, tmp4, tmp5, tmp6];
        autoPositionHorizontal.__closure = items;
        autoPositionHorizontal.__workletHash = 6415449136191;
        autoPositionHorizontal.__initData = tmp;
        return autoPositionHorizontal;
      })(items);
      tmp12 = closure_10;
      tmp13 = (function alignedPositionHorizontal_ContextMenuNativeTsx2Factory(items1) {
        [tmp, tmp2, tmp3, tmp4, tmp5, tmp6] = items1;
        function alignedPositionHorizontal() {
          let positionX = "left";
          if ("left" === closure_1_0) {
            positionX = "right";
          }
          if ("left" === positionX) {
            let x = closure_1_1 + closure_1_2 + closure_1_3;
          } else {
            x = closure_1_4 + closure_1_2 + closure_1_3;
          }
          return { x, positionX };
        }
        items = [tmp2, tmp3, tmp4, tmp5, tmp6];
        alignedPositionHorizontal.__closure = items;
        alignedPositionHorizontal.__workletHash = 902167285228;
        alignedPositionHorizontal.__initData = tmp;
        return alignedPositionHorizontal;
      })(items1);
      if ("left" !== closure_10) {
        str = "right";
        if ("right" !== tmp12) {
          tmp11Result = tmp11();
        }
        ({ x, positionX } = tmp11Result);
        tmp16 = null;
        tmp15 = closure_12;
        if (null != closure_12) {
          tmp18 = closure_13;
          num2 = 1;
          sum = closure_13 + 1;
        } else {
          sum = closure_13;
        }
        num3 = 0;
        if (null != tmp15) {
          num3 = 1;
        }
        tmp19 = closure_14;
        _Math = Math;
        sum1 = num3 + closure_14.length;
        num4 = 0;
        tmp23 = closure_15;
        bound1 = Math.max(tmp7 - tmp8 - x, tmp10);
        tmp22 = closure_15;
        iter = closure_15[Symbol.iterator]();
        num5 = 1;
        tmp24 = tmp22;
        nextResult = iter.next();
        tmp26 = iter;
        while (iter !== undefined) {
          tmp27 = num4;
          _Math2 = Math;
          _Math3 = Math;
          num4 = num4 + Math.max(1, Math.ceil(nextResult.textWidth / (bound1 - nextResult.inset)));
          continue;
        }
        tmp28 = closure_16;
        tmp29 = closure_17;
        tmp30 = closure_18;
        sum2 = closure_16.get() * sum + closure_17 * sum1 + closure_18 * num4;
        sum3 = pageY + height + closure_11;
        tmp34 = closure_19;
        sum4 = closure_19 - pageY + closure_11;
        tmp36 = closure_6;
        diff = closure_19 - sum3 - closure_6;
        diff1 = pageY - closure_6;
        tmp39 = closure_20;
        items2 = [, , , , , , , , , ];
        items2[0] = closure_20;
        items2[1] = pageY;
        items2[2] = height;
        items2[3] = closure_11;
        items2[4] = diff < sum2;
        items2[5] = diff1 < sum2;
        items2[6] = diff;
        items2[7] = diff1;
        items2[8] = sum4;
        items2[9] = sum3;
        tmp32 = closure_11;
        tmp40 = (function autoPositionVertical_ContextMenuNativeTsx3Factory(items2) {
          [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items2;
          function autoPositionVertical(arg0) {
            if (closure_1_0 === closure_1_1) {
              let str2 = "above";
              if (closure_1_2 > closure_1_3) {
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
            return { y: ("above" === str ? closure_1_4 : closure_1_5) + num, positionY: str };
          }
          items = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
          autoPositionVertical.__closure = items;
          autoPositionVertical.__workletHash = 17476909660843;
          autoPositionVertical.__initData = tmp;
          return autoPositionVertical;
        })(items2);
        tmp41 = closure_10;
        str2 = "auto";
        if ("auto" === closure_10) {
          tmp40Result = tmp40();
          tmp62 = closure_21;
          tmp63 = closure_22;
          tmp64 = x;
          tmp65 = positionX;
          tmp66 = sum2;
          tmp67 = width;
          tmp68 = closure_21(closure_22, x, tmp40Result.y, positionX, tmp40Result.positionY, sum2, width);
        } else {
          str3 = "above";
          tmp42 = "above" === tmp41;
          if (!tmp42) {
            str4 = "below";
            if ("below" !== tmp41) {
              num6 = -1;
              tmp40Result1 = tmp40(-1 * (tmp32 + height));
              tmp44 = closure_21;
              tmp45 = closure_22;
              tmp46 = x;
              tmp47 = positionX;
              tmp48 = sum2;
              tmp49 = width;
              tmp50 = closure_21(closure_22, x, tmp40Result1.y, positionX, tmp40Result1.positionY, sum2, width);
            }
          }
          tmp52 = closure_22;
          tmp51 = closure_21;
          if (tmp42) {
            sum3 = sum4;
          }
          tmp53 = tmp52;
          tmp54 = x;
          tmp55 = sum3;
          tmp56 = positionX;
          tmp57 = tmp41;
          tmp58 = sum2;
          tmp59 = width;
          tmp51Result = tmp51(tmp52, x, sum3, positionX, tmp41, sum2, width);
        }
        return;
      }
      tmp11Result = tmp13();
      return;
    }
  }
  let items10 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43];
  ContextMenuNativeTsx4.__closure = items10;
  ContextMenuNativeTsx4.__workletHash = 10100660931029;
  ContextMenuNativeTsx4.__initData = tmp20;
  let items11 = [buttonRef, sharedValue, sharedValue1, title, items3.length, memo1, scaledTextLineHeight, height, str, callback2, width, dividerIndexes];
  callback3 = obj3.useCallback(ContextMenuNativeTsx4, items11);
  const items12 = [flag, flag2, callback, flag5, contextMenuState, callback3];
  const items13 = [items3];
  const memo2 = obj3.useMemo(() => {
    items = [closure_11, c15, _mod1708.scheduleOnRN, c19];
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
    onPanGestureEnd.__workletHash = 16518527967049;
    onPanGestureEnd.__initData = tmp4;
    if (c1) {
      const Gesture2 = LegacyBaseButton.Gesture;
      const PanResult = Gesture2.Pan();
      const items2 = [closure_12, ContextMenuState.updateContextMenuState, c15];
      c0 = undefined;
      c1 = undefined;
      [tmp32, tmp33, tmp34] = items2;
      class ContextMenuNativeTsx6 {
        constructor(arg0) {
          tmp = closure_0(arg0.absoluteX, arg0.absoluteY, closure_1);
          return;
        }
      }
      const items3 = [tmp33, tmp34];
      ContextMenuNativeTsx6.__closure = items3;
      ContextMenuNativeTsx6.__workletHash = 89879631185;
      ContextMenuNativeTsx6.__initData = tmp32;
      const enabledResult = Gesture2.Pan().enabled(c9);
      const onUpdateResult = Gesture2.Pan().enabled(c9).onUpdate(ContextMenuNativeTsx6);
      const Gesture3 = LegacyBaseButton.Gesture;
      const onEndResult = Gesture2.Pan().enabled(c9).onUpdate(ContextMenuNativeTsx6).onEnd(onPanGestureEnd);
      const LongPressResult = Gesture3.LongPress();
      const enabledResult1 = Gesture3.LongPress().enabled(c9);
      const result = Gesture3.LongPress().enabled(c9).minDuration(ContextMenuConstants.CONTEXT_MENU_LONG_PRESS_DURATION_MS).shouldCancelWhenOutside(false);
      const items4 = [closure_13, _mod1708.scheduleOnRN, HapticUtils.triggerHapticFeedback, ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC, callback3];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      [tmp39, tmp40, tmp41, tmp42, tmp43] = items4;
      class ContextMenuNativeTsx7 {
        constructor() {
          tmp = closure_0(closure_1, closure_2);
          tmp2 = closure_3();
          return;
        }
      }
      const items5 = [tmp40, tmp41, tmp42, tmp43];
      ContextMenuNativeTsx7.__closure = items5;
      ContextMenuNativeTsx7.__workletHash = 8112947832354;
      ContextMenuNativeTsx7.__initData = tmp39;
      const minDurationResult = Gesture3.LongPress().enabled(c9).minDuration(ContextMenuConstants.CONTEXT_MENU_LONG_PRESS_DURATION_MS);
      const Gesture4 = LegacyBaseButton.Gesture;
      return Gesture4.Simultaneous(result.onStart(ContextMenuNativeTsx7), onEndResult);
    } else {
      const Gesture = LegacyBaseButton.Gesture;
      if (c2) {
        const TapResult = Gesture.Tap();
        const items6 = [closure_14, callback3];
        c0 = undefined;
        [tmp27, tmp28] = items6;
        class ContextMenuNativeTsx8 {
          constructor() {
            tmp = closure_0();
            return;
          }
        }
        const items7 = [tmp28];
        class ContextMenuNativeTsx6 {
          constructor(arg0) {
            tmp = closure_0(arg0.absoluteX, arg0.absoluteY, closure_1);
            return;
          }
        }
        ContextMenuNativeTsx8.__workletHash = 2417298642999;
        ContextMenuNativeTsx8.__initData = tmp27;
        let onStartResult1 = Gesture.Tap().enabled(c9).onStart(ContextMenuNativeTsx8);
        const enabledResult2 = Gesture.Tap().enabled(c9);
      } else {
        const PanResult1 = Gesture.Pan();
        const items8 = [closure_15, _mod1708.scheduleOnRN, HapticUtils.triggerHapticFeedback, ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC, ];
        class ContextMenuNativeTsx8 {
          constructor() {
            tmp = closure_0();
            return;
          }
        }
        c0 = undefined;
        c1 = undefined;
        class ContextMenuNativeTsx6 {
          constructor(arg0) {
            tmp = closure_0(arg0.absoluteX, arg0.absoluteY, closure_1);
            return;
          }
        }
        c3 = undefined;
        [tmp13, tmp14, tmp15, tmp16, tmp17] = items8;
        class ContextMenuNativeTsx9 {
          constructor() {
            tmp = closure_0(closure_1, closure_2);
            tmp2 = closure_3();
            return;
          }
        }
        const items9 = [tmp14, tmp15, tmp16, tmp17];
        ContextMenuNativeTsx9.__closure = items9;
        ContextMenuNativeTsx9.__workletHash = 16873439989804;
        ContextMenuNativeTsx9.__initData = tmp13;
        const enabledResult3 = Gesture.Pan().enabled(c9);
        const items10 = [closure_16, ContextMenuState.updateContextMenuState, c15];
        c0 = undefined;
        c1 = undefined;
        [r10099, tmp20, tmp21] = items10;
        class ContextMenuNativeTsx10 {
          constructor(arg0) {
            tmp = closure_0(arg0.absoluteX, arg0.absoluteY, closure_1);
            return;
          }
        }
        const items11 = [tmp20, tmp21];
        ContextMenuNativeTsx10.__closure = items11;
        ContextMenuNativeTsx10.__workletHash = 13412244797894;
        class ContextMenuNativeTsx7 {
          constructor() {
            tmp = closure_0(closure_1, closure_2);
            tmp2 = closure_3();
            return;
          }
        }
        const onBeginResult = Gesture.Pan().enabled(c9).onBegin(ContextMenuNativeTsx9);
        onStartResult1 = Gesture.Pan().enabled(c9).onBegin(ContextMenuNativeTsx9).onUpdate(ContextMenuNativeTsx10).onEnd(onPanGestureEnd);
        const onUpdateResult1 = Gesture.Pan().enabled(c9).onBegin(ContextMenuNativeTsx9).onUpdate(ContextMenuNativeTsx10);
      }
      return onStartResult1;
    }
  }, items12);
  const items14 = [items3];
  const memo3 = obj3.useMemo(() => {
    const found = _undefined5.filter((disabled) => true !== disabled.disabled);
    return found.map((label) => {
      const obj = { name: label.label, label: null };
      if (null != label.subLabel) {
        const _HermesInternal = HermesInternal;
        label = "" + label.label + ", " + label.subLabel;
      } else {
        label = label.label;
      }
      obj.label = label;
      return obj;
    });
  }, items13);
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
      _mod1708.scheduleOnUI(callback3);
      const tmpResult2 = _mod1708;
    }
  }, items15);
  let obj4 = { ref: buttonRef, onPress: callback5, onLongPress: null, accessibilityActions: null, onAccessibilityAction: null };
  let tmp50;
  if (flag) {
    if (flag3) {
      tmp50 = tmp49;
    }
  }
  obj4.onLongPress = tmp50;
  obj4.accessibilityActions = memo3;
  obj4.onAccessibilityAction = callback4;
  if (flag3) {
    const obj5 = { children: children(obj4) };
    let tmp51Result = tmp51(c4, obj5);
  } else {
    const obj6 = { gesture: memo2, children: children(obj4) };
    tmp51Result = tmp51(tmp(5052).GestureDetector, obj6);
  }
  return tmp51Result;
}