// discord_app/modules/video_calls/native/components/GestureContainer.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const useChannelCallStore = fn(9050).useChannelCallStore;
const Constants = fn(9057);
({ PAN_GESTURE_FAIL_OFFSET_Y: hasOwnProperty, SWIPE_TO_CHAT_ACTIVE_OFFSET: metroRequire } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { background: { flex: 1, backgroundColor: nativeDefault.colors.BLACK } };
let closure_8 = createStyles.createStyles(obj2);
let c9 = 200;
let c10 = 500;
const __initData = {
  code: "function GestureContainerTsx1(t3){const{position,THRESHOLD_VELOCITY,runOnJS,ModalActionCreators,withTiming,DECELERATED_EASING}=this.__closure;const{velocityY:velocityY}=t3;if(position.get()===1||velocityY>THRESHOLD_VELOCITY){runOnJS(ModalActionCreators.pop)();}else{position.set(withTiming(0,{duration:300,easing:DECELERATED_EASING}));}}",
};
const __initData2 = {
  code: "function GestureContainerTsx2(t2){const{THRESHOLD_TRANSLATE,position}=this.__closure;const{translationY:translationY}=t2;const boundedGestureY=Math.max(Math.min(translationY,THRESHOLD_TRANSLATE),0)/THRESHOLD_TRANSLATE;const easeOutCubic=1-Math.pow(1-boundedGestureY,3);position.set(easeOutCubic);}",
};
const __initData3 = {
  code: "function GestureContainerTsx3(){const{interpolate,position,height}=this.__closure;return{flex:1,transform:[{translateY:interpolate(position.get(),[0,1],[0,height*0.06])},{scale:interpolate(position.get(),[0,1],[1,0.9])}]};}",
};
const __initData4 = {
  code: "function GestureContainerTsx4({velocityY:velocityY}){const{position,THRESHOLD_VELOCITY,runOnJS,ModalActionCreators,withTiming,DECELERATED_EASING}=this.__closure;if(position.get()===1||velocityY>THRESHOLD_VELOCITY){runOnJS(ModalActionCreators.pop)();}else{position.set(withTiming(0,{duration:300,easing:DECELERATED_EASING}));}}",
};
const __initData5 = {
  code: "function GestureContainerTsx5({translationY:translationY}){const{THRESHOLD_TRANSLATE,position}=this.__closure;const boundedGestureY=Math.max(Math.min(translationY,THRESHOLD_TRANSLATE),0)/THRESHOLD_TRANSLATE;const easeOutCubic=1-Math.pow(1-boundedGestureY,3);position.set(easeOutCubic);}",
};
const __initData6 = {
  code: "function GestureContainerTsx6(){const{interpolate,position,height}=this.__closure;return{flex:1,transform:[{translateY:interpolate(position.get(),[0,1],[0,height*0.06])},{scale:interpolate(position.get(),[0,1],[1,0.9])}]};}",
};
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/GestureContainer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = height(576).c(10);
      children = children.children;
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0) {
            return children.isGestureEnabled;
          }
        }
        cResult[0] = S;
      } else {
        class S {
          constructor(arg0) {
            return children.isGestureEnabled;
          }
        }
      }
      let obj = height(576);
      height = sharedValue(1484)().height;
      const tmp6 = useChannelCallStore(S);
      const tmp7 = sharedValue;
      sharedValue = height(4612).useSharedValue(0);
      const Gesture = tmp(6140).Gesture;
      const tmpResult = height(4612);
      const PanResult = Gesture.Pan();
      class L {
        constructor(arg0) {
          result = closure_1.set(1 - Math.pow(1 - Math.max(Math.min(children.translationY, c9), 0) / c9, 3));
          return;
        }
      }
      L.__closure = { THRESHOLD_TRANSLATE, position: sharedValue };
      L.__workletHash = 819146970851;
      L.__initData = __initData2;
      const enabledResult = Gesture.Pan().enabled(tmp6);
      let obj2 = { THRESHOLD_TRANSLATE, position: sharedValue };
      class C {
        constructor(arg0) {
          obj = closure_1;
          if (1 !== closure_1.get()) {
            tmp = c10;
            if (children.velocityY <= c10) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj2 = closure_0(closure_2[13]);
              obj1 = { duration: 300, easing: null };
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj1.easing = closure_0(closure_2[14]).DECELERATED_EASING;
              num = 0;
              result = obj.set(obj2.withTiming(0, obj1));
            }
            return;
          }
          obj4 = closure_0(closure_2[10]);
          tmp7 = obj4.runOnJS(closure_1(closure_2[12]).pop)();
          return;
        }
      }
      const onUpdateResult = Gesture.Pan().enabled(tmp6).onUpdate(L);
      C.__closure = {
        position: sharedValue,
        THRESHOLD_VELOCITY,
        runOnJS: height(4612).runOnJS,
        ModalActionCreators: sharedValue(5093),
        withTiming: height(4891).withTiming,
        DECELERATED_EASING: height(1188).DECELERATED_EASING,
      };
      C.__workletHash = 4811943867759;
      C.__initData = __initData;
      let obj3 = {
        position: sharedValue,
        THRESHOLD_VELOCITY,
        runOnJS: height(4612).runOnJS,
        ModalActionCreators: sharedValue(5093),
        withTiming: height(4891).withTiming,
        DECELERATED_EASING: height(1188).DECELERATED_EASING,
      };
      let items = [-closure_5, closure_5];
      const onEndResult = onUpdateResult.onEnd(C);
      let items1 = [-closure_6, closure_6];
      const failOffsetXResult = onUpdateResult.onEnd(C).activeOffsetY(items).failOffsetX(items1);
      const activeOffsetYResult = onUpdateResult.onEnd(C).activeOffsetY(items);
      const fn = function f() {
        const obj = { flex: 1, transform: null };
        const obj2 = { translateY: null };
        const items = [0, 0.06 * height];
        obj2.translateY = ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], items);
        const items1 = [obj2];
        const obj4 = { scale: null };
        obj4.scale = ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [1, 0.9]);
        items1[1] = obj4;
        obj.transform = items1;
        return obj;
      };
      const tmpResult2 = height(4612);
      fn.__closure = { interpolate: height(4612).interpolate, position: sharedValue, height };
      fn.__workletHash = 16049033434372;
      fn.__initData = __initData3;
      const animatedStyle = tmpResult2.useAnimatedStyle(fn);
      if (cResult[1] === animatedStyle) {
        class S {
          constructor(arg0) {
            return children.isGestureEnabled;
          }
        }
        if (cResult[4] === failOffsetXResult) {
          class S {
            constructor(arg0) {
              return children.isGestureEnabled;
            }
          }
          if (cResult[7] === tmp4.background) {
            class S {
              constructor(arg0) {
                return children.isGestureEnabled;
              }
            }
            return tmp16;
          }
          const obj5 = { style: tmp4.background, children: tmp13 };
          const tmp19 = <View style={tmp4.background}>{tmp13}</View>;
          cResult[7] = tmp4.background;
          cResult[8] = tmp13;
          cResult[9] = tmp19;
          tmp16 = tmp19;
        }
        const obj6 = { gesture: failOffsetXResult, children: tmp11 };
        const tmp15 = jsx(tmp(6140).GestureDetector, { gesture: failOffsetXResult, children: tmp11 });
        cResult[4] = failOffsetXResult;
        cResult[5] = tmp11;
        cResult[6] = tmp15;
      }
      const tmp12 = jsx(tmp7(4612).View, { style: animatedStyle, children });
      cResult[1] = animatedStyle;
      cResult[2] = children;
      cResult[3] = tmp12;
      let obj4 = { interpolate: height(4612).interpolate, position: sharedValue, height };
    }
  : (children) => {
      let sharedValue;
      const tmp = closure_8();
      const height = sharedValue(1484)().height;
      const tmp2 = useChannelCallStore((isGestureEnabled) => isGestureEnabled.isGestureEnabled);
      sharedValue = height(4612).useSharedValue(0);
      const Gesture = height(6140).Gesture;
      let obj = height(4612);
      const PanResult = Gesture.Pan();
      const fn = function h(translationY) {
        const result = sharedValue.set(1 - Math.pow(1 - Math.max(Math.min(translationY.translationY, c9), 0) / c9, 3));
      };
      fn.__closure = { THRESHOLD_TRANSLATE, position: sharedValue };
      fn.__workletHash = 11164351324199;
      fn.__initData = __initData5;
      const enabledResult = Gesture.Pan().enabled(tmp2);
      let obj2 = { THRESHOLD_TRANSLATE, position: sharedValue };
      class T {
        constructor(arg0) {
          obj = closure_1;
          if (1 !== closure_1.get()) {
            tmp = c10;
            if (children.velocityY <= c10) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj2 = closure_0(closure_2[13]);
              obj1 = { duration: 300, easing: null };
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj1.easing = closure_0(closure_2[14]).DECELERATED_EASING;
              num = 0;
              result = obj.set(obj2.withTiming(0, obj1));
            }
            return;
          }
          obj4 = closure_0(closure_2[10]);
          tmp7 = obj4.runOnJS(closure_1(closure_2[12]).pop)();
          return;
        }
      }
      const onUpdateResult = Gesture.Pan().enabled(tmp2).onUpdate(fn);
      T.__closure = {
        position: sharedValue,
        THRESHOLD_VELOCITY,
        runOnJS: height(4612).runOnJS,
        ModalActionCreators: sharedValue(5093),
        withTiming: height(4891).withTiming,
        DECELERATED_EASING: height(1188).DECELERATED_EASING,
      };
      T.__workletHash = 6850090802761;
      T.__initData = __initData4;
      let obj3 = {
        position: sharedValue,
        THRESHOLD_VELOCITY,
        runOnJS: height(4612).runOnJS,
        ModalActionCreators: sharedValue(5093),
        withTiming: height(4891).withTiming,
        DECELERATED_EASING: height(1188).DECELERATED_EASING,
      };
      let items = [-closure_5, closure_5];
      const onEndResult = onUpdateResult.onEnd(T);
      let items1 = [-closure_6, closure_6];
      const activeOffsetYResult = onUpdateResult.onEnd(T).activeOffsetY(items);
      const failOffsetXResult = onUpdateResult.onEnd(T).activeOffsetY(items).failOffsetX(items1);
      const fn2 = function p() {
        const obj = { flex: 1, transform: null };
        const obj2 = { translateY: null };
        const items = [0, 0.06 * height];
        obj2.translateY = ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], items);
        const items1 = [obj2];
        const obj4 = { scale: null };
        obj4.scale = ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [1, 0.9]);
        items1[1] = obj4;
        obj.transform = items1;
        return obj;
      };
      const obj9 = height(4612);
      fn2.__closure = { interpolate: height(4612).interpolate, position: sharedValue, height };
      fn2.__workletHash = 15988962645633;
      fn2.__initData = __initData6;
      const obj5 = { style: tmp.background, children: null };
      const animatedStyle = obj9.useAnimatedStyle(fn2);
      let obj4 = { interpolate: height(4612).interpolate, position: sharedValue, height };
      obj5.children = jsx(height(6140).GestureDetector, {
        gesture: failOffsetXResult,
        children: jsx(sharedValue(4612).View, { style: animatedStyle, children: children.children }),
      });
      return <View style={tmp.background}>{null}</View>;
    };
