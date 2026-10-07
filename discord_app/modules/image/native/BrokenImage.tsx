// discord_app/modules/image/native/BrokenImage.tsx
import c from "../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../_runtime/08169_inlineStyles.js";
import noop from "../../../../_runtime/metro/00019__.js";

const inlineStylesDefault = inlineStyles;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/image/native/BrokenImage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = jsx(inlineStyles.Path, {
          d: "M21 5v6.59l-3-3-4 4-4-4-4 4-3-3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Zm-3 6.42 3 3V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6.58l3 3 4-4 4 4 4-4Z",
        });
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const size = { width: 24, height: 24, fill: "hsl(217, 7.6%, 33.5%)" };
        const merged = Object.assign(arg0);
        size.children = first;
        const tmp14 = jsx(inlineStylesDefault, { width: 24, height: 24, fill: "hsl(217, 7.6%, 33.5%)" });
        cResult[1] = arg0;
        cResult[2] = tmp14;
        let tmp7 = tmp14;
      } else {
        tmp7 = cResult[2];
      }
      return tmp7;
    }
  : (arg0) => {
      const size = { width: 24, height: 24, fill: "hsl(217, 7.6%, 33.5%)" };
      const merged = Object.assign(arg0);
      size.children = jsx(inlineStyles.Path, {
        d: "M21 5v6.59l-3-3-4 4-4-4-4 4-3-3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Zm-3 6.42 3 3V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6.58l3 3 4-4 4 4 4-4Z",
      });
      return jsx(inlineStylesDefault, { width: 24, height: 24, fill: "hsl(217, 7.6%, 33.5%)" });
    };
