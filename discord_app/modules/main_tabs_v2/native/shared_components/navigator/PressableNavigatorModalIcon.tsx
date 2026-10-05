// === Module 7505: PressableNavigatorModalIcon ===

// Module 7505 (PressableNavigatorModalIcon)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import HeaderShared from "HeaderShared" /* 7498 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 7504 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorModalIcon.tsx");

export default function PressableNavigatorModalIcon(onPress) {
  let stringResult;
  let goBack = onPress.onPress;
  if (goBack === undefined) {
    goBack = onPress.navigation.goBack;
  }
  let str = onPress.type;
  if (str === undefined) {
    str = "back";
  }
  PressableNavigatorButtonWrapperDefault;
  const HeaderIconButton = HeaderShared.HeaderIconButton;
  const intl = intl2.intl;
  const string = intl.string;
  const t = intl2.t;
  if ("back" === str) {
    stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  return <tmp4 isModal><HeaderIconButton source={importDefault("back" === str ? 7501 : 7506)} onPress={goBack} accessibilityLabel={stringResult} /></tmp4>;
};