// === Module 13715: GuildProgressBar ===

// Module 13715 (GuildProgressBar)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
createCacheKey = { wrapper: null, progress: null };
createCacheKey = { position: "relative", backgroundColor: require("useIOSCompletionStates").PROGRESS_BACKGROUND_COLOR, borderRadius: ThemesDefault.radii.xs, height: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", height: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.xs };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let closure_7 = { code: "function GuildProgressBarTsx1(){const{percentWidth}=this.__closure;return{width:percentWidth.get()+\"%\"};}" };
const obj1 = { position: "absolute", height: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.xs };
let result = require("set").fileFinishedImporting("modules/guild_progress/native/components/GuildProgressBar.tsx");

export default function GuildProgressBar(percent) {
  percent = percent.percent;
  let sharedValue;
  const tmp = callback();
  let obj = percent(4217);
  sharedValue = obj.useSharedValue(0);
  const items = [percent, sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(percent(closure_1_2[7]).withTiming(percent, percent(closure_1_2[8]).timingSlow));
  }, items);
  const fn = function h() {
    return { width: "" + sharedValue.get() + "%" };
  };
  fn.__closure = { percentWidth: sharedValue };
  fn.__workletHash = 14122394499539;
  fn.__initData = closure_7;
  obj = { style: items1, children: null };
  items1 = [tmp.wrapper, percent.style];
  const animatedStyle = percent(4217).useAnimatedStyle(fn);
  const items2 = [tmp.progress, animatedStyle];
  obj[1] = jsx(sharedValue(4217).View, { style: items2 });
  return <View style={items1}>{null}</View>;
};