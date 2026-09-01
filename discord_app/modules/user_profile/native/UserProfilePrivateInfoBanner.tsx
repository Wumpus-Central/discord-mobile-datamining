// === Module 12506: UserProfilePrivateInfoBanner ===

// Module 12506 (UserProfilePrivateInfoBanner)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4474 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let obj = { banner: null };
obj = { padding: ThemesDefault.space.PX_12, borderRadius: ThemesDefault.radii.lg, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/user_profile/native/UserProfilePrivateInfoBanner.tsx");

export default function UserProfilePrivateInfoBanner(username) {
  const containerBackground = username.containerBackground;
  const items = [callback().banner, ];
  let tmp3 = null != containerBackground;
  if (tmp3) {
    let obj = { backgroundColor: null };
    obj[0] = containerBackground;
    tmp3 = obj;
  }
  obj = { style: items, children: null };
  items[1] = tmp3;
  obj = { variant: "text-sm/normal", children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.format(getSystemLocale.t.P8ij6Z, { username: username.username });
  obj[1] = jsx(Text.Text, { variant: "text-sm/normal", children: null });
  return <View variant="text-sm/normal">{null}</View>;
};