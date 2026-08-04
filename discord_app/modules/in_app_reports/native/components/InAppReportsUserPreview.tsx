// discord_app/modules/in_app_reports/native/components/InAppReportsUserPreview.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: null, title: null, userContainer: null, userProfileInfo: null };
createCacheKey = { color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { lineHeight: 16, marginBottom: 8 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: require("Themes").radii.sm, borderWidth: 1, padding: 12 };
createCacheKey[4] = { marginLeft: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: require("Themes").radii.sm, borderWidth: 1, padding: 12 };
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUserPreview.tsx");

export default function UserPreview(user) {
  user = user.user;
  const tmp = createCacheKey();
  let obj = require(4037) /* hexToRgba */;
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t.Rsth7z).toUpperCase();
  const items = [callback(require(4189) /* Text */.Text, obj), ];
  const obj1 = { style: items1, children: null };
  items1 = [tmp.userContainer, { borderColor: hexWithOpacityResult }];
  const obj2 = { size: null, user: null, guildId: "Array" };
  obj2[0] = require(1297) /* Button */.AvatarSizes.LARGE_48;
  obj2[1] = user;
  const items2 = [callback(require(1297) /* Button */.Avatar, obj2), ];
  const obj3 = { style: tmp.userProfileInfo, children: null };
  let tmp7Result = null != user.globalName;
  if (tmp7Result) {
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj4[2] = user.globalName;
    tmp7Result = tmp7(tmp2(4189).Text, obj4);
  }
  const items3 = [tmp7Result, callback(require(4189) /* Text */.Text, { color: "text-default", variant: "text-sm/normal", children: user.username })];
  obj3[1] = items3;
  items2[1] = closure_4(View, obj3);
  obj1[1] = items2;
  items[1] = closure_4(View, obj1);
  obj[1] = items;
  return closure_4(View, obj);
};