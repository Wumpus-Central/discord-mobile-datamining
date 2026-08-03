import "noop";
import { View } from "get ActivityIndicator";
import { BANNER_HEIGHT } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_6 = createCacheKey.createStyles({ root: { width: "100%" }, image: { width: "100%", height: "100%" } });
const result = require("ME").fileFinishedImporting("modules/profile_customization/native/Banner.tsx");

export default function ProfileBanner(bannerHeight) {
  let backgroundColor;
  let bannerSafeArea;
  let bannerSource;
  let style;
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
  let obj = { backgroundColor: null, height: null };
  obj[0] = require(688) /* int2hslRaw */.int2hex(backgroundColor);
  obj[1] = bannerHeight + bannerSafeArea;
  obj = { style: items, children: null };
  items = [tmp.root, obj, style];
  let tmp3Result = null;
  if (null != bannerSource) {
    obj = { style: null, source: null };
    obj[0] = tmp.image;
    obj[1] = bannerSource;
    tmp3Result = tmp3(importDefault(5145), obj);
  }
  obj[1] = tmp3Result;
  return <View style={items}>{null}</View>;
};