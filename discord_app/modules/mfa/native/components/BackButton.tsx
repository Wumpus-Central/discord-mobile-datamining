// === Module 15272: BackButton ===

// Module 15272 (BackButton)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import MFAButtonDefault from "MFAButton" /* 15273 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton() {
  let obj = _require(1499);
  _require = obj.useNavigation();
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = _require(1236).intl;
  obj[1] = intl.string(_require(1236).t.Tot4EC);
  obj[2] = function onPress() {
    arr = arr.push(arr(closure_1_2[4]).MfaScreens.SELECT);
  };
  return jsx(MFAButtonDefault, { variant: "secondary", text: null, onPress: null });
};