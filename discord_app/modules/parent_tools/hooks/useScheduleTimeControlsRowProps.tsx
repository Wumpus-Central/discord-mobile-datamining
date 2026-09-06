// === Module 14910: useScheduleTimeControlsRowProps ===

// Module 14910 (useScheduleTimeControlsRowProps)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1114 */;
import _modDef2396 from "module_2396" /* 2396 */;
import Text_Text from "Text/Text" /* 4556 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx");

export default function useScheduleTimeControlsRowProps(arr) {
  if (0 === arr.length) {
    let obj = { subLabel: null, trailing: "a" };
    obj = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl = util.intl;
    obj.children = intl.string(_modDef2396.fOBIZH);
    obj.subLabel = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: null });
    return obj;
  } else {
    const obj1 = { subLabel: null, trailing: null };
    const intl2 = util.intl;
    const obj2 = { count: arr.length };
    obj1.subLabel = intl2.formatToPlainString(_modDef2396.XfwcpX, obj2);
    const intl3 = util.intl;
    const string = intl3.string;
    const tmp11 = _modDef2396;
    if (someResult) {
      let stringResult = string(tmp11["8vDHRq"]);
    } else {
      stringResult = string(tmp11["4z9fN+"]);
    }
    obj = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
    obj1.trailing = jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: stringResult });
    return obj1;
  }
};