// === Module 8499: ProfileBanner ===

// Module 8499 (ProfileBanner)
import noopAll from "noop" /* 19 */;
import int2hslRaw from "int2hslRaw" /* 688 */;
import preloadDefault from "preload" /* 5458 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { BANNER_HEIGHT } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
noopAll;
let closure_6 = createCacheKey.createStyles({ root: { width: "100%" }, image: { width: "100%", height: "100%" } });
const result = require("set").fileFinishedImporting("modules/profile_customization/native/Banner.tsx");

export default function ProfileBanner(bannerHeight) {
  ({ bannerSource, bannerSafeArea } = bannerHeight);
  ({ style, backgroundColor } = bannerHeight);
  if (bannerSafeArea === undefined) {
    bannerSafeArea = 0;
  }
  bannerHeight = bannerHeight.bannerHeight;
  if (bannerHeight === undefined) {
    bannerHeight = BANNER_HEIGHT;
  }
  const tmp = callback();
  let obj = { backgroundColor: int2hslRaw.int2hex(backgroundColor), height: bannerHeight + bannerSafeArea };
  obj = { style: items, children: null };
  items = [tmp.root, obj, style];
  let tmp3Result = null;
  if (null != bannerSource) {
    obj = { style: null, source: null };
    obj[0] = tmp.image;
    obj[1] = bannerSource;
    tmp3Result = tmp3(preloadDefault, obj);
  }
  obj[1] = tmp3Result;
  return <View style={items}>{null}</View>;
};