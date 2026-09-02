// === Module 14464: UserSettingsEditUserProfile ===

// Module 14464 (UserSettingsEditUserProfile)
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5981 */;
import EditUserProfileBannerDefault from "EditUserProfileBanner" /* 14465 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditUserProfile.tsx");

export default function UserSettingsEditUserProfile(arg0) {
  let obj = stateFromStores(586);
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null != stateFromStores) {
      closure_1_1(closure_1_2[6])(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
      const tmp3 = closure_1_1(closure_1_2[6]);
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
    tmp7 = jsx(stateFromStores(5961).AnalyticsLocationProvider, { currentUser: null });
    const tmpResult = EditUserProfileBannerDefault;
  }
  return tmp7;
};