// === Module 10733: QuestDockRewardTile ===

// Module 10733 (QuestDockRewardTile)
import nativeDefault from "native" /* 576 */;
import AssetUtils from "AssetUtils" /* 10676 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;

require = fn;
get_ActivityIndicator = fn(17);
({ AppState: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_9 = createStyles.createStyles(() => {
  const obj = { container: { borderRadius: nativeDefault.radii.sm, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }, video: { overflow: "hidden", height: "100%", width: "100%" }, image: { height: "100%", width: "100%" } };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDockRewardTile.tsx");

export default noop.memo(function QuestDockRewardTile(assetUrl) {
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
    withAnimation = assetUrl(height[7]).isIOS();
    const obj = assetUrl(height[7]);
  }
  noop = undefined;
  const items = [AccessibilityStore];
  const stateFromStores = assetUrl(height[8]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp6 = closure_9();
  const obj2 = assetUrl(height[8]);
  const tmp3 = assetUrl;
  [tmp8, c4] = width(noop.useState("active" === currentState.currentState), 2);
  const items1 = [isAnimatedAsset];
  const effect = noop.useEffect(() => {
    if (isAnimatedAsset) {
      closure_0 = currentState.addEventListener("change", (event) => {
        closure_1_4("active" === event);
      });
      return () => {
        closure_0.remove();
      };
    }
  }, items1);
  const items2 = [assetUrl, width, height];
  const memo = noop.useMemo(() => {
    const size = { assetUrl, width, height };
    return AssetUtils.getScaledImageUrl(size);
  }, items2);
  const obj3 = { accessibilityLabel, style: null, children: null };
  const items3 = [tmp6.container, { height, width }, style];
  obj3.style = items3;
  if (isAnimatedAsset) {
    if (withAnimation) {
      const obj4 = { style: tmp6.video, source: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", poster: null, resizeMode: "cover", paused: null, muted: true };
      const obj5 = { uri: assetUrl };
      obj4.source = obj5;
      obj4.poster = memo;
      let tmp14 = !tmp8;
      if (tmp8) {
        tmp14 = flag;
      }
      if (!tmp14) {
        tmp14 = stateFromStores;
      }
      obj4.paused = tmp14;
      let tmp11Result = jsx(tmp3(tmp4[10]).VideoComponent, { style: tmp6.video, source: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", poster: null, resizeMode: "cover", paused: null, muted: true });
    }
    obj3.children = tmp11Result;
    return <tmp12 {...obj3} />;
  }
  tmp11Result = jsx(isAnimatedAsset(tmp4[11]), { source: { uri: memo }, style: tmp6.image });
  const obj6 = { source: { uri: memo }, style: tmp6.image };
  const tmp7 = width(noop.useState("active" === currentState.currentState), 2);
});