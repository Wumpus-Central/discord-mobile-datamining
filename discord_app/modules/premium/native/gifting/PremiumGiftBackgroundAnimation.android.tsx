// discord_app/modules/premium/native/gifting/PremiumGiftBackgroundAnimation.android.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../../a11y/AccessibilityStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ container: { display: "flex", alignItems: "flex-end", justifyContent: "center", flexDirection: "row" }, consistentHeight: { height: 300 }, animation: { maxWidth: 375, width: "100%", height: "auto" }, baseAnimation: { position: "absolute", bottom: 0 }, lottie: { height: 275 } });
const result = require("obj132").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundAnimation.android.tsx");

export default function PremiumGiftBackgroundAnimation(giftStyle) {
  giftStyle = giftStyle.giftStyle;
  let consistentHeight = giftStyle.withConsistentHeight;
  let ref;
  let first;
  let first1;
  let callback;
  const tmp = callback();
  let obj = giftStyle(ref[6]);
  const items = [first1];
  const stateFromStores = obj.useStateFromStores(items, () => first1.useReducedMotion);
  ref = first.useRef(null);
  const ref1 = first.useRef(null);
  const tmp7 = ref1(first.useState(giftStyle(ref[7]).AnimationState.ACTION), 2);
  first = tmp7[0];
  closure_5 = tmp7[1];
  const tmp9 = ref1(first.useState(undefined), 2);
  first1 = tmp9[0];
  closure_7 = tmp9[1];
  const tmp11 = ref1(first.useState(undefined), 2);
  const first2 = tmp11[0];
  const tmp13 = ref1(first.useState(false), 2);
  const first3 = tmp13[0];
  closure_11 = tmp13[1];
  const items1 = [giftStyle];
  const items2 = [giftStyle];
  const memo = first.useMemo(() => giftStyle(ref[8]).getGiftAnimationData(giftStyle, giftStyle(ref[7]).AnimationState.ACTION), items1);
  const memo1 = first.useMemo(() => giftStyle(ref[8]).getGiftAnimationData(giftStyle, giftStyle(ref[7]).AnimationState.LOOP), items2);
  obj1 = giftStyle(ref[8]);
  const lottieType = obj1.getLottieType(giftStyle);
  const items3 = [first2, first1, giftStyle, first];
  const memo2 = first.useMemo(() => {
    if (first1 !== giftStyle) {
      callback2(tmp);
      let tmp8 = first !== giftStyle(ref[7]).AnimationState.LOOP;
      if (tmp8) {
        tmp8 = null != first2;
      }
      callback(tmp8);
      callback(giftStyle(ref[7]).AnimationState.ACTION);
    }
  }, items3);
  const items4 = [first, first3];
  const items5 = [first];
  callback = first.useCallback((arg0) => {
    if (first3) {
      callback4(false);
    } else {
      if (!tmp4) {
        callback3(giftStyle(ref[7]).AnimationState.ACTION);
        callback(giftStyle(ref[7]).AnimationState.LOOP);
      }
      tmp4 = first === giftStyle(ref[7]).AnimationState.LOOP || arg0;
    }
  }, items4);
  const effect = first.useEffect(() => {
    if (first === giftStyle(ref[7]).AnimationState.LOOP) {
      const current2 = ref.current;
      if (current2 != null) {
        current2.reset();
      }
    } else {
      const current = ref1.current;
      if (current != null) {
        current.reset();
      }
    }
  }, items5);
  const items6 = [stateFromStores];
  const effect1 = first.useEffect(() => {
    if (stateFromStores) {
      const current = ref.current;
      if (current != null) {
        current.reset();
      }
    }
  }, items6);
  const items7 = [tmp.container, ];
  if (consistentHeight) {
    consistentHeight = tmp.consistentHeight;
  }
  obj = { style: items7, children: null };
  items7[1] = consistentHeight;
  const items8 = [, , , ];
  ({ baseAnimation: arr9[0], animation: arr9[1] } = tmp);
  const tmp22 = first2;
  const tmp23 = closure_5;
  const tmp25 = stateFromStores;
  const tmp26 = stateFromStores(ref[9]);
  items8[2] = lottieType === giftStyle(ref[8]).LottieType.LOTTIE && tmp.lottie;
  let num = 0;
  if (first1 === giftStyle) {
    num = 0;
    if (first !== tmp2(tmp3[7]).AnimationState.LOOP) {
      num = 1;
    }
  }
  obj = { style: items8, hardwareAccelerationAndroid: lottieType === tmp2(tmp3[8]).LottieType.LOTTIE, ref, source: memo, autoPlay: !stateFromStores, onAnimationFinish: callback, loop: false };
  items8[3] = { opacity: num };
  const items9 = [closure_7(tmp26, obj), ];
  const items10 = [tmp.animation, , ];
  const tmp27 = lottieType === giftStyle(ref[8]).LottieType.LOTTIE && tmp.lottie;
  const tmp25Result = tmp25(ref[9]);
  items10[1] = lottieType === giftStyle(ref[8]).LottieType.LOTTIE && tmp.lottie;
  let num2 = 0;
  if (first1 === giftStyle) {
    num2 = 0;
    if (first === tmp2(tmp3[7]).AnimationState.LOOP) {
      num2 = 1;
    }
  }
  obj1 = { style: items10, hardwareAccelerationAndroid: lottieType === tmp2(tmp3[8]).LottieType.LOTTIE, ref: ref1, source: memo1, autoPlay: null, loop: true };
  items10[2] = { opacity: num2 };
  let tmp31 = !stateFromStores;
  if (!stateFromStores) {
    tmp31 = first === tmp2(tmp3[7]).AnimationState.LOOP;
  }
  obj1[4] = tmp31;
  items9[1] = closure_7(tmp25Result, obj1);
  obj[1] = items9;
  return tmp22(tmp23, obj);
};