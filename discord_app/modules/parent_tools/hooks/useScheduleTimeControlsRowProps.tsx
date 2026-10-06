// discord_app/modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../_runtime/00576_react.js";
import intl4 from "../../../intl/index.native.tsx";
import _modDef2521 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr) => {
      let intl3;
      const obj = react;
      const cResult = obj.c(13);
      if (0 === arr.length) {
        let first;
        const _Symbol2 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { subLabel: null, trailing: "Array" };
          ({ variant: "text-xs/medium", color: "text-muted", children: intl3.string(_modDef2521.fOBIZH) });
          const Text = Text_Text.Text;
          intl3 = intl4.intl;
          cResult[0] = obj2;
          first = obj2;
        } else {
          first = cResult[0];
        }
        return first;
      } else {
        let tmp4;
        let tmp8;
        let tmp11;
        let tmp15;
        if (cResult[1] !== arr) {
          let tmp6;
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function s(enabled) {
              return enabled.enabled;
            };
            cResult[3] = fn;
            tmp6 = fn;
          } else {
            tmp6 = cResult[3];
          }
          const someResult = arr.some(tmp6);
          cResult[1] = arr;
          cResult[2] = someResult;
          tmp4 = someResult;
        } else {
          tmp4 = cResult[2];
        }
        if (cResult[4] !== arr.length) {
          const intl = intl4.intl;
          const obj4 = { count: arr.length };
          const formatToPlainStringResult = intl.formatToPlainString(_modDef2521.XfwcpX, obj4);
          cResult[4] = arr.length;
          cResult[5] = formatToPlainStringResult;
          tmp8 = formatToPlainStringResult;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] !== tmp4) {
          let stringResult;
          const intl2 = intl4.intl;
          const string = intl2.string;
          const tmp13 = _modDef2521;
          if (tmp4) {
            stringResult = string(tmp13["8vDHRq"]);
          } else {
            stringResult = string(tmp13["4z9fN+"]);
          }
          cResult[6] = tmp4;
          cResult[7] = stringResult;
          tmp11 = stringResult;
        } else {
          tmp11 = cResult[7];
        }
        if (cResult[8] !== tmp11) {
          const tmp17 = jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: tmp11 });
          cResult[8] = tmp11;
          cResult[9] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[9];
        }
        if (cResult[10] === tmp8) {
          let tmp18;
          if (cResult[11] === tmp15) {
            tmp18 = cResult[12];
          }
          return tmp18;
        }
        const obj6 = { subLabel: tmp8, trailing: tmp15 };
        cResult[10] = tmp8;
        cResult[11] = tmp15;
        cResult[12] = obj6;
        tmp18 = obj6;
      }
    }
  : (arr) => {
      let intl;
      let intl2;
      let obj5;
      if (0 === arr.length) {
        const obj2 = { subLabel: null, trailing: "Array" };
        ({ variant: "text-xs/medium", color: "text-muted", children: intl.string(_modDef2521.fOBIZH) });
        const Text = Text_Text.Text;
        intl = intl4.intl;
        return obj2;
      } else {
        const obj4 = { subLabel: intl2.formatToPlainString(_modDef2521.XfwcpX, obj5), trailing: null };
        const someResult = arr.some((enabled) => enabled.enabled);
        intl2 = intl4.intl;
        obj5 = { count: arr.length };
        const Text2 = Text_Text.Text;
        const intl3 = intl4.intl;
        const string = intl3.string;
        const tmp11 = _modDef2521;
        if (someResult) {
          let stringResult = string(tmp11["8vDHRq"]);
        } else {
          stringResult = string(tmp11["4z9fN+"]);
        }
        return obj4;
      }
    };
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx");

export default tmp2;
