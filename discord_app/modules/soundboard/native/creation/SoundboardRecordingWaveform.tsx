// discord_app/modules/soundboard/native/creation/SoundboardRecordingWaveform.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const WAVEFORM_WAVE_MAX_VALUE = fn(12826).WAVEFORM_WAVE_MAX_VALUE;
const jsx = fn(21).jsx;
const createStyles = fn(4913);
let obj = {
  container: { flexDirection: "row", alignItems: "center" },
  slot: { flex: 1, marginHorizontal: 1, alignItems: "center", justifyContent: "center" },
  bar: {
    alignSelf: "stretch",
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_WAVEFORM_BAR_BACKGROUND,
  },
};
let closure_7 = createStyles.createStyles(obj);
let closure_8 = {
  code: "(function SoundboardRecordingWaveformTsx1(){let[height]=this.__closure;return{height:height.get()};})",
};
let closure_9 = noop.memo(function WaveformBar(level) {
  level = level.level;
  _require = level;
  const maxHeight = level.maxHeight;
  let sharedValue;
  const tmp = closure_7();
  const tmp2 = sharedValue;
  sharedValue = require("../../../../../_runtime/metro/01653__.js").useSharedValue(0);
  const obj = require("../../../../../_runtime/metro/01653__.js");
  items = [closure_8, sharedValue];
  _require = undefined;
  [tmp4, tmp5] = items;
  class SoundboardRecordingWaveformTsx1 {
    constructor() {
      obj = { height: closure_0.get() };
      return obj;
    }
  }
  const items1 = [tmp5];
  SoundboardRecordingWaveformTsx1.__closure = items1;
  SoundboardRecordingWaveformTsx1.__workletHash = 14110970372869;
  SoundboardRecordingWaveformTsx1.__initData = tmp4;
  const items2 = [sharedValue, level, maxHeight];
  const animatedStyle = require("../../../../../_runtime/metro/01653__.js").useAnimatedStyle(
    SoundboardRecordingWaveformTsx1,
  );
  const effect = noop.useEffect(() => {
    const bound = Math.max(2, (c0 / WAVEFORM_WAVE_MAX_VALUE) * maxHeight);
    const result = sharedValue.set(spring_spring.withSpring(bound, springPresets.Reanimated3DefaultSpringConfig));
  }, items2);
  const obj3 = { style: null };
  const items3 = [tmp.bar, animatedStyle];
  obj3.style = items3;
  return jsx(maxHeight(tmp2[6]).View, { style: null });
});
let obj3 = {
  alignSelf: "stretch",
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_WAVEFORM_BAR_BACKGROUND,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/creation/SoundboardRecordingWaveform.tsx");

export default noop.memo(function SoundboardRecordingWaveform(length) {
  ({ levels: require, height } = length);
  const tmp = closure_7();
  const slot = tmp;
  let obj = {
    style: null,
    children: Array.from({ length: length.slotCount }, (arg0, key) => {
      const obj = { style: slot.slot, children: null };
      let tmp2Result = null;
      if (null != _require[key]) {
        const obj2 = { level: tmp, maxHeight: height };
        tmp2Result = <closure_9 level={tmp} maxHeight={height} />;
      }
      obj.children = tmp2Result;
      return (
        <View key={key} style={slot.slot}>
          {null}
        </View>
      );
    }),
  };
  items = [tmp.container, { height }];
  obj.style = items;
  return (
    <View style={null}>
      {Array.from({ length: length.slotCount }, (arg0, key) => {
        const obj = { style: slot.slot, children: null };
        let tmp2Result = null;
        if (null != _require[key]) {
          const obj2 = { level: tmp, maxHeight: height };
          tmp2Result = <closure_9 level={tmp} maxHeight={height} />;
        }
        obj.children = tmp2Result;
        return (
          <View key={key} style={slot.slot}>
            {null}
          </View>
        );
      })}
    </View>
  );
});
