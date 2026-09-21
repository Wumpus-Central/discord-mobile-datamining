// discord_app/modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../intl/index.native.tsx";
import _modDef2482 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx");

export default function useScheduleTimeControlsRowProps(arr) {
  if (0 === arr.length) {
    const obj2 = { subLabel: null, trailing: "y" };
    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl = util.intl;
    obj3.children = intl.string(_modDef2482.fOBIZH);
    obj2.subLabel = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: null });
    return obj2;
  } else {
    const obj4 = { subLabel: null, trailing: null };
    const intl2 = util.intl;
    const obj5 = { count: arr.length };
    obj4.subLabel = intl2.formatToPlainString(_modDef2482.XfwcpX, obj5);
    const intl3 = util.intl;
    const string = intl3.string;
    const tmp11 = _modDef2482;
    if (someResult) {
      let stringResult = string(tmp11["8vDHRq"]);
    } else {
      stringResult = string(tmp11["4z9fN+"]);
    }
    const obj = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
    obj4.trailing = jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: stringResult });
    return obj4;
  }
}
