// discord_app/modules/mfa/native/components/BackButton.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import MFAButtonDefault from "button.tsx";

const jsx = jsxProd.jsx;
const result = obj132.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  props = props.props;
  let obj = props(1500);
  importDefault = obj.useNavigation();
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = props(1236).intl;
  obj[1] = intl.string(props(1236).t.Tot4EC);
  obj[2] = function onPress() {

  };
  return jsx(MFAButtonDefault, { variant: "secondary", text: null, onPress: null });
};