// === Module 14001: UserSettingsEditUserProfile ===

// Module 14001 (UserSettingsEditUserProfile)
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7159 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8417 */;
import EditUserProfileBannerDefault from "EditUserProfileBanner" /* 14002 */;
import noop from "noop" /* 19 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditUserProfile.tsx");

export default function UserSettingsEditUserProfile(arg0) {
  let obj = stateFromStores(589);
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null != stateFromStores) {
      maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
    }
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    obj = { value: null, children: null };
    obj[0] = tmp3(QUICK_SWITCHERDefault.USER_SETTINGS_USER_PROFILE).analyticsLocations;
    obj = { currentUser: null };
    obj[0] = stateFromStores;
    const merged = Object.assign(arg0);
    obj[1] = jsx(EditUserProfileBannerDefault, { currentUser: null });
    tmp7 = jsx(stateFromStores(7139).AnalyticsLocationProvider, { currentUser: null });
    const tmpResult = EditUserProfileBannerDefault;
  }
  return tmp7;
};