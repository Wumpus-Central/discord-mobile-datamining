// discord_app/modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx
import set from "../../../../_runtime/00002_set.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import messagesProxyDefault from "../FamilyCenter.messages.js";
import Text from "../../../design/components/Text/native/Text.tsx";

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx");

export default function useScheduleTimeControlsRowProps(arr) {
  if (0 === arr.length) {
    let obj = { subLabel: null, trailing: "Array" };
    obj = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl = getSystemLocale.intl;
    obj[2] = intl.string(messagesProxyDefault.fOBIZH);
    obj[0] = jsx(Text.Text, { variant: "text-xs/medium", color: "text-muted", children: null });
    return obj;
  } else {
    obj1 = { subLabel: null, trailing: null };
    const intl2 = getSystemLocale.intl;
    const obj2 = { count: null };
    obj2[0] = arr.length;
    obj1[0] = intl2.formatToPlainString(messagesProxyDefault.XfwcpX, obj2);
    const intl3 = getSystemLocale.intl;
    const string = intl3.string;
    const tmp11 = messagesProxyDefault;
    if (someResult) {
      let stringResult = string(tmp11["8vDHRq"]);
    } else {
      stringResult = string(tmp11["4z9fN+"]);
    }
    obj = { variant: "text-sm/medium", color: "text-muted", children: null };
    obj[2] = stringResult;
    obj1[1] = jsx(Text.Text, { variant: "text-sm/medium", color: "text-muted", children: null });
    return obj1;
  }
};