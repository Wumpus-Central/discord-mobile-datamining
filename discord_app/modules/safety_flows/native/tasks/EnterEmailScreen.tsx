// === Module 17092: EnterEmailScreen ===

// Module 17092 (EnterEmailScreen)
import messagesProxyDefault from "messagesProxy" /* 2597 */;
import SafetyFlowTaskScreenDefault from "SafetyFlowTaskScreen" /* 17093 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/safety_flows/native/tasks/EnterEmailScreen.tsx");

export default function EnterEmailScreen() {
  let obj = _require(1500);
  _require = obj.useNavigation();
  [tmp2, tmp3] = callback(React.useState(""), 2);
  obj = { title: null, action: null, onAction: null, children: null };
  const tmp = callback(React.useState(""), 2);
  const intl = _require(1236).intl;
  obj[0] = intl.string(messagesProxyDefault.bFbsV6);
  const intl2 = _require(1236).intl;
  obj[1] = intl2.string(messagesProxyDefault.RRBNpv);
  obj[2] = function onAction() {
    arr = arr.push(arr(dependencyMap[7]).SafetyFlowScreens.VERIFY_EMAIL);
  };
  obj = { children: jsx(_require(8071).TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) };
  obj[3] = jsx(_require(4733).Stack, { children: jsx(_require(8071).TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) });
  return jsx(SafetyFlowTaskScreenDefault, { children: jsx(_require(8071).TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) });
};