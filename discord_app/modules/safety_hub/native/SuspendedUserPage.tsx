// === Module 17114: SuspendedUserPage ===

// Module 17114 (SuspendedUserPage)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import LinkingDefault from "Linking" /* 4571 */;
import AssetRegistryDefault from "AssetRegistry" /* 4815 */;
import Text_Text from "Text/Text" /* 4892 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6089 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6626 */;
import IconButton2 from "IconButton" /* 7586 */;
import SafetyHubPageDefault from "SafetyHubPage" /* 14567 */;
import react from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8139 */;
import SafetyHubConstants from "SafetyHubConstants" /* 8126 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ AgeCheckStatus: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, text: obj4, link: { textDecorationLine: "underline" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: nativeDefault.space.PX_8, alignItems: "center" };
obj4 = { marginRight: nativeDefault.space.PX_8, textAlign: "left", flexShrink: 1 };
let closure_9 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let ageCheckStatus;
  let intl;
  let intl3;
  let items1;
  let items2;
  let tmp5;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(13);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function s() {
      return ageCheckStatus.getAgeCheckStatus();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const VERIFIED = hasOwnProperty.VERIFIED;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        const obj = AuthenticationActionCreatorsDefault;
        obj.closeSuspendedUser();
      }
    }
    cResult[2] = S;
  } else {
    class S {
      constructor() {
        const obj = AuthenticationActionCreatorsDefault;
        obj.closeSuspendedUser();
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        const obj = AuthenticationActionCreatorsDefault;
        obj.closeSuspendedUser();
      }
    }
    cResult[3] = tmp11;
  } else {
    class S {
      constructor() {
        const obj = AuthenticationActionCreatorsDefault;
        obj.closeSuspendedUser();
      }
    }
  }
  if (cResult[4] === stateFromStores !== VERIFIED) {
    class S {
      constructor() {
        const obj = AuthenticationActionCreatorsDefault;
        obj.closeSuspendedUser();
      }
    }
  }
  let tmp13 = tmp12;
  if (tmp13) {
    class S {
      constructor() {
        const obj = AuthenticationActionCreatorsDefault;
        obj.closeSuspendedUser();
      }
    }
    const obj2 = { style: tmp4.header, children: items1 };
    const obj3 = { variant: "destructive", accessibilityLabel: intl.string(intl4.t.cpT0Cq), onPress: S, icon: AssetRegistryDefault };
    const IconButton = IconButton2.IconButton;
    intl = intl4.intl;
    items1 = [metroImportDefault(IconButton, obj3), ];
    const obj4 = { style: tmp4.text, onPress: tmp11, variant: "text-xs/medium", color: "control-critical-primary-text-default", children: items2 };
    const Text = Text_Text.Text;
    const intl2 = intl4.intl;
    items2 = [intl2.string(intl4.t["MG+Bzb"]), " ", ];
    const obj5 = { style: tmp4.link, variant: "text-xs/medium", color: "control-critical-primary-text-default", children: intl3.string(intl4.t["9JceHN"]) };
    const Text2 = Text_Text.Text;
    intl3 = intl4.intl;
    items2[2] = metroImportDefault(Text2, obj5);
    items1[1] = metroImportAll(Text, obj4);
    tmp13 = metroImportAll(View, obj2);
  }
  cResult[4] = stateFromStores !== VERIFIED;
  cResult[5] = tmp4.header;
  cResult[6] = tmp4.link;
  cResult[7] = tmp4.text;
  cResult[8] = tmp13;
}) : (() => {
  let ageCheckStatus;
  let intl;
  let intl3;
  let items1;
  let items2;
  let items3;
  const tmp = closure_9();
  let obj = get_initialized;
  const items = [SafetyHubStore];
  let tmp6Result = obj.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus()) !== hasOwnProperty.VERIFIED;
  const obj2 = { style: tmp.container, children: items3 };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  if (tmp6Result) {
    const obj3 = { style: tmp.header, children: items1 };
    const obj4 = {
      variant: "destructive",
      accessibilityLabel: intl.string(intl4.t.cpT0Cq),
      onPress() {
          const obj = AuthenticationActionCreatorsDefault;
          obj.closeSuspendedUser();
        },
      icon: AssetRegistryDefault
    };
    const IconButton = IconButton2.IconButton;
    intl = intl4.intl;
    items1 = [metroImportDefault(IconButton, obj4), ];
    const obj5 = {
      style: tmp.text,
      onPress() {
          const obj = LinkingDefault;
          obj.openURL(constants.WARNING_SYSTEM_HELPCENTER_LINK);
        },
      variant: "text-xs/medium",
      color: "control-critical-primary-text-default",
      children: items2
    };
    const Text = Text_Text.Text;
    const intl2 = intl4.intl;
    items2 = [intl2.string(intl4.t["MG+Bzb"]), " ", ];
    const obj6 = { style: tmp.link, variant: "text-xs/medium", color: "control-critical-primary-text-default", children: intl3.string(intl4.t["9JceHN"]) };
    const Text2 = Text_Text.Text;
    intl3 = intl4.intl;
    items2[2] = metroImportDefault(Text2, obj6);
    items1[1] = metroImportAll(Text, obj5);
    tmp6Result = metroImportAll(View, obj3);
  }
  const rect = { top: true, right: true, left: true, children: metroImportAll(View, obj2) };
  items3 = [tmp6Result, metroImportDefault(SafetyHubPageDefault, { visible: true })];
  return metroImportDefault(SafeAreaPaddingView, rect);
});
const result = size.fileFinishedImporting("modules/safety_hub/native/SuspendedUserPage.tsx");

export default tmp6;