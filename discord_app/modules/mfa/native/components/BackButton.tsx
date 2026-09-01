// discord_app/modules/mfa/native/components/BackButton.tsx
import set from "../../../../../_runtime/00002_set.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import MFAButtonDefault from "button.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton() {
  let obj = useNavigation;
  _require = obj.useNavigation();
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj[1] = intl.string(require("../../../../intl/index.native.tsx").t.Tot4EC);
  obj[2] = function onPress() {
    arr = arr.push(arr(closure_1_2[4]).MfaScreens.SELECT);
  };
  return jsx(MFAButtonDefault, { variant: "secondary", text: null, onPress: null });
};