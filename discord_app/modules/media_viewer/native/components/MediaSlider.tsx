// discord_app/modules/media_viewer/native/components/MediaSlider.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils_mod from "../../../../utils/PlatformUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
let num;
let num2;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: {
    flex: 1,
    marginHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: { marginRight: 16 },
  centerText: { lineHeight: num },
  sliderContainer: { position: "relative", flex: 1, marginHorizontal: num2, justifyContent: "center" },
  progressSliderContainer: { position: "relative", flex: 1, marginHorizontal: 0, justifyContent: "center" },
  timelineBackgroundSlider: { position: "absolute", width: "100%", backgroundColor: "transparent", zIndex: 0 },
  downloadProgressSlider: { position: "absolute", width: "100%", backgroundColor: "transparent", zIndex: 1 },
  playbackSlider: { position: "absolute", width: "100%", zIndex: 2 },
};
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
num = undefined;
if (PlatformUtils.isAndroid()) {
  num = 12;
}
PlatformUtils = PlatformUtils_mod;
num2 = 16;
if (PlatformUtils.isAndroid()) {
  num2 = 0;
}
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaSlider.tsx");

export default function MediaSlider(controls) {
  let PauseIcon;
  let alphaResult;
  let alphaResult1;
  let alphaResult2;
  let alphaResult3;
  let alphaResult4;
  let c5;
  let c7;
  let closure_6;
  let closure_9;
  let first;
  let first1;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let stringResult;
  let tmp18Result;
  let tmp3;
  let tmp7;
  controls = controls.controls;
  const paused = controls.paused;
  ({ setPaused: dependencyMap, onPlayPress: _slicedToArray } = controls);
  react = undefined;
  c5 = undefined;
  closure_6 = undefined;
  c7 = undefined;
  let ref;
  closure_9 = undefined;
  const style = controls.style;
  const tmp = ref();
  react = react.useRef(false);
  const tmp2 = _slicedToArray(react.useState(0), 2);
  [tmp3, c5] = tmp2;
  [first, closure_6] = react.useState(0);
  [tmp7, c7] = react.useState("transparent");
  _slicedToArray(react.useState("transparent"), 2);
  ref = react.useRef(0);
  [first1, closure_9] = react.useState(0);
  const tmp13 = paused(5991)(() => {
    const obj = _modDef12;
    return obj.throttle((arg0) => {
      closure_1_5(arg0);
    }, 100);
  });
  let closure_10 = tmp13;
  let closure_11 = paused(5991)(() => {
    let obj = _modDef12;
    return obj.throttle((arg0) => {
      closure_1_6(arg0);
      let str = "transparent";
      if (1 === arg0) {
        const obj = paused(dependencyMap[8])("#FFFFFF");
        const alphaResult = obj.alpha(0.2);
        str = alphaResult.hex();
      }
      closure_1_7(str);
    }, 100);
  });
  const items = [tmp13];
  const effect = react.useEffect(
    () => () => {
      closure_1_10.cancel();
    },
    items,
  );
  const subscribe = controls.useSubscribe(
    (arg0, current) => {
      closure_10(arg0);
      ref.current = current;
    },
    (arg0) => {
      dependencyMap(arg0);
    },
    (arg0) => {
      closure_11(arg0);
    },
  );
  const items1 = [controls, paused];
  const items2 = [controls];
  const callback = react.useCallback(() => {
    if (!paused) {
      controls.pause(true);
      ref.current = true;
    }
  }, items1);
  const callback1 = react.useCallback((arg0) => {
    controls.seek(arg0);
    if (ref.current) {
      controls.pause(false);
      tmp2.current = false;
    }
  }, items2);
  let obj = controls(7315);
  const obj2 = { style: items3, children: items4 };
  items3 = [tmp.container, style];
  const timeFormat = obj.getTimeFormat(tmp3);
  const obj3 = {
    style: tmp.icon,
    accessibilityRole: "button",
    accessibilityLabel: stringResult,
    onPress() {
      if (paused) {
        _slicedToArray();
      }
      controls.pause(!paused);
    },
    hitSlop: { top: 8, right: 8, bottom: 8, left: 8 },
    children: closure_6(PauseIcon, { size: "md", color: "white" }),
  };
  const PressableOpacity = controls(5916).PressableOpacity;
  const intl = controls(1126).intl;
  const string = intl.string;
  const t = controls(1126).t;
  if (paused) {
    stringResult = string(t.RscU7I);
  } else {
    stringResult = string(t.ZcgDJX);
  }
  if (paused) {
    PauseIcon = tmp18(7959).PlayIcon;
  } else {
    PauseIcon = tmp18(7961).PauseIcon;
  }
  items4 = [closure_6(PressableOpacity, obj3), , ,];
  const obj4 = {
    style: items5,
    tabularNumbers: true,
    lineClamp: 1,
    color: "text-overlay-light",
    variant: "text-xs/medium",
    children: timeFormat,
  };
  items5 = [tmp.centerText, { width: first1 }];
  items4[1] = closure_6(controls(4892).Text, obj4);
  const obj5 = { style: tmp.sliderContainer, children: items7 };
  const obj6 = { pointerEvents: "none", style: tmp.progressSliderContainer, children: items6 };
  const obj7 = {
    style: tmp.timelineBackgroundSlider,
    value: 1,
    minimumValue: 0,
    maximumValue: 1,
    thumbTintColor: alphaResult.hex(),
    minimumTrackTintColor: alphaResult1.hex(),
    maximumTrackTintColor: alphaResult2.hex(),
  };
  const tmp11Result = paused(7963);
  const obj8 = paused(683)("#FFFFFF");
  alphaResult = obj8.alpha(0);
  const obj10 = paused(683)("#FFFFFF");
  alphaResult1 = obj10.alpha(0.1);
  const obj12 = paused(683)("#FFFFFF");
  alphaResult2 = obj12.alpha(0.1);
  items6 = [closure_6(tmp11Result, obj7)];
  const obj9 = {
    style: tmp.downloadProgressSlider,
    value: first,
    minimumValue: 0,
    maximumValue: 1,
    thumbTintColor: alphaResult3.hex(),
    minimumTrackTintColor: alphaResult4.hex(),
    maximumTrackTintColor: tmp7,
  };
  const tmp11Result3 = paused(7963);
  const obj15 = paused(683)("#FFFFFF");
  alphaResult3 = obj15.alpha(0);
  const obj17 = paused(683)("#FFFFFF");
  alphaResult4 = obj17.alpha(0.2);
  items6[1] = closure_6(tmp11Result3, obj9);
  items7 = [c7(c5, obj6)];
  const obj11 = {
    style: tmp.playbackSlider,
    value: tmp3,
    thumbImage: paused(7972),
    minimumValue: 0,
    maximumValue: ref.current,
    minimumTrackTintColor: paused(587).unsafe_rawColors.WHITE,
    maximumTrackTintColor: "transparent",
    onValueChange: tmp13,
    onSlidingStart: callback,
    onSlidingComplete: callback1,
  };
  const tmp11Result4 = paused(7963);
  items7[1] = closure_6(tmp11Result4, obj11);
  items4[2] = c7(c5, obj5);
  const obj13 = {
    style: tmp.centerText,
    variant: "text-xs/medium",
    color: "text-overlay-light",
    tabularNumbers: true,
    lineClamp: 1,
    onLayout(nativeEvent) {
      closure_9(nativeEvent.nativeEvent.layout.width);
    },
    children: tmp18Result.getTimeFormat(ref.current),
  };
  const Text = tmp18(4892).Text;
  tmp18Result = controls(7315);
  items4[3] = closure_6(Text, obj13);
  return c7(c5, obj2);
}
