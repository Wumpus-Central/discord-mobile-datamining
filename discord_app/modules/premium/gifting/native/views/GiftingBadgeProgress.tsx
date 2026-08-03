// === Module 9985: GiftingBadgeProgressBar ===

// Module 9985 (GiftingBadgeProgressBar)
import "noop";
import { View } from "get ActivityIndicator";
import { getSingleRequirementThreshold as closure_4 } from "map";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function GiftingBadgeProgressBar(percent) {
  const tmp = createCacheKey();
  let obj = { style: tmp.progressBarTrack, children: null };
  obj = { style: null };
  const items = [tmp.progressBarFill, ];
  obj = { width: "" + Math.min(Math.max(percent.percent, 0), 100) + "%" };
  items[1] = obj;
  obj[0] = items;
  obj[1] = callback2(View, obj);
  return callback2(View, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, content: null, progressBarTrack: null, progressBarFill: null, labels: null };
createCacheKey = { flexDirection: "row", alignItems: "center", padding: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, paddingHorizontal: require("Themes").space.PX_8, gap: require("Themes").space.PX_4 };
let obj1 = { flex: 1, paddingHorizontal: require("Themes").space.PX_8, gap: require("Themes").space.PX_4 };
createCacheKey[2] = { height: 6, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
let obj2 = { height: 6, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
createCacheKey[3] = { height: 6, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
let obj3 = { height: 6, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[4] = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: require("Themes").space.PX_16 };
const result = require("map").fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgress.tsx");

export default function GiftingBadgeProgress(title) {
  let currentTier;
  let iconSize;
  let nextTier;
  let progress;
  ({ progress, currentTier, nextTier, iconSize } = title);
  if (iconSize === undefined) {
    iconSize = 24;
  }
  title = title.title;
  const tmp = createCacheKey();
  const tmp2 = callback(nextTier);
  let tmp3 = null != nextTier;
  if (tmp3) {
    tmp3 = tmp2 > 0;
  }
  let num2 = 100;
  if (tmp3) {
    const _Math = Math;
    const _Math2 = Math;
    num2 = Math.min(Math.max(progress / tmp2 * 100, 0), 100);
  }
  let obj = { style: tmp.container, children: null };
  let simple_icon_url;
  if (currentTier != null) {
    simple_icon_url = currentTier.simple_icon_url;
  }
  let tmp8 = null != simple_icon_url;
  if (tmp8) {
    obj = { icon: null, size: null };
    obj[0] = currentTier.simple_icon_url;
    obj[1] = iconSize;
    tmp8 = callback2(importDefault(9865), obj);
  }
  const items = [tmp8, , ];
  obj = { style: tmp.content, children: null };
  let tmp12 = null != title;
  if (tmp12) {
    const obj1 = { variant: "text-md/semibold", children: null };
    obj1[1] = title;
    tmp12 = callback2(require(4251) /* Text */.Text, obj1);
  }
  const items1 = [tmp12, callback2(GiftingBadgeProgressBar, { percent: num2 }), ];
  const obj2 = { style: tmp.labels, children: null };
  let tmp16Result = null != nextTier;
  if (tmp16Result) {
    const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    const obj4 = { count: null, threshold: null };
    obj4[0] = progress;
    obj4[1] = tmp2;
    obj3[2] = intl.format(importDefault(2351).iIpfQe, obj4);
    tmp16Result = tmp16(require(4251) /* Text */.Text, obj3);
  }
  obj2[1] = tmp16Result;
  items1[2] = callback2(View, obj2);
  obj[1] = items1;
  items[1] = closure_6(View, obj);
  let simple_icon_url1;
  if (nextTier != null) {
    simple_icon_url1 = nextTier.simple_icon_url;
  }
  tmp16Result = null != simple_icon_url1;
  if (tmp16Result) {
    const obj5 = { icon: null, size: null };
    obj5[0] = nextTier.simple_icon_url;
    obj5[1] = iconSize;
    tmp16Result = tmp16(importDefault(9865), obj5);
  }
  items[2] = tmp16Result;
  obj[1] = items;
  return closure_6(View, obj);
};