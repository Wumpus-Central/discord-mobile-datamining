// === Module 7624: PressableNavigatorModalIcon ===

// Module 7624 (PressableNavigatorModalIcon)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import GenericHeaderTitle from "GenericHeaderTitle" /* 7617 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 7620 */;

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
  let obj = { source: importDefault(tmp6 ? 7621 : 7625), onPress: goBack, accessibilityLabel: null };
  const intl = tmp5(1233).intl;
  const string = intl.string;
  const t = tmp5(1233).t;
  if ("back" === str) {
    let stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  obj = { isModal: true, children: tmp(GenericHeaderTitle.HeaderIconButton, obj) };
  obj[2] = stringResult;
  return jsx(PressableNavigatorButtonWrapperDefault, { isModal: true, children: tmp(GenericHeaderTitle.HeaderIconButton, obj) });
};