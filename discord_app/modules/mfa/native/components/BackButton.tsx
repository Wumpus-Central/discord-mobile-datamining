// discord_app/modules/mfa/native/components/BackButton.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import MfaStepsTypes from "../MfaStepsTypes.tsx";
import buttonDefault from "button.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  props = props.props;
  importDefault = props(1485).useNavigation();
  const obj2 = { variant: "secondary", text: null, onPress: null };
  const obj = props(1485);
  const intl = props(1115).intl;
  obj2.text = intl.string(props(1115).t.Tot4EC);
  obj2.onPress = function onPress() {
    closure_1.push(MfaStepsTypes.MfaScreens.SELECT, props);
  };
  return jsx(buttonDefault, { variant: "secondary", text: null, onPress: null });
}
