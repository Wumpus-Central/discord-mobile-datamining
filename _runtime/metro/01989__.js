// === Module 1989: ? ===

// Module 1989
import _modDef1652 from "module_1652" /* 1652 */;
import _modDef1987 from "module_1987" /* 1987 */;
import useScrollStateDefault from "useScrollState" /* 1990 */;
import utils from "utils" /* 1991 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop_mod from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let noop = fn(19);
({ useCallback: closure_4, useEffect: hasOwnProperty, useImperativeHandle: closure_6, useMemo: metroImportDefault, forwardRef } = noop);
let noop = noop_mod;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = { code: "(function pnpm_indexTsx1(e,animated=false){let[enabled,layout,scrollViewTarget,height,keyboardHeight,bottomOffset,interpolate,initialKeyboardSize,scrollDistanceWithRespectToSnapPoints,scrollPosition,snapToOffsets,scrollTo,scrollViewAnimatedRef,scrollViewPageY]=this.__closure;var _layout$value,_layout$value2,_layout$value3;if(!enabled){return 0;}if(((_layout$value=layout.value)===null||_layout$value===void 0?void 0:_layout$value.parentScrollViewTarget)!==scrollViewTarget.value){return 0;}const visibleRect=height-keyboardHeight.value;const absoluteY=((_layout$value2=layout.value)===null||_layout$value2===void 0?void 0:_layout$value2.layout.absoluteY)||0;const inputHeight=((_layout$value3=layout.value)===null||_layout$value3===void 0?void 0:_layout$value3.layout.height)||0;const point=absoluteY+inputHeight;if(visibleRect-point<=bottomOffset){const relativeScrollTo=keyboardHeight.value-(height-point)+bottomOffset;const interpolatedScrollTo=interpolate(e,[initialKeyboardSize.value,keyboardHeight.value],[0,scrollDistanceWithRespectToSnapPoints(relativeScrollTo+scrollPosition.value,snapToOffsets)-scrollPosition.value]);const targetScrollY=Math.max(interpolatedScrollTo,0)+scrollPosition.value;scrollTo(scrollViewAnimatedRef,0,targetScrollY,animated);return interpolatedScrollTo;}if(point<scrollViewPageY.value){const positionOnScreen=visibleRect-bottomOffset;const topOfScreen=scrollPosition.value+point;scrollTo(scrollViewAnimatedRef,0,topOfScreen-positionOnScreen,animated);}return 0;})" };
let closure_12 = { code: "(function pnpm_indexTsx2(e){let[mode,keyboardWillAppear,ghostViewSpace,scrollTo,scrollViewAnimatedRef,scrollPosition,interpolate,initialKeyboardSize,keyboardHeight]=this.__closure;if(mode===\"layout\"){return false;}if(!keyboardWillAppear.value&&ghostViewSpace.value>0){scrollTo(scrollViewAnimatedRef,0,scrollPosition.value-interpolate(e,[initialKeyboardSize.value,keyboardHeight.value],[ghostViewSpace.value,0]),false);return true;}return false;})" };
let closure_13 = { code: "(function pnpm_indexTsx3(newPosition){let[scrollPosition,maybeScroll,keyboardHeight]=this.__closure;const prevScroll=scrollPosition.value;scrollPosition.value=newPosition;maybeScroll(keyboardHeight.value,true);scrollPosition.value=prevScroll;})" };
let closure_14 = { code: "(function pnpm_indexTsx4(e){let[interpolate,keyboardHeight,extraKeyboardSpace,currentKeyboardFrameHeight]=this.__closure;const keyboardFrame=interpolate(e.height,[0,keyboardHeight.value],[0,keyboardHeight.value+extraKeyboardSpace]);currentKeyboardFrameHeight.value=keyboardFrame;})" };
let closure_15 = { code: "(function pnpm_indexTsx5(){let[lastSelection,input,layout,clamp]=this.__closure;var _lastSelection$value,_input$value;const customHeight=(_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.selection.end.y;if(!((_input$value=input.value)!==null&&_input$value!==void 0&&_input$value.layout)||!customHeight){return false;}layout.value={...input.value,layout:{...input.value.layout,height:clamp(customHeight,0,input.value.layout.height)}};return true;})" };
let closure_16 = { code: "(function pnpm_indexTsx6(){let[layout,updateLayoutFromSelection,performScrollWithPositionRestoration,position]=this.__closure;const prevLayout=layout.value;if(!updateLayoutFromSelection()){return;}performScrollWithPositionRestoration(position.value);layout.value=prevLayout;})" };
let closure_17 = { code: "(function pnpm_indexTsx7(){let[scrollFromCurrentPosition]=this.__closure;scrollFromCurrentPosition();})" };
let closure_18 = { code: "(function pnpm_indexTsx8(e){let[lastSelection,selectionUpdatedSinceHide,pendingSelectionForFocus,updateLayoutFromSelection,keyboardWillAppear,keyboardHeight,position,maybeScroll,scrollFromCurrentPosition,onChangeTextHandler]=this.__closure;var _lastSelection$value,_lastSelection$value2;const lastTarget=(_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.target;const latestSelection=(_lastSelection$value2=lastSelection.value)===null||_lastSelection$value2===void 0?void 0:_lastSelection$value2.selection;lastSelection.value=e;selectionUpdatedSinceHide.value=true;if(e.target!==lastTarget||pendingSelectionForFocus.value){if(pendingSelectionForFocus.value){pendingSelectionForFocus.value=false;updateLayoutFromSelection();if(!keyboardWillAppear.value&&keyboardHeight.value>0){position.value+=maybeScroll(keyboardHeight.value,true);}}return;}if(e.selection.end.position===e.selection.start.position&&(latestSelection===null||latestSelection===void 0?void 0:latestSelection.end.y)!==e.selection.end.y){return scrollFromCurrentPosition();}if(e.selection.start.position!==e.selection.end.position){return scrollFromCurrentPosition();}onChangeTextHandler();})" };
let closure_19 = { code: "(function pnpm_indexTsx9(e){let[keyboardHeight,keyboardWillAppear,tag,initialKeyboardSize,scrollPosition,scrollBeforeKeyboardMovement,pendingSelectionForFocus,position,mode,syncKeyboardFrame,lastSelection,selectionUpdatedSinceHide,updateLayoutFromSelection,input,layout,maybeScroll,ghostViewSpace,scrollViewLayout,scrollViewContentSize]=this.__closure;const keyboardWillChangeSize=keyboardHeight.value!==e.height&&e.height>0;keyboardWillAppear.value=e.height>0&&keyboardHeight.value===0;const keyboardWillHide=e.height===0;const focusWasChanged=tag.value!==e.target&&e.target!==-1||keyboardWillChangeSize;if(keyboardWillChangeSize){initialKeyboardSize.value=keyboardHeight.value;}if(keyboardWillHide){initialKeyboardSize.value=0;scrollPosition.value=scrollBeforeKeyboardMovement.value;pendingSelectionForFocus.value=false;}if(keyboardWillAppear.value||keyboardWillChangeSize||focusWasChanged){scrollPosition.value=position.value;keyboardHeight.value=e.height;if(mode===\"insets\"){syncKeyboardFrame(e);}}if(focusWasChanged){var _lastSelection$value;tag.value=e.target;if(((_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.target)===e.target&&selectionUpdatedSinceHide.value){updateLayoutFromSelection();pendingSelectionForFocus.value=false;}else{var _lastSelection$value2;if(((_lastSelection$value2=lastSelection.value)===null||_lastSelection$value2===void 0?void 0:_lastSelection$value2.target)===e.target){updateLayoutFromSelection();}else if(input.value){layout.value=input.value;}pendingSelectionForFocus.value=true;}scrollBeforeKeyboardMovement.value=position.value;}if(focusWasChanged&&!keyboardWillAppear.value){if(!pendingSelectionForFocus.value){position.value+=maybeScroll(e.height,true);}}if(mode===\"insets\"){ghostViewSpace.value=position.value+scrollViewLayout.value.height-scrollViewContentSize.value.height;if(ghostViewSpace.value>0){scrollPosition.value=position.value;}}})" };
let closure_20 = { code: "(function pnpm_indexTsx10(e){let[removeGhostPadding,mode,syncKeyboardFrame,disableScrollOnKeyboardHide,keyboardWillAppear,maybeScroll]=this.__closure;if(removeGhostPadding(e.height)){return;}if(mode===\"layout\"){syncKeyboardFrame(e);}if(!disableScrollOnKeyboardHide||keyboardWillAppear.value){maybeScroll(e.height);}})" };
let closure_21 = { code: "(function pnpm_indexTsx11(e){let[removeGhostPadding,keyboardHeight,scrollPosition,position,selectionUpdatedSinceHide,keyboardWillAppear,pendingSelectionForFocus,syncKeyboardFrame]=this.__closure;removeGhostPadding(e.height);keyboardHeight.value=e.height;scrollPosition.value=position.value;if(e.height===0){selectionUpdatedSinceHide.value=false;}else if(keyboardWillAppear.value){pendingSelectionForFocus.value=false;}syncKeyboardFrame(e);})" };
let closure_22 = { code: "(function pnpm_indexTsx12(){let[scrollFromCurrentPosition]=this.__closure;scrollFromCurrentPosition();})" };
let closure_23 = { code: "(function pnpm_indexTsx13(){let[input]=this.__closure;return input.value;})" };
let closure_24 = { code: "(function pnpm_indexTsx14(current,previous){let[scrollFromCurrentPosition]=this.__closure;if((current===null||current===void 0?void 0:current.target)===(previous===null||previous===void 0?void 0:previous.target)&&(current===null||current===void 0?void 0:current.layout.height)!==(previous===null||previous===void 0?void 0:previous.layout.height)){scrollFromCurrentPosition();}})" };
let closure_25 = { code: "(function pnpm_indexTsx15(){let[enabled,currentKeyboardFrameHeight]=this.__closure;return enabled?currentKeyboardFrameHeight.value:0;})" };
let closure_26 = { code: "(function pnpm_indexTsx16(){let[enabled,mode,currentKeyboardFrameHeight]=this.__closure;return enabled&&mode===\"layout\"?{paddingBottom:currentKeyboardFrameHeight.value+1}:{};})" };

export default forwardRef((bottomOffset, arg1) => {
  ({ children, onLayout } = bottomOffset);
  _require = onLayout;
  let num = bottomOffset.bottomOffset;
  if (num === undefined) {
    num = 0;
  }
  let flag = bottomOffset.disableScrollOnKeyboardHide;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = bottomOffset.enabled;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let num2 = bottomOffset.extraKeyboardSpace;
  if (num2 === undefined) {
    num2 = 0;
  }
  let str = bottomOffset.mode;
  if (str === undefined) {
    str = "insets";
  }
  let ScrollView = bottomOffset.ScrollViewComponent;
  if (ScrollView === undefined) {
    ScrollView = _modDef1652.ScrollView;
  }
  const snapToOffsets = bottomOffset.snapToOffsets;
  let merged = Object.assign(bottomOffset, Object.assign({ children: 0, onLayout: 0, bottomOffset: 0, disableScrollOnKeyboardHide: 0, enabled: 0, extraKeyboardSpace: 0, mode: 0, ScrollViewComponent: 0, snapToOffsets: 0 }));
  noop = undefined;
  const animatedRef = require("module_1652").useAnimatedRef();
  const ref = noop.useRef(null);
  let tmp9 = _modDef1987(animatedRef, ref);
  let obj = require("module_1652");
  const sharedValue = require("module_1652").useSharedValue(null);
  asyncGeneratorStep = sharedValue;
  let obj2 = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(0);
  let obj3 = require("module_1652");
  ({ offset, layout, size } = useScrollStateDefault(animatedRef));
  const tmp12 = useScrollStateDefault(animatedRef);
  const sharedValue2 = require("module_1652").useSharedValue(0);
  let obj4 = require("module_1652");
  const sharedValue3 = require("module_1652").useSharedValue(0);
  let obj5 = require("module_1652");
  const sharedValue4 = require("module_1652").useSharedValue(false);
  const obj6 = require("module_1652");
  const sharedValue5 = require("module_1652").useSharedValue(-1);
  const obj7 = require("module_1652");
  const sharedValue6 = require("module_1652").useSharedValue(0);
  const obj8 = require("module_1652");
  const sharedValue7 = require("module_1652").useSharedValue(0);
  const obj9 = require("module_1652");
  const reanimatedFocusedInput = require("module_1973").useReanimatedFocusedInput();
  ({ input, update } = reanimatedFocusedInput);
  c4 = update;
  const obj10 = require("module_1973");
  const sharedValue8 = require("module_1652").useSharedValue(null);
  const obj11 = require("module_1652");
  const sharedValue9 = require("module_1652").useSharedValue(null);
  const obj12 = require("module_1652");
  const sharedValue10 = require("module_1652").useSharedValue(-1);
  const obj13 = require("module_1652");
  const sharedValue11 = require("module_1652").useSharedValue(false);
  const obj14 = require("module_1652");
  const sharedValue12 = require("module_1652").useSharedValue(false);
  const obj15 = require("module_1652");
  const sharedValue13 = require("module_1652").useSharedValue(0);
  const obj16 = require("module_1652");
  let height = require("module_1973").useWindowDimensions().height;
  _require = asyncGeneratorStep(async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            let y;
            const findNodeHandleResult = _undefined(tmp3[7]).findNodeHandle(tmp7.current);
            c3.value = findNodeHandleResult;
            if (_undefined != null) {
              _undefined(_undefined);
            }
            if (null !== findNodeHandleResult) {
              c3 = 1;
              const KeyboardControllerNative = _undefined(tmp3[8]).KeyboardControllerNative;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: KeyboardControllerNative.viewPositionInWindow(findNodeHandleResult), done: false };
              return obj4;
            }
            const obj5 = _undefined(tmp3[7]);
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            y = value.y;
            c5.value = y;
            c3 = 0;
          }
          c3 = 0;
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c5 = 3;
      } catch (tmp13) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp13;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  items = [onLayout];
  const tmp28 = c4(function(arg0) {
    const self = this;
    const apply = c0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  let items1 = [c11, flag2, sharedValue8, sharedValue, height, sharedValue3, num, require("module_1652").interpolate, sharedValue6, require("utils").scrollDistanceWithRespectToSnapPoints, sharedValue1, snapToOffsets, require("module_1652").scrollTo, animatedRef, sharedValue13];
  _require = undefined;
  c4 = undefined;
  c12 = undefined;
  c13 = undefined;
  [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43] = items1;
  function pnpm_indexTsx1(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (c0) {
      value = _undefined2.value;
      let prop;
      if (value != null) {
        prop = value.parentScrollViewTarget;
      }
      if (prop !== _undefined3.value) {
        return 0;
      } else {
        const diff = c3 - _undefined5.value;
        const value2 = _undefined2.value;
        let num2;
        if (value2 != null) {
          num2 = value2.layout.absoluteY;
        }
        if (!num2) {
          num2 = 0;
        }
        const value3 = _undefined2.value;
        let num3;
        if (value3 != null) {
          num3 = value3.layout.height;
        }
        if (!num3) {
          num3 = 0;
        }
        const sum = num2 + num3;
        if (diff - sum <= c5) {
          items = [_undefined8.value, _undefined5.value];
          const items1 = [0, closure_8(_undefined5.value - (c3 - sum) + c5 + _undefined9.value, c10) - _undefined9.value];
          const tmp18 = _undefined7(arg0, items, items1);
          const _Math = Math;
          _undefined11(c12, 0, Math.max(tmp18, 0) + _undefined9.value, flag);
          return tmp18;
        } else {
          if (sum < _undefined13.value) {
            _undefined11(c12, 0, _undefined9.value + sum - (diff - c5), flag);
          }
          return 0;
        }
      }
    } else {
      return 0;
    }
  }
  const items2 = [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43];
  pnpm_indexTsx1.__closure = items2;
  pnpm_indexTsx1.__workletHash = 4113077878072;
  pnpm_indexTsx1.__initData = tmp29;
  const items3 = [num, flag2, height, snapToOffsets];
  const tmp26Result = c4(pnpm_indexTsx1, items3);
  const items4 = [c12, str, sharedValue4, sharedValue10, require("module_1652").scrollTo, animatedRef, sharedValue1, require("module_1652").interpolate, sharedValue6, sharedValue3];
  c4 = undefined;
  [tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54] = items4;
  function pnpm_indexTsx2(arg0) {
    let tmp = "layout" !== c0;
    if (tmp) {
      value = _undefined2.value;
      let flag = !value;
      if (!value) {
        flag = _undefined3.value > 0;
      }
      if (flag) {
        items = [_undefined8.value, closure_8.value];
        const items1 = [_undefined3.value, 0];
        _undefined4(c4, 0, _undefined6.value - _undefined7(arg0, items, items1), false);
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  }
  const items5 = [tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54];
  pnpm_indexTsx2.__closure = items5;
  pnpm_indexTsx2.__workletHash = 17470702170830;
  pnpm_indexTsx2.__initData = tmp45;
  const items6 = [str];
  const tmp26Result9 = c4(pnpm_indexTsx2, items6);
  const items7 = [c13, sharedValue1, tmp26Result, sharedValue3];
  _require = undefined;
  [tmp56, tmp57, tmp58, tmp59] = items7;
  function pnpm_indexTsx3(value) {
    _undefined.value = value;
    _undefined2(_undefined3.value, true);
    _undefined.value = _undefined.value;
  }
  const items8 = [tmp57, tmp58, tmp59];
  pnpm_indexTsx3.__closure = items8;
  pnpm_indexTsx3.__workletHash = 9263416722410;
  pnpm_indexTsx3.__initData = tmp56;
  const items9 = [sharedValue1, sharedValue3, tmp26Result];
  const tmp26Result10 = c4(pnpm_indexTsx3, items9);
  const items10 = [c14, require("module_1652").interpolate, sharedValue3, num2, sharedValue2];
  _require = undefined;
  [tmp61, tmp62, tmp63, tmp64, tmp65] = items10;
  function pnpm_indexTsx4(height) {
    items = [0, _undefined2.value];
    const items1 = [0, _undefined2.value + c2];
    c3.value = _undefined(height.height, items, items1);
  }
  const items11 = [tmp62, tmp63, tmp64, tmp65];
  pnpm_indexTsx4.__closure = items11;
  pnpm_indexTsx4.__workletHash = 9110153972555;
  pnpm_indexTsx4.__initData = tmp61;
  const items12 = [num2];
  const tmp26Result11 = c4(pnpm_indexTsx4, items12);
  const items13 = [c15, sharedValue9, input, sharedValue8, require("module_1652").clamp];
  [tmp67, tmp68, tmp69, tmp70, tmp71] = items13;
  function pnpm_indexTsx5() {
    value = _undefined.value;
    if (value != null) {
      const y = value.selection.end.y;
    }
    const value2 = _undefined2.value;
    let layout;
    if (value2 != null) {
      layout = value2.layout;
    }
    let tmp2 = !layout;
    if (layout) {
      tmp2 = !y;
    }
    let flag = !tmp2;
    if (!tmp2) {
      const obj = {};
      const merged = Object.assign(_undefined2.value);
      const obj2 = {};
      const merged1 = Object.assign(_undefined2.value.layout);
      obj2.height = _undefined4(y, 0, _undefined2.value.layout.height);
      obj.layout = obj2;
      c2.value = obj;
      flag = true;
    }
    return flag;
  }
  const items14 = [tmp68, tmp69, tmp70, tmp71];
  pnpm_indexTsx5.__closure = items14;
  pnpm_indexTsx5.__workletHash = 11429456708452;
  pnpm_indexTsx5.__initData = tmp67;
  const items15 = [input, sharedValue9, sharedValue8];
  const tmp26Result12 = c4(pnpm_indexTsx5, items15);
  const items16 = [c16, sharedValue8, tmp26Result12, tmp26Result10, offset];
  [tmp73, tmp74, tmp75, tmp76, tmp77] = items16;
  function pnpm_indexTsx6() {
    if (_undefined2()) {
      _undefined3(_undefined4.value);
      _undefined.value = _undefined.value;
    }
  }
  const items17 = [tmp74, tmp75, tmp76, tmp77];
  pnpm_indexTsx6.__closure = items17;
  pnpm_indexTsx6.__workletHash = 14091357960889;
  pnpm_indexTsx6.__initData = tmp73;
  const items18 = [tmp26Result10];
  const tmp26Result13 = c4(pnpm_indexTsx6, items18);
  const items19 = [c17, tmp26Result13];
  [tmp79, tmp80] = items19;
  function pnpm_indexTsx7() {
    _undefined();
  }
  const items20 = [tmp80];
  pnpm_indexTsx7.__closure = items20;
  pnpm_indexTsx7.__workletHash = 12296636663767;
  pnpm_indexTsx7.__initData = tmp79;
  const items21 = [tmp26Result13];
  const tmp26Result14 = c4(pnpm_indexTsx7, items21);
  c7 = tmp26Result14;
  const items22 = [tmp26Result14];
  const tmp82 = c7(() => utils.debounce(c7, 200), items22);
  const items23 = [c18, sharedValue9, sharedValue12, sharedValue11, tmp26Result12, sharedValue4, sharedValue3, offset, tmp26Result, tmp26Result13, tmp82];
  _require = undefined;
  asyncGeneratorStep = undefined;
  c4 = undefined;
  [tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93] = items23;
  function pnpm_indexTsx8(value) {
    value = _undefined.value;
    let target;
    if (value != null) {
      target = value.target;
    }
    const value2 = _undefined.value;
    if (value2 != null) {
      const selection = value2.selection;
    }
    _undefined.value = value;
    c1.value = true;
    if (value.target === target) {
      if (!_undefined3.value) {
        if (value.selection.end.position !== value.selection.start.position) {
          if (value.selection.start.position === value.selection.end.position) {
            _undefined9();
          }
          return tmp5;
        } else {
          let y;
          if (selection != null) {
            y = selection.end.y;
          }
        }
        tmp5 = closure_8();
      }
    }
    if (_undefined3.value) {
      tmp7.value = false;
      _undefined4();
      const value3 = _undefined5.value;
      let tmp11 = !value3;
      if (!value3) {
        tmp11 = _undefined6.value > 0;
      }
      if (tmp11) {
        _undefined7.value = _undefined7.value + _undefined8(_undefined6.value, true);
      }
    }
  }
  const items24 = [tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93];
  pnpm_indexTsx8.__closure = items24;
  pnpm_indexTsx8.__workletHash = 2552973855790;
  pnpm_indexTsx8.__initData = tmp83;
  const items25 = [tmp26Result13, tmp82, tmp26Result12, tmp26Result];
  const tmp26Result15 = c4(pnpm_indexTsx8, items25);
  const obj17 = require("module_1973");
  const tmp27 = asyncGeneratorStep;
  const items26 = [tmp26Result15];
  require("module_1973").useFocusedInputHandler({ onSelectionChange: tmp26Result15 }, items26);
  const tmp4Result = require("module_1973");
  const items27 = [closure_19, sharedValue3, sharedValue4, sharedValue5, sharedValue6, sharedValue1, sharedValue7, sharedValue11, offset, str, tmp26Result11, sharedValue9, sharedValue12, tmp26Result12, input, sharedValue8, tmp26Result, sharedValue10, layout, size];
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
  [tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115] = items27;
  const obj18 = { onStart: null, onMove: null, onEnd: null };
  function pnpm_indexTsx9(height) {
    let tmp = _undefined.value !== height.height;
    if (tmp) {
      tmp = height.height > 0;
    }
    _undefined2.value = height.height > 0 && 0 === _undefined.value;
    let tmp3 = _undefined3.value !== height.target;
    if (tmp3) {
      tmp3 = -1 !== height.target;
    }
    if (!tmp3) {
      tmp3 = tmp;
    }
    if (tmp) {
      c3.value = _undefined.value;
    }
    if (0 === height.height) {
      c3.value = 0;
      c4.value = _undefined6.value;
      _undefined7.value = false;
    }
    if (tmp9) {
      c4.value = _undefined8.value;
      _undefined.value = height.height;
      if ("insets" === closure_8) {
        _undefined9(height);
      }
    }
    if (!tmp3) {
      if (tmp3) {
        tmp3 = !_undefined2.value;
      }
      if (tmp3) {
        if (!_undefined7.value) {
          _undefined8.value = _undefined8.value + _undefined14(height.height, true);
        }
      }
      if ("insets" === closure_8) {
        _undefined15.value = _undefined8.value + _undefined16.value.height - _undefined17.value.height;
        if (_undefined15.value > 0) {
          c4.value = iter5.value;
        }
      }
    } else {
      _undefined3.value = height.target;
      value = _undefined10.value;
      let target;
      if (value != null) {
        target = value.target;
      }
      if (target !== height.target) {
        const value2 = _undefined10.value;
        let target1;
        if (value2 != null) {
          target1 = value2.target;
        }
        if (target1 === height.target) {
          _undefined12();
        } else if (_undefined13.value) {
          c14.value = iter4.value;
        }
        _undefined7.value = true;
        _undefined6.value = _undefined8.value;
      }
      _undefined12();
      _undefined7.value = false;
    }
    tmp9 = _undefined2.value || tmp || tmp3;
  }
  const items28 = [tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115];
  pnpm_indexTsx9.__closure = items28;
  pnpm_indexTsx9.__workletHash = 7869068678350;
  pnpm_indexTsx9.__initData = tmp96;
  obj18.onStart = pnpm_indexTsx9;
  const items29 = [closure_20, tmp26Result9, str, tmp26Result11, flag, sharedValue4, tmp26Result];
  [tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122] = items29;
  function pnpm_indexTsx10(height) {
    if (!_undefined(height.height)) {
      if ("layout" === c1) {
        _undefined3(height);
      }
      let tmp4 = c3;
      if (c3) {
        tmp4 = !_undefined5.value;
      }
      if (!tmp4) {
        _undefined6(height.height);
      }
    }
  }
  const items30 = [tmp117, tmp118, tmp119, tmp120, tmp121, tmp122];
  pnpm_indexTsx10.__closure = items30;
  pnpm_indexTsx10.__workletHash = 4054578440652;
  pnpm_indexTsx10.__initData = tmp116;
  obj18.onMove = pnpm_indexTsx10;
  const items31 = [closure_21, tmp26Result9, sharedValue3, sharedValue1, offset, sharedValue12, sharedValue4, sharedValue11, tmp26Result11];
  _require = undefined;
  asyncGeneratorStep = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131] = items31;
  function pnpm_indexTsx11(height) {
    _undefined(height.height);
    c1.value = height.height;
    c2.value = _undefined4.value;
    if (0 === height.height) {
      c4.value = false;
    } else if (_undefined6.value) {
      c6.value = false;
    }
    _undefined8(height);
  }
  const items32 = [tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131];
  pnpm_indexTsx11.__closure = items32;
  pnpm_indexTsx11.__workletHash = 14122736630160;
  pnpm_indexTsx11.__initData = tmp123;
  obj18.onEnd = pnpm_indexTsx11;
  const items33 = [str, tmp26Result, tmp26Result9, flag, tmp26Result11];
  require("useSmoothKeyboardHandler").useSmoothKeyboardHandler(obj18, items33);
  const items34 = [update, tmp26Result13];
  const tmp26Result16 = c4(tmp27(function*() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp2;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: _undefined5(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          items = [closure_1_22, closure_129_6];
          tmp2(c2[3]).runOnUI((function pnpm_indexTsx12Factory(items) {
            [tmp, tmp2] = items;
            function pnpm_indexTsx12() {
              closure_1_0();
            }
            items = [tmp2];
            pnpm_indexTsx12.__closure = items;
            pnpm_indexTsx12.__workletHash = 7757709136003;
            pnpm_indexTsx12.__initData = tmp;
            return pnpm_indexTsx12;
          })(items))();
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp13) {
        c3 = tmp;
        throw tmp13;
      }
    }
  }), items34);
  noop = tmp26Result16;
  const items35 = [tmp26Result16];
  c6(arg1, () => {
    const current = _undefined3.current;
    if (current) {
      current.assureFocusedInputVisible = () => {
        closure_1_8();
      };
      return current;
    } else {
      const obj = {
        assureFocusedInputVisible() {
            closure_1_8();
          }
      };
      return obj;
    }
  }, items35);
  const items36 = [num];
  c5(() => {
    closure_8();
  }, items36);
  const tmp4Result5 = require("useSmoothKeyboardHandler");
  const items37 = [closure_23, input];
  [tmp136, tmp137] = items37;
  function pnpm_indexTsx13() {
    return _undefined.value;
  }
  const items38 = [tmp137];
  pnpm_indexTsx13.__closure = items38;
  pnpm_indexTsx13.__workletHash = 3093815688588;
  pnpm_indexTsx13.__initData = tmp136;
  const items39 = [closure_24, tmp26Result13];
  _require = undefined;
  [tmp138, tmp139] = items39;
  function pnpm_indexTsx14(target, target2) {
    target = undefined;
    if (target != null) {
      target = target.target;
    }
    let target1;
    if (target2 != null) {
      target1 = target2.target;
    }
    let tmp3 = target === target1;
    if (tmp3) {
      let height;
      if (target != null) {
        height = target.layout.height;
      }
      let height1;
      if (target2 != null) {
        height1 = target2.layout.height;
      }
      tmp3 = height !== height1;
    }
    if (tmp3) {
      _undefined();
    }
  }
  const items40 = [tmp139];
  pnpm_indexTsx14.__closure = items40;
  pnpm_indexTsx14.__workletHash = 15853710538437;
  pnpm_indexTsx14.__initData = tmp138;
  const animatedReaction = require("module_1652").useAnimatedReaction(pnpm_indexTsx13, pnpm_indexTsx14, []);
  const tmp4Result6 = require("module_1652");
  const items41 = [closure_25, flag2, sharedValue2];
  _require = undefined;
  [tmp141, tmp142, tmp143] = items41;
  function pnpm_indexTsx15() {
    let num = 0;
    if (c0) {
      num = _undefined2.value;
    }
    return num;
  }
  const items42 = [tmp142, tmp143];
  pnpm_indexTsx15.__closure = items42;
  pnpm_indexTsx15.__workletHash = 17413275670323;
  pnpm_indexTsx15.__initData = tmp141;
  const items43 = [flag2];
  const derivedValue = require("module_1652").useDerivedValue(pnpm_indexTsx15, items43);
  require("module_1652");
  const items44 = [closure_26, flag2, str, sharedValue2];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp146, tmp147, tmp148, tmp149] = items44;
  function pnpm_indexTsx16() {
    if (c0) {
      if ("layout" === c1) {
        const obj = { paddingBottom: _undefined3.value + 1 };
      }
      return {};
    }
  }
  const items45 = [tmp147, tmp148, tmp149];
  pnpm_indexTsx16.__closure = items45;
  pnpm_indexTsx16.__workletHash = 6930534251701;
  pnpm_indexTsx16.__initData = tmp146;
  const items46 = [flag2, str];
  if ("layout" === str) {
    const obj19 = { ref: tmp9 };
    let merged1 = Object.assign(merged);
    obj19.scrollEventThrottle = 16;
    obj19.onLayout = tmp28;
    const items47 = [children, ];
    if (flag2) {
      const obj20 = { style: tmp150 };
      flag2 = c9(tmp8(1652).View, obj20);
    }
    items47[1] = flag2;
    obj19.children = items47;
    let tmp157Result = c10(ScrollView, obj19);
  } else {
    const obj21 = { ref: tmp9 };
    const merged2 = Object.assign(merged);
    obj21.bottomPadding = derivedValue;
    obj21.scrollEventThrottle = 16;
    obj21.ScrollViewComponent = ScrollView;
    obj21.onLayout = tmp28;
    obj21.children = children;
    tmp157Result = c9(tmp8(1993), obj21);
    const tmp8Result = tmp8(1993);
  }
  return tmp157Result;
});