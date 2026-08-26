// === Module 17302: EnterEmailScreen ===

// Module 17302 (EnterEmailScreen)
import messagesProxyDefault from "messagesProxy" /* 2631 */;
import SafetyFlowTaskScreenDefault from "SafetyFlowTaskScreen" /* 17303 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_flows/native/tasks/EnterEmailScreen.tsx");

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
    arr = arr.push(arr(closure_1_2[7]).SafetyFlowScreens.VERIFY_EMAIL);
  };
  obj = { children: jsx(_require(8002).TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) };
  obj[3] = jsx(_require(4877).Stack, { children: jsx(_require(8002).TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) });
  return jsx(SafetyFlowTaskScreenDefault, { children: jsx(_require(8002).TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) });
};