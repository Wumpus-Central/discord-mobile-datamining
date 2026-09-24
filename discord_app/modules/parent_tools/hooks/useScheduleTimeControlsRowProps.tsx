// === Module 15256: useScheduleTimeControlsRowProps ===

// Module 15256 (useScheduleTimeControlsRowProps)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1115 */;
import _modDef2486 from "module_2486" /* 2486 */;
import Text_Text from "Text/Text" /* 4825 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx");

export default function useScheduleTimeControlsRowProps(arr) {
  if (0 === arr.length) {
    const obj2 = { subLabel: null, trailing: "Array" };
    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl = util.intl;
    obj3.children = intl.string(_modDef2486.fOBIZH);
    obj2.subLabel = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: null });
    return obj2;
  } else {
    const obj4 = { subLabel: null, trailing: null };
    const intl2 = util.intl;
    const obj5 = { count: arr.length };
    obj4.subLabel = intl2.formatToPlainString(_modDef2486.XfwcpX, obj5);
    const intl3 = util.intl;
    const string = intl3.string;
    const tmp11 = _modDef2486;
    if (someResult) {
      let stringResult = string(tmp11["8vDHRq"]);
    } else {
      stringResult = string(tmp11["4z9fN+"]);
    }
    const obj = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
    obj4.trailing = jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: stringResult });
    return obj4;
  }
};