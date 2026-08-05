// discord_app/modules/guild_progress/native/components/GuildProgressBar.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { wrapper: null, progress: null };
createCacheKey = { position: "relative", backgroundColor: require("useIOSCompletionStates").PROGRESS_BACKGROUND_COLOR, borderRadius: require("Themes").radii.xs, height: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", height: 8, backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: require("Themes").radii.xs };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_7 = { code: "function GuildProgressBarTsx1(){const{percentWidth}=this.__closure;return{width:percentWidth.get()+\"%\"};}" };
const obj1 = { position: "absolute", height: 8, backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: require("Themes").radii.xs };
let result = require("jsxProd").fileFinishedImporting("modules/guild_progress/native/components/GuildProgressBar.tsx");

export default function GuildProgressBar(percent) {
  percent = percent.percent;
  let sharedValue;
  const tmp = createCacheKey();
  let obj = percent(4146);
  sharedValue = obj.useSharedValue(0);
  const items = [percent, sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(percent(outer1_2[7]).withTiming(percent, percent(outer1_2[8]).timingSlow));
  }, items);
  const fn = function h() {
    return { width: "" + sharedValue.get() + "%" };
  };
  fn.__closure = { percentWidth: sharedValue };
  fn.__workletHash = 14122394499539;
  fn.__initData = closure_7;
  obj = { style: items1, children: null };
  items1 = [tmp.wrapper, percent.style];
  const animatedStyle = percent(4146).useAnimatedStyle(fn);
  const items2 = [tmp.progress, animatedStyle];
  obj[1] = jsx(sharedValue(4146).View, { style: items2 });
  return <View style={items1}>{null}</View>;
};