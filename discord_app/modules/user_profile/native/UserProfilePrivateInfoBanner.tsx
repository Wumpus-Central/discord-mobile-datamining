// discord_app/modules/user_profile/native/UserProfilePrivateInfoBanner.tsx
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let obj = { banner: null };
obj = { padding: require("Themes").space.PX_12, borderRadius: require("Themes").radii.lg, borderWidth: 1, borderColor: require("Themes").colors.BORDER_MUTED, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/user_profile/native/UserProfilePrivateInfoBanner.tsx");

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
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.format(require(1236) /* getSystemLocale */.t.P8ij6Z, { username: username.username });
  obj[1] = jsx(require(4189) /* Text */.Text, { variant: "text-sm/normal", children: null });
  return <View variant="text-sm/normal">{null}</View>;
};