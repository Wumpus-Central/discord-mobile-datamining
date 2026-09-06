// === Module 9948: LottieIcon ===

// Module 9948 (LottieIcon)
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const forwardRefResult = importAllResult.forwardRef((color, ref) => {
  ({ animation: require, size } = color);
  if (size === undefined) {
    size = "md";
  }
  let INTERACTIVE_TEXT_DEFAULT = color.color;
  if (INTERACTIVE_TEXT_DEFAULT === undefined) {
    INTERACTIVE_TEXT_DEFAULT = layers(autoPlay[3]).colors.INTERACTIVE_TEXT_DEFAULT;
  }
  let num = color.opacity;
  if (num === undefined) {
    num = 1;
  }
  ({ markers, layers } = color);
  autoPlay = color.autoPlay;
  let start;
  c4 = undefined;
  let num2;
  let sum1;
  ref = undefined;
  let enabled;
  let token;
  let callback;
  ({ width, height, useLottieDefaultColors } = color);
  let tmp5 = require(autoPlay[4]).ICON_SIZE[size];
  const found = markers.find((name) => name.name === closure_0);
  start = found.start;
  const sum = start + found.duration;
  c4 = sum;
  const found1 = markers.find((name) => "easteregg" === name.name);
  num2 = undefined;
  if (found1 != null) {
    num2 = found1.start;
  }
  if (num2 == null) {
    num2 = -1;
  }
  let num3;
  if (found1 != null) {
    num3 = found1.duration;
  }
  if (num3 == null) {
    num3 = -1;
  }
  sum1 = num2 + num3;
  let obj = start;
  ref = start.useRef(null);
  enabled = start.useContext(tmp3(tmp4[5]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let tmp12 = tmp5;
  if ("custom" === size) {
    tmp12 = width;
  }
  obj = { width: tmp12, height: null };
  if ("custom" === size) {
    tmp5 = height;
  }
  obj[1] = tmp5;
  token = require(autoPlay[6]).useToken(INTERACTIVE_TEXT_DEFAULT);
  const items = [token, layers];
  const items1 = [enabled, start, sum, num2, sum1];
  const memo = obj.useMemo(() => {
    let mapped;
    if (null != token) {
      mapped = layers.map((keypath) => ({ keypath, color: closure_9 }));
    }
    return mapped;
  }, items);
  callback = obj.useCallback(() => {
    if (enabled) {
      const current3 = ref.current;
      if (current3 != null) {
        current3.play(c4, c4);
      }
    } else {
      if (tmp) {
        if (num2 >= 0) {
          const current2 = ref.current;
          if (current2 != null) {
            current2.play(tmp2, sum1);
          }
        }
      }
      const current = ref.current;
      if (current != null) {
        current.play(start, c4);
      }
    }
  }, items1);
  const items2 = [callback];
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({
    play() {
      return callback();
    }
  }), items2);
  const items3 = [start, autoPlay, callback];
  obj = { style: obj, children: null };
  const callback1 = obj.useCallback(() => {
    if (autoPlay) {
      callback();
    } else {
      const current = ref.current;
      if (current != null) {
        current.play(start, start);
      }
    }
  }, items3);
  obj1 = { ref, source: color.dotLottie, colorFilters: null, hardwareAccelerationAndroid: true, loop: false, onAnimationLoaded: null, resizeMode: "cover", style: null };
  let tmp21;
  const tmp19 = c4;
  const tmp3Result = require(autoPlay[6]);
  if (!useLottieDefaultColors) {
    tmp21 = memo;
  }
  obj1[2] = tmp21;
  obj1[5] = callback1;
  const items4 = [obj, { opacity: num }];
  obj1[7] = items4;
  obj[1] = num2(layers(autoPlay[7]), obj1);
  return num2(tmp19, obj);
});
const result = require("set").fileFinishedImporting("design/components/LottieIcon/native/LottieIcon.tsx");

export const LottieIcon = forwardRefResult;