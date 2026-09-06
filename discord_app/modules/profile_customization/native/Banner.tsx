// === Module 8254: Banner ===

// Module 8254 (Banner)
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import FastImageDefault from "FastImage" /* 5587 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const BANNER_HEIGHT = fn(1074).BANNER_HEIGHT;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ root: { width: "100%" }, image: { width: "100%", height: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/profile_customization/native/Banner.tsx");

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
  const tmp = closure_6();
  let obj = { backgroundColor: utils_ColorUtils.int2hex(backgroundColor), height: bannerHeight + bannerSafeArea };
  obj = { style: null, children: null };
  const items = [tmp.root, obj, style];
  obj.style = items;
  let tmp3Result = null;
  if (null != bannerSource) {
    obj = { style: tmp.image, source: bannerSource };
    tmp3Result = jsx(FastImageDefault, { style: tmp.image, source: bannerSource });
  }
  obj.children = tmp3Result;
  return <View style={null}>{null}</View>;
};