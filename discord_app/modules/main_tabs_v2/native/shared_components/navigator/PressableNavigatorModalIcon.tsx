// === Module 7870: PressableNavigatorModalIcon ===

// Module 7870 (PressableNavigatorModalIcon)
import jsxProd from "jsxProd" /* 21 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 7866 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorModalIcon.tsx");

export default function PressableNavigatorModalIcon(onPress) {
  let goBack = onPress.onPress;
  if (goBack === undefined) {
    goBack = onPress.navigation.goBack;
  }
  let str = onPress.type;
  if (str === undefined) {
    str = "back";
  }
  let obj = { source: importDefault(tmp6 ? 7867 : 7871), onPress: goBack, accessibilityLabel: null };
  const intl = tmp5(1114).intl;
  const string = intl.string;
  const t = tmp5(1114).t;
  if ("back" === str) {
    let stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  obj = { isModal: true, children: tmp(HeaderShared.HeaderIconButton, obj), accessibilityLabel: stringResult };
  return jsx(PressableNavigatorButtonWrapperDefault, { isModal: true, children: tmp(HeaderShared.HeaderIconButton, obj), accessibilityLabel: stringResult });
};