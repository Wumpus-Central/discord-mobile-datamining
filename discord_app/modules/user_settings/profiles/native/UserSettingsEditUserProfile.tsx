// discord_app/modules/user_settings/profiles/native/UserSettingsEditUserProfile.tsx
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import maybeFetchUserProfileDefault from "../../../user_profile/maybeFetchUserProfile.tsx";
import UserProfileEditFormDefault from "../../../user_profile/native/UserProfileEditForm.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditUserProfile.tsx");

export default function UserSettingsEditUserProfile(arg0) {
  let obj = stateFromStores(504);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null != stateFromStores) {
      maybeFetchUserProfileDefault(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
    }
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    obj = { value: tmp3(AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE).analyticsLocations, children: null };
    obj = { currentUser: stateFromStores };
    const merged = Object.assign(arg0);
    obj.children = jsx(UserProfileEditFormDefault, { currentUser: stateFromStores });
    tmp7 = jsx(stateFromStores(7162).AnalyticsLocationProvider, { currentUser: stateFromStores });
    const tmpResult = UserProfileEditFormDefault;
  }
  return tmp7;
}
