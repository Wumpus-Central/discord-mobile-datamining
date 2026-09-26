// === Module 13522: GuildProgressBar ===

// Module 13522 (GuildProgressBar)
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
const obj2 = { wrapper: { position: "relative", backgroundColor: fn(11967).PROGRESS_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xs, height: 8 }, progress: null };
let obj3 = { position: "relative", backgroundColor: fn(11967).PROGRESS_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xs, height: 8 };
obj2.progress = { position: "absolute", height: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.xs };
let closure_6 = createStyles.createStyles(obj2);
const __initData = { code: "function GuildProgressBarTsx1(){const{percentWidth}=this.__closure;return{width:percentWidth.get()+\"%\"};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressBar.tsx");

export default function GuildProgressBar(percent) {
  percent = percent.percent;
  const tmp = closure_6();
  const sharedValue = percent(4566).useSharedValue(0);
  const items = [percent, sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(timing.withTiming(percent, timingPresets.timingSlow));
  }, items);
  const obj = percent(4566);
  const fn = function h() {
    return { width: "" + sharedValue.get() + "%" };
  };
  fn.__closure = { percentWidth: sharedValue };
  fn.__workletHash = 14122394499539;
  fn.__initData = __initData;
  const obj3 = { style: null, children: null };
  const items1 = [tmp.wrapper, percent.style];
  obj3.style = items1;
  const animatedStyle = percent(4566).useAnimatedStyle(fn);
  const obj4 = { style: null };
  const items2 = [tmp.progress, animatedStyle];
  obj4.style = items2;
  obj3.children = jsx(sharedValue(4566).View, { style: null });
  return <View style={null}>{null}</View>;
};