// === Module 8548: MediaSlider ===

// Module 8548 (MediaSlider)
import _modDef12 from "module_12" /* 12 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { container: { flex: 1, marginHorizontal: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, icon: { marginRight: 16 }, centerText: null, sliderContainer: null, progressSliderContainer: null, timelineBackgroundSlider: null, downloadProgressSlider: null, playbackSlider: null };
let PlatformUtils = fn(1364);
let num;
if (PlatformUtils.isAndroid()) {
  num = 12;
}
obj2.centerText = { lineHeight: num };
PlatformUtils = fn(1364);
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
  ({ setPaused: dependencyMap, onPlayPress: _slicedToArray } = controls);
  noop = undefined;
  c5 = undefined;
  c7 = undefined;
  let ref;
  const tmp = ref();
  noop = noop.useRef(false);
  [tmp3, c5] = noop.useState(0);
  const tmp4 = _slicedToArray(noop.useState(0), 2);
  closure_6 = tmp4[1];
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  [tmp6, c7] = noop.useState("transparent");
  ref = noop.useRef(0);
  const tmp8 = _slicedToArray(noop.useState(0), 2);
  closure_9 = tmp8[1];
  const tmp11 = paused(5817)(() => _modDef12.throttle((arg0) => {
    closure_1_5(arg0);
  }, 100));
  closure_10 = tmp11;
  closure_11 = paused(5817)(() => _modDef12.throttle((arg0) => {
    closure_1_6(arg0);
    let str = "transparent";
    if (1 === arg0) {
      const obj = paused(672)("#FFFFFF");
      str = paused(672)("#FFFFFF").alpha(0.2).hex();
      const alphaResult = paused(672)("#FFFFFF").alpha(0.2);
    }
    closure_1_7(str);
  }, 100));
  const items = [tmp11];
  const effect = noop.useEffect(() => () => {
    closure_1_10.cancel();
  }, items);
  const subscribe = controls.useSubscribe((arg0, current) => {
    closure_10(arg0);
    ref.current = current;
  }, (arg0) => {
    dependencyMap(arg0);
  }, (arg0) => {
    closure_11(arg0);
  });
  const items1 = [controls, paused];
  const items2 = [controls];
  const callback = noop.useCallback(() => {
    if (!paused) {
      controls.pause(true);
      closure_4.current = true;
    }
  }, items1);
  const callback1 = noop.useCallback((arg0) => {
    controls.seek(arg0);
    if (ref.current) {
      controls.pause(false);
      tmp2.current = false;
    }
  }, items2);
  const tmp5 = _slicedToArray(noop.useState("transparent"), 2);
  const obj2 = { style: null, children: null };
  const items3 = [tmp.container, controls.style];
  obj2.style = items3;
  const timeFormat = controls(5387).getTimeFormat(tmp3);
  const obj3 = { style: tmp.icon, accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl = controls(1115).intl;
  const string = intl.string;
  const t = controls(1115).t;
  if (paused) {
    let stringResult = string(t.RscU7I);
  } else {
    stringResult = string(t.ZcgDJX);
  }
  obj3.accessibilityLabel = stringResult;
  obj3.onPress = function onPress() {
    if (paused) {
      _slicedToArray();
    }
    controls.pause(!paused);
  };
  obj3.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
  if (paused) {
    let PauseIcon = tmp16(8549).PlayIcon;
  } else {
    PauseIcon = tmp16(8551).PauseIcon;
  }
  obj3.children = closure_6(PauseIcon, { size: "md", color: "white" });
  const items4 = [closure_6(controls(5341).PressableOpacity, obj3), , , ];
  const obj4 = { style: null, tabularNumbers: true, lineClamp: 1, color: "text-overlay-light", variant: "text-xs/medium", children: timeFormat };
  const items5 = [tmp.centerText, { width: tmp8[0] }];
  obj4.style = items5;
  items4[1] = closure_6(controls(4753).Text, obj4);
  const obj5 = { style: tmp.sliderContainer, children: null };
  const obj6 = { pointerEvents: "none", style: tmp.progressSliderContainer, children: null };
  const obj7 = { style: tmp.timelineBackgroundSlider, value: 1, minimumValue: 0, maximumValue: 1, thumbTintColor: null, minimumTrackTintColor: null, maximumTrackTintColor: null };
  let obj = controls(5387);
  const tmp9Result = paused(8553);
  const obj8 = paused(672)("#FFFFFF");
  obj7.thumbTintColor = paused(672)("#FFFFFF").alpha(0).hex();
  let alphaResult = paused(672)("#FFFFFF").alpha(0);
  const obj10 = paused(672)("#FFFFFF");
  obj7.minimumTrackTintColor = paused(672)("#FFFFFF").alpha(0.1).hex();
  const alphaResult1 = paused(672)("#FFFFFF").alpha(0.1);
  const obj12 = paused(672)("#FFFFFF");
  obj7.maximumTrackTintColor = paused(672)("#FFFFFF").alpha(0.1).hex();
  const items6 = [closure_6(tmp9Result, obj7), ];
  const obj9 = { style: tmp.downloadProgressSlider, value: tmp4[0], minimumValue: 0, maximumValue: 1, thumbTintColor: null, minimumTrackTintColor: null, maximumTrackTintColor: null };
  const alphaResult2 = paused(672)("#FFFFFF").alpha(0.1);
  const tmp9Result3 = paused(8553);
  const obj15 = paused(672)("#FFFFFF");
  obj9.thumbTintColor = paused(672)("#FFFFFF").alpha(0).hex();
  const alphaResult3 = paused(672)("#FFFFFF").alpha(0);
  const obj17 = paused(672)("#FFFFFF");
  obj9.minimumTrackTintColor = paused(672)("#FFFFFF").alpha(0.2).hex();
  obj9.maximumTrackTintColor = tmp6;
  items6[1] = closure_6(tmp9Result3, obj9);
  obj6.children = items6;
  const items7 = [c7(c5, obj6), ];
  const obj11 = { style: tmp.playbackSlider, value: tmp3, thumbImage: null, minimumValue: 0, maximumValue: null, minimumTrackTintColor: null, maximumTrackTintColor: "transparent", onValueChange: null, onSlidingStart: null, onSlidingComplete: null };
  const alphaResult4 = paused(672)("#FFFFFF").alpha(0.2);
  obj11.thumbImage = paused(8562);
  obj11.maximumValue = ref.current;
  obj11.minimumTrackTintColor = paused(576).unsafe_rawColors.WHITE;
  obj11.onValueChange = tmp11;
  obj11.onSlidingStart = callback;
  obj11.onSlidingComplete = callback1;
  items7[1] = closure_6(paused(8553), obj11);
  obj5.children = items7;
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
    children: null
  };
  const tmp9Result4 = paused(8553);
  obj13.children = controls(5387).getTimeFormat(ref.current);
  items4[3] = closure_6(controls(4753).Text, obj13);
  obj2.children = items4;
  return c7(c5, obj2);
};