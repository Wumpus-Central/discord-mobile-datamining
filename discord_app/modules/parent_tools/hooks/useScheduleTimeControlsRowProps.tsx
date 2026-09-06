// discord_app/modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../intl/index.native.tsx";
import _modDef2396 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
