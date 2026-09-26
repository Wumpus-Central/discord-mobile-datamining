// === Module 14274: AccountAgeGroupSetting ===

// Module 14274 (AccountAgeGroupSetting)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import TableRow from "TableRow" /* 5917 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14244 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 14275 */;
import TinyBroncoLazy from "TinyBroncoLazy" /* 14276 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 14283 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14284 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { trailing: { flexDirection: "row", alignItems: "center", flexShrink: 1 }, badge: { marginLeft: 0, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND, marginRight: nativeDefault.space.PX_4, marginBottom: 0 } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.piqs0o);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountAgeGroupTrailing() {
    const tmp = closure_6();
    const ageGroupValueLabel = useAgeGroupPresentation.useAgeGroupValueLabel();
    const shouldShowAgeNotice = TinyBroncoLazy.useShouldShowAgeNotice();
    const obj3 = { style: tmp.trailing, children: null };
    let tmp8 = shouldShowAgeNotice;
    if (shouldShowAgeNotice) {
      const obj4 = { dismissibleContent: dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS, containerStyle: tmp.badge, noGradient: true };
      tmp8 = React4(DismissiblePremiumNewBadgeDefault, obj4);
    }
    const items = [tmp8, React4(TableRow.TableRow.TrailingText, { text: ageGroupValueLabel })];
    obj3.children = items;
    return hasOwnProperty(View, obj3);
  },
  usePreNavigationAction: null,
  usePredicate: null,
  screen: null
};
obj3.usePreNavigationAction = DismissibleBadgeUtils.createDismissibleBadgePreNavigationAction(dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS, TinyBroncoLazy.useShouldShowAgeNotice);
obj3.usePredicate = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled;
obj3.screen = {
  route: Constants.UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require("SettingsAgeGroupScreen").default;
  }
};
const route = SettingBuilders.createRoute(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupSetting.tsx");

export default route;