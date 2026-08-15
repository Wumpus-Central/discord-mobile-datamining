// discord_app/modules/user_settings/account/native/UserSettingsAccountUnverifiedHeader.tsx
import "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { EmailVerificationModalActionCreators } from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

let c4;
let c5;
const require = arg1;
function handleOpenEmailVerification() {
  EmailVerificationModalActionCreators.open();
}
function getBannerText(currentUser) {
  if (null == currentUser) {
    return null;
  } else if (null == currentUser.email) {
    let obj = { title: null, button: null };
    const intl3 = getSystemLocale.intl;
    obj[0] = intl3.string(getSystemLocale.t["/yqgqs"]);
    const intl4 = getSystemLocale.intl;
    obj[1] = intl4.string(getSystemLocale.t.ydw5nX);
    let tmp3 = obj;
  } else {
    tmp3 = null;
    if (!currentUser.verified) {
      obj = { title: null, button: null };
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(getSystemLocale.t["3sWbf3"]);
      const intl2 = getSystemLocale.intl;
      obj[1] = intl2.string(getSystemLocale.t["13ofGu"]);
      tmp3 = obj;
    }
  }
}
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { accountWarning: null, accountWarningText: null, accountWarningButton: null };
createCacheKey = { backgroundColor: require("Themes").unsafe_rawColors.RED_400, height: 36, alignItems: "center", alignSelf: "stretch", flexDirection: "row", paddingHorizontal: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, lineHeight: 16 };
createCacheKey[2] = { borderWidth: 1, borderColor: require("Themes").colors.WHITE, borderRadius: require("Themes").radii.xs, paddingHorizontal: 8, paddingVertical: 4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderWidth: 1, borderColor: require("Themes").colors.WHITE, borderRadius: require("Themes").radii.xs, paddingHorizontal: 8, paddingVertical: 4 };
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountUnverifiedHeader.tsx");

export default function UserSettingsAccountUnverifiedHeader() {
  const tmp = createCacheKey();
  let obj = initialize;
  const items = [mergeGuildAvatar];
  const tmp4 = getBannerText(obj.useStateFromStores(items, () => currentUser.getCurrentUser()));
  let tmp5 = null;
  if (null != tmp4) {
    obj = { accessibilityRole: "button", style: null, onPress: null, children: null };
    obj[1] = tmp.accountWarning;
    obj[2] = handleOpenEmailVerification;
    obj = { style: null, variant: "text-xs/bold", color: "text-overlay-light", children: null };
    obj[0] = tmp.accountWarningText;
    obj[3] = tmp4.title;
    const items1 = [callback(tmp2(4734).Text, obj), ];
    const obj1 = { style: null, variant: "text-xs/medium", color: "text-overlay-light", children: null };
    obj1[0] = tmp.accountWarningButton;
    obj1[3] = tmp4.button;
    items1[1] = callback(tmp2(4734).Text, obj1);
    obj[3] = items1;
    tmp5 = callback2(tmp2(5433).PressableOpacity, obj);
  }
  return tmp5;
};
export { getBannerText };