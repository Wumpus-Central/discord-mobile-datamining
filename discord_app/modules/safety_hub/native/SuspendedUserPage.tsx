// === Module 17157: SuspendedUserPage ===

// Module 17157 (SuspendedUserPage)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import LinkingDefault from "Linking" /* 4334 */;
import Text_Text from "Text/Text" /* 4636 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6703 */;
import _modDef7106 from "module_7106" /* 7106 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7237 */;
import IconButton from "IconButton" /* 8057 */;
import SafetyHubPageDefault from "SafetyHubPage" /* 14889 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8580 */;

require = fn;
const View = fn(17).View;
const SafetyHubConstants = fn(8569);
({ AgeCheckStatus: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", height: "100%" }, header: null, text: null, link: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", height: "100%" };
obj2.header = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: nativeDefault.space.PX_8, alignItems: "center" };
let obj4 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: nativeDefault.space.PX_8, alignItems: "center" };
obj2.text = { marginRight: nativeDefault.space.PX_8, textAlign: "left", flexShrink: 1 };
obj2.link = { textDecorationLine: "underline" };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SuspendedUserPage.tsx");

export default function SuspendedUserSafetyHubPage() {
  const tmp = closure_9();
  const items = [SafetyHubStore];
  let tmp6Result = initialize.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus()) !== constants.VERIFIED;
  const obj2 = { style: tmp.container, children: null };
  if (tmp6Result) {
    const obj3 = { style: tmp.header, children: null };
    const obj4 = { variant: "destructive", accessibilityLabel: null, onPress: null, icon: null };
    const intl = util.intl;
    obj4.accessibilityLabel = intl.string(util.t.cpT0Cq);
    obj4.onPress = function onPress() {
      AuthenticationActionCreatorsDefault.closeSuspendedUser();
    };
    obj4.icon = _modDef7106;
    const items1 = [React5(IconButton.IconButton, obj4), ];
    const obj5 = {
      style: tmp.text,
      onPress() {
          LinkingDefault.openURL(constants.WARNING_SYSTEM_HELPCENTER_LINK);
        },
      variant: "text-xs/medium",
      color: "control-critical-primary-text-default",
      children: null
    };
    const intl2 = util.intl;
    const items2 = [intl2.string(util.t["MG+Bzb"]), " ", ];
    const obj6 = { style: tmp.link, variant: "text-xs/medium", color: "control-critical-primary-text-default", children: null };
    const intl3 = util.intl;
    obj6.children = intl3.string(util.t["9JceHN"]);
    items2[2] = React5(Text_Text.Text, obj6);
    obj5.children = items2;
    items1[1] = React6(Text_Text.Text, obj5);
    obj3.children = items1;
    tmp6Result = React6(View, obj3);
  }
  const rect = { top: true, right: true, left: true, children: null };
  const items3 = [tmp6Result, React5(SafetyHubPageDefault, { visible: true })];
  obj2.children = items3;
  rect.children = React6(View, obj2);
  return React5(common_SafeAreaView.SafeAreaPaddingView, rect);
};