// === Module 15672: BackButton ===

// Module 15672 (BackButton)
import jsxProd from "jsxProd" /* 21 */;
import MfaStepsTypes from "MfaStepsTypes" /* 15667 */;
import buttonDefault from "button" /* 15673 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  props = props.props;
  let obj = props(1483);
  importDefault = obj.useNavigation();
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = props(1114).intl;
  obj.text = intl.string(props(1114).t.Tot4EC);
  obj.onPress = function onPress() {
    closure_1.push(MfaStepsTypes.MfaScreens.SELECT, props);
  };
  return jsx(buttonDefault, { variant: "secondary", text: null, onPress: null });
};