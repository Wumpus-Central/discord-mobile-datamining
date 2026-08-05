// discord_app/modules/safety_flows/native/tasks/EnterEmailScreen.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/safety_flows/native/tasks/EnterEmailScreen.tsx");

export default function EnterEmailScreen() {
  let tmp2;
  let tmp3;
  let obj = _require("../../../../design/components/Navigator/native/useNavigation.native.tsx");
  _require = obj.useNavigation();
  [tmp2, tmp3] = callback(React.useState(""), 2);
  obj = { title: null, action: null, onAction: null, children: null };
  const tmp = callback(React.useState(""), 2);
  const intl = _require("../../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../SafetyFlows.messages.js").bFbsV6);
  const intl2 = _require("../../../../intl/index.native.tsx").intl;
  obj[1] = intl2.string(require("../../SafetyFlows.messages.js").RRBNpv);
  obj[2] = function onAction() {
    arr = arr.push(arr(outer1_2[7]).SafetyFlowScreens.VERIFY_EMAIL);
  };
  obj = { children: null };
  obj[0] = jsx(_require("../../../../design/components/TextInput/native/TextInput.native.tsx").TextInput, { label: "Email", value: tmp2, onChange: tmp3 });
  obj[3] = jsx(_require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, { children: null });
  return jsx(require("../SafetyFlowTaskScreen.tsx"), { children: null });
};