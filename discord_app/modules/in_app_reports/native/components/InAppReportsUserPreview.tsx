// discord_app/modules/in_app_reports/native/components/InAppReportsUserPreview.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import hexToRgba from "../../../../utils/ColorUtils.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: null, title: null, userContainer: null, userProfileInfo: null };
createCacheKey = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { lineHeight: 16, marginBottom: 8 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, padding: 12 };
createCacheKey[4] = { marginLeft: 8 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, padding: 12 };
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUserPreview.tsx");

export default function UserPreview(user) {
  user = user.user;
  const tmp = callback2();
  let obj = hexToRgba;
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
  const intl = getSystemLocale.intl;
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  obj[3] = intl.string(getSystemLocale.t.Rsth7z).toUpperCase();
  const items = [callback(Text.Text, obj), ];
  obj1 = { style: items1, children: null };
  items1 = [tmp.userContainer, { borderColor: hexWithOpacityResult }];
  const str = intl.string(getSystemLocale.t.Rsth7z);
  const items2 = [callback(Button.Avatar, { size: Button.AvatarSizes.LARGE_48, user, guildId: "Array" }), ];
  const obj3 = { style: tmp.userProfileInfo, children: null };
  let tmp7Result = null != user.globalName;
  if (tmp7Result) {
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj4[2] = user.globalName;
    tmp7Result = tmp7(tmp2(4734).Text, obj4);
  }
  const items3 = [tmp7Result, callback(Text.Text, { color: "text-default", variant: "text-sm/normal", children: user.username })];
  obj3[1] = items3;
  items2[1] = closure_4(View, obj3);
  obj1[1] = items2;
  items[1] = closure_4(View, obj1);
  obj[1] = items;
  return closure_4(View, obj);
};