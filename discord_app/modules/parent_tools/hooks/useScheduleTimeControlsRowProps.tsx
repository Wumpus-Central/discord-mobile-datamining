// discord_app/modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx
import { jsx } from "jsxProd";

const result = require("getSystemLocale").fileFinishedImporting("modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx");

export default function useScheduleTimeControlsRowProps(arr) {
  if (0 === arr.length) {
    let obj = { subLabel: null, trailing: "a" };
    obj = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[2] = intl.string(require("../FamilyCenter.messages.js").fOBIZH);
    obj[0] = jsx(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, { variant: "text-xs/medium", color: "text-muted", children: null });
    return obj;
  } else {
    const obj1 = { subLabel: null, trailing: null };
    const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const obj2 = { count: null };
    obj2[0] = arr.length;
    obj1[0] = intl2.formatToPlainString(require("../FamilyCenter.messages.js").XfwcpX, obj2);
    const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const string = intl3.string;
    const tmp11 = require("../FamilyCenter.messages.js");
    if (someResult) {
      let stringResult = string(tmp11["8vDHRq"]);
    } else {
      stringResult = string(tmp11["4z9fN+"]);
    }
    obj = { variant: "text-sm/medium", color: "text-muted", children: null };
    obj[2] = stringResult;
    obj1[1] = jsx(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, { variant: "text-sm/medium", color: "text-muted", children: null });
    return obj1;
  }
};