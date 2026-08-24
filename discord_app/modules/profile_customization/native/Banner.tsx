// discord_app/modules/profile_customization/native/Banner.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import int2hslRaw from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { BANNER_HEIGHT } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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