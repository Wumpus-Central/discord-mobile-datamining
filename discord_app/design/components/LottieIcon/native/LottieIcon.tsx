// discord_app/design/components/LottieIcon/native/LottieIcon.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import _modDef5530 from "../../../../../_runtime/metro/05530__.js";
import IconSize from "../../Icon/IconSize.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/LottieIcon.tsx");

export const LottieIcon = noop.forwardRef((color, ref) => {
  ({ animation: require, size } = color);
  if (size === undefined) {
    size = "md";
  }
  let INTERACTIVE_TEXT_DEFAULT = color.color;
  if (INTERACTIVE_TEXT_DEFAULT === undefined) {
    INTERACTIVE_TEXT_DEFAULT = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
  }
  let num = color.opacity;
  if (num === undefined) {
    num = 1;
  }
  ({ markers, layers } = color);
  const autoPlay = color.autoPlay;
  let sum1;
  ref = undefined;
  let enabled;
  let token;
  let callback;
  ({ width, height, useLottieDefaultColors } = color);
  let tmp5 = IconSize.ICON_SIZE[size];
  const found = markers.find((name) => name.name === require);
  const start = found.start;
  const sum = start + found.duration;
  c4 = sum;
  const found1 = markers.find((name) => "easteregg" === name.name);
  let num2;
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
  let obj = noop;
  ref = noop.useRef(null);
  enabled = noop.useContext(tmp3(4279).AccessibilityPreferencesContext).reducedMotion.enabled;
  let tmp12 = tmp5;
  if ("custom" === size) {
    tmp12 = width;
  }
  size = { width: tmp12, height: null };
  if ("custom" === size) {
    tmp5 = height;
  }
  size.height = tmp5;
  token = useToken.useToken(INTERACTIVE_TEXT_DEFAULT);
  const items = [token, layers];
  const items1 = [enabled, start, sum, num2, sum1];
  const memo = obj.useMemo(() => {
    let mapped;
    if (null != token) {
      mapped = layers.map((keypath) => ({ keypath, color }));
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
  const imperativeHandle = obj.useImperativeHandle(
    ref,
    () => ({
      play() {
        return callback();
      },
    }),
    items2,
  );
  const items3 = [start, autoPlay, callback];
  obj = { style: size, children: null };
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
  obj = {
    ref,
    source: color.dotLottie,
    colorFilters: null,
    hardwareAccelerationAndroid: true,
    loop: false,
    onAnimationLoaded: null,
    resizeMode: "cover",
    style: null,
  };
  let tmp21;
  const tmp3Result = useToken;
  if (!useLottieDefaultColors) {
    tmp21 = memo;
  }
  obj.colorFilters = tmp21;
  obj.onAnimationLoaded = callback1;
  const items4 = [size, { opacity: num }];
  obj.style = items4;
  obj.children = jsx(_modDef5530, {
    ref,
    source: color.dotLottie,
    colorFilters: null,
    hardwareAccelerationAndroid: true,
    loop: false,
    onAnimationLoaded: null,
    resizeMode: "cover",
    style: null,
  });
  return (
    <tmp19
      ref={ref}
      source={arg0.dotLottie}
      colorFilters={null}
      hardwareAccelerationAndroid
      loop={false}
      onAnimationLoaded={null}
      resizeMode="cover"
      style={null}
    />
  );
});
