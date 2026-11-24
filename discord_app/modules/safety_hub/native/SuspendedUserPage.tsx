// === Module 19076: SuspendedUserPage ===

// Module 19076 (SuspendedUserPage)
import initialize from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import Text_Text from "Text/Text" /* 5508 */;
import LinkingDefault from "Linking" /* 5596 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6713 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7354 */;
import _modDef7619 from "module_7619" /* 7619 */;
import IconButton from "IconButton" /* 7811 */;
import SafetyHubPageDefault from "SafetyHubPage" /* 16071 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 7779 */;

require = fn;
const View = fn(17).View;
const SafetyHubConstants = fn(7753);
({ AgeCheckStatus: closure_6, SafetyHubLinks: metroImportDefault } = SafetyHubConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4917);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", height: "100%" }, header: null, text: null, link: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", height: "100%" };
obj2.header = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: nativeDefault.space.PX_8, alignItems: "center" };
let obj4 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: nativeDefault.space.PX_8, alignItems: "center" };
obj2.text = { marginRight: nativeDefault.space.PX_8, textAlign: "left", flexShrink: 1 };
obj2.link = { textDecorationLine: "underline" };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SuspendedUserPage.tsx");

export default function SuspendedUserSafetyHubPage() {
  const tmp = closure_10();
  items = [SafetyHubStore];
  let tmp7Result = initialize.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus()) !== constants.VERIFIED;
  const effect = noop.useEffect(() => {
    function handleSuspendedUserTokenExpired() {
      closure_1_1(dependencyMap[8]).popAll();
    }
    const subscription = closure_1(572).subscribe("SUSPENDED_USER_TOKEN_EXPIRED", handleSuspendedUserTokenExpired);
    return () => {
      DispatcherDefault.unsubscribe("SUSPENDED_USER_TOKEN_EXPIRED", handleSuspendedUserTokenExpired);
    };
  }, []);
  const obj2 = { style: tmp.container, children: null };
  if (tmp7Result) {
    const obj3 = { style: tmp.header, children: null };
    const obj4 = { variant: "destructive", accessibilityLabel: null, onPress: null, icon: null };
    const intl = util.intl;
    obj4.accessibilityLabel = intl.string(util.t.cpT0Cq);
    obj4.onPress = function onClose() {
      AuthenticationActionCreatorsDefault.closeSuspendedUser();
    };
    obj4.icon = _modDef7619;
    const items1 = [React5(IconButton.IconButton, obj4), ];
    const obj5 = {
      style: tmp.text,
      onPress: function openLearnMore() {
          LinkingDefault.openURL(constants.WARNING_SYSTEM_HELPCENTER_LINK);
        },
      variant: "body-xs/medium",
      color: "control-critical-primary-text-default",
      children: null
    };
    const intl2 = util.intl;
    const items2 = [intl2.string(util.t["MG+Bzb"]), " ", ];
    const obj6 = { style: tmp.link, variant: "body-xs/medium", color: "control-critical-primary-text-default", children: null };
    const intl3 = util.intl;
    obj6.children = intl3.string(util.t["9JceHN"]);
    items2[2] = React5(Text_Text.Text, obj6);
    obj5.children = items2;
    items1[1] = React6(Text_Text.Text, obj5);
    obj3.children = items1;
    tmp7Result = React6(View, obj3);
  }
  const rect = { top: true, right: true, left: true, children: null };
  const items3 = [tmp7Result, React5(SafetyHubPageDefault, { visible: true })];
  obj2.children = items3;
  rect.children = React6(View, obj2);
  return React5(common_SafeAreaView.SafeAreaPaddingView, rect);
};