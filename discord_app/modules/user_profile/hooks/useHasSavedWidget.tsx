// discord_app/modules/user_profile/hooks/useHasSavedWidget.tsx
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useHasSavedWidget.tsx");

export function useHasSavedWidget(type) {
  _require = type;
  items = [AuthenticationStore, UserProfileStore];
  const items1 = [type];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const userProfile = UserProfileStore.getUserProfile(AuthenticationStore.getId());
      let widgets;
      if (userProfile != null) {
        widgets = userProfile.widgets;
      }
      if (widgets == null) {
        widgets = [];
      }
      return widgets.some((type) => type.type === type);
    },
    items1,
  );
}
