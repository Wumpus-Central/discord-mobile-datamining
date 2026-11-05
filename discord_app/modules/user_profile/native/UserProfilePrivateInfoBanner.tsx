// === Module 15219: UserProfilePrivateInfoBanner ===

// Module 15219 (UserProfilePrivateInfoBanner)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5763 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { banner: { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrivateInfoBanner.tsx");

export default function UserProfilePrivateInfoBanner(username) {
  const containerBackground = username.containerBackground;
  items = [closure_4().banner, ];
  let tmp3 = null != containerBackground;
  if (tmp3) {
    const obj = { backgroundColor: containerBackground };
    tmp3 = obj;
  }
  const obj2 = { style: items, children: null };
  items[1] = tmp3;
  const obj3 = { variant: "body-sm/normal", children: null };
  const intl = util.intl;
  obj3.children = intl.format(util.t.P8ij6Z, { username: username.username });
  obj2.children = jsx(Text_Text.Text, { variant: "body-sm/normal", children: null });
  return <View style={items}>{null}</View>;
};