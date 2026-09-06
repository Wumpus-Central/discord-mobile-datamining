// === Module 16907: SuspendedUserPage ===

// Module 16907 (SuspendedUserPage)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import LinkingDefault from "Linking" /* 4255 */;
import Text_Text from "Text/Text" /* 4556 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6593 */;
import _modDef6992 from "module_6992" /* 6992 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import IconButton from "IconButton" /* 8097 */;
import SafetyHubPageDefault from "SafetyHubPage" /* 14768 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8430 */;

require = fn;
const View = fn(17).View;
const SafetyHubConstants = fn(8419);
({ AgeCheckStatus: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, header: null, text: null, link: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", height: "100%" };
createStyles.container = createStyles;
createStyles.header = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: nativeDefault.space.PX_8, alignItems: "center" };
let obj1 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: nativeDefault.space.PX_8, alignItems: "center" };
createStyles.text = { marginRight: nativeDefault.space.PX_8, textAlign: "left", flexShrink: 1 };
createStyles.link = { textDecorationLine: "underline" };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SuspendedUserPage.tsx");

export default function SuspendedUserSafetyHubPage() {
  const tmp = closure_9();
  let obj = initialize;
  const items = [SafetyHubStore];
  let tmp6Result = obj.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus()) !== constants.VERIFIED;
  obj = { style: tmp.container, children: null };
  if (tmp6Result) {
    obj = { style: tmp.header, children: null };
    const obj1 = { variant: "destructive", accessibilityLabel: null, onPress: null, icon: null };
    const intl = util.intl;
    obj1.accessibilityLabel = intl.string(util.t.cpT0Cq);
    obj1.onPress = function onPress() {
      AuthenticationActionCreatorsDefault.closeSuspendedUser();
    };
    obj1.icon = _modDef6992;
    const items1 = [React5(IconButton.IconButton, obj1), ];
    const obj2 = {
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
    const obj3 = { style: tmp.link, variant: "text-xs/medium", color: "control-critical-primary-text-default", children: null };
    const intl3 = util.intl;
    obj3.children = intl3.string(util.t["9JceHN"]);
    items2[2] = React5(Text_Text.Text, obj3);
    obj2.children = items2;
    items1[1] = React6(Text_Text.Text, obj2);
    obj.children = items1;
    tmp6Result = React6(View, obj);
  }
  const rect = { top: true, right: true, left: true, children: null };
  const items3 = [tmp6Result, React5(SafetyHubPageDefault, { visible: true })];
  obj.children = items3;
  rect.children = React6(View, obj);
  return React5(common_SafeAreaView.SafeAreaPaddingView, rect);
};