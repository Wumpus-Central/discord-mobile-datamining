// discord_app/modules/image/native/BrokenImage.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import inlineStyles from "../../../../_runtime/08136_inlineStyles.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const inlineStylesDefault = inlineStyles;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = jsx(inlineStyles.Path, {
          d: "M21 5v6.59l-3-3-4 4-4-4-4 4-3-3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Zm-3 6.42 3 3V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6.58l3 3 4-4 4 4 4-4Z",
        });
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        inlineStylesDefault;
        const merged = Object.assign(arg0);
        const tmp14 = (
          <tmp10 width={24} height={24} fill="hsl(217, 7.6%, 33.5%)">
            {first}
          </tmp10>
        );
        cResult[1] = arg0;
        cResult[2] = tmp14;
        tmp7 = tmp14;
      } else {
        tmp7 = cResult[2];
      }
      return tmp7;
    }
  : (arg0) => {
      inlineStylesDefault;
      const merged = Object.assign(arg0);
      return (
        <tmp width={24} height={24} fill="hsl(217, 7.6%, 33.5%)">
          {jsx(inlineStyles.Path, {
            d: "M21 5v6.59l-3-3-4 4-4-4-4 4-3-3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Zm-3 6.42 3 3V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6.58l3 3 4-4 4 4 4-4Z",
          })}
        </tmp>
      );
    };
const result = size.fileFinishedImporting("modules/image/native/BrokenImage.tsx");

export default tmp3;
