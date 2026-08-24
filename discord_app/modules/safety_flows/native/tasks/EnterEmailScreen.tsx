// discord_app/modules/safety_flows/native/tasks/EnterEmailScreen.tsx
import messagesProxyDefault from "../../SafetyFlows.messages.js";
import SafetyFlowTaskScreenDefault from "../SafetyFlowTaskScreen.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_flows/native/tasks/EnterEmailScreen.tsx");

export default function EnterEmailScreen() {
  let obj = useNavigation;
  _require = obj.useNavigation();
  [tmp2, tmp3] = callback(React.useState(""), 2);
  obj = { title: null, action: null, onAction: null, children: null };
  const tmp = callback(React.useState(""), 2);
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(messagesProxyDefault.bFbsV6);
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj[1] = intl2.string(messagesProxyDefault.RRBNpv);
  obj[2] = function onAction() {
    arr = arr.push(arr(closure_1_2[7]).SafetyFlowScreens.VERIFY_EMAIL);
  };
  obj = { children: jsx(require("../../../../design/components/TextInput/native/TextInput.native.tsx").TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) };
  obj[3] = jsx(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, { children: jsx(require("../../../../design/components/TextInput/native/TextInput.native.tsx").TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) });
  return jsx(SafetyFlowTaskScreenDefault, { children: jsx(require("../../../../design/components/TextInput/native/TextInput.native.tsx").TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) });
};