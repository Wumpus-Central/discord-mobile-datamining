// discord_app/modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx
import { jsx } from "jsxProd";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { messagesProxy } from "../FamilyCenter.messages.js";

const result = require("getSystemLocale").fileFinishedImporting("modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx");

export default function useScheduleTimeControlsRowProps(arr) {
  if (0 === arr.length) {
    let obj = { subLabel: null, trailing: "a" };
    obj = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj[2] = intl.string(messagesProxy.fOBIZH);
    obj[0] = jsx(Text /* Text */.Text, { variant: "text-xs/medium", color: "text-muted", children: null });
    return obj;
  } else {
    const obj1 = { subLabel: null, trailing: null };
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    const obj2 = { count: null };
    obj2[0] = arr.length;
    obj1[0] = intl2.formatToPlainString(messagesProxy.XfwcpX, obj2);
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    const string = intl3.string;
    const tmp11 = messagesProxy;
    if (someResult) {
      let stringResult = string(tmp11["8vDHRq"]);
    } else {
      stringResult = string(tmp11["4z9fN+"]);
    }
    obj = { variant: "text-sm/medium", color: "text-muted", children: null };
    obj[2] = stringResult;
    obj1[1] = jsx(Text /* Text */.Text, { variant: "text-sm/medium", color: "text-muted", children: null });
    return obj1;
  }
};