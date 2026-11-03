// === Module 16585: UserSettingsEditUserProfile ===

// Module 16585 (UserSettingsEditUserProfile)
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7446 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7471 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8882 */;
import UserProfileEditFormDefault from "UserProfileEditForm" /* 16586 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1385 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditUserProfile.tsx");

export default function UserSettingsEditUserProfile(arg0) {
  let tmp3 = useAnalyticsLocationsDefault;
  const tmp4 = stateFromStores;
  items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null != stateFromStores) {
      maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
    }
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    const obj2 = { value: tmp3(AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE).analyticsLocations, children: null };
    const obj3 = { currentUser: stateFromStores };
    const merged = Object.assign(arg0);
    obj2.children = jsx(UserProfileEditFormDefault, { currentUser: stateFromStores });
    tmp7 = jsx(tmp4(7446).AnalyticsLocationProvider, { value: tmp3(AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE).analyticsLocations, children: null });
    const tmpResult = UserProfileEditFormDefault;
  }
  return tmp7;
};