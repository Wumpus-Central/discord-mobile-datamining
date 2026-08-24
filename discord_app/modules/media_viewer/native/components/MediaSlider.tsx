// discord_app/modules/media_viewer/native/components/MediaSlider.tsx
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import set from "../../../../utils/PlatformUtils.tsx";

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { flex: 1, marginHorizontal: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, icon: { marginRight: 16 }, centerText: null, sliderContainer: null, progressSliderContainer: null, timelineBackgroundSlider: null, downloadProgressSlider: null, playbackSlider: null };
let num;
if (set.isAndroid()) {
  num = 12;
}
createCacheKey[2] = { lineHeight: num };
let num2 = 16;
if (set.isAndroid()) {
  num2 = 0;
}
createCacheKey[3] = { position: "relative", flex: 1, marginHorizontal: num2, justifyContent: "center" };
createCacheKey[4] = { position: "relative", flex: 1, marginHorizontal: 0, justifyContent: "center" };
createCacheKey[5] = { position: "absolute", width: "100%", backgroundColor: "transparent", zIndex: 0 };
createCacheKey[6] = { position: "absolute", width: "100%", backgroundColor: "transparent", zIndex: 1 };
createCacheKey[7] = { position: "absolute", width: "100%", zIndex: 2 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/media_viewer/native/components/MediaSlider.tsx");

export default function MediaSlider(controls) {
  controls = controls.controls;
  const paused = controls.paused;
  ({ setPaused: dependencyMap, onPlayPress: closure_3 } = controls);
  let React;
  c5 = undefined;
  closure_6 = undefined;
  c7 = undefined;
  let ref;
  closure_9 = undefined;
  closure_10 = undefined;
  closure_11 = undefined;
  const tmp = ref();
  React = React.useRef(false);
  [tmp3, c5] = callback(React.useState(0), 2);
  const tmp4 = callback(React.useState(0), 2);
  closure_6 = tmp4[1];
  const tmp2 = callback(React.useState(0), 2);
  [tmp6, c7] = callback(React.useState("transparent"), 2);
  ref = React.useRef(0);
  const tmp8 = callback(React.useState(0), 2);
  closure_9 = tmp8[1];
  const tmp11 = paused(7165)(() => paused(closure_1_2[7]).throttle((arg0) => {
    callback(arg0);
  }, 100));
  closure_10 = tmp11;
  closure_11 = paused(7165)(() => paused(closure_1_2[7]).throttle((arg0) => {
    callback(arg0);
    let str = "transparent";
    if (1 === arg0) {
      const obj = closure_1_1(closure_1_2[8])("#FFFFFF");
      str = closure_1_1(closure_1_2[8])("#FFFFFF").alpha(0.2).hex();
      const alphaResult = closure_1_1(closure_1_2[8])("#FFFFFF").alpha(0.2);
    }
    closure_7(str);
  }, 100));
  const items = [tmp11];
  const effect = React.useEffect(() => () => {
    closure_10.cancel();
  }, items);
  const subscribe = controls.useSubscribe((arg0, current) => {
    callback4(arg0);
    ref.current = current;
  }, (arg0) => {
    callback(arg0);
  }, (arg0) => {
    callback5(arg0);
  });
  const items1 = [controls, paused];
  const items2 = [controls];
  callback = React.useCallback(() => {
    if (!paused) {
      controls.pause(true);
      closure_4.current = true;
    }
  }, items1);
  const callback1 = React.useCallback((arg0) => {
    controls.seek(arg0);
    if (ref.current) {
      controls.pause(false);
      tmp2.current = false;
    }
  }, items2);
  let obj = controls(4874);
  obj = { style: items3, children: null };
  items3 = [tmp.container, controls.style];
  const timeFormat = obj.getTimeFormat(tmp3);
  obj = { style: tmp.icon, accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl = controls(1236).intl;
  const string = intl.string;
  const t = controls(1236).t;
  if (paused) {
    let stringResult = string(t.RscU7I);
  } else {
    stringResult = string(t.ZcgDJX);
  }
  obj[2] = stringResult;
  obj[3] = function onPress() {
    if (paused) {
      callback2();
    }
    controls.pause(!paused);
  };
  obj[4] = { top: 8, right: 8, bottom: 8, left: 8 };
  if (paused) {
    let PauseIcon = tmp16(9040).PlayIcon;
  } else {
    PauseIcon = tmp16(9042).PauseIcon;
  }
  obj[5] = closure_6(PauseIcon, { size: "md", color: "white" });
  const items4 = [closure_6(controls(5438).PressableOpacity, obj), , , ];
  const items5 = [tmp.centerText, { width: tmp8[0] }];
  items4[1] = closure_6(controls(4739).Text, { style: items5, tabularNumbers: true, lineClamp: 1, color: "text-overlay-light", variant: "text-xs/medium", children: timeFormat });
  obj1 = { style: tmp.sliderContainer, children: null };
  const obj2 = { pointerEvents: "none", style: tmp.progressSliderContainer, children: null };
  const obj3 = { style: tmp.timelineBackgroundSlider, value: 1, minimumValue: 0, maximumValue: 1, thumbTintColor: null, minimumTrackTintColor: null, maximumTrackTintColor: null };
  let tmp9Result = tmp9(8144);
  let obj6 = tmp9(689)("#FFFFFF");
  const tmp5 = callback(React.useState("transparent"), 2);
  obj3[4] = obj6.alpha(0).hex();
  let alphaResult = obj6.alpha(0);
  const obj9 = paused(689)("#FFFFFF");
  obj3[5] = paused(689)("#FFFFFF").alpha(0.1).hex();
  const alphaResult1 = paused(689)("#FFFFFF").alpha(0.1);
  const obj11 = paused(689)("#FFFFFF");
  obj3[6] = paused(689)("#FFFFFF").alpha(0.1).hex();
  const items6 = [closure_6(tmp9Result, obj3), ];
  const obj4 = { style: tmp.downloadProgressSlider, value: tmp4[0], minimumValue: 0, maximumValue: 1, thumbTintColor: null, minimumTrackTintColor: null, maximumTrackTintColor: null };
  tmp9Result = tmp9(8144);
  const alphaResult2 = paused(689)("#FFFFFF").alpha(0.1);
  const obj14 = paused(689)("#FFFFFF");
  obj4[4] = paused(689)("#FFFFFF").alpha(0).hex();
  const alphaResult3 = paused(689)("#FFFFFF").alpha(0);
  const obj16 = paused(689)("#FFFFFF");
  obj4[5] = paused(689)("#FFFFFF").alpha(0.2).hex();
  obj4[6] = tmp6;
  items6[1] = closure_6(tmp9Result, obj4);
  obj2[2] = items6;
  const items7 = [c7(c5, obj2), ];
  const obj5 = { style: tmp.playbackSlider, value: tmp3, thumbImage: null, minimumValue: 0, maximumValue: null, minimumTrackTintColor: null, maximumTrackTintColor: "transparent", onValueChange: null, onSlidingStart: null, onSlidingComplete: null };
  const alphaResult4 = paused(689)("#FFFFFF").alpha(0.2);
  obj5[2] = paused(9044);
  obj5[4] = ref.current;
  obj5[5] = paused(712).unsafe_rawColors.WHITE;
  obj5[7] = tmp11;
  obj5[8] = callback;
  obj5[9] = callback1;
  items7[1] = closure_6(paused(8144), obj5);
  obj1[1] = items7;
  items4[2] = c7(c5, obj1);
  obj6 = {
    style: tmp.centerText,
    variant: "text-xs/medium",
    color: "text-overlay-light",
    tabularNumbers: true,
    lineClamp: 1,
    onLayout(nativeEvent) {
      callback3(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  const tmp9Result1 = paused(8144);
  obj6[6] = controls(4874).getTimeFormat(ref.current);
  items4[3] = closure_6(controls(4739).Text, obj6);
  obj[1] = items4;
  return c7(c5, obj);
};