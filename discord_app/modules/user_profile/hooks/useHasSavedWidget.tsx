// === Module 12140: useHasSavedWidget ===

// Module 12140 (useHasSavedWidget)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserProfileStore from "UserProfileStore" /* 7352 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useHasSavedWidget.tsx");

export function useHasSavedWidget(type) {
  _require = type;
  items = [AuthenticationStore, UserProfileStore];
  const items1 = [type];
  return require("initialize").useStateFromStores(items, () => {
    const userProfile = UserProfileStore.getUserProfile(AuthenticationStore.getId());
    let widgets;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
    return widgets.some((type) => type.type === type);
  }, items1);
}