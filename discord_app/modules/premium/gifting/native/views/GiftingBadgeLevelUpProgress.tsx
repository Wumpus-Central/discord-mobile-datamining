// discord_app/modules/premium/gifting/native/views/GiftingBadgeLevelUpProgress.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { getSingleRequirementThreshold as closure_4 } from "map";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { messagesProxy } from "../../GiftingBadge.messages.js";
import { GiftingBadgeIcon } from "GiftingBadgeIcon.tsx";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, barRow: null, progressBarTrack: null, progressBarFill: null, labels: null };
createCacheKey = { gap: require("Themes").space.PX_4, width: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
let obj1 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
createCacheKey[2] = { flex: 1, height: 6, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
let obj2 = { flex: 1, height: 6, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
createCacheKey[3] = { height: 6, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[4] = { flexDirection: "row", justifyContent: "flex-end" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj3 = { height: 6, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
const result = require("map").fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeLevelUpProgress.tsx");

export default function GiftingBadgeLevelUpProgress(style) {
  let currentTier;
  let newTier;
  let progress;
  ({ progress, currentTier, newTier } = style);
  const tmp = createCacheKey();
  const tmp2 = callback(newTier);
  let num = 100;
  if (tmp2 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(progress / tmp2 * 100, 0), 100);
  }
  let obj = { style: items, children: null };
  items = [tmp.container, style.style];
  obj = { style: tmp.barRow, children: null };
  let simple_icon_url;
  if (currentTier != null) {
    simple_icon_url = currentTier.simple_icon_url;
  }
  let tmp7 = null != simple_icon_url;
  if (tmp7) {
    obj = { icon: null, size: 24 };
    obj[0] = currentTier.simple_icon_url;
    tmp7 = callback2(GiftingBadgeIcon, obj);
  }
  const items1 = [tmp7, , ];
  const obj1 = { style: tmp.progressBarTrack, children: null };
  const obj2 = { style: null };
  const items2 = [tmp.progressBarFill, { width: "" + num + "%" }];
  obj2[0] = items2;
  obj1[1] = callback2(View, obj2);
  items1[1] = callback2(View, obj1);
  let tmp11Result = null != newTier.simple_icon_url;
  if (tmp11Result) {
    const obj4 = { icon: null, size: 24 };
    obj4[0] = newTier.simple_icon_url;
    tmp11Result = tmp11(GiftingBadgeIcon, obj4);
  }
  items1[2] = tmp11Result;
  obj[1] = items1;
  const items3 = [closure_6(View, obj), ];
  const obj5 = { style: tmp.labels, children: null };
  const obj6 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj6[2] = intl.format(messagesProxy.iIpfQe, { count: progress, threshold: tmp2 });
  obj5[1] = callback2(Text /* Text */.Text, obj6);
  items3[1] = callback2(View, obj5);
  obj[1] = items3;
  return closure_6(View, obj);
};