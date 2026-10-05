// discord_app/modules/conjure/chat/useConjureDraftHasText.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ConjureComposerDraftStore from "ConjureComposerDraftStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp2;
      let tmp4;
      let tmp5;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(8);
      if (cResult[0] !== arg0) {
        const fn = function n() {
          const str = ConjureComposerDraftStore.getDraft(closure_0);
          return "" !== str.trim();
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      [tmp4, tmp5] = react.useState(tmp2);
      _slicedToArray(react.useState(tmp2), 2);
      const tmp8 = _slicedToArray(react.useState(arg0), 2)[0] !== arg0;
      if (cResult[2] === tmp4) {
        if (cResult[3] === arg0) {
          let tmp9;
          let tmp14;
          if (cResult[4] === tmp8) {
            tmp9 = cResult[5];
          }
          if (tmp8) {
            tmp7(arg0);
            tmp5(tmp9);
          }
          if (cResult[6] !== tmp9) {
            const items = [tmp9, tmp5];
            cResult[6] = tmp9;
            cResult[7] = items;
            tmp14 = items;
          } else {
            tmp14 = cResult[7];
          }
          return tmp14;
        }
      }
      let tmp10 = tmp4;
      if (tmp8) {
        let str = ConjureComposerDraftStore.getDraft(arg0);
        tmp10 = "" !== str.trim();
      }
      cResult[2] = tmp4;
      cResult[3] = arg0;
      cResult[4] = tmp8;
      cResult[5] = tmp10;
      tmp9 = tmp10;
    }
  : (arg0) => {
      let tmp2;
      let tmp3;
      const f126216 = () => {
        const str = ConjureComposerDraftStore.getDraft(closure_0);
        return "" !== str.trim();
      };
      let closure_0 = arg0;
      [tmp2, tmp3] = react.useState(f126216);
      _slicedToArray(react.useState(f126216), 2);
      const tmp4 = _slicedToArray(react.useState(arg0), 2);
      const tmp5 = tmp4[1];
      if (tmp4[0] !== arg0) {
        let str = ConjureComposerDraftStore.getDraft(arg0);
        tmp2 = "" !== str.trim();
      }
      if (tmp4[0] !== arg0) {
        tmp5(arg0);
        tmp3(tmp2);
      }
      const items = [tmp2, tmp3];
      return items;
    };
const result = size.fileFinishedImporting("modules/conjure/chat/useConjureDraftHasText.tsx");

export default tmp2;
