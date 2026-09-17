// === Module 7991: PressableNavigatorModalIcon ===

// Module 7991 (PressableNavigatorModalIcon)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1115 */;
import HeaderShared from "HeaderShared" /* 7984 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 7987 */;
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
  const obj = { source: importDefault("back" === str ? 7988 : 7992), onPress: goBack, accessibilityLabel: null };
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if ("back" === str) {
    let stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  obj.accessibilityLabel = stringResult;
  return <tmp4 isModal>{jsx(HeaderShared.HeaderIconButton, { source: importDefault("back" === str ? 7988 : 7992), onPress: goBack, accessibilityLabel: null })}</tmp4>;
};