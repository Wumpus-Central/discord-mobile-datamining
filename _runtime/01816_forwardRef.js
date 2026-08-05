// _runtime/01816_forwardRef.js
import sharedValue from "sharedValue";
import noop from "noop";
import closure_8 from "noop";
import jsxProd from "jsxProd";

let c10;
let c4;
let c5;
let c9;
let closure_6;
let error;
let forwardRef;
const require = arg1;
({ useCallback: c4, useEffect: c5, useImperativeHandle: closure_6, useMemo: error, forwardRef } = noop);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = { code: "function pnpm_indexTsx1(e,animated=false){const{enabled,layout,scrollViewTarget,height,keyboardHeight,bottomOffset,interpolate,initialKeyboardSize,scrollDistanceWithRespectToSnapPoints,scrollPosition,snapToOffsets,scrollTo,scrollViewAnimatedRef,scrollViewPageY}=this.__closure;var _layout$value,_layout$value2,_layout$value3;if(!enabled){return 0;}if(((_layout$value=layout.value)===null||_layout$value===void 0?void 0:_layout$value.parentScrollViewTarget)!==scrollViewTarget.value){return 0;}const visibleRect=height-keyboardHeight.value;const absoluteY=((_layout$value2=layout.value)===null||_layout$value2===void 0?void 0:_layout$value2.layout.absoluteY)||0;const inputHeight=((_layout$value3=layout.value)===null||_layout$value3===void 0?void 0:_layout$value3.layout.height)||0;const point=absoluteY+inputHeight;if(visibleRect-point<=bottomOffset){const relativeScrollTo=keyboardHeight.value-(height-point)+bottomOffset;const interpolatedScrollTo=interpolate(e,[initialKeyboardSize.value,keyboardHeight.value],[0,scrollDistanceWithRespectToSnapPoints(relativeScrollTo+scrollPosition.value,snapToOffsets)-scrollPosition.value]);const targetScrollY=Math.max(interpolatedScrollTo,0)+scrollPosition.value;scrollTo(scrollViewAnimatedRef,0,targetScrollY,animated);return interpolatedScrollTo;}if(point<scrollViewPageY.value){const positionOnScreen=visibleRect-bottomOffset;const topOfScreen=scrollPosition.value+point;scrollTo(scrollViewAnimatedRef,0,topOfScreen-positionOnScreen,animated);}return 0;}" };
let closure_12 = { code: "function pnpm_indexTsx2(e){const{mode,keyboardWillAppear,ghostViewSpace,scrollTo,scrollViewAnimatedRef,scrollPosition,interpolate,initialKeyboardSize,keyboardHeight}=this.__closure;if(mode===\"layout\"){return false;}if(!keyboardWillAppear.value&&ghostViewSpace.value>0){scrollTo(scrollViewAnimatedRef,0,scrollPosition.value-interpolate(e,[initialKeyboardSize.value,keyboardHeight.value],[ghostViewSpace.value,0]),false);return true;}return false;}" };
let closure_13 = { code: "function pnpm_indexTsx3(newPosition){const{scrollPosition,maybeScroll,keyboardHeight}=this.__closure;const prevScroll=scrollPosition.value;scrollPosition.value=newPosition;maybeScroll(keyboardHeight.value,true);scrollPosition.value=prevScroll;}" };
let closure_14 = { code: "function pnpm_indexTsx4(e){const{interpolate,keyboardHeight,extraKeyboardSpace,currentKeyboardFrameHeight}=this.__closure;const keyboardFrame=interpolate(e.height,[0,keyboardHeight.value],[0,keyboardHeight.value+extraKeyboardSpace]);currentKeyboardFrameHeight.value=keyboardFrame;}" };
let closure_15 = { code: "function pnpm_indexTsx5(){const{lastSelection,input,layout,clamp}=this.__closure;var _lastSelection$value,_input$value;const customHeight=(_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.selection.end.y;if(!((_input$value=input.value)!==null&&_input$value!==void 0&&_input$value.layout)||!customHeight){return false;}layout.value={...input.value,layout:{...input.value.layout,height:clamp(customHeight,0,input.value.layout.height)}};return true;}" };
let closure_16 = { code: "function pnpm_indexTsx6(){const{layout,updateLayoutFromSelection,performScrollWithPositionRestoration,position}=this.__closure;const prevLayout=layout.value;if(!updateLayoutFromSelection()){return;}performScrollWithPositionRestoration(position.value);layout.value=prevLayout;}" };
let closure_17 = { code: "function pnpm_indexTsx7(){const{scrollFromCurrentPosition}=this.__closure;scrollFromCurrentPosition();}" };
let closure_18 = { code: "function pnpm_indexTsx8(e){const{lastSelection,selectionUpdatedSinceHide,pendingSelectionForFocus,updateLayoutFromSelection,keyboardWillAppear,keyboardHeight,position,maybeScroll,scrollFromCurrentPosition,onChangeTextHandler}=this.__closure;var _lastSelection$value,_lastSelection$value2;const lastTarget=(_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.target;const latestSelection=(_lastSelection$value2=lastSelection.value)===null||_lastSelection$value2===void 0?void 0:_lastSelection$value2.selection;lastSelection.value=e;selectionUpdatedSinceHide.value=true;if(e.target!==lastTarget||pendingSelectionForFocus.value){if(pendingSelectionForFocus.value){pendingSelectionForFocus.value=false;updateLayoutFromSelection();if(!keyboardWillAppear.value&&keyboardHeight.value>0){position.value+=maybeScroll(keyboardHeight.value,true);}}return;}if(e.selection.end.position===e.selection.start.position&&(latestSelection===null||latestSelection===void 0?void 0:latestSelection.end.y)!==e.selection.end.y){return scrollFromCurrentPosition();}if(e.selection.start.position!==e.selection.end.position){return scrollFromCurrentPosition();}onChangeTextHandler();}" };
let closure_19 = { code: "function pnpm_indexTsx9(e){const{keyboardHeight,keyboardWillAppear,tag,initialKeyboardSize,scrollPosition,scrollBeforeKeyboardMovement,pendingSelectionForFocus,position,mode,syncKeyboardFrame,lastSelection,selectionUpdatedSinceHide,updateLayoutFromSelection,input,layout,maybeScroll,ghostViewSpace,scrollViewLayout,scrollViewContentSize}=this.__closure;const keyboardWillChangeSize=keyboardHeight.value!==e.height&&e.height>0;keyboardWillAppear.value=e.height>0&&keyboardHeight.value===0;const keyboardWillHide=e.height===0;const focusWasChanged=tag.value!==e.target&&e.target!==-1||keyboardWillChangeSize;if(keyboardWillChangeSize){initialKeyboardSize.value=keyboardHeight.value;}if(keyboardWillHide){initialKeyboardSize.value=0;scrollPosition.value=scrollBeforeKeyboardMovement.value;pendingSelectionForFocus.value=false;}if(keyboardWillAppear.value||keyboardWillChangeSize||focusWasChanged){scrollPosition.value=position.value;keyboardHeight.value=e.height;if(mode===\"insets\"){syncKeyboardFrame(e);}}if(focusWasChanged){var _lastSelection$value;tag.value=e.target;if(((_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.target)===e.target&&selectionUpdatedSinceHide.value){updateLayoutFromSelection();pendingSelectionForFocus.value=false;}else{var _lastSelection$value2;if(((_lastSelection$value2=lastSelection.value)===null||_lastSelection$value2===void 0?void 0:_lastSelection$value2.target)===e.target){updateLayoutFromSelection();}else if(input.value){layout.value=input.value;}pendingSelectionForFocus.value=true;}scrollBeforeKeyboardMovement.value=position.value;}if(focusWasChanged&&!keyboardWillAppear.value){if(!pendingSelectionForFocus.value){position.value+=maybeScroll(e.height,true);}}if(mode===\"insets\"){ghostViewSpace.value=position.value+scrollViewLayout.value.height-scrollViewContentSize.value.height;if(ghostViewSpace.value>0){scrollPosition.value=position.value;}}}" };
let closure_20 = { code: "function pnpm_indexTsx10(e){const{removeGhostPadding,mode,syncKeyboardFrame,disableScrollOnKeyboardHide,keyboardWillAppear,maybeScroll}=this.__closure;if(removeGhostPadding(e.height)){return;}if(mode===\"layout\"){syncKeyboardFrame(e);}if(!disableScrollOnKeyboardHide||keyboardWillAppear.value){maybeScroll(e.height);}}" };
let closure_21 = { code: "function pnpm_indexTsx11(e){const{removeGhostPadding,keyboardHeight,scrollPosition,position,selectionUpdatedSinceHide,keyboardWillAppear,pendingSelectionForFocus,syncKeyboardFrame}=this.__closure;removeGhostPadding(e.height);keyboardHeight.value=e.height;scrollPosition.value=position.value;if(e.height===0){selectionUpdatedSinceHide.value=false;}else if(keyboardWillAppear.value){pendingSelectionForFocus.value=false;}syncKeyboardFrame(e);}" };
let closure_22 = { code: "function pnpm_indexTsx12(){const{scrollFromCurrentPosition}=this.__closure;scrollFromCurrentPosition();}" };
let closure_23 = { code: "function pnpm_indexTsx13(){const{input}=this.__closure;return input.value;}" };
let closure_24 = { code: "function pnpm_indexTsx14(current,previous){const{scrollFromCurrentPosition}=this.__closure;if((current===null||current===void 0?void 0:current.target)===(previous===null||previous===void 0?void 0:previous.target)&&(current===null||current===void 0?void 0:current.layout.height)!==(previous===null||previous===void 0?void 0:previous.layout.height)){scrollFromCurrentPosition();}}" };
let closure_25 = { code: "function pnpm_indexTsx15(){const{enabled,currentKeyboardFrameHeight}=this.__closure;return enabled?currentKeyboardFrameHeight.value:0;}" };
let closure_26 = { code: "function pnpm_indexTsx16(){const{enabled,mode,currentKeyboardFrameHeight}=this.__closure;return enabled&&mode===\"layout\"?{paddingBottom:currentKeyboardFrameHeight.value+1}:{};}" };

export default forwardRef((bottomOffset) => {
  let children;
  let onLayout;
  ({ children, onLayout } = bottomOffset);
  let _require = onLayout;
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
    ScrollView = num(flag[3]).ScrollView;
  }
  const snapToOffsets = bottomOffset.snapToOffsets;
  let merged = Object.assign(bottomOffset, Object.create(null));
  let animatedRef;
  let ref;
  let sharedValue;
  let sharedValue1;
  let offset;
  let layout;
  let size;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let sharedValue6;
  let sharedValue7;
  let input;
  let update;
  let sharedValue8;
  let sharedValue9;
  let sharedValue10;
  let sharedValue11;
  let sharedValue12;
  let sharedValue13;
  let height;
  let c29;
  let c30;
  let c31;
  let c32;
  let c33;
  let c34;
  let c35;
  let c36;
  let c37;
  let obj = _require(flag[3]);
  animatedRef = obj.useAnimatedRef();
  ref = ref.useRef(null);
  const tmp8 = num(flag[4])(animatedRef, ref);
  let obj1 = _require(flag[3]);
  sharedValue = obj1.useSharedValue(null);
  let obj2 = _require(flag[3]);
  sharedValue1 = obj2.useSharedValue(0);
  let tmp11 = num(flag[5])(animatedRef);
  offset = tmp11.offset;
  layout = tmp11.layout;
  size = tmp11.size;
  let obj3 = _require(flag[3]);
  sharedValue2 = obj3.useSharedValue(0);
  let obj4 = _require(flag[3]);
  sharedValue3 = obj4.useSharedValue(0);
  let obj5 = _require(flag[3]);
  sharedValue4 = obj5.useSharedValue(false);
  let obj6 = _require(flag[3]);
  sharedValue5 = obj6.useSharedValue(-1);
  sharedValue6 = _require(flag[3]).useSharedValue(0);
  const obj8 = _require(flag[3]);
  sharedValue7 = _require(flag[3]).useSharedValue(0);
  const obj9 = _require(flag[3]);
  const reanimatedFocusedInput = _require(flag[6]).useReanimatedFocusedInput();
  input = reanimatedFocusedInput.input;
  update = reanimatedFocusedInput.update;
  const obj10 = _require(flag[6]);
  sharedValue8 = _require(flag[3]).useSharedValue(null);
  const obj11 = _require(flag[3]);
  sharedValue9 = _require(flag[3]).useSharedValue(null);
  const obj12 = _require(flag[3]);
  sharedValue10 = _require(flag[3]).useSharedValue(-1);
  const obj13 = _require(flag[3]);
  sharedValue11 = _require(flag[3]).useSharedValue(false);
  const obj14 = _require(flag[3]);
  sharedValue12 = _require(flag[3]).useSharedValue(false);
  const obj15 = _require(flag[3]);
  sharedValue13 = _require(flag[3]).useSharedValue(0);
  const obj16 = _require(flag[3]);
  height = _require(flag[6]).useWindowDimensions().height;
  _require = undefined;
  _require = flag2((arg0) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp3;
              let closure_1 = tmp7;
              let callback;
              const findNodeHandleResult = callback(flag[7]).findNodeHandle(outer1_7.current);
              outer1_9.value = findNodeHandleResult;
              if (callback != null) {
                callback(tmp21);
              }
              if (null !== findNodeHandleResult) {
                let c3 = 1;
                const KeyboardControllerNative = tmp22(tmp23[8]).KeyboardControllerNative;
                c4 = 2;
                c5 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = KeyboardControllerNative.viewPositionInWindow(findNodeHandleResult);
                return obj1;
              }
              const obj5 = callback(flag[7]);
              tmp21 = callback;
              tmp22 = callback;
              tmp23 = flag;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              callback = arg1.y;
              outer1_27.value = callback;
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
  });
  let items = [onLayout];
  const tmp25 = num2(function(arg0) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  class M {
    constructor(arg0) {
      flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      if (c3) {
        iter = c22;
        value = c22.value;
        tmp = null;
        prop = undefined;
        if (value != null) {
          prop = value.parentScrollViewTarget;
        }
        tmp3 = c9;
        if (prop !== c9.value) {
          num8 = 0;
          return 0;
        } else {
          iter2 = c15;
          diff = height - c15.value;
          value = iter.value;
          num2 = undefined;
          tmp34 = height;
          if (value != null) {
            num2 = value.layout.absoluteY;
          }
          if (!num2) {
            num2 = 0;
          }
          value1 = iter.value;
          num3 = undefined;
          if (value1 != null) {
            num3 = value1.layout.height;
          }
          if (!num3) {
            num3 = 0;
          }
          sum = num2 + num3;
          tmp5 = c1;
          if (diff - sum <= c1) {
            tmp16 = bottomOffset;
            tmp18 = f103170;
            tmp19 = c2;
            sum1 = iter2.value - (tmp34 - sum) + tmp5;
            obj2 = f103170(c2[3]);
            tmp20 = c18;
            items = [, ];
            items[0] = c18.value;
            items[1] = iter2.value;
            tmp21 = f103170;
            tmp22 = c2;
            obj3 = f103170(c2[9]);
            tmp23 = c10;
            tmp24 = snapToOffsets;
            items1 = [0];
            items1[1] = obj3.scrollDistanceWithRespectToSnapPoints(sum1 + c10.value, snapToOffsets) - c10.value;
            interpolateResult = obj2.interpolate(bottomOffset, items, items1);
            tmp26 = globalThis;
            _Math = Math;
            num6 = 0;
            tmp28 = f103170;
            tmp29 = c2;
            sum2 = Math.max(interpolateResult, 0) + c10.value;
            obj4 = f103170(c2[3]);
            tmp30 = c7;
            tmp31 = obj4;
            num7 = 0;
            tmp32 = flag;
            scrollToResult = obj4.scrollTo(c7, 0, sum2, flag);
            return interpolateResult;
          } else {
            tmp6 = c27;
            if (sum < c27.value) {
              tmp8 = c10;
              tmp10 = f103170;
              tmp11 = c2;
              diff1 = diff - tmp5;
              sum3 = c10.value + sum;
              obj = f103170(c2[3]);
              tmp12 = c7;
              num4 = 0;
              tmp13 = obj;
              tmp14 = flag;
              scrollToResult1 = obj.scrollTo(c7, 0, sum3 - diff1, flag);
            }
            num5 = 0;
            return 0;
          }
        }
      } else {
        num = 0;
        return 0;
      }
    }
  }
  obj = { enabled: flag2, layout: sharedValue8, scrollViewTarget: sharedValue, height, keyboardHeight: sharedValue3, bottomOffset: num, interpolate: _require(flag[3]).interpolate, initialKeyboardSize: sharedValue6, scrollDistanceWithRespectToSnapPoints: _require(flag[9]).scrollDistanceWithRespectToSnapPoints, scrollPosition: sharedValue1, snapToOffsets, scrollTo: _require(flag[3]).scrollTo, scrollViewAnimatedRef: animatedRef, scrollViewPageY: sharedValue13 };
  M.__closure = obj;
  M.__workletHash = 1454504363777;
  M.__initData = offset;
  let items1 = [num, flag2, height, snapToOffsets];
  const tmp26 = num2(M, items1);
  c29 = tmp26;
  class Y {
    constructor(arg0) {
      flag = "layout" !== insets;
      if (flag) {
        tmp = c16;
        flag = !c16.value;
      }
      if (flag) {
        tmp2 = c24;
        num = 0;
        flag = c24.value > 0;
      }
      if (flag) {
        tmp3 = bottomOffset;
        tmp4 = f103170;
        tmp5 = c2;
        obj = f103170(c2[3]);
        tmp6 = c7;
        tmp7 = c10;
        obj2 = f103170(c2[3]);
        tmp8 = c18;
        items = [, ];
        items[0] = c18.value;
        tmp9 = c15;
        items[1] = c15.value;
        tmp10 = c24;
        items1 = [, ];
        items1[0] = c24.value;
        num2 = 0;
        items1[1] = 0;
        flag2 = false;
        tmp11 = obj;
        tmp12 = c7;
        num3 = 0;
        scrollToResult = obj.scrollTo(c7, 0, c10.value - obj2.interpolate(bottomOffset, items, items1), false);
        flag = true;
      }
      return flag;
    }
  }
  obj = { mode: str, keyboardWillAppear: sharedValue4, ghostViewSpace: sharedValue10, scrollTo: _require(flag[3]).scrollTo, scrollViewAnimatedRef: animatedRef, scrollPosition: sharedValue1, interpolate: _require(flag[3]).interpolate, initialKeyboardSize: sharedValue6, keyboardHeight: sharedValue3 };
  Y.__closure = obj;
  Y.__workletHash = 17351526068375;
  Y.__initData = layout;
  const items2 = [str];
  const tmp27 = num2(Y, items2);
  c30 = tmp27;
  class I {
    constructor(arg0) {
      c10.value = bottomOffset;
      tmp = scrollTo(c15.value, true);
      c10.value = c10.value;
      return;
    }
  }
  I.__closure = { scrollPosition: sharedValue1, maybeScroll: tmp26, keyboardHeight: sharedValue3 };
  I.__workletHash = 1481901193395;
  I.__initData = size;
  const items3 = [sharedValue1, sharedValue3, tmp26];
  const tmp28 = num2(I, items3);
  c31 = tmp28;
  class B {
    constructor(arg0) {
      obj = f103170(c2[3]);
      items = [0];
      items[1] = c15.value;
      items1 = [0];
      items1[1] = c15.value + c4;
      c14.value = obj.interpolate(bottomOffset.height, items, items1);
      return;
    }
  }
  obj1 = { interpolate: _require(flag[3]).interpolate, keyboardHeight: sharedValue3, extraKeyboardSpace: num2, currentKeyboardFrameHeight: sharedValue2 };
  B.__closure = obj1;
  B.__workletHash = 6643520179794;
  B.__initData = sharedValue2;
  const items4 = [num2];
  const tmp29 = num2(B, items4);
  c32 = tmp29;
  class G {
    constructor() {
      value = c23.value;
      if (value != null) {
        y = value.selection.end.y;
      }
      iter = input;
      value = input.value;
      layout = undefined;
      if (value != null) {
        layout = value.layout;
      }
      num = !layout;
      if (layout) {
        num = !y;
      }
      if (!num) {
        tmp2 = c22;
        obj = {};
        tmp3 = obj;
        merged = Object.assign(iter.value);
        obj = {};
        tmp5 = obj;
        merged1 = Object.assign(iter.value.layout);
        tmp7 = f103170;
        tmp8 = c2;
        obj3 = f103170(c2[3]);
        num2 = 0;
        obj.height = obj3.clamp(y, 0, iter.value.layout.height);
        obj.layout = obj;
        c22.value = obj;
        num = 0;
      }
      return !num;
    }
  }
  obj2 = { lastSelection: sharedValue9, input, layout: sharedValue8, clamp: _require(flag[3]).clamp };
  G.__closure = obj2;
  G.__workletHash = 619310634941;
  G.__initData = sharedValue3;
  const items5 = [input, sharedValue9, sharedValue8];
  const tmp30 = num2(G, items5);
  c33 = tmp30;
  class E {
    constructor() {
      tmp = c22;
      if (c33()) {
        tmp2 = interpolate;
        tmp3 = offset;
        tmp4 = interpolate(offset.value);
        tmp.value = c22.value;
      }
      return;
    }
  }
  E.__closure = { layout: sharedValue8, updateLayoutFromSelection: tmp30, performScrollWithPositionRestoration: tmp28, position: offset };
  E.__workletHash = 11406147562112;
  E.__initData = sharedValue4;
  const items6 = [tmp28];
  const tmp31 = num2(E, items6);
  c34 = tmp31;
  let fn = function j() {
    _undefined6();
  };
  fn.__closure = { scrollFromCurrentPosition: tmp31 };
  fn.__workletHash = 1300972162638;
  fn.__initData = sharedValue5;
  const items7 = [tmp31];
  const tmp32 = num2(fn, items7);
  c35 = tmp32;
  const items8 = [tmp32];
  const tmp33 = animatedRef(() => callback(flag[9]).debounce(c35, 200), items8);
  c36 = tmp33;
  class N {
    constructor(arg0) {
      iter = c23;
      value = c23.value;
      target = undefined;
      if (value != null) {
        target = value.target;
      }
      value = iter.value;
      if (value != null) {
        selection = value.selection;
      }
      iter.value = bottomOffset;
      c26.value = true;
      if (bottomOffset.target === target) {
        tmp16 = c25;
        if (!c25.value) {
          if (bottomOffset.selection.end.position !== bottomOffset.selection.start.position) {
            if (bottomOffset.selection.start.position === bottomOffset.selection.end.position) {
              tmp3 = clamp;
              tmp4 = clamp();
            }
            return tmp5;
          } else {
            y = undefined;
            if (selection != null) {
              y = selection.end.y;
            }
          }
          tmp6 = E;
          tmp5 = E();
        }
      }
      if (c25.value) {
        flag = false;
        tmp7.value = false;
        tmp8 = c33;
        tmp9 = c33();
        tmp10 = c16;
        value1 = c16.value;
        tmp11 = !value1;
        if (!value1) {
          tmp12 = c15;
          num = 0;
          tmp11 = c15.value > 0;
        }
        if (tmp11) {
          tmp13 = offset;
          tmp14 = scrollTo;
          tmp15 = c15;
          offset.value = offset.value + scrollTo(c15.value, true);
        }
      }
      return;
    }
  }
  N.__closure = { lastSelection: sharedValue9, selectionUpdatedSinceHide: sharedValue12, pendingSelectionForFocus: sharedValue11, updateLayoutFromSelection: tmp30, keyboardWillAppear: sharedValue4, keyboardHeight: sharedValue3, position: offset, maybeScroll: tmp26, scrollFromCurrentPosition: tmp31, onChangeTextHandler: tmp33 };
  N.__workletHash = 7363285427351;
  N.__initData = sharedValue6;
  const items9 = [tmp31, tmp33, tmp30, tmp26];
  let tmp34 = num2(N, items9);
  const obj17 = _require(flag[6]);
  const items10 = [tmp34];
  _require(flag[6]).useFocusedInputHandler({ onSelectionChange: tmp34 }, items10);
  const obj22 = _require(flag[6]);
  obj3 = { onStart: null, onMove: null, onEnd: null };
  class Q {
    constructor(arg0) {
      iter = c15;
      tmp = c15.value !== bottomOffset.height;
      if (tmp) {
        num = 0;
        tmp = bottomOffset.height > 0;
      }
      iter2 = c16;
      iter2.value = bottomOffset.height > 0 && 0 === iter.value;
      tmp3 = c17.value !== bottomOffset.target;
      tmp2 = c17;
      if (tmp3) {
        num2 = -1;
        tmp3 = -1 !== bottomOffset.target;
      }
      if (!tmp3) {
        tmp3 = tmp;
      }
      if (tmp) {
        tmp4 = c18;
        c18.value = iter.value;
      }
      if (0 === bottomOffset.height) {
        tmp5 = c18;
        c18.value = 0;
        tmp6 = c10;
        tmp7 = c19;
        c10.value = c19.value;
        tmp8 = c25;
        flag = false;
        c25.value = false;
      }
      tmp9 = iter2.value || tmp || tmp3;
      if (tmp9) {
        tmp10 = c10;
        tmp11 = offset;
        c10.value = offset.value;
        iter.value = bottomOffset.height;
        tmp12 = insets;
        str = "insets";
        if ("insets" === insets) {
          tmp13 = height;
          tmp14 = height(bottomOffset);
        }
      }
      if (!tmp3) {
        if (tmp3) {
          tmp3 = !iter2.value;
        }
        if (tmp3) {
          tmp28 = c25;
          if (!c25.value) {
            tmp29 = offset;
            tmp30 = scrollTo;
            flag4 = true;
            offset.value = offset.value + scrollTo(bottomOffset.height, true);
          }
        }
        tmp31 = insets;
        str2 = "insets";
        if ("insets" === insets) {
          tmp32 = c24;
          tmp33 = layout;
          tmp34 = size;
          c24.value = offset.value + layout.value.height - size.value.height;
          if (c24.value > 0) {
            tmp35 = c10;
            c10.value = iter5.value;
          }
        }
        return;
      } else {
        tmp2.value = bottomOffset.target;
        value = c23.value;
        tmp15 = null;
        flag2 = undefined;
        target = undefined;
        iter3 = c23;
        if (value != null) {
          target = value.target;
        }
        if (target !== bottomOffset.target) {
          value = iter3.value;
          target1 = undefined;
          if (value != null) {
            target1 = value.target;
          }
          if (target1 === bottomOffset.target) {
            tmp20 = c33;
            tmp21 = c33();
          } else if (input.value) {
            tmp19 = c22;
            c22.value = iter4.value;
          }
          tmp22 = c25;
          flag3 = true;
          c25.value = true;
          tmp26 = c19;
          tmp27 = offset;
          c19.value = offset.value;
        } else {
          tmp17 = c26;
        }
        tmp23 = c33;
        tmp24 = c33();
        tmp25 = c25;
        flag2 = false;
        c25.value = false;
      }
      return;
    }
  }
  Q.__closure = { keyboardHeight: sharedValue3, keyboardWillAppear: sharedValue4, tag: sharedValue5, initialKeyboardSize: sharedValue6, scrollPosition: sharedValue1, scrollBeforeKeyboardMovement: sharedValue7, pendingSelectionForFocus: sharedValue11, position: offset, mode: str, syncKeyboardFrame: tmp29, lastSelection: sharedValue9, selectionUpdatedSinceHide: sharedValue12, updateLayoutFromSelection: tmp30, input, layout: sharedValue8, maybeScroll: tmp26, ghostViewSpace: sharedValue10, scrollViewLayout: layout, scrollViewContentSize: size };
  Q.__workletHash = 4279285643383;
  Q.__initData = sharedValue7;
  obj3[0] = Q;
  class J {
    constructor(arg0) {
      if (!c30(bottomOffset.height)) {
        tmp = insets;
        str = "layout";
        if ("layout" === insets) {
          tmp2 = height;
          tmp3 = height(bottomOffset);
        }
        tmp4 = c2;
        if (c2) {
          tmp5 = c16;
          tmp4 = !c16.value;
        }
        if (!tmp4) {
          tmp6 = scrollTo;
          tmp7 = scrollTo(bottomOffset.height);
        }
      }
      return;
    }
  }
  J.__closure = { removeGhostPadding: tmp27, mode: str, syncKeyboardFrame: tmp29, disableScrollOnKeyboardHide: flag, keyboardWillAppear: sharedValue4, maybeScroll: tmp26 };
  J.__workletHash = 15263617220981;
  J.__initData = input;
  obj3[1] = J;
  const fn2 = function q(height) {
    _undefined2(height.height);
    sharedValue3.value = height.height;
    sharedValue1.value = offset.value;
    if (0 === height.height) {
      sharedValue12.value = false;
    } else if (sharedValue4.value) {
      sharedValue11.value = false;
    }
    _undefined4(height);
  };
  fn2.__closure = { removeGhostPadding: tmp27, keyboardHeight: sharedValue3, scrollPosition: sharedValue1, position: offset, selectionUpdatedSinceHide: sharedValue12, keyboardWillAppear: sharedValue4, pendingSelectionForFocus: sharedValue11, syncKeyboardFrame: tmp29 };
  fn2.__workletHash = 15672596601321;
  fn2.__initData = update;
  obj3[2] = fn2;
  const items11 = [str, tmp26, tmp27, flag, tmp29];
  _require(flag[10]).useSmoothKeyboardHandler(obj3, items11);
  const items12 = [update, tmp31];
  const tmp37 = num2(flag2(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let fn = tmp2;
            fn = undefined;
            table = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_21();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          fn = function e() {
            callback();
          };
          const obj2 = { scrollFromCurrentPosition: null };
          obj2[0] = closure_34;
          fn.__closure = obj2;
          fn.__workletHash = 15498084251450;
          fn.__initData = outer1_22;
          outer1_0(table[3]).runOnUI(fn)();
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp7) {
        c3 = tmp;
        throw tmp7;
      }
    }
  }), items12);
  c37 = tmp37;
  const items13 = [tmp37];
  snapToOffsets(arg1, () => {
    const current = ref.current;
    if (current) {
      current.assureFocusedInputVisible = () => {
        callback();
      };
      return current;
    } else {
      const obj = { assureFocusedInputVisible: null };
      obj[0] = function assureFocusedInputVisible() {
        callback();
      };
      return obj;
    }
  }, items13);
  const items14 = [num];
  str(() => {
    _undefined8();
  }, items14);
  const obj23 = _require(flag[10]);
  class De {
    constructor() {
      return input.value;
    }
  }
  De.__closure = { input };
  De.__workletHash = 11096167186933;
  De.__initData = sharedValue9;
  class Ae {
    constructor(arg0, arg1) {
      target = undefined;
      if (bottomOffset != null) {
        target = bottomOffset.target;
      }
      target1 = undefined;
      if (arg1 != null) {
        target1 = arg1.target;
      }
      tmp3 = target === target1;
      if (tmp3) {
        height = undefined;
        if (bottomOffset != null) {
          height = bottomOffset.layout.height;
        }
        height1 = undefined;
        if (arg1 != null) {
          height1 = arg1.layout.height;
        }
        tmp3 = height !== height1;
      }
      if (tmp3) {
        tmp6 = E;
        tmp7 = E();
      }
      return;
    }
  }
  Ae.__closure = { scrollFromCurrentPosition: tmp31 };
  Ae.__workletHash = 5468543936636;
  Ae.__initData = sharedValue10;
  const animatedReaction = _require(flag[3]).useAnimatedReaction(De, Ae, []);
  const obj25 = _require(flag[3]);
  class Oe {
    constructor() {
      num = 0;
      if (c3) {
        tmp = c14;
        num = c14.value;
      }
      return num;
    }
  }
  Oe.__closure = { enabled: flag2, currentKeyboardFrameHeight: sharedValue2 };
  Oe.__workletHash = 7351587309738;
  Oe.__initData = sharedValue11;
  const items15 = [flag2];
  const derivedValue = _require(flag[3]).useDerivedValue(Oe, items15);
  _require(flag[3]);
  function ze() {
    if (flag2) {
      if ("layout" === "layout") {
        const obj = { paddingBottom: null };
        obj[0] = sharedValue2.value + 1;
      }
      return {};
    }
  }
  ze.__closure = { enabled: flag2, mode: str, currentKeyboardFrameHeight: sharedValue2 };
  ze.__workletHash = 9098994865676;
  ze.__initData = sharedValue12;
  const items16 = [flag2, str];
  if ("layout" === str) {
    obj4 = { ref: null };
    obj4[0] = tmp8;
    let merged1 = Object.assign(merged);
    obj4.scrollEventThrottle = 16;
    obj4.onLayout = tmp25;
    const items17 = [children, ];
    if (flag2) {
      obj5 = { style: null };
      obj5[0] = tmp43;
      flag2 = sharedValue(tmp7(tmp4[3]).View, obj5);
    }
    items17[1] = flag2;
    obj4.children = items17;
    let tmp50Result = sharedValue1(ScrollView, obj4);
    const tmp50 = sharedValue1;
  } else {
    obj6 = { ref: null };
    obj6[0] = tmp8;
    const merged2 = Object.assign(merged);
    obj6.bottomPadding = derivedValue;
    obj6.scrollEventThrottle = 16;
    obj6.ScrollViewComponent = ScrollView;
    obj6.onLayout = tmp25;
    obj6.children = children;
    tmp50Result = sharedValue(tmp7(tmp4[11]), obj6);
    const tmp7Result = tmp7(tmp4[11]);
  }
  return tmp50Result;
});