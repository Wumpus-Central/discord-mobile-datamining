// === Module 14801: AccountAgeGroupSetting ===

// Module 14801 (AccountAgeGroupSetting)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import TableRow from "TableRow" /* 5686 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14768 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 14802 */;
import TinyBroncoLazy from "TinyBroncoLazy" /* 14803 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 14804 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4636 */;
import SettingBuilders from "SettingBuilders" /* 11601 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14805 */;
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
    const shouldShowAgeNotice = TinyBroncoLazy.useShouldShowAgeNotice();
    obj = { style: tmp.trailing, children: null };
    let tmp8 = shouldShowAgeNotice;
    if (shouldShowAgeNotice) {
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
obj1.usePreNavigationAction = DismissibleBadgeUtils.createDismissibleBadgePreNavigationAction(dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS, TinyBroncoLazy.useShouldShowAgeNotice);
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