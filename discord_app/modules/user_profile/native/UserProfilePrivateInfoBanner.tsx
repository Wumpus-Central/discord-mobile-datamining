// === Module 13072: UserProfilePrivateInfoBanner ===

// Module 13072 (UserProfilePrivateInfoBanner)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { banner: null };
obj = { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.banner = obj;
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrivateInfoBanner.tsx");

export default function UserProfilePrivateInfoBanner(username) {
  const containerBackground = username.containerBackground;
  const items = [closure_4().banner, ];
  let tmp3 = null != containerBackground;
  if (tmp3) {
    let obj = { backgroundColor: containerBackground };
    tmp3 = obj;
  }
  obj = { style: items, children: null };
  items[1] = tmp3;
  obj = { variant: "text-sm/normal", children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.P8ij6Z, { username: username.username });
  obj.children = jsx(Text_Text.Text, { variant: "text-sm/normal", children: null });
  return <View variant="text-sm/normal">{null}</View>;
};