// === Module 11157: QuestDockRewardTile ===

// Module 11157 (QuestDockRewardTile)
import nativeDefault from "native" /* 587 */;
import AssetUtils from "AssetUtils" /* 9544 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;

require = fn;
get_ActivityIndicator = fn(17);
({ AppState: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_9 = createStyles.createStyles(() => {
  const obj = { container: { borderRadius: nativeDefault.radii.sm, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }, video: { overflow: "hidden", height: "100%", width: "100%" }, image: { height: "100%", width: "100%" } };
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDockRewardTile.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockRewardTile(arg0) {
  const cResult = isAnimatedAsset(576).c(32);
  ({ assetUrl, isAnimatedAsset } = arg0);
  ({ accessibilityLabel, height, width, style, paused, withAnimation } = arg0);
  if (cResult[0] !== withAnimation) {
    let isIOSResult = withAnimation;
    if (undefined === withAnimation) {
      isIOSResult = isAnimatedAsset(1381).isIOS();
      const tmpResult = isAnimatedAsset(1381);
    }
    cResult[0] = withAnimation;
    cResult[1] = isIOSResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class L {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
    cResult[2] = items;
    cResult[3] = L;
    let tmp7 = L;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = isAnimatedAsset(576);
  const stateFromStores = isAnimatedAsset(504).useStateFromStores(tmp6, tmp7);
  closure_9();
  const tmpResult3 = isAnimatedAsset(504);
  [r10055, importDefault] = noop.useState("active" === closure_5.currentState);
  if (cResult[4] !== isAnimatedAsset) {
    class U {
      constructor() {
        if (closure_0) {
          tmp = closure_1_5;
          str = "change";
          closure_0 = closure_1_5.addEventListener("change", () => { ... });
          return () => { ... };
        } else {
          return;
        }
      }
    }
    const items1 = [isAnimatedAsset];
    class L {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
    cResult[4] = isAnimatedAsset;
    cResult[5] = U;
    cResult[6] = items1;
    let tmp13 = items1;
  } else {
    class U {
      constructor() {
        if (closure_0) {
          tmp = closure_1_5;
          str = "change";
          closure_0 = closure_1_5.addEventListener("change", () => { ... });
          return () => { ... };
        } else {
          return;
        }
      }
    }
    tmp13 = cResult[6];
  }
  const effect = noop.useEffect(U, tmp13);
  if (cResult[7] === assetUrl) {
    class U {
      constructor() {
        if (closure_0) {
          tmp = closure_1_5;
          str = "change";
          closure_0 = closure_1_5.addEventListener("change", () => { ... });
          return () => { ... };
        } else {
          return;
        }
      }
    }
  }
  const tmp11 = _slicedToArray(noop.useState("active" === closure_5.currentState), 2);
  const scaledImageUrl = isAnimatedAsset(9544).getScaledImageUrl({ assetUrl, width, height });
  cResult[7] = assetUrl;
  cResult[8] = height;
  cResult[9] = width;
  cResult[10] = scaledImageUrl;
  const tmpResult4 = isAnimatedAsset(9544);
}) : (function QuestDockRewardTile(assetUrl) {
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
    withAnimation = assetUrl(height[9]).isIOS();
    const obj = assetUrl(height[9]);
  }
  noop = undefined;
  const items = [AccessibilityStore];
  const stateFromStores = assetUrl(height[10]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp6 = closure_9();
  const obj2 = assetUrl(height[10]);
  const tmp3 = assetUrl;
  [tmp8, c4] = width(noop.useState("active" === closure_5.currentState), 2);
  const items1 = [isAnimatedAsset];
  const effect = noop.useEffect(() => {
    if (isAnimatedAsset) {
      closure_0 = closure_1_5.addEventListener("change", (event) => {
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
      let tmp11Result = jsx(tmp3(tmp4[12]).VideoComponent, { style: tmp6.video, source: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", poster: null, resizeMode: "cover", paused: null, muted: true });
    }
    obj3.children = tmp11Result;
    return <tmp12 {...obj3} />;
  }
  tmp11Result = jsx(isAnimatedAsset(tmp4[13]), { source: { uri: memo }, style: tmp6.image });
  const obj6 = { source: { uri: memo }, style: tmp6.image };
  const tmp7 = width(noop.useState("active" === closure_5.currentState), 2);
}));