// === Module 11910: useDraggablePip ===

// Module 11910 (useDraggablePip)
import _slicedToArray from "module_32" /* 32 */;

const require = globalThis.__r;

const require = fn;
let useChannelCallStore = fn(11181).useChannelCallStore;
const Constants = fn(11897);
({ PIP_FOCUS_SCALE: closure_4, PIP_GESTURE_ACTIVE_OFFSET: hasOwnProperty } = Constants);
let closure_6 = { mass: 1, stiffness: 250, overshootClamping: true, damping: 20 };
let closure_7 = { code: "(function useDraggablePipTsx1(){let[withTiming,pipFocus,PIP_FOCUS_SCALE,STANDARD_EASING]=this.__closure;return withTiming(pipFocus?PIP_FOCUS_SCALE:1,{easing:STANDARD_EASING,duration:250});})" };
let closure_8 = { code: "(function useDraggablePipTsx2(){let[width]=this.__closure;return width;})" };
let closure_9 = { code: "(function useDraggablePipTsx3(){let[height]=this.__closure;return height;})" };
let closure_10 = { code: "(function useDraggablePipTsx4(){let[pipScale,width]=this.__closure;return pipScale.get()*width;})" };
let closure_11 = { code: "(function useDraggablePipTsx5(){let[pipScale,height]=this.__closure;return pipScale.get()*height;})" };
let closure_12 = { code: "(function useDraggablePipTsx6(){let[containerWidth]=this.__closure;return containerWidth;})" };
let closure_13 = { code: "(function useDraggablePipTsx7(){let[containerHeight]=this.__closure;return containerHeight;})" };
let closure_14 = { code: "(function useDraggablePipTsx8(){let[containerWidth,scaledWidthDv,xPosition]=this.__closure;return[containerWidth-scaledWidthDv.get(),xPosition.get()];})" };
let closure_15 = { code: "(function useDraggablePipTsx9(result,previous){let[cheapWorkletArrayShallowEqual,clamp,xPosition,xDestination]=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerWidthNew,xPositionNew]=result;const[containerWidthOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerWidthNew!==containerWidthOld){const newX=clamp(xPositionNew*(containerWidthNew/containerWidthOld),0,containerWidthNew);xPosition.set(newX);xDestination.set(newX);}})" };
let closure_16 = { code: "(function useDraggablePipTsx10(){let[containerHeight,scaledHeightDv,yPosition]=this.__closure;return[containerHeight-scaledHeightDv.get(),yPosition.get()];})" };
let closure_17 = { code: "(function useDraggablePipTsx11(result,previous){let[cheapWorkletArrayShallowEqual,clamp,yPosition,yDestination]=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerHeightNew,yPositionNew]=result;const[containerHeightOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerHeightNew!==containerHeightOld){const newY=clamp(yPositionNew*(containerHeightNew/containerHeightOld),0,containerHeightNew);yPosition.set(newY);yDestination.set(newY);}})" };
let closure_18 = { code: "(function useDraggablePipTsx12(event){let[xPosition,xDestination,yPosition,yDestination,trackedVoiceControlsToggleMovedForGestureSv,onMoved,scheduleOnRN]=this.__closure;xPosition.set(xDestination.get()+event.translationX);yPosition.set(yDestination.get()+event.translationY);if(!trackedVoiceControlsToggleMovedForGestureSv.get()){if(onMoved!=null){scheduleOnRN(onMoved);}trackedVoiceControlsToggleMovedForGestureSv.set(true);}})" };
let closure_19 = { code: "(function useDraggablePipTsx13(event){let[xPosition,containerWidthDv,scaledWidthDv,clamp,yPosition,containerHeightDv,scaledHeightDv,snapToCorners,withSpring,spring,xDestination,yDestination]=this.__closure;const toss=0.0875;const xToss=xPosition.get()+toss*event.velocityX;const xMin=0;const xMax=containerWidthDv.get()-scaledWidthDv.get();const targetX=clamp(xToss,xMin,xMax);const yToss=yPosition.get()+toss*event.velocityY;const yMin=0;const yMax=containerHeightDv.get()-scaledHeightDv.get();const targetY=clamp(yToss,yMin,yMax);const top=targetY;const bottom=containerHeightDv.get()-scaledHeightDv.get()-targetY;const left=targetX;const right=containerWidthDv.get()-scaledWidthDv.get()-targetX;const minDistance=Math.min(top,bottom,left,right);let snapX=targetX;let snapY=targetY;switch(minDistance){case top:snapY=yMin;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case bottom:snapY=yMax;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case left:snapX=xMin;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;case right:snapX=xMax;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;}xPosition.set(withSpring(snapX,{...spring,velocity:event.velocityX}));xDestination.set(snapX);yPosition.set(withSpring(snapY,{...spring,velocity:event.velocityY}));yDestination.set(snapY);})" };
let closure_20 = { code: "(function useDraggablePipTsx14(){let[onPress,scheduleOnRN]=this.__closure;if(onPress!=null){scheduleOnRN(onPress);}})" };
let closure_21 = { code: "(function useDraggablePipTsx15(){let[xPosition,scaledWidthDv,widthDv,yPosition,scaledHeightDv,heightDv,pipScale]=this.__closure;return{transform:[{translateX:xPosition.get()+(scaledWidthDv.get()-widthDv.get())/2},{translateY:yPosition.get()+(scaledHeightDv.get()-heightDv.get())/2},{scale:pipScale.get()}]};})" };
let items = [{ code: "(function clamp_useDraggablePipTsx16(value,min,max){return Math.min(Math.max(value,min),max);})" }];
[tmp3] = items;
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, arg1), arg2);
}
clamp.__workletHash = 10177312700431;
clamp.__initData = tmp3;
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/useDraggablePip.tsx");

export function useDraggablePip(size1) {
  ({ width, height, containerWidth, containerHeight } = size1);
  ({ onPress, onMoved, snapToCorners } = size1);
  const tmp = useChannelCallStore((pipFocus) => pipFocus.pipFocus);
  items = [c7, require("timing/timing").withTiming, tmp, c4, require("native").STANDARD_EASING];
  _require = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  function useDraggablePipTsx1() {
    let num = 1;
    if (c1) {
      num = c2;
    }
    return _undefined(num, { easing, duration: 250 });
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8];
  useDraggablePipTsx1.__closure = items1;
  useDraggablePipTsx1.__workletHash = 10550433910574;
  useDraggablePipTsx1.__initData = tmp4;
  const derivedValue = require("module_1652").useDerivedValue(useDraggablePipTsx1);
  let obj = require("module_1652");
  const items2 = [c8, width];
  _require = undefined;
  [tmp10, tmp11] = items2;
  function useDraggablePipTsx2() {
    return c0;
  }
  const items3 = [tmp11];
  useDraggablePipTsx2.__closure = items3;
  useDraggablePipTsx2.__workletHash = 13080281623020;
  useDraggablePipTsx2.__initData = tmp10;
  const derivedValue1 = require("module_1652").useDerivedValue(useDraggablePipTsx2);
  const tmp2Result = require("module_1652");
  const items4 = [c9, height];
  _require = undefined;
  [tmp13, tmp14] = items4;
  function useDraggablePipTsx3() {
    return c0;
  }
  const items5 = [tmp14];
  useDraggablePipTsx3.__closure = items5;
  useDraggablePipTsx3.__workletHash = 13817744495277;
  useDraggablePipTsx3.__initData = tmp13;
  const derivedValue2 = require("module_1652").useDerivedValue(useDraggablePipTsx3);
  const tmp2Result14 = require("module_1652");
  const items6 = [c10, derivedValue, width];
  _require = undefined;
  [tmp16, tmp17, tmp18] = items6;
  function useDraggablePipTsx4() {
    return _undefined.get() * c1;
  }
  const items7 = [tmp17, tmp18];
  useDraggablePipTsx4.__closure = items7;
  useDraggablePipTsx4.__workletHash = 4679088203701;
  useDraggablePipTsx4.__initData = tmp16;
  const derivedValue3 = require("module_1652").useDerivedValue(useDraggablePipTsx4);
  const tmp2Result15 = require("module_1652");
  const items8 = [c11, derivedValue, height];
  _require = undefined;
  [tmp20, tmp21, tmp22] = items8;
  function useDraggablePipTsx5() {
    return _undefined.get() * c1;
  }
  const items9 = [tmp21, tmp22];
  useDraggablePipTsx5.__closure = items9;
  useDraggablePipTsx5.__workletHash = 14486531035348;
  useDraggablePipTsx5.__initData = tmp20;
  const derivedValue4 = require("module_1652").useDerivedValue(useDraggablePipTsx5);
  const tmp2Result16 = require("module_1652");
  const items10 = [closure_12, containerWidth];
  _require = undefined;
  [tmp24, tmp25] = items10;
  function useDraggablePipTsx6() {
    return c0;
  }
  const items11 = [tmp25];
  useDraggablePipTsx6.__closure = items11;
  useDraggablePipTsx6.__workletHash = 10331837421608;
  useDraggablePipTsx6.__initData = tmp24;
  const derivedValue5 = require("module_1652").useDerivedValue(useDraggablePipTsx6);
  const tmp2Result17 = require("module_1652");
  const items12 = [closure_13, containerHeight];
  _require = undefined;
  [tmp27, tmp28] = items12;
  function useDraggablePipTsx7() {
    return c0;
  }
  const items13 = [tmp28];
  useDraggablePipTsx7.__closure = items13;
  useDraggablePipTsx7.__workletHash = 15634754187305;
  useDraggablePipTsx7.__initData = tmp27;
  const derivedValue6 = require("module_1652").useDerivedValue(useDraggablePipTsx7);
  const tmp2Result18 = require("module_1652");
  const sharedValue = require("module_1652").useSharedValue(0);
  const tmp2Result19 = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(sharedValue.get());
  const tmp2Result20 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(0);
  const tmp2Result21 = require("module_1652");
  const sharedValue3 = require("module_1652").useSharedValue(sharedValue2.get());
  const tmp2Result22 = require("module_1652");
  const sharedValue4 = require("module_1652").useSharedValue(false);
  const tmp2Result23 = require("module_1652");
  const items14 = [closure_14, containerWidth, derivedValue3, sharedValue1];
  _require = undefined;
  [tmp33, tmp34, tmp35, tmp36] = items14;
  function useDraggablePipTsx8() {
    items = [c0 - _undefined2.get(), _undefined3.get()];
    return items;
  }
  const items15 = [tmp34, tmp35, tmp36];
  useDraggablePipTsx8.__closure = items15;
  useDraggablePipTsx8.__workletHash = 6983319962401;
  useDraggablePipTsx8.__initData = tmp33;
  const items16 = [closure_15, require("cheapWorkletShallowEqual").cheapWorkletArrayShallowEqual, clamp, sharedValue1, sharedValue];
  _require = undefined;
  [tmp38, tmp39, tmp40, tmp41, tmp42] = items16;
  function useDraggablePipTsx9(arg0, arg1) {
    if (!_undefined(arg0, tmp2)) {
      const tmp4 = _slicedToArray(arg0, 2);
      const first = tmp4[0];
      items = arg1;
      if (arg1 == null) {
        items = [0, 0];
      }
      const first1 = _slicedToArray(items, 1)[0];
      if (null != arg1) {
        if (first !== first1) {
          const tmp8 = _undefined2(tmp4[1] * (first / first1), 0, first);
          const result = _undefined3.set(tmp8);
          const result1 = easing.set(tmp8);
        }
      }
    }
    tmp2 = arg1;
  }
  const items17 = [tmp39, tmp40, tmp41, tmp42];
  useDraggablePipTsx9.__closure = items17;
  useDraggablePipTsx9.__workletHash = 11336346908651;
  useDraggablePipTsx9.__initData = tmp38;
  const animatedReaction = require("module_1652").useAnimatedReaction(useDraggablePipTsx8, useDraggablePipTsx9);
  const tmp2Result24 = require("module_1652");
  const items18 = [closure_16, containerHeight, derivedValue4, sharedValue3];
  _require = undefined;
  [tmp44, tmp45, tmp46, tmp47] = items18;
  function useDraggablePipTsx10() {
    items = [c0 - _undefined2.get(), _undefined3.get()];
    return items;
  }
  const items19 = [tmp45, tmp46, tmp47];
  useDraggablePipTsx10.__closure = items19;
  useDraggablePipTsx10.__workletHash = 7165446858776;
  useDraggablePipTsx10.__initData = tmp44;
  const items20 = [closure_17, require("cheapWorkletShallowEqual").cheapWorkletArrayShallowEqual, clamp, sharedValue3, sharedValue2];
  closure_129_0 = undefined;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  [tmp48, tmp49, tmp50, tmp51, tmp52] = items20;
  function useDraggablePipTsx11(arg0, arg1) {
    if (!_undefined(arg0, tmp2)) {
      const tmp4 = _slicedToArray(arg0, 2);
      const first = tmp4[0];
      items = arg1;
      if (arg1 == null) {
        items = [0, 0];
      }
      const first1 = _slicedToArray(items, 1)[0];
      if (null != arg1) {
        if (first !== first1) {
          const tmp8 = _undefined2(tmp4[1] * (first / first1), 0, first);
          const result = _undefined3.set(tmp8);
          const result1 = easing.set(tmp8);
        }
      }
    }
    tmp2 = arg1;
  }
  const items21 = [tmp49, tmp50, tmp51, tmp52];
  useDraggablePipTsx11.__closure = items21;
  useDraggablePipTsx11.__workletHash = 14934070264554;
  useDraggablePipTsx11.__initData = tmp48;
  const animatedReaction1 = require("module_1652").useAnimatedReaction(useDraggablePipTsx10, useDraggablePipTsx11);
  const Gesture = tmp2(5428).Gesture;
  const tmp2Result25 = require("module_1652");
  const items22 = [-c5, c5];
  const PanResult = Gesture.Pan();
  const items23 = [-c5, c5];
  const activeOffsetXResult = Gesture.Pan().activeOffsetX(items22);
  const items24 = [closure_18, sharedValue1, sharedValue, sharedValue3, sharedValue2, sharedValue4, onMoved, require("module_1705").scheduleOnRN];
  _require = undefined;
  c6 = undefined;
  [tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61] = items24;
  function useDraggablePipTsx12(translationX) {
    const result = _undefined.set(_undefined2.get() + translationX.translationX);
    const result1 = _undefined3.set(easing.get() + translationX.translationY);
    if (!_undefined4.get()) {
      if (null != c5) {
        _undefined6(tmp3);
      }
      const result2 = _undefined4.set(true);
    }
  }
  const items25 = [tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61];
  useDraggablePipTsx12.__closure = items25;
  useDraggablePipTsx12.__workletHash = 477536808578;
  useDraggablePipTsx12.__initData = tmp54;
  const activeOffsetYResult = Gesture.Pan().activeOffsetX(items22).activeOffsetY(items23);
  const items26 = [closure_19, sharedValue1, derivedValue5, derivedValue3, clamp, sharedValue3, derivedValue6, derivedValue4, snapToCorners, require("spring/spring").withSpring, c6, sharedValue, sharedValue2];
  _require = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  [tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74] = items26;
  function useDraggablePipTsx13(velocityX) {
    const sum = _undefined.get() + 0.0875 * velocityX.velocityX;
    value = _undefined2.get();
    const diff = value - _undefined3.get();
    const tmp4 = easing(sum, 0, diff);
    const sum1 = _undefined4.get() + 0.0875 * velocityX.velocityY;
    const value4 = _undefined5.get();
    const diff1 = value4 - _undefined6.get();
    const tmp8 = easing(sum1, 0, diff1);
    const value5 = _undefined5.get();
    const diff2 = value5 - _undefined6.get() - tmp8;
    const value6 = _undefined2.get();
    const diff3 = value6 - _undefined3.get() - tmp4;
    const bound = Math.min(tmp8, diff2, tmp4, diff3);
    if (tmp8 === bound) {
      let num = 0;
      let num2 = tmp4;
      if (c7) {
        let num6 = 0;
        if (tmp4 >= diff3) {
          num6 = diff;
        }
        num2 = num6;
        num = 0;
      }
    } else if (diff2 === bound) {
      num = diff1;
      num2 = tmp4;
      if (c7) {
        let num5 = 0;
        if (tmp4 >= diff3) {
          num5 = diff;
        }
        num2 = num5;
        num = diff1;
      }
    } else if (tmp4 === bound) {
      num = tmp8;
      num2 = 0;
      if (c7) {
        let num4 = 0;
        if (tmp8 >= diff2) {
          num4 = diff1;
        }
        num = num4;
        num2 = 0;
      }
    } else {
      num = tmp8;
      num2 = tmp4;
      if (diff3 === bound) {
        num = tmp8;
        num2 = diff;
        if (c7) {
          let num3 = 0;
          if (tmp8 >= diff2) {
            num3 = diff1;
          }
          num = num3;
          num2 = diff;
        }
      }
    }
    const obj3 = {};
    const merged = Object.assign(c9);
    obj3.velocity = velocityX.velocityX;
    const result = _undefined.set(_undefined7(num2, obj3));
    const result1 = _undefined8.set(num2);
    const obj4 = {};
    const merged1 = Object.assign(c9);
    obj4.velocity = velocityX.velocityY;
    const result2 = _undefined4.set(_undefined7(num, obj4));
    const result3 = _undefined9.set(num);
  }
  const items27 = [tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74];
  useDraggablePipTsx13.__closure = items27;
  useDraggablePipTsx13.__workletHash = 12738554963651;
  useDraggablePipTsx13.__initData = tmp62;
  const onUpdateResult = Gesture.Pan().activeOffsetX(items22).activeOffsetY(items23).onUpdate(useDraggablePipTsx12);
  const Gesture2 = tmp2(5428).Gesture;
  const onEndResult = Gesture.Pan().activeOffsetX(items22).activeOffsetY(items23).onUpdate(useDraggablePipTsx12).onEnd(useDraggablePipTsx13);
  const items28 = [closure_20, onPress, require("module_1705").scheduleOnRN];
  [tmp76, tmp77, tmp78] = items28;
  function useDraggablePipTsx14() {
    if (null != c0) {
      _undefined2(tmp);
    }
  }
  const items29 = [tmp77, tmp78];
  useDraggablePipTsx14.__closure = items29;
  useDraggablePipTsx14.__workletHash = 16181399743221;
  useDraggablePipTsx14.__initData = tmp76;
  const TapResult = Gesture2.Tap();
  const Gesture3 = tmp2(5428).Gesture;
  const onStartResult = Gesture2.Tap().onStart(useDraggablePipTsx14);
  const RaceResult = Gesture3.Race(onEndResult, Gesture2.Tap().onStart(useDraggablePipTsx14));
  const items30 = [closure_21, sharedValue1, derivedValue3, derivedValue1, sharedValue3, derivedValue4, derivedValue2, derivedValue];
  _require = undefined;
  dependencyMap = undefined;
  c2 = undefined;
  useChannelCallStore = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88] = items30;
  function useDraggablePipTsx15() {
    const obj = { transform: null };
    const obj2 = { translateX: null };
    value = _undefined.get();
    const value4 = _undefined2.get();
    obj2.translateX = value + (value4 - _undefined3.get()) / 2;
    items = [obj2, , ];
    const obj3 = { translateY: null };
    const value5 = easing.get();
    const value6 = _undefined4.get();
    obj3.translateY = value5 + (value6 - _undefined5.get()) / 2;
    items[1] = obj3;
    items[2] = { scale: _undefined6.get() };
    obj.transform = items;
    return obj;
  }
  const items31 = [tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88];
  useDraggablePipTsx15.__closure = items31;
  useDraggablePipTsx15.__workletHash = 13245105428304;
  useDraggablePipTsx15.__initData = tmp81;
  const tmp2Result26 = require("module_1652");
  return { gesture: RaceResult, draggableGridItemStyles: require("module_1652").useAnimatedStyle(useDraggablePipTsx15) };
}