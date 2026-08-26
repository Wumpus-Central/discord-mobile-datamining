// === Module 8614: PressableNavigatorModalIcon ===

// Module 8614 (PressableNavigatorModalIcon)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import GenericHeaderTitle from "GenericHeaderTitle" /* 8607 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 8610 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorModalIcon.tsx");

export default function PressableNavigatorModalIcon(onPress) {
  let goBack = onPress.onPress;
  if (goBack === undefined) {
    goBack = onPress.navigation.goBack;
  }
  let str = onPress.type;
  if (str === undefined) {
    str = "back";
  }
  let obj = { source: importDefault(tmp6 ? 8611 : 8615), onPress: goBack, accessibilityLabel: null };
  const intl = tmp5(1236).intl;
  const string = intl.string;
  const t = tmp5(1236).t;
  if ("back" === str) {
    let stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  obj = { isModal: true, children: tmp(GenericHeaderTitle.HeaderIconButton, obj) };
  obj[2] = stringResult;
  return jsx(PressableNavigatorButtonWrapperDefault, { isModal: true, children: tmp(GenericHeaderTitle.HeaderIconButton, obj) });
};