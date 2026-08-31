// === Module 14483: useScheduleTimeControlsRowProps ===

// Module 14483 (useScheduleTimeControlsRowProps)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2369 */;
import Text from "Text" /* 4444 */;

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