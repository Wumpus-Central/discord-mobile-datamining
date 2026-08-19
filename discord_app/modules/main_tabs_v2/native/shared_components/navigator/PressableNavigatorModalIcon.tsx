// discord_app/modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorModalIcon.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import GenericHeaderTitle from "../HeaderShared.tsx";
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper.tsx";

const jsx = jsxProd.jsx;
const result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorModalIcon.tsx");

export default function PressableNavigatorModalIcon(onPress) {
  let goBack = onPress.onPress;
  if (goBack === undefined) {
    goBack = onPress.navigation.goBack;
  }
  let str = onPress.type;
  if (str === undefined) {
    str = "back";
  }
  let obj = { source: importDefault(tmp6 ? 8496 : 8500), onPress: goBack, accessibilityLabel: null };
  const intl = getSystemLocale.intl;
  const string = intl.string;
  const t = getSystemLocale.t;
  if ("back" === str) {
    let stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  obj = { isModal: true, children: jsx(GenericHeaderTitle.HeaderIconButton, { source: importDefault(tmp6 ? 8496 : 8500), onPress: goBack, accessibilityLabel: null }) };
  obj[2] = stringResult;
  return jsx(PressableNavigatorButtonWrapperDefault, { isModal: true, children: jsx(GenericHeaderTitle.HeaderIconButton, { source: importDefault(tmp6 ? 8496 : 8500), onPress: goBack, accessibilityLabel: null }) });
};