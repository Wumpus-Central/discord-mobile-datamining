// === Module 15824: useAddProfileWidget ===

// Module 15824 (useAddProfileWidget)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5492 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8546 */;
import useOpenProfileSettingsDefault from "useOpenProfileSettings" /* 10034 */;
import WidgetUtils from "WidgetUtils" /* 12090 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
let closure_5 = fn(8479).TrackUserProfileEditActions;
const UserSettingsSections = fn(1072).UserSettingsSections;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useAddProfileWidget.tsx");

export default function useAddProfileWidget() {
  const tmp = useOpenProfileSettingsDefault({ initialTab: "board" });
  closure_0 = tmp;
  items = [tmp];
  return noop.useCallback((getProfileEditAnalyticsOptions) => {
    WidgetUtils.addWidgetToPending(getProfileEditAnalyticsOptions);
    const obj2 = UserProfileAnalyticsUtils;
    const merged = Object.assign(getProfileEditAnalyticsOptions.getProfileEditAnalyticsOptions());
    const result = obj2.trackUserProfileEditAction({ userId: AuthenticationStore.getId(), action: constants.WIDGET_ADDED });
    const obj3 = { userId: AuthenticationStore.getId(), action: constants.WIDGET_ADDED };
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (obj5.getCurrentNavigationRouteName() !== UserSettingsSections.PROFILE_CUSTOMIZATION) {
      closure_0();
    }
    obj5 = NavigationRouteUtils;
  }, items);
};