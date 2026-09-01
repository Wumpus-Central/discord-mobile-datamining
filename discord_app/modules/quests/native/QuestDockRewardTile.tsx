// === Module 11338: ? ===

// Module 11338
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let c4 = importAllResult;
({ AppState: c5, View: closure_6 } = get_ActivityIndicator);
let closure_9 = createCacheKey.createStyles(() => {
  let obj = { container: null, video: null, image: null };
  obj = { borderRadius: ThemesDefault.radii.sm, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
  obj[0] = obj;
  obj[1] = { overflow: "hidden", height: "100%", width: "100%" };
  obj[2] = { height: "100%", width: "100%" };
  return obj;
});
const memoResult = importAllResult.memo(function QuestDockRewardTile(assetUrl) {
  assetUrl = assetUrl.assetUrl;
  const isAnimatedAsset = assetUrl.isAnimatedAsset;
  const height = assetUrl.height;
  const width = assetUrl.width;
  let flag = assetUrl.paused;
  ({ accessibilityLabel, style } = assetUrl);
  if (flag === undefined) {
    flag = false;
  }
  let withAnimation = assetUrl.withAnimation;
  if (withAnimation === undefined) {
    let obj = assetUrl(height[7]);
    withAnimation = obj.isIOS();
  }
  obj1 = assetUrl(height[8]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp6 = callback();
  [tmp8, c4] = width(undefined.useState("active" === currentState.currentState), 2);
  const items1 = [isAnimatedAsset];
  const effect = importAllResult.useEffect(() => {
    if (isAnimatedAsset) {
      closure_0 = closure_1_5.addEventListener("change", (arg0) => {
        callback("active" === arg0);
      });
      return () => {
        closure_0.remove();
      };
    }
  }, items1);
  const items2 = [assetUrl, width, height];
  const memo = importAllResult.useMemo(() => {
    let obj = assetUrl(height[9]);
    obj = { assetUrl, width, height };
    return obj.getScaledImageUrl(obj);
  }, items2);
  obj = { accessibilityLabel, style: items3, children: null };
  items3 = [tmp6.container, { height, width }, style];
  if (isAnimatedAsset) {
    if (withAnimation) {
      obj = { style: null, source: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", poster: null, resizeMode: "cover", paused: null, muted: true };
      obj[0] = tmp6.video;
      obj1 = { uri: null };
      obj1[0] = assetUrl;
      obj[1] = obj1;
      obj[5] = memo;
      let tmp14 = !tmp8;
      if (tmp8) {
        tmp14 = flag;
      }
      if (!tmp14) {
        tmp14 = stateFromStores;
      }
      obj[7] = tmp14;
      let tmp11Result = tmp11(assetUrl(tmp4[10]).VideoComponent, obj);
    }
    obj[2] = tmp11Result;
    return tmp11(tmp12, obj);
  }
  tmp11Result = tmp11(isAnimatedAsset(tmp4[11]), { source: { uri: memo }, style: tmp6.image });
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDockRewardTile.tsx");

export default memoResult;