// discord_app/modules/user_settings/defs/native/AccountAgeGroupSetting.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import TinyBroncoSettingsPredicate from "../../../tiny_bronco/native/TinyBroncoSettingsPredicate.tsx";
import useAgeGroupPresentation from "../../../age_assurance/useAgeGroupPresentation.tsx";
import TinyBroncoAccountStatusVisibility from "../../../tiny_bronco/TinyBroncoAccountStatusVisibility.tsx";
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import DismissibleBadgeUtils from "DismissibleBadgeUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { trailing: { flexDirection: "row", alignItems: "center", flexShrink: 1 }, badge: null };
obj = { marginLeft: 0, marginRight: nativeDefault.space.PX_4 };
obj.badge = obj;
let closure_6 = createStyles.createStyles(obj);
const obj1 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.piqs0o);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountAgeGroupTrailing() {
    const tmp = closure_6();
    let obj = useAgeGroupPresentation;
    const ageGroupValueLabel = obj.useAgeGroupValueLabel();
    const shouldShowTinyBroncoAccountStatus = TinyBroncoAccountStatusVisibility.useShouldShowTinyBroncoAccountStatus();
    obj = { style: tmp.trailing, children: null };
    let tmp8 = shouldShowTinyBroncoAccountStatus;
    if (shouldShowTinyBroncoAccountStatus) {
      obj = {
        dismissibleContent: tmp2(1943).DismissibleContent.TINY_BRONCO_SETTINGS,
        containerStyle: tmp.badge,
        noGradient: true,
      };
      tmp8 = React4(DismissiblePremiumNewBadgeDefault, obj);
    }
    const items = [tmp8, React4(TableRow.TableRow.TrailingText, { text: ageGroupValueLabel })];
    obj.children = items;
    return hasOwnProperty(View, obj);
  },
  usePreNavigationAction: null,
  usePredicate: null,
  screen: null,
};
obj1.usePreNavigationAction = DismissibleBadgeUtils.createDismissibleBadgePreNavigationAction(
  dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS,
  TinyBroncoAccountStatusVisibility.useShouldShowTinyBroncoAccountStatus,
);
obj1.usePredicate = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled;
obj1.screen = {
  route: Constants.UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require("SettingsAgeGroupScreen").default;
  },
};
const route = SettingBuilders.createRoute(obj1);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupSetting.tsx");

export default route;
