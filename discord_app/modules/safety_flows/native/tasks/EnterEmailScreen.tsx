// discord_app/modules/safety_flows/native/tasks/EnterEmailScreen.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";
import { TextInput } from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { messagesProxy } from "../../SafetyFlows.messages.js";
import { SafetyFlowTaskScreen } from "../SafetyFlowTaskScreen.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/safety_flows/native/tasks/EnterEmailScreen.tsx");

export default function EnterEmailScreen() {
  let tmp2;
  let tmp3;
  let obj = _useNavigation;
  _require = obj.useNavigation();
  [tmp2, tmp3] = callback(React.useState(""), 2);
  obj = { title: null, action: null, onAction: null, children: null };
  const tmp = callback(React.useState(""), 2);
  const intl = _getSystemLocale.intl;
  obj[0] = intl.string(messagesProxy.bFbsV6);
  const intl2 = _getSystemLocale.intl;
  obj[1] = intl2.string(messagesProxy.RRBNpv);
  obj[2] = function onAction() {
    arr = arr.push(arr(outer1_2[7]).SafetyFlowScreens.VERIFY_EMAIL);
  };
  obj = { children: null };
  obj[0] = jsx(_TextInput.TextInput, { label: "Email", value: tmp2, onChange: tmp3 });
  obj[3] = jsx(_Stack.Stack, { children: null });
  return jsx(SafetyFlowTaskScreen, { children: null });
};