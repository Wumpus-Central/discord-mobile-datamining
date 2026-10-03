// discord_app/modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import _modDef2493 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arr) => {
      const cResult = c.c(13);
      if (0 === arr.length) {
        const _Symbol2 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { subLabel: null, trailing: "a" };
          const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
          const intl3 = util.intl;
          obj3.children = intl3.string(_modDef2493.fOBIZH);
          obj2.subLabel = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: null });
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        return first;
      } else if (cResult[1] !== arr) {
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function s(enabled) {
            return enabled.enabled;
          };
          cResult[3] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[3];
        }
        const someResult = arr.some(tmp6);
        cResult[1] = arr;
        cResult[2] = someResult;
      } else {
        if (cResult[4] !== arr.length) {
          const intl = util.intl;
          const obj4 = { count: arr.length };
          const formatToPlainStringResult = intl.formatToPlainString(_modDef2493.XfwcpX, obj4);
          cResult[4] = arr.length;
          cResult[5] = formatToPlainStringResult;
          let tmp9 = formatToPlainStringResult;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== cResult[2]) {
          const intl2 = util.intl;
          const string = intl2.string;
          let v8vDHRq = _modDef2493;
          if (tmp4) {
            v8vDHRq = v8vDHRq["8vDHRq"];
            let stringResult = string(v8vDHRq);
          } else {
            stringResult = string(v8vDHRq["4z9fN+"]);
          }
          cResult[6] = tmp4;
          cResult[7] = stringResult;
        } else {
          if (cResult[8] !== cResult[7]) {
            const obj5 = { variant: "text-sm/medium", color: "text-muted", children: tmp12 };
            const tmp19 = jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: tmp12 });
            cResult[8] = tmp12;
            cResult[9] = tmp19;
            let tmp17 = tmp19;
          } else {
            tmp17 = cResult[9];
          }
          if (cResult[10] === tmp9) {
            if (cResult[11] === tmp17) {
              let tmp20 = cResult[12];
            }
            return tmp20;
          }
          const obj6 = { subLabel: tmp9, trailing: tmp17 };
          cResult[10] = tmp9;
          cResult[11] = tmp17;
          cResult[12] = obj6;
          tmp20 = obj6;
        }
      }
    }
  : (arr) => {
      if (0 === arr.length) {
        const obj2 = { subLabel: null, trailing: "a" };
        const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const intl = util.intl;
        obj3.children = intl.string(_modDef2493.fOBIZH);
        obj2.subLabel = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: null });
        return obj2;
      } else {
        const obj4 = { subLabel: null, trailing: null };
        const intl2 = util.intl;
        const obj5 = { count: arr.length };
        obj4.subLabel = intl2.formatToPlainString(_modDef2493.XfwcpX, obj5);
        const intl3 = util.intl;
        const string = intl3.string;
        const tmp11 = _modDef2493;
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
