// discord_app/modules/user_profile/native/UserProfilePrivateInfoBanner.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let obj = { banner: null };
obj = {
  padding: ThemesDefault.space.PX_12,
  borderRadius: ThemesDefault.radii.lg,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_MUTED,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/user_profile/native/UserProfilePrivateInfoBanner.tsx");

export default function UserProfilePrivateInfoBanner(username) {
  const containerBackground = username.containerBackground;
  const items = [callback().banner];
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
}
