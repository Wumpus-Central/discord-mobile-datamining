// discord_app/modules/user_profile/hooks/native/useAddProfileWidget.tsx
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserProfileAnalyticsUtils from "../../UserProfileAnalyticsUtils.tsx";
import useOpenProfileSettingsDefault from "../../../profile_customization/useOpenProfileSettings.tsx";
import WidgetUtils from "../../WidgetUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

require = fn;
let closure_5 = fn(8825).TrackUserProfileEditActions;
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
    const result = obj2.trackUserProfileEditAction({
      userId: AuthenticationStore.getId(),
      action: constants.WIDGET_ADDED,
    });
    const obj3 = { userId: AuthenticationStore.getId(), action: constants.WIDGET_ADDED };
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (obj5.getCurrentNavigationRouteName() !== UserSettingsSections.PROFILE_CUSTOMIZATION) {
      closure_0();
    }
    obj5 = NavigationRouteUtils;
  }, items);
}
