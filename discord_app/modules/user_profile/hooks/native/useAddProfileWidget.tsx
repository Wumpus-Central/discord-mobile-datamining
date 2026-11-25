// === Module 14962: useAddProfileWidget ===

// Module 14962 (useAddProfileWidget)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5188 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 6351 */;
import useOpenProfileSettingsDefault from "useOpenProfileSettings" /* 9394 */;
import WidgetUtils from "WidgetUtils" /* 14518 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const Constants = fn(6106);
({ TrackUserProfileEditActions: hasOwnProperty, UserProfileSections: closure_6 } = Constants);
const UserSettingsSections = fn(1071).UserSettingsSections;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useAddProfileWidget.tsx");

export default function useAddProfileWidget() {
  const tmp = useOpenProfileSettingsDefault({ initialTab: constants2.WIDGETS });
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