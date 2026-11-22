// === Module 14411: MediaSlider ===

// Module 14411 (MediaSlider)
import applyDefault from "apply" /* 12 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(4913);
let obj2 = { container: { flex: 1, marginHorizontal: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, icon: { marginRight: 16 }, centerText: null, sliderContainer: null, progressSliderContainer: null, timelineBackgroundSlider: null, downloadProgressSlider: null, playbackSlider: null };
let PlatformUtils = fn(1378);
let num;
if (PlatformUtils.isAndroid()) {
  num = 12;
}
obj2.centerText = { lineHeight: num };
PlatformUtils = fn(1378);
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
  c6 = undefined;
  c8 = undefined;
  closure_12 = undefined;
  const tmp = c8();
  noop = noop.useRef(false);
  const ref2 = noop.useRef(false);
  [tmp3, c6] = onPlayPress(noop.useState(0), 2);
  const tmp4 = onPlayPress(noop.useState(0), 2);
  closure_7 = tmp4[1];
  const tmp2 = onPlayPress(noop.useState(0), 2);
  [tmp6, c8] = onPlayPress(noop.useState("transparent"), 2);
  const ref = noop.useRef(0);
  const tmp8 = onPlayPress(noop.useState(0), 2);
  closure_10 = tmp8[1];
  const tmp5 = onPlayPress(noop.useState("transparent"), 2);
  const tmp12 = paused(setPaused[7])(() => applyDefault.throttle((arg0) => {
    closure_1_6(arg0);
  }, num));
  closure_12 = tmp12;
  items = [tmp12];
  obj2 = controls(setPaused[6]);
  const effect = obj.useEffect(() => () => {
    closure_1_12.cancel();
  }, items);
  const items1 = [tmp12];
  const items2 = [setPaused];
  const callback = obj.useCallback((arg0, current) => {
    closure_12(arg0);
    ref.current = current;
  }, items1);
  const subscribe = controls.useSubscribe(callback, obj.useCallback((arg0) => {
    setPaused(arg0);
  }, items2), paused(setPaused[7])(() => applyDefault.throttle((arg0) => {
    closure_1_7(arg0);
    let str = "transparent";
    if (1 === arg0) {
      const obj = paused(setPaused[9])("#FFFFFF");
      str = paused(setPaused[9])("#FFFFFF").alpha(0.2).hex();
      const alphaResult = paused(setPaused[9])("#FFFFFF").alpha(0.2);
    }
    closure_1_8(str);
  }, num)));
  const items3 = [controls, paused];
  const items4 = [controls];
  const callback1 = obj.useCallback(() => {
    closure_5.current = true;
    if (!paused) {
      controls.pause(true);
      closure_4.current = true;
    }
  }, items3);
  const items5 = [controls, tmp12];
  const callback2 = obj.useCallback((arg0) => {
    closure_5.current = false;
    controls.seek(arg0);
    if (ref.current) {
      controls.pause(false);
      tmp2.current = false;
    }
  }, items4);
  const callback3 = obj.useCallback((arg0) => {
    closure_12(arg0);
    if (!ref2.current) {
      controls.seek(arg0);
    }
  }, items5);
  const tmp13 = paused(setPaused[7])(() => applyDefault.throttle((arg0) => {
    closure_1_7(arg0);
    let str = "transparent";
    if (1 === arg0) {
      const obj = paused(setPaused[9])("#FFFFFF");
      str = paused(setPaused[9])("#FFFFFF").alpha(0.2).hex();
      const alphaResult = paused(setPaused[9])("#FFFFFF").alpha(0.2);
    }
    closure_1_8(str);
  }, num));
  const obj3 = { text: null };
  const timeFormat = controls(setPaused[10]).getTimeFormat(tmp3);
  const intl = tmp9(tmp10[11]).intl;
  const obj4 = { elapsed: null, duration: null };
  const tmp9Result = controls(setPaused[10]);
  obj4.elapsed = controls(setPaused[12]).formatTimeForA11yLabel(tmp3);
  const tmp9Result4 = controls(setPaused[12]);
  obj4.duration = controls(setPaused[12]).formatTimeForA11yLabel(ref.current);
  obj3.text = intl.formatToPlainString(controls(setPaused[11]).t.bnnNER, obj4);
  const obj5 = { style: null, children: null };
  const items6 = [tmp.container, controls.style];
  obj5.style = items6;
  const obj6 = { style: tmp.icon, accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl2 = tmp9(tmp10[11]).intl;
  const string = intl2.string;
  const t = tmp9(tmp10[11]).t;
  if (paused) {
    let stringResult = string(t.RscU7I);
  } else {
    stringResult = string(t.ZcgDJX);
  }
  obj6.accessibilityLabel = stringResult;
  obj6.onPress = function onPress() {
    if (paused) {
      onPlayPress();
    }
    controls.pause(!paused);
  };
  obj6.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
  if (paused) {
    let PauseIcon = tmp9(tmp10[14]).PlayIcon;
  } else {
    PauseIcon = tmp9(tmp10[15]).PauseIcon;
  }
  obj6.children = c6(PauseIcon, { size: "md", color: "white" });
  const items7 = [c6(controls(setPaused[13]).PressableOpacity, obj6), , , ];
  const obj7 = { style: null, tabularNumbers: true, lineClamp: 1, color: "text-overlay-light", variant: "body-xs/medium", children: timeFormat };
  const items8 = [tmp.centerText, { width: tmp8[0] }];
  obj7.style = items8;
  items7[1] = c6(controls(setPaused[16]).Text, obj7);
  const obj8 = { style: tmp.sliderContainer, children: null };
  const obj9 = { pointerEvents: "none", style: tmp.progressSliderContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const obj10 = { style: tmp.timelineBackgroundSlider, value: 1, minimumValue: 0, maximumValue: 1, thumbTintColor: null, minimumTrackTintColor: null, maximumTrackTintColor: null };
  const tmp9Result5 = controls(setPaused[12]);
  const tmp11Result = paused(setPaused[17]);
  const obj14 = paused(setPaused[9])("#FFFFFF");
  obj10.thumbTintColor = paused(setPaused[9])("#FFFFFF").alpha(0).hex();
  let alphaResult = paused(setPaused[9])("#FFFFFF").alpha(0);
  const obj16 = paused(setPaused[9])("#FFFFFF");
  obj10.minimumTrackTintColor = paused(setPaused[9])("#FFFFFF").alpha(0.1).hex();
  const alphaResult1 = paused(setPaused[9])("#FFFFFF").alpha(0.1);
  const obj18 = paused(setPaused[9])("#FFFFFF");
  obj10.maximumTrackTintColor = paused(setPaused[9])("#FFFFFF").alpha(0.1).hex();
  const items9 = [c6(tmp11Result, obj10), ];
  const obj11 = { style: tmp.downloadProgressSlider, value: tmp4[0], minimumValue: 0, maximumValue: 1, thumbTintColor: null, minimumTrackTintColor: null, maximumTrackTintColor: null };
  const alphaResult2 = paused(setPaused[9])("#FFFFFF").alpha(0.1);
  const tmp11Result3 = paused(setPaused[17]);
  const obj21 = paused(setPaused[9])("#FFFFFF");
  obj11.thumbTintColor = paused(setPaused[9])("#FFFFFF").alpha(0).hex();
  const alphaResult3 = paused(setPaused[9])("#FFFFFF").alpha(0);
  const obj23 = paused(setPaused[9])("#FFFFFF");
  obj11.minimumTrackTintColor = paused(setPaused[9])("#FFFFFF").alpha(0.2).hex();
  obj11.maximumTrackTintColor = tmp6;
  items9[1] = c6(tmp11Result3, obj11);
  obj9.children = items9;
  const items10 = [closure_7(ref2, obj9), ];
  const obj12 = { style: tmp.playbackSlider, accessibilityLabel: null, value: null, thumbImage: null, minimumValue: 0, maximumValue: null, minimumTrackTintColor: null, maximumTrackTintColor: "transparent", onValueChange: null, onSlidingStart: null, onSlidingComplete: null, accessibilityValue: null };
  const alphaResult4 = paused(setPaused[9])("#FFFFFF").alpha(0.2);
  const intl3 = tmp9(tmp10[11]).intl;
  obj12.accessibilityLabel = intl3.string(controls(setPaused[11]).t["v//dvn"]);
  obj12.value = tmp3;
  obj12.thumbImage = paused(setPaused[18]);
  obj12.maximumValue = ref.current;
  obj12.minimumTrackTintColor = paused(setPaused[19]).unsafe_rawColors.WHITE;
  obj12.onValueChange = callback3;
  obj12.onSlidingStart = callback1;
  obj12.onSlidingComplete = callback2;
  obj12.accessibilityValue = obj3;
  items10[1] = c6(paused(setPaused[17]), obj12);
  obj8.children = items10;
  items7[2] = closure_7(ref2, obj8);
  const obj13 = {
    style: tmp.centerText,
    variant: "body-xs/medium",
    color: "text-overlay-light",
    tabularNumbers: true,
    lineClamp: 1,
    onLayout(nativeEvent) {
      closure_10(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  const tmp11Result4 = paused(setPaused[17]);
  obj13.children = controls(setPaused[10]).getTimeFormat(ref.current);
  items7[3] = c6(controls(setPaused[16]).Text, obj13);
  obj5.children = items7;
  return closure_7(ref2, obj5);
};