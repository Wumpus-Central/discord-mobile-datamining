// discord_app/modules/user_settings/defs/native/AccountAgeGroupSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import DismissibleContent from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import TableRowInner from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import useIsTinyBroncoSettingsEnabled from "../../../tiny_bronco/native/TinyBroncoSettingsPredicate.tsx";
import AgeGroupState from "../../../age_assurance/useAgeGroupPresentation.tsx";
import isTinyBroncoAnnouncementCountry from "../../../tiny_bronco/TinyBroncoAccountStatusVisibility.tsx";
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import useAlwaysShow from "DismissibleBadgeUtils.tsx";
import { SettingsAgeGroupHeader } from "../../age_group/native/SettingsAgeGroupScreen.tsx";

const View = get_ActivityIndicator.View;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { trailing: { flexDirection: "row", alignItems: "center", flexShrink: 1 }, badge: null };
obj = { marginLeft: 0, marginRight: ThemesDefault.space.PX_4 };
obj[1] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const obj1 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.piqs0o);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountAgeGroupTrailing() {
    const tmp = callback2();
    let obj = AgeGroupState;
    const ageGroupValueLabel = obj.useAgeGroupValueLabel();
    const shouldShowTinyBroncoAccountStatus = isTinyBroncoAnnouncementCountry.useShouldShowTinyBroncoAccountStatus();
    obj = { style: tmp.trailing, children: null };
    let tmp8 = shouldShowTinyBroncoAccountStatus;
    if (shouldShowTinyBroncoAccountStatus) {
      obj = { dismissibleContent: null, containerStyle: null, noGradient: true };
      obj[0] = tmp2(1943).DismissibleContent.TINY_BRONCO_SETTINGS;
      obj[1] = tmp.badge;
      tmp8 = callback(DismissiblePremiumNewBadgeDefault, obj);
      const tmp11 = DismissiblePremiumNewBadgeDefault;
    }
    const items = [tmp8, callback(TableRowInner.TableRow.TrailingText, { text: ageGroupValueLabel })];
    obj[1] = items;
    return closure_5(View, obj);
  },
  usePreNavigationAction: null,
  usePredicate: null,
  screen: null,
};
obj1[3] = useAlwaysShow.createDismissibleBadgePreNavigationAction(
  DismissibleContent.DismissibleContent.TINY_BRONCO_SETTINGS,
  isTinyBroncoAnnouncementCountry.useShouldShowTinyBroncoAccountStatus,
);
obj1[4] = useIsTinyBroncoSettingsEnabled.useIsTinyBroncoSettingsEnabled;
obj1[5] = {
  route: ME.UserSettingsSections.AGE_GROUP,
  getComponent() {
    return SettingsAgeGroupHeader /* SettingsAgeGroupHeader */.default;
  },
};
const route = createToggle.createRoute(obj1);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupSetting.tsx");

export default route;
