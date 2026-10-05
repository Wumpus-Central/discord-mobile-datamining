// _runtime/metro/01853__.js
import _mod1643 from "01643__.js";
import _mod1855 from "01855__.js";
import _asyncToGenerator from "00005__asyncToGenerator.js";
import react_mod from "../00019_react.js";
import Fragment from "../react/00021_Fragment.js";

let _require, c2, closure_2, size;

let c10;
let c9;
let closure_4;
let forwardRef;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({
  useCallback: closure_4,
  useEffect: hasOwnProperty,
  useImperativeHandle: metroRequire,
  useMemo: metroImportDefault,
  forwardRef,
} = react);
react = react_mod;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = {
  code: "function pnpm_indexTsx1(e,animated=false){const{enabled,layout,scrollViewTarget,height,keyboardHeight,bottomOffset,interpolate,initialKeyboardSize,scrollDistanceWithRespectToSnapPoints,scrollPosition,snapToOffsets,scrollTo,scrollViewAnimatedRef,scrollViewPageY}=this.__closure;var _layout$value,_layout$value2,_layout$value3;if(!enabled){return 0;}if(((_layout$value=layout.value)===null||_layout$value===void 0?void 0:_layout$value.parentScrollViewTarget)!==scrollViewTarget.value){return 0;}const visibleRect=height-keyboardHeight.value;const absoluteY=((_layout$value2=layout.value)===null||_layout$value2===void 0?void 0:_layout$value2.layout.absoluteY)||0;const inputHeight=((_layout$value3=layout.value)===null||_layout$value3===void 0?void 0:_layout$value3.layout.height)||0;const point=absoluteY+inputHeight;if(visibleRect-point<=bottomOffset){const relativeScrollTo=keyboardHeight.value-(height-point)+bottomOffset;const interpolatedScrollTo=interpolate(e,[initialKeyboardSize.value,keyboardHeight.value],[0,scrollDistanceWithRespectToSnapPoints(relativeScrollTo+scrollPosition.value,snapToOffsets)-scrollPosition.value]);const targetScrollY=Math.max(interpolatedScrollTo,0)+scrollPosition.value;scrollTo(scrollViewAnimatedRef,0,targetScrollY,animated);return interpolatedScrollTo;}if(point<scrollViewPageY.value){const positionOnScreen=visibleRect-bottomOffset;const topOfScreen=scrollPosition.value+point;scrollTo(scrollViewAnimatedRef,0,topOfScreen-positionOnScreen,animated);}return 0;}",
};
let closure_12 = {
  code: 'function pnpm_indexTsx2(e){const{mode,keyboardWillAppear,ghostViewSpace,scrollTo,scrollViewAnimatedRef,scrollPosition,interpolate,initialKeyboardSize,keyboardHeight}=this.__closure;if(mode==="layout"){return false;}if(!keyboardWillAppear.value&&ghostViewSpace.value>0){scrollTo(scrollViewAnimatedRef,0,scrollPosition.value-interpolate(e,[initialKeyboardSize.value,keyboardHeight.value],[ghostViewSpace.value,0]),false);return true;}return false;}',
};
let closure_13 = {
  code: "function pnpm_indexTsx3(newPosition){const{scrollPosition,maybeScroll,keyboardHeight}=this.__closure;const prevScroll=scrollPosition.value;scrollPosition.value=newPosition;maybeScroll(keyboardHeight.value,true);scrollPosition.value=prevScroll;}",
};
let value2 = {
  code: "function pnpm_indexTsx4(e){const{interpolate,keyboardHeight,extraKeyboardSpace,currentKeyboardFrameHeight}=this.__closure;const keyboardFrame=interpolate(e.height,[0,keyboardHeight.value],[0,keyboardHeight.value+extraKeyboardSpace]);currentKeyboardFrameHeight.value=keyboardFrame;}",
};
let closure_15 = {
  code: "function pnpm_indexTsx5(){const{lastSelection,input,layout,clamp}=this.__closure;var _lastSelection$value,_input$value;const customHeight=(_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.selection.end.y;if(!((_input$value=input.value)!==null&&_input$value!==void 0&&_input$value.layout)||!customHeight){return false;}layout.value={...input.value,layout:{...input.value.layout,height:clamp(customHeight,0,input.value.layout.height)}};return true;}",
};
let closure_16 = {
  code: "function pnpm_indexTsx6(){const{layout,updateLayoutFromSelection,performScrollWithPositionRestoration,position}=this.__closure;const prevLayout=layout.value;if(!updateLayoutFromSelection()){return;}performScrollWithPositionRestoration(position.value);layout.value=prevLayout;}",
};
let value3 = {
  code: "function pnpm_indexTsx7(){const{scrollFromCurrentPosition}=this.__closure;scrollFromCurrentPosition();}",
};
let closure_18 = {
  code: "function pnpm_indexTsx8(e){const{lastSelection,selectionUpdatedSinceHide,pendingSelectionForFocus,updateLayoutFromSelection,keyboardWillAppear,keyboardHeight,position,maybeScroll,scrollFromCurrentPosition,onChangeTextHandler}=this.__closure;var _lastSelection$value,_lastSelection$value2;const lastTarget=(_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.target;const latestSelection=(_lastSelection$value2=lastSelection.value)===null||_lastSelection$value2===void 0?void 0:_lastSelection$value2.selection;lastSelection.value=e;selectionUpdatedSinceHide.value=true;if(e.target!==lastTarget||pendingSelectionForFocus.value){if(pendingSelectionForFocus.value){pendingSelectionForFocus.value=false;updateLayoutFromSelection();if(!keyboardWillAppear.value&&keyboardHeight.value>0){position.value+=maybeScroll(keyboardHeight.value,true);}}return;}if(e.selection.end.position===e.selection.start.position&&(latestSelection===null||latestSelection===void 0?void 0:latestSelection.end.y)!==e.selection.end.y){return scrollFromCurrentPosition();}if(e.selection.start.position!==e.selection.end.position){return scrollFromCurrentPosition();}onChangeTextHandler();}",
};
const value4 = {
  code: 'function pnpm_indexTsx9(e){const{keyboardHeight,keyboardWillAppear,tag,initialKeyboardSize,scrollPosition,scrollBeforeKeyboardMovement,pendingSelectionForFocus,position,mode,syncKeyboardFrame,lastSelection,selectionUpdatedSinceHide,updateLayoutFromSelection,input,layout,maybeScroll,ghostViewSpace,scrollViewLayout,scrollViewContentSize}=this.__closure;const keyboardWillChangeSize=keyboardHeight.value!==e.height&&e.height>0;keyboardWillAppear.value=e.height>0&&keyboardHeight.value===0;const keyboardWillHide=e.height===0;const focusWasChanged=tag.value!==e.target&&e.target!==-1||keyboardWillChangeSize;if(keyboardWillChangeSize){initialKeyboardSize.value=keyboardHeight.value;}if(keyboardWillHide){initialKeyboardSize.value=0;scrollPosition.value=scrollBeforeKeyboardMovement.value;pendingSelectionForFocus.value=false;}if(keyboardWillAppear.value||keyboardWillChangeSize||focusWasChanged){scrollPosition.value=position.value;keyboardHeight.value=e.height;if(mode==="insets"){syncKeyboardFrame(e);}}if(focusWasChanged){var _lastSelection$value;tag.value=e.target;if(((_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.target)===e.target&&selectionUpdatedSinceHide.value){updateLayoutFromSelection();pendingSelectionForFocus.value=false;}else{var _lastSelection$value2;if(((_lastSelection$value2=lastSelection.value)===null||_lastSelection$value2===void 0?void 0:_lastSelection$value2.target)===e.target){updateLayoutFromSelection();}else if(input.value){layout.value=input.value;}pendingSelectionForFocus.value=true;}scrollBeforeKeyboardMovement.value=position.value;}if(focusWasChanged&&!keyboardWillAppear.value){if(!pendingSelectionForFocus.value){position.value+=maybeScroll(e.height,true);}}if(mode==="insets"){ghostViewSpace.value=position.value+scrollViewLayout.value.height-scrollViewContentSize.value.height;if(ghostViewSpace.value>0){scrollPosition.value=position.value;}}}',
};
let closure_20 = {
  code: 'function pnpm_indexTsx10(e){const{removeGhostPadding,mode,syncKeyboardFrame,disableScrollOnKeyboardHide,keyboardWillAppear,maybeScroll}=this.__closure;if(removeGhostPadding(e.height)){return;}if(mode==="layout"){syncKeyboardFrame(e);}if(!disableScrollOnKeyboardHide||keyboardWillAppear.value){maybeScroll(e.height);}}',
};
let closure_21 = {
  code: "function pnpm_indexTsx11(e){const{removeGhostPadding,keyboardHeight,scrollPosition,position,selectionUpdatedSinceHide,keyboardWillAppear,pendingSelectionForFocus,syncKeyboardFrame}=this.__closure;removeGhostPadding(e.height);keyboardHeight.value=e.height;scrollPosition.value=position.value;if(e.height===0){selectionUpdatedSinceHide.value=false;}else if(keyboardWillAppear.value){pendingSelectionForFocus.value=false;}syncKeyboardFrame(e);}",
};
let closure_22 = {
  code: "function pnpm_indexTsx12(){const{scrollFromCurrentPosition}=this.__closure;scrollFromCurrentPosition();}",
};
let closure_23 = { code: "function pnpm_indexTsx13(){const{input}=this.__closure;return input.value;}" };
let closure_24 = {
  code: "function pnpm_indexTsx14(current,previous){const{scrollFromCurrentPosition}=this.__closure;if((current===null||current===void 0?void 0:current.target)===(previous===null||previous===void 0?void 0:previous.target)&&(current===null||current===void 0?void 0:current.layout.height)!==(previous===null||previous===void 0?void 0:previous.layout.height)){scrollFromCurrentPosition();}}",
};
let closure_25 = {
  code: "function pnpm_indexTsx15(){const{enabled,currentKeyboardFrameHeight}=this.__closure;return enabled?currentKeyboardFrameHeight.value:0;}",
};
const value5 = {
  code: 'function pnpm_indexTsx16(){const{enabled,mode,currentKeyboardFrameHeight}=this.__closure;return enabled&&mode==="layout"?{paddingBottom:currentKeyboardFrameHeight.value+1}:{};}',
};

export default forwardRef((bottomOffset, arg1) => {
  let children;
  let fn2;
  let items17;
  let onLayout;
  let tmp50Result;
  ({ children, onLayout } = bottomOffset);
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
    const tmp = num;
    ScrollView = num(flag[3]).ScrollView;
  }
  const snapToOffsets = bottomOffset.snapToOffsets;
  let merged = Object.assign(
    bottomOffset,
    Object.assign({
      children: 0,
      onLayout: 0,
      bottomOffset: 0,
      disableScrollOnKeyboardHide: 0,
      enabled: 0,
      extraKeyboardSpace: 0,
      mode: 0,
      ScrollViewComponent: 0,
      snapToOffsets: 0,
    }),
  );
  let ref;
  let closure_29;
  let closure_30;
  let closure_31;
  let closure_32;
  let closure_33;
  let closure_34;
  let closure_35;
  let closure_36;
  let closure_37;
  let tmp4 = flag;
  let obj = onLayout(flag[3]);
  const animatedRef = obj.useAnimatedRef();
  ref = ref.useRef(null);
  const tmp7 = num;
  const tmp8 = num(flag[4])(animatedRef, ref);
  let obj2 = onLayout(flag[3]);
  const sharedValue = obj2.useSharedValue(null);
  let obj3 = onLayout(flag[3]);
  const sharedValue1 = obj3.useSharedValue(0);
  let tmp11 = num(flag[5])(animatedRef);
  const offset = tmp11.offset;
  let layout = tmp11.layout;
  size = tmp11.size;
  let obj4 = onLayout(flag[3]);
  const sharedValue2 = obj4.useSharedValue(0);
  let obj5 = onLayout(flag[3]);
  const sharedValue3 = obj5.useSharedValue(0);
  let obj6 = onLayout(flag[3]);
  const sharedValue4 = obj6.useSharedValue(false);
  const obj7 = onLayout(flag[3]);
  const sharedValue5 = obj7.useSharedValue(-1);
  const obj8 = onLayout(flag[3]);
  const sharedValue6 = obj8.useSharedValue(0);
  const obj9 = onLayout(flag[3]);
  const sharedValue7 = obj9.useSharedValue(0);
  const obj10 = onLayout(flag[6]);
  const reanimatedFocusedInput = obj10.useReanimatedFocusedInput();
  const input = reanimatedFocusedInput.input;
  const update = reanimatedFocusedInput.update;
  const obj11 = onLayout(flag[3]);
  const sharedValue8 = obj11.useSharedValue(null);
  const obj12 = onLayout(flag[3]);
  const sharedValue9 = obj12.useSharedValue(null);
  const obj13 = onLayout(flag[3]);
  const sharedValue10 = obj13.useSharedValue(-1);
  const obj14 = onLayout(flag[3]);
  const sharedValue11 = obj14.useSharedValue(false);
  const obj15 = onLayout(flag[3]);
  const sharedValue12 = obj15.useSharedValue(false);
  const obj16 = onLayout(flag[3]);
  const sharedValue13 = obj16.useSharedValue(0);
  const obj17 = onLayout(flag[6]);
  let height = obj17.useWindowDimensions().height;
  _require = flag2((value) => {
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (function* (arg0) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              value = undefined;
              const obj5 = value(flag[7]);
              const findNodeHandleResult = obj5.findNodeHandle(ref.current);
              closure_1_9.value = findNodeHandleResult;
              const tmp16 = value;
              const tmp17 = value;
              if (value != null) {
                value(tmp16);
              }
              if (null !== findNodeHandleResult) {
                c3 = 1;
                const KeyboardControllerNative = tmp17(flag[8]).KeyboardControllerNative;
                c4 = 2;
                c5 = 1;
                const obj4 = {
                  value: KeyboardControllerNative.viewPositionInWindow(findNodeHandleResult),
                  done: false,
                };
                return obj4;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            return { value, done: true };
          } else {
            value = value.y;
            closure_1_27.value = value;
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp10) {
          if (0 === c3) {
            c5 = 3;
            throw tmp10;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  });
  let items = [onLayout];
  const tmp25 = num2(function (arg0) {
    return closure_0(...arguments);
  }, items);
  class M {
    constructor(arg0) {
      flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      if (flag2) {
        value = sharedValue8.value;
        let prop;
        if (value != null) {
          prop = value.parentScrollViewTarget;
        }
        if (prop !== sharedValue.value) {
          return 0;
        } else {
          const diff = height - sharedValue3.value;
          value2 = sharedValue8.value;
          num2 = undefined;
          if (value2 != null) {
            num2 = value2.layout.absoluteY;
          }
          if (!num2) {
            num2 = 0;
          }
          value3 = sharedValue8.value;
          let num3;
          if (value3 != null) {
            num3 = value3.layout.height;
          }
          if (!num3) {
            num3 = 0;
          }
          const sum = num2 + num3;
          if (diff - sum <= num) {
            const sum1 = sharedValue3.value - (height - sum) + tmp6;
            const items = [sharedValue6.value, sharedValue3.value];
            const interpolate = _mod1643.interpolate;
            _mod1643;
            const items1 = [0];
            const obj2 = _mod1855;
            items1[1] =
              obj2.scrollDistanceWithRespectToSnapPoints(sum1 + sharedValue1.value, snapToOffsets) - sharedValue1.value;
            const interpolateResult = interpolate(arg0, items, items1);
            const _Math = Math;
            const sum2 = Math.max(interpolateResult, 0) + sharedValue1.value;
            const obj3 = _mod1643;
            obj3.scrollTo(animatedRef, 0, sum2, flag);
            return interpolateResult;
          } else {
            if (sum < sharedValue13.value) {
              const diff1 = diff - tmp6;
              const sum3 = sharedValue1.value + sum;
              const obj = _mod1643;
              obj.scrollTo(animatedRef, 0, sum3 - diff1, flag);
            }
            return 0;
          }
        }
      } else {
        return 0;
      }
    }
  }
  M.__closure = {
    enabled: flag2,
    layout: sharedValue8,
    scrollViewTarget: sharedValue,
    height,
    keyboardHeight: sharedValue3,
    bottomOffset: num,
    interpolate: onLayout(flag[3]).interpolate,
    initialKeyboardSize: sharedValue6,
    scrollDistanceWithRespectToSnapPoints: onLayout(flag[9]).scrollDistanceWithRespectToSnapPoints,
    scrollPosition: sharedValue1,
    snapToOffsets,
    scrollTo: onLayout(flag[3]).scrollTo,
    scrollViewAnimatedRef: animatedRef,
    scrollViewPageY: sharedValue13,
  };
  M.__workletHash = 1454504363777;
  M.__initData = offset;
  let items1 = [num, flag2, height, snapToOffsets];
  ({
    enabled: flag2,
    layout: sharedValue8,
    scrollViewTarget: sharedValue,
    height,
    keyboardHeight: sharedValue3,
    bottomOffset: num,
    interpolate: onLayout(flag[3]).interpolate,
    initialKeyboardSize: sharedValue6,
    scrollDistanceWithRespectToSnapPoints: onLayout(flag[9]).scrollDistanceWithRespectToSnapPoints,
    scrollPosition: sharedValue1,
    snapToOffsets,
    scrollTo: onLayout(flag[3]).scrollTo,
    scrollViewAnimatedRef: animatedRef,
    scrollViewPageY: sharedValue13,
  });
  const tmp26 = num2(M, items1);
  closure_29 = tmp26;
  class Y {
    constructor(arg0) {
      flag = "layout" !== str && !sharedValue4.value && sharedValue10.value > 0;
      if (flag) {
        const scrollTo = _mod1643.scrollTo;
        value = sharedValue1.value;
        const items = [sharedValue6.value, sharedValue3.value];
        const items1 = [sharedValue10.value, 0];
        const obj = _mod1643;
        scrollTo(animatedRef, 0, value - obj.interpolate(arg0, items, items1), false);
        flag = true;
      }
      return flag;
    }
  }
  Y.__closure = {
    mode: str,
    keyboardWillAppear: sharedValue4,
    ghostViewSpace: sharedValue10,
    scrollTo: onLayout(flag[3]).scrollTo,
    scrollViewAnimatedRef: animatedRef,
    scrollPosition: sharedValue1,
    interpolate: onLayout(flag[3]).interpolate,
    initialKeyboardSize: sharedValue6,
    keyboardHeight: sharedValue3,
  };
  Y.__workletHash = 17351526068375;
  Y.__initData = layout;
  const items2 = [str];
  ({
    mode: str,
    keyboardWillAppear: sharedValue4,
    ghostViewSpace: sharedValue10,
    scrollTo: onLayout(flag[3]).scrollTo,
    scrollViewAnimatedRef: animatedRef,
    scrollPosition: sharedValue1,
    interpolate: onLayout(flag[3]).interpolate,
    initialKeyboardSize: sharedValue6,
    keyboardHeight: sharedValue3,
  });
  const tmp27 = num2(Y, items2);
  closure_30 = tmp27;
  class I {
    constructor(value) {
      sharedValue1.value = value;
      value = sharedValue1.value;
      closure_29(sharedValue3.value, true);
      sharedValue1.value = value;
    }
  }
  I.__closure = { scrollPosition: sharedValue1, maybeScroll: tmp26, keyboardHeight: sharedValue3 };
  I.__workletHash = 1481901193395;
  I.__initData = size;
  const items3 = [sharedValue1, sharedValue3, tmp26];
  const tmp28 = num2(I, items3);
  closure_31 = tmp28;
  class B {
    constructor(height) {
      const items = [0, sharedValue3.value];
      const items1 = [0, sharedValue3.value + num2];
      const obj = _mod1643;
      sharedValue2.value = obj.interpolate(height.height, items, items1);
    }
  }
  B.__closure = {
    interpolate: onLayout(flag[3]).interpolate,
    keyboardHeight: sharedValue3,
    extraKeyboardSpace: num2,
    currentKeyboardFrameHeight: sharedValue2,
  };
  B.__workletHash = 6643520179794;
  B.__initData = sharedValue2;
  const items4 = [num2];
  ({
    interpolate: onLayout(flag[3]).interpolate,
    keyboardHeight: sharedValue3,
    extraKeyboardSpace: num2,
    currentKeyboardFrameHeight: sharedValue2,
  });
  const tmp29 = num2(B, items4);
  closure_32 = tmp29;
  class G {
    constructor() {
      let obj2;
      let obj3;
      let y;
      value = sharedValue9.value;
      if (value != null) {
        y = value.selection.end.y;
      }
      value2 = input.value;
      layout = undefined;
      if (value2 != null) {
        layout = value2.layout;
      }
      num = !layout;
      if (layout) {
        num = !y;
      }
      if (!num) {
        const obj = { layout: obj2 };
        const merged = Object.assign(input.value);
        obj2 = { height: obj3.clamp(y, 0, input.value.layout.height) };
        const merged1 = Object.assign(input.value.layout);
        sharedValue8.value = obj;
        num = 0;
        obj3 = _mod1643;
      }
      return !num;
    }
  }
  G.__closure = { lastSelection: sharedValue9, input, layout: sharedValue8, clamp: onLayout(flag[3]).clamp };
  G.__workletHash = 619310634941;
  G.__initData = sharedValue3;
  const items5 = [input, sharedValue9, sharedValue8];
  ({ lastSelection: sharedValue9, input, layout: sharedValue8, clamp: onLayout(flag[3]).clamp });
  const tmp30 = num2(G, items5);
  closure_33 = tmp30;
  class E {
    constructor() {
      value = sharedValue8.value;
      if (closure_33()) {
        closure_31(offset.value);
        sharedValue8.value = value;
      }
    }
  }
  E.__closure = {
    layout: sharedValue8,
    updateLayoutFromSelection: tmp30,
    performScrollWithPositionRestoration: tmp28,
    position: offset,
  };
  E.__workletHash = 11406147562112;
  E.__initData = sharedValue4;
  const items6 = [tmp28];
  const tmp31 = num2(E, items6);
  closure_34 = tmp31;
  let fn = function j() {
    closure_34();
  };
  fn.__closure = { scrollFromCurrentPosition: tmp31 };
  fn.__workletHash = 1300972162638;
  fn.__initData = sharedValue5;
  const items7 = [tmp31];
  const tmp32 = num2(fn, items7);
  closure_35 = tmp32;
  const items8 = [tmp32];
  const tmp33 = animatedRef(() => {
    const obj = _mod1855;
    return obj.debounce(closure_35, 200);
  }, items8);
  closure_36 = tmp33;
  class N {
    constructor(value) {
      let selection;
      let tmp5;
      value = sharedValue9.value;
      let target;
      if (value != null) {
        target = value.target;
      }
      value2 = sharedValue9.value;
      if (value2 != null) {
        selection = value2.selection;
      }
      sharedValue9.value = value;
      sharedValue12.value = true;
      if (value.target === target) {
        if (!sharedValue11.value) {
          if (value.selection.end.position !== value.selection.start.position) {
            if (value.selection.start.position === value.selection.end.position) {
              closure_36();
            }
            return tmp5;
          } else {
            let y;
            if (selection != null) {
              y = selection.end.y;
            }
          }
          tmp5 = closure_34();
        }
      }
      if (sharedValue11.value) {
        tmp7.value = false;
        closure_33();
        const tmp11 = !sharedValue4.value && sharedValue3.value > 0;
        if (tmp11) {
          offset.value = offset.value + closure_29(sharedValue3.value, true);
        }
      }
    }
  }
  N.__closure = {
    lastSelection: sharedValue9,
    selectionUpdatedSinceHide: sharedValue12,
    pendingSelectionForFocus: sharedValue11,
    updateLayoutFromSelection: tmp30,
    keyboardWillAppear: sharedValue4,
    keyboardHeight: sharedValue3,
    position: offset,
    maybeScroll: tmp26,
    scrollFromCurrentPosition: tmp31,
    onChangeTextHandler: tmp33,
  };
  N.__workletHash = 7363285427351;
  N.__initData = sharedValue6;
  const items9 = [tmp31, tmp33, tmp30, tmp26];
  const tmp34 = num2(N, items9);
  const items10 = [tmp34];
  const obj22 = onLayout(flag[6]);
  obj22.useFocusedInputHandler({ onSelectionChange: tmp34 }, items10);
  const obj24 = { onStart: Q, onMove: J, onEnd: fn2 };
  const obj23 = onLayout(flag[10]);
  class Q {
    constructor(height) {
      sharedValue4.value = height.height > 0 && 0 === sharedValue3.value;
      let tmp3 = sharedValue5.value !== height.target;
      height = height.height;
      if (tmp3) {
        tmp3 = -1 !== height.target;
      }
      if (!tmp3) {
        tmp3 = tmp;
      }
      if (sharedValue3.value !== height.height && height.height > 0) {
        sharedValue6.value = sharedValue3.value;
      }
      if (0 === height) {
        sharedValue6.value = 0;
        sharedValue1.value = sharedValue7.value;
        sharedValue11.value = false;
      }
      const tmp9 = sharedValue4.value || (sharedValue3.value !== height.height && height.height > 0) || tmp3;
      if (tmp9) {
        sharedValue1.value = offset.value;
        sharedValue3.value = height.height;
        if ("insets" === "insets") {
          closure_32(height);
        }
      }
      if (tmp3) {
        sharedValue5.value = height.target;
        value = sharedValue9.value;
        let target;
        if (value != null) {
          target = value.target;
        }
        if (target === height.target) {
          if (sharedValue12.value) {
            closure_33();
            sharedValue11.value = false;
          }
          sharedValue7.value = offset.value;
        }
        value2 = sharedValue9.value;
        let target1;
        if (value2 != null) {
          target1 = value2.target;
        }
        if (target1 === height.target) {
          closure_33();
        } else if (input.value) {
          sharedValue8.value = iter4.value;
        }
        sharedValue11.value = true;
      }
      if (tmp3) {
        tmp3 = !sharedValue4.value;
      }
      if (tmp3) {
        if (!sharedValue11.value) {
          offset.value = offset.value + closure_29(height.height, true);
        }
      }
      if ("insets" === str) {
        sharedValue10.value = offset.value + layout.value.height - size.value.height;
        if (sharedValue10.value > 0) {
          sharedValue1.value = iter5.value;
        }
      }
    }
  }
  Q.__closure = {
    keyboardHeight: sharedValue3,
    keyboardWillAppear: sharedValue4,
    tag: sharedValue5,
    initialKeyboardSize: sharedValue6,
    scrollPosition: sharedValue1,
    scrollBeforeKeyboardMovement: sharedValue7,
    pendingSelectionForFocus: sharedValue11,
    position: offset,
    mode: str,
    syncKeyboardFrame: tmp29,
    lastSelection: sharedValue9,
    selectionUpdatedSinceHide: sharedValue12,
    updateLayoutFromSelection: tmp30,
    input,
    layout: sharedValue8,
    maybeScroll: tmp26,
    ghostViewSpace: sharedValue10,
    scrollViewLayout: layout,
    scrollViewContentSize: size,
  };
  Q.__workletHash = 4279285643383;
  Q.__initData = sharedValue7;
  class J {
    constructor(height) {
      if (!closure_30(height.height)) {
        if ("layout" === "layout") {
          closure_32(height);
        }
        const tmp4 = flag && !sharedValue4.value;
        if (!tmp4) {
          closure_29(height.height);
        }
      }
    }
  }
  J.__closure = {
    removeGhostPadding: tmp27,
    mode: str,
    syncKeyboardFrame: tmp29,
    disableScrollOnKeyboardHide: flag,
    keyboardWillAppear: sharedValue4,
    maybeScroll: tmp26,
  };
  J.__workletHash = 15263617220981;
  J.__initData = input;
  fn2 = function q(height) {
    closure_30(height.height);
    sharedValue3.value = height.height;
    sharedValue1.value = offset.value;
    if (0 === height.height) {
      sharedValue12.value = false;
    } else if (sharedValue4.value) {
      sharedValue11.value = false;
    }
    closure_32(height);
  };
  fn2.__closure = {
    removeGhostPadding: tmp27,
    keyboardHeight: sharedValue3,
    scrollPosition: sharedValue1,
    position: offset,
    selectionUpdatedSinceHide: sharedValue12,
    keyboardWillAppear: sharedValue4,
    pendingSelectionForFocus: sharedValue11,
    syncKeyboardFrame: tmp29,
  };
  fn2.__workletHash = 15672596601321;
  fn2.__initData = update;
  const items11 = [str, tmp26, tmp27, flag, tmp29];
  obj23.useSmoothKeyboardHandler(obj24, items11);
  const items12 = [update, tmp31];
  const tmp37 = num2(
    flag2(function* () {
      let closure_0;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let fn;
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
              let closure_1 = tmp4;
              fn = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: update(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            fn = function e() {
              closure_1_34();
            };
            const obj6 = { scrollFromCurrentPosition: closure_129_34 };
            fn.__closure = obj6;
            fn.__workletHash = 15498084251450;
            fn.__initData = __initData;
            const obj5 = tmp(c2[3]);
            obj5.runOnUI(fn)();
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp6) {
          c3 = 3;
          throw tmp6;
        }
      }
    }),
    items12,
  );
  closure_37 = tmp37;
  const items13 = [tmp37];
  snapToOffsets(
    arg1,
    () => {
      const current = ref.current;
      if (current) {
        current.assureFocusedInputVisible = () => {
          closure_1_37();
        };
        return current;
      } else {
        return {
          assureFocusedInputVisible() {
            closure_1_37();
          },
        };
      }
    },
    items13,
  );
  const items14 = [num];
  str(() => {
    closure_37();
  }, items14);
  const obj25 = onLayout(flag[3]);
  class De {
    constructor() {
      return input.value;
    }
  }
  De.__closure = { input };
  De.__workletHash = 11096167186933;
  De.__initData = sharedValue9;
  class Ae {
    constructor(target, target2) {
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
        height = undefined;
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
        closure_34();
      }
    }
  }
  Ae.__closure = { scrollFromCurrentPosition: tmp31 };
  Ae.__workletHash = 5468543936636;
  Ae.__initData = sharedValue10;
  const animatedReaction = obj25.useAnimatedReaction(De, Ae, []);
  const obj26 = onLayout(flag[3]);
  class Oe {
    constructor() {
      num = 0;
      if (flag2) {
        num = sharedValue2.value;
      }
      return num;
    }
  }
  Oe.__closure = { enabled: flag2, currentKeyboardFrameHeight: sharedValue2 };
  Oe.__workletHash = 7351587309738;
  Oe.__initData = sharedValue11;
  const items15 = [flag2];
  const derivedValue = obj26.useDerivedValue(Oe, items15);
  onLayout(flag[3]);
  function ze() {
    if (flag2) {
      return {};
    }
  }
  ze.__closure = { enabled: flag2, mode: str, currentKeyboardFrameHeight: sharedValue2 };
  ze.__workletHash = 9098994865676;
  ze.__initData = sharedValue12;
  const items16 = [flag2, str];
  if ("layout" === str) {
    const obj27 = { ref: tmp8, scrollEventThrottle: 16, onLayout: tmp25, children: items17 };
    let merged1 = Object.assign(merged);
    items17 = [children];
    const tmp50 = sharedValue1;
    if (flag2) {
      const obj28 = { style: tmp43 };
      flag2 = sharedValue(tmp7(tmp4[3]).View, obj28);
    }
    items17[1] = flag2;
    tmp50Result = tmp50(ScrollView, obj27);
  } else {
    const obj29 = {
      ref: tmp8,
      bottomPadding: derivedValue,
      scrollEventThrottle: 16,
      ScrollViewComponent: ScrollView,
      onLayout: tmp25,
      children,
    };
    const tmp7Result = tmp7(tmp4[11]);
    const merged2 = Object.assign(merged);
    let num3 = 16;
    tmp50Result = sharedValue(tmp7Result, obj29);
  }
  return tmp50Result;
});
