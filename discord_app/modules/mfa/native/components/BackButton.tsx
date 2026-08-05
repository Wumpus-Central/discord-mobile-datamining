// discord_app/modules/mfa/native/components/BackButton.tsx
import { jsx } from "jsxProd";
import { MFAButton } from "button.tsx";

const result = require("MFAButton").fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  props = props.props;
  let importDefault;
  let obj = props(1480);
  importDefault = obj.useNavigation();
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = props(1236).intl;
  obj[1] = intl.string(props(1236).t.Tot4EC);
  obj[2] = function onPress() {

  };
  return jsx(MFAButton, { variant: "secondary", text: null, onPress: null });
};