// === Module 13645: SpeakerPulse ===

// Module 13645 (SpeakerPulse)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4436 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
let c9 = 0.16;
createCacheKey = { pulse: null, border: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.WHITE };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.STATUS_SPEAKING };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let closure_11 = { code: "function SpeakerPulseTsx1(){const{animatedInnerOpacity}=this.__closure;return{opacity:animatedInnerOpacity.get()};}" };
let closure_12 = { code: "function SpeakerPulseTsx2(){const{animatedOuterOpacity}=this.__closure;return{opacity:animatedOuterOpacity.get()};}" };
const obj1 = { backgroundColor: ThemesDefault.colors.STATUS_SPEAKING };
let result = require("set").fileFinishedImporting("modules/stage_channels/native/components/SpeakerPulse.tsx");

export default function SpeakerPulse(style) {
  style = style.style;
  let stateFromStores;
  let sharedValue;
  let sharedValue1;
  const tmp = callback3();
  let obj = stateFromStores(sharedValue1[6]);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => !useReducedMotion.useReducedMotion, []);
  sharedValue = stateFromStores(sharedValue1[7]).useSharedValue(c9);
  let obj2 = stateFromStores(sharedValue1[7]);
  sharedValue1 = stateFromStores(sharedValue1[7]).useSharedValue(c9);
  const items1 = [stateFromStores, sharedValue, sharedValue1];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      const result = set(0);
      const result1 = sharedValue1.set(0);
      const obj2 = stateFromStores(sharedValue1[7]);
      const obj3 = stateFromStores(sharedValue1[7]);
      const obj4 = stateFromStores(sharedValue1[7]);
      const obj5 = stateFromStores(sharedValue1[8]);
      const withDelayResult = obj4.withDelay(100, stateFromStores(sharedValue1[8]).withTiming(closure_1_9, { duration: 250 }));
      const obj6 = stateFromStores(sharedValue1[7]);
      const obj7 = stateFromStores(sharedValue1[8]);
      const withRepeatResult = obj2.withRepeat(obj3.withSequence(withDelayResult, obj6.withDelay(250, stateFromStores(sharedValue1[8]).withTiming(0, { duration: 500 }))), -1, false);
      const obj8 = stateFromStores(sharedValue1[7]);
      const obj9 = stateFromStores(sharedValue1[7]);
      const obj10 = stateFromStores(sharedValue1[7]);
      const obj11 = stateFromStores(sharedValue1[8]);
      const withDelayResult1 = obj10.withDelay(350, stateFromStores(sharedValue1[8]).withTiming(closure_1_9, { duration: 250 }));
      const obj12 = stateFromStores(sharedValue1[8]);
      const result2 = sharedValue.set(withRepeatResult);
      const result3 = sharedValue1.set(obj8.withRepeat(obj9.withSequence(withDelayResult1, stateFromStores(sharedValue1[8]).withTiming(0, { duration: 500 })), -1, false));
      const withRepeatResult1 = obj8.withRepeat(obj9.withSequence(withDelayResult1, stateFromStores(sharedValue1[8]).withTiming(0, { duration: 500 })), -1, false);
    } else {
      const result4 = set(closure_1_9);
      const result5 = sharedValue1.set(closure_1_9);
    }
  }, items1);
  let obj3 = stateFromStores(sharedValue1[7]);
  class T {
    constructor() {
      obj = { opacity: closure_1.get() };
      return obj;
    }
  }
  T.__closure = { animatedInnerOpacity: sharedValue };
  T.__workletHash = 202297893401;
  T.__initData = closure_11;
  const animatedStyle = stateFromStores(sharedValue1[7]).useAnimatedStyle(T);
  let obj4 = stateFromStores(sharedValue1[7]);
  const fn = function k() {
    return { opacity: sharedValue1.get() };
  };
  fn.__closure = { animatedOuterOpacity: sharedValue1 };
  fn.__workletHash = 13537504931930;
  fn.__initData = closure_12;
  obj = { children: null };
  const items2 = [tmp.border, style];
  const animatedStyle1 = stateFromStores(sharedValue1[7]).useAnimatedStyle(fn);
  const items3 = [callback(View, { style: items2 }), , ];
  const items4 = [tmp.pulse, style, animatedStyle, ];
  const items5 = [{ scale: 1.5 }];
  items4[3] = { transform: items5 };
  items3[1] = callback(sharedValue(sharedValue1[7]).View, { style: items4 });
  const items6 = [tmp.pulse, style, animatedStyle1, ];
  const items7 = [{ scale: 2 }];
  items6[3] = { transform: items7 };
  items3[2] = callback(sharedValue(sharedValue1[7]).View, { style: items6 });
  obj[0] = items3;
  return callback2(closure_7, obj);
};