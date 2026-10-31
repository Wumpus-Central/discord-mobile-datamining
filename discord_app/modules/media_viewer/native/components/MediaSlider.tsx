// === Module 8846: MediaSlider ===

// Module 8846 (MediaSlider)
import _modDef12 from "module_12" /* 12 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { flex: 1, marginHorizontal: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, icon: { marginRight: 16 }, centerText: null, sliderContainer: null, progressSliderContainer: null, timelineBackgroundSlider: null, downloadProgressSlider: null, playbackSlider: null };
let PlatformUtils = fn(1375);
let num;
if (PlatformUtils.isAndroid()) {
  num = 12;
}
obj2.centerText = { lineHeight: num };
PlatformUtils = fn(1375);
let num2 = 16;
if (PlatformUtils.isAndroid()) {
  num2 = 0;
}
obj2.sliderContainer = { position: "relative", flex: 1, marginHorizontal: num2, justifyContent: "center" };
obj2.progressSliderContainer = { position: "relative", flex: 1, marginHorizontal: 0, justifyContent: "center" };
obj2.timelineBackgroundSlider = { position: "absolute", width: "100%", backgroundColor: "transparent", zIndex: 0 };
obj2.downloadProgressSlider = { position: "absolute", width: "100%", backgroundColor: "transparent", zIndex: 1 };
obj2.playbackSlider = { position: "absolute", width: "100%", zIndex: 2 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaSlider.tsx");

export default function MediaSlider(controls) {
  controls = controls.controls;
  const paused = controls.paused;
  const setPaused = controls.setPaused;
  const onPlayPress = controls.onPlayPress;
  noop = undefined;
  c5 = undefined;
  c7 = undefined;
  let ref;
  closure_11 = undefined;
  const tmp = ref();
  noop = noop.useRef(false);
  [tmp3, c5] = onPlayPress(noop.useState(0), 2);
  const tmp4 = onPlayPress(noop.useState(0), 2);
  closure_6 = tmp4[1];
  const tmp2 = onPlayPress(noop.useState(0), 2);
  [tmp6, c7] = onPlayPress(noop.useState("transparent"), 2);
  ref = noop.useRef(0);
  const tmp8 = onPlayPress(noop.useState(0), 2);
  closure_9 = tmp8[1];
  const tmp5 = onPlayPress(noop.useState("transparent"), 2);
  const tmp12 = paused(setPaused[7])(() => _modDef12.throttle((arg0) => {
    closure_1_5(arg0);
  }, num));
  closure_11 = tmp12;
  const items = [tmp12];
  obj2 = controls(setPaused[6]);
  const effect = obj.useEffect(() => () => {
    closure_1_11.cancel();
  }, items);
  const items1 = [tmp12];
  const items2 = [setPaused];
  const callback = obj.useCallback((arg0, current) => {
    closure_11(arg0);
    ref.current = current;
  }, items1);
  const subscribe = controls.useSubscribe(callback, obj.useCallback((arg0) => {
    setPaused(arg0);
  }, items2), paused(setPaused[7])(() => _modDef12.throttle((arg0) => {
    closure_1_6(arg0);
    let str = "transparent";
    if (1 === arg0) {
      const obj = paused(setPaused[9])("#FFFFFF");
      str = paused(setPaused[9])("#FFFFFF").alpha(0.2).hex();
      const alphaResult = paused(setPaused[9])("#FFFFFF").alpha(0.2);
    }
    closure_1_7(str);
  }, num)));
  const items3 = [controls, paused];
  const items4 = [controls];
  const callback1 = obj.useCallback(() => {
    if (!paused) {
      controls.pause(true);
      closure_4.current = true;
    }
  }, items3);
  const callback2 = obj.useCallback((arg0) => {
    controls.seek(arg0);
    if (ref.current) {
      controls.pause(false);
      tmp2.current = false;
    }
  }, items4);
  const tmp13 = paused(setPaused[7])(() => _modDef12.throttle((arg0) => {
    closure_1_6(arg0);
    let str = "transparent";
    if (1 === arg0) {
      const obj = paused(setPaused[9])("#FFFFFF");
      str = paused(setPaused[9])("#FFFFFF").alpha(0.2).hex();
      const alphaResult = paused(setPaused[9])("#FFFFFF").alpha(0.2);
    }
    closure_1_7(str);
  }, num));
  const obj3 = { style: null, children: null };
  const items5 = [tmp.container, controls.style];
  obj3.style = items5;
  const timeFormat = controls(setPaused[10]).getTimeFormat(tmp3);
  const obj4 = { style: tmp.icon, accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl = tmp9(tmp10[12]).intl;
  const string = intl.string;
  const t = tmp9(tmp10[12]).t;
  if (paused) {
    let stringResult = string(t.RscU7I);
  } else {
    stringResult = string(t.ZcgDJX);
  }
  obj4.accessibilityLabel = stringResult;
  obj4.onPress = function onPress() {
    if (paused) {
      onPlayPress();
    }
    controls.pause(!paused);
  };
  obj4.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
  if (paused) {
    let PauseIcon = tmp9(tmp10[13]).PlayIcon;
  } else {
    PauseIcon = tmp9(tmp10[14]).PauseIcon;
  }
  obj4.children = closure_6(PauseIcon, { size: "md", color: "white" });
  const items6 = [closure_6(controls(setPaused[11]).PressableOpacity, obj4), , , ];
  const obj5 = { style: null, tabularNumbers: true, lineClamp: 1, color: "text-overlay-light", variant: "text-xs/medium", children: timeFormat };
  const items7 = [tmp.centerText, { width: tmp8[0] }];
  obj5.style = items7;
  items6[1] = closure_6(controls(setPaused[15]).Text, obj5);
  const obj6 = { style: tmp.sliderContainer, children: null };
  const obj7 = { pointerEvents: "none", style: tmp.progressSliderContainer, children: null };
  const obj8 = { style: tmp.timelineBackgroundSlider, value: 1, minimumValue: 0, maximumValue: 1, thumbTintColor: null, minimumTrackTintColor: null, maximumTrackTintColor: null };
  const tmp9Result = controls(setPaused[10]);
  const tmp11Result = paused(setPaused[16]);
  const obj10 = paused(setPaused[9])("#FFFFFF");
  obj8.thumbTintColor = paused(setPaused[9])("#FFFFFF").alpha(0).hex();
  let alphaResult = paused(setPaused[9])("#FFFFFF").alpha(0);
  const obj12 = paused(setPaused[9])("#FFFFFF");
  obj8.minimumTrackTintColor = paused(setPaused[9])("#FFFFFF").alpha(0.1).hex();
  const alphaResult1 = paused(setPaused[9])("#FFFFFF").alpha(0.1);
  const obj14 = paused(setPaused[9])("#FFFFFF");
  obj8.maximumTrackTintColor = paused(setPaused[9])("#FFFFFF").alpha(0.1).hex();
  const items8 = [closure_6(tmp11Result, obj8), ];
  const obj9 = { style: tmp.downloadProgressSlider, value: tmp4[0], minimumValue: 0, maximumValue: 1, thumbTintColor: null, minimumTrackTintColor: null, maximumTrackTintColor: null };
  const alphaResult2 = paused(setPaused[9])("#FFFFFF").alpha(0.1);
  const tmp11Result3 = paused(setPaused[16]);
  const obj17 = paused(setPaused[9])("#FFFFFF");
  obj9.thumbTintColor = paused(setPaused[9])("#FFFFFF").alpha(0).hex();
  const alphaResult3 = paused(setPaused[9])("#FFFFFF").alpha(0);
  const obj19 = paused(setPaused[9])("#FFFFFF");
  obj9.minimumTrackTintColor = paused(setPaused[9])("#FFFFFF").alpha(0.2).hex();
  obj9.maximumTrackTintColor = tmp6;
  items8[1] = closure_6(tmp11Result3, obj9);
  obj7.children = items8;
  const items9 = [c7(c5, obj7), ];
  const obj11 = { style: tmp.playbackSlider, value: tmp3, thumbImage: null, minimumValue: 0, maximumValue: null, minimumTrackTintColor: null, maximumTrackTintColor: "transparent", onValueChange: null, onSlidingStart: null, onSlidingComplete: null };
  const alphaResult4 = paused(setPaused[9])("#FFFFFF").alpha(0.2);
  obj11.thumbImage = paused(setPaused[17]);
  obj11.maximumValue = ref.current;
  obj11.minimumTrackTintColor = paused(setPaused[18]).unsafe_rawColors.WHITE;
  obj11.onValueChange = tmp12;
  obj11.onSlidingStart = callback1;
  obj11.onSlidingComplete = callback2;
  items9[1] = closure_6(paused(setPaused[16]), obj11);
  obj6.children = items9;
  items6[2] = c7(c5, obj6);
  const obj13 = {
    style: tmp.centerText,
    variant: "text-xs/medium",
    color: "text-overlay-light",
    tabularNumbers: true,
    lineClamp: 1,
    onLayout(nativeEvent) {
      closure_9(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  const tmp11Result4 = paused(setPaused[16]);
  obj13.children = controls(setPaused[10]).getTimeFormat(ref.current);
  items6[3] = closure_6(controls(setPaused[15]).Text, obj13);
  obj3.children = items6;
  return c7(c5, obj3);
};