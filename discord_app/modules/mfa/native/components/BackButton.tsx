// === Module 17943: BackButton ===

// Module 17943 (BackButton)
import jsxProd from "jsxProd" /* 21 */;
import MfaStepsTypes from "MfaStepsTypes" /* 17938 */;
import buttonDefault from "button" /* 17944 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  props = props.props;
  importDefault = props(1499).useNavigation();
  const obj2 = { variant: "secondary", text: null, onPress: null };
  const obj = props(1499);
  const intl = props(1113).intl;
  obj2.text = intl.string(props(1113).t.Tot4EC);
  obj2.onPress = function onPress() {
    closure_1.push(MfaStepsTypes.MfaScreens.SELECT, props);
  };
  return jsx(buttonDefault, { variant: "secondary", text: null, onPress: null });
};