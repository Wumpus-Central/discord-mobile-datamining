// === Module 16800: EnterEmailScreen ===

// Module 16800 (EnterEmailScreen)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/safety_flows/native/tasks/EnterEmailScreen.tsx");

export default function EnterEmailScreen() {
  let tmp2;
  let tmp3;
  let obj = _require(1480);
  _require = obj.useNavigation();
  [tmp2, tmp3] = callback(React.useState(""), 2);
  obj = { title: null, action: null, onAction: null, children: null };
  const tmp = callback(React.useState(""), 2);
  const intl = _require(1236).intl;
  obj[0] = intl.string(importDefault(2517).bFbsV6);
  const intl2 = _require(1236).intl;
  obj[1] = intl2.string(importDefault(2517).RRBNpv);
  obj[2] = function onAction() {
    arr = arr.push(arr(outer1_2[7]).SafetyFlowScreens.VERIFY_EMAIL);
  };
  obj = { children: null };
  obj[0] = jsx(_require(7701).TextInput, { label: "Email", value: tmp2, onChange: tmp3 });
  obj[3] = jsx(_require(4664).Stack, { children: null });
  return jsx(importDefault(16801), { children: null });
};