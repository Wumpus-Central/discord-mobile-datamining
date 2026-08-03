import { jsx } from "jsxProd";

const result = require("getSystemLocale").fileFinishedImporting("modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx");

export default function useScheduleTimeControlsRowProps(arr) {
  if (0 === arr.length) {
    let obj = { subLabel: null, trailing: "Array" };
    obj = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[2] = intl.string(importDefault(2225).fOBIZH);
    obj[0] = jsx(require(4189) /* Text */.Text, { variant: "text-xs/medium", color: "text-muted", children: null });
    return obj;
  } else {
    const obj1 = { subLabel: null, trailing: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    const obj2 = { count: null };
    obj2[0] = arr.length;
    obj1[0] = intl2.formatToPlainString(importDefault(2225).XfwcpX, obj2);
    const intl3 = require(1236) /* getSystemLocale */.intl;
    const string = intl3.string;
    const tmp11 = importDefault(2225);
    if (someResult) {
      let stringResult = string(tmp11["8vDHRq"]);
    } else {
      stringResult = string(tmp11["4z9fN+"]);
    }
    obj = { variant: "text-sm/medium", color: "text-muted", children: null };
    obj[2] = stringResult;
    obj1[1] = jsx(require(4189) /* Text */.Text, { variant: "text-sm/medium", color: "text-muted", children: null });
    return obj1;
  }
};