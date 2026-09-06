// discord_app/modules/quests/native/QuestDockRewardTile.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AssetUtils from "../lib/AssetUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ AppState: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles(() => {
  let obj = { container: null, video: null, image: null };
  obj = {
    borderRadius: nativeDefault.radii.sm,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  };
  obj.container = obj;
  obj.video = { overflow: "hidden", height: "100%", width: "100%" };
  obj.image = { height: "100%", width: "100%" };
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
    let obj = assetUrl(height[7]);
    withAnimation = obj.isIOS();
  }
  noop = undefined;
  let obj1 = assetUrl(height[8]);
  const items = [AccessibilityStore];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp6 = closure_9();
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
  obj = { accessibilityLabel, style: null, children: null };
  const items3 = [tmp6.container, { height, width }, style];
  obj.style = items3;
  if (isAnimatedAsset) {
    if (withAnimation) {
      obj = {
        style: tmp6.video,
        source: null,
        disableFocus: true,
        preventsDisplaySleepDuringVideoPlayback: false,
        importantForAccessibility: "no-hide-descendants",
        poster: null,
        resizeMode: "cover",
        paused: null,
        muted: true,
      };
      obj1 = { uri: assetUrl };
      obj.source = obj1;
      obj.poster = memo;
      let tmp14 = !tmp8;
      if (tmp8) {
        tmp14 = flag;
      }
      if (!tmp14) {
        tmp14 = stateFromStores;
      }
      obj.paused = tmp14;
      let tmp11Result = tmp11(assetUrl(tmp4[10]).VideoComponent, obj);
    }
    obj.children = tmp11Result;
    return tmp11(tmp12, obj);
  }
  tmp11Result = tmp11(isAnimatedAsset(tmp4[11]), { source: { uri: memo }, style: tmp6.image });
});
