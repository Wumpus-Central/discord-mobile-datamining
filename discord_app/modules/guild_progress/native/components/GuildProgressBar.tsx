// discord_app/modules/guild_progress/native/components/GuildProgressBar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
const obj2 = {
  wrapper: {
    position: "relative",
    backgroundColor: fn(14178).PROGRESS_BACKGROUND_COLOR,
    borderRadius: nativeDefault.radii.xs,
    height: 8,
  },
  progress: null,
};
let obj3 = {
  position: "relative",
  backgroundColor: fn(14178).PROGRESS_BACKGROUND_COLOR,
  borderRadius: nativeDefault.radii.xs,
  height: 8,
};
obj2.progress = {
  position: "absolute",
  height: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.xs,
};
let closure_6 = createStyles.createStyles(obj2);
let closure_7 = {
  code: '(function GuildProgressBarTsx1(){let[percentWidth]=this.__closure;return{width:percentWidth.get()+"%"};})',
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressBar.tsx");

export default function GuildProgressBar(percent) {
  percent = percent.percent;
  _require = percent;
  const tmp = closure_6();
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  items = [percent, sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(timing_timing.withTiming(c0, timingPresets.timingSlow));
  }, items);
  const obj = require("../../../../../_runtime/metro/01652__.js");
  const items1 = [closure_7, sharedValue];
  _require = undefined;
  [tmp5, tmp6] = items1;
  class GuildProgressBarTsx1 {
    constructor() {
      obj = { width: "" + closure_0.get() + "%" };
      return obj;
    }
  }
  const items2 = [tmp6];
  GuildProgressBarTsx1.__closure = items2;
  GuildProgressBarTsx1.__workletHash = 11414818338858;
  GuildProgressBarTsx1.__initData = tmp5;
  const obj3 = { style: null, children: null };
  const items3 = [tmp.wrapper, percent.style];
  obj3.style = items3;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(GuildProgressBarTsx1);
  const obj4 = { style: null };
  const items4 = [tmp.progress, animatedStyle];
  obj4.style = items4;
  obj3.children = jsx(sharedValue(1652).View, { style: null });
  return <View style={null}>{null}</View>;
}
