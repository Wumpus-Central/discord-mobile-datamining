// === Module 14715: AccountAgeGroupSetting ===

// Module 14715 (AccountAgeGroupSetting)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import TableRow from "TableRow" /* 5605 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14682 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 14716 */;
import TinyBroncoAccountStatusVisibility from "TinyBroncoAccountStatusVisibility" /* 14717 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 14718 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14719 */;
import size from "module_2" /* 2 */;

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
      obj = { dismissibleContent: dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS, containerStyle: tmp.badge, noGradient: true };
      tmp8 = React4(DismissiblePremiumNewBadgeDefault, obj);
    }
    const items = [tmp8, React4(TableRow.TableRow.TrailingText, { text: ageGroupValueLabel })];
    obj.children = items;
    return hasOwnProperty(View, obj);
  },
  usePreNavigationAction: null,
  usePredicate: null,
  screen: null
};
obj1.usePreNavigationAction = DismissibleBadgeUtils.createDismissibleBadgePreNavigationAction(dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS, TinyBroncoAccountStatusVisibility.useShouldShowTinyBroncoAccountStatus);
obj1.usePredicate = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled;
obj1.screen = {
  route: Constants.UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require("SettingsAgeGroupScreen").default;
  }
};
const route = SettingBuilders.createRoute(obj1);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupSetting.tsx");

export default route;