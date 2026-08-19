// === Module 13436: GuildProgressBar ===

// Module 13436 (GuildProgressBar)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
const createCacheKey = { position: "relative", backgroundColor: require("useIOSCompletionStates").PROGRESS_BACKGROUND_COLOR, borderRadius: ThemesDefault.radii.xs, height: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", height: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.xs };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let closure_7 = { code: "function GuildProgressBarTsx1(){const{percentWidth}=this.__closure;return{width:percentWidth.get()+\"%\"};}" };
let result = require("obj132").fileFinishedImporting("modules/guild_progress/native/components/GuildProgressBar.tsx");

export default function GuildProgressBar(percent) {
  percent = percent.percent;
  const tmp = callback();
  let obj = percent(4115);
  const sharedValue = obj.useSharedValue(0);
  const items = [percent, sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(percent(dependencyMap[7]).withTiming(percent, percent(dependencyMap[8]).timingSlow));
  }, items);
  const fn = function h() {
    return { width: "" + sharedValue.get() + "%" };
  };
  fn.__closure = { percentWidth: sharedValue };
  fn.__workletHash = 14122394499539;
  fn.__initData = closure_7;
  obj = { style: items1, children: null };
  items1 = [tmp.wrapper, percent.style];
  const animatedStyle = percent(4115).useAnimatedStyle(fn);
  const items2 = [tmp.progress, animatedStyle];
  obj[1] = jsx(sharedValue(4115).View, { style: items2 });
  return <View style={items1}>{null}</View>;
};