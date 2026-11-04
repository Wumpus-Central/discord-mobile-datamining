// === Module 12202: GestureContainer ===

// Module 12202 (GestureContainer)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5378 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5428 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const useChannelCallStore = fn(11181).useChannelCallStore;
const Constants = fn(11896);
({ PAN_GESTURE_FAIL_OFFSET_Y: hasOwnProperty, SWIPE_TO_CHAT_ACTIVE_OFFSET: closure_6 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let obj2 = { background: { flex: 1, backgroundColor: nativeDefault.colors.BLACK } };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = { code: "(function GestureContainerTsx1({translationY:translationY}){let[THRESHOLD_TRANSLATE,position]=this.__closure;const boundedGestureY=Math.max(Math.min(translationY,THRESHOLD_TRANSLATE),0)/THRESHOLD_TRANSLATE;const easeOutCubic=1-Math.pow(1-boundedGestureY,3);position.set(easeOutCubic);})" };
let closure_10 = { code: "(function GestureContainerTsx2({velocityY:velocityY}){let[position,THRESHOLD_VELOCITY,scheduleOnRN,ModalActionCreators,withTiming,DECELERATED_EASING]=this.__closure;if(position.get()===1||velocityY>THRESHOLD_VELOCITY){scheduleOnRN(ModalActionCreators.pop);}else{position.set(withTiming(0,{duration:300,easing:DECELERATED_EASING}));}})" };
let closure_11 = { code: "(function GestureContainerTsx3(){let[interpolate,position,height]=this.__closure;return{flex:1,transform:[{translateY:interpolate(position.get(),[0,1],[0,height*0.06])},{scale:interpolate(position.get(),[0,1],[1,0.9])}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/GestureContainer.tsx");

export default function GestureContainer(children) {
  const tmp = closure_8();
  const tmp2 = useChannelCallStore((isGestureEnabled) => isGestureEnabled.isGestureEnabled);
  const sharedValue = _mod1652.useSharedValue(0);
  const Gesture = LegacyBaseButton.Gesture;
  const PanResult = Gesture.Pan();
  items = [closure_9, 200, sharedValue];
  c0 = undefined;
  c1 = undefined;
  [tmp7, tmp8, tmp9] = items;
  class GestureContainerTsx1 {
    constructor(arg0) {
      result = closure_1.set(1 - Math.pow(1 - Math.max(Math.min(children.translationY, closure_0), 0) / closure_0, 3));
      return;
    }
  }
  let items1 = [tmp8, tmp9];
  GestureContainerTsx1.__closure = items1;
  GestureContainerTsx1.__workletHash = 12996346617978;
  GestureContainerTsx1.__initData = tmp7;
  const enabledResult = Gesture.Pan().enabled(tmp2);
  const items2 = [closure_10, sharedValue, 500, _mod1705.scheduleOnRN, ModalActionCreatorsDefault, timing_timing.withTiming, native.DECELERATED_EASING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
  class GestureContainerTsx2 {
    constructor(arg0) {
      obj = closure_0;
      if (1 !== closure_0.get()) {
        tmp = closure_1;
        if (children.velocityY <= closure_1) {
          tmp2 = closure_4;
          obj1 = { duration: 300, easing: null };
          tmp3 = closure_5;
          obj1.easing = closure_5;
          num = 0;
          result = obj.set(closure_4(0, obj1));
        }
        return;
      }
      tmp5 = closure_2(closure_3.pop);
      return;
    }
  }
  const items3 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  GestureContainerTsx2.__closure = items3;
  GestureContainerTsx2.__workletHash = 10025464345015;
  GestureContainerTsx2.__initData = tmp10;
  const onUpdateResult = Gesture.Pan().enabled(tmp2).onUpdate(GestureContainerTsx1);
  const items4 = [-easing, easing];
  const onEndResult = Gesture.Pan().enabled(tmp2).onUpdate(GestureContainerTsx1).onEnd(GestureContainerTsx2);
  const items5 = [-timestampProducer, timestampProducer];
  const activeOffsetYResult = Gesture.Pan().enabled(tmp2).onUpdate(GestureContainerTsx1).onEnd(GestureContainerTsx2).activeOffsetY(items4);
  const failOffsetXResult = Gesture.Pan().enabled(tmp2).onUpdate(GestureContainerTsx1).onEnd(GestureContainerTsx2).activeOffsetY(items4).failOffsetX(items5);
  const items6 = [closure_11, _mod1652.interpolate, sharedValue, useWindowDimensionsDefault().height];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp18, tmp19, tmp20, tmp21] = items6;
  class GestureContainerTsx3 {
    constructor() {
      obj = { flex: 1, transform: null };
      obj1 = { translateY: null };
      items = [0];
      items[1] = 0.06 * closure_2;
      obj1.translateY = closure_0(closure_1.get(), [0, 1], items);
      items1 = [, ];
      items1[0] = obj1;
      obj4 = { scale: closure_0(closure_1.get(), [0, 1], [1, 0.9]) };
      items1[1] = obj4;
      obj.transform = items1;
      return obj;
    }
  }
  const items7 = [tmp19, tmp20, tmp21];
  GestureContainerTsx3.__closure = items7;
  GestureContainerTsx3.__workletHash = 9579755515869;
  GestureContainerTsx3.__initData = tmp18;
  let obj2 = { style: tmp.background, children: null };
  const animatedStyle = _mod1652.useAnimatedStyle(GestureContainerTsx3);
  const tmp5Result = _mod1652;
  obj2.children = jsx(LegacyBaseButton.GestureDetector, { gesture: failOffsetXResult, children: jsx(_modDef1652.View, { style: animatedStyle, children: children.children }) });
  return <View style={tmp.background}>{null}</View>;
};