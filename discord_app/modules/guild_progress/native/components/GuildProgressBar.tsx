// === Module 13976: GuildProgressBar ===

// Module 13976 (GuildProgressBar)
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { wrapper: null, progress: null };
createStyles = { position: "relative", backgroundColor: fn(12474).PROGRESS_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xs, height: 8 };
createStyles.wrapper = createStyles;
createStyles.progress = { position: "absolute", height: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.xs };
let closure_6 = createStyles.createStyles(createStyles);
const __initData = { code: "function GuildProgressBarTsx1(){const{percentWidth}=this.__closure;return{width:percentWidth.get()+\"%\"};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressBar.tsx");

export default function GuildProgressBar(percent) {
  percent = percent.percent;
  const tmp = closure_6();
  let obj = percent(4296);
  const sharedValue = obj.useSharedValue(0);
  const items = [percent, sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(timing.withTiming(percent, timingPresets.timingSlow));
  }, items);
  const fn = function h() {
    return { width: "" + sharedValue.get() + "%" };
  };
  fn.__closure = { percentWidth: sharedValue };
  fn.__workletHash = 14122394499539;
  fn.__initData = __initData;
  obj = { style: null, children: null };
  const items1 = [tmp.wrapper, percent.style];
  obj.style = items1;
  const animatedStyle = percent(4296).useAnimatedStyle(fn);
  obj = { style: null };
  const items2 = [tmp.progress, animatedStyle];
  obj.style = items2;
  obj.children = jsx(sharedValue(4296).View, { style: null });
  return <View style={null} />;
};