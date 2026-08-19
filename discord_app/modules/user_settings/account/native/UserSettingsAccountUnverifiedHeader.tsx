// === Module 8624: handleOpenEmailVerification ===

// Module 8624 (handleOpenEmailVerification)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import PressableBase from "PressableBase" /* 5433 */;
import _modDef8561 from "module_8561" /* 8561 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function handleOpenEmailVerification() {
  _modDef8561.open();
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
  } else if (!currentUser.verified) {
    obj = { title: null, button: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["3sWbf3"]);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t["13ofGu"]);
  }
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.unsafe_rawColors.RED_400, height: 36, alignItems: "center", alignSelf: "stretch", flexDirection: "row", paddingHorizontal: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, lineHeight: 16 };
createCacheKey[2] = { borderWidth: 1, borderColor: ThemesDefault.colors.WHITE, borderRadius: ThemesDefault.radii.xs, paddingHorizontal: 8, paddingVertical: 4 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountUnverifiedHeader.tsx");

export default function UserSettingsAccountUnverifiedHeader() {
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_3];
  const tmp4 = getBannerText(obj.useStateFromStores(items, () => currentUser.getCurrentUser()));
  let tmp5 = null;
  if (null != tmp4) {
    obj = { accessibilityRole: "button", style: null, onPress: null, children: null };
    obj[1] = tmp.accountWarning;
    obj[2] = handleOpenEmailVerification;
    obj = { style: null, variant: "text-xs/bold", color: "text-overlay-light", children: null };
    obj[0] = tmp.accountWarningText;
    obj[3] = tmp4.title;
    const items1 = [callback(Text.Text, obj), ];
    obj1 = { style: null, variant: "text-xs/medium", color: "text-overlay-light", children: null };
    obj1[0] = tmp.accountWarningButton;
    obj1[3] = tmp4.button;
    items1[1] = callback(Text.Text, obj1);
    obj[3] = items1;
    tmp5 = callback2(PressableBase.PressableOpacity, obj);
  }
  return tmp5;
};
export { getBannerText };