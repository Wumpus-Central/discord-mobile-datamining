// === Module 17049: useScheduleTimeControlsRowProps ===

// Module 17049 (useScheduleTimeControlsRowProps)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1113 */;
import _modDef2667 from "module_2667" /* 2667 */;
import Text_Text from "Text/Text" /* 5761 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx");

export default function useScheduleTimeControlsRowProps(arr) {
  if (0 === arr.length) {
    const obj2 = { subLabel: null, trailing: "a" };
    const obj3 = { variant: "body-xs/medium", color: "text-muted", children: null };
    const intl = util.intl;
    obj3.children = intl.string(_modDef2667.fOBIZH);
    obj2.subLabel = jsx(Text_Text.Text, { variant: "body-xs/medium", color: "text-muted", children: null });
    return obj2;
  } else {
    const obj4 = { subLabel: null, trailing: null };
    const intl2 = util.intl;
    const obj5 = { count: arr.length };
    obj4.subLabel = intl2.formatToPlainString(_modDef2667.XfwcpX, obj5);
    const intl3 = util.intl;
    const string = intl3.string;
    const tmp11 = _modDef2667;
    if (someResult) {
      let stringResult = string(tmp11["8vDHRq"]);
    } else {
      stringResult = string(tmp11["4z9fN+"]);
    }
    const obj = { variant: "body-sm/medium", color: "text-muted", children: stringResult };
    obj4.trailing = jsx(Text_Text.Text, { variant: "body-sm/medium", color: "text-muted", children: stringResult });
    return obj4;
  }
};